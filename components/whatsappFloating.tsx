"use client";
import React, { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  from: "bot" | "user";
  text: string;
  time: number;
};

type Props = {
  phone?: string; // international digits only, e.g. "447700123456"
  initialGreeting?: string;
  title?: string;
};

const WhatsAppFloating: React.FC<Props> = ({
  phone = "923474641042",
  initialGreeting = "Hello, how can we help you?",
  title = "Wenup WhatsApp Chat!",
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages([
      {
        id: String(Date.now()),
        from: "bot",
        text: initialGreeting,
        time: Date.now(),
      },
    ]);
  }, [initialGreeting]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  const toggleOpen = () => setOpen((v) => !v);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { id: String(Date.now()), from: "user", text: trimmed, time: Date.now() },
    ]);
    setInput("");
    const encoded = encodeURIComponent(trimmed);
    const waUrl = `https://wa.me/${phone}?text=${encoded}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };


  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div className={`wa-widget ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="wa-header">
          <div className="wa-title">{title}</div>
          <button
            className="wa-close"
            onClick={toggleOpen}
            type="button"
            aria-label="Toggle chat"
          >
            {open ? "✕" : "-"}
          </button>
        </div>

        <div className="wa-body" ref={listRef}>
          {messages.map((m) => (
            <div
              key={m.id}
              className={`wa-msg ${m.from === "bot" ? "bot" : "user"}`}
            >
              <div className="wa-msg-text">{m.text}</div>
            </div>
          ))}
        </div>

        <div className="wa-input-area">
          <textarea
            className="wa-input"
            aria-label="Type a message"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
          />
          <button
            className="wa-send"
            onClick={() => sendMessage(input)}
            type="button"
            aria-label="Send"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="white"
              aria-hidden
            >
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>

      <button
        className={`wa-fab ${open ? "fab-open" : ""}`}
        onClick={toggleOpen}
        aria-label="Open WhatsApp chat"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="white"
        >
          <path d="M16.01 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.72 6.41L3.2 28.8l6.55-1.68a12.74 12.74 0 006.26 1.6h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.64-3.75-9.05A12.72 12.72 0 0016.01 3.2zm6.38 18.25c-.27.76-1.57 1.49-2.2 1.57-.56.07-1.25.1-2.01-.13-.46-.14-1.05-.34-1.81-.67-3.18-1.38-5.25-4.59-5.41-4.81-.16-.22-1.29-1.72-1.29-3.28 0-1.56.81-2.33 1.1-2.64.29-.3.64-.38.86-.38h.62c.2 0 .47-.08.74.57.27.65.92 2.25 1 2.41.08.16.14.34.03.56-.11.22-.17.34-.34.53-.17.19-.35.42-.5.56-.17.17-.34.36-.15.71.19.35.83 1.37 1.79 2.22 1.23 1.1 2.27 1.46 2.62 1.62.35.17.55.15.75-.09.2-.24.86-1 1.09-1.35.23-.35.46-.29.78-.17.32.12 2.01.95 2.36 1.12.35.17.58.26.66.4.08.14.08.81-.18 1.57z" />
        </svg>
      </button>

      <style jsx>{`
        /* (same styles as before) */
        .wa-widget {
          position: fixed;
          right: 96px;
          bottom: 24px;
          width: 320px;
          height: 420px;
          transform: translateY(20px) scale(0.98);
          opacity: 0;
          visibility: hidden;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: all 220ms ease;
          z-index: 1000000;
        }
        .wa-widget.open {
          transform: translateY(0) scale(1);
          opacity: 1;
          visibility: visible;
        }
        .wa-header {
          background: #1aa35c;
          padding: 10px 12px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .wa-title {
          font-weight: 600;
          font-size: 14px;
        }
        .wa-close {
          background: transparent;
          border: none;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
        }
        .wa-body {
          flex: 1;
          padding: 12px;
          overflow-y: auto;
          background: linear-gradient(#f7f7f7, #fff);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .wa-msg {
          max-width: 85%;
          display: inline-block;
        }
        .wa-msg .wa-msg-text {
          padding: 10px 12px;
          border-radius: 14px;
          font-size: 14px;
          line-height: 1.25;
        }
        .wa-msg.bot {
          align-self: flex-start;
        }
        .wa-msg.bot .wa-msg-text {
          background: #f0f0f0;
          color: #333;
          border-bottom-left-radius: 4px;
        }
        .wa-msg.user {
          align-self: flex-end;
        }
        .wa-msg.user .wa-msg-text {
          background: #1aa35c;
          color: white;
          border-bottom-right-radius: 4px;
        }
        .wa-input-area {
          display: flex;
          gap: 8px;
          padding: 10px;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          align-items: center;
        }
        .wa-input {
          flex: 1;
          resize: none;
          padding: 8px 10px;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          font-size: 14px;
          min-height: 38px;
          max-height: 96px;
        }
        .wa-send {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          border: none;
          background: #1aa35c;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 18px rgba(26, 163, 92, 0.18);
        }
        .wa-fab {
          position: fixed;
          right: 24px;
          bottom: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #61e27f, #15c65c);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.2);
          z-index: 1000001;
          cursor: pointer;
          transition: transform 160ms ease;
        }
        @media (max-width: 600px) {
          .wa-widget {
            width: calc(100vw - 28px);
            right: 14px;
            left: 14px;
            bottom: 90px;
            height: 54vh;
          }
          .wa-fab {
            right: 18px;
            bottom: 18px;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloating;
