
import React, { useState, useEffect } from 'react';
import { Tab } from './types';
import { Home } from './components/Home';
import { Manual } from './components/Manual';
import { PoolSection } from './components/PoolSection';
import { Location } from './components/Location';
import { Tourism } from './components/Tourism';
import { Contact } from './components/Contact';
import { LOGO_URL } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll-spy and header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = Object.values(Tab).map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + 200; 

      for (const section of sections) {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section.id as Tab);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen relative flex flex-col bg-[#FDFBF7]">
      {/* Sticky Top Header */}
      <header className={`fixed top-0 max-w-md w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm h-14' : 'bg-transparent h-20'
      } flex items-center justify-between px-6`}>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection(Tab.HOME)}>
          <span className={`font-serif font-bold text-[#1B365D] transition-all duration-300 ${scrolled ? 'text-sm' : 'text-lg opacity-0'}`}>
            Olas Home
          </span>
        </div>
        {scrolled && (
          <div className="text-[10px] uppercase tracking-widest font-bold text-[#C2A878] animate-in fade-in slide-in-from-right-2">
            Las Velas
          </div>
        )}
      </header>

      {/* Long Scrolling Content */}
      <main className="flex-1 pb-32">
        <section id={Tab.HOME}>
          <Home />
        </section>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C2A878]/30 to-transparent my-4"></div>
        
        <section id={Tab.MANUAL}>
          <Manual />
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C2A878]/30 to-transparent my-4"></div>

        <section id={Tab.POOL}>
          <PoolSection />
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C2A878]/30 to-transparent my-4"></div>

        <section id={Tab.LOCATION}>
          <Location />
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C2A878]/30 to-transparent my-4"></div>

        <section id={Tab.TOURISM}>
          <Tourism />
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C2A878]/30 to-transparent my-4"></div>

        <section id={Tab.CONTACT}>
          <Contact />
        </section>
      </main>

      {/* Luxury Bottom Navigation */}
      <nav className="fixed bottom-6 left-6 right-6 h-16 bg-[#1B365D] text-white rounded-2xl shadow-2xl flex items-center justify-around px-4 z-40">
        <NavItem 
          icon="fa-home" 
          label="Inicio"
          active={activeTab === Tab.HOME} 
          onClick={() => scrollToSection(Tab.HOME)} 
        />
        <NavItem 
          icon="fa-book" 
          label="Manual"
          active={activeTab === Tab.MANUAL} 
          onClick={() => scrollToSection(Tab.MANUAL)} 
        />
        <NavItem 
          icon="fa-swimmer" 
          label="Piscina"
          active={activeTab === Tab.POOL} 
          onClick={() => scrollToSection(Tab.POOL)} 
        />
        <NavItem 
          icon="fa-map-location-dot" 
          label="Mapa"
          active={activeTab === Tab.LOCATION} 
          onClick={() => scrollToSection(Tab.LOCATION)} 
        />
        <NavItem 
          icon="fa-compass" 
          label="Turismo"
          active={activeTab === Tab.TOURISM} 
          onClick={() => scrollToSection(Tab.TOURISM)} 
        />
        <NavItem 
          icon="fa-user-tie" 
          label="Host"
          active={activeTab === Tab.CONTACT} 
          onClick={() => scrollToSection(Tab.CONTACT)} 
        />
      </nav>
    </div>
  );
};

interface NavItemProps {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-12 h-12 flex flex-col items-center justify-center transition-all duration-300 relative ${
      active ? 'text-[#C2A878]' : 'text-white/50'
    }`}
  >
    <i className={`fas ${icon} ${active ? 'text-lg' : 'text-md'} mb-0.5`}></i>
    <span className={`text-[8px] uppercase tracking-tighter transition-opacity ${active ? 'opacity-100 font-bold' : 'opacity-0'}`}>
      {label}
    </span>
    {active && (
      <span className="absolute -bottom-1 w-1 h-1 bg-[#C2A878] rounded-full"></span>
    )}
  </button>
);

export default App;
