export default function AdmissionInfo() {
  const items = [
    { title: "Available Programs", desc: "20+ Departments Open" },
    { title: "Admission Deadline", desc: "30 September 2026" },
    { title: "Application Fee", desc: "500 BDT" },
    { title: "Scholarship", desc: "Merit Based" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div key={i} className="p-6 shadow-md rounded-xl text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
