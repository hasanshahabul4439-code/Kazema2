export interface Job {
  id: number;
  slug: string;
  title: string;
  location: string;
  department: string;
  type: string;
  description: string;
  fullRole?: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: Array<{ title: string; desc: string; icon: string }>;
}

export const DEPARTMENTS = ["All Departments", "Sales", "Engineering", "Operations", "Factory", "Admin"];
export const LOCATIONS = ["All Locations", "Dubai", "Abu Dhabi", "Sharjah", "UAE Wide"];

export const MOCK_JOBS: Job[] = [
  {
    id: 1,
    slug: "sales-executive",
    title: "Sales Executive – Dubai",
    location: "Dubai",
    department: "Sales",
    type: "Full-time",
    description: "Driving business growth through strategic modular solution sales to major construction and event firms across the UAE.",
    fullRole: "At Kazema Global, we are redefining the landscape of modular and sanitation solutions across the Middle East. We are seeking a high-energy Sales Executive to join our expanding Dubai team. You will be at the forefront of our growth strategy, identifying new market opportunities, promoting our industry-leading sanitation technologies, and building lasting relationships with Tier-1 construction firms and industrial partners.",
    responsibilities: [
      "Generate and qualify leads through proactive market research and networking.",
      "Conduct technical site visits to assess client requirements and propose tailored sanitation solutions.",
      "Prepare and present professional quotations, negotiating contracts to closure.",
      "Collaborate with the operations team to ensure seamless project delivery and client satisfaction."
    ],
    requirements: [
      "Minimum 2+ years of proven experience in construction or industrial equipment sales.",
      "Valid UAE Driving License (Mandatory).",
      "Exceptional communication skills in English; Arabic is a significant advantage.",
      "Self-motivated individual with a focus on hitting and exceeding revenue targets."
    ],
    benefits: [
      { title: "Competitive Salary", desc: "Industry-leading base pay structure with on-time disbursements.", icon: "payments" },
      { title: "High Commission", desc: "Rewarding performance-based incentives with no earning caps.", icon: "trending_up" },
      { title: "Growth & Mobility", desc: "Clear pathways to management for high-achieving sales leaders.", icon: "workspace_premium" },
      { title: "Since 2012", desc: "Stability of a market leader with over a decade of UAE heritage.", icon: "verified" }
    ]
  },
  {
    id: 2,
    slug: "project-engineer",
    title: "Project Engineer - Abu Dhabi",
    location: "Abu Dhabi",
    department: "Operations",
    type: "Full-time",
    description: "Managing end-to-end technical execution of modular installation projects for large-scale infrastructure developments.",
    fullRole: "We are looking for a detailed-oriented Project Engineer to oversee our complex modular installations in Abu Dhabi. This role involves technical coordination, site management, and ensuring that our high-specification units are deployed according to stringent safety and quality standards.",
    responsibilities: [
      "Coordinate with design and manufacturing teams to ensure technical specifications are met.",
      "Supervise on-site installation processes and manage site-level client communications.",
      "Ensure all projects comply with local regulations and Kazema’s global quality standards.",
      "Manage project timelines and resource allocation efficiently."
    ],
    requirements: [
      "Degree in Mechanical, Civil, or Industrial Engineering.",
      "3+ years of experience in project management or site engineering in the UAE.",
      "Strong understanding of modular construction or industrial HVAC/Plumbing systems.",
      "Proficiency in AutoCAD and project management software."
    ]
  },
  {
    id: 3,
    slug: "mechanical-technician",
    title: "Mechanical Technician - Sharjah",
    location: "Sharjah",
    department: "Factory",
    type: "Full-time",
    description: "Overseeing the assembly and maintenance of high-specification portable sanitation and modular units.",
    fullRole: "Join our core manufacturing team in Sharjah as a Mechanical Technician. You will be responsible for the high-precision assembly of our modular units and complex sanitation systems, ensuring that every piece of equipment leaving our factory meets the 'Kazema Standard'.",
    responsibilities: [
      "Perform mechanical assembly of modular frames and internal systems.",
      "Conduct routine maintenance and troubleshooting on hydraulic and pneumatic components.",
      "Execute quality control tests on finished sanitation units.",
      "Adhere to strict workshop safety and efficiency protocols."
    ],
    requirements: [
      "Technical diploma in Mechanical or Electromechanical engineering.",
      "Experience in industrial assembly or maintenance environments.",
      "Ability to read blueprints and technical manuals accurately.",
      "Strong problem-solving skills and attention to detail."
    ]
  },
  {
    id: 4,
    slug: "hse-coordinator",
    title: "HSE Coordinator",
    location: "UAE Wide",
    department: "Operations",
    type: "Full-time",
    description: "Ensuring uncompromising safety standards across our manufacturing facilities and project sites.",
    fullRole: "Safety is our number one priority. As an HSE Coordinator, you will lead our safety initiatives across all UAE operations, from the factory floor to high-profile project sites, maintaining our status as one of the safest modular manufacturers in the region.",
    responsibilities: [
      "Develop and implement comprehensive health and safety regulations.",
      "Conduct regular safety audits and risk assessments across all facilities.",
      "Provide ongoing safety training to the manufacturing and installation teams.",
      "Investigate and report on any safety incidents with proactive remediation plans."
    ],
    requirements: [
      "NEBOSH certification or equivalent HSE qualification.",
      "Proven experience as an HSE officer/coordinator in a manufacturing or construction environment.",
      "Deep knowledge of UAE health and safety laws and regulations.",
      "Excellent communication and leadership skills."
    ]
  }
];
