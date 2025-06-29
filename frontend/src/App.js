import React, { useState } from "react";
import "./App.css";

function App() {
  const [resume, setResume] = useState({
    name: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
  });

  const [uploadMessage, setUploadMessage] = useState("");

  // Handler for file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // We'll just mock parsing
      setUploadMessage(`Parsed "${file.name}" successfully.`);
      setResume({
        name: "John Doe",
        summary: "Experienced developer with 5 years in web development.",
        experience: "Worked at XYZ Corp.",
        education: "BSc Computer Science",
        skills: "JavaScript, React, Python",
      });
    }
  };

  // Handler for input changes
  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <h1>Resume Editor</h1>

      {/* Upload Resume */}
      <input
        type="file"
        accept=".pdf,.docx"
        onChange={handleFileUpload}
      />
      {uploadMessage && <p>{uploadMessage}</p>}

      {/* Resume Fields */}
      <div style={{ textAlign: "left", maxWidth: "600px", margin: "auto" }}>
        {Object.keys(resume).map((key) => (
          <div key={key} style={{ marginBottom: "1em" }}>
            <label style={{ fontWeight: "bold" }}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <textarea
              name={key}
              value={resume[key]}
              onChange={handleChange}
              rows={3}
              style={{ width: "100%" }}
            />
            <button
              onClick={() => enhanceSection(key, resume[key])}
              style={{ marginTop: "0.5em" }}
            >
              Enhance with AI
            </button>
          </div>
        ))}
      </div>

      {/* Save and Download */}
      <button onClick={saveResume}>Save Resume</button>
      <button onClick={downloadResume}>Download Resume JSON</button>
    </div>
  );

  // Enhance section with AI
  async function enhanceSection(section, content) {
    const response = await fetch("http://127.0.0.1:8000/ai-enhance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section, content }),
    });
    const data = await response.json();
    setResume({
      ...resume,
      [section]: data.improved_content,
    });
  }

  // Save resume to backend
  async function saveResume() {
    await fetch("http://127.0.0.1:8000/save-resume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resume),
    });
    alert("Resume saved successfully!");
  }

  // Download resume JSON
  function downloadResume() {
    const blob = new Blob([JSON.stringify(resume, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.json";
    a.click();
  }
}

export default App;
