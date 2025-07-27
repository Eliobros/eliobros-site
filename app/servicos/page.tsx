// app/services/page.tsx
export default function Services() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Serviços Prestados pela Eliobros Tech
      </h1>

      <p className="mb-6">
        Como você já sabe, nós prestamos diversos serviços de alta qualidade na área de tecnologia, com foco em soluções digitais e inovação.
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">Nossos principais serviços</h2>
      <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700">
        <li>
          <strong>Criação e desenvolvimento de websites</strong><br />
          Sites modernos, responsivos e otimizados para a melhor experiência do usuário.
        </li>
        <li>
          <strong>Aplicativos desktop e mobile</strong><br />
          Soluções completas para sistemas em desktop e dispositivos móveis, com alta performance.
        </li>
        <li>
          <strong>Desenvolvimento de jogos</strong><br />
          Jogos digitais personalizados para diversas plataformas, focados em diversão e engajamento.
        </li>
        <li>
          <strong>Criação e gerenciamento de banco de dados</strong><br />
          Projetos seguros e escaláveis para armazenar e gerenciar seus dados de forma eficiente.
        </li>
        <li>
          <strong>Edição profissional de vídeos e fotos</strong><br />
          Tratamento visual para vídeos e imagens, garantindo qualidade e impacto nas suas mídias.
        </li>
        <li>
          <strong>Marketing digital e SEO</strong><br />
          Estratégias para ampliar sua presença online e melhorar o posicionamento nos mecanismos de busca.
        </li>
      </ul>

      <hr className="my-8" />

      <p className="mb-6">
        Quer saber mais sobre nossos serviços ou discutir um projeto? Entre em contato conosco!
      </p>

      <p className="mb-4">
        <strong>Email:</strong> <a href="mailto:suporteeliobrostech@gmail.com" className="text-blue-600 underline">suporteeliobrostech@gmail.com</a>
      </p>
      <p>
        <strong>Site:</strong> <a href="https://tinachat.netlify.app" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://tinachat.netlify.app</a>
      </p>
    </section>
  )
}