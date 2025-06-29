from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS for your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/ai-enhance")
async def ai_enhance(data: dict):
    section = data.get("section", "")
    content = data.get("content", "")
    # Mocked AI enhancement
    improved_content = f"✨ Enhanced version of '{section}': {content.upper()}"
    return {"improved_content": improved_content}

@app.post("/save-resume")
async def save_resume(resume: dict):
    # Save to a file (mocked storage)
    with open("saved_resume.json", "w", encoding="utf-8") as f:
        import json
        json.dump(resume, f, indent=2)
    return {"status": "Resume saved successfully"}
