import { 
  GraduationCap, 
  Building2, 
  Users, 
  TrendingUp, 
  Award, 
  Briefcase,
  BookOpen,
  Target,
  ArrowRight,
  Moon,
  Sun,
  Menu,
  X,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomeProps {
  onNavigate: (page: 'home' | 'login' | 'register' | 'dashboard' | 'internships' | 'about' | 'skills' | 'recommendations' | 'reports' | 'mentorship' | 'analytics') => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Home({ onNavigate, theme, toggleTheme }: HomeProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-900 dark:text-white font-bold text-xl">Prashiskshan</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Home</a>
              <button onClick={() => onNavigate('about')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">NEP Solution</button>
              <button onClick={() => onNavigate('internships')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Internships</button>
              <a href="#stakeholders" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Stakeholders</a>
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Features</a>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-300"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </Button>
              <Button variant="outline" onClick={() => onNavigate('login')}>
                Login
              </Button>
              <Button onClick={() => onNavigate('register')}>
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-300"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg animate-in slide-in-from-top duration-300">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <button onClick={() => {onNavigate('about'); setMobileMenuOpen(false);}} className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 font-medium text-left w-full">NEP Solution</button>
              <button onClick={() => {onNavigate('internships'); setMobileMenuOpen(false);}} className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 font-medium text-left w-full">Internships</button>
              <a href="#stakeholders" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Stakeholders</a>
              <a href="#features" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full" onClick={() => {onNavigate('login'); setMobileMenuOpen(false);}}>
                  Login
                </Button>
                <Button className="w-full" onClick={() => {onNavigate('register'); setMobileMenuOpen(false);}}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6 animate-in fade-in duration-700">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-700 dark:text-blue-300 font-medium">NEP 2020 Compliant Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-3 duration-700">
                Connecting Students, Colleges & Industry for Skill Development
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
                Prashiskshan bridges the gap between academia and industry, offering students hands-on learning 
                opportunities through internships, workshops, and training programs aligned with National Education Policy 2020.
              </p>

              <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span>500+ Internships</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span>10,000+ Students</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span>200+ Partners</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                <Button size="lg" onClick={() => onNavigate('register')} className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all">
                  Get Started Free <ArrowRight className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate('login')} className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20">
                  Sign In
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbGxhYm9yYXRpb24lMjBtb2Rlcm58ZW58MXx8fHwxNzU5NDA1MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Students collaborating on projects"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
              {/* Floating stats cards */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white">85%</div>
                    <div className="text-gray-500 dark:text-gray-400">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-blue-600 dark:text-blue-400 mb-2">
                <Briefcase className="w-12 h-12 mx-auto" />
              </div>
              <div className="text-gray-900 dark:text-white mb-1">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Internships Posted</div>
            </div>
            
            <div className="text-center">
              <div className="text-purple-600 dark:text-purple-400 mb-2">
                <Users className="w-12 h-12 mx-auto" />
              </div>
              <div className="text-gray-900 dark:text-white mb-1">10,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Students Trained</div>
            </div>
            
            <div className="text-center">
              <div className="text-green-600 dark:text-green-400 mb-2">
                <Building2 className="w-12 h-12 mx-auto" />
              </div>
              <div className="text-gray-900 dark:text-white mb-1">200+</div>
              <div className="text-gray-600 dark:text-gray-400">Industry Partners</div>
            </div>
            
            <div className="text-center">
              <div className="text-orange-600 dark:text-orange-400 mb-2">
                <TrendingUp className="w-12 h-12 mx-auto" />
              </div>
              <div className="text-gray-900 dark:text-white mb-1">85%</div>
              <div className="text-gray-600 dark:text-gray-400">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEP 2020 Problem-Solution Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-red-900/10 dark:via-orange-900/10 dark:to-yellow-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
              <Target className="w-4 h-4 text-red-600 dark:text-red-400" />
              <span className="text-red-700 dark:text-red-300">Critical Challenge</span>
            </div>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Why Internship Systems Fail in Colleges
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Despite NEP 2020's emphasis on experiential learning in Semester 5, most colleges struggle 
              with poor industry tie-ups, fake certificates, lack of monitoring, and students unprepared for internships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-white dark:bg-gray-800 border-red-200 dark:border-red-800">
              <div className="bg-red-100 dark:bg-red-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h4 className="text-gray-900 dark:text-white mb-2">The Problem</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• No industry partnerships</li>
                <li>• Poor planning & late implementation</li>
                <li>• Zero mentorship or monitoring</li>
                <li>• Fake certificates & mills</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-300 dark:border-blue-700">
              <div className="bg-blue-600 dark:bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-gray-900 dark:text-white mb-2">Our Solution</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Student-Industry-College tie-up</li>
                <li>• Digital platform with 7 modules</li>
                <li>• Real-time monitoring & reports</li>
                <li>• 100% NEP 2020 compliant</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 border-green-200 dark:border-green-800">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-gray-900 dark:text-white mb-2">The Impact</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Streamlined internship process</li>
                <li>• Verified opportunities only</li>
                <li>• Faculty tracking dashboards</li>
                <li>• Authentic digital certificates</li>
              </ul>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              onClick={() => onNavigate('about')}
              className="gap-2 bg-blue-600 hover:bg-blue-700"
            >
              Learn About Our NEP 2020 Solution <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-700 dark:text-blue-300">About Platform</span>
              </div>
              <h2 className="text-gray-900 dark:text-white mb-4">
                Student-Industry-College Collaboration
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Prashiskshan is a three-way collaborative platform where students design the app, 
                colleges provide mentorship and academic credit, and industry partners share real 
                internship opportunities. Together, we're solving the internship system failures 
                plaguing Indian higher education.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With NEP 2020 compliance at its core, our platform ensures Semester 5 internships 
                translate into meaningful academic credits while building industry-relevant skills.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">7 Integrated Modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Auto Report Generator</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Real-time Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Verified Opportunities</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1676275773827-f6554c1ef62a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NTkzMDgzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team meeting and collaboration"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To bridge the gap between academic learning and industry requirements through structured 
                internships and training programs.
              </p>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">NEP 2020 Aligned</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fully compliant with National Education Policy 2020, offering credit-based learning 
                and skill development opportunities.
              </p>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 dark:bg-green-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Industry Recognition</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Certificates and experience letters recognized by leading companies and academic 
                institutions across India.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section id="stakeholders" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
              <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-purple-700 dark:text-purple-300">Three-Way Ecosystem</span>
            </div>
            <h2 className="text-gray-900 dark:text-white mb-4">
              For Every Stakeholder
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tailored solutions for students, faculty, and industry partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Students Card */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 dark:bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-4">For Students</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Browse 500+ internship opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Skill readiness assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Digital logbook & report generator</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Earn NEP credits</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                onClick={() => onNavigate('register')}
              >
                Join as Student
              </Button>
            </Card>

            {/* Faculty Card */}
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 dark:bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-4">For Faculty</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span>Student mentoring dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span>Track progress & performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span>Approve internship credits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span>Analytics & insights</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
                onClick={() => onNavigate('register')}
              >
                Join as Faculty
              </Button>
            </Card>

            {/* Industry Card */}
            <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow">
              <div className="bg-green-600 dark:bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-4">For Industry</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Post internship opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Access skilled talent pool</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Track & manage applicants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Build college partnerships</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                onClick={() => onNavigate('register')}
              >
                Join as Industry Partner
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Internship Portal CTA Banner */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4">
              <Briefcase className="w-5 h-5 text-white" />
              <span className="text-white">500+ Live Opportunities</span>
            </div>
            <h2 className="text-white mb-4">
              Explore Our Internship Portal
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Browse through 500+ internships across IT, AI, Cybersecurity, Marketing, and more. 
              Find your perfect match with our AI-powered recommendations and apply in seconds!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-blue-700 dark:hover:bg-white gap-2"
                onClick={() => onNavigate('internships')}
              >
                Browse Internships <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => onNavigate('register')}
              >
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-300">Feature-Rich Platform</span>
            </div>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need for successful industry-academia collaboration
            </p>
          </div>

          {/* Feature showcase with images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzU5MzcxMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Developer workspace"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white mb-2">Hands-on Learning Experience</h3>
                  <p className="text-gray-200">Work on real industry projects and build your portfolio</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1645363308298-3a949c8bfd86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5JTIwbGVhcm5pbmd8ZW58MXx8fHwxNzU5MzM2NTY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Education technology"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white mb-2">Smart Learning Modules</h3>
                  <p className="text-gray-200">Prepare for internships with curated learning paths</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features(onNavigate).map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
                onClick={() => feature.onClick && feature.onClick()}
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-blue-600 dark:text-blue-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full gap-2 mt-2" 
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to Transform Your Learning Journey?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of students, faculty, and industry partners already using Prashiskshan
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-blue-700 dark:hover:bg-white gap-2"
            onClick={() => onNavigate('register')}
          >
            Get Started Free <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <span className="text-white">Prashiskshan</span>
              </div>
              <p className="text-gray-400">
                Connecting academia and industry for better learning outcomes.
              </p>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Students</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Faculty</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Industry</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Prashiskshan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = (onNavigate: Function) => [
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: 'Internship Portal',
    description: 'Browse and apply for 500+ internships across various industries and domains',
    onClick: () => onNavigate('internships')
  },
  {
    icon: <BookOpen className="w-10 h-10" />,
    title: 'Skill Development',
    description: 'Pre-internship learning modules to prepare you for industry requirements',
    onClick: () => onNavigate('skills')
  },
  {
    icon: <Target className="w-10 h-10" />,
    title: 'Smart Recommendations',
    description: 'AI-powered internship suggestions based on your skills and interests',
    onClick: () => onNavigate('recommendations')
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: 'Digital Reports',
    description: 'Auto-generate NEP-compliant internship reports and certificates',
    onClick: () => onNavigate('reports')
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Mentorship',
    description: 'Connect with faculty mentors for guidance and support throughout your journey',
    onClick: () => onNavigate('mentorship')
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: 'Analytics Dashboard',
    description: 'Track your progress, skills acquired, and performance metrics in real-time',
    onClick: () => onNavigate('analytics')
  }
];