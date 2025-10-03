-- Prashiskshan Database Schema
-- PostgreSQL/Supabase Compatible Schema
-- NEP 2020 Compliant Academia-Industry Interface Platform

-- ============================================================================
-- USERS & AUTHENTICATION
-- ============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('student', 'faculty', 'industry')),
  avatar_url TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Student profiles
CREATE TABLE public.student_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  university TEXT NOT NULL,
  degree TEXT NOT NULL,
  major TEXT NOT NULL,
  year_of_study INTEGER CHECK (year_of_study BETWEEN 1 AND 5),
  graduation_year INTEGER,
  cgpa DECIMAL(3,2) CHECK (cgpa >= 0 AND cgpa <= 10),
  resume_url TEXT,
  portfolio_url TEXT,
  linkedin_url TEXT,
  github_url TEXT,
  bio TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Faculty profiles
CREATE TABLE public.faculty_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  university TEXT NOT NULL,
  department TEXT NOT NULL,
  designation TEXT,
  employee_id TEXT UNIQUE,
  specialization TEXT[],
  research_interests TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Industry profiles
CREATE TABLE public.industry_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  company_website TEXT,
  company_logo_url TEXT,
  industry_type TEXT NOT NULL,
  company_size TEXT CHECK (company_size IN ('1-10', '11-50', '51-200', '201-500', '501-1000', '1000+')),
  headquarters_location TEXT,
  description TEXT,
  gst_number TEXT,
  pan_number TEXT,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- SKILLS & COMPETENCIES
-- ============================================================================

CREATE TABLE public.skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('technical', 'soft', 'domain', 'tool')),
  description TEXT,
  icon_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.student_skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES public.student_profiles(id) ON DELETE CASCADE,
  skill_id UUID REFERENCES public.skills(id) ON DELETE CASCADE,
  proficiency_level TEXT CHECK (proficiency_level IN ('beginner', 'intermediate', 'advanced', 'expert')),
  years_of_experience DECIMAL(3,1),
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(student_id, skill_id)
);

-- ============================================================================
-- INTERNSHIPS & OPPORTUNITIES
-- ============================================================================

CREATE TABLE public.internships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  industry_id UUID REFERENCES public.industry_profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  responsibilities TEXT[],
  requirements TEXT[],
  duration_weeks INTEGER NOT NULL,
  mode TEXT NOT NULL CHECK (mode IN ('Online', 'On-site', 'Hybrid', 'Lab-based')),
  location TEXT,
  industry_type TEXT NOT NULL,
  stipend_min INTEGER,
  stipend_max INTEGER,
  stipend_currency TEXT DEFAULT 'INR',
  openings INTEGER NOT NULL DEFAULT 1,
  start_date DATE NOT NULL,
  application_deadline DATE NOT NULL,
  eligibility_criteria JSONB,
  preferred_universities TEXT[],
  min_cgpa DECIMAL(3,2),
  year_restrictions INTEGER[],
  status TEXT DEFAULT 'active' CHECK (status IN ('draft', 'active', 'closed', 'cancelled')),
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.internship_skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  internship_id UUID REFERENCES public.internships(id) ON DELETE CASCADE,
  skill_id UUID REFERENCES public.skills(id) ON DELETE CASCADE,
  required BOOLEAN DEFAULT TRUE,
  proficiency_required TEXT CHECK (proficiency_required IN ('beginner', 'intermediate', 'advanced', 'expert')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(internship_id, skill_id)
);

-- ============================================================================
-- APPLICATIONS & SELECTIONS
-- ============================================================================

CREATE TABLE public.applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  internship_id UUID REFERENCES public.internships(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.student_profiles(id) ON DELETE CASCADE,
  cover_letter TEXT,
  resume_url TEXT,
  additional_documents JSONB,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'under_review', 'shortlisted', 'selected', 'rejected', 'withdrawn')),
  applied_at TIMESTAMPTZ DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ,
  reviewed_by UUID REFERENCES public.profiles(id),
  selection_date TIMESTAMPTZ,
  rejection_reason TEXT,
  score INTEGER CHECK (score >= 0 AND score <= 100),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(internship_id, student_id)
);

CREATE TABLE public.application_status_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  application_id UUID REFERENCES public.applications(id) ON DELETE CASCADE,
  status TEXT NOT NULL,
  changed_by UUID REFERENCES public.profiles(id),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- INTERNSHIP EXECUTION & MONITORING
-- ============================================================================

CREATE TABLE public.internship_enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  application_id UUID REFERENCES public.applications(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.student_profiles(id) ON DELETE CASCADE,
  internship_id UUID REFERENCES public.internships(id) ON DELETE CASCADE,
  faculty_mentor_id UUID REFERENCES public.faculty_profiles(id),
  industry_mentor_name TEXT,
  industry_mentor_email TEXT,
  industry_mentor_phone TEXT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  actual_end_date DATE,
  status TEXT DEFAULT 'ongoing' CHECK (status IN ('ongoing', 'completed', 'discontinued', 'extended')),
  completion_percentage INTEGER DEFAULT 0 CHECK (completion_percentage >= 0 AND completion_percentage <= 100),
  nep_credits INTEGER DEFAULT 0,
  credit_approved BOOLEAN DEFAULT FALSE,
  credit_approved_by UUID REFERENCES public.faculty_profiles(id),
  credit_approved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- LOGBOOK & DAILY TRACKING
-- ============================================================================

CREATE TABLE public.logbook_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  enrollment_id UUID REFERENCES public.internship_enrollments(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.student_profiles(id) ON DELETE CASCADE,
  entry_date DATE NOT NULL,
  week_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tasks_completed TEXT[],
  learnings TEXT[],
  challenges TEXT[],
  hours_worked DECIMAL(4,2) NOT NULL CHECK (hours_worked >= 0 AND hours_worked <= 24),
  attachments JSONB,
  skills_practiced UUID[],
  mentor_reviewed BOOLEAN DEFAULT FALSE,
  mentor_comments TEXT,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- REPORTS & ASSESSMENTS
-- ============================================================================

CREATE TABLE public.reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  enrollment_id UUID REFERENCES public.internship_enrollments(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.student_profiles(id) ON DELETE CASCADE,
  report_type TEXT NOT NULL CHECK (report_type IN ('weekly', 'mid-term', 'final', 'certificate')),
  week_number INTEGER,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  executive_summary TEXT,
  objectives_achieved TEXT[],
  skills_acquired UUID[],
  project_details JSONB,
  recommendations TEXT,
  file_url TEXT,
  submission_date TIMESTAMPTZ DEFAULT NOW(),
  faculty_approval_status TEXT DEFAULT 'pending' CHECK (faculty_approval_status IN ('pending', 'approved', 'revision_required', 'rejected')),
  faculty_reviewed_by UUID REFERENCES public.faculty_profiles(id),
  faculty_comments TEXT,
  faculty_reviewed_at TIMESTAMPTZ,
  industry_rating INTEGER CHECK (industry_rating >= 1 AND industry_rating <= 5),
  industry_feedback TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.certificates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  enrollment_id UUID REFERENCES public.internship_enrollments(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.student_profiles(id) ON DELETE CASCADE,
  certificate_number TEXT UNIQUE NOT NULL,
  certificate_type TEXT NOT NULL CHECK (certificate_type IN ('completion', 'participation', 'excellence')),
  issue_date DATE NOT NULL,
  valid_until DATE,
  issued_by UUID REFERENCES public.industry_profiles(id),
  co_signed_by UUID REFERENCES public.faculty_profiles(id),
  file_url TEXT,
  blockchain_hash TEXT,
  verification_url TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- FEEDBACK & RATINGS
-- ============================================================================

CREATE TABLE public.student_ratings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  enrollment_id UUID REFERENCES public.internship_enrollments(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.student_profiles(id) ON DELETE CASCADE,
  rated_by UUID REFERENCES public.profiles(id) NOT NULL,
  rater_type TEXT NOT NULL CHECK (rater_type IN ('faculty', 'industry')),
  overall_rating INTEGER NOT NULL CHECK (overall_rating >= 1 AND overall_rating <= 5),
  technical_skills INTEGER CHECK (technical_skills >= 1 AND technical_skills <= 5),
  communication INTEGER CHECK (communication >= 1 AND communication <= 5),
  teamwork INTEGER CHECK (teamwork >= 1 AND teamwork <= 5),
  problem_solving INTEGER CHECK (problem_solving >= 1 AND problem_solving <= 5),
  professionalism INTEGER CHECK (professionalism >= 1 AND professionalism <= 5),
  comments TEXT,
  strengths TEXT[],
  areas_for_improvement TEXT[],
  would_recommend BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.internship_reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  internship_id UUID REFERENCES public.internships(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.student_profiles(id) ON DELETE CASCADE,
  enrollment_id UUID REFERENCES public.internship_enrollments(id) ON DELETE CASCADE,
  overall_rating INTEGER NOT NULL CHECK (overall_rating >= 1 AND overall_rating <= 5),
  learning_experience INTEGER CHECK (learning_experience >= 1 AND learning_experience <= 5),
  mentorship_quality INTEGER CHECK (mentorship_quality >= 1 AND mentorship_quality <= 5),
  work_environment INTEGER CHECK (work_environment >= 1 AND work_environment <= 5),
  stipend_satisfaction INTEGER CHECK (stipend_satisfaction >= 1 AND stipend_satisfaction <= 5),
  would_recommend BOOLEAN,
  review_text TEXT,
  pros TEXT[],
  cons TEXT[],
  tips_for_applicants TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- LEARNING MODULES & SKILL READINESS
-- ============================================================================

CREATE TABLE public.learning_modules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  difficulty_level TEXT CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  duration_hours INTEGER,
  content_url TEXT,
  thumbnail_url TEXT,
  skills_covered UUID[],
  prerequisites UUID[],
  published BOOLEAN DEFAULT TRUE,
  created_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.student_module_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES public.student_profiles(id) ON DELETE CASCADE,
  module_id UUID REFERENCES public.learning_modules(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed')),
  progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  time_spent_minutes INTEGER DEFAULT 0,
  quiz_score INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(student_id, module_id)
);

-- ============================================================================
-- PARTNERSHIPS & MoUs
-- ============================================================================

CREATE TABLE public.partnerships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  industry_id UUID REFERENCES public.industry_profiles(id) ON DELETE CASCADE,
  university_name TEXT NOT NULL,
  faculty_coordinator_id UUID REFERENCES public.faculty_profiles(id),
  partnership_type TEXT CHECK (partnership_type IN ('mou', 'placement', 'research', 'training')),
  start_date DATE NOT NULL,
  end_date DATE,
  status TEXT DEFAULT 'active' CHECK (status IN ('draft', 'active', 'expired', 'terminated')),
  terms_document_url TEXT,
  internship_quota INTEGER,
  internships_fulfilled INTEGER DEFAULT 0,
  contact_person_name TEXT,
  contact_person_email TEXT,
  contact_person_phone TEXT,
  benefits JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- NOTIFICATIONS & COMMUNICATIONS
-- ============================================================================

CREATE TABLE public.notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('application', 'approval', 'reminder', 'announcement', 'message')),
  priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  read BOOLEAN DEFAULT FALSE,
  action_url TEXT,
  metadata JSONB,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.announcements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  target_audience TEXT[] NOT NULL, -- ['student', 'faculty', 'industry']
  priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high')),
  published BOOLEAN DEFAULT FALSE,
  published_by UUID REFERENCES public.profiles(id),
  published_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- ANALYTICS & TRACKING
-- ============================================================================

CREATE TABLE public.activity_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id),
  action TEXT NOT NULL,
  resource_type TEXT,
  resource_id UUID,
  metadata JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- INDEXES FOR PERFORMANCE
-- ============================================================================

-- Profiles
CREATE INDEX idx_profiles_role ON public.profiles(role);
CREATE INDEX idx_profiles_email ON public.profiles(email);

-- Student profiles
CREATE INDEX idx_student_profiles_user_id ON public.student_profiles(user_id);
CREATE INDEX idx_student_profiles_university ON public.student_profiles(university);

-- Internships
CREATE INDEX idx_internships_industry_id ON public.internships(industry_id);
CREATE INDEX idx_internships_status ON public.internships(status);
CREATE INDEX idx_internships_deadline ON public.internships(application_deadline);
CREATE INDEX idx_internships_start_date ON public.internships(start_date);

-- Applications
CREATE INDEX idx_applications_student_id ON public.applications(student_id);
CREATE INDEX idx_applications_internship_id ON public.applications(internship_id);
CREATE INDEX idx_applications_status ON public.applications(status);

-- Enrollments
CREATE INDEX idx_enrollments_student_id ON public.internship_enrollments(student_id);
CREATE INDEX idx_enrollments_faculty_mentor ON public.internship_enrollments(faculty_mentor_id);
CREATE INDEX idx_enrollments_status ON public.internship_enrollments(status);

-- Logbook
CREATE INDEX idx_logbook_enrollment ON public.logbook_entries(enrollment_id);
CREATE INDEX idx_logbook_student ON public.logbook_entries(student_id);
CREATE INDEX idx_logbook_date ON public.logbook_entries(entry_date);

-- Reports
CREATE INDEX idx_reports_enrollment ON public.reports(enrollment_id);
CREATE INDEX idx_reports_student ON public.reports(student_id);
CREATE INDEX idx_reports_type ON public.reports(report_type);
CREATE INDEX idx_reports_status ON public.reports(faculty_approval_status);

-- Notifications
CREATE INDEX idx_notifications_user ON public.notifications(user_id);
CREATE INDEX idx_notifications_read ON public.notifications(read);
CREATE INDEX idx_notifications_created ON public.notifications(created_at);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faculty_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.industry_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.internships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.internship_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.logbook_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can read all profiles, but only update their own
CREATE POLICY "Public profiles are viewable by everyone"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Student profiles: Students can manage their own, faculty and industry can view
CREATE POLICY "Student profiles viewable by authenticated users"
  ON public.student_profiles FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Students can update own profile"
  ON public.student_profiles FOR UPDATE
  USING (auth.uid() = user_id);

-- Internships: Industry can manage their own, everyone can view active ones
CREATE POLICY "Active internships viewable by everyone"
  ON public.internships FOR SELECT
  USING (status = 'active' OR auth.uid() IN (
    SELECT user_id FROM industry_profiles WHERE id = industry_id
  ));

CREATE POLICY "Industry can manage their internships"
  ON public.internships FOR ALL
  USING (auth.uid() IN (
    SELECT user_id FROM industry_profiles WHERE id = industry_id
  ));

-- Applications: Students can view/manage their own, industry can view for their internships
CREATE POLICY "Students can view own applications"
  ON public.applications FOR SELECT
  USING (auth.uid() IN (
    SELECT user_id FROM student_profiles WHERE id = student_id
  ));

CREATE POLICY "Students can create applications"
  ON public.applications FOR INSERT
  WITH CHECK (auth.uid() IN (
    SELECT user_id FROM student_profiles WHERE id = student_id
  ));

-- ============================================================================
-- FUNCTIONS & TRIGGERS
-- ============================================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at trigger to relevant tables
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_student_profiles_updated_at BEFORE UPDATE ON public.student_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_internships_updated_at BEFORE UPDATE ON public.internships
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON public.applications
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to auto-increment application count
CREATE OR REPLACE FUNCTION increment_application_count()
RETURNS TRIGGER AS $$
BEGIN
  -- This would update a materialized view or cached count
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- VIEWS FOR ANALYTICS
-- ============================================================================

-- View for internship statistics
CREATE OR REPLACE VIEW internship_stats AS
SELECT 
  i.id,
  i.title,
  i.industry_type,
  COUNT(DISTINCT a.id) as total_applications,
  COUNT(DISTINCT CASE WHEN a.status = 'selected' THEN a.id END) as selected_count,
  COUNT(DISTINCT e.id) as enrollment_count,
  AVG(ir.overall_rating) as average_rating
FROM internships i
LEFT JOIN applications a ON i.id = a.internship_id
LEFT JOIN internship_enrollments e ON i.id = e.internship_id
LEFT JOIN internship_reviews ir ON i.id = ir.internship_id
GROUP BY i.id;

-- View for student performance
CREATE OR REPLACE VIEW student_performance AS
SELECT 
  sp.id,
  sp.user_id,
  p.full_name,
  sp.university,
  COUNT(DISTINCT a.id) as applications_count,
  COUNT(DISTINCT CASE WHEN a.status = 'selected' THEN a.id END) as selections_count,
  COUNT(DISTINCT e.id) as completed_internships,
  AVG(sr.overall_rating) as average_rating,
  SUM(e.nep_credits) as total_credits
FROM student_profiles sp
JOIN profiles p ON sp.user_id = p.id
LEFT JOIN applications a ON sp.id = a.student_id
LEFT JOIN internship_enrollments e ON sp.id = e.student_id
LEFT JOIN student_ratings sr ON sp.id = sr.student_id
GROUP BY sp.id, sp.user_id, p.full_name, sp.university;

-- ============================================================================
-- SEED DATA (Optional - for testing)
-- ============================================================================

-- Insert sample skills
INSERT INTO skills (name, category) VALUES
  ('React', 'technical'),
  ('Node.js', 'technical'),
  ('Python', 'technical'),
  ('Machine Learning', 'technical'),
  ('Data Analysis', 'technical'),
  ('Communication', 'soft'),
  ('Leadership', 'soft'),
  ('Problem Solving', 'soft');

-- Note: Additional seed data for internships will be migrated from /data/internships.ts