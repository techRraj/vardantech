const blogPosts = [
  {
    id: 1,
    title: 'The Rise of AI Agents in 2026',
    slug: 'rise-of-ai-agents-2026',
    excerpt: 'Explore how autonomous agents are reshaping industries.',
    date: 'Mar 15, 2026',
    readTime: '5 min',
    category: 'AI',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: { name: 'Mrs. MINI CHAUHAN', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    content: `
## What Are AI Agents?

AI agents are autonomous software entities that perceive their environment, make decisions, and act to achieve specific goals. Unlike traditional chatbots that follow scripted flows, agents can reason, plan, and adapt in real time.

## Key Trends Driving Adoption

- **Multi-agent systems** – multiple agents collaborating on complex tasks.
- **Tool use** – agents that can browse the web, query APIs, or execute code.
- **Memory & personalization** – long-term memory that learns user preferences.

## Business Impact

Companies deploying AI agents are seeing a 40-60% reduction in manual process time. In customer service, agents handle tier-1 queries with near-human accuracy, freeing teams for high-value work.

## Getting Started

If you're considering AI agents, start with a narrow, well-defined use case – like automating data entry or lead qualification – before scaling to more complex workflows.
    `
  },
  {
    id: 2,
    title: 'Building Scalable Chatbots with RAG',
    slug: 'scalable-chatbots-rag',
    excerpt: 'A technical deep dive into retrieval-augmented generation.',
    date: 'Mar 10, 2026',
    readTime: '8 min',
    category: 'AI',
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: { name: 'Ranjana karma', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    content: `
## The Problem with Pure LLMs

Large language models alone often hallucinate details or lack domain-specific knowledge. Retrieval-Augmented Generation (RAG) solves this by grounding responses in your own data.

## How RAG Works

1. **Indexing** – documents are chunked and stored in a vector database.
2. **Retrieval** – at query time, the most relevant chunks are fetched.
3. **Generation** – the LLM crafts an answer using the retrieved context.

## Implementation Tips

- Use hybrid search (semantic + keyword) for better retrieval.
- Cache frequently asked queries to reduce latency and cost.
- Monitor feedback loops to continuously improve the knowledge base.

## Our Stack

We typically use Pinecone or Weaviate with OpenAI embeddings, orchestrated via LangChain.
    `
  },
  // ... add similar detailed content for other posts (ids 3-6)
  // For brevity, I'll include one more example, then you can expand.
  {
    id: 3,
    title: 'Why React is Still King in 2026',
    slug: 'react-still-king-2026',
    excerpt: 'Performance, ecosystem, and developer experience.',
    date: 'Mar 5, 2026',
    readTime: '6 min',
    category: 'Web',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: { name: 'Arjun Nair', avatar: 'https://randomuser.me/api/portraits/men/46.jpg' },
    content: `
## The Landscape

Frameworks come and go, but React remains dominant. Why? Its ecosystem, stability, and continuous innovation keep it ahead.

## Key Advantages

- **Server Components** – now stable, offering faster initial loads.
- **React Server Functions** – blurring the line between server and client.
- **Massive Talent Pool** – easy to hire and onboard.

## Real-World Performance

Our e-commerce platform built with Next.js (App Router) achieved a 90+ Lighthouse score out of the box, with zero config.
    `
  },
  {
    id: 4,
    title: 'SEO Strategies for SaaS Companies',
    slug: 'seo-saas-companies',
    excerpt: 'Drive organic growth with these proven tactics.',
    date: 'Feb 28, 2026',
    readTime: '7 min',
    category: 'Marketing',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: { name: 'Sneha Kapoor', avatar: 'https://randomuser.me/api/portraits/women/63.jpg' },
    content: `
## Why SaaS SEO is Different

SaaS companies need to target both high-intent transactional keywords and long-tail informational queries to build a sustainable funnel.

## Proven Tactics

- Build programmatic landing pages for every feature.
- Create comparison posts (Your Tool vs. Competitor).
- Optimize for "best" and "alternative" keywords.

## Results

We helped GrowthX climb to the top 3 for 15 high-value keywords in six months.
    `
  },
  {
    id: 5,
    title: 'Mobile App Development Trends',
    slug: 'mobile-trends-2026',
    excerpt: 'What to expect in iOS and Android in 2026.',
    date: 'Feb 20, 2026',
    readTime: '4 min',
    category: 'Mobile',
    image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: { name: 'Rahul Desai', avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
    content: `
## Cross-Platform Maturation

Flutter and React Native continue to eat into native development. In 2026, expect 80% of all apps to be cross-platform.

## AI on Device

On-device ML (MediaPipe, Core ML) enables real-time photo editing, voice assistants, and predictive text without cloud dependency.

## Super Apps

We're seeing the rise of super apps in Western markets, consolidating services like messaging, payments, and shopping into one interface.
    `
  },
  {
    id: 6,
    title: 'Vector Databases Explained',
    slug: 'vector-databases-explained',
    excerpt: 'Pinecone, Weaviate, and the future of search.',
    date: 'Feb 15, 2026',
    readTime: '9 min',
    category: 'AI',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: { name: 'Mr. Ravindra Singh Rajawat', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    content: `
## Why Vector DBs?

Traditional databases fail at semantic search because they rely on exact word matches. Vector databases store embeddings – mathematical representations of meaning.

## Choosing the Right One

- **Pinecone** – fully managed, great for prototypes.
- **Weaviate** – open-source, with GraphQL support.
- **Qdrant** – Rust-based, extremely fast for large datasets.

## Use Cases

- Recommendation engines
- RAG chatbots
- Fraud detection (anomaly detection)
    `
  }
];

export default blogPosts;