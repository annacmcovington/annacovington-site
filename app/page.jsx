'use client';
import React, { useState, useMemo } from 'react';
import { Mail, Phone, MapPin, Linkedin, ChevronRight, Award, TrendingUp, Users, Zap, Target, Brain, Shield, Rocket, Heart, Calendar, Building2, Briefcase, GraduationCap, Sparkles, Filter, X, ArrowUpRight, CheckCircle2, Star, DollarSign, Trophy, Lightbulb, Network, BookOpen, Quote } from 'lucide-react';

export default function AnnaPortfolio() {
  const [activeTab, setActiveTab] = useState('story');
  const [filterTag, setFilterTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  const stats = [
    { label: 'Years serving Federal Health clients', value: '14', icon: Shield },
    { label: 'Cross-agency AI practitioner community built', value: '220+', icon: Network },
    { label: 'AI use cases curated for enterprise adoption', value: '30+', icon: Rocket },
    { label: 'Team members onboarded in 3 days', value: '72', icon: Users },
    { label: 'Practitioners trained on enterprise GenAI tools', value: '200+', icon: Brain },
    { label: 'Federal accounts served', value: '8', icon: Building2 },
  ];

  const superpowers = [
    {
      icon: Brain,
      title: 'The Translator',
      desc: 'Fluent in executive and engineer. I turn ambiguous business problems into technical roadmaps — and vice versa — without losing anyone in the room.',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: Shield,
      title: 'The Ecosystem Whisperer',
      desc: '14 years inside one of the most complex federal ecosystems in the country. I know the systems, the stakeholders, and the day-to-day realities. New teams get productive in days, not months.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Lightbulb,
      title: 'The Greenspace Originator',
      desc: 'When the environment shifts, I build new paths. I\'ve originated multi-partner pursuits and prototype AI products from a blank whiteboard — combining existing capabilities in new ways to solve real problems.',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Heart,
      title: 'The Magic Sorting Hat',
      desc: 'Because I\'ve worked across nearly every corner of Federal, people bring me their random exploratory questions. I meet people at every level and I know who to connect to what. Growing a business isn\'t a one-woman show — it\'s the right ideas and people at the right time.',
      color: 'from-rose-500 to-pink-600',
    },
  ];

  const projects = [
    {
      year: '2023–2025',
      title: 'Enterprise CX & Data Analytics Contract — Data Strategy Lead',
      client: 'Cabinet-level Federal Health Agency',
      role: 'Data Strategist / Analytics Lead / AI Lead',
      value: 'Multi-year, nine-figure contract',
      tags: ['AI Strategy', 'Data Governance', 'Federal Health', 'Leadership'],
      wins: [
        'Shaped the winning proposal — led the data component of the technical volume for one of the sector\'s largest customer-experience implementations in government',
        'Grew the funded scope significantly across the base year and into the first option year by identifying and packaging adjacent workstreams',
        'Won multiple contract modifications by writing points-of-view that translated emerging client needs into fundable work',
        'Set strategy for one of the agency\'s first conversational GenAI tools — an internal engine sitting on top of 17,000+ research reports for rapid discovery',
        'Delivered a formal Data Management Strategy for one of the largest CX implementations in federal government',
        'Received unsolicited praise from a Deputy Director for the depth and quality of foundational trust and standardization work',
      ],
      stack: ['Azure Databricks', 'Azure Data Factory', 'Data governance tooling', 'Agile ceremonies'],
      featured: true,
    },
    {
      year: '2025–Present',
      title: 'Prefilled Benefits Claim — AI Prototype (Originator)',
      client: 'Federal benefits agency + cross-sector go-to-market',
      role: 'Product Owner / Originator',
      value: 'Greenspace prototype',
      tags: ['AI/ML', 'Innovation', 'Origination'],
      wins: [
        'Originated the concept: combine two existing assets with a generative AI solution to automate a high-volume benefits form used by millions of applicants',
        'Pitched to leadership, assembled a dev team through internal channels — advanced with zero outside investment',
        'Prototype demoed to a related capture team late 2025; targeting both government and commercial buyers in early 2026',
        'Advanced with interactive prototypes, backend document extraction, and validation against real (redacted) records',
        'Building the roadmap for related form automation across the benefits portfolio',
      ],
      stack: ['Prototyping tools', 'Generative AI', 'Public agency APIs'],
      featured: true,
    },
    {
      year: '2024–2025',
      title: 'Data Platform Migration Pursuit — Second Chair',
      client: 'Federal Health enterprise integration office',
      role: 'Second Chair (18-month pursuit)',
      value: 'Nine-figure recompete',
      tags: ['Data Platform', 'Proposal Leadership'],
      wins: [
        'Led team of 15 technical writers plus 5 pre-RFP support members across an extended pursuit',
        'Built coalition of four teaming partners plus platform alliance relationships',
        'Navigated three RFP drop dates, sponsoring-office reorganization mid-pursuit, and turbulent vendor-politics environment',
        'Developed solutioning across multiple alternative platform architectures to keep the response competitive',
      ],
      stack: ['Enterprise data platforms', 'Proposal management'],
    },
    {
      year: '2025–2026',
      title: 'Enterprise CRM Portfolio — Delivery Lead',
      client: 'Federal Health agency',
      role: 'IT Product Manager / acting Deputy',
      value: 'Multi-million-dollar portfolio',
      tags: ['Delivery', 'PMO', 'CRM'],
      wins: [
        'Stepped in on 3 days notice to lead a portfolio through a PTO gap, government shutdown, and holiday coverage',
        'Implemented onboarding automation saving 5+ hours/week — meaningful cost savings across the period of performance',
        'Shaped and secured approval for a substantial integration enhancement growing the portfolio',
        'Grew the AI & Engineering footprint on the portfolio from 9 to 20 practitioners in six months',
        'Consolidated 17 collaboration sites into 4, standardized kickoff/comms/agile approach across 7 scrum masters and 7 IT program managers',
      ],
      stack: ['Microsoft Dynamics', 'Power Platform', 'Jira', 'Azure DevOps'],
      featured: true,
    },
    {
      year: '2024–Present',
      title: 'Enterprise AI Use Case Program',
      client: 'Federal Health agency',
      role: 'Contributor / Use Case Curator',
      value: 'Cross-account enablement',
      tags: ['AI Strategy', 'Enablement'],
      wins: [
        'Curated 30+ AI use cases for the enterprise use case factory',
        'Trained 200+ agency-account practitioners on enterprise GenAI tools',
        'Built a community of 220+ agency AI practitioners across delivery teams',
        'Contributed to significant new AI sales growth on the account year-over-year',
      ],
      stack: ['Generative AI', 'Enterprise AI tooling'],
    },
    {
      year: '2024–Present',
      title: 'Federal Health Sector CDAO Liaison',
      client: 'Cross-agency: eight Federal Health accounts',
      role: 'Sector Liaison',
      value: 'Cross-account program',
      tags: ['Community', 'AI Strategy', 'Sector Leadership'],
      wins: [
        'Built and ran a Chief Data & AI Officer roadshow across eight Federal Health accounts',
        'Established a strategy to grow eminence of AI accelerators in current sector delivery',
        'Leveraged existing account relationships to increase brand recognition of AI/data offerings',
        'Strengthened internal partnerships within Federal Health accounts to embed AI collateral in pursuit pipelines',
        'Co-led a greenspace initiative on agentic AI for data governance — with a discovery lab planned around healthcare entity matching',
      ],
      stack: ['Enterprise AI accelerators'],
    },
    {
      year: '2023',
      title: 'AI Innovation Challenge — Cardiac Health',
      client: 'Federal Health + Regulatory agency partnership',
      role: 'Project Manager',
      value: 'Innovation investment',
      tags: ['AI/ML', 'Proposal Leadership'],
      wins: [
        'Led proposal team and kickoff bringing two agency accounts together',
        'Integrated small-business AI specialists onto shared high-performance compute infrastructure',
        'Built an investment strategy for phase two driving downstream contract work',
        'Delivered a reusable Model Card asset into the firm\'s AI governance toolchest',
      ],
      stack: ['High-performance compute', 'AI/ML model development'],
    },
    {
      year: '2023',
      title: 'Privacy Act Automation Program — Testing & Launch Lead',
      client: 'Federal benefits agency',
      role: 'Testing Lead / Pre-Award Lead',
      tags: ['Automation', 'AI/ML', 'Program Launch'],
      wins: [
        'Onboarded 72 team members in 3 days through an all-day hypercare event — the client called it the most thoroughly prepared and mature pre-award support he\'d ever experienced',
        'Created the go-to-market plan for data scientists using large language models for scaled normalization on scanned documents',
        'Solution later received formal authorization from the agency — springboard for a subsequent claims automation campaign',
      ],
      stack: ['Robotic process automation', 'Document intelligence', 'Large language models'],
      featured: true,
    },
    {
      year: '2022–2023',
      title: 'Medical Examinations Regional Portfolio',
      client: 'Federal benefits agency',
      role: 'Change Management Lead / Delivery Lead',
      tags: ['Change Management', 'Identity & Access'],
      wins: [
        'Handled 100+ change requests in 8 weeks post go-live for a 400+ user application',
        'Delivered an analysis-of-alternatives for an identity/credential/access management solution in a multi-cloud environment in 4 weeks',
        'Grew the platform dev team from 10 to 18 through increased transparency and capacity planning',
        'Managed 100+ help-desk tickets and access provisioning during hypercare',
      ],
      stack: ['Salesforce', 'Enterprise IAM', 'Azure DevOps'],
    },
    {
      year: '2022',
      title: 'Loan Guaranty Staff Support Services',
      client: 'Federal benefits agency (as sub to a small-business prime)',
      role: 'Lead / Replacement Manager',
      tags: ['Strategy', 'Stakeholder Management'],
      wins: [
        'Stepped in as replacement manager during a family leave — cleared prime for teaming agreement within a day',
        '20 days: complete environmental scan of the mortgage industry with a stakeholder framework for federal lending agencies',
        '45 days: operational strategy for enhanced employee morale',
      ],
      stack: ['Social listening tooling'],
    },
    {
      year: '2022',
      title: 'Automation Innovation Challenge',
      client: 'Federal benefits agency',
      role: 'Team Lead',
      tags: ['Automation', 'Innovation'],
      wins: [
        'Won the User Experience category',
        'Solution projected to release over 1 million opportunity hours for benefits processors annually',
      ],
      stack: ['Robotic process automation'],
    },
    {
      year: '2021–2022',
      title: 'Enterprise Architecture Repository Migration',
      client: 'Cabinet-level Federal agency',
      role: 'Project Management',
      tags: ['Enterprise Architecture', 'SAFe'],
      wins: [
        'Rewrote the SOW on day one — gained concurrence for a new approach',
        'Called a strategic pause that saved six contractors from wasted development effort',
        'Delivered the first phase of an Architecture First approach (white paper accepted)',
        'Grew a client-facing PMO from 5 to 20 to 31 people across three quarters',
      ],
      stack: ['ServiceNow', 'Portfolio management tools', 'TOGAF', 'SAFe'],
    },
    {
      year: '2021',
      title: 'Authorization Architecture — Target State',
      client: 'Cabinet-level Federal agency (Identity & Access program)',
      role: 'Assistant PM',
      tags: ['Cyber', 'Identity & Access'],
      wins: [
        'Planned and facilitated a multi-day industry-day event with six major IAM vendors',
        '50 participants across 3 days of virtual authorization target-state sessions',
      ],
      stack: [],
    },
    {
      year: '2020',
      title: 'Pandemic Supply Chain Response — Analytics Platform',
      client: 'Federal Health provider network',
      role: 'Scrum Master',
      tags: ['COVID Response', 'Supply Chain'],
      wins: [
        'Enabled 170+ facilities in the provider network to request critical PPE and supplies during the pandemic',
        'Led the tiger team building the national request tool',
      ],
      stack: ['Open-source semantic analytics', 'SAFe'],
    },
    {
      year: '2018–2020',
      title: 'Financial Management Business Transformation — Analytics',
      client: 'Cabinet-level Federal agency',
      role: 'Team Lead',
      tags: ['Analytics', 'Data', 'Team Building'],
      wins: [
        'Grew analytics team from 2 to 6 to bring semantic analytics to a large business-transformation program',
        'Delivered 12 complex use cases in 4 months — secured optional time-and-materials CLIN exercise, driving meaningful profitable revenue for the firm',
        '23 complex use cases in year one across program management, change management, and technology delivery',
        '30% of visualizations supported by near-real-time data engineering',
      ],
      stack: ['Semantic analytics platform', 'Azure Government', 'Federal architecture frameworks'],
    },
    {
      year: '2013–2017',
      title: 'Benefits Management System — Business Architecture, Requirements & Testing',
      client: 'Federal benefits agency',
      role: 'Business Analyst → Scenarios Lead → PM → Strategic Measures Lead',
      tags: ['Requirements', 'Foundational'],
      wins: [
        'Foundational Federal claims-processing expertise — the reason later teams could integrate her into new projects seamlessly',
        'Maintained highest retention rate of project talent through quarterly professional development interviews',
        'Government leads regularly requested her support for requirements-gathering sessions',
      ],
      stack: ['IBM Rational', 'Tableau', 'SharePoint'],
    },
  ];

  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  const filteredProjects = useMemo(() =>
    filterTag === 'All' ? projects : projects.filter(p => p.tags.includes(filterTag)),
    [filterTag]
  );

  const testimonials = [
    {
      quote: "Her contributions were instrumental in bringing common understanding of infrastructure and current data strategy to the solutioning sessions. Her working relationships with the small-business teaming partner accelerated the communication and shared solutioning conversations that made the win possible.",
      author: "Pursuit lead, Federal Health CX/analytics contract",
    },
    {
      quote: "She was able to seamlessly integrate into our project with minimal education because she's been involved in the client's core mission processing for over a decade. She came in, established governance, observed programmatic areas of improvement, piloted a solution, and executed a project-wide data cleanse and migration within four weeks. She saw what needed to be done and got it done — without any impact to the users.",
      author: "Delivery manager, benefits agency application launch",
    },
    {
      quote: "An exceptional addition to a team that was struggling to hone the narrative of the business value for a new innovation thread. Within a week she had completely immersed herself in the industry — from competitors to technology to international regulations to operations at scale.",
      author: "Innovation lead, cross-sector market offering development",
    },
    {
      quote: "She has a great brand — always leaning forward, always looking to connect the dots, in the market the right amount, on pursuits where 'if she wasn't there it wouldn't have been a win.' Wishes more of her peers were like her in terms of constant horizon scanning and market presence.",
      author: "Senior leadership feedback",
    },
  ];

  const skills = {
    'AI & Data Strategy': ['GenAI Strategy', 'Agentic AI', 'Large Language Models', 'Data Governance', 'Data Strategy', 'Master Data Management', 'Model Cards', 'Trustworthy AI'],
    'Platforms & Tools': ['Azure Databricks', 'Azure Data Factory', 'Enterprise data catalogs', 'Data access governance', 'Semantic analytics platforms', 'Microsoft Dynamics', 'ServiceNow', 'Salesforce', 'Robotic process automation', 'High-performance compute'],
    'Frameworks & Methodologies': ['SAFe / Scaled Agile', 'TOGAF', 'Federal Enterprise Architecture', 'Department of Defense Architecture Framework', 'ICAM Authorization', 'Human Centered Design', 'Cost-Benefit Analysis'],
    'Consulting & Leadership': ['Proposal Leadership', 'Executive Facilitation', 'Change Management', 'Team Building', 'Client Advisory', 'Stakeholder Management', 'Pricing / Basis of Estimate', 'Third-Party Risk & Teaming Agreements'],
    'Domain Expertise': ['Federal Health', 'Cabinet-level Federal agencies', 'Benefits processing', 'Enterprise Architecture', 'Customer & Employee Experience', 'Provider healthcare networks'],
  };

  const coachingWins = [
    { note: 'Multiple coachees promoted to Manager' },
    { note: 'Multiple coachees promoted early — a full year or two ahead of standard timeline' },
    { note: 'Recognized with a firm-level award for superior coaching and mentoring' },
    { note: 'Every women-in-analytics mentorship cohort supported since the pilot in 2022' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            {/* Headshot */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border-2 border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                {/* When you have a hosted image URL, replace this div with: <img src="YOUR_URL" alt="Anna Covington" className="w-full h-full object-cover" /> */}
                <img src="/AMC headshot.jpg" alt="Anna Covington" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-cyan-300 tracking-wider uppercase">Data · AI · Federal Health Impact</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                Anna Myers <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Covington</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
                Data & AI strategist. I help executives see the through-line from their data to strategic impact — with 14 years living inside the Federal Health ecosystem.
              </p>

              <p className="text-base md:text-lg text-slate-400 mb-8 max-w-3xl italic leading-relaxed">
                "I bring a strong track record of turning AI strategy into operational results by translating big-picture ideas into practical plans, clear priorities, and measurable execution. I'm especially effective at leading teams through ambiguity, transition, and complex technical environments — helping people stay aligned, move decisively, and maintain momentum even when the path forward isn't fully defined. My focus is on creating structure where there is uncertainty, building trust across stakeholders, and making sure strategy doesn't stay theoretical — it becomes something teams can actually deliver."
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">AI & Data Strategy</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">Federal Health</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">Baltimore, MD</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setContactOpen(true)}
                  className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2"
                >
                  Let's Connect <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <a
                  href="https://www.linkedin.com/in/anna-covington-3a1357a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="text-center group cursor-default">
                <Icon className="w-6 h-6 mx-auto mb-2 text-indigo-500 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold bg-gradient-to-br from-slate-900 to-indigo-700 bg-clip-text text-transparent">{s.value}</div>
                <div className="text-xs text-slate-500 mt-1 leading-tight">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200">
          {[
            { id: 'story', label: 'The Story', icon: Sparkles },
            { id: 'projects', label: 'Portfolio', icon: Briefcase },
            { id: 'voices', label: 'What Others Say', icon: Quote },
            { id: 'skills', label: 'Toolkit', icon: Award },
            { id: 'people', label: 'People', icon: Users },
            { id: 'background', label: 'Background', icon: GraduationCap },
          ].map(t => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-4 py-3 font-medium text-sm flex items-center gap-2 transition-all border-b-2 -mb-px ${
                  activeTab === t.id
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" /> {t.label}
              </button>
            );
          })}
        </div>

        {/* THE STORY */}
        {activeTab === 'story' && (
          <div className="space-y-12 pb-16 animate-in fade-in duration-500">
            <section>
              <h2 className="text-3xl font-bold mb-4">How I got here</h2>
              <div className="prose prose-slate max-w-none text-lg leading-relaxed text-slate-700 space-y-4">
                <p>
                  I've spent 14 years serving Federal Health clients. I started on the teaming-partner side as a program manager, before making the intentional decision — with my husband as our stay-at-home parent — to move into a large consulting firm.
                </p>
                <p>
                  My background is non-traditional: applied community psychology at Marymount, then a Master's in Public Administration at American University focused on cost-benefit analysis of public programs. That policy-wonk foundation is why AI & Data strategy work fits me — I'm energized by seeing taxpayer investments produce real outcomes for real people.
                </p>
                <p>
                  For the last 8 years I've worked across nearly every corner of a large federal ecosystem, specifically in data governance and behavioral data assets for health-equity mission plays. I bring my collection of people to explore whitespace across the agency. The value I bring is that I have enough technical knowledge to understand the solution — and I can put it in the context of incredibly complex business and technical environments.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Four things I do differently</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {superpowers.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div key={i} className="group relative overflow-hidden bg-white rounded-2xl p-6 border border-slate-200 hover:border-transparent hover:shadow-xl transition-all">
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${p.color} text-white mb-4`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{p.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-600 text-white rounded-lg"><TrendingUp className="w-5 h-5" /></div>
                <h2 className="text-2xl font-bold">Where I'm headed next</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                I'm focused on senior-leadership roles in AI & Data strategy across Federal Health. My focus areas are data governance, AI enablement, and interoperability transformation — with a strong track record of turning ambiguous, high-complexity environments into structured, deliverable programs.
              </p>
            </section>

            <section className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Target className="w-6 h-6 text-cyan-400" /> Best-fit conversations</h2>
              <p className="text-slate-300 mb-6">If you're working on any of these, I'd love to talk:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Stand up or scale a data governance program',
                  'Deploy GenAI or agentic AI on complex enterprise data',
                  'Navigate a Federal Health pursuit',
                  'Rescue a stalled enterprise architecture, migration, or platform effort',
                  'Build a proposal team and win a Federal Health opportunity',
                  'Turn a scattered analytics function into a strategic capability',
                  'Bring a small-business teaming partner into a play',
                  'Coach a rising consultant toward manager',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* PROJECTS */}
        {activeTab === 'projects' && (
          <div className="pb-16 animate-in fade-in duration-500">
            <div className="mb-6 flex items-center gap-3 flex-wrap">
              <Filter className="w-4 h-4 text-slate-500" />
              <span className="text-sm font-medium text-slate-600">Filter:</span>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setFilterTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    filterTag === tag
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="grid gap-4">
              {filteredProjects.map((p, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedProject(p)}
                  className={`group relative bg-white rounded-xl border p-6 hover:shadow-xl transition-all cursor-pointer ${
                    p.featured ? 'border-indigo-200 bg-gradient-to-br from-white to-indigo-50/30' : 'border-slate-200'
                  }`}
                >
                  {p.featured && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" /> Featured
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 flex-wrap">
                        <Calendar className="w-3 h-3" /> {p.year}
                        <span className="text-slate-300">•</span>
                        <Building2 className="w-3 h-3" /> {p.client}
                        {p.value && (<>
                          <span className="text-slate-300">•</span>
                          <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                            {p.value}
                          </span>
                        </>)}
                      </div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-600 transition-colors">{p.title}</h3>
                      <p className="text-sm text-slate-600 mb-3">{p.role}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map(t => (
                          <span key={t} className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded">{t}</span>
                        ))}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VOICES */}
        {activeTab === 'voices' && (
          <div className="pb-16 animate-in fade-in duration-500 space-y-5">
            <p className="text-sm text-slate-500 italic mb-6">Selected feedback from senior leaders and clients — attributed by role rather than name to respect confidentiality.</p>
            {testimonials.map((t, i) => (
              <blockquote key={i} className="relative bg-gradient-to-br from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-r-xl p-6 md:p-8">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-indigo-200" />
                <p className="text-slate-800 italic pl-10 leading-relaxed text-lg">{t.quote}</p>
                <cite className="not-italic text-sm text-slate-600 pl-10 mt-4 block">
                  <span className="font-semibold text-slate-900">— {t.author}</span>
                </cite>
              </blockquote>
            ))}
          </div>
        )}

        {/* SKILLS */}
        {activeTab === 'skills' && (
          <div className="pb-16 animate-in fade-in duration-500 space-y-8">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="h-1 w-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                  {cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 hover:shadow-sm transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PEOPLE */}
        {activeTab === 'people' && (
          <div className="pb-16 animate-in fade-in duration-500 space-y-8">
            <section className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2"><Heart className="w-6 h-6 text-rose-500" /> The people work</h2>
              <p className="text-slate-700 leading-relaxed">
                I'm not only transforming data integration for our clients — I focus on ensuring we have the strongest talent experience, with a specific interest in developing senior consultants and growing the next generation of female leaders. I've supported every women-in-analytics mentoring cohort since the very first pilot in 2022.
              </p>
              <p className="text-slate-700 leading-relaxed mt-3 italic">
                "How am I able to bring people together? By recognizing that growing this business is not a one-woman show. It's a collection of ideas and people, at the right time for the right thing."
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" /> Coaching & mentoring
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {coachingWins.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
                    <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="text-sm text-slate-700">{c.note}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Community leadership</h3>
              <div className="space-y-3">
                {[
                  { title: 'Federal Health Sector CDAO Liaison', desc: 'Cross-agency community of 220+ AI practitioners. AI-data roadshow across eight Federal Health accounts.' },
                  { title: 'Women in Analytics Mentor', desc: 'Since the pilot cohort in 2022 — through multiple program iterations.' },
                  { title: 'Regional Recruiting Strategy', desc: 'Created and executed a recruiting strategy for central Maryland universities — with an intentional focus on HBCUs — across four Federal accounts.' },
                  { title: 'Consulting Services Faculty', desc: 'Named to the firm\'s internal faculty program.' },
                  { title: 'Lunch & Learns', desc: 'Trained 100+ practitioners on federal client discovery, mission programs supporting women veterans, cost-benefit analysis, and data management best practices.' },
                ].map((c, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-slate-200">
                    <div className="font-semibold mb-1">{c.title}</div>
                    <div className="text-sm text-slate-600">{c.desc}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* BACKGROUND */}
        {activeTab === 'background' && (
          <div className="pb-16 animate-in fade-in duration-500 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><GraduationCap className="w-6 h-6 text-indigo-600" /> Education</h2>
              <div className="space-y-3">
                <div className="bg-white p-5 rounded-xl border border-slate-200">
                  <div className="font-semibold">Master of Public Administration, Program Evaluation</div>
                  <div className="text-sm text-slate-600">American University, School of Public Administration</div>
                  <div className="text-xs text-slate-500 italic mt-1">Focus: cost-benefit analysis of public programs</div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200">
                  <div className="font-semibold">Bachelor of Arts, Psychology (Applied Community)</div>
                  <div className="text-sm text-slate-600">Marymount University, School of Education</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6 text-indigo-600" /> Publications & Presentations</h2>
              <div className="space-y-3">
                <div className="bg-white p-5 rounded-xl border border-slate-200">
                  <div className="text-sm text-slate-500 mb-1">Publication</div>
                  <div className="text-sm">Myers, A. C., & Yates, B. T. Book Review: Pawson, R. (2006) <em>Evidence Based Policy: A Realist Perspective</em>. Sage Publications: London. <em>Evaluation and Program Planning</em>. Vol 31(2).</div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200">
                  <div className="text-sm text-slate-500 mb-1">Presentation — American Evaluation Association, 2008 (Denver, CO)</div>
                  <div className="text-sm">"Cost-Benefit Analysis of the Clubhouse Model of Psychosocial Rehabilitation" — selected by the Costs, Effectiveness, Benefits, and Economics TIG. Collaboration with the University of Massachusetts Worcester Medical School, Department of Psychiatry, Program for Clubhouse Research, and the International Center for Clubhouse Development.</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Career trajectory</h2>
              <div className="relative border-l-2 border-indigo-200 ml-4 pl-8 space-y-8">
                {[
                  { year: '2023–Present', title: 'Manager', org: 'Global consulting firm', note: 'AI & Data strategy — Federal Health' },
                  { year: '2020–2023', title: 'Senior Consultant → Manager', org: 'Global consulting firm', note: 'Enterprise architecture, change management, and innovation programs across cabinet-level federal agencies' },
                  { year: '2016–2020', title: 'Consultant → Senior Consultant', org: 'Global consulting firm', note: 'Deep Federal Health immersion — analytics, business transformation, and pandemic response' },
                  { year: '2013–2016', title: 'Business Analyst → Project Manager', org: 'Small-business consulting firm (as teaming partner to a global consulting firm)', note: 'Federal benefits program — highest retention rate through quarterly professional development interviews' },
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[42px] w-4 h-4 bg-white border-2 border-indigo-500 rounded-full"></div>
                    <div className="text-xs font-semibold text-indigo-600">{step.year}</div>
                    <div className="font-bold text-lg mt-1">{step.title}</div>
                    <div className="text-sm text-slate-600">{step.org}</div>
                    <div className="text-sm text-slate-500 italic mt-1">{step.note}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
          >
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl flex justify-between items-start">
              <div>
                <div className="text-xs text-indigo-100 mb-1">{selectedProject.year} · {selectedProject.client}</div>
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <div className="text-sm text-indigo-100 mt-1">{selectedProject.role}</div>
                {selectedProject.value && (
                  <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    {selectedProject.value}
                  </div>
                )}
              </div>
              <button onClick={() => setSelectedProject(null)} className="p-1 hover:bg-white/20 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <h4 className="font-bold mb-3 text-slate-900">Key wins</h4>
                <div className="space-y-2">
                  {selectedProject.wins.map((w, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{w}</span>
                    </div>
                  ))}
                </div>
              </div>
              {selectedProject.stack && selectedProject.stack.length > 0 && (
                <div>
                  <h4 className="font-bold mb-3 text-slate-900">Stack & methods</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map(s => (
                      <span key={s} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <h4 className="font-bold mb-3 text-slate-900">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(t => (
                    <span key={t} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {contactOpen && (
        <div
          onClick={() => setContactOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-6 relative">
              <button onClick={() => setContactOpen(false)} className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-lg">
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-bold mb-1">Let's talk</h3>
              <p className="text-indigo-100 text-sm">Best way to reach me:</p>
            </div>
            <div className="p-6 space-y-3">
              <a href="mailto:acmcovington@gmail.com" className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl hover:border-indigo-400 hover:bg-indigo-50/50 transition-all group">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email</div>
                  <div className="font-medium">acmcovington@gmail.com</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/anna-covington-3a1357a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl hover:border-indigo-400 hover:bg-indigo-50/50 transition-all group">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">LinkedIn</div>
                  <div className="font-medium">Anna Covington</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Based in</div>
                  <div className="font-medium">Baltimore, MD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap justify-between items-center gap-4 text-sm text-slate-500">
          <div>© {new Date().getFullYear()} Anna Myers Covington</div>
          <div className="flex items-center gap-4">
            <span>Baltimore, MD</span>
            <button onClick={() => setContactOpen(true)} className="text-indigo-600 hover:text-indigo-800 font-medium">Get in touch →</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
