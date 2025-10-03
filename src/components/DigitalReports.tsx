import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  ArrowLeft,
  FileText,
  Download,
  Shield,
  CheckCircle2,
  Calendar,
  Award,
  QrCode,
  Share2,
  Eye,
  Clock,
  Users,
  TrendingUp,
  Sparkles,
  BookOpen,
  BarChart3,
  Target,
  Zap,
  Lock,
  FileCheck
} from 'lucide-react';

interface DigitalReportsProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export function DigitalReports({ onBack, onNavigate }: DigitalReportsProps) {
  const reportTypes = [
    {
      id: 1,
      name: 'Daily Work Log',
      icon: <Calendar className="w-6 h-6" />,
      description: 'Track daily activities, tasks completed, and learning outcomes',
      frequency: 'Daily',
      features: [
        'Quick entry interface',
        'Photo & document uploads',
        'Task completion tracking',
        'Mentor feedback space'
      ],
      color: 'blue'
    },
    {
      id: 2,
      name: 'Weekly Progress Report',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Summarize weekly achievements, challenges, and skills developed',
      frequency: 'Weekly',
      features: [
        'Auto-generated summaries',
        'Skill progression charts',
        'Challenge documentation',
        'Mentor review section'
      ],
      color: 'green'
    },
    {
      id: 3,
      name: 'Monthly Performance Report',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'Comprehensive monthly overview with analytics and evaluations',
      frequency: 'Monthly',
      features: [
        'Performance metrics',
        'Learning outcomes',
        'Faculty evaluation',
        'Company feedback'
      ],
      color: 'purple'
    },
    {
      id: 4,
      name: 'Interim Internship Report',
      icon: <FileText className="w-6 h-6" />,
      description: 'Mid-term report for NEP compliance and academic review',
      frequency: 'Mid-term',
      features: [
        'NEP-compliant format',
        'Credit calculation',
        'Competency assessment',
        'Faculty approval'
      ],
      color: 'orange'
    },
    {
      id: 5,
      name: 'Final Internship Report',
      icon: <Award className="w-6 h-6" />,
      description: 'Comprehensive final report with all deliverables and assessments',
      frequency: 'End of Term',
      features: [
        'Complete documentation',
        'Project deliverables',
        'Final evaluation',
        'Credit certification'
      ],
      color: 'red'
    },
    {
      id: 6,
      name: 'Digital Certificate',
      icon: <Shield className="w-6 h-6" />,
      description: 'Verified digital certificate with QR code and blockchain verification',
      frequency: 'On Completion',
      features: [
        'QR code verification',
        'Blockchain secured',
        'Shareable PDF',
        'LinkedIn integration'
      ],
      color: 'indigo'
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Auto-Generation',
      description: 'Reports are automatically generated from your daily logs and activities',
      benefit: '90% time saved'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: '100% NEP Compliant',
      description: 'All formats follow NEP 2020 guidelines for credit-based evaluation',
      benefit: 'Zero rejection'
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: 'QR Verification',
      description: 'Every certificate has a unique QR code for instant authenticity check',
      benefit: 'Anti-fake protection'
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: 'Multiple Formats',
      description: 'Export reports in PDF, Word, and shareable web links',
      benefit: 'Universal compatibility'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Blockchain Secured',
      description: 'Certificates are stored on blockchain for tamper-proof verification',
      benefit: 'Permanent record'
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: 'Easy Sharing',
      description: 'One-click sharing to LinkedIn, email, or direct download',
      benefit: 'Instant credibility'
    }
  ];

  const nepCompliance = [
    {
      aspect: 'Credit Calculation',
      description: 'Automatic credit calculation based on hours logged and learning outcomes',
      status: 'Compliant'
    },
    {
      aspect: 'Learning Outcomes',
      description: 'Structured documentation of skills, competencies, and knowledge gained',
      status: 'Compliant'
    },
    {
      aspect: 'Evaluation Framework',
      description: 'Multi-stakeholder evaluation (Student, Faculty, Industry Mentor)',
      status: 'Compliant'
    },
    {
      aspect: 'Documentation Format',
      description: 'Follows UGC guidelines for internship report structure and content',
      status: 'Compliant'
    },
    {
      aspect: 'Academic Integration',
      description: 'Seamless integration with college transcript and grade system',
      status: 'Compliant'
    },
    {
      aspect: 'Verification System',
      description: 'Digital verification through QR codes and blockchain technology',
      status: 'Enhanced'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Daily Logging',
      description: 'Enter your daily work activities, tasks, and learnings in just 2-3 minutes',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Auto-Compilation',
      description: 'System automatically compiles your entries into structured reports',
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Review & Approve',
      description: 'Faculty and industry mentors review and approve your reports',
      icon: <Eye className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Generate Certificate',
      description: 'Receive verified digital certificate with QR code and blockchain proof',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: 'Reports Generated', value: '25,000+', icon: <FileText className="w-5 h-5" /> },
    { label: 'Time Saved', value: '90%', icon: <Clock className="w-5 h-5" /> },
    { label: 'NEP Compliance', value: '100%', icon: <CheckCircle2 className="w-5 h-5" /> },
    { label: 'Verification Rate', value: '99.9%', icon: <Shield className="w-5 h-5" /> }
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
                <h1 className="text-gray-900 dark:text-white">Digital Reports</h1>
                <p className="text-gray-600 dark:text-gray-400">NEP-compliant automated reporting</p>
              </div>
            </div>
            <Button onClick={() => onNavigate('register')} className="gap-2">
              Get Started <FileCheck className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Module 5</Badge>
              <h2 className="text-white mb-6">
                Auto-Generate NEP-Compliant Reports
              </h2>
              <p className="text-green-100 mb-8">
                Say goodbye to manual report writing. Our intelligent system automatically generates 
                daily logs, weekly summaries, and final reports that are 100% NEP 2020 compliant. 
                Every certificate is blockchain-verified to prevent fake certificates.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <h3 className="text-white mb-4">What You Get:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                    <span>Auto-generated daily, weekly & final reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                    <span>NEP-compliant format with credit calculation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                    <span>Blockchain-verified digital certificates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                    <span>QR code for instant verification</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  View Sample Report
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  How It Works
                </Button>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY2VydGlmaWNhdGUlMjByZXBvcnR8ZW58MXx8fHwxNzU5NTAxNDU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Digital reports and certificates"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <Card key={idx} className="p-6 text-center">
                <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-green-600 dark:text-green-400">
                  {stat.icon}
                </div>
                <div className="text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Report Types */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Complete Documentation</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              6 Types of Reports & Certificates
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive documentation system covering every stage of your internship journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportTypes.map((report) => (
              <Card key={report.id} className="p-6 hover:shadow-xl transition-all">
                <div className={`bg-${report.color}-100 dark:bg-${report.color}-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-${report.color}-600 dark:text-${report.color}-400`}>
                  {report.icon}
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-gray-900 dark:text-white">{report.name}</h3>
                  <Badge variant="secondary">{report.frequency}</Badge>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">{report.description}</p>

                <ul className="space-y-2">
                  {report.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full mt-4">
                  View Sample
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-600">Key Features</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Powerful Features That Save Time
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Advanced automation and verification features that make reporting effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                  {feature.icon}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-gray-900 dark:text-white">{feature.title}</h3>
                  <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                    {feature.benefit}
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEP Compliance */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-600">NEP 2020</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              100% NEP 2020 Compliant
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every aspect of our reporting system is designed to meet and exceed NEP 2020 requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nepCompliance.map((item, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-green-600">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-gray-900 dark:text-white">{item.aspect}</h3>
                  <Badge className={item.status === 'Enhanced' ? 'bg-blue-600' : 'bg-green-600'}>
                    {item.status}
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Simple 4-step process from daily logging to verified certificate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-green-600 dark:bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-400">
                  {item.step}
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Report Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">
              Sample Report Preview
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              See what your auto-generated reports will look like
            </p>
          </div>

          <Card className="p-8 max-w-4xl mx-auto">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-2">Final Internship Report</h3>
                  <p className="text-gray-600 dark:text-gray-400">Generated on October 3, 2025</p>
                </div>
                <Badge className="bg-green-600">NEP Compliant</Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Student Name</p>
                  <p className="text-gray-900 dark:text-white">Rahul Sharma</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Internship Duration</p>
                  <p className="text-gray-900 dark:text-white">6 months</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Company</p>
                  <p className="text-gray-900 dark:text-white">TechCorp India</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Credits Earned</p>
                  <p className="text-gray-900 dark:text-white">8 Credits</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-gray-900 dark:text-white mb-2">Learning Outcomes</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                    <span>Developed full-stack web applications using React and Node.js</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                    <span>Implemented RESTful APIs and database management</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                    <span>Collaborated in Agile teams using Git workflow</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 dark:text-white mb-2">Skills Acquired</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'MongoDB', 'Git', 'Agile', 'REST APIs'].map((skill, idx) => (
                    <Badge key={idx} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
              <Button variant="outline" className="gap-2">
                <QrCode className="w-4 h-4" />
                View QR Code
              </Button>
              <Button variant="outline" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Stop Writing Reports Manually
          </h2>
          <p className="text-green-100 mb-8">
            Let our intelligent system handle all your reporting while you focus on learning. 
            Get started today and experience the future of internship documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 gap-2">
              Start Free Trial <FileCheck className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Sample Reports
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}