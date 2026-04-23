/* UILA — i18n.js
   Lightweight client-side translations (EN / ES) with flag toggle. */

(function () {
  'use strict';

  const translations = {
    en: {
      'nav.services':   'Services',
      'nav.industries': 'Industries',
      'nav.software':   'Software',
      'nav.training':   'Training',
      'nav.contact':    'Contact',

      'hero.eyebrow':    'Technology partner · Since day one',
      'hero.titleLine1': 'Energy that',
      'hero.titleLine2': 'powers modern IT.',
      'hero.sub':        'UILA delivers consulting, cybersecurity, custom software, and training for organizations where uptime, trust, and security are non-negotiable.',
      'hero.ctaContact': 'Get in Touch',
      'hero.ctaServices':'Our Services',

      'services.kicker':           '01 — Services',
      'services.title':            'IT Consulting & Security',
      'services.lede':             'Strategic guidance and hands-on execution. From one-off audits to full security programs, we help teams meet standards and stay ahead of threats.',
      'services.audits.title':     'Security Audits',
      'services.audits.desc':      'Comprehensive reviews of your infrastructure, applications, identity, and data controls with prioritized remediation.',
      'services.pentest.title':    'Penetration Testing',
      'services.pentest.desc':     'External, internal, and application-layer testing performed by experienced offensive security practitioners.',
      'services.cloud.title':      'Public Cloud Best Practices',
      'services.cloud.desc':       'Architecture reviews and hardening for AWS, Azure, and GCP — landing zones, IAM, networking, and cost.',
      'services.framework.title':  'Framework Assessments',
      'services.framework.desc':   'Gap analyses and roadmaps aligned to NIST CSF, CIS Controls, and industry-specific frameworks.',
      'services.policy.title':     'Policies & Procedures',
      'services.policy.desc':      'Right-sized policy development and procedure design that works for your organization — not against it.',
      'services.compliance.title': 'SOC 2 · PCI · ISO 27001',
      'services.compliance.desc':  'Readiness, alignment, and audit support for the compliance frameworks your customers expect.',

      'industries.kicker':        '02 — Industries',
      'industries.title':         'Trusted across critical sectors',
      'industries.lede':          'Our clients operate where downtime, breaches, and bad data aren\'t an option.',
      'industries.govt.title':    'State Government Agencies',
      'industries.govt.desc':     'Modernizing public-sector IT with rigorous security and procurement-ready documentation.',
      'industries.astro.title':   'Astronomy',
      'industries.astro.desc':    'Data-intensive research infrastructure, observatory operations, and scientific computing.',
      'industries.utility.title': 'Public Utilities',
      'industries.utility.desc':  'OT/IT convergence, NERC-style controls, and resilient operations for essential services.',
      'industries.digital.title': 'Digital Asset Service Providers',
      'industries.digital.desc':  'Custody, exchange, and Web3 platforms — where security posture is your product.',

      'software.kicker':  '03 — Software',
      'software.title':   'Custom software, built for what\'s next.',
      'software.lede':    'When off-the-shelf falls short, we design and ship bespoke systems that match how your team actually works.',
      'software.bullet1': 'Tailored platforms and internal tools',
      'software.bullet2': 'Secure APIs and integrations',
      'software.bullet3': 'Cloud-native, containerized architectures',
      'software.bullet4': 'DevSecOps pipelines and automation',

      'training.kicker':      '04 — Education',
      'training.title':       'Training that pays off on Monday.',
      'training.lede':        'Practical programs for individuals and teams — from career-defining certifications to safe adoption of AI.',
      'training.certs.title': 'IT Certification Prep',
      'training.certs.desc':  'Bootcamps and coaching for CompTIA, Cisco, AWS, Azure, and Google Cloud credentials — aligned to real-world work.',
      'training.ai.title':    'Secure AI Usage & Adoption',
      'training.ai.desc':     'Hands-on workshops on responsible and secure AI — prompt hygiene, data governance, and enterprise guardrails.',

      'contact.kicker': '05 — Contact',
      'contact.title':  'Let\'s build something resilient.',
      'contact.lede':   'Whether you need a single assessment or a long-term partner, we\'d like to hear from you.',

      'footer.tag':    'Energy that powers modern IT.',
      'footer.rights': 'All rights reserved.',
    },
    es: {
      'nav.services':   'Servicios',
      'nav.industries': 'Industrias',
      'nav.software':   'Software',
      'nav.training':   'Formación',
      'nav.contact':    'Contacto',

      'hero.eyebrow':    'Aliado tecnológico · Desde el primer día',
      'hero.titleLine1': 'La energía que',
      'hero.titleLine2': 'impulsa la TI moderna.',
      'hero.sub':        'UILA ofrece consultoría, ciberseguridad, software a medida y formación para organizaciones donde la disponibilidad, la confianza y la seguridad no son negociables.',
      'hero.ctaContact': 'Contáctenos',
      'hero.ctaServices':'Nuestros servicios',

      'services.kicker':           '01 — Servicios',
      'services.title':            'Consultoría de TI y Seguridad',
      'services.lede':             'Orientación estratégica y ejecución práctica. Desde auditorías puntuales hasta programas completos de seguridad, ayudamos a los equipos a cumplir normas y adelantarse a las amenazas.',
      'services.audits.title':     'Auditorías de Seguridad',
      'services.audits.desc':      'Revisiones integrales de su infraestructura, aplicaciones, identidad y controles de datos, con remediación priorizada.',
      'services.pentest.title':    'Pruebas de Penetración',
      'services.pentest.desc':     'Pruebas externas, internas y a nivel de aplicación realizadas por profesionales experimentados en seguridad ofensiva.',
      'services.cloud.title':      'Buenas Prácticas en la Nube Pública',
      'services.cloud.desc':       'Revisiones de arquitectura y endurecimiento para AWS, Azure y GCP: landing zones, IAM, redes y costos.',
      'services.framework.title':  'Evaluaciones de Marcos',
      'services.framework.desc':   'Análisis de brechas y hojas de ruta alineadas a NIST CSF, CIS Controls y marcos específicos del sector.',
      'services.policy.title':     'Políticas y Procedimientos',
      'services.policy.desc':      'Desarrollo de políticas y diseño de procedimientos a la medida de su organización, que impulsan en lugar de frenar.',
      'services.compliance.title': 'SOC 2 · PCI · ISO 27001',
      'services.compliance.desc':  'Preparación, alineación y soporte de auditoría para los marcos de cumplimiento que sus clientes esperan.',

      'industries.kicker':        '02 — Industrias',
      'industries.title':         'Confianza en sectores críticos',
      'industries.lede':          'Nuestros clientes operan donde la caída del servicio, las brechas y los datos erróneos no son una opción.',
      'industries.govt.title':    'Agencias Gubernamentales Estatales',
      'industries.govt.desc':     'Modernización de la TI del sector público con seguridad rigurosa y documentación lista para licitaciones.',
      'industries.astro.title':   'Astronomía',
      'industries.astro.desc':    'Infraestructura de investigación con alto volumen de datos, operaciones de observatorios y cómputo científico.',
      'industries.utility.title': 'Servicios Públicos',
      'industries.utility.desc':  'Convergencia OT/TI, controles tipo NERC y operaciones resilientes para servicios esenciales.',
      'industries.digital.title': 'Proveedores de Activos Digitales',
      'industries.digital.desc':  'Custodia, exchanges y plataformas Web3: donde la postura de seguridad es el producto.',

      'software.kicker':  '03 — Software',
      'software.title':   'Software a medida, diseñado para lo que viene.',
      'software.lede':    'Cuando lo genérico se queda corto, diseñamos y entregamos sistemas a medida que se ajustan a cómo realmente trabaja su equipo.',
      'software.bullet1': 'Plataformas y herramientas internas a medida',
      'software.bullet2': 'APIs e integraciones seguras',
      'software.bullet3': 'Arquitecturas cloud-native y contenedores',
      'software.bullet4': 'Pipelines DevSecOps y automatización',

      'training.kicker':      '04 — Formación',
      'training.title':       'Formación que rinde desde el lunes.',
      'training.lede':        'Programas prácticos para personas y equipos: desde certificaciones que definen carreras hasta la adopción segura de la IA.',
      'training.certs.title': 'Preparación para Certificaciones',
      'training.certs.desc':  'Bootcamps y acompañamiento para credenciales de CompTIA, Cisco, AWS, Azure y Google Cloud — alineados al trabajo real.',
      'training.ai.title':    'Uso y Adopción Segura de IA',
      'training.ai.desc':     'Talleres prácticos de IA responsable y segura: higiene de prompts, gobernanza de datos y guardrails empresariales.',

      'contact.kicker': '05 — Contacto',
      'contact.title':  'Construyamos algo resiliente.',
      'contact.lede':   'Ya sea una sola evaluación o un socio a largo plazo, nos encantaría saber de usted.',

      'footer.tag':    'La energía que impulsa la TI moderna.',
      'footer.rights': 'Todos los derechos reservados.',
    },
  };

  const FLAGS = {
    en: { src: 'assets/img/flag-us.svg', code: 'EN', label: 'Idioma: Español' },
    es: { src: 'assets/img/flag-sv.svg', code: 'ES', label: 'Language: English' },
  };

  const STORAGE_KEY = 'uila.lang';

  function detectInitial() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && translations[stored]) return stored;
    } catch (_) { /* storage unavailable */ }
    const nav = (navigator.language || 'en').toLowerCase();
    return nav.startsWith('es') ? 'es' : 'en';
  }

  function apply(lang) {
    if (!translations[lang]) lang = 'en';
    document.documentElement.setAttribute('lang', lang);
    const dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    // Update title/description to reflect language
    const titles = {
      en: 'UILA — IT Consulting, Security & Custom Software',
      es: 'UILA — Consultoría de TI, Seguridad y Software a Medida',
    };
    document.title = titles[lang];

    // Update flag toggle UI
    const flag = document.getElementById('langFlag');
    const code = document.getElementById('langCode');
    const btn  = document.getElementById('langToggle');
    if (flag) { flag.src = FLAGS[lang].src; flag.alt = lang === 'en' ? 'English' : 'Español'; }
    if (code) { code.textContent = FLAGS[lang].code; }
    if (btn)  { btn.setAttribute('aria-label', FLAGS[lang].label); btn.setAttribute('aria-pressed', lang === 'es' ? 'true' : 'false'); }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  }

  window.UILA_I18N = {
    apply,
    toggle() {
      const current = document.documentElement.getAttribute('lang') || 'en';
      apply(current === 'en' ? 'es' : 'en');
    },
    get current() { return document.documentElement.getAttribute('lang') || 'en'; },
  };

  document.addEventListener('DOMContentLoaded', () => {
    apply(detectInitial());
    const btn = document.getElementById('langToggle');
    if (btn) btn.addEventListener('click', () => window.UILA_I18N.toggle());
  });
})();
