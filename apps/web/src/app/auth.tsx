import { signIn, signOut, auth, handlers } from "@/auth"
import { Button } from "@repo/ui/button";
import React from "react";

function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("keycloak")
            }}
        >
            <Button variant="default" type="submit" >Signin</Button>
        </form>
    )
}

function SignOut() {
    return (
        <form
            action={async () => {
                "use server"
                await signOut()
            }}
        >
            <Button variant="outline" type="submit" >SignOut</Button>
        </form>
    )
}

export const AuthHome = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth()

    return (
        !session ? <SignIn /> :
            <div className="flex flex-col">
                <span>{session.user?.name}</span>
                {children}
                <SignOut />
            </div>
    )
}