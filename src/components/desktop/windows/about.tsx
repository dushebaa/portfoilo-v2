import DraggableWindow from "src/components/shared/draggable";
import { DOCK_WINDOWS } from "../dock";

const AboutWindow = () => (
  <DraggableWindow id={DOCK_WINDOWS.ABOUT_ME}>
    <div className="desktop__textbox">Artem Dusheba</div>
    <div className="desktop__textbox desktop__textbox-medium">Fullstack dev</div>
    <div className="desktop__textbox desktop__textbox-small">
      Nest.js, React, Typescript, Golang, Solidity
    </div>
  </DraggableWindow>
);

export default AboutWindow;
