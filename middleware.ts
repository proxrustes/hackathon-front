export { default } from "next-auth/middleware";

export const config = { matcher: ["/profile-page", "/protected/:path*"] };
