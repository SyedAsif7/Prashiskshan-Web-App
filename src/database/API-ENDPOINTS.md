# Prashiskshan API Endpoints Documentation

## Base URL
```
Production: https://api.prashiskshan.edu.in/v1
Development: http://localhost:3000/api/v1
```

## Authentication
All authenticated endpoints require JWT token in Authorization header:
```
Authorization: Bearer <jwt_token>
```

## Response Format
```json
{
  "success": true|false,
  "data": {},
  "message": "Success message",
  "error": "Error message (if applicable)",
  "metadata": {
    "timestamp": "2025-10-02T10:30:00Z",
    "version": "1.0"
  }
}
```

---

## 1. Authentication Endpoints

### POST /auth/register
Register a new user

**Request Body:**
```json
{
  "email": "student@example.com",
  "password": "SecurePass123!",
  "full_name": "John Doe",
  "role": "student",
  "phone": "+91-9876543210"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "student@example.com",
      "full_name": "John Doe",
      "role": "student"
    },
    "access_token": "jwt_token",
    "refresh_token": "refresh_token"
  }
}
```

### POST /auth/login
Login with email and password

**Request Body:**
```json
{
  "email": "student@example.com",
  "password": "SecurePass123!"
}
```

### POST /auth/logout
Logout and invalidate token

### POST /auth/refresh
Refresh access token using refresh token

### POST /auth/forgot-password
Request password reset link

### POST /auth/reset-password
Reset password with token

### POST /auth/verify-email
Verify email with verification token

---

## 2. Profile Endpoints

### GET /profile
Get current user's profile

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "email": "student@example.com",
    "full_name": "John Doe",
    "role": "student",
    "avatar_url": "https://...",
    "created_at": "2025-01-01T00:00:00Z",
    "student_profile": {
      "university": "IIT Delhi",
      "degree": "B.Tech",
      "major": "Computer Science",
      "year_of_study": 3,
      "cgpa": 8.5
    }
  }
}
```

### PUT /profile
Update user profile

### POST /profile/avatar
Upload profile avatar

### GET /profile/skills
Get user's skills

### POST /profile/skills
Add skill to profile

**Request Body:**
```json
{
  "skill_id": "uuid",
  "proficiency_level": "intermediate",
  "years_of_experience": 1.5
}
```

### DELETE /profile/skills/:skillId
Remove skill from profile

---

## 3. Student Endpoints

### GET /students
Get list of students (Faculty/Industry only)

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)
- `university`: Filter by university
- `year`: Filter by year of study
- `skills`: Filter by skills (comma-separated)

### GET /students/:id
Get student profile by ID

### PUT /students/:id/profile
Update student profile (Student own profile only)

**Request Body:**
```json
{
  "university": "IIT Delhi",
  "degree": "B.Tech",
  "major": "Computer Science",
  "year_of_study": 3,
  "graduation_year": 2026,
  "cgpa": 8.5,
  "bio": "Passionate developer...",
  "resume_url": "https://...",
  "portfolio_url": "https://...",
  "linkedin_url": "https://...",
  "github_url": "https://..."
}
```

---

## 4. Internship Endpoints

### GET /internships
Get list of all active internships

**Query Parameters:**
- `page`: Page number
- `limit`: Items per page
- `search`: Search in title/description
- `industry`: Filter by industry type
- `mode`: Filter by mode (Online, On-site, Hybrid)
- `skills`: Filter by required skills
- `min_stipend`: Minimum stipend
- `max_stipend`: Maximum stipend
- `sort`: Sort by (deadline, stipend, created_at)
- `order`: asc|desc

**Response:**
```json
{
  "success": true,
  "data": {
    "internships": [
      {
        "id": "uuid",
        "title": "Full Stack Web Development",
        "description": "Build modern web apps...",
        "company": {
          "id": "uuid",
          "name": "TechVista Solutions",
          "logo_url": "https://..."
        },
        "duration_weeks": 8,
        "mode": "Hybrid",
        "location": "Bangalore",
        "industry_type": "IT",
        "stipend_min": 15000,
        "stipend_max": 20000,
        "openings": 10,
        "applications_count": 45,
        "start_date": "2025-11-01",
        "application_deadline": "2025-10-20",
        "skills_required": [
          {"name": "React", "required": true},
          {"name": "Node.js", "required": true}
        ],
        "featured": true
      }
    ],
    "pagination": {
      "total": 100,
      "page": 1,
      "limit": 20,
      "total_pages": 5
    }
  }
}
```

### GET /internships/:id
Get internship details by ID

### POST /internships
Create new internship (Industry only)

**Request Body:**
```json
{
  "title": "Full Stack Web Development Internship",
  "description": "Detailed description...",
  "responsibilities": ["Task 1", "Task 2"],
  "requirements": ["Req 1", "Req 2"],
  "duration_weeks": 8,
  "mode": "Hybrid",
  "location": "Bangalore, Karnataka",
  "industry_type": "IT",
  "stipend_min": 15000,
  "stipend_max": 20000,
  "openings": 10,
  "start_date": "2025-11-01",
  "application_deadline": "2025-10-20",
  "eligibility_criteria": {
    "min_cgpa": 7.0,
    "year_restrictions": [2, 3, 4],
    "preferred_universities": ["IIT Delhi", "NIT Trichy"]
  },
  "skills_required": [
    {"skill_id": "uuid", "required": true, "proficiency": "intermediate"}
  ]
}
```

### PUT /internships/:id
Update internship (Industry only - own internships)

### DELETE /internships/:id
Delete internship (Industry only - own internships)

### GET /internships/:id/applicants
Get applicants for internship (Industry only)

### GET /internships/:id/stats
Get internship statistics

---

## 5. Application Endpoints

### GET /applications
Get user's applications

**Query Parameters:**
- `status`: Filter by status (pending, under_review, shortlisted, selected, rejected)
- `internship_id`: Filter by internship

**Response:**
```json
{
  "success": true,
  "data": {
    "applications": [
      {
        "id": "uuid",
        "internship": {
          "id": "uuid",
          "title": "Full Stack Development",
          "company": "TechVista Solutions"
        },
        "status": "under_review",
        "applied_at": "2025-10-01T10:00:00Z",
        "cover_letter": "I am interested...",
        "resume_url": "https://..."
      }
    ]
  }
}
```

### POST /applications
Apply to internship

**Request Body:**
```json
{
  "internship_id": "uuid",
  "cover_letter": "I am applying because...",
  "resume_url": "https://...",
  "additional_documents": {
    "certificates": ["url1", "url2"],
    "portfolio": "https://..."
  }
}
```

### GET /applications/:id
Get application details

### PUT /applications/:id
Update application (before review)

### DELETE /applications/:id
Withdraw application

### PUT /applications/:id/status
Update application status (Industry only)

**Request Body:**
```json
{
  "status": "shortlisted",
  "notes": "Good candidate, schedule interview"
}
```

---

## 6. Enrollment Endpoints

### GET /enrollments
Get user's enrollments

**Query Parameters:**
- `status`: Filter by status (ongoing, completed, discontinued)

**Response:**
```json
{
  "success": true,
  "data": {
    "enrollments": [
      {
        "id": "uuid",
        "internship": {
          "title": "Full Stack Development",
          "company": "TechVista Solutions"
        },
        "faculty_mentor": {
          "name": "Dr. Sharma",
          "email": "dr.sharma@university.edu"
        },
        "start_date": "2025-11-01",
        "end_date": "2025-12-27",
        "status": "ongoing",
        "completion_percentage": 75,
        "nep_credits": 4,
        "credit_approved": false
      }
    ]
  }
}
```

### GET /enrollments/:id
Get enrollment details

### PUT /enrollments/:id
Update enrollment details

### POST /enrollments/:id/mentor
Assign mentor to enrollment (Faculty only)

---

## 7. Logbook Endpoints

### GET /logbook
Get logbook entries for enrollment

**Query Parameters:**
- `enrollment_id`: Enrollment ID (required)
- `week_number`: Filter by week
- `start_date`: Start date filter
- `end_date`: End date filter

### POST /logbook
Create logbook entry

**Request Body:**
```json
{
  "enrollment_id": "uuid",
  "entry_date": "2025-10-15",
  "week_number": 2,
  "title": "Frontend Development",
  "description": "Worked on React components...",
  "tasks_completed": ["Task 1", "Task 2"],
  "learnings": ["Learning 1", "Learning 2"],
  "challenges": ["Challenge 1"],
  "hours_worked": 8.5,
  "skills_practiced": ["skill_uuid_1", "skill_uuid_2"]
}
```

### GET /logbook/:id
Get logbook entry details

### PUT /logbook/:id
Update logbook entry

### DELETE /logbook/:id
Delete logbook entry

### POST /logbook/:id/review
Add mentor review to logbook (Faculty/Industry only)

**Request Body:**
```json
{
  "comments": "Good progress, keep it up!",
  "rating": 4
}
```

---

## 8. Report Endpoints

### GET /reports
Get reports

**Query Parameters:**
- `enrollment_id`: Filter by enrollment
- `report_type`: Filter by type (weekly, mid-term, final, certificate)
- `status`: Filter by approval status

### POST /reports
Create/submit report

**Request Body:**
```json
{
  "enrollment_id": "uuid",
  "report_type": "weekly",
  "week_number": 4,
  "title": "Week 4 Progress Report",
  "content": "Detailed report content...",
  "executive_summary": "Summary...",
  "objectives_achieved": ["Obj 1", "Obj 2"],
  "skills_acquired": ["skill_uuid_1"],
  "project_details": {
    "project_name": "E-commerce App",
    "technologies": ["React", "Node.js"]
  }
}
```

### GET /reports/:id
Get report details

### PUT /reports/:id
Update report (before approval)

### POST /reports/:id/approve
Approve report (Faculty only)

**Request Body:**
```json
{
  "approved": true,
  "comments": "Well written report",
  "nep_credits": 2
}
```

### POST /reports/:id/request-revision
Request revision (Faculty only)

### GET /reports/:id/download
Download report as PDF

---

## 9. Feedback & Rating Endpoints

### POST /ratings
Submit rating for student (Faculty/Industry only)

**Request Body:**
```json
{
  "enrollment_id": "uuid",
  "student_id": "uuid",
  "overall_rating": 4,
  "technical_skills": 5,
  "communication": 4,
  "teamwork": 5,
  "problem_solving": 4,
  "professionalism": 5,
  "comments": "Excellent intern...",
  "strengths": ["Quick learner", "Team player"],
  "areas_for_improvement": ["Time management"],
  "would_recommend": true
}
```

### POST /reviews
Submit internship review (Student only)

**Request Body:**
```json
{
  "internship_id": "uuid",
  "enrollment_id": "uuid",
  "overall_rating": 5,
  "learning_experience": 5,
  "mentorship_quality": 4,
  "work_environment": 5,
  "stipend_satisfaction": 4,
  "would_recommend": true,
  "review_text": "Great experience...",
  "pros": ["Good mentorship", "Real projects"],
  "cons": ["Long hours"],
  "tips_for_applicants": "Know React well"
}
```

### GET /ratings/:studentId
Get ratings for a student

### GET /reviews/:internshipId
Get reviews for an internship

---

## 10. Learning Module Endpoints

### GET /learning-modules
Get all learning modules

**Query Parameters:**
- `category`: Filter by category
- `difficulty`: Filter by difficulty level
- `search`: Search in title/description

### GET /learning-modules/:id
Get module details

### GET /learning-modules/:id/progress
Get student's progress in module

### POST /learning-modules/:id/enroll
Enroll in learning module

### PUT /learning-modules/:id/progress
Update progress in module

**Request Body:**
```json
{
  "status": "in_progress",
  "progress_percentage": 75,
  "time_spent_minutes": 120,
  "quiz_score": 85
}
```

---

## 11. Partnership Endpoints

### GET /partnerships
Get partnerships (Faculty/Industry only)

### POST /partnerships
Create partnership (Industry only)

### GET /partnerships/:id
Get partnership details

### PUT /partnerships/:id
Update partnership

### POST /partnerships/:id/request-mou
Request MoU (Industry to Faculty)

---

## 12. Notification Endpoints

### GET /notifications
Get user notifications

**Query Parameters:**
- `read`: Filter by read status (true|false)
- `type`: Filter by type
- `limit`: Number of notifications

**Response:**
```json
{
  "success": true,
  "data": {
    "notifications": [
      {
        "id": "uuid",
        "title": "Application Update",
        "message": "Your application has been shortlisted",
        "type": "application",
        "priority": "high",
        "read": false,
        "action_url": "/applications/uuid",
        "created_at": "2025-10-02T10:00:00Z"
      }
    ],
    "unread_count": 5
  }
}
```

### PUT /notifications/:id/read
Mark notification as read

### PUT /notifications/read-all
Mark all notifications as read

### DELETE /notifications/:id
Delete notification

---

## 13. Analytics Endpoints

### GET /analytics/dashboard
Get dashboard analytics

**Response (Student):**
```json
{
  "success": true,
  "data": {
    "applications_count": 12,
    "accepted_count": 2,
    "ongoing_internships": 1,
    "completed_internships": 1,
    "total_credits": 8,
    "average_rating": 4.5,
    "skills_acquired": 15,
    "profile_completeness": 85
  }
}
```

**Response (Industry):**
```json
{
  "success": true,
  "data": {
    "active_postings": 5,
    "total_applicants": 234,
    "shortlisted": 45,
    "selected": 12,
    "ongoing_interns": 8,
    "completed_interns": 20,
    "average_rating": 4.3,
    "top_skills_demand": [
      {"skill": "React", "count": 120},
      {"skill": "Python", "count": 95}
    ]
  }
}
```

### GET /analytics/trends
Get application/enrollment trends

### GET /analytics/skills
Get skills analytics

### GET /analytics/performance
Get performance metrics (Faculty only)

---

## 14. Search & Discovery Endpoints

### GET /search
Global search across platform

**Query Parameters:**
- `q`: Search query
- `type`: Filter by type (internships, students, companies)
- `limit`: Results per page

### GET /recommendations/internships
Get personalized internship recommendations (Student only)

### GET /recommendations/candidates
Get candidate recommendations for internship (Industry only)

**Query Parameters:**
- `internship_id`: Internship ID

---

## 15. Admin Endpoints

### GET /admin/users
Get all users (Admin only)

### PUT /admin/users/:id/verify
Verify industry partner

### GET /admin/statistics
Get platform-wide statistics

### POST /admin/announcements
Create platform announcement

---

## Error Codes

| Code | Message | Description |
|------|---------|-------------|
| 400 | Bad Request | Invalid input data |
| 401 | Unauthorized | Missing or invalid auth token |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 409 | Conflict | Duplicate entry or constraint violation |
| 422 | Unprocessable Entity | Validation error |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |

## Rate Limiting

- **General**: 100 requests per minute per user
- **Authentication**: 5 requests per minute per IP
- **File uploads**: 10 requests per hour per user
- **Search**: 30 requests per minute per user

## Pagination

All list endpoints support pagination:
```
?page=1&limit=20
```

Response includes pagination metadata:
```json
{
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "total_pages": 5,
    "has_next": true,
    "has_prev": false
  }
}
```

## File Uploads

### POST /upload/avatar
Upload profile avatar

### POST /upload/resume
Upload resume

### POST /upload/document
Upload document

**Request**: multipart/form-data
**Max Size**: 5MB for images, 10MB for documents
**Allowed Types**: jpg, png, pdf, doc, docx

## Webhooks

Industry partners can register webhooks for events:
- `application.created`
- `application.updated`
- `enrollment.started`
- `enrollment.completed`
- `report.submitted`

Register webhook:
```
POST /webhooks
{
  "url": "https://your-domain.com/webhook",
  "events": ["application.created", "application.updated"],
  "secret": "your_webhook_secret"
}
```