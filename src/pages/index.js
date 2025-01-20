import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useMediaQuery } from 'gatsby-theme-portfolio-minimal/src/hooks/useMediaQuery';
import { Icon } from 'gatsby-theme-portfolio-minimal/src/components/Icon';
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
} from 'gatsby-theme-portfolio-minimal';
import * as classes from './style.module.css';

const LinkType = {
  External: 'external',
  Github: 'github',
};

export const experienceData = [
  {
    companyName: 'Outlier',
    jobTitle: 'AI Trainer - Coding',
    description: `
    - Craft complex prompts to challenge and test the limits of AI models.
    - Analyze and review model responses to identify areas for improvement.
    `,
    tags: ['JavaScript', 'Python', 'Prompt Engineering', 'AI'],
    image: 'images/outlier.jpg', // Ensure this path matches the actual image path
    visible: true,
  },
  {
    companyName: 'Munchi',
    jobTitle: 'Full Stack Developer Intern',
    description: `
      - Enhanced Munchi’s solution using JavaScript, React, Docker, and Google Cloud.
      - Managed CI/CD deployment of storefront updates with Docker and Google Cloud.
      - Collaborated with the business team to translate user requirements into technical solutions, streamlining platform integration.
      - Utilized agile methods for effective project management.
      - Revamped the storefront UI by rebuilding UI components, adding new features, and seamlessly integrating them, which improved user experience and functionality.
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
    image: 'images/munchi.png', // Ensure this path matches the actual image path
    visible: true,
  },
  {
    companyName: 'Junction',
    jobTitle: 'Volunteer Full Stack Developer',
    description: `
      - Enhanced features for the Junction 2023 hackathon platform using JavaScript, React, MongoDB, Docker, and Git.
      - Fixed bugs and integrated improvements to ensure platform stability and performance.
      - Ensured software quality through careful design decisions and thorough testing.
    `,
    tags: ['JavaScript', 'React', 'Node.js', 'Docker', 'MongoDB'],
    links: [
      {
        type: 'external',
        url: 'https://eu.junctionplatform.com/home',
      },
    ],
    image: 'images/junction.png', // Ensure this path matches the actual image path
    visible: true,
  },
];

const Experience = ({ data, index }) => {
  const isDesktopBreakpoint = useMediaQuery('(min-width: 992px)');

  return (
    <Animation
      type="fadeUp"
      className={classes.Experience} // Use class from CSS module
      style={{
        flexDirection:
          isDesktopBreakpoint && index % 2 === 0 ? 'row-reverse' : undefined,
      }}
    >
      <div className={classes.Details}>
        <span className={classes.CompanyName}>{data.companyName}</span>
        <h4 className={classes.JobTitle}>{data.jobTitle}</h4>
        <p>{data.description}</p>
        <div className={classes.Tags}>
          {data.tags &&
            data.tags.length > 0 &&
            data.tags.map((tag, key) => (
              <span key={key}>
                <u>{tag}</u>
              </span>
            ))}
        </div>
        <div className={classes.Links}>
          {data.links &&
            data.links.length > 0 &&
            data.links.map((link, key) => (
              <a
                key={key}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  link.type === LinkType.External
                    ? 'External Link'
                    : 'Github Link'
                }
              >
                <Icon name={link.type} color="var(--subtext-color)" />
              </a>
            ))}
        </div>
      </div>
      {data.image && (
        <GatsbyImage
          className={classes.ExperienceImageWrapper} // Use class from CSS module
          imgClassName={classes.ExperienceImage} // Use class from CSS module
          image={data.image}
          alt={data.companyName}
        />
      )}
    </Animation>
  );
};

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
