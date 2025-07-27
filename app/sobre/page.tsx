import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About Eliobros Tech</title>
        <meta
          name="description"
          content="Eliobros Tech is a Mozambican tech company founded in 2024, focused on real innovation and resilience, led by Habibo Salimo Julio."
        />
      </Head>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Sobre a Eliobros Tech</h1>

        <h2 className="text-2xl font-semibold mb-6">
          Tecnologia feita com propósito, dedicação e alma moçambicana
        </h2>

        <p className="mb-6">
          Fundada em <strong>15 de maio de 2024</strong>, em Maputo, Moçambique, a <strong>Eliobros Tech</strong> nasceu da vontade de jovens empreendedores de criar soluções tecnológicas reais e impactantes.
        </p>

        <hr className="my-8" />

        <h3 className="text-xl font-semibold mb-4">Nossa missão</h3>
        <p className="mb-6">
          Construir tecnologia para transformar vidas, mostrando que a juventude africana tem talento e capacidade para liderar o futuro digital.
        </p>

        <hr className="my-8" />

        <h3 className="text-xl font-semibold mb-4">O que fazemos</h3>
        <ul className="list-disc list-inside space-y-3 mb-8">
          <li>
            <strong>Assistentes virtuais inteligentes</strong><br />
            Desenvolvemos IA conversacional, como a Tina, nossa assistente virtual 100% criada em Moçambique.
          </li>
          <li>
            <strong>APIs e plataformas personalizadas</strong><br />
            Criamos soluções digitais que facilitam o crescimento e a modernização de negócios.
          </li>
          <li>
            <strong>Desenvolvimento web e mobile</strong><br />
            Aplicativos e sites feitos para a melhor experiência do usuário e com foco em resultados reais.
          </li>
        </ul>

        <hr className="my-8" />

        <h3 className="text-xl font-semibold mb-4">Quem está por trás da Eliobros Tech</h3>
        <p className="mb-6">
          Atualmente, a Eliobros Tech é sustentada principalmente pelo trabalho incansável do seu fundador, <strong>Habibo Salimo Julio</strong>, que atua como CEO, programador e editor de vídeos.  
          Embora outros nomes estejam listados como CTO e CFO, a realidade é que a execução e o desenvolvimento dos projetos são liderados por Habibo sozinho.
        </p>
        <p className="mb-6 text-red-600 font-semibold">
          Eliobros Tech é a prova de que dedicação e paixão podem superar desafios e que o futuro da tecnologia em Moçambique está nas mãos daqueles que realmente fazem acontecer.
        </p>

        <hr className="my-8" />

        <h3 className="text-xl font-semibold mb-4">Nosso propósito vai além da tecnologia</h3>
        <p className="mb-6">
          Queremos mostrar que a juventude africana é capaz de criar, inovar e liderar, mesmo quando as condições são difíceis e os caminhos não são fáceis.
        </p>
        <p className="mb-6">
          Se você acredita em tecnologia com propósito, acompanhe nossa jornada. Ainda estamos só começando, e muito vem por aí.
        </p>

        <hr className="my-8" />

        <p className="mb-4">
          <strong>Contato:</strong> <a href="mailto:suporteeliobrostech@gmail.com" className="text-blue-600 underline">suporteeliobrostech@gmail.com</a>
        </p>
        <p>
          <strong>Website:</strong> <a href="https://tinachat.netlify.app" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://tinachat.netlify.app</a>
        </p>

        <hr className="my-8" />

        <h4 className="text-lg font-semibold mb-4">Curtiu a ideia? Vamos conversar!</h4>
        <p>
          Seja investidor, jornalista, desenvolvedor ou entusiasta da inovação africana, queremos ouvir você.
        </p>
      </section>
    </>
  )
}