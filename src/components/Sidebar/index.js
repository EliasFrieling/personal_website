import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to='about'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              onClick={toggle}
            >
              About Me
            </SidebarLink>
            <SidebarLink
              to='experience'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              onClick={toggle}
            >
              Experience
            </SidebarLink>
            <SidebarLink
              to='projects'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              onClick={toggle}
            >
              Projects
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute href='https://blog.eliasfrieling.com' target='_blank'>
              Blog
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};
export default Sidebar;
