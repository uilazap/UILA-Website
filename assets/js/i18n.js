/* UILA — i18n.js
   Lightweight client-side translations (EN / ES) with flag toggle. */

(function () {
  'use strict';

  const translations = {
    en: {
      // Navigation
      'nav.approach':   'approach',
      'nav.services':   'services',
      'nav.industries': 'industries',
      'nav.software':   'software',
      'nav.training':   'training',
      'nav.contact':    'contact',

      // Hero
      'hero.eyebrow':     'A modern IT practice',
      'hero.titleA':      'Energy',
      'hero.titleB':      'that powers',
      'hero.titleC':      'modern IT.',
      'hero.sub':         'Consulting, security, custom software, and training for organizations where uptime, trust, and precision are non-negotiable.',
      'hero.ctaContact':  'Start a conversation',
      'hero.ctaApproach': 'See our approach',
      'hero.scroll':      'SCROLL',
      'hero.coordLat':    'N 19°38\u203224\u2033',
      'hero.coordLon':    'W 155°59\u203246\u2033',
      'hero.tz':          'HI · UTC\u221210',
      'hero.loc':         'EST. MMXVII · KONA, HAWAI\u02BBI',

      // Approach
      'approach.kicker':   'Approach',
      'approach.titleA':   'A different',
      'approach.titleB':   'way to run IT.',
      'approach.lede':     'We work alongside the engineers, operators, and leaders who keep critical systems running. Not a vendor. Not a binder on a shelf. A practice you can call at 3 a.m.',
      'approach.p1.title': 'Rigor over theater.',
      'approach.p1.desc':  'Checkbox compliance ages badly. We design controls that hold up under testing, in audit rooms, and in incidents at 3 a.m.',
      'approach.p2.title': 'Partners across the lifecycle.',
      'approach.p2.desc':  'Strategy through implementation. We don\u2019t hand you a binder and disappear \u2014 we stay for the hard deployments.',
      'approach.p3.title': 'Signal over noise.',
      'approach.p3.desc':  'Findings ranked by real risk, with concrete remediation paths and engineers who actually answer the phone.',

      // Services
      'services.kicker':           'Services',
      'services.titleA':           'IT Consulting',
      'services.titleB':           '& Security.',
      'services.lede':             'Strategic guidance and hands-on execution \u2014 from one-off assessments to long-running security programs.',
      'services.audits.title':     'Security Audits',
      'services.audits.desc':      'Comprehensive reviews of infrastructure, applications, identity, and data controls \u2014 findings prioritized by real-world exposure.',
      'services.audits.tag':       'Assessment',
      'services.pentest.title':    'Penetration Testing',
      'services.pentest.desc':     'External, internal, and application-layer testing by experienced offensive-security practitioners. Clear writeups you can hand to engineering.',
      'services.pentest.tag':      'Offensive',
      'services.cloud.title':      'Public Cloud Best Practices',
      'services.cloud.desc':       'Hardening and architecture reviews for AWS, Azure, and GCP \u2014 landing zones, IAM, networking, and cost discipline.',
      'services.cloud.tag':        'Cloud',
      'services.framework.title':  'Framework Assessments',
      'services.framework.desc':   'Gap analyses and roadmaps aligned to NIST CSF, CIS Controls, and sector-specific frameworks \u2014 with phased execution plans.',
      'services.framework.tag':    'Advisory',
      'services.policy.title':     'Policies & Procedures',
      'services.policy.desc':      'Right-sized policy and procedure design that fits the way your organization actually operates \u2014 not shelf-ware.',
      'services.policy.tag':       'Governance',
      'services.compliance.title': 'SOC 2 · PCI · ISO 27001',
      'services.compliance.desc':  'Readiness, alignment, and audit support for the frameworks your customers, auditors, and regulators expect.',
      'services.compliance.tag':   'Compliance',

      // Industries
      'industries.kicker':        'Industries',
      'industries.titleA':        'Trusted',
      'industries.titleB':        'across critical sectors.',
      'industries.lede':          'Our clients operate where downtime, breaches, and bad data are not options.',
      'industries.govt.title':    'State Government Agencies',
      'industries.govt.desc':     'Modernizing public-sector IT with rigorous security and procurement-ready documentation.',
      'industries.astro.title':   'Astronomy',
      'industries.astro.desc':    'Data-intensive research infrastructure, observatory operations, and scientific computing.',
      'industries.utility.title': 'Public Utilities',
      'industries.utility.desc':  'OT/IT convergence, NERC-style controls, and resilient operations for essential services.',
      'industries.digital.title': 'Digital Asset Service Providers',
      'industries.digital.desc':  'Custody, exchange, and Web3 platforms \u2014 where security posture is the product.',

      // Software
      'software.kicker':  'Software',
      'software.titleA':  'Custom software,',
      'software.titleB':  'built for what\u2019s next.',
      'software.lede':    'When off-the-shelf falls short, we design and ship bespoke systems that match how your team actually works.',
      'software.bullet1': 'Tailored platforms & internal tools',
      'software.bullet2': 'Secure APIs & integrations',
      'software.bullet3': 'Cloud-native, containerized architectures',
      'software.bullet4': 'DevSecOps pipelines & automation',

      // Training
      'training.kicker':      'Education',
      'training.titleA':      'Training that pays off',
      'training.titleB':      'on Monday.',
      'training.lede':        'Practical programs for individuals and teams \u2014 from career-defining certifications to safe adoption of AI.',
      'training.certs.title': 'IT Certification Prep',
      'training.certs.desc':  'Bootcamps and coaching for CompTIA, Cisco, AWS, Azure, and Google Cloud credentials \u2014 aligned to real-world work, not just the exam.',
      'training.ai.title':    'Secure AI Usage & Adoption',
      'training.ai.desc':     'Hands-on workshops on responsible and secure AI \u2014 prompt hygiene, data governance, tool selection, and enterprise guardrails.',

      // Contact
      'contact.kicker':     'Contact',
      'contact.titleA':     'Let\u2019s build',
      'contact.titleB':     'something resilient.',
      'contact.lede':       'Whether you need a single assessment or a long-term partner, we\u2019d like to hear from you.',
      'contact.replyLabel': 'Typical reply',
      'contact.locMeta':    'Kona, HI · UTC\u221210',

      // Footer
      'footer.tag':          'Backed by \u20BFitcoin',
      'footer.labelContact': 'Contact',
      'footer.labelCred':    'Practice',
      'footer.locCity':      'Kona · 19°38\u2032N / 155°59\u2032W',
      'footer.locTz':        'UTC\u221210',
      'footer.rights':       'All rights reserved.',
      'footer.craft':        'Operating from Kona, Hawai\u02BBi',
    },

    es: {
      // Navigation
      'nav.approach':   'enfoque',
      'nav.services':   'servicios',
      'nav.industries': 'industrias',
      'nav.software':   'software',
      'nav.training':   'formación',
      'nav.contact':    'contacto',

      // Hero
      'hero.eyebrow':     'Una práctica moderna de TI',
      'hero.titleA':      'La energía',
      'hero.titleB':      'que impulsa',
      'hero.titleC':      'la TI moderna.',
      'hero.sub':         'Consultoría, seguridad, software a medida y formación para organizaciones donde la disponibilidad, la confianza y la precisión no son negociables.',
      'hero.ctaContact':  'Iniciar una conversación',
      'hero.ctaApproach': 'Ver nuestro enfoque',
      'hero.scroll':      'DESPLAZAR',
      'hero.coordLat':    'N 13°42\u203217\u2033',
      'hero.coordLon':    'O 89°12\u203207\u2033',
      'hero.tz':          'SV · UTC\u22126',
      'hero.loc':         'EST. MMXVII · SAN SALVADOR',

      // Approach
      'approach.kicker':   'Enfoque',
      'approach.titleA':   'Una forma distinta',
      'approach.titleB':   'de operar la TI.',
      'approach.lede':     'Trabajamos junto a los ingenieros, operadores y líderes que mantienen en marcha los sistemas críticos. No somos un proveedor más. No somos un manual en una repisa. Somos una práctica a la que puede llamar a las 3 a.m.',
      'approach.p1.title': 'Rigor sobre el teatro.',
      'approach.p1.desc':  'El cumplimiento de casillas envejece mal. Diseñamos controles que resisten pruebas, auditorías e incidentes a las 3 a.m.',
      'approach.p2.title': 'Socios en todo el ciclo.',
      'approach.p2.desc':  'De la estrategia a la implementación. No entregamos un manual y desaparecemos \u2014 nos quedamos para los despliegues difíciles.',
      'approach.p3.title': 'Señal sobre ruido.',
      'approach.p3.desc':  'Hallazgos priorizados por riesgo real, con rutas concretas de remediación e ingenieros que efectivamente contestan el teléfono.',

      // Services
      'services.kicker':           'Servicios',
      'services.titleA':           'Consultoría de TI',
      'services.titleB':           'y Seguridad.',
      'services.lede':             'Orientación estratégica y ejecución práctica \u2014 desde evaluaciones puntuales hasta programas de seguridad de largo plazo.',
      'services.audits.title':     'Auditorías de Seguridad',
      'services.audits.desc':      'Revisiones integrales de infraestructura, aplicaciones, identidad y controles de datos \u2014 con hallazgos priorizados por exposición real.',
      'services.audits.tag':       'Evaluación',
      'services.pentest.title':    'Pruebas de Penetración',
      'services.pentest.desc':     'Pruebas externas, internas y a nivel de aplicación por profesionales experimentados de seguridad ofensiva. Informes claros listos para ingeniería.',
      'services.pentest.tag':      'Ofensiva',
      'services.cloud.title':      'Buenas Prácticas en la Nube Pública',
      'services.cloud.desc':       'Endurecimiento y revisiones de arquitectura para AWS, Azure y GCP \u2014 landing zones, IAM, redes y disciplina de costos.',
      'services.cloud.tag':        'Nube',
      'services.framework.title':  'Evaluaciones de Marcos',
      'services.framework.desc':   'Análisis de brechas y hojas de ruta alineadas a NIST CSF, CIS Controls y marcos sectoriales \u2014 con planes de ejecución por fases.',
      'services.framework.tag':    'Asesoría',
      'services.policy.title':     'Políticas y Procedimientos',
      'services.policy.desc':      'Diseño de políticas y procedimientos a la medida de cómo opera su organización \u2014 no documentos de repisa.',
      'services.policy.tag':       'Gobernanza',
      'services.compliance.title': 'SOC 2 · PCI · ISO 27001',
      'services.compliance.desc':  'Preparación, alineación y soporte de auditoría para los marcos que sus clientes, auditores y reguladores esperan.',
      'services.compliance.tag':   'Cumplimiento',

      // Industries
      'industries.kicker':        'Industrias',
      'industries.titleA':        'Confianza',
      'industries.titleB':        'en sectores críticos.',
      'industries.lede':          'Nuestros clientes operan donde la caída del servicio, las brechas y los datos erróneos no son una opción.',
      'industries.govt.title':    'Agencias Gubernamentales Estatales',
      'industries.govt.desc':     'Modernización de la TI del sector público con seguridad rigurosa y documentación lista para licitaciones.',
      'industries.astro.title':   'Astronomía',
      'industries.astro.desc':    'Infraestructura de investigación con alto volumen de datos, operaciones de observatorios y cómputo científico.',
      'industries.utility.title': 'Servicios Públicos',
      'industries.utility.desc':  'Convergencia OT/TI, controles tipo NERC y operaciones resilientes para servicios esenciales.',
      'industries.digital.title': 'Proveedores de Activos Digitales',
      'industries.digital.desc':  'Custodia, exchanges y plataformas Web3 \u2014 donde la postura de seguridad es el producto.',

      // Software
      'software.kicker':  'Software',
      'software.titleA':  'Software a medida,',
      'software.titleB':  'diseñado para lo que viene.',
      'software.lede':    'Cuando lo genérico se queda corto, diseñamos y entregamos sistemas a medida que encajan con cómo realmente trabaja su equipo.',
      'software.bullet1': 'Plataformas y herramientas internas a medida',
      'software.bullet2': 'APIs e integraciones seguras',
      'software.bullet3': 'Arquitecturas cloud-native en contenedores',
      'software.bullet4': 'Pipelines DevSecOps y automatización',

      // Training
      'training.kicker':      'Formación',
      'training.titleA':      'Formación que rinde',
      'training.titleB':      'desde el lunes.',
      'training.lede':        'Programas prácticos para personas y equipos \u2014 desde certificaciones que definen carreras hasta la adopción segura de IA.',
      'training.certs.title': 'Preparación para Certificaciones',
      'training.certs.desc':  'Bootcamps y acompañamiento para credenciales de CompTIA, Cisco, AWS, Azure y Google Cloud \u2014 alineados al trabajo real, no solo al examen.',
      'training.ai.title':    'Uso y Adopción Segura de IA',
      'training.ai.desc':     'Talleres prácticos de IA responsable y segura \u2014 higiene de prompts, gobernanza de datos, selección de herramientas y guardrails empresariales.',

      // Contact
      'contact.kicker':     'Contacto',
      'contact.titleA':     'Construyamos',
      'contact.titleB':     'algo resiliente.',
      'contact.lede':       'Ya sea para una sola evaluación o un socio a largo plazo, nos encantaría saber de usted.',
      'contact.replyLabel': 'Respuesta típica',
      'contact.locMeta':    'San Salvador · UTC\u22126',

      // Footer
      'footer.tag':          'Respaldado por \u20BFitcoin',
      'footer.labelContact': 'Contacto',
      'footer.labelCred':    'Práctica',
      'footer.locCity':      'San Salvador · 13°42\u2032N / 89°12\u2032O',
      'footer.locTz':        'UTC\u22126',
      'footer.rights':       'Todos los derechos reservados.',
      'footer.craft':        'Desde San Salvador, El Salvador',
    },
  };

  const FLAGS = {
    en: { src: 'assets/img/flag-us.svg', code: 'EN', label: 'Cambiar a Español' },
    es: { src: 'assets/img/flag-sv.svg', code: 'ES', label: 'Switch to English' },
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

    const titles = {
      en: 'UILA \u2014 IT Consulting, Security & Custom Software',
      es: 'UILA \u2014 Consultoría de TI, Seguridad y Software a Medida',
    };
    document.title = titles[lang];

    const flag = document.getElementById('langFlag');
    const code = document.getElementById('langCode');
    const btn  = document.getElementById('langToggle');
    if (flag) { flag.src = FLAGS[lang].src; flag.alt = lang === 'en' ? 'English' : 'Español'; }
    if (code) { code.textContent = FLAGS[lang].code; }
    if (btn)  {
      btn.setAttribute('aria-label', FLAGS[lang].label);
      btn.setAttribute('aria-pressed', lang === 'es' ? 'true' : 'false');
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}

    // Notify listeners (e.g., hero clock) that language changed.
    document.dispatchEvent(new CustomEvent('uila:langchange', { detail: { lang } }));
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
