import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-white" id="main-content">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Home
        </Link>

        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-black mb-4">
          Cookie Policy
        </h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: January 2026</p>
        <div className="w-16 h-0.5 bg-gold mb-8" aria-hidden="true"></div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">1. What Are Cookies</h2>
            <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide useful information to website owners.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">2. How We Use Cookies</h2>
            <p>Niel's Apparel uses cookies for the following purposes:</p>

            <h3 className="text-black font-medium mt-4 mb-2">Essential Cookies</h3>
            <p>These cookies are necessary for the website to function properly. They include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Cookie Consent Preference:</strong> Stores your choice to accept or decline cookies (localStorage key: "cookie-consent"). This cookie is set when you interact with our cookie banner.</li>
            </ul>

            <h3 className="text-black font-medium mt-4 mb-2">Functional Cookies</h3>
            <p>These cookies enhance your experience on our Website:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Session Management:</strong> Maintains your browsing session.</li>
              <li><strong>Preferences:</strong> Remember your display preferences.</li>
            </ul>

            <h3 className="text-black font-medium mt-4 mb-2">Analytics Cookies (Optional)</h3>
            <p>If you accept cookies, we may use analytics services to understand how visitors interact with our Website. This helps us improve our services. These are only activated with your explicit consent.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">3. Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mt-3">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-black font-medium">Name</th>
                    <th className="text-left py-3 px-4 text-black font-medium">Purpose</th>
                    <th className="text-left py-3 px-4 text-black font-medium">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">cookie-consent</td>
                    <td className="py-3 px-4">Stores your cookie preference</td>
                    <td className="py-3 px-4">1 year</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">session_id</td>
                    <td className="py-3 px-4">Maintains user session</td>
                    <td className="py-3 px-4">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">4. Managing Cookies</h2>
            <p>You can control and manage cookies in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Cookie Banner:</strong> Use our cookie banner to accept or decline non-essential cookies.</li>
              <li><strong>Browser Settings:</strong> You can set your browser to refuse cookies or to alert you when cookies are being sent.</li>
              <li><strong>LocalStorage:</strong> You can clear your browser's local storage to reset your cookie preferences.</li>
            </ul>
            <p className="mt-3">Please note that disabling cookies may affect the functionality of this Website.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">5. Third-Party Cookies</h2>
            <p>We do not currently use third-party advertising cookies. If we implement third-party services in the future (such as analytics), we will update this policy and seek your consent where required.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">6. Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we make changes, we will update the "Last updated" date at the top of this page.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-4">7. Contact Us</h2>
            <p>If you have questions about our use of cookies, please contact us:</p>
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
