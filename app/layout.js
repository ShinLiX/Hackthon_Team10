import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="w-screen">
          <nav className="pl-4 bg-slate-100 h-16 flex w-full justify-start">
            <SignedOut>
              <SignInButton className="h-8 m-4 bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </nav>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
