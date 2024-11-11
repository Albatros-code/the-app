import NextAuth from "next-auth"
import Keycloak from "next-auth/providers/keycloak"

export const { handlers, signIn, signOut, auth } = NextAuth({
    debug: true,
    providers: [Keycloak],
    callbacks: {
        async jwt(args) {
            if (args.account) {
                return {
                    ...args.token,
                    id_token: args.account?.id_token,
                }
            }
            return args.token
        },
    },
    events: {
        async signOut(args) {
            if (!('token' in args)) return
            const token = args.token;
            const id_token = token?.id_token
            const post_logout_redirect_uri = process.env.NEXTAUTH_URL
            const logoutUrl = process.env.AUTH_KEYCLOAK_END_SESSION_ENDPOINT!

            if (
                !id_token ||
                !post_logout_redirect_uri ||
                !process.env.AUTH_KEYCLOAK_END_SESSION_ENDPOINT
            ) {
                throw Error;
            }

            await fetch(logoutUrl, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
                body: `id_token_hint=${id_token}&post_logout_redirect_uri=${post_logout_redirect_uri}`,
            }
            );
        },
    }
})