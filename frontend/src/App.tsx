import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Hero } from './components/landing/Hero';
import { Features } from './components/landing/Features';
import { Timeline } from './components/landing/Timeline';
import { PrizePool } from './components/landing/PrizePool';
import { SponsorWall } from './components/landing/SponsorWall';
import { Testimonials } from './components/landing/Testimonials';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ExplorationHub from './pages/ExplorationHub';
import { HackathonProvider } from './context/HackathonContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('ca-theme');
    return (saved as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
    localStorage.setItem('ca-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <Router>
      <HackathonProvider>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-background-custom text-foreground-custom antialiased selection:bg-primary-custom/30 transition-colors duration-300">
              <nav className="fixed top-0 w-full z-[100] border-b border-border-custom bg-background-custom/50 backdrop-blur-md">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                  <Link to="/" className="text-2xl font-bold tracking-tighter text-gradient flex items-center gap-2">
                    <span className="w-8 h-8 bg-accent-custom/20 rounded-lg flex items-center justify-center text-accent-custom border border-accent-custom/20">CA</span>
                    CODEARENA
                  </Link>

                  {/* Desktop Nav */}
                  <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground-custom/70">
                    <Link to="/explore" className="hover:text-primary-custom transition-colors">Explore</Link>
                    <a href="#features" className="hover:text-primary-custom transition-colors">Features</a>
                    <a href="#timeline" className="hover:text-primary-custom transition-colors">Timeline</a>
                  </div>

                  <div className="hidden md:flex items-center gap-4">
                    <button
                      onClick={toggleTheme}
                      className="p-2 rounded-lg hover:bg-foreground-custom/5 transition-colors text-foreground-custom/70"
                      title="Toggle Theme"
                    >
                      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <Link to="/login" className="px-4 py-2 rounded-lg text-sm font-medium text-foreground-custom/70 hover:text-foreground-custom transition-colors">
                      Login
                    </Link>
                    <Link to="/register" className="btn-primary">
                      Join Bharat's Best
                    </Link>
                  </div>

                  {/* Mobile Menu Toggle */}
                  <div className="flex md:hidden items-center gap-2">
                    <button
                      onClick={toggleTheme}
                      className="p-2 text-foreground-custom/70 hover:text-foreground-custom transition-colors"
                    >
                      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                      className="p-2 text-foreground-custom/70 hover:text-foreground-custom transition-colors"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                  </div>
                </div>

                {/* Mobile Nav Menu */}
                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="md:hidden border-t border-border-custom bg-background-custom backdrop-blur-xl overflow-hidden"
                    >
                      <div className="p-6 flex flex-col gap-6">
                        <div className="flex flex-col gap-4 text-lg font-medium">
                          <Link to="/explore" className="text-foreground-custom/70 hover:text-foreground-custom" onClick={() => setIsMenuOpen(false)}>Explore</Link>
                          <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-foreground-custom/70 hover:text-foreground-custom">Features</a>
                          <a href="#timeline" onClick={() => setIsMenuOpen(false)} className="text-foreground-custom/70 hover:text-foreground-custom">Timeline</a>
                        </div>
                        <div className="flex flex-col gap-3 pt-6 border-t border-border-custom">
                          <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full py-3 rounded-xl border border-border-custom text-center font-medium">
                            Login
                          </Link>
                          <Link to="/register" onClick={() => setIsMenuOpen(false)} className="btn-primary text-center">
                            Join Now
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>

              <main>
                <Hero />
                <SponsorWall />
                <PrizePool />
                <Features />
                <Timeline />
                <Testimonials />
              </main>

              <footer className="py-20 border-t border-border-custom bg-secondary-custom/20">
                <div className="container mx-auto px-6 text-center">
                  <div className="text-2xl font-bold tracking-tighter text-gradient mb-4 flex items-center justify-center gap-2">
                    <span className="w-8 h-8 bg-accent-custom/20 rounded-lg flex items-center justify-center text-accent-custom border border-accent-custom/20">CA</span>
                    CODEARENA
                  </div>
                  <p className="text-foreground-custom/40 text-sm mb-4">India's Premier National Level Hackathon Infrastructure.</p>
                  <div className="flex items-center justify-center gap-8 text-xs font-bold uppercase tracking-widest text-foreground-custom/20">
                    <span>Digital India</span>
                    <span>Bharat Tech</span>
                    <span>Innovation Hub</span>
                  </div>
                </div>
              </footer>
            </div>
          } />
          <Route path="/explore" element={<ExplorationHub />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </HackathonProvider>
    </Router>
  );
}

export default App;
