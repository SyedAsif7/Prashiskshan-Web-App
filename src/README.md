# Prashiskshan – Academia Industry Interface Platform

<div align="center">

![Prashiskshan Banner](https://img.shields.io/badge/NEP%202020-Compliant-brightgreen)
![Build Status](https://img.shields.io/badge/build-passing-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

**A comprehensive full-stack web application solving internship system failures through student-industry-college collaboration, fully aligned with NEP 2020 Semester 5 requirements.**

[Live Demo](#) | [NEP 2020 Solution](./NEP-2020-SOLUTION.md) | [Internship Portal Guide](./INTERNSHIP-PORTAL-GUIDE.md) | [Documentation](./database/README.md) | [Deployment Guide](./DEPLOYMENT.md)

</div>

---

## 🎯 The Problem We Solve

Despite NEP 2020's emphasis on experiential learning in Semester 5, internship systems in Indian colleges face **critical failures**:

- ❌ **No Industry Tie-ups**: Limited partnerships, no MoUs
- ❌ **Poor Planning**: Last-minute implementations
- ❌ **Zero Monitoring**: No faculty supervision
- ❌ **Fake Certificates**: Students buying certificates from mills
- ❌ **Unprepared Students**: Lack of industry-ready skills
- ❌ **Rural Inequality**: Limited access in non-metro areas

**Our Solution**: A three-way collaborative platform where students design the app, colleges provide mentorship and academic credit, and industry partners share real opportunities. [Read Full Solution →](./NEP-2020-SOLUTION.md)

---

## 🌟 Features

### For Students
- **Internship Portal**: Browse and apply for 500+ internships across various industries
- **Smart Recommendations**: AI-powered internship suggestions based on skills
- **Skill Readiness**: Pre-internship learning modules and assessments
- **Digital Logbook**: Track daily activities and learning progress
- **Report Generator**: Auto-generate NEP-compliant internship reports (PDF)
- **Profile Management**: Showcase skills, projects, and achievements

### For Faculty/Admins
- **Mentorship Dashboard**: Monitor student progress in real-time
- **Approval System**: Review and approve internship reports and credits
- **Feedback Mechanism**: Provide ratings and guidance to students
- **Analytics**: Insights into student performance and industry partnerships
- **NEP Credit Integration**: Approve internships for academic credits

### For Industry Partners
- **Post Opportunities**: Create and manage internship postings
- **Applicant Tracking**: View, shortlist, and select candidates
- **Talent Pool Access**: Connect with skilled students from partner colleges
- **Analytics Dashboard**: Track application trends and skills demand
- **MoU Management**: Build partnerships with educational institutions

## 🔧 Seven Core Modules

Our platform is built on **seven integrated modules** that address every aspect of the internship lifecycle:

### 1. 🎯 Student-Centered Internship Portal
Browse 500+ verified internships, AI-powered recommendations, one-click applications, and application tracking.

### 2. 🏭 Industry Collaboration Module
Post opportunities, applicant tracking system (ATS), pre-screening tools, and performance evaluation.

### 3. 👨‍🏫 Faculty & Admin Panel
Real-time monitoring, approve/reject applications, assign mentors, and generate reports.

### 4. 📚 Skill Readiness & Learning
Pre-internship training modules, industry-specific courses, skill assessments, and certifications.

### 5. 📝 Automatic Logbook & Report Generator
Daily work logs, auto-generated NEP reports, credit calculation, and digital certificates.

### 6. 🎓 Credit Integration System
NEP credit mapping, automatic calculation, learning outcome tracking, and transcript integration.

### 7. 🔔 Notifications & Alerts
New internship alerts, application updates, deadline reminders, and mentor messages.

[Learn More About Each Module →](./NEP-2020-SOLUTION.md#-platform-architecture-7-core-modules)

## 🎨 Design Features

- Modern, professional UI inspired by Coursera, LinkedIn, and Internshala
- Dark mode and light mode support
- Fully responsive mobile-first design
- Smooth animations with Motion (Framer Motion)
- Accessible and intuitive navigation
- Glassmorphism effects and gradient designs
- High-quality professional images from Unsplash

## 🔐 Authentication

Three role-based user types:
1. **Students** - Access to internships, applications, logbook, reports
2. **Faculty/Admins** - Student mentoring and approval workflows
3. **Industry Partners** - Post internships and manage applicants

### Demo Accounts

**Student Account**
- Email: `student@demo.com`
- Password: `demo123`

**Faculty Account**
- Email: `faculty@demo.com`
- Password: `demo123`

**Industry Account**
- Email: `industry@demo.com`
- Password: `demo123`

## 📊 Database

The application includes 20+ pre-loaded internship/training programs including:

- Full Stack Web Development
- Data Science & Analytics
- AI & Machine Learning
- Cybersecurity
- Mobile App Development
- Cloud Computing (AWS/Azure)
- Blockchain & Web3
- IoT & Embedded Systems
- DevOps & Automation
- Digital Marketing
- AR/VR Development
- FinTech & Investment Banking
- Renewable Energy
- Biotech & Research
- And more...

## 🛠 Tech Stack

### Frontend
- **React 18** - UI framework with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Shadcn/UI** - Accessible component library
- **Lucide React** - Beautiful icon set
- **Recharts** - Data visualization & charts
- **Sonner** - Toast notifications
- **Motion** - Smooth animations

### Backend Ready
This demo uses mock data. For production:
- **Supabase** - Backend as a service (PostgreSQL)
- **JWT Authentication** - Secure user sessions
- **Row Level Security** - Fine-grained permissions
- **Real-time subscriptions** - Live updates
- **File storage** - Documents & reports
- **Edge Functions** - Serverless compute

## 🚀 Getting Started

The application is ready to run. Simply navigate through:

1. **Home Page** - Overview of the platform
2. **Login/Register** - Use demo accounts or create new ones
3. **Role-Based Dashboards** - Access features based on your role

## 📱 Key Pages

### Home
- Hero section with call-to-action
- Platform metrics and impact
- Stakeholder information cards
- Features showcase
- Footer with links

### Student Dashboard
- Overview with stats and recommendations
- Browse internships with advanced filters
- Application tracking
- Digital logbook with weekly entries
- Report generator for NEP compliance
- Profile management

### Industry Dashboard
- Overview metrics (postings, applicants, selections)
- Post and manage internships
- Applicant tracking system
- Analytics with charts (applications trends, skills distribution)
- Performance metrics

### Faculty Dashboard
- Student mentoring overview
- Track student progress and performance
- Approve reports and credits
- Provide feedback and ratings
- Analytics on student success rates

## 🎯 NEP 2020 Compliance

- Credit-based internship system
- Standardized report formats
- Academic-industry collaboration
- Skill development focus
- Experiential learning emphasis

## 🔒 Security Note

**Important**: This platform is designed for prototypes and demos. For production use:
- Do not collect personally identifiable information (PII)
- Implement proper data encryption
- Use secure authentication providers
- Follow GDPR and data protection regulations
- Implement rate limiting and security headers

## 📊 Database Design

The application uses a comprehensive PostgreSQL database schema with:
- 20+ tables for complete feature coverage
- Row-level security for data protection
- Optimized indexes for performance
- Audit trails and activity logging

See detailed documentation:
- [Database Schema](./database/schema.sql) - Complete SQL schema
- [ER Diagram](./database/ER-DIAGRAM.md) - Visual relationship diagram
- [Seed Data](./database/seed.sql) - Sample data for testing
- [API Endpoints](./database/API-ENDPOINTS.md) - REST API documentation

## 🚀 Deployment

Ready for production deployment! See [DEPLOYMENT.md](./DEPLOYMENT.md) for:
- Step-by-step deployment guide
- Environment configuration
- CI/CD pipeline setup
- Monitoring and logging
- Security hardening
- Performance optimization
- Backup and recovery strategies

## 📄 License

This project is created for educational and demonstration purposes.

## 🤝 Contributing

This is a demonstration project. For production deployment, consider:
- ✅ Implementing real backend with Supabase (schema ready)
- ✅ Adding email notifications (SMTP configured)
- ⏳ Integrating payment gateways for paid internships
- ⏳ Adding video conferencing for interviews
- ⏳ Implementing real-time chat functionality
- ⏳ Adding AI-powered resume matching
- ⏳ Mobile app development (React Native)

## 📞 Support

For issues or questions about the platform:
- 📖 Documentation: `/database/README.md`
- 🔧 API Reference: `/database/API-ENDPOINTS.md`
- 🚀 Deployment Guide: `/DEPLOYMENT.md`
- 💬 Contact: support@prashiskshan.edu.in

## 🎯 Project Structure

```
prashiskshan/
├── components/          # React components
│   ├── Home.tsx        # Landing page
│   ├── Login.tsx       # Authentication
│   ├── Register.tsx    # User registration
│   ├── StudentDashboard.tsx   # Student features
│   ├── IndustryDashboard.tsx  # Industry features
│   ├── FacultyDashboard.tsx   # Faculty features
│   └── ui/             # Shadcn UI components
├── data/               # Mock data & types
│   └── internships.ts  # 20+ sample internships
├── database/           # Database documentation
│   ├── schema.sql      # Complete DB schema
│   ├── seed.sql        # Sample data
│   ├── README.md       # DB documentation
│   ├── ER-DIAGRAM.md   # Entity relationships
│   └── API-ENDPOINTS.md # API documentation
├── styles/             # Global styles
│   └── globals.css     # Tailwind v4 config
├── App.tsx             # Main application
├── README.md           # This file
└── DEPLOYMENT.md       # Deployment guide
```

## 🌟 Acknowledgments

- NEP 2020 guidelines for education framework
- Supabase for backend infrastructure
- Shadcn for beautiful UI components
- All contributors and testers

---

<div align="center">

**Built with ❤️ for education and skill development in India**

[⬆ Back to Top](#prashiskshan--academia-industry-interface-platform)

</div>