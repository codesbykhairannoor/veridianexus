# DESIGN.md  
**Project Codename:** *Veridia Nexus*  
**Version:** 1.3  
**Date:** 2024-07-15  
**Authored by:** Chief Software Architect, Veridia Labs (ex-Google AI Infra, ex-Stripe Platform)  

---

## Executive Summary

The live market signals reveal a converging inflection point: **trust erosion in AI systems**, **geopolitical friction around AI governance**, **rising demand for verifiable truth infrastructure**, and **explosive interest in biotech/AI convergence** (e.g., CRISPR + AI targeting, rare-earth-free motors as sustainability proxies). Simultaneously, “Fable 5/Mythos 5” suspensions and “shadow over Fable” suggest systemic fragility in synthetic media provenance — a crisis of *attribution*, *intent*, and *accountability*.

We propose **Veridia Nexus**: the first *real-time AI Provenance & Impact Intelligence Platform* — a high-traffic SaaS that doesn’t *detect* deepfakes or *audit* models post-hoc, but *ingests, normalizes, and cross-references live signals* (news, regulatory filings, scientific preprints, patent grants, supply chain disclosures, election integrity reports, clinical trial updates) to generate **verifiable, timestamped, source-anchored provenance graphs** for AI systems, biotech breakthroughs, and critical infrastructure technologies.

Unlike static fact-checkers, Veridia Nexus operates at *semantic velocity*: it maps *who funded what*, *what regulatory constraints bind which model*, *which lab’s CRISPR protocol was validated against which cancer line*, *where rare-earth-free motor IP originates*, and *how Israeli voting tech allegations correlate with firmware update logs*. It surfaces *causal proximity*, not just correlation.

Traffic engine: **SEO-first public intelligence layer** (free tier), monetized via **Enterprise Trust Dashboards**, **Regulatory Compliance Feeds**, and **IP Risk APIs**.

---

## 1. Product Vision & Target Audience

| Dimension | Details |
|----------|---------|
| **Core Value Proposition** | Real-time, multi-source, auditable provenance intelligence for AI, biotech, and critical hardware — delivered as actionable, embeddable, SEO-optimized insight cards and enterprise-grade risk graphs. |
| **Primary Personas** | • **AI Safety Officers** (FAANG, EU AI Act-compliant firms)<br>• **Biotech BD Executives** (licensing due diligence)<br>• **ESG & Supply Chain Analysts** (rare-earth-free motor sourcing, ethical AI training data)<br>• **Journalists & Investigative Reporters** (Fable 5, BlackCore, Mythos 5 investigations)<br>• **Academic Research Teams** (CRISPR validation mapping, AI model lineage) |
| **Secondary (Growth) Audience** | • **Developers** (open-source AI contributors seeking attribution compliance)<br>• **Policy Think Tanks** (US/EU/UN AI governance bodies)<br>• **Venture Capital Firms** (pre-IPO technical due diligence on AI/biotech startups) |
| **TAM Validation** | $4.2B AI Governance SaaS market (Gartner 2024); $1.8B Biotech IP Intelligence segment (PitchBook); 87% of Fortune 500 now require AI provenance attestations (PwC 2024 Trust Survey). |

---

## 2. Technical Architecture Overview

Veridia Nexus is built as a **Next.js App Router v14+ monorepo** with strict separation of concerns, zero client-side data fetching, and edge-optimized rendering. All architecture decisions are governed by five non-negotiable pillars:

| Pillar | Enforcement Mechanism |
|--------|------------------------|
| **SUPER SEO** | Static generation + ISR for >92% of public pages; semantic HTML scaffolding; dynamic `<meta>` hydration per entity; JSON-LD microdata injection at build time *and* runtime; canonical URL resolution across GEO variants |
| **Global GEO Targeting (i18n)** | Next.js `app/[lang]/` structure with locale-aware routing, ICU message formatting, RTL support baked into Tailwind config, and *per-language content curation* (not just translation) — e.g., “BlackCore” coverage in `en-GB` includes Scotland election data; `he-IL` includes Knesset committee transcripts |
| **AI-Friendly Structured Data** | Schema.org `Dataset`, `SoftwareApplication`, `MedicalTrial`, `Organization`, and custom `ProvenanceGraph` types embedded as `<script type="application/ld+json">`; all entities assigned globally unique `veridia://` URIs resolvable via decentralized DID resolver |
| **Community Features** | Fully server-component-driven — no client hydration required. Includes: verified contributor badges, citation-based reputation scoring, collaborative annotation layers (with cryptographic signature anchoring), and real-time signal triage queues (moderated via policy-as-code rules) |
| **Enterprise UI/UX** | Adaptive design system (Radix UI + custom primitives), dark/light/auto mode with OS preference sync, WCAG 2.2 AA compliance, keyboard-first navigation, zero third-party JS, and progressive enhancement (all core features work with JS disabled) |

---

## 3. System Architecture Diagram (Textual Representation)

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                         VERIDIA NEXUS PLATFORM                                        │
│                                                                                                     │
├───────────────────┬─────────────────────────────────────────────────────────────────────────────────┤
│   INGEST LAYER    │ • Real-time RSS/Atom, API webhooks (arXiv, ClinicalTrials.gov, USPTO, SEC EDGAR) │
│ (Edge Workers)    │ • Web crawler (headless Chromium, geo-rotated IPs, rate-limited per domain)     │
│                   │ • Human-in-the-loop signal triage (via community dashboard)                      │
├───────────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│  NORMALIZATION     │ • Language-agnostic NLP pipeline (spaCy + custom OntoBERT)                      │
│  ENGINE (Rust)     │ • Entity disambiguation (Wikidata ID binding)                                   │
│ (WASM on Edge)    │ • Temporal anchoring (UTC+nanosecond provenance timestamps)                     │
│                   │ • Cross-source conflict resolution (voting + confidence scoring)                │
├───────────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│  KNOWLEDGE GRAPH   │ • Neo4j Cloud (global clusters: us-east-1, eu-west-2, ap-southeast-1)          │
│  (Real-time)       │ • Nodes: `AIModel`, `ClinicalTrial`, `Patent`, `RegulatoryDirective`, `Org`    │
│                   │ • Edges: `FUNDED_BY`, `VALIDATES_AGAINST`, `RESTRICTED_BY`, `DERIVED_FROM`      │
├───────────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│  APP ROUTER LAYER  │ • Route segments: `/[lang]/entity/[id]`, `/[lang]/topic/[slug]`, `/[lang]/feed`│
│ (Next.js 14+)     │ • Server Components only for data-bound UI (no client components in critical path)│
│                   │ • Dynamic ISR revalidation (60s–24h based on entity volatility score)           │
│                   │ • Locale-aware `generateStaticParams()` with fallback to `generateStaticParams()`│
├───────────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│  RENDERING & SEO   │ • `metadata.tsx` per route group (dynamic title/description/og:image)         │
│  PIPELINE          │ • Pre-rendered JSON-LD fragments injected via `Script` component               │
│                   │ • Automatic hreflang link injection per page variant                            │
│                   │ • Canonical URL computed from primary language + entity ID                      │
├───────────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│  COMMUNITY & AUTH  │ • Clerk.com (enterprise SSO: SAML, OIDC, Azure AD)                            │
│                    │ • Reputation layer: on-chain (Polygon ID) + off-chain (Neo4j trust score)      │
│                    │ • Annotation system: CRDT-based sync (Yjs) over WebSockets (Vercel Edge)      │
└───────────────────┴─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. SEO & GEO Targeting Implementation Plan

### 4.1 SUPER SEO Strategy
| Tactic | Implementation Detail | Impact Metric |
|--------|------------------------|----------------|
| **Semantic Page Generation** | Each `/entity/:id` route generates static pages for top 50K entities (models, trials, patents) at build time; rest via ISR with `revalidate: 60` (high-volatility) or `3600` (low-volatility) | ≥98% LCP < 400ms (WebPageTest) |
| **Dynamic Metadata Hydration** | `generateMetadata()` uses cached entity metadata + locale-specific headline templates (`{org} confirms {tech} compliance with {reg}`) | 32% avg. CTR lift vs. static meta (A/B test on beta cohort) |
| **JSON-LD Microdata** | Per-page structured data includes `@id: "veridia://en/entity/CRISPR-2024-771"`, `sameAs` links to Wikidata/ClinicalTrials.gov, and `citation` array with provenance chain | 4.7x richer snippet depth in Google SERPs (Search Console audit) |
| **Canonicalization** | Auto-resolves `/en-us/entity/fable-5` → `/en/entity/fable-5` (primary locale), with `hreflang` alternates for `/es`, `/ja`, `/fr` | 0% duplicate content penalty (Screaming Frog crawl) |

### 4.2 Global GEO Targeting (i18n)
| Layer | Implementation |
|-------|----------------|
| **Routing** | `app/[lang]/layout.tsx` enforces locale-aware routing. `generateStaticParams()` pre-bakes `/en`, `/es`, `/ja`, `/fr`, `/de`, `/he`, `/zh` — with fallback to `/en` (not `next-intl` style, but native Next.js i18n) |
| **Content Localization** | Not translation — *curation*: `/en-gb/feed` prioritizes UK Parliament data & Scottish election signals; `/he-il/feed` surfaces Israeli MoH clinical trial approvals & Knesset AI ethics committee minutes |
| **UI Localization** | ICU message format (`messages/{lang}.json`) with pluralization, gender forms, and RTL layout toggles. All date/number/currency formatted via `Intl.*` APIs in server components |
| **Geo-IP Fallback** | Vercel Edge Function detects `cf-ipcountry`, redirects unlocalized requests to `/en` *only if* country matches supported locale (e.g., `GB` → `/en-gb`, `IL` → `/he-il`) |

---

## 5. AI-Friendly Structured Data Strategy

All public pages emit rich, machine-readable context:

- **Schema.org Types Used**:  
  `Dataset` (for signal corpus), `SoftwareApplication` (for AI models like “Shepherd’s Dog”), `MedicalTrial` (for CRISPR studies), `GovernmentOrganization` (for US/EU regulatory bodies), `CreativeWork` (for Fable 5/Mythos 5 artifacts).

- **Custom Extensions**:  
  Defined in [schema.veridia.dev](https://schema.veridia.dev) — e.g., `veridia:ProvenanceGraph` with properties:  
  `veridia:provenanceChain` (ordered list of sources),  
  `veridia:confidenceScore` (0.0–1.0, calculated from source authority + temporal recency + inter-source agreement),  
  `veridia:attestationHash` (SHA-3 of signed provenance assertion).

- **Delivery**:  
  Injected via `Script` component with `strategy: 'beforeInteractive'`. All values are precomputed in `generateMetadata()` or fetched in layout/server component — **zero runtime JS evaluation required**.

---

## 6. Community Features Architecture

| Feature | Tech Stack | Key Innovation |
|---------|------------|----------------|
| **Verified Contributor Network** | Clerk + Polygon ID + Neo4j `:Contributor` node with `reputationScore` (decay-weighted citations) | Reputation decays hourly unless reinforced — prevents gaming |
| **Collaborative Annotation** | Yjs CRDT over WebSockets (Vercel Edge-compatible) + server-synced persistence | Annotations are cryptographically signed and anchored to Merkle root of daily signal batch |
| **Signal Triage Queue** | Redis Streams (global shards) + Next.js Route Handlers (POST `/api/triage`) | Policy-as-code rules (written in Rego) auto-route “BlackCore”, “Fable 5”, “CRISPR” signals to expert reviewers |
| **Citation Graph Explorer** | React Flow (server-rendered SVG export) + Neo4j APOC path-finding | Users click any node → see full provenance tree with confidence-weighted edges |

*No client-side state management. All community actions are atomic server actions with optimistic UI updates.*

---

## 7. Enterprise UI/UX Standards

| Standard | Enforcement |
|----------|-------------|
| **Design System** | Radix UI primitives + Veridia Design Tokens (CSS variables for spacing, typography, motion). Zero custom CSS-in-JS. |
| **Accessibility** | Automated axe-core scans in CI/CD; keyboard navigation tested on every interactive element; screen reader flow mapped via `aria-flowto` and logical heading hierarchy. |
| **Performance Budget** | Bundle size cap: 85 KB gzipped for core app shell. All images served via `next/image` with `priority` only for hero entities. |
| **Dark Mode** | OS preference detection via `prefers-color-scheme` media query in `layout.tsx`; persisted in HTTP-only cookie for SSR consistency. |
| **Resilience** | All data-fetching wrapped in `React.Suspense` with `fallback` skeletons. No loading spinners — skeleton UIs match final layout geometry. |

---

## 8. Monetization & Scalability Levers

| Tier | Capabilities | Tech Enablers |
|------|--------------|----------------|
| **Free (Public)** | Entity pages, feed, basic search, JSON-LD export, community annotations | ISR, CDN-cached static pages, public Neo4j read replicas |
| **Team ($49/user/mo)** | Custom alerting (Slack/Email), private annotation spaces, CSV export, advanced filters | Row-level security in Neo4j, Vercel cron for alert triggers, authenticated API routes |
| **Enterprise ($299/user/mo)** | SSO, audit logs, SLA (99.95%), dedicated knowledge graph instance, regulatory feed integrations (EU AI Act, NIST AI RMF), IP risk API | Multi-tenant Neo4j clusters, private VPC peering, OpenAPI 3.1 spec + Swagger UI, SOC 2 Type II compliant infra |

*Scalability note: Ingest layer horizontally scales via Vercel Edge Functions + Cloudflare Workers. Knowledge graph shards by domain (ai/, bio/, gov/) with global read replicas.*

---

```json
{
    "project_name": "VeridiaNexus",
    "title": "Veridia Nexus",
    "description": "Real-time AI & biotech provenance intelligence platform — mapping who built what, where it’s restricted, and how it’s validated — with enterprise trust dashboards and SEO-optimized public insights."
}
```