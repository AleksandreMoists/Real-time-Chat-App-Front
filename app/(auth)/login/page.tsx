// app/(auth)/login/page.tsx
import { AuthForm } from "../AuthForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <AuthForm />
    </div>
  );
}