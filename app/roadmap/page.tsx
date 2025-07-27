// app/roadmap/page.tsx
import Head from 'next/head'

export default function Roadmap() {
  return (
    <>
      <Head>
        <title>Roadmap - Eliobros Tech</title>
        <meta
          name="description"
          content="Veja os planos e objetivos futuros da Eliobros Tech, empresa de tecnologia africana criada por jovens."
        />
      </Head>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Roadmap - O Futuro da Eliobros Tech</h1>

        <p className="mb-6">
          Aqui você confere os próximos passos e projetos que a Eliobros Tech está preparando para crescer e inovar no mercado tecnológico africano.
        </p>

        <ul className="list-disc list-inside space-y-4 mb-8">
          <li>
            <strong>2025 Q1:</strong> Lançar a versão 2.0 da Tina, com reconhecimento de voz aprimorado e integração com múltiplas plataformas.
          </li>
          <li>
            <strong>2025 Q2:</strong> Desenvolver e lançar o aplicativo móvel para facilitar o acesso aos nossos assistentes virtuais.
          </li>
          <li>
            <strong>2025 Q3:</strong> Expandir o atendimento para outros países da África, com suporte multilíngue e parcerias estratégicas.
          </li>
          <li>
            <strong>2025 Q4:</strong> Ampliar a equipe técnica com novos desenvolvedores, especialistas em IA e marketing digital.
          </li>
          <li>
            <strong>2026:</strong> Iniciar projetos em novas áreas como educação digital, saúde e agricultura inteligente, sempre com foco em inovação local.
          </li>
        </ul>

        <p>
          Estamos construindo uma empresa que não só entrega tecnologia, mas também inspira jovens africanos a inovar e transformar realidades. 
          Fique ligado e acompanhe essa jornada!
        </p>
      </section>
    </>
  )
}