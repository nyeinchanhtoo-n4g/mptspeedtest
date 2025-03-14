import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const startTime = Date.now();

  try {
    // Read the uploaded data
    const data = await request.arrayBuffer();
    const endTime = Date.now();
    
    // Calculate duration in seconds
    const duration = (endTime - startTime) / 1000;
    const bytes = data.byteLength;
    
    // Add 5% overhead for TCP/IP headers and network protocol
    const adjustedBytes = bytes * 1.05;
    
    // Calculate speed in Mbps
    const bitsPerSecond = (adjustedBytes * 8) / duration;
    const mbps = bitsPerSecond / (1024 * 1024);

    // Round to 2 decimal places for cleaner display
    const roundedMbps = Math.round(mbps * 100) / 100;

    return NextResponse.json({
      status: 'ok',
      size: bytes,
      duration: duration * 1000, // Convert back to ms for consistency
      speed: roundedMbps,
      unit: 'Mbps'
    });
  } catch (error) {
    console.error('Upload test failed:', error);
    return NextResponse.json(
      { error: 'Upload test failed. Please try again.' },
      { status: 500 }
    );
  }
}
