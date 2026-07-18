'use client';
import { initializePaddle } from '@paddle/paddle-js';

export default function CheckoutButton() {
  const handleCheckout = async () => {
    const paddle = await initializePaddle({ environment: 'sandbox', token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN! });
    paddle?.Checkout.open({
      items: [{ priceId: 'pri_pri_01kxsxg3bdbwehqexm0f6qrqcg', quantity: 1 }],
    });
  };
  return (
    <button onClick={handleCheckout} style={{ padding: '10px 20px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
      Subscribe to GAISB - $120/mo
    </button>
  );
}
