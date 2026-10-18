import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import ProductShowcase from './components/ProductShowcase';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CookiePolicy from './pages/CookiePolicy';
import RefundPolicy from './pages/RefundPolicy';

/**
 * Niel's Apparel - Premium Custom African & Urban Wear
 * Main Application Component
 * 
 * Features:
 * - Mobile-first responsive design
 * - WCAG 2.1 AA accessibility compliance
 * - GDPR/NDPR compliant cookie consent
 * - WhatsApp integration for orders
 * - Legal pages for full compliance
 */
function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <FeaturedCollections />
        <ProductShowcase />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}

function LegalPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      {children}
      <Footer />
      <CookieConsent />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<LegalPageLayout><PrivacyPolicy /></LegalPageLayout>} />
        <Route path="/terms" element={<LegalPageLayout><TermsConditions /></LegalPageLayout>} />
        <Route path="/cookie-policy" element={<LegalPageLayout><CookiePolicy /></LegalPageLayout>} />
        <Route path="/refund-policy" element={<LegalPageLayout><RefundPolicy /></LegalPageLayout>} />
      </Routes>
    </HashRouter>
  );
}
