export interface LocalizedProject {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  date: string;
  description: string;
  highlights: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured?: boolean;
}

export const projectsData: Record<'en' | 'es', LocalizedProject[]> = {
  en: [
    {
      id: 'financeai',
      title: 'FinanceAI – Intelligent Financial Diagnostic & NLP Platform',
      subtitle: 'NLP transaction categorization pipeline & sub-millisecond ONNX cloud inference',
      role: 'Lead Data Scientist & Deployment Lead',
      date: 'August 2026',
      description: 'End-to-end Machine Learning platform engineered during the Oracle Next Education (ONE) Hackathon. Features an NLP transaction classification pipeline, a multivariate financial health diagnostic model, and multi-container cloud deployment.',
      highlights: [
        'Categorized 240,000+ financial records across 10 classes using Scikit-learn (TF-IDF + Linear Classifier) with 99.0% test accuracy.',
        'Serialized Scikit-learn pipelines to ONNX (skl2onnx) for native in-memory execution inside a Java 17 / Spring Boot backend (< 0.8ms latency).',
        'Enforced strict data leakage prevention via temporal splits and optimized hyperparameters using GridSearchCV across 36 candidates (3-fold CV).',
        'Orchestrated 4 microservices (Vue 3, Spring Boot, MySQL, Jupyter) using Docker Compose and deployed to Oracle Cloud Infrastructure (OCI Compute).'
      ],
      technologies: ['Python', 'Scikit-Learn', 'NLP (TF-IDF)', 'ONNX', 'Java Spring Boot', 'Docker Compose', 'MySQL', 'Oracle Cloud (OCI)'],
      metrics: [
        { label: 'Test Accuracy', value: '99.0%' },
        { label: 'Transactions', value: '240k+' },
        { label: 'Inference Latency', value: '< 0.8 ms' },
        { label: 'Microservices', value: '4 Containers' }
      ],
      githubUrl: 'https://github.com/reddjedet',
      featured: true
    },
    {
      id: 'predictive-eda-engine',
      title: 'Predictive Modeling & Tabular Data Analytics Engine',
      subtitle: 'Automated exploratory data analysis, tabular preprocessing, and predictive evaluation pipeline',
      role: 'Independent Data Practitioner',
      date: '2026',
      description: 'Modular experimentation environment for large tabular datasets. Implements IQR outlier filtering, continuous feature transformation, and rigorous trade-off analysis across classification and regression algorithms.',
      highlights: [
        'Multidimensional exploratory data analysis and statistical visualization using Pandas, Matplotlib, and Seaborn.',
        'Automated preprocessing pipelines: missing value imputation, StandardScaler normalization, and One-Hot Encoding.',
        'Evaluated baseline models (Logistic Regression, Decision Trees) using ROC-AUC curves, Confusion Matrices, and weighted F1-Scores.',
        'Clean, reproducible technical documentation adhering to PEP 8 code standards.'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'MySQL', 'Jupyter Lab'],
      metrics: [
        { label: 'Cross Validation', value: '5-Fold CV' },
        { label: 'Outlier Detection', value: 'IQR Filter' },
        { label: 'Evaluation Metrics', value: 'ROC-AUC / F1' }
      ],
      githubUrl: 'https://github.com/reddjedet',
      featured: true
    }
  ],
  es: [
    {
      id: 'financeai',
      title: 'FinanceAI – Intelligent Financial Diagnostic & NLP Platform',
      subtitle: 'Plataforma de clasificación de transacciones por PLN e inferencia nativa ONNX en la nube',
      role: 'Lead Data Scientist & Deployment Lead',
      date: 'Agosto 2026',
      description: 'Solución integral desarrollada durante el Hackathon de Oracle Next Education (ONE). Incluye un pipeline de Procesamiento de Lenguaje Natural (PLN) para categorizar transacciones bancarias, un modelo de evaluación de salud financiera y despliegue multi-contenedor en la nube.',
      highlights: [
        'Clasificación de 240.000+ transacciones financieras en 10 categorías mediante Scikit-learn (TF-IDF + Clasificador Lineal) con 99.0% de exactitud en test.',
        'Serialización de modelos a formato ONNX (skl2onnx) para inferencia nativa en Java 17 / Spring Boot con latencia menor a 0.8ms.',
        'Prevención estricta de fuga de datos (data leakage) con validación temporal y búsqueda de hiperparámetros con GridSearchCV (36 configuraciones).',
        'Orquestación de 4 microservicios (Vue 3, Spring Boot, MySQL, Jupyter) con Docker Compose en Oracle Cloud Infrastructure (OCI).'
      ],
      technologies: ['Python', 'Scikit-Learn', 'NLP (TF-IDF)', 'ONNX', 'Java Spring Boot', 'Docker Compose', 'MySQL', 'Oracle Cloud (OCI)'],
      metrics: [
        { label: 'Exactitud en Test', value: '99.0%' },
        { label: 'Transacciones', value: '240k+' },
        { label: 'Latencia Inferencia', value: '< 0.8 ms' },
        { label: 'Microservicios', value: '4 Contenedores' }
      ],
      githubUrl: 'https://github.com/reddjedet',
      featured: true
    },
    {
      id: 'predictive-eda-engine',
      title: 'Predictive Modeling & Tabular Data Analytics Engine',
      subtitle: 'Pipeline de análisis exploratorio automatizado, limpieza tabular y modelado predictivo',
      role: 'Independent Data Practitioner',
      date: '2026',
      description: 'Entorno estructurado de experimentación analítica para datasets tabulares de alto volumen. Implementa algoritmos de detección de valores atípicos (IQR), transformaciones de variables continuas y comparación rigurosa de algoritmos de clasificación y regresión.',
      highlights: [
        'Análisis exploratorio multidimensional y visualización estadística con Pandas, Matplotlib y Seaborn.',
        'Pipelines automatizados de preprocesamiento: imputación de valores faltantes, normalización StandardScaler y One-Hot Encoding.',
        'Evaluación de modelos base (Regresión Logística, Árboles de Decisión) mediante curvas ROC-AUC, matrices de confusión y F1-Score ponderado.',
        'Documentación técnica reproducible siguiendo estándares de código limpio PEP 8.'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'MySQL', 'Jupyter Lab'],
      metrics: [
        { label: 'Validación Cruzada', value: '5-Fold CV' },
        { label: 'Detección Outliers', value: 'IQR Filter' },
        { label: 'Métricas de Evaluación', value: 'ROC-AUC / F1' }
      ],
      githubUrl: 'https://github.com/reddjedet',
      featured: true
    }
  ]
};
