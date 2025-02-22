// app/(auth)/register/page.tsx
import { AuthForm } from '../AuthForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AuthForm />
    </div>
  );
}