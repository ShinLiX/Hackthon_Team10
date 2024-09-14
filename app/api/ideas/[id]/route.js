import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(req) {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db('admin');
    const idea = await db.collection('ideas').findOne({ _id: new ObjectId(id) });

    if (!idea) {
      return NextResponse.json({ message: 'Idea not found' }, { status: 404 });
    }

    return NextResponse.json(idea);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
