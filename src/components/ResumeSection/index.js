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
              • Created a tool that allows a user to inject an order into the
              stock exchange through a React frontend allowing for easier
              testing of the exchange
              <br />• Wrote data validation checks on a NodeJS server that would
              validate all the fields a user enters in the order and transform
              the data to match the exchange server API specifications
              <br />• Populated a table with live market data that updates every
              ten seconds with price changes using a NodeJS websocket allowing
              users to view up to date prices when entering in orders
            </Description>
            <Company>McKinsey & Company</Company>
            <Position>
              Software Development Intern • September 2020 – December 2020
            </Position>
            <Description>
              • Migrated steps in the recruiting pipeline to cloud based
              technology by developing Python scripts to redact data in resumes
              and perform data validation leading to a streamlined recruiting
              process
              <br />• Developed and documented the creation of reusable assets
              in AWS showing the advantages of moving company services to a
              cloud based environment
              <br />• Optimized scripts by evaluating the efficiency and
              developing fixes to greatly increase speed
            </Description>
            <Company>MEMX</Company>
            <Position>
              Software Development Intern • January 2020 – May 2020
            </Position>
            <Description>
              • Imported data from an API to an internal data tool allowing for
              broad visualization of stock market data and documented the steps
              of how to import various file types allowing easier use of the
              data tool
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
