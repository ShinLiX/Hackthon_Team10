import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('admin');
    const ideas = await db.collection('ideas').find({}).toArray();
    return NextResponse.json(ideas);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}


export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db('admin');
    const idea = await req.json(); // Extract idea data from request body
    const result = await db.collection('ideas').insertOne(idea);
    return NextResponse.json({ message: 'Idea created successfully', id: result.insertedId });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
