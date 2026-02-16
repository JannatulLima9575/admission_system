export default function Programs() {
  const programs = ["CSE", "BBA", "EEE", "English", "Civil"];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Programs</h2>

        <div className="grid md:grid-cols-5 gap-6">
          {programs.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
              <h3 className="text-lg font-semibold">{p}</h3>
              <button className="mt-4 text-blue-600">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
