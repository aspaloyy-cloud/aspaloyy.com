export const translations = {
  ru: {
    nav: {
      about: "~/about",
      projects: "~/projects",
      stack: "~/stack",
      contact: "~/contact",
    },
    hero: {
      status: "Бишкек, Кыргызстан • Доступен для инженерных задач",
      title: "Асман Рахманов",
      subtitle: "Software & Distributed Systems Architect",
      description: "Проектирую отказоустойчивые бэкенд-системы, разрабатываю распределенные сервисы на Go и Rust. Фокус на низкой латентности, сетевых протоколах и чистой архитектуре без лишнего усложнения.",
      github: "GitHub (@aspaloyy)",
      telegram: "Telegram (@aspaloyy)",
      email: "Email",
    },
    terminal: {
      title: "aspaloyy@system ~ bash",
      helpHint: "введите 'help' или кликните по командам выше",
    },
    projects: {
      title: "// Избранные проекты",
      badge: "Open Source",
      source: "GitHub ↗",
      items: [
        {
          name: "Distributed Raft Broker",
          tag: "Go",
          desc: "Высокопроизводительный распределенный брокер логов с реализацией консенсуса Raft. Спроектирован для стабильной репликации данных и минимальных задержек при сетевых сбоях.",
          tech: "Protobuf • gRPC • Raft"
        },
        {
          name: "Concurrency Sandbox",
          tag: "Rust",
          desc: "Набор утилит и бенчмарков для исследования моделей многопоточности, безопасного управления памятью и конкурентного выполнения задач в Tokio.",
          tech: "Tokio • Async • Benchmarks"
        }
      ]
    },
    stack: {
      title: "// Технологический стек",
      languages: { title: "// Языки", items: ["• Go (Golang)", "• Rust", "• TypeScript", "• Python"] },
      architecture: { title: "// Архитектура", items: ["• Distributed Systems", "• gRPC / Protobuf", "• Raft Consensus", "• TCP/IP & Networking"] },
      storage: { title: "// Хранилища", items: ["• PostgreSQL", "• Redis", "• ClickHouse", "• RocksDB"] },
      infrastructure: { title: "// Инфраструктура", items: ["• Linux / Kernel", "• Docker & Containers", "• CI/CD Pipelines", "• Nginx / Envoy"] }
    },
    principles: {
      title: "// Инженерные принципы",
      p1: { title: "01 / Simplicity", desc: "Простой код проще поддерживать, тестировать и масштабировать. Избегаем избыточных абстракций." },
      p2: { title: "02 / Resilience", desc: "Отказоустойчивость закладывается в архитектуру сети и обработку ошибок на уровне кода." },
      p3: { title: "03 / Precision", desc: "Опираемся на бенчмарки, метрики и профилирование, а не на догадки при оптимизации производительности." }
    },
    contact: {
      title: "Обсудим проект или задачу",
      desc: "Открыт к интересным инженерным задачам, разработке распределенных систем и бэкенд-архитектуре.",
      tgBtn: "Связаться в Telegram",
      emailBtn: "Отправить Email"
    },
    footer: {
      rights: "© 2026 Асман Рахманов (aspaloyy). All rights reserved.",
      location: "Бишкек, КГ",
      note: "Clean engineering, modular architecture"
    }
  },
  en: {
    nav: {
      about: "~/about",
      projects: "~/projects",
      stack: "~/stack",
      contact: "~/contact",
    },
    hero: {
      status: "Bishkek, Kyrgyzstan • Available for engineering roles",
      title: "Asman Rakhmanov",
      subtitle: "Software & Distributed Systems Architect",
      description: "Designing fault-tolerant backend systems, building distributed services in Go and Rust. Passionate about low-level optimization, network protocols, and clean architecture without unnecessary complexity.",
      github: "GitHub (@aspaloyy)",
      telegram: "Telegram (@aspaloyy)",
      email: "Email",
    },
    terminal: {
      title: "aspaloyy@system ~ bash",
      helpHint: "type 'help' or click commands below",
    },
    projects: {
      title: "// Featured Projects",
      badge: "Open Source",
      source: "GitHub ↗",
      items: [
        {
          name: "Distributed Raft Broker",
          tag: "Go",
          desc: "High-performance distributed log broker implementing the Raft consensus algorithm. Designed for reliable data replication and minimal latency during network partitions.",
          tech: "Protobuf • gRPC • Raft"
        },
        {
          name: "Concurrency Sandbox",
          tag: "Rust",
          desc: "Set of utilities and benchmarks for exploring concurrency models, safe memory management, and concurrent task execution in Tokio.",
          tech: "Tokio • Async • Benchmarks"
        }
      ]
    },
    stack: {
      title: "// Tech Stack",
      languages: { title: "// Languages", items: ["• Go (Golang)", "• Rust", "• TypeScript", "• Python"] },
      architecture: { title: "// Architecture", items: ["• Distributed Systems", "• gRPC / Protobuf", "• Raft Consensus", "• TCP/IP & Networking"] },
      storage: { title: "// Storage", items: ["• PostgreSQL", "• Redis", "• ClickHouse", "• RocksDB"] },
      infrastructure: { title: "// Infrastructure", items: ["• Linux / Kernel", "• Docker & Containers", "• CI/CD Pipelines", "• Nginx / Envoy"] }
    },
    principles: {
      title: "// Engineering Principles",
      p1: { title: "01 / Simplicity", desc: "Simple code is easier to maintain, test, and scale. Avoiding redundant abstractions." },
      p2: { title: "02 / Resilience", desc: "Fault tolerance is designed into network architecture and error handling, not patched later." },
      p3: { title: "03 / Precision", desc: "Relying on benchmarks, metrics, and profiling rather than guesswork during performance tuning." }
    },
    contact: {
      title: "Let's discuss a project or challenge",
      desc: "Open to interesting engineering challenges, distributed systems development, and backend architecture.",
      tgBtn: "Contact via Telegram",
      emailBtn: "Send Email"
    },
    footer: {
      rights: "© 2026 Asman Rakhmanov (aspaloyy). All rights reserved.",
      location: "Bishkek, KG",
      note: "Clean engineering, modular architecture"
    }
  }
};