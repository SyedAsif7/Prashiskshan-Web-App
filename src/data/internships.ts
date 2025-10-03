export interface Internship {
  id: string;
  title: string;
  duration: string;
  mode: 'Online' | 'On-site' | 'Hybrid' | 'Lab-based';
  skills: string[];
  industry: string;
  description: string;
  stipend?: string;
  eligibility: string;
  startDate: string;
  applicationDeadline: string;
  openings: number;
  companyName: string;
  companyLogo?: string;
  applicants?: number;
}

export const internships: Internship[] = [
  {
    id: 'int-001',
    title: 'Full Stack Web Development Internship',
    duration: '8 weeks',
    mode: 'Hybrid',
    skills: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB'],
    industry: 'IT',
    description: 'Build modern web applications using MERN stack. Work on real-world projects and gain hands-on experience with industry-standard tools and practices.',
    stipend: '₹15,000 - ₹20,000/month',
    eligibility: 'BE/BTech/MCA students, 2nd year onwards',
    startDate: '2025-11-01',
    applicationDeadline: '2025-10-20',
    openings: 10,
    companyName: 'TechVista Solutions',
    applicants: 45
  },
  {
    id: 'int-002',
    title: 'Data Science & Analytics Internship',
    duration: '10 weeks',
    mode: 'Online',
    skills: ['Python', 'Pandas', 'Machine Learning', 'Power BI'],
    industry: 'Analytics',
    description: 'Dive deep into data analysis and machine learning. Learn to extract insights from large datasets and build predictive models.',
    stipend: '₹18,000 - ₹25,000/month',
    eligibility: 'BE/BTech/BSc students with Python knowledge',
    startDate: '2025-11-15',
    applicationDeadline: '2025-10-25',
    openings: 8,
    companyName: 'DataMinds Analytics',
    applicants: 67
  },
  {
    id: 'int-003',
    title: 'AI & Machine Learning Internship',
    duration: '12 weeks',
    mode: 'Online',
    skills: ['TensorFlow', 'Deep Learning', 'Neural Networks', 'Python'],
    industry: 'AI',
    description: 'Work on cutting-edge AI projects including computer vision and NLP. Build and deploy deep learning models.',
    stipend: '₹20,000 - ₹30,000/month',
    eligibility: 'BTech/MTech students, 3rd year onwards',
    startDate: '2025-12-01',
    applicationDeadline: '2025-11-10',
    openings: 5,
    companyName: 'AI Innovations Lab',
    applicants: 89
  },
  {
    id: 'int-004',
    title: 'Cybersecurity Internship',
    duration: '6 weeks',
    mode: 'On-site',
    skills: ['Ethical Hacking', 'Network Security', 'Penetration Testing'],
    industry: 'Cybersecurity',
    description: 'Learn ethical hacking techniques and secure network infrastructure. Gain hands-on experience with security tools and vulnerability assessment.',
    stipend: '₹12,000 - ₹18,000/month',
    eligibility: 'BE/BTech students, CS/IT background',
    startDate: '2025-10-28',
    applicationDeadline: '2025-10-15',
    openings: 6,
    companyName: 'SecureNet Systems',
    applicants: 34
  },
  {
    id: 'int-005',
    title: 'Mobile App Development Internship',
    duration: '8 weeks',
    mode: 'Hybrid',
    skills: ['Flutter', 'React Native', 'Firebase', 'UI/UX'],
    industry: 'IT',
    description: 'Create cross-platform mobile applications for iOS and Android. Learn modern mobile development frameworks and best practices.',
    stipend: '₹16,000 - ₹22,000/month',
    eligibility: 'BE/BTech/MCA students, any year',
    startDate: '2025-11-05',
    applicationDeadline: '2025-10-22',
    openings: 12,
    companyName: 'AppCraft Technologies',
    applicants: 56
  },
  {
    id: 'int-006',
    title: 'Cloud Computing with AWS & Azure Training',
    duration: '4 weeks',
    mode: 'Online',
    skills: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Kubernetes'],
    industry: 'Cloud',
    description: 'Master cloud platforms and containerization. Learn to deploy scalable applications on AWS and Azure.',
    stipend: '₹10,000 - ₹15,000/month',
    eligibility: 'BTech/MCA students, basic Linux knowledge',
    startDate: '2025-10-25',
    applicationDeadline: '2025-10-12',
    openings: 15,
    companyName: 'CloudScale Services',
    applicants: 78
  },
  {
    id: 'int-007',
    title: 'Blockchain & Web3 Training',
    duration: '6 weeks',
    mode: 'Online',
    skills: ['Solidity', 'Smart Contracts', 'Ethereum', 'DApps'],
    industry: 'FinTech',
    description: 'Explore blockchain technology and decentralized applications. Build and deploy smart contracts on Ethereum.',
    stipend: '₹15,000 - ₹25,000/month',
    eligibility: 'BE/BTech students with programming background',
    startDate: '2025-11-20',
    applicationDeadline: '2025-11-05',
    openings: 8,
    companyName: 'CryptoChain Labs',
    applicants: 41
  },
  {
    id: 'int-008',
    title: 'IoT & Embedded Systems Training',
    duration: '6 weeks',
    mode: 'On-site',
    skills: ['Arduino', 'Raspberry Pi', 'Sensors', 'C/C++'],
    industry: 'IoT',
    description: 'Build smart IoT devices and learn embedded programming. Work with sensors, actuators, and IoT protocols.',
    stipend: '₹12,000 - ₹16,000/month',
    eligibility: 'BE/BTech students, ECE/EEE/CS background',
    startDate: '2025-11-10',
    applicationDeadline: '2025-10-28',
    openings: 10,
    companyName: 'SmartDevices Inc',
    applicants: 29
  },
  {
    id: 'int-009',
    title: 'Data Visualization with Power BI & Tableau',
    duration: '3 weeks',
    mode: 'Online',
    skills: ['Power BI', 'Tableau', 'SQL', 'Data Analytics'],
    industry: 'Analytics',
    description: 'Create stunning business intelligence dashboards. Learn to visualize complex data and derive actionable insights.',
    stipend: '₹8,000 - ₹12,000/month',
    eligibility: 'Any graduate student',
    startDate: '2025-10-22',
    applicationDeadline: '2025-10-10',
    openings: 20,
    companyName: 'BI Experts',
    applicants: 92
  },
  {
    id: 'int-010',
    title: 'DevOps & Automation Training',
    duration: '5 weeks',
    mode: 'Online',
    skills: ['Jenkins', 'Kubernetes', 'Docker', 'Git', 'CI/CD'],
    industry: 'IT',
    description: 'Master DevOps practices and automation tools. Learn to build efficient CI/CD pipelines and manage containerized applications.',
    stipend: '₹14,000 - ₹20,000/month',
    eligibility: 'BTech/MCA students, final year preferred',
    startDate: '2025-11-08',
    applicationDeadline: '2025-10-25',
    openings: 7,
    companyName: 'DevOps Masters',
    applicants: 51
  },
  {
    id: 'wks-001',
    title: 'Resume Building & Interview Skills Workshop',
    duration: '2 days',
    mode: 'Hybrid',
    skills: ['Resume Writing', 'Interview Techniques', 'Mock Interviews'],
    industry: 'Placement',
    description: 'Prepare for your dream job with expert guidance on resume building and interview techniques. Get personalized feedback.',
    stipend: 'Free',
    eligibility: 'All students',
    startDate: '2025-10-18',
    applicationDeadline: '2025-10-15',
    openings: 50,
    companyName: 'CareerBoost Academy',
    applicants: 123
  },
  {
    id: 'wks-002',
    title: 'Design Thinking & Innovation Workshop',
    duration: '3 days',
    mode: 'On-site',
    skills: ['Design Thinking', 'Innovation Strategy', 'Prototyping'],
    industry: 'Management',
    description: 'Learn human-centered design approach to innovation. Work on real business challenges and develop creative solutions.',
    stipend: 'Free',
    eligibility: 'All students',
    startDate: '2025-10-25',
    applicationDeadline: '2025-10-18',
    openings: 40,
    companyName: 'InnovateLab',
    applicants: 76
  },
  {
    id: 'wks-003',
    title: 'Digital Marketing Workshop',
    duration: '3 days',
    mode: 'Online',
    skills: ['SEO', 'Google Ads', 'Social Media Marketing', 'Analytics'],
    industry: 'Marketing',
    description: 'Master digital marketing strategies and tools. Learn SEO, paid advertising, and social media marketing.',
    stipend: 'Free',
    eligibility: 'All students',
    startDate: '2025-11-01',
    applicationDeadline: '2025-10-20',
    openings: 60,
    companyName: 'DigiMarketing Pro',
    applicants: 145
  },
  {
    id: 'wks-004',
    title: 'Entrepreneurship & Startup Bootcamp',
    duration: '5 days',
    mode: 'On-site',
    skills: ['Business Planning', 'Pitch Deck', 'Funding', 'Marketing'],
    industry: 'Startups',
    description: 'Transform your ideas into successful startups. Learn from successful entrepreneurs and develop your business plan.',
    stipend: 'Free',
    eligibility: 'All students with startup ideas',
    startDate: '2025-11-12',
    applicationDeadline: '2025-10-30',
    openings: 30,
    companyName: 'Startup Accelerator',
    applicants: 87
  },
  {
    id: 'wks-005',
    title: 'AI for Healthcare Workshop',
    duration: '3 days',
    mode: 'Online',
    skills: ['Medical AI', 'Healthcare Analytics', 'ML in Medicine'],
    industry: 'Healthcare',
    description: 'Explore AI applications in healthcare. Learn about medical image analysis and predictive healthcare models.',
    stipend: 'Free',
    eligibility: 'BE/BTech/Medical students',
    startDate: '2025-11-15',
    applicationDeadline: '2025-11-01',
    openings: 35,
    companyName: 'HealthTech Innovations',
    applicants: 64
  },
  {
    id: 'int-011',
    title: 'Renewable Energy Internship',
    duration: '8 weeks',
    mode: 'On-site',
    skills: ['Solar Energy', 'Wind Energy', 'Green Technology', 'Sustainability'],
    industry: 'Energy',
    description: 'Work on sustainable energy projects. Learn about solar panel systems, wind turbines, and green technology implementation.',
    stipend: '₹10,000 - ₹15,000/month',
    eligibility: 'BE/BTech students, EEE/Mechanical background',
    startDate: '2025-11-18',
    applicationDeadline: '2025-11-05',
    openings: 8,
    companyName: 'GreenPower Solutions',
    applicants: 38
  },
  {
    id: 'int-012',
    title: 'Civil Engineering & Smart Cities Internship',
    duration: '10 weeks',
    mode: 'On-site',
    skills: ['AutoCAD', 'GIS', 'Urban Planning', 'Construction Management'],
    industry: 'Infrastructure',
    description: 'Work on smart city infrastructure projects. Learn modern construction techniques and urban planning tools.',
    stipend: '₹12,000 - ₹18,000/month',
    eligibility: 'BE Civil students, 2nd year onwards',
    startDate: '2025-12-01',
    applicationDeadline: '2025-11-15',
    openings: 6,
    companyName: 'SmartCity Builders',
    applicants: 42
  },
  {
    id: 'int-013',
    title: 'Mechanical Engineering CAD Training',
    duration: '6 weeks',
    mode: 'Hybrid',
    skills: ['SolidWorks', '3D Printing', 'CAD/CAM', 'Product Design'],
    industry: 'Manufacturing',
    description: 'Master CAD software and product design. Learn 3D modeling, simulation, and additive manufacturing.',
    stipend: '₹10,000 - ₹14,000/month',
    eligibility: 'BE Mechanical/Production students',
    startDate: '2025-11-08',
    applicationDeadline: '2025-10-25',
    openings: 12,
    companyName: 'PrecisionTech Manufacturing',
    applicants: 55
  },
  {
    id: 'int-014',
    title: 'Biotech & Research Internship',
    duration: '8 weeks',
    mode: 'Lab-based',
    skills: ['DNA Sequencing', 'Genetic Engineering', 'Lab Techniques'],
    industry: 'Life Sciences',
    description: 'Conduct cutting-edge biotechnology research. Work in modern labs with advanced equipment and expert mentors.',
    stipend: '₹8,000 - ₹12,000/month',
    eligibility: 'BTech/MSc Biotech students',
    startDate: '2025-11-22',
    applicationDeadline: '2025-11-08',
    openings: 5,
    companyName: 'BioGen Research Labs',
    applicants: 27
  },
  {
    id: 'int-015',
    title: 'FinTech & Investment Banking Internship',
    duration: '6 weeks',
    mode: 'Online',
    skills: ['Financial Modeling', 'Stock Market', 'Excel', 'Risk Analysis'],
    industry: 'Finance',
    description: 'Learn investment banking and financial analysis. Work with real market data and financial modeling tools.',
    stipend: '₹15,000 - ₹25,000/month',
    eligibility: 'BE/MBA/Commerce students',
    startDate: '2025-11-25',
    applicationDeadline: '2025-11-10',
    openings: 10,
    companyName: 'FinTech Capital',
    applicants: 98
  },
  {
    id: 'int-016',
    title: 'AR/VR Development Training',
    duration: '8 weeks',
    mode: 'Online',
    skills: ['Unity', 'ARKit', 'VR Development', 'C#', '3D Graphics'],
    industry: 'Gaming',
    description: 'Build immersive AR/VR experiences. Learn game engine development and create virtual reality applications.',
    stipend: '₹18,000 - ₹24,000/month',
    eligibility: 'BE/BTech/MCA students with basic programming',
    startDate: '2025-12-05',
    applicationDeadline: '2025-11-20',
    openings: 7,
    companyName: 'VirtualWorld Studios',
    applicants: 61
  }
];

export const getInternshipById = (id: string): Internship | undefined => {
  return internships.find(int => int.id === id);
};

export const filterInternships = (
  searchTerm: string,
  industry: string,
  mode: string
): Internship[] => {
  return internships.filter(int => {
    const matchesSearch = searchTerm === '' || 
      int.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      int.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIndustry = industry === 'all' || int.industry === industry;
    const matchesMode = mode === 'all' || int.mode === mode;
    
    return matchesSearch && matchesIndustry && matchesMode;
  });
};