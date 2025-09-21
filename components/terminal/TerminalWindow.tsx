import { useEffect, useRef } from "react";

interface Message {
  type: "command" | "narrative" | "response";
  text: string;
}

interface TerminalWindowProps {
  messages: Message[];
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ messages }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={scrollRef}
      className="bg-[#111] flex-1 overflow-y-auto p-4 font-mono text-green-400 leading-relaxed"
    >
      <div className="space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`whitespace-pre-wrap ${
              message.type === "command" ? "text-green-300" : "text-green-400"
            }`}
          >
            {message.type === "command" ? `> ${message.text}` : message.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalWindow;
