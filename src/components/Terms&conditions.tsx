import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-700">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-gray-500">Last updated: January 1, 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-gray-600">
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              <p>
                By accessing or using iiiQBets services, you agree to be bound by these
                Terms of Service. If you do not agree with any part of these terms,
                please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-gray-900">2. Use of Services</h2>
              <p>
                You agree to use our ERP platform only for lawful purposes and in
                accordance with these Terms. You are responsible for maintaining the
                confidentiality of your account credentials.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-gray-900">3. Intellectual Property</h2>
              <p>
                All content, trademarks, logos, and data on this platform are the
                property of iiiQBets or its licensors and are protected by applicable
                intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-gray-900">4. User Responsibilities</h2>
              <p>
                You agree not to misuse the platform, attempt to gain unauthorized
                access, or interfere with the proper working of the services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-gray-900">5. Limitation of Liability</h2>
              <p>
                iiiQBets shall not be liable for any indirect, incidental, special, or
                consequential damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-gray-900">6. Modifications</h2>
              <p>
                We reserve the right to modify these Terms at any time. Continued use
                of our services after changes constitutes acceptance of the updated
                Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-gray-900">7. Contact Us</h2>
              <p>
                For questions about these Terms, contact us at{' '}
                <a
                  href="mailto:info@iiiqbets.com"
                  className="text-brand-600 hover:text-brand-500"
                >
                  info@iiiqbets.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}