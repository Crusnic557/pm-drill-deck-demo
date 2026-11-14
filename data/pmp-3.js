/* Course 6 · PMP-style scenarios. Part 3: the Business Environment domain (governance and ethics, compliance,
   change and issues, risk, organisational and external change). First option is correct; the app shuffles. */

PMQ.fig("escalation", `<svg viewBox="0 0 600 168" role="img" aria-label="An escalation ladder from the team to the steering group, with illustrative tolerances">
<defs><marker id="ah-pmesc" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<text class="t2" x="1" y="14">Illustrative tolerances: agree yours in governance</text>
<rect class="bx" x="1" y="124" width="146" height="40" rx="5"/><text class="tb" x="11" y="141">Team</text><text class="t2" x="11" y="156">solves it day to day</text>
<rect class="bx" x="151" y="86" width="146" height="40" rx="5"/><text class="tb" x="161" y="103">Project manager</text><text class="t2" x="161" y="118">within ±5% or 1 week</text>
<rect class="bx" x="301" y="48" width="146" height="40" rx="5"/><text class="tb" x="311" y="65">Sponsor</text><text class="t2" x="311" y="80">5–10%, up to 4 weeks</text>
<rect class="bx" x="451" y="10" width="146" height="40" rx="5"/><rect class="acc-s" x="451" y="10" width="146" height="40" rx="5"/><text class="tb" x="461" y="27">Steering group</text><text class="t2" x="461" y="42">beyond 10%, strategic</text>
<path class="s" d="M104 124 L148 106" marker-end="url(#ah-pmesc)"/><path class="s" d="M254 86 L298 68" marker-end="url(#ah-pmesc)"/><path class="s" d="M404 48 L448 30" marker-end="url(#ah-pmesc)"/>
</svg>`);

PMQ.fig("change-flow", `<svg viewBox="0 0 600 196" role="img" aria-label="Integrated change control in predictive work, and how agile handles change through the backlog">
<defs><marker id="ah-pmcf" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<text class="ta" x="1" y="16">Predictive</text>
<rect class="bx" x="1" y="24" width="88" height="48" rx="5"/><text class="tc" x="45" y="44" text-anchor="middle">Change</text><text class="tc" x="45" y="60" text-anchor="middle">request</text>
<rect class="bx" x="103" y="24" width="88" height="48" rx="5"/><text class="tc" x="147" y="44" text-anchor="middle">Analyse</text><text class="tc" x="147" y="60" text-anchor="middle">impact</text>
<rect class="bx" x="205" y="24" width="88" height="48" rx="5"/><rect class="acc-s" x="205" y="24" width="88" height="48" rx="5"/><text class="tc" x="249" y="44" text-anchor="middle">CCB</text><text class="tc" x="249" y="60" text-anchor="middle">decides</text>
<rect class="bx" x="307" y="24" width="88" height="48" rx="5"/><text class="tc" x="351" y="44" text-anchor="middle">Update</text><text class="tc" x="351" y="60" text-anchor="middle">baselines</text>
<rect class="bx" x="409" y="24" width="88" height="48" rx="5"/><text class="tc" x="453" y="44" text-anchor="middle">Implement</text><text class="tc" x="453" y="60" text-anchor="middle">it</text>
<rect class="bx" x="511" y="24" width="88" height="48" rx="5"/><text class="tc" x="555" y="44" text-anchor="middle">Tell</text><text class="tc" x="555" y="60" text-anchor="middle">everyone</text>
<path class="s" d="M89 48 H100" marker-end="url(#ah-pmcf)"/><path class="s" d="M191 48 H202" marker-end="url(#ah-pmcf)"/><path class="s" d="M293 48 H304" marker-end="url(#ah-pmcf)"/><path class="s" d="M395 48 H406" marker-end="url(#ah-pmcf)"/><path class="s" d="M497 48 H508" marker-end="url(#ah-pmcf)"/>
<text class="t2" x="249" y="88" text-anchor="middle">approve · reject · defer</text>
<text class="ta" x="1" y="118">Agile</text>
<rect class="bx" x="1" y="126" width="130" height="40" rx="5"/><text class="tc" x="66" y="150" text-anchor="middle">New request</text>
<rect class="bx" x="157" y="126" width="130" height="40" rx="5"/><text class="tc" x="222" y="150" text-anchor="middle">Product backlog</text>
<rect class="bx" x="313" y="126" width="130" height="40" rx="5"/><text class="tc" x="378" y="150" text-anchor="middle">PO reorders</text>
<rect class="bx" x="469" y="126" width="130" height="40" rx="5"/><text class="tc" x="534" y="150" text-anchor="middle">Next sprint</text>
<path class="s" d="M131 146 H154" marker-end="url(#ah-pmcf)"/><path class="s" d="M287 146 H310" marker-end="url(#ah-pmcf)"/><path class="s" d="M443 146 H466" marker-end="url(#ah-pmcf)"/>
<text class="t2" x="1" y="188">Either way: impact understood, decision recorded, people told.</text>
</svg>`);

PMQ.fig("pi-matrix", `<svg viewBox="0 0 600 222" role="img" aria-label="Probability and impact matrix with three risks"><rect class="soft" x="100" y="8" width="96" height="32" rx="3"/><rect class="soft" x="198" y="8" width="96" height="32" rx="3"/><rect class="acc" x="296" y="8" width="96" height="32" rx="3"/><rect class="acc" x="394" y="8" width="96" height="32" rx="3"/><rect class="acc" x="492" y="8" width="96" height="32" rx="3"/><rect class="bx" x="100" y="42" width="96" height="32" rx="3"/><rect class="soft" x="198" y="42" width="96" height="32" rx="3"/><rect class="acc" x="296" y="42" width="96" height="32" rx="3"/><rect class="acc" x="394" y="42" width="96" height="32" rx="3"/><rect class="acc" x="492" y="42" width="96" height="32" rx="3"/><rect class="bx" x="100" y="76" width="96" height="32" rx="3"/><rect class="soft" x="198" y="76" width="96" height="32" rx="3"/><rect class="soft" x="296" y="76" width="96" height="32" rx="3"/><rect class="acc" x="394" y="76" width="96" height="32" rx="3"/><rect class="acc" x="492" y="76" width="96" height="32" rx="3"/><rect class="bx" x="100" y="110" width="96" height="32" rx="3"/><rect class="bx" x="198" y="110" width="96" height="32" rx="3"/><rect class="soft" x="296" y="110" width="96" height="32" rx="3"/><rect class="soft" x="394" y="110" width="96" height="32" rx="3"/><rect class="soft" x="492" y="110" width="96" height="32" rx="3"/><rect class="bx" x="100" y="144" width="96" height="32" rx="3"/><rect class="bx" x="198" y="144" width="96" height="32" rx="3"/><rect class="bx" x="296" y="144" width="96" height="32" rx="3"/><rect class="bx" x="394" y="144" width="96" height="32" rx="3"/><rect class="soft" x="492" y="144" width="96" height="32" rx="3"/><text class="t2" x="94" y="28" text-anchor="end">very high</text><text class="t2" x="94" y="62" text-anchor="end">high</text><text class="t2" x="94" y="96" text-anchor="end">medium</text><text class="t2" x="94" y="130" text-anchor="end">low</text><text class="t2" x="94" y="164" text-anchor="end">very low</text><text class="t2" x="148" y="190" text-anchor="middle">very low</text><text class="t2" x="246" y="190" text-anchor="middle">low</text><text class="t2" x="344" y="190" text-anchor="middle">medium</text><text class="t2" x="442" y="190" text-anchor="middle">high</text><text class="t2" x="540" y="190" text-anchor="middle">very high</text><text class="tb" x="148" y="29" text-anchor="middle">R1</text><text class="tw" x="442" y="63" text-anchor="middle">R2</text><text class="tb" x="540" y="165" text-anchor="middle">R3</text><text class="t2" x="4" y="12">PROBABILITY ↑</text><text class="t2" x="590" y="208" text-anchor="end">IMPACT →</text><text class="t2" x="100" y="216">filled = high priority · tinted = medium · illustrative</text></svg>`);

PMQ.fig("risk-responses", `<svg viewBox="0 0 600 196" role="img" aria-label="Response strategies for threats and for opportunities">
<rect class="acc" x="1" y="8" width="294" height="26" rx="4"/><text class="tw" x="148" y="25" text-anchor="middle">THREATS</text>
<rect class="acc" x="305" y="8" width="294" height="26" rx="4"/><text class="tw" x="452" y="25" text-anchor="middle">OPPORTUNITIES</text>
<text class="tb" x="11" y="56">Escalate</text><text class="t2" x="95" y="56">outside the project's authority</text><text class="tb" x="315" y="56">Escalate</text><text class="t2" x="399" y="56">outside the project's authority</text>
<line class="s2" x1="1" x2="599" y1="68" y2="68"/>
<text class="tb" x="11" y="82">Avoid</text><text class="t2" x="95" y="82">change the plan to remove it</text><text class="tb" x="315" y="82">Exploit</text><text class="t2" x="399" y="82">make sure it happens</text>
<line class="s2" x1="1" x2="599" y1="94" y2="94"/>
<text class="tb" x="11" y="108">Transfer</text><text class="t2" x="95" y="108">shift impact to a third party</text><text class="tb" x="315" y="108">Share</text><text class="t2" x="399" y="108">partner to capture it</text>
<line class="s2" x1="1" x2="599" y1="120" y2="120"/>
<text class="tb" x="11" y="134">Mitigate</text><text class="t2" x="95" y="134">cut probability or impact</text><text class="tb" x="315" y="134">Enhance</text><text class="t2" x="399" y="134">raise probability or impact</text>
<line class="s2" x1="1" x2="599" y1="146" y2="146"/>
<text class="tb" x="11" y="160">Accept</text><text class="t2" x="95" y="160">contingency, or deal later</text><text class="tb" x="315" y="160">Accept</text><text class="t2" x="399" y="160">take it if it comes</text>
<text class="t" x="1" y="188">Every response needs an owner; watch for residual and secondary risks.</text>
</svg>`);

PMQ.course({
  id: "pmp",
  topics: [

  /* ---------------------------------------------------------------- 17 */
  {
    id: "governance",
    title: "Governance, escalation and ethics",
    summary: "Governance is the framework of structure, rules, procedures, reporting, ethics and policies within which a project is directed and controlled. It sets out who decides what: the sponsor (champions and funds the project and owns the business case), a steering committee or board (strategic decisions and priorities across projects), the PMO and the project manager. PMOs range from supportive (templates, training and advice; low control) through controlling (requires compliance with methods and reviews; moderate control) to directive (directly manages projects; high control). Define success metrics up front, and outline escalation paths with thresholds or tolerances, for example: the PM can approve variances up to 5% or one week, the sponsor up to 10%, and the board beyond that. Escalate when an issue exceeds your authority or tolerance, not as a first resort, and escalate with facts and options. Ethics run through all of it. PMI's code of ethics rests on four values: responsibility, respect, fairness and honesty. Disclose conflicts of interest, decline gifts that could influence (or appear to influence) decisions, report results truthfully, respect confidentiality and intellectual property, and raise unethical or illegal conduct through proper channels.",
    figs: ["escalation"],
    terms: [
      ["Project governance", "The framework of structure, rules, procedures, reporting, ethics and policies for directing and controlling a project.", "Thresholds that say who can approve which variances."],
      ["Escalation threshold", "A pre-agreed limit beyond which a decision or issue must go to a higher authority.", "A cost variance above 5% goes to the sponsor.", 0, "escalation"],
      ["PMO", "Project management office: a structure that standardises governance and supports, controls or directs projects.", "A controlling PMO that requires stage-gate reviews."],
      ["Conflict of interest (PMP)", "A situation where personal interests could influence, or appear to influence, professional decisions; it must be disclosed.", "Evaluating a tender from a company your cousin owns."]
    ],
    cards: [
      { d: 1, q: "Which type of PMO directly manages projects and has the highest control?", o: [
        ["Directive", "Correct. A directive PMO manages projects directly; supportive and controlling PMOs exert less control."],
        ["Controlling", "Requires compliance; moderate control."],
        ["Supportive", "Provides templates and advice; low control."],
        ["Consultative", "Not one of the standard three."]],
        k: "Supportive → controlling → directive." },
      { d: 1, q: "Which four values underpin PMI's Code of Ethics and Professional Conduct?", o: [
        ["Responsibility, respect, fairness and honesty", "Correct. PMI's code is built on responsibility, respect, fairness and honesty."],
        ["Transparency, accountability, value and trust", "Not the four."],
        ["Integrity, quality, loyalty and efficiency", "Good qualities, but not the four."],
        ["Honesty, courage, openness and focus", "Some overlap with Scrum's values, not PMI's code."]],
        k: "Responsibility, respect, fairness, honesty." },
      { d: 1, q: "When should a project manager escalate an issue?", af: "escalation", o: [
        ["When it exceeds their authority", "Correct. Or their agreed tolerance; escalate with facts and options."],
        ["As soon as anything goes wrong, to be safe", "Over-escalation erodes trust and authority."],
        ["Whenever a team member raises any concern", "Most concerns can be handled within the team."],
        ["Only at the end-of-phase review", "Too late."]],
        k: "Escalate at the threshold, not before." },
      { d: 2, q: "A forecast shows a 7% cost overrun. Your governance plan lets you approve variances up to 5%. What do you do?", o: [
        ["Escalate to the sponsor, with options", "Correct. It's beyond your tolerance, so bring analysis and options."],
        ["Approve it yourself, since it's close to 5%", "Beyond your authority."],
        ["Split it into two smaller changes under 5%", "Gaming thresholds is an ethics breach."],
        ["Wait to see whether the overrun grows", "Passive; escalate early with options."]],
        k: "Respect the thresholds." },
      { d: 2, q: "A supplier bidding for your contract offers you free tickets to a rugby test. What should you do?", o: [
        ["Decline it and tell your manager", "Correct. During a tender, a gift could influence you, or appear to."],
        ["Accept, but score their bid a little lower to compensate", "Still a conflict, and now an unfair evaluation."],
        ["Accept, since tickets are a normal courtesy", "Not from a current bidder."],
        ["Give the tickets to your team instead", "The gift still came from a bidder."]],
        k: "Gifts from bidders: decline and disclose." },
      { d: 2, q: "A team member asks you to report a test as passed because “it'll pass next week anyway”. What's your response?", o: [
        ["Report the true result and plan the retest", "Correct. Honest reporting is non-negotiable."],
        ["Report it as passed to save the milestone", "Dishonest reporting breaches the code of ethics."],
        ["Leave the test out of the report", "Omission is also misleading."],
        ["Ask the client whether they mind", "Truthful reporting isn't optional."]],
        k: "Report what's true, not what's hoped." },
      { d: 3, q: "You find your subcontractor is using unlicensed electricians on site. What's the best move?", o: [
        ["Stop that work and report it properly", "Correct. Safety and legality first, through the proper channels."],
        ["Quietly ask them to fix it before the inspection", "Hiding a legal and safety breach."],
        ["Let it continue to protect the schedule", "Safety and legality come first."],
        ["Terminate the subcontractor on the spot", "May follow, but through the contract and process."]],
        k: "Illegal and unsafe: stop and report." },
      { d: 3, q: "At kick-off, the sponsor asks how success will be judged. What should be in place?", o: [
        ["Agreed success metrics, with targets and owners", "Correct. Including value and benefits, not just time and cost."],
        ["Delivery on time and on budget, nothing else needed", "Value and benefits matter too."],
        ["Whatever the client says at the end", "Too late and too vague."],
        ["The team's satisfaction survey", "One measure, not the full set."]],
        k: "Define success before you start." }
    ],
    flips: [
      { d: 2, f: "Supportive, controlling and directive PMOs.", b: "Supportive: provides templates, training and lessons learned; low control. Controlling: requires compliance with methods, templates and reviews; moderate control. Directive: directly manages projects and project managers; high control." }
    ]
  },

  /* ---------------------------------------------------------------- 18 */
  {
    id: "compliance",
    title: "Compliance and sustainability",
    summary: "Confirm the project's compliance requirements early: health and safety, security and privacy, environmental and sustainability obligations, industry regulations and standards, contracts and internal policy. Classify them, identify what could threaten compliance (time pressure, unclear responsibility, subcontractors, design changes), and analyse the consequences of non-compliance: fines, stop-work orders, rework, refused sign-off, reputational damage and harm to people. Build compliance into the plan with owners, checklists, inspections, audits, approvals and evidence, and measure how compliant the project is as you go, not only at the end. In New Zealand, for example, the Health and Safety at Work Act 2015 gives the business (the PCBU) the primary duty of care, and buildings with specified systems, such as fire alarms, sprinklers and emergency lighting, have a compliance schedule, with the owner supplying an annual building warrant of fitness backed by independent qualified persons. Sustainability is now explicit in the exam outline: treat it as a requirement (energy, materials, waste, emissions), as a quality criterion and as a risk.",
    terms: [
      ["Compliance requirement", "A legal, regulatory, contractual or policy obligation the project must meet.", "A fire alarm installed to the relevant standard and consent."],
      ["PCBU", "Person conducting a business or undertaking: under NZ's Health and Safety at Work Act 2015, the party with the primary duty of care.", "The contractor running the site.", 1],
      ["Compliance schedule (NZ)", "A council-issued document listing a building's specified systems, such as fire alarms and sprinklers, and how they must be inspected and maintained.", "Sprinklers, emergency lighting and lifts in a campus building.", 1],
      ["Building warrant of fitness (NZ)", "An owner's annual statement that a building's specified systems have been inspected and maintained, backed by independent qualified persons.", "A shopping centre's yearly BWoF for its fire systems.", 1]
    ],
    cards: [
      { d: 1, q: "What's the best time to confirm a project's compliance requirements?", o: [
        ["Early in planning, and kept current", "Correct. Design compliance in rather than inspect it in."],
        ["After the first non-compliance has been found on site", "Reactive and costly."],
        ["Just before the final inspection", "Too late to design them in."],
        ["Only when an auditor asks", "Reactive and risky."]],
        k: "Compliance starts in planning." },
      { d: 1, q: "Which is a likely consequence of non-compliance on a building services project?", o: [
        ["Refused sign-off and costly rework", "Correct. Plus possible fines and harm to people."],
        ["An automatic contract extension", "Not automatic."],
        ["Lower insurance premiums", "Unlikely."],
        ["A faster handover", "The opposite."]],
        k: "Non-compliance costs time, money and trust." },
      { d: 2, q: "A design change moves a smoke detector, and the installer says “it's close enough”. What's the best move?", o: [
        ["Check it against the standard and consent", "Correct. Close enough isn't a compliance test."],
        ["Ask the client to accept the risk in writing", "The client can't waive a legal requirement."],
        ["Leave it for the final inspection to catch", "Late discovery means costly rework."],
        ["Accept it; the installer is experienced", "Experience doesn't replace compliance checks."]],
        k: "Verify, don't assume." },
      { d: 2, q: "Your agile team wants to use real customer data in a test environment to speed up testing. What should you do first?", o: [
        ["Check privacy and security requirements before using it", "Correct. Then find a compliant approach, such as masked data."],
        ["Ask the team to copy the data quickly before anyone objects", "Deliberate non-compliance."],
        ["Refuse any testing until the end of the project", "Overreaction; find a compliant approach."],
        ["Allow it, since it's only for testing", "Privacy obligations still apply."]],
        k: "Test data is still personal data." },
      { d: 2, x: 1, q: "Under New Zealand's Health and Safety at Work Act 2015, who holds the primary duty of care?", o: [
        ["The PCBU: the business or undertaking", "Correct. Officers, workers and others have duties too."],
        ["The most senior person on site", "The duty isn't about who's present."],
        ["Only the workers on site", "Workers have duties, but not the primary one."],
        ["WorkSafe inspectors", "The regulator enforces; it doesn't hold the duty."]],
        k: "PCBU = primary duty of care." },
      { d: 3, q: "A client asks you to skip the fire alarm's commissioning tests so the shop can open on time. What's the best response?", o: [
        ["Keep the tests in the plan", "Correct. Explain the consequences, then look for other ways to protect the date."],
        ["Ask the installer to sign them off without testing", "Falsification."],
        ["Run half the tests to save time", "Partial testing is non-compliance."],
        ["Skip them; the client is paying", "The client can't waive safety requirements."]],
        k: "Safety tests aren't optional." },
      { d: 3, q: "Sustainability is a stated requirement for a campus building upgrade. How should it show up in your project?", o: [
        ["As measurable requirements, quality criteria and risks", "Correct. Planned, measured and managed like any other requirement."],
        ["As the contractor's responsibility, not the project's", "Shared, but the project must plan for it."],
        ["Only as a marketing message at launch", "A greenwashing risk."],
        ["As a paragraph in the closure report", "Too late to influence anything."]],
        k: "Make sustainability measurable." },
      { d: 1, x: 1, q: "In New Zealand building work, what is a compliance schedule?", o: [
        ["The list of specified systems and their inspections", "Correct. Fire alarms, sprinklers, emergency lighting, lifts and so on."],
        ["The project's timeline for building consent milestones", "Not a schedule of dates."],
        ["A list of fines for non-compliance", "No."],
        ["A contractor's payment schedule", "No."]],
        k: "Compliance schedule = specified systems + their regime." }
    ],
    flips: [
      { d: 2, f: "Steps to plan and manage compliance.", b: "Confirm the requirements (safety, security, privacy, environmental, regulatory, contractual); classify them; identify threats to compliance; analyse the consequences of non-compliance; build controls into the plan (owners, checklists, inspections, audits, evidence); measure compliance as you go; act on gaps early." }
    ]
  },

  /* ---------------------------------------------------------------- 19 */
  {
    id: "change-issues",
    title: "Change control, issues and impediments",
    summary: "In predictive work, a change control process protects the baselines. Anyone can request a change; the project manager and team analyse its impact on scope, schedule, cost, quality, risk and benefits; the change control board or an authorised person approves, rejects or defers it; approved changes update the baselines, plans and documents; the team implements them; and everyone affected hears the outcome. Communicate the status of proposed changes, not just the decisions. In agile, change is expected: new requests go into the product backlog and the product owner reprioritises, while changes to the current sprint goal are rare. An issue is something happening now that needs action; a risk is something that might happen. When an identified risk occurs, it becomes an issue: carry out the planned response, log it in the issue log with an owner and due date, and update the risk register. Unplanned problems need a workaround. Impediments are anything blocking the team: assess their impact, prioritise and make them visible, remove them (or escalate those outside your control), and keep checking that blockers are actually being cleared. Work with the relevant stakeholders on how to resolve issues.",
    figs: ["change-flow"],
    terms: [
      ["Change control board (CCB)", "A group with authority to approve, reject or defer change requests.", "Sponsor, client representative and lead engineer meeting fortnightly.", 0, "change-flow"],
      ["Issue log", "A record of current issues with owners, actions and due dates.", "“Test server down: owner Raj, fix by Friday.”"],
      ["Workaround", "An unplanned response to a problem that wasn't identified as a risk.", "Borrowing a test rig from another site."],
      ["Impediment", "Anything that blocks or slows the team's progress.", "A missing site-access card."]
    ],
    cards: [
      { d: 1, q: "In predictive work, what's the first step after a change request is submitted?", af: "change-flow", o: [
        ["Analyse its impact on the project", "Correct. The decision-makers need the impact before they decide."],
        ["Send it straight to the change board", "The board needs an impact analysis first."],
        ["Implement it if it's small", "Unapproved work bypasses control."],
        ["Update the baselines", "Only after approval."]],
        k: "Analyse before anyone decides." },
      { d: 1, q: "On an agile project, where do new feature requests usually go?", o: [
        ["Into the product backlog", "Correct. The product owner prioritises it."],
        ["To a formal change control board for written approval", "Agile handles change through the backlog."],
        ["Straight into the current sprint", "Disrupts the sprint goal."],
        ["Into the risk register", "A request isn't a risk."]],
        k: "Agile change → backlog." },
      { d: 1, q: "What's the difference between a risk and an issue?", o: [
        ["Risks might happen; issues are happening", "Correct. A risk is uncertain and in the future; an issue has already happened and needs action now."],
        ["Issues are risks that were never identified", "Identified risks can become issues too."],
        ["Risks are financial; issues are technical", "Not the difference."],
        ["A risk is minor; an issue is major", "Size isn't the difference."]],
        k: "Risk = might. Issue = is." },
      { d: 2, q: "A planned risk occurs: the crane supplier cancels. The risk register includes a contingency plan with a backup supplier. What do you do?", o: [
        ["Execute the contingency plan and log the issue", "Correct. Then update the risk register."],
        ["Escalate to the sponsor to decide what to do", "The response is already planned and within your authority."],
        ["Wait for the original supplier to reconsider", "Passive."],
        ["Create a new risk response from scratch", "You already have one."]],
        k: "Risk occurs → run the plan." },
      { d: 2, q: "The CCB approves a change to add two sensors per floor. What's next?", o: [
        ["Update baselines and plans, implement, communicate", "Correct. Update the baselines and plans, implement the change, and tell the stakeholders affected."],
        ["Record it in the lessons learned register", "Maybe later, but not the next step."],
        ["Ask the client to confirm their approval once more", "Already approved."],
        ["Start installing now; the documentation can wait", "Baselines must reflect approved changes."]],
        k: "Approved → update → implement → tell." },
      { d: 2, q: "During a stand-up, a developer says a test server has been down for two days and they're blocked. As a servant leader, what's your move?", o: [
        ["Get the server fixed today", "Correct. Removing impediments is the leader's job."],
        ["Ask another developer to share their server for a while", "A workaround may help, but the blocker still needs removing."],
        ["Ask them to raise a ticket and wait", "They've already lost two days."],
        ["Note it for the retrospective", "Too slow."]],
        k: "Impediments get removed, not noted." },
      { d: 3, q: "A stakeholder emails your lead engineer directly asking for a “small” change, and the engineer has already started it. What should you do?", o: [
        ["Pause it and route it through change control", "Correct. Then coach the team on how requests should flow."],
        ["Discipline the engineer for taking the request", "Coach, don't punish; fix the process."],
        ["Ask the stakeholder to stop emailing the team", "Talking is fine; the change needs control."],
        ["Let it continue, since the stakeholder asked", "Bypasses control."]],
        k: "Side-door requests go through the front door." },
      { d: 3, q: "An issue has sat in the issue log for three weeks with no progress. What's most likely missing?", o: [
        ["A clear owner and a due date", "Correct. Unowned issues drift."],
        ["A copy in the lessons learned register", "Not yet."],
        ["A longer description of the issue", "Description isn't the blocker."],
        ["A higher risk score", "Issues aren't scored like risks."]],
        k: "Every issue needs an owner and a date." },
      { d: 2, q: "A problem nobody identified as a risk arises, and there's no planned response. What's the unplanned response called?", o: [
        ["A workaround", "Correct. A workaround is an unplanned response to a problem that wasn't identified as a risk."],
        ["A contingency plan", "Planned in advance for identified risks."],
        ["A fallback plan", "Planned in case the contingency fails."],
        ["A risk transfer", "A planned response strategy."]],
        k: "Unplanned response = workaround." }
    ],
    flips: [
      { d: 2, f: "Walk through integrated change control.", bf: "change-flow", b: "1 A change request is raised. 2 Analyse its impact on scope, schedule, cost, quality, risk and benefits. 3 The change control board (or an authorised person) approves, rejects or defers it. 4 If approved, update the baselines, plans and documents. 5 Implement it. 6 Tell everyone affected. In agile, requests go into the backlog and the product owner reprioritises." }
    ]
  },

  /* ---------------------------------------------------------------- 20 */
  {
    id: "risk-analysis",
    title: "Identifying and analysing risk",
    summary: "Risk management starts with a plan: the method, roles, budget and timing for risk work, risk categories (often a risk breakdown structure), the organisation's risk appetite and thresholds, and definitions of probability and impact. Identify risks continually, with the team and stakeholders: brainstorming, checklists, assumption analysis, interviews, SWOT, lessons learned and pre-mortems. Write each risk as cause, risk and effect so it can be managed, and record it in the risk register with an owner. Qualitative analysis prioritises risks by probability and impact (a probability-impact matrix) and factors like urgency. Quantitative analysis puts numbers on overall project risk: expected monetary value (probability × impact), decision trees, Monte Carlo simulation of schedule and cost, and sensitivity (tornado) diagrams. Risks include opportunities as well as threats, and the outline calls out security and sustainability risks specifically. Monitor risks throughout: watch for triggers, reassess, close risks that have passed, and keep stakeholders informed of the project's risk exposure.",
    figs: ["pi-matrix"],
    terms: [
      ["Risk register", "The record of identified risks with their causes, effects, probability, impact, owners and responses.", "“Imported panels may be delayed by shipping; owner: procurement lead.”"],
      ["Probability-impact matrix", "A grid that ranks risks by combining probability and impact ratings.", "A high-probability, high-impact risk ranked first.", 0, "pi-matrix"],
      ["Expected monetary value (EMV)", "Probability × impact, used to compare risks or options in money terms.", "20% × $50,000 = $10,000."],
      ["Monte Carlo simulation", "Running a model thousands of times with varied inputs to see the spread of possible outcomes.", "An 80% chance of finishing by 30 June."],
      ["Risk appetite", "How much uncertainty an organisation is willing to accept in pursuit of its goals.", "A hospital accepting little risk to patient safety systems."]
    ],
    cards: [
      { d: 1, q: "What does qualitative risk analysis mainly do?", o: [
        ["Rank risks by probability and impact", "Correct. Qualitative analysis prioritises risks by probability and impact; quantitative analysis puts numbers on them."],
        ["Calculate the project's overall chance of finishing on time", "That's quantitative, such as Monte Carlo."],
        ["Assign a dollar value to every risk", "That's quantitative."],
        ["Decide the response for each risk", "That's response planning."]],
        k: "Qualitative ranks; quantitative quantifies." },
      { d: 1, q: "A risk has a 20% probability and a $50,000 impact. What's its expected monetary value?", o: [
        ["$10,000", "Correct. EMV = probability × impact = 0.2 × $50,000 = $10,000."],
        ["$250,000", "Multiply, don't divide: 0.2 × $50,000."],
        ["$40,000", "That's the impact minus 20%."],
        ["$50,000", "That ignores probability."]],
        k: "EMV = probability × impact." },
      { d: 1, q: "Which is the best-written risk statement?", o: [
        ["Because the panels are imported, shipping delays may push back commissioning", "Correct. Cause, risk and effect are all clear."],
        ["Commissioning could be delayed by various factors outside our control", "Too vague to manage."],
        ["The panels might be late, which would be bad for the project overall", "Missing the cause; vague effect."],
        ["Shipping is a risk", "A category, not a risk."]],
        k: "Cause → risk → effect." },
      { d: 2, q: "Look at the probability-impact matrix. Which risk should get attention first?", fig: "pi-matrix", o: [
        ["R2: high probability, high impact", "Correct. It's in the highest-priority zone."],
        ["All three equally, since each is on the register", "Prioritising is the point."],
        ["R1: very high probability, very low impact", "Likely, but minor."],
        ["R3: very low probability, very high impact", "Severe but unlikely; watch it, but R2 ranks higher."]],
        k: "Prioritise by combined probability and impact." },
      { d: 2, q: "Which technique simulates thousands of possible schedule outcomes to estimate the chance of finishing by a date?", o: [
        ["Monte Carlo simulation", "Correct. It runs the schedule thousands of times with varied durations, giving the probability of finishing by each date."],
        ["Probability-impact matrix", "A qualitative ranking."],
        ["Decision tree analysis", "Compares choices using EMV."],
        ["Tornado diagram", "Shows which risks have the most influence."]],
        k: "Monte Carlo = many simulated runs." },
      { d: 2, q: "Supplier A costs $100k with a 10% chance of a $50k delay penalty; supplier B costs $108k with no penalty risk. Using EMV, which is cheaper?", o: [
        ["A: $105k expected, versus $108k for B", "Correct. $100k + 0.1 × $50k = $105k."],
        ["A: $100k; the penalty may not happen", "Ignoring the risk understates A's cost."],
        ["B: $108k, versus $150k for A", "That assumes the penalty is certain."],
        ["They're equal at $108k", "Recalculate A: $100k + 0.1 × $50k."]],
        k: "Add the EMV of risks to compare options." },
      { d: 3, q: "Your risk workshop only included the project team. What's the biggest gap?", o: [
        ["Stakeholders' and specialists' views on risk", "Correct. They see risks the team can't."],
        ["There's no gap if the team is experienced", "Experience can't see everything."],
        ["It should have been run by the sponsor", "Who runs it matters less than who's in it."],
        ["The workshop should have been longer", "Length isn't the issue."]],
        k: "Many eyes find more risks." },
      { d: 3, q: "A cloud vendor that stores your building access logs has had a data breach on another client's system. Where does this belong first?", o: [
        ["The risk register, owned and analysed", "Correct. For your project, it's a credible threat."],
        ["In the issue log, since it already happened", "It happened elsewhere; for you, it's a risk."],
        ["In the lessons learned register", "Not a lesson yet."],
        ["Nowhere; it wasn't our system", "It's a credible threat to you."]],
        k: "Someone else's incident is your risk." }
    ],
    flips: [
      { d: 2, f: "Qualitative versus quantitative risk analysis.", b: "Qualitative: ranks individual risks by probability and impact (plus urgency and other factors) to focus attention; quick, and used on most projects. Quantitative: models the combined effect of risks on project outcomes with numbers (EMV, decision trees, Monte Carlo, sensitivity analysis); used where the precision justifies the effort." }
    ]
  },

  /* ---------------------------------------------------------------- 21 */
  {
    id: "risk-response",
    title: "Risk responses and control",
    summary: "Choose responses that fit each risk's priority and the organisation's appetite. For threats: escalate (when it's outside the project's authority, to the right level), avoid (change the plan to remove the threat), transfer (shift the impact and ownership to a third party, such as insurance, warranties or a fixed-price contract), mitigate (reduce probability or impact), or accept (actively, with a contingency reserve or plan, or passively, dealing with it if it happens). For opportunities: escalate, exploit (make sure it happens), share (partner with someone better placed to capture it), enhance (increase its probability or impact), or accept. Give each response an owner. Contingency plans are triggered by defined warning signs; fallback plans are used if the contingency doesn't work. Responses can leave residual risk (what remains) and create secondary risks (new risks caused by the response). Carry out the agreed responses, watch the triggers, run risk reviews and audits, update the register, and keep stakeholders informed of the project's risk exposure.",
    figs: ["risk-responses"],
    terms: [
      ["Risk transfer", "Shifting a threat's impact and ownership to a third party, such as through insurance or a fixed-price contract.", "Insuring panels in transit.", 0, "risk-responses"],
      ["Exploit (opportunity)", "Acting to make sure an opportunity happens.", "Assigning your best engineer so an early-finish bonus is certain."],
      ["Contingency plan (PMP)", "A planned response carried out if a specific trigger occurs.", "Hire the backup crane if the first supplier misses two dates."],
      ["Fallback plan", "A backup plan used if the contingency plan doesn't work.", "Use a mobile hoist if no crane is available."],
      ["Residual risk", "The risk remaining after responses have been put in place.", "A 5% chance of delay after mitigation."],
      ["Secondary risk", "A new risk created by implementing a risk response.", "A backup supplier whose quality is unproven."],
      ["Risk trigger", "A warning sign that a risk is about to occur, or has occurred.", "A supplier's second missed delivery date."]
    ],
    cards: [
      { d: 1, q: "Buying insurance against equipment damage in transit is which threat response?", af: "risk-responses", o: [
        ["Transfer", "Correct. The financial impact shifts to the insurer."],
        ["Mitigate", "Reduces probability or impact; insurance shifts the financial impact."],
        ["Accept", "Takes no action beyond planning."],
        ["Avoid", "Removes the threat entirely."]],
        k: "Insurance = transfer." },
      { d: 1, q: "Which response to an opportunity aims to make sure it definitely happens?", o: [
        ["Exploit", "Correct. Exploiting an opportunity aims to make it certain to happen."],
        ["Enhance", "Raises probability or impact, without guaranteeing it."],
        ["Accept", "Takes advantage if it happens, without pursuing it."],
        ["Share", "Partners with a third party."]],
        k: "Exploit = make it certain." },
      { d: 1, q: "What's a secondary risk?", o: [
        ["A new risk caused by a risk response", "Correct. A secondary risk is a new risk created by carrying out a risk response."],
        ["A low-priority risk on a watch list", "That's a watch-list item."],
        ["The risk left over after a response", "That's residual risk."],
        ["A risk owned by a second person", "Not the term."]],
        k: "Secondary risks come from responses." },
      { d: 2, q: "A threat of flooding in the plant room can be removed by relocating the BMS panels upstairs. Which response is that?", o: [
        ["Avoid", "Correct. The threat is eliminated."],
        ["Transfer", "No third party is involved."],
        ["Mitigate", "Mitigation reduces the threat; relocating removes it."],
        ["Accept", "You're acting, not accepting."]],
        k: "Remove the threat = avoid." },
      { d: 2, q: "Your firm can't win a large contract alone, so it forms a joint venture with a specialist partner. Which opportunity response is this?", o: [
        ["Share", "Correct. A partner better placed to capture it."],
        ["Escalate", "Hands it to a higher authority."],
        ["Exploit", "Exploiting makes it certain yourself."],
        ["Enhance", "Raises probability or impact; partnering is sharing."]],
        k: "Partnering = share." },
      { d: 2, q: "A risk's trigger appears: the steel supplier misses its second delivery date. What should happen?", o: [
        ["Owner activates the contingency", "Correct. The trigger is the signal to act."],
        ["Wait for a third missed date to be sure", "The trigger is the signal."],
        ["Remove the risk from the register", "It's now active."],
        ["Start looking for a response", "It should be planned already."]],
        k: "Trigger → owner acts." },
      { d: 3, q: "A contingency plan to hire a backup crane fails because no cranes are available. What do you use next?", o: [
        ["The fallback plan", "Correct. It exists for when the contingency doesn't work."],
        ["The management reserve", "Money doesn't produce a crane."],
        ["The transfer strategy", "Not the next step."],
        ["A new risk register", "Not a response."]],
        k: "Contingency fails → fallback." },
      { d: 3, q: "A citywide fuel shortage threatens the project, and addressing it is beyond the project's authority. What's the best response?", o: [
        ["Escalate to whoever owns that risk", "Correct. Escalation suits threats outside the project's authority."],
        ["Mitigate it by buying fuel in bulk for the city", "Outside your project's control."],
        ["Accept it passively and hope it passes", "Escalation is the better fit."],
        ["Avoid it by cancelling the project", "Overreaction."]],
        k: "Outside your authority → escalate." },
      { d: 2, q: "After mitigation, a 5% chance of delay remains. What's this called?", o: [
        ["Residual risk", "Correct. Residual risk is what remains after the planned responses are in place."],
        ["Contingent risk", "Not the standard term."],
        ["Secondary risk", "A new risk caused by the response."],
        ["Inherent risk", "The risk before any response."]],
        k: "Residual = what's left." }
    ],
    flips: [
      { d: 2, f: "The response strategies for threats and for opportunities.", bf: "risk-responses", b: "Threats: escalate, avoid, transfer, mitigate, accept (actively with a contingency, or passively). Opportunities: escalate, exploit, share, enhance, accept. Each response gets an owner; contingency plans need triggers; check for residual and secondary risks." }
    ]
  },

  /* ---------------------------------------------------------------- 22 */
  {
    id: "org-external",
    title: "Organisational change and the external environment",
    summary: "Projects live inside organisations that are changing too. Assess the organisational culture early (how decisions really get made, the appetite for risk and change, how failure is treated, the history of similar changes) and tailor your approach to it. When the organisation changes during the project (a restructure, a merger, new leadership, a shift in strategy), evaluate the impact on the project's objectives, stakeholders, resources and business case, and decide the required actions with the sponsor: adapt, rebaseline, pause or close. Projects that change how people work also need people-focused change management; models such as ADKAR (awareness, desire, knowledge, ability, reinforcement) or Kotter's steps help build the case, the sponsorship and the momentum. Keep watching the external business environment: regulations, technology, geopolitics, markets, the economy and the climate. A PESTLE scan covers political, economic, social, technological, legal and environmental factors. Assess and prioritise the impact on scope or the backlog, then act through change control or backlog reprioritisation.",
    terms: [
      ["PESTLE", "A scan of political, economic, social, technological, legal and environmental factors that could affect a project.", "A new energy-efficiency regulation (legal and environmental)."],
      ["ADKAR", "A change model: awareness, desire, knowledge, ability, reinforcement.", "Explaining why a new ordering system matters before training staff on it."],
      ["Organisational culture", "The shared values, beliefs and habits that shape how an organisation works and decides.", "A hierarchy where staff rarely challenge managers."]
    ],
    cards: [
      { d: 1, q: "What does PESTLE stand for?", o: [
        ["Political, economic, social, technological, legal, environmental", "Correct. Political, economic, social, technological, legal and environmental factors in the external environment."],
        ["People, environment, safety, technology, logistics, ethics", "Close-sounding, but not it."],
        ["Political, ethical, strategic, technical, legal, economic", "Several wrong letters."],
        ["Planning, execution, scope, time, lessons, evaluation", "Not it."]],
        k: "P-E-S-T-L-E." },
      { d: 1, q: "In the ADKAR change model, what does the first A stand for?", o: [
        ["Awareness of the need for change", "Correct. Then desire, knowledge, ability and reinforcement."],
        ["Agreement from senior management", "Not in the model."],
        ["Assessment of the current state", "Not in the model."],
        ["Ability to do the new work", "That's the second A."]],
        k: "Awareness comes first." },
      { d: 2, q: "Your client merges with a competitor mid-project, and the new leadership is reviewing all IT investments. What's your best move?", o: [
        ["Assess the impact and plan actions with the sponsor", "Correct. The business case may have changed."],
        ["Carry on until someone formally tells you to stop", "Passive; the business case may have changed."],
        ["Stop all work until the merger is complete", "Premature; assess first."],
        ["Speed up to finish before the review", "Racing a review is risky and can waste money."]],
        k: "Organisational change → reassess the business case." },
      { d: 2, q: "A new energy-efficiency regulation takes effect three months before your planned handover. What should you do?", o: [
        ["Assess the impact; use change control", "Correct. Assess how the regulation affects the design and handover, then take the changes through change control."],
        ["Ignore it; the design was approved before the change", "The building must comply when it's handed over."],
        ["Redesign everything immediately to comply", "Assess first, then use change control."],
        ["Ask the client to lobby for an exemption", "Not your role, and unlikely."]],
        k: "External change → impact → change control." },
      { d: 2, q: "An agile team building a store-ordering app learns that a major supplier is moving to a new ordering portal next quarter. What's the best move?", o: [
        ["Assess the impact and reprioritise the backlog", "Correct. Assess the impact and reprioritise the backlog, so the team works on what the change makes most important."],
        ["Rewrite the whole app for the new portal now", "Assess before reacting."],
        ["Finish the current backlog first, then look", "Late adaptation wastes work."],
        ["Ignore it; the supplier may change its mind", "Hope isn't a plan."]],
        k: "Agile absorbs external change through the backlog." },
      { d: 3, q: "In a hierarchical culture where staff rarely challenge managers, your agile team struggles to raise problems in retrospectives. What's the best approach?", o: [
        ["Adapt practices, like anonymous input", "Correct. Tailor to the culture while building trust."],
        ["Insist everyone speaks up, as agile requires", "Ignores the culture."],
        ["Drop retrospectives, since they don't fit", "Loses improvement."],
        ["Have managers run the retrospectives", "Reinforces the hierarchy problem."]],
        k: "Tailor to the culture you have." },
      { d: 3, q: "A global chip shortage threatens deliveries of BMS controllers for your next three projects. What's the best response at project level?", o: [
        ["Update risks and inform governance", "Correct. And explore alternatives, such as other approved controllers."],
        ["Buy every controller available, whatever the cost", "Uncontrolled spend."],
        ["Change to a different brand without approval", "Bypasses change control."],
        ["Do nothing until a delivery is actually late", "Passive."]],
        k: "External shocks: risk, options, governance." },
      { d: 2, q: "What's the project manager's role when a project changes how staff do their daily jobs?", o: [
        ["Plan the people side of the change too", "Correct. Readiness, training and support drive adoption, and benefits."],
        ["Deliver the system; adoption is HR's problem", "Benefits depend on adoption."],
        ["Mandate the change and monitor compliance", "Forcing change breeds resistance."],
        ["Wait for users to ask for training", "Reactive."]],
        k: "Benefits need adoption." }
    ],
    flips: [
      { d: 2, f: "PESTLE: what does each letter prompt you to check?", b: "Political (government priorities, elections), Economic (inflation, exchange rates, funding), Social (demographics, attitudes), Technological (new platforms, obsolescence, cyber), Legal (regulations, standards), Environmental (climate, sustainability rules, weather)." }
    ]
  }

  ]
});
