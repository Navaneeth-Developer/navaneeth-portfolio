import ProfilePhoto from "./components/ProfilePhoto";
import ResumeMakerCard from "./components/ResumeMakerCard";
import TechnologiesCard from "./components/TechnologiesCard";

export default function Home() {
  const technologies: string[] = [
    "Next.js", "React", "Node.js", "SCSS",
    "Tailwind CSS", "Framer Motion", "TypeScript",
    "Angular", "Java", "Docker", "RabbitMQ",
    "Kafka", "Python", "MongoDB",
    "PostgreSQL", "MariaDB"
  ];

  return (
    <main className="min-h-screen p-6 md:p-12 max-w-5xl mx-auto flex flex-col gap-12">
      
      {/* 
        UPDATED HERO SECTION: 
        Using flexbox (flex-row on desktop) to guarantee side-by-side alignment.
        items-center ensures they are vertically aligned in the middle. 
      */}
      <section className="mt-16 mb-12 px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
        
        {/* Hero Text Content (Left Side) */}
        <div className="flex flex-col gap-4 text-center md:text-left w-full md:max-w-xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
            Hello, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              NAVANEETH
            </span>
          </h1>
          <p className="text-xl text-white/70 font-medium leading-relaxed">
            Passionate about building scalable systems and crafting seamless user interfaces. Specialized in full-stack JavaScript development.
          </p>
        </div>

        {/* Profile Photo (Right Side) */}
        {/* flex-shrink-0 prevents the photo from being squished by the text */}
        <div className="flex-shrink-0">
          <ProfilePhoto />
        </div>

      </section>

      {/* Grid of Glass Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <ResumeMakerCard/>
        <TechnologiesCard technologies={technologies}/>
      </section>

    
    </main>
  );
}