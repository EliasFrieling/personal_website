import React from 'react';
import {
  Company,
  Description,
  Position,
  ResumeContainer,
  ResumeWrapper,
  TextWrapper,
  Title,
} from './ResumeElements';

function ResumeSection() {
  return (
    <ResumeContainer id="experience">
      <ResumeWrapper>
        <TextWrapper>
          <Title>Work Experience</Title>
          <Company>Meta</Company>
          <Position>Software Engineer Intern • May 2022 - Aug 2022</Position>
          <Description>
            • Developed a custom extension for executing GraphQL queries in Bento, an internal
            version of Jupyter Notebooks using React and Python, automating authentication and
            execution, saving on average five minutes per notebook
            <br />• Integrated with the Bento platform by connecting to the Language Server Protocol
            and adding support for using variables in queries throughout a notebook
            <br />• Created and executed a plan to refactor areas of the codebase, leading to
            additional functionality for extensions with support for Web Assembly LSP servers, and
            an increased number of inherited features from the Bento platform
          </Description>
          <Company>MEMX</Company>
          <Position>Software Engineer Intern • Jun 2021 - May 2022</Position>
          <Description>
            • Implemented an order entry tool to enter, view, replace, and cancel orders in the
            stock exchange, using React and Node.js over a RESTful API, leading to greater
            efficiency in testing the exchange and onboarding clients
            <br />• Displayed live market data to the user by using a WebSocket to receive real time
            market data changes, giving up to date pricing information to users as they use the
            order entry tool
            <br />• Collaborated with a designer, product manager, and future users to build an
            intuitive user experience (UX) utilizing conditional component rendering and client-side
            error checking
          </Description>
          <Company>McKinsey & Company</Company>
          <Position> Software Engineer Intern • Sep 2020 - Dec 2020</Position>
          <Description>
            • Migrated steps in the recruiting pipeline to cloud-based technology by constructing
            Python scripts running in Amazon Web Services to redact data from resumes in S3 buckets,
            automating steps of the recruiting process
            <br />• Developed and documented code in AWS as part of a proof-of-concept project
            highlighting the advantages of moving company services to a cloud-based computing
            environment
          </Description>
          <Company>MEMX</Company>
          <Position>Software Development Intern • Jan 2020 – May 2020</Position>
          <Description>
            • Imported data from an API to an internal data tool allowing for broad visualization of
            stock market data and documented the steps of how to import various file types allowing
            easier use of the data tool
            <br />• Designed and implemented software that sends and receives specialized messages
            to financial institutions as part of the post trade system of the stock exchange
          </Description>
        </TextWrapper>
      </ResumeWrapper>
    </ResumeContainer>
  );
}

export default ResumeSection;
