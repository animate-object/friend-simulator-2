import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Chat.css";

interface Props {
  text: string[];
}

const SCROLL_INTERVAL = 25;

export const Chat = ({ text }: Props) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      console.log("interval");
      if (ref) {
        ref.scrollTop += 1;
      }
    }, SCROLL_INTERVAL);
    return () => clearInterval(interval);
  }, [ref]);

  return (
    <div className="chat-container">
      <div ref={(r) => setRef(r)} className="scroll-container">
        <div className="vert-buffer" />
        {text.map((segment) => (
          <>
            <div className="text dark-background">{segment}</div>
            <div style={{ height: (segment.length % 10) * 75 + 20 }} />
          </>
        ))}
        <div className="vert-buffer" />
      </div>
    </div>
  );
};
