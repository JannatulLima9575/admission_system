export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-bold text-white">Campus Admission</h3>
          <p className="mt-2">Sylhet, Bangladesh</p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li>Programs</li>
            <li>Admission</li>
            <li>Result</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <p>Email: info@campus.com</p>
          <p>Phone: 01700000000</p>
        </div>
      </div>
    </footer>
  );
}
