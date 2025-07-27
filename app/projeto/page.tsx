// app/projects/page.tsx
import React from 'react';

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Nossos Projetos</h1>

      {/* Projeto Tina IA */}
      <article className="mb-12 p-6 border rounded shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold mb-3">Tina IA</h2>
        <p>
          Tina IA é uma inteligência artificial desenvolvida por nós, a empresa Eliobros Tech, para oferecer soluções inteligentes e inovadoras.
        </p>
      </article>

      {/* Projeto Tina Bot */}
      <article className="mb-12 p-6 border rounded shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold mb-3">Tina Bot</h2>
        <p className="mb-3">
          Um bot de WhatsApp multitarefas para grupos, com moderação automática, banimento, e várias funcionalidades como:
        </p>
        <ul className="list-disc list-inside mb-3">
          <li>Baixar música ou vídeo</li>
          <li>Remover fundo de imagem</li>
          <li>Gerar imagem e nick para Free Fire</li>
          <li>Melhorar a qualidade da imagem para HD</li>
          <li>Shazam pelo WhatsApp (envie o áudio e use <code>/shazam</code>)</li>
          <li>Baixar imagens do Pinterest</li>
          <li>Baixar vídeos do TikTok, Facebook, Instagram</li>
        </ul>
        <p className="mb-3">Funções para grupos:</p>
        <ul className="list-disc list-inside mb-3">
          <li>Banir usuários</li>
          <li>Rebaixar e promover membros</li>
          <li>Mutar usuários com banimento automático em caso de infração</li>
          <li>Alterar descrição, nome, foto, abrir e fechar grupo com comandos</li>
        </ul>
        <p>
          Para mais informações, visite nossa <a href="/contato" className="text-blue-600 underline">página de contato</a> ou interaja diretamente com a Tina via WhatsApp:{" "}
          <a 
            href="https://api.whatsapp.com/send?phone=258841617651&text=/menu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 underline"
          >
            clique aqui
          </a>.
        </p>
      </article>

      {/* Projeto SocializeNow */}
      <article className="mb-12 p-6 border rounded shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold mb-3">SocializeNow</h2>
        <p className="mb-3">
          A SocializeNow é a mais nova rede social oficial de Moçambique, criada para manter a conversa animada entre amigos, familiares e muito mais! Nosso foco principal é o público moçambicano, mas isso não exclui ninguém de fora — todo mundo é bem-vindo aqui.
        </p>

        <h3 className="text-xl font-semibold mb-2">O que torna a SocializeNow especial?</h3>
        <p className="mb-3">
          Imagine o seguinte cenário: você está conversando com alguém que mora bem longe, na China, por exemplo. Essa pessoa fala mandarim, claro que ela vai mandar a mensagem em mandarim, né? Mas será que você vai entender?
        </p>

        <p className="font-semibold mb-3">A resposta é: Sim!</p>

        <p className="mb-3">
          Na SocializeNow, a barreira da língua não é problema. Nossa rede social tem um recurso de tradução automática baseado no idioma que você escolher como preferido.
        </p>

        <h4 className="font-semibold mb-1">Mas como isso funciona?</h4>
        <ul className="list-disc list-inside mb-3">
          <li>Se você enviar uma mensagem em português para alguém que fala mandarim, ele vai receber a mensagem já traduzida para o mandarim.</li>
          <li>E se essa pessoa te responder em mandarim? Você vai receber a resposta traduzida para o seu idioma preferido — tudo automaticamente!</li>
        </ul>

        <p className="mb-3 font-semibold">Incrível, né?</p>

        <h4 className="font-semibold mb-2">Quer testar agora?</h4>
        <p>
          Por enquanto, a SocializeNow ainda está em desenvolvimento. O lançamento oficial estava previsto para 15 de maio de 2025, mas, por alguns imprevistos, ainda estamos trabalhando para entregar a melhor experiência para vocês.
        </p>
      </article>
    </section>
  );
}