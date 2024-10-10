import { memo, ReactNode } from "react";

type LinkCardProps = {
  icon: ReactNode;
  target: string;
  active: boolean;
  padding?: string;
  title?: string;
};

const LinkCard = memo(
  ({ icon, target, active, padding, title }: LinkCardProps) => (
    <a
      href={target}
      className="desktop__socials-card"
      style={padding ? { padding } : {}}
      target="_blank"
      title={title}
    >
      {icon}
      {active && <div className="desktop__socials-active" />}
    </a>
  ),
  (prev, next) => prev.active === next.active
);

export { LinkCard };
