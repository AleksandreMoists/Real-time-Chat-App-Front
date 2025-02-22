import { z } from "zod";

export type AuthMode = "login" | "register"

export interface AuthFormData {
    email: string;
    password: string;
    username?: string;
}

export const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at elast 6 characters")
})

// types/auth.ts
export const registerSchema = loginSchema.extend({
    username: z.string().min(3, "Username must be at least 3 characters")
  }).refine(data => data.username?.trim(), {
    message: "Username is required",
    path: ["username"]
  })
