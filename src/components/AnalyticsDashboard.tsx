import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  ArrowLeft,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Briefcase,
  Award,
  Target,
  PieChart,
  Activity,
  CheckCircle2,
  Clock,
  MapPin,
  DollarSign,
  Star,
  ArrowRight,
  Download,
  Filter,
  Calendar,
  Building2,
  GraduationCap,
  Zap,
  Eye,
  LineChart
} from 'lucide-react';

interface AnalyticsDashboardProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export function AnalyticsDashboard({ onBack, onNavigate }: AnalyticsDashboardProps) {
  const dashboardTypes = [
    {
      role: 'Students',
      icon: <GraduationCap className="w-6 h-6" />,
      description: 'Track your applications, skill progress, and internship performance',
      features: [
        'Application success rate',
        'Skill development charts',
        'Learning progress tracking',
        'Internship performance metrics',
        'Recommendation effectiveness',
        'Time-to-hire analytics'
      ],
      color: 'blue'
    },
    {
      role: 'Faculty',
      icon: <Users className="w-6 h-6" />,
      description: 'Monitor student progress, department statistics, and placement outcomes',
      features: [
        'Student participation rates',
        'Department-wise analytics',
        'Internship completion tracking',
        'NEP credit distribution',
        'Mentor engagement metrics',
        'Academic performance correlation'
      ],
      color: 'purple'
    },
    {
      role: 'Industry Partners',
      icon: <Building2 className="w-6 h-6" />,
      description: 'Analyze candidate quality, hiring metrics, and ROI on internship programs',
      features: [
        'Application volume trends',
        'Candidate quality scores',
        'Skill match analytics',
        'Conversion rate tracking',
        'Intern performance metrics',
        'ROI on internship programs'
      ],
      color: 'green'
    }
  ];

  const analyticsFeatures = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-Time Data',
      description: 'Live updates on all metrics with instant refresh and accurate insights',
      benefit: 'Always current'
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: 'Visual Charts',
      description: 'Beautiful, interactive charts and graphs for easy data interpretation',
      benefit: 'Quick insights'
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: 'Export Reports',
      description: 'Download detailed reports in PDF, Excel, or CSV formats',
      benefit: 'Share anywhere'
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: 'Advanced Filters',
      description: 'Filter data by date, department, location, skills, and more',
      benefit: 'Precise analysis'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Trend Analysis',
      description: 'Identify patterns and trends over time with predictive analytics',
      benefit: 'Future planning'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Custom Goals',
      description: 'Set and track custom KPIs and performance targets',
      benefit: 'Goal-driven'
    }
  ];

  const sampleMetrics = [
    {
      category: 'Student Analytics',
      metrics: [
        { label: 'Total Applications', value: '247', change: '+12%', trend: 'up' },
        { label: 'Acceptance Rate', value: '68%', change: '+5%', trend: 'up' },
        { label: 'Avg. Response Time', value: '3.2 days', change: '-0.5', trend: 'up' },
        { label: 'Skills Developed', value: '23', change: '+8', trend: 'up' }
      ]
    },
    {
      category: 'Faculty Analytics',
      metrics: [
        { label: 'Active Students', value: '156', change: '+18', trend: 'up' },
        { label: 'Completion Rate', value: '92%', change: '+3%', trend: 'up' },
        { label: 'Avg. Credits/Student', value: '7.8', change: '+0.4', trend: 'up' },
        { label: 'Faculty Engagement', value: '95%', change: '+2%', trend: 'up' }
      ]
    },
    {
      category: 'Industry Analytics',
      metrics: [
        { label: 'Total Applicants', value: '1,247', change: '+125', trend: 'up' },
        { label: 'Quality Score', value: '8.4/10', change: '+0.3', trend: 'up' },
        { label: 'Conversion Rate', value: '24%', change: '+2%', trend: 'up' },
        { label: 'Time to Hire', value: '12 days', change: '-3', trend: 'up' }
      ]
    }
  ];

  const insights = [
    {
      title: 'Peak Application Season',
      description: 'Most applications happen in August-September for semester internships',
      icon: <Calendar className="w-5 h-5" />,
      actionable: 'Plan recruitment campaigns accordingly'
    },
    {
      title: 'Top Skills in Demand',
      description: 'React, Python, and Data Analysis are the most sought-after skills',
      icon: <Star className="w-5 h-5" />,
      actionable: 'Focus training programs on these skills'
    },
    {
      title: 'Geographic Trends',
      description: 'Bangalore, Hyderabad, and Pune have highest internship concentration',
      icon: <MapPin className="w-5 h-5" />,
      actionable: 'Expand partnerships in these cities'
    },
    {
      title: 'Success Predictors',
      description: 'Students with 3+ projects have 2x higher acceptance rates',
      icon: <Target className="w-5 h-5" />,
      actionable: 'Encourage project-based learning'
    }
  ];

  const dashboardPreviews = [
    {
      title: 'Application Funnel',
      description: 'Visualize your application journey from browsing to acceptance',
      values: {
        browsed: 150,
        applied: 85,
        shortlisted: 32,
        interviewed: 18,
        accepted: 12
      }
    },
    {
      title: 'Skill Progress',
      description: 'Track your skill development over time',
      skills: [
        { name: 'React', progress: 85 },
        { name: 'Python', progress: 72 },
        { name: 'Communication', progress: 90 },
        { name: 'Problem Solving', progress: 78 }
      ]
    },
    {
      title: 'Industry Distribution',
      description: 'Where students are getting placed',
      industries: [
        { name: 'IT/Software', percentage: 45 },
        { name: 'Data Science', percentage: 20 },
        { name: 'Digital Marketing', percentage: 15 },
        { name: 'Design', percentage: 10 },
        { name: 'Others', percentage: 10 }
      ]
    }
  ];

  const stats = [
    { label: 'Data Points Tracked', value: '50+', icon: <Activity className="w-5 h-5" /> },
    { label: 'Real-Time Updates', value: '< 1 sec', icon: <Zap className="w-5 h-5" /> },
    { label: 'Report Types', value: '15+', icon: <BarChart3 className="w-5 h-5" /> },
    { label: 'Export Formats', value: '3', icon: <Download className="w-5 h-5" /> }
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
                <h1 className="text-gray-900 dark:text-white">Analytics Dashboard</h1>
                <p className="text-gray-600 dark:text-gray-400">Data-driven insights and reporting</p>
              </div>
            </div>
            <Button onClick={() => onNavigate('register')} className="gap-2">
              View Dashboard <BarChart3 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Data-Driven</Badge>
              <h2 className="text-white mb-6">
                Make Decisions Based on Real Data
              </h2>
              <p className="text-indigo-100 mb-8">
                Comprehensive analytics dashboard for students, faculty, and industry partners. 
                Track 50+ metrics in real-time, visualize trends, generate reports, and make 
                data-driven decisions to improve outcomes. From application success rates to 
                ROI analysis, get insights that matter.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-white mb-1">50+</div>
                  <div className="text-indigo-100">Data Points</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-white mb-1">Real-Time</div>
                  <div className="text-indigo-100">Updates</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-white mb-1">15+</div>
                  <div className="text-indigo-100">Report Types</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-white mb-1">100%</div>
                  <div className="text-indigo-100">Accurate</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  View Demo Dashboard
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  See Features
                </Button>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBjaGFydHN8ZW58MXx8fHwxNzU5NDc0NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Analytics dashboard"
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
                <div className="bg-indigo-100 dark:bg-indigo-900/30 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-indigo-600 dark:text-indigo-400">
                  {stat.icon}
                </div>
                <div className="text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Types */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Role-Based Views</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Customized Dashboards for Every Role
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Each stakeholder gets a tailored analytics experience with relevant metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dashboardTypes.map((dashboard, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all">
                <div className={`bg-${dashboard.color}-100 dark:bg-${dashboard.color}-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-${dashboard.color}-600 dark:text-${dashboard.color}-400`}>
                  {dashboard.icon}
                </div>
                
                <h3 className="text-gray-900 dark:text-white mb-3">{dashboard.role}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{dashboard.description}</p>

                <h4 className="text-gray-700 dark:text-gray-200 mb-2">Key Metrics:</h4>
                <ul className="space-y-2">
                  {dashboard.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full mt-4">
                  View Sample Dashboard
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Metrics */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-600">Live Metrics</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Sample Metrics & KPIs
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See examples of the kind of data you can track and analyze
            </p>
          </div>

          <div className="space-y-8">
            {sampleMetrics.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-gray-900 dark:text-white mb-4">{section.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.metrics.map((metric, i) => (
                    <Card key={i} className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600 dark:text-gray-400">{metric.label}</span>
                        <Badge 
                          className={metric.trend === 'up' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'}
                        >
                          {metric.change}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-gray-900 dark:text-white">{metric.value}</h3>
                        {metric.trend === 'up' ? (
                          <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                        ) : (
                          <TrendingDown className="w-5 h-5 text-red-600 dark:text-red-400" />
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Previews */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">
              Visual Analytics Examples
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Beautiful, interactive charts that make data easy to understand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dashboardPreviews.map((preview, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-gray-900 dark:text-white mb-2">{preview.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{preview.description}</p>

                {preview.values && (
                  <div className="space-y-3">
                    {Object.entries(preview.values).map(([key, value], i) => {
                      const percentage = (value / preview.values.browsed) * 100;
                      return (
                        <div key={i}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-gray-700 dark:text-gray-200 capitalize">{key}</span>
                            <span className="text-gray-900 dark:text-white">{value}</span>
                          </div>
                          <Progress value={percentage} className="h-2" />
                        </div>
                      );
                    })}
                  </div>
                )}

                {preview.skills && (
                  <div className="space-y-3">
                    {preview.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-700 dark:text-gray-200">{skill.name}</span>
                          <span className="text-gray-900 dark:text-white">{skill.progress}%</span>
                        </div>
                        <Progress value={skill.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                )}

                {preview.industries && (
                  <div className="space-y-2">
                    {preview.industries.map((industry, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-gray-700 dark:text-gray-200">{industry.name}</span>
                        <Badge variant="secondary">{industry.percentage}%</Badge>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Powerful Features</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Advanced Analytics Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analyticsFeatures.map((feature, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
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

      {/* Insights */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-600">AI Insights</Badge>
            <h2 className="text-gray-900 dark:text-white mb-4">
              Actionable Insights from Data
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI analyzes patterns and trends to provide actionable recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((insight, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-purple-600">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-purple-600 dark:text-purple-400">
                    {insight.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 dark:text-white mb-2">{insight.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{insight.description}</p>
                    <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                      💡 {insight.actionable}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Start Making Data-Driven Decisions
          </h2>
          <p className="text-indigo-100 mb-8">
            Access powerful analytics that help you understand trends, optimize strategies, 
            and achieve better outcomes for students, faculty, and industry partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 gap-2">
              View Demo Dashboard <BarChart3 className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Request Access
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}