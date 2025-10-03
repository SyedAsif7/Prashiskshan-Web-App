import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  ArrowLeft,
  Users,
  MessageSquare,
  Video,
  Calendar,
  CheckCircle2,
  Star,
  Award,
  TrendingUp,
  Heart,
  Target,
  BookOpen,
  Lightbulb,
  Clock,
  Shield,
  Zap,
  ThumbsUp,
  MessageCircle,
  Phone,
  Mail,
  Briefcase
} from 'lucide-react';

interface MentorshipProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export function Mentorship({ onBack, onNavigate }: MentorshipProps) {
  const mentorTypes = [
    {
      type: 'Faculty Mentor',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'College faculty assigned to guide and monitor your academic progress',
      responsibilities: [
        'Academic guidance and credit approval',
        'Weekly progress reviews',
        'NEP compliance monitoring',
        'Report verification and approval'
      ],
      color: 'blue'
    },
    {
      type: 'Industry Mentor',
      icon: <Briefcase className="w-6 h-6" />,
      description: 'Company supervisor who oversees your day-to-day internship work',
      responsibilities: [
        'Technical skill development',
        'Project assignment and feedback',
        'Performance evaluation',
        'Industry best practices training'
      ],
      color: 'purple'
    },
    {
      type: 'Career Counselor',
      icon: <Target className="w-6 h-6" />,
      description: 'Professional counselor to help with career planning and development',
      responsibilities: [
        'Career path guidance',
        'Resume and interview preparation',
        'Skill gap analysis',
        'Job placement assistance'
      ],
      color: 'green'
    }
  ];

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Real-Time Chat',
      description: 'Instant messaging with all your mentors for quick questions and updates',
      benefit: '24/7 support'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Video Sessions',
      description: 'Scheduled video calls for detailed discussions and code reviews',
      benefit: 'Face-to-face guidance'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Smart Scheduling',
      description: 'Easy booking system with calendar integration and reminders',
      benefit: 'No missed meetings'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Feedback System',
      description: 'Structured feedback on your work, progress, and areas of improvement',
      benefit: 'Continuous growth'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Milestone Tracking',
      description: 'Track learning goals and celebrate achievements with your mentors',
      benefit: 'Stay motivated'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Resource Sharing',
      description: 'Access to curated learning resources recommended by mentors',
      benefit: 'Faster learning'
    }
  ];

  const featuredMentors = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      role: 'Faculty Mentor',
      department: 'Computer Science',
      college: 'IIT Delhi',
      experience: '15 years',
      students: 45,
      rating: 4.9,
      specialization: ['Data Structures', 'Algorithms', 'System Design'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      availability: 'Mon-Fri, 10 AM - 5 PM'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Industry Mentor',
      department: 'Software Engineering',
      company: 'TechCorp India',
      experience: '12 years',
      students: 28,
      rating: 4.8,
      specialization: ['Full Stack Development', 'Cloud Computing', 'Microservices'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      availability: 'Flexible, Remote'
    },
    {
      id: 3,
      name: 'Anita Desai',
      role: 'Career Counselor',
      department: 'Career Development',
      company: 'Prashiskshan',
      experience: '10 years',
      students: 156,
      rating: 5.0,
      specialization: ['Resume Building', 'Interview Prep', 'Career Planning'],
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      availability: 'By Appointment'
    }
  ];

  const benefits = [
    {
      title: 'Personalized Guidance',
      description: 'Get one-on-one attention tailored to your learning style and goals',
      icon: <Target className="w-6 h-6" />,
      stat: '1:1 ratio'
    },
    {
      title: 'Expert Knowledge',
      description: 'Learn from professionals with 10+ years of industry experience',
      icon: <Star className="w-6 h-6" />,
      stat: '10+ years exp'
    },
    {
      title: 'Regular Feedback',
      description: 'Weekly check-ins and continuous feedback on your progress',
      icon: <TrendingUp className="w-6 h-6" />,
      stat: 'Weekly reviews'
    },
    {
      title: 'Career Support',
      description: 'Help with resume, interviews, and job placement after internship',
      icon: <Award className="w-6 h-6" />,
      stat: '85% placement'
    },
    {
      title: 'Skill Development',
      description: 'Structured learning path with hands-on projects and assignments',
      icon: <BookOpen className="w-6 h-6" />,
      stat: '40% faster growth'
    },
    {
      title: 'Networking',
      description: 'Build professional connections that help throughout your career',
      icon: <Users className="w-6 h-6" />,
      stat: 'Lifelong network'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Get Assigned',
      description: 'Automatically matched with faculty and industry mentors based on your internship',
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Schedule Sessions',
      description: 'Book weekly meetings, video calls, or chat sessions at your convenience',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Receive Guidance',
      description: 'Get help with technical issues, career questions, and academic requirements',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Track Progress',
      description: 'Regular reviews, milestone celebrations, and continuous improvement feedback',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: 'Active Mentors', value: '500+', icon: <Users className="w-5 h-5" /> },
    { label: 'Avg. Response Time', value: '< 2 hours', icon: <Clock className="w-5 h-5" /> },
    { label: 'Success Rate', value: '92%', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Satisfaction', value: '4.8/5', icon: <Star className="w-5 h-5" /> }
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
                <h1 className="text-gray-900 dark:text-white">Mentorship Program</h1>
                <p className="text-gray-600 dark:text-gray-400">Expert guidance every step of the way</p>
              </div>
            </div>
            <Button onClick={() => onNavigate('register')} className="gap-2">
              Find Mentor <Users className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-pink-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Personalized Support</Badge>
              <h2 className="text-white mb-6">
                Get Expert Mentorship Throughout Your Journey
              </h2>
              <p className="text-orange-100 mb-8">
                Never feel alone during your internship. Get paired with experienced faculty mentors, 
                industry professionals, and career counselors who guide you, review your work, and 
                help you grow. With real-time chat, video sessions, and weekly reviews, success is just a message away.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-white mb-1">500+</div>
                  <div className="text-orange-100">Expert Mentors</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-white mb-1">&lt; 2 hrs</div>
                  <div className="text-orange-100">Response Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-white mb-1">92%</div>
                  <div className="text-orange-100">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-white mb-1">4.8/5</div>
                  <div className="text-orange-100">Satisfaction</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Meet Mentors
                </Button>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1609503842755-77f4a81d69ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3IlMjBtZW50b3JzaGlwJTIwY29hY2hpbmd8ZW58MXx8fHwxNzU5NTAxNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mentorship and coaching"
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
                <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-orange-600 dark:text-orange-400">
                  {stat.icon}
                </div>
                <div className="text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Types */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Triple Support System</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Three Types of Mentors
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get comprehensive support from faculty, industry professionals, and career counselors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mentorTypes.map((mentor, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all">
                <div className={`bg-${mentor.color}-100 dark:bg-${mentor.color}-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-${mentor.color}-600 dark:text-${mentor.color}-400`}>
                  {mentor.icon}
                </div>
                
                <h3 className="text-gray-900 dark:text-white mb-3">{mentor.type}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{mentor.description}</p>

                <h4 className="text-gray-700 dark:text-gray-200 mb-2">Responsibilities:</h4>
                <ul className="space-y-2">
                  {mentor.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-600">Featured Mentors</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Meet Our Expert Mentors
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn from the best minds in academia and industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredMentors.map((mentor) => (
              <Card key={mentor.id} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900">{mentor.role}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-gray-900 dark:text-white mb-2">{mentor.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {mentor.department} • {mentor.college || mentor.company}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Experience</p>
                      <p className="text-gray-900 dark:text-white">{mentor.experience}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Students Mentored</p>
                      <p className="text-gray-900 dark:text-white">{mentor.students}+</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-900 dark:text-white">{mentor.rating}</span>
                    <span className="text-gray-600 dark:text-gray-400">rating</span>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Specialization:</p>
                    <div className="flex flex-wrap gap-2">
                      {mentor.specialization.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4 inline mr-2" />
                    {mentor.availability}
                  </div>

                  <Button className="w-full">Connect Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Platform Features</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Everything You Need to Connect
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Modern communication tools to make mentorship seamless and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400">
                  {feature.icon}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-gray-900 dark:text-white">{feature.title}</h3>
                  <Badge variant="secondary">{feature.benefit}</Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">
              Why Mentorship Matters
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The benefits of having dedicated mentors throughout your internship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-orange-600 dark:text-orange-400">
                    {benefit.icon}
                  </div>
                  <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                    {benefit.stat}
                  </Badge>
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
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
              Simple 4-step process to get expert mentorship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-orange-600 dark:bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <div className="bg-orange-100 dark:bg-orange-900/30 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600 dark:text-orange-400">
                  {item.step}
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-600 via-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Start Your Mentorship Journey Today
          </h2>
          <p className="text-orange-100 mb-8">
            Don't navigate your internship alone. Get paired with expert mentors who care 
            about your success and are invested in your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 gap-2">
              Find Your Mentor <Users className="w-5 h-5" />
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