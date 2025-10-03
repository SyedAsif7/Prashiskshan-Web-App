import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  ArrowLeft,
  BookOpen,
  Award,
  Video,
  FileText,
  CheckCircle2,
  Clock,
  Users,
  TrendingUp,
  Target,
  Zap,
  Code,
  Briefcase,
  Globe,
  Rocket,
  Star,
  PlayCircle,
  Download,
  Share2
} from 'lucide-react';

interface SkillDevelopmentProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export function SkillDevelopment({ onBack, onNavigate }: SkillDevelopmentProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', count: 120 },
    { id: 'technical', name: 'Technical Skills', count: 45 },
    { id: 'soft', name: 'Soft Skills', count: 30 },
    { id: 'industry', name: 'Industry-Specific', count: 25 },
    { id: 'certification', name: 'Certifications', count: 20 }
  ];

  const featuredCourses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      category: 'Technical',
      duration: '8 weeks',
      level: 'Intermediate',
      students: 2847,
      rating: 4.8,
      modules: 12,
      skills: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
      progress: 0,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400'
    },
    {
      id: 2,
      title: 'Communication & Presentation Skills',
      category: 'Soft Skills',
      duration: '4 weeks',
      level: 'Beginner',
      students: 5234,
      rating: 4.9,
      modules: 8,
      skills: ['Public Speaking', 'Body Language', 'Storytelling', 'Confidence'],
      progress: 0,
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400'
    },
    {
      id: 3,
      title: 'Data Analytics with Python',
      category: 'Technical',
      duration: '6 weeks',
      level: 'Intermediate',
      students: 3421,
      rating: 4.7,
      modules: 10,
      skills: ['Python', 'Pandas', 'NumPy', 'Visualization'],
      progress: 0,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400'
    },
    {
      id: 4,
      title: 'Digital Marketing Fundamentals',
      category: 'Industry',
      duration: '5 weeks',
      level: 'Beginner',
      students: 4156,
      rating: 4.6,
      modules: 9,
      skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
      progress: 0,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400'
    },
    {
      id: 5,
      title: 'Cybersecurity Essentials',
      category: 'Technical',
      duration: '7 weeks',
      level: 'Advanced',
      students: 1892,
      rating: 4.9,
      modules: 11,
      skills: ['Network Security', 'Ethical Hacking', 'Encryption', 'Risk Management'],
      progress: 0,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400'
    },
    {
      id: 6,
      title: 'Leadership & Team Management',
      category: 'Soft Skills',
      duration: '6 weeks',
      level: 'Intermediate',
      students: 2763,
      rating: 4.8,
      skills: ['Leadership', 'Delegation', 'Conflict Resolution', 'Motivation'],
      modules: 10,
      progress: 0,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400'
    }
  ];

  const learningPaths = [
    {
      name: 'Software Engineer',
      courses: 8,
      duration: '6 months',
      skills: ['Programming', 'Algorithms', 'System Design', 'Version Control'],
      jobs: '15,000+ openings'
    },
    {
      name: 'Data Scientist',
      courses: 6,
      duration: '5 months',
      skills: ['Python', 'Statistics', 'Machine Learning', 'Data Visualization'],
      jobs: '8,000+ openings'
    },
    {
      name: 'Digital Marketer',
      courses: 5,
      duration: '4 months',
      skills: ['SEO', 'Content', 'Social Media', 'Analytics'],
      jobs: '12,000+ openings'
    },
    {
      name: 'Product Manager',
      courses: 7,
      duration: '5 months',
      skills: ['Product Strategy', 'Roadmapping', 'Agile', 'User Research'],
      jobs: '6,000+ openings'
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Industry-Recognized Certificates',
      description: 'Earn certificates that are valued by top companies and add them to your resume'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with 10+ years of real-world experience'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Hands-on Projects',
      description: 'Apply your learning through practical projects and real-world case studies'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Self-Paced Learning',
      description: 'Learn at your own pace with lifetime access to course materials'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Offline Access',
      description: 'Download videos and materials to learn without internet connectivity'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Career Support',
      description: 'Get placement assistance, resume reviews, and interview preparation'
    }
  ];

  const stats = [
    { label: 'Active Learners', value: '50,000+', icon: <Users className="w-5 h-5" /> },
    { label: 'Courses Available', value: '120+', icon: <BookOpen className="w-5 h-5" /> },
    { label: 'Completion Rate', value: '89%', icon: <Target className="w-5 h-5" /> },
    { label: 'Avg. Rating', value: '4.8/5', icon: <Star className="w-5 h-5" /> }
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
                <h1 className="text-gray-900 dark:text-white">Skill Development</h1>
                <p className="text-gray-600 dark:text-gray-400">Build industry-ready skills</p>
              </div>
            </div>
            <Button onClick={() => onNavigate('register')} className="gap-2">
              Get Started <Rocket className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Module 4</Badge>
              <h2 className="text-white mb-6">
                Master Skills That Matter
              </h2>
              <p className="text-blue-100 mb-8">
                Access 120+ industry-curated courses, hands-on projects, and expert-led training 
                to prepare for your internship and career. Learn technical skills, soft skills, 
                and earn certificates recognized by top companies.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <div className="text-white mb-1">50,000+</div>
                  <div className="text-blue-100">Active Learners</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <div className="text-white mb-1">120+</div>
                  <div className="text-blue-100">Courses</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <div className="text-white mb-1">89%</div>
                  <div className="text-blue-100">Success Rate</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Browse Courses
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Learning Paths
                </Button>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1673515335586-f9f662c01482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBvbmxpbmUlMjBjb3Vyc2V8ZW58MXx8fHwxNzU5NTAxNDU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Student learning online"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <Card key={idx} className="p-6 text-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-purple-600 dark:text-purple-400">
                  {stat.icon}
                </div>
                <div className="text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our comprehensive skill development program is designed to make you industry-ready 
              with practical knowledge and hands-on experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                  {benefit.icon}
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-gray-900 dark:text-white mb-2">Featured Courses</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Start learning with our most popular courses
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900">{course.category}</Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{course.level}</Badge>
                    <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-gray-900 dark:text-white">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-gray-900 dark:text-white mb-3">{course.title}</h3>

                  <div className="flex items-center gap-4 mb-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.modules} modules</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.skills.slice(0, 3).map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {course.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{course.skills.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <Button className="w-full gap-2">
                    <PlayCircle className="w-4 h-4" />
                    Start Learning
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-600">Career Paths</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Structured Learning Paths
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Follow curated learning paths designed by industry experts to master specific 
              career roles and land your dream job
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all border-t-4 border-purple-600">
                <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                
                <h3 className="text-gray-900 dark:text-white mb-4">{path.name}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
                    <span>Courses</span>
                    <span className="text-gray-900 dark:text-white">{path.courses}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
                    <span>Duration</span>
                    <span className="text-gray-900 dark:text-white">{path.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
                    <span>Job Openings</span>
                    <span className="text-green-600 dark:text-green-400">{path.jobs}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Key Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Explore Path
                </Button>
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
              A simple 4-step process to start your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Choose Your Course',
                description: 'Browse our catalog and select courses that match your goals',
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                step: '2',
                title: 'Learn at Your Pace',
                description: 'Watch videos, complete assignments, and practice with projects',
                icon: <PlayCircle className="w-6 h-6" />
              },
              {
                step: '3',
                title: 'Get Certified',
                description: 'Pass assessments and earn industry-recognized certificates',
                icon: <Award className="w-6 h-6" />
              },
              {
                step: '4',
                title: 'Apply for Internships',
                description: 'Use your new skills to apply for top internship opportunities',
                icon: <Rocket className="w-6 h-6" />
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-purple-600 dark:bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/30 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 dark:text-purple-400">
                  {item.step}
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to Build Your Skills?
          </h2>
          <p className="text-blue-100 mb-8">
            Join 50,000+ learners who are transforming their careers with our 
            industry-curated courses and expert-led training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 gap-2">
              Start Learning Free <Rocket className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View All Courses
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}