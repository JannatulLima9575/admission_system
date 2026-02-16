export default function AdmissionSteps() {
  const steps = [
    "Register Account",
    "Fill Application Form",
    "Pay Application Fee",
    "Download Admit Card",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Admission Process</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <div className="text-3xl font-bold text-blue-600">{i + 1}</div>
              <p className="mt-2">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
