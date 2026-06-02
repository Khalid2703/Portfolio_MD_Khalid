import React from 'react';
import type { Experience, Project, SkillCategory, Achievement, EducationItem } from './types';

export const NAME = "Md Khalid";
export const TITLE = "AI Software Engineer Intern";
export const EMAIL = "mdkhalid2702@gmail.com";
export const PHONE = "+91 70137 89429";
export const LINKEDIN_URL = "https://www.linkedin.com/in/md-khalid-b3898a22b/";
export const GITHUB_URL = "https://github.com/Khalid2703";

// Get your free Access Key from https://web3forms.com/
// Paste it below to start receiving real form submissions directly to your email!
export const WEB3FORMS_ACCESS_KEY = "5149d5d9-e84f-446f-8a59-4027cda04978";

export const PROFESSIONAL_SUMMARY = "Founding AI & Applied Machine Learning Engineer specializing in multi-agent orchestration, state loop validation, and production-ready NLP architectures (LangGraph, FastAPI, PyTorch). Hand-crafted evaluation layers to secure business-critical LLM integrity.";

export const EXPERIENCES: Experience[] = [
  {
    company: "MicroHeal Healthcare Solutions",
    role: "AI Software Engineer Intern",
    duration: "Jan 2026 - Present",
    description: [
      "Engineered cyclic multi-agent graph workflows using LangGraph to automate patient symptom triage and doctor scheduling.",
      "Successfully processed over 10,000 WhatsApp active webhook iterations using low-latency asynchronous FastAPI routes and OpenCV-based preprocessors.",
      "Devised custom PDF report text parsing modules powered by OpenCV, PaddleOCR, and PyTesseract with automatic data entry validation triggers.",
      "Reduced system diagnostic hallucination risks from 8.2% to less than 0.2% by integrating real-time ground-truth checkers (G-Eval methodology)."
    ]
  },
  {
    company: "DevTech AI",
    role: "AI/ML Software Engineer Intern",
    duration: "Jan 2025 - Dec 2025",
    description: [
      "Led the coding, scaling, and integration of RESTful microservices using Flask, FastAPI, PostgreSQL, and AWS RDS databases.",
      "Integrated secure financial transaction flows with Stripe and implemented OAuth 2.0, OpenID Connect (OIDC), and Single Sign-On (SSO) systems.",
      "Configured multi-instance CI/CD pipelines deploying isolated container environments to Clever Cloud to host live back-ends.",
      "Spearheaded collaborative Figma-to-React prototyping and tested robust HTTP APIs using automated Postman assertions."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "MicroHeal Healthcare Agents",
    subtitle: "Stateful Agentic WhatsApp Healthcare Triage System",
    description: "An autonomous multi-agent health advisor built on top of LangGraph. Features multi-turn patient dialogue memory checkpoints, full Hindi/Telugu/English support, and appointment database write gates.",
    technologies: ["LangGraph", "FastAPI", "Python", "Twilio", "PaddleOCR", "PostgreSQL"]
  },
  {
    title: "Regnova",
    subtitle: "Anti-Hallucinatory PDF Knowledge & Semantic RAG System",
    description: "An intelligent retrieval engine with embedded hallucination evaluator checks. Leverages sparse BM25 and dense embedding vector FAISS spaces combined with cohere-rerank protocols.",
    technologies: ["FAISS", "Gemini API", "Python", "RAG", "G-Eval", "TypeScript"]
  },
  {
    title: "NephroConnect",
    subtitle: "Computer Vision Dialysis Report Digitizer & Clinical Classifier",
    description: "High-accuracy data transformation pipeline utilizing CV image filters, PyTesseract, and Llama 3 to turn scans into triage vectors, flag critical levels, and alert reviews.",
    technologies: ["Llama 3", "OpenCV", "PyTesseract", "FastAPI", "React", "Docker"]
  },
  {
    title: "MediFitMate",
    subtitle: "Pydantic-Driven Multi-Agent Medical Advisor & Drug взаимодействие Screen",
    description: "Autonomous reasoning agent connected to RxNav FDA APIs that flags drug allergies, analyzes visual prescriptions, and formats safe dosages.",
    technologies: ["Python", "FastAPI", "RxNav API", "OpenFDA", "LangGraph", "Vercel"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "AI & Agentic Frameworks",
    skills: ["LangGraph", "LangChain", "Gemini API", "Llama 3", "RAG System Design", "LLM-as-a-Judge", "G-Eval", "Vector Space Embeddings"]
  },
  {
    category: "Backend Engine & Architecture",
    skills: ["Python", "FastAPI", "Flask", "PostgreSQL", "SQLAlchemy", "RESTful REST APIs", "OAuth 2.0", "SSO / OIDC Authentication", "Stripe Checkout"]
  },
  {
    category: "Computer Vision & Extraction",
    skills: ["OpenCV", "PaddleOCR", "PyTesseract OCR", "Numpy", "Pandas", "PyMuPDF"]
  },
  {
    category: "DevOps & Cloud Workloads",
    skills: ["Docker", "Clever Cloud Container Deploys", "Git Version Control", "AWS RDS", "CI/CD Workflows", "Postman Tests", "Figma Design Prototyping"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "1st Runner-up, NephroPlus Healthcare Hackathon",
    description: "Co-authored and integrated a patient monitoring app for the prominent national kidney dialysis organization."
  },
  {
    title: "2nd Prize Winner, University of Hyderabad Data Science Challenge",
    description: "Created high-recall predictive classification models using tabular medical datasets and gradient descent architectures."
  },
  {
    title: "National ECB Chair, AIESEC in Nepal",
    description: "Directed legal systems, governed corporate guidelines, and coordinated multi-city training seminars for hundreds of change makers."
  },
  {
    title: "International Relations Lead, AIESEC in Hungary",
    description: "Nurtured and established continuous bilateral development programs with multiple global university entities."
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.E. in Computer Science",
    institution: "Lords Institute of Engineering & Technology",
    duration: "Oct 2021 – Present",
    grade: "CGPA: 8.88"
  },
  {
    degree: "12th (MPC with CS)",
    institution: "Kendriya Vidyalaya, Gachibowli",
    duration: "2020",
    grade: "CGPA: 7.9"
  },
  {
    degree: "10th",
    institution: "Kendriya Vidyalaya, University of Hyderabad",
    duration: "2018",
    grade: "CGPA: 7.8"
  }
];
