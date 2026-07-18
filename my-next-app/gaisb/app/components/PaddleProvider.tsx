'use client';
import { useEffect } from 'react';
import { initializePaddle } from '@paddle/paddle-js';

export default function PaddleProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initializePaddle({ environment: 'sandbox', token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN! });
  }, []);
  return <>{children}</>;
}
