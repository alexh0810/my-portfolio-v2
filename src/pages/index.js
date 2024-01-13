import React from 'react';
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
  return (
    <>
      <Seo title="Alex Ho Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="tech" heading="Tech Stack" />
        <ProjectsSection sectionId="features" heading="Projects" />
        <ContactSection
          sectionId="github"
          heading="Sounds like the perfect fit?"
        />
      </Page>
    </>
  );
}
