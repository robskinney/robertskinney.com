import { AppWindow, CloudIcon, MemoryStick, Wrench } from "lucide-react";
import React from "react";

export interface Project {
  name: string;
  slug: string;
  link: string;
  image: string;
  tags: string[];
  visual: string;
}

export const Projects: Project[] = [
  {
    name: "Rocket Tutoring",
    slug: "rockettutoring",
    link: "https://rockettutoring.org",
    image: "/RocketTutoringSplash.png",
    tags: ["Live Meetings", "Chat", "Stripe Payments", "Scheduling Assistant"],
    visual: "Dark",
  },
  {
    name: "CelebGuessr",
    slug: "celebguessr",
    link: "https://rskinney.pythonanywhere.com/",
    image: "/CGuessrSplash.png",
    tags: ["New Celebrity Daily", "Share Feature", "Helpful Hints"],
    visual: "Light",
  },
  {
    name: "Gorilla Carts",
    slug: "gorillacarts",
    link: "https://rskinney.pythonanywhere.com/gorillacarts",
    image: "/GorillaCartsSplash.png",
    tags: [
      "Place Orders",
      "Modify Product BOMs",
      "Modify Customers",
      "Modify Materials",
    ],
    visual: "Light",
  },
  {
    name: "AutoTrackr",
    slug: "autotrackr",
    link: "https://rskinney.pythonanywhere.com/autotrackr",
    image: "/AutoTrackrSplash.png",
    tags: ["Add/Edit Events", "Add/Edit Attendees"],
    visual: "Light",
  },
];

export const OverviewSkills: string[] = [
  "Python",
  "Alteryx",
  "SQL",
  "SAP",
  "Power BI",
  "Microsoft Access",
  "Microsoft Excel",
  "Microsoft Visio",
  "PowerAutomate",
  "AWS",
  "Azure",
  "React",
  "TypeScript",
  "HTML",
  "CSS",
  "Spanish",
];

export interface Education {
  ImageAlt: string;
  ImageSrc: string;
  DegreeTitle: string;
  DegreeTitleShort: string;
  SchoolTitle: string;
  SubSchoolTitle: string;
  GradMonthYear: string;
  GradMonthYearShort: string;
  GPA: string;
}

export const EducationInfo: Education[] = [
  {
    ImageAlt: "Indiana University's logo",
    ImageSrc: "/IULogo.webp",
    DegreeTitle: "Master of Science in Information Systems",
    DegreeTitleShort: "MS in Information Systems",
    SchoolTitle: "Indiana University",
    SubSchoolTitle: "Kelley School of Business",
    GradMonthYear: "May 2023",
    GradMonthYearShort: "May '23",
    GPA: "3.64/4.00",
  },
  {
    ImageAlt: "Indiana University's logo",
    ImageSrc: "/IULogo.webp",
    DegreeTitle: "Bachelor of Science in Informatics",
    DegreeTitleShort: "BS in Informatics",
    SchoolTitle: "Indiana University",
    SubSchoolTitle: "Luddy School of Informatics",
    GradMonthYear: "August 2022",
    GradMonthYearShort: "Aug '22",
    GPA: "3.75/4.00",
  },
];

export interface Experience {
  ImageAlt: string;
  ImageSrc: string;
  ExperienceTitle: string;
  ExperienceTitleShort: string;
  ExperienceCompany: string;
  ExperienceLocation: string;
  ExperienceMonthandYears: string;
  ExperienceMonthandYearsShort: string;
  Additional: string[];
}

export const ExperienceInfo: Experience[] = [
  {
    ImageAlt: "EY's logo",
    ImageSrc: "/EYLogo.png",
    ExperienceTitle: "Tax Technology Consultant Staff",
    ExperienceTitleShort: "Tax Tech Consultant Staff",
    ExperienceCompany: "Ernst & Young",
    ExperienceLocation: "New York, NY",
    ExperienceMonthandYears: "July 2023 - Present",
    ExperienceMonthandYearsShort: "July '23 - Present",
    Additional: [
      "Designed client-facing Power BIs and custom reports to visualize and evaluate key project metrics, providing improved confidence in data accuracy and decision-making.",
      "Built and automated ETL pipelines using Python, Alteryx, and SQL that perform data validation, process complex business logic, and provide tie-out statistics that ‘walk’ through the data, reducing manual efforts taken by engagement teams while fostering confidence in data outputs.",
      "Onboarded and supported over 60 clients on an internal platform, providing ongoing support and tailored customizations to facilitate workflows shared by client and engagement teams.",
      "Led integration efforts between two internal platforms by creating user stories, detailed requirements, UI mock-ups, and acting as a business tester, resulting in an improved global view of services provided to clients.",
      "Created comprehensive internal and external business and data requirements documents, process diagrams, and user guides, ensuring smooth implementation and adoption of processes across teams.",
    ],
  },
  {
    ImageAlt: "EY's logo",
    ImageSrc: "/EYLogo.png",
    ExperienceTitle: "Tax Technology Consultant Intern",
    ExperienceTitleShort: "Tax Tech Consultant Intern",
    ExperienceCompany: "Ernst & Young",
    ExperienceLocation: "Chicago, IL",
    ExperienceMonthandYears: "July 2022 - August 2022",
    ExperienceMonthandYearsShort: "July '22 - Aug '22",
    Additional: [
      "Researched industry performance improvement trends and technologies, leveraging Alteryx to transform data stored in an internal platform and Power BI to create visualizations, providing actionable insights that empowered engagement teams to make data-driven decisions.",
      "Implemented process enhancements to service delivery capabilities, incorporating feedback from client engagements, managers, and partners, resulting in more efficient workstreams.",
      "Identified and filled gaps in the documentation of internal processes and procedures, ensuring a consistent understanding of services provided across functional groups.",
    ],
  },
];

export interface TechnicalSkill {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

export const TechnicalSkills: TechnicalSkill[] = [
  {
    icon: React.createElement(MemoryStick, { className: "mr-1.5", size: 20 }),
    title: "Programming Languages",
    items: ["Python", "SQL", "Java", "R", "TypeScript", "HTML/CSS"],
  },
  {
    icon: React.createElement(AppWindow, { className: "mr-1.5", size: 20 }),
    title: "Data Tools",
    items: [
      "Alteryx",
      "Power BI",
      "Tableau",
      "Microsoft Access",
      "Microsoft Excel",
    ],
  },
  {
    icon: React.createElement(CloudIcon, { className: "mr-1.5", size: 20 }),
    title: "Cloud Platforms",
    items: ["Amazon Web Services (AWS)", "Microsoft Azure"],
  },
  {
    icon: React.createElement(Wrench, { className: "mr-1.5", size: 20 }),
    title: "Other Tools",
    items: ["PowerAutomate", "SAP S/4", "Figma", "Microsoft Visio"],
  },
];

export const AdditionalInfo = [
  "Designed and developed Rocket Tutoring, a full-stack tutoring platform to facilitate discovery, communication, and learning between students and tutors.",
  "Implemented an SAP S/4 ERP system from scratch for a fictional German bicycle manufacturing company, successfully enabling procurement, production, and sale of products.",
  "Interest in all things mechanical and electronic, especially automotive. Always curious to investigate how everyday items and technologies work.",
];
