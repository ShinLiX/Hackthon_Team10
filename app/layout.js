import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="w-screen min-h-screen">
          <nav className="pl-4 bg-white h-16 flex w-full justify-between items-center text-black">
            <h1 className="font-bold text-2xl">Idea Shed</h1>
            <Link href="/ideas" className="link-style font-bold">
              Ideas
            </Link>
            <Link href="/profile" className="link-style font-bold">
              Profile
            </Link>
            <div className="mr-[30px]">
              <SignedOut>
                <SignInButton className="h-8 m-4 bg-olive border boder-black hover:bg-olive text-black font-bold px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </nav>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
