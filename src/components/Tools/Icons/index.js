import React from "react";
import { Icon } from "./IconElements";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const GitIcon = ({ link }) => {
  return (
    <Icon href={link} target='_blank'>
      <FaGithub />
    </Icon>
  );
};

export const TwitterIcon = ({ link }) => {
  return (
    <Icon href={link} target='_blank'>
      <FaTwitter />
    </Icon>
  );
};

export const LinkedInIcon = ({ link }) => {
  return (
    <Icon href={link} target='_blank'>
      <FaLinkedin />
    </Icon>
  );
};

export const EmailIcon = ({ link }) => {
  return (
    <Icon href={link} target='_blank'>
      <FaEnvelope />
    </Icon>
  );
};
