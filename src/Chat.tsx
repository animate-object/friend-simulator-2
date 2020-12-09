import React, { useEffect, useState } from "react";
import "./Chat.css";

interface Props {
  text: string[];
}

const SCROLL_INTERVAL = 5;

const BRACKET_TOKENIZER = /({[a-zA-Z\s,0-9\-']*})/;

const quickHash = (s: string): number => {
  let hash = 0,
    i,
    chr;
  for (i = 0; i < s.length; i++) {
    chr = s.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const _32_bit_color_max = 16 ** 6;

const colorHash = (s: string) => {
  const hash = Math.abs(quickHash(s));
  const normalized = (hash > 10000 ? Math.floor(hash % 10000) : hash) / 10000;
  const slot = Math.floor(normalized * _32_bit_color_max);

  const color = `#${slot.toString(16).padStart(6, "0")}`;
  console.log({ hash, normalized, slot, color });
  return color;
};

const quickColorize = (msg: string): JSX.Element => {
  return (
    <div className="colorized">
      {msg.split(BRACKET_TOKENIZER).map((token) => {
        if (token.startsWith("{")) {
          const trimmed = token.slice(1, token.length - 1);
          const hash = colorHash(trimmed);
          return (
            <span
              key={trimmed}
              style={{
                backgroundColor: hash,
                borderRadius: 6,
                display: "inline",
                opacity: 1,
                padding: ".25rem",
                color: hash < "#999999" ? "white" : "black",
                boxShadow: "1px 2px 2px #111111",
              }}
            >
              {trimmed}
            </span>
          );
        } else {
          return token;
        }
      })}
    </div>
  );
};

export const Chat = ({ text }: Props) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
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
            <div className="text dark-background">{quickColorize(segment)}</div>
            <div style={{ height: (segment.length % 10) * 75 + 20 }} />
          </>
        ))}
        <div className="vert-buffer" />
      </div>
    </div>
  );
};
