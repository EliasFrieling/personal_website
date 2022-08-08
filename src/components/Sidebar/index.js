import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';

export function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            smooth
            duration={500}
            spy
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            About Me
          </SidebarLink>
          <SidebarLink
            to="experience"
            smooth
            duration={500}
            spy
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Experience
          </SidebarLink>
          <SidebarLink
            to="projects"
            smooth
            duration={500}
            spy
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Projects
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="https://blog.eliasfrieling.com" target="_blank">
            Blog
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
export default Sidebar;
