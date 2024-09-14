'use client';
import { useState } from 'react';

// `app/dashboard/page.js` is the UI for the `/dashboard` URL
export default function Page() {
  const [testData, setTestData] = useState('Test');
  return <h1>Hello, Dashboard Page! {testData}</h1>;
}
