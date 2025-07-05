'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { quotes } from '../../data/quotes';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    const filtered = quotes
      .filter((q: { topic: string; text: string }) => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map((q: { topic: string; text: string }) => q.text);

    setResults(filtered.length ? filtered : ["No quotes found for this topic."]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Motivational Quote Generator</h1>

      <div className="flex space-x-2 mb-6">
        <Input
          placeholder="Enter topic (e.g. success, life)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button onClick={handleSearch}>Get Quotes</Button>
      </div>

      <div className="space-y-3">
        {results.map((quote, index) => (
          <p key={index} className="text-lg text-center max-w-xl">{quote}</p>
        ))}
      </div>
    </main>
  );
}
