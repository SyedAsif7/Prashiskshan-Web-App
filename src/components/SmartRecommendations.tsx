import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  ArrowLeft,
  Brain,
  Target,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Users,
  Briefcase,
  Award,
  Code,
  Zap,
  BarChart3,
  Heart,
  MapPin,
  Clock,
  DollarSign,
  Star,
  ArrowRight,
  Filter,
  Sliders
} from 'lucide-react';

interface SmartRecommendationsProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export function SmartRecommendations({ onBack, onNavigate }: SmartRecommendationsProps) {
  const [matchScore, setMatchScore] = useState(85);

  const aiFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Skill Matching',
      description: 'AI analyzes your skills and matches you with internships that need exactly what you offer',
      metric: '95% accuracy'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Career Path Alignment',
      description: 'Recommendations based on your career goals, major, and future aspirations',
      metric: '3x better fit'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Learning Curve Analysis',
      description: 'Identifies opportunities that challenge you appropriately for maximum growth',
      metric: '40% faster growth'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Success Prediction',
      description: 'Predicts your likelihood of selection based on historical data and patterns',
      metric: '89% prediction rate'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Interest Alignment',
      description: 'Considers your interests, hobbies, and preferences for better engagement',
      metric: '2x engagement'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Dynamic Updates',
      description: 'Recommendations improve over time as you interact, apply, and gain experience',
      metric: 'Real-time learning'
    }
  ];

  const recommendedInternships = [
    {
      id: 1,
      title: 'Full Stack Developer Intern',
      company: 'TechCorp India',
      location: 'Bangalore, Karnataka',
      type: 'Remote',
      duration: '6 months',
      stipend: '₹20,000/month',
      matchScore: 95,
      matchReasons: [
        'Your React & Node.js skills are a perfect match',
        'Aligns with Computer Science major',
        '3 similar successful applications',
        'Company culture matches your preferences'
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
      applicants: 247,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400'
    },
    {
      id: 2,
      title: 'AI/ML Research Intern',
      company: 'DataScience Labs',
      location: 'Hyderabad, Telangana',
      type: 'Hybrid',
      duration: '5 months',
      stipend: '₹25,000/month',
      matchScore: 88,
      matchReasons: [
        'Python and ML skills align perfectly',
        'Research interest matches role',
        'Professor recommendation available',
        'Top performers in your college applied here'
      ],
      skills: ['Python', 'TensorFlow', 'Data Analysis', 'Research'],
      applicants: 189,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400'
    },
    {
      id: 3,
      title: 'Product Design Intern',
      company: 'DesignStudio',
      location: 'Mumbai, Maharashtra',
      type: 'On-site',
      duration: '4 months',
      stipend: '₹18,000/month',
      matchScore: 82,
      matchReasons: [
        'Your Figma portfolio is impressive',
        'Strong UI/UX fundamentals',
        'Creative problem-solving skills',
        'Similar career path students succeeded here'
      ],
      skills: ['Figma', 'UI/UX', 'Prototyping', 'User Research'],
      applicants: 312,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Profile Analysis',
      description: 'Our AI analyzes your skills, education, projects, interests, and career goals',
      details: [
        'Skills & certifications',
        'Academic performance',
        'Project portfolio',
        'Career aspirations',
        'Learning preferences'
      ]
    },
    {
      step: 2,
      title: 'Pattern Recognition',
      description: 'Machine learning identifies patterns from 10,000+ successful placements',
      details: [
        'Historical success data',
        'Industry hiring trends',
        'Skill demand analysis',
        'Company preferences',
        'Location preferences'
      ]
    },
    {
      step: 3,
      title: 'Smart Matching',
      description: 'Advanced algorithms score and rank internships based on 50+ parameters',
      details: [
        'Skill compatibility',
        'Career alignment',
        'Success probability',
        'Growth potential',
        'Personal preferences'
      ]
    },
    {
      step: 4,
      title: 'Continuous Learning',
      description: 'System learns from your behavior and refines recommendations over time',
      details: [
        'Application feedback',
        'Interview outcomes',
        'Saved preferences',
        'Interaction patterns',
        'Peer insights'
      ]
    }
  ];

  const stats = [
    { label: 'Match Accuracy', value: '95%', icon: <Target className="w-5 h-5" /> },
    { label: 'Success Rate', value: '3x Higher', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Time Saved', value: '70%', icon: <Clock className="w-5 h-5" /> },
    { label: 'User Satisfaction', value: '4.9/5', icon: <Star className="w-5 h-5" /> }
  ];

  const benefits = [
    {
      title: 'Save Time',
      description: 'No more scrolling through hundreds of irrelevant internships',
      impact: '70% time reduction'
    },
    {
      title: 'Higher Success',
      description: 'Apply to opportunities where you have the highest chance of selection',
      impact: '3x better conversion'
    },
    {
      title: 'Better Matches',
      description: 'Find internships that truly align with your skills and goals',
      impact: '95% satisfaction'
    },
    {
      title: 'Career Growth',
      description: 'Opportunities that accelerate your career trajectory',
      impact: '40% faster growth'
    },
    {
      title: 'Reduced Stress',
      description: 'Confidence in applying to pre-qualified opportunities',
      impact: '85% less anxiety'
    },
    {
      title: 'Personalized',
      description: 'Recommendations unique to you, not generic suggestions',
      impact: '100% tailored'
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
                <h1 className="text-gray-900 dark:text-white">Smart Recommendations</h1>
                <p className="text-gray-600 dark:text-gray-400">AI-powered internship matching</p>
              </div>
            </div>
            <Button onClick={() => onNavigate('register')} className="gap-2">
              Get Recommendations <Sparkles className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">AI-Powered</Badge>
              <h2 className="text-white mb-6">
                Find Perfect Internships with AI
              </h2>
              <p className="text-blue-100 mb-8">
                Our advanced AI analyzes your profile, skills, and career goals to recommend 
                internships with 95% match accuracy. Stop wasting time on irrelevant opportunities 
                and focus on roles where you'll thrive.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-100">Your Match Score</span>
                  <span className="text-white">{matchScore}%</span>
                </div>
                <Progress value={matchScore} className="h-3 bg-white/20" />
                <p className="text-blue-100 mt-3">
                  Based on your profile, you have excellent matches waiting!
                </p>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  See How It Works
                </Button>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1646583288948-24548aedffd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcmVjb21tZW5kYXRpb258ZW58MXx8fHwxNzU5NTAxNDU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI recommendation system"
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
                <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-blue-600 dark:text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-600">Intelligent Features</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              How AI Makes Better Recommendations
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our recommendation engine uses advanced machine learning to analyze multiple 
              factors and deliver personalized internship matches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                  {feature.icon}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-gray-900 dark:text-white">{feature.title}</h3>
                  <Badge variant="secondary">{feature.metric}</Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Internships Example */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Example Recommendations</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Personalized Matches Just for You
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how our AI matches your profile with relevant opportunities and explains why each is a good fit
            </p>
          </div>

          <div className="space-y-6">
            {recommendedInternships.map((internship) => (
              <Card key={internship.id} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-gray-900 dark:text-white">{internship.title}</h3>
                          <div className="flex items-center gap-2">
                            <div className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                              <span className="text-green-700 dark:text-green-300">{internship.matchScore}% Match</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{internship.company}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{internship.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Briefcase className="w-4 h-4" />
                        <span>{internship.type}</span>
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

                    <div className="mb-4">
                      <p className="text-gray-700 dark:text-gray-200 mb-2">Why this is a great match:</p>
                      <ul className="space-y-2">
                        {internship.matchReasons.map((reason, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                            <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {internship.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <Button className="gap-2">
                        Apply Now <ArrowRight className="w-4 h-4" />
                      </Button>
                      <Button variant="outline">Save for Later</Button>
                      <span className="text-gray-600 dark:text-gray-400">
                        {internship.applicants} applicants
                      </span>
                    </div>
                  </div>

                  <div className="relative h-64 lg:h-auto">
                    <ImageWithFallback
                      src={internship.image}
                      alt={internship.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our 4-step AI process ensures you get the most relevant internship recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, idx) => (
              <Card key={idx} className="p-6">
                <div className="bg-blue-600 dark:bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                  {item.step}
                </div>
                <h3 className="text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">Benefits You'll Love</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-gray-900 dark:text-white">{benefit.title}</h3>
                  <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                    {benefit.impact}
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Start Getting Smart Recommendations Today
          </h2>
          <p className="text-blue-100 mb-8">
            Join thousands of students who have found their perfect internships through our AI-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 gap-2">
              Create Free Profile <Sparkles className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}