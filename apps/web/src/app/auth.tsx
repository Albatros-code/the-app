import { signIn, signOut, auth, handlers } from "@/auth"
import react from 'react'
import { Button } from "@repo/ui/button";

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

export const AuthHome = async () => {
    const session = await auth()

    return (
        !session ? <SignIn /> : <><span>{session.user?.name}</span><SignOut /></>
    )
}