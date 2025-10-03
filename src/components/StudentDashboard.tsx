import { useState } from 'react';
import { 
  Home, 
  Briefcase, 
  BookOpen, 
  FileText, 
  User as UserIcon, 
  Bell, 
  LogOut,
  Sun,
  Moon,
  Search,
  Filter,
  Calendar,
  MapPin,
  Clock,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Download
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { User } from '../App';
import { internships, filterInternships, Internship } from '../data/internships';
import { toast } from 'sonner@2.0.3';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';

interface StudentDashboardProps {
  user: User;
  onLogout: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

type DashboardView = 'overview' | 'browse' | 'applications' | 'logbook' | 'reports' | 'profile';

export function StudentDashboard({ user, onLogout, theme, toggleTheme }: StudentDashboardProps) {
  const [currentView, setCurrentView] = useState<DashboardView>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [modeFilter, setModeFilter] = useState('all');
  const [applications, setApplications] = useState<string[]>([]);

  const filteredInternships = filterInternships(searchTerm, industryFilter, modeFilter);

  const handleApply = (internshipId: string) => {
    if (applications.includes(internshipId)) {
      toast.info('You have already applied for this internship');
      return;
    }
    setApplications([...applications, internshipId]);
    toast.success('Application submitted successfully!');
  };

  const renderSidebar = () => (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-gray-900 dark:text-white truncate">{user.name}</h3>
            <p className="text-gray-500 dark:text-gray-400">Student</p>
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
            label="Browse Internships"
            active={currentView === 'browse'}
            onClick={() => setCurrentView('browse')}
          />
          <SidebarButton
            icon={<FileText className="w-5 h-5" />}
            label="My Applications"
            active={currentView === 'applications'}
            onClick={() => setCurrentView('applications')}
            badge={applications.length}
          />
          <SidebarButton
            icon={<BookOpen className="w-5 h-5" />}
            label="Logbook"
            active={currentView === 'logbook'}
            onClick={() => setCurrentView('logbook')}
          />
          <SidebarButton
            icon={<Download className="w-5 h-5" />}
            label="Reports"
            active={currentView === 'reports'}
            onClick={() => setCurrentView('reports')}
          />
          <SidebarButton
            icon={<UserIcon className="w-5 h-5" />}
            label="Profile"
            active={currentView === 'profile'}
            onClick={() => setCurrentView('profile')}
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
        {currentView === 'browse' && 'Browse Internships'}
        {currentView === 'applications' && 'My Applications'}
        {currentView === 'logbook' && 'Internship Logbook'}
        {currentView === 'reports' && 'Reports & Certificates'}
        {currentView === 'profile' && 'My Profile'}
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
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between mb-2">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-900 dark:text-blue-100">{applications.length}</span>
          </div>
          <p className="text-blue-700 dark:text-blue-300">Applications</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
            <span className="text-green-900 dark:text-green-100">2</span>
          </div>
          <p className="text-green-700 dark:text-green-300">Accepted</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-900 dark:text-purple-100">85%</span>
          </div>
          <p className="text-purple-700 dark:text-purple-300">Profile Score</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
          <div className="flex items-center justify-between mb-2">
            <BookOpen className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            <span className="text-orange-900 dark:text-orange-100">12</span>
          </div>
          <p className="text-orange-700 dark:text-orange-300">Skills Acquired</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Recommended Internships</h3>
          <div className="space-y-4">
            {internships.slice(0, 3).map(int => (
              <div key={int.id} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-gray-900 dark:text-white mb-1">{int.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{int.companyName}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <Badge variant="secondary">{int.mode}</Badge>
                    <span className="text-gray-500 dark:text-gray-500">{int.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Skill Progress</h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">Full Stack Development</span>
                <span className="text-gray-600 dark:text-gray-400">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">Data Science</span>
                <span className="text-gray-600 dark:text-gray-400">60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">Cloud Computing</span>
                <span className="text-gray-600 dark:text-gray-400">45%</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">Machine Learning</span>
                <span className="text-gray-600 dark:text-gray-400">30%</span>
              </div>
              <Progress value={30} className="h-2" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderBrowse = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search internships, skills, companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600"
            />
          </div>
          <Select value={industryFilter} onValueChange={setIndustryFilter}>
            <SelectTrigger className="w-full md:w-48 bg-white dark:bg-gray-900">
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              <SelectItem value="IT">IT</SelectItem>
              <SelectItem value="Analytics">Analytics</SelectItem>
              <SelectItem value="AI">AI</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
            </SelectContent>
          </Select>
          <Select value={modeFilter} onValueChange={setModeFilter}>
            <SelectTrigger className="w-full md:w-48 bg-white dark:bg-gray-900">
              <SelectValue placeholder="Mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Modes</SelectItem>
              <SelectItem value="Online">Online</SelectItem>
              <SelectItem value="On-site">On-site</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredInternships.map(int => (
          <InternshipCard
            key={int.id}
            internship={int}
            onApply={handleApply}
            applied={applications.includes(int.id)}
          />
        ))}
      </div>
    </div>
  );

  const renderApplications = () => {
    const appliedInternships = internships.filter(int => applications.includes(int.id));

    return (
      <div className="space-y-6">
        {appliedInternships.length === 0 ? (
          <Card className="p-12 text-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-gray-900 dark:text-white mb-2">No Applications Yet</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Start browsing internships and apply to get started
            </p>
            <Button onClick={() => setCurrentView('browse')}>
              Browse Internships
            </Button>
          </Card>
        ) : (
          <div className="space-y-4">
            {appliedInternships.map(int => (
              <Card key={int.id} className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-16 h-16 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 dark:text-white mb-2">{int.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">{int.companyName}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{int.mode}</Badge>
                        <Badge variant="outline">{int.duration}</Badge>
                        <Badge variant="outline">{int.industry}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Applied 2 days ago
                        </span>
                        <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                          Under Review
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderLogbook = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-gray-900 dark:text-white">Internship Logbook</h3>
          <Button onClick={() => toast.success('New entry added!')}>
            Add Entry
          </Button>
        </div>

        <Tabs defaultValue="week1">
          <TabsList>
            <TabsTrigger value="week1">Week 1</TabsTrigger>
            <TabsTrigger value="week2">Week 2</TabsTrigger>
            <TabsTrigger value="week3">Week 3</TabsTrigger>
            <TabsTrigger value="week4">Week 4</TabsTrigger>
          </TabsList>

          <TabsContent value="week1" className="space-y-4 mt-6">
            <LogbookEntry
              date="Oct 1, 2025"
              title="Project Setup & Orientation"
              description="Set up development environment, attended orientation session, met team members, and received project overview."
              hours={8}
              skills={['React', 'Git', 'Team Collaboration']}
            />
            <LogbookEntry
              date="Oct 2, 2025"
              title="Frontend Component Development"
              description="Built user authentication components using React and integrated with backend APIs."
              hours={8}
              skills={['React', 'REST API', 'CSS']}
            />
          </TabsContent>

          <TabsContent value="week2" className="space-y-4 mt-6">
            <p className="text-gray-600 dark:text-gray-400">No entries for Week 2 yet.</p>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <h3 className="text-gray-900 dark:text-white mb-6">Generate NEP-Compliant Report</h3>
        
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Select Internship</label>
            <Select>
              <SelectTrigger className="bg-white dark:bg-gray-900">
                <SelectValue placeholder="Choose internship" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="int1">Full Stack Web Development - TechVista</SelectItem>
                <SelectItem value="int2">Data Science - DataMinds</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Report Type</label>
            <Select>
              <SelectTrigger className="bg-white dark:bg-gray-900">
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly Report</SelectItem>
                <SelectItem value="final">Final Report</SelectItem>
                <SelectItem value="certificate">Completion Certificate</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button onClick={() => toast.success('Report generated successfully!')} className="gap-2">
          <Download className="w-4 h-4" />
          Generate Report (PDF)
        </Button>
      </Card>

      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <h3 className="text-gray-900 dark:text-white mb-4">Previous Reports</h3>
        <div className="space-y-3">
          <ReportItem
            title="Full Stack Internship - Final Report"
            date="Sep 30, 2025"
            type="Final Report"
          />
          <ReportItem
            title="Data Science Internship - Week 4 Report"
            date="Sep 28, 2025"
            type="Weekly Report"
          />
        </div>
      </Card>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-gray-900 dark:text-white mb-1">{user.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{user.email}</p>
            <Button variant="outline" size="sm">Edit Profile</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-gray-900 dark:text-white mb-4">Personal Information</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-gray-600 dark:text-gray-400 mb-1">University</label>
                <p className="text-gray-900 dark:text-white">XYZ Institute of Technology</p>
              </div>
              <div>
                <label className="block text-gray-600 dark:text-gray-400 mb-1">Degree</label>
                <p className="text-gray-900 dark:text-white">B.Tech Computer Science</p>
              </div>
              <div>
                <label className="block text-gray-600 dark:text-gray-400 mb-1">Year</label>
                <p className="text-gray-900 dark:text-white">3rd Year</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Python', 'JavaScript', 'MongoDB', 'Git', 'Docker', 'AWS'].map(skill => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
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
          {currentView === 'browse' && renderBrowse()}
          {currentView === 'applications' && renderApplications()}
          {currentView === 'logbook' && renderLogbook()}
          {currentView === 'reports' && renderReports()}
          {currentView === 'profile' && renderProfile()}
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
          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50'
      }`}
    >
      {icon}
      <span className="flex-1 text-left">{label}</span>
      {badge !== undefined && badge > 0 && (
        <Badge className="bg-blue-600 text-white">{badge}</Badge>
      )}
    </button>
  );
}

function InternshipCard({ internship, onApply, applied }: { internship: Internship; onApply: (id: string) => void; applied: boolean }) {
  return (
    <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
          <Briefcase className="w-7 h-7 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 dark:text-white mb-1">{internship.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3">{internship.companyName}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">{internship.mode}</Badge>
            <Badge variant="outline">{internship.duration}</Badge>
            <Badge variant="outline">{internship.industry}</Badge>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {internship.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {internship.skills.slice(0, 4).map(skill => (
              <span key={skill} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Apply by: {new Date(internship.applicationDeadline).toLocaleDateString()}
              </span>
              {internship.stipend && (
                <span className="text-green-600 dark:text-green-400">{internship.stipend}</span>
              )}
            </div>
            <Button
              onClick={() => onApply(internship.id)}
              disabled={applied}
              variant={applied ? 'outline' : 'default'}
            >
              {applied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Applied
                </>
              ) : (
                'Apply Now'
              )}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

function LogbookEntry({ date, title, description, hours, skills }: any) {
  return (
    <Card className="p-4 bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="text-gray-900 dark:text-white mb-1">{title}</h4>
          <p className="text-gray-600 dark:text-gray-400">{date}</p>
        </div>
        <Badge variant="secondary">{hours}h</Badge>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill: string) => (
          <Badge key={skill} variant="outline">{skill}</Badge>
        ))}
      </div>
    </Card>
  );
}

function ReportItem({ title, date, type }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
      <div className="flex items-center gap-3">
        <FileText className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        <div>
          <h4 className="text-gray-900 dark:text-white mb-1">{title}</h4>
          <p className="text-gray-600 dark:text-gray-400">{date}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="secondary">{type}</Badge>
        <Button variant="ghost" size="sm">
          <Download className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}