import { getSession } from "@auth0/nextjs-auth0";

export default async function Navigation() {
  const session = await getSession();

  return session?.user ? (
    <div>
      <a href="/">Home</a> | {` `}
      <a href="/api/auth/logout">Logout</a> | {` `}
      <a href="/profile-server">Profile</a>
    </div>
  ) : (
    <div>
      <a href="/">Home</a> | {` `}
      <a href="/api/auth/login">Login</a>
    </div>
  );
}
