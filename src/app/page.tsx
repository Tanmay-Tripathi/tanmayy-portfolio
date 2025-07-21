
'use client';

import { Briefcase, Calendar, Cpu, ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin, Phone, Star, Trophy, FileText, Code, Award, Zap, BrainCircuit, Download, Menu } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ModeToggle } from '@/components/mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LeetCodeChart } from '@/components/leetcode-chart';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';

const personalInfo = {
  name: "Tanmay Tripathi",
  title: "Software Engineer",
  email: "iamtanmay.0101@gmail.com",
  phone: "+91 12345 67890",
  location: "Lucknow, India",
  linkedin: "https://www.linkedin.com/in/tripathitanmay/",
  github: "https://github.com/Tanmay-Tripathi",
  cvLink: "/assets/TanmayTripathi_SW_Early_Role.pdf",
  googleScholar: "https://scholar.google.com/citations?hl=en&user=TXgAG3IAAAAJ",
  leetcode: "https://leetcode.com/u/TripathiTanmay/",
};

const KellyTechnologiesLogo = ({ className }: { className?: string }) => (
    <div className={`bg-white rounded-sm p-1 flex items-center justify-center ${className}`}>
        <Image 
            src="/assets/Kelly.png" 
            alt="Kelly Technologies Logo" 
            width={80} 
            height={80} 
            className="object-contain"
        />
    </div>
);

const GeeksForGeeksLogo = ({ className }: { className?: string }) => (
    <Image 
        src="/assets/GeeksForGeeks_logo.png" 
        alt="GeeksForGeeks Logo" 
        width={24} 
        height={24} 
        className={`${className} object-contain`}
    />
);

const IIITLogo = ({ className }: { className?: string }) => (
    <Image 
        src="/assets/Indian_Institute_of_Information_Technology,_Lucknow_Logo.png" 
        alt="IIIT Lucknow Logo" 
        width={24} 
        height={24} 
        className={`${className} object-contain`}
    />
);

const workExperience = [
  {
    company: "Kelly Technologies",
    role: "SDE - Software Developer Intern",
    period: "Feb 2025 - Jun 2025",
    location: "Noida, Uttar Pradesh",
    logo: KellyTechnologiesLogo,
    responsibilities: [
      "Reduced transaction processing time by 30% and improved accuracy across 10K+ daily records by developing reconciliation logic using Go and AWS Lambda.",
      "Enhanced system performance, scalability by building modular OOP-based REST APIs for backoffice and mobile apps.",
      "Enabled real-time analytics, production-grade reporting by integrating Adobe analytics into digital goods microservices.",
      "Boosted throughput by 40% and reduced server load by implementing asynchronous processing with AWS SQS/SNS and Multithreading.",
    ],
  },
  {
    company: "GeeksforGeeks",
    role: "DSA Mentor Intern",
    period: "Jan 2025 - Feb 2025",
    location: "Noida, Uttar Pradesh",
    logo: GeeksForGeeksLogo,
    responsibilities: [
      "Mentored 100+ students in complex data structures and object-oriented design patterns, conducting targeted workshops to enhance engagement and comprehension of advanced programming concepts.",
    ],
  },
  {
    company: "Indian Institute of Information Technology",
    role: "Machine Learning Intern",
    period: "Jun 2023 - Dec 2024",
    location: "Lucknow, Uttar Pradesh",
    logo: IIITLogo,
    responsibilities: [
      "Automated real-time IoT data collection for paddy fields by scripting Raspberry Pi devices with Python.",
      "Improved model training and decision-making by 10% through clustering-based data validation testbeds.",
      "Achieved 5% accuracy gain and 20% communication overhead reduction by implementing Federated Learning.",
    ],
  },
];

const projects = [
  {
    name: "Kidney Disease Detection",
    description: "Attained 70% accuracy in tumor classification by designing a VGG16-based ML pipeline. Deployed a Flask web app with CI/CD using Docker, GitHub Actions, and AWS infrastructure.",
    link: "https://github.com/Tanmay-Tripathi/Kidney-Disease-Classification-MLOps",
    tags: ["Python", "VGG16", "Flask", "Docker", "AWS"],
  },
  {
    name: "Blogging Platform",
    description: "Crafted a Spring Boot application with MySQL JWT, improving API response time by 15% through RESTful API. Deployed the microservice on AWS using Docker, achieving 99% uptime via CI/CD pipelines.",
    link: "https://github.com/Tanmay-Tripathi/Blogging-Platform",
    tags: ["Spring Boot", "MySQL", "JWT", "Docker", "AWS"],
  },
  {
    name: "Aawaz",
    description: "Decreased data retrieval time by 4% by leading the development of an SQL-backed desktop application. Integrated an 84%-accurate perceptron classifier with optimized app-server communication via HTTP.",
    link: "https://github.com/Tanmay-Tripathi/AAWAZ",
    tags: ["SQL", "Perceptron Classifier", "Desktop App", "HTTP"],
  },
];

const education = {
  institution: "Manipal Institute of Technology",
  degree: "B.Tech in Computer Science & Artificial Intelligence",
  period: "2021 - 2025",
  cgpa: "9.2/10.0",
};

const technicalSkills = {
  "Programming Languages & Concepts": ["Java", "C++", "Python", "Golang", "Object-Oriented Programming"],
  "Frameworks & Libraries": ["Spring Boot", "Machine Learning", "Natural Language Processing (NLP)", "Artificial Intelligence"],
  "Tools & Technologies": ["Linux(Ubuntu)", "AWS", "Docker", "Git", "GitHub", "SQL", "Raspberry Pi", "Postgresql"],
  "Development Methodologies & Practices": ["Agile", "Troubleshooting/Debugging", "Microservice"],
  "Courses": ["Data Structures and Algorithm", "Operating System", "Relational Database", "Software Design", "Deep Learning"],
};

const achievements = [
  { icon: FileText, text: "Published \"Communication-Efficient Federated Learning for Real-time Applications in Edge Networks\"." },
  { icon: FileText, text: "Published \"Enhancing Edge-based Cardiovascular Diagnosis through Federated Learning and loT\"." },
  { icon: Trophy, text: "Won First Prize at MUJ HackX Hackathon (Oct 2023) for an Al-powered dermatoscope app." },
  { icon: Zap, text: "Solved over 600 DSA problems, earning 8 badges and a LeetCode Knight with max rating of 1,965 (Top 3%)." },
  { icon: Award, text: "Secured First Place in a competitive coding event on HackerRank, demonstrating strong algorithmic skills." },
  { icon: GraduationCap, text: "Consistently awarded the Dean's List excellence Award for three years (2nd to 4th year) as Branch Topper." },
  { icon: Star, text: "Achieved a global rank of 842 at LeetCode Biweekly Contest 145." },
];

const Section = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode; }) => (
  <section className="space-y-4 sm:space-y-6">
    <div className="flex items-center gap-2 sm:gap-3">
      {icon}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-headline text-foreground">{title}</h2>
    </div>
    <div className="pl-6 sm:pl-9">{children}</div>
  </section>
);

// Mobile Sidebar Component
const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="md:hidden">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-3 mb-6">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/assets/WhatsApp Image 2025-07-21 at 17.46.41.jpeg" alt={personalInfo.name} />
              <AvatarFallback>{personalInfo.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{personalInfo.name}</h3>
              <p className="text-sm text-muted-foreground">{personalInfo.title}</p>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-3">
            <Button variant="outline" size="sm" asChild className="w-full justify-start">
              <a href={personalInfo.cvLink} download="Tanmay-Tripathi-CV.pdf">
                <Download className="mr-3 h-4 w-4" /> Download CV
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="w-full justify-start">
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="mr-3 h-4 w-4" /> Email
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="w-full justify-start">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-3 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="w-full justify-start">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-3 h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Theme</span>
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Loading Screen Component
const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [showJava, setShowJava] = useState(false);
  const [showPython, setShowPython] = useState(false);
  const [showGolang, setShowGolang] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowJava(true), 800);
    const timer2 = setTimeout(() => setShowPython(true), 1600);
    const timer3 = setTimeout(() => setShowGolang(true), 2400);
    const timer4 = setTimeout(() => setFadeOut(true), 3500);
    const timer5 = setTimeout(() => onComplete(), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center space-y-6 sm:space-y-8 max-w-lg mx-auto px-4">
        {/* Welcome Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <Code className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse" />
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Welcome</h1>
            <Code className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse" />
          </div>
        </div>

        {/* Code Messages */}
        <div className="space-y-4 sm:space-y-6">
          {showJava && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 animate-fade-in">
              <Badge variant="outline" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 font-medium px-2 sm:px-3 py-1 text-xs sm:text-sm">
                Java
              </Badge>
              <code className="text-sm sm:text-lg font-mono bg-muted/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border">
                System.out.println("Welcome");
              </code>
            </div>
          )}
          
          {showPython && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 animate-fade-in">
              <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-medium px-2 sm:px-3 py-1 text-xs sm:text-sm">
                Python
              </Badge>
              <code className="text-sm sm:text-lg font-mono bg-muted/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border">
                print("Welcome")
              </code>
            </div>
          )}
          
          {showGolang && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 animate-fade-in">
              <Badge variant="outline" className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 font-medium px-2 sm:px-3 py-1 text-xs sm:text-sm">
                Golang
              </Badge>
              <code className="text-sm sm:text-lg font-mono bg-muted/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border">
                fmt.Println("Welcome")
              </code>
            </div>
          )}
        </div>

        {/* Loading indicator */}
        {showGolang && (
          <div className="flex items-center justify-center mt-6 sm:mt-8 animate-fade-in">
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <>
      {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div className="max-w-4xl mx-auto p-3 sm:p-4 md:p-6 lg:p-8 bg-background text-foreground selection:bg-primary/20">
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      
      <header className="flex flex-col gap-6 mb-8 sm:mb-12">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between mb-4">
            <MobileSidebar />
            <div className="flex-1"></div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/assets/WhatsApp Image 2025-07-21 at 17.46.41.jpeg" alt={personalInfo.name} />
              <AvatarFallback>{personalInfo.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold font-headline text-foreground leading-tight">{personalInfo.name}</h1>
              <p className="text-base text-muted-foreground mt-1">{personalInfo.title}</p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mt-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-start gap-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24 flex-shrink-0">
              <AvatarImage src="/assets/WhatsApp Image 2025-07-21 at 17.46.41.jpeg" alt={personalInfo.name} />
              <AvatarFallback>{personalInfo.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground leading-tight">{personalInfo.name}</h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-1">{personalInfo.title}</p>
              <div className="flex items-center gap-2 text-muted-foreground mt-2">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Buttons - Hidden on Mobile */}
        <div className="hidden md:flex flex-row flex-wrap gap-2 items-center justify-center sm:justify-start">
          <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
            <a href={personalInfo.cvLink} download="Tanmay-Tripathi-CV.pdf"><Download className="mr-2 h-4 w-4" /> Download CV</a>
          </Button>
          <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
            <a href={`mailto:${personalInfo.email}`}><Mail className="mr-2 h-4 w-4" /> Email</a>
          </Button>
          <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
          </Button>
          <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a>
          </Button>
          <ModeToggle />
        </div>
      </header>

      {/* Current Position Highlight */}
      <div className="mb-8 sm:mb-12">
        <Card className="!bg-gradient-to-r from-muted/20 to-muted/10 border-muted-foreground/20 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none z-0">
            <KellyTechnologiesLogo className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>
          <CardContent className="relative z-10 p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <Badge variant="secondary" className="bg-muted-foreground text-background text-xs self-start">Live</Badge>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">Software Engineer</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <span>Kelly Technologies</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />Noida, UP</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />Jul 2025 - Present</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <main className="space-y-8 sm:space-y-12">
        <Section title="Work Experience" icon={<Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />}>
          <div className="space-y-6 sm:space-y-8">
            {workExperience.map((exp, index) => (
              <div key={index} className="flex gap-3 sm:gap-6 items-start">
                {/* Content Card with Watermark */}
                <Card className="flex-1 !bg-card/60 backdrop-blur-sm relative overflow-hidden">
                  {/* Watermark Logo */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none z-0">
                    {exp.logo && <exp.logo className="w-24 h-24 sm:w-32 sm:h-32" />}
                  </div>
                  
                  <CardHeader className="relative z-10 p-3 sm:p-6">
                    <CardTitle className="font-headline text-base sm:text-lg">{exp.role}</CardTitle>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-1 sm:gap-x-4 sm:gap-y-1 items-start sm:items-center text-xs sm:text-sm text-muted-foreground">
                      <span>{exp.company}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />{exp.location}</span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />{exp.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10 p-3 sm:p-6 pt-0">
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
                      {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Section>
        
        <Section title="Projects" icon={<Zap className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((proj, index) => (
              <Card key={index} className="flex flex-col !bg-card/60 backdrop-blur-sm">
                <CardHeader className="p-3 sm:p-6">
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="font-headline text-base sm:text-lg">{proj.name}</CardTitle>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0">
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                  <CardDescription className="text-xs sm:text-sm">{proj.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end p-3 sm:p-6 pt-0">
                   <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {proj.tags.map((tag, i) => <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>)}
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Education" icon={<GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />}>
          <Card className="!bg-card/60 backdrop-blur-sm">
            <CardHeader className="p-3 sm:p-6">
              <CardTitle className="font-headline text-base sm:text-lg">{education.institution}</CardTitle>
              <CardDescription className="text-xs sm:text-sm">{education.degree}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-x-6 sm:gap-y-2 text-xs sm:text-sm text-muted-foreground p-3 sm:p-6 pt-0">
                <div className="flex items-center gap-2"><Calendar className="w-3 h-3 sm:w-4 sm:h-4" /><span>{education.period}</span></div>
                <div className="flex items-center gap-2"><Star className="w-3 h-3 sm:w-4 sm:h-4" /><span>CGPA: {education.cgpa}</span></div>
            </CardContent>
          </Card>
        </Section>

        <Section title="Technical Skills" icon={<BrainCircuit className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />}>
          <Card className="!bg-card/60 backdrop-blur-sm">
            <CardContent className="p-3 sm:p-6 space-y-3 sm:space-y-4">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category} className="space-y-2">
                  <h4 className="font-semibold font-headline text-sm sm:text-md">{category}</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skills.map((skill) => <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>)}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </Section>

        <Section title="Coding Profiles" icon={<Code className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />}>
          <Card className="!bg-card/60 backdrop-blur-sm">
            <CardHeader className="p-3 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <CardTitle className="font-headline text-base sm:text-lg">LeetCode Contributions</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">My problem-solving journey over the past months.</CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                      <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                          <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer">
                              <Code className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> LeetCode
                          </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                          <a href={personalInfo.googleScholar} target="_blank" rel="noopener noreferrer">
                              <GraduationCap className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Scholar
                          </a>
                      </Button>
                  </div>
              </div>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <LeetCodeChart />
            </CardContent>
          </Card>
        </Section>

        <Section title="Achievements" icon={<Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />}>
          <Card className="!bg-card/60 backdrop-blur-sm">
            <CardContent className="p-3 sm:p-6 space-y-3 sm:space-y-4">
              {achievements.map((ach, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <ach.icon className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 text-primary flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-muted-foreground">{ach.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </Section>
      </main>

      <footer className="text-center mt-12 sm:mt-16 py-4 sm:py-6 border-t border-t-border/40">
        <p className="text-xs sm:text-sm text-muted-foreground px-2">
          Designed and built by Tanmay Tripathi. &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
    </>
  );
}

    