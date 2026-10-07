import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-700">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-500">Last updated: January 1, 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-gray-600">
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-gray-900">1. Introduction</h2>
              <p>
                At iiiQBets, we value your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you use our
                ERP platform and related services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-gray-900">2. Information We Collect</h2>
              <p>
                We may collect personal information such as your name, email address,
                phone number, company details, and usage data when you interact with our
                services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-gray-900">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, operate, and improve our
                services, communicate with you, and comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-gray-900">4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data.
                However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-gray-900">5. Third-Party Services</h2>
              <p>
                We may share your information with trusted third-party service providers
                who assist us in operating our platform, subject to confidentiality
                obligations.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-gray-900">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal
                information. To exercise these rights, please contact us.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-gray-900">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
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