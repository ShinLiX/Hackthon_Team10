import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('hackathon_team_10');
    const ideas = await db.collection('users').find({}).toArray();
    return NextResponse.json(ideas);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db('hackathon_team_10');
    const userData = await req.json();
    const result = await db.collection('users').insertOne(userData);
    return NextResponse.json({
      message: 'User created successfully',
      id: result.insertedId,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
