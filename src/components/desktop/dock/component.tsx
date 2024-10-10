import useDraggableWindows from "src/components/shared/draggable/store";
import { dockItems } from "./data";

const Dock = () => {
  const { toggle, visible } = useDraggableWindows();

  return (
    <div className="desktop__dock">
      <div className="desktop__dock-container">
        {dockItems.map((icon) =>
          icon.component(() => toggle(icon.id), icon.id, visible(icon.id))
        )}
      </div>
    </div>
  );
};

export default Dock;
