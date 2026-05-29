import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { v4 as uuid } from 'uuid';

const uri = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || 'medixor';
let cachedClient = null;
async function db() {
  if (cachedClient) return cachedClient.db(dbName);
  cachedClient = new MongoClient(uri);
  await cachedClient.connect();
  return cachedClient.db(dbName);
}

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() { return new NextResponse(null, { status: 204, headers: cors }); }

export async function GET(request, { params }) {
  const path = (params?.path || []).join('/');
  if (!path) return NextResponse.json({ message: 'Medixor Healthcare API', status: 'ok' }, { headers: cors });
  if (path === 'health') return NextResponse.json({ status: 'ok', time: new Date().toISOString() }, { headers: cors });
  return NextResponse.json({ error: 'not found' }, { status: 404, headers: cors });
}

export async function POST(request, { params }) {
  const path = (params?.path || []).join('/');
  try {
    const body = await request.json();
    if (path === 'contact' || path === 'consultation') {
      const d = await db();
      const doc = {
        id: uuid(),
        type: path,
        name: body.name || '',
        email: body.email || '',
        company: body.company || '',
        phone: body.phone || '',
        message: body.message || '',
        service: body.service || '',
        createdAt: new Date(),
      };
      await d.collection('leads').insertOne(doc);
      return NextResponse.json({ ok: true, id: doc.id }, { headers: cors });
    }
    return NextResponse.json({ error: 'not found' }, { status: 404, headers: cors });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500, headers: cors });
  }
}
