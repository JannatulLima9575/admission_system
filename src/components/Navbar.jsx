"use client";

export default function Navbar() {
  return (
    <nav className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-xl font-bold text-blue-600">
          Campus Admission
        </h1>

        <div className="hidden md:flex gap-6 items-center">
          <a href="/">Home</a>
          <a href="/programs">Programs</a>
          <a href="/admission">Admission</a>
          <a href="/notice">Notice</a>
          <a href="/result">Result</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>

          <a
            href="/apply"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}