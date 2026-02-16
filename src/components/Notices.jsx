export default function Notices() {
  const notices = [
    "Admission Circular Published",
    "Exam Date Announced",
    "Admit Card Download Started",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Notices</h2>

        <div className="space-y-4">
          {notices.map((n, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
