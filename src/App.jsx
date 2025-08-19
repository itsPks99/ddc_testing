import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Menu from './components/Menu/menu';
import About from "./pages/About/about";
import Home from "./pages/Home/home";
import NewFooter from "./components/Footer1/newFooter";
import DynamicPages from "./pages/DynamicPages/dynamicPages";
import CaseStudy1 from "./pages/Cases/CaseStudy1";
import ContactUs from "./pages/Contact/contactUs";
import ShopifyLandingPage from "./pages/LandingPageForAdd/ShopifyLandingPage";
import Shopify from "./pages/LandingPageForAdd_2/Shopify"; 
import usePageTracking from "./hooks/usePageTracking";
import TopToBottum from "./components/TopToBottum/BackToTop"
import Branding from "./pages/Services/Branding/branding"; 
import PerformanceMarketing from "./pages/Services/PerformanceMarketing/performance-marketing"; 
import Photography from "./pages/Services/Photography/photography"; 
import SocialMedia from "./pages/Services/SocialMedia/social-media"; 
import WebappDevelopment from "./pages/Services/WebAppDevelopment/web-app-development"; 
import PrivacyPolicy from "./pages/PrivacyPolicy/privacy-policy"; 
import TermsOfService from "./pages/TermsofService/terms-of-service";
import Portfolio from "./pages/Portfolio/portfolio";


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  usePageTracking(); // Custom hook for page tracking
  const hideLayout = location.pathname === "/shopify-landing-page" || location.pathname === "/shopify" ;

  return (
    <>
      {!hideLayout && <Menu />}
      {!hideLayout && <TopToBottum />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dynamic-pages" element={<DynamicPages />} />
        <Route path="/case-study-1" element={<CaseStudy1 />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/shopify-landing-page" element={<ShopifyLandingPage />} />
        <Route path="/shopify" element={<Shopify />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/services/photography" element={<Photography />} />
        <Route path="/services/social-media" element={<SocialMedia />} />
        <Route path="/services/webapp-development" element={<WebappDevelopment />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-services" element={<TermsOfService />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Add other routes as needed */}
      </Routes>

      {!hideLayout && <NewFooter />}
    </>
  );
}

export default App;
