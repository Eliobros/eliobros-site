
// components/Header.tsx
'use client' // necessário para usar estado no Next 13 App Router

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Eliobros Tech
        </Link>

        {/* Botão hambúrguer para mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Ícone X */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Ícone hambúrguer */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Início
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="hover:text-blue-600">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/servicos" className="hover:text-blue-600">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="/contato" className="hover:text-blue-600">
              Contato
            </Link>
          </li>
         
          <li>
            <Link href="/projeto" className="hover:text-blue-600">
              Projetos
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menu mobile - aparece só se aberto */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col space-y-4 p-4 font-medium text-gray-700">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Início
              </Link>
            </li>
            <li>
              <Link href="/sobre" onClick={() => setMenuOpen(false)}>
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/servicos" onClick={() => setMenuOpen(false)}>
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/contato" onClick={() => setMenuOpen(false)}>
                Contato
              </Link>
            </li>
           <li>
              <Link href="/projeto" onClick={() => setMenuOpen(false)}>
                Projetos
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}