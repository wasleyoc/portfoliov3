import {
  Award,
  Camera,
  Film,
  Palette,
  Scissors,
  Sparkles,
  Users,
  Volume2,
  Zap,
} from 'lucide-react'

export const videoEditingSkills = [
  {
    name: 'Adobe Premiere Pro',
    image_link: '/tools/Adobe_Premiere.png',
    icon: Scissors,
    description:
      'Edição avançada de vídeo, sincronização multicâmera e otimização do fluxo de trabalho',
    color: 'text-purple-400',
  },
  {
    name: 'After Effects',
    image_link: '/tools/Adobe_After_Effects.png',
    icon: Sparkles,
    description: 'Motion graphics, efeitos visuais e animações avançadas',
    color: 'text-blue-400',
  },
  {
    name: 'Adobe Photoshop',
    image_link: '/tools/Adobe_Photoshop.png',
    icon: Palette,
    description: 'Thumbnail e manipulação de imagens',
    color: 'text-cyan-400',
  },
  {
    name: 'Adobe Lightroom',
    image_link: '/tools/Adobe_Lightroom2.png',
    icon: Camera,
    description: 'Edição de fotos',
    color: 'text-orange-400',
  },
  {
    name: 'Adobe Illustrator',
    image_link: '/tools/Adobe_Illustrator.png',
    icon: Palette,
    description: 'Design de gráficos vetoriais e ilustrações',
    color: 'text-blue-400',
  },
  {
    name: 'Adobe Audition',
    image_link: '/tools/Adobe_Audition.png',
    icon: Volume2,
    description: 'Edição de áudio, redução de ruído e melhoramento de som',
    color: 'text-green-400',
  },
  {
    name: 'DaVinci Resolve',
    image_link: '/tools/DaVinci_Resolve_Studio.png',
    icon: Film,
    description: 'Correção de cor profissional e edição de vídeo',
    color: 'text-orange-400',
  },
  {
    name: 'CapCut',
    image_link: '/tools/Capcut.png',
    icon: Film,
    description: 'Edições de vídeos rápidas, utilizadas em eventos no mobile',
    color: 'text-orange-400',
  },
]

export const specializations = [
  {
    title: 'Criação de Conteúdo para YouTube',
    skills: [
      'Edição de Retenção',
      'Design de Thumbnail',
      'Otimização de SEO',
      'Entendimento de Analytics',
    ],
    icon: '🎬',
    description:
      'Especializado em criar conteúdo envolvente para o YouTube que mantém os espectadores assistindo',
  },
  {
    title: 'Vídeos de Mídias Sociais',
    skills: [
      'Conteúdo de Formato Curto',
      'Vídeo Vertical',
      'Otimização de Plataforma',
      'Técnicas Virais',
    ],
    icon: '📱',
    description:
      'Especializado em criar conteúdo otimizado para Instagram, TikTok e outras plataformas',
  },
  {
    title: 'Vídeos Corporativos',
    skills: [
      'Apresentação Profissional',
      'Consistência de Marca',
      'Estética Limpa',
      'Clareza da Mensagem',
    ],
    icon: '🏢',
    description:
      'Criando conteúdo corporativo polido que comunica efetivamente',
  },
  {
    title: 'Conteúdo Educativo',
    skills: [
      'Gravação de Tela',
      'Estrutura de Tutorial',
      'Explicações Claras',
      'Elementos Interativos',
    ],
    icon: '📚',
    description:
      'Especializado em tornar tópicos complexos fáceis de entender através do vídeo',
  },
  {
    title: 'Motion Graphics',
    skills: [
      'Animação 2D',
      'Animação de Logo',
      'Lower Thirds',
      'Tipografia Cinemática',
    ],
    icon: '✨',
    description: 'Criando animações cativantes que melhoram o storytelling',
  },
  {
    title: 'Correção de Cor',
    skills: [
      'Estilos cinematográficos',
      'Combinação de cores',
      'Criação de Clima',
      'Correção Técnica',
    ],
    icon: '🎨',
    description:
      'Trabalho profissional de correção de cor que dá aos vídeos um aspecto polido e cinematográfico',
  },
]

export const achievements = [
  {
    title: '20+ Projetos Concluídos',
    description:
      'Concluiu com sucesso mais de 20 projetos de vídeo em diversos setores',
    icon: Award,
    color: 'text-yellow-400',
  },
  {
    title: 'Clientes Satisfeitos',
    description:
      'Construiu relacionamentos sólidos com clientes, recebendo feedback positivo e parcerias duradouras',
    icon: Users,
    color: 'text-green-400',
  },
  {
    title: '7+ Anos de Experiência',
    description:
      'Experiência profissional em edição de vídeo com desenvolvimento contínuo de habilidades',
    icon: Camera,
    color: 'text-blue-400',
  },
  {
    title: 'Rápido Entrega de Projetos',
    description:
      'Conhecido por entregar trabalho de alta qualidade dentro de prazos apertados',
    icon: Zap,
    color: 'text-purple-400',
  },
]

export const workflow = [
  {
    step: '01',
    title: 'Análise do Projeto',
    description:
      'Entendendo as necessidades do cliente, o público-alvo e os objetivos do projeto',
  },
  {
    step: '02',
    title: 'Análise do Conteúdo',
    description:
      'Analisando a filmagem bruta, identificando momentos-chave e planejando a edição',
  },
  {
    step: '03',
    title: 'Corte Raso',
    description:
      'Criando edição inicial com cortes básicos, transições e estrutura',
  },
  {
    step: '04',
    title: 'Ajuste Fino',
    description:
      'Adicionando elementos, grade de cor, melhoramento de áudio e efeitos',
  },
  {
    step: '05',
    title: 'Revisão do Cliente',
    description:
      'Apresentando o trabalho para feedback e implementando revisões',
  },
  {
    step: '06',
    title: 'Entrega Final',
    description:
      'Exportar o projeto nos formatos necessários e entregar o trabalho concluído',
  },
]
