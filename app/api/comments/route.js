import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('hackathon_team_10');
    const comments = await db.collection('comments').find({}).toArray();
    return NextResponse.json(comments);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db('hackathon_team_10');
    const comment = await req.json();
    const result = await db.collection('comments').insertOne(comment);
    return NextResponse.json({ message: 'comment created successfully', id: result.insertedId });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
