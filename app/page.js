import Head from 'next/head';
import Link from 'next/link';
import { SignUpButton } from '@clerk/nextjs';
import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream flex flex-col justify-center items-center">
      <Head>
        <title>Vancouver Idea Shed</title>
        <meta
          name="description"
          content="Connect with technical talent to kickstart your tech projects in Vancouver."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <section className="text-center p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome to Vancouver Idea Shed
          </h1>
          <p className="text-gray-700 text-lg mb-4">
            Have a brilliant tech idea but need the right people to help bring
            it to life? Discover a community of tech enthusiasts and experts
            ready to jumpstart your project.
          </p>
          <Link
            href="/about"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Learn More
          </Link>
        </section>

        <section className="my-12 text-gray-800">
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
            Why Join Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Connect with Experts &rarr;
              </h3>
              <p>
                Find skilled volunteers who are passionate about turning ideas
                into reality.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Collaborate on Projects &rarr;
              </h3>
              <p>
                Work together on exciting projects and gain real-world
                experience and insights.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Grow Your Network &rarr;
              </h3>
              <p>
                Expand your professional circle and meet like-minded individuals
                in the tech community.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Ready to Get Started?
          </h2>
          <p className="text-gray-700 mb-4">
            Join our platform today and bring your tech ideas to life with the
            help of the Vancouver tech community.
          </p>
          <SignUpButton className="h-8 m-4 bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
        </section>
      </main>
    </div>
  );
}
