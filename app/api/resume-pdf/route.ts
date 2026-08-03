import { createElement } from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { getResumeData } from "@/lib/cms";
import ResumeDocument from "./ResumeDocument";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = getResumeData();

  const buffer = await renderToBuffer(
    createElement(ResumeDocument, { data }) as Parameters<typeof renderToBuffer>[0]
  );

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="AjithKumar_Resume.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
