# Prashiskshan Database Design

## Overview

This document describes the complete database architecture for the Prashiskshan Academia-Industry Interface Platform. The database is designed to support all features of the NEP 2020 compliant platform.

## Database Structure

### 1. User Management & Profiles

#### Core Tables
- **profiles**: Base user information for all user types
- **student_profiles**: Extended information for students (university, degree, CGPA, etc.)
- **faculty_profiles**: Faculty/admin specific information
- **industry_profiles**: Company/organization information

#### Key Features
- Role-based access control (Student, Faculty, Industry)
- Extended profile information based on user type
- Avatar and contact information
- Verification status for industry partners

### 2. Skills & Competencies

#### Core Tables
- **skills**: Master list of all skills
- **student_skills**: Student-skill mapping with proficiency levels
- **internship_skills**: Required skills for internships

#### Key Features
- Categorized skills (technical, soft, domain, tool)
- Proficiency levels (beginner, intermediate, advanced, expert)
- Skill verification system
- Years of experience tracking

### 3. Internships & Opportunities

#### Core Tables
- **internships**: All internship postings
- **internship_skills**: Skills required for each internship
- **applications**: Student applications to internships
- **application_status_history**: Audit trail for application status changes

#### Key Features
- Flexible eligibility criteria (CGPA, year, university)
- Multiple work modes (Online, On-site, Hybrid, Lab-based)
- Stipend range configuration
- Application deadline management
- Status tracking (draft, active, closed, cancelled)

### 4. Internship Execution

#### Core Tables
- **internship_enrollments**: Active internships in progress
- **logbook_entries**: Daily/weekly activity tracking
- **reports**: Weekly, mid-term, and final reports
- **certificates**: Completion certificates

#### Key Features
- Mentor assignment (both faculty and industry)
- NEP credit tracking and approval
- Completion percentage monitoring
- Industry and faculty dual mentorship

### 5. Feedback & Assessment

#### Core Tables
- **student_ratings**: Faculty and industry ratings for students
- **internship_reviews**: Student reviews of internship experiences

#### Key Features
- Multi-dimensional ratings (technical, communication, teamwork, etc.)
- Bi-directional feedback system
- Recommendation indicators
- Strengths and improvement areas

### 6. Learning & Development

#### Core Tables
- **learning_modules**: Pre-internship learning content
- **student_module_progress**: Student progress in learning modules

#### Key Features
- Self-paced learning modules
- Progress tracking
- Quiz assessments
- Time spent analytics

### 7. Partnerships & Collaboration

#### Core Tables
- **partnerships**: Industry-university MoUs
- **announcements**: Platform-wide communications
- **notifications**: User-specific notifications

#### Key Features
- MoU document management
- Internship quota tracking
- Multi-audience announcements
- Priority-based notifications

### 8. Analytics & Tracking

#### Core Tables
- **activity_logs**: User activity tracking
- **Views**: Pre-computed analytics views

#### Key Features
- Comprehensive activity logging
- Performance analytics
- Trend analysis
- Real-time statistics

## Entity Relationships

```
User (profiles)
├── Student Profile
│   ├── Skills
│   ├── Applications
│   ├── Enrollments
│   │   ├── Logbook Entries
│   │   ├── Reports
│   │   └── Certificates
│   ├── Ratings Received
│   └── Reviews Given
│
├── Faculty Profile
│   ├── Students Mentored
│   ├── Report Approvals
│   └── Partnerships Coordinated
│
└── Industry Profile
    ├── Internships Posted
    ├── Applications Received
    ├── Active Enrollments
    └── Partnerships
```

## Key Design Decisions

### 1. Separation of Concerns
- Base `profiles` table for all users
- Role-specific tables for extended information
- Clear separation between application and enrollment

### 2. Audit Trail
- `created_at` and `updated_at` on all major tables
- `application_status_history` for tracking status changes
- `activity_logs` for user actions

### 3. Flexible Structure
- JSONB columns for flexible data (eligibility_criteria, metadata)
- Array types for multi-value fields (skills, tasks, tags)
- Normalized structure for relationships

### 4. Security
- Row Level Security (RLS) policies
- Role-based access control
- Encrypted sensitive data support

### 5. Performance
- Strategic indexing on frequently queried fields
- Materialized views for analytics
- Efficient foreign key relationships

## Data Types Used

| Type | Usage |
|------|-------|
| UUID | Primary keys, foreign keys |
| TEXT | Variable length strings |
| INTEGER | Counts, scores, years |
| DECIMAL | Ratings, CGPA, hours |
| DATE | Dates without time |
| TIMESTAMPTZ | Timestamps with timezone |
| BOOLEAN | Yes/No flags |
| JSONB | Flexible structured data |
| ARRAY | Lists of values |
| INET | IP addresses |

## Indexing Strategy

### Primary Indexes
- All foreign keys are indexed
- Frequently filtered columns (status, role, dates)
- User lookup fields (email, user_id)

### Composite Indexes
- (student_id, internship_id) for applications
- (enrollment_id, entry_date) for logbook
- (user_id, read) for notifications

## Security Features

### Row Level Security (RLS)
- Students can only view/edit their own data
- Faculty can view assigned students
- Industry partners can manage their postings
- Public viewing of active internships

### Data Protection
- Sensitive fields like PAN, GST numbers
- Email and phone number validation
- Document URLs with access control
- Audit logging for compliance

## Migration from Mock Data

The current mock data in `/data/internships.ts` can be migrated using:

1. Create profiles for sample industry partners
2. Insert internships with proper foreign keys
3. Map skills to skill IDs
4. Set appropriate status and dates

Example migration script would:
```sql
-- Insert sample industry profile
INSERT INTO industry_profiles (user_id, company_name, industry_type, ...)
VALUES (...);

-- Insert internship
INSERT INTO internships (industry_id, title, description, ...)
SELECT id, 'Full Stack Web Development', '...', ...
FROM industry_profiles WHERE company_name = 'TechVista Solutions';
```

## Backup & Recovery

### Recommended Strategy
1. **Daily automated backups** of entire database
2. **Point-in-time recovery** enabled
3. **Replica databases** for read operations
4. **Regular backup testing**

### Critical Data
- User profiles and credentials
- Application records
- Enrollment data and reports
- Certificates and credentials

## Scalability Considerations

### Horizontal Scaling
- Read replicas for analytics queries
- Separate database for activity logs
- Caching layer for frequently accessed data

### Vertical Scaling
- Indexed query optimization
- Partitioning large tables (activity_logs, notifications)
- Archive old data to cold storage

## Future Enhancements

1. **Blockchain Integration**
   - Store certificate hashes on blockchain
   - Tamper-proof verification

2. **AI/ML Features**
   - Recommendation engine training data
   - Skill gap analysis
   - Placement prediction

3. **Advanced Analytics**
   - Real-time dashboards
   - Predictive analytics
   - Trend forecasting

4. **Integration APIs**
   - University ERP integration
   - Payment gateway integration
   - Video conferencing APIs

## Maintenance Tasks

### Regular
- Vacuum and analyze tables
- Update statistics
- Monitor query performance
- Check disk space

### Periodic
- Archive old notifications
- Clean up expired sessions
- Update materialized views
- Optimize indexes

## Compliance

### NEP 2020
- Credit tracking system
- Industry-academia collaboration
- Skill-based learning
- Experiential learning records

### Data Protection
- GDPR-like provisions
- Right to deletion
- Data export capability
- Consent management

## Support & Documentation

For implementation details:
- See `/database/schema.sql` for complete SQL schema
- See `/database/seed.sql` for sample data
- See API documentation for query patterns
- See RLS policies for security implementation