import React from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectsCard,
  ProjectShowcase,
} from "./ProjectElements";

import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import Icon4 from "../../images/svg-4.svg";
const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectShowcase>
        <ProjectsCard>
          <a
            href='https://github.com/EliasFrieling/personal_website'
            target='_blank'
            rel='noreferrer'
            style={{ textDecoration: "none" }}
          >
            <ProjectsIcon src={Icon4} />

            <ProjectsH2>This Website</ProjectsH2>
            <ProjectsP>
              View the source code and adapt it for your own website!
            </ProjectsP>
          </a>
        </ProjectsCard>
      </ProjectShowcase>
      <ProjectsWrapper>
        <ProjectsCard>
          <a
            href='https://github.com/EliasFrieling/get_on_discord_bot'
            target='_blank'
            rel='noreferrer'
            style={{ textDecoration: "none" }}
          >
            <ProjectsIcon src={Icon1} />

            <ProjectsH2>Get On Bot</ProjectsH2>
            <ProjectsP>
              A Discord bot that sends a text message to a user of the server
              when called using an online text message api
            </ProjectsP>
          </a>
        </ProjectsCard>
        <ProjectsCard>
          <a
            href='https://github.com/EliasFrieling/fightsitebot'
            target='_blank'
            rel='noreferrer'
            style={{ textDecoration: "none" }}
          >
            <ProjectsIcon src={Icon2} />
            <ProjectsH2>Fightsite Bot</ProjectsH2>
            <ProjectsP>
              A Discord bot used on a server for patrons of thefight-site.com,
              able to link articles from the site when called
            </ProjectsP>
          </a>
        </ProjectsCard>
        <ProjectsCard>
          <a
            href='https://github.com/danpinto97/HealthTechHack'
            target='_blank'
            rel='noreferrer'
            style={{ textDecoration: "none" }}
          >
            <ProjectsIcon src={Icon3} />
            <ProjectsH2>HealthTech Hackathon</ProjectsH2>
            <ProjectsP>
              Created an application to help people with rheumatoid arthritis
              schedule injections and track symptoms
            </ProjectsP>
          </a>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;