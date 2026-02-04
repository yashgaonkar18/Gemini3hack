"use client";

import { BookOpen, Sparkles, CheckCircle, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="bg-slate-50 text-gray-900">
      {/* ================= NAVBAR ================= */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <BookOpen size={18} />
            </div>
            AI Study Planner
          </div>

          <Link
            href="/workspace"
            className="bg-blue-600 hover:bg-blue-500 transition text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            Open App
          </Link>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-3 bg-slate-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
  <Image
    src="/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg"
    alt="Gemini AI"
    width={20}
    height={20}
    className="h-5 w-auto"
  />
  Powered by Gemini
</span>



          <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight">
            Turn notes into a <br />
            <span className="bg-gradient-to-r from-blue-700 via-green-300 to-red-600 bg-clip-text text-transparent">clear study plan</span> instantly
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Paste your notes or upload PDFs. Our AI summarizes content,
            extracts tasks, and builds a focused day-wise study plan in seconds.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/workspace"
              className="bg-blue-600 hover:bg-blue-500 transition text-white px-6 py-3 rounded-xl font-semibold"
            >
              Try it free
            </Link>
            <button className="border border-gray-300 hover:border-gray-400 transition px-6 py-3 rounded-xl font-semibold">
              Watch demo
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            No login required · Free to use
          </div>
        </div>

        {/* MOCK PREVIEW */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            📘 AI Generated Summary
          </h3>
          <div className="bg-slate-100 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
            Focus on HTML fundamentals, CSS layouts (Flexbox & Grid),
            JavaScript basics, and DOM manipulation for your exam.
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-green-50 text-green-700 rounded-lg p-3">
              ✓ Tasks extracted
            </div>
            <div className="bg-purple-50 text-purple-700 rounded-lg p-3">
              ✓ Study plan created
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Everything you need to prepare smarter
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Designed for students who want clarity, structure, and confidence
            before exams.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            <Feature
              icon={<CheckCircle className="text-green-600" />}
              title="Smart summaries"
              desc="Condense long notes and PDFs into easy-to-revise summaries."
            />
            <Feature
              icon={<Sparkles className="text-blue-600" />}
              title="Actionable tasks"
              desc="Automatically extract what you actually need to study."
            />
            <Feature
              icon={<Calendar className="text-purple-600" />}
              title="Day-wise study plans"
              desc="Clear plans based on your deadlines and priorities."
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold">
              Ready to study with clarity?
            </h2>
            <p className="mt-3 text-blue-100">
              Stop guessing what to study. Let AI plan it for you.
            </p>

            <Link
              href="/workspace"
              className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold"
            >
              Launch Workspace
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <span>© 2026 AI Study Planner</span>
          <span>Built for students · Hackathon Project</span>
        </div>
      </footer>
    </main>
  );
}

/* ---------- FEATURE CARD ---------- */
function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-md transition">
      <div className="inline-flex items-center justify-center bg-white rounded-xl p-3 mb-5 shadow-sm">
        {icon}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-3 text-gray-600">{desc}</p>
    </div>
  );
}
