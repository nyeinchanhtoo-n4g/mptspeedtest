import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Generate a random buffer of 10MB (smaller size for better reliability)
    const size = 1024 * 1024 * 10; // 10MB
    const buffer = Buffer.alloc(size);
    
    // Fill buffer with random data
    for (let i = 0; i < size; i += 4) {
      buffer.writeUInt32LE(Math.random() * 0xFFFFFFFF, i);
    }

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Length': size.toString(),
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Pragma': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Download generation failed:', error);
    return NextResponse.json(
      { error: 'Failed to generate download content' },
      { status: 500 }
    );
  }
}
