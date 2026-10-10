// Generated from lessgo.docx by parse_doc.py. Do not edit by hand.
import type { DnaPart, DnaScenario, Reference } from '@/lib/dna-types';
export const DNA_PARTS: DnaPart[] = [
 {
  "n": 1,
  "title": "The Arrival",
  "subtitle": "Orientation and Baseline Cognitive Processing",
  "intro": "The system presents an immersive narrative frame. The user is placed into a richly described situation and must make decisions."
 },
 {
  "n": 2,
  "title": "The Workspace",
  "subtitle": "Logical, Analytical, and Creative Intelligence",
  "intro": ""
 },
 {
  "n": 3,
  "title": "The Team",
  "subtitle": "Social and Emotional Intelligence",
  "intro": ""
 },
 {
  "n": 4,
  "title": "The Learning Challenge",
  "subtitle": "Assessing Learning Ability and Adaptability",
  "intro": "This section directly measures learning ability—the capacity to acquire new skills and improve over time. The TTT-GP-CGS system demonstrated that \"when the student plays the game with the system every day, if the student's score increases day by day, it reflects that the student has good learning ability\" Lubinski (2004)."
 },
 {
  "n": 5,
  "title": "The Creative Frontier",
  "subtitle": "Musical, Bodily-Kinesthetic, and Existential Intelligence",
  "intro": ""
 },
 {
  "n": 6,
  "title": "The Reflection",
  "subtitle": "Intrapersonal and Metacognitive Intelligence",
  "intro": ""
 },
 {
  "n": 7,
  "title": "The Pattern",
  "subtitle": "Fluid Intelligence and Abstract Reasoning",
  "intro": "This section assesses general cognitive ability (IQ proxy) through scenario-embedded reasoning tasks rather than traditional test items."
 }
];
export const DNA_SCENARIOS: DnaScenario[] = [
 {
  "id": "1.1",
  "part": 1,
  "title": "The Unfamiliar City",
  "narrative": [
   "You have just arrived in a city you have never visited before. You need to reach a meeting point across town within 90 minutes. You have a paper map, a written set of directions from a local, and you can see a tall landmark tower in the distance. Your phone has died."
  ],
  "prompt": "What do you do first?",
  "options": [
   {
    "id": "A",
    "text": "Study the paper map, mentally rotating it to align with your current orientation, and plot a route using the landmark tower as a reference point."
   },
   {
    "id": "B",
    "text": "Read through the written directions carefully, memorizing the sequence of street names and turns described."
   },
   {
    "id": "C",
    "text": "Approach a group of people nearby and ask them to walk you through the best route, reading their body language to judge how confident they are in their directions."
   },
   {
    "id": "D",
    "text": "Start walking toward the landmark tower, reasoning that if you maintain a consistent direction and track the logical grid pattern of streets, you will converge on the destination."
   },
   {
    "id": "E",
    "text": "Look around for environmental patterns—notice which direction foot traffic flows, where commercial activity clusters, and infer the city center's location from these cues."
   }
  ],
  "scores": {
   "A": {
    "spatial": 5,
    "verbal": 0,
    "inter": 0,
    "logical": 2,
    "naturalistic": 1
   },
   "B": {
    "spatial": 1,
    "verbal": 5,
    "inter": 0,
    "logical": 1,
    "naturalistic": 0
   },
   "C": {
    "spatial": 0,
    "verbal": 2,
    "inter": 5,
    "logical": 0,
    "naturalistic": 1
   },
   "D": {
    "spatial": 2,
    "verbal": 0,
    "inter": 0,
    "logical": 5,
    "naturalistic": 0
   },
   "E": {
    "spatial": 2,
    "verbal": 0,
    "inter": 1,
    "logical": 3,
    "naturalistic": 5
   }
  },
  "rationale": "Research confirms that spatial ability is separable from general ability factors (Skarzyński & Noworol, 2022), and that field independence contributes independently to problem-solving. The map-rotation option (A) directly taps mental rotation and spatial visualization—capacities measured by instruments like the Purdue Spatial Visualization Test (Gimena et al., 2015). Option C assesses interpersonal intelligence, which Gardner defines as the ability to understand and interact effectively with others Zainudin et al. (2024). The branching logic proceeds based on the user's dominant response pattern.",
  "parent": null,
  "option": null,
  "refs": [
   10,
   23,
   32
  ]
 },
 {
  "id": "1.1A",
  "part": 1,
  "title": "Spatial Dominant Path",
  "narrative": [
   "You orient the map successfully and begin walking. After 15 minutes, you reach a complex intersection where five streets converge at odd angles. The map shows this intersection but the scale makes it difficult to determine which street is which. Three of the streets look nearly identical from where you stand."
  ],
  "prompt": "How do you determine which street to take?",
  "options": [
   {
    "id": "A1",
    "text": "Mentally reconstruct a three-dimensional model of the intersection from the two-dimensional map, comparing angles between streets on the map to what you see."
   },
   {
    "id": "A2",
    "text": "Walk a short distance down each candidate street, checking whether the buildings and features match what the map predicts should appear next."
   },
   {
    "id": "A3",
    "text": "Count the streets clockwise from the direction you arrived and match that to the map's orientation."
   }
  ],
  "scores": {
   "A1": {
    "spatial": 5,
    "logical": 2,
    "bodily": 0
   },
   "A2": {
    "spatial": 3,
    "logical": 1,
    "bodily": 4
   },
   "A3": {
    "spatial": 2,
    "logical": 5,
    "bodily": 0
   }
  },
  "rationale": "This branch deepens spatial assessment. Research using the Object-Spatial Imagery and Verbal Questionnaire (OSIVQ) distinguishes between object imagery (pictorial appearances) and spatial imagery (spatial relations and transformations) (Almufareh & Almaleh, 2026; . Response A1 taps spatial visualization specifically—\"schematic images, spatial relations amongst objects and spatial transformations\" (Almufareh & Almaleh, 2026; —while A2 introduces bodily-kinesthetic exploration.",
  "parent": "1.1",
  "option": "A",
  "refs": [
   2
  ]
 },
 {
  "id": "1.1C",
  "part": 1,
  "title": "Social Intelligence Dominant Path",
  "narrative": [
   "The group you approached includes three people. One gives you confident, detailed directions while making steady eye contact. Another interrupts with a contradictory route, speaking quickly and gesturing vaguely. The third person stays quiet but subtly shakes their head when the second person speaks."
  ],
  "prompt": "What do you do?",
  "options": [
   {
    "id": "C1",
    "text": "Follow the first person's directions because their confident demeanor and eye contact suggest familiarity with the area."
   },
   {
    "id": "C2",
    "text": "Ask the quiet third person directly what they think, since their subtle head-shake suggests they have knowledge but are socially deferring to the louder speaker."
   },
   {
    "id": "C3",
    "text": "Ask all three to reach a consensus before you proceed, facilitating a brief discussion."
   },
   {
    "id": "C4",
    "text": "Ignore the social dynamics entirely and ask each person to point in the direction of a well-known landmark to triangulate the correct route."
   }
  ],
  "scores": {
   "C1": {
    "inter": 3,
    "intra": 2,
    "logical": 1,
    "spatial": 0
   },
   "C2": {
    "inter": 5,
    "intra": 4,
    "logical": 1,
    "spatial": 0
   },
   "C3": {
    "inter": 4,
    "intra": 2,
    "logical": 0,
    "spatial": 0
   },
   "C4": {
    "inter": 1,
    "intra": 1,
    "logical": 4,
    "spatial": 3
   }
  },
  "rationale": "Interpersonal intelligence encompasses understanding others' motivations and feelings, while intrapersonal intelligence involves understanding one's own Zainudin et al. (2024). Response C2 demonstrates advanced social perception—reading non-verbal micro-cues and understanding social hierarchies within groups. Research on prosocial traits shows that object-oriented imagery is associated with empathy and the ability to be transported into others' perspectives (Song et al., 2026). This scenario assesses whether the user reads implicit social information (C2), relies on explicit social signals (C1), or defaults to non-social problem-solving (C4).",
  "parent": "1.1",
  "option": "C",
  "refs": [
   24,
   32
  ]
 },
 {
  "id": "2.1",
  "part": 2,
  "title": "The Data Puzzle",
  "narrative": [
   "You are given a temporary job at the meeting point. Your task: a company has sales data from six regions over twelve months. The data is presented in three formats simultaneously—a spreadsheet of numbers, a set of colored bar charts, and a written narrative summary. You have 20 minutes to identify which region is underperforming and why."
  ],
  "prompt": "How do you approach this?",
  "options": [
   {
    "id": "A",
    "text": "Go straight to the spreadsheet, calculate percentage changes month-over-month, and look for statistical anomalies."
   },
   {
    "id": "B",
    "text": "Scan the bar charts first, looking for visual patterns—dips, trends, color-coded outliers—before checking numbers."
   },
   {
    "id": "C",
    "text": "Read the narrative summary first to understand the context, then verify claims against the data."
   },
   {
    "id": "D",
    "text": "Compare all three formats simultaneously, cross-referencing to find inconsistencies between them."
   },
   {
    "id": "E",
    "text": "Ask a colleague who has worked with this data before what they think, then verify their intuition against the evidence."
   }
  ],
  "scores": {
   "A": {
    "logical": 5,
    "spatial": 0,
    "verbal": 1,
    "fluid": 5,
    "inter": 0
   },
   "B": {
    "logical": 2,
    "spatial": 5,
    "verbal": 0,
    "fluid": 3,
    "inter": 0
   },
   "C": {
    "logical": 1,
    "spatial": 0,
    "verbal": 5,
    "fluid": 2,
    "inter": 0
   },
   "D": {
    "logical": 4,
    "spatial": 3,
    "verbal": 3,
    "fluid": 5,
    "inter": 0
   },
   "E": {
    "logical": 1,
    "spatial": 0,
    "verbal": 2,
    "fluid": 1,
    "inter": 5
   }
  },
  "rationale": "Intelligence reflects \"a broad capability for comprehending our surroundings, solving problems, planning, or learning from experience\" (Shen et al., 2026). The Differential Aptitude Test measures multiple subtests defining a cognitive profile, based on the premise that human intelligence comprises many different levels of proficiency (Srianturi & Supriatna, 2020). Response D, which integrates multiple information modalities, reflects the highest general cognitive ability as it requires simultaneous processing across representational systems. Research on cognitive styles confirms that visualizers favor pictorial and spatial representations while verbalizers prefer linguistic formats (Akos et al., 2004), making format preference a reliable indicator of cognitive style.",
  "parent": null,
  "option": null,
  "refs": [
   1,
   22,
   25
  ]
 },
 {
  "id": "2.1A",
  "part": 2,
  "title": "Logical-Mathematical Deep Dive",
  "narrative": [
   "You discover that Region 4 shows a 23% decline in Q3. The spreadsheet reveals that three product categories dropped simultaneously. However, Region 4's customer count actually increased by 8% during the same period."
  ],
  "prompt": "What is your immediate hypothesis?",
  "options": [
   {
    "id": "A1",
    "text": "The average transaction value decreased—more customers buying less per visit—suggesting a pricing or product mix problem."
   },
   {
    "id": "A2",
    "text": "There may be a data entry error, since increasing customers and decreasing sales is unusual enough to warrant verification."
   },
   {
    "id": "A3",
    "text": "A competitor entered the market in Q3, capturing the higher-value customers while Region 4 retained only lower-spending ones."
   },
   {
    "id": "A4",
    "text": "Seasonal factors specific to Region 4's geography may explain the pattern—you look for whether this happened in previous years."
   }
  ],
  "scores": {
   "A1": {
    "logical": 5,
    "fluid": 5,
    "creative": 2,
    "naturalistic": 0
   },
   "A2": {
    "logical": 4,
    "fluid": 4,
    "creative": 1,
    "naturalistic": 0
   },
   "A3": {
    "logical": 3,
    "fluid": 3,
    "creative": 5,
    "naturalistic": 0
   },
   "A4": {
    "logical": 4,
    "fluid": 4,
    "creative": 2,
    "naturalistic": 4
   }
  },
  "rationale": "Fluid intelligence—the ability to perceive relationships independent of prior learning—is assessed through novel problem-solving Coertse & Schepers, 2004). Response A1 demonstrates deductive reasoning from available data. Response A3 introduces creative hypothesis generation, reflecting practical and creative intelligence necessary for career success Zainudin et al. (2024). Response A4 demonstrates pattern recognition across temporal contexts, tapping naturalistic intelligence (recognizing patterns in complex systems).",
  "parent": "2.1",
  "option": "A",
  "refs": [
   5,
   32
  ]
 },
 {
  "id": "2.2",
  "part": 2,
  "title": "The Design Challenge",
  "narrative": [
   "Your next task requires you to redesign the layout of a small retail space. You are given the room dimensions (8m × 12m), the inventory of display units (varying sizes), and the constraint that customers must be able to reach any product within 30 seconds of entering. You also know that 60% of customers are right-handed and tend to turn right upon entering."
  ],
  "prompt": "How do you begin?",
  "options": [
   {
    "id": "A",
    "text": "Sketch a bird's-eye floor plan to scale, placing units and mentally simulating customer flow paths."
   },
   {
    "id": "B",
    "text": "Build a mathematical model: calculate the maximum distance from the entrance to any point, then optimize unit placement to minimize average path length."
   },
   {
    "id": "C",
    "text": "Think about how you personally feel when entering retail spaces—what makes you comfortable, what frustrates you—and design from that emotional intuition."
   },
   {
    "id": "D",
    "text": "Research how successful retail spaces are designed, looking for established principles and best practices to apply."
   },
   {
    "id": "E",
    "text": "Imagine yourself as different types of customers—elderly, hurried, browsing—and mentally walk through the space from each perspective."
   }
  ],
  "scores": {
   "A": {
    "spatial": 5,
    "logical": 2,
    "intra": 0,
    "verbal": 0,
    "inter": 0,
    "bodily": 2
   },
   "B": {
    "spatial": 2,
    "logical": 5,
    "intra": 0,
    "verbal": 0,
    "inter": 0,
    "bodily": 0
   },
   "C": {
    "spatial": 1,
    "logical": 0,
    "intra": 5,
    "verbal": 0,
    "inter": 1,
    "bodily": 2
   },
   "D": {
    "spatial": 0,
    "logical": 1,
    "intra": 0,
    "verbal": 5,
    "inter": 0,
    "bodily": 0
   },
   "E": {
    "spatial": 3,
    "logical": 0,
    "intra": 2,
    "verbal": 0,
    "inter": 5,
    "bodily": 3
   }
  },
  "rationale": "Spatial visualization—\"the ability to perceive relationships independent of prior learning\" in spatial contexts Coertse & Schepers, 2004)—is directly assessed by option A. Research demonstrates that spatial imagery tendencies are stronger among students in sciences and engineering, with Physics Engineering students scoring highest (M=3.81) on spatial imagery scales (Steppan et al., 2026). Option E taps perspective-taking, a core component of interpersonal intelligence associated with empathy (Song et al., 2026).",
  "parent": null,
  "option": null,
  "refs": [
   5,
   24,
   26
  ]
 },
 {
  "id": "3.1",
  "part": 3,
  "title": "The Conflict",
  "narrative": [
   "You are placed on a team of five to complete a project. During the first meeting, two team members immediately clash. Person X presents a detailed, data-driven plan and dismisses alternatives. Person Y advocates for a creative, unconventional approach and becomes visibly frustrated when X ignores their ideas. The other two members stay silent, looking uncomfortable. The deadline is in three days."
  ],
  "prompt": "What do you do?",
  "options": [
   {
    "id": "A",
    "text": "Analyze both proposals objectively, identify the strengths of each, and present a merged plan that incorporates the best elements."
   },
   {
    "id": "B",
    "text": "Address the emotional tension directly: acknowledge that both X and Y feel strongly, validate their perspectives, and facilitate a structured discussion where each person speaks uninterrupted."
   },
   {
    "id": "C",
    "text": "Take charge and assign specific tasks to each person based on what you perceive their strengths to be, bypassing the conflict entirely."
   },
   {
    "id": "D",
    "text": "Privately approach the two silent members to understand their views, then use that information to build a coalition for the best approach."
   },
   {
    "id": "E",
    "text": "Step back and observe the dynamics for a while longer before intervening, trying to understand the underlying motivations driving each person's behavior."
   }
  ],
  "scores": {
   "A": {
    "inter": 3,
    "intra": 2,
    "logical": 5
   },
   "B": {
    "inter": 5,
    "intra": 5,
    "logical": 0
   },
   "C": {
    "inter": 5,
    "intra": 2,
    "logical": 2
   },
   "D": {
    "inter": 4,
    "intra": 4,
    "logical": 1
   },
   "E": {
    "inter": 3,
    "intra": 5,
    "logical": 0
   }
  },
  "rationale": "Holland's RIASEC model identifies the Social and Enterprising dimensions as critical career-relevant constructs (Mrabet & Moussa, 2021). Personality and interest are determinants of career achievement within congruent environments (Mrabet & Moussa, 2021). Career maturity research shows that personality constructs—not cognitive constructs alone—differentiate career-mature from career-immature individuals (Tuccio et al., 2023), making social-emotional assessment essential. Response B demonstrates the highest interpersonal intelligence through explicit emotional validation and structured facilitation. Response E reflects intrapersonal intelligence—understanding one's own reactions and exercising metacognitive restraint.",
  "parent": null,
  "option": null,
  "refs": [
   16,
   29
  ]
 },
 {
  "id": "3.1B",
  "part": 3,
  "title": "High Social Intelligence Path",
  "narrative": [
   "You successfully facilitate the discussion. Person X softens and shares that they are anxious about the deadline because a previous project failure cost them a promotion. Person Y reveals they feel chronically undervalued in team settings. The two silent members now engage—one has a technical background and the other has client-facing experience."
  ],
  "prompt": "How do you structure the remaining work?",
  "options": [
   {
    "id": "B1",
    "text": "Assign X to quality control and timeline management (leveraging their anxiety as vigilance), Y to ideation and creative direction (channeling their need for recognition), the technical member to implementation, and the client-facing member to presentation."
   },
   {
    "id": "B2",
    "text": "Create pairs: X with the client-facing member (to balance X's rigidity with interpersonal skill) and Y with the technical member (to ground Y's creativity in feasibility). You coordinate."
   },
   {
    "id": "B3",
    "text": "Let the team self-organize now that tensions are resolved, offering to help wherever needed."
   },
   {
    "id": "B4",
    "text": "Propose that everyone works on every component together, rotating roles to build mutual understanding."
   }
  ],
  "scores": {
   "B1": {
    "inter": 5,
    "intra": 4,
    "logical": 4
   },
   "B2": {
    "inter": 4,
    "intra": 3,
    "logical": 3
   },
   "B3": {
    "inter": 2,
    "intra": 3,
    "logical": 0
   },
   "B4": {
    "inter": 3,
    "intra": 2,
    "logical": 1
   }
  },
  "rationale": "This branch assesses advanced social intelligence—the ability to translate interpersonal understanding into strategic action. Response B1 demonstrates the highest integration of psychological insight with organizational logic, converting emotional vulnerabilities into functional strengths. This aligns with the MDPA algorithm's approach of matching personality profiles to optimal roles through \"non-linear threshold penalties for critical traits\" Banai & Perin (2016).",
  "parent": "3.1",
  "option": "B",
  "refs": [
   3
  ]
 },
 {
  "id": "3.2",
  "part": 3,
  "title": "The Ethical Dilemma",
  "narrative": [
   "During the project, you discover that the data your team is using contains a significant error that, if corrected, would make your team's conclusions less impressive. The client will likely never notice the error. Correcting it means missing the deadline. Your team members are divided—two want to ignore it, one wants to correct it, and one defers to you."
  ],
  "prompt": "What do you do?",
  "options": [
   {
    "id": "A",
    "text": "Correct the error immediately, inform the client about the delay, and explain why accuracy matters more than speed."
   },
   {
    "id": "B",
    "text": "Quantify the impact of the error—if it changes the conclusion by less than 5%, proceed; if more, correct it."
   },
   {
    "id": "C",
    "text": "Present both the corrected and uncorrected findings to the client, letting them decide which version to use."
   },
   {
    "id": "D",
    "text": "Correct the error but find a way to compress other work to still meet the deadline, even if it means working through the night."
   },
   {
    "id": "E",
    "text": "Consult with the team member who wants to correct it to understand their reasoning, then make a collective decision."
   }
  ],
  "scores": {
   "A": {
    "intra": 5,
    "logical": 2,
    "inter": 2,
    "adapt": 5,
    "creative": 1
   },
   "B": {
    "intra": 3,
    "logical": 5,
    "inter": 0,
    "adapt": 3,
    "creative": 2
   },
   "C": {
    "intra": 4,
    "logical": 3,
    "inter": 3,
    "adapt": 3,
    "creative": 3
   },
   "D": {
    "intra": 4,
    "logical": 2,
    "inter": 1,
    "adapt": 5,
    "creative": 5
   },
   "E": {
    "intra": 3,
    "logical": 1,
    "inter": 5,
    "adapt": 3,
    "creative": 1
   }
  },
  "rationale": "",
  "parent": null,
  "option": null,
  "refs": []
 },
 {
  "id": "4.1",
  "part": 4,
  "title": "The Unfamiliar System",
  "narrative": [
   "You are given access to a software tool you have never used before. It has no tutorial. The interface has icons, menus, and a command line. You need to produce a specific output (a formatted report) within 45 minutes."
  ],
  "prompt": "How do you begin?",
  "options": [
   {
    "id": "A",
    "text": "Systematically click through every menu and icon, building a mental map of the software's structure before attempting the task."
   },
   {
    "id": "B",
    "text": "Look for a \"Help\" or documentation section and read it thoroughly before touching anything."
   },
   {
    "id": "C",
    "text": "Try to produce the report immediately through trial and error, learning from each mistake."
   },
   {
    "id": "D",
    "text": "Look for patterns between this software and others you have used, applying familiar conventions (e.g., Ctrl+S to save, File menu for export)."
   },
   {
    "id": "E",
    "text": "Search for the command line syntax by typing \"help\" or \"?\" and work from text-based instructions."
   }
  ],
  "scores": {
   "A": {
    "spatial": 5,
    "verbal": 0,
    "bodily": 1,
    "logical": 3,
    "learning": 3
   },
   "B": {
    "spatial": 0,
    "verbal": 5,
    "bodily": 0,
    "logical": 1,
    "learning": 2
   },
   "C": {
    "spatial": 1,
    "verbal": 0,
    "bodily": 5,
    "logical": 1,
    "learning": 5
   },
   "D": {
    "spatial": 2,
    "verbal": 0,
    "bodily": 2,
    "logical": 5,
    "learning": 4
   },
   "E": {
    "spatial": 0,
    "verbal": 4,
    "bodily": 1,
    "logical": 2,
    "learning": 3
   }
  },
  "rationale": "Learning ability assessment requires observing how individuals approach novel problems. Crystallized intelligence draws on \"knowledge from prior learning and experience\" (option D), while fluid intelligence involves \"the ability to perceive relationships independent of prior learning\" (option C) Coertse & Schepers, 2004). The Learning Speed score reflects career adaptability—\"combining planning, control, exploration, and confidence\" Sarsenbay et al. (2026)—which bridges AI acceptance and employability.",
  "parent": null,
  "option": null,
  "refs": [
   5,
   19
  ]
 },
 {
  "id": "4.2",
  "part": 4,
  "title": "The Feedback Loop",
  "narrative": [
   "You tried several approaches. Your first attempt produced a garbled output. Your second attempt produced a partially correct report but with wrong formatting. On your third attempt, you noticed that the formatting toolbar only appears after selecting text."
  ],
  "prompt": "What did you learn from this sequence?",
  "options": [
   {
    "id": "C-i",
    "text": "The software uses context-sensitive menus—tools appear only when relevant objects are selected. You now predict that chart-editing tools will appear only when a chart is selected."
   },
   {
    "id": "C-ii",
    "text": "You need to slow down and read the interface more carefully before clicking."
   },
   {
    "id": "C-iii",
    "text": "The software is poorly designed and you would prefer a different tool."
   }
  ],
  "scores": {
   "C-i": {
    "learning": 5,
    "intra": 3,
    "logical": 5
   },
   "C-ii": {
    "learning": 3,
    "intra": 5,
    "logical": 2
   },
   "C-iii": {
    "learning": 1,
    "intra": 1,
    "logical": 1
   }
  },
  "rationale": "Response C-i demonstrates the highest learning ability—extracting a generalizable principle from specific experiences and predicting its application in a novel context. This mirrors the TTT-GP-CGS methodology where \"if the student's score increases day by day, it reflects that the student has good learning ability\" Lubinski (2004). The system tracks not just what the user chose but whether they can articulate transferable learning.",
  "parent": "4.1",
  "option": "C",
  "refs": [
   14
  ]
 },
 {
  "id": "5.1",
  "part": 5,
  "title": "The Composition",
  "narrative": [
   "You are asked to create a short presentation that will move an audience emotionally. The topic is \"the passage of time.\" You have access to images, music, text, physical props, and video. You have 30 minutes to prepare a 3-minute presentation."
  ],
  "prompt": "What is the centerpiece of your presentation?",
  "options": [
   {
    "id": "A",
    "text": "A carefully sequenced series of photographs showing the same location across decades, with no narration—letting the visual progression speak for itself."
   },
   {
    "id": "B",
    "text": "A piece of music that shifts tempo and key, paired with a single slowly changing image."
   },
   {
    "id": "C",
    "text": "A spoken narrative—a personal story about a moment when you became aware of time passing—delivered with deliberate pacing and pauses."
   },
   {
    "id": "D",
    "text": "A physical demonstration: you bring a candle, light it at the start, and let it burn down during your presentation while you speak minimally."
   },
   {
    "id": "E",
    "text": "A philosophical question posed to the audience: \"If you could relive one hour of your life, which would it be and why?\"—then silence, letting them reflect."
   }
  ],
  "scores": {
   "A": {
    "spatial": 5,
    "musical": 0,
    "verbal": 0,
    "bodily": 0,
    "existential": 3,
    "inter": 1
   },
   "B": {
    "spatial": 2,
    "musical": 5,
    "verbal": 0,
    "bodily": 0,
    "existential": 3,
    "inter": 1
   },
   "C": {
    "spatial": 0,
    "musical": 0,
    "verbal": 5,
    "bodily": 0,
    "existential": 3,
    "inter": 3
   },
   "D": {
    "spatial": 1,
    "musical": 0,
    "verbal": 1,
    "bodily": 5,
    "existential": 4,
    "inter": 2
   },
   "E": {
    "spatial": 0,
    "musical": 0,
    "verbal": 2,
    "bodily": 0,
    "existential": 5,
    "inter": 5
   }
  },
  "rationale": "Gardner's multiple intelligences framework includes musical, bodily-kinesthetic, and existential dimensions Banai & Perin (2016). Research on cognitive styles confirms that visual cognitive style was more important than verbal cognitive style for assessing creative products among art and design students (Jammalamadaka, 2019). This scenario simultaneously assesses creative intelligence and dominant modality preference.",
  "parent": null,
  "option": null,
  "refs": [
   3,
   12
  ]
 },
 {
  "id": "5.2",
  "part": 5,
  "title": "The Physical Challenge",
  "narrative": [
   "You need to learn a new physical skill: assembling a complex piece of flat-pack furniture with 47 parts and an instruction booklet with diagrams but no text. The diagrams are small and somewhat ambiguous."
  ],
  "prompt": "How do you approach this?",
  "options": [
   {
    "id": "A",
    "text": "Lay out all 47 parts, sort them by type and size, and match each to its diagram before beginning assembly."
   },
   {
    "id": "B",
    "text": "Start assembling immediately, using the diagrams as rough guides and relying on how the pieces physically feel and fit together."
   },
   {
    "id": "C",
    "text": "Study the final product image and work backward, reasoning about which structural elements must be assembled first."
   },
   {
    "id": "D",
    "text": "Search online for a video tutorial of someone assembling the same item."
   },
   {
    "id": "E",
    "text": "Call a friend who is good at this sort of thing and assemble it together."
   }
  ],
  "scores": {
   "A": {
    "spatial": 5,
    "bodily": 1,
    "logical": 4,
    "verbal": 0,
    "inter": 0
   },
   "B": {
    "spatial": 2,
    "bodily": 5,
    "logical": 1,
    "verbal": 0,
    "inter": 0
   },
   "C": {
    "spatial": 4,
    "bodily": 1,
    "logical": 5,
    "verbal": 0,
    "inter": 0
   },
   "D": {
    "spatial": 1,
    "bodily": 0,
    "logical": 0,
    "verbal": 4,
    "inter": 0
   },
   "E": {
    "spatial": 0,
    "bodily": 1,
    "logical": 0,
    "verbal": 0,
    "inter": 5
   }
  },
  "rationale": "",
  "parent": null,
  "option": null,
  "refs": []
 },
 {
  "id": "6.1",
  "part": 6,
  "title": "The Career Crossroads",
  "narrative": [
   "You receive two job offers simultaneously. Job A pays 40% more, is in a field you find intellectually stimulating, but requires relocating to a city where you know no one. Job B pays less, is in a field you find moderately interesting, but is near family and friends and offers strong mentorship."
  ],
  "prompt": "What is the FIRST thing you think about?",
  "options": [
   {
    "id": "A",
    "text": "You create a spreadsheet comparing salary, cost of living, career growth projections, and long-term financial outcomes."
   },
   {
    "id": "B",
    "text": "You imagine yourself in each scenario six months from now—what does your daily life look and feel like?"
   },
   {
    "id": "C",
    "text": "You call three people you trust and ask for their perspectives before forming your own opinion."
   },
   {
    "id": "D",
    "text": "You reflect on what has made you happiest in past jobs and whether either offer aligns with those patterns."
   },
   {
    "id": "E",
    "text": "You research both companies' trajectories, industry trends, and which field is more likely to grow over the next decade."
   }
  ],
  "scores": {
   "A": {
    "logical": 5,
    "spatial": 0,
    "inter": 0,
    "intra": 1,
    "fluid": 5
   },
   "B": {
    "logical": 0,
    "spatial": 4,
    "inter": 0,
    "intra": 5,
    "fluid": 2
   },
   "C": {
    "logical": 0,
    "spatial": 0,
    "inter": 5,
    "intra": 2,
    "fluid": 1
   },
   "D": {
    "logical": 0,
    "spatial": 0,
    "inter": 0,
    "intra": 5,
    "fluid": 2
   },
   "E": {
    "logical": 4,
    "spatial": 0,
    "inter": 0,
    "intra": 1,
    "fluid": 5
   }
  },
  "rationale": "Career decision-making requires both cognitive and affective maturity (Orzan, 2026). Social Cognitive Career Theory emphasizes that self-efficacy, outcome expectations, and personal interests jointly shape career decisions (Tountopoulou et al., 2021). Response D demonstrates the highest intrapersonal intelligence—the capacity for self-knowledge that career readiness research identifies as a critical developmental need, with 8th-grade students showing \"developmentally appropriate elevated needs for information, specifically self-knowledge\" (Memari & Ruggles, 2025). Computational psychometrics advocates for navigation components including \"self-knowledge of abilities and interests, knowledge about academic major and occupations, and skills related to planning and decision-making\" (Davis, 2021).",
  "parent": null,
  "option": null,
  "refs": [
   8,
   15,
   17,
   28
  ]
 },
 {
  "id": "6.2",
  "part": 6,
  "title": "The Failure",
  "narrative": [
   "You invested significant effort into a project that ultimately failed. Your approach was sound, your execution was diligent, but external factors beyond your control caused the failure. A colleague who invested less effort succeeded due to favorable circumstances."
  ],
  "prompt": "What is your dominant internal response?",
  "options": [
   {
    "id": "A",
    "text": "You analyze exactly what external factors caused the failure and whether you could have anticipated them—extracting lessons for next time."
   },
   {
    "id": "B",
    "text": "You feel frustrated but recognize that the frustration is about fairness, not competence—you separate your self-worth from the outcome."
   },
   {
    "id": "C",
    "text": "You talk to the successful colleague to understand what they did differently, genuinely curious rather than resentful."
   },
   {
    "id": "D",
    "text": "You feel motivated to try again immediately, viewing the failure as a data point rather than a verdict."
   },
   {
    "id": "E",
    "text": "You reflect on whether this type of work truly aligns with your values, or whether the failure is a signal to redirect your energy."
   }
  ],
  "scores": {
   "A": {
    "logical": 5,
    "intra": 3,
    "inter": 0,
    "adapt": 3,
    "existential": 0
   },
   "B": {
    "logical": 0,
    "intra": 5,
    "inter": 0,
    "adapt": 4,
    "existential": 2
   },
   "C": {
    "logical": 0,
    "intra": 2,
    "inter": 5,
    "adapt": 3,
    "existential": 0
   },
   "D": {
    "logical": 1,
    "intra": 3,
    "inter": 0,
    "adapt": 5,
    "existential": 0
   },
   "E": {
    "logical": 0,
    "intra": 4,
    "inter": 0,
    "adapt": 2,
    "existential": 5
   }
  },
  "rationale": "Career adaptability—combining planning, control, exploration, and confidence—serves as a psychological resource for navigating career changes Sarsenbay et al. (2026). Hope for success is a demonstrated predictor of career path choices among vocational students (Satterly, 1976). Response D reflects the highest career adaptability, while Response B demonstrates advanced emotional self-regulation, a component of intrapersonal intelligence.",
  "parent": null,
  "option": null,
  "refs": [
   19,
   20
  ]
 },
 {
  "id": "7.1",
  "part": 7,
  "title": "The System",
  "narrative": [
   "You are managing a greenhouse with four types of plants. You observe the following over two weeks:",
   "• When Plant A is watered daily, Plant B (in the adjacent bed) grows faster, but Plant C (two beds away) wilts.",
   "• When Plant A is watered every other day, all plants grow at normal rates.",
   "• Plant D only flowers when Plant C is healthy.",
   "• The greenhouse needs all four plants flowering simultaneously for a client visit in 10 days."
  ],
  "prompt": "What is your watering strategy?",
  "options": [
   {
    "id": "A",
    "text": "Water Plant A every other day for the first 7 days (keeping C healthy so D flowers), then switch to daily watering for the last 3 days to boost B's growth, accepting that C may wilt slightly but D has already flowered."
   },
   {
    "id": "B",
    "text": "Water Plant A daily but move Plant C farther away from A to test whether proximity is the causal factor."
   },
   {
    "id": "C",
    "text": "Water Plant A every other day throughout, accepting slower growth for B but ensuring C and D remain healthy."
   },
   {
    "id": "D",
    "text": "Create a mathematical model of the relationships: A→B (positive, proximity-dependent), A→C (negative, distance-dependent), C→D (conditional), and optimize the watering schedule."
   }
  ],
  "scores": {
   "A": {
    "logical": 4,
    "fluid": 5,
    "naturalistic": 3,
    "creative": 5
   },
   "B": {
    "logical": 5,
    "fluid": 4,
    "naturalistic": 4,
    "creative": 4
   },
   "C": {
    "logical": 2,
    "fluid": 2,
    "naturalistic": 3,
    "creative": 1
   },
   "D": {
    "logical": 5,
    "fluid": 5,
    "naturalistic": 2,
    "creative": 3
   }
  },
  "rationale": "This scenario assesses fluid intelligence—reasoning about novel relational systems without prior training Coertse & Schepers, 2004). Response A demonstrates the highest integration of temporal planning with causal reasoning. Response B demonstrates scientific thinking (hypothesis testing through controlled manipulation). The NADINE assessment framework similarly measures \"decision making, problem solving... cognitive/analytical skills\" through performance-based tasks Coertse & Schepers, 2004).",
  "parent": null,
  "option": null,
  "refs": [
   5
  ]
 }
];
export const REFERENCES: Reference[] = [
 {
  "id": 1,
  "text": "Akos, P., Konold, T. R., & Niles, S. G. (2004). A Career Readiness Typology and Typal Membership in Middle School. The Career Development Quarterly, 53(1), 53–66. https://doi.org/10.1002/j.2161-0045.2004.tb00655.x",
  "url": "https://doi.org/10.1002/j.2161-0045.2004.tb00655.x"
 },
 {
  "id": 2,
  "text": "Almufareh, T., & Almaleh, A. (2026). Hybrid Career Path Recommendation System for Computer Science Students: Integrating Academic Profiles and Personal Skills with a Content–Collaborative Model. Electronics, 15(14), 3228. https://doi.org/10.3390/electronics15143228",
  "url": "https://doi.org/10.3390/electronics15143228"
 },
 {
  "id": 3,
  "text": "Banai, B., & Perin, V. (2016). Type of High School Predicts Academic Performance at University Better than Individual Differences. Plos One, 11(10), e0163996. https://doi.org/10.1371/journal.pone.0163996",
  "url": "https://doi.org/10.1371/journal.pone.0163996"
 },
 {
  "id": 4,
  "text": "Cantaş, Ç., Celep, C., & BATUR, Ö. (2026). The predictive effects of AI anxiety on 21st-century skills and lifelong learning tendencies: a study of pre-service teachers in Northern Cyprus. Frontiers in Psychology, 17. https://doi.org/10.3389/fpsyg.2026.1810689",
  "url": "https://doi.org/10.3389/fpsyg.2026.1810689"
 },
 {
  "id": 5,
  "text": "Coertse, S., & Schepers, J. M. (2004). Some personality and cognitive correlates of career maturity. Sa Journal of Industrial Psychology, 30(2). https://doi.org/10.4102/sajip.v30i2.150",
  "url": "https://doi.org/10.4102/sajip.v30i2.150"
 },
 {
  "id": 6,
  "text": "Coetzee, M. (2008). Psychological career resources of working adults: A South African survey. Sa Journal of Industrial Psychology, 34(2). https://doi.org/10.4102/sajip.v34i2.491",
  "url": "https://doi.org/10.4102/sajip.v34i2.491"
 },
 {
  "id": 7,
  "text": "Davier, A. A. von, Deonovic, B., Yudelson, M., Polyak, S. T., & Woo, A. (2019). Computational Psychometrics Approach to Holistic Learning and Assessment Systems. Frontiers in Education, 4. https://doi.org/10.3389/feduc.2019.00069",
  "url": "https://doi.org/10.3389/feduc.2019.00069"
 },
 {
  "id": 8,
  "text": "Davis, E. (2021). Using human skills taxonomies and tests as measures of artificial intelligence. https://doi.org/10.1787/e182dd0d-en",
  "url": "https://doi.org/10.1787/e182dd0d-en"
 },
 {
  "id": 9,
  "text": "Freund, P. A., & Kasten, N. (2012). How smart do you think you are? A meta-analysis on the validity of self-estimates of cognitive ability. Psychological Bulletin, 138(2), 296–321. https://doi.org/10.1037/a0026556",
  "url": "https://doi.org/10.1037/a0026556"
 },
 {
  "id": 10,
  "text": "Gimena, J. A. F., Biore, C., & Bigcas, B. U. (2015). Abstract Reasoning and Arithmetic Ability Lead to Academic Success of the Accountancy Students in a Private Non-Sectarian University. Jpair Institutional Research, 6(1), 19–33. https://doi.org/10.7719/irj.v6i1.360",
  "url": "https://doi.org/10.7719/irj.v6i1.360"
 },
 {
  "id": 11,
  "text": "Gottfredson, L. S. (2003). The Challenge and Promise of Cognitive Career Assessment. Journal of Career Assessment, 11(2), 115–135. https://doi.org/10.1177/1069072703011002001",
  "url": "https://doi.org/10.1177/1069072703011002001"
 },
 {
  "id": 12,
  "text": "Jammalamadaka, S. K. R. (2019). Assessing the intelligence of a student through TIC-TAC-TOE game for career guidance. International Journal of Electrical and Computer Engineering (Ijece), 9(6), 5545. https://doi.org/10.11591/ijece.v9i6.pp5545-5551",
  "url": "https://doi.org/10.11591/ijece.v9i6.pp5545-5551"
 },
 {
  "id": 13,
  "text": "Lent, R. W. (2025). Career Interventions in the Digital Age: Key Challenges and Transformative Opportunities. The Counseling Psychologist, 53(4), 552–578. https://doi.org/10.1177/00110000251356280",
  "url": "https://doi.org/10.1177/00110000251356280"
 },
 {
  "id": 14,
  "text": "Lubinski, D. (2004). Introduction to the Special Section on Cognitive Abilities: 100 Years After Spearman's (1904) \"'General Intelligence,' Objectively Determined and Measured\". Journal of Personality and Social Psychology, 86(1), 96–111. https://doi.org/10.1037/0022-3514.86.1.96",
  "url": "https://doi.org/10.1037/0022-3514.86.1.96"
 },
 {
  "id": 15,
  "text": "Memari, M., & Ruggles, K. (2025). Artificial Intelligence in Elementary STEM Education: A Systematic Review of Current Applications and Future Challenges. https://doi.org/10.48550/arxiv.2511.00105",
  "url": "https://doi.org/10.48550/arxiv.2511.00105"
 },
 {
  "id": 16,
  "text": "Mrabet, H. E., & Moussa, A. A. (2021). IoT-school guidance: A holistic approach to vocational self-awareness & career path. Education and Information Technologies, 26(5), 5439–5456. https://doi.org/10.1007/s10639-021-10548-6",
  "url": "https://doi.org/10.1007/s10639-021-10548-6"
 },
 {
  "id": 17,
  "text": "Orzan, M. C. (2026). Improving career guidance accuracy through EEG-based vocational interest assessment and self-reported RIASEC profiles. Frontiers in Neuroscience, 20. https://doi.org/10.3389/fnins.2026.1883915",
  "url": "https://doi.org/10.3389/fnins.2026.1883915"
 },
 {
  "id": 18,
  "text": "Oubraime, M., M'hamdi, A., & Sabour, A. (2025). Predicting Student Satisfaction in Career Choices Using Machine Learning: A Case Study. https://doi.org/10.21203/rs.3.rs-5841034/v1",
  "url": "https://doi.org/10.21203/rs.3.rs-5841034/v1"
 },
 {
  "id": 19,
  "text": "Sarsenbay, S., Varlamis, I., Turan, C., Razhametov, B., & Kazym, Y. (2026). Optimizing Academic Trajectories: A Multi-Dimensional Psychometric Recommender System for Student Career Guidance. Informatics, 13(6), 81. https://doi.org/10.3390/informatics13060081",
  "url": "https://doi.org/10.3390/informatics13060081"
 },
 {
  "id": 20,
  "text": "Satterly, D. (1976). Cognitive styles, spatial ability, and school achievement. Journal of Educational Psychology, 68(1), 36–42. https://doi.org/10.1037/0022-0663.68.1.36",
  "url": "https://doi.org/10.1037/0022-0663.68.1.36"
 },
 {
  "id": 21,
  "text": "Serpell, R., & Haynes, B. (n.d.). The Cultural Practice of Intelligence Testing: Problems of International Export. 163–185. https://doi.org/10.1037/10681-007",
  "url": "https://doi.org/10.1037/10681-007"
 },
 {
  "id": 22,
  "text": "Shen, D., Xu, M., 孟欣, Sun, J., & Zhou, Z. (2026). How can the acceptance of artificial intelligence be transformed into employability? The sequential effect of a positive attitude toward artificial intelligence and career adaptability. Frontiers in Psychology, 17. https://doi.org/10.3389/fpsyg.2026.1808195",
  "url": "https://doi.org/10.3389/fpsyg.2026.1808195"
 },
 {
  "id": 23,
  "text": "Skarzyński, M., & Noworol, C. (2022). Career Path Choices of Vocational School Students in the Context of Their Entrepreneurial Abilities, General Aptitude, and Hope for Success. Journal for Perspectives of Economic Political and Social Integration, 28(1), 57–88. https://doi.org/10.18290/pepsi-2022-0003",
  "url": "https://doi.org/10.18290/pepsi-2022-0003"
 },
 {
  "id": 24,
  "text": "Song, H., Hu, A., & Li, X. (2026). Beyond Positive or Negative: Latent Profiles of University Students' AI Attitude and Their Career-Development Correlates. Behavioral Sciences, 16(9), 1460. https://doi.org/10.3390/bs16091460",
  "url": "https://doi.org/10.3390/bs16091460"
 },
 {
  "id": 25,
  "text": "Srianturi, Y., & Supriatna, M. (2020). Analysis of Career Maturity on High School Students. https://doi.org/10.2991/assehr.k.200814.029",
  "url": "https://doi.org/10.2991/assehr.k.200814.029"
 },
 {
  "id": 26,
  "text": "Steppan, M., Jogho, G., Ruchti, I., & Hell, B. (2026). Psychometric Evaluation of the AI-Based Career Matching Platform meinBeruf.ch. Psychological Test Adaptation and Development, 7, 289–295. https://doi.org/10.1027/2698-1866/a000147",
  "url": "https://doi.org/10.1027/2698-1866/a000147"
 },
 {
  "id": 27,
  "text": "Stylianou, V. (2026). Sustainable Career Readiness in the GenAI Era: Student Perceptions of Automation, Entry-Level Employment, and Pedagogical Support. Sustainability, 18(18), 9379. https://doi.org/10.3390/su18189379",
  "url": "https://doi.org/10.3390/su18189379"
 },
 {
  "id": 28,
  "text": "Tountopoulou, M., Drosos, N., & Vlachaki, F. (2021). Assessment of Migrants', Refugees' and Asylum Seekers' Hard Skills: Cultural Adaptation and Psychometric Properties of the NADINE Hard Skill Tests. Open Journal of Social Sciences, 09(07), 240–256. https://doi.org/10.4236/jss.2021.97017",
  "url": "https://doi.org/10.4236/jss.2021.97017"
 },
 {
  "id": 29,
  "text": "Tuccio, M., Mullock, K., Navarro-Palau, P., & Perez, E. X. C. (2023). The OECD Skills Profiling Tool: A new instrument to improve career decisions. https://doi.org/10.1787/598ff539-en",
  "url": "https://doi.org/10.1787/598ff539-en"
 },
 {
  "id": 30,
  "text": "Westman, S., Kauttonen, J., Klemetti, A., Korhonen, N., Manninen, M., Mononen, A., Niittymäki, S., & Paananen, H. (2021). Artificial Intelligence for Career Guidance – Current Requirements and Prospects for the Future. Iafor Journal of Education, 9(4), 43–62. https://doi.org/10.22492/ije.9.4.03",
  "url": "https://doi.org/10.22492/ije.9.4.03"
 },
 {
  "id": 31,
  "text": "Wong, L. P. W. (2024). Artificial Intelligence and Job Automation: Challenges for Secondary Students' Career Development and Life Planning. Merits, 4(4), 370–399. https://doi.org/10.3390/merits4040027",
  "url": "https://doi.org/10.3390/merits4040027"
 },
 {
  "id": 32,
  "text": "Zainudin, Z. N., Foon, L. W., Yusop, Y. M., Othman, W. N. W., Kamarudin, E. M. E., & Anuar, M. (2024). A Review on Application of Holland's RIASEC Theory in Educational Settings. International Journal of Academic Research in Business and Social Sciences, 14(5). https://doi.org/10.6007/ijarbss/v14-i5/21397",
  "url": "https://doi.org/10.6007/ijarbss/v14-i5/21397"
 }
];
