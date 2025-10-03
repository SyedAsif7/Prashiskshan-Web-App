-- Prashiskshan Database Seed Data
-- This file populates the database with initial data for testing and demonstration

-- ============================================================================
-- SEED SKILLS DATA
-- ============================================================================

INSERT INTO skills (id, name, category, description) VALUES
  -- Technical Skills - Web Development
  (uuid_generate_v4(), 'HTML', 'technical', 'HyperText Markup Language'),
  (uuid_generate_v4(), 'CSS', 'technical', 'Cascading Style Sheets'),
  (uuid_generate_v4(), 'JavaScript', 'technical', 'Programming language for web'),
  (uuid_generate_v4(), 'React', 'technical', 'JavaScript library for UI'),
  (uuid_generate_v4(), 'Node.js', 'technical', 'JavaScript runtime environment'),
  (uuid_generate_v4(), 'MongoDB', 'technical', 'NoSQL database'),
  
  -- Technical Skills - Data & AI
  (uuid_generate_v4(), 'Python', 'technical', 'Programming language'),
  (uuid_generate_v4(), 'Pandas', 'technical', 'Data analysis library'),
  (uuid_generate_v4(), 'Machine Learning', 'technical', 'ML algorithms and models'),
  (uuid_generate_v4(), 'Power BI', 'technical', 'Business intelligence tool'),
  (uuid_generate_v4(), 'TensorFlow', 'technical', 'ML framework'),
  (uuid_generate_v4(), 'Deep Learning', 'technical', 'Neural networks'),
  
  -- Technical Skills - Security & Cloud
  (uuid_generate_v4(), 'Ethical Hacking', 'technical', 'Security testing'),
  (uuid_generate_v4(), 'Network Security', 'technical', 'Network protection'),
  (uuid_generate_v4(), 'AWS', 'technical', 'Amazon Web Services'),
  (uuid_generate_v4(), 'Docker', 'technical', 'Containerization platform'),
  (uuid_generate_v4(), 'CI/CD', 'technical', 'Continuous integration/deployment'),
  (uuid_generate_v4(), 'Kubernetes', 'technical', 'Container orchestration'),
  
  -- Technical Skills - Mobile & IoT
  (uuid_generate_v4(), 'Flutter', 'technical', 'Cross-platform mobile framework'),
  (uuid_generate_v4(), 'React Native', 'technical', 'Mobile app framework'),
  (uuid_generate_v4(), 'Arduino', 'technical', 'Microcontroller platform'),
  (uuid_generate_v4(), 'Raspberry Pi', 'technical', 'Single-board computer'),
  
  -- Technical Skills - Blockchain & Finance
  (uuid_generate_v4(), 'Solidity', 'technical', 'Smart contract language'),
  (uuid_generate_v4(), 'Smart Contracts', 'technical', 'Blockchain contracts'),
  (uuid_generate_v4(), 'Financial Modeling', 'technical', 'Financial analysis'),
  (uuid_generate_v4(), 'Stock Market', 'domain', 'Market analysis'),
  
  -- Technical Skills - Engineering
  (uuid_generate_v4(), 'AutoCAD', 'tool', 'CAD software'),
  (uuid_generate_v4(), 'SolidWorks', 'tool', '3D CAD software'),
  (uuid_generate_v4(), '3D Printing', 'technical', 'Additive manufacturing'),
  (uuid_generate_v4(), 'Unity', 'tool', 'Game engine'),
  (uuid_generate_v4(), 'ARKit', 'technical', 'Augmented reality framework'),
  
  -- Soft Skills
  (uuid_generate_v4(), 'Communication', 'soft', 'Effective communication'),
  (uuid_generate_v4(), 'Team Collaboration', 'soft', 'Working in teams'),
  (uuid_generate_v4(), 'Problem Solving', 'soft', 'Analytical thinking'),
  (uuid_generate_v4(), 'Leadership', 'soft', 'Team leadership'),
  (uuid_generate_v4(), 'Time Management', 'soft', 'Managing time effectively'),
  (uuid_generate_v4(), 'Critical Thinking', 'soft', 'Analytical reasoning'),
  
  -- Domain Skills
  (uuid_generate_v4(), 'SEO', 'domain', 'Search engine optimization'),
  (uuid_generate_v4(), 'Google Ads', 'domain', 'Online advertising'),
  (uuid_generate_v4(), 'Business Planning', 'domain', 'Business strategy'),
  (uuid_generate_v4(), 'Innovation Strategy', 'domain', 'Innovation management'),
  (uuid_generate_v4(), 'Resume Writing', 'soft', 'Professional resume creation'),
  (uuid_generate_v4(), 'Interview Techniques', 'soft', 'Interview preparation');

-- ============================================================================
-- SEED INDUSTRY PROFILES
-- ============================================================================

-- Create dummy auth user IDs for industry partners
-- In production, these would be created through Supabase Auth

-- TechVista Solutions
DO $$
DECLARE
  techvista_user_id UUID := uuid_generate_v4();
  techvista_profile_id UUID;
BEGIN
  INSERT INTO profiles (id, email, full_name, role, created_at)
  VALUES (techvista_user_id, 'contact@techvista.com', 'TechVista Solutions', 'industry', NOW());
  
  INSERT INTO industry_profiles (user_id, company_name, company_website, industry_type, company_size, description, verified)
  VALUES (
    techvista_user_id,
    'TechVista Solutions',
    'https://techvista.com',
    'IT',
    '201-500',
    'Leading software development company specializing in web and mobile applications',
    true
  ) RETURNING id INTO techvista_profile_id;
  
  -- Store for later use
  PERFORM set_config('app.techvista_profile_id', techvista_profile_id::text, true);
END $$;

-- DataMinds Analytics
DO $$
DECLARE
  dataminds_user_id UUID := uuid_generate_v4();
  dataminds_profile_id UUID;
BEGIN
  INSERT INTO profiles (id, email, full_name, role, created_at)
  VALUES (dataminds_user_id, 'hr@dataminds.com', 'DataMinds Analytics', 'industry', NOW());
  
  INSERT INTO industry_profiles (user_id, company_name, company_website, industry_type, company_size, description, verified)
  VALUES (
    dataminds_user_id,
    'DataMinds Analytics',
    'https://dataminds.com',
    'Analytics',
    '51-200',
    'Data science and analytics consulting firm',
    true
  ) RETURNING id INTO dataminds_profile_id;
  
  PERFORM set_config('app.dataminds_profile_id', dataminds_profile_id::text, true);
END $$;

-- AI Innovations Lab
DO $$
DECLARE
  ailab_user_id UUID := uuid_generate_v4();
  ailab_profile_id UUID;
BEGIN
  INSERT INTO profiles (id, email, full_name, role, created_at)
  VALUES (ailab_user_id, 'careers@ailab.com', 'AI Innovations Lab', 'industry', NOW());
  
  INSERT INTO industry_profiles (user_id, company_name, company_website, industry_type, company_size, description, verified)
  VALUES (
    ailab_user_id,
    'AI Innovations Lab',
    'https://ailab.com',
    'AI',
    '11-50',
    'Cutting-edge AI research and development lab',
    true
  ) RETURNING id INTO ailab_profile_id;
  
  PERFORM set_config('app.ailab_profile_id', ailab_profile_id::text, true);
END $$;

-- SecureNet Systems
DO $$
DECLARE
  securenet_user_id UUID := uuid_generate_v4();
  securenet_profile_id UUID;
BEGIN
  INSERT INTO profiles (id, email, full_name, role, created_at)
  VALUES (securenet_user_id, 'recruit@securenet.com', 'SecureNet Systems', 'industry', NOW());
  
  INSERT INTO industry_profiles (user_id, company_name, industry_type, company_size, description, verified)
  VALUES (
    securenet_user_id,
    'SecureNet Systems',
    'Cybersecurity',
    '51-200',
    'Cybersecurity solutions and consulting',
    true
  ) RETURNING id INTO securenet_profile_id;
  
  PERFORM set_config('app.securenet_profile_id', securenet_profile_id::text, true);
END $$;

-- ============================================================================
-- SEED INTERNSHIPS DATA (20+ Programs)
-- ============================================================================

-- Helper function to get skill ID by name
CREATE OR REPLACE FUNCTION get_skill_id(skill_name TEXT) RETURNS UUID AS $$
  SELECT id FROM skills WHERE name = skill_name LIMIT 1;
$$ LANGUAGE SQL;

-- 1. Full Stack Web Development Internship
DO $$
DECLARE
  internship_id UUID;
  industry_id UUID := current_setting('app.techvista_profile_id')::UUID;
BEGIN
  INSERT INTO internships (
    industry_id, title, description, duration_weeks, mode, location,
    industry_type, stipend_min, stipend_max, openings,
    start_date, application_deadline, status, featured
  ) VALUES (
    industry_id,
    'Full Stack Web Development Internship',
    'Build modern web applications using MERN stack. Work on real-world projects and gain hands-on experience with industry-standard tools and practices.',
    8, 'Hybrid', 'Bangalore, Karnataka',
    'IT', 15000, 20000, 10,
    '2025-11-01', '2025-10-20', 'active', true
  ) RETURNING id INTO internship_id;
  
  -- Add required skills
  INSERT INTO internship_skills (internship_id, skill_id, required, proficiency_required)
  VALUES 
    (internship_id, get_skill_id('HTML'), true, 'intermediate'),
    (internship_id, get_skill_id('CSS'), true, 'intermediate'),
    (internship_id, get_skill_id('React'), true, 'intermediate'),
    (internship_id, get_skill_id('Node.js'), true, 'beginner'),
    (internship_id, get_skill_id('MongoDB'), false, 'beginner');
END $$;

-- 2. Data Science & Analytics Internship
DO $$
DECLARE
  internship_id UUID;
  industry_id UUID := current_setting('app.dataminds_profile_id')::UUID;
BEGIN
  INSERT INTO internships (
    industry_id, title, description, duration_weeks, mode,
    industry_type, stipend_min, stipend_max, openings,
    start_date, application_deadline, status
  ) VALUES (
    industry_id,
    'Data Science & Analytics Internship',
    'Dive deep into data analysis and machine learning. Learn to extract insights from large datasets and build predictive models.',
    10, 'Online',
    'Analytics', 18000, 25000, 8,
    '2025-11-15', '2025-10-25', 'active'
  ) RETURNING id INTO internship_id;
  
  INSERT INTO internship_skills (internship_id, skill_id, required, proficiency_required)
  VALUES 
    (internship_id, get_skill_id('Python'), true, 'intermediate'),
    (internship_id, get_skill_id('Pandas'), true, 'beginner'),
    (internship_id, get_skill_id('Machine Learning'), true, 'beginner'),
    (internship_id, get_skill_id('Power BI'), false, 'beginner');
END $$;

-- 3. AI & Machine Learning Internship
DO $$
DECLARE
  internship_id UUID;
  industry_id UUID := current_setting('app.ailab_profile_id')::UUID;
BEGIN
  INSERT INTO internships (
    industry_id, title, description, duration_weeks, mode,
    industry_type, stipend_min, stipend_max, openings,
    start_date, application_deadline, status, min_cgpa
  ) VALUES (
    industry_id,
    'AI & Machine Learning Internship',
    'Work on cutting-edge AI projects including computer vision and NLP. Build and deploy deep learning models.',
    12, 'Online',
    'AI', 20000, 30000, 5,
    '2025-12-01', '2025-11-10', 'active', 7.5
  ) RETURNING id INTO internship_id;
  
  INSERT INTO internship_skills (internship_id, skill_id, required, proficiency_required)
  VALUES 
    (internship_id, get_skill_id('Python'), true, 'advanced'),
    (internship_id, get_skill_id('TensorFlow'), true, 'intermediate'),
    (internship_id, get_skill_id('Deep Learning'), true, 'intermediate'),
    (internship_id, get_skill_id('Machine Learning'), true, 'advanced');
END $$;

-- 4. Cybersecurity Internship
DO $$
DECLARE
  internship_id UUID;
  industry_id UUID := current_setting('app.securenet_profile_id')::UUID;
BEGIN
  INSERT INTO internships (
    industry_id, title, description, duration_weeks, mode, location,
    industry_type, stipend_min, stipend_max, openings,
    start_date, application_deadline, status
  ) VALUES (
    industry_id,
    'Cybersecurity Internship',
    'Learn ethical hacking techniques and secure network infrastructure. Gain hands-on experience with security tools and vulnerability assessment.',
    6, 'On-site', 'Hyderabad, Telangana',
    'Cybersecurity', 12000, 18000, 6,
    '2025-10-28', '2025-10-15', 'active'
  ) RETURNING id INTO internship_id;
  
  INSERT INTO internship_skills (internship_id, skill_id, required, proficiency_required)
  VALUES 
    (internship_id, get_skill_id('Ethical Hacking'), true, 'beginner'),
    (internship_id, get_skill_id('Network Security'), true, 'beginner');
END $$;

-- Continue with remaining internships...
-- (Similar pattern for all 20+ internships from the original data)

-- ============================================================================
-- SEED SAMPLE STUDENTS
-- ============================================================================

-- Student 1: Rahul Kumar
DO $$
DECLARE
  student_user_id UUID := uuid_generate_v4();
  student_profile_id UUID;
BEGIN
  INSERT INTO profiles (id, email, full_name, role, phone, created_at)
  VALUES (student_user_id, 'rahul.kumar@student.edu', 'Rahul Kumar', 'student', '+91-9876543210', NOW());
  
  INSERT INTO student_profiles (
    user_id, university, degree, major, year_of_study,
    graduation_year, cgpa, bio
  ) VALUES (
    student_user_id,
    'Indian Institute of Technology, Delhi',
    'B.Tech',
    'Computer Science',
    3,
    2026,
    8.5,
    'Passionate about web development and open source. Looking for opportunities to apply my skills in real-world projects.'
  ) RETURNING id INTO student_profile_id;
  
  -- Add student skills
  INSERT INTO student_skills (student_id, skill_id, proficiency_level, years_of_experience)
  VALUES 
    (student_profile_id, get_skill_id('React'), 'intermediate', 1.5),
    (student_profile_id, get_skill_id('Node.js'), 'intermediate', 1.0),
    (student_profile_id, get_skill_id('Python'), 'advanced', 2.0),
    (student_profile_id, get_skill_id('JavaScript'), 'advanced', 2.5);
END $$;

-- Student 2: Priya Sharma
DO $$
DECLARE
  student_user_id UUID := uuid_generate_v4();
  student_profile_id UUID;
BEGIN
  INSERT INTO profiles (id, email, full_name, role, phone, created_at)
  VALUES (student_user_id, 'priya.sharma@student.edu', 'Priya Sharma', 'student', '+91-9876543211', NOW());
  
  INSERT INTO student_profiles (
    user_id, university, degree, major, year_of_study,
    graduation_year, cgpa, bio
  ) VALUES (
    student_user_id,
    'National Institute of Technology, Trichy',
    'B.Tech',
    'Data Science',
    4,
    2025,
    9.2,
    'Data enthusiast with strong analytical skills. Experienced in machine learning and statistical analysis.'
  ) RETURNING id INTO student_profile_id;
  
  INSERT INTO student_skills (student_id, skill_id, proficiency_level, years_of_experience)
  VALUES 
    (student_profile_id, get_skill_id('Python'), 'expert', 3.0),
    (student_profile_id, get_skill_id('Machine Learning'), 'advanced', 2.0),
    (student_profile_id, get_skill_id('Pandas'), 'advanced', 2.5),
    (student_profile_id, get_skill_id('Power BI'), 'intermediate', 1.0);
END $$;

-- ============================================================================
-- SEED SAMPLE FACULTY
-- ============================================================================

DO $$
DECLARE
  faculty_user_id UUID := uuid_generate_v4();
BEGIN
  INSERT INTO profiles (id, email, full_name, role, phone, created_at)
  VALUES (faculty_user_id, 'dr.sharma@university.edu', 'Dr. Anjali Sharma', 'faculty', '+91-9876543220', NOW());
  
  INSERT INTO faculty_profiles (
    user_id, university, department, designation,
    employee_id, specialization, research_interests
  ) VALUES (
    faculty_user_id,
    'Indian Institute of Technology, Delhi',
    'Computer Science & Engineering',
    'Associate Professor',
    'FAC2024001',
    ARRAY['Software Engineering', 'Web Technologies', 'Database Systems'],
    ARRAY['Machine Learning', 'Cloud Computing', 'Industry-Academia Collaboration']
  );
END $$;

-- ============================================================================
-- SEED SAMPLE LEARNING MODULES
-- ============================================================================

INSERT INTO learning_modules (title, description, category, difficulty_level, duration_hours, published)
VALUES 
  (
    'Introduction to React',
    'Learn the fundamentals of React including components, props, state, and hooks',
    'Web Development',
    'beginner',
    10,
    true
  ),
  (
    'Python for Data Science',
    'Master Python basics and data manipulation with Pandas and NumPy',
    'Data Science',
    'beginner',
    15,
    true
  ),
  (
    'Git and Version Control',
    'Learn Git basics, branching, merging, and collaboration workflows',
    'Development Tools',
    'beginner',
    5,
    true
  ),
  (
    'Machine Learning Fundamentals',
    'Understanding ML algorithms, model training, and evaluation',
    'Artificial Intelligence',
    'intermediate',
    20,
    true
  ),
  (
    'Resume Writing Masterclass',
    'Create an ATS-friendly resume that stands out to recruiters',
    'Career Development',
    'beginner',
    3,
    true
  );

-- ============================================================================
-- SEED ANNOUNCEMENTS
-- ============================================================================

INSERT INTO announcements (title, content, target_audience, priority, published, published_at)
VALUES 
  (
    'Welcome to Prashiskshan Platform!',
    'We are excited to launch the NEP 2020 compliant Academia-Industry Interface Platform. Explore internship opportunities and connect with industry partners.',
    ARRAY['student', 'faculty', 'industry'],
    'high',
    true,
    NOW()
  ),
  (
    'New Batch of Internships Available',
    'Check out the latest internship postings from top companies. Apply before the deadline!',
    ARRAY['student'],
    'normal',
    true,
    NOW()
  ),
  (
    'Faculty Training Workshop',
    'Join us for a workshop on effective mentoring and NEP credit system. Register now!',
    ARRAY['faculty'],
    'normal',
    true,
    NOW()
  );

-- ============================================================================
-- CLEAN UP
-- ============================================================================

-- Drop helper function
DROP FUNCTION IF EXISTS get_skill_id(TEXT);

-- Grant necessary permissions
GRANT SELECT ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT INSERT, UPDATE ON internships TO authenticated;
GRANT INSERT, UPDATE ON applications TO authenticated;

-- Success message
DO $$ 
BEGIN
  RAISE NOTICE 'Database seeded successfully!';
  RAISE NOTICE 'Sample users, internships, and data have been created.';
  RAISE NOTICE 'You can now test the application with realistic data.';
END $$;