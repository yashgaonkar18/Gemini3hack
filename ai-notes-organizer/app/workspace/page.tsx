"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  BookOpen,
  Loader2,
} from "lucide-react";
import InputBox from "../components/InputBox";
import OutputBox from "../components/OutputBox";

export default function Workspace() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-600 via-green-500 to-red-500 animate-bg">

      <header className="bg-white/80 backdrop-blur border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-xl shadow">
              <BookOpen size={18} />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                AI Study Planner
              </h1>
              <p className="text-xs text-gray-500">
                Intelligent study workspace
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-500">
             <Image
                src="/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg"
                alt="Gemini AI"
                width={20}
                height={20}
                className="h-5 w-auto"
              />
            Powered by Gemini
          </div>
        </div>
      </header>

      <section className="flex-grow w-[70vw] mx-auto px-8 py-14 space-y-14">
        <div className="relative bg-white rounded-3xl shadow-lg border overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-green-500 to-red-500" />
          <div className="p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-50 text-blue-600 p-2 rounded-lg">
                <Sparkles size={18} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Create your study plan
              </h2>
            </div>

            <p className="text-sm text-gray-500 mb-6 max-w-2xl">
              Paste your notes, syllabus, or exam goals.  
              Gemini will analyze the content and generate a structured summary,
              actionable tasks, and a day-wise study plan.
            </p>

            <InputBox
              setResult={setResult}
              setLoading={setLoading}
            />

            {loading && (
              <div className="mt-6 flex items-center gap-2 text-blue-600 text-sm font-medium">
                <Loader2 className="animate-spin" size={16} />
                Thinking… structuring your study plan
              </div>
            )}
          </div>
        </div>

        {/* OUTPUT PANEL */}
        {result && (
          <div className="bg-white rounded-3xl shadow-lg border p-10">
            <OutputBox result={result} />
          </div>
        )}
      </section>

      <footer className="bg-white/80 backdrop-blur border-t mt-auto ">
        <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-3">
              AI Study Planner
            </h3>
            <p className="max-w-md">
              A modern AI-powered workspace designed to help students
              convert notes into clarity, structure, and confidence
              before exams.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">
              AI Engine
            </h4>
            <div className="flex items-center gap-2">
              <Image
                src="/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg"
                alt="Gemini AI"
                width={20}
                height={20}
                className="h-5 w-auto"
              />
              <span>Gemini 2.5 Flash</span>
            </div>

            <p className="text-xs text-gray-400 mt-4">
              © {new Date().getFullYear()} AI Study Planner
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
