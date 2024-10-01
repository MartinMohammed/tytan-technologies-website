// app/api/imprint/route.js
import { NextResponse } from "next/server";
import { join } from "path";
import { promises as fs } from "fs";

export async function GET() {
  const filePath = join(
    process.cwd(),
    "public",
    "tytan_technologies_imprint.pdf"
  ); // PDF location
  const file = await fs.readFile(filePath); // Read the file

  return new NextResponse(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'inline; filename="tytan_technologies_imprint.pdf"', // Forces browser display
    },
  });
}
