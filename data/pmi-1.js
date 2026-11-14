/* Course 8 · PMI standards, ethics and the PMP. How PMI frames the profession: the credential and renewal rules, the Code of
   Ethics (updated November 2025), and the PMBOK Guide's 8th (2025) and 7th (2021) editions. Paraphrased from PMI sources and
   reputable summaries; scenarios are original. Part 1. First option is correct; the app shuffles. */

PMQ.fig("pmbok8-map", `<svg viewBox="0 0 600 296" role="img" aria-label="PMBOK Guide 8th edition: six principles, seven performance domains and five focus areas">
<text class="t2" x="4" y="12">PMBOK Guide, 8th edition (2025): how the parts fit</text>
<text class="tb" x="4" y="34">6 principles</text><text class="t2" x="596" y="34" text-anchor="end">guide behaviour and decisions</text>
<rect class="soft" x="4" y="42" width="194" height="26" rx="4"/><text class="tc" x="101" y="59" text-anchor="middle">Adopt a holistic view</text>
<rect class="soft" x="203" y="42" width="194" height="26" rx="4"/><text class="tc" x="300" y="59" text-anchor="middle">Focus on value</text>
<rect class="soft" x="402" y="42" width="194" height="26" rx="4"/><text class="tc" x="499" y="59" text-anchor="middle">Embed quality</text>
<rect class="soft" x="4" y="72" width="194" height="26" rx="4"/><text class="tc" x="101" y="89" text-anchor="middle">Be an accountable leader</text>
<rect class="soft" x="203" y="72" width="194" height="26" rx="4"/><text class="tc" x="300" y="89" text-anchor="middle">Integrate sustainability</text>
<rect class="soft" x="402" y="72" width="194" height="26" rx="4"/><text class="tc" x="499" y="89" text-anchor="middle">Build an empowered culture</text>
<text class="tb" x="4" y="122">7 performance domains</text><text class="t2" x="596" y="122" text-anchor="end">40 processes sit inside them</text>
<rect class="bx" x="4" y="130" width="145" height="26" rx="4"/><text class="tc" x="76.5" y="147" text-anchor="middle">Governance</text>
<rect class="bx" x="153" y="130" width="145" height="26" rx="4"/><text class="tc" x="225.5" y="147" text-anchor="middle">Scope</text>
<rect class="bx" x="302" y="130" width="145" height="26" rx="4"/><text class="tc" x="374.5" y="147" text-anchor="middle">Schedule</text>
<rect class="bx" x="451" y="130" width="145" height="26" rx="4"/><text class="tc" x="523.5" y="147" text-anchor="middle">Finance</text>
<rect class="bx" x="4" y="160" width="145" height="26" rx="4"/><text class="tc" x="76.5" y="177" text-anchor="middle">Stakeholders</text>
<rect class="bx" x="153" y="160" width="145" height="26" rx="4"/><text class="tc" x="225.5" y="177" text-anchor="middle">Resources</text>
<rect class="bx" x="302" y="160" width="145" height="26" rx="4"/><text class="tc" x="374.5" y="177" text-anchor="middle">Risk</text>
<text class="t2" x="457" y="171">communications now</text><text class="t2" x="457" y="184">sit in Stakeholders</text>
<text class="tb" x="4" y="212">5 focus areas</text><text class="t2" x="596" y="212" text-anchor="end">the former process groups, not phases</text>
<rect class="bx2" x="4" y="220" width="115" height="36" rx="4"/><text class="tc" x="61.5" y="242" text-anchor="middle">Initiating</text>
<rect class="bx2" x="123" y="220" width="115" height="36" rx="4"/><text class="tc" x="180.5" y="242" text-anchor="middle">Planning</text>
<rect class="bx2" x="242" y="220" width="115" height="36" rx="4"/><text class="tc" x="299.5" y="242" text-anchor="middle">Executing</text>
<rect class="bx2" x="361" y="220" width="115" height="36" rx="4"/><text class="tc" x="418.5" y="235" text-anchor="middle">Monitoring and</text><text class="tc" x="418.5" y="249" text-anchor="middle">controlling</text>
<rect class="bx2" x="480" y="220" width="115" height="36" rx="4"/><text class="tc" x="537.5" y="242" text-anchor="middle">Closing</text>
<text class="t2" x="4" y="276">Mindset: be proactive · take ownership · drive value</text>
<text class="t2" x="4" y="291">Tailoring has its own section · appendices cover PMOs, AI and procurement</text>
</svg>`);

PMQ.course({
  id: "pmi",
  title: "PMI Standards, Ethics & the PMP",
  short: "PMI standards",
  source: "PMBOK® Guide 8th ed. (2025) and 7th ed. (2021), PMI Code of Ethics (2025), PMP Examination Content Outline (2026); paraphrased",
  blurb: "How PMI frames the profession: the PMP credential and how to keep it, the Code of Ethics in real situations, the PMBOK Guide's principles and performance domains, tailoring, how organisations structure project work, value and benefits, using AI responsibly, and the models project managers lean on. Knowing the framework helps you read situations, and exam questions, the way PMI does.",
  topics: [

  /* ---------------------------------------------------------------- 1 */
  {
    id: "pmi-pmp",
    title: "PMI, the PMP and staying certified",
    summary: "The Project Management Institute (PMI) is a not-for-profit professional association founded in 1969. It publishes the PMBOK® Guide and other standards, runs certifications and supports local chapters. Its credentials include the CAPM (entry level, no project experience needed), the PMP, PMI-ACP (agile), PgMP (programs), PfMP (portfolios), PMI-RMP (risk) and PMI-SP (scheduling), plus newer ones for managing AI projects (PMI-CPMAI, launched late 2025) and sustainability (the Certified Sustainable Project Professional, launched in June 2026). To sit the PMP with a four-year degree you need 36 months of leading projects within the past eight years and 35 hours of project management education (or the CAPM); without a degree, 60 months. The exam is built on the Examination Content Outline (ECO), not on any one book: the outline that took effect in July 2026 has 180 questions in 240 minutes, across People (33%), Process (41%) and Business Environment (26%). To keep the PMP, you earn 60 professional development units (PDUs) every three years: at least 35 from education, including at least 8 in each side of the Talent Triangle (Ways of Working, Power Skills and Business Acumen), and no more than 25 from giving back. Miss the deadline and the credential is suspended for a year while you catch up, then it expires.",
    terms: [
      ["PMI (Project Management Institute)", "A not-for-profit professional association that publishes project management standards, runs certifications and supports local chapters.", "The organisation behind the PMBOK Guide and the PMP."],
      ["PDU (professional development unit)", "The unit PMI uses to measure learning and giving back; one PDU is roughly one hour of activity.", "A two-hour webinar on negotiation earns two Power Skills PDUs."],
      ["Talent Triangle", "PMI's three skill areas for professional development: Ways of Working, Power Skills and Business Acumen.", "Courses in scheduling, coaching and finance cover all three sides."],
      ["Examination Content Outline (ECO)", "PMI's blueprint for a certification exam, listing the domains, tasks and weightings it tests.", "The 2026 PMP outline weights Business Environment at 26%."]
    ],
    cards: [
      { d: 1, q: "Which PMI certification is designed for people starting out, with no project experience required?", o: [
        ["CAPM", "Right. The Certified Associate in Project Management needs project management education, not experience."],
        ["PMP", "The PMP needs 36 or 60 months of experience leading projects."],
        ["PMI-ACP", "The agile certification expects agile project experience."],
        ["PgMP", "Program management is a senior credential with substantial experience."]],
        k: "CAPM to start; PMP once you've led projects." },
      { d: 1, q: "How many PDUs does a PMP holder need to renew, and over what period?", o: [
        ["60 PDUs every three years", "Right. The three-year cycle starts when you pass the exam."],
        ["35 PDUs every year", "35 is the minimum education share of the 60, not an annual target."],
        ["60 PDUs every five years", "The cycle is three years."],
        ["100 PDUs every three years", "Too many; it's 60."]],
        k: "60 PDUs, every three years." },
      { d: 2, q: "You're planning your first PMP renewal. Which plan meets PMI's rules?", o: [
        ["40 education PDUs (8+ in each Talent Triangle side) and 20 giving back", "Right. Education is at least 35 and giving back stays under the 25 cap."],
        ["60 giving-back PDUs, all from your day-to-day work as a project manager", "Giving back is capped at 25, and working as a practitioner counts for at most 8."],
        ["35 education PDUs, all of them in Ways of Working, plus the full 25 giving back", "You need at least 8 in each of the three Talent Triangle sides."],
        ["30 education PDUs and 30 giving back", "Education must be at least 35 and giving back at most 25."]],
        k: "35+ education across all three sides; giving back capped at 25." },
      { d: 1, q: "What are the three sides of PMI's Talent Triangle?", o: [
        ["Ways of Working, Power Skills and Business Acumen", "Right. They replaced technical, leadership, and strategic and business management."],
        ["Scope, schedule and cost", "That's the classic triple constraint."],
        ["People, Process and Business Environment", "Those are the PMP exam's domains."],
        ["Technical, leadership and strategic management", "Those were the older names, since renamed."]],
        k: "Ways of Working · Power Skills · Business Acumen." },
      { d: 2, q: "You have a four-year degree. What experience and education do you need to apply for the PMP?", o: [
        ["36 months leading projects in the last 8 years, plus 35 hours of training or the CAPM", "Right. That's 36 months within the past eight years, plus 35 hours of project management education; without a four-year degree, it's 60 months."],
        ["60 months leading projects, plus a master's degree in project management from an accredited school", "60 months is the route without a four-year degree, and no master's is required."],
        ["None, if your degree is in project management", "Experience leading projects is always part of PMP eligibility."],
        ["36 months in any role, plus 23 hours of education", "It must be experience leading projects, and the education requirement is 35 hours."]],
        k: "Degree: 36 months + 35 hours. No degree: 60 months + 35 hours." },
      { d: 2, q: "A colleague says the PMP exam tests the PMBOK Guide chapter by chapter. What's more accurate?", o: [
        ["It follows the exam's content outline; the PMBOK Guide is one reference", "Right. The Examination Content Outline sets the domains and tasks; the PMBOK Guide is one of several references."],
        ["It tests only the 8th edition's 40 processes, in the order the book lists them", "Processes are useful, but the exam is built on the outline."],
        ["It tests only the 7th edition's twelve principles and eight performance domains", "The exam isn't tied to one edition's structure."],
        ["It tests the Code of Ethics and nothing else", "Ethics runs through the exam, but it's not the whole of it."]],
        k: "The ECO is the blueprint; books are references." },
      { d: 2, q: "Your three-year cycle ends next week and you're 15 PDUs short. What happens if you don't make it?", o: [
        ["It's suspended for a year while you catch up, then it expires", "Right. You get a year's suspension to finish the PDUs; after that it expires, and you'd have to reapply and resit the exam."],
        ["It expires immediately, and you must reapply and resit the full exam", "There's a one-year suspension first."],
        ["Nothing; PDUs are recommended, not required", "Renewal requires them."],
        ["You pay a late fee to PMI and keep the credential active as normal", "There's no fee that replaces the PDUs."]],
        k: "Late PDUs: one year of suspension, then expiry." },
      { d: 3, q: "Which new PMI credential, launched in 2026, focuses on sustainability across the project life cycle?", x: 1, o: [
        ["CSPP", "Right. The Certified Sustainable Project Professional launched on World Environment Day, 5 June 2026."],
        ["PMI-CPMAI", "That's PMI's certification for managing AI projects, launched in late 2025."],
        ["PMI-RMP", "That's risk management."],
        ["PfMP", "That's portfolio management."]],
        k: "Sustainability now has its own PMI credential." }
    ],
    flips: [
      { d: 2, f: "Plan a PMP renewal that meets PMI's rules.", b: "Earn 60 PDUs within your three-year cycle. At least 35 must be education PDUs, with at least 8 in each side of the Talent Triangle (Ways of Working, Power Skills, Business Acumen). Up to 25 can be giving back, such as volunteering, mentoring or creating content; working as a practitioner counts for at most 8 of those. Report them through PMI and pay the renewal fee. If you miss the deadline, you get a one-year suspension to catch up before the credential expires." }
    ]
  },

  /* ---------------------------------------------------------------- 2 */
  {
    id: "ethics-code",
    title: "The Code of Ethics in practice",
    summary: "PMI's Code of Ethics and Professional Conduct applies to PMI members, volunteers, certification holders and anyone applying for a PMI certification. An updated version took effect on 17 November 2025; its foundation is still four values. Responsibility: owning your decisions and their consequences, keeping commitments and acting within your authority. Respect: treating people, their cultures and their property with dignity, listening, and dealing with conflict directly. Fairness: making decisions impartially, free from self-interest, prejudice and favouritism, which includes declaring conflicts of interest. Honesty: telling the truth in what you say, report and do, without misleading by omission. Concerns can be raised informally, through a chapter, or through PMI's formal ethics complaint process, where an Ethics Review Committee investigates. In practice: get the facts, follow the law and your organisation's policy, disclose anything that could look like a conflict, speak to the person directly where it's safe to, put concerns in writing, and escalate through the proper channel. Local custom never overrides the law, and pressure from a senior person doesn't change what's honest.",
    terms: [
      ["PMI Code of Ethics and Professional Conduct", "PMI's code for members, volunteers, certification holders and applicants, built on responsibility, respect, fairness and honesty; updated in November 2025.", "The standard you agree to when you apply for the PMP."],
      ["Responsibility (ethics)", "Owning your decisions and their consequences, including what you fail to do, and keeping your commitments.", "Admitting your estimate was wrong and fixing the plan."],
      ["Respect (ethics)", "Treating people, cultures, property and resources with dignity, and dealing with conflict directly and in good faith.", "Giving critical feedback privately, not in front of the team."],
      ["Fairness (ethics)", "Making decisions impartially, without self-interest, prejudice or favouritism, and declaring conflicts of interest.", "Scoring every bidder against the same published criteria."],
      ["Honesty (ethics)", "Being truthful in what you say, report and do, and not creating false impressions, even by leaving things out.", "Reporting a project as amber when it's slipping, even under pressure."]
    ],
    cards: [
      { d: 1, q: "Your manager asks you to show the project as green in the monthly report, although it's two weeks late. Which value is most at stake?", o: [
        ["Honesty", "Right. Status reports must give a true picture, even when the news is bad."],
        ["Respect", "Respect matters in how you push back, but the core issue is truthfulness."],
        ["Fairness", "Fairness is about impartial decisions; this is about misreporting."],
        ["Responsibility", "Also involved, but misreporting status is first a matter of telling the truth."]],
        k: "Report the real status; manage the reaction." },
      { d: 2, q: "The sponsor asks you to keep a known defect from the customer until after the contract is signed. What do you do?", o: [
        ["Decline to mislead the customer; propose disclosing it with a fix plan", "Right. Push back respectfully and offer an honest way forward: disclose it, with a plan to fix it."],
        ["Go along with it, since it's ultimately the sponsor's decision to make", "A senior instruction doesn't make deception acceptable."],
        ["Quietly email the customer about the defect without telling the sponsor", "Raise it with the sponsor first; going around them damages trust and skips the proper channel."],
        ["Resign from the project immediately", "Premature; first try to resolve it, then escalate if pressure continues."]],
        k: "Decline to deceive, and offer the honest alternative." },
      { d: 2, q: "You're evaluating tenders and find that your brother-in-law's firm has bid. What's the right first step?", o: [
        ["Declare it and step aside from evaluating that bid", "Right. Disclose the relationship and let someone independent assess that tender."],
        ["Score their bid extra strictly to prove you're impartial", "The conflict is still undeclared, and the scoring is now unfair the other way."],
        ["Ask your brother-in-law to withdraw the bid", "That interferes with the tender and still hides the conflict."],
        ["Say nothing, since you know you won't be influenced", "Fairness includes how it looks; undeclared conflicts erode trust."]],
        k: "Conflicts of interest: disclose and step aside." },
      { d: 2, q: "A new team member offers to bring in the risk templates and client list from their previous employer. How do you respond?", o: [
        ["Decline: they belong to the former employer", "Right. Thank them, but use your own organisation's templates; others' confidential material isn't yours to use."],
        ["Accept the templates but not the client list", "The templates may also be proprietary; use your own organisation's."],
        ["Accept both, since they'll only be used internally", "Internal use doesn't make it acceptable to use someone else's confidential material."],
        ["Accept them if the old company's logo is removed", "Removing the logo hides the source; it doesn't make it right."]],
        k: "Others' confidential material stays theirs." },
      { d: 3, q: "You learn a fellow PMP has claimed PDUs for a course they never attended. What does the code expect of you?", o: [
        ["Raise it with them; if it isn't fixed, report it to PMI", "Right. Speak to them first where it's safe, then use PMI's ethics process."],
        ["Ignore it; their certification is their business", "Responsibility includes acting on unethical conduct you know about."],
        ["Post about it on LinkedIn to warn others", "Public shaming isn't respectful or the proper channel."],
        ["Tell their employer's HR team and ask them to discipline the person", "Their employer isn't the body that handles PMI certification ethics."]],
        k: "Direct conversation first, then the proper channel." },
      { d: 2, q: "Overseas, an official hints that a cash 'fast-track fee' will release your stalled equipment from the port today. What do you do?", o: [
        ["Decline, follow the law and policy, and escalate", "Right. Follow the law and your company's anti-bribery policy, and get legal or compliance advice on the proper route."],
        ["Pay it, since it's the local custom", "Local custom doesn't override the law or your organisation's policy."],
        ["Pay it and record it as freight costs", "Now it's also a false record."],
        ["Ask the local supplier to pay it on your behalf", "Paying through someone else is still your payment."]],
        k: "Custom never overrides law or policy." },
      { d: 1, q: "Who has to follow PMI's Code of Ethics and Professional Conduct?", o: [
        ["Members, volunteers, certification holders and applicants", "Right. Applying for a PMI credential means agreeing to the code."],
        ["Only people who currently hold the PMP or a higher credential", "It covers more people than PMP holders."],
        ["Anyone who has read the PMBOK Guide", "Reading a book doesn't bind you to the code."],
        ["Only PMI's own staff and board members", "It applies to members, volunteers, certification holders and applicants."]],
        k: "Members, volunteers, holders and applicants." },
      { d: 3, q: "After a successful handover, a stakeholder from a culture where gifts are customary gives you an expensive watch. What's the best response?", o: [
        ["Thank them, and follow your gift policy", "Right. Respect the gesture, then decline or declare it as your policy says."],
        ["Accept it quietly to avoid causing offence", "An undeclared expensive gift can look like influence, whatever the intent."],
        ["Refuse it curtly and report them for attempted bribery", "Disrespectful; the gesture may be entirely cultural."],
        ["Accept it and give them a gift of equal value", "That doesn't address the policy, and it escalates the exchange."]],
        k: "Honour the gesture; follow the gift policy." },
      { d: 2, q: "A manager suggests mocking a struggling team member's work in front of everyone to 'motivate' them. Which value does this break most clearly?", o: [
        ["Respect", "Right. Feedback should be given privately and with dignity."],
        ["Honesty", "The work may really be poor; the problem is how it's handled."],
        ["Fairness", "Possibly, but the clearest breach is the lack of dignity."],
        ["Responsibility", "Less central here than how the person is treated."]],
        k: "Critique privately, with dignity." },
      { d: 3, q: "You realise your estimate was too optimistic, and the sponsor has already announced the date publicly. What do you do?", o: [
        ["Tell the sponsor now, with a revised estimate and options", "Right. Own the error early and explain why, while there are still choices."],
        ["Stay quiet and have the team work weekends to close the gap", "Hides the problem and burns out the team."],
        ["Wait for a milestone to slip, so the delay explains itself", "Knowingly letting a false date stand is dishonest, and it removes options."],
        ["Quietly cut testing so the date still holds", "Trades a known date for hidden quality risk."]],
        k: "Own estimating errors early, with options." }
    ],
    flips: [
      { d: 2, f: "Someone senior pressures you to bend the truth. Walk through how you'd respond.", b: "Check the facts so you're sure what's true. Explain the problem calmly: what they're asking, why it's misleading, and the risks to the project, the organisation and them. Offer an honest alternative, such as disclosing the issue with a recovery plan. Put your concern in writing. If the pressure continues, escalate through the proper channel, such as the governance board, compliance or PMI's ethics process. Don't falsify anything, even by omission." }
    ]
  },

  /* ---------------------------------------------------------------- 3 */
  {
    id: "pmbok8-principles",
    title: "PMBOK 8: six principles and a mindset",
    summary: "The PMBOK Guide's 8th edition (2025) is a single book that replaces the 7th edition's twelve principles with six. Adopt a holistic view: see the project as a system, with interactions and complexity, rather than optimising one part. Focus on value: keep decisions tied to the outcomes and benefits the project exists for, which also takes in stakeholder engagement and adapting to change. Embed quality into processes and deliverables: build quality in at every step rather than inspecting it in at the end. Be an accountable leader: combines the 7th edition's stewardship and leadership principles, owning decisions and caring for people and resources. Integrate sustainability within all project areas: new, with no 7th-edition equivalent, covering environmental, social and economic impacts across the life cycle. Build an empowered culture: a collaborative, trusting environment where the team can make decisions. Two former principles moved: tailoring now has its own section, and risk is now a performance domain. The guide also describes a mindset in three parts: be proactive, take ownership and drive value. Principles guide judgement; they aren't steps to follow in order.",
    figs: ["pmbok8-map"],
    terms: [
      ["Holistic view (PMBOK 8)", "Seeing the project as a system of interacting parts and stakeholders, so you don't optimise one piece at the expense of the whole.", "Checking how a faster build affects support, training and operations."],
      ["Accountable leader (PMBOK 8)", "A principle combining stewardship and leadership: owning decisions and outcomes while caring for people, resources and the wider community.", "A PM who reports a mistake and fixes it rather than shifting blame."],
      ["Empowered culture (PMBOK 8)", "A collaborative, trusting environment in which the team has the authority and support to make decisions.", "Letting the team decide how to meet a goal, within agreed limits."],
      ["Sustainability principle (PMBOK 8)", "Integrating environmental, social and economic considerations into every project area and decision across the life cycle.", "Choosing materials by whole-of-life energy use, not just purchase price."]
    ],
    cards: [
      { d: 1, q: "How many principles does the PMBOK Guide's 8th edition set out?", af: "pmbok8-map", o: [
        ["Six", "Right. The 7th edition's twelve were consolidated into six."],
        ["Twelve", "That was the 7th edition."],
        ["Eight", "The 7th edition had eight performance domains."],
        ["Ten", "Earlier editions had ten knowledge areas, not principles."]],
        k: "PMBOK 8: six principles." },
      { d: 2, q: "Which PMBOK 8 principle is new, with no equivalent among the 7th edition's twelve?", af: "pmbok8-map", o: [
        ["Integrate sustainability", "Right. Sustainability moved from a passing mention to a principle."],
        ["Embed quality into processes and deliverables", "That refines the 7th edition's 'build quality in' principle."],
        ["Be an accountable leader", "That merges two 7th-edition principles: stewardship and leadership."],
        ["Adopt a holistic view", "That merges systems thinking and navigating complexity."]],
        k: "Sustainability is the new principle." },
      { d: 2, q: "PMBOK 8's 'Be an accountable leader' combines which two 7th-edition principles?", o: [
        ["Stewardship and leadership", "Right. Being a diligent, respectful and caring steward, plus demonstrating leadership behaviours."],
        ["Tailoring based on context, and optimising risk responses", "Those moved to the tailoring section and the Risk domain."],
        ["Engaging stakeholders, and enabling change", "Those were folded mainly into Focus on value."],
        ["Navigating complexity, and responding to system interactions", "Those became Adopt a holistic view."]],
        k: "Accountable leader = steward + leader." },
      { d: 2, q: "Each team keeps optimising its own deliverable, but the overall solution keeps falling short. Which principle is being missed?", o: [
        ["Adopt a holistic view", "Right. Look at how the parts interact, not just each part."],
        ["Embed quality into processes and deliverables", "Each part may be high quality; the problem is how they fit together."],
        ["Build an empowered culture", "The teams are making their own decisions; they're missing the whole picture."],
        ["Integrate sustainability", "Not the issue described."]],
        k: "Optimise the whole, not the parts." },
      { d: 2, q: "Where did the 7th edition's 'tailor based on context' and 'optimise risk responses' go in PMBOK 8?", o: [
        ["Tailoring got its own section; risk became a domain", "Right. Both still matter; they just sit elsewhere."],
        ["Both were dropped as outdated", "Neither was dropped."],
        ["Both became focus areas", "The focus areas are the former process groups."],
        ["Both were merged into the Focus on value principle", "They moved to a section and a domain instead."]],
        k: "Tailoring: a section. Risk: a domain." },
      { d: 3, q: "The client's acceptance tests keep finding defects late, and the team rushes fixes before each release. Which change best reflects PMBOK 8's quality principle?", o: [
        ["Build checks into every step so defects are caught early", "Right. Clear acceptance criteria, reviews and automated tests at each step prevent defects or catch them early."],
        ["Add a longer, more thorough test phase just before each release", "Still inspecting quality in at the end, when fixes cost most."],
        ["Ask the client to relax their acceptance criteria", "That lowers quality rather than building it in."],
        ["Track defects per person, to drive accountability for quality", "Blame hides defects; fix the process."]],
        k: "Embed quality; don't inspect it in." },
      { d: 1, q: "What three-part mindset does PMBOK 8 describe?", o: [
        ["Proactive, ownership and value-driven", "Right. Be proactive, take ownership and drive value: it links the principles to day-to-day behaviour."],
        ["Plan, do, check and act, as a continuous cycle", "That's the Deming quality cycle."],
        ["Initiate, plan and execute", "Those are focus areas."],
        ["Inspect, adapt and deliver in short cycles", "Agile language, but not PMBOK 8's mindset."]],
        k: "Proactive · ownership · value." },
      { d: 3, q: "The sponsor wants the cheapest building services, but they'd double energy use over 30 years. How does PMBOK 8 help you frame the conversation?", o: [
        ["Compare whole-of-life costs and impacts, not just the price", "Right. Integrate sustainability and focus on value: bring the long-term numbers and let the sponsor decide with the full picture."],
        ["Focus on value, where value means the lowest upfront cost", "Value includes long-term costs and benefits."],
        ["Be an accountable leader by doing exactly what the sponsor says", "Accountability includes raising impacts the sponsor may not have seen."],
        ["Build an empowered culture by letting the contractor choose", "Delegation doesn't answer the trade-off."]],
        k: "Whole-of-life thinking beats lowest upfront cost." },
      { d: 1, q: "Are the PMBOK principles a set of steps to follow in order?", o: [
        ["No: they guide decisions, applied with judgement", "Right. They're like values, not a procedure."],
        ["Yes: they're followed in sequence on every project", "They aren't sequential."],
        ["Yes, but only on predictive projects", "They apply to every approach, and they aren't steps."],
        ["No: they're legal requirements for PMP holders", "They're guidance, not law."]],
        k: "Principles guide; they don't prescribe." }
    ],
    flips: [
      { d: 2, f: "Name PMBOK 8's six principles, and say what each asks of you.", bf: "pmbok8-map", b: "Adopt a holistic view: see the whole system and its interactions. Focus on value: tie decisions to outcomes and benefits. Embed quality: build it into every step. Be an accountable leader: own decisions and care for people and resources. Integrate sustainability: weigh environmental, social and economic impacts across the life cycle. Build an empowered culture: create trust and let the team decide within agreed limits." }
    ]
  },

  /* ---------------------------------------------------------------- 4 */
  {
    id: "pmbok8-domains",
    title: "PMBOK 8: domains, focus areas and processes",
    summary: "PMBOK 8 has seven performance domains: Governance, Scope, Schedule, Finance, Stakeholders, Resources and Risk. Unlike the 7th edition's outcome-based domains, these are organised around project functions, and processes are back inside them: 40 in all, down from the 49 of the 6th edition, each with inputs, tools and techniques, and outputs. The five focus areas (Initiating, Planning, Executing, Monitoring and Controlling, and Closing) are the former process groups. They group processes by purpose; they aren't phases, and on most projects they repeat and overlap. Some topics have moved: communications now sits inside the Stakeholders domain, the development approach and life cycle moved into The Standard for Project Management, and procurement is now an appendix. Other appendices cover project management offices (expanded) and artificial intelligence (new). There's also a large section of tools and techniques, with more than a hundred entries.",
    figs: ["pmbok8-map"],
    terms: [
      ["Performance domain", "A group of related activities that are critical to delivering a project's outcomes. PMBOK 8 has seven; PMBOK 7 had eight.", "PMBOK 8's Finance domain covers estimating, budgeting and controlling costs."],
      ["Focus area (PMBOK 8)", "PMBOK 8's name for the five former process groups: Initiating, Planning, Executing, Monitoring and Controlling, and Closing.", "Monitoring and Controlling processes run throughout the project, not just at the end."],
      ["Process (PMBOK 8)", "A defined set of activities with inputs, tools and techniques, and outputs. PMBOK 8 places 40 of them inside its performance domains.", "A process for identifying risks sits in the Risk domain."]
    ],
    cards: [
      { d: 1, q: "Which list matches PMBOK 8's seven performance domains?", af: "pmbok8-map", o: [
        ["Governance, scope, schedule, finance, stakeholders, resources and risk", "Right. They're organised around project functions."],
        ["Stakeholders, team, approach, planning, project work, delivery, measurement and uncertainty", "Those are the 7th edition's eight domains."],
        ["Integration, scope, schedule, cost, quality, resources and communications", "Most of those are the older knowledge areas."],
        ["Initiating, planning, executing, monitoring and controlling, and closing", "Those are the five focus areas."]],
        k: "Governance · Scope · Schedule · Finance · Stakeholders · Resources · Risk." },
      { d: 2, q: "In PMBOK 8, what are 'focus areas'?", o: [
        ["The five former process groups", "Right. Initiating, Planning, Executing, Monitoring and Controlling, and Closing; they group processes by purpose, not by phase."],
        ["The seven performance domains under a new name", "Domains and focus areas are different things."],
        ["The six principles, grouped into themes", "The principles stand alone."],
        ["Project phases that must run strictly in order", "They aren't phases; they repeat and overlap."]],
        k: "Focus areas = the old process groups." },
      { d: 2, q: "Where does communications management sit in PMBOK 8?", o: [
        ["Inside the Stakeholders performance domain", "Right. Communication is treated as part of engaging stakeholders."],
        ["In its own knowledge area, as in the 6th edition", "Knowledge areas weren't brought back."],
        ["In the Governance domain", "Governance covers decision-making and oversight, not day-to-day communication."],
        ["In an appendix", "The appendices cover PMOs, AI and procurement, among others."]],
        k: "Communications: part of Stakeholders." },
      { d: 2, q: "How many processes does PMBOK 8 describe, and where do they live?", o: [
        ["40, inside the performance domains", "Right. Down from 49, each with inputs, tools and techniques, and outputs."],
        ["None; PMBOK 8 has principles only", "The 7th edition left processes out of the guide; the 8th brought them back."],
        ["49, unchanged from the 6th edition", "The number fell to 40."],
        ["Twelve, one for each principle", "There are six principles, and processes aren't tied to them one to one."]],
        k: "40 processes, embedded in domains." },
      { d: 2, q: "A colleague treats the focus areas as phases and wants all 'Planning' finished before any 'Executing' starts. What's the flaw?", o: [
        ["Focus areas aren't phases; they repeat and overlap", "Right. Planning, executing and monitoring repeat and overlap on most projects; even predictive projects replan as they learn."],
        ["Nothing; that's exactly how PMBOK 8 expects you to work", "PMBOK 8 is explicit that focus areas aren't phases."],
        ["Executing should come before Planning on agile projects", "Agile teams still plan, just in shorter cycles."],
        ["Closing should also be fully planned before any execution", "Closing is a focus area, not a first step."]],
        k: "Focus areas overlap; they aren't a sequence." },
      { d: 3, q: "Your procurement team asks where PMBOK 8 covers buying from suppliers. What do you tell them?", o: [
        ["It's an appendix now, but it still touches several domains", "Right. Procurement moved to an appendix, but contracting decisions still affect governance, finance, scope and risk."],
        ["It isn't covered at all any more", "It's covered in an appendix."],
        ["It's become the eighth performance domain, next to Finance and Risk", "There are seven domains; procurement isn't one."],
        ["It's one of the focus areas, between Executing and Closing", "Focus areas are the former process groups."]],
        k: "Procurement: an appendix that touches several domains." },
      { d: 2, q: "Which appendix is new in PMBOK 8, reflecting how project work is changing?", o: [
        ["Artificial intelligence", "Right. It sits alongside an expanded appendix on PMOs."],
        ["Earned value formulas", "Earned value isn't a new appendix."],
        ["Procurement", "Procurement moved into an appendix, but the topic isn't new."],
        ["Lean Six Sigma", "Not one of PMBOK 8's appendices."]],
        k: "PMBOK 8 adds an AI appendix." },
      { d: 3, q: "How do PMBOK 8's performance domains differ from PMBOK 7's?", o: [
        ["They're built around functions, with processes inside", "Right. PMBOK 7's domains described outcomes; PMBOK 8's are organised around what you manage, with processes inside."],
        ["They're the same domains with new names", "The lists are different, not just renamed."],
        ["PMBOK 8 has no domains, only principles", "PMBOK 8 has seven domains."],
        ["PMBOK 8's domains apply only to predictive, plan-driven projects", "They apply to any approach."]],
        k: "PMBOK 7: outcome-based. PMBOK 8: function-based, with processes." }
    ],
    flips: [
      { d: 2, f: "Sketch how PMBOK 8 is structured.", bf: "pmbok8-map", b: "Six principles guide behaviour. Seven performance domains (Governance, Scope, Schedule, Finance, Stakeholders, Resources, Risk) hold 40 processes, each with inputs, tools and techniques, and outputs. Five focus areas (Initiating, Planning, Executing, Monitoring and Controlling, Closing) group the processes by purpose. Tailoring has its own section; a large tools-and-techniques section and appendices on PMOs, AI and procurement complete it." }
    ]
  },

  /* ---------------------------------------------------------------- 5 */
  {
    id: "pmbok7",
    title: "PMBOK 7: twelve principles and eight domains",
    summary: "The 7th edition (2021) moved the PMBOK Guide from processes to principles, and much study material still uses it. Its twelve principles: be a diligent, respectful and caring steward; create a collaborative team environment; engage with stakeholders; focus on value; recognise and respond to system interactions; demonstrate leadership behaviours; tailor based on context; build quality into processes and deliverables; navigate complexity; optimise risk responses; embrace adaptability and resiliency; and enable change to achieve the envisioned future state. Its eight performance domains describe outcomes: Stakeholders, Team, Development Approach and Life Cycle, Planning, Project Work, Delivery, Measurement and Uncertainty. It framed projects as part of a system for value delivery, alongside programs, portfolios and operations, and it gathered useful models, methods and artifacts, from situational leadership and Tuckman's stages to the Cynefin framework. The 8th edition consolidates the same thinking, so the ideas carry over even where the lists changed.",
    terms: [
      ["Stewardship", "Acting with care, integrity and trustworthiness for the people, resources and organisation you're responsible for, and for the wider community.", "Turning down a shortcut that would leave the client with hidden maintenance costs."],
      ["System for value delivery", "PMBOK 7's view of portfolios, programs, projects and operations working together to create value for the organisation.", "A new product's project, the program it belongs to and the operations that run it afterwards."],
      ["Models, methods and artifacts", "PMBOK 7's catalogue of commonly used frameworks, techniques and documents, to choose from when tailoring.", "Situational leadership (a model), a retrospective (a method) and a risk register (an artifact)."]
    ],
    cards: [
      { d: 1, q: "Which PMBOK 7 performance domain deals with risk and ambiguity?", o: [
        ["Uncertainty", "Right. It covers risk, ambiguity, complexity and volatility."],
        ["Delivery", "Delivery is about scope, quality and meeting requirements."],
        ["Measurement", "Measurement covers performance tracking."],
        ["Planning", "Planning organises the work, but risk lives in Uncertainty."]],
        k: "PMBOK 7: risk sits in Uncertainty." },
      { d: 2, q: "Which of these is one of PMBOK 7's eight performance domains?", o: [
        ["Development Approach and Life Cycle", "Right. In PMBOK 8 this moved into The Standard for Project Management."],
        ["Project Procurement Management", "A former knowledge area, not a PMBOK 7 domain."],
        ["Governance", "That's a PMBOK 8 domain."],
        ["Monitoring and Controlling", "A process group, now a PMBOK 8 focus area."]],
        k: "Know which list is which edition." },
      { d: 2, q: "What does PMBOK 7's stewardship principle add beyond simply doing the job well?", o: [
        ["Care for people, resources and the wider world, with integrity", "Right. Stewardship looks past the project's own goals to the organisation and the wider community."],
        ["Strict compliance with the approved schedule and budget at all times", "Compliance alone isn't stewardship."],
        ["Maximising the sponsor's profit above all else", "Stewardship balances many interests, not one."],
        ["Delegating every decision to the team", "Delegation is a leadership choice, not stewardship itself."]],
        k: "Stewardship: integrity and care beyond the brief." },
      { d: 2, q: "Which PMBOK 7 principle applies when cause and effect are hard to see and many factors interact?", o: [
        ["Navigate complexity", "Right. In PMBOK 8 it's part of Adopt a holistic view."],
        ["Tailor based on context", "Tailoring adapts the approach; complexity is the condition it responds to."],
        ["Optimise risk responses", "Risk is related, but complexity is its own principle."],
        ["Focus on value", "Not the principle that describes complexity."]],
        k: "Complexity → navigate it (PMBOK 8: holistic view)." },
      { d: 3, q: "Your study guide uses PMBOK 7's lists, but your organisation has adopted PMBOK 8. How should you treat the difference?", o: [
        ["Learn the ideas: they carry over into PMBOK 8's structure", "Right. PMBOK 8 consolidates the same thinking into six principles and seven domains; know both structures."],
        ["Ignore PMBOK 7; none of it applies any more", "Most of its thinking carries straight over."],
        ["Use only PMBOK 7, since standards never change the exam", "The exam follows PMI's current outline, which changes over time."],
        ["Combine the two lists into fifteen domains", "That mixes two different structures."]],
        k: "Ideas carry over; structures changed." },
      { d: 2, q: "What did PMBOK 7 call its catalogue of situational leadership, Tuckman's stages, the Cynefin framework and similar tools?", o: [
        ["Models, methods and artifacts", "Right. PMBOK 8 replaced it with a tools and techniques section."],
        ["Organisational process assets", "Those are an organisation's own templates and knowledge."],
        ["Knowledge areas", "Knowledge areas were the 6th edition's structure."],
        ["Enterprise environmental factors", "Those are conditions outside the team's control."]],
        k: "PMBOK 7: models, methods, artifacts." },
      { d: 2, q: "What does PMBOK 7's 'system for value delivery' emphasise?", o: [
        ["Portfolios, programs, projects and operations creating value together", "Right. A project is one part of how an organisation creates value."],
        ["Scope, time and cost as the only real measures of project success", "Value is broader than the triple constraint."],
        ["A single standard process that every project in the organisation follows", "PMBOK 7 stresses tailoring, not one process."],
        ["A software tool for tracking value", "It's a way of thinking, not a tool."]],
        k: "Projects create value as part of a wider system." }
    ],
    flips: [
      { d: 3, f: "What changed between PMBOK 7 (2021) and PMBOK 8 (2025)?", b: "Twelve principles became six, and sustainability became a principle for the first time. Eight outcome-based performance domains became seven function-based ones, with 40 processes back inside them. Tailoring moved to its own section and risk became a domain. The development approach and life cycle moved into The Standard. The catalogue of models, methods and artifacts gave way to a large tools-and-techniques section, and new appendices cover AI and PMOs." }
    ]
  }

  ]
});
