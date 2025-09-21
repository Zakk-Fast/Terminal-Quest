import { useState } from "react";

import TerminalInput from "./TerminalInput";
import TerminalWindow from "./TerminalWindow";

interface Message {
  type: "command" | "narrative" | "response";
  text: string;
}

const Terminal: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "narrative",
      text: "You are standing in an open field west of a white house, with a boarded front door.",
    },
  ]);

  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleSubmitCommand = async (command: string) => {
    addMessage({ type: "command", text: `> ${command}` });

    try {
      const response = await fetch("/api/turn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: command }),
      });

      const data = await response.json();

      addMessage({
        type: "response",
        text: data.response[0]?.text || "No response received",
      });
    } catch (error) {
      console.error("Error:", error);
      addMessage({
        type: "response",
        text: "Error: Could not get response from game",
      });
    }
  };

  return (
    <div className={`h-screen flex flex-col flex-grow`}>
      <TerminalWindow messages={messages} />
      <TerminalInput
        setInputValue={setInputValue}
        inputValue={inputValue}
        addMessage={addMessage}
        onSubmitCommand={handleSubmitCommand}
      />
    </div>
  );
};

export default Terminal;
