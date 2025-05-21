import React from 'react';
import HeroSection from '../components/HeroSection';
import AcademyIntro from '../components/AcademyIntro';
import ProfileCard from '../components/ProfileCard';
import NewsSection from '../components/NewSection';

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
      <div className="mt-16" /> {/* spacing */}
      <AcademyIntro />
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
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
      <NewsSection />
    </main>
  );
}