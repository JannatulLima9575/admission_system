"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-xl font-bold text-blue-600">
          Campus Admission
        </h1>

        <div className="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/admission">Admission</Link>
          <Link href="/notice">Notice</Link>
          <Link href="/result">Result</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/apply"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}