export interface Course {
  id: string;
  title: string;
  institution: string;
  platform: string;
  status: 'in_progress' | 'completed';
  statusDate: string;
  description: string;
  skills: string[];
}

export const coursesData: Record<'en' | 'es', Course[]> = {
  en: [
    {
      id: 'cybersecurity-google-coursera',
      title: 'Cybersecurity',
      institution: 'Google',
      platform: 'Google • Coursera',
      status: 'in_progress',
      statusDate: 'In Progress • 2026',
      description: 'Foundational security engineering and threat modeling: network defense protocols, security information and event management (SIEM), incident triage, and Python scripting for automated security operations and data integrity protection.',
      skills: ['Network Security', 'SIEM & Triage', 'Linux/Bash', 'Incident Response', 'Python Automation', 'Data Integrity']
    },
    {
      id: 'docker-codigofacilito',
      title: 'Curso Profesional de Docker',
      institution: 'CódigoFacilito',
      platform: 'CódigoFacilito',
      status: 'in_progress',
      statusDate: 'In Progress • 2026',
      description: 'Hands-on containerization of Machine Learning pipelines and microservices: optimized multi-stage Dockerfile architecture, multi-container Docker Compose orchestration, volume persistence, and isolated network configuration.',
      skills: ['Docker', 'Docker Compose', 'Multi-stage Builds', 'Isolated Networks', 'Volume Persistence', 'CI/CD Containerization']
    }
  ],
  es: [
    {
      id: 'cybersecurity-google-coursera',
      title: 'Ciberseguridad',
      institution: 'Google',
      platform: 'Google • Coursera',
      status: 'in_progress',
      statusDate: 'En Curso • 2026',
      description: 'Ingeniería de seguridad y análisis de amenazas: protocolos de defensa de redes, gestión de eventos e información de seguridad (SIEM), triaje de incidentes y scripting en Python para automatización de seguridad e integridad de datos.',
      skills: ['Seguridad en Redes', 'SIEM & Triaje', 'Linux/Bash', 'Respuesta a Incidentes', 'Automatización en Python', 'Integridad de Datos']
    },
    {
      id: 'docker-codigofacilito',
      title: 'Curso Profesional de Docker',
      institution: 'CódigoFacilito',
      platform: 'CódigoFacilito',
      status: 'in_progress',
      statusDate: 'En Curso • 2026',
      description: 'Contenedorización avanzada para pipelines de Machine Learning y microservicios: construcción de Dockerfiles multi-stage optimizados, orquestación multi-contenedor con Docker Compose, persistencia de volúmenes y redes aisladas.',
      skills: ['Docker', 'Docker Compose', 'Builds Multi-stage', 'Redes Aisladas', 'Persistencia de Volúmenes', 'CI/CD Contenedores']
    }
  ]
};
