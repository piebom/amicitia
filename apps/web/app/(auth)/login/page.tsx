import { Metadata } from "next"
import Link from "next/link"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"

import { cn } from "@web/lib/utils"
import { buttonVariants } from "@web/components/ui/button"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@web/components/ui/card"
import { UserAuthForm } from "@web/components/user-auth-form"

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your account",
}

export default function LoginPage() {
    return (
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <Card className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px] lg:w-[450px]">
        <CardHeader className="pb-0">
        <div className="flex flex-col space-y-2 text-center items-center">
          <Image src="/Logo.png" width={512} height={512} alt="Logo" className="w-[35px] h-[35px]"/>
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to sign in to your account
          </p>
        </div>
        </CardHeader>
        <CardContent className="py-0">
        <UserAuthForm />
        </CardContent>
        <CardFooter>
        <p className="px-8 text-center text-sm text-muted-foreground w-full">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
        </CardFooter>
      </Card>
    </div>

  )
}