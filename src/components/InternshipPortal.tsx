import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  BookOpen,
  Target,
  Award,
  Users,
  TrendingUp,
  Filter,
  Calendar,
  Building2,
  GraduationCap,
  FileText,
  Download,
  Star,
  Heart,
  Share2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Zap,
  Brain,
  Code,
  Database,
  Shield,
  Smartphone,
  Palette,
  BarChart3,
  Globe,
  ChevronDown
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface Internship {
  id: string;
  title: string;
  company: string;
  logo?: string;
  location: string;
  type: 'Remote' | 'On-site' | 'Hybrid';
  duration: string;
  stipend: string;
  category: string;
  skills: string[];
  description: string;
  requirements: string[];
  responsibilities: string[];
  image: string;
  posted: string;
  deadline: string;
  openings: number;
  applied?: number;
  rating?: number;
  featured?: boolean;
}

const internshipsData: Internship[] = [
  {
    id: 'int-001',
    title: 'Full Stack Developer Intern',
    company: 'TechVista Solutions',
    location: 'Bangalore, Karnataka',
    type: 'Hybrid',
    duration: '6 months',
    stipend: '₹25,000 - ₹35,000/month',
    category: 'Software Development',
    skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    description: 'Work on cutting-edge web applications using modern tech stack. Build scalable solutions and learn from experienced developers.',
    requirements: ['Strong knowledge of JavaScript', 'Understanding of REST APIs', 'Git proficiency', 'Problem-solving skills'],
    responsibilities: ['Develop new features', 'Write clean code', 'Collaborate with team', 'Participate in code reviews'],
    image: 'https://images.unsplash.com/photo-1643881079052-11e752e3ae16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwb2ZmaWNlfGVufDF8fHx8MTc1OTQwNjE4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '2 days ago',
    deadline: '2025-10-20',
    openings: 5,
    applied: 127,
    rating: 4.8,
    featured: true
  },
  {
    id: 'int-002',
    title: 'Data Science & Analytics Intern',
    company: 'DataMinds Analytics',
    location: 'Mumbai, Maharashtra',
    type: 'Remote',
    duration: '4 months',
    stipend: '₹20,000 - ₹30,000/month',
    category: 'Data Science',
    skills: ['Python', 'Machine Learning', 'SQL', 'Tableau'],
    description: 'Analyze complex datasets and build predictive models. Work with real-world data to derive actionable insights.',
    requirements: ['Strong Python skills', 'Statistical knowledge', 'ML algorithms understanding', 'Communication skills'],
    responsibilities: ['Data cleaning and preprocessing', 'Build ML models', 'Create visualizations', 'Present insights'],
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTkzMzQ3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '1 day ago',
    deadline: '2025-10-25',
    openings: 3,
    applied: 89,
    rating: 4.7,
    featured: true
  },
  {
    id: 'int-003',
    title: 'Cybersecurity Analyst Intern',
    company: 'SecureNet Technologies',
    location: 'Hyderabad, Telangana',
    type: 'On-site',
    duration: '6 months',
    stipend: '₹30,000 - ₹40,000/month',
    category: 'Cybersecurity',
    skills: ['Network Security', 'Penetration Testing', 'Linux', 'Python'],
    description: 'Learn security best practices and protect systems from cyber threats. Hands-on experience with security tools.',
    requirements: ['Basic networking knowledge', 'Understanding of security concepts', 'Ethical hacking interest', 'Analytical mindset'],
    responsibilities: ['Security audits', 'Vulnerability assessments', 'Incident response', 'Security documentation'],
    image: 'https://images.unsplash.com/photo-1606606767399-01e271823a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkzOTk0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '3 days ago',
    deadline: '2025-10-18',
    openings: 4,
    applied: 156,
    rating: 4.9
  },
  {
    id: 'int-004',
    title: 'AI/ML Research Intern',
    company: 'AI Innovations Lab',
    location: 'Delhi NCR',
    type: 'Hybrid',
    duration: '5 months',
    stipend: '₹35,000 - ₹45,000/month',
    category: 'Artificial Intelligence',
    skills: ['Deep Learning', 'TensorFlow', 'PyTorch', 'NLP'],
    description: 'Work on cutting-edge AI research projects. Contribute to publications and develop innovative solutions.',
    requirements: ['Strong ML background', 'Research mindset', 'Programming skills', 'Mathematics foundation'],
    responsibilities: ['Research & development', 'Model training', 'Paper writing', 'Experiment documentation'],
    image: 'https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3R8ZW58MXx8fHwxNzU5MzU1OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '5 days ago',
    deadline: '2025-10-15',
    openings: 2,
    applied: 234,
    rating: 4.9,
    featured: true
  },
  {
    id: 'int-005',
    title: 'Mobile App Developer Intern',
    company: 'AppCraft Studios',
    location: 'Pune, Maharashtra',
    type: 'On-site',
    duration: '4 months',
    stipend: '₹22,000 - ₹32,000/month',
    category: 'Mobile Development',
    skills: ['React Native', 'Flutter', 'iOS', 'Android'],
    description: 'Build mobile applications for millions of users. Learn mobile-first development practices.',
    requirements: ['Mobile dev basics', 'UI/UX understanding', 'API integration', 'Problem-solving'],
    responsibilities: ['Feature development', 'Bug fixes', 'App testing', 'Performance optimization'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTkzOTQ1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '4 days ago',
    deadline: '2025-10-22',
    openings: 6,
    applied: 98,
    rating: 4.6
  },
  {
    id: 'int-006',
    title: 'Digital Marketing Intern',
    company: 'BrandBoost Media',
    location: 'Mumbai, Maharashtra',
    type: 'Hybrid',
    duration: '3 months',
    stipend: '₹15,000 - ₹25,000/month',
    category: 'Digital Marketing',
    skills: ['SEO', 'Social Media', 'Content Marketing', 'Google Analytics'],
    description: 'Create impactful digital campaigns and learn marketing strategies from industry experts.',
    requirements: ['Marketing basics', 'Creative thinking', 'Communication skills', 'Analytical mindset'],
    responsibilities: ['Campaign management', 'Content creation', 'Performance tracking', 'Market research'],
    image: 'https://images.unsplash.com/photo-1614762586156-8b9a22069f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzU5MzQ2NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '1 week ago',
    deadline: '2025-10-30',
    openings: 8,
    applied: 167,
    rating: 4.5
  },
  {
    id: 'int-007',
    title: 'Business Analyst Intern',
    company: 'FinTech Solutions',
    location: 'Bangalore, Karnataka',
    type: 'Hybrid',
    duration: '5 months',
    stipend: '₹25,000 - ₹35,000/month',
    category: 'Business & Finance',
    skills: ['Excel', 'SQL', 'Power BI', 'Business Strategy'],
    description: 'Analyze business processes and provide data-driven recommendations for growth.',
    requirements: ['Analytical skills', 'Business acumen', 'Data analysis', 'Presentation skills'],
    responsibilities: ['Process analysis', 'Report generation', 'Stakeholder meetings', 'Solution design'],
    image: 'https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2UlMjBjaGFydHxlbnwxfHx8fDE3NTk0MDYxODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '2 days ago',
    deadline: '2025-10-17',
    openings: 4,
    applied: 143,
    rating: 4.7
  },
  {
    id: 'int-008',
    title: 'Cloud Engineer Intern',
    company: 'CloudScale Systems',
    location: 'Chennai, Tamil Nadu',
    type: 'Remote',
    duration: '6 months',
    stipend: '₹28,000 - ₹38,000/month',
    category: 'Cloud Computing',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    description: 'Build and maintain cloud infrastructure. Learn DevOps practices and cloud architecture.',
    requirements: ['Cloud basics', 'Linux knowledge', 'Networking', 'Scripting skills'],
    responsibilities: ['Infrastructure setup', 'Deployment automation', 'Monitoring', 'Cost optimization'],
    image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnxlbnwxfHx8fDE3NTkzNjQzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '3 days ago',
    deadline: '2025-10-19',
    openings: 3,
    applied: 112,
    rating: 4.8
  },
  {
    id: 'int-009',
    title: 'UI/UX Design Intern',
    company: 'DesignCraft Studio',
    location: 'Bangalore, Karnataka',
    type: 'Hybrid',
    duration: '4 months',
    stipend: '₹20,000 - ₹30,000/month',
    category: 'Design',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    description: 'Design beautiful and intuitive user experiences. Work on real products with millions of users.',
    requirements: ['Design tools knowledge', 'Creative thinking', 'User-centric mindset', 'Portfolio'],
    responsibilities: ['UI design', 'User research', 'Prototyping', 'Design systems'],
    image: 'https://images.unsplash.com/photo-1587089879249-87bf7d2972df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwdXh8ZW58MXx8fHwxNzU5NDA2MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '1 day ago',
    deadline: '2025-10-25',
    openings: 4,
    applied: 189,
    rating: 4.6
  },
  {
    id: 'int-010',
    title: 'Blockchain Developer Intern',
    company: 'CryptoTech Labs',
    location: 'Hyderabad, Telangana',
    type: 'On-site',
    duration: '6 months',
    stipend: '₹30,000 - ₹40,000/month',
    category: 'Blockchain',
    skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3'],
    description: 'Develop decentralized applications and smart contracts. Learn blockchain fundamentals.',
    requirements: ['Blockchain basics', 'Programming skills', 'Cryptography interest', 'Problem-solving'],
    responsibilities: ['Smart contract development', 'DApp creation', 'Testing', 'Documentation'],
    image: 'https://images.unsplash.com/photo-1694219782948-afcab5c095d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTk0MDYxODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '5 days ago',
    deadline: '2025-10-15',
    openings: 2,
    applied: 201,
    rating: 4.9
  },
  {
    id: 'int-011',
    title: 'DevOps Engineer Intern',
    company: 'AutoDeploy Tech',
    location: 'Pune, Maharashtra',
    type: 'Remote',
    duration: '5 months',
    stipend: '₹26,000 - ₹36,000/month',
    category: 'DevOps',
    skills: ['CI/CD', 'Jenkins', 'Docker', 'Git'],
    description: 'Automate deployment pipelines and improve development workflows.',
    requirements: ['Linux basics', 'Scripting', 'Version control', 'Problem-solving'],
    responsibilities: ['Pipeline setup', 'Automation', 'Monitoring', 'Documentation'],
    image: 'https://images.unsplash.com/photo-1643881079052-11e752e3ae16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwb2ZmaWNlfGVufDF8fHx8MTc1OTQwNjE4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '2 days ago',
    deadline: '2025-10-21',
    openings: 3,
    applied: 87,
    rating: 4.7
  },
  {
    id: 'int-012',
    title: 'Frontend Developer Intern',
    company: 'WebWorks Studio',
    location: 'Mumbai, Maharashtra',
    type: 'Hybrid',
    duration: '4 months',
    stipend: '₹22,000 - ₹32,000/month',
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    description: 'Build responsive and interactive web interfaces. Learn modern frontend technologies.',
    requirements: ['HTML/CSS/JS', 'React knowledge', 'Responsive design', 'Git'],
    responsibilities: ['UI development', 'Component creation', 'Bug fixes', 'Code reviews'],
    image: 'https://images.unsplash.com/photo-1643881079052-11e752e3ae16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwb2ZmaWNlfGVufDF8fHx8MTc1OTQwNjE4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '1 week ago',
    deadline: '2025-10-28',
    openings: 7,
    applied: 145,
    rating: 4.5
  },
  {
    id: 'int-013',
    title: 'Backend Developer Intern',
    company: 'APIStack Technologies',
    location: 'Bangalore, Karnataka',
    type: 'On-site',
    duration: '6 months',
    stipend: '₹24,000 - ₹34,000/month',
    category: 'Software Development',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
    description: 'Build scalable backend systems and APIs. Work with microservices architecture.',
    requirements: ['Backend basics', 'Database knowledge', 'API design', 'Problem-solving'],
    responsibilities: ['API development', 'Database design', 'Testing', 'Documentation'],
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTkzMzQ3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '3 days ago',
    deadline: '2025-10-20',
    openings: 5,
    applied: 134,
    rating: 4.6
  },
  {
    id: 'int-014',
    title: 'Game Developer Intern',
    company: 'GameForge Studios',
    location: 'Hyderabad, Telangana',
    type: 'On-site',
    duration: '5 months',
    stipend: '₹25,000 - ₹35,000/month',
    category: 'Game Development',
    skills: ['Unity', 'C#', 'Game Design', '3D Modeling'],
    description: 'Create engaging gaming experiences. Work on mobile and PC games.',
    requirements: ['Unity basics', 'C# programming', 'Game design interest', 'Creativity'],
    responsibilities: ['Game mechanics', 'Level design', 'Bug fixing', 'Optimization'],
    image: 'https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3R8ZW58MXx8fHwxNzU5MzU1OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '4 days ago',
    deadline: '2025-10-16',
    openings: 3,
    applied: 178,
    rating: 4.8
  },
  {
    id: 'int-015',
    title: 'Content Writer Intern',
    company: 'WordCraft Media',
    location: 'Delhi NCR',
    type: 'Remote',
    duration: '3 months',
    stipend: '₹12,000 - ₹20,000/month',
    category: 'Content Writing',
    skills: ['Writing', 'SEO', 'Research', 'Editing'],
    description: 'Create compelling content for various platforms. Learn content strategy.',
    requirements: ['Excellent writing', 'Research skills', 'Creativity', 'Attention to detail'],
    responsibilities: ['Article writing', 'Content editing', 'SEO optimization', 'Research'],
    image: 'https://images.unsplash.com/photo-1614762586156-8b9a22069f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzU5MzQ2NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '2 days ago',
    deadline: '2025-10-26',
    openings: 10,
    applied: 256,
    rating: 4.4
  },
  {
    id: 'int-016',
    title: 'IoT Developer Intern',
    company: 'SmartTech Solutions',
    location: 'Pune, Maharashtra',
    type: 'Hybrid',
    duration: '6 months',
    stipend: '₹23,000 - ₹33,000/month',
    category: 'IoT',
    skills: ['Raspberry Pi', 'Arduino', 'Python', 'MQTT'],
    description: 'Build smart IoT solutions. Work with sensors and embedded systems.',
    requirements: ['Electronics basics', 'Programming', 'Hardware knowledge', 'Innovation mindset'],
    responsibilities: ['IoT development', 'Sensor integration', 'Testing', 'Documentation'],
    image: 'https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3R8ZW58MXx8fHwxNzU5MzU1OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '1 week ago',
    deadline: '2025-10-27',
    openings: 4,
    applied: 92,
    rating: 4.7
  },
  {
    id: 'int-017',
    title: 'Quality Assurance Intern',
    company: 'TestPro Solutions',
    location: 'Chennai, Tamil Nadu',
    type: 'On-site',
    duration: '4 months',
    stipend: '₹18,000 - ₹28,000/month',
    category: 'Quality Assurance',
    skills: ['Manual Testing', 'Selenium', 'JIRA', 'Test Planning'],
    description: 'Ensure software quality through rigorous testing. Learn QA methodologies.',
    requirements: ['Testing basics', 'Attention to detail', 'Analytical skills', 'Communication'],
    responsibilities: ['Test case creation', 'Bug reporting', 'Regression testing', 'Documentation'],
    image: 'https://images.unsplash.com/photo-1643881079052-11e752e3ae16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwb2ZmaWNlfGVufDF8fHx8MTc1OTQwNjE4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '5 days ago',
    deadline: '2025-10-18',
    openings: 6,
    applied: 103,
    rating: 4.5
  },
  {
    id: 'int-018',
    title: 'HR Recruitment Intern',
    company: 'TalentHub Solutions',
    location: 'Mumbai, Maharashtra',
    type: 'Hybrid',
    duration: '3 months',
    stipend: '₹15,000 - ₹22,000/month',
    category: 'Human Resources',
    skills: ['Recruitment', 'Communication', 'MS Office', 'LinkedIn'],
    description: 'Learn recruitment processes and talent acquisition strategies.',
    requirements: ['Communication skills', 'People skills', 'Organizational abilities', 'Proactive attitude'],
    responsibilities: ['Candidate screening', 'Interview scheduling', 'Database management', 'Employer branding'],
    image: 'https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2UlMjBjaGFydHxlbnwxfHx8fDE3NTk0MDYxODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '1 day ago',
    deadline: '2025-10-24',
    openings: 5,
    applied: 187,
    rating: 4.6
  },
  {
    id: 'int-019',
    title: 'Video Editing Intern',
    company: 'CreativeVision Media',
    location: 'Bangalore, Karnataka',
    type: 'Remote',
    duration: '4 months',
    stipend: '₹16,000 - ₹26,000/month',
    category: 'Media & Entertainment',
    skills: ['Premiere Pro', 'After Effects', 'Color Grading', 'Motion Graphics'],
    description: 'Edit engaging videos for social media and marketing campaigns.',
    requirements: ['Video editing skills', 'Creative thinking', 'Software proficiency', 'Portfolio'],
    responsibilities: ['Video editing', 'Color correction', 'Motion graphics', 'Audio sync'],
    image: 'https://images.unsplash.com/photo-1587089879249-87bf7d2972df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwdXh8ZW58MXx8fHwxNzU5NDA2MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '3 days ago',
    deadline: '2025-10-23',
    openings: 4,
    applied: 214,
    rating: 4.7
  },
  {
    id: 'int-020',
    title: 'Product Management Intern',
    company: 'ProductLabs Inc',
    location: 'Bangalore, Karnataka',
    type: 'Hybrid',
    duration: '6 months',
    stipend: '₹28,000 - ₹38,000/month',
    category: 'Product Management',
    skills: ['Product Strategy', 'Analytics', 'User Research', 'Agile'],
    description: 'Learn product management from ideation to launch. Work with cross-functional teams.',
    requirements: ['Analytical thinking', 'Communication', 'User-centric approach', 'Problem-solving'],
    responsibilities: ['Product research', 'Feature planning', 'Stakeholder management', 'Metrics tracking'],
    image: 'https://images.unsplash.com/photo-1587089879249-87bf7d2972df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwdXh8ZW58MXx8fHwxNzU5NDA2MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '2 days ago',
    deadline: '2025-10-19',
    openings: 2,
    applied: 298,
    rating: 4.9,
    featured: true
  },
  {
    id: 'int-021',
    title: 'Graphic Design Intern',
    company: 'PixelPerfect Studios',
    location: 'Delhi NCR',
    type: 'Hybrid',
    duration: '3 months',
    stipend: '₹14,000 - ₹24,000/month',
    category: 'Design',
    skills: ['Photoshop', 'Illustrator', 'InDesign', 'Branding'],
    description: 'Create stunning visual designs for print and digital media.',
    requirements: ['Design software', 'Creativity', 'Visual communication', 'Portfolio'],
    responsibilities: ['Design creation', 'Brand materials', 'Social media graphics', 'Print collateral'],
    image: 'https://images.unsplash.com/photo-1587089879249-87bf7d2972df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwdXh8ZW58MXx8fHwxNzU5NDA2MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '4 days ago',
    deadline: '2025-10-22',
    openings: 5,
    applied: 223,
    rating: 4.6
  },
  {
    id: 'int-022',
    title: 'Network Engineer Intern',
    company: 'NetWorks Technologies',
    location: 'Hyderabad, Telangana',
    type: 'On-site',
    duration: '5 months',
    stipend: '₹21,000 - ₹31,000/month',
    category: 'Networking',
    skills: ['Networking', 'Cisco', 'Security', 'Troubleshooting'],
    description: 'Build and maintain network infrastructure. Learn enterprise networking.',
    requirements: ['Networking basics', 'CCNA knowledge', 'Problem-solving', 'Technical aptitude'],
    responsibilities: ['Network setup', 'Troubleshooting', 'Security implementation', 'Documentation'],
    image: 'https://images.unsplash.com/photo-1606606767399-01e271823a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkzOTk0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    posted: '1 week ago',
    deadline: '2025-10-29',
    openings: 3,
    applied: 76,
    rating: 4.7
  }
];

interface InternshipPortalProps {
  onBack: () => void;
}

export function InternshipPortal({ onBack }: InternshipPortalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [filteredInternships, setFilteredInternships] = useState(internshipsData);
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);
  const [savedInternships, setSavedInternships] = useState<string[]>([]);
  const [showReportDialog, setShowReportDialog] = useState(false);

  // Filter internships
  const handleFilter = () => {
    let filtered = internshipsData;

    if (searchQuery) {
      filtered = filtered.filter(
        (int) =>
          int.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          int.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          int.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((int) => int.category === selectedCategory);
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter((int) => int.type === selectedType);
    }

    if (selectedLocation !== 'all') {
      filtered = filtered.filter((int) => int.location.includes(selectedLocation));
    }

    setFilteredInternships(filtered);
  };

  // Apply filters whenever criteria change
  useState(() => {
    handleFilter();
  });

  const handleApply = (internship: Internship) => {
    toast.success(`Application submitted for ${internship.title}! We'll notify you soon.`);
  };

  const handleSave = (id: string) => {
    if (savedInternships.includes(id)) {
      setSavedInternships(savedInternships.filter((i) => i !== id));
      toast.info('Removed from saved internships');
    } else {
      setSavedInternships([...savedInternships, id]);
      toast.success('Saved to your list!');
    }
  };

  const handleGenerateReport = () => {
    toast.success('Report generated successfully! Check your downloads.');
    setShowReportDialog(false);
  };

  const categories = Array.from(new Set(internshipsData.map((int) => int.category)));
  const locations = Array.from(new Set(internshipsData.map((int) => int.location.split(',')[1]?.trim() || int.location)));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onBack}>
                <ArrowRight className="w-5 h-5 rotate-180" />
              </Button>
              <div>
                <h1 className="text-gray-900 dark:text-white">Internship Portal</h1>
                <p className="text-gray-600 dark:text-gray-400">Discover your dream internship</p>
              </div>
            </div>
            <Button onClick={() => setShowReportDialog(true)} className="gap-2">
              <FileText className="w-4 h-4" />
              Generate Report
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                <span>500+ Active Opportunities</span>
              </div>
              <h2 className="text-white mb-4">Launch Your Career with Top Companies</h2>
              <p className="text-blue-100 mb-6">
                Explore internships across various industries. Gain real-world experience, earn NEP credits, and build your future.
              </p>
              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="text-white mb-1">10,000+</div>
                  <div className="text-blue-100">Students Placed</div>
                </div>
                <div>
                  <div className="text-white mb-1">200+</div>
                  <div className="text-blue-100">Industry Partners</div>
                </div>
                <div>
                  <div className="text-white mb-1">85%</div>
                  <div className="text-blue-100">Placement Rate</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
                  <Code className="w-8 h-8 text-white mb-2" />
                  <div className="text-white mb-1">Tech</div>
                  <div className="text-blue-100">250+ Opportunities</div>
                </Card>
                <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
                  <Palette className="w-8 h-8 text-white mb-2" />
                  <div className="text-white mb-1">Design</div>
                  <div className="text-blue-100">80+ Opportunities</div>
                </Card>
                <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
                  <BarChart3 className="w-8 h-8 text-white mb-2" />
                  <div className="text-white mb-1">Business</div>
                  <div className="text-blue-100">120+ Opportunities</div>
                </Card>
                <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
                  <Globe className="w-8 h-8 text-white mb-2" />
                  <div className="text-white mb-1">Marketing</div>
                  <div className="text-blue-100">50+ Opportunities</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">Everything You Need to Succeed</h2>
            <p className="text-gray-600 dark:text-gray-300">Comprehensive tools and resources for your internship journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Internship Portal</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Browse and apply for 500+ internships across various industries and domains
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Skill Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pre-internship learning modules to prepare you for industry requirements
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-green-100 dark:bg-green-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Smart Recommendations</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AI-powered internship suggestions based on your skills and interests
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-orange-100 dark:bg-orange-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Digital Reports</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Auto-generate NEP-compliant internship reports and certificates
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-pink-100 dark:bg-pink-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Mentorship</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with faculty mentors for guidance and support throughout your journey
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track your progress, skills acquired, and performance metrics in real-time
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search by title, company, or skills..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleFilter();
                }}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={(value) => { setSelectedCategory(value); handleFilter(); }}>
              <SelectTrigger className="w-full lg:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={(value) => { setSelectedType(value); handleFilter(); }}>
              <SelectTrigger className="w-full lg:w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
                <SelectItem value="On-site">On-site</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={(value) => { setSelectedLocation(value); handleFilter(); }}>
              <SelectTrigger className="w-full lg:w-[180px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredInternships.length} of {internshipsData.length} internships
            </p>
            <Button variant="outline" size="sm" onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedType('all');
              setSelectedLocation('all');
              setFilteredInternships(internshipsData);
            }}>
              Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Internships */}
      {filteredInternships.some((int) => int.featured) && (
        <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <h2 className="text-gray-900 dark:text-white">Featured Internships</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredInternships.filter((int) => int.featured).slice(0, 4).map((internship) => (
                <Card key={internship.id} className="overflow-hidden hover:shadow-xl transition-all cursor-pointer">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={internship.image}
                      alt={internship.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full w-8 h-8 p-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSave(internship.id);
                        }}
                      >
                        <Heart className={`w-4 h-4 ${savedInternships.includes(internship.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                    </div>
                    <Badge className="absolute top-3 left-3 bg-yellow-500">Featured</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-900 dark:text-white mb-1">{internship.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{internship.company}</p>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{internship.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-3">
                      <DollarSign className="w-4 h-4" />
                      <span>{internship.stipend}</span>
                    </div>
                    <Button
                      className="w-full"
                      onClick={() => setSelectedInternship(internship)}
                    >
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Internships */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 dark:text-white mb-6">All Internships</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredInternships.map((internship) => (
              <Card key={internship.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-48 h-48">
                    <ImageWithFallback
                      src={internship.image}
                      alt={internship.title}
                      className="w-full h-full object-cover"
                    />
                    {internship.featured && (
                      <Badge className="absolute top-2 left-2 bg-yellow-500">Featured</Badge>
                    )}
                  </div>
                  
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-gray-900 dark:text-white mb-1">{internship.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{internship.company}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleSave(internship.id)}
                      >
                        <Heart className={`w-4 h-4 ${savedInternships.includes(internship.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                    </div>

                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{internship.location}</span>
                        <Badge variant="outline">{internship.type}</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <DollarSign className="w-4 h-4" />
                        <span>{internship.stipend}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {internship.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                      {internship.skills.length > 3 && (
                        <Badge variant="secondary">+{internship.skills.length - 3}</Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{internship.applied} applied</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          <span>{internship.rating}</span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => setSelectedInternship(internship)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Detail Dialog */}
      {selectedInternship && (
        <Dialog open={!!selectedInternship} onOpenChange={() => setSelectedInternship(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="relative h-64 -mx-6 -mt-6 mb-4">
                <ImageWithFallback
                  src={selectedInternship.image}
                  alt={selectedInternship.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <DialogTitle className="text-white mb-2">{selectedInternship.title}</DialogTitle>
                    <p className="text-gray-200">{selectedInternship.company}</p>
                  </div>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>Location</span>
                  </div>
                  <p className="text-gray-900 dark:text-white">{selectedInternship.location}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                    <Clock className="w-4 h-4" />
                    <span>Duration</span>
                  </div>
                  <p className="text-gray-900 dark:text-white">{selectedInternship.duration}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span>Stipend</span>
                  </div>
                  <p className="text-gray-900 dark:text-white">{selectedInternship.stipend}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span>Openings</span>
                  </div>
                  <p className="text-gray-900 dark:text-white">{selectedInternship.openings}</p>
                </div>
              </div>

              <div>
                <h4 className="text-gray-900 dark:text-white mb-2">About</h4>
                <p className="text-gray-600 dark:text-gray-400">{selectedInternship.description}</p>
              </div>

              <div>
                <h4 className="text-gray-900 dark:text-white mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedInternship.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-gray-900 dark:text-white mb-2">Requirements</h4>
                <ul className="space-y-2">
                  {selectedInternship.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 dark:text-white mb-2">Responsibilities</h4>
                <ul className="space-y-2">
                  {selectedInternship.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1" onClick={() => handleApply(selectedInternship)}>
                  Apply Now
                </Button>
                <Button variant="outline" onClick={() => handleSave(selectedInternship.id)}>
                  <Heart className={`w-4 h-4 ${savedInternships.includes(selectedInternship.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Report Generation Dialog */}
      <Dialog open={showReportDialog} onOpenChange={setShowReportDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Generate NEP-Compliant Internship Report</DialogTitle>
            <DialogDescription>
              Create a comprehensive report of your internship activities, learnings, and achievements
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Select Internship</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose an internship" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="int-001">Full Stack Developer - TechVista Solutions</SelectItem>
                  <SelectItem value="int-002">Data Science - DataMinds Analytics</SelectItem>
                  <SelectItem value="int-004">AI/ML Research - AI Innovations Lab</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Report Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="interim">Interim Report</SelectItem>
                  <SelectItem value="final">Final Report</SelectItem>
                  <SelectItem value="monthly">Monthly Progress Report</SelectItem>
                  <SelectItem value="certificate">Completion Certificate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card className="p-4 bg-blue-50 dark:bg-blue-900/20">
              <h4 className="text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Report Includes
              </h4>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>NEP 2020 Credit Calculation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Skills Acquired & Competencies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Project Work & Deliverables</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Mentor Feedback & Evaluation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Performance Metrics & Analytics</span>
                </li>
              </ul>
            </Card>

            <div className="flex gap-3">
              <Button className="flex-1 gap-2" onClick={handleGenerateReport}>
                <Download className="w-4 h-4" />
                Generate & Download
              </Button>
              <Button variant="outline" onClick={() => setShowReportDialog(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}