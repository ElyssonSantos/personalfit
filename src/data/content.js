export const gymData = {
  numbers: [
    { label: "ALUNOS", value: "+2.000", icon: "users" },
    { label: "UNIDADES", value: "2", icon: "map-pin" },
    { label: "ANOS DE EXPERIÊNCIA", value: "10+", icon: "award" },
    { label: "DE FUNCIONAMENTO", value: "24H", icon: "clock" },
  ],
  modalities: [
    { id: 1, name: "MUSCULAÇÃO", desc: "Força, condicionamento e evolução.", image: "/src/conteudos/musculacao.mp4" },
    { id: 2, name: "FUNCIONAL", desc: "Agilidade, mobilidade e condicionamento.", image: "/src/conteudos/funcional.mp4" },
    { id: 3, name: "MUAY THAI", desc: "Técnica, condicionamento e disciplina.", image: "/src/conteudos/boxe.mp4" },
    { id: 4, name: "JIU-JITSU", desc: "Técnica, defesa pessoal e superação.", image: "/src/conteudos/jiujitsu.mp4" },
    { id: 5, name: "PILATES", desc: "Controle, mobilidade e consciência corporal.", image: "/src/conteudos/pilates.mp4" },
    { id: 6, name: "RITMOS", desc: "Energia, música e muita dança.", image: "/src/conteudos/ritmos.mp4" },
  ],
  objectives: [
    {
      id: 1,
      title: "GANHAR FORÇA",
      recommendations: ["Musculação", "Personal Trainer", "Nutrição"]
    },
    {
      id: 2,
      title: "EMAGRECER",
      recommendations: ["Funcional", "Ritmos", "Cardio", "Muay Thai"]
    },
    {
      id: 3,
      title: "MELHORAR O CONDICIONAMENTO",
      recommendations: ["Funcional", "Cardio", "Muay Thai"]
    },
    {
      id: 4,
      title: "MELHORAR A MOBILIDADE",
      recommendations: ["Pilates", "Funcional", "Personal Trainer"]
    },
    {
      id: 5,
      title: "PRATICAR UMA LUTA",
      recommendations: ["Muay Thai", "Jiu-Jitsu"]
    },
    {
      id: 6,
      title: "CUIDAR DA ALIMENTAÇÃO",
      recommendations: ["Nutrição"]
    },
  ],
  plans: [
    {
      id: 1,
      name: "Plano Completo",
      description: "Treine em qualquer unidade da Personal Fit e tenha acesso a todas as nossas modalidades.",
      fidelity: "12 meses de fidelidade",
      oldPrice: "159,90",
      promoPrice: "0,00",
      promoDiscount: "100% OFF",
      afterPromo: "no 1º mês, depois R$ 159,90/mês",
      recommended: true,
      badge: "mais vantajoso",
      buttonText: "Escolher plano Completo",
      benefits: [
        { text: "Acesso a todas as unidades", included: true },
        { text: "Acesso à Musculação e Aeróbico", included: true },
        { text: "Aulas de Muay Thai e Jiu-Jitsu", included: true },
        { text: "Aulas de Pilates e Ritmos", included: true },
        { text: "Acesso à Cadeira de Massagem", included: true },
        { text: "Convidar 5 amigos por mês", included: true }
      ]
    },
    {
      id: 2,
      name: "Plano Básico",
      description: "Nosso plano ideal para quem quer focar na musculação e condicionamento físico.",
      fidelity: "12 meses de fidelidade",
      oldPrice: "99,90",
      promoPrice: "0,00",
      promoDiscount: "100% OFF",
      afterPromo: "no 1º mês, depois R$ 99,90/mês",
      recommended: false,
      buttonText: "Escolher plano Básico",
      benefits: [
        { text: "Acesso a uma unidade", included: true },
        { text: "Acesso à Musculação e Aeróbico", included: true },
        { text: "Aulas de Muay Thai e Jiu-Jitsu", included: false },
        { text: "Aulas de Pilates e Ritmos", included: false },
        { text: "Acesso à Cadeira de Massagem", included: false },
        { text: "Convidar amigos", included: false }
      ]
    },
    {
      id: 3,
      name: "Plano Flex",
      description: "Treine com excelência sem se prender a fidelidades longas.",
      fidelity: "Sem fidelidade",
      oldPrice: "119,90",
      promoPrice: "0,00",
      promoDiscount: "100% OFF",
      afterPromo: "no 1º mês, depois R$ 119,90/mês",
      recommended: false,
      buttonText: "Escolher plano Flex",
      benefits: [
        { text: "Acesso a uma unidade", included: true },
        { text: "Acesso à Musculação e Aeróbico", included: true },
        { text: "Aulas de Muay Thai e Jiu-Jitsu", included: false },
        { text: "Aulas de Pilates e Ritmos", included: false },
        { text: "Acesso à Cadeira de Massagem", included: false },
        { text: "Convidar amigos", included: false }
      ]
    }
  ],
  units: [
    {
      id: 1,
      name: "UNIDADE CENTRO",
      address: "Av. Barão de Maruim, 120",
      neighborhood: "Centro — Aracaju/SE",
      hours: "Seg a Sex: 05h às 23h\nSáb e Dom: 08h às 13h",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
      mapLink: "#",
      whatsapp: "5579999999999",
    },
    {
      id: 2,
      name: "UNIDADE ZONA SUL",
      address: "Av. Santos Dumont, 456",
      neighborhood: "Atalaia — Aracaju/SE",
      hours: "Seg a Sex: 05h às 23h\nSáb e Dom: 08h às 13h",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
      mapLink: "#",
      whatsapp: "5579999999998",
    },
  ],
  vivaImages: [
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?q=80&w=2072&auto=format&fit=crop"
  ],
  categories: ["TODOS", "TREINO", "NUTRIÇÃO", "SAÚDE", "MODALIDADES", "AVISOS"],
  posts: [
    {
      id: 1,
      category: "SAÚDE",
      title: "Cuidar do corpo hoje é investir em mais qualidade de vida amanhã.",
      date: "06 Out 2026",
      description: "Sua saúde é o seu maior patrimônio. Cuidar do corpo hoje é investir em mais qualidade de vida amanhã.",
      images: [
        "/src/conteudos/patrimonio.jpg", "/src/conteudos/patrimonio2.jpg"
      ],
      video: null,
      featured: true,
      type: "post"
    },
    {
      id: 2,
      category: "TODOS",
      title: "Você sabe quanto de proteína precisa consumir?",
      date: "06 Out 2026",
      description: "Entenda a importância da proteína para seus músculos e como calcular a quantidade ideal diária.",
      images: [
        "/src/conteudos/investimento.jpg", "/src/conteudos/investimento2.jpg"
      ],
      video: null,
      featured: false,
      type: "post"
    },
    {
      id: 3,
      category: "TODOS",
      title: "Confira nossos horários especiais neste feriado.",
      date: "06 Out 2026",
      description: "Devido ao feriado, nossas unidades funcionarão em horários diferenciados.",
      images: [
        "/src/conteudos/voceecapaz.jpg"
      ],
      video: null,
      featured: false,
      type: "aviso"
    },
    {
      id: 4,
      category: "TODOS",
      title: "Sextou com S de Superação! ",
      date: "06 Out 2026",
      description: "A semana foi intensa, mas você não desistiu e venceu. Cada suor derramado hoje é um passo a mais em direção ao corpo e à saúde que você deseja.",
      images: [
        "/src/conteudos/treinofeito.jpg"
      ],
      video: null,
      featured: false,
      type: "post"
    },
    {
      id: 5,
      category: "SAÚDE",
      title: "O fim de semana está chegando... sua evolução não pode parar!",
      date: "06 Out 2026",
      description: "Não deixe a preguiça vencer. Continue com seus treinos e alcance seus objetivos!",
      images: [
        "/src/conteudos/constancia.mp4"
      ],
      video: null,
      featured: false,
      type: "post"
    }
  ],
  news: [
    { id: 1, title: "Nova turma de Muay Thai", tag: "Novidade" },
    { id: 2, title: "Aulão Especial de Sábado", tag: "Evento" },
    { id: 3, title: "Manutenção da Piscina no final de semana", tag: "Aviso" },
    { id: 4, title: "Chegaram novos equipamentos na unidade Sul", tag: "Novidade" }
  ],
  professionals: [
    { id: 1, name: "Carlos Mendes", role: "Personal Trainer", specialty: "Musculação e Hipertrofia", image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop" },
    { id: 2, name: "Juliana Silva", role: "Instrutora", specialty: "Pilates e Mobilidade", image: "https://images.unsplash.com/photo-1583465575605-645e45a8df38?q=80&w=1974&auto=format&fit=crop" },
    { id: 3, name: "Rafael Costa", role: "Mestre", specialty: "Jiu-Jitsu e Muay Thai", image: "https://images.unsplash.com/photo-1592312040171-267aa90d4a52?q=80&w=1974&auto=format&fit=crop" },
    { id: 4, name: "Bruna Alves", role: "Nutricionista", specialty: "Nutrição Esportiva", image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1969&auto=format&fit=crop" },
  ],
};
