import Navbar from '@/components/Navbar/Navbar';
import { SectionHeader } from '@/components/SectionHeader';
import { ValueCard } from '@/components/ValueCard';

const AboutMobile = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        
        {/* Tag */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-primary rounded-full bg-primary/10">
          <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"/>
          </svg>
          <span className="text-xs tracking-wider font-semibold text-primary uppercase">
            About GDG GESCOE
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl font-black mb-6 tracking-tight">
          <span className="text-foreground italic">BUILDING THE FUTURE,</span>
          <br />
          <span className="text-primary italic">TOGETHER</span>
        </h1>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed px-2">
          We are a chapter of the global Google Developer Groups community, based at GESCOE. 
          We bridge the gap between theory and practice, connecting passionate students with 
          the latest technologies from Google and the open-source world.
        </p>
      </section>

      {/* Mission & Vision Section - Mobile */}
      <section className="px-6 pb-20">
        <div className="space-y-6">
          
          {/* Mission Card */}
          <div className=" border border-border rounded-2xl p-6">
            {/* Icon */}
            <div className="w-10 h-10 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-black mb-3 text-foreground italic">
              OUR MISSION
            </h3>
            
            {/* Description */}
            <p className="text-xs text-muted-foreground leading-relaxed">
              To empower every student developer with the resources, and community 
              support needed to turn ideas into reality. We inspire learning by doing 
              and growing by sharing.
            </p>
          </div>

          {/* Vision Card */}
          <div className=" border border-border rounded-2xl p-6">
            {/* Icon */}
            <div className="w-10 h-10 mb-4 rounded-full bg-warning/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-black mb-3 text-foreground italic">
              OUR VISION
            </h3>
            
            {/* Description */}
            <p className="text-xs text-muted-foreground leading-relaxed">
              To be the premier hub of innovation at GESCOE, fostering a culture 
              where technology solves real-world problems and students as 
              industry-ready leaders.
            </p>
          </div>

        </div>
      </section>

{/* Driven by Values Section - Mobile */}
<section className="px-4 pb-16">
  <div className="space-y-8">
    
    {/* Header */}
    <SectionHeader 
      label="CORE PRINCIPLES"
      title={<>DRIVEN BY VALUES,<br />UNITED BY CODE</>}
      description="Our community is built on a foundation of mutual respect and a shared passion for technology. These core values guide everything we do."
    />

    {/* Values Cards */}
    <div className="space-y-4">
      
      <ValueCard 
        colorScheme="primary"
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        }
        title="Collaboration"
        description="We believe that great software is built together. We encourage peer learning and teamwork in all our events."
      />

      <ValueCard 
        colorScheme="success"
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
        title="Inclusivity"
        description="Everyone is welcome, regardless of their background or skill level. We strive to create a safe space for all."
      />

      <ValueCard 
        colorScheme="danger"
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        }
        title="Innovation"
        description="We challenge the status quo and encourage creative problem-solving using cutting-edge technology."
      />

    </div>
  </div>
</section>
    </div>
  );
};

export default AboutMobile;