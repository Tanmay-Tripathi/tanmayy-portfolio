
'use client';

import { Briefcase, Calendar, Cpu, ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin, Phone, Star, Trophy, FileText, Code, Award, Zap, BrainCircuit, Download } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ModeToggle } from '@/components/mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LeetCodeChart } from '@/components/leetcode-chart';
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
    link: "https://github.com/Tanmay-Tripathi/Kidney-Disease-Detection",
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
    link: "https://github.com/Tanmay-Tripathi/Aawaz",
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
  <section className="space-y-6">
    <div className="flex items-center gap-3">
      {icon}
      <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground">{title}</h2>
    </div>
    <div className="pl-9">{children}</div>
  </section>
);

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
      <div className="text-center space-y-8 max-w-lg mx-auto px-4">
        {/* Welcome Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Code className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-3xl font-bold text-foreground">Welcome</h1>
            <Code className="w-8 h-8 text-primary animate-pulse" />
          </div>
        </div>

        {/* Code Messages */}
        <div className="space-y-6">
          {showJava && (
            <div className="flex items-center justify-center gap-4 animate-fade-in">
              <Badge variant="outline" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 font-medium px-3 py-1">
                Java
              </Badge>
              <code className="text-lg font-mono bg-muted/50 px-4 py-2 rounded-lg border">
                System.out.println("Welcome");
              </code>
            </div>
          )}
          
          {showPython && (
            <div className="flex items-center justify-center gap-4 animate-fade-in">
              <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-medium px-3 py-1">
                Python
              </Badge>
              <code className="text-lg font-mono bg-muted/50 px-4 py-2 rounded-lg border">
                print("Welcome")
              </code>
            </div>
          )}
          
          {showGolang && (
            <div className="flex items-center justify-center gap-4 animate-fade-in">
              <Badge variant="outline" className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 font-medium px-3 py-1">
                Golang
              </Badge>
              <code className="text-lg font-mono bg-muted/50 px-4 py-2 rounded-lg border">
                fmt.Println("Welcome")
              </code>
            </div>
          )}
        </div>

        {/* Loading indicator */}
        {showGolang && (
          <div className="flex items-center justify-center mt-8 animate-fade-in">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
      
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-background text-foreground selection:bg-primary/20">
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      
      <header className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/assets/WhatsApp Image 2025-07-21 at 17.46.41.jpeg" alt={personalInfo.name} />
            <AvatarFallback>{personalInfo.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">{personalInfo.name}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-1">{personalInfo.title}</p>
            <div className="flex items-center gap-2 text-muted-foreground mt-2">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center self-start md:self-center">
          <Button variant="outline" size="sm" asChild>
            <a href={personalInfo.cvLink} download="Tanmay-Tripathi-CV.pdf"><Download className="mr-2 h-4 w-4" /> Download CV</a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={`mailto:${personalInfo.email}`}><Mail className="mr-2 h-4 w-4" /> Email</a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a>
          </Button>
          <ModeToggle />
        </div>
      </header>

      {/* Current Position Highlight */}
      <div className="mb-12">
        <Card className="!bg-gradient-to-r from-muted/20 to-muted/10 border-muted-foreground/20 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none z-0">
            <KellyTechnologiesLogo className="w-16 h-16" />
          </div>
          <CardContent className="relative z-10 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-muted-foreground text-background text-xs">Live</Badge>
                <div>
                  <h3 className="font-semibold text-lg">Software Engineer</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
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

      <main className="space-y-12">
        <Section title="Work Experience" icon={<Briefcase className="w-7 h-7 text-foreground" />}>
          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <div key={index} className="flex gap-6 items-start">
                {/* Content Card with Watermark */}
                <Card className="flex-1 !bg-card/60 backdrop-blur-sm relative overflow-hidden">
                  {/* Watermark Logo */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none z-0">
                    {exp.logo && <exp.logo className="w-32 h-32" />}
                  </div>
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="font-headline">{exp.role}</CardTitle>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 items-center text-sm text-muted-foreground">
                      <span>{exp.company}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{exp.location}</span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{exp.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Section>
        
        <Section title="Projects" icon={<Zap className="w-7 h-7 text-foreground" />}>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, index) => (
              <Card key={index} className="flex flex-col !bg-card/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-headline">{proj.name}</CardTitle>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <CardDescription>{proj.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end">
                   <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, i) => <Badge key={i} variant="secondary">{tag}</Badge>)}
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Education" icon={<GraduationCap className="w-7 h-7 text-foreground" />}>
          <Card className="!bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-headline">{education.institution}</CardTitle>
              <CardDescription>{education.degree}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{education.period}</span></div>
                <div className="flex items-center gap-2"><Star className="w-4 h-4" /><span>CGPA: {education.cgpa}</span></div>
            </CardContent>
          </Card>
        </Section>

        <Section title="Technical Skills" icon={<BrainCircuit className="w-7 h-7 text-foreground" />}>
          <Card className="!bg-card/60 backdrop-blur-sm">
            <CardContent className="p-6 space-y-4">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category} className="space-y-2">
                  <h4 className="font-semibold font-headline text-md">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => <Badge key={skill} variant="outline">{skill}</Badge>)}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </Section>

        <Section title="Coding Profiles" icon={<Code className="w-7 h-7 text-foreground" />}>
          <Card className="!bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="font-headline">LeetCode Contributions</CardTitle>
                    <CardDescription>My problem-solving journey over the past months.</CardDescription>
                  </div>
                  <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                          <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer">
                              <Code className="mr-2 h-4 w-4" /> LeetCode
                          </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                          <a href={personalInfo.googleScholar} target="_blank" rel="noopener noreferrer">
                              <GraduationCap className="mr-2 h-4 w-4" /> Scholar
                          </a>
                      </Button>
                  </div>
              </div>
            </CardHeader>
            <CardContent>
              <LeetCodeChart />
            </CardContent>
          </Card>
        </Section>

        <Section title="Achievements" icon={<Trophy className="w-7 h-7 text-foreground" />}>
          <Card className="!bg-card/60 backdrop-blur-sm">
            <CardContent className="p-6 space-y-4">
              {achievements.map((ach, index) => (
                <div key={index} className="flex items-start gap-3">
                  <ach.icon className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{ach.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </Section>
      </main>

      <footer className="text-center mt-16 py-6 border-t border-t-border/40">
        <p className="text-sm text-muted-foreground">
          Designed and built by Tanmay Tripathi. &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
    </>
  );
}

    