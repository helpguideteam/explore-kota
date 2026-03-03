// src/app/api/contact/route.js

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Adjusted path for src/data/
    const filePath = path.join(process.cwd(), "src", "data", "form-data.json");

    // Debug logs
    console.log("API: Trying to access file:", filePath);

    let submissions = [];

    if (fs.existsSync(filePath)) {
      console.log("API: File exists, reading...");
      const fileContent = fs.readFileSync(filePath, "utf-8");
      console.log("API: File content length:", fileContent.length);
      submissions = JSON.parse(fileContent);
    } else {
      console.log("API: File does NOT exist — creating it");
    }

    const newSubmission = {
      ...data,
      submittedAt: new Date().toISOString(),
    };

    submissions.push(newSubmission);

    console.log("API: Writing updated data...");

    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    console.log("API: Successfully saved");

    return NextResponse.json(
      { message: "Message saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error.message);
    console.error("Stack:", error.stack);
    return NextResponse.json(
      { error: "Failed to save message", details: error.message },
      { status: 500 }
    );
  }
}