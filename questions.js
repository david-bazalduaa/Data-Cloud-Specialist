// Salesforce Certified Data 360 / Data Cloud Consultant Exam Questions
// Generated autonomously from Data-Con-101.md mapped to the official 6 exam domains.
// Total questions: 95

const DATA_CLOUD_QUESTIONS = [
  {
    "id": "q1",
    "question": "A client wants to bring in loyalty data from a custom object in Salesforce CRM that contains a point balance for accrued hotel points and airline points within the same record. The client wants to split these point systems into two separate records for better tracking and processing. What should a Data 360 Consultant recommend in this scenario?",
    "options": [
      {
        "id": "A",
        "text": "Create a junction object in Salesforce CRM and modify the ingestion strategy."
      },
      {
        "id": "B",
        "text": "Use batch transforms to create a second data lake object."
      },
      {
        "id": "C",
        "text": "Clone the data source object."
      },
      {
        "id": "D",
        "text": "Create a data kit from the data lake object and deploy it to the same Data 360 org."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Use batch transforms to create a second data lake object. fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q2",
    "question": "A data architect has deployed an inbound change set containing a data kit into a new Salesforce Production org. Although the deployment status shows \"Succeeded\", the architect notices that the specific data stream configurations and calculated insights included in the kit are not yet active or visible in the Data 360 functional tabs. What is the next required action the architect must perform to fully implement the configurations within the data kit?",
    "options": [
      {
        "id": "A",
        "text": "Install the data kit from the Data 360 Setup menu to map and activate the components."
      },
      {
        "id": "B",
        "text": "Re-upload the outbound change set from the source org to clear the metadata cache."
      },
      {
        "id": "C",
        "text": "Run a \"Full Refresh\" on all data streams within the newly deployed change set."
      },
      {
        "id": "D",
        "text": "Use the Salesforce Package Manager to verify the installation status of the components."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The lifecycle point is that Data 360 configuration is metadata, but it still has product-specific packaging and activation steps. Install the data kit from the Data 360 Setup menu to map and activate the components. is the right fit because Data 360 components are not fully usable just because generic deployment succeeded. The consultant must complete the Data 360-specific lifecycle step so streams, mappings, insights, and rules are correctly registered in the target environment. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "setup_and_administration",
    "topic": "Data 360 Setup and Administration",
    "domainWeight": 13,
    "sourceVerified": true
  },
  {
    "id": "q3",
    "question": "A Data 360 Consultant needs to provide real- time, multidimensional analytics for a derived insight, \"Net Profit\", to be used within Tableau Next. The requirements specify that the metrics must be as up to date as possible while allowing users to dynamically filter by region, period, and product category. Which approach should the consultant take?",
    "options": [
      {
        "id": "A",
        "text": "Define a real-time data graph."
      },
      {
        "id": "B",
        "text": "Create a calculated insight using SQL."
      },
      {
        "id": "C",
        "text": "Create a calculated field in the semantic layer."
      },
      {
        "id": "D",
        "text": "Configure a streaming transform."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The analytics requirement determines whether the logic belongs in an insight, a semantic metric, or a query-time layer. Create a calculated field in the semantic layer. matches the need because the business is asking for reusable metrics, dimensions, or aggregation behavior that consumers can filter and analyze. Data 360 separates raw harmonized data from analytical definitions so that dashboards, Tableau experiences, and segment logic remain consistent. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q4",
    "question": "A Data 360 Consultant is preparing to implement Data 360. Which ethic should the consultant adhere to regarding customer data?",
    "options": [
      {
        "id": "A",
        "text": "Carefully consider asking for sensitive data such as age, gender, and ethnicity."
      },
      {
        "id": "B",
        "text": "Give senior leaders in the firm access to customer data for audit purposes."
      },
      {
        "id": "C",
        "text": "Collect and use all of the data to create more personalized experiences."
      },
      {
        "id": "D",
        "text": "Map sensitive data to the same data model object for ease of deletion."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The governance lens is least privilege, purpose limitation, and honoring privacy operations against the individual profile. Carefully consider asking for sensitive data such as age, gender, and ethnicity. supports the governance requirement because Data 360 implementations should minimize unnecessary access, avoid over-collection, and process deletion or consent requests at the profile level where Salesforce expects them. The safest design is explicit, auditable, and limited to the business purpose. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "solution_positioning",
    "topic": "Solution Positioning",
    "domainWeight": 14,
    "sourceVerified": true
  },
  {
    "id": "q5",
    "question": "Northern Trail Outfitters uploads new customer data to an Amazon S3 bucket on a daily basis to be ingested in Data 360. Based on this, a calculated insight is created that shows the total spend per customer in the last 30 days. In which sequence should each process be run to ensure that freshly imported data is ready and available to use for any segment?",
    "options": [
      {
        "id": "A",
        "text": "Calculated Insight > Refresh Data Stream > Identity Resolution"
      },
      {
        "id": "B",
        "text": "Refresh Data Stream > Calculated Insight > Identity Resolution"
      },
      {
        "id": "C",
        "text": "Refresh Data Stream > Identity Resolution > Calculated Insight"
      },
      {
        "id": "D",
        "text": "Identity Resolution > Refresh Data Stream > Calculated Insight"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Refresh Data Stream > Identity Resolution > Calculated Insight fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q6",
    "question": "What is a Data 360 use case for improving the patient experience in the Healthcare and Life Sciences sector?",
    "options": [
      {
        "id": "A",
        "text": "Activating a Unified Health Score to provide a holistic view of patient wellness and engagement"
      },
      {
        "id": "B",
        "text": "Managing the payroll of visiting physicians via a custom mobile app"
      },
      {
        "id": "C",
        "text": "Using data to predict the best location for which hospital the patient should visit"
      },
      {
        "id": "D",
        "text": "Automating the retail checkout process in hospital gift shops"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The industry value comes from applying unified, governed data to a patient-centered outcome rather than an unrelated operational task. Activating a Unified Health Score to provide a holistic view of patient wellness and engagement is the useful Data 360 pattern because it applies unified data to a healthcare journey outcome: better context, more relevant engagement, and a complete view of wellness or interaction history. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "solution_positioning",
    "topic": "Solution Positioning",
    "domainWeight": 14,
    "sourceVerified": true
  },
  {
    "id": "q7",
    "question": "How does Data 360 handle an individual's Right to Be Forgotten?",
    "options": [
      {
        "id": "A",
        "text": "Deletes the records from all data source objects, and any downstream data model objects are updated at the next scheduled ingestion"
      },
      {
        "id": "B",
        "text": "Deletes the specified Individual and records from any data model object/data lake object related to the Individual"
      },
      {
        "id": "C",
        "text": "Deletes the specified Individual record and its Unified Individual Link record"
      },
      {
        "id": "D",
        "text": "Deletes the specified Individual and records from any data source object mapped to the Individual data model object"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The governance lens is least privilege, purpose limitation, and honoring privacy operations against the individual profile. Deletes the specified Individual and records from any data model object/data lake object related to the Individual supports the governance requirement because Data 360 implementations should minimize unnecessary access, avoid over-collection, and process deletion or consent requests at the profile level where Salesforce expects them. The safest design is explicit, auditable, and limited to the business purpose. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "setup_and_administration",
    "topic": "Data 360 Setup and Administration",
    "domainWeight": 13,
    "sourceVerified": true
  },
  {
    "id": "q8",
    "question": "Northern Trail Outfitters wants to compute recency, frequency, monetary (RFM) scores on its unified individuals in order to use it in Marketing Cloud Engagement. What is the best way to achieve this goal?",
    "options": [
      {
        "id": "A",
        "text": "Include the Calculated Insight attribute in activation."
      },
      {
        "id": "B",
        "text": "Use copy fields to show the calculated insight."
      },
      {
        "id": "C",
        "text": "Add the score to a related list."
      },
      {
        "id": "D",
        "text": "Import the score to Marketing Cloud via SFTP."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Include the Calculated Insight attribute in activation. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q9",
    "question": "Which statement is true related to batch ingestions from Salesforce CRM?",
    "options": [
      {
        "id": "A",
        "text": "When a column is added or removed, the CRM Connector performs a full refresh."
      },
      {
        "id": "B",
        "text": "CRM data cannot be manually refreshed and must wait for the next scheduled synchronization."
      },
      {
        "id": "C",
        "text": "The CRM Connector performs an incremental refresh when 600,000 or more deletion records are detected."
      },
      {
        "id": "D",
        "text": "The CRM Connector's synchronization times can be customized to up to 15-minute intervals."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, When a column is added or removed, the CRM Connector performs a full refresh. fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q10",
    "question": "A developer at Cloud Kicks is integrating customer data from a legacy shoe-inventory system and a web-store platform into Data 360. They need a way to ensure the Customer Name field from both systems is recognized as the same attribute. Which component should the developer use to provide this standardized structure?",
    "options": [
      {
        "id": "A",
        "text": "An encryption key to secure PII during the data transfer"
      },
      {
        "id": "B",
        "text": "A segmentation canvas for selecting desired customer attributes"
      },
      {
        "id": "C",
        "text": "An identity resolution ruleset to merge duplicate records"
      },
      {
        "id": "D",
        "text": "A data model object (DMO) to map and relate the data fields"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. A data model object (DMO) to map and relate the data fields is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q11",
    "question": "A Data 360 Consultant wants to activate a segment on the Unified Individual object. Which steps are required from ingestion to activation?",
    "options": [
      {
        "id": "A",
        "text": "Data > Data Lake Object > Identity Resolution and Unification > Segmentation > Activation"
      },
      {
        "id": "B",
        "text": "Data > Data Lake Object > Map to Data Model Object > Activation"
      },
      {
        "id": "C",
        "text": "Data > Data Lake Object > Map to Data Model Object > Identity Resolution and Unification > Segmentation > Activation"
      },
      {
        "id": "D",
        "text": "Data > Data Lake Object > Map to Data Model Object > Identity Resolution and Unification > Activation"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Data > Data Lake Object > Map to Data Model Object > Identity ResolutionandUnification > Segmentation > Activation works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q12",
    "question": "A Data 360 Consultant created a calculated insight that can be seen when 'Segmenting On' Individuals on the segmentation canvas but not Unified Individual. What is the reason for this?",
    "options": [
      {
        "id": "A",
        "text": "The consultant doesn't have the correct permissions to see the calculated insight for Unified Individual segments."
      },
      {
        "id": "B",
        "text": "The calculated insight is missing a relationship to the Unified Individual data model object (DMO)."
      },
      {
        "id": "C",
        "text": "The data space for the Unified Individual is different than the Individual data model object (DMO)."
      },
      {
        "id": "D",
        "text": "Calculated insights can't be used for the Unified Individual data model object (DMO)."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. The calculated insight is missing a relationship to the Unified Individual data model object (DMO). is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q13",
    "question": "When preparing to build a predictive AI model in Einstein Studio using Data 360 data, which step is essential to ensure the model produces ethical and unbiased results?",
    "options": [
      {
        "id": "A",
        "text": "Disabling all calculated insights before starting the training process"
      },
      {
        "id": "B",
        "text": "Ensuring the training dataset contains at least 10 million records"
      },
      {
        "id": "C",
        "text": "Auditing training data to identify which segments of the customer base are underrepresented"
      },
      {
        "id": "D",
        "text": "Using only unstructured data to prevent pattern recognition"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The AI pattern works when the model is grounded in appropriate Data 360 data and its outputs can be operationalized safely. Auditing training data to identify which segments of the customer base are underrepresented fits because predictions or generative experiences are only useful when the data is representative, governed, and connected to Salesforce execution patterns such as scoring jobs, Flow, or grounded retrieval. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "solution_positioning",
    "topic": "Solution Positioning",
    "domainWeight": 14,
    "sourceVerified": true
  },
  {
    "id": "q14",
    "question": "What is the primary functionality of Data 360?",
    "options": [
      {
        "id": "A",
        "text": "To help users build a heat map using their data"
      },
      {
        "id": "B",
        "text": "To automatically generate sales forecasts based on historical email patterns"
      },
      {
        "id": "C",
        "text": "To unify and harmonize data from multiple sources to create a complete customer profile"
      },
      {
        "id": "D",
        "text": "To create a master data management (MDM) strategy"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. To unify and harmonize data from multiple sources to create a complete customer profile is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "solution_positioning",
    "topic": "Solution Positioning",
    "domainWeight": 14,
    "sourceVerified": true
  },
  {
    "id": "q15",
    "question": "A Data 360 Consultant is building a segment to announce a new product launch for customers who have previously purchased black pants. How should the consultant place the attributes for product color and product type from the Order Product object to meet this criteria?",
    "options": [
      {
        "id": "A",
        "text": "Place the attributes for product color and product type in a single container."
      },
      {
        "id": "B",
        "text": "Place the attribute for product color in one container and the attribute for product type in another container."
      },
      {
        "id": "C",
        "text": "Place an attribute for the \"black pants\" calculated insight to dynamically apply."
      },
      {
        "id": "D",
        "text": "Place the attributes for product color and product type as direct attributes."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Place the attributes for product color and product type in a single container. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q16",
    "question": "A customer has two Data 360 orgs. A new configuration has been completed and tested for an Amazon S3 data stream and its mappings in one of the Data 360 orgs. What is recommended to package and promote this configuration to the customer's second org?",
    "options": [
      {
        "id": "A",
        "text": "Use the Salesforce CRM Connector."
      },
      {
        "id": "B",
        "text": "Use the Metadata API."
      },
      {
        "id": "C",
        "text": "Package as an AppExchange application."
      },
      {
        "id": "D",
        "text": "Create a data kit."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Create a data kit. fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "setup_and_administration",
    "topic": "Data 360 Setup and Administration",
    "domainWeight": 13,
    "sourceVerified": true
  },
  {
    "id": "q17",
    "question": "A customer has a requirement to receive a notification whenever an activation fails for a particular segment. Which feature should the Data 360 Consultant use to solution for this use case?",
    "options": [
      {
        "id": "A",
        "text": "Activation alert"
      },
      {
        "id": "B",
        "text": "Flow"
      },
      {
        "id": "C",
        "text": "Dashboard"
      },
      {
        "id": "D",
        "text": "Report"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Flow works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q18",
    "question": "What does the Ignore Empty Value option do in Identity Resolution?",
    "options": [
      {
        "id": "A",
        "text": "Ignores Individual object records with empty fields when running identity resolution rules"
      },
      {
        "id": "B",
        "text": "Ignores Contact Point object records with empty fields when running identity resolution rules"
      },
      {
        "id": "C",
        "text": "Ignores empty fields when running reconciliation rules"
      },
      {
        "id": "D",
        "text": "Ignores empty fields when running match rules"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Ignores empty fields when running match rules is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q19",
    "question": "An analyst needs to verify the data populated in a newly mapped data model object (DMO). They open the Query Editor within the Data 360 interface to perform a quick check of the records. What is the programming language the analyst must use to retrieve and view records from the DMO within this tool?",
    "options": [
      {
        "id": "A",
        "text": "Salesforce Object Query Language (SOQL)"
      },
      {
        "id": "B",
        "text": "JavaScript Object Notation (JSON)"
      },
      {
        "id": "C",
        "text": "Apex Data Manipulation Language"
      },
      {
        "id": "D",
        "text": "Structured Query Language (SQL)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. Structured Query Language (SQL) fits because Data 360 depends on mappings and relationships between data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q20",
    "question": "Northern Trail Outfitters (NTO) wants to create a segment where a unique record is created in the published audience for every transaction a customer completes. If a customer makes three separate purchases, the resulting segment should contain three distinct entries for that customer to allow for transaction- specific messaging. All transactions are mapped to the Sales Order data model object (DMO), and NTO is using Identity Resolution to unify customers on the Unified Individual DMO. Which configuration should a Data 360 Consultant use to meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Segment on the Individual DMO"
      },
      {
        "id": "B",
        "text": "Segment on a calculated insight based on Sales Orders"
      },
      {
        "id": "C",
        "text": "Segment on the Sales Order DMO"
      },
      {
        "id": "D",
        "text": "Segment on the Unified Individual DMO"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Segment on the Sales Order DMO is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q21",
    "question": "A customer has a custom Customer_Email_c object related to the standard Contact object in Salesforce CRM. This custom object stores the email address for a Contact that they want to use for activation. To which data model object should the customer map the email object to?",
    "options": [
      {
        "id": "A",
        "text": "Custom Customer_Email_c object"
      },
      {
        "id": "B",
        "text": "Contact"
      },
      {
        "id": "C",
        "text": "Contact Point Email"
      },
      {
        "id": "D",
        "text": "Individual"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. Contact Point Email fits because Data 360 depends on mappings and relationships between data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q22",
    "question": "A Data 360 Consultant is explaining the behavior of Data 360 sandboxes to project stakeholders. The stakeholders want to know what happens to the data in a Data 360 sandbox during a standard version.",
    "options": [
      {
        "id": "A",
        "text": "Every single row of historical engagement data from the last 10 years"
      },
      {
        "id": "B",
        "text": "A direct and real-time connection to the production data lake for live querying"
      },
      {
        "id": "C",
        "text": "All customer credit card information and sensitive personal passwords"
      },
      {
        "id": "D",
        "text": "Only the metadata, such as data model object (DMO) definitions and mappings"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The lifecycle point is that Data 360 configuration is metadata, but it still has product-specific packaging and activation steps. Only the metadata, such as data model object (DMO) definitions and mappings is the right fit because Data 360 components are not fully usable just because generic deployment succeeded. The consultant must complete the Data 360-specific lifecycle step so streams, mappings, insights, and rules are correctly registered in the target environment. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "setup_and_administration",
    "topic": "Data 360 Setup and Administration",
    "domainWeight": 13,
    "sourceVerified": true
  },
  {
    "id": "q23",
    "question": "A user wants to be able to create a multi- dimensional metric to identify unified individual lifetime value (LTV). Which sequence of data model object (DMO) joins is necessary within the calculated insight to enable this calculation?",
    "options": [
      {
        "id": "A",
        "text": "Sales Order > Unified Individual"
      },
      {
        "id": "B",
        "text": "Unified Individual > Individual > Sales Order"
      },
      {
        "id": "C",
        "text": "Sales Order > Individual > Unified Individual"
      },
      {
        "id": "D",
        "text": "Unified Individual > Unified Link Individual > Sales Order"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. Sales Order > Individual > Unified Individual fits because Data 360 depends on mappings and relationships between data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q24",
    "question": "A Data 360 Consultant for a high- growth retail brand is configuring the ingestion of customer behavioral data from a mobile application. The brand requires that the raw, unmodified data be stored exactly as it appears in the source system before any mapping or transformations occur to maintain a historical record of the transmission. Which object serves as the container of this source data in Data 360?",
    "options": [
      {
        "id": "A",
        "text": "Calculated Insight Object"
      },
      {
        "id": "B",
        "text": "Data Model Object"
      },
      {
        "id": "C",
        "text": "Party Identification Object"
      },
      {
        "id": "D",
        "text": "Data Lake Object"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Data Lake Object fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q25",
    "question": "A data source does not have a field that can be designated as a primary key. What should the Data 360 Consultant do?",
    "options": [
      {
        "id": "A",
        "text": "Use the default primary key recommended by Data 360."
      },
      {
        "id": "B",
        "text": "Remove duplicates from the data source and then select a primary key."
      },
      {
        "id": "C",
        "text": "Select a field as a primary key and then add a key qualifier."
      },
      {
        "id": "D",
        "text": "Create a composite key by combining two or more source fields through a formula field."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Create a composite key by combining two or more source fields through a formula field. fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q26",
    "question": "A Data 360 Consultant is configuring an activation for a segment created from the Unified Individual object to be sent to a Loyalty Cloud activation target. They would like to include the Loyalty Program Tier for personalization, but this field is stored in a separate Loyalty Program Member data model object (DMO) that was not used in the initial segment filters. Which feature should the consultant use during the activation setup to include this external identifier in the exported payload?",
    "options": [
      {
        "id": "A",
        "text": "Calculated insights to join the Loyalty Program Tier to the Unified Individual prior to segmentation"
      },
      {
        "id": "B",
        "text": "Contact point priority to rank the Loyalty Program Tier above the standard Individual ID"
      },
      {
        "id": "C",
        "text": "Activation membership to select the Loyalty Program Member DMO and its associated fields"
      },
      {
        "id": "D",
        "text": "Data stream mappings to re-map the Loyalty Program Tier as a secondary key on the Individual object"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Activation membership to select the Loyalty Program Member DMO and its associated fields works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q27",
    "question": "Which permission setting should a Data 360 Consultant check if a custom Salesforce CRM object is not available in New Data Stream configuration?",
    "options": [
      {
        "id": "A",
        "text": "Confirm the View All object permission is enabled in the source Salesforce CRM org."
      },
      {
        "id": "B",
        "text": "Confirm the Ingest object permission is enabled in the Salesforce CRM org."
      },
      {
        "id": "C",
        "text": "Confirm the Create object permission is enabled in the Data 360 org."
      },
      {
        "id": "D",
        "text": "Confirm the Modify object permission is enabled in the Data 360 org."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Confirm the View All object permission is enabled in the source Salesforce CRM org. fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "setup_and_administration",
    "topic": "Data 360 Setup and Administration",
    "domainWeight": 13,
    "sourceVerified": true
  },
  {
    "id": "q28",
    "question": "When reporting on calculated insights in Salesforce, what is a critical limitation a Data 360 Consultant must keep in mind regarding data freshness?",
    "options": [
      {
        "id": "A",
        "text": "The data reflects the state of the last time the insight was batch processed."
      },
      {
        "id": "B",
        "text": "Calculated insights can only be reported on if they contain fewer than 2,000 total rows."
      },
      {
        "id": "C",
        "text": "Insights are only available in reports if they have been \"Activated\" to a Marketing Cloud engagement."
      },
      {
        "id": "D",
        "text": "Calculated insights are only updated once every 24 hours."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The analytics requirement determines whether the logic belongs in an insight, a semantic metric, or a query-time layer. The data reflects the state of the last time the insight was batch processed. matches the need because the business is asking for reusable metrics, dimensions, or aggregation behavior that consumers can filter and analyze. Data 360 separates raw harmonized data from analytical definitions so that dashboards, Tableau experiences, and segment logic remain consistent. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q29",
    "question": "Cumulus Financial (CF) wants to target loyal and engaged customers. When a platinum- tier customer visits their investment pages more than three times in a 24- hour period, CF wants to immediately send an email that offers a private consultation. What should a Data 360 Consultant recommend for this business requirement?",
    "options": [
      {
        "id": "A",
        "text": "Create a segment with standard publish to Marketing Cloud Engagement."
      },
      {
        "id": "B",
        "text": "Create a streaming insight with a data action to Marketing Cloud Engagement."
      },
      {
        "id": "C",
        "text": "Create a segment with rapid publish to Marketing Cloud Engagement."
      },
      {
        "id": "D",
        "text": "Create a calculated insight with a data action to Marketing Cloud Engagement."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Create a streaming insight with a data action to Marketing Cloud Engagement. is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q30",
    "question": "A global ecommerce company uses Salesforce Data 360 to unify customer profiles across multiple systems, including Salesforce CRM, Commerce Cloud, and Snowflake. The business wants to securely leverage unified customer data across Snowflake to support analytics and downstream use cases. The solution must meet the following requirements: Customer data accessed from Snowflake must be read- only; Updates to customer profiles must be available in near real time; The overall architecture must minimize operational complexity and data duplication. Which approach should the Data 360 Consultant recommend?",
    "options": [
      {
        "id": "A",
        "text": "Expose Data 360 data through REST APIs and ingest it into Snowflake using streaming ingestion."
      },
      {
        "id": "B",
        "text": "Schedule nightly exports of Data 360 data to cloud storage and load it into Snowflake using automated pipelines."
      },
      {
        "id": "C",
        "text": "Replicate Data 360 data into Salesforce standard objects and sync those objects to Snowflake using extract, transform, load (ETL) tools."
      },
      {
        "id": "D",
        "text": "Use Data 360 Data Sharing to share unified customer data directly to Snowflake."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. Use Data 360 Data Sharing to share unified customer data directly to Snowflake. aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q31",
    "question": "A Data 360 Consultant wants to ensure that every segment managed by multiple brand teams adheres to the same set of exclusion criteria that are updated on a monthly basis. What is the most efficient option to allow for this capability?",
    "options": [
      {
        "id": "A",
        "text": "Create a segment and copy it for each brand."
      },
      {
        "id": "B",
        "text": "Create, publish, and deploy a data kit."
      },
      {
        "id": "C",
        "text": "Create a reusable container block with common criteria."
      },
      {
        "id": "D",
        "text": "Create a nested segment."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Create a reusable container block with common criteria. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.\n\n[Technical Audit Note: The source study guide designated Option C ('Create a reusable container block with common criteria'). In Salesforce Data Cloud, 'reusable container blocks' do not exist on the segmentation canvas. The architecturally verified feature for sharing centrally managed, regularly updated exclusion criteria across brand teams is 'Create a nested segment' (Option D). When the nested exclusion segment updates monthly, all dependent segments automatically inherit the updated criteria.]",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q32",
    "question": "A Data 360 Consultant needs to build a model on Einstein Studio to predict the time- to- close of an opportunity brought into Data 360 from CRM. Based on the supported model types, which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "The consultant should use a Multiclass Classification model to bucket the time-to-close into specifications."
      },
      {
        "id": "B",
        "text": "The consultant should use a Binary Classification model to determine if the time-to-close is long or short."
      },
      {
        "id": "C",
        "text": "The consultant should use a Multiclass Classification model because the outcome is represented as text data."
      },
      {
        "id": "D",
        "text": "The consultant should use a Regression model because the target outcome is a numeric measure."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The AI pattern works when the model is grounded in appropriate Data 360 data and its outputs can be operationalized safely. The consultant should use a Regression model because the target outcome is a numeric measure. fits because predictions or generative experiences are only useful when the data is representative, governed, and connected to Salesforce execution patterns such as scoring jobs, Flow, or grounded retrieval. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q33",
    "question": "Which statement about query federation in Data 360 is true?",
    "options": [
      {
        "id": "A",
        "text": "Query federation requires file-based data lakes such as Iceberg."
      },
      {
        "id": "B",
        "text": "Data 360 executes queries using its own compute engine, regardless of the external system."
      },
      {
        "id": "C",
        "text": "Query federation pushes SQL queries to the external system's compute layer."
      },
      {
        "id": "D",
        "text": "Query federation requires data to be first converted to parquet format."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. Query federation pushes SQL queries to the external system's compute layer. aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q34",
    "question": "In Data 360, which mechanism ensures different business units can use the same Data 360 home org while keeping their data and metadata logically separated, to meet governance or compliance requirements?",
    "options": [
      {
        "id": "A",
        "text": "Use separate companion connections within the same data space"
      },
      {
        "id": "B",
        "text": "Use different permission sets within the same data space"
      },
      {
        "id": "C",
        "text": "Use separate data spaces for each business unit"
      },
      {
        "id": "D",
        "text": "Use separate objects per business unit with record-type filtering"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The governance lens is least privilege, purpose limitation, and honoring privacy operations against the individual profile. Use separate data spaces for each business unit supports the governance requirement because Data 360 implementations should minimize unnecessary access, avoid overcollection, and process deletion or consent requests at the profile level where Salesforce expects them. The safest design is explicit, auditable, and limited to the business purpose. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "setup_and_administration",
    "topic": "Data 360 Setup and Administration",
    "domainWeight": 13,
    "sourceVerified": true
  },
  {
    "id": "q35",
    "question": "Northern Trail Outfitters (NTO) wants to connect its B2C Commerce data with Data 360 and bring 2 years of transactional history into Data 360. What should NTO use to achieve this?",
    "options": [
      {
        "id": "A",
        "text": "Sales Order object ingestion"
      },
      {
        "id": "B",
        "text": "Sales Product object ingestion"
      },
      {
        "id": "C",
        "text": "B2C Commerce Starter Bundles plus a custom extract"
      },
      {
        "id": "D",
        "text": "B2C Commerce Starter Bundles"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, B2C Commerce Starter Bundles plus a custom extract fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q36",
    "question": "A data science team has developed a custom propensity- to- churn model in Amazon SageMaker. The company wants to use this model to score its Unified Profiles in Data 360 and use those scores for a high- priority retention segment. The Data 360 Consultant needs to ensure the data is not duplicated or moved out of Data 360 during this process. Which feature should the consultant use to integrate this model?",
    "options": [
      {
        "id": "A",
        "text": "Einstein Studio Bring Your Own Model (BYOM)"
      },
      {
        "id": "B",
        "text": "Model Builder in Prompt Builder"
      },
      {
        "id": "C",
        "text": "Streaming Data Transforms"
      },
      {
        "id": "D",
        "text": "Ingestion API"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Einstein Studio Bring Your Own Model (BYOM) is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q37",
    "question": "Northern Trail Outfitters has customer data in three separate systems. Each system uses a different unique internal identifier for the same individual. However, all three systems consistently capture a common Loyalty Program ID for every customer. Which feature should a Data 360 Consultant use to link these records into a single Unified Profile based on this shared external ID?",
    "options": [
      {
        "id": "A",
        "text": "Use the Internal Organization match rule."
      },
      {
        "id": "B",
        "text": "Create an Exact Name and Email match rule."
      },
      {
        "id": "C",
        "text": "Implement the Exact Phone Number match rule."
      },
      {
        "id": "D",
        "text": "Configure a Party Identification match rule."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Configure a Party Identification match rule. is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q38",
    "question": "A Data 360 Consultant has been asked to help a customer implement Data 360 to improve their customer experience. They have identified four potential use cases. Which scenario represents the most appropriate initial use case based on Salesforce implementation best practices?",
    "options": [
      {
        "id": "A",
        "text": "Implementing a complex, sub-second web personalization engine using 15 disparate third-party data streams with varying schemas"
      },
      {
        "id": "B",
        "text": "Moving 20 years of legacy transaction data into Data 360 to reduce storage costs in their primary CRM org"
      },
      {
        "id": "C",
        "text": "Redefining the global identity resolution rules for 1 billion records across 12 global regions simultaneously without a specific departmental pilot"
      },
      {
        "id": "D",
        "text": "Consolidating three systems (Sales, Service, and Marketing Cloud) to provide a \"Single View of the Customer\" for high-tier support agents"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Consolidating three systems (Sales, Service, and Marketing Cloud) to provide a \"Single View of the Customer\" for high-tier support agents is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "solution_positioning",
    "topic": "Solution Positioning",
    "domainWeight": 14,
    "sourceVerified": true
  },
  {
    "id": "q39",
    "question": "A customer service manager wants to implement generative AI in Salesforce to help agents answer customer inquiries. They are concerned that the AI might give generic or inaccurate responses if it doesn't have access to the company's internal knowledge and data. Which Salesforce Data 360 feature should help ensure the AI provides accurate, contextually relevant answers by using internal data?",
    "options": [
      {
        "id": "A",
        "text": "Disabling vector embeddings to increase the accuracy of generative model processing"
      },
      {
        "id": "B",
        "text": "Automatically converting unstructured data into structured Salesforce records"
      },
      {
        "id": "C",
        "text": "Retrieval Augmented Generation (RAG) to ground AI prompts with relevant internal data"
      },
      {
        "id": "D",
        "text": "Replacing all structured data with AI-generated insights"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The AI pattern works when the model is grounded in appropriate Data 360 data and its outputs can be operationalized safely. Retrieval Augmented Generation (RAG) to ground AI prompts with relevant internal data fits because predictions or generative experiences are only useful when the data is representative, governed, and connected to Salesforce execution patterns such as scoring jobs, Flow, or grounded retrieval. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "solution_positioning",
    "topic": "Solution Positioning",
    "domainWeight": 14,
    "sourceVerified": true
  },
  {
    "id": "q40",
    "question": "A global beverage company (data provider) and a sports media network (data consumer) are collaborating in a Data 360 clean room to identify high- value partnership opportunities. The parties decide to use the segment overlap use case template to determine how many of the beverage company's Premium Loyalty Members are also active subscribers of the sports network, without exposing raw personally identifiable information (PII). When configuring the segment overlap template, which requirement must be met to allow the results to be filtered by specific demographics like \"Region\" or \"Age Group\" in the final output?",
    "options": [
      {
        "id": "A",
        "text": "The Region and Age Group fields must be set as foreign keys in the data model objects (DMOs) of both organizations."
      },
      {
        "id": "B",
        "text": "Both parties must map their \"Region\" and \"Age Group\" data to a shared calculated insight before joining the clean room."
      },
      {
        "id": "C",
        "text": "The Data 360 Consultant must configure a many-to-many relationship between the two search index data model objects (DMOs)."
      },
      {
        "id": "D",
        "text": "The data provider must include these additional fields as segmentation attributes within the use case template configuration."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. The data provider must include these additional fields as segmentation attributes within the use case template configuration. aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q41",
    "question": "Cumulus Financial needs to create a composite key on an incoming data source that combines the fields Customer Region and Customer Identifier. Which formula function should a Data 360 Consultant use to create a composite key when a primary key is not available in a data stream?",
    "options": [
      {
        "id": "A",
        "text": "COALESCE"
      },
      {
        "id": "B",
        "text": "CONCAT"
      },
      {
        "id": "C",
        "text": "COMBINE"
      },
      {
        "id": "D",
        "text": "CAST"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, CONCAT fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q42",
    "question": "A global marketing team is using Salesforce Data 360 to create highly targeted segments. Many of the team members are new to the organization and are unfamiliar with the data model and attributes, such as various Product Category names. This lack of data knowledge is causing delays, as users must frequently ask the data team for assistance in identifying the proper segmentation criteria. Which configuration should a Data 360 Consultant implement on the data model object (DMO) so that these users can see and select from the actual data values present in the system while building their segments?",
    "options": [
      {
        "id": "A",
        "text": "Create a data kit and share a list of values across all marketing users."
      },
      {
        "id": "B",
        "text": "Create a Data 360 Report for each DMO that counts how many times each value appears for a given attribute."
      },
      {
        "id": "C",
        "text": "Utilize Data Explorer or Query Editor to identify common attribute values."
      },
      {
        "id": "D",
        "text": "Enable Value Suggestion for text fields on DMOs."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. Enable Value Suggestion for text fields on DMOs. fits because Data 360 depends on mappings and relationships between data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q43",
    "question": "A customer is interested in tracking their Average Time To Close for Service Cloud cases. They are looking for a flexible solution that provides near real- time reporting and allows different teams to review the data across the relevant dimensions for that team coming from Sales, Service, Marketing, and Commerce Clouds. Which solution meets the customer's needs?",
    "options": [
      {
        "id": "A",
        "text": "Data Model Object (DMO) Formula Fields"
      },
      {
        "id": "B",
        "text": "Service Cloud Reports"
      },
      {
        "id": "C",
        "text": "Calculated Insights"
      },
      {
        "id": "D",
        "text": "Semantic Model Metrics"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The AI pattern works when the model is grounded in appropriate Data 360 data and its outputs can be operationalized safely. Semantic Model Metrics fits because predictions or generative experiences are only useful when the data is representative, governed, and connected to Salesforce execution patterns such as scoring jobs, Flow, or grounded retrieval. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q44",
    "question": "A Data 360 Consultant for Northern Trail Outfitters is observing Identity Resolution processing metrics. The consultant notices that the volume of source profiles processed in the most recent batch is less than the total volume of source profiles. What is the most likely mechanism that causes source profiles to be skipped during Identity Resolution processing?",
    "options": [
      {
        "id": "A",
        "text": "A profile is only sent for unification if the assigned data stream is running at its maximum frequency."
      },
      {
        "id": "B",
        "text": "A profile is skipped if the calculated Unification Score does not meet the minimum threshold set in the identity resolution rules."
      },
      {
        "id": "C",
        "text": "A profile is only processed if a pre-processing step confirms a change in its data since the last processing run."
      },
      {
        "id": "D",
        "text": "A profile is excluded if it fails the initial Data Quality Score check, preventing unification."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. A profile is only processed if a pre-processing step confirms a change in its data since the last processing run. is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q45",
    "question": "A solution architect needs to create a segment of \"High Value Customers\". They define this as anyone who qualifies for the existing Platinum Loyalty segment OR anyone who has spent more than US $5,000. What is the most efficient way to build this?",
    "options": [
      {
        "id": "A",
        "text": "Create a waterfall segment, prioritizing the \"Platinum Loyalty\" group first and the \"High Spender\" group second."
      },
      {
        "id": "B",
        "text": "Use a nested segment for \"Platinum Loyalty\" and add a separate container for the minimum spend within OR operator."
      },
      {
        "id": "C",
        "text": "Create two separate segments and join them together in a Tableau dashboard for activation."
      },
      {
        "id": "D",
        "text": "Build a calculated insight that joins both conditions and use that as the only filter in a new segment."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Use a nested segment for \"Platinum Loyalty\" and add a separate container for the minimum spend within OR operator. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q46",
    "question": "A Data 360 Consultant is configuring a zero- copy architecture where an external Snowflake instance needs to access Data 360 data without the latency of traditional extract, transform, load (ETL) processes. Which capability should the consultant use to expose Data 360 objects to the external Snowflake environment?",
    "options": [
      {
        "id": "A",
        "text": "Data 360 Webhook Subscriptions"
      },
      {
        "id": "B",
        "text": "Data 360 Data Shares"
      },
      {
        "id": "C",
        "text": "Data 360 Data Bundles"
      },
      {
        "id": "D",
        "text": "Data 360 S3 Direct Ingress"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. Data 360 Data Shares aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q47",
    "question": "A Data 360 Consultant has set up an identity resolution ruleset for their client's Data 360 implementation and now wants to confirm the results. Which two features should the consultant use to validate the data on a unified profile?",
    "options": [
      {
        "id": "A",
        "text": "Profile Explorer and Query Editor"
      },
      {
        "id": "B",
        "text": "Data Explorer and Actions"
      },
      {
        "id": "C",
        "text": "Identity Resolution and Query API"
      },
      {
        "id": "D",
        "text": "Data Actions and Query API"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Profile ExplorerandQuery Editor is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.\n\n[Technical Audit Note: Although the prompt asks 'Which two features...', the multiple-choice options bundle pairs together using 'and'. Option A correctly identifies both Profile Explorer (used to inspect unified customer 360 profiles and linked source records) and Query Editor (used to run ANSI SQL queries against Unified Individual and link DMOs).]",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q48",
    "question": "A Data 360 Consultant has a large historical dataset stored in Snowflake as parquet files in an object store. The consultant needs to run heavy analytics queries periodically, with high throughput but not necessarily real- time needs. Which Data 360 pattern is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Query federation without acceleration (Live or Direct Access)"
      },
      {
        "id": "B",
        "text": "Ingest data into Data 360 as a data lake object (DLO)"
      },
      {
        "id": "C",
        "text": "File federation"
      },
      {
        "id": "D",
        "text": "Query federation with acceleration (Caching)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. Query federation with acceleration (Caching) aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q49",
    "question": "A Data 360 Consultant needs to filter out specific contact points from the Unified Individuals that qualify for a segment. Where should the consultant apply this filtering?",
    "options": [
      {
        "id": "A",
        "text": "Apply contact point filtering during the creation of the segment"
      },
      {
        "id": "B",
        "text": "Apply contact point filtering when creating an activation"
      },
      {
        "id": "C",
        "text": "Apply contact point filtering leveraging a calculated insight"
      },
      {
        "id": "D",
        "text": "Apply contact point filtering on data ingestion"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Apply contact point filtering when creating an activation works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q50",
    "question": "A Data 360 Consultant is setting up a zero- copy data federation connection with a partner, Snowflake. What is the first step the consultant must perform in Data 360?",
    "options": [
      {
        "id": "A",
        "text": "Map the external data directly to the Unified Individual data model object (DMO)."
      },
      {
        "id": "B",
        "text": "Establish a connection in the Data 360 Setup using the specific provider's credentials."
      },
      {
        "id": "C",
        "text": "Create a data stream using the Bulk API category using the specific provider's credentials."
      },
      {
        "id": "D",
        "text": "Run an identity resolution matching rule."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. Establish a connection in the Data 360 Setup using the specific provider's credentials. aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q51",
    "question": "A Data 360 Consultant noticed a recent increase in a customer's consolidation rate. Which change to the identity resolution ruleset typically causes this result?",
    "options": [
      {
        "id": "A",
        "text": "Modifying a ruleset that increases the number of matched profiles"
      },
      {
        "id": "B",
        "text": "Removing existing identity resolution rules"
      },
      {
        "id": "C",
        "text": "Reducing the number of data sources mapped to the Individual object"
      },
      {
        "id": "D",
        "text": "Deleting duplicate records from source data streams"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Modifying a ruleset that increases the number of matched profiles is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q52",
    "question": "A Data 360 Consultant is performing a source system inventory for Northern Trail Outfitters (NTO). During the review of the standard data model, the consultant identifies several business- specific fields in the source system that do not have a corresponding field in the standard data model objects (DMOs). Following best practices for mapping preparation, which action should the consultant take?",
    "options": [
      {
        "id": "A",
        "text": "Extend the relevant standard DMOs by adding custom fields to accommodate the missing data."
      },
      {
        "id": "B",
        "text": "Ignore the business-specific fields and map only the fields that exist in the standard DMOs."
      },
      {
        "id": "C",
        "text": "Create a new custom DMO for every business-specific field identified in the source system."
      },
      {
        "id": "D",
        "text": "Map the business-specific fields to the \"Other\" category to avoid modifying the standard model."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. Extend the relevant standard DMOs by adding custom fields to accommodate the missing data. fits because Data 360 depends on mappings and relationships between data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q53",
    "question": "A Data 360 Consultant is building a marketing- to- sales handoff process that requires sales reps to see a chronological list of a prospect's Web Page Views and Email Clicks directly on the Lead record. These interactions are stored as Engagement data in Data 360. What is the most efficient way to display this?",
    "options": [
      {
        "id": "A",
        "text": "Embed a filtered report chart on the record page that queries the Data 360 objects directly."
      },
      {
        "id": "B",
        "text": "Drag the native Data 360 Related List Enrichment onto the Lead Lightning page and configure the relevant Engagement data model objects (DMOs)."
      },
      {
        "id": "C",
        "text": "Create a custom object in Salesforce, use Flow to sync Data 360 Engagement records back to CRM, and add a standard related list."
      },
      {
        "id": "D",
        "text": "Use Dynamic Forms to conditionally show fields from the Data 360 Individual object based on the Lead's status."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The operational requirement is to move Data 360 context into the CRM process at the right latency and without unnecessary replication. Drag the native Data 360 Related List Enrichment onto the Lead Lightning page and configure the relevant Engagement data model objects (DMOs). meets the operational need because Data 360 can surface context or trigger action in Salesforce without forcing every engagement, score, or profile attribute to be copied into custom CRM objects. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q54",
    "question": "A Data 360 Consultant at a global travel company has completed the mapping of several data lake objects (DLOs) to the data model objects (DMOs) for a new loyalty program. Before building segments, the consultant needs to verify that the join keys between the Unified Individual and the custom Loyalty Ledger DMO are returning the expected results. Which tool should the consultant use to execute a manual SQL query to preview these results?",
    "options": [
      {
        "id": "A",
        "text": "The Data 360 Calculated Insights Builder"
      },
      {
        "id": "B",
        "text": "The Data 360 Query Editor"
      },
      {
        "id": "C",
        "text": "The Data 360 Metadata Search"
      },
      {
        "id": "D",
        "text": "The Data 360 Data Explorer"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. The Data 360 Query Editor fits because Data 360 depends on mappings and relationships between data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q55",
    "question": "When setting up file federation for a data lake on Azure Blob Storage, what is the role of the manifest file?",
    "options": [
      {
        "id": "A",
        "text": "It reduces the file size of the source data before Data 360 attempts to read it."
      },
      {
        "id": "B",
        "text": "It is used to manually map source fields to the Cloud Information Model."
      },
      {
        "id": "C",
        "text": "It defines metadata and paths to identify specific files for the data stream and track updates."
      },
      {
        "id": "D",
        "text": "It provides the PGP public key required to decrypt the federated data files."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. It defines metadata and paths to identify specific files for the data stream and track updates. aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q56",
    "question": "A Data 360 Consultant at Northern Trail Outfitters is attempting to ingest a field from the Contact object in Salesforce CRM that contains both yyyy-mm-dd and yyyy-mm-dd hh:mm:ss values. The target field is set to Date datatype. Which statement is true in this situation?",
    "options": [
      {
        "id": "A",
        "text": "The target field will only hold the time part and ignore the date part."
      },
      {
        "id": "B",
        "text": "The target field will throw an error and store null values."
      },
      {
        "id": "C",
        "text": "The target field will only hold the date part and ignore the time part."
      },
      {
        "id": "D",
        "text": "The target field will be able to hold both types of values."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, The target field will only hold the date part and ignore the time part. fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q57",
    "question": "Northern Trail Outfitters wants to run a multi-step marketing campaign where customers receive different offers based on a strict priority hierarchy. The marketing team needs to ensure that each customer is assigned to only one segment to avoid sending overlapping promotions. Which feature should a Data 360 Consultant recommend to meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Exclusion Rules"
      },
      {
        "id": "B",
        "text": "Nested Segment Logic"
      },
      {
        "id": "C",
        "text": "Waterfall Segmentation"
      },
      {
        "id": "D",
        "text": "Sequential Segment Membership"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Waterfall Segmentation works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q58",
    "question": "Which tool should users use to visualize and analyze unified customer data in Data 360?",
    "options": [
      {
        "id": "A",
        "text": "Salesforce CLI"
      },
      {
        "id": "B",
        "text": "Heroku"
      },
      {
        "id": "C",
        "text": "Intelligence Reports Advanced"
      },
      {
        "id": "D",
        "text": "Tableau"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Tableau is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q59",
    "question": "A company stores customer data in Marketing Cloud and uses the Marketing Cloud Connector to ingest data into Data 360. Where does a request for Data Deletion or Right to Be Forgotten get submitted?",
    "options": [
      {
        "id": "A",
        "text": "In Data 360 settings"
      },
      {
        "id": "B",
        "text": "Through Consent API"
      },
      {
        "id": "C",
        "text": "In Marketing Cloud settings"
      },
      {
        "id": "D",
        "text": "On the individual data profile in Data 360"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The governance lens is least privilege, purpose limitation, and honoring privacy operations against the individual profile. Through Consent API supports the governance requirement because Data 360 implementations should minimize unnecessary access, avoid over-collection, and process deletion or consent requests at the profile level where Salesforce expects them. The safest design is explicit, auditable, and limited to the business purpose. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "setup_and_administration",
    "topic": "Data 360 Setup and Administration",
    "domainWeight": 13,
    "sourceVerified": true
  },
  {
    "id": "q60",
    "question": "A marketer needs to segment customers based on their Lifetime Loyalty Points. This requires summing all point-based transactions from a historical ledger brought in from their data lake along with a Commerce Cloud data stream. Which tool should the marketer use?",
    "options": [
      {
        "id": "A",
        "text": "Streaming Transform"
      },
      {
        "id": "B",
        "text": "Calculated Insight"
      },
      {
        "id": "C",
        "text": "Batch Transform"
      },
      {
        "id": "D",
        "text": "Secondary Index"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Calculated Insight fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q61",
    "question": "A Data 360 Consultant creates a segment of customers who placed orders in the last 30 days and includes related attributes from the Sales Order data model object (DMO) in the activation. After activating the segment to Marketing Cloud, the customer notices that some orders older than 30 days are included. What should the consultant do to resolve this issue?",
    "options": [
      {
        "id": "A",
        "text": "Filter out older orders in Marketing Cloud after activation."
      },
      {
        "id": "B",
        "text": "Apply a data space filter to exclude orders older than 30 days."
      },
      {
        "id": "C",
        "text": "Apply a 30-day date filter on the Sales Order DMO within the activation."
      },
      {
        "id": "D",
        "text": "Build a segment using the Sales Order DMO and filter orders to the last 30 days."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Apply a 30-day date filter on the Sales Order DMO within the activation. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q62",
    "question": "What is the main reason to use a secondary index on a data lake object (DLO)?",
    "options": [
      {
        "id": "A",
        "text": "To compress the storage footprint of the raw data"
      },
      {
        "id": "B",
        "text": "To transform raw data into a different data type"
      },
      {
        "id": "C",
        "text": "To enable efficient querying on non-primary key attributes"
      },
      {
        "id": "D",
        "text": "To increase the write speed of the ingestion pipeline"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, To enable efficient querying on non-primary key attributes fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q63",
    "question": "A customer has multiple data sources and needs to match and reconcile data about individuals into a single unified profile. Which feature should the Data 360 Consultant recommend for the customer?",
    "options": [
      {
        "id": "A",
        "text": "Identity Resolution"
      },
      {
        "id": "B",
        "text": "Data Consolidation"
      },
      {
        "id": "C",
        "text": "Data Cleansing"
      },
      {
        "id": "D",
        "text": "Harmonization"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Identity Resolution is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q64",
    "question": "A Data 360 Consultant needs to unify records from a legacy billing system and a CRM. Both systems use different internal IDs, but both store a common Customer_Tax_ID. How should the consultant ensure these records can be matched in an identity resolution ruleset?",
    "options": [
      {
        "id": "A",
        "text": "Map both the billing ID and CRM ID to the Individual Primary Key field."
      },
      {
        "id": "B",
        "text": "Map the Customer_Tax_ID from both systems to the Party Identification object with a consistent Identification Name."
      },
      {
        "id": "C",
        "text": "Create a reconciliation rule that gives the CRM data stream a higher priority than the billing system."
      },
      {
        "id": "D",
        "text": "Configure a fuzzy match rule on the Individual object using the Customer_Tax_ID attribute."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Map the Customer_Tax_ID from both systems to the Party Identification object with a consistent Identification Name. is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q65",
    "question": "A global insurance provider has tasked a Data 360 Consultant with optimizing performance for analytical queries running several times per hour against an external Redshift table in Salesforce Data 360 with no real-time needs. Which federation approach should the consultant recommend to balance performance and cost?",
    "options": [
      {
        "id": "A",
        "text": "Configure cached acceleration to store and refresh external data for repeat queries."
      },
      {
        "id": "B",
        "text": "Use live query federation so every request hits the external compute engine directly."
      },
      {
        "id": "C",
        "text": "Implement file federation exclusively using Data 360 compute on storage."
      },
      {
        "id": "D",
        "text": "Ingest the external data into Salesforce Data 360 as a standard object."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. Configure cached acceleration to store and refresh external data for repeat queries. aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q66",
    "question": "A Data 360 Consultant is attempting to configure Data 360 in an existing Developer Pro sandbox that was refreshed prior to the organization purchasing Data 360 licenses. Although the consultant has the Data 360 Admin permission set assigned in production, they cannot see the Data 360 Setup menu or the Data Spaces configuration options in the sandbox. Which action should the consultant take to resolve this issue?",
    "options": [
      {
        "id": "A",
        "text": "Refresh the sandbox immediately to pull the new metadata and license counts from production."
      },
      {
        "id": "B",
        "text": "Navigate to Company Information in the sandbox and select Match Production Licenses."
      },
      {
        "id": "C",
        "text": "Update the Contract Management settings in the sandbox to toggle the Data 360 Features switch to enabled."
      },
      {
        "id": "D",
        "text": "Manually create the Data 360 Admin permission set in the sandbox to match the production configuration."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The governance lens is least privilege, purpose limitation, and honoring privacy operations against the individual profile. Navigate to Company Information in the sandbox and select Match Production Licenses. supports the governance requirement because Data 360 implementations should minimize unnecessary access, avoid over-collection, and process deletion or consent requests at the profile level where Salesforce expects them. The safest design is explicit, auditable, and limited to the business purpose. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "setup_and_administration",
    "topic": "Data 360 Setup and Administration",
    "domainWeight": 13,
    "sourceVerified": true
  },
  {
    "id": "q67",
    "question": "Northern Trail Outfitters (NTO) wants to send a promotional campaign to customers that have purchased within the past 6 months. The Data 360 Consultant creates a segment to meet this requirement. Now, NTO has brought an additional requirement to suppress customers who have made purchases within the last week. What should the consultant use to remove the recent customers?",
    "options": [
      {
        "id": "A",
        "text": "Segmentation exclude rules"
      },
      {
        "id": "B",
        "text": "Streaming insights"
      },
      {
        "id": "C",
        "text": "Batch transforms"
      },
      {
        "id": "D",
        "text": "Related attributes"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Segmentation exclude rules works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q68",
    "question": "A customer requests that their personal data be deleted. Which action should the Data 360 Consultant take to accommodate this request in Data 360?",
    "options": [
      {
        "id": "A",
        "text": "Use Consent API to request deletion of the customer's information."
      },
      {
        "id": "B",
        "text": "Use a streaming API call to delete the customer's information from the data lake object."
      },
      {
        "id": "C",
        "text": "Use the Governance API call to delete the customer's information."
      },
      {
        "id": "D",
        "text": "Use Profile Explorer to delete the customer data from Data 360."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Use Consent API to request deletion of the customer's information. is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "setup_and_administration",
    "topic": "Data 360 Setup and Administration",
    "domainWeight": 13,
    "sourceVerified": true
  },
  {
    "id": "q69",
    "question": "Northern Trail Outfitters (NTO) has a machine learning (ML) model trained externally in Amazon SageMaker to predict customer churn, and wants to use that model's inference inside Data 360 without duplicating data. What should NTO do to achieve this?",
    "options": [
      {
        "id": "A",
        "text": "Use built-in Data 360 Calculated Insights."
      },
      {
        "id": "B",
        "text": "Consume the predictions from the external platform as a data lake object (DLO)."
      },
      {
        "id": "C",
        "text": "Connect the trained model in Data 360 in Bring Your Own Model (BYOM)."
      },
      {
        "id": "D",
        "text": "Use an out-of-the-box Einstein Studio customer churn predictive model."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The AI pattern works when the model is grounded in appropriate Data 360 data and its outputs can be operationalized safely. Connect the trained model in Data 360 in Bring Your Own Model (BYOM). fits because predictions or generative experiences are only useful when the data is representative, governed, and connected to Salesforce execution patterns such as scoring jobs, Flow, or grounded retrieval. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q70",
    "question": "A data architect is using Change Sets to move a new set of data configurations between two Salesforce Data 360 environments. The architect has created a data kit in the source org that includes several new data streams and identity resolution rules. Which component type should the architect select when adding these to the outbound change set to ensure the configuration is successfully transferred?",
    "options": [
      {
        "id": "A",
        "text": "Data Stream Configuration"
      },
      {
        "id": "B",
        "text": "Identity Resolution Ruleset"
      },
      {
        "id": "C",
        "text": "Data 360 Metadata Definition"
      },
      {
        "id": "D",
        "text": "Data Package Kit Definition"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The lifecycle point is that Data 360 configuration is metadata, but it still has product-specific packaging and activation steps. Data Package Kit Definition is the right fit because Data 360 components are not fully usable just because generic deployment succeeded. The consultant must complete the Data 360-specific lifecycle step so streams, mappings, insights, and rules are correctly registered in the target environment. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "setup_and_administration",
    "topic": "Data 360 Setup and Administration",
    "domainWeight": 13,
    "sourceVerified": true
  },
  {
    "id": "q71",
    "question": "What is a key requirement for a flow to be able to act on Data 360 data in near real time using a data action?",
    "options": [
      {
        "id": "A",
        "text": "The data action must be mapped to a platform event that the flow is subscribed to."
      },
      {
        "id": "B",
        "text": "The Data 360 home instance must be in the same Salesforce CRM org."
      },
      {
        "id": "C",
        "text": "The flow must be active and the user must have the Data 360 Marketing Admin permission."
      },
      {
        "id": "D",
        "text": "The flow must be a screen flow embedded on the record page."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The operational requirement is to move Data 360 context into the CRM process at the right latency and without unnecessary replication. The data action must be mapped to a platform event that the flow is subscribed to. meets the operational need because Data 360 can surface context or trigger action in Salesforce without forcing every engagement, score, or profile attribute to be copied into custom CRM objects. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q72",
    "question": "A Data 360 Consultant recently discovered that their Identity Resolution process is matching individuals who share email addresses or phone numbers but are not actually the same individual. What should the consultant do to address this issue?",
    "options": [
      {
        "id": "A",
        "text": "Modify the existing ruleset to use fewer matching rules, run the ruleset and review the updated results, and then adjust as needed until the individuals are matching correctly."
      },
      {
        "id": "B",
        "text": "Modify the existing ruleset with stricter matching criteria, run the ruleset and review the updated results, and then adjust as needed until the individuals are matching correctly."
      },
      {
        "id": "C",
        "text": "Create and run a new ruleset with fewer matching rules, compare the two rulesets to review and verify the results, and then migrate to the new ruleset once approved."
      },
      {
        "id": "D",
        "text": "Create and run a new ruleset with stricter matching criteria, compare the two rulesets to review and verify the results, and then migrate to the new ruleset once approved."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Create and run a new ruleset with stricter matching criteria, compare the two rulesets to review and verify the results, and then migrate to the new ruleset once approved. is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q73",
    "question": "A Data 360 Consultant wants to perform aggregations in 15-minute windows on data collected via the Interactions SDK or Mobile SDK. Which method should the consultant use?",
    "options": [
      {
        "id": "A",
        "text": "Batch transform"
      },
      {
        "id": "B",
        "text": "Streaming insight"
      },
      {
        "id": "C",
        "text": "Formula fields"
      },
      {
        "id": "D",
        "text": "Calculated insight"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Streaming insight is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q74",
    "question": "Northern Trail Outfitters (NTO) is struggling with fragmented customer data across marketing, sales, and service systems. NTO decides to implement Data 360 to improve its customer strategy. How does Data 360 primarily help NTO solve this business challenge?",
    "options": [
      {
        "id": "A",
        "text": "It archives historical transaction records for 10 years to meet regulatory data retention requirements."
      },
      {
        "id": "B",
        "text": "It creates automated weekly business intelligence dashboards to help managers forecast sales revenue."
      },
      {
        "id": "C",
        "text": "It unifies data into a single profile to provide personalized experiences across all touch points."
      },
      {
        "id": "D",
        "text": "It provides a data security layer that encrypts sensitive information to ensure global GDPR compliance."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The AI pattern works when the model is grounded in appropriate Data 360 data and its outputs can be operationalized safely. It unifies data into a single profile to provide personalized experiences across all touch points. fits because predictions or generative experiences are only useful when the data is representative, governed, and connected to Salesforce execution patterns such as scoring jobs, Flow, or grounded retrieval. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "solution_positioning",
    "topic": "Solution Positioning",
    "domainWeight": 14,
    "sourceVerified": true
  },
  {
    "id": "q75",
    "question": "After a predictive model is activated in Data 360, where are the resulting scores or predictions typically stored for use in segmentation?",
    "options": [
      {
        "id": "A",
        "text": "Within the Audit Trail logs for security compliance"
      },
      {
        "id": "B",
        "text": "As an attribute on a related data model object (DMO)"
      },
      {
        "id": "C",
        "text": "In a temporary CSV file available in the Setup menu"
      },
      {
        "id": "D",
        "text": "Directly within the source system (for example, Marketing Cloud or Sales Cloud) only"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The AI pattern works when the model is grounded in appropriate Data 360 data and its outputs can be operationalized safely. As an attribute on a related data model object (DMO) fits because predictions or generative experiences are only useful when the data is representative, governed, and connected to Salesforce execution patterns such as scoring jobs, Flow, or grounded retrieval. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q76",
    "question": "A global ecommerce brand tasks a Data 360 Consultant with resolving duplicate customer records originating from a web portal, a mobile app, and a physical point-of-sale system. The goal is to ensure that a customer is recognized as the same individual across all three sources to provide a consistent service experience. Which feature should the consultant configure to achieve this outcome?",
    "options": [
      {
        "id": "A",
        "text": "Matching rules within the Identity Resolution settings to link source records"
      },
      {
        "id": "B",
        "text": "Data transform logic to normalize naming conventions during the ingestion process"
      },
      {
        "id": "C",
        "text": "Partitioning strategies to separate data based on the original source system"
      },
      {
        "id": "D",
        "text": "Streaming insights to detect real-time changes in customer contact information"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Matching rules within the Identity Resolution settings to link source records is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q77",
    "question": "A data architect is modeling a relationship between a custom Vehicle data model object (DMO) and the standard Individual DMO to track car ownership. The requirement states that one vehicle can be owned by only one individual, but one individual can own multiple vehicles. Which cardinality should the architect select when creating this relationship from Vehicle to Individual?",
    "options": [
      {
        "id": "A",
        "text": "One-to-One (1:1)"
      },
      {
        "id": "B",
        "text": "Many-to-Many (N:N)"
      },
      {
        "id": "C",
        "text": "Many-to-One (N:1)"
      },
      {
        "id": "D",
        "text": "One-to-Many (1:N)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. Many-to-One (N:1) fits because Data 360 depends on mappings and relationships between data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q78",
    "question": "What is the minimum requirement needed when using the Visual Insights Builder to create a calculated insight?",
    "options": [
      {
        "id": "A",
        "text": "Joining on two or more data model objects"
      },
      {
        "id": "B",
        "text": "A SUM function"
      },
      {
        "id": "C",
        "text": "At least one measure and one dimension"
      },
      {
        "id": "D",
        "text": "A WHERE clause"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The analytics requirement determines whether the logic belongs in an insight, a semantic metric, or a query-time layer. At least one measure and one dimension matches the need because the business is asking for reusable metrics, dimensions, or aggregation behavior that consumers can filter and analyze. Data 360 separates raw harmonized data from analytical definitions so that dashboards, Tableau experiences, and segment logic remain consistent. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q79",
    "question": "A Data 360 Consultant wants to use Data 360 Clean Rooms to collaborate with a partner. Which statement is true regarding data security in this environment?",
    "options": [
      {
        "id": "A",
        "text": "Both parties must move their data into a shared Amazon S3 bucket first."
      },
      {
        "id": "B",
        "text": "The data stays in its original location, and only the query results are shared."
      },
      {
        "id": "C",
        "text": "The provider must grant Modify All Data permissions to the consumer."
      },
      {
        "id": "D",
        "text": "PII is automatically decrypted for the consumer to ensure matching accuracy."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. The data stays in its original location, and only the query results are shared. aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q80",
    "question": "What is a reason to create a formula when ingesting a data stream?",
    "options": [
      {
        "id": "A",
        "text": "To concatenate files so they are ingested in the correct sequence"
      },
      {
        "id": "B",
        "text": "To remove duplicate rows of data from the data stream"
      },
      {
        "id": "C",
        "text": "To add a unique external identifier to an existing ruleset"
      },
      {
        "id": "D",
        "text": "To transform a datetime field into a date field for use in data mapping"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, To transform a datetime field into a date field for use in data mapping fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q81",
    "question": "A retail company wants a dashboard to display \"Top 10 Trending Products\" based on product page views over the last 24 hours. The company typically has over 500 million engagements a week. The requirements specify that the maximum latency for data freshness is 15 minutes and the dashboard must load with minimal load times for executive users. Which architectural component should the Data 360 Consultant use to meet these performance and scale requirements?",
    "options": [
      {
        "id": "A",
        "text": "Direct Related List"
      },
      {
        "id": "B",
        "text": "Calculated Insights"
      },
      {
        "id": "C",
        "text": "Real-Time Data Graph"
      },
      {
        "id": "D",
        "text": "Streaming Insight"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The analytics requirement determines whether the logic belongs in an insight, a semantic metric, or a query-time layer. Streaming Insight matches the need because the business is asking for reusable metrics, dimensions, or aggregation behavior that consumers can filter and analyze. Data 360 separates raw harmonized data from analytical definitions so that dashboards, Tableau experiences, and segment logic remain consistent. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q82",
    "question": "Which statement about Data 360's Web and Mobile Application Connector is true?",
    "options": [
      {
        "id": "A",
        "text": "Any data streams associated with the connector will be automatically deleted upon deleting the app from Data 360 Setup."
      },
      {
        "id": "B",
        "text": "The connector schema can be updated to delete an existing field."
      },
      {
        "id": "C",
        "text": "A standard schema containing event, profile, and transaction data is created at the time the connector is configured."
      },
      {
        "id": "D",
        "text": "The Tenant Specific Endpoint is auto-generated in Data 360 when setting the connector."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, The Tenant Specific Endpoint is auto-generated in Data 360 when setting the connector. fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q83",
    "question": "A lead architect needs to build a real-time Customer Health Dashboard in a custom web portal that displays a unified customer's recent purchase history (Engagement data) and their calculated loyalty score. Which API strategy is most appropriate to meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Use the Metadata API to retrieve the schema of the unified profile, then use a standard REST GET call on the Individual object."
      },
      {
        "id": "B",
        "text": "Use the Query API to send an SQL/SOQL-based request to join data to retrieve a comprehensive view."
      },
      {
        "id": "C",
        "text": "Use the Profile API because it is optimized for high-speed retrieval of unified profile attributes and calculated insights."
      },
      {
        "id": "D",
        "text": "Use the Ingestion API to push the dashboard requirements into a data stream to trigger a webhook."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The analytics requirement determines whether the logic belongs in an insight, a semantic metric, or a query-time layer. Use the Profile API because it is optimized for high-speed retrieval of unified profile attributes and calculated insights. matches the need because the business is asking for reusable metrics, dimensions, or aggregation behavior that consumers can filter and analyze. Data 360 separates raw harmonized data from analytical definitions so that dashboards, Tableau experiences, and segment logic remain consistent. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q84",
    "question": "Cumulus Financial created a segment called High Investment Balance Customers. This is a foundational segment that includes several segmentation criteria the marketing team should consistently use. What should the Data 360 Consultant recommend to ensure this consistency when the team creates future, more refined segments?",
    "options": [
      {
        "id": "A",
        "text": "Create new segments using nested segments."
      },
      {
        "id": "B",
        "text": "Package High Investment Balance Customers in a data kit."
      },
      {
        "id": "C",
        "text": "Create new segments by cloning High Investment Balance Customers."
      },
      {
        "id": "D",
        "text": "Create a High Investment Balance calculated insight."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Create new segments using nested segments. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q85",
    "question": "A Data 360 Consultant is planning to use Data Explorer to examine Data 360 data. Which data is the consultant able to examine in Data Explorer?",
    "options": [
      {
        "id": "A",
        "text": "Activations, data lake objects, calculated insights"
      },
      {
        "id": "B",
        "text": "Data lake objects, data model objects, calculated insights"
      },
      {
        "id": "C",
        "text": "Segments, data model objects, calculated insights"
      },
      {
        "id": "D",
        "text": "Data source objects, data lake objects, data model objects"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Data lake objects, data model objects, calculated insights is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q86",
    "question": "A Data 360 Consultant is setting up a data stream with transactional data. Which field type should the consultant choose to ensure that leading zeros in the purchase order number are preserved?",
    "options": [
      {
        "id": "A",
        "text": "Number"
      },
      {
        "id": "B",
        "text": "Decimal"
      },
      {
        "id": "C",
        "text": "Text"
      },
      {
        "id": "D",
        "text": "Serial"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Text fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "connection_and_ingestion",
    "topic": "Data Source Connection and Ingestion",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q87",
    "question": "An organization wants to give users the ability to identify and select text attributes from a picklist of options. Which Data 360 feature should help with this use case?",
    "options": [
      {
        "id": "A",
        "text": "Data harmonization"
      },
      {
        "id": "B",
        "text": "Value suggestion"
      },
      {
        "id": "C",
        "text": "Transformation formulas"
      },
      {
        "id": "D",
        "text": "Global picklists"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Value suggestion is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q88",
    "question": "A solution architect needs to create a segment of \"High Value Customers\". They define this as anyone who qualifies for the existing Platinum Loyalty segment OR anyone who has spent more than US$5,000. What is the most efficient way to build this?",
    "options": [
      {
        "id": "A",
        "text": "Create two separate segments and join them together in a Tableau dashboard for activation."
      },
      {
        "id": "B",
        "text": "Build a calculated insight that joins both conditions and use that as the only filter in a new segment."
      },
      {
        "id": "C",
        "text": "Use a nested segment for \"Platinum Loyalty\" and add a separate container for the minimum spend with an OR operator."
      },
      {
        "id": "D",
        "text": "Create a waterfall segment, prioritizing the \"Platinum Loyalty\" group first and the \"High Spender\" group second."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Use a nested segment for \"Platinum Loyalty\" and add a separate container for the minimum spend with an OR operator. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q89",
    "question": "An architect is managing a Full Sandbox that is used for performance testing of Data 360 segments. The team decides to perform a sandbox refresh to bring over the latest Schema changes and record updates from the production environment. What is the impact of this refresh on the existing Data 360 configuration within that sandbox?",
    "options": [
      {
        "id": "A",
        "text": "The sandbox maintains its connection to the existing Data 360 instance, but all data mapping is reverted to Draft status."
      },
      {
        "id": "B",
        "text": "Only the identity resolution rules are deleted, while data streams remain active and continue to pull data from the refreshed sandbox objects."
      },
      {
        "id": "C",
        "text": "The Data 360 instance is deleted and a new, blank Data 360 instance must be provisioned after the refresh."
      },
      {
        "id": "D",
        "text": "All Data 360 metadata is replicated from the current version of production instance, and the ingested records are cleared and must be re-ingested."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. All Data 360 metadata is replicated from the current version of production instance, and the ingested records are cleared and must be re-ingested. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "setup_and_administration",
    "topic": "Data 360 Setup and Administration",
    "domainWeight": 13,
    "sourceVerified": true
  },
  {
    "id": "q90",
    "question": "A retail company has customer data scattered across CRM, ecommerce, and support platforms. Marketing and support teams struggle to get a complete picture of the customer because data is inconsistent and siloed. Which Salesforce Data 360 feature should the company implement first to solve this problem?",
    "options": [
      {
        "id": "A",
        "text": "Unifying fragmented customer and business data into a single, comprehensive view"
      },
      {
        "id": "B",
        "text": "Delivering personalized offers across channels based on advanced segmentation"
      },
      {
        "id": "C",
        "text": "Creating real-time AI-driven recommendations for customer engagement"
      },
      {
        "id": "D",
        "text": "Automating proactive service actions using IoT and predictive analytics"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Unifying fragmented customer and business data into a single, comprehensive view fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "solution_positioning",
    "topic": "Solution Positioning",
    "domainWeight": 14,
    "sourceVerified": true
  },
  {
    "id": "q91",
    "question": "An organization is just getting started with Data 360 and wants to demonstrate quick wins in order to build momentum for broader adoption. Which business outcome should the organization prioritize?",
    "options": [
      {
        "id": "A",
        "text": "Consolidating all partner and supply chain data into a single master management hub"
      },
      {
        "id": "B",
        "text": "Implementing a global data lineage system to calculate data quality scores and create audit reports for compliance teams across all business units"
      },
      {
        "id": "C",
        "text": "Building a predictive platform to update dynamic segments every 30 seconds"
      },
      {
        "id": "D",
        "text": "Improving customer service resolution times by giving support agents a 360-degree view"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Improving customer service resolution times by giving support agents a 360-degree view is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "solution_positioning",
    "topic": "Solution Positioning",
    "domainWeight": 14,
    "sourceVerified": true
  },
  {
    "id": "q92",
    "question": "Data 360 receives a nightly file of all ecommerce transactions from the previous day. Several segments and activations depend upon calculated insights from the updated data in order to maintain accuracy in the customer's scheduled campaign messages. What should the Data 360 Consultant do to ensure the ecommerce data is ready for use for each of the scheduled activations?",
    "options": [
      {
        "id": "A",
        "text": "Ensure the segments are set to Rapid Publish and set to refresh every hour."
      },
      {
        "id": "B",
        "text": "Ensure the activations are set to Incremental Activation and automatically publish every hour."
      },
      {
        "id": "C",
        "text": "Use Flow to trigger a change data event on the ecommerce data to refresh calculated insights and segments before the activations are scheduled to run."
      },
      {
        "id": "D",
        "text": "Set a refresh schedule for the calculated insights to occur every hour."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Set a refresh schedule for the calculated insights to occur every hour. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "enhancements_sharing_analysis",
    "topic": "Data Enhancements, Sharing, and Analysis",
    "domainWeight": 18,
    "sourceVerified": true
  },
  {
    "id": "q93",
    "question": "What does the Source Sequence reconciliation rule do in Identity Resolution?",
    "options": [
      {
        "id": "A",
        "text": "Sets the priority of specific data sources when building attributes in a unified profile, such as a first or last name"
      },
      {
        "id": "B",
        "text": "Includes data from sources where the data is most frequently occurring"
      },
      {
        "id": "C",
        "text": "Identifies which data sources should be used in the process of reconciliation by prioritizing the most recently updated data source"
      },
      {
        "id": "D",
        "text": "Identifies which individual records should be merged into a unified profile by setting a priority for specific data sources"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Sets the priority of specific data sources when building attributes in a unified profile, such as a first or last name is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rulesdriven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably.",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  },
  {
    "id": "q94",
    "question": "Cumulus Financial wants its service reps to view all cases associated with a Unified Individual on a contact record. Which feature should a Data 360 Consultant consider for this use case?",
    "options": [
      {
        "id": "A",
        "text": "Related List Enrichment"
      },
      {
        "id": "B",
        "text": "Segment Activation"
      },
      {
        "id": "C",
        "text": "Copy Field Enrichment"
      },
      {
        "id": "D",
        "text": "Data Action"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Related List Enrichment is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data.",
    "domainId": "activations_and_utilization",
    "topic": "Data Activations and Utilization",
    "domainWeight": 20,
    "sourceVerified": true
  },
  {
    "id": "q95",
    "question": "Northern Trail Outfitters (NTO) is ingesting transaction data into Data 360. The source data includes Order ID, Order Date, and Total Amount, which map to the standard Sales Order data model object (DMO). Additionally, NTO needs to capture a unique Sustainability Packaging Fee for each transaction, which is not available in the standard model. Which modeling approach should a Data 360 Consultant recommend to support this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Map standard fields to the Sales Order DMO and add a custom attribute for the fee."
      },
      {
        "id": "B",
        "text": "Map all fields to a new Custom DMO specifically created for NTO transactions."
      },
      {
        "id": "C",
        "text": "Use Sales Order DMO and map the packaging fee to the Order Description field."
      },
      {
        "id": "D",
        "text": "Create a calculated model to derive the sustainability fee using a streaming data transform."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. Map standard fields to the Sales Order DMO and add a custom attribute for the fee. fits because Data 360 depends on mappings and relationships between data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. ### **<mark>Thank You for Purchasing DATA-CON-101 PDF</mark>** # _<u><mark>[Offer]</mark></u>_ <u><mark>Improve Your Exam</mark></u> <mark>Preparation with our Practice Exam Software</mark> <mark>Use Coupon “20OFF” for special 20% discount on the purchase of Practice Test Software. Practice Exam Software helps you validate your preparation in a simulated exam environment.</mark> #### **<mark>Download Free Pract</mark> i** **<mark>ce Test Demo from our site:</mark>**",
    "domainId": "harmonization_and_unification",
    "topic": "Harmonization and Unification",
    "domainWeight": 17,
    "sourceVerified": true
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = DATA_CLOUD_QUESTIONS;
}
if (typeof window !== "undefined") {
  window.DATA_CLOUD_QUESTIONS = DATA_CLOUD_QUESTIONS;
}
