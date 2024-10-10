import { memo, ReactNode } from "react";

type LinkCardProps = {
  icon: ReactNode;
  onClick: () => void;
  active: boolean;
  title?: string;
};

const LinkCardButton = memo(
  ({ icon, onClick, active, title }: LinkCardProps) => (
    <button className="desktop__socials-card" onClick={onClick} title={title}>
      {icon}
      {active && <div className="desktop__socials-active" />}
    </button>
  ),
  (prev, next) => prev.active === next.active
);

export { LinkCardButton };
