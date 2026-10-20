import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { ToastContainer } from './components/common/Toast';
import { CartDrawer } from './components/common/CartDrawer';

// Pages
import { HomePage } from './pages/HomePage';
import { AllPujasPage } from './pages/AllPujasPage';
import { PujaDetailPage } from './pages/PujaDetailPage';
import { BookingWizardPage } from './pages/BookingWizardPage';
import { BookingConfirmationPage } from './pages/BookingConfirmationPage';
import { MyBookingsPage } from './pages/MyBookingsPage';
import { PanditsPage } from './pages/PanditsPage';
import { PanditProfilePage } from './pages/PanditProfilePage';
import { InternationalPage } from './pages/InternationalPage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { AstrologyPage } from './pages/AstrologyPage';
import { PanchangPage } from './pages/PanchangPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPage, TermsPage, CancellationPage } from './pages/PolicyPages';
import { NotFoundPage } from './pages/NotFoundPage';

// Auto scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-ivory text-charcoal-800">
          <Header />
          <ToastContainer />
          <CartDrawer />

          <main className="flex-1">
            <Routes>
              {/* Core Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/pujas" element={<AllPujasPage />} />
              <Route path="/pujas/:id" element={<PujaDetailPage />} />
              
              {/* Complete Booking Wizard Flow */}
              <Route path="/book" element={<BookingWizardPage />} />
              <Route path="/book/:pujaId" element={<BookingWizardPage />} />
              <Route path="/booking-confirmation/:bookingRef" element={<BookingConfirmationPage />} />
              <Route path="/my-bookings" element={<MyBookingsPage />} />

              {/* Pandit Directory & Profiles */}
              <Route path="/pandits" element={<PanditsPage />} />
              <Route path="/pandits/:id" element={<PanditProfilePage />} />

              {/* International Hub */}
              <Route path="/international" element={<InternationalPage />} />

              {/* Ecommerce Samagri Store */}
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />

              {/* Astrology & Panchang */}
              <Route path="/astrology" element={<AstrologyPage />} />
              <Route path="/panchang" element={<PanchangPage />} />

              {/* Blog & Spiritual Guides */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />

              {/* User Account & Demo Auth */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />

              {/* Company & Support */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faqs" element={<FaqPage />} />

              {/* Policies */}
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cancellation" element={<CancellationPage />} />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
