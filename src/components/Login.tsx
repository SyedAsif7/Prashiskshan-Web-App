import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { GraduationCap, Mail, Lock, Chrome, ArrowLeft } from 'lucide-react';
import { User, UserRole } from '../App';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginProps {
  onLogin: (user: User) => void;
  onNavigate: (page: 'home' | 'login' | 'register' | 'dashboard') => void;
}

// Mock users for demo
const mockUsers = [
  { email: 'student@demo.com', password: 'demo123', role: 'student' as UserRole, name: 'Rahul Kumar', id: 'stu-001' },
  { email: 'faculty@demo.com', password: 'demo123', role: 'faculty' as UserRole, name: 'Dr. Priya Sharma', id: 'fac-001' },
  { email: 'industry@demo.com', password: 'demo123', role: 'industry' as UserRole, name: 'TechVista Solutions', id: 'ind-001' },
];

export function Login({ onLogin, onNavigate }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const user = mockUsers.find(u => u.email === email && u.password === password);
      
      if (user) {
        onLogin({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        });
        toast.success(`Welcome back, ${user.name}!`);
      } else {
        toast.error('Invalid credentials. Try demo accounts: student@demo.com, faculty@demo.com, or industry@demo.com (password: demo123)');
      }
      setLoading(false);
    }, 800);
  };

  const handleGoogleLogin = () => {
    toast.info('Google OAuth login would be implemented here');
  };

  const quickLogin = (role: 'student' | 'faculty' | 'industry') => {
    const user = mockUsers.find(u => u.role === role);
    if (user) {
      setEmail(user.email);
      setPassword(user.password);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Image */}
      <div className="hidden lg:block relative">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1622258418550-46a51f29f084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwaW50ZXJuc2hpcCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk0MDUyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Tech workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 flex items-center justify-center p-12">
          <div className="text-white">
            <GraduationCap className="w-16 h-16 mb-6" />
            <h2 className="text-white mb-4">Welcome to Prashiskshan</h2>
            <p className="text-blue-100 mb-6">
              Join thousands of students, faculty, and industry partners transforming education through practical experience.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>500+ Internship Opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>NEP 2020 Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Industry-Recognized Certificates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-900 dark:text-white">Prashiskshan</span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-2">Welcome Back</h2>
          <p className="text-gray-600 dark:text-gray-400">Sign in to your account to continue</p>
        </div>

        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email Address</Label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="pl-10 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-10 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Or continue with</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full mt-4 border-gray-300 dark:border-gray-600"
              onClick={handleGoogleLogin}
            >
              <Chrome className="w-5 h-5 mr-2" />
              Sign in with Google
            </Button>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-blue-800 dark:text-blue-300 mb-3">Demo Accounts - Quick Login:</p>
            <div className="space-y-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full justify-start border-blue-200 dark:border-blue-800"
                onClick={() => quickLogin('student')}
              >
                <span className="mr-2">👨‍🎓</span> Student (student@demo.com)
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full justify-start border-blue-200 dark:border-blue-800"
                onClick={() => quickLogin('faculty')}
              >
                <span className="mr-2">👨‍🏫</span> Faculty (faculty@demo.com)
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full justify-start border-blue-200 dark:border-blue-800"
                onClick={() => quickLogin('industry')}
              >
                <span className="mr-2">🏢</span> Industry (industry@demo.com)
              </Button>
            </div>
            <p className="text-blue-700 dark:text-blue-400 mt-2">Password: demo123</p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <button
                onClick={() => onNavigate('register')}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </Card>

        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
}