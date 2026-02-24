
import React from 'react';
import {
  BookOpen,
  Palette,
  Clock,
  TrendingUp,
  Users,
  GraduationCap,
  Heart,
  Globe,
  Monitor,
  Mic,
  Lightbulb,
  Stethoscope,
  Library,
  UserPlus,
  Briefcase,
  Music
} from 'lucide-react';
import { Program, Stat, Testimonial, Center } from './types';

export const PROGRAMS: Program[] = [
  {
    id: 'school',
    title: 'School Programme',
    icon: 'BookOpen',
    description: 'Initiates children into the education process and prepares them for mainstream schools, providing a strong foundation from Nursery to Class V.',
    details: [
      'Holistic curriculum aligned with UP Board',
      'Qualified and dedicated educators',
      'Focus on foundational literacy and numeracy',
      'Preparation for mainstream education',
      'Individual attention to first-generation learners'
    ],
    ageRange: 'Nursery to Class V',
    category: 'academic',
    detailedContent: {
      objective: 'To initiate children into the education process and prepare them for mainstream school',
      scope: 'Nursery to Class V',
      keyFeatures: [
        'Internally Developed Level-based Curriculum – Self-paced, non-threatening learning environment helps teachers to engage deeply with the children.',
        'In-house Content — Teachers Manuals, Worksheets and Assessment Sheets for all classes and subjects.',
        'Training, Observation & Assessment Reviews – Monthly Chapter-wise trainings for teachers to ensure more effective delivery. Reviews to assess difficulties faced while teaching as well as for identifying learning gaps for appropriate planning and intervention.',
        'Activity Based Learning - In-class activities and Computer-Aided Learning enables children to develop their logic and creative skills.',
        'Special Assemblies on important themes, personalities and festivals throughout the year.',
        'Academics supplemented with Intensive Life Skills Training & diversified Arts & Performing Arts for holistic development of each child.',
        'Regular field visits, excursions and opportunities to showcase talent in internal as well as external events',
        'Regular Parent Interactions through Home Visits and PTMs',
        'Admissions to Mainstream Schools at the end of the School Programme'
      ]
    }
  },
  {
    id: 'assp',
    title: 'After School Support Programme (ASSP)',
    icon: 'Clock',
    description: 'Provides academic, financial, and mentoring support to ensure students from Class VI to X continue their educational journey successfully.',
    details: [
      'Personalized academic assistance',
      'Homework and assignment support',
      'Financial aid for educational expenses',
      'One-on-one mentoring sessions',
      'Regular progress tracking and parent meetings'
    ],
    ageRange: 'Class VI to X',
    category: 'support',
    detailedContent: {
      objective: 'To provide academic, financial & mentoring support to children who have been enrolled into mainstream schools.',
      scope: 'Classes VI to X',
      keyFeatures: [
        'Mainstreaming - The schools are carefully selected by our board with respect to their quality of education and social commitment towards the cause of the less privileged. After school hours, every child spends 4 hours at our centre for reinforcement of concepts, extracurricular activities as well as mentoring support.',
        'Syllabus Tracking- Teachers supplement the school education and provide help with the lessons to further strengthen academic concepts. A detailed tracking system is followed and analysed to understand where children need help.',
        'School PTM’s & Parent Interactions- Teachers at Vidya & Child attend all school PTM’s and take a detailed feedback on each child with respect to academics and behaviour etc.',
        'Child-wise Meetings- Weekly meetings to discuss child-wise academic & behavioural issues. Remedial sessions and one-on-one sessions are conducted as appropriate.',
        'Math Magic Programme- a computer-based self learning programme to remove the fear of Math as a subject, as also to build a strong understanding of concepts and their application in life. Use of technology makes it more creative and engaging for the child.',
        'Intensive Life Skills, Arts & Performing Arts, Field Trips & Performances',
        'Career Mapping for identifying the potential of each child & channelizing his/her strengths towards a suitable career path',
        'Spoken English & Personality Development Sessions'
      ]
    }
  },
  {
    id: 'nios',
    title: 'NIOS Support Programme',
    icon: 'TrendingUp',
    description: 'Designed for children unable to continue in mainstream schools, helping them complete their education through the National Institute of Open Schooling to prevent dropouts.',
    details: [
      'Flexible learning schedules',
      'NIOS Board certification',
      'Bridge courses for skill gaps',
      'Vocational training integration',
      'Prevention of educational dropout'
    ],
    ageRange: 'Class VI onwards',
    category: 'academic',
    detailedContent: {
      objective: 'To ensure that children, who are not able to continue in mainstream schools, complete their education through NIOS and do not drop out of the education process. Also, to help children understand their inner potential and identify a vocation or skill for development, keeping a long-term view of their career.',
      scope: 'Class VI to XII',
      keyFeatures: [
        'Academic Support & Tracking – Subjects are chosen by the child under guidance from the teachers as per the choices available under NIOS. For 6 hours, regular classes are held for all subjects on a daily basis through a structured timetable that includes Computer Lab classes.',
        'Life Skills Training — Various issues that are age appropriate and cater to the challenges and conflicts faced by children in their daily life are addressed through discussions, film reviews and activity based workshops.',
        'Exposure to Creative Arts through our intensive Arts & Performing Arts Programme.',
        'Intensive one-on-one interaction with each child for counseling & career mapping.',
        'Regular parent interactions — Sustained support through Home Visits, PTM’s and One-on-One interactions.',
        'Spoken English & Personality Development Sessions',
        'Field Trips & Career Exposure Sessions for increased awareness & decision making.',
        'Tie-ups for Vocational Courses for Skill Building in the areas of IT, Cosmetology, etc.'
      ]
    }
  },
  {
    id: 'foundation',
    title: 'Foundation Programme',
    icon: 'GraduationCap',
    description: 'Offers financial, tutoring, career-oriented education, and mentoring support for students from Class XI onwards, preparing them for higher education and careers.',
    details: [
      'Academic support in Math, Science, and Commerce',
      'Syllabus tracking and regular assessments',
      'Continuous mentoring and guidance',
      'Life skills training for career readiness',
      'Career counseling and planning',
      'Financial support for competitive exam coaching'
    ],
    ageRange: 'Class XI and above',
    category: 'career',
    detailedContent: {
      objective: 'To provide financial, tutoring and mentoring support to students to complete their Secondary School Education and to prepare them for career-oriented education. Also, to support them during their higher education, financially as well as through regular mentoring support.',
      scope: 'Class XI onwards',
      keyFeatures: [
        'Interaction with Mainstream School (Class XI & XII) as well as Colleges/ Institutions (Class XII+) to take a detailed feedback on each child with respect to academics and behaviour. Child-wise Meetings are regularly held to discuss the issues for any appropriate intervention required.',
        'Academic Support - (Class XI, XII) - Regular Academic Support provided in Math, Science & Commerce by professional tutors with a strong tutorial background.',
        'Syllabus Tracking & Chapter-wise Assessments to identify areas of concern and necessary remedial action.',
        'Continuous Mentoring Support & Life Skills Training to help students deal with the hardships faced by them, to understand their growing thought process and identify any further support that may be required.',
        'Career Counselling & Exposure Sessions organised in-house as well as at external venues — these sessions are supplemented with counselling, individual follow-ups, as well as parent interactions in order to guide them to make the suitable career choice.',
        'Spoken English & Personality Development Sessions to aid in improved confidence and better communication as well as inter-personal skills.',
        'Financial Support for Specialised Coaching for Competitive Exams of Professional Courses for students who are excelling academically and are keen on a particular career.'
      ]
    }
  },
  {
    id: 'arts',
    title: 'Arts & Performing Arts (APA) Programme',
    icon: 'Music',
    description: 'Provides opportunities for creative expression and artistic development through tabla, Kathak, and other performing arts, nurturing hidden talents.',
    details: [
      'Training in tabla and Kathak dance',
      'Exposure to various art forms',
      'Performance opportunities and showcases',
      'Confidence building through creative expression',
      'Professional instructors and mentors'
    ],
    ageRange: 'Class III and above',
    category: 'enrichment',
    detailedContent: {
      objective: 'Provide an opportunity for creative expression',
      scope: 'Class III and above',
      keyFeatures: [
        'Underlying belief that each child has immense creative potential within, which needs to be explored and channelized.',
        'Every student above Class II takes part - in at least one or a maximum of two APA activities as per his interest and aptitude.',
        'Students are trained by professionals - in the respective fields.',
        'Opportunities provided for showcasing talent in internal and external events',
        'APA Activities - Kathak, Theatre, Tabla, Music, Fine Art, Photography, Puppetry, Pottery, Product Designing, Warli Painting, Film Making & Editing, Madhubani, Patua Art, Music Production'
      ]
    }
  },
  {
    id: 'lifeskills',
    title: 'Life Skills Programme',
    icon: 'Lightbulb',
    description: 'Guides children in managing their strengths and weaknesses to face real-world challenges through a structured curriculum covering essential life competencies.',
    details: [
      'Valuing relationships and social bonds',
      'Character building and ethics',
      'Stress management techniques',
      'Anger management and emotional control',
      'Communication skills development',
      'Problem-solving and decision-making'
    ],
    ageRange: 'All students',
    category: 'enrichment',
    detailedContent: {
      objective: 'To guide children in managing their strengths and weaknesses so they can face real world challenges.',
      scope: 'All Students of Vidya and Child.',
      keyFeatures: [
        'A structured curriculum followed through books and activities for Primary Classes.',
        'Curriculum based life skills for Class VI and above.',
        'Quarterly training and periodic review.',
        'Mental and Physical activities through movies and visual aids.',
        'Exposure to real life case studies.',
        'TOPICS COVERED: Valuing Relationships, Role of Education, Caring & Sharing, Regular Habits, Our Heritage & Culture, Character Building (Goal Setting, Resolving Conflict, Self Esteem, Stress & Time Management), Healthy Habits in your words and in your deeds, Protecting Public Property, Nurture the Nature, Anger Management, Being Safe (Traffic rules, Good & Bad Touch etc.), Consumer health & safety, Community Hygiene, Communication Skills.'
      ]
    }
  }
];

export const CENTERS: Center[] = [
  {
    id: 'sector37',
    name: 'Sector 37 Center',
    location: 'Ambedkar Vihar, Sector 37',
    area: 'Near Shiv Mandir',
    type: 'School & Arts Center',
    programs: ['School Programme', 'Arts & Performing Arts', 'Life Skills', 'Library'],
    city: 'Noida'
  },
  {
    id: 'sector128',
    name: 'Sector 128 Center (Vatika Centre)',
    location: 'Shahpur Village, Sector 128',
    area: 'Shahpur',
    type: 'NIOS Hub',
    programs: ['NIOS Support', 'Foundation Programme', 'Computer Aided Learning', 'Career Counselling'],
    city: 'Noida'
  },
  {
    id: 'barola',
    name: 'Barola Center',
    location: 'Village Barola',
    area: 'Barola',
    type: 'After School Support Center',
    programs: ['After School Support', 'Life Skills', 'Spoken English', 'Library'],
    city: 'Noida'
  },
  {
    id: 'khoda',
    name: 'Khoda Center',
    location: 'Khoda Colony',
    area: 'Khoda',
    type: 'Community Learning Center',
    programs: ['School Programme', 'After School Support', 'Health Programme'],
    city: 'Noida'
  },
  {
    id: 'siwan',
    name: 'Siwan Center',
    location: 'Rural Area, Siwan',
    area: 'Siwan District',
    type: 'Rural Outreach Center',
    programs: ['School Programme', 'Life Skills', 'Health Programme', 'Parent Programme'],
    city: 'Bihar'
  }
];

export const IMPACT_STATS: Stat[] = [
  { label: 'Students Reached', value: '1,700+', icon: 'Users' },
  { label: 'Careers Launched', value: '600+', icon: 'TrendingUp' },
  { label: 'Active Centers', value: '5', icon: 'Globe' },
  { label: 'Years of Service', value: '26+', icon: 'Heart' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Rahul S.",
    role: "Former Student, Software Engineer",
    quote: "Vidya & Child didn't just give me books; they gave me a vision for my life when I had none. Today I'm a software engineer, all thanks to their Foundation Programme.",
    imageUrl: "https://picsum.photos/seed/rahul/100/100"
  },
  {
    author: "Priya M.",
    role: "Parent",
    quote: "My daughter's confidence has soared through the Life Skills Programme. She now dreams of becoming a doctor, something we never thought possible for our family.",
    imageUrl: "https://picsum.photos/seed/priya/100/100"
  },
  {
    author: "David L.",
    role: "Regular Volunteer",
    quote: "Seeing the spark in these children's eyes during the Arts & Performing Arts sessions is the most rewarding experience of my life. Their talent is incredible.",
    imageUrl: "https://picsum.photos/seed/david/100/100"
  }
];

export const IconMap: Record<string, React.ElementType> = {
  BookOpen,
  Palette,
  Clock,
  TrendingUp,
  Users,
  GraduationCap,
  Heart,
  Globe,
  Monitor,
  Mic,
  Lightbulb,
  Stethoscope,
  Library,
  UserPlus,
  Briefcase,
  Music
};
