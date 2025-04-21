import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    uses: [1, 2, 3, 4],
  });
}
