import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutUs } from './components/AboutUs';
import { OperationalCapacity } from './components/OperationalCapacity';
import { WorkModel } from './components/WorkModel';
import { Services } from './components/Services';
import { Clients } from './components/Clients';
import { Sectors } from './components/Sectors';
import { ControlTracking } from './components/ControlTracking';
import { Protocols } from './components/Protocols';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="App min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Stats Bar */}
        <StatsBar />

        {/* About Us Section */}
        <AboutUs />

        {/* Operational Capacity Section */}
        <OperationalCapacity />

        {/* Work Model Section */}
        <WorkModel />

        {/* Services Section */}
        <Services />

        {/* Clients Section */}
        <Clients />

        {/* Sectors Section */}
        <Sectors />

        {/* Control & Tracking Section */}
        <ControlTracking />

        {/* Protocols Section */}
        <Protocols />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
