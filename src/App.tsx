import { ConfigProvider } from './context/ConfigContext';
import { FloralGateIntro } from './components/intro/FloralGateIntro';
import { ButterflyCanvasBg } from './components/fx/ButterflyCanvasBg';
import { FloatingHUD } from './components/layout/FloatingHUD';
import { BouncingMascot } from './components/common/BouncingMascot';
import { HeroSection } from './components/sections/HeroSection';
import { InvitationSection } from './components/sections/InvitationSection';
import { InteractiveSwipeReel } from './components/sections/InteractiveSwipeReel';
import { VenueSection } from './components/sections/VenueSection';
import { StorySection } from './components/sections/StorySection';
import { GallerySection } from './components/sections/GallerySection';
import { RSVPSection } from './components/sections/RSVPSection';
import { ThankYouSection } from './components/sections/ThankYouSection';
import { Footer } from './components/layout/Footer';
import { LightboxModal } from './components/modals/LightboxModal';
import { LinkGeneratorModal } from './components/modals/LinkGeneratorModal';
import { CustomizerModal } from './components/modals/CustomizerModal';

function MainApp() {
  return (
    <div className="relative min-h-screen bg-poetic-bg text-poetic-text overflow-x-hidden selection:bg-rose-200 selection:text-rose-900">
      {/* Intro Floral Door Opening Animation with User Interaction Trigger */}
      <FloralGateIntro />

      {/* Gentle Fluttering Butterflies & Falling Rose Petals Canvas */}
      <ButterflyCanvasBg />

      {/* Aesthetic Floating Audio Player & Controls HUD */}
      <FloatingHUD />

      {/* Interactive Gentle Bouncing Blossom Companion */}
      <BouncingMascot />

      {/* Main Poetic Wedding / Graduation Invitation Layout */}
      <main className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section 1: Hero Banner with French Arched Floral Frame */}
        <HeroSection />

        {/* Section 2: Invitation, Chrono Countdown & Blooming Calendar */}
        <InvitationSection />

        {/* Section 3: Interactive 3D Touch/Swipe Photo Album */}
        <InteractiveSwipeReel />

        {/* Section 4: Romantic Venue & Satellite Map */}
        <VenueSection />

        {/* Section 5: Poetic Monologue / Love Letter Diary */}
        <StorySection />

        {/* Section 6: Photo Archives & Interactive Lightbox */}
        <GallerySection />

        {/* Section 7: Sweet RSVP & Guestbook */}
        <RSVPSection />

        {/* Section 8: Sweet Gratitude / Thank You */}
        <ThankYouSection />

        {/* Footer */}
        <Footer />
      </main>

      {/* Interactive Modals */}
      <LightboxModal />
      <LinkGeneratorModal />
      <CustomizerModal />
    </div>
  );
}

export default function App() {
  return (
    <ConfigProvider>
      <MainApp />
    </ConfigProvider>
  );
}
