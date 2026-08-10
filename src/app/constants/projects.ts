// =============================================
// YOUR PROJECTS
// =============================================
// Each entry renders as a collapsible item on the home page and gets its own
// detail page at /projects/<slug>. Every field except name/tagline/description/
// tech/github is optional — delete what you don't need.
//
// Replace the placeholder images (/placeholder-image.png) with your own
// screenshots under public/projects/<your-project>/.

export const PROJECTS = [
  // =============================================
  // Orka — AI Financial Operating System
  // =============================================
  {
    name: "Orka",
    tagline: "AI Financial Operating System for freelancers and agencies.",
    overview:
      "Built and launched Orka, a production-ready AI Financial Operating System that unifies client management, proposals, invoicing, milestone tracking and Stellar-powered payments into a single platform. Grew the product to 100+ waitlist users and 150+ LaunchLlama upvotes while building an active community across X and Discord.",
    description:
      "Orka is a comprehensive financial management platform designed for freelancers and agencies. It combines AI-powered insights with blockchain technology to streamline the entire financial workflow — from client onboarding and proposal generation to invoicing and cross-border payments via Stellar.",
    tech: ["Next.js 16", "TypeScript", "Node.js", "Supabase", "Stellar"],
    link: "https://orkahq.vercel.app/",
    github: "https://github.com/Genesis-360/Orka",
    images: {
      hero: "/OrkaDashboard (1).png",
      gallery: [
        {
          src: "/OrkaDashboard (1).png",
          alt: "Orka dashboard showing financial overview",
          caption: "Main dashboard with AI-powered financial insights.",
        },
        {
          src: "/projects/orka/invoicing.png",
          alt: "Orka invoicing system",
          caption: "Streamlined invoicing with Stellar payment integration.",
        },
        {
          src: "/projects/orka/proposals.png",
          alt: "Orka proposal generator",
          caption: "AI-assisted proposal generation for client projects.",
        },
      ],
    },
    features: [
      "AI-powered financial insights and analytics",
      "Client management and proposal generation",
      "Invoicing with Stellar USDC payments",
      "Milestone tracking and project management",
      "Cross-border payment support via MoneyGram",
      "Real-time dashboard with financial metrics",
    ],
    technicalDetails: [
      {
        title: "Blockchain Integration",
        description:
          "Integrated Stellar blockchain for secure, low-cost cross-border payments. Used Soroban smart contracts for automated payment releases and MoneyGram API for seamless fiat cash-out.",
      },
      {
        title: "AI-Powered Features",
        description:
          "Leveraged AI for intelligent proposal generation, expense categorization, and financial forecasting. Built custom prompts for context-aware financial advice.",
      },
      {
        title: "Full-Stack Architecture",
        description:
          "Built with Next.js 16 for SSR/SSG, Supabase for authentication and real-time database, and Node.js backend services. Implemented Row Level Security for multi-tenant data isolation.",
      },
    ],
    challenges: [
      {
        problem: "Integrating blockchain payments with traditional financial workflows",
        solution:
          "Designed a hybrid payment system that abstracts blockchain complexity behind a familiar invoice UI. Users can pay in crypto or fiat without knowing the underlying technology.",
      },
      {
        problem: "Real-time financial data synchronization",
        solution:
          "Used Supabase Realtime subscriptions to push financial updates instantly across devices, ensuring users always see the latest balances and transaction statuses.",
      },
    ],
    metrics: {
      users: "100+",
      stars: "150+",
    },
  },

  // =============================================
  // LumenShake — Cross-Border Payroll Platform
  // =============================================
  {
    name: "LumenShake",
    tagline: "Cross-border payroll platform powered by Stellar and MoneyGram.",
    overview:
      "Built LumenShake, a full-stack cross-border payroll platform enabling employers to send USDC payroll globally with seamless local fiat cash-out through MoneyGram. Integrated Stellar wallet authentication, Soroban smart contracts, and secure transaction workflows for end-to-end payment infrastructure.",
    description:
      "LumenShake solves the problem of expensive, slow international payroll. Employers fund payroll in USDC on Stellar, and employees receive local currency through MoneyGram's cash-out network. The platform handles wallet management, exchange rate conversion, compliance checks, and transaction tracking.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stellar", "Soroban", "TypeScript"],
    github: "https://github.com/janvibuilds/LumenShake",
    images: {
      hero: "/projects/lumenshake/hero.png",
      gallery: [
        {
          src: "/projects/lumenshake/dashboard.png",
          alt: "LumenShake payroll dashboard",
          caption: "Overview of pending and completed payroll runs.",
        },
        {
          src: "/projects/lumenshake/transfer.png",
          alt: "Cross-border transfer flow",
          caption: "Initiating a USDC transfer with fiat cash-out.",
        },
      ],
    },
    features: [
      "Stellar wallet authentication and management",
      "Soroban smart contract-based payment escrow",
      "MoneyGram fiat cash-out integration",
      "Multi-currency payroll scheduling",
      "Real-time transaction tracking",
      "Compliance and audit logging",
    ],
    technicalDetails: [
      {
        title: "Smart Contract Escrow",
        description:
          "Built Soroban smart contracts that hold USDC in escrow until payroll conditions are met. Automatically releases funds on schedule or returns to employer wallet on failure.",
      },
      {
        title: "MoneyGram Integration",
        description:
          "Integrated MoneyGram's API for seamless fiat cash-out. Employees in 180+ countries can receive local currency directly to their bank or mobile wallet.",
      },
    ],
    challenges: [
      {
        problem: "Handling cross-border regulatory compliance",
        solution:
          "Implemented configurable compliance rules per corridor. Each transfer runs through KYC/AML checks before reaching the smart contract escrow.",
      },
      {
        problem: "Ensuring transaction finality on Stellar",
        solution:
          "Used Stellar's consensus protocol for 3-5 second settlement. Built transaction monitoring with automatic retry and rollback for failed settlements.",
      },
    ],
    metrics: {
      countries: "180+",
      settlementTime: "3-5s",
    },
  },

  // =============================================
  // VibeCode — AI-Powered Browser IDE
  // =============================================
  {
    name: "VibeCode",
    tagline: "AI-powered browser IDE for full-stack development.",
    overview:
      "Built VibeCode, an AI-powered browser IDE enabling developers to write, execute, and preview full-stack applications without local environment setup. Engineered a secure execution environment using Docker, Node.js, and Redis.",
    description:
      "VibeCode is a cloud-based development environment that brings the full power of a local IDE to the browser. With AI-assisted code generation, live preview, and terminal support, developers can build and deploy applications entirely from their browser.",
    tech: ["React.js", "Redux", "Node.js", "Docker", "Redis", "AWS"],
    link: "https://vibecode.dev",
    github: "https://github.com/janvibuilds/VibeCode",
    images: {
      hero: "/projects/vibecode/hero.png",
      gallery: [
        {
          src: "/projects/vibecode/editor.png",
          alt: "VibeCode code editor with Monaco",
          caption: "Full-featured Monaco editor with syntax highlighting.",
        },
        {
          src: "/projects/vibecode/preview.png",
          alt: "VibeCode live preview",
          caption: "Real-time preview of running applications.",
        },
        {
          src: "/projects/vibecode/terminal.png",
          alt: "VibeCode terminal",
          caption: "Integrated terminal for command execution.",
        },
      ],
    },
    features: [
      "Monaco Editor with full IntelliSense support",
      "AI-assisted code generation and completion",
      "Live preview of full-stack applications",
      "Integrated terminal with Docker containerization",
      "Secure code execution sandbox",
      "Support for multiple programming languages",
    ],
    technicalDetails: [
      {
        title: "Secure Execution Environment",
        description:
          "Built isolated Docker containers for each user session with resource limits and network restrictions. Containers are automatically cleaned up after inactivity to prevent resource exhaustion.",
      },
      {
        title: "Real-Time Collaboration",
        description:
          "Implemented WebSocket-based live synchronization using Redis Pub/Sub for message broadcasting. Supports multiple concurrent users editing the same project.",
      },
      {
        title: "AI Code Generation",
        description:
          "Integrated AI models for context-aware code suggestions, code completion, and natural language to code translation. Optimized response streaming for low-latency UX.",
      },
    ],
    challenges: [
      {
        problem: "Managing secure, isolated code execution at scale",
        solution:
          "Implemented Docker containerization with strict resource limits, network policies, and automatic cleanup. Each user gets an isolated environment that's destroyed after the session.",
      },
      {
        problem: "Low-latency code execution and preview",
        solution:
          "Used WebSockets for real-time communication and Redis for fast message queuing. Implemented optimistic UI updates while code executes in the background.",
      },
    ],
  },

  // =============================================
  // Predicare — AI-Powered Clinical Decision Support
  // =============================================
  {
    name: "Predicare",
    tagline: "AI-powered healthcare assistant for clinical decision-making.",
    overview:
      "Built Predicare, an AI-powered healthcare assistant that supports doctors with symptom analysis, heart disease risk prediction, and AI-assisted clinical decision-making through a unified platform.",
    description:
      "Predicare combines multiple machine learning models with an interactive web interface to provide real-time risk assessment and AI-assisted doctor consultations. It helps healthcare professionals make more informed clinical decisions.",
    tech: ["Python", "TensorFlow", "Flask", "React.js"],
    link: "https://predicare.ai",
    github: "https://github.com/janvibuilds/PredictaCare",
    images: {
      hero: "/projects/predicare/hero.png",
      gallery: [
        {
          src: "/projects/predicare/symptoms.png",
          alt: "Predicare symptom analysis",
          caption: "AI-powered symptom analysis interface.",
        },
        {
          src: "/projects/predicare/risk.png",
          alt: "Predicare risk prediction",
          caption: "Heart disease risk prediction dashboard.",
        },
      ],
    },
    features: [
      "AI-powered symptom analysis",
      "Heart disease risk prediction",
      "Real-time clinical decision support",
      "Interactive doctor consultation interface",
      "Multi-modal data integration",
      "Explainable ML model outputs",
    ],
    technicalDetails: [
      {
        title: "ML Model Integration",
        description:
          "Integrated multiple TensorFlow models for symptom analysis and risk prediction. Implemented model explainability using SHAP values to help doctors understand AI recommendations.",
      },
      {
        title: "Unified Backend Architecture",
        description:
          "Built a Flask backend that orchestrates multiple ML models, handles patient data processing, and serves predictions via REST APIs. Implemented caching for frequently accessed predictions.",
      },
    ],
    challenges: [
      {
        problem: "Making AI predictions interpretable for healthcare professionals",
        solution:
          "Implemented SHAP (SHAPley Additive exPlanations) to provide feature importance rankings for each prediction, helping doctors understand why the AI made a specific recommendation.",
      },
      {
        problem: "Handling sensitive patient data securely",
        solution:
          "Implemented end-to-end encryption for patient data, role-based access controls, and audit logging. Ensured HIPAA compliance in data handling and storage.",
      },
    ],
  },

  // =============================================
  // VoxDAO — Decentralized Governance Platform
  // =============================================
  {
    name: "VoxDAO",
    tagline: "On-chain governance and voting for decentralized communities.",
    overview:
      "Built VoxDAO, a decentralized governance platform enabling DAOs to create proposals, execute on-chain voting, and manage treasury allocations through smart contracts. Designed for communities that need transparent, tamper-proof decision-making.",
    description:
      "VoxDAO provides a complete governance toolkit for decentralized organizations. Members can create proposals, delegate voting power, and execute approved decisions automatically through smart contracts. The platform supports quadratic voting, time-locked execution, and multi-sig treasury management.",
    tech: ["Solidity", "Next.js", "Ethers.js", "IPFS", "The Graph"],
    github: "https://github.com/janvibuilds/VoxDAO",
    images: {
      hero: "/projects/voxdao/hero.png",
      gallery: [
        {
          src: "/projects/voxdao/proposals.png",
          alt: "VoxDAO proposal list",
          caption: "Active governance proposals with voting status.",
        },
        {
          src: "/projects/voxdao/voting.png",
          alt: "VoxDAO voting interface",
          caption: "On-chain voting with real-time results.",
        },
      ],
    },
    features: [
      "On-chain proposal creation and voting",
      "Quadratic voting support",
      "Time-locked execution for approved proposals",
      "Multi-sig treasury management",
      "Delegated voting power",
      "IPFS-backed proposal storage",
    ],
    technicalDetails: [
      {
        title: "Smart Contract Architecture",
        description:
          "Built modular Solidity contracts for proposal lifecycle, voting, and execution. Used OpenZeppelin libraries for access control and upgradeability via proxy patterns.",
      },
      {
        title: "Subgraph Indexing",
        description:
          "Deployed The Graph subgraphs to index on-chain governance events, enabling fast queries for proposal history, vote counts, and member participation metrics.",
      },
    ],
    challenges: [
      {
        problem: "Preventing vote manipulation and flash-loan attacks",
        solution:
          "Implemented snapshot-based voting power at proposal creation time. Combined with time-locked execution, this prevents flash-loan attacks and last-minute vote manipulation.",
      },
      {
        problem: "Gas-efficient on-chain voting",
        solution:
          "Used Merkle tree-based vote verification to batch multiple votes into single transactions. Reduced per-vote gas cost by 80% compared to individual on-chain writes.",
      },
    ],
    metrics: {
      proposalsCreated: "50+",
      totalVotes: "1,200+",
    },
  },

  // =============================================
  // SynthLab — Real-Time Collaboration Engine
  // =============================================
  {
    name: "SynthLab",
    tagline: "Real-time collaboration engine for creative teams.",
    overview:
      "Built SynthLab, a real-time collaboration platform for design and creative teams. Features live cursors, conflict-free replicated data types (CRDTs), and multiplayer editing with sub-50ms latency across global regions.",
    description:
      "SynthLab enables creative teams to work together in real time on design documents, wireframes, and content. Built on CRDTs for conflict-free collaboration, it supports offline editing with automatic sync, version history, and presence awareness.",
    tech: ["React.js", "WebSocket", "Yjs", "Redis", "Node.js", "PostgreSQL"],
    github: "https://github.com/janvibuilds/SynthLab",
    images: {
      hero: "/projects/synthlab/hero.png",
      gallery: [
        {
          src: "/projects/synthlab/collab.png",
          alt: "SynthLab multiplayer editing",
          caption: "Multiple cursors editing the same document live.",
        },
        {
          src: "/projects/synthlab/presence.png",
          alt: "SynthLab presence indicators",
          caption: "Team member presence and activity tracking.",
        },
      ],
    },
    features: [
      "Real-time multiplayer editing with CRDTs",
      "Live cursors and presence indicators",
      "Offline editing with automatic sync",
      "Version history and conflict resolution",
      "Sub-50ms latency across regions",
      "Role-based access and permissions",
    ],
    technicalDetails: [
      {
        title: "CRDT-Based Sync Engine",
        description:
          "Used Yjs CRDT library for conflict-free real-time collaboration. Each document is a CRDT that merges changes automatically, even after offline periods.",
      },
      {
        title: "WebSocket Infrastructure",
        description:
          "Built a Redis Pub/Sub-backed WebSocket集群 for horizontal scaling. Messages are routed to the correct room via Redis channels, supporting 1000+ concurrent users per document.",
      },
    ],
    challenges: [
      {
        problem: "Resolving conflicts during concurrent editing",
        solution:
          "Leveraged CRDTs for automatic conflict resolution. Implemented custom merge rules for design-specific operations like layer ordering and alignment constraints.",
      },
      {
        problem: "Maintaining low latency at global scale",
        solution:
          "Deployed WebSocket servers in 3 regions (US, EU, APAC) with Redis Pub/Sub for cross-region message routing. Clients connect to the nearest region automatically.",
      },
    ],
    metrics: {
      latency: "<50ms",
      concurrentUsers: "1,000+",
    },
  },

  // =============================================
  // ChainPulse — DeFi Analytics Dashboard
  // =============================================
  {
    name: "ChainPulse",
    tagline: "Real-time DeFi analytics and portfolio tracking dashboard.",
    overview:
      "Built ChainPulse, a DeFi analytics dashboard that aggregates protocol data, tracks portfolio performance, and provides yield optimization insights across multiple blockchain networks. Processes 10,000+ data points in real time.",
    description:
      "ChainPulse gives DeFi users a unified view of their multi-chain portfolio. It tracks TVL, APY, impermanent loss, and gas costs across Ethereum, Polygon, and Arbitrum. The dashboard includes yield farming calculators, protocol risk scores, and automated rebalancing suggestions.",
    tech: ["Next.js", "TypeScript", "D3.js", "Alchemy", "Moralis", "PostgreSQL"],
    github: "https://github.com/janvibuilds/ChainPulse",
    images: {
      hero: "/projects/chainpulse/hero.png",
      gallery: [
        {
          src: "/projects/chainpulse/portfolio.png",
          alt: "ChainPulse portfolio view",
          caption: "Multi-chain portfolio overview with real-time prices.",
        },
        {
          src: "/projects/chainpulse/yield.png",
          alt: "ChainPulse yield optimizer",
          caption: "Yield farming opportunities ranked by risk-adjusted return.",
        },
      ],
    },
    features: [
      "Multi-chain portfolio tracking",
      "Real-time TVL and APY monitoring",
      "Impermanent loss calculator",
      "Protocol risk scoring",
      "Yield optimization suggestions",
      "Gas cost tracker and optimizer",
    ],
    technicalDetails: [
      {
        title: "Multi-Chain Data Aggregation",
        description:
          "Built indexers for Ethereum, Polygon, and Arbitrum using Alchemy and Moralis APIs. Data is cached in PostgreSQL with 30-second refresh intervals for real-time accuracy.",
      },
      {
        title: "D3.js Visualizations",
        description:
          "Created interactive charts for portfolio performance, yield curves, and protocol comparisons using D3.js. Charts support zoom, pan, and time-range selection.",
      },
    ],
    challenges: [
      {
        problem: "Aggregating data from multiple chains with different APIs",
        solution:
          "Built a unified data layer that normalizes protocol data across chains. Each chain has a dedicated adapter that converts chain-specific formats into a common schema.",
      },
      {
        problem: "Real-time price updates without API rate limits",
        solution:
          "Implemented a tiered caching strategy: WebSocket feeds for major tokens, REST polling for others, and stale-while-revalidate for low-priority data. Reduced API calls by 90%.",
      },
    ],
    metrics: {
      dataPoints: "10,000+",
      chainsSupported: "3",
    },
  },

  // =============================================
  // NestBot — AI Customer Support Bot
  // =============================================
  {
    name: "NestBot",
    tagline: "AI-powered customer support bot with knowledge base integration.",
    overview:
      "Built NestBot, an AI customer support bot that integrates with existing knowledge bases to provide accurate, context-aware responses. Reduced support ticket volume by 40% for early adopters through intelligent query routing and automated resolution.",
    description:
      "NestBot connects to a company's documentation, FAQs, and past support tickets to build a contextual knowledge graph. When users ask questions, it retrieves the most relevant information and generates accurate responses, escalating to human agents only when necessary.",
    tech: ["Python", "FastAPI", "OpenAI", "Pinecone", "React.js", "Redis"],
    github: "https://github.com/janvibuilds/NestBot",
    images: {
      hero: "/projects/nestbot/hero.png",
      gallery: [
        {
          src: "/projects/nestbot/chat.png",
          alt: "NestBot chat interface",
          caption: "AI-powered chat with context-aware responses.",
        },
        {
          src: "/projects/nestbot/dashboard.png",
          alt: "NestBot admin dashboard",
          caption: "Analytics dashboard tracking resolution rates.",
        },
      ],
    },
    features: [
      "Knowledge base integration and indexing",
      "Context-aware response generation",
      "Automatic escalation to human agents",
      "Multi-language support",
      "Conversation analytics dashboard",
      "Custom training on company documentation",
    ],
    technicalDetails: [
      {
        title: "RAG Pipeline",
        description:
          "Built a Retrieval-Augmented Generation pipeline using Pinecone for vector search and OpenAI for response generation. Documents are chunked, embedded, and indexed for semantic retrieval.",
      },
      {
        title: "Smart Escalation",
        description:
          "Implemented confidence scoring on AI responses. Low-confidence answers automatically create support tickets and route to human agents with full conversation context.",
      },
    ],
    challenges: [
      {
        problem: "Generating accurate responses from diverse documentation formats",
        solution:
          "Built document parsers for PDF, Markdown, HTML, and Confluence exports. Each format is normalized into structured chunks before embedding, ensuring consistent retrieval quality.",
      },
      {
        problem: "Handling ambiguous or multi-intent queries",
        solution:
          "Implemented query decomposition to break complex questions into sub-queries. Each sub-query retrieves relevant context, and the LLM synthesizes a comprehensive answer.",
      },
    ],
    metrics: {
      ticketReduction: "40%",
      resolutionRate: "85%",
    },
  },
];
