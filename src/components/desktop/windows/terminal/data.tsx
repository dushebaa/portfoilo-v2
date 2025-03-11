import { NeofetchTerminalComponent } from "./neofetch";

const commands: { [key: string]: string | JSX.Element } = {
  whoami: "du",
  help: <div>how are you seeing this?</div>,
  neofetch: <NeofetchTerminalComponent />,
};

type TCommands = keyof typeof commands;
type TCommandsHelp = {
  [key in TCommands]: string | JSX.Element;
};

const commandsHelp: TCommandsHelp = {
  whoami: "prints the effective user id",
  help: "displays this message",
  neofetch: `Neofetch is a CLI system information tool written in BASH. Neofetch
    displays information about your system next to an image, your OS logo,
    or any ASCII file of your choice`,
};

const helpMessage = (
  <div>
    <div>What are you doing here lol. Anyway,</div>
    <div>Commands:</div>
    {Object.keys(commandsHelp).map((key) => (
      <div key={key}>
        - {key}: {commandsHelp[key as TCommands]}
      </div>
    ))}
  </div>
);
commands.help = helpMessage;

const welcomeMessage =
  "Welcome to the terminal. Type help to see all avaliable commands";

export { helpMessage, commands, welcomeMessage };
