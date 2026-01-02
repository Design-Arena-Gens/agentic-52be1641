import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
};

const emailRegex = /^\S+@\S+\.\S+$/;

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const errors: string[] = [];

  if (!payload.name || payload.name.trim().length < 2) {
    errors.push("Please share your name.");
  }

  if (!payload.email || !emailRegex.test(payload.email)) {
    errors.push("Provide a valid business email.");
  }

  if (!payload.message || payload.message.trim().length < 10) {
    errors.push("Add a brief describing the initiative (at least 10 characters).");
  }

  if (errors.length > 0) {
    return NextResponse.json(
      { error: errors.join(" ") },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json({
    success: true,
    receivedAt: new Date().toISOString(),
    nextSteps:
      "Expect a follow-up email with discovery workshop slots and a draft architecture outline within one business day.",
  });
}

export async function GET() {
  return NextResponse.json({
    message: "Submit contact requests via POST.",
    requiredFields: ["name", "email", "message"],
    optionalFields: ["projectType"],
    expertise: ["Spring Boot", "Next.js", "Event-driven architecture"],
  });
}
