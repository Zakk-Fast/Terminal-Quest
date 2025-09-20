import TerminalInput from "./TerminalInput";
import TerminalWindow from "./TerminalWindow";

const Terminal: React.FC = () => {
  return (
    <div className={`h-screen flex flex-col flex-grow  `}>
      <TerminalWindow />
      <TerminalInput />
    </div>
  );
};

export default Terminal;
