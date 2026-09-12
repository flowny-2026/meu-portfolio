import { useEffect, useState } from "react";
import foto from "./assets/foto-charles.jpg";
import flowny from "./assets/flowny.png";
import bs from "./assets/bs-solucoes.png";
import drCharles from "./assets/dr-charles.png";
import rc from "./assets/rc-pintura.png";
import cordel from "./assets/coedeu.png";
import android from "./assets/historia-dos-andoid.png";

const projetos = [
  { img: flowny, titulo: "Flowny Desenvolvimento Web", ano: "2026", resumo: "Landing page institucional com foco em UX e responsividade.", detalhe: "Interface moderna com navegação fluida para apresentar portfólio e serviços de tecnologia.", url: "https://flowny-2026.github.io/flowny-web/" },
  { img: bs, titulo: "BS.Soluções", ano: "2026", resumo: "Landing page para empresa de infraestrutura elétrica e redes.", detalhe: "Design dark mode focado em autoridade e conversão para serviços de climatização e elétrica.", url: "https://flowny-2026.github.io/BS.Solucoes/" },
  { img: drCharles, titulo: "Consultório Odontológico", ano: "2026", resumo: "Interface premium para agendamento de consultas.", detalhe: "Layout clean para transmitir confiança, com seções de especialidades e depoimentos.", url: "https://flowny-2026.github.io/dr-charles-main/" },
  { img: rc, titulo: "RC Pinturas", ano: "2026", resumo: "Landing page com calculadora de tintas integrada.", detalhe: "Foco total em conversão direta via WhatsApp para serviços residenciais e comerciais.", url: "https://flowny-2026.github.io/rc-pintura/" },
  { img: cordel, titulo: "Projeto Cordel Moderno", ano: "2025", resumo: "Estudo de efeitos de paralaxe e design imersivo.", detalhe: "Uso de HTML5 e CSS3 avançado para criar profundidade visual em textos literários.", url: "https://flowny-2026.github.io/projeto-cordeu/" },
  { img: android, titulo: "História dos Androids", ano: "2025", resumo: "Site educativo com foco em estruturação de conteúdo.", detalhe: "Primeiro projeto focado em design responsivo e acessibilidade de imagens dinâmicas.", url: "https://flowny-2026.github.io/historia-dos-android/" },
];

const funcionalidades = ["Vendas e PDV", "Controle de estoque", "Produtos e variações", "Gestão de vendedores", "Clientes", "Formas de pagamento", "Histórico de vendas", "Empresa e usuários"];
const formacao = [
  { curso: "Curso de HTML5 e CSS3", inst: "Curso em Vídeo", horas: "200 horas" },
  { curso: "JavaScript Fundamentos", inst: "IFRS", horas: "40 horas" },
  { curso: "Front-end", inst: "RECODE", horas: "25 horas" },
  { curso: "Redes de Computadores", inst: "IFRS", horas: "60 horas" },
];
const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#venda-facil", label: "Venda Fácil" },
  { href: "#video", label: "Vídeo" },
  { href: "#projetos", label: "Projetos" },
  { href: "#formacao", label: "Formação" },
];

export default function App() {
  const [tema, setTema] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
  }, [tema]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#inicio" className="font-display text-sm font-bold tracking-widest uppercase text-gradient">Edicharles</a>
          <ul className="flex flex-wrap items-center gap-1 text-sm">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">{n.label}</a></li>)}
            <li><button aria-label="Alternar tema" onClick={() => setTema(t => t === "dark" ? "light" : "dark")} className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">{tema === "dark" ? "☀️" : "🌙"}</button></li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-24">
        <section id="inicio" className="bg-hero -mx-5 px-5 py-16 sm:py-24">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <img src={foto} alt="Retrato de José Edicharles" className="size-44 shrink-0 rounded-full object-cover ring-4 ring-primary/60 shadow-glow" />
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">Desenvolvimento Web &amp; Soluções Digitais</p>
              <h1 className="mt-3 text-4xl font-bold sm:text-5xl">José <span className="text-gradient">Edicharles</span></h1>
              <p className="mt-5 max-w-2xl text-muted-foreground">Crio experiências digitais e sistemas personalizados para transformar ideias em soluções funcionais. Minha trajetória como motorista de aplicativo me ensinou a importância da eficiência e do foco no cliente — valores que hoje aplico no desenvolvimento de softwares que resolvem problemas reais e otimizam negócios.</p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <a href="#projetos" className="rounded-lg bg-success px-5 py-3 text-sm font-bold text-success-foreground transition-transform hover:scale-[1.03]">Conheça meus projetos</a>
                <a href="https://www.instagram.com/charles.brito.750/" target="_blank" rel="noreferrer" className="rounded-lg border border-border px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground">Instagram</a>
                <a href="https://www.linkedin.com/in/edicharles-brito-329665393" target="_blank" rel="noreferrer" className="rounded-lg border border-border px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground">LinkedIn</a>
                <a href="https://github.com/flowny-2026" target="_blank" rel="noreferrer" className="rounded-lg border border-border px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section id="venda-facil" className="pt-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-highlight">Projeto em destaque</p>
          <h2 className="mt-2 text-3xl font-bold">Venda Fácil</h2>
          <div className="surface-card mt-6 border-l-4 border-l-primary p-6 sm:p-8">
            <h3 className="text-xl font-semibold">Sistema de gestão e vendas</h3>
            <p className="mt-3 max-w-3xl text-muted-foreground">Uma solução completa para gerenciamento de vendas, produtos, estoque, vendedores, clientes e pagamentos, desenvolvida para centralizar a operação do negócio em um único sistema.</p>
            <h4 className="mt-8 text-sm font-semibold tracking-wider uppercase text-accent">Principais funcionalidades</h4>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{funcionalidades.map(f => <li key={f} className="rounded-lg border-l-2 border-l-accent bg-elevated px-4 py-3 text-sm">{f}</li>)}</ul>
          </div>
        </section>

        <section id="video" className="pt-20">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-highlight">Demonstração</p>
          <h2 className="mt-2 text-3xl font-bold">Vídeo de apresentação</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Veja o Venda Fácil em funcionamento: vendas, estoque e gestão em um só lugar.</p>
          <div className="surface-card mt-6 overflow-hidden p-2 sm:p-3">
            <iframe className="aspect-video w-full rounded-lg bg-elevated" src="https://www.youtube.com/embed/U7aI5T9flg0" title="Apresentação do Venda Fácil" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </section>

        <section id="projetos" className="pt-20">
          <h2 className="text-3xl font-bold">Outros projetos</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projetos.map(p => <article key={p.titulo} className="surface-card group overflow-hidden">
              <a href={p.url} target="_blank" rel="noreferrer" className="block"><img src={p.img} alt={`Prévia do projeto ${p.titulo}`} loading="lazy" className="h-44 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" /></a>
              <div className="p-5"><p className="text-xs font-semibold tracking-widest text-accent">{p.ano}</p><h3 className="mt-2 text-lg font-semibold">{p.titulo}</h3><p className="mt-2 text-sm text-muted-foreground">{p.resumo}</p><details className="mt-4 text-sm"><summary className="cursor-pointer font-medium text-primary">Saiba mais</summary><p className="mt-2 text-muted-foreground">{p.detalhe}</p></details></div>
            </article>)}
          </div>
        </section>

        <section id="formacao" className="pt-20">
          <h2 className="text-3xl font-bold">Formação profissional</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{formacao.map(f => <div key={f.curso} className="surface-card p-5"><h3 className="text-base font-semibold">{f.curso}</h3><p className="mt-1 text-sm text-muted-foreground">{f.inst}</p><span className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">{f.horas}</span></div>)}</div>
        </section>
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© 2026 José Edicharles · Desenvolvedor Freelancer</footer>
    </div>
  );
}
