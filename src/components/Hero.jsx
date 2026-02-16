
export default function Hero() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Start Your Academic Journey With Us
          </h1>

          <p className="mt-4 text-gray-600">
            Apply online easily, track your admission status and join our campus.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Apply Now
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg">
              Download Prospectus
            </button>
          </div>
        </div>

        <img
          src="/campus.jpg"
          width={500}
          height={400}
          alt="campus"
          className="rounded-xl"
        />
      </div>
    </section>
  );
}
