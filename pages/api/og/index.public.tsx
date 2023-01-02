/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

import webserver from '@/infra/webserver'
import LogoHi from '@/pages/interface/components/graphics/LogoHi/index'

export const config = {
  runtime: 'edge',
  regions: ['gru1'],
}

const fontSemiBoldItalic = fetch(new URL('../../../assets/Raleway-BoldItalic.ttf', import.meta.url)).then((res) =>
  res.arrayBuffer(),
)
const fontBoldItalic = fetch(new URL('../../../assets/Raleway-BoldItalic.ttf', import.meta.url)).then((res) =>
  res.arrayBuffer(),
)
const fontExtraBoldItalic = fetch(new URL('../../../assets/Raleway-ExtraBoldItalic.ttf', import.meta.url)).then((res) =>
  res.arrayBuffer(),
)

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const hasThumbnail = searchParams.has('thumbnail')
    const thumbnail = hasThumbnail ? searchParams.get('thumbnail') : null
    const hasTitle = searchParams.has('title')
    const title = hasTitle ? searchParams.get('title') : 'OZ - Impulso'
    const webserverHost = webserver.getHost()
    const bg = thumbnail ? `${webserverHost}/_next/image?url=${thumbnail}&w=1200&q=65` : `${webserverHost}/bg-noise.png`
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            backgroundColor: 'rgb(69 69 69/1)',
            backgroundImage: !thumbnail ? `url('${bg}')` : 'linear-gradient(left, #fff, #fff)',
            // backgroundPosition: 'center',
            // backgroundRepeat: 'no-repeat',
            color: '#fff',
            fontFamily: '"Raleway"',
          }}
        >
          {thumbnail && <img src={bg} style={{ position: 'absolute', inset: 0, objectFit: 'cover' }} alt="" />}
          <div
            style={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              backgroundColor: 'rgb(41 41 41/0.45)',
            }}
          >
            <div
              style={{
                fontWeight: 600,
                fontFamily: '"Raleway"',
                fontSize: 24,
                lineHeight: 1,
                position: 'absolute',
                top: 112,
              }}
            >
              Portfólio
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  marginBottom: 12,
                  fontFamily: '"Raleway"',
                  fontWeight: 800,
                  fontSize: 80,
                  lineHeight: 1.24,
                }}
              >
                {title}
              </div>
              <div style={{ fontWeight: 600, fontFamily: '"Raleway"', fontSize: 24, lineHeight: 1 }}>
                Captação • Pós produção • Comercial
              </div>
            </div>
            <LogoHi style={{ position: 'absolute', bottom: 24 }} height={56} />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          { name: 'Raleway', data: await fontSemiBoldItalic, style: 'italic', weight: 600 },
          { name: 'Raleway', data: await fontBoldItalic, style: 'italic', weight: 700 },
          { name: 'Raleway', data: await fontExtraBoldItalic, style: 'italic', weight: 800 },
        ],
      },
    )
  } catch (error: unknown) {
    console.log({ error })
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
