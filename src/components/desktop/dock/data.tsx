// I know this is not ideal but we can't use unknown here for the _'s
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IconFinder,
  IconGithub,
  IconGitlab,
  IconHarvard,
  IconLinked,
  IconResume,
  IconTerminal,
  IconThree,
} from "src/icons";
import { LinkCard } from "../../shared/link-card";
import { LinkCardButton } from "../../shared/link-card-button";
import { AboutWindow, CS50Window, Logo3DWindow, ResumeWindow } from "../windows";
import TerminalWindow from "../windows/terminal";

export const DOCK_WINDOWS = {
  ABOUT_ME: "ABOUT_ME",
  RESUME: "RESUME",
  THREE: "THREE",
  CS50: "CS50",
  TERMINAL: "TERMINAL",
};

export const DOCK_EXTERNAL_LINKS = {
  LINKEDIN: "LINKEDIN",
  GITLAB: "GITLAB",
  GITHUB: "GITHUB"  
};

export const dockItems = [
  {
    component: (onClick: () => void, key: string, active: boolean) => (
      <LinkCardButton
        icon={<IconFinder />}
        onClick={onClick}
        key={key}
        active={active}
        title="About me"
      />
    ),
    window: () => <AboutWindow key={DOCK_WINDOWS.ABOUT_ME} />,
    id: DOCK_WINDOWS.ABOUT_ME,
  },
  {
    component: (onClick: () => void, key: string, active: boolean) => (
      <LinkCardButton
        icon={<IconResume />}
        onClick={onClick}
        key={key}
        active={active}
        title="Resume"
      />
    ),
    window: () => <ResumeWindow key={DOCK_WINDOWS.RESUME} />,
    id: DOCK_WINDOWS.RESUME,
  },
  {
    component: (onClick: () => void, key: string, active: boolean) => (
      <LinkCardButton
        icon={<IconHarvard />}
        onClick={onClick}
        key={key}
        active={active}
        title="CS50w"
      />
    ),
    window: () => <CS50Window key={DOCK_WINDOWS.CS50} />,
    id: DOCK_WINDOWS.CS50,
  },
  {
    component: (onClick: () => void, key: string, active: boolean) => (
      <LinkCardButton
        icon={<IconTerminal />}
        onClick={onClick}
        key={key}
        active={active}
        title="Terminal"
      />
    ),
    window: () => <TerminalWindow key={DOCK_WINDOWS.TERMINAL} />,
    id: DOCK_WINDOWS.TERMINAL,
  },
  {
    component: (onClick: () => void, key: string, active: boolean) => (
      <LinkCardButton
        icon={<IconThree />}
        onClick={onClick}
        key={key}
        active={active}
        title="Spinny thing"
      />
    ),
    window: () => <Logo3DWindow key={DOCK_WINDOWS.THREE} />,
    id: DOCK_WINDOWS.THREE,
  },
  {
    component: (_: any, key: string, active: boolean) => (
      <LinkCard
        icon={<IconLinked />}
        target="https://linkedin.com/in/artem-dusheba"
        key={key}
        active={active}
        title="My Linkedin"
      />
    ),
    window: () => null,
    id: DOCK_EXTERNAL_LINKS.LINKEDIN,
  },
  {
    component: (_: any, key: string, active: boolean) => (
      <LinkCard
        icon={<IconGitlab />}
        target="https://gitlab.com/dushebaa75"
        key={key}
        active={active}
        padding="6px"
        title="My Gitlab"
      />
    ),
    window: () => null,
    id: DOCK_EXTERNAL_LINKS.GITLAB,
  },
  {
    component: (_: any, key: string, active: boolean) => (
      <LinkCard
        icon={<IconGithub />}
        target="https://github.com/dushebaa"
        key={key}
        active={active}
        title="My Github"
      />
    ),
    window: () => null,
    id: DOCK_EXTERNAL_LINKS.GITHUB,
  },
];
