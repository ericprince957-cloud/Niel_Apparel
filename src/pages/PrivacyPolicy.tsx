import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-white" id="main-content">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Home
        </Link>

        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-black mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: January 2026</p>
        <div className="w-16 h-0.5 bg-gold mb-8" aria-hidden="true"></div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">1. Introduction</h2>
            <p>Welcome to Niel's Apparel ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.</p>
            <p>This policy complies with the Nigeria Data Protection Regulation (NDPR) and the General Data Protection Regulation (GDPR) where applicable.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">2. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Personal Information:</strong> Name, email address, phone number when you fill out our contact form or place an order via WhatsApp.</li>
              <li><strong>Order Information:</strong> Delivery address, garment measurements, and preferences when you place a custom order.</li>
              <li><strong>Communication Data:</strong> Messages sent through our contact form or WhatsApp.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and device information collected automatically through cookies.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>To process and fulfill your custom clothing orders</li>
              <li>To communicate with you about your orders and inquiries</li>
              <li>To respond to your messages and customer service requests</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">4. Data Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>With delivery partners to fulfill your orders</li>
              <li>When required by law or government authorities</li>
              <li>To protect our rights and safety</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">5. Data Retention</h2>
            <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Order information is kept for 2 years for warranty purposes.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">6. Your Rights</h2>
            <p>Under GDPR and NDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Access your personal data that we hold</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data ("right to be forgotten")</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at info@nielsapparel.com.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">7. Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">8. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
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
