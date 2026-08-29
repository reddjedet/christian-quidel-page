<div align="center">

# 🚀 Christian Quidel — Data Science Portfolio & Technical Showcase

[![Astro](https://img.shields.io/badge/Astro-5.0-%23BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-%233178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-%2306B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.0-%23FF6384?style=flat-square&logo=chartdotjs&logoColor=white)](https://www.chartjs.org)
[![i18n](https://img.shields.io/badge/i18n-EN%20%7C%20ES-%232563EB?style=flat-square)](https://quidelchristian.com.ar)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**A high-performance personal portfolio, technical case study hub, and microblogging platform built with a Global-First architecture for international Data Science and MLOps recruitment.**

[Explore Live Demo](https://quidelchristian.com.ar) • [Versión en Español](https://quidelchristian.com.ar/es) • [Connect on LinkedIn](https://linkedin.com/in/quidelchristian) • [Follow on X](https://x.com/CDanqui)

</div>

---

## 📌 Overview

This repository contains the complete source code for my personal portfolio and engineering showcase. Designed to bridge **clinical diagnostic rigor** (from a prior hospital healthcare background in ICU and Neonatology) with **production-ready Machine Learning and MLOps engineering**, the platform emphasizes:

1. **⚡ Sub-Second Static Performance:** Built with Astro static-site generation (SSG) with zero runtime JS by default (100/100 Lighthouse performance).
2. **🌐 First-Class Bilingual Internationalization:** Native bilingual routing (`/` for English, `/es` for Spanish) with smooth switcher and SEO OpenGraph tags.
3. **📊 Interactive MLOps Benchmarks:** Empirical Chart.js visualization comparing sub-millisecond ONNX in-memory inference (< 0.8ms) against traditional Python REST API latency.
4. **📄 Single-Page ATS-Optimized Resume:** Integrated, printable single-page resume ready for PDF export.

---

## 🏛️ System Architecture

```mermaid
graph TD
    subgraph Client ["Client Browser"]
        User["User / Hiring Manager"]
    end

    subgraph CDN ["Cloudflare Global Edge Network"]
        DNS["DNS Proxy & HTTPS SSL"]
        Edge["Edge Caching & Pages Hosting"]
    end

    subgraph AstroEngine ["Astro 5 Static Build System (SSG)"]
        Router["i18n Routing Engine"]
        EN_Pages["English Pages (Default)<br/>/ • /proyectos • /tweets • /cv"]
        ES_Pages["Spanish Pages (/es)<br/>/es • /es/proyectos • /es/tweets • /es/cv"]
        DataSources["Data & Dictionaries<br/>projects.ts • tweets.ts • ui.ts"]
    end

    subgraph ShowcaseProjects ["Highlighted Case Studies"]
        FinanceAI["FinanceAI MLOps Pipeline<br/>Scikit-Learn TF-IDF ➔ ONNX (Java 17) ➔ OCI Compute"]
        EDAEngine["Predictive Analytics Engine<br/>IQR Outlier Detection ➔ StandardScaler ➔ Multi-model CV"]
    end

    User --> DNS
    DNS --> Edge
    Edge --> Router
    Router --> EN_Pages
    Router --> ES_Pages
    DataSources --> EN_Pages
    DataSources --> ES_Pages
    EN_Pages -.-> ShowcaseProjects
    ES_Pages -.-> ShowcaseProjects
```

---

## 🛠️ Tech Stack & Design System

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Astro 5](https://astro.build/) | Static Site Generation (SSG), Islands Architecture, zero JS baseline |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type-safe data models for projects, metrics, and bilingual dictionaries |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | *Office Corporate* design tokens (Slate `#0f172a`, Blue `#2563eb`, Inter font) |
| **Data Viz** | [Chart.js](https://www.chartjs.org/) | Responsive canvas for empirical inference latency comparisons |
| **Deployment** | [Cloudflare Pages](https://pages.cloudflare.com/) | Global CDN deployment with automated CI/CD and edge SSL |

---

## 🌟 Featured Engineering Case Studies

### 1. [FinanceAI](https://github.com/reddjedet) — Intelligent Financial Diagnostic & NLP Platform
* **Domain:** Natural Language Processing (NLP) & Cross-Language MLOps.
* **Core Achievement:** Classified 240,000+ financial transaction records across 10 classes with **99.0% test accuracy** using Scikit-Learn TF-IDF vectorization.
* **MLOps Highlight:** Serialized pipelines to **ONNX format (`skl2onnx`)** for native in-memory execution inside a **Java 17 / Spring Boot** backend, reducing latency to **< 0.8ms** (a 98.2% latency reduction compared to external Python REST APIs).
* **Cloud Architecture:** Orchestrated 4 microservices (Vue 3, Spring Boot, MySQL, Jupyter) using Docker Compose on Oracle Cloud Infrastructure (OCI Compute).

### 2. [Predictive EDA Engine](https://github.com/reddjedet) — Tabular Preprocessing & Anomaly Detection
* **Domain:** Exploratory Data Analysis (EDA) & Supervised Learning.
* **Core Achievement:** Modular preprocessing pipeline with IQR outlier detection, automated feature scaling, and multi-model benchmark evaluation (Logistic Regression vs. Decision Trees with 5-Fold Cross Validation).

---

## 💻 Local Development

### Prerequisites
* **Node.js** `>= 18.14.1`
* **npm** `>= 9.0.0`

### Quick Start
```bash
# 1. Clone the repository
git clone https://github.com/reddjedet/mi-pagina.git
cd mi-pagina

# 2. Install dependencies
npm install

# 3. Start local development server (http://localhost:4321)
npm run dev

# 4. Compile static assets for production (dist/)
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🛡️ Security & Privacy Perimeter

* **Zero Hardcoded Credentials:** No API keys, database connection strings, or cloud tokens are tracked in git.
* **Privacy Blinded:** No government IDs (DNI/CUIT), street addresses, or private filesystem paths exist in the codebase.
* **Strict Git Hygiene:** Production builds (`dist/`), dependencies (`node_modules/`), and environment files (`.env*`) are excluded.

---

## 👨‍💻 Author & Contact

**Christian Quidel**  
*Data Scientist Trainee • MLOps • Python & Cloud Architecture*

* 📍 **Location:** Buenos Aires, Argentina (Open to Remote | UTC-3)
* 💼 **LinkedIn:** [linkedin.com/in/quidelchristian](https://linkedin.com/in/quidelchristian)
* 🐙 **GitHub:** [@reddjedet](https://github.com/reddjedet)
* 🐦 **X (Twitter):** [@CDanqui](https://x.com/CDanqui)
* 📧 **Email:** [quidelchristian@gmail.com](mailto:quidelchristian@gmail.com)

---

## 📄 License
This project is open-source and licensed under the [MIT License](LICENSE).
