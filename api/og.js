// api/og.js
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const FONT_URL = new URL('../public/PressStart2P-Regular.ttf', import.meta.url);

export default async function handler(req) {
  // 1. Load the font data
  const fontData = await fetch(FONT_URL).then((res) => res.arrayBuffer());

  // 2. Pull any query parameters (e.g. ?title=Hello)
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || "Dev Patel | Pixel Quest Portfolio";

  // 3. Return a 1200×630 image using JSX-like syntax
  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: '"Press Start 2P", sans-serif',
          background: '#0f0f0f',
          color: '#f2f2f2',
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          boxSizing: 'border-box',
        }}
      >
        {/* You can add a logo if you like */}
        {/* <img src="https://dev-patel-rust.vercel.app/logo.png" width="120" style={{ marginBottom: '30px' }} /> */}
        <div style={{ fontSize: '48px', textAlign: 'center', lineHeight: 1.2 }}>
          {title}
        </div>
        <div style={{ marginTop: '20px', fontSize: '24px', opacity: 0.7 }}>
          dev-patel-rust.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Press Start 2P',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
