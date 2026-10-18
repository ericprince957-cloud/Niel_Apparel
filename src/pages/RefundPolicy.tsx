import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-white" id="main-content">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Home
        </Link>

        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-black mb-4">
          Refund Policy
        </h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: January 2026</p>
        <div className="w-16 h-0.5 bg-gold mb-8" aria-hidden="true"></div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">1. General Policy</h2>
            <p>At Niel's Apparel, we take pride in creating high-quality custom garments. Due to the bespoke nature of our products, our refund policy differs from standard retail. Please read this policy carefully before placing an order.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">2. Custom-Made Orders</h2>
            <div className="bg-red-50 border border-red-100 rounded-sm p-4 md:p-6 mt-4">
              <p className="text-red-800 font-medium">
                <strong>Important:</strong> Due to the custom nature of our products, we do not offer refunds on completed custom orders unless the garment is defective or significantly differs from the agreed specifications.
              </p>
            </div>
            <p className="mt-4">Custom-made garments are created specifically for you based on your measurements and design preferences. As such, they cannot be resold and are non-refundable once production has begun.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">3. When Refunds May Apply</h2>
            <p>Refunds or replacements may be considered in the following situations:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Defective Products:</strong> If the garment has manufacturing defects (e.g., torn seams, faulty zippers, color bleeding) that were not present at the time of delivery.</li>
              <li><strong>Wrong Item Delivered:</strong> If you receive a completely different item than what was ordered.</li>
              <li><strong>Significant Deviation:</strong> If the finished garment significantly differs from the agreed design, fabric, or specifications documented in your order confirmation.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">4. When Refunds Do Not Apply</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Change of mind after order confirmation</li>
              <li>Incorrect measurements provided by the customer</li>
              <li>Minor variations in color due to fabric batch differences</li>
              <li>Normal wear and tear after delivery</li>
              <li>Damage caused by improper care or alterations by third parties</li>
              <li>Slight fitting differences (within 1-inch tolerance of provided measurements)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">5. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Before Production Begins:</strong> Full refund of deposit minus a 10% administrative fee.</li>
              <li><strong>During Production:</strong> 50% of deposit is non-refundable to cover materials and labor already committed.</li>
              <li><strong>After Completion:</strong> No refunds available. However, we will work with you on alterations if needed.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">6. Alterations & Adjustments</h2>
            <p>If you are not completely satisfied with the fit of your garment:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>We offer <strong>one free alteration</strong> within 14 days of delivery for fit issues.</li>
              <li>Additional alterations will be charged at a reasonable fee.</li>
              <li>Alterations must be requested within 14 days of receiving your garment.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">7. How to Request a Refund or Return</h2>
            <p>To request a refund or report a defect:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-3">
              <li>Contact us within 48 hours of receiving your garment via WhatsApp or email.</li>
              <li>Provide your order number and photos of the issue.</li>
              <li>Our team will review your request within 2-3 business days.</li>
              <li>If approved, we will arrange for return shipping (at our cost for defects) and process your refund.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">8. Refund Processing</h2>
            <p>Approved refunds will be processed to the original payment method within 7-14 business days. Bank transfer refunds may take additional time depending on your bank.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">9. Contact Us</h2>
            <p>For any questions about our refund policy or to report an issue:</p>
            <ul className="list-none mt-3 space-y-1">
              <li>Email: info@nielsapparel.com</li>
              <li>WhatsApp: +234 705 265 6722</li>
              <li>Response Time: Within 24 hours during business days</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
