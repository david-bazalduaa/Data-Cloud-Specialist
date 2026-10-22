Questions & Answers PDF 

P-1 

**Salesforce DATA-CON-101 Exam Salesforce Certified Data 360 Consultant** 

**Questions & Answers (Retail Version – Full Questions Set)** 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-2 

## **Product Questions: 95 Version: 4.0** 

#### **<u>Question: 1</u>** 

A client wants to bring in loyalty data from a custom object in Salesforce CRM that contains a point balance for accrued hotel points and airline points within the same record. The client wants to split these point systems into two separate records for better tracking and processing. What should a Data 360 Consultant recommend in this scenario? 

A. Create a junction object in Salesforce CRM and modify the ingestion strategy. 

- B. Use batch transforms to create a second data lake object. 

- C. Clone the data source object. 

- D. Create a data kit from the data lake object and deploy it to the same Data 360 org. 

**Answer: B** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Use batch transforms to create a second data lake object. fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-3 

#### **<u>Question: 2</u>** 

A data architect has deployed an inbound change set containing a data kit into a new Salesforce Production org. Although the deployment status shows "Succeeded", the architect notices that the specific data stream configurations and calculated insights included in the kit are not yet active or visible in the Data 360 functional tabs. What is the next required action the architect must perform to fully implement the configurations within the data kit? 

A. Install the data kit from the Data 360 Setup menu to map and activate the components. 

- B. Re-upload the outbound change set from the source org to clear the metadata cache. 

- C. Run a "Full Refresh" on all data streams within the newly deployed change set. 

- D. Use the Salesforce Package Manager to verify the installation status of the components. 

**Answer: A** 

Explanation: 

The lifecycle point is that Data 360 configuration is metadata, but it still has product-specific packaging and activation steps. Install the data kit from the Data 360 Setup menu to map and activate the components. is the right fit because Data 360 components are not fully usable just because generic deployment succeeded. The consultant must complete the Data 360-specific lifecycle step so streams, mappings, insights, and rules are correctly registered in the target environment. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 3</u>** 

A Data 360 Consultant needs to provide real- time, multidimensional analytics for a derived insight, "Net Profit", to be used within Tableau Next. The requirements specify that the metrics must be as up to date as possible while allowing users to dynamically filter by region, period, and product category. Which approach should the consultant take? 

- A. Define a real-time data graph. 

- B. Create a calculated insight using SQL. 

- C. Create a calculated field in the semantic layer. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-4 

##### D. Configure a streaming transform. 

**Answer: C** 

Explanation: 

The analytics requirement determines whether the logic belongs in an insight, a semantic metric, or a query-time layer. Create a calculated field in the semantic layer. matches the need because the business is asking for reusable metrics, dimensions, or aggregation behavior that consumers can filter and analyze. Data 360 separates raw harmonized data from analytical definitions so that dashboards, Tableau experiences, and segment logic remain consistent. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 4</u>** 

A Data 360 Consultant is preparing to implement Data 360. Which ethic should the consultant adhere to regarding customer data? 

- A. Carefully consider asking for sensitive data such as age, gender, and ethnicity. 

- B. Give senior leaders in the firm access to customer data for audit purposes. 

- C. Collect and use all of the data to create more personalized experiences. 

- D. Map sensitive data to the same data model object for ease of deletion. 

**Answer: A** 

Explanation: 

The governance lens is least privilege, purpose limitation, and honoring privacy operations against the individual profile. Carefully consider asking for sensitive data such as age, gender, and ethnicity. supports the governance requirement because Data 360 implementations should minimize unnecessary access, avoid over-collection, and process deletion or consent requests at the profile 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-5 

level where Salesforce expects them. The safest design is explicit, auditable, and limited to the business purpose. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 5</u>** 

Northern Trail Outfitters uploads new customer data to an Amazon S3 bucket on a daily basis to be ingested in Data 360. Based on this, a calculated insight is created that shows the total spend per customer in the last 30 days. In which sequence should each process be run to ensure that freshly imported data is ready and available to use for any segment? 

- A. Calculated Insight > Refresh Data Stream > Identity Resolution 

- B. Refresh Data Stream > Calculated Insight > Identity Resolution 

- C. Refresh Data Stream > Identity Resolution > Calculated Insight 

- D. Identity Resolution > Refresh Data Stream > Calculated Insight 

**Answer: C** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Refresh Data Stream > Identity Resolution > Calculated Insight fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 6</u>** 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-6 

What is a Data 360 use case for improving the patient experience in the Healthcare and Life Sciences sector? 

- A. Activating a Unified Health Score to provide a holistic view of patient wellness and engagement 

- B. Managing the payroll of visiting physicians via a custom mobile app 

- C. Using data to predict the best location for which hospital the patient should visit 

- D. Automating the retail checkout process in hospital gift shops 

#### **Answer: A** 

Explanation: 

The industry value comes from applying unified, governed data to a patient-centered outcome rather than an unrelated operational task. Activating a Unified Health Score to provide a holistic view of patient wellness and engagement is the useful Data 360 pattern because it applies unified data to a healthcare journey outcome: better context, more relevant engagement, and a complete view of wellness or interaction history. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 7</u>** 

How does Data 360 handle an individual's Right to Be Forgotten? 

A. Deletes the records from all data source objects, and any downstream data model objects are updated at the next scheduled ingestion 

B. Deletes the specified Individual and records from any data model object/data lake object related to the Individual 

C. Deletes the specified Individual record and its Unified Individual Link record 

D. Deletes the specified Individual and records from any data source object mapped to the Individual data model object 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-7 

#### **Answer: B** 

Explanation: 

The governance lens is least privilege, purpose limitation, and honoring privacy operations against the individual profile. Deletes the specified Individual and records from any data model object/data lake object related to the Individual supports the governance requirement because Data 360 implementations should minimize unnecessary access, avoid over-collection, and process deletion or consent requests at the profile level where Salesforce expects them. The safest design is explicit, auditable, and limited to the business purpose. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 8</u>** 

Northern Trail Outfitters wants to compute recency, frequency, monetary (RFM) scores on its unified individuals in order to use it in Marketing Cloud Engagement. What is the best way to achieve this goal? 

A. Include the Calculated Insight attribute in activation. 

- B. Use copy fields to show the calculated insight. 

- C. Add the score to a related list. 

- D. Import the score to Marketing Cloud via SFTP. 

#### **Answer: A** 

Explanation: 

The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Include the Calculated Insight attribute in activation. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-8 

those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 9</u>** 

Which statement is true related to batch ingestions from Salesforce CRM? 

A. When a column is added or removed, the CRM Connector performs a full refresh. 

B. CRM data cannot be manually refreshed and must wait for the next scheduled synchronization. 

C. The CRM Connector performs an incremental refresh when 600,000 or more deletion records are detected. 

D. The CRM Connector's synchronization times can be customized to up to 15-minute intervals. 

#### **Answer: A** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, When a column is added or removed, the CRM Connector performs a full refresh. fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 10</u>** 

A developer at Cloud Kicks is integrating customer data from a legacy shoe-inventory system and a web-store platform into Data 360. They need a way to ensure the Customer Name field from both systems is recognized as the same attribute. Which component should the developer use to provide this standardized structure? 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-9 

- A. An encryption key to secure PII during the data transfer 

- B. A segmentation canvas for selecting desired customer attributes 

- C. An identity resolution ruleset to merge duplicate records 

- D. A data model object (DMO) to map and relate the data fields 

**Answer: D** 

Explanation: 

The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. A data model object (DMO) to map and relate the data fields is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 11</u>** 

A Data 360 Consultant wants to activate a segment on the Unified Individual object. Which steps are required from ingestion to activation? 

A. Data > Data Lake Object > Identity ResolutionandUnification > Segmentation > Activation 

- B. Data > Data Lake Object > Map to Data Model Object > Activation 

C. Data > Data Lake Object > Map to Data Model Object > Identity ResolutionandUnification > Segmentation > Activation 

D. Data > Data Lake Object > Map to Data Model Object > Identity ResolutionandUnification > Activation 

**Answer: C** 

Explanation: 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-10 

The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Data > Data Lake Object > Map to Data Model Object > Identity ResolutionandUnification > Segmentation > Activation works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 12</u>** 

A Data 360 Consultant created a calculated insight that can be seen when 'Segmenting On' Individuals on the segmentation canvas but not Unified Individual. What is the reason for this? 

A. The consultant doesn't have the correct permissions to see the calculated insight for Unified Individual segments. 

B. The calculated insight is missing a relationship to the Unified Individual data model object (DMO). 

- C. The data space for the Unified Individual is different than the Individual data model object (DMO). 

- D. Calculated insights can't be used for the Unified Individual data model object (DMO). 

**Answer: B** 

Explanation: 

The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. The calculated insight is missing a relationship to the Unified Individual data model object (DMO). is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-11 

the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 13</u>** 

When preparing to build a predictive AI model in Einstein Studio using Data 360 data, which step is essential to ensure the model produces ethical and unbiased results? 

- A. Disabling all calculated insights before starting the training process 

- B. Ensuring the training dataset contains at least 10 million records 

- C. Auditing training data to identify which segments of the customer base are underrepresented 

- D. Using only unstructured data to prevent pattern recognition 

#### **Answer: C** 

Explanation: 

The AI pattern works when the model is grounded in appropriate Data 360 data and its outputs can be operationalized safely. Auditing training data to identify which segments of the customer base are underrepresented fits because predictions or generative experiences are only useful when the data is representative, governed, and connected to Salesforce execution patterns such as scoring jobs, Flow, or grounded retrieval. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 14</u>** 

What is the primary functionality of Data 360? 

- A. To help users build a heat map using their data 

- B. To automatically generate sales forecasts based on historical email patterns 

- C. To unify and harmonize data from multiple sources to create a complete customer profile 

- D. To create a master data management (MDM) strategy 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-12 

#### **Answer: C** 

Explanation: 

The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. To unify and harmonize data from multiple sources to create a complete customer profile is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 15</u>** 

A Data 360 Consultant is building a segment to announce a new product launch for customers who have previously purchased black pants. How should the consultant place the attributes for product color and product type from the Order Product object to meet this criteria? 

A. Place the attributes for product color and product type in a single container. 

B. Place the attribute for product color in one container and the attribute for product type in another container. 

C. Place an attribute for the "black pants" calculated insight to dynamically apply. 

D. Place the attributes for product color and product type as direct attributes. 

**Answer: A** 

Explanation: 

The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Place the attributes for product color and product type in a single container. works because Data 360 segmentation and activation must respect audience grain, 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-13 

relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 16</u>** 

A customer has two Data 360 orgs. A new configuration has been completed and tested for an Amazon S3 data stream and its mappings in one of the Data 360 orgs. What is recommended to package and promote this configuration to the customer's second org? 

- A. Use the Salesforce CRM Connector. 

- B. Use the Metadata API. 

- C. Package as an AppExchange application. 

- D. Create a data kit. 

#### **Answer: D** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Create a data kit. fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 17</u>** 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-14 

A customer has a requirement to receive a notification whenever an activation fails for a particular segment. Which feature should the Data 360 Consultant use to solution for this use case? 

A. Activation alert 

B. Flow 

C. Dashboard 

D. Report 

**Answer: B** 

Explanation: 

The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Flow works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 18</u>** 

What does the Ignore Empty Value option do in Identity Resolution? 

- A. Ignores Individual object records with empty fields when running identity resolution rules 

- B. Ignores Contact Point object records with empty fields when running identity resolution rules 

- C. Ignores empty fields when running reconciliation rules 

- D. Ignores empty fields when running match rules 

**Answer: D** 

Explanation: 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-15 

The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Ignores empty fields when running match rules is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 19</u>** 

An analyst needs to verify the data populated in a newly mapped data model object (DMO). They open the Query Editor within the Data 360 interface to perform a quick check of the records. What is the programming language the analyst must use to retrieve and view records from the DMO within this tool? 

- A. Salesforce Object Query Language (SOQL) 

- B. JavaScript Object Notation (JSON) 

- C. Apex Data Manipulation Language 

- D. Structured Query Language (SQL) 

#### **Answer: D** 

Explanation: 

The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. Structured Query Language (SQL) fits because Data 360 depends on mappings and relationships between data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-16 

where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 20</u>** 

Northern Trail Outfitters (NTO) wants to create a segment where a unique record is created in the published audience for every transaction a customer completes. If a customer makes three separate purchases, the resulting segment should contain three distinct entries for that customer to allow for transaction- specific messaging. All transactions are mapped to the Sales Order data model object (DMO), and NTO is using Identity Resolution to unify customers on the Unified Individual DMO. Which configuration should a Data 360 Consultant use to meet this requirement? 

- A. Segment on the Individual DMO 

- B. Segment on a calculated insight based on Sales Orders 

- C. Segment on the Sales Order DMO 

- D. Segment on the Unified Individual DMO 

**Answer: C** 

Explanation: 

The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Segment on the Sales Order DMO is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 21</u>** 

A customer has a custom Customer_Email_c object related to the standard Contact object in Salesforce CRM. This custom object stores the email address for a Contact that they want to use for 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-17 

activation. To which data model object should the customer map the email object to? 

- A. Custom Customer_Email_c object 

- B. Contact 

- C. Contact Point Email 

D. Individual 

**Answer: C** 

Explanation: 

The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. Contact Point Email fits because Data 360 depends on mappings and relationships between data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 22</u>** 

A Data 360 Consultant is explaining the behavior of Data 360 sandboxes to project stakeholders. The stakeholders want to know what happens to the data in a Data 360 sandbox during a standard version. 

A. Every single row of historical engagement data from the last 10 years 

- B. A direct and real-time connection to the production data lake for live querying 

- C. All customer credit card information and sensitive personal passwords 

- D. Only the metadata, such as data model object (DMO) definitions and mappings 

**Answer: D** 

Explanation: 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-18 

The lifecycle point is that Data 360 configuration is metadata, but it still has product-specific packaging and activation steps. Only the metadata, such as data model object (DMO) definitions and mappings is the right fit because Data 360 components are not fully usable just because generic deployment succeeded. The consultant must complete the Data 360-specific lifecycle step so streams, mappings, insights, and rules are correctly registered in the target environment. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 23</u>** 

A user wants to be able to create a multi- dimensional metric to identify unified individual lifetime value (LTV). Which sequence of data model object (DMO) joins is necessary within the calculated insight to enable this calculation? 

A. Sales Order > Unified Individual 

- B. Unified Individual > Individual > Sales Order 

- C. Sales Order > Individual > Unified Individual 

- D. Unified Individual > Unified Link Individual > Sales Order 

#### **Answer: C** 

Explanation: 

The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. Sales Order > Individual > Unified Individual fits because Data 360 depends on mappings and relationships between data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-19 

where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 24</u>** 

A Data 360 Consultant for a high- growth retail brand is configuring the ingestion of customer behavioral data from a mobile application. The brand requires that the raw, unmodified data be stored exactly as it appears in the source system before any mapping or transformations occur to maintain a historical record of the transmission. Which object serves as the container of this source data in Data 360? 

- A. Calculated Insight Object 

- B. Data Model Object 

- C. Party Identification Object 

- D. Data Lake Object 

**Answer: D** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Data Lake Object fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 25</u>** 

A data source does not have a field that can be designated as a primary key. What should the Data 360 Consultant do? 

A. Use the default primary key recommended by Data 360. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-20 

- B. Remove duplicates from the data source and then select a primary key. 

- C. Select a field as a primary key and then add a key qualifier. 

- D. Create a composite key by combining two or more source fields through a formula field. 

**Answer: D** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Create a composite key by combining two or more source fields through a formula field. fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 26</u>** 

A Data 360 Consultant is configuring an activation for a segment created from the Unified Individual object to be sent to a Loyalty Cloud activation target. They would like to include the Loyalty Program Tier for personalization, but this field is stored in a separate Loyalty Program Member data model object (DMO) that was not used in the initial segment filters. Which feature should the consultant use during the activation setup to include this external identifier in the exported payload? 

- A. Calculated insights to join the Loyalty Program Tier to the Unified Individual prior to segmentation 

- B. Contact point priority to rank the Loyalty Program Tier above the standard Individual ID 

- C. Activation membership to select the Loyalty Program Member DMO and its associated fields 

- D. Data stream mappings to re-map the Loyalty Program Tier as a secondary key on the Individual object 

**Answer: C** 

Explanation: 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-21 

The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Activation membership to select the Loyalty Program Member DMO and its associated fields works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 27</u>** 

Which permission setting should a Data 360 Consultant check if a custom Salesforce CRM object is not available in New Data Stream configuration? 

- A. Confirm the View All object permission is enabled in the source Salesforce CRM org. 

- B. Confirm the Ingest object permission is enabled in the Salesforce CRM org. 

- C. Confirm the Create object permission is enabled in the Data 360 org. 

- D. Confirm the Modify object permission is enabled in the Data 360 org. 

#### **Answer: A** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Confirm the View All object permission is enabled in the source Salesforce CRM org. fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-22 

govern it and reuse it reliably. 

#### **<u>Question: 28</u>** 

When reporting on calculated insights in Salesforce, what is a critical limitation a Data 360 Consultant must keep in mind regarding data freshness? 

A. The data reflects the state of the last time the insight was batch processed. 

B. Calculated insights can only be reported on if they contain fewer than 2,000 total rows. 

C. Insights are only available in reports if they have been "Activated" to a Marketing Cloud engagement. 

D. Calculated insights are only updated once every 24 hours. 

#### **Answer: A** 

Explanation: 

The analytics requirement determines whether the logic belongs in an insight, a semantic metric, or a query-time layer. The data reflects the state of the last time the insight was batch processed. matches the need because the business is asking for reusable metrics, dimensions, or aggregation behavior that consumers can filter and analyze. Data 360 separates raw harmonized data from analytical definitions so that dashboards, Tableau experiences, and segment logic remain consistent. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 29</u>** 

Cumulus Financial (CF) wants to target loyal and engaged customers. When a platinum- tier customer visits their investment pages more than three times in a 24- hour period, CF wants to immediately send an email that offers a private consultation. What should a Data 360 Consultant recommend for this business requirement? 

A. Create a segment with standard publish to Marketing Cloud Engagement. 

B. Create a streaming insight with a data action to Marketing Cloud Engagement. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-23 

- C. Create a segment with rapid publish to Marketing Cloud Engagement. 

- D. Create a calculated insight with a data action to Marketing Cloud Engagement. 

#### **Answer: B** 

Explanation: 

The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Create a streaming insight with a data action to Marketing Cloud Engagement. is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 30</u>** 

A global ecommerce company uses Salesforce Data 360 to unify customer profiles across multiple systems, including Salesforce CRM, Commerce Cloud, and Snowflake. The business wants to securely leverage unified customer data across Snowflake to support analytics and downstream use cases. The solution must meet the following requirements: Customer data accessed from Snowflake must be read- only; Updates to customer profiles must be available in near real time; The overall architecture must minimize operational complexity and data duplication. Which approach should the Data 360 Consultant recommend? 

A. Expose Data 360 data through REST APIs and ingest it into Snowflake using streaming ingestion. 

B. Schedule nightly exports of Data 360 data to cloud storage and load it into Snowflake using automated pipelines. 

C. Replicate Data 360 data into Salesforce standard objects and sync those objects to Snowflake using extract, transform, load (ETL) tools. 

D. Use Data 360 Data Sharing to share unified customer data directly to Snowflake. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-24 

#### **Answer: D** 

Explanation: 

The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. Use Data 360 Data Sharing to share unified customer data directly to Snowflake. aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 31</u>** 

A Data 360 Consultant wants to ensure that every segment managed by multiple brand teams adheres to the same set of exclusion criteria that are updated on a monthly basis. What is the most efficient option to allow for this capability? 

- A. Create a segment and copy it for each brand. 

- B. Create, publish, and deploy a data kit. 

- C. Create a reusable container block with common criteria. 

- D. Create a nested segment. 

**Answer: C** 

Explanation: 

The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Create a reusable container block with common criteria. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-25 

object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 32</u>** 

A Data 360 Consultant needs to build a model on Einstein Studio to predict the time- to- close of an opportunity brought into Data 360 from CRM. Based on the supported model types, which statement is true? 

A. The consultant should use a Multiclass Classification model to bucket the time-to-close into specifications. 

B. The consultant should use a Binary Classification model to determine if the time-to-close is long or short. 

C. The consultant should use a Multiclass Classification model because the outcome is represented as text data. 

D. The consultant should use a Regression model because the target outcome is a numeric measure. 

**Answer: D** 

Explanation: 

The AI pattern works when the model is grounded in appropriate Data 360 data and its outputs can be operationalized safely. The consultant should use a Regression model because the target outcome is a numeric measure. fits because predictions or generative experiences are only useful when the data is representative, governed, and connected to Salesforce execution patterns such as scoring jobs, Flow, or grounded retrieval. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-26 

#### **<u>Question: 33</u>** 

Which statement about query federation in Data 360 is true? 

- A. Query federation requires file-based data lakes such as Iceberg. 

- B. Data 360 executes queries using its own compute engine, regardless of the external system. 

- C. Query federation pushes SQL queries to the external system's compute layer. 

- D. Query federation requires data to be first converted to parquet format. 

#### **Answer: C** 

Explanation: 

The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. Query federation pushes SQL queries to the external system's compute layer. aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 34</u>** 

In Data 360, which mechanism ensures different business units can use the same Data 360 home org while keeping their data and metadata logically separated, to meet governance or compliance requirements? 

- A. Use separate companion connections within the same data space 

- B. Use different permission sets within the same data space 

- C. Use separate data spaces for each business unit 

- D. Use separate objects per business unit with record-type filtering 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-27 

#### **Answer: C** 

Explanation: 

The governance lens is least privilege, purpose limitation, and honoring privacy operations against the individual profile. Use separate data spaces for each business unit supports the governance requirement because Data 360 implementations should minimize unnecessary access, avoid overcollection, and process deletion or consent requests at the profile level where Salesforce expects them. The safest design is explicit, auditable, and limited to the business purpose. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 35</u>** 

Northern Trail Outfitters (NTO) wants to connect its B2C Commerce data with Data 360 and bring 2 years of transactional history into Data 360. What should NTO use to achieve this? 

- A. Sales Order object ingestion 

- B. Sales Product object ingestion 

- C. B2C Commerce Starter Bundles plus a custom extract 

- D. B2C Commerce Starter Bundles 

**Answer: C** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, B2C Commerce Starter Bundles plus a custom extract fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-28 

different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 36</u>** 

A data science team has developed a custom propensity- to- churn model in Amazon SageMaker. The company wants to use this model to score its Unified Profiles in Data 360 and use those scores for a high- priority retention segment. The Data 360 Consultant needs to ensure the data is not duplicated or moved out of Data 360 during this process. Which feature should the consultant use to integrate this model? 

- A. Einstein Studio Bring Your Own Model (BYOM) 

- B. Model Builder in Prompt Builder 

- C. Streaming Data Transforms 

- D. Ingestion API 

**Answer: A** 

Explanation: 

The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Einstein Studio Bring Your Own Model (BYOM) is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 37</u>** 

Northern Trail Outfitters has customer data in three separate systems. Each system uses a different unique internal identifier for the same individual. However, all three systems consistently capture a common Loyalty Program ID for every customer. Which feature should a Data 360 Consultant use to 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-29 

link these records into a single Unified Profile based on this shared external ID? 

- A. Use the Internal Organization match rule. 

- B. Create an Exact Name and Email match rule. 

- C. Implement the Exact Phone Number match rule. 

- D. Configure a Party Identification match rule. 

#### **Answer: D** 

Explanation: 

The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Configure a Party Identification match rule. is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 38</u>** 

A Data 360 Consultant has been asked to help a customer implement Data 360 to improve their customer experience. They have identified four potential use cases. Which scenario represents the most appropriate initial use case based on Salesforce implementation best practices? 

A. Implementing a complex, sub-second web personalization engine using 15 disparate third-party data streams with varying schemas 

B. Moving 20 years of legacy transaction data into Data 360 to reduce storage costs in their primary CRM org 

C. Redefining the global identity resolution rules for 1 billion records across 12 global regions simultaneously without a specific departmental pilot 

D. Consolidating three systems (Sales, Service, and Marketing Cloud) to provide a "Single View of the Customer" for high-tier support agents 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-30 

#### **Answer: D** 

Explanation: 

The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Consolidating three systems (Sales, Service, and Marketing Cloud) to provide a "Single View of the Customer" for high-tier support agents is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 39</u>** 

A customer service manager wants to implement generative AI in Salesforce to help agents answer customer inquiries. They are concerned that the AI might give generic or inaccurate responses if it doesn't have access to the company's internal knowledge and data. Which Salesforce Data 360 feature should help ensure the AI provides accurate, contextually relevant answers by using internal data? 

- A. Disabling vector embeddings to increase the accuracy of generative model processing 

- B. Automatically converting unstructured data into structured Salesforce records 

- C. Retrieval Augmented Generation (RAG) to ground AI prompts with relevant internal data 

- D. Replacing all structured data with AI-generated insights 

**Answer: C** 

Explanation: 

The AI pattern works when the model is grounded in appropriate Data 360 data and its outputs can be operationalized safely. Retrieval Augmented Generation (RAG) to ground AI prompts with relevant internal data fits because predictions or generative experiences are only useful when the data is representative, governed, and connected to Salesforce execution patterns such as scoring 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-31 

jobs, Flow, or grounded retrieval. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 40</u>** 

A global beverage company (data provider) and a sports media network (data consumer) are collaborating in a Data 360 clean room to identify high- value partnership opportunities. The parties decide to use the segment overlap use case template to determine how many of the beverage company's Premium Loyalty Members are also active subscribers of the sports network, without exposing raw personally identifiable information (PII). When configuring the segment overlap template, which requirement must be met to allow the results to be filtered by specific demographics like "Region" or "Age Group" in the final output? 

A. The Region and Age Group fields must be set as foreign keys in the data model objects (DMOs) of both organizations. 

B. Both parties must map their "Region" and "Age Group" data to a shared calculated insight before joining the clean room. 

C. The Data 360 Consultant must configure a many-to-many relationship between the two search index data model objects (DMOs). 

D. The data provider must include these additional fields as segmentation attributes within the use case template configuration. 

**Answer: D** 

Explanation: 

The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. The data provider must include these additional fields as segmentation attributes within the use case template configuration. aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-32 

create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 41</u>** 

Cumulus Financial needs to create a composite key on an incoming data source that combines the fields Customer Region and Customer Identifier. Which formula function should a Data 360 Consultant use to create a composite key when a primary key is not available in a data stream? 

A. COALESCE 

B. CONCAT 

C. COMBINE 

D. CAST 

#### **Answer: B** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, CONCAT fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 42</u>** 

A global marketing team is using Salesforce Data 360 to create highly targeted segments. Many of the team members are new to the organization and are unfamiliar with the data model and attributes, such as various Product Category names. This lack of data knowledge is causing delays, as users must frequently ask the data team for assistance in identifying the proper segmentation criteria. Which configuration should a Data 360 Consultant implement on the data model object (DMO) so that these users can see and select from the actual data values present in the system while 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-33 

building their segments? 

A. Create a data kit and share a list of values across all marketing users. 

B. Create a Data 360 Report for each DMO that counts how many times each value appears for a given attribute. 

C. Utilize Data Explorer or Query Editor to identify common attribute values. 

D. Enable Value Suggestion for text fields on DMOs. 

#### **Answer: D** 

Explanation: 

The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. Enable Value Suggestion for text fields on DMOs. fits because Data 360 depends on mappings and relationships between data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 43</u>** 

A customer is interested in tracking their Average Time To Close for Service Cloud cases. They are looking for a flexible solution that provides near real- time reporting and allows different teams to review the data across the relevant dimensions for that team coming from Sales, Service, Marketing, and Commerce Clouds. Which solution meets the customer's needs? 

A. Data Model Object (DMO) Formula Fields 

B. Service Cloud Reports 

C. Calculated Insights 

- D. Semantic Model Metrics 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-34 

#### **Answer: D** 

Explanation: 

The AI pattern works when the model is grounded in appropriate Data 360 data and its outputs can be operationalized safely. Semantic Model Metrics fits because predictions or generative experiences are only useful when the data is representative, governed, and connected to Salesforce execution patterns such as scoring jobs, Flow, or grounded retrieval. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 44</u>** 

A Data 360 Consultant for Northern Trail Outfitters is observing Identity Resolution processing metrics. The consultant notices that the volume of source profiles processed in the most recent batch is less than the total volume of source profiles. What is the most likely mechanism that causes source profiles to be skipped during Identity Resolution processing? 

A. A profile is only sent for unification if the assigned data stream is running at its maximum frequency. 

B. A profile is skipped if the calculated Unification Score does not meet the minimum threshold set in the identity resolution rules. 

C. A profile is only processed if a pre-processing step confirms a change in its data since the last processing run. 

D. A profile is excluded if it fails the initial Data Quality Score check, preventing unification. 

**Answer: C** 

Explanation: 

The identity logic is about linking source profiles safely, then choosing the best surviving values for 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-35 

the unified profile. A profile is only processed if a pre-processing step confirms a change in its data since the last processing run. is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 45</u>** 

A solution architect needs to create a segment of "High Value Customers". They define this as anyone who qualifies for the existing Platinum Loyalty segment OR anyone who has spent more than US $5,000. What is the most efficient way to build this? 

A. Create a waterfall segment, prioritizing the "Platinum Loyalty" group first and the "High Spender" group second. 

B. Use a nested segment for "Platinum Loyalty" and add a separate container for the minimum spend within OR operator. 

C. Create two separate segments and join them together in a Tableau dashboard for activation. 

D. Build a calculated insight that joins both conditions and use that as the only filter in a new segment. 

#### **Answer: B** 

Explanation: 

The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Use a nested segment for "Platinum Loyalty" and add a separate container for the minimum spend within OR operator. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-36 

#### **<u>Question: 46</u>** 

A Data 360 Consultant is configuring a zero- copy architecture where an external Snowflake instance needs to access Data 360 data without the latency of traditional extract, transform, load (ETL) processes. Which capability should the consultant use to expose Data 360 objects to the external Snowflake environment? 

- A. Data 360 Webhook Subscriptions 

- B. Data 360 Data Shares 

- C. Data 360 Data Bundles 

- D. Data 360 S3 Direct Ingress 

#### **Answer: B** 

Explanation: 

The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. Data 360 Data Shares aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 47</u>** 

A Data 360 Consultant has set up an identity resolution ruleset for their client's Data 360 implementation and now wants to confirm the results. Which two features should the consultant use to validate the data on a unified profile? 

- A. Profile ExplorerandQuery Editor 

- B. Data ExplorerandActions 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-37 

- C. Identity ResolutionandQuery API 

D. Data ActionsandQuery API 

#### **Answer: A** 

Explanation: 

The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Profile ExplorerandQuery Editor is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 48</u>** 

A Data 360 Consultant has a large historical dataset stored in Snowflake as parquet files in an object store. The consultant needs to run heavy analytics queries periodically, with high throughput but not necessarily real- time needs. Which Data 360 pattern is most appropriate? 

- A. Query federation without acceleration (Live or Direct Access) 

- B. Ingest data into Data 360 as a data lake object (DLO) 

- C. File federation 

- D. Query federation with acceleration (Caching) 

**Answer: D** 

Explanation: 

The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. Query federation with acceleration (Caching) aligns with the zero-copy 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-38 

model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 49</u>** 

A Data 360 Consultant needs to filter out specific contact points from the Unified Individuals that qualify for a segment. Where should the consultant apply this filtering? 

- A. Apply contact point filtering during the creation of the segment 

- B. Apply contact point filtering when creating an activation 

- C. Apply contact point filtering leveraging a calculated insight 

- D. Apply contact point filtering on data ingestion 

#### **Answer: B** 

Explanation: 

The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Apply contact point filtering when creating an activation works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-39 

#### **<u>Question: 50</u>** 

A Data 360 Consultant is setting up a zero- copy data federation connection with a partner, Snowflake. What is the first step the consultant must perform in Data 360? 

- A. Map the external data directly to the Unified Individual data model object (DMO). 

- B. Establish a connection in the Data 360 Setup using the specific provider's credentials. 

- C. Create a data stream using the Bulk API category using the specific provider's credentials. 

- D. Run an identity resolution matching rule. 

#### **Answer: B** 

Explanation: 

The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. Establish a connection in the Data 360 Setup using the specific provider's credentials. aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 51</u>** 

A Data 360 Consultant noticed a recent increase in a customer's consolidation rate. Which change to the identity resolution ruleset typically causes this result? 

- A. Modifying a ruleset that increases the number of matched profiles 

- B. Removing existing identity resolution rules 

- C. Reducing the number of data sources mapped to the Individual object 

- D. Deleting duplicate records from source data streams 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-40 

#### **Answer: A** 

Explanation: 

The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Modifying a ruleset that increases the number of matched profiles is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 52</u>** 

A Data 360 Consultant is performing a source system inventory for Northern Trail Outfitters (NTO). During the review of the standard data model, the consultant identifies several business- specific fields in the source system that do not have a corresponding field in the standard data model objects (DMOs). Following best practices for mapping preparation, which action should the consultant take? 

- A. Extend the relevant standard DMOs by adding custom fields to accommodate the missing data. 

- B. Ignore the business-specific fields and map only the fields that exist in the standard DMOs. 

- C. Create a new custom DMO for every business-specific field identified in the source system. 

- D. Map the business-specific fields to the "Other" category to avoid modifying the standard model. 

**Answer: A** 

Explanation: 

The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. Extend the relevant standard DMOs by adding custom fields to accommodate the missing data. fits because Data 360 depends on mappings and relationships between data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-41 

wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 53</u>** 

A Data 360 Consultant is building a marketing- to- sales handoff process that requires sales reps to see a chronological list of a prospect's Web Page Views and Email Clicks directly on the Lead record. These interactions are stored as Engagement data in Data 360. What is the most efficient way to display this? 

A. Embed a filtered report chart on the record page that queries the Data 360 objects directly. 

B. Drag the native Data 360 Related List Enrichment onto the Lead Lightning page and configure the relevant Engagement data model objects (DMOs). 

C. Create a custom object in Salesforce, use Flow to sync Data 360 Engagement records back to CRM, and add a standard related list. 

D. Use Dynamic Forms to conditionally show fields from the Data 360 Individual object based on the Lead's status. 

#### **Answer: B** 

Explanation: 

The operational requirement is to move Data 360 context into the CRM process at the right latency and without unnecessary replication. Drag the native Data 360 Related List Enrichment onto the Lead Lightning page and configure the relevant Engagement data model objects (DMOs). meets the operational need because Data 360 can surface context or trigger action in Salesforce without forcing every engagement, score, or profile attribute to be copied into custom CRM objects. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 54</u>** 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-42 

A Data 360 Consultant at a global travel company has completed the mapping of several data lake objects (DLOs) to the data model objects (DMOs) for a new loyalty program. Before building segments, the consultant needs to verify that the join keys between the Unified Individual and the custom Loyalty Ledger DMO are returning the expected results. Which tool should the consultant use to execute a manual SQL query to preview these results? 

A. The Data 360 Calculated Insights Builder 

B. The Data 360 Query Editor 

C. The Data 360 Metadata Search 

D. The Data 360 Data Explorer 

#### **Answer: B** 

Explanation: 

The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. The Data 360 Query Editor fits because Data 360 depends on mappings and relationships between data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 55</u>** 

When setting up file federation for a data lake on Azure Blob Storage, what is the role of the manifest file? 

- A. It reduces the file size of the source data before Data 360 attempts to read it. 

- B. It is used to manually map source fields to the Cloud Information Model. 

- C. It defines metadata and paths to identify specific files for the data stream and track updates. 

- D. It provides the PGP public key required to decrypt the federated data files. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-43 

#### **Answer: C** 

Explanation: 

The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. It defines metadata and paths to identify specific files for the data stream and track updates. aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 56</u>** 

A Data 360 Consultant at Northern Trail Outfitters is attempting to ingest a field from the Contact object in Salesforce CRM that contains both yyyy-mm-dd and yyyy-mm-dd hh:mm:ss values. The target field is set to Date datatype. Which statement is true in this situation? 

- A. The target field will only hold the time part and ignore the date part. 

- B. The target field will throw an error and store null values. 

- C. The target field will only hold the date part and ignore the time part. 

- D. The target field will be able to hold both types of values. 

**Answer: C** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, The target field will only hold the date part and ignore the time part. fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-44 

problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 57</u>** 

Northern Trail Outfitters wants to run a multi-step marketing campaign where customers receive different offers based on a strict priority hierarchy. The marketing team needs to ensure that each customer is assigned to only one segment to avoid sending overlapping promotions. Which feature should a Data 360 Consultant recommend to meet these requirements? 

- A. Exclusion Rules 

- B. Nested Segment Logic 

- C. Waterfall Segmentation 

- D. Sequential Segment Membership 

#### **Answer: C** 

Explanation: 

The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Waterfall Segmentation works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 58</u>** 

Which tool should users use to visualize and analyze unified customer data in Data 360? 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-45 

A. Salesforce CLI 

B. Heroku 

C. Intelligence Reports Advanced 

D. Tableau 

**Answer: D** 

Explanation: 

The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Tableau is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 59</u>** 

A company stores customer data in Marketing Cloud and uses the Marketing Cloud Connector to ingest data into Data 360. Where does a request for Data Deletion or Right to Be Forgotten get submitted? 

A. In Data 360 settings 

B. Through Consent API 

C. In Marketing Cloud settings 

D. On the individual data profile in Data 360 

**Answer: B** 

Explanation: 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-46 

The governance lens is least privilege, purpose limitation, and honoring privacy operations against the individual profile. Through Consent API supports the governance requirement because Data 360 implementations should minimize unnecessary access, avoid over-collection, and process deletion or consent requests at the profile level where Salesforce expects them. The safest design is explicit, auditable, and limited to the business purpose. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 60</u>** 

A marketer needs to segment customers based on their Lifetime Loyalty Points. This requires summing all point-based transactions from a historical ledger brought in from their data lake along with a Commerce Cloud data stream. Which tool should the marketer use? 

- A. Streaming Transform 

- B. Calculated Insight 

- C. Batch Transform 

- D. Secondary Index 

#### **Answer: B** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Calculated Insight fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-47 

#### **<u>Question: 61</u>** 

A Data 360 Consultant creates a segment of customers who placed orders in the last 30 days and includes related attributes from the Sales Order data model object (DMO) in the activation. After activating the segment to Marketing Cloud, the customer notices that some orders older than 30 days are included. What should the consultant do to resolve this issue? 

- A. Filter out older orders in Marketing Cloud after activation. 

- B. Apply a data space filter to exclude orders older than 30 days. 

- C. Apply a 30-day date filter on the Sales Order DMO within the activation. 

- D. Build a segment using the Sales Order DMO and filter orders to the last 30 days. 

#### **Answer: C** 

Explanation: 

The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Apply a 30-day date filter on the Sales Order DMO within the activation. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 62</u>** 

What is the main reason to use a secondary index on a data lake object (DLO)? 

- A. To compress the storage footprint of the raw data 

- B. To transform raw data into a different data type 

- C. To enable efficient querying on non-primary key attributes 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-48 

##### D. To increase the write speed of the ingestion pipeline 

**Answer: C** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, To enable efficient querying on non-primary key attributes fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 63</u>** 

A customer has multiple data sources and needs to match and reconcile data about individuals into a single unified profile. Which feature should the Data 360 Consultant recommend for the customer? 

- A. Identity Resolution 

- B. Data Consolidation 

- C. Data Cleansing 

- D. Harmonization 

**Answer: A** 

Explanation: 

The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Identity Resolution is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-49 

implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 64</u>** 

A Data 360 Consultant needs to unify records from a legacy billing system and a CRM. Both systems use different internal IDs, but both store a common Customer_Tax_ID. How should the consultant ensure these records can be matched in an identity resolution ruleset? 

A. Map both the billing ID and CRM ID to the Individual Primary Key field. 

B. Map the Customer_Tax_ID from both systems to the Party Identification object with a consistent Identification Name. 

C. Create a reconciliation rule that gives the CRM data stream a higher priority than the billing system. 

D. Configure a fuzzy match rule on the Individual object using the Customer_Tax_ID attribute. 

**Answer: B** 

Explanation: 

The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Map the Customer_Tax_ID from both systems to the Party Identification object with a consistent Identification Name. is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 65</u>** 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-50 

A global insurance provider has tasked a Data 360 Consultant with optimizing performance for analytical queries running several times per hour against an external Redshift table in Salesforce Data 360 with no real-time needs. Which federation approach should the consultant recommend to balance performance and cost? 

- A. Configure cached acceleration to store and refresh external data for repeat queries. 

- B. Use live query federation so every request hits the external compute engine directly. 

- C. Implement file federation exclusively using Data 360 compute on storage. 

- D. Ingest the external data into Salesforce Data 360 as a standard object. 

#### **Answer: A** 

Explanation: 

The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. Configure cached acceleration to store and refresh external data for repeat queries. aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 66</u>** 

A Data 360 Consultant is attempting to configure Data 360 in an existing Developer Pro sandbox that was refreshed prior to the organization purchasing Data 360 licenses. Although the consultant has the Data 360 Admin permission set assigned in production, they cannot see the Data 360 Setup menu or the Data Spaces configuration options in the sandbox. Which action should the consultant take to resolve this issue? 

A. Refresh the sandbox immediately to pull the new metadata and license counts from production. 

- B. Navigate to Company Information in the sandbox and select Match Production Licenses. 

- C. Update the Contract Management settings in the sandbox to toggle the Data 360 Features switch 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-51 

to enabled. 

D. Manually create the Data 360 Admin permission set in the sandbox to match the production configuration. 

**Answer: B** 

Explanation: 

The governance lens is least privilege, purpose limitation, and honoring privacy operations against the individual profile. Navigate to Company Information in the sandbox and select Match Production Licenses. supports the governance requirement because Data 360 implementations should minimize unnecessary access, avoid over-collection, and process deletion or consent requests at the profile level where Salesforce expects them. The safest design is explicit, auditable, and limited to the business purpose. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 67</u>** 

Northern Trail Outfitters (NTO) wants to send a promotional campaign to customers that have purchased within the past 6 months. The Data 360 Consultant creates a segment to meet this requirement. Now, NTO has brought an additional requirement to suppress customers who have made purchases within the last week. What should the consultant use to remove the recent customers? 

A. Segmentation exclude rules 

- B. Streaming insights 

- C. Batch transforms 

- D. Related attributes 

**Answer: A** 

Explanation: 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-52 

The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Segmentation exclude rules works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 68</u>** 

A customer requests that their personal data be deleted. Which action should the Data 360 Consultant take to accommodate this request in Data 360? 

A. Use Consent API to request deletion of the customer's information. 

- B. Use a streaming API call to delete the customer's information from the data lake object. 

- C. Use the Governance API call to delete the customer's information. 

- D. Use Profile Explorer to delete the customer data from Data 360. 

#### **Answer: A** 

Explanation: 

The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Use Consent API to request deletion of the customer's information. is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-53 

match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 69</u>** 

Northern Trail Outfitters (NTO) has a machine learning (ML) model trained externally in Amazon SageMaker to predict customer churn, and wants to use that model's inference inside Data 360 without duplicating data. What should NTO do to achieve this? 

- A. Use built-in Data 360 Calculated Insights. 

- B. Consume the predictions from the external platform as a data lake object (DLO). 

- C. Connect the trained model in Data 360 in Bring Your Own Model (BYOM). 

- D. Use an out-of-the-box Einstein Studio customer churn predictive model. 

#### **Answer: C** 

Explanation: 

The AI pattern works when the model is grounded in appropriate Data 360 data and its outputs can be operationalized safely. Connect the trained model in Data 360 in Bring Your Own Model (BYOM). fits because predictions or generative experiences are only useful when the data is representative, governed, and connected to Salesforce execution patterns such as scoring jobs, Flow, or grounded retrieval. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 70</u>** 

A data architect is using Change Sets to move a new set of data configurations between two Salesforce Data 360 environments. The architect has created a data kit in the source org that includes several new data streams and identity resolution rules. Which component type should the architect select when adding these to the outbound change set to ensure the configuration is successfully transferred? 

A. Data Stream Configuration 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-54 

- B. Identity Resolution Ruleset 

- C. Data 360 Metadata Definition 

- D. Data Package Kit Definition 

**Answer: D** 

Explanation: 

The lifecycle point is that Data 360 configuration is metadata, but it still has product-specific packaging and activation steps. Data Package Kit Definition is the right fit because Data 360 components are not fully usable just because generic deployment succeeded. The consultant must complete the Data 360-specific lifecycle step so streams, mappings, insights, and rules are correctly registered in the target environment. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 71</u>** 

What is a key requirement for a flow to be able to act on Data 360 data in near real time using a data action? 

- A. The data action must be mapped to a platform event that the flow is subscribed to. 

- B. The Data 360 home instance must be in the same Salesforce CRM org. 

- C. The flow must be active and the user must have the Data 360 Marketing Admin permission. 

- D. The flow must be a screen flow embedded on the record page. 

**Answer: A** 

Explanation: 

The operational requirement is to move Data 360 context into the CRM process at the right latency and without unnecessary replication. The data action must be mapped to a platform event that the 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-55 

flow is subscribed to. meets the operational need because Data 360 can surface context or trigger action in Salesforce without forcing every engagement, score, or profile attribute to be copied into custom CRM objects. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 72</u>** 

A Data 360 Consultant recently discovered that their Identity Resolution process is matching individuals who share email addresses or phone numbers but are not actually the same individual. What should the consultant do to address this issue? 

A. Modify the existing ruleset to use fewer matching rules, run the ruleset and review the updated results, and then adjust as needed until the individuals are matching correctly. 

B. Modify the existing ruleset with stricter matching criteria, run the ruleset and review the updated results, and then adjust as needed until the individuals are matching correctly. 

C. Create and run a new ruleset with fewer matching rules, compare the two rulesets to review and verify the results, and then migrate to the new ruleset once approved. 

D. Create and run a new ruleset with stricter matching criteria, compare the two rulesets to review and verify the results, and then migrate to the new ruleset once approved. 

**Answer: D** 

Explanation: 

The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Create and run a new ruleset with stricter matching criteria, compare the two rulesets to review and verify the results, and then migrate to the new ruleset once approved. is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-56 

it and reuse it reliably. 

#### **<u>Question: 73</u>** 

A Data 360 Consultant wants to perform aggregations in 15-minute windows on data collected via the Interactions SDK or Mobile SDK. Which method should the consultant use? 

A. Batch transform 

- B. Streaming insight 

- C. Formula fields 

- D. Calculated insight 

#### **Answer: B** 

Explanation: 

The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Streaming insight is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 74</u>** 

Northern Trail Outfitters (NTO) is struggling with fragmented customer data across marketing, sales, and service systems. NTO decides to implement Data 360 to improve its customer strategy. How does Data 360 primarily help NTO solve this business challenge? 

A. It archives historical transaction records for 10 years to meet regulatory data retention requirements. 

B. It creates automated weekly business intelligence dashboards to help managers forecast sales revenue. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-57 

C. It unifies data into a single profile to provide personalized experiences across all touch points. 

D. It provides a data security layer that encrypts sensitive information to ensure global GDPR compliance. 

**Answer: C** 

Explanation: 

The AI pattern works when the model is grounded in appropriate Data 360 data and its outputs can be operationalized safely. It unifies data into a single profile to provide personalized experiences across all touch points. fits because predictions or generative experiences are only useful when the data is representative, governed, and connected to Salesforce execution patterns such as scoring jobs, Flow, or grounded retrieval. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 75</u>** 

After a predictive model is activated in Data 360, where are the resulting scores or predictions typically stored for use in segmentation? 

- A. Within the Audit Trail logs for security compliance 

- B. As an attribute on a related data model object (DMO) 

- C. In a temporary CSV file available in the Setup menu 

- D. Directly within the source system (for example, Marketing Cloud or Sales Cloud) only 

**Answer: B** 

Explanation: 

The AI pattern works when the model is grounded in appropriate Data 360 data and its outputs can be operationalized safely. As an attribute on a related data model object (DMO) fits because 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-58 

predictions or generative experiences are only useful when the data is representative, governed, and connected to Salesforce execution patterns such as scoring jobs, Flow, or grounded retrieval. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 76</u>** 

A global ecommerce brand tasks a Data 360 Consultant with resolving duplicate customer records originating from a web portal, a mobile app, and a physical point-of-sale system. The goal is to ensure that a customer is recognized as the same individual across all three sources to provide a consistent service experience. Which feature should the consultant configure to achieve this outcome? 

- A. Matching rules within the Identity Resolution settings to link source records 

- B. Data transform logic to normalize naming conventions during the ingestion process 

- C. Partitioning strategies to separate data based on the original source system 

- D. Streaming insights to detect real-time changes in customer contact information 

**Answer: A** 

Explanation: 

The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Matching rules within the Identity Resolution settings to link source records is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-59 

#### **<u>Question: 77</u>** 

A data architect is modeling a relationship between a custom Vehicle data model object (DMO) and the standard Individual DMO to track car ownership. The requirement states that one vehicle can be owned by only one individual, but one individual can own multiple vehicles. Which cardinality should the architect select when creating this relationship from Vehicle to Individual? 

A. One-to-One (1:1) 

- B. Many-to-Many (N:N) 

- C. Many-to-One (N:1) 

- D. One-to-Many (1:N) 

**Answer: C** 

Explanation: 

The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. Many-to-One (N:1) fits because Data 360 depends on mappings and relationships between data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 78</u>** 

What is the minimum requirement needed when using the Visual Insights Builder to create a calculated insight? 

- A. Joining on two or more data model objects 

- B. A SUM function 

- C. At least one measure and one dimension 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-60 

##### D. A WHERE clause 

**Answer: C** 

Explanation: 

The analytics requirement determines whether the logic belongs in an insight, a semantic metric, or a query-time layer. At least one measure and one dimension matches the need because the business is asking for reusable metrics, dimensions, or aggregation behavior that consumers can filter and analyze. Data 360 separates raw harmonized data from analytical definitions so that dashboards, Tableau experiences, and segment logic remain consistent. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 79</u>** 

A Data 360 Consultant wants to use Data 360 Clean Rooms to collaborate with a partner. Which statement is true regarding data security in this environment? 

- A. Both parties must move their data into a shared Amazon S3 bucket first. 

- B. The data stays in its original location, and only the query results are shared. 

- C. The provider must grant Modify All Data permissions to the consumer. 

- D. PII is automatically decrypted for the consumer to ensure matching accuracy. 

**Answer: B** 

Explanation: 

The architecture principle is to avoid unnecessary data movement when the external platform can be queried or shared securely. The data stays in its original location, and only the query results are shared. aligns with the zero-copy model because Data 360 can expose or query governed data without building another extract pipeline. That is important when teams want freshness, reduced 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-61 

duplication, and lower operational burden while still respecting permissions and platform boundaries. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 80</u>** 

What is a reason to create a formula when ingesting a data stream? 

- A. To concatenate files so they are ingested in the correct sequence 

- B. To remove duplicate rows of data from the data stream 

- C. To add a unique external identifier to an existing ruleset 

- D. To transform a datetime field into a date field for use in data mapping 

#### **Answer: D** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, To transform a datetime field into a date field for use in data mapping fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 81</u>** 

A retail company wants a dashboard to display "Top 10 Trending Products" based on product page views over the last 24 hours. The company typically has over 500 million engagements a week. The requirements specify that the maximum latency for data freshness is 15 minutes and the dashboard must load with minimal load times for executive users. Which architectural component should the 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-62 

Data 360 Consultant use to meet these performance and scale requirements? 

- A. Direct Related List 

- B. Calculated Insights 

- C. Real-Time Data Graph 

- D. Streaming Insight 

#### **Answer: D** 

Explanation: 

The analytics requirement determines whether the logic belongs in an insight, a semantic metric, or a query-time layer. Streaming Insight matches the need because the business is asking for reusable metrics, dimensions, or aggregation behavior that consumers can filter and analyze. Data 360 separates raw harmonized data from analytical definitions so that dashboards, Tableau experiences, and segment logic remain consistent. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 82</u>** 

Which statement about Data 360's Web and Mobile Application Connector is true? 

A. Any data streams associated with the connector will be automatically deleted upon deleting the app from Data 360 Setup. 

B. The connector schema can be updated to delete an existing field. 

C. A standard schema containing event, profile, and transaction data is created at the time the connector is configured. 

D. The Tenant Specific Endpoint is auto-generated in Data 360 when setting the connector. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-63 

#### **Answer: D** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, The Tenant Specific Endpoint is auto-generated in Data 360 when setting the connector. fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 83</u>** 

A lead architect needs to build a real-time Customer Health Dashboard in a custom web portal that displays a unified customer's recent purchase history (Engagement data) and their calculated loyalty score. Which API strategy is most appropriate to meet this requirement? 

A. Use the Metadata API to retrieve the schema of the unified profile, then use a standard REST GET call on the Individual object. 

B. Use the Query API to send an SQL/SOQL-based request to join data to retrieve a comprehensive view. 

C. Use the Profile API because it is optimized for high-speed retrieval of unified profile attributes and calculated insights. 

D. Use the Ingestion API to push the dashboard requirements into a data stream to trigger a webhook. 

**Answer: C** 

Explanation: 

The analytics requirement determines whether the logic belongs in an insight, a semantic metric, or a query-time layer. Use the Profile API because it is optimized for high-speed retrieval of unified profile attributes and calculated insights. matches the need because the business is asking for 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-64 

reusable metrics, dimensions, or aggregation behavior that consumers can filter and analyze. Data 360 separates raw harmonized data from analytical definitions so that dashboards, Tableau experiences, and segment logic remain consistent. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 84</u>** 

Cumulus Financial created a segment called High Investment Balance Customers. This is a foundational segment that includes several segmentation criteria the marketing team should consistently use. What should the Data 360 Consultant recommend to ensure this consistency when the team creates future, more refined segments? 

- A. Create new segments using nested segments. 

- B. Package High Investment Balance Customers in a data kit. 

- C. Create new segments by cloning High Investment Balance Customers. 

- D. Create a High Investment Balance calculated insight. 

#### **Answer: A** 

Explanation: 

The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Create new segments using nested segments. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-65 

#### **<u>Question: 85</u>** 

A Data 360 Consultant is planning to use Data Explorer to examine Data 360 data. Which data is the consultant able to examine in Data Explorer? 

- A. Activations, data lake objects, calculated insights 

- B. Data lake objects, data model objects, calculated insights 

- C. Segments, data model objects, calculated insights 

- D. Data source objects, data lake objects, data model objects 

#### **Answer: B** 

Explanation: 

The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Data lake objects, data model objects, calculated insights is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 86</u>** 

A Data 360 Consultant is setting up a data stream with transactional data. Which field type should the consultant choose to ensure that leading zeros in the purchase order number are preserved? 

A. Number 

B. Decimal 

C. Text 

D. Serial 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-66 

#### **Answer: C** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Text fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 87</u>** 

An organization wants to give users the ability to identify and select text attributes from a picklist of options. Which Data 360 feature should help with this use case? 

- A. Data harmonization 

- B. Value suggestion 

- C. Transformation formulas 

- D. Global picklists 

#### **Answer: B** 

Explanation: 

The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Value suggestion is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-67 

the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 88</u>** 

A solution architect needs to create a segment of "High Value Customers". They define this as anyone who qualifies for the existing Platinum Loyalty segment OR anyone who has spent more than US$5,000. What is the most efficient way to build this? 

A. Create two separate segments and join them together in a Tableau dashboard for activation. 

B. Build a calculated insight that joins both conditions and use that as the only filter in a new segment. 

C. Use a nested segment for "Platinum Loyalty" and add a separate container for the minimum spend with an OR operator. 

D. Create a waterfall segment, prioritizing the "Platinum Loyalty" group first and the "High Spender" group second. 

**Answer: C** 

Explanation: 

The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Use a nested segment for "Platinum Loyalty" and add a separate container for the minimum spend with an OR operator. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 89</u>** 

An architect is managing a Full Sandbox that is used for performance testing of Data 360 segments. The team decides to perform a sandbox refresh to bring over the latest Schema changes and record updates from the production environment. What is the impact of this refresh on the existing Data 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-68 

360 configuration within that sandbox? 

A. The sandbox maintains its connection to the existing Data 360 instance, but all data mapping is reverted to Draft status. 

B. Only the identity resolution rules are deleted, while data streams remain active and continue to pull data from the refreshed sandbox objects. 

C. The Data 360 instance is deleted and a new, blank Data 360 instance must be provisioned after the refresh. 

D. All Data 360 metadata is replicated from the current version of production instance, and the ingested records are cleared and must be re-ingested. 

**Answer: D** 

Explanation: 

The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. All Data 360 metadata is replicated from the current version of production instance, and the ingested records are cleared and must be re-ingested. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 90</u>** 

A retail company has customer data scattered across CRM, ecommerce, and support platforms. Marketing and support teams struggle to get a complete picture of the customer because data is inconsistent and siloed. Which Salesforce Data 360 feature should the company implement first to solve this problem? 

A. Unifying fragmented customer and business data into a single, comprehensive view 

B. Delivering personalized offers across channels based on advanced segmentation 

- C. Creating real-time AI-driven recommendations for customer engagement 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-69 

D. Automating proactive service actions using IoT and predictive analytics 

#### **Answer: A** 

Explanation: 

The design point is to preserve source fidelity while shaping data only where Data 360 processing needs it. Here, Unifying fragmented customer and business data into a single, comprehensive view fits because it changes the shape, keying, or refresh behavior at the Data 360 layer instead of forcing the source system to carry an analytics-specific design. In production, this keeps the upstream application simpler and gives the data team a repeatable way to prepare records for mapping, identity resolution, insights, or segmentation. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 91</u>** 

An organization is just getting started with Data 360 and wants to demonstrate quick wins in order to build momentum for broader adoption. Which business outcome should the organization prioritize? 

A. Consolidating all partner and supply chain data into a single master management hub 

B. Implementing a global data lineage system to calculate data quality scores and create audit reports for compliance teams across all business units 

C. Building a predictive platform to update dynamic segments every 30 seconds 

D. Improving customer service resolution times by giving support agents a 360-degree view 

**Answer: D** 

Explanation: 

The core Data 360 principle is harmonization: bring data from multiple systems into a governed model that business teams can use consistently. Improving customer service resolution times by giving support agents a 360-degree view is the strongest answer because Data 360 is designed to unify, harmonize, and activate customer and business data across systems. The platform is not 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-70 

merely a dashboard, archive, or point solution. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 92</u>** 

Data 360 receives a nightly file of all ecommerce transactions from the previous day. Several segments and activations depend upon calculated insights from the updated data in order to maintain accuracy in the customer's scheduled campaign messages. What should the Data 360 Consultant do to ensure the ecommerce data is ready for use for each of the scheduled activations? 

A. Ensure the segments are set to Rapid Publish and set to refresh every hour. 

B. Ensure the activations are set to Incremental Activation and automatically publish every hour. 

C. Use Flow to trigger a change data event on the ecommerce data to refresh calculated insights and segments before the activations are scheduled to run. 

D. Set a refresh schedule for the calculated insights to occur every hour. 

#### **Answer: D** 

Explanation: 

The segmentation and activation design starts with grain: who or what the audience represents, and which attributes must travel with it. Set a refresh schedule for the calculated insights to occur every hour. works because Data 360 segmentation and activation must respect audience grain, relationship paths, and activation payload rules. A segment can qualify the audience, but activation determines which related attributes or contact points are actually sent downstream. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-71 

#### **<u>Question: 93</u>** 

What does the Source Sequence reconciliation rule do in Identity Resolution? 

A. Sets the priority of specific data sources when building attributes in a unified profile, such as a first or last name 

B. Includes data from sources where the data is most frequently occurring 

C. Identifies which data sources should be used in the process of reconciliation by prioritizing the most recently updated data source 

D. Identifies which individual records should be merged into a unified profile by setting a priority for specific data sources 

#### **Answer: A** 

Explanation: 

The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Sets the priority of specific data sources when building attributes in a unified profile, such as a first or last name is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rulesdriven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

#### **<u>Question: 94</u>** 

Cumulus Financial wants its service reps to view all cases associated with a Unified Individual on a contact record. Which feature should a Data 360 Consultant consider for this use case? 

- A. Related List Enrichment 

- B. Segment Activation 

- C. Copy Field Enrichment 

- D. Data Action 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-72 

#### **Answer: A** 

Explanation: 

The identity logic is about linking source profiles safely, then choosing the best surviving values for the unified profile. Related List Enrichment is appropriate because identity resolution needs reliable match inputs, qualified identifiers, and controlled reconciliation. It is not just deduplication; it is a rules-driven process that connects source records into a trusted unified profile. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. This is the nuance exam questions often test: the platform capability must match both the technical layer and the business timing requirement, not just sound related to data. 

#### **<u>Question: 95</u>** 

Northern Trail Outfitters (NTO) is ingesting transaction data into Data 360. The source data includes Order ID, Order Date, and Total Amount, which map to the standard Sales Order data model object (DMO). Additionally, NTO needs to capture a unique Sustainability Packaging Fee for each transaction, which is not available in the standard model. Which modeling approach should a Data 360 Consultant recommend to support this requirement? 

- A. Map standard fields to the Sales Order DMO and add a custom attribute for the fee. 

- B. Map all fields to a new Custom DMO specifically created for NTO transactions. 

- C. Use Sales Order DMO and map the packaging fee to the Order Description field. 

- D. Create a calculated model to derive the sustainability fee using a streaming data transform. 

**Answer: A** 

Explanation: 

The modeling decision should make the data understandable, reusable, and correctly related before segmentation or activation depends on it. Map standard fields to the Sales Order DMO and add a custom attribute for the fee. fits because Data 360 depends on mappings and relationships between 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-73 

data lake objects and data model objects. Correct modeling lets the same attribute mean the same thing across source systems and prevents downstream users from building logic on ambiguous fields. The distractors fall short because they either move the problem into the wrong system, add needless duplication, ignore Data 360 object relationships, or rely on a feature built for a different lifecycle stage. In a real implementation, those choices usually create brittle pipelines, stale data, security exposure, or segments that look correct on paper but fail when activated. Thinking like an architect, the selected option places the logic where Data 360 can govern it and reuse it reliably. 

<u>http://www.justcerts.com</u> 

Questions & Answers PDF 

P-74 

### **<mark>Thank You for Purchasing DATA-CON-101 PDF</mark>** 

# _<u><mark>[Offer]</mark></u>_ <u><mark>Improve Your Exam</mark></u> <mark>Preparation with our Practice Exam Software</mark> 

<mark>Use Coupon “20OFF” for special 20% discount on the purchase of Practice Test Software. Practice Exam Software helps you validate your preparation in a simulated exam environment.</mark> 



#### **<mark>Download Free Pract</mark> i** **<mark>ce Test Demo from our site:</mark>** 

<u>http://www.justcerts.com/salesforce/DATA-CON-101.html</u> 

<u>http://www.justcerts.com</u> 

