import DraggableWindow from "src/components/shared/draggable";
import { DOCK_WINDOWS } from "../dock";

const AboutWindow = () => (
  <DraggableWindow id={DOCK_WINDOWS.ABOUT_ME}>
    <div className="desktop__textbox">Artem Dusheba</div>
    <div className="desktop__textbox desktop__textbox-medium">Solidity dev</div>
    <div className="desktop__textbox desktop__textbox-small">
      sometimes doing fullstack things in react + node.js
    </div>
  </DraggableWindow>
);

export default AboutWindow;
