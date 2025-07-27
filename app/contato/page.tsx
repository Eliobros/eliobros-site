'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<null | 'success' | 'error'>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    emailjs.send(
      'YOUR_SERVICE_ID',    // substitua com seu Service ID do EmailJS
      'YOUR_TEMPLATE_ID',   // substitua com seu Template ID do EmailJS
      form,
      'YOUR_PUBLIC_KEY'     // substitua com sua Public Key do EmailJS
    ).then(() => {
      setLoading(false)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    }).catch(() => {
      setLoading(false)
      setStatus('error')
    })
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Contato</h1>

      <p className="mb-8">
        Quer falar com a Eliobros Tech? Preencha o formulário abaixo ou conecte-se conosco nas redes sociais.
      </p>

      <div className="flex space-x-6 mb-10 text-blue-600 text-2xl">
        <a href="https://www.facebook.com/profile.php?id=61561277020899" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-800 transition">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/eliobrostech" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-500 transition">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com/company/eliobrostech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 transition">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/eliobros.tech3" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-600 transition">
          <FaInstagram />
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="seuemail@exemplo.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Escreva sua mensagem aqui..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>

      {status === 'success' && (
        <p className="mt-6 text-green-600 font-semibold">Mensagem enviada com sucesso! Obrigado por entrar em contato.</p>
      )}
      {status === 'error' && (
        <p className="mt-6 text-red-600 font-semibold">Erro ao enviar a mensagem. Tente novamente mais tarde.</p>
      )}
    </section>
  )
}