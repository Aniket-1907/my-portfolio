import { useState, useEffect } from "react";

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#3fb950">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#3fb950" stroke="#3fb950" strokeWidth="0">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const lines = [
  { type: "cmd", text: "whoami" },
  { type: "name", text: "Aniket Aggarwal" },
  { type: "cmd", text: "cat about.txt" },
  { type: "output", text: "Developer • Building cool stuff" },
  { type: "cmd", text: "ls -la social/" },
  { type: "links", links: [
    { label: "linkedin", href: "https://www.linkedin.com/in/aniket-aggarwal-6916a7214/", icon: "linkedin" },
    { label: "github", href: "https://github.com/Aniket-1907", icon: "github" },
  ]},
  { type: "cmd", text: "status" },
  { type: "green", text: "Website under construction..." },
  { type: "green", text: "More content coming soon." },
];

export default function TerminalPortfolio() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= lines.length) return;
    const delay = lines[visibleCount]?.type === "name" ? 120 : 180;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0d1117",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      boxSizing: "border-box",
      fontFamily: "'Courier New', Courier, monospace",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "560px",
        background: "#161b22",
        borderRadius: "12px",
        border: "1px solid #30363d",
        overflow: "hidden",
      }}>
        {/* Title bar */}
        <div style={{
          background: "#21262d",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          borderBottom: "1px solid #30363d",
        }}>
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
          <span style={{ fontSize: 13, color: "#8b949e", marginLeft: 8 }}>aniketagg.com</span>
        </div>

        {/* Terminal body */}
        <div style={{ padding: "24px 28px 32px", color: "#c9d1d9", fontSize: 14, lineHeight: 1.9 }}>
          {lines.slice(0, visibleCount).map((line, i) => {
            if (line.type === "cmd") return (
              <div key={i} style={{ marginBottom: 8 }}>
                <span style={{ color: "#7c3aed" }}>$</span>
                <span style={{ color: "#58a6ff", marginLeft: 8 }}>{line.text}</span>
              </div>
            );
            if (line.type === "name") return (
              <div key={i} style={{ marginBottom: 20, paddingLeft: 16 }}>
                <span style={{ fontSize: 20, fontWeight: 700, color: "#ffffff", letterSpacing: "0.01em" }}>{line.text}</span>
              </div>
            );
            if (line.type === "output") return (
              <div key={i} style={{ marginBottom: 20, paddingLeft: 16, color: "#8b949e" }}>{line.text}</div>
            );
            if (line.type === "green") return (
              <div key={i} style={{ paddingLeft: 16, color: "#3fb950", marginBottom: 4 }}>{line.text}</div>
            );
            if (line.type === "links") return (
              <div key={i} style={{ marginBottom: 20, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                {line.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                    style={{ color: "#3fb950", textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
                    {link.icon === "linkedin" ? <LinkedInIcon /> : <GitHubIcon />}
                    {link.label}
                  </a>
                ))}
              </div>
            );
            return null;
          })}

          {/* Blinking cursor */}
          <div style={{ marginTop: 8 }}>
            <span style={{ color: "#7c3aed" }}>$</span>
            <Cursor />
          </div>
        </div>
      </div>
    </div>
  );
}

function Cursor() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setVisible((v) => !v), 500);
    return () => clearInterval(t);
  }, []);
  return (
    <span style={{
      display: "inline-block",
      width: 8,
      height: 15,
      background: visible ? "#c9d1d9" : "transparent",
      marginLeft: 8,
      verticalAlign: "middle",
      transition: "background 0.1s",
    }} />
  );
}
