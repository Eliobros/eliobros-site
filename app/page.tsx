export default function Page() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-6">
        Bem-vindo à Eliobros Tech
      </h1>

      <p className="text-center text-gray-700 mb-10">
        Na Eliobros Tech, transformamos ideias em soluções tecnológicas inovadoras. 
        Somos especialistas em Inteligência Artificial, desenvolvimento web, e muito mais.
      </p>

      <div className="flex justify-center gap-6 mb-12">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Conheça nossos serviços
        </button>
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
          Fale conosco
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Inteligência Artificial</h2>
          <p>
            Desenvolvemos soluções inteligentes que automatizam processos e melhoram a experiência do usuário.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Desenvolvimento Web</h2>
          <p>
            Criamos sites modernos, responsivos e rápidos para destacar seu negócio na internet.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Consultoria Tecnológica</h2>
          <p>
            Ajudamos sua empresa a encontrar as melhores soluções tecnológicas para crescer de forma sustentável.
          </p>
        </div>
      </div>
    </section>
  )
}