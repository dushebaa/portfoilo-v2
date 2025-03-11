import { useRef, ReactNode, useState } from "react";
import { useDrag } from "./useDrag";
import useDraggableWindows from "./store";

interface Props {
  children: ReactNode;
  id: string;
}

const DraggableWindow = ({ children, id }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [_, setAlreadyClicked] = useState(false);
  const { position, handleMouseDown, handleTouchStart, handleTouchEnd } =
    useDrag({ ref });
  const { toggle, expand, focus, focused, expanded } = useDraggableWindows();
  const isExpanded = expanded(id);
  const isFocused = focused(id);

  const onClick = () => {
    setAlreadyClicked((prev) => {
      if (prev) {
        expand(id, !isExpanded);
      }
      return !prev;
    });

    setTimeout(() => {
      if (ref.current) {
        setAlreadyClicked(false);
      }
    }, 500);
  };

  return (
    <div
      ref={ref}
      style={{
        top: isExpanded ? 0 : position.y,
        left: isExpanded ? 0 : position.x,
        minWidth: "300px",
        minHeight: "140px",
        zIndex: isFocused ? "20" : "auto",
      }}
      className={`desktop__draggable-container ${
        isExpanded
          ? "desktop__draggable-expanded"
          : "desktop__draggable-retracted"
      }`}
      onMouseDown={() => focus(id)}
      onTouchStart={() => focus(id)}
    >
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        className="desktop__draggable-bar"
        onClick={onClick}
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
