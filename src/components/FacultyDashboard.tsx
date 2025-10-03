import { useState } from 'react';
import {
  Home,
  Users,
  CheckCircle2,
  FileText,
  TrendingUp,
  Bell,
  LogOut,
  Sun,
  Moon,
  Search,
  Eye,
  ThumbsUp,
  MessageSquare,
  Award,
  Calendar,
  BookOpen
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { User } from '../App';
import { toast } from 'sonner@2.0.3';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface FacultyDashboardProps {
  user: User;
  onLogout: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

type DashboardView = 'overview' | 'students' | 'approvals' | 'analytics';

export function FacultyDashboard({ user, onLogout, theme, toggleTheme }: FacultyDashboardProps) {
  const [currentView, setCurrentView] = useState<DashboardView>('overview');

  const renderSidebar = () => (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-gray-900 dark:text-white truncate">{user.name}</h3>
            <p className="text-gray-500 dark:text-gray-400">Faculty</p>
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
            icon={<Users className="w-5 h-5" />}
            label="My Students"
            active={currentView === 'students'}
            onClick={() => setCurrentView('students')}
            badge={12}
          />
          <SidebarButton
            icon={<CheckCircle2 className="w-5 h-5" />}
            label="Pending Approvals"
            active={currentView === 'approvals'}
            onClick={() => setCurrentView('approvals')}
            badge={5}
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
        {currentView === 'students' && 'Student Mentoring'}
        {currentView === 'approvals' && 'Pending Approvals'}
        {currentView === 'analytics' && 'Performance Analytics'}
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
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-900 dark:text-purple-100">12</span>
          </div>
          <p className="text-purple-700 dark:text-purple-300">Mentees</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-900 dark:text-blue-100">5</span>
          </div>
          <p className="text-blue-700 dark:text-blue-300">Pending Approvals</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between mb-2">
            <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
            <span className="text-green-900 dark:text-green-100">24</span>
          </div>
          <p className="text-green-700 dark:text-green-300">Credits Approved</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            <span className="text-orange-900 dark:text-orange-100">4.5</span>
          </div>
          <p className="text-orange-700 dark:text-orange-300">Avg Performance</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Recent Student Activities</h3>
          <div className="space-y-4">
            {studentActivities.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  {activity.studentName.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 dark:text-white mb-1">{activity.studentName}</p>
                  <p className="text-gray-600 dark:text-gray-400">{activity.activity}</p>
                  <p className="text-gray-500 dark:text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Student Performance Overview</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">Excellent</span>
                <span className="text-gray-600 dark:text-gray-400">5 students</span>
              </div>
              <Progress value={42} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">Good</span>
                <span className="text-gray-600 dark:text-gray-400">4 students</span>
              </div>
              <Progress value={33} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">Average</span>
                <span className="text-gray-600 dark:text-gray-400">2 students</span>
              </div>
              <Progress value={17} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">Needs Improvement</span>
                <span className="text-gray-600 dark:text-gray-400">1 student</span>
              </div>
              <Progress value={8} className="h-2" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search students..."
            className="pl-10 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600"
          />
        </div>

        <Tabs defaultValue="active">
          <TabsList>
            <TabsTrigger value="active">Active (12)</TabsTrigger>
            <TabsTrigger value="completed">Completed (8)</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-6 space-y-3">
            {mockStudents.map(student => (
              <StudentCard key={student.id} student={student} />
            ))}
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
            <p className="text-gray-600 dark:text-gray-400 text-center py-8">
              No completed internships to display
            </p>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );

  const renderApprovals = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <h3 className="text-gray-900 dark:text-white mb-6">Pending Report Approvals</h3>
        <div className="space-y-4">
          {pendingApprovals.map(approval => (
            <ApprovalCard key={approval.id} approval={approval} />
          ))}
        </div>
      </Card>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-gray-600 dark:text-gray-400 mb-2">Total Students Mentored</h4>
          <p className="text-gray-900 dark:text-white mb-1">24</p>
          <p className="text-green-600 dark:text-green-400">+4 this semester</p>
        </Card>
        <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-gray-600 dark:text-gray-400 mb-2">Success Rate</h4>
          <p className="text-gray-900 dark:text-white mb-1">92%</p>
          <p className="text-green-600 dark:text-green-400">Above average</p>
        </Card>
        <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-gray-600 dark:text-gray-400 mb-2">Industry Partnerships</h4>
          <p className="text-gray-900 dark:text-white mb-1">8</p>
          <p className="text-blue-600 dark:text-blue-400">Active MoUs</p>
        </Card>
      </div>

      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <h3 className="text-gray-900 dark:text-white mb-4">Top Performing Students</h3>
        <div className="space-y-3">
          {mockStudents.slice(0, 5).map((student, idx) => (
            <div key={student.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
              <div className="flex items-center gap-4">
                <span className="text-gray-900 dark:text-white">#{idx + 1}</span>
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {student.name.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white">{student.name}</p>
                  <p className="text-gray-600 dark:text-gray-400">{student.internship}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="secondary">{student.progress}% complete</Badge>
                <div className="text-right">
                  <p className="text-gray-900 dark:text-white">{student.rating}/5</p>
                  <p className="text-gray-600 dark:text-gray-400">Rating</p>
                </div>
              </div>
            </div>
          ))}
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
          {currentView === 'students' && renderStudents()}
          {currentView === 'approvals' && renderApprovals()}
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
          ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50'
      }`}
    >
      {icon}
      <span className="flex-1 text-left">{label}</span>
      {badge !== undefined && badge > 0 && (
        <Badge className="bg-purple-600 text-white">{badge}</Badge>
      )}
    </button>
  );
}

function StudentCard({ student }: any) {
  return (
    <Card className="p-4 bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4 flex-1">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
            {student.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h4 className="text-gray-900 dark:text-white mb-1">{student.name}</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{student.internship}</p>
            <div className="flex items-center gap-4 mb-3">
              <Badge variant="secondary">{student.year}</Badge>
              <span className="text-gray-600 dark:text-gray-400">Rating: {student.rating}/5</span>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-600 dark:text-gray-400">Progress</span>
                <span className="text-gray-900 dark:text-white">{student.progress}%</span>
              </div>
              <Progress value={student.progress} className="h-2" />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <ProvideFeedbackDialog studentName={student.name} />
          <Button variant="ghost" size="sm">
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

function ApprovalCard({ approval }: any) {
  const handleApprove = () => {
    toast.success(`Report approved for ${approval.studentName}`);
  };

  const handleReject = () => {
    toast.error(`Report sent back for revision`);
  };

  return (
    <Card className="p-6 bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              {approval.studentName.charAt(0)}
            </div>
            <div>
              <h4 className="text-gray-900 dark:text-white">{approval.studentName}</h4>
              <p className="text-gray-600 dark:text-gray-400">{approval.type}</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-3">{approval.internship}</p>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Submitted {approval.submittedDate}
            </span>
            <Badge variant="outline">{approval.credits} Credits</Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            View Report
          </Button>
          <Button variant="outline" size="sm" className="text-green-600 dark:text-green-400" onClick={handleApprove}>
            <ThumbsUp className="w-4 h-4 mr-2" />
            Approve
          </Button>
          <Button variant="outline" size="sm" className="text-red-600 dark:text-red-400" onClick={handleReject}>
            Reject
          </Button>
        </div>
      </div>
    </Card>
  );
}

function ProvideFeedbackDialog({ studentName }: { studentName: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <MessageSquare className="w-4 h-4 mr-2" />
          Feedback
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-gray-900 dark:text-white">Provide Feedback for {studentName}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div>
            <Label className="text-gray-700 dark:text-gray-300">Rating</Label>
            <div className="flex gap-2 mt-2">
              {[1, 2, 3, 4, 5].map(rating => (
                <Button key={rating} variant="outline" size="sm">
                  {rating}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <Label className="text-gray-700 dark:text-gray-300">Feedback</Label>
            <Textarea
              placeholder="Provide constructive feedback..."
              className="mt-2 bg-white dark:bg-gray-900"
              rows={5}
            />
          </div>
          <Button
            className="w-full"
            onClick={() => toast.success('Feedback submitted successfully!')}
          >
            Submit Feedback
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const mockStudents = [
  {
    id: 'stu-1',
    name: 'Rahul Kumar',
    internship: 'Full Stack Web Development',
    year: '3rd Year',
    progress: 75,
    rating: 4.5
  },
  {
    id: 'stu-2',
    name: 'Priya Sharma',
    internship: 'Data Science & Analytics',
    year: 'Final Year',
    progress: 90,
    rating: 4.8
  },
  {
    id: 'stu-3',
    name: 'Amit Patel',
    internship: 'AI & Machine Learning',
    year: '3rd Year',
    progress: 60,
    rating: 4.2
  },
  {
    id: 'stu-4',
    name: 'Sneha Reddy',
    internship: 'Cloud Computing with AWS',
    year: '2nd Year',
    progress: 45,
    rating: 4.0
  }
];

const studentActivities = [
  {
    studentName: 'Rahul Kumar',
    activity: 'Submitted Week 4 Report',
    time: '2 hours ago'
  },
  {
    studentName: 'Priya Sharma',
    activity: 'Updated logbook entry',
    time: '5 hours ago'
  },
  {
    studentName: 'Amit Patel',
    activity: 'Applied for new internship',
    time: '1 day ago'
  }
];

const pendingApprovals = [
  {
    id: 'app-1',
    studentName: 'Rahul Kumar',
    type: 'Final Report',
    internship: 'Full Stack Web Development - TechVista Solutions',
    submittedDate: 'Oct 1, 2025',
    credits: 4
  },
  {
    id: 'app-2',
    studentName: 'Priya Sharma',
    type: 'Mid-term Report',
    internship: 'Data Science & Analytics - DataMinds',
    submittedDate: 'Sep 30, 2025',
    credits: 2
  },
  {
    id: 'app-3',
    studentName: 'Amit Patel',
    type: 'Weekly Report',
    internship: 'AI & Machine Learning - AI Innovations Lab',
    submittedDate: 'Sep 29, 2025',
    credits: 1
  }
];