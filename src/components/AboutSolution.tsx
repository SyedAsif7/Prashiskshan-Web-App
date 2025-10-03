import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  Users,
  Building2,
  GraduationCap,
  Target,
  Briefcase,
  BookOpen,
  FileText,
  Bell,
  TrendingUp,
  Award,
  Clock,
  MapPin,
  Lightbulb,
  Network,
  Shield,
  Zap,
  BarChart3,
  Calendar,
  Code,
  Database,
  Globe,
  Heart,
  Settings
} from 'lucide-react';

interface AboutSolutionProps {
  onBack: () => void;
  onNavigate: (page: 'home' | 'login' | 'register' | 'dashboard' | 'internships') => void;
}

export function AboutSolution({ onBack, onNavigate }: AboutSolutionProps) {
  const [activeTab, setActiveTab] = useState('problem');

  const problems = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: 'Lack of Industry Tie-ups',
      description: 'Limited partnerships with companies, no proper MoUs or placement cells',
      impact: 'High'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Poor Planning & Late Implementation',
      description: 'Programs introduced suddenly without proper planning',
      impact: 'High'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'No Monitoring or Mentorship',
      description: 'No faculty supervision or follow-up during internships',
      impact: 'Critical'
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Students Not Industry-Ready',
      description: 'Lack of skills discourages companies from taking interns',
      impact: 'Critical'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Limited Access in Rural Areas',
      description: 'Limited industry presence; ineffective online internships',
      impact: 'Medium'
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: 'Administrative Failures',
      description: 'Poor coordination, lack of funding, and unclear guidelines',
      impact: 'High'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Fake Internships & Certificates',
      description: 'Students buying certificates or joining non-functional organizations',
      impact: 'Critical'
    }
  ];

  const nepFeatures = [
    {
      semester: 'Semester 1-2',
      focus: 'Foundation Courses',
      description: 'Basic foundational knowledge across disciplines'
    },
    {
      semester: 'Semester 3-4',
      focus: 'Major-Specific & Interdisciplinary',
      description: 'Deep dive into chosen field with cross-disciplinary learning'
    },
    {
      semester: 'Semester 5-6',
      focus: 'Internships & Field Projects',
      description: 'Industry exposure, practical application, community engagement',
      highlight: true
    },
    {
      semester: 'Semester 7-8',
      focus: 'Research & Specialization',
      description: 'Advanced projects, research work, career preparation'
    }
  ];

  const stakeholders = [
    {
      role: 'Students',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'blue',
      responsibilities: [
        'Data enrollment in the app',
        'Conduct surveys to gather pain points',
        'Design and develop the app',
        'Participate in internships',
        'Maintain digital logbooks'
      ],
      benefits: [
        'Easy access to quality internships',
        'Pre-internship skill training',
        'NEP-compliant certificates',
        'Career guidance and mentorship',
        'Track progress in real-time'
      ]
    },
    {
      role: 'Colleges',
      icon: <Building2 className="w-8 h-8" />,
      color: 'purple',
      responsibilities: [
        'Provide mentorship & faculty coordinators',
        'Offer academic credit for work (NEP)',
        'Facilitate outreach to companies',
        'Sign MoUs with industry partners',
        'Host app under institutional portal'
      ],
      benefits: [
        'Better placement statistics',
        'Real-time student monitoring',
        'Industry collaboration data',
        'NEP compliance automation',
        'Enhanced reputation'
      ]
    },
    {
      role: 'Industry Partners',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'green',
      responsibilities: [
        'Share real-time internship openings',
        'Provide API access for management',
        'Offer short-term/remote slots',
        'Work in hybrid mode',
        'Mentor and evaluate interns'
      ],
      benefits: [
        'Access to skilled talent pool',
        'Pre-screened candidates',
        'Reduced hiring costs',
        'Brand visibility in colleges',
        'Long-term talent pipeline'
      ]
    }
  ];

  const modules = [
    {
      id: 1,
      title: 'Student-Centered Internship Portal',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'bg-blue-500',
      features: [
        'Browse 500+ verified internships',
        'Advanced search and filters',
        'AI-powered recommendations',
        'One-click applications',
        'Application tracking dashboard',
        'Save favorites and compare'
      ]
    },
    {
      id: 2,
      title: 'Industry Collaboration Module',
      icon: <Building2 className="w-6 h-6" />,
      color: 'bg-green-500',
      features: [
        'Post internship opportunities',
        'Applicant tracking system',
        'Pre-screening tools',
        'Interview scheduling',
        'Performance evaluation forms',
        'Analytics and reports'
      ]
    },
    {
      id: 3,
      title: 'Faculty & Admin Panel',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'bg-purple-500',
      features: [
        'Monitor student progress',
        'Approve internship applications',
        'Assign faculty mentors',
        'View real-time analytics',
        'Generate reports',
        'Manage MoUs and partnerships'
      ]
    },
    {
      id: 4,
      title: 'Skill Readiness & Learning',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-orange-500',
      features: [
        'Pre-internship training modules',
        'Industry-specific courses',
        'Skill assessment tests',
        'Certification programs',
        'Video tutorials',
        'Practice projects'
      ]
    },
    {
      id: 5,
      title: 'Automatic Logbook & Reports',
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-pink-500',
      features: [
        'Daily work log entries',
        'Photo and document uploads',
        'Weekly progress reports',
        'Auto-generated NEP reports',
        'Credit calculation',
        'Digital certificates'
      ]
    },
    {
      id: 6,
      title: 'Credit Integration System',
      icon: <Award className="w-6 h-6" />,
      color: 'bg-indigo-500',
      features: [
        'NEP 2020 credit mapping',
        'Automatic credit calculation',
        'Learning outcome tracking',
        'Competency assessment',
        'Academic transcript integration',
        'Credit transfer support'
      ]
    },
    {
      id: 7,
      title: 'Notifications & Alerts',
      icon: <Bell className="w-6 h-6" />,
      color: 'bg-red-500',
      features: [
        'New internship alerts',
        'Application status updates',
        'Deadline reminders',
        'Mentor messages',
        'Event notifications',
        'SMS and email alerts'
      ]
    }
  ];

  const outcomes = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Streamlined Process',
      description: 'One-stop solution to find, apply, track, and complete internships'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Increased Participation',
      description: 'Easier access and transparency, especially for rural students'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Skill Development',
      description: 'Real-world experience with pre-internship training modules'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Better Faculty Involvement',
      description: 'Dashboards to track progress and provide feedback'
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'College-Industry Connect',
      description: 'Regular interaction, partnerships, live projects, and events'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Authentic Reports',
      description: 'Real-time logbooks and formatted reports to prevent fakes'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data-Driven Insights',
      description: 'App analytics for insights on industries, skill gaps, and performance'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onBack}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-gray-900 dark:text-white">NEP 2020 Solution</h1>
                <p className="text-gray-600 dark:text-gray-400">Understanding the problem & our approach</p>
              </div>
            </div>
            <Button onClick={() => onNavigate('internships')} className="gap-2">
              Explore Internships <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">NEP 2020 Compliant</Badge>
            <h2 className="text-white mb-6">
              Transforming Internship Systems in Indian Higher Education
            </h2>
            <p className="text-blue-100 max-w-3xl mx-auto mb-8">
              A student-industry-college collaborative platform designed to solve critical internship system 
              failures and ensure NEP 2020 compliance through technology and stakeholder partnership
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <h3 className="text-white mb-2">10,000+</h3>
                <p className="text-blue-100">Students Impacted</p>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <h3 className="text-white mb-2">200+</h3>
                <p className="text-blue-100">Industry Partners</p>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <h3 className="text-white mb-2">100%</h3>
                <p className="text-blue-100">NEP Compliant</p>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <h3 className="text-white mb-2">500+</h3>
                <p className="text-blue-100">Live Internships</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* NEP 2020 Context */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Context</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              NEP 2020: Semester 5 for Internships
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Under the New Education Policy 2020, Semester 5 marks a pivotal transition where students 
              engage in industry-based internships to bridge academic learning with real-world application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nepFeatures.map((feature, idx) => (
              <Card 
                key={idx} 
                className={`p-6 ${feature.highlight ? 'border-2 border-blue-500 shadow-lg' : ''}`}
              >
                {feature.highlight && (
                  <Badge className="mb-3 bg-blue-600">Critical Phase</Badge>
                )}
                <h3 className="text-gray-900 dark:text-white mb-2">{feature.semester}</h3>
                <h4 className="text-gray-700 dark:text-gray-200 mb-3">{feature.focus}</h4>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 dark:bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 dark:text-white mb-3">Key NEP 2020 Principles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 dark:text-white">Experiential Learning</p>
                      <p className="text-gray-600 dark:text-gray-400">Hands-on learning through internships, fieldwork, and apprenticeships</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 dark:text-white">Credit-Based Evaluation</p>
                      <p className="text-gray-600 dark:text-gray-400">Internships count towards academic scores with formal evaluation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 dark:text-white">Flexibility</p>
                      <p className="text-gray-600 dark:text-gray-400">Multiple internship types across industries, NGOs, and research</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 dark:text-white">Career Readiness</p>
                      <p className="text-gray-600 dark:text-gray-400">Preparation for placements, startups, or higher education</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="destructive" className="mb-4">Critical Issues</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Why Internship Systems Fail in Colleges
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Despite NEP 2020's emphasis on experiential learning, internship programs face 
              systemic challenges that prevent students from gaining meaningful industry exposure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 dark:bg-red-900/30 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-red-600 dark:text-red-400">
                    {problem.icon}
                  </div>
                  <Badge variant={problem.impact === 'Critical' ? 'destructive' : 'secondary'}>
                    {problem.impact} Impact
                  </Badge>
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">{problem.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{problem.description}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400 flex-shrink-0" />
              <div>
                <h3 className="text-gray-900 dark:text-white mb-3">The Result</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Students graduate without practical experience, industries struggle to find skilled talent, 
                  colleges fail to meet NEP requirements, and the gap between education and employment widens.
                </p>
                <p className="text-gray-900 dark:text-white">
                  <strong>Solution Required:</strong> A comprehensive digital platform that connects all stakeholders 
                  and addresses every pain point in the internship lifecycle.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Stakeholder Collaboration */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-600">Collaborative Approach</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Three-Way Stakeholder Partnership
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform is built on a unique collaboration model where students, colleges, and 
              industry partners work together to create a sustainable internship ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stakeholders.map((stakeholder, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all">
                <div className={`bg-${stakeholder.color}-100 dark:bg-${stakeholder.color}-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-${stakeholder.color}-600 dark:text-${stakeholder.color}-400`}>
                  {stakeholder.icon}
                </div>
                <h3 className="text-gray-900 dark:text-white mb-4">{stakeholder.role}</h3>
                
                <div className="mb-4">
                  <h4 className="text-gray-700 dark:text-gray-200 mb-2">Responsibilities</h4>
                  <ul className="space-y-2">
                    {stakeholder.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-gray-700 dark:text-gray-200 mb-2">Benefits</h4>
                  <ul className="space-y-2">
                    {stakeholder.benefits.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <Heart className={`w-4 h-4 text-${stakeholder.color}-600 dark:text-${stakeholder.color}-400 mt-0.5 flex-shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Modules */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-600">Complete Solution</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              7 Core Platform Modules
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive digital platform with seven integrated modules designed to address 
              every aspect of the internship lifecycle from discovery to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Card key={module.id} className="p-6 hover:shadow-xl transition-all">
                <div className={`${module.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white`}>
                  {module.icon}
                </div>
                <h3 className="text-gray-900 dark:text-white mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-600">Impact</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Expected Outcomes & Benefits
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Measurable improvements across all stakeholders with technology-driven transparency and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                  {outcome.icon}
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">{outcome.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{outcome.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Strategy */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              Implementation Strategy
            </h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
              A phased rollout approach ensuring sustainable adoption and continuous improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="text-white mb-2">Phase 1</div>
              <h3 className="text-white mb-3">Stakeholder Collaboration</h3>
              <p className="text-blue-100">Partner with government, colleges, NGOs, and counselors</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="text-white mb-2">Phase 2</div>
              <h3 className="text-white mb-3">Technology Development</h3>
              <p className="text-blue-100">Build scalable platform with offline features</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="text-white mb-2">Phase 3</div>
              <h3 className="text-white mb-3">Pilot Launch</h3>
              <p className="text-blue-100">Test in select districts and gather feedback</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="text-white mb-2">Phase 4</div>
              <h3 className="text-white mb-3">Full-Scale Rollout</h3>
              <p className="text-blue-100">Deploy through government colleges nationwide</p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-blue-700 gap-2"
              onClick={() => onNavigate('register')}
            >
              Join the Revolution <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 dark:text-white mb-6">
            Ready to Transform Internship Systems?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Whether you're a student looking for internships, a college seeking better placement outcomes, 
            or an industry partner searching for talent – our platform has something for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('internships')} className="gap-2">
              Browse Internships <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate('register')}>
              Create Account
            </Button>
            <Button size="lg" variant="outline" onClick={onBack}>
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}