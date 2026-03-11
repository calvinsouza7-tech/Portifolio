'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-0 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-[rgba(15,15,26,0.95)] border-b border-[rgba(0,212,170,0.1)]'
          : 'py-3.75 bg-[rgba(15,15,26,0.8)] border-b border-[rgba(0,212,170,0.1)]'
      }`}
      style={{
        backdropFilter: 'blur(20px)',
      }}
    >
      <nav className="container mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 text-2xl font-bold no-underline">
            <div
              className="w-11 h-11 rounded-3xl flex items-center justify-center text-xl"
              style={{
                background: 'linear-gradient(135deg, #00D4AA 0%, #00B894 50%, #6C5CE7 100%)',
                animation: 'logoGlow 2s ease-in-out infinite',
              }}
            >
              🚀
            </div>
            <div className="logo-text">
              Web<span className="gradient-text">Design</span>
            </div>
          </Link>

          {/* Nav Menu */}
          <div className="flex items-center gap-10">
            <a
              href="#servicos"
              className="text-white text-opacity-70 no-underline font-medium relative transition-colors duration-300 hover:text-white group"
            >
              Serviços
              <span
                className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#00D4AA] to-[#6C5CE7] transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
            <a
              href="#beneficios"
              className="text-white text-opacity-70 no-underline font-medium relative transition-colors duration-300 hover:text-white group"
            >
              Benefícios
              <span
                className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#00D4AA] to-[#6C5CE7] transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
            <a
              href="#templates"
              className="text-white text-opacity-70 no-underline font-medium relative transition-colors duration-300 hover:text-white group"
            >
              Templates
              <span
                className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#00D4AA] to-[#6C5CE7] transition-all duration-300 group-hover:w-full"
              ></span>
            </a>

            {/* CTA Button */}
            <a
              href="#contato"
              className="px-7 py-3 rounded-full no-underline font-semibold text-white transition-all duration-300 hover:-translate-y-0.75 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #00D4AA 0%, #00B894 50%, #6C5CE7 100%)',
                boxShadow: '0 0 0 rgba(0, 212, 170, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 212, 170, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 rgba(0, 212, 170, 0.4)'
              }}
            >
              Começar
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
