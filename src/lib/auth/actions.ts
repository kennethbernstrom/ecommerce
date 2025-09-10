'use server';

import { cookies } from 'next/headers';
import { z } from 'zod';
import { db } from '../db';
import { eq } from 'drizzle-orm';
import { users, accounts, sessions, guests } from '../db/schema/index';
import { randomUUID } from 'crypto';

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

async function betterAuthSignUp(email: string, password: string, name?: string) {
  return { userId: randomUUID() };
}
async function betterAuthSignIn(email: string, password: string) {
  return { userId: randomUUID() };
}
async function betterAuthSignOut(sessionToken: string) {
  return true;
}

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(1).optional(),
});

const guestSessionCookie = 'guest_session';
const authSessionCookie = 'auth_session';

function setCookie(name: string, value: string, days = 7) {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  (cookies() as any).set(name, value, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    expires,
  });
}

function deleteCookie(name: string) {
  (cookies() as any).set(name, '', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    expires: new Date(0),
  });
}

export async function createGuestSession() {
  const cookieStore: any = cookies();
  const existing = cookieStore.get(guestSessionCookie)?.value;
  if (existing) return existing;

  const token = randomUUID();
  const now = new Date();
  const expiresAt = addDays(now, 7);
  await db.insert(guests).values({
    sessionToken: token,
    createdAt: now,
    expiresAt,
  });

  setCookie(guestSessionCookie, token, 7);
  return token;
}

export async function guestSession() {
  const cookieStore: any = cookies();
  const token = cookieStore.get(guestSessionCookie)?.value;
  if (token) return token;
  return createGuestSession();
}

export async function signUp(input: unknown) {
  const { email, password, name } = credentialsSchema.parse(input);

  const authRes = await betterAuthSignUp(email, password, name);

  const userId = authRes.userId;
  const now = new Date();

  await db.insert(users).values({
    id: userId,
    email,
    name,
    createdAt: now,
    updatedAt: now,
  });

  await db.insert(accounts).values({
    userId,
    accountId: email,
    providerId: 'credentials',
    password,
    createdAt: now,
    updatedAt: now,
  });

  const sessionToken = randomUUID();
  const expiresAt = addDays(now, 7);
  await db.insert(sessions).values({
    id: randomUUID(),
    userId,
    token: sessionToken,
    expiresAt,
    createdAt: now,
    updatedAt: now,
  });

  setCookie(authSessionCookie, sessionToken, 7);

  await mergeGuestCartWithUserCart();

  return { userId };
}

export async function signIn(input: unknown) {
  const { email, password } = credentialsSchema.parse(input);

  const authRes = await betterAuthSignIn(email, password);
  const userId = authRes.userId;

  const now = new Date();
  const sessionToken = randomUUID();
  const expiresAt = addDays(now, 7);
  await db.insert(sessions).values({
    id: randomUUID(),
    userId,
    token: sessionToken,
    expiresAt,
    createdAt: now,
    updatedAt: now,
  });

  setCookie(authSessionCookie, sessionToken, 7);

  await mergeGuestCartWithUserCart();

  return { userId };
}

export async function signOut() {
  const cookieStore: any = cookies();
  const token = cookieStore.get(authSessionCookie)?.value;
  if (token) {
    await betterAuthSignOut(token);
    await db.delete(sessions).where(eq(sessions.token, token));
    deleteCookie(authSessionCookie);
  }
  return { success: true };
}

export async function mergeGuestCartWithUserCart() {
  const cookieStore: any = cookies();
  const guestToken = cookieStore.get(guestSessionCookie)?.value;
  if (!guestToken) return;

  await db.delete(guests).where(eq(guests.sessionToken, guestToken));
  deleteCookie(guestSessionCookie);
}
