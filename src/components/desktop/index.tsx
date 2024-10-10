import useDraggableWindows from "../shared/draggable/store";
import { Dock, dockItems } from "./dock";

const Desktop = () => {
  const { visible } = useDraggableWindows();

  const getWindows = () => {
    return dockItems.map(
      (dockItem) => visible(dockItem.id) && dockItem.window()
    );
  };

  return (
    <section>
      <div className="desktop">
        {getWindows()}
        <Dock />
      </div>
    </section>
  );
};

export default Desktop;
