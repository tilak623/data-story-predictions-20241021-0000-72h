import { NextResponse } from 'next/server';
import { queryDataset } from '@/lib/queryEngine';

export async function POST(req: Request) {
  try {
    const { question } = await req.json();
    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }
    const result = queryDataset(question);
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
