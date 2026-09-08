export const cvData = {
  personal: {
    name: "Sudipto Biswas",
    title: "Undergraduate Researcher",
    subtitle: "B.Sc. in Software Engineering at Daffodil International University",
    targetDegree: "Targeting Ph.D. Applications in Computer Science / Software Engineering for Fall 2027 / 2026",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    email: "sudiptoswe@gmail.com",
    phone: "+880 1765-732961",
    github: "https://github.com/sudipto-swe",
    githubUsername: "sudipto-swe",
    scholar: "https://scholar.google.com",
    linkedin: "https://linkedin.com/in/sudipto-swe",
    photoUrl: "./profile.jpg",
    about: "Undergraduate Software Engineering researcher. Research Focus: Empirical Software Engineering (Testing & Reliability) and Trustworthy, Robust & Efficient AI for Code. Thesis research conducted under the direct supervision of Dr. Md. Abdul Kader with additional guidance from Dr. Imran Mahmud and Dr. S M Hasan Mahmud."
  },

  stats: [
    { label: "Manuscripts Target", value: "4", detail: "ACM TOSEM, IEEE TMC, ACM FSE, USENIX Sec" },
    { label: "Audit Benchmark", value: "673", detail: "IDoFT Test Pairs (239 Flaky / 434 Non-Flaky)" },
    { label: "Quantized Code Runs", value: "20760", detail: "HumanEval/MBPP Sandboxed Generations" },
    { label: "Hallucination Reduction", value: "78.9", detail: "PyPI AST-Reflect Reflection Loop %" }
  ],

  researchAreas: [
    {
      title: "Software Testing & Benchmark Reproducibility",
      description: "Auditing static test flakiness detectors, uncovering vocabulary leakage, label noise biases, and evaluating test-suite flakiness on large-scale open-source benchmarks (IDoFT).",
      icon: "ShieldAlert"
    },
    {
      title: "On-Device ML & LLM Quantization",
      description: "Formulating Hessian-guided mixed-precision post-training quantization frameworks (AMPQ, PTQ, AWQ, NF4) combining activation variance, gradient norms, and greedy knapsack solver for edge hardware.",
      icon: "Cpu"
    },
    {
      title: "Code-LLM Robustness & Program Analysis",
      description: "Formulating semantics-preserving AST transformations (T1–T4) to test code generation stability under quantization, and building AST-Reflect reflection loops for package hallucination mitigation.",
      icon: "Code2"
    }
  ],

  manuscripts: [
    {
      id: "flakeguard",
      title: "FlakeGuard: A Critical Reproduction Study of TF-IDF-Based Flaky Test Detection on the IDoFT Benchmark",
      authors: ["Sudipto Biswas"],
      targetVenue: "Targeted for ACM Transactions on Software Engineering and Methodology (TOSEM), 2026",
      year: "2026",
      status: "Manuscript in Preparation",
      badge: "ACM TOSEM Target",
      abstract: "Static flaky test detection promises early warning without expensive test executions. In this reproduction audit of FLAST's published F1 = 0.988 on the frozen, checksummed IDoFT benchmark (673 test pairs: 239 flaky, 434 non-flaky across 44 projects), we demonstrate that under project-grouped GroupKFold evaluation, leakage-checked FLAST collapses to F1 = 0.258—below the trivial 0.524 baseline. We uncover 5 red flags (RF1–RF5) including cross-split vocabulary leakage, asymmetric label-noise bias, and silent GumTree AST-diff failures (0/673 success). We prove commit-graph and PR features carry true predictive signal (F1 = 0.589, McNemar p = 4.8 × 10⁻⁸ vs FLAST, paired cluster bootstrap ΔF1 = -0.33) and release a transparent 194-check audit script with 5-seed sensitivity analysis (0.49–0.59).",
      highlights: [
        "Audit Design: Audited FLAST published F1 = 0.988 on frozen, checksummed IDoFT benchmark (673 pairs: 239 flaky, 434 non-flaky across 44 projects) under strict project-grouped GroupKFold evaluation.",
        "Defect Discovery: Leakage-checked FLAST collapses to F1 = 0.258 (below trivial 0.524 baseline). Uncovered 5 red flags (RF1–RF5) including cross-split vocabulary leakage and silent GumTree AST-diff failures (0/673 success).",
        "Corrective Findings: Proved commit-graph/PR features carry true predictive signal (F1 = 0.589, McNemar p = 4.8 × 10⁻⁸ vs FLAST, paired cluster bootstrap ΔF1 = -0.33).",
        "Open Audit: Released transparent 194-check audit script and five-seed sensitivity analysis (0.49–0.59)."
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
      targetVenue: "Undergraduate Thesis Manuscript, Targeted for IEEE Transactions on Mobile Computing (TMC) / IEEE Access, 2026",
      year: "2026",
      status: "Thesis Manuscript in Preparation",
      badge: "IEEE TMC / IEEE Access Target",
      formula: true,
      abstract: "Deploying Large Language Models on mobile hardware requires aggressive quantization without severe perplexity degradation. We propose AMPQ, a static Post-Training Quantization (PTQ) framework that fuses activation variance (σ²), gradient norm (γ), and Hutchinson Hessian traces (τ, K = 5) into a composite sub-layer sensitivity metric S = 0.3σ̂² + 0.3γ̂ + 0.4τ̂. Solved memory-constrained precision assignment ({4, 8, 16} bits) via a greedy knapsack solver, compressing Gemma-2-2B by 3.04× and recovering perplexity to 47.01 (vs. 59.51 Uniform 4-bit RTN baseline, outperforming AutoAWQ's 52.88). Sustained 20.7 tok/s at 754.6 mJ/tok on Apple Silicon (M5) and verified OOM-free memory fit on a physical Snapdragon 888 device.",
      highlights: [
        "Static PTQ Sensitivity: Fused activation variance (σ²), gradient norm (γ), and Hutchinson Hessian traces (τ, K=5) into composite metric S = 0.3σ̂² + 0.3γ̂ + 0.4τ̂.",
        "Knapsack Precision Assignment: Solved {4, 8, 16} bit assignment via greedy knapsack solver, compressing Gemma-2-2B by 3.04×.",
        "Perplexity Recovery: Recovered perplexity to 47.01 (vs 59.51 Uniform 4-bit RTN baseline, outperforming AutoAWQ's 52.88).",
        "Hardware Validation: Sustained 20.7 tok/s @ 754.6 mJ/tok on Apple Silicon (M5) and verified OOM-free fit on physical Snapdragon 888 device."
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
      targetVenue: "Targeted for ACM International Conference on the Foundations of Software Engineering (FSE)",
      year: "2025",
      status: "Independent Exploration",
      badge: "ACM FSE Target",
      abstract: "Formulated 4 semantics-preserving AST transformations (T1–T4) across 663 verified HumanEval/MBPP tasks, running 20,760 sandboxed generations across 3 models (Qwen2.5-Coder-7B, DeepSeek-Coder-6.7B, CodeLlama-7B) at FP16 and 4-bit NF4. Discovered identifier renaming (T2) degrades Pass@1 by up to 25.4%, and 4-bit quantization amplifies structural brittleness up to 16.6× on weaker models.",
      highlights: [
        "Formulated 4 semantics-preserving AST transformations (T1–T4) across 663 verified HumanEval/MBPP tasks.",
        "Ran 20,760 sandboxed generations across Qwen2.5-Coder-7B, DeepSeek-Coder-6.7B, and CodeLlama-7B at FP16 & 4-bit NF4.",
        "Discovered identifier renaming (T2) degrades Pass@1 by up to 25.4%.",
        "4-bit quantization amplifies structural brittleness up to 16.6× on weaker models."
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
      targetVenue: "Targeted for USENIX Security Symposium",
      year: "2025",
      status: "Independent Exploration",
      badge: "USENIX Security Target",
      abstract: "Quantified package hallucinations across 4,806 generations over a 160-task elicitation corpus under a 2-arm decoding design (t = 0.8 vs. t = 0.2). Built AST-Reflect, an external PyPI-oracle reflection loop resolving 78.9% of hallucinations with zero canonical Pass@1 regression.",
      highlights: [
        "Quantified package hallucinations across 4,806 generations over a 160-task elicitation corpus.",
        "Tested under 2-arm decoding design (t = 0.8 vs. t = 0.2).",
        "Built AST-Reflect external PyPI-oracle reflection loop.",
        "Resolved 78.9% of hallucinations with zero canonical Pass@1 regression."
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
      role: "Independent Researcher — FlakeGuard",
      institution: "Daffodil International University",
      period: "Aug 2025 – Present",
      advisor: null,
      highlights: [
        "Audited FLAST's published F1 = 0.988 on frozen, checksummed IDoFT benchmark (673 pairs: 239 flaky, 434 non-flaky across 44 projects) under strict project-grouped GroupKFold evaluation.",
        "Demonstrated that leakage-checked FLAST collapses to F1 = 0.258 (below the trivial 0.524 baseline). Uncovered 5 red flags (RF1–RF5) including cross-split vocabulary leakage.",
        "Proved commit-graph/PR features carry true predictive signal (F1 = 0.589, McNemar p = 4.8 × 10⁻⁸ vs. FLAST). Released 194-check audit script with five-seed sensitivity analysis."
      ]
    },
    {
      role: "Undergraduate Thesis Researcher — AMPQ",
      institution: "Daffodil International University",
      period: "Jan 2026 – Present",
      advisor: "Dr. Md. Abdul Kader (Supervisor), Dr. Imran Mahmud & Dr. S M Hasan Mahmud (Guidance)",
      highlights: [
        "Developed static PTQ framework fusing activation variance (σ²), gradient norm (γ), and Hutchinson Hessian traces (τ, K=5) into composite sensitivity metric S = 0.3σ̂² + 0.3γ̂ + 0.4τ̂.",
        "Solved {4,8,16}-bit precision assignment via greedy knapsack solver, compressing Gemma-2-2B by 3.04× and recovering perplexity to 47.01 (vs. 59.51 baseline).",
        "Sustained 20.7 tok/s at 754.6 mJ/tok on Apple Silicon (M5) and verified OOM-free memory fit on Snapdragon 888."
      ]
    },
    {
      role: "Independent Researcher — RobustCode-Bench",
      institution: "Daffodil International University",
      period: "Feb 2025 – Aug 2025",
      advisor: null,
      highlights: [
        "Formulated 4 semantics-preserving AST transformations (T1–T4) across 663 verified HumanEval/MBPP tasks.",
        "Ran 20,760 sandboxed generations across 3 models (Qwen2.5-Coder-7B, DeepSeek-Coder-6.7B, CodeLlama-7B) at FP16 and 4-bit NF4.",
        "Discovered identifier renaming (T2) degrades Pass@1 by up to 25.4%, and quantization amplifies brittleness up to 16.6×."
      ]
    },
    {
      role: "Independent Researcher — AST-Reflect",
      institution: "Daffodil International University",
      period: "Jun 2024 – Jan 2025",
      advisor: null,
      highlights: [
        "Quantified package hallucinations across 4,806 generations over a 160-task elicitation corpus under 2-arm decoding design.",
        "Built AST-Reflect, an external PyPI-oracle reflection loop resolving 78.9% of hallucinations with zero canonical Pass@1 regression."
      ]
    }
  ],

  technicalSkills: [
    {
      category: "Languages",
      skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "SQL", "Bash", "LaTeX"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["PyTorch", "Hugging Face Transformers", "scikit-learn", "React", "Node.js", "Model Quantization (PTQ, AWQ, GPTQ, NF4)", "AST Analysis (ast, ast.unparse)"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub Actions (CI/CD)", "Docker", "Linux", "Kaggle Cloud Accelerators", "PostgreSQL", "SQLite"]
    },
    {
      category: "Core Strengths",
      skills: ["Statistical Testing (McNemar, Cluster Bootstrap)", "Benchmark Reproducibility", "Empirical Software Engineering", "Technical Writing (LaTeX)", "Research Methodology"]
    }
  ],

  education: {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "Jan 2023 – Dec 2026",
    thesis: "Adaptive Mixed-Precision Quantization (AMPQ) for On-Device LLM Inference",
    supervisor: "Dr. Md. Abdul Kader",
    advisorsNote: "Additional research guidance from Dr. Imran Mahmud and Dr. S M Hasan Mahmud",
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
