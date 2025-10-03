import { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { StudentDashboard } from './components/StudentDashboard';
import { IndustryDashboard } from './components/IndustryDashboard';
import { FacultyDashboard } from './components/FacultyDashboard';
import { InternshipPortal } from './components/InternshipPortal';
import { AboutSolution } from './components/AboutSolution';
import { SkillDevelopment } from './components/SkillDevelopment';
import { SmartRecommendations } from './components/SmartRecommendations';
import { DigitalReports } from './components/DigitalReports';
import { Mentorship } from './components/Mentorship';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { Toaster } from 'sonner';

export type UserRole = 'student' | 'industry' | 'faculty' | null;

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'login' | 'register' | 'dashboard' | 'internships' | 'about' | 'skills' | 'recommendations' | 'reports' | 'mentorship' | 'analytics'>('home');
  const [user, setUser] = useState<User | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    
    // Check for saved user session
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setCurrentPage('dashboard');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setCurrentPage('home');
  };

  const renderContent = () => {
    if (currentPage === 'login') {
      return <Login onLogin={handleLogin} onNavigate={setCurrentPage} />;
    }
    
    if (currentPage === 'register') {
      return <Register onRegister={handleLogin} onNavigate={setCurrentPage} />;
    }

    if (currentPage === 'internships') {
      return <InternshipPortal onBack={() => setCurrentPage('home')} />;
    }

    if (currentPage === 'about') {
      return <AboutSolution onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }

    if (currentPage === 'skills') {
      return <SkillDevelopment onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }

    if (currentPage === 'recommendations') {
      return <SmartRecommendations onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }

    if (currentPage === 'reports') {
      return <DigitalReports onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }

    if (currentPage === 'mentorship') {
      return <Mentorship onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }

    if (currentPage === 'analytics') {
      return <AnalyticsDashboard onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }
    
    if (currentPage === 'dashboard' && user) {
      switch (user.role) {
        case 'student':
          return <StudentDashboard user={user} onLogout={handleLogout} theme={theme} toggleTheme={toggleTheme} />;
        case 'industry':
          return <IndustryDashboard user={user} onLogout={handleLogout} theme={theme} toggleTheme={toggleTheme} />;
        case 'faculty':
          return <FacultyDashboard user={user} onLogout={handleLogout} theme={theme} toggleTheme={toggleTheme} />;
        default:
          return <Home onNavigate={setCurrentPage} theme={theme} toggleTheme={toggleTheme} />;
      }
    }
    
    return <Home onNavigate={setCurrentPage} theme={theme} toggleTheme={toggleTheme} />;
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {renderContent()}
      </div>
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;