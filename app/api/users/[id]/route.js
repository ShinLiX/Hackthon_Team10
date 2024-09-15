import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const client = await clientPromise;
    const db = client.db('hackathon_team_10');
    const idea = await db.collection('users').findOne({ _id: id });

    if (!idea) {
      return NextResponse.json({ message: 'Idea not found' }, { status: 404 });
    }

    return NextResponse.json(idea);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
