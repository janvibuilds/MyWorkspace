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
];
