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
  // SilentPay — Privacy-First Payroll on Midnight
  // =============================================
  {
    name: "SilentPay",
    tagline: "Privacy-first payroll using zero-knowledge proofs on Midnight Network.",
    overview:
      "Built SilentPay, a privacy-preserving payroll platform on the Midnight Network that lets employers run payroll and employees claim payments without publishing individual salary amounts on-chain. Zero-knowledge proofs verify each claim while keeping allocations confidential.",
    description:
      "SilentPay solves the problem of transparent blockchains exposing sensitive salary data. Employers create payrolls with private allocations, and employees prove eligibility through ZK circuits without revealing amounts. The platform includes a full dashboard for managing employees, creating payrolls, and tracking claims.",
    tech: ["Next.js", "TypeScript", "Midnight Network", "ZK Proofs", "Prisma", "PostgreSQL"],
    link: "https://silent-pay-sage.vercel.app/",
    github: "https://github.com/janvibuilds/SilentPay",
    images: {
      hero: "/projects/silentpay/hero.png",
      gallery: [
        {
          src: "/projects/silentpay/dashboard.png",
          alt: "SilentPay employer dashboard",
          caption: "Manage employees and create payrolls with private allocations.",
        },
        {
          src: "/projects/silentpay/claim.png",
          alt: "SilentPay employee claim",
          caption: "Employees claim payments using ZK proofs without revealing amounts.",
        },
      ],
    },
    features: [
      "Privacy-preserving payroll with private allocations",
      "Zero-knowledge claim flow proving eligibility without revealing amounts",
      "Lace wallet integration on Midnight networks",
      "Full dashboard for employers and employees",
      "Multiple network support (Preview, Preprod, local devnet)",
      "42 automated tests across contract, validation, and E2E",
    ],
    technicalDetails: [
      {
        title: "ZK Circuit Architecture",
        description:
          "Built Compact smart contracts with createPayroll and claimPayment circuits. The claimPayment circuit proves an eligible allocation exists, marks it claimed, and increments the public counter without disclosing the amount.",
      },
      {
        title: "Privacy Model",
        description:
          "Separated public ledger state from private witness data. Public: payroll ID, employer address, month, employee count. Private: allocation amounts, eligibility details. Observers can see payroll metadata but never individual salaries.",
      },
    ],
    challenges: [
      {
        problem: "Keeping salary amounts private while maintaining verifiability",
        solution:
          "Designed a ZK circuit that proves an allocation exists and is positive without revealing the value. Used Compact compiler to deploy on Midnight Network with formal verification.",
      },
      {
        problem: "Integrating ZK proofs with a user-friendly dashboard",
        solution:
          "Built a Next.js frontend that abstracts ZK complexity behind familiar payroll UI. Employees click 'Claim' and the proof is generated automatically in the background.",
      },
    ],
    metrics: {
      tests: "42",
      networks: "3",
    },
  },

  // =============================================
  // TrustLance — Decentralized Freelance Escrow
  // =============================================
  {
    name: "TrustLance",
    tagline: "Stellar-based freelance escrow platform with smart contracts.",
    overview:
      "Built TrustLance, a decentralized freelance marketplace using Stellar blockchain and Soroban smart contracts for secure, automated escrow payments. Features multi-wallet support, escrow lifecycle management, and a modern dashboard for tracking contracts and transactions.",
    description:
      "TrustLance connects clients and freelancers through a trustless escrow system. Funds are locked in Soroban smart contracts until work is completed, with automated release on milestone approval. The platform supports 8+ wallet providers and provides a complete dashboard for managing escrow contracts, transactions, and wallet settings.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Stellar SDK", "Soroban", "Zustand"],
    link: "https://trust-lance-liart.vercel.app",
    github: "https://github.com/janvibuilds/TrustLance",
    images: {
      hero: "/projects/trustlance/hero.png",
      gallery: [
        {
          src: "/projects/trustlance/dashboard.png",
          alt: "TrustLance dashboard",
          caption: "Overview of escrow contracts and transaction history.",
        },
        {
          src: "/projects/trustlance/escrow.png",
          alt: "TrustLance escrow creation",
          caption: "Create and fund escrow contracts with Stellar wallets.",
        },
      ],
    },
    features: [
      "Multi-wallet connect (Freighter, xBull, Albedo, LOBSTR, Rabet, Hana, Hot Wallet, Klever)",
      "Escrow lifecycle: create, fund, release, refund",
      "Stellar payment flow for direct XLM transfers",
      "Dashboard for escrow contracts, transactions, and wallet settings",
      "Persistent local dashboard records via Zustand stores",
      "Soroban smart contract for escrow logic",
    ],
    technicalDetails: [
      {
        title: "Smart Contract Escrow",
        description:
          "Built Soroban Rust contracts for escrow lifecycle management. Funds are locked until conditions are met, with automatic release or refund based on client/freelancer actions.",
      },
      {
        title: "Multi-Wallet Integration",
        description:
          "Integrated Stellar Wallets Kit and Freighter API to support 8+ wallet providers. Users can connect their preferred wallet and sign transactions seamlessly.",
      },
    ],
    challenges: [
      {
        problem: "Supporting multiple wallet providers with consistent UX",
        solution:
          "Used Stellar Wallets Kit as a unified abstraction layer. Each wallet adapter handles provider-specific quirks while exposing a consistent interface to the dashboard.",
      },
      {
        problem: "Ensuring escrow funds are safely locked until conditions are met",
        solution:
          "Implemented Soroban smart contracts with time-locked release conditions. Funds are provably locked on-chain and can only be released or refunded through contract calls.",
      },
    ],
  },

  // =============================================
  // Boutique-To-Box — AI Fashion Ecosystem
  // =============================================
  {
    name: "Boutique-To-Box",
    tagline: "AI-powered fashion design platform with 3D preview and global production.",
    overview:
      "Built Boutique-To-Box, an end-to-end fashion ecosystem using GPT-4 for style analysis, StyleGAN2 for fabric patterns, and Three.js for real-time 3D preview. Integrates with Printful API for on-demand manufacturing across 18 global print hubs.",
    description:
      "Boutique-To-Box transforms the fashion design pipeline from concept to production. Designers describe their vision using natural language, GPT-4 analyzes the style, StyleGAN2 generates fabric patterns, and Three.js provides a 3D body-aware preview. Approved designs are sent directly to Printful for manufacturing and global delivery.",
    tech: ["React", "Three.js", "Node.js", "Express", "GPT-4", "StyleGAN2", "Appwrite"],
    link: "https://boutique-to-box-fawn.vercel.app/",
    github: "https://github.com/janvibuilds/Boutique-To-Box",
    images: {
      hero: "/projects/boutique/hero.png",
      gallery: [
        {
          src: "/projects/boutique/designer.png",
          alt: "Boutique-To-Box design interface",
          caption: "AI-powered style analysis and pattern generation.",
        },
        {
          src: "/projects/boutique/3d-preview.png",
          alt: "3D preview with Three.js",
          caption: "Real-time 3D body-aware design preview.",
        },
      ],
    },
    features: [
      "GPT-4 powered style analysis from natural language descriptions",
      "StyleGAN2 fabric pattern generation",
      "Three.js real-time 3D body-aware preview",
      "Printful API integration for on-demand manufacturing",
      "Mapbox store locator for global print hubs",
      "Google Trends integration for trend forecasting",
    ],
    technicalDetails: [
      {
        title: "AI Pipeline Architecture",
        description:
          "Built a multi-stage AI pipeline: GPT-4 for style understanding, StyleGAN2 for pattern generation, and Three.js for 3D visualization. Each stage feeds into the next, transforming text descriptions into producible designs.",
      },
      {
        title: "Manufacturing Integration",
        description:
          "Integrated Printful API for automated order routing to 18 global print hubs. Combined with Mapbox for geo-distributed production, achieving 18-hour global delivery times.",
      },
    ],
    challenges: [
      {
        problem: "Generating production-ready fashion designs from text descriptions",
        solution:
          "Fine-tuned GPT-4 prompts for fashion-specific terminology and combined with StyleGAN2 for pattern generation. Added human-in-the-loop review before manufacturing.",
      },
      {
        problem: "Real-time 3D preview with body-aware fitting",
        solution:
          "Used Three.js with parametric body models to render designs on different body types. Implemented WebSocket-based live updates for instant preview as designers iterate.",
      },
    ],
    metrics: {
      printHubs: "18",
      designAccuracy: "92%",
    },
  },

  // =============================================
  // ReelsTube — Full-Stack Video Platform
  // =============================================
  {
    name: "ReelsTube",
    tagline: "Full-stack TikTok/Instagram Reels clone with cloud video storage.",
    overview:
      "Built ReelsTube, a full-stack video sharing platform with infinite scroll, auto-play, like/comment system, and Cloudinary-powered video delivery. Features JWT authentication, follow system, and mobile-first responsive design.",
    description:
      "ReelsTube replicates the core TikTok/Instagram Reels experience with a modern MERN stack architecture. Videos are uploaded to Cloudinary for global CDN delivery with automatic optimization. The platform supports infinite scroll with auto-play, real-time engagement metrics, and a complete social featureset including follow/unfollow and user search.",
    tech: ["React 19", "Express.js", "MongoDB", "Cloudinary", "TypeScript", "TanStack Query"],
    link: "https://reels-platform.vercel.app",
    github: "https://github.com/janvibuilds/ReelsTube",
    images: {
      hero: "/projects/reelstube/hero.png",
      gallery: [
        {
          src: "/projects/reelstube/feed.png",
          alt: "ReelsTube infinite scroll feed",
          caption: "TikTok-style infinite scroll with auto-play videos.",
        },
        {
          src: "/projects/reelstube/upload.png",
          alt: "ReelsTube video upload",
          caption: "Upload videos to Cloudinary with progress tracking.",
        },
      ],
    },
    features: [
      "Infinite scroll feed with TikTok-style navigation",
      "Auto-play videos when in viewport",
      "Cloudinary CDN for global video delivery",
      "JWT authentication with refresh tokens",
      "Follow/unfollow system and user search",
      "Like, comment, and nested reply system",
    ],
    technicalDetails: [
      {
        title: "Cloudinary Integration",
        description:
          "Integrated Cloudinary for video storage with automatic optimization, thumbnail generation, and global CDN delivery. Videos are compressed and format-converted for optimal streaming.",
      },
      {
        title: "Infinite Scroll Architecture",
        description:
          "Built pagination-based infinite scroll using Intersection Observer API. Combined with TanStack Query for caching and background refetching to ensure smooth scrolling performance.",
      },
    ],
    challenges: [
      {
        problem: "Smooth video auto-play during infinite scroll",
        solution:
          "Used Intersection Observer to detect viewport entry/exit. Videos auto-play when 75% visible and pause when leaving, with preloading for adjacent videos in the feed.",
      },
      {
        problem: "Scalable video upload and processing",
        solution:
          "Offloaded video processing to Cloudinary's infrastructure. Upload goes directly to Cloudinary via signed URLs, bypassing the server for large file transfers.",
      },
    ],
  },

  // =============================================
  // Inventory-Billing-Management-System
  // =============================================
  {
    name: "InventoryHub",
    tagline: "Full-stack inventory and billing management system for businesses.",
    overview:
      "Built InventoryHub, a comprehensive inventory and billing management system with product management, contact management, transaction processing, and real-time analytics dashboards. Features role-based access control, Docker deployment, and modern Shadcn UI.",
    description:
      "InventoryHub provides a complete solution for small to medium businesses to manage products, customers, vendors, transactions, and generate insightful reports. Built with Next.js 15 and Node.js, it features real-time inventory updates, secure JWT authentication with RBAC, and Docker support for easy deployment.",
    tech: ["Next.js 15", "Node.js", "Express", "MongoDB", "TypeScript", "Shadcn UI", "Docker"],
    link: "https://inventory-billing-management-system-seven.vercel.app/",
    github: "https://github.com/janvibuilds/Inventory-Billing-Management-System",
    images: {
      hero: "/projects/inventory/hero.png",
      gallery: [
        {
          src: "/projects/inventory/dashboard.png",
          alt: "InventoryHub dashboard",
          caption: "Real-time analytics with sales trends and inventory status.",
        },
        {
          src: "/projects/inventory/products.png",
          alt: "Product management",
          caption: "Complete CRUD operations for inventory items with stock tracking.",
        },
      ],
    },
    features: [
      "JWT authentication with role-based access control",
      "Product management with stock tracking",
      "Unified contact management for customers and vendors",
      "Transaction processing with automatic inventory updates",
      "Real-time dashboards with Recharts visualizations",
      "Docker and Docker Compose deployment support",
    ],
    technicalDetails: [
      {
        title: "RBAC Architecture",
        description:
          "Implemented role-based access control with JWT tokens. Middleware validates permissions at the API route level, ensuring users can only access resources within their assigned roles.",
      },
      {
        title: "Real-Time Inventory Sync",
        description:
          "Built transaction processing that automatically updates inventory counts on purchase/sale events. Used MongoDB transactions to ensure atomicity across inventory and financial records.",
      },
    ],
    challenges: [
      {
        problem: "Maintaining accurate inventory counts during concurrent transactions",
        solution:
          "Used MongoDB multi-document transactions to atomically update inventory and create transaction records. Implemented optimistic locking with version fields for conflict detection.",
      },
      {
        problem: "Generating real-time analytics without performance degradation",
        solution:
          "Built aggregated MongoDB queries with proper indexing. Dashboard data is computed on-demand with 30-second caching to balance freshness and performance.",
      },
    ],
  },

  // =============================================
  // MultiPDF-Chat-App — AI PDF Document Chat
  // =============================================
  {
    name: "MultiPDF Chat",
    tagline: "AI-powered chat with multiple PDF documents using RAG pipeline.",
    overview:
      "Built MultiPDF Chat App, a Python application that allows users to chat with multiple PDF documents using natural language. Uses LangChain for document processing and OpenAI for context-aware response generation through a RAG pipeline.",
    description:
      "MultiPDF Chat App processes multiple PDF documents, chunks and embeds their content, and enables natural language querying through a Retrieval-Augmented Generation pipeline. Users upload PDFs and ask questions in a Streamlit chat interface, receiving accurate answers based on the document content.",
    tech: ["Python", "LangChain", "OpenAI", "Streamlit", "FAISS"],
    github: "https://github.com/janvibuilds/MultiPDF-Chat-App",
    images: {
      hero: "/projects/multipdf/hero.png",
      gallery: [
        {
          src: "/projects/multipdf/chat.png",
          alt: "MultiPDF chat interface",
          caption: "Natural language querying across multiple PDF documents.",
        },
        {
          src: "/projects/multipdf/upload.png",
          alt: "PDF upload interface",
          caption: "Upload multiple PDFs for simultaneous analysis.",
        },
      ],
    },
    features: [
      "Upload and process multiple PDF documents simultaneously",
      "Natural language querying across all loaded PDFs",
      "RAG pipeline for accurate, context-aware responses",
      "Streamlit-based interactive chat interface",
      "FAISS vector store for fast similarity search",
      "Automatic text chunking and embedding generation",
    ],
    technicalDetails: [
      {
        title: "RAG Pipeline",
        description:
          "Built a Retrieval-Augmented Generation pipeline using LangChain for document processing, OpenAI embeddings for vector representations, and FAISS for efficient similarity search across document chunks.",
      },
      {
        title: "Document Processing",
        description:
          "Implemented PDF text extraction with automatic chunking into semantically meaningful segments. Each chunk is embedded and indexed for retrieval, with overlap to maintain context across boundaries.",
      },
    ],
    challenges: [
      {
        problem: "Maintaining context across document boundaries",
        solution:
          "Implemented overlapping chunk boundaries with configurable overlap size. Combined with conversational history to maintain context across multiple retrieval rounds.",
      },
      {
        problem: "Efficient similarity search across large document collections",
        solution:
          "Used FAISS for vector indexing with GPU acceleration support. Implemented incremental index updates when new documents are added without rebuilding the entire index.",
      },
    ],
  },

  // =============================================
  // Smart-Hostel — Room Allocation System
  // =============================================
  {
    name: "Smart Hostel",
    tagline: "Next.js room allocation system with smart matching algorithm.",
    overview:
      "Built Smart Hostel, a responsive single-page application for managing hostel room inventory and automating room allocation. Features a smart allocation algorithm, dark/light mode, localStorage persistence, and toast notifications.",
    description:
      "Smart Hostel automates the room allocation process with a preference-based matching algorithm. Students specify capacity, AC, and washroom preferences, and the system finds the optimal room. All data persists in localStorage with no backend required, making it a lightweight solution for hostel management.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Lucide React"],
    link: "https://smart-hostel-room-allocation-system-mu.vercel.app",
    github: "https://github.com/janvibuilds/Smart-Hostel-Room-Allocation-System",
    images: {
      hero: "/projects/smarthostel/hero.png",
      gallery: [
        {
          src: "/projects/smarthostel/rooms.png",
          alt: "Smart Hostel room grid",
          caption: "Responsive card grid with room status indicators.",
        },
        {
          src: "/projects/smarthostel/allocate.png",
          alt: "Room allocation form",
          caption: "Smart allocation algorithm finds the best matching room.",
        },
      ],
    },
    features: [
      "Smart room allocation algorithm with preference matching",
      "Add, view, search, and filter rooms",
      "Allocate and deallocate rooms with one click",
      "Dark/light theme with system preference detection",
      "localStorage persistence (no backend required)",
      "Toast notifications for all actions",
    ],
    technicalDetails: [
      {
        title: "Allocation Algorithm",
        description:
          "Built a preference-based matching algorithm that filters rooms by AC/washroom requirements, sorts by capacity (ascending), and returns the smallest suitable room. Supports optional student assignment after allocation.",
      },
      {
        title: "Client-Side Architecture",
        description:
          "Pure frontend application using Next.js 16 with TypeScript. All state management uses React hooks with localStorage for persistence. No backend dependencies make deployment trivial.",
      },
    ],
    challenges: [
      {
        problem: "Finding optimal room matches based on multiple preferences",
        solution:
          "Implemented a multi-criteria filtering and sorting algorithm. Rooms are filtered by hard requirements (AC, washroom), then sorted by capacity to find the best fit with minimal waste.",
      },
      {
        problem: "Maintaining state consistency without a backend",
        solution:
          "Used localStorage with JSON serialization for persistence. Implemented validation on read to handle corrupted data and provide fallback defaults.",
      },
    ],
  },

  // =============================================
  // FeedbackHub — Production-Grade Feedback App
  // =============================================
  {
    name: "FeedbackHub",
    tagline: "Production-grade feedback collection app with Prisma and MongoDB.",
    overview:
      "Built FeedbackHub, a modern feedback collector with Next.js App Router, Prisma ORM, and MongoDB. Features server-rendered feedback list, comprehensive form validation, SEO optimization, and health check endpoints.",
    description:
      "FeedbackHub is a production-ready feedback collection application. Users submit feedback through a validated form, and submissions are displayed on a server-rendered page. Built with Next.js 14 App Router, it leverages Server Components for performance and includes comprehensive error handling, accessibility, and SEO features.",
    tech: ["Next.js 14", "Prisma", "MongoDB", "TypeScript", "Tailwind CSS"],
    link: "https://feedback-collector-gold.vercel.app/",
    github: "https://github.com/janvibuilds/Feedback-Collector",
    images: {
      hero: "/projects/feedback/hero.png",
      gallery: [
        {
          src: "/projects/feedback/form.png",
          alt: "FeedbackHub submission form",
          caption: "Validated feedback form with client and server-side checks.",
        },
        {
          src: "/projects/feedback/list.png",
          alt: "Feedback list page",
          caption: "Server-rendered feedback list with real-time updates.",
        },
      ],
    },
    features: [
      "Next.js App Router with Server and Client Components",
      "Prisma ORM with MongoDB for type-safe database access",
      "Comprehensive form validation (client + server)",
      "SEO optimization with metadata, sitemap, and robots.txt",
      "Health check endpoint for monitoring",
      "WCAG-compliant accessible components",
    ],
    technicalDetails: [
      {
        title: "Server Component Architecture",
        description:
          "Leveraged Next.js 14 App Router with Server Components for the feedback list page. Data fetching happens on the server, reducing client-side JavaScript and improving initial load performance.",
      },
      {
        title: "Prisma + MongoDB Integration",
        description:
          "Used Prisma ORM with MongoDB provider for type-safe database operations. Schema defines the Feedback model with auto-generated IDs and timestamps.",
      },
    ],
    challenges: [
      {
        problem: "Balancing server rendering with interactive form handling",
        solution:
          "Used Server Components for the read-only feedback list and Client Components for the interactive submission form. This optimizes both performance and user experience.",
      },
      {
        problem: "Ensuring production readiness with proper error handling",
        solution:
          "Implemented error boundaries, health check endpoints, input validation/sanitization, and comprehensive logging. Added SEO metadata and accessibility attributes throughout.",
      },
    ],
  },

  // =============================================
  // CRM-Ticket-System — Customer Support Platform
  // =============================================
  {
    name: "CRM Ticket System",
    tagline: "Full-stack customer support ticketing system with MERN stack.",
    overview:
      "Built CRM Ticket System, an open-source customer support platform for tracking and resolving client issues. Features ticket creation, assignment, status tracking, and user authentication with the MERN stack.",
    description:
      "CRM Ticket System streamlines customer support workflows with ticket creation, assignment to agents, priority and status tracking, and resolution management. Built with MongoDB, Express.js, React, and Node.js, it provides a complete solution for managing customer support operations.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    github: "https://github.com/janvibuilds/CRM-TICKET-SYSTEM",
    images: {
      hero: "/projects/crm/hero.png",
      gallery: [
        {
          src: "/projects/crm/tickets.png",
          alt: "CRM ticket list",
          caption: "View and manage all support tickets with filtering.",
        },
        {
          src: "/projects/crm/detail.png",
          alt: "Ticket detail view",
          caption: "Track ticket status, assignments, and resolution history.",
        },
      ],
    },
    features: [
      "Ticket creation with priority and category assignment",
      "Agent assignment and status tracking",
      "User authentication with JWT",
      "Ticket filtering and search",
      "Resolution tracking and history",
      "RESTful API architecture",
    ],
    technicalDetails: [
      {
        title: "MERN Stack Architecture",
        description:
          "Built with MongoDB for flexible ticket storage, Express.js for RESTful API routes, React for the dashboard UI, and Node.js for the server runtime. Each layer is independently deployable.",
      },
      {
        title: "Authentication & Authorization",
        description:
          "Implemented JWT-based authentication with role-based access. Agents can update ticket status, while administrators can assign tickets and manage users.",
      },
    ],
    challenges: [
      {
        problem: "Managing ticket lifecycle across multiple states",
        solution:
          "Implemented a state machine for ticket status transitions (open → in-progress → resolved → closed). Each transition is validated and logged for audit purposes.",
      },
      {
        problem: "Efficient ticket filtering and search at scale",
        solution:
          "Added MongoDB compound indexes on status, priority, and assignee fields. Implemented text search on ticket title and description for full-text queries.",
      },
    ],
  },

  // =============================================
  // AI-Tool-Explorer — Curated AI Tools Directory
  // =============================================
  {
    name: "AI Tool Explorer",
    tagline: "MERN stack SaaS app for discovering and comparing AI tools.",
    overview:
      "Built AI Tool Explorer, a curated directory of AI tools with secure user authentication, filtering, and comparison features. Built with the MERN stack and featuring Recharts for analytics visualizations.",
    description:
      "AI Tool Explorer helps users discover and compare AI tools across categories. Features include user authentication, tool filtering by category and features, favorites management, and an analytics dashboard showing tool usage trends. Built as a SaaS application with the MERN stack.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Recharts", "Axios"],
    github: "https://github.com/janvibuilds/AI-Tool-Explorer",
    images: {
      hero: "/projects/aitools/hero.png",
      gallery: [
        {
          src: "/projects/aitools/directory.png",
          alt: "AI Tool Explorer directory",
          caption: "Browse and filter curated AI tools by category.",
        },
        {
          src: "/projects/aitools/analytics.png",
          alt: "Analytics dashboard",
          caption: "Recharts-powered analytics showing tool trends and usage.",
        },
      ],
    },
    features: [
      "Curated AI tool directory with category filtering",
      "User authentication and favorites management",
      "Tool comparison and side-by-side views",
      "Analytics dashboard with Recharts visualizations",
      "Responsive design for mobile and desktop",
      "RESTful API with pagination and search",
    ],
    technicalDetails: [
      {
        title: "SaaS Architecture",
        description:
          "Built as a multi-tenant SaaS with user accounts, favorites, and personalized recommendations. MongoDB stores user preferences and tool metadata with proper indexing for fast queries.",
      },
      {
        title: "Analytics Pipeline",
        description:
          "Implemented Recharts-based visualizations showing tool popularity, category distribution, and usage trends. Data is aggregated server-side and cached for dashboard performance.",
      },
    ],
    challenges: [
      {
        problem: "Providing fast search and filtering across hundreds of tools",
        solution:
          "Implemented MongoDB text indexes for full-text search and compound indexes for category/feature filtering. Added result caching with 5-minute TTL for popular queries.",
      },
      {
        problem: "Building a scalable SaaS with user-specific data",
        solution:
          "Used MongoDB embedded documents for user favorites and settings. Each user's data is isolated through query-level filtering with proper indexing for performance.",
      },
    ],
  },
];
