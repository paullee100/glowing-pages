export const authConfig = {
    pages: {
        signIn: "glowing-pages/login",
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({ session, token }: any) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
        },

        authorized({ auth, request }: any) {
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

            // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
            if (isOnAdminPanel && !user?.isAdmin) {
                return false;
            }

            // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
            if (isOnBlogPage && !user) {
                return false;
            }

            // ONLY AUTHENTICATED USERS CAN REACH THE LOGIN PAGE
            if (isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl));
            }
            
            return true;
        },
    },
};