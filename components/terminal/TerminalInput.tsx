interface Message {
  type: "command" | "narrative" | "response";
  text: string;
}

interface TerminalInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  addMessage: (message: Message) => void;
  onSubmitCommand: (command: string) => void;
}

const TerminalInput: React.FC<TerminalInputProps> = ({
  inputValue,
  setInputValue,
  onSubmitCommand,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmitCommand(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="bg-[#222] border-t-2 border-green-400 flex-shrink-0 p-4">
      <div className="flex items-center">
        <div className="text-green-400 font-mono text-base mr-2 select-none">
          <span className="animate-pulse">&gt;</span>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-[#222] text-green-400 font-mono text-base border-none outline-none placeholder-green-400/60 caret-green-400 focus:text-green-300 transition-colors duration-150"
          placeholder="What do you want to do?"
          autoComplete="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default TerminalInput;
