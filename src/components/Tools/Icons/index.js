import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Icon } from './IconElements';

export function GitIcon({ link }) {
  return (
    <Icon href={link} target="_blank">
      <FaGithub />
    </Icon>
  );
}

export function TwitterIcon({ link }) {
  return (
    <Icon href={link} target="_blank">
      <FaTwitter />
    </Icon>
  );
}

export function LinkedInIcon({ link }) {
  return (
    <Icon href={link} target="_blank">
      <FaLinkedin />
    </Icon>
  );
}

export function EmailIcon({ link }) {
  return (
    <Icon href={link} target="_blank">
      <FaEnvelope />
    </Icon>
  );
}
