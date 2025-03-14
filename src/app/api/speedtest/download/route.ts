import { NextResponse } from 'next/server';

export async function GET() {
  // Generate a random buffer of 1MB
  const size = 102400 * 1024; // 1MB
  const buffer = Buffer.alloc(size);

  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Length': size.toString(),
      'Cache-Control': 'no-store',
    },
  });
}
