import { useState } from 'react';
import {
  Home,
  Briefcase,
  Users,
  TrendingUp,
  Plus,
  Bell,
  LogOut,
  Sun,
  Moon,
  Building2,
  Search,
  Eye,
  CheckCircle2,
  XCircle,
  Clock,
  Mail,
  Phone,
  GraduationCap
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { User } from '../App';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface IndustryDashboardProps {
  user: User;
  onLogout: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

type DashboardView = 'overview' | 'internships' | 'applicants' | 'analytics';

export function IndustryDashboard({ user, onLogout, theme, toggleTheme }: IndustryDashboardProps) {
  const [currentView, setCurrentView] = useState<DashboardView>('overview');
  const [postings, setPostings] = useState([
    {
      id: 'post-1',
      title: 'Full Stack Web Development Internship',
      duration: '8 weeks',
      mode: 'Hybrid',
      openings: 10,
      applicants: 45,
      status: 'active'
    },
    {
      id: 'post-2',
      title: 'Data Science & Analytics Internship',
      duration: '10 weeks',
      mode: 'Online',
      openings: 8,
      applicants: 67,
      status: 'active'
    }
  ]);

  const skillsData = [
    { name: 'React', value: 120 },
    { name: 'Python', value: 95 },
    { name: 'Node.js', value: 85 },
    { name: 'Machine Learning', value: 70 },
    { name: 'Docker', value: 55 }
  ];

  const applicationsData = [
    { month: 'Jun', applications: 45 },
    { month: 'Jul', applications: 67 },
    { month: 'Aug', applications: 89 },
    { month: 'Sep', applications: 112 },
    { month: 'Oct', applications: 98 }
  ];

  const COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'];

  const renderSidebar = () => (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center">
            <Building2 className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-gray-900 dark:text-white truncate">{user.name}</h3>
            <p className="text-gray-500 dark:text-gray-400">Industry Partner</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-1">
          <SidebarButton
            icon={<Home className="w-5 h-5" />}
            label="Overview"
            active={currentView === 'overview'}
            onClick={() => setCurrentView('overview')}
          />
          <SidebarButton
            icon={<Briefcase className="w-5 h-5" />}
            label="My Postings"
            active={currentView === 'internships'}
            onClick={() => setCurrentView('internships')}
            badge={postings.length}
          />
          <SidebarButton
            icon={<Users className="w-5 h-5" />}
            label="Applicants"
            active={currentView === 'applicants'}
            onClick={() => setCurrentView('applicants')}
          />
          <SidebarButton
            icon={<TrendingUp className="w-5 h-5" />}
            label="Analytics"
            active={currentView === 'analytics'}
            onClick={() => setCurrentView('analytics')}
          />
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
          onClick={onLogout}
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );

  const renderTopBar = () => (
    <div className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
      <h1 className="text-gray-900 dark:text-white">
        {currentView === 'overview' && 'Dashboard Overview'}
        {currentView === 'internships' && 'My Internship Postings'}
        {currentView === 'applicants' && 'Applicant Management'}
        {currentView === 'analytics' && 'Analytics & Insights'}
      </h1>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </Button>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </Button>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between mb-2">
            <Briefcase className="w-8 h-8 text-green-600 dark:text-green-400" />
            <span className="text-green-900 dark:text-green-100">{postings.length}</span>
          </div>
          <p className="text-green-700 dark:text-green-300">Active Postings</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-900 dark:text-blue-100">112</span>
          </div>
          <p className="text-blue-700 dark:text-blue-300">Total Applicants</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-900 dark:text-purple-100">28</span>
          </div>
          <p className="text-purple-700 dark:text-purple-300">Selected</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
          <div className="flex items-center justify-between mb-2">
            <GraduationCap className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            <span className="text-orange-900 dark:text-orange-100">15</span>
          </div>
          <p className="text-orange-700 dark:text-orange-300">Colleges</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Recent Applications</h3>
          <div className="space-y-4">
            {mockApplicants.slice(0, 5).map(applicant => (
              <div key={applicant.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    {applicant.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white">{applicant.name}</p>
                    <p className="text-gray-600 dark:text-gray-400">{applicant.position}</p>
                  </div>
                </div>
                <Badge variant="secondary">{applicant.status}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Top Skills in Demand</h3>
          <div className="space-y-3">
            {skillsData.map((skill, idx) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.value} applicants</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 dark:bg-blue-400 rounded-full"
                    style={{ width: `${(skill.value / 120) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  const renderInternships = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search postings..."
            className="pl-10 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600"
          />
        </div>
        <PostInternshipDialog />
      </div>

      <div className="space-y-4">
        {postings.map(posting => (
          <Card key={posting.id} className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-gray-900 dark:text-white">{posting.title}</h3>
                  <Badge className={posting.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : ''}>
                    {posting.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {posting.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {posting.openings} openings
                  </span>
                  <Badge variant="outline">{posting.mode}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 dark:text-gray-300">
                    {posting.applicants} applications received
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderApplicants = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search applicants..."
              className="pl-10 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600"
            />
          </div>
          <Select>
            <SelectTrigger className="w-48 bg-white dark:bg-gray-900">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Applications</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="shortlisted">Shortlisted</SelectItem>
              <SelectItem value="selected">Selected</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          {mockApplicants.map(applicant => (
            <ApplicantCard key={applicant.id} applicant={applicant} />
          ))}
        </div>
      </Card>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Application Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={applicationsData}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
              <XAxis dataKey="month" stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'} />
              <YAxis stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme === 'dark' ? '#1F2937' : '#FFFFFF',
                  border: `1px solid ${theme === 'dark' ? '#374151' : '#E5E7EB'}`,
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="applications" fill="#3B82F6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Skills Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={skillsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => entry.name}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {skillsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <h3 className="text-gray-900 dark:text-white mb-4">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
            <p className="text-gray-600 dark:text-gray-400 mb-2">Average Time to Hire</p>
            <p className="text-gray-900 dark:text-white">14 days</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
            <p className="text-gray-600 dark:text-gray-400 mb-2">Offer Acceptance Rate</p>
            <p className="text-gray-900 dark:text-white">87%</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
            <p className="text-gray-600 dark:text-gray-400 mb-2">Completion Rate</p>
            <p className="text-gray-900 dark:text-white">92%</p>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="flex h-screen">
      {renderSidebar()}
      <div className="flex-1 flex flex-col overflow-hidden">
        {renderTopBar()}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900">
          {currentView === 'overview' && renderOverview()}
          {currentView === 'internships' && renderInternships()}
          {currentView === 'applicants' && renderApplicants()}
          {currentView === 'analytics' && renderAnalytics()}
        </div>
      </div>
    </div>
  );
}

function SidebarButton({ icon, label, active, onClick, badge }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        active
          ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50'
      }`}
    >
      {icon}
      <span className="flex-1 text-left">{label}</span>
      {badge !== undefined && badge > 0 && (
        <Badge className="bg-green-600 text-white">{badge}</Badge>
      )}
    </button>
  );
}

function PostInternshipDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Post New Internship
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-gray-900 dark:text-white">Post New Internship</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div>
            <Label className="text-gray-700 dark:text-gray-300">Internship Title</Label>
            <Input placeholder="e.g., Full Stack Web Development" className="mt-2 bg-white dark:bg-gray-900" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-gray-700 dark:text-gray-300">Duration</Label>
              <Input placeholder="e.g., 8 weeks" className="mt-2 bg-white dark:bg-gray-900" />
            </div>
            <div>
              <Label className="text-gray-700 dark:text-gray-300">Mode</Label>
              <Select>
                <SelectTrigger className="mt-2 bg-white dark:bg-gray-900">
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="onsite">On-site</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label className="text-gray-700 dark:text-gray-300">Description</Label>
            <Textarea placeholder="Describe the internship..." className="mt-2 bg-white dark:bg-gray-900" rows={4} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-gray-700 dark:text-gray-300">Openings</Label>
              <Input type="number" placeholder="10" className="mt-2 bg-white dark:bg-gray-900" />
            </div>
            <div>
              <Label className="text-gray-700 dark:text-gray-300">Stipend</Label>
              <Input placeholder="₹15,000/month" className="mt-2 bg-white dark:bg-gray-900" />
            </div>
          </div>
          <Button className="w-full" onClick={() => toast.success('Internship posted successfully!')}>
            Post Internship
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ApplicantCard({ applicant }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
      <div className="flex items-center gap-4 flex-1">
        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          {applicant.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h4 className="text-gray-900 dark:text-white mb-1">{applicant.name}</h4>
          <p className="text-gray-600 dark:text-gray-400">{applicant.position}</p>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-gray-500 dark:text-gray-500 flex items-center gap-1">
              <GraduationCap className="w-4 h-4" />
              {applicant.university}
            </span>
            <Badge variant="secondary">{applicant.year}</Badge>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="outline">{applicant.status}</Badge>
        <Button variant="ghost" size="sm">
          <Eye className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="sm" className="text-green-600 dark:text-green-400">
          <CheckCircle2 className="w-4 h-4 mr-1" />
          Shortlist
        </Button>
      </div>
    </div>
  );
}

const mockApplicants = [
  {
    id: 'app-1',
    name: 'Rahul Kumar',
    position: 'Full Stack Web Development',
    university: 'IIT Delhi',
    year: '3rd Year',
    status: 'Pending'
  },
  {
    id: 'app-2',
    name: 'Priya Sharma',
    position: 'Data Science Internship',
    university: 'NIT Trichy',
    year: 'Final Year',
    status: 'Shortlisted'
  },
  {
    id: 'app-3',
    name: 'Amit Patel',
    position: 'Full Stack Web Development',
    university: 'BITS Pilani',
    year: '2nd Year',
    status: 'Pending'
  },
  {
    id: 'app-4',
    name: 'Sneha Reddy',
    position: 'Data Science Internship',
    university: 'VIT Vellore',
    year: '3rd Year',
    status: 'Selected'
  }
];