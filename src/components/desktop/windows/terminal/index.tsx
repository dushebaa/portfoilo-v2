import DraggableWindow from "src/components/shared/draggable";
import { DOCK_WINDOWS } from "../../dock";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";
import { commands, welcomeMessage } from "./data";
import useDraggableWindows from "src/components/shared/draggable/store";

const TerminalWindow = () => {
  const { expanded } = useDraggableWindows();

  return (
    <DraggableWindow id={DOCK_WINDOWS.TERMINAL}>
      <div
        className="desktop__terminal-wrapper"
        style={{
          maxHeight: expanded(DOCK_WINDOWS.TERMINAL) ? "auto" : "330px",
          maxWidth: expanded(DOCK_WINDOWS.TERMINAL) ? "100%" : "min(100dvw, 680px)",
        }}
      >
        <TerminalContextProvider>
          <ReactTerminal
            commands={commands}
            showControlBar={false}
            errorMessage={(prompt: string) => `command not found: ${prompt}`}
            welcomeMessage={<div>{welcomeMessage}</div>}
            themes={{
              transparent: {
                themeBGColor: "transparent",
                themeToolbarColor: "transparent",
                themeColor: "white",
                themePromptColor: "white",
              },
            }}
            theme="transparent"
          />
        </TerminalContextProvider>
      </div>
    </DraggableWindow>
  );
};

export default TerminalWindow;
