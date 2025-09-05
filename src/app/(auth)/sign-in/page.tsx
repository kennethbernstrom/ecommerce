import Link from "next/link";
import SocialProviders from "@/components/SocialProviders";
import AuthForm from "@/components/AuthForm";

export default function SignInPage() {
  return (
    <section>
      <p className="text-center text-[--text-caption] text-dark-700">
        Don’t have an account?{" "}
        <Link href="/sign-up" className="underline font-medium">
          Sign Up
        </Link>
      </p>
      <h1 className="mt-4 text-center text-3xl font-bold">Welcome back</h1>
      <p className="mt-1 text-center text-dark-700">Sign in to continue</p>

      <div className="mt-6">
        <SocialProviders />
      </div>

      <div className="my-6 flex items-center gap-3 text-dark-700">
        <div className="h-px flex-1 bg-light-300" />
        <span className="text-[--text-caption]">Or continue with</span>
        <div className="h-px flex-1 bg-light-300" />
      </div>

      <AuthForm mode="signin" />

      <p className="mt-6 text-center text-[--text-footnote] text-dark-700">
        By signing in, you agree to our <a className="underline" href="#">Terms of Service</a> and{" "}
        <a className="underline" href="#">Privacy Policy</a>.
      </p>
    </section>
  );
}
