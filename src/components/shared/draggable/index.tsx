import { useRef, ReactNode } from "react";
import { useDrag } from "./useDrag";
import useDraggableWindows from "./store";

interface Props {
  children: ReactNode;
  id: string;
}

const DraggableWindow = ({ children, id }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    position,
    handleMouseDown,
    handleTouchStart,
    handleTouchEnd,
  } = useDrag({ ref });
  const { toggle, expand, expanded } = useDraggableWindows();
  const isExpanded = expanded(id);

  return (
    <div
      ref={ref}
      style={{
        top: isExpanded ? 0 : position.y,
        left: isExpanded ? 0 : position.x,
        minWidth: "300px",
        minHeight: "140px"
      }}
      className={`desktop__draggable-container ${isExpanded ? "desktop__draggable-expanded" : "desktop__draggable-retracted"}`}
    >
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        className="desktop__draggable-bar"
      >
        <button
          className="desktop__draggable-circle"
          style={{ background: "#FF5F57" }}
          onClick={() => toggle(id)}
        />
        <button
          className="desktop__draggable-circle"
          style={{ background: "#FEBC2E" }}
          onClick={() => toggle(id)}
        />
        <button
          className="desktop__draggable-circle"
          style={{ background: "#28C840" }}
          onClick={() => expand(id)}
        />
      </div>
      <div className="desktop__draggable-childwrapper">{children}</div>
    </div>
  );
};

export default DraggableWindow;
