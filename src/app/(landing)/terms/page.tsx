export default function Terms() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#393939] mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: January 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#393939] mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-600">
                By accessing and using Quantract AI&apos;s website and services, you
                accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#393939] mb-4">
                Services
              </h2>
              <p className="text-gray-600">
                Quantract AI provides artificial intelligence consulting,
                machine learning solutions, process automation, and related
                technology services as described on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#393939] mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-600">
                All content, trademarks, and intellectual property on this
                website are owned by Quantract AI and are protected by
                applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#393939] mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600">
                Quantract AI shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your
                use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#393939] mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600">
                For questions about these Terms of Service, please contact us at{" "}
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
