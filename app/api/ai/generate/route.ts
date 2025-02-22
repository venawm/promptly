import { NextResponse } from "next/server";
import { RequestSchema } from "@/lib/schema";

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const rawBody = await request.json();
    const result = RequestSchema.safeParse(rawBody);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.message },
        { status: 400 },
      );
    }

    const { prompt, model } = result.data;

    // Add delay for loading
    await delay(1500);

    // Add a 10% chance of error
    if (Math.random() < 0.1) throw new Error("Random API error occurred");

    const response = {
      id: crypto.randomUUID(),
      response: `[${model}] Generated response for: ${prompt}`,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("API Error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
