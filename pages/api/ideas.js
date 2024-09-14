import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    // TODO: Change db name
    const db = client.db('your-database-name');
    const ideas = await db.collection('ideas').find({}).toArray();
    res.status(200).json(ideas);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
