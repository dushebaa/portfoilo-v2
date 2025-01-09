import DraggableWindow from "src/components/shared/draggable";
import { DOCK_WINDOWS } from "../dock";

const CS50Window = () => (
  <DraggableWindow id={DOCK_WINDOWS.CS50}>
    <iframe
      src={`${window.location}/CS50W.pdf`}
      width="100%"
      height="100%"
    />
  </DraggableWindow>
);

export default CS50Window;
