import React, { useState, useMemo } from 'react';
import { Mail, Phone, MapPin, Linkedin, ChevronRight, Award, TrendingUp, Users, Zap, Target, Brain, Shield, Rocket, Heart, Calendar, Building2, Briefcase, GraduationCap, Sparkles, Filter, X, ArrowUpRight, CheckCircle2, Star, DollarSign, Trophy, Lightbulb, Network, BookOpen, Quote } from 'lucide-react';

export default function AnnaPortfolio() {
  const [activeTab, setActiveTab] = useState('story');
  const [filterTag, setFilterTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  const stats = [
    { label: 'Years on the VA account', value: '14', icon: Shield },
    { label: 'PY26 pursuits led / contributed to', value: '$673M', icon: Target },
    { label: 'PY26 wins as VA SME', value: '$15.8M', icon: Trophy },
    { label: 'Largest contract shaped + won (EMACS)', value: '$119M', icon: Building2 },
    { label: 'VA AI pipeline built', value: '$400M+', icon: Rocket },
    { label: 'VA AI practitioner community built', value: '220+', icon: Network },
  ];

  const superpowers = [
    {
      icon: Brain,
      title: 'The Translator',
      desc: 'Fluent in executive and engineer. I turn ambiguous business problems into technical roadmaps — and vice versa — without losing anyone in the room. It\'s how the EMACS AI Strategy became a $4.1M contract modification.',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: Shield,
      title: 'The VA Whisperer',
      desc: '14 years on the VA account. I know VBMS, iFAMS, Palantir, Summit, Dynamics, VSignals — the systems, the stakeholders, the day-to-day realities. New teams get productive in days. Leaders text me when things get stuck.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Lightbulb,
      title: 'The Greenspace Originator',
      desc: 'After the administration change, while others fought for shrinking work, I built 7 greenspace pursuits. Including 526EZ.AI — a $500K prototype I originated with zero outside investment by combining two assets with a genAI solution.',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Heart,
      title: 'The Magic Sorting Hat',
      desc: 'Because I\'ve worked across every GPS sector and OP, people bring me their random green-dot questions. I meet people at every level, and I know who to connect to what. Growing a business isn\'t a one-woman show — it\'s the right ideas and people at the right time.',
      color: 'from-rose-500 to-pink-600',
    },
  ];

  const projects = [
    {
      year: '2023–Present',
      title: 'EMACS — Experience Measurement & Configuration Services',
      client: 'VA — Office of the Chief Technology Officer',
      role: 'Data Strategist / DEMA Lead / MCT AI Lead',
      value: '$119.7M / 5-year',
      tags: ['AI Strategy', 'Data Governance', 'VA', 'Leadership'],
      wins: [
        'Shaped the contract, led the data component of the tech volume — VA CS&D\'s largest FedHealth win at $160M ceiling',
        'Grew base-year funding 27% (added O&M/Help Desk, CXPA, ESignals); 59% between base year and OY1 with MCT addition',
        'Won $350K CXI governance mod → formalized into two-year $14M modification',
        'Drove $4.1M option-year mod by shifting focus from O&M to AI use case discovery and development',
        'Set strategy for Insights Engine — one of the first conversational genAI tools inside VA, sitting on 17K+ OCTO research reports',
        'Client kudos on Trust SOP: "This is amazing; super cool, and far exceeds my expectations… I never thought I\'d be so excited about an SOP"',
        'Delivered Data Management Strategy for the largest CX implementation in federal government',
      ],
      stack: ['Azure Databricks', 'Azure Data Factory', 'Collibra', 'Immuta', 'Jira'],
      featured: true,
    },
    {
      year: '2025–Present',
      title: '526EZ.AI — Greenspace Origination',
      client: 'VBA CBUL / Cross-GPS + Commercial',
      role: 'Product Owner / Originator',
      value: '$500K prototype → GPS + Commercial',
      tags: ['AI/ML', 'Innovation', 'Origination', 'VA'],
      wins: [
        'Originated the concept: combine two Deloitte assets with a genAI solution to automate the VA Compensation benefits form (526EZ)',
        'Pitched to leadership, assembled a dev team through the AI Factory — zero outside investment',
        'Prototype demoed to TAP pursuit December 2025; targeting both GPS and commercial buyers Jan 2026',
        'Advanced with Figma prototypes, robust backend extraction, real (redacted) record validation',
        'Building pipeline for related form automation (Separation Health Assessment, etc.)',
      ],
      stack: ['Figma', 'GenAI', 'VA.gov APIs'],
      featured: true,
    },
    {
      year: '2024–2025',
      title: 'OEI NCVAS — Palantir to Databricks Migration',
      client: 'VA Office of Enterprise Integration / CDO',
      role: 'Second Chair (18 months)',
      value: '$112–200M pursuit',
      tags: ['Data Platform', 'Proposal Leadership', 'VA'],
      wins: [
        'Led team of 15 tech writers + 5 pre-RFP support on $200M data analytics pursuit',
        'Built coalition of 4 teaming partners, 30+ writers, DataBricks + Palantir alliances',
        'Navigated 3 RFP drop dates, sponsoring-office reorg (into 4 offices) 2 months before drop, and turbulent Palantir political climate',
        'Solutioning across SEMOSS, StarDog, PTEMS, and DAIMO alternatives',
      ],
      stack: ['Palantir', 'Databricks', 'SEMOSS'],
    },
    {
      year: '2025–Jul 2026',
      title: 'PTEMS Dynamics Portfolio — Member Services',
      client: 'VA — PTEMS $2B IDIQ vehicle',
      role: 'IT PM (Member Services), acting Deputy',
      value: '$32M portfolio',
      tags: ['Delivery', 'PMO', 'VA'],
      wins: [
        'Stepped in on 3 days notice to lead team PMO through PTO gap, government shutdown, and holiday coverage',
        'Implemented onboarding automation saving 5+ hours/week = ~$25K over PoP',
        'Approved $997K Genesys Integration LOE (3% growth on $32M portfolio)',
        'Grew AI&E footprint on portfolio from 9 to 20 people (Oct → Mar)',
        'Migrated 17 Teams sites into 4, standardized kickoff/comms/agile approach across 7 scrum masters and 7 ITPMs',
      ],
      stack: ['Microsoft Dynamics', 'Power Platform', 'Jira', 'Azure DevOps'],
      featured: true,
    },
    {
      year: '2024–Present',
      title: 'VA AI Factory',
      client: 'VA — Cross-account AI enablement',
      role: 'Contributor / Use Case Curator',
      value: '30+ use cases · $60M sales FYTD',
      tags: ['AI Strategy', 'VA', 'Enablement'],
      wins: [
        '$60M in AI&E OP VA account sales since June (FYTD)',
        '$40M in AI&E OP VA account staffed reviews since June — 50% growth P1→P6',
        'Curated 30+ use cases for the VA AI Factory',
        'Trained 200+ VA account practitioners on GenAI tools (Sidekick, GitHub Copilot)',
        'Built community of 220+ VA AI practitioners',
      ],
      stack: ['GenAI', 'Sidekick', 'GitHub Copilot'],
    },
    {
      year: '2024–Present',
      title: 'FedHealth CDAO Liaison',
      client: 'Cross-account: VA, CMS, CDC, SSA, DoD Health + 3 more',
      role: 'Sector Liaison',
      value: 'CDAO Roadshow · 8 accounts',
      tags: ['Community', 'AI Strategy', 'Sector Leadership'],
      wins: [
        'Built and ran the CDAO Roadshow across 8 FedHealth accounts',
        'Established plan to grow eminence of CDAO accelerators in current FedHealth sector delivery',
        'Leveraged existing FedHealth account relationships to increase brand recognition of CDAO services',
        'Strengthened internal partnerships within FedHealth accounts to embed CDAO collateral in pursuit pipelines',
        'Co-led greenspace initiative on agentic AI for data governance — discovery lab planned with HealthPrism on healthcare entity matching',
      ],
      stack: ['Jupiter', 'CDAO Accelerators'],
    },
    {
      year: '2023',
      title: 'V-CHAMPS — Veterans Cardiac Health AI Challenge',
      client: 'HDAI Foundry (VA + FDA)',
      role: 'Project Manager',
      value: 'HDAI Foundry investment',
      tags: ['AI/ML', 'Proposal Leadership', 'VA'],
      wins: [
        'Led proposal team and kickoff between FDA and VA accounts',
        'Integrated SFLScientific resources onto NVIDIA DGX cluster',
        'Built account investment strategy for Phase 2 driving work to AVAIL IDIQ',
        'Delivered reusable Model Card asset to Deloitte CFG toolchest',
      ],
      stack: ['NVIDIA DGX', 'GitHub', 'CFG Toolchest'],
    },
    {
      year: '2023',
      title: 'PAAS — VBA Privacy Act Automation Services',
      client: 'Veterans Benefits Administration',
      role: 'Testing Lead / Pre-Award Lead',
      tags: ['Automation', 'AI/ML', 'VA', 'Program Launch'],
      wins: [
        'Onboarded 72 team members in 3 days through all-day hypercare — client called it "the most thoroughly prepared and mature pre-award support" he\'d ever experienced',
        'Created Go-To-Market plan for data scientists using LLaMA for scaled normalization on scanned documents',
        'Solution later ATO\'d by VA — springboard for current VBA Automate to Execute Claims Campaign',
      ],
      stack: ['UiPath', 'SmarText', 'SecureRelease', 'LLaMA'],
      featured: true,
    },
    {
      year: '2022–2023',
      title: 'VBA Medical Examination Office, Region 4',
      client: 'VBA — MDE',
      role: 'Change Management Lead / SEMOSS PM',
      tags: ['Change Management', 'ICAM', 'VA'],
      wins: [
        'Handled 100+ change requests in 8 weeks post go-live',
        'Delivered AoA for ICAM solution in multi-cloud environment in 4 weeks',
        'Grew SEMOSS dev team from 10 to 18 through increased transparency and capacity planning',
        'Built WLM system + centralized reporting repo for 300+ users; managed 100+ help desk tickets for access',
      ],
      stack: ['Salesforce', 'SEMOSS', 'Okta', 'Azure DevOps'],
    },
    {
      year: '2022',
      title: 'VBA Loan Guaranty Staff Support',
      client: 'VBA (sub to Dynamic Integrated Services, SDVOSB)',
      role: 'Lead / Replacement Manager',
      tags: ['Strategy', 'VA', 'Stakeholder Management'],
      wins: [
        'Stepped in as replacement manager during family leave — cleared prime for teaming agreement within a day',
        '20 days: Complete environmental scan of mortgage industry with federal-lending stakeholder framework',
        '45 days: Operational strategy for enhanced employee morale',
      ],
      stack: ['Sprinklr'],
    },
    {
      year: '2022',
      title: 'VBA Bot Challenge — CAPRI Record Export',
      client: 'VBA Compensation Service',
      role: 'Team Lead',
      tags: ['Automation', 'Innovation', 'VA'],
      wins: [
        'Won User Experience category',
        'Solution projected to release 1.1M opportunity hours for VBA Compensation workers',
      ],
      stack: ['UiPath'],
    },
    {
      year: '2021–2022',
      title: 'SSA Enterprise Architecture Repository Migration',
      client: 'Social Security Administration',
      value: '$1.8M completed → $1.8M O&M won',
      role: 'Project Management',
      tags: ['Enterprise Architecture', 'SAFe', 'SSA'],
      wins: [
        'Rewrote SOW day one — gained concurrence for new approach',
        'Called strategic pause that saved 6 contractors from wasted development LOE',
        'Delivered first phase of Architecture First approach (white paper won)',
        'Grew SSA Account PMO from 5 to 20 to 31 people across three quarters',
      ],
      stack: ['ServiceNow', 'Planview', 'TOGAF', 'SAFe'],
    },
    {
      year: '2021',
      title: 'SSA Authorization Architecture Target State',
      client: 'SSA — ICAM Program',
      role: 'Assistant PM',
      tags: ['Cyber', 'ICAM', 'SSA'],
      wins: [
        'Planned and facilitated Industry Day: RadiantLogic, Okta, ForgeRock, SailPoint, Pega, Axiomatic',
        '50 participants across 3 days of virtual AuthZ target-state sessions',
      ],
      stack: [],
    },
    {
      year: '2020',
      title: 'SEMOSS at MSPV / National COVID-19 Request Tool',
      client: 'Veterans Health Administration',
      role: 'Scrum Master',
      tags: ['COVID Response', 'Supply Chain', 'VA'],
      wins: [
        'Enabled 170+ VA facilities to request critical PPE/supplies during pandemic',
        'Led Tiger Team building the National COVID-19 Request Tool',
      ],
      stack: ['SEMOSS', 'VAAF', 'SAFe'],
    },
    {
      year: '2018–2020',
      title: 'SEMOSS Analytics for FMBT',
      client: 'VA Financial Management Business Transformation',
      role: 'Team Lead',
      tags: ['Analytics', 'Data', 'VA', 'Team Building'],
      wins: [
        'Grew team from 2 to 6 to bring SEMOSS analytics to FMBT',
        'Delivered 12 complex use cases in 4 months — secured the optional T&M CLIN, which drove significant profitable revenue for Deloitte',
        '23 complex use cases in year one across PMO, OCM, and TSD',
        '30% of visualizations supported by near-real-time data engineering',
      ],
      stack: ['SEMOSS', 'Azure Government', 'FEAF', 'DoDAF', 'VAAF'],
    },
    {
      year: '2013–2017',
      title: 'VBMS BART — VA Benefits Management System',
      client: 'VBA (VetsAmerica sub to Deloitte, then Deloitte)',
      role: 'BA → Scenarios Lead → PM → Strategic Measures Lead',
      tags: ['Requirements', 'VA', 'Foundational'],
      wins: [
        'Foundational VA claims-processing expertise — the reason "she can integrate into any VA project seamlessly"',
        'Maintained highest retention rate of project talent through quarterly professional development interviews',
        'Government leads regularly requested her support for requirements-gathering sessions',
      ],
      stack: ['IBM Rational', 'Tableau', 'SharePoint', 'VBMS'],
    },
  ];

  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  const filteredProjects = useMemo(() =>
    filterTag === 'All' ? projects : projects.filter(p => p.tags.includes(filterTag)),
    [filterTag]
  );

  const testimonials = [
    {
      quote: "With Anna's contributions, the EMACS team won a $160M contract — the largest win for CSAD in FedHealth. She arduously worked towards bringing common understanding around the infrastructure and the current VA data strategy as the place to start the solutioning sessions.",
      author: "Ginny Parker",
      context: "EMACS pursuit lead",
    },
    {
      quote: "Anna was able to seamlessly integrate into our project with minimal education on the nature of the project because she's been involved in VBA claims processing for the past decade. She came in, established governance, observed three programmatic areas of improvement, piloted a solution, requested approval and additional resources, and then executed a project-wide data cleanse and migration within four weeks. She saw what needed to be done and she got it done without any impact to the users.",
      author: "Maher Khalil",
      context: "MDE Region 4",
    },
    {
      quote: "Anna is an exceptional addition to a team that was struggling to hone the narrative of the business value and the vision for a new US Innovation thread for Space Logistics Enabling Services. Within a week she had completely immersed herself into understanding the space logistics industry — from competitors to technology, from international regulations to US Space Force base operations.",
      author: "Jason Rivkin",
      context: "US Innovation — Space Logistics",
    },
    {
      quote: "This is amazing; super cool, and far exceeds my expectations for where I'd thought you'd be at this point. I never thought I'd be so excited about an SOP. Really appreciate you taking this so seriously, and appreciate the thoughtfulness, time, and attention here.",
      author: "Barbara Morton",
      context: "Deputy Director, Veteran Experience Office, VA — on the Trust SOP delivery, EMACS",
    },
    {
      quote: "She has a great brand, especially for the current environment — always leaning forward, always looking to connect the dots, in the market the right amount, on pursuits where 'if she wasn't there it wouldn't have been a win.' Wishes more of her peers, to include SMs, were like her in regards to her constant horizon scanning and market presence.",
      author: "Spencer Hollis",
      context: "PY26 leadership feedback",
    },
  ];

  const skills = {
    'AI & Data Strategy': ['GenAI Strategy', 'Agentic AI', 'LLaMA', 'Data Governance', 'Data Strategy', 'Master Data Management', 'Model Cards', 'Trustworthy AI'],
    'Platforms & Tools': ['Azure Databricks', 'Azure Data Factory', 'Palantir', 'Collibra', 'Immuta', 'SEMOSS', 'Microsoft Dynamics', 'ServiceNow', 'Salesforce', 'UiPath', 'NVIDIA DGX', 'GitHub Copilot', 'Sidekick'],
    'Frameworks & Methodologies': ['SAFe / Scaled Agile', 'TOGAF', 'FEAF v2.0', 'DoDAF v2.02', 'VAAF v1.0', 'ICAM AuthZ', 'Human Centered Design', 'Cost-Benefit Analysis'],
    'Consulting & Leadership': ['Proposal Leadership', 'Executive Facilitation', 'Change Management', 'Team Building', 'Client Advisory', 'Stakeholder Management', 'Pricing / BOE', 'TPRM & Teaming Agreements'],
    'Domain Expertise': ['VA / VHA / VBA', 'SSA', 'CMS', 'Federal Health', 'Veteran Ecosystem', 'Claims Processing', 'Enterprise Architecture', 'CX / VX / EX'],
  };

  const coachingWins = [
    { name: 'Alain Duroseau', outcome: 'Promoted to Manager' },
    { name: 'Josh Lee', outcome: 'Promoted' },
    { name: 'Caitlin Sale', outcome: 'Promoted (2 years early, C→SC)' },
    { name: 'Zack White', outcome: 'Promoted (1 year early, C→SC)' },
    { name: 'Breauna Smith', outcome: 'Promoted, transitioned PDM→Traditional' },
    { name: 'Karina Asmar', outcome: 'Promoted to Manager' },
    { name: 'Multiple SAWA cohorts', outcome: 'Since the first pilot in 2022' },
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
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-cyan-300 to-purple-300 bg-clip-text text-transparent tracking-wide">AMC</div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-cyan-300 tracking-wider uppercase">Data · AI · Veteran Impact</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                Anna Myers <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Covington</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
                Manager at Deloitte Consulting. Data & AI strategist who helps executives see the through-line from their data to strategic impact — with 14 years living inside the Veteran ecosystem.
              </p>

              <p className="text-base md:text-lg text-slate-400 mb-8 max-w-3xl italic leading-relaxed">
                "I bring a strong track record of turning AI strategy into operational results by translating big-picture ideas into practical plans, clear priorities, and measurable execution. I'm especially effective at leading teams through ambiguity, transition, and complex technical environments — helping people stay aligned, move decisively, and maintain momentum even when the path forward isn't fully defined. My focus is on creating structure where there is uncertainty, building trust across stakeholders, and making sure strategy doesn't stay theoretical — it becomes something teams can actually deliver."
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">AI & Data · AI & Engineering OP</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">GPS Federal Health</span>
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
                  I've worked alongside Deloitte on the VA account since 2012 — 14 years now. I was the program manager of our teaming partner for four years before making the intentional decision — with my husband as our stay-at-home parent — to come over to Deloitte full-time.
                </p>
                <p>
                  My background is non-traditional: applied community psychology at Marymount, then a Master's in Public Administration at American University focused on cost-benefit analysis of public programs. That policy-wonk foundation is why the AI & Data side of the AI & Engineering OP fits me — I'm energized by seeing taxpayer investments produce real outcomes for real people.
                </p>
                <p>
                  For the last 8 years I've worked across every Operating Portfolio inside VA, specifically in data governance and behavioral data assets for health-equity mission plays. I bring my collection of people to explore whitespace across VA. The value I bring is that I have enough technical knowledge to understand the solution — and I can put it in the context of incredibly complex business and technical environments.
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
                I'm on the path to Senior Manager on the AI & Data side of the AI & Engineering OP, positioned to fill an SM gap on the VA and SLHE accounts. My focus is data governance and interoperability transformation across Federal Health — with an addressable spend of ~$300M+ across the sector.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4 border border-indigo-100">
                  <div className="text-xs font-medium text-indigo-600 uppercase tracking-wide">Next Chapter</div>
                  <div className="text-lg font-bold mt-1">New flagship delivery role</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-indigo-100">
                  <div className="text-xs font-medium text-indigo-600 uppercase tracking-wide">Active Sales</div>
                  <div className="text-lg font-bold mt-1">OEI NCVAS + DAIMO recompetes</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-indigo-100">
                  <div className="text-xs font-medium text-indigo-600 uppercase tracking-wide">Vehicles</div>
                  <div className="text-lg font-bold mt-1">PTEMS $2B IDIQ, T4NG 2.0</div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Target className="w-6 h-6 text-cyan-400" /> Best-fit conversations</h2>
              <p className="text-slate-300 mb-6">If you're working on any of these, I'd love to talk:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Stand up or scale a data governance program',
                  'Deploy GenAI or agentic AI on complex enterprise data',
                  'Navigate a VA, VBA, VHA, or FedHealth pursuit',
                  'Rescue a stalled EA, migration, or platform effort',
                  'Build a proposal team and win a Federal Health opportunity',
                  'Turn a scattered analytics function into a strategic capability',
                  'Bring an SDVOSB / small-business teaming partner into a play',
                  'Coach a rising female consultant or SC toward manager',
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
                            <DollarSign className="w-3 h-3" />{p.value}
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
            {testimonials.map((t, i) => (
              <blockquote key={i} className="relative bg-gradient-to-br from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-r-xl p-6 md:p-8">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-indigo-200" />
                <p className="text-slate-800 italic pl-10 leading-relaxed text-lg">{t.quote}</p>
                <cite className="not-italic text-sm text-slate-600 pl-10 mt-4 block">
                  <span className="font-semibold text-slate-900">— {t.author}</span>
                  <span className="text-slate-500"> · {t.context}</span>
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
                I'm not only transforming data integration for our clients — I focus on ensuring we have the #1 talent experience, with a specific interest in developing senior consultants and growing the next generation of female leaders. I've supported every S&A Women & Allies mentoring cohort since the very first pilot in 2022.
              </p>
              <p className="text-slate-700 leading-relaxed mt-3 italic">
                "How am I able to bring people together? By recognizing that growing this business is not a one-woman show. It's a collection of ideas and people, at the right time for the right thing."
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" /> Coaching wins
              </h3>
              <p className="text-sm text-slate-600 mb-4">Awarded applause award for superior coaching/mentoring in PY24. Multiple coachees promoted early.</p>
              <div className="grid md:grid-cols-2 gap-3">
                {coachingWins.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200">
                    <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{c.name}</div>
                      <div className="text-xs text-slate-500">{c.outcome}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Community leadership</h3>
              <div className="space-y-3">
                {[
                  { title: 'FedHealth CDAO Liaison', desc: 'Cross-account community of 220+ VA AI practitioners. CDAO Roadshow across 8 accounts.' },
                  { title: 'SAWA (S&A Women & Allies) Mentor', desc: 'Since pilot cohort in 2022 — through Pilot I, Pilot II, Live cohorts.' },
                  { title: 'Baltimore Beacons Recruiting Strategy', desc: 'Created and executed strategy for central Maryland universities (focus on HBCUs) for SSA, CMS, NSA, and Maryland State accounts.' },
                  { title: 'GPS Consulting Services Faculty (DFX)', desc: 'US Consulting Services Faculty Program.' },
                  { title: 'Lunch & Learns', desc: 'Trained 100+ practitioners on VA Discovery, WISE + Center for Women Veterans, cost-benefit analysis, data management best practices.' },
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
                  <div className="text-sm">"Cost-Benefit Analysis of the Clubhouse Model of Psychosocial Rehabilitation" — selected by the Costs, Effectiveness, Benefits, and Economics TIG. Collaboration with UMass Worcester Medical School, Department of Psychiatry, Program for Clubhouse Research, and the International Center for Clubhouse Development.</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Career trajectory</h2>
              <div className="relative border-l-2 border-indigo-200 ml-4 pl-8 space-y-8">
                {[
                  { year: '2026', title: 'Senior Manager, Year 1 (path)', org: 'Deloitte Consulting LLP', note: 'AI & Data · AI & Engineering OP — targeting VA + SLHE gap' },
                  { year: '2023–Present', title: 'Manager', org: 'Deloitte Consulting LLP', note: 'AI & Data — EMACS Data Strategy Lead → PTEMS Dynamics → next chapter' },
                  { year: '2020–2023', title: 'Senior Consultant → Manager', org: 'Deloitte Consulting LLP', note: 'SSA PMO, MDE, PAAS, HDAI Foundry — first year managing' },
                  { year: '2016–2020', title: 'Consultant → Senior Consultant', org: 'Deloitte Consulting LLP', note: 'VBMS BART, FMBT, MSPV — deep VA immersion; won optional CLIN in year one on FMBT' },
                  { year: '2013–2016', title: 'Business Analyst → Project Manager', org: 'VetsAmerica Consulting (Sub to Deloitte)', note: 'Program manager for the teaming partner — highest retention rate through quarterly PD interviews' },
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
                    <DollarSign className="w-3 h-3" />{selectedProject.value}
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
              <a href="mailto:annacovington@deloitte.com" className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl hover:border-indigo-400 hover:bg-indigo-50/50 transition-all group">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email</div>
                  <div className="font-medium">annacovington@deloitte.com</div>
                </div>
              </a>
              <a href="tel:+12022155270" className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl hover:border-indigo-400 hover:bg-indigo-50/50 transition-all group">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Mobile</div>
                  <div className="font-medium">+1 (202) 215-5270</div>
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
            <span>Manager · Deloitte Consulting LLP · Baltimore, MD</span>
            <button onClick={() => setContactOpen(true)} className="text-indigo-600 hover:text-indigo-800 font-medium">Get in touch →</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
