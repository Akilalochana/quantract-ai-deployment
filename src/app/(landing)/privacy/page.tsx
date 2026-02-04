export default function Privacy() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#393939] mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: January 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#393939] mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-600 mb-4">
                At Quantract AI, we collect information you provide directly to
                us, such as when you:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Fill out our contact forms</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a consultation</li>
                <li>Interact with our website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#393939] mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#393939] mb-4">
                Data Security
              </h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#393939] mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have questions about this Privacy Policy, please contact
                us at{" "}
                <a
                  href="mailto:contact@quantractai.com"
                  className="text-[#f1c40f] hover:text-yellow-400"
                >
                  contact@quantractai.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
