import type { Metadata } from 'next'
import { Space_Grotesk, Outfit } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebDesign Pro - Agência de Criação de Sites',
  description: 'Crie sites incríveis com nossas soluções personalizadas de web design',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.className} bg-secondary text-white overflow-x-hidden`}>
        <style jsx global>{`
          :root {
            --primary: #00D4AA;
            --primary-dark: #00B894;
            --secondary: #0F0F1A;
            --accent: #6C5CE7;
            --white: #FFFFFF;
            --gray: #1A1A2E;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Outfit', sans-serif;
            background: var(--secondary);
            color: var(--white);
            overflow-x: hidden;
          }

          /* Animated Background */
          .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
          }

          .bg-animation::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background:
              radial-gradient(circle at 20% 80%, rgba(0, 212, 170, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(108, 92, 231, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(0, 212, 170, 0.05) 0%, transparent 50%);
            animation: bgPulse 15s ease-in-out infinite;
          }

          @keyframes bgPulse {
            0%, 100% {
              transform: translate(0, 0) rotate(0deg);
            }
            33% {
              transform: translate(2%, 2%) rotate(1deg);
            }
            66% {
              transform: translate(-1%, 1%) rotate(-1deg);
            }
          }

          .floating-shapes {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .shape {
            position: absolute;
            border: 1px solid rgba(0, 212, 170, 0.2);
            border-radius: 50%;
            animation: float 20s infinite;
          }

          .shape:nth-child(1) {
            width: 300px;
            height: 300px;
            top: 10%;
            left: 5%;
            animation-delay: 0s;
          }

          .shape:nth-child(2) {
            width: 200px;
            height: 200px;
            top: 60%;
            right: 10%;
            animation-delay: -5s;
          }

          .shape:nth-child(3) {
            width: 150px;
            height: 150px;
            bottom: 20%;
            left: 20%;
            animation-delay: -10s;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.3;
            }
            50% {
              transform: translateY(-30px) rotate(180deg);
              opacity: 0.6;
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes floatCard {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }

          @keyframes logoGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(0, 212, 170, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(0, 212, 170, 0.6);
            }
          }
        `}</style>
        <div className="bg-animation">
          <div className="floating-shapes">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
