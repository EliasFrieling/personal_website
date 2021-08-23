import React from "react";
import {
  ResumeContainer,
  ResumeWrapper,
  Title,
  TextWrapper,
  Company,
  Position,
  Description,
} from "./ResumeElements";
const ResumeSection = () => {
  return (
    <>
      <ResumeContainer id='experience'>
        <ResumeWrapper>
          <TextWrapper>
            <Title>Work Experience</Title>
            <Company>MEMX</Company>
            <Position>Full Stack Intern • June 2021 - Present</Position>
            <Description>
              • Designed and implemented a tool to enter orders into the
              exchange using React and NodeJS leading to greater efficiency for
              the Market Operations department in testing the exchange and
              onboarding clients
              <br />• Populated a table with live market data updating with real
              time price changes giving the most up to date pricing information
              to users as they enter orders
              <br />• Communicated with key stakeholders on the UX design of the
              tool to best meet business requirements
            </Description>
            <Company>McKinsey & Company</Company>
            <Position>
              Software Engineer Intern • September 2020 – December 2020
            </Position>
            <Description>
              • Migrated steps in the recruiting pipeline to cloud based
              technology by developing Python scripts to redact data in resumes
              and perform data validation leading to a streamlined recruiting
              process
              <br />• Developed and documented the creation of reusable assets
              in AWS as part of a proof of concept to show the advantages of
              moving company services to a cloud-based environment
            </Description>
            <Company>MEMX</Company>
            <Position>
              Software Engineer Intern • January 2020 – May 2020
            </Position>
            <Description>
              • Imported data from an API to an internal data tool showcasing
              broad visualization of stock market data and documented the steps
              of how to import various file types for future use in various
              departments
              <br />• Designed and implemented software that sends and receives
              specialized messages to financial institutions as part of the post
              trade system of the stock exchange
            </Description>
          </TextWrapper>
        </ResumeWrapper>
      </ResumeContainer>
    </>
  );
};

export default ResumeSection;
