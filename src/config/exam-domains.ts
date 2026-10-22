// ============================================================
// Official Salesforce Certified Data 360 Consultant Exam Domains
// Category Definition & Domain Metadata Configuration
// ============================================================

export interface ExamDomain {
  id: string;
  name: string;
  weight: number; // Percentage
  colorToken: string; // Subtle monochrome / slate tone
  topics: string[];
}

export const EXAM_DOMAINS: Record<string, ExamDomain> = {
  solution_positioning: {
    id: "solution_positioning",
    name: "Solution Positioning",
    weight: 14,
    colorToken: "slate",
    topics: [
      "Terminology & Business Value",
      "Generative & Predictive AI Role",
      "Initial Use Cases",
      "Data Ethics & Governance"
    ]
  },
  setup_and_administration: {
    id: "setup_and_administration",
    name: "Data 360 Setup and Administration",
    weight: 13,
    colorToken: "slate",
    topics: [
      "Permissions & Permission Sets",
      "Org-Wide Settings & Data Governance",
      "ALM & Development Tooling",
      "Troubleshooting & Diagnostics"
    ]
  },
  connection_and_ingestion: {
    id: "connection_and_ingestion",
    name: "Data Source Connection and Ingestion",
    weight: 18,
    colorToken: "slate",
    topics: [
      "Data Transformations",
      "Ingestion Processes & Considerations",
      "Data Collaboration & Zero-Copy"
    ]
  },
  harmonization_and_unification: {
    id: "harmonization_and_unification",
    name: "Harmonization and Unification",
    weight: 17,
    colorToken: "slate",
    topics: [
      "Unification Purpose & Processes",
      "Data Modeling & DMO Mapping"
    ]
  },
  enhancements_sharing_analysis: {
    id: "enhancements_sharing_analysis",
    name: "Data Enhancements, Sharing, and Analysis",
    weight: 18,
    colorToken: "slate",
    topics: [
      "Calculated Insights & Unified Data",
      "External System Data Sharing",
      "Reports & Dashboards",
      "AI Tooling Scenarios"
    ]
  },
  activations_and_utilization: {
    id: "activations_and_utilization",
    name: "Data Activations and Utilization",
    weight: 20,
    colorToken: "slate",
    topics: [
      "Segmentation Concepts & Use Cases",
      "Segment Management",
      "Publishing Activations",
      "Actioning Data & Salesforce Flows"
    ]
  }
};
