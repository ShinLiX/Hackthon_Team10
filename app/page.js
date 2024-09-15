import Head from 'next/head';
import Link from 'next/link';
import { SignUpButton } from '@clerk/nextjs';
import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream flex flex-col justify-center items-center">
      <Head>
        <title>Idea Shed (YVR)</title>
        <meta
          name="description"
          content="Connect with technical talent to kickstart your tech projects in Vancouver."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <section className="text-center p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome! What would you like to explore?
          </h1>
          <p className="text-gray-700 text-lg mb-4">
            We connect idea-holders with the right technical talent, enabling
            developers to collaborate on projects that align with their skills
            and passions.
          </p>
          <Link
            href="/about"
            className="text-black font-bold py-2 px-4 rounded bg-white border border-black hover:bg-olive transition duration-300">
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
            <Link
              href="/profile"
              className="bg-white shadow-lg rounded-lg p-6 block hover:shadow-xl transition-shadow duration-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Collaborate on Projects &rarr;
                </h3>
                <p>
                  Work together on exciting projects and gain real-world
                  experience and insights.
                </p>
              </div>
            </Link>
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
      </main>
    </div>
  );
}
