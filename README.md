# Gemini3hack
Hackathon Project Gemini 3

# 📘 AI Study Planner – Project Story

## 💡 Inspiration

As a student, I’ve often faced situations where exams or interviews were just days away, and I had large amounts of unstructured notes, PDFs, or syllabi. The hardest part wasn’t studying itself — it was **figuring out what to study first, what matters most, and how to plan time effectively**.

I wanted to build something that could instantly turn messy notes into **clarity**: a clean summary, actionable tasks, and a realistic study plan. With the release of **Gemini 3**, this hackathon felt like the perfect opportunity to solve a real student pain point using next-generation AI reasoning.

---

## 🚀 What the Project Does

**AI Study Planner** is an AI-powered workspace that helps students prepare smarter by:

- Summarizing long notes or syllabus content  
- Extracting clear, actionable study tasks  
- Generating a structured, day-wise study plan  
- Allowing users to export the plan as a PDF for offline revision  

The application is designed to be **simple, fast, and distraction-free**, so students can focus entirely on preparation rather than planning.

---

## 🛠️ How I Built It

### Tech Stack
- **Next.js (App Router)** – frontend & API routes  
- **TypeScript** – type safety and maintainability  
- **Tailwind CSS** – clean, modern UI  
- **Gemini 2.5 Flash (Gemini 3 family)** – AI reasoning and content generation  

### Gemini Integration

The core of the application uses the **Gemini API** to analyze user-provided notes. I carefully designed prompts to ensure Gemini returns output in a **strict, structured format**, which allows the frontend to reliably parse and display:

- A concise summary  
- A list of tasks  
- A day-wise study plan  

Gemini’s fast reasoning capabilities made it possible to generate meaningful, structured responses even for large inputs, while keeping latency low.

---

## 📚 What I Learned

- How to design **deterministic AI outputs** instead of free-form text  
- Best practices for integrating LLMs into real products  
- Handling API limitations, rate limits, and model availability  
- Structuring a clean SaaS-style UI with a clear separation between **landing page** and **workspace**  
- Exporting AI-generated content into real-world formats like PDF  

This project significantly improved my understanding of **prompt engineering**, **AI reliability**, and **product-focused frontend design**.

---

## ⚠️ Challenges I Faced

- **Model availability & quotas:**  
  Understanding which Gemini models were available, supported, and usable under free-tier limits required careful testing and iteration.

- **Output consistency:**  
  Early versions produced mixed or repeated content. I solved this by enforcing strict output markers and robust parsing logic.

- **UX balance:**  
  Making the interface feel professional without overwhelming users was challenging. I iterated multiple times to achieve a clean, focused workspace experience.

---

## 🌟 What’s Next

Future improvements could include:
- User accounts and saved study plans  
- Progress tracking and reminders  
- PDF uploads with document parsing  
- Dark mode and accessibility enhancements  

---

## 🎯 Final Thoughts

AI Study Planner is built to solve a **real, everyday problem** for students. By combining thoughtful UI design with Gemini’s powerful reasoning capabilities, the project demonstrates how AI can move beyond chat interfaces and become a **practical productivity tool**.

Thank you for checking it out!
