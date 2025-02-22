'use client'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  AuthMode,
  AuthFormData,
  loginSchema,
  registerSchema
} from "@/types/auth"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export const AuthForm = () => {
  const router = useRouter()
  const [mode, setMode] = useState<AuthMode>("login")

  const form = useForm<AuthFormData>({
    resolver: zodResolver(mode === "login" ? loginSchema : registerSchema),
    defaultValues: {
      email: "",
      password: "",
      username: ""
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    shouldUnregister: true,
  })

  const toggleMode = () => {
    setMode(prev => prev === "login" ? "register" : "login")
    form.reset()
  }

  const onSubmit = async (data: AuthFormData) => {
    try {
      const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/register"
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Authentication failed")

      router.push("/chat")
    } catch (error) {
      console.error('Auth error', error)
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {mode === "login" ? "Sign in" : "Register"}
        </h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">    
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {mode === "register" && (
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                      Username
                    </FormLabel>
                    <FormControl className="mt-2">
                      <Input
                        {...field}
                        className="block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </FormLabel>
                  <FormControl className="mt-2">
                    <Input
                      {...field}
                      className="block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </FormLabel>
                  <FormControl className="mt-2">
                  <Input
                    type="password"
                    {...field}
                    className="block !w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {mode === "login" ? "Sign In" : "Create Account"}
            </Button>

    
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
              {mode === "login" ? (
                <>
                  Don't have an account?{" "}
                  <Button
                    variant="link"
                    onClick={toggleMode}
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Register
                  </Button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Button
                    variant="link"
                    onClick={toggleMode}
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Login
                  </Button>
                </>
              )}
            </p>
        </Form>
      </div>
    </div>
  )
}