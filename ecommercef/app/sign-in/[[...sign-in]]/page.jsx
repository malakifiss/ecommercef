import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn
fallbackRedirectUrl="/products"
      redirectUrl="/products"
      afterSignInUrl="/products"
      afterSignUpUrl="/products"
    />
  );
}
