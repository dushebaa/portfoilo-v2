import DraggableWindow from "src/components/shared/draggable";
import { DOCK_WINDOWS } from "../dock";

const ResumeWindow = () => (
  <DraggableWindow id={DOCK_WINDOWS.RESUME}>
    <iframe
      src={`${window.location}/Resume%20Artem%20Dusheba.pdf`}
      width="100%"
      height="100%"
    />
  </DraggableWindow>
);

export default ResumeWindow;
