import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsConditions() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-white" id="main-content">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Home
        </Link>

        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-black mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: January 2026</p>
        <div className="w-16 h-0.5 bg-gold mb-8" aria-hidden="true"></div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using the Niel's Apparel website ("Website"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Website.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">2. About Our Services</h2>
            <p>Niel's Apparel provides custom tailoring and fashion design services. All products displayed on our Website are examples of our work and can be customized to your specifications. Orders are placed via WhatsApp or our contact form.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">3. Orders & Payment</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>All orders are subject to availability and confirmation.</li>
              <li>Prices are quoted in Nigerian Naira (₦) and are subject to change without notice.</li>
              <li>A deposit of 50% is required before production begins on custom orders.</li>
              <li>Full payment is due before delivery of completed garments.</li>
              <li>Payment methods include bank transfer and approved mobile payment options.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">4. Custom Orders</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Custom orders require accurate body measurements provided by the customer.</li>
              <li>Production time varies between 7-21 business days depending on complexity.</li>
              <li>We reserve the right to decline orders that we cannot fulfill to our quality standards.</li>
              <li>Color representation may vary slightly due to fabric availability and screen settings.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">5. Intellectual Property</h2>
            <p>All content on this Website, including but not limited to designs, images, text, graphics, logos, and their arrangement, is the intellectual property of Niel's Apparel and is protected by Nigerian and international copyright laws.</p>
            <p className="mt-3">You may not reproduce, distribute, modify, or create derivative works from any content on this Website without our express written permission.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">6. User Conduct</h2>
            <p>When using our Website, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Use the Website for any unlawful purpose</li>
              <li>Submit false or misleading information</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the Website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">7. Limitation of Liability</h2>
            <p>Niel's Apparel shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our Website or services. Our total liability shall not exceed the amount paid by you for the specific order in question.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">8. Governing Law</h2>
            <p>These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved in the courts of competent jurisdiction in Nigeria.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">9. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this Website. Your continued use of the Website constitutes acceptance of the modified Terms.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">10. Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
            <ul className="list-none mt-3 space-y-1">
              <li>Email: info@nielsapparel.com</li>
              <li>WhatsApp: +234 705 265 6722</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
