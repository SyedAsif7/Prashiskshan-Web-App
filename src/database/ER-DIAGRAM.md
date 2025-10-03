# Prashiskshan Database - Entity Relationship Diagram

## Visual Schema Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                      USER MANAGEMENT LAYER                       │
└─────────────────────────────────────────────────────────────────┘

                         ┌──────────────┐
                         │   profiles   │
                         │  (base user) │
                         └──────┬───────┘
                                │
                ┌───────────────┼───────────────┐
                │               │               │
        ┌───────▼──────┐ ┌─────▼──────┐ ┌─────▼──────────┐
        │   student_   │ │  faculty_  │ │   industry_    │
        │   profiles   │ │  profiles  │ │   profiles     │
        └──────┬───────┘ └─────┬──────┘ └────────┬───────┘
               │               │                  │
               │               │                  │


┌─────────────────────────────────────────────────────────────────┐
│                    SKILLS & COMPETENCIES LAYER                   │
└─────────────────────────────────────────────────────────────────┘

        ┌──────────────┐
        │    skills    │
        │  (master)    │
        └──────┬───────┘
               │
      ┌────────┴────────┐
      │                 │
┌─────▼──────────┐ ┌────▼───────────────┐
│ student_skills │ │ internship_skills │
└────────────────┘ └────────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│              INTERNSHIP OPPORTUNITIES LAYER                      │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐
│ industry_    │
│ profiles     │
└──────┬───────┘
       │ posts
       │
┌──────▼───────────┐
│   internships    │◄─────┐ requires
└──────┬───────────┘      │
       │                  │
       │ receives  ┌──────┴───────────┐
       │           │ internship_skills│
┌──────▼──────────┐└──────────────────┘
│  applications   │
└──────┬──────────┘
       │ creates
       │
┌──────▼──────────────────┐
│ application_status_     │
│ history (audit)         │
└─────────────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│               INTERNSHIP EXECUTION LAYER                         │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐
│ applications │
│  (selected)  │
└──────┬───────┘
       │ becomes
       │
┌──────▼────────────────┐
│ internship_           │
│ enrollments           │
└──────┬────────────────┘
       │
       ├──────────┐
       │          │
┌──────▼──────┐  │
│  logbook_   │  │
│  entries    │  │
└─────────────┘  │
                 │
       ┌─────────┴─────────┐
       │                   │
┌──────▼──────┐   ┌────────▼──────┐
│   reports   │   │ certificates  │
└─────────────┘   └───────────────┘


┌─────────────────────────────────────────────────────────────────┐
│                FEEDBACK & ASSESSMENT LAYER                       │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────┐
│ enrollments      │
└────────┬─────────┘
         │
    ┌────┴─────┐
    │          │
┌───▼──────┐  │
│ student_ │  │
│ ratings  │  │
└──────────┘  │
              │
       ┌──────▼───────────┐
       │   internship_    │
       │   reviews        │
       └──────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│              LEARNING & DEVELOPMENT LAYER                        │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────┐
│ learning_modules │
└────────┬─────────┘
         │ tracks
         │
┌────────▼─────────────────┐
│ student_module_progress  │
└──────────────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│             PARTNERSHIPS & COLLABORATION LAYER                   │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐         ┌──────────────┐
│ industry_    │◄───────►│  faculty_    │
│ profiles     │  MoU    │  profiles    │
└──────┬───────┘         └──────────────┘
       │
       │ creates
       │
┌──────▼──────────┐
│  partnerships   │
└─────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│          COMMUNICATION & NOTIFICATION LAYER                      │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐         ┌──────────────────┐
│  profiles    │◄────────│  notifications   │
│              │  sent to│  (user-specific) │
└──────────────┘         └──────────────────┘

┌──────────────────────┐
│   announcements      │
│  (multi-audience)    │
└──────────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│                    ANALYTICS & TRACKING LAYER                    │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐         ┌──────────────────┐
│  profiles    │◄────────│  activity_logs   │
│              │ tracks  │                  │
└──────────────┘         └──────────────────┘

┌──────────────────────┐
│ internship_stats     │
│ (materialized view)  │
└──────────────────────┘

┌──────────────────────┐
│ student_performance  │
│ (materialized view)  │
└──────────────────────┘
```

## Detailed Entity Relationships

### 1. User Management Relationships

**profiles (1) → (1) student_profiles**
- One user can have one student profile
- Foreign Key: `student_profiles.user_id → profiles.id`

**profiles (1) → (1) faculty_profiles**
- One user can have one faculty profile
- Foreign Key: `faculty_profiles.user_id → profiles.id`

**profiles (1) → (1) industry_profiles**
- One user can have one industry profile
- Foreign Key: `industry_profiles.user_id → profiles.id`

### 2. Skills Relationships

**skills (1) → (M) student_skills**
- One skill can be possessed by many students
- Foreign Key: `student_skills.skill_id → skills.id`

**student_profiles (1) → (M) student_skills**
- One student can have many skills
- Foreign Key: `student_skills.student_id → student_profiles.id`

**skills (1) → (M) internship_skills**
- One skill can be required by many internships
- Foreign Key: `internship_skills.skill_id → skills.id`

**internships (1) → (M) internship_skills**
- One internship can require many skills
- Foreign Key: `internship_skills.internship_id → internships.id`

### 3. Internship Flow Relationships

**industry_profiles (1) → (M) internships**
- One company can post many internships
- Foreign Key: `internships.industry_id → industry_profiles.id`

**internships (1) → (M) applications**
- One internship can receive many applications
- Foreign Key: `applications.internship_id → internships.id`

**student_profiles (1) → (M) applications**
- One student can apply to many internships
- Foreign Key: `applications.student_id → student_profiles.id`

**applications (1) → (M) application_status_history**
- One application can have multiple status changes
- Foreign Key: `application_status_history.application_id → applications.id`

**applications (1) → (1) internship_enrollments**
- One accepted application creates one enrollment
- Foreign Key: `internship_enrollments.application_id → applications.id`

### 4. Enrollment & Execution Relationships

**internship_enrollments (1) → (M) logbook_entries**
- One enrollment has many logbook entries
- Foreign Key: `logbook_entries.enrollment_id → internship_enrollments.id`

**internship_enrollments (1) → (M) reports**
- One enrollment has many reports (weekly, mid-term, final)
- Foreign Key: `reports.enrollment_id → internship_enrollments.id`

**internship_enrollments (1) → (1) certificates**
- One enrollment generates one certificate
- Foreign Key: `certificates.enrollment_id → internship_enrollments.id`

**faculty_profiles (1) → (M) internship_enrollments**
- One faculty mentor can guide many enrollments
- Foreign Key: `internship_enrollments.faculty_mentor_id → faculty_profiles.id`

### 5. Feedback Relationships

**internship_enrollments (1) → (M) student_ratings**
- One enrollment can have multiple ratings (faculty + industry)
- Foreign Key: `student_ratings.enrollment_id → internship_enrollments.id`

**internships (1) → (M) internship_reviews**
- One internship can have many student reviews
- Foreign Key: `internship_reviews.internship_id → internships.id`

### 6. Learning & Development Relationships

**learning_modules (1) → (M) student_module_progress**
- One module tracks progress for many students
- Foreign Key: `student_module_progress.module_id → learning_modules.id`

**student_profiles (1) → (M) student_module_progress**
- One student can have progress in many modules
- Foreign Key: `student_module_progress.student_id → student_profiles.id`

### 7. Partnership Relationships

**industry_profiles (1) → (M) partnerships**
- One company can have partnerships with many universities
- Foreign Key: `partnerships.industry_id → industry_profiles.id`

**faculty_profiles (1) → (M) partnerships**
- One faculty coordinator can manage many partnerships
- Foreign Key: `partnerships.faculty_coordinator_id → faculty_profiles.id`

## Cardinality Summary

| Relationship | Type | Description |
|-------------|------|-------------|
| profiles → role_profiles | 1:1 | One user, one role profile |
| student → skills | M:N | Many-to-many via student_skills |
| internship → skills | M:N | Many-to-many via internship_skills |
| industry → internships | 1:M | One company, many internships |
| internship → applications | 1:M | One posting, many applications |
| student → applications | 1:M | One student, many applications |
| application → enrollment | 1:1 | One application, one enrollment |
| enrollment → logbook | 1:M | One enrollment, many entries |
| enrollment → reports | 1:M | One enrollment, multiple reports |
| enrollment → ratings | 1:M | One enrollment, multiple ratings |
| faculty → enrollments | 1:M | One mentor, many mentees |

## Key Constraints

### Unique Constraints
- `(student_id, internship_id)` in applications - One application per internship
- `(student_id, skill_id)` in student_skills - One skill entry per student
- `(internship_id, skill_id)` in internship_skills - One skill entry per internship

### Check Constraints
- `role IN ('student', 'faculty', 'industry')` - Valid user roles
- `cgpa >= 0 AND cgpa <= 10` - Valid CGPA range
- `rating >= 1 AND rating <= 5` - Valid rating range
- `progress_percentage >= 0 AND progress_percentage <= 100` - Valid percentage

### Foreign Key Cascade Rules
- **ON DELETE CASCADE**: When user deleted, role profile deleted
- **ON DELETE CASCADE**: When internship deleted, applications deleted
- **ON DELETE SET NULL**: When faculty deleted, enrollment mentor_id nullified

## Indexes

### Primary Indexes (automatically created)
- All `id` columns (UUID primary keys)

### Foreign Key Indexes
- All foreign key columns automatically indexed

### Performance Indexes
- `profiles(email)` - Login lookup
- `profiles(role)` - Role-based queries
- `internships(status, application_deadline)` - Active internship listing
- `applications(student_id, status)` - Student application tracking
- `notifications(user_id, read)` - Unread notifications

### Composite Indexes
- `(student_id, internship_id)` on applications
- `(enrollment_id, entry_date)` on logbook_entries
- `(internship_id, status)` on applications

## Data Flow Diagram

```
[Student Registration] → [Profile Creation] → [Skill Addition]
                                                    ↓
[Industry Posts] → [Internship Creation] → [Add Required Skills]
                                                    ↓
[Student Browse] → [Filter by Skills] → [Apply to Internship]
                                                    ↓
[Industry Review] → [Shortlist] → [Select] → [Create Enrollment]
                                                    ↓
[Assign Mentors] → [Daily Logbook] → [Weekly Reports]
                                                    ↓
[Faculty Review] → [Approve Credits] → [Issue Certificate]
                                                    ↓
[Feedback/Rating] → [Review System] → [Update Analytics]
```

## Transaction Boundaries

### Critical Transactions
1. **Application Submission**: Create application + Update applicant count
2. **Student Selection**: Update application status + Create enrollment + Send notification
3. **Report Submission**: Create report + Update completion percentage + Notify faculty
4. **Credit Approval**: Update enrollment + Create notification + Update student credits
5. **Certificate Issuance**: Create certificate + Update enrollment status + Send email

### Isolation Levels
- Read Committed: Default for most operations
- Serializable: Credit approval, certificate issuance
- Repeatable Read: Report generation, analytics queries