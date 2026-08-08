"use client";

import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-dashed border-border flex-shrink-0">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        <h1 className="text-lg font-semibold">Resume</h1>
        <a
          href="/JANVI.pdf"
          download="Janvi_Resume.pdf"
          className="flex items-center gap-2 px-4 py-2 btn text-sm font-medium rounded-lg"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      {/* PDF Viewer - fills remaining space */}
      <div className="flex-1 min-h-0">
        <iframe
          src="/JANVI.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="w-full h-full border-0"
          title="Resume Preview"
        />
      </div>
    </div>
  );
}
