import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
  Animation,
  Section,
  Experience,
} from 'gatsby-theme-portfolio-minimal';

export const experienceData = [
  {
    companyName: 'Munchi',
    jobTitle: 'Full Stack Developer Intern',
    description: `
    - Improved Munchi's solution using JavaScript, React, Docker, and Google Cloud.
    - Managed CI/CD deployment of storefront updates with Docker and Google Cloud.
    - Collaborated with the business team to translate user requirements into technical solutions, streamlining platform integration.
    - Employed agile methods for effective project management.
    - Uplifted the storefront UI by rebuilding UI components, adding new features, and seamlessly integrating them with the existing storefront, enhancing the user experience and functionality.
      `,
    tags: [
      'JavaScript',
      'React',
      'Node.js',
      'Docker',
      'Google Cloud',
      'Git',
      'Agile project management',
    ],
    links: [
      {
        type: 'external',
        url: 'https://storefront-juicyburgerdemo-ydtudzlala-lz.a.run.app/marketplace',
      },
    ],
    image: 'images/munchi.png',
    visible: true,
  },
  {
    companyName: 'Junction',
    jobTitle: 'Volunteer Full Stack Developer',
    description: `Enhanced features for the Junction 2023 hackathon platform using JavaScript, React, MongoDB, Docker, and Git.
    Fixed bugs and integrated improvements to ensure platform stability and performance.
    Ensured software quality through careful design decisions and thorough testing.
    `,
    tags: ['JavaScript', 'React', 'Node.js', 'Docker', 'MongoDB'],
    links: [
      {
        type: 'external',
        url: 'https://eu.junctionplatform.com/home',
      },
    ],
    image: 'images/junction.png',
    visible: true,
  },
];

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/images/" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const experiencesWithImages = experienceData.map((exp) => {
    const imageNode = data.allFile.nodes.find(
      (node) => node.relativePath === exp.image
    );
    const image = imageNode ? getImage(imageNode.childImageSharp) : null;
    console.log('🚀 ~ experiencesWithImages ~ image:', image);
    console.log('🚀 ~ experiencesWithImages ~ exp:', exp);

    return { ...exp, image };
  });

  return (
    <>
      <Seo title="Alex Ho Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <Animation type="fadeUp">
          <Section heading="Work Experience">
            {experiencesWithImages.map((exp, index) => (
              <Experience key={index} data={exp} index={index} />
            ))}
          </Section>
        </Animation>
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
