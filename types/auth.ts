import { z } from "zod";

export type AuthMode = "login" | "register"

export interface AuthFormData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at elast 6 characters")
})

// types/auth.ts
export const registerSchema = loginSchema.extend({
  firstName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .trim(),
  lastName: z
    .string()
    .min(3, "Last name must be at least 3 characters")
    .trim(),
});
  


