import { Suspense } from 'react'
import MouseMoveEffect from '@/components/mouse-move-effect'
import Hero from '@/components/hero'
import GlassmorphismCard from '@/components/glassmorphism-card'
import ProjectGrid from '@/components/project-grid'
import {
  getVideoCategoriesWithCountIncludingAll,
  getAllVideoProjectsFlattened,
} from '@/lib/helper'

export default function HomePage() {
  // Fetch data on the server
  const categories = getVideoCategoriesWithCountIncludingAll()
  const allProjects = getAllVideoProjectsFlattened() // We need all projects initially for the grid to filter client-side

  return (
    <div className="min-h-screen relative overflow-hidden">
      <MouseMoveEffect />

      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            {/* Spotlight Effect behind title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight relative z-10">
              <span className="bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">
                Meus Projetos
              </span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Desde transições suaves até sincronização de áudio precisa e
              animações dinâmicas — meu foco é tornar seu conteúdo
              <span className="text-blue-400 font-medium"> relevante</span>.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="text-center py-20 text-gray-400">
                Carregando projetos...
              </div>
            }
          >
            <ProjectGrid
              initialCategories={categories}
              initialProjects={allProjects}
            />
          </Suspense>
        </div>
      </section>

      {/* What I Can Do Section */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Oque eu posso fazer
              <span className="text-blue-500"> por você?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Se você procura alguém que combine criatividade com habilidade
              técnica, comunique-se com clareza e realmente se preocupe com os
              resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Edição profissional de vídeos',
                description:
                  'Edição envolvente otimizada para retenção com ritmo perfeito.',
                icon: '🎬',
              },
              {
                title: 'Conteúdo do Curso',
                description:
                  'Conteúdo claro e educativo com acabamento profissional.',
                icon: '📚',
              },
              {
                title: 'Motion Graphics',
                description:
                  'Animações envolventes que melhoram sua narrativa.',
                icon: '✨',
              },
              {
                title: 'Correção de Cor',
                description:
                  'Visuais cinematográficos que conferem um ar premium aos seus vídeos.',
                icon: '🎨',
              },
              {
                title: 'Animação de Logo',
                description:
                  'Elementos de branding profissionais que se destacam.',
                icon: '🏷️',
              },
              {
                title: 'Engenharia de Áudio',
                description:
                  'Mixagem de áudio cristalina com redução de ruído.',
                icon: '🎵',
              },
            ].map((service, index) => (
              <div key={service.title} className="h-full">
                <GlassmorphismCard className="p-8 h-full flex flex-col items-center text-center group hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300">
                  <div className="text-5xl mb-6 bg-white/5 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </GlassmorphismCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
