import React from 'react';
import HeroSection from '../components/HeroSection';
import AcademyIntro from '../components/AcademyIntro';
import ProfileCard from '../components/ProfileCard';


export default function LandingPage() {
  const profiles = [
    {
      name: 'Prof. Meghnad Saha',
      title: 'Founder President',
      subtitle: 'The First Science Academy of India',
      imgSrc: '/path/to/meghnad.jpg',
    },
    {
      name: 'Prof. Vinod K. Singh',
      title: 'President',
      subtitle: "Leading the Academy's mission to foster scientific excellence",
      imgSrc: '/path/to/vinod.jpg',
    },
  ];

  return (
    <main className="pt-14">
      <HeroSection />
      <div className="mt-16" /> {/* spacing between sections */}
      <AcademyIntro />
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto flex flex-col md:flex-row gap-6">
          {profiles.map((p) => (
            <ProfileCard
              key={p.name}
              name={p.name}
              title={p.title}
              subtitle={p.subtitle}
              imgSrc={p.imgSrc}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
