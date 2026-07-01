'use client'

import { m } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import GlassmorphismCard from '@/components/glassmorphism-card'
import { Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import { toast } from 'sonner'

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    const projectType = formData.get('project-type') as string
    const timeline = formData.get('timeline') as string
    const honeypot = formData.get('honeypot') as string

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      toast('Por favor, insira um endereço de e-mail válido.')
      return
    }

    if (!message || message.length < 30) {
      toast('A mensagem deve ter pelo menos 30 caracteres.')
      return
    }

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        projectType,
        timeline,
        honeypot,
      }),
    })

    const result = await res.json()

    if (res.ok) {
      toast('Mensagem enviada com sucesso!')
      form.reset()
    } else {
      toast(result.error || 'Algo deu errado.')
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-24 relative"
        >
          {/* Spotlight Effect behind title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/15 blur-[100px] rounded-full pointer-events-none" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-0 md:mt-16 mb-6 text-white tracking-tight relative z-10">
            <span className="bg-gradient-to-r from-white via-purple-100 to-gray-400 bg-clip-text text-transparent">
              Entre em contato
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed relative z-10">
            Tem um projeto em mente ou quer colaborar? Adoraria ouvir de você.
            Vamos criar algo incrível juntos!
          </p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-12 justify-center items-center">
          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Informações de contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:contact.niloybhowmick@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      wasleyoliveiradecarvalho@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <a
                      href="https://wa.me/+5577998171222"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-400 transition-colors"
                    >
                      +55 (077) 99817-1222
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Localização</p>
                    <p className="text-white">Disponível no Mundo (Remoto)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Disponibilidade</p>
                    <p className="text-white">Flexível com fusos horários</p>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Por que me escolher?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">Entrega rápida</h4>
                    <p className="text-gray-400 text-sm">
                      Entrega rápida sem comprometer a qualidade
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">
                      Qualidade Profissional
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Edições cinematográficas com atenção aos detalhes
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">
                      Comunicação Clara
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Atualizações regulares e processo transparente
                    </p>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>
          </m.div>

          {/* Contact Form */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Enviar Mensagem
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Honeypot field (hidden for spam prevention) */}
                <div className="hidden" aria-hidden="true">
                  <input
                    id="honeypot"
                    name="honeypot"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm text-gray-400 mb-2 block font-medium"
                    >
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 rounded-xl focus-visible:ring-blue-500/30 focus-visible:border-blue-500/50 h-12"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm text-gray-400 mb-2 block font-medium"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 rounded-xl focus-visible:ring-blue-500/30 focus-visible:border-blue-500/50 h-12"
                      placeholder="email@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project-type"
                    className="text-sm text-gray-400 mb-2 block font-medium"
                  >
                    Tipo de Projeto
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    className="w-full bg-white/[0.03] border border-white/10 text-white rounded-xl px-4 py-3 h-12 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all custom-select"
                  >
                    <option value="" className="bg-gray-900 text-gray-400">
                      Selecione um tipo de projeto
                    </option>
                    <option value="youtube" className="bg-gray-900">
                      Vídeo do YouTube
                    </option>
                    <option value="social-media" className="bg-gray-900">
                      Conteúdo de Mídias Sociais
                    </option>
                    <option value="promo" className="bg-gray-900">
                      Vídeo Promocional
                    </option>
                    <option value="tutorial" className="bg-gray-900">
                      Tutorial/Curso
                    </option>
                    <option value="documentary" className="bg-gray-900">
                      Documentário/Entrevista
                    </option>
                    <option value="animation" className="bg-gray-900">
                      Animação/Gráficos em Movimento
                    </option>
                    <option value="other" className="bg-gray-900">
                      Outro
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="text-sm text-gray-400 mb-2 block font-medium"
                  >
                    Prazo do Projeto
                  </label>
                  <Input
                    id="timeline"
                    name="timeline"
                    type="text"
                    className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 rounded-xl focus-visible:ring-blue-500/30 focus-visible:border-blue-500/50 h-12"
                    placeholder="Exemplo: 1 semana, Mais rápido, Flexível, etc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm text-gray-400 mb-2 block font-medium"
                  >
                    Detalhes do Projeto *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Diga-me sobre o seu projeto..."
                    className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 rounded-xl focus-visible:ring-blue-500/30 focus-visible:border-blue-500/50 resize-none p-4"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-black hover:bg-gray-200 rounded-full h-14 text-base font-semibold shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all hover:scale-105 cursor-pointer mt-4"
                >
                  <Send className="mr-2" size={18} />
                  Enviar Mensagem
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm text-center">
                  Prefere conversar diretamente? Entre em contato pelo{' '}
                  <a
                    href="https://wa.me/+5577998171222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300"
                  >
                    WhatsApp
                  </a>{' '}
                  para comunicação instantânea.
                </p>
              </div>
            </GlassmorphismCard>
          </m.div>
        </div>

        {/* FAQ Section */}
        {/* <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <GlassmorphismCard className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center">
              Perguntas Frequentes
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-white mb-2">
                    Com quanto tempo um projeto típico leva?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    A maioria dos projetos é concluída dentro de 3-7 dias,
                    dependendo da complexidade e do comprimento. Pedidos de
                    emergência podem ser atendidos.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">
                    Quais formatos de arquivo você trabalha?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Eu trabalho com todos os principais formatos de vídeo,
                    incluindo MP4, MOV, AVI, e mais. Posso entregar em qualquer
                    formato que você precise.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">
                    Você fornece revisões?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Sim! Incluo múltiplas revisões em todos os pacotes para
                    garantir que você esteja completamente satisfeito com o
                    resultado final.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-white mb-2">
                    Qual é o seu processo de pagamento?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Geralmente, exijo 50% no início e 50% na conclusão. O
                    pagamento pode ser feito via PayPal, transferência bancária
                    ou outros métodos.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">
                    Você pode trabalhar com minhas diretrizes de marca
                    existentes?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Posso trabalhar com suas cores de marca, fontes, logotipos e
                    diretrizes de estilo para manter a consistência.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">
                    Você oferece serviços de edição de vídeo contínuos?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Sim! Trabalho com muitos clientes em regime de retainer para
                    criação regular de conteúdo. Vamos discutir suas
                    necessidades contínuas.
                  </p>
                </div>
              </div>
            </div>
          </GlassmorphismCard>
        </m.div> */}
      </div>
    </div>
  )
}
