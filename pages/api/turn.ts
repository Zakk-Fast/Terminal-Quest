import { Anthropic } from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env["ANTHROPIC_API_KEY"],
});

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }
  try {
    const userMessage: string = req.body?.message || "Hello, Claude";
    const msg = await anthropic.messages.create({
      model: "claude-opus-4-1-20250805",
      max_tokens: 1024,
      messages: [{ role: "user", content: userMessage }],
    });

    const responseContent = typeof msg === "object" && "content" in msg
      ? msg.content
      : JSON.stringify(msg);

    console.log(responseContent);
    res.status(200).json({ response: responseContent });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to get response' });
  }
}