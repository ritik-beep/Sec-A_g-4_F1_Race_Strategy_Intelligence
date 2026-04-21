import { useState, useRef, useEffect } from "react";

const REPO_OWNER = "mitul-bhatia";
const REPO_NAME = "Sec-A_g-4_F1_Race_Strategy_Intelligence";
const WORKLOG_PATH = "WORKLOG.md";

const ROLES = [
  { id: "project_lead",  label: "Project Lead",       name: "Mitul Bhatia",              github: "mitul-bhatia" },
  { id: "data_lead",     label: "Data Lead",           name: "Ramani Dhruv Dineshbhai",   github: "DhruvR-16" },
  { id: "etl_lead",      label: "ETL Lead",            name: "Vetriselvan R",             github: "Vetri-78640" },
  { id: "analysis_lead", label: "Analysis Lead",       name: "Agrim Kumar Malhotra",      github: "Agrim-2007" },
  { id: "viz_lead",      label: "Visualization Lead",  name: "Kushal Sarkar",             github: "Kushal425" },
  { id: "strategy_lead", label: "Strategy Lead",       name: "Ritik Ranjan",              github: "ritik-beep" },
  { id: "ppt_lead",      label: "PPT & Quality Lead",  name: "Palaparthi Harshakarthikeya", github: "HARSHAKARTHIKEYA1510" },
];

const DAY_CONTEXT = {
  1: "Discovery & Setup — team meet, role assign, sector/dataset selection",
  2: "Discovery & Setup — GitHub repo init, folder structure, dataset validation",
  3: "Gate 1 — proposal submission (DONE ✓)",
  4: "ETL Pipeline — commit raw CSVs to data/raw/, build 01_load_inspect.ipynb",
  5: "ETL Pipeline — build 02_cleaning.ipynb, output to data/processed/",
  6: "EDA — 03_eda.ipynb, trend/distribution/correlation charts",
  7: "EDA — complete EDA notebook, document insights",
  8: "Statistical Analysis — 04_analysis.ipynb, regression + hypothesis tests",
  9: "Statistical Analysis — clustering circuits, finalize KPI outputs",
  10: "Tableau — build executive dashboard view",
  11: "Tableau — operational drill-down view, publish to Tableau Public",
  12: "Report — write project report (10–15 pages)",
  13: "PPT — build 10–12 slide deck, review",
  14: "Final submission — all deliverables",
};

const SYSTEM_PROMPT = `You are the worklog agent. Your goal is to generate formatted WORKLOG.md entries based on user input. 
Always include:
## [Date] - [Task Name]
✅ Completed: [List of tasks]
### 📁 Context
Role: [Role Name]
Day: [Day Number] - [Day Context]`;

// -------------------- helpers --------------------

const isWorklogEntry = (text) =>
  text && text.includes("## ") && text.includes("✅ Completed") && text.includes("### 📁");

async function ghFetch(path, token, opts = {}) {
  return fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`, {
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    ...opts,
  });
}

// -------------------- component --------------------

export default function WorklogAgent() {
  const [provider, setProvider] = useState("claude");
  const [role, setRole] = useState(ROLES[0]);
  const [day, setDay] = useState("4");

  const [messages, setMessages] = useState([
    { role: "assistant", content: "Worklog agent ready. Please describe your progress for the day." }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastEntry, setLastEntry] = useState(null);

  const chatEnd = useRef(null);

  useEffect(() => {
    chatEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // -------------------- LLM --------------------

  async function callClaude(chatMessages) {
    // NOTE: Anthropic usually requires a backend proxy to avoid CORS and keep keys secret.
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_ANTHROPIC_KEY || "",
          "anthropic-version": "2023-06-01",
          "dangerouslyAllowBrowser": "true" // Use with caution
        },
        body: JSON.stringify({
          model: "claude-3-5-sonnet-latest",
          max_tokens: 1000,
          system: `${SYSTEM_PROMPT}\n\nCURRENT CONTEXT:\nRole: ${role.name} (${role.label})\nProject Day: ${day} - ${DAY_CONTEXT[day]}`,
          messages: chatMessages,
        }),
      });

      const data = await res.json();
      return data.content?.[0]?.text || "No response.";
    } catch (err) {
      return `Error calling Claude: ${err.message}`;
    }
  }

  async function callGemini(chatMessages) {
    try {
      const prompt = `${SYSTEM_PROMPT}\n\nCURRENT CONTEXT:\nRole: ${role.name} (${role.label})\nProject Day: ${day} - ${DAY_CONTEXT[day]}\n\n` + 
                     chatMessages.map(m => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`).join("\n\n");

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
          }),
        }
      );

      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
    } catch (err) {
      return `Error calling Gemini: ${err.message}`;
    }
  }

  async function callLLM(chatMessages) {
    return provider === "claude"
      ? callClaude(chatMessages)
      : callGemini(chatMessages);
  }

  // -------------------- send --------------------

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const newMsgs = [...messages, { role: "user", content: input }];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);

    const reply = await callLLM(newMsgs);

    setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    if (isWorklogEntry(reply)) setLastEntry(reply);
    setLoading(false);
  };

  // -------------------- UI --------------------

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <div style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
        <h2>F1 Strategy Worklog Agent</h2>
        
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <div>
            <label>Model: </label>
            <select value={provider} onChange={(e) => setProvider(e.target.value)}>
              <option value="claude">Claude 3.5 Sonnet</option>
              <option value="gemini">Gemini 1.5 Flash</option>
            </select>
          </div>

          <div>
            <label>Role: </label>
            <select value={role.id} onChange={(e) => setRole(ROLES.find(r => r.id === e.target.value))}>
              {ROLES.map(r => <option key={r.id} value={r.id}>{r.label} ({r.name})</option>)}
            </select>
          </div>

          <div>
            <label>Project Day: </label>
            <select value={day} onChange={(e) => setDay(e.target.value)}>
              {Object.keys(DAY_CONTEXT).map(d => <option key={d} value={d}>Day {d}</option>)}
            </select>
          </div>
        </div>
        <p style={{ fontSize: "0.85rem", color: "#666" }}>Current Goal: {DAY_CONTEXT[day]}</p>
      </div>

      <div style={{ height: "400px", overflowY: "auto", border: "1px solid #ddd", padding: "15px", borderRadius: "8px", background: "#f9f9f9" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: "15px", textAlign: m.role === "user" ? "right" : "left" }}>
            <div style={{ 
              display: "inline-block", 
              padding: "10px", 
              borderRadius: "10px", 
              background: m.role === "user" ? "#007bff" : "#e9e9eb",
              color: m.role === "user" ? "white" : "black",
              maxWidth: "80%",
              whiteSpace: "pre-wrap"
            }}>
              {m.content}
            </div>
          </div>
        ))}
        <div ref={chatEnd} />
      </div>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <input 
          style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          value={input} 
          onChange={e => setInput(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && sendMessage()}
          placeholder="Describe what you did today..."
          disabled={loading}
        />
        <button 
          style={{ padding: "10px 20px", borderRadius: "5px", border: "none", background: "#28a745", color: "white", cursor: "pointer" }}
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Send"}
        </button>
      </div>

      {lastEntry && (
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #28a745", borderRadius: "8px", background: "#f0fff4" }}>
          <h4>Generated Entry (Preview):</h4>
          <pre style={{ whiteSpace: "pre-wrap", fontSize: "0.9rem" }}>{lastEntry}</pre>
          <button style={{ background: "#007bff", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px" }}>
            Commit to GitHub (WIP)
          </button>
        </div>
      )}
    </div>
  );
}
