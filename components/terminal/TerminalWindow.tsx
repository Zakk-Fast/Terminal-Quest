import { useEffect, useRef, useMemo } from "react";

const TerminalWindow = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const gameMessages = useMemo(
    () => [
      {
        type: "narrative",
        text: "You are standing in an open field west of a white house, with a boarded front door.",
      },
      {
        type: "narrative",
        text: "There is a small mailbox here.",
      },
      {
        type: "command",
        text: "> open mailbox",
      },
      {
        type: "response",
        text: "Opening the small mailbox reveals a leaflet.",
      },
      {
        type: "command",
        text: "> take leaflet",
      },
      {
        type: "response",
        text: "Taken.",
      },
      {
        type: "command",
        text: "> read leaflet",
      },
      {
        type: "response",
        text: '"WELCOME TO ZORK!\n\nYour mission is to find a Jade Figurine somewhere in the Great Underground Empire."',
      },
      {
        type: "command",
        text: "> look around",
      },
      {
        type: "response",
        text: "You are in an open field. To the north is a dark forest path. The white house sits to the east with its door firmly shut. A gentle breeze rustles through the grass.",
      },
      {
        type: "command",
        text: "> inventory",
      },
      {
        type: "response",
        text: "You are carrying:\nA leaflet",
      },
      {
        type: "command",
        text: "> go north",
      },
      {
        type: "response",
        text: "You enter the dark forest. Tall trees tower above you, their branches creating a canopy that blocks most of the sunlight. You hear strange sounds in the distance.",
      },
    ],
    []
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [gameMessages]);

  return (
    <div
      ref={scrollRef}
      className="bg-[#111] flex-1 overflow-y-auto p-4 font-mono text-green-400 leading-relaxed"
    >
      <div className="space-y-4">
        {gameMessages.map((message, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalWindow;
