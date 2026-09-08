export const cvData = {
  personal: {
    name: "Sudipto Biswas",
    title: "Undergraduate Researcher",
    subtitle: "Focusing on Software Testing, Benchmark Reproducibility & On-Device ML",
    targetDegree: "Seeking Ph.D. Positions in Computer Science / Software Engineering (Fall 2027 / 2026)",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    email: "sudiptoswe@gmail.com",
    phone: "+880 1765-732961",
    github: "https://github.com/sudipto-swe",
    githubUsername: "sudipto-swe",
    scholar: "https://scholar.google.com",
    cvPdfUrl: "#", // Direct download trigger
    about: "I am an undergraduate researcher in Software Engineering at Daffodil International University, Dhaka. My research spans empirical software engineering, flaky test detection reproducibility, AST-based static code analysis, and memory-constrained LLM quantization for edge hardware. I am actively seeking Ph.D. opportunities in the United States starting Fall 2027 / 2026."
  },
  
  stats: [
    { label: "Manuscripts Target", value: "4", detail: "ACM TOSEM, IEEE TMC, ACM FSE, USENIX Sec" },
    { label: "Audit Benchmark", value: "673", detail: "IDoFT Test Pairs (239 Flaky / 434 Non-Flaky)" },
    { label: "Quantized Generations", value: "25k+", detail: "Code-LLM Evaluation Runs" },
    { label: "LLM Hallucination Reduction", value: "78.9%", detail: "PyPI AST Reflection Loop" }
  ],

  researchAreas: [
    {
      title: "Software Testing & Benchmark Reproducibility",
      description: "Auditing static test flakiness detectors, uncovering vocabulary leakage, label noise biases, and evaluating test-suite flakiness on large-scale open-source benchmarks (IDoFT).",
      icon: "ShieldAlert"
    },
    {
      title: "On-Device LLM Quantization & Efficiency",
      description: "Formulating Hessian-guided mixed-precision quantization frameworks (PTQ, AWQ, NF4) combining activation variance, gradient norms, and knapsack optimization for edge chips.",
      icon: "Cpu"
    },
    {
      title: "Code-LLM Robustness & Program Analysis",
      description: "Developing AST transformation suites to test code generation stability under quantization, and constructing static reflection loops for package hallucination mitigation.",
      icon: "Code2"
    }
  ],

  manuscripts: [
    {
      id: "flakeguard",
      title: "FlakeGuard: A Critical Reproduction Study of TF-IDF-Based Flaky Test Detection on the IDoFT Benchmark",
      authors: ["Sudipto Biswas"],
      targetVenue: "Targeted for ACM Transactions on Software Engineering and Methodology (TOSEM)",
      year: "2026",
      status: "Manuscript in Preparation",
      badge: "Software Testing Audit",
      abstract: "Static flaky test detection promises early warning without expensive test executions. In this reproduction audit of FLAST's published F1 = 0.988 on the checksummed IDoFT benchmark (673 test pairs across 44 projects), we demonstrate that under project-grouped GroupKFold evaluation, leakage-checked FLAST collapses to F1 = 0.258—below the trivial 0.524 baseline. We uncover 5 critical red flags (RF1–RF5) including cross-split vocabulary leakage and silent GumTree AST-diff failures. We demonstrate that commit-graph and PR features carry true predictive signal (F1 = 0.589, McNemar p = 4.8e-8 vs FLAST) and release a transparent 194-check audit script with 5-seed sensitivity analysis.",
      highlights: [
        "Audited FLAST on 673 checksummed IDoFT pairs (239 flaky, 434 non-flaky across 44 projects).",
        "Exposed 5 red flags (RF1–RF5) causing inflated evaluation metrics.",
        "Demonstrated collapse of naive AST diffs (F1 = 0.258) under strict GroupKFold.",
        "Proved commit-graph & PR features deliver robust predictive signal (F1 = 0.589, McNemar p = 4.8×10⁻⁸)."
      ],
      bibtex: `@article{biswas2026flakeguard,
  title={FlakeGuard: A Critical Reproduction Study of TF-IDF-Based Flaky Test Detection on the IDoFT Benchmark},
  author={Biswas, Sudipto},
  journal={ACM Transactions on Software Engineering and Methodology (TOSEM)},
  note={Manuscript in Preparation},
  year={2026}
}`
    },
    {
      id: "ampq",
      title: "Adaptive Mixed-Precision Quantization for Efficient On-Device LLM Inference",
      authors: ["Sudipto Biswas", "Md Abdul Kader"],
      targetVenue: "Undergraduate Thesis Manuscript, Targeted for IEEE Transactions on Mobile Computing (TMC) / IEEE Access",
      year: "2026",
      status: "Thesis Manuscript in Preparation",
      badge: "On-Device ML",
      formula: "S = 0.3\\hat{\\sigma}^2 + 0.3\\hat{\\gamma} + 0.4\\hat{\\tau}",
      abstract: "Deploying Large Language Models on mobile hardware requires aggressive quantization without severe perplexity degradation. We propose AMPQ, a static Post-Training Quantization (PTQ) framework that fuses activation variance (σ²), gradient norm (γ), and Hutchinson Hessian traces (τ, K=5) into a composite sub-layer sensitivity metric. Using a greedy knapsack solver, AMPQ optimal assigns precision bits ({4, 8, 16}) per layer, achieving 3.04× compression on Gemma-2-2B with perplexity 47.01 (outperforming AutoAWQ's 52.88 and RTN's 59.51). Tested on Apple Silicon (M5) at 20.7 tok/s (754.6 mJ/tok) and physical Snapdragon 888 hardware with zero OOM errors.",
      highlights: [
        "Fused activation variance, gradient norms, and Hessian traces into unified sensitivity index S.",
        "Greedy knapsack bit allocation compressed Gemma-2-2B by 3.04× with 47.01 perplexity.",
        "Outperformed standard AutoAWQ (52.88) and 4-bit RTN baseline (59.51).",
        "Validated physical on-device execution: 20.7 tok/s @ 754.6 mJ/tok on M5 & OOM-free Snapdragon 888 fit."
      ],
      bibtex: `@article{biswas2026ampq,
  title={Adaptive Mixed-Precision Quantization for Efficient On-Device LLM Inference},
  author={Biswas, Sudipto and Kader, Md Abdul},
  journal={IEEE Transactions on Mobile Computing (TMC)},
  note={Undergraduate Thesis Manuscript},
  year={2026}
}`
    },
    {
      id: "robustcode",
      title: "RobustCode-Bench: Structural Brittleness in Quantized Code-LLMs",
      authors: ["Sudipto Biswas"],
      targetVenue: "Exploration Project, Targeted for ACM International Conference on the Foundations of Software Engineering (FSE)",
      year: "2025",
      status: "Independent Exploration",
      badge: "Code-LLM Evaluation",
      abstract: "Evaluated structural code generation robustness across 4 semantics-preserving AST transformations (T1-T4) on 663 verified HumanEval/MBPP benchmark tasks. Analyzed 20,760 sandboxed generations across Qwen2.5-Coder-7B, DeepSeek-Coder-6.7B, and CodeLlama-7B at FP16 and 4-bit NF4 precision. Revealed identifier renaming (T2) degrades Pass@1 by up to 25.4%, and 4-bit quantization amplifies structural brittleness up to 16.6× on resource-constrained models.",
      highlights: [
        "Constructed 4 AST semantic transformations (T1–T4) across 663 HumanEval/MBPP tasks.",
        "Ran 20,760 sandboxed generations across 3 leading open-source Code-LLMs.",
        "Identified 25.4% Pass@1 drop on identifier renaming (T2).",
        "Discovered 4-bit NF4 quantization amplifies AST brittleness up to 16.6×."
      ],
      bibtex: `@inproceedings{biswas2025robustcode,
  title={RobustCode-Bench: Structural Brittleness in Quantized Code-LLMs},
  author={Biswas, Sudipto},
  booktitle={ACM International Conference on the Foundations of Software Engineering (FSE)},
  note={Exploration Project},
  year={2025}
}`
    },
    {
      id: "astreflect",
      title: "AST-Reflect: Mitigating Package Hallucinations in Quantized Code LLMs",
      authors: ["Sudipto Biswas"],
      targetVenue: "Exploration Project, Targeted for USENIX Security Symposium",
      year: "2025",
      status: "Independent Exploration",
      badge: "LLM Security & Reflection",
      abstract: "Quantized Code-LLMs suffer from package hallucinations, importing non-existent external libraries that create software supply chain vulnerabilities. We quantified package hallucination frequencies across 4,806 generations over a 160-task elicitation corpus under a 2-arm decoding design (t = 0.8 vs t = 0.2). Built AST-Reflect, an external PyPI-oracle reflection loop that parses generated code ASTs, checks library existence against PyPI, and prompts targeted self-correction. AST-Reflect resolved 78.9% of hallucinations with zero canonical Pass@1 regression.",
      highlights: [
        "Quantified package hallucinations across 4,806 generations on a 160-task elicitation corpus.",
        "Built PyPI-oracle static AST parser and feedback loop.",
        "Eliminated 78.9% of hallucinated imports without degrading canonical Pass@1 benchmark score."
      ],
      bibtex: `@inproceedings{biswas2025astreflect,
  title={AST-Reflect: Mitigating Package Hallucinations in Quantized Code LLMs},
  author={Biswas, Sudipto},
  booktitle={USENIX Security Symposium},
  note={Exploration Project},
  year={2025}
}`
    }
  ],

  experience: [
    {
      role: "Independent Researcher",
      period: "Aug 2025 – Present",
      project: "FlakeGuard — Methodological Audit of Static Flaky Test Detectors",
      target: "ACM TOSEM",
      location: "Dhaka, Bangladesh",
      details: [
        "Audit Design: Audited FLAST's published F1 = 0.988 on a frozen, checksummed IDoFT benchmark (673 pairs: 239 flaky, 434 non-flaky across 44 projects) under strict project-grouped GroupKFold evaluation.",
        "Defect Discovery: Demonstrated that leakage-checked FLAST collapses to F1 = 0.258 (below the trivial 0.524 baseline). Uncovered 5 red flags (RF1–RF5) including cross-split vocabulary leakage and silent GumTree AST-diff failures (0/673 success).",
        "Corrective Findings: Proved commit-graph/PR features carry true predictive signal (F1 = 0.589, McNemar p = 4.8 × 10⁻⁸ vs. FLAST, paired cluster bootstrap ΔF1 = -0.33). Released a transparent 194-check audit script and five-seed sensitivity analysis."
      ]
    },
    {
      role: "Undergraduate Thesis Researcher",
      period: "Jan 2026 – Present",
      project: "AMPQ — Adaptive Mixed-Precision Quantization",
      supervisor: "Dr. Md. Abdul Kader",
      target: "IEEE TMC / IEEE Access",
      location: "Dhaka, Bangladesh",
      details: [
        "Sensitivity Formulation: Developed a static PTQ framework fusing activation variance (σ²), gradient norm (γ), and Hutchinson Hessian traces (τ, K = 5) into a composite sub-layer sensitivity metric (S = 0.3σ̂² + 0.3γ̂ + 0.4τ̂).",
        "Knapsack Optimization: Solved memory-constrained precision assignment ({4, 8, 16} bits) via a greedy knapsack solver, compressing Gemma-2-2B by 3.04× and recovering perplexity to 47.01 (vs. 59.51 Uniform 4-bit RTN baseline, outperforming AutoAWQ's 52.88).",
        "Hardware Deployment: Sustained 20.7 tok/s at 754.6 mJ/tok on Apple Silicon (M5) and verified OOM-free memory fit on a physical Snapdragon 888 device."
      ]
    },
    {
      role: "Independent Researcher",
      period: "Feb 2025 – Aug 2025",
      project: "RobustCode-Bench — Structural Brittleness in Quantized Code-LLMs",
      target: "ACM FSE",
      location: "Dhaka, Bangladesh",
      details: [
        "AST Transformations: Formulated 4 semantics-preserving AST transformations (T1–T4) across 663 verified HumanEval/MBPP tasks, running 20,760 sandboxed generations across 3 models (Qwen2.5-Coder-7B, DeepSeek-Coder-6.7B, CodeLlama-7B) at FP16 and 4-bit NF4.",
        "Empirical Analysis: Discovered identifier renaming (T2) degrades Pass@1 by up to 25.4%, and 4-bit quantization amplifies structural brittleness up to 16.6× on weaker models."
      ]
    },
    {
      role: "Independent Researcher",
      period: "Jun 2024 – Jan 2025",
      project: "AST-Reflect — Mitigating Package Hallucinations in Quantized Code LLMs",
      target: "USENIX Security",
      location: "Dhaka, Bangladesh",
      details: [
        "Hallucination Quantification: Quantified package hallucinations across 4,806 generations over a 160-task elicitation corpus under a 2-arm decoding design (t = 0.8 vs. t = 0.2).",
        "Reflection Loop: Built AST-Reflect, an external PyPI-oracle reflection loop resolving 78.9% of hallucinations with zero canonical Pass@1 regression."
      ]
    }
  ],

  education: {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "Jan 2023 – Dec 2026",
    thesis: "Adaptive Mixed-Precision Quantization (AMPQ) for On-Device LLM Inference",
    supervisor: "Dr. Md. Abdul Kader",
    coursework: [
      "Software Testing & QA",
      "Machine Learning",
      "Data Structures & Algorithms",
      "Database Systems",
      "Operating Systems",
      "Applied Statistics",
      "Software Architecture"
    ]
  },

  skills: {
    programming: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "SQL", "Bash", "LaTeX"],
    mlAndAnalysis: [
      "PyTorch",
      "Hugging Face Transformers",
      "scikit-learn",
      "Model Quantization (PTQ, AWQ, GPTQ, NF4)",
      "AST Analysis (ast, ast.unparse)",
      "Statistical Testing (McNemar, Cluster Bootstrap)"
    ],
    toolsAndInfra: [
      "Git",
      "GitHub Actions (CI/CD)",
      "Docker",
      "Linux",
      "Kaggle Cloud Accelerators",
      "PostgreSQL",
      "SQLite"
    ]
  },

  references: [
    {
      name: "Dr. Md. Abdul Kader",
      role: "Supervisor & Associate Professor",
      department: "Dept. of Software Engineering",
      institution: "Daffodil International University",
      email: "abdulkader.swe@diu.edu.bd",
      scholarUrl: "https://scholar.google.com/citations?user=abdulkader"
    },
    {
      name: "Dr. Imran Mahmud",
      role: "Professor & Head",
      department: "Dept. of Software Engineering",
      institution: "Daffodil International University",
      email: "imranmahmud@daffodilvarsity.edu.bd",
      scholarUrl: "https://scholar.google.com/citations?user=imranmahmud"
    },
    {
      name: "Dr. S M Hasan Mahmud",
      role: "Associate Professor",
      department: "Dept. of Software Engineering",
      institution: "Daffodil International University",
      email: "drhasan.swe@diu.edu.bd",
      scholarUrl: "https://scholar.google.com/citations?user=hasanmahmud"
    }
  ]
};
