/* Course 2 · Waterfall, Agile & Blended Delivery — from LinkedIn Learning “Blending Project Management Methods”. Part 1: topics 1–6.
   Same card format as the agile files: first option is correct, the app shuffles. */

PMQ.fig("wf-phases", `<svg viewBox="0 0 600 232" role="img" aria-label="The five waterfall phases, with monitoring and controlling running alongside executing">
<defs><marker id="ah-wf" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<rect class="bx" x="10" y="8" width="140" height="40" rx="6"/><text class="tb" x="80" y="25" text-anchor="middle">Initiating</text><text class="t2" x="80" y="40" text-anchor="middle">authority + budget</text>
<rect class="bx" x="120" y="56" width="140" height="40" rx="6"/><text class="tb" x="190" y="73" text-anchor="middle">Planning</text><text class="t2" x="190" y="88" text-anchor="middle">scope, schedule, risk</text>
<rect class="bx" x="230" y="104" width="180" height="40" rx="6"/><text class="tb" x="320" y="121" text-anchor="middle">Executing</text><text class="t2" x="320" y="136" text-anchor="middle">follow the plans</text>
<rect class="soft" x="230" y="150" width="180" height="28" rx="6"/><text class="t" x="320" y="168" text-anchor="middle">Monitoring + controlling</text>
<text class="t2" x="418" y="168">alongside executing</text>
<rect class="bx" x="440" y="184" width="140" height="40" rx="6"/><text class="tb" x="510" y="201" text-anchor="middle">Closing</text><text class="t2" x="510" y="216" text-anchor="middle">handover, sign-off</text>
<path class="s" d="M80 48 V76 H116" marker-end="url(#ah-wf)"/>
<path class="s" d="M190 96 V124 H226" marker-end="url(#ah-wf)"/>
<path class="s" d="M410 124 H560 V180" marker-end="url(#ah-wf)"/>
</svg>`);

PMQ.fig("triangles", `<svg viewBox="0 0 600 232" role="img" aria-label="Waterfall fixes scope and estimates time and cost; agile fixes time and cost and estimates scope">
<text class="t2" x="20" y="20">WATERFALL · PLAN-DRIVEN</text><text class="t2" x="330" y="20">AGILE · VALUE-DRIVEN</text>
<path class="s" d="M150 56 L60 186 L240 186 Z"/>
<circle class="acc" cx="150" cy="56" r="7"/><circle class="bx" cx="60" cy="186" r="7"/><circle class="bx" cx="240" cy="186" r="7"/>
<text class="ta" x="150" y="42" text-anchor="middle">SCOPE · fixed</text>
<text class="t2" x="60" y="210" text-anchor="middle">TIME · estimated</text><text class="t2" x="240" y="210" text-anchor="middle">COST · estimated</text>
<path class="s" d="M360 62 L540 62 L450 192 Z"/>
<circle class="acc" cx="360" cy="62" r="7"/><circle class="acc" cx="540" cy="62" r="7"/><circle class="bx" cx="450" cy="192" r="7"/>
<text class="ta" x="360" y="46" text-anchor="middle">TIME · fixed</text><text class="ta" x="540" y="46" text-anchor="middle">COST · fixed</text>
<text class="t2" x="450" y="216" text-anchor="middle">SCOPE · estimated</text>
</svg>`);

PMQ.fig("gantt", `<svg viewBox="0 0 600 206" role="img" aria-label="A Gantt chart for painting a room, with each task depending on the one before">
<defs><marker id="ah-gt" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<text class="t2" x="186" y="22" text-anchor="middle">D1</text><text class="t2" x="239" y="22" text-anchor="middle">D2</text><text class="t2" x="291" y="22" text-anchor="middle">D3</text><text class="t2" x="344" y="22" text-anchor="middle">D4</text>
<text class="t2" x="396" y="22" text-anchor="middle">D5</text><text class="t2" x="449" y="22" text-anchor="middle">D6</text><text class="t2" x="501" y="22" text-anchor="middle">D7</text><text class="t2" x="554" y="22" text-anchor="middle">D8</text>
<line class="s2" x1="160" x2="160" y1="30" y2="198"/><line class="s2" x1="212" x2="212" y1="30" y2="198"/><line class="s2" x1="265" x2="265" y1="30" y2="198"/><line class="s2" x1="317" x2="317" y1="30" y2="198"/>
<line class="s2" x1="370" x2="370" y1="30" y2="198"/><line class="s2" x1="422" x2="422" y1="30" y2="198"/><line class="s2" x1="475" x2="475" y1="30" y2="198"/><line class="s2" x1="527" x2="527" y1="30" y2="198"/><line class="s2" x1="580" x2="580" y1="30" y2="198"/>
<text class="t" x="10" y="53">Move furniture</text><rect class="acc" x="161" y="40" width="50" height="18" rx="3"/>
<text class="t" x="10" y="81">Tape the edges</text><rect class="acc" x="213" y="68" width="51" height="18" rx="3"/>
<text class="t" x="10" y="109">Prime walls</text><rect class="acc" x="266" y="96" width="50" height="18" rx="3"/>
<text class="t" x="10" y="137">Paint walls</text><rect class="acc" x="318" y="124" width="103" height="18" rx="3"/>
<text class="t" x="10" y="165">Remove tape</text><rect class="acc" x="423" y="152" width="51" height="18" rx="3"/>
<text class="t" x="10" y="193">Replace furniture</text><rect class="acc" x="476" y="180" width="50" height="18" rx="3"/>
<path class="s" d="M204 58 V77 H209" marker-end="url(#ah-gt)"/><path class="s" d="M256 86 V105 H262" marker-end="url(#ah-gt)"/>
<path class="s" d="M308 114 V133 H314" marker-end="url(#ah-gt)"/><path class="s" d="M413 142 V161 H419" marker-end="url(#ah-gt)"/>
<path class="s" d="M466 170 V189 H472" marker-end="url(#ah-gt)"/>
</svg>`);

PMQ.course({
  id: "blended",
  title: "Waterfall, Agile & Blended Delivery",
  short: "Waterfall & Blended",
  source: "Blending Project Management Methods",
  blurb: "How waterfall and agile each handle time, cost and scope, where each one breaks down, how to choose between them, and how to report on both in one portfolio.",
  topics: [

  /* ---------------------------------------------------------------- 1 */
  {
    id: "wf-life",
    title: "The waterfall life cycle",
    summary: "Traditional project management has been around for over 50 years and is usually called waterfall: each phase must finish before the next can start, like water flowing down a cascade. It's a defined process, with every step laid out in advance. It came from manufacturing and construction, where order is unavoidable, and was later carried into software. Its five phases are initiating, planning, executing, monitoring and controlling (which runs alongside executing), and closing.",
    figs: ["wf-phases"],
    terms: [
      ["Defined process", "A process where every step is laid out in advance and followed in order. Waterfall is a defined process.", "A building's construction sequence: foundations, frame, roof, services, fit-out.", 0, "wf-phases"],
      ["Initiating phase", "The start of a waterfall project, when a steering committee usually authorises the project manager to direct the work and spend the money.", "The board approves a new warehouse system and names the project manager and the budget."],
      ["Planning phase", "Defining the project in detail: requirements, objectives and scope, who's needed, how long it takes, quality, risks, and the communication, cost and stakeholder management plans. On big projects it can last months.", "A hospital BMS upgrade spends three months producing the scope, schedule, risk register and a shutdown plan for each ward."],
      ["Executing phase", "Doing the work by following the plans defined in planning.", "Contractors install and wire the new controllers exactly as the approved design and schedule describe."],
      ["Monitoring and controlling", "The phase that runs alongside executing: tracking the work, governing performance, reporting status and running change control.", "Weekly status reports to the steering committee, plus a change request when a supplier swaps a valve model."],
      ["Closing phase", "Wrapping up: transition to support, release to customers with documentation or training, lessons learned, and formal sign-off from the steering committee.", "Handing a new access-control system to facilities, training security staff and holding a lessons-learned session."],
      ["Steering committee", "A group of senior stakeholders who authorise a waterfall project, approve changes and give final sign-off.", "Finance, operations and IT leads who approve the budget and any change requests."],
      ["Lessons learned", "A review of what went well, what could be better and what future projects should know, held as part of closing.", "Recording that ordering long-lead fire dampers in week one would have saved six weeks."]
    ],
    cards: [
      { d: 1, q: "What are the five phases of a waterfall project, in order?", o: [
        ["Initiate, plan, execute, monitor/control, close", "Correct. Monitoring and controlling actually runs alongside executing."],
        ["Planning, designing, building, testing, launching", "A common software sequence, but not the five phases this course describes."],
        ["Sprint planning, daily scrum, sprint review, retrospective and release", "Those are mostly Scrum ceremonies, not waterfall phases."],
        ["Discovery, alpha, beta, live, retirement", "That's a product life cycle, not the course's project phases."]],
        k: "Initiate, plan, execute (while monitoring and controlling), close." },
      { d: 1, q: "Why is the traditional method called waterfall?", o: [
        ["Each phase must be finished before the next can start, like a cascade", "Correct. Work flows down from one phase to the next."],
        ["Work flows continuously with no separate phases at all, like a river", "Continuous flow without phases describes kanban more than waterfall."],
        ["Engineers in the water industry invented it", "The name describes the shape of the process, not who invented it."],
        ["Requirements trickle in slowly throughout the project", "The opposite: waterfall gathers requirements up front, in planning."]],
        k: "Waterfall = one phase after another, each finished before the next." },
      { d: 1, q: "Where did waterfall originate, according to the course?", o: [
        ["Manufacturing and construction, where each step must finish first", "Correct. It was later carried into software development."],
        ["Early software start-ups that needed to move quickly and ship often", "Software adopted waterfall later; it didn't start there."],
        ["Toyota's lean production system", "That's where kanban comes from."],
        ["Advertising agencies running campaigns", "Not the origin the course describes."]],
        k: "Born where order is physical: you can't paint a door before it's made." },
      { d: 2, q: "Which phase runs in parallel with executing?", o: [
        ["Monitoring and controlling", "Correct. You can't execute without tracking and governing the work, so the two run together."],
        ["Planning, done alongside the build", "In waterfall, planning is finished before execution begins; later changes go through change control."],
        ["Initiating", "Initiating happens once, at the start."],
        ["Closing", "Closing comes after execution ends."]],
        k: "Executing and monitoring and controlling travel together." },
      { d: 2, q: "Mid-build, a supplier says the specified fire damper is discontinued and a different model is needed. Where is this handled in waterfall?", o: [
        ["Monitoring and controlling, through the change control process", "Correct. This is where changes like a missed requirement or a resource change are managed."],
        ["Initiating, by re-authorising the whole project with the sponsor", "A single component change doesn't send the project back to initiation."],
        ["Closing, in the lessons-learned session", "It's worth recording later, but it has to be dealt with now."],
        ["Planning, by restarting the planning phase", "Waterfall doesn't restart planning for one change; change control assesses and approves it."]],
        k: "Changes during the build go through change control in monitoring and controlling." },
      { d: 2, q: "What happens in the closing phase?", o: [
        ["Handover, training, lessons learned and formal sign-off", "Correct. Closing transitions the result, releases it properly and gets the project signed off."],
        ["The team writes the detailed requirements and the full project plans", "That's the planning phase."],
        ["The steering committee first authorises the budget and PM", "That's initiating."],
        ["Work is tracked and weekly status reports are sent out", "That's monitoring and controlling."]],
        k: "Closing = hand over, train, learn, sign off." },
      { d: 3, q: "A council's 18-month waterfall project spent five months in planning. The sponsor complains: “All that planning and nothing built!” What's the fairest response, based on the course?", o: [
        ["It buys a detailed roadmap, but it costs time and is risky if things change", "Correct. The course notes planning can last months; the payoff is a roadmap everyone shares."],
        ["Planning should never take more than two weeks in any method", "There's no such rule; on large projects the course has seen planning last months."],
        ["That's unusual; waterfall keeps planning short to start building sooner", "Waterfall front-loads planning. Long planning is normal, not unusual."],
        ["Five months of planning guarantees the project will succeed", "No amount of planning guarantees success, especially if conditions change."]],
        k: "Long planning is waterfall's investment: a detailed roadmap, paid for in time." },
      { d: 3, q: "An Auckland hospital is upgrading its BMS ward by ward. Wards can't lose ventilation control, regulations are strict and the design is fixed. Which phase deserves the most investment?", o: [
        ["Planning: shutdowns and sequence set up front", "Correct. With fixed design and no room for surprises, detailed planning of sequence and risk is where the value is."],
        ["Closing, because the handover is when most problems appear", "Handover matters, but problems here are prevented much earlier."],
        ["Initiating, because getting authorisation is the hardest part", "Authorisation is necessary but short; the risk lives in the detailed sequence."],
        ["None in particular; adapt as you go, ward by ward", "Improvising shutdowns in a live hospital is the risk this project can't take."]],
        k: "Fixed design and high stakes reward heavy planning." }
    ],
    flips: [
      { d: 2, f: "Walk through the five waterfall phases in one line each.", b: "Initiating: the project is authorised and the PM gets authority to direct work and spend money. Planning: requirements, scope, schedule, resources, quality, risks and management plans are defined. Executing: the team follows the plans. Monitoring and controlling: alongside execution, work is tracked, reported and changes are controlled. Closing: handover to support, release and training, lessons learned and sign-off." }
    ]
  },

  /* ---------------------------------------------------------------- 2 */
  {
    id: "scrum",
    title: "The agile life cycle: Scrum",
    summary: "Agile is a family of life cycles built on lean methods: eliminate wasteful, non-valuable work. Scrum is the most common. It assumes your organisation already approves projects, and asks only that approval be quick and free of wasteful work. Scrum has three key players: the product owner (arguably the most important), the scrum master and the cross-functional scrum team. There are no phases; work happens in time-boxed sprints, usually two weeks, until the product owner's requests are done. The team stays organised with artifacts (product backlog, sprint backlog, product increment) and five ceremonies: the sprint itself, sprint planning, the daily scrum, the sprint review and the sprint retrospective. Easy to understand, hard to master.",
    figs: ["sprint-cycle"],
    terms: [
      ["Scrum", "The most common agile framework: a cross-functional team works in time-boxed sprints, organised by three key players, three artifacts and five ceremonies.", "A bank's app team runs two-week sprints, each with planning, daily scrums, a review and a retrospective."],
      ["Scrum master", "The person who owns the Scrum process: they guide how the team applies the framework and help it deliver as much as possible at high quality.", "A scrum master notices reviews keep overrunning and coaches the team to prepare demos in advance."],
      ["Scrum team", "A cross-functional group with all the skills needed to complete the product backlog. The product owner says what's needed; the team decides how.", "Two developers, a designer, a tester and a data analyst who can take a story from idea to release."],
      ["Product backlog", "The long list of all the work the product owner wants completed.", "Forty stories for a parking app, from paying by plate number to monthly passes."],
      ["Sprint backlog", "The subset of the product backlog the team commits to completing in the coming sprint.", "Six stories chosen at sprint planning for the next two weeks."],
      ["Product increment", "Everything completed in the current sprint plus all previous sprints: the working product so far.", "After sprint three, the increment lets users register, search and book."],
      ["Sprint review", "The end-of-sprint demo where the team shows the product owner and stakeholders everything completed.", "Showing facilities managers the new alarm dashboard and collecting their feedback."],
      ["Sprint retrospective", "The ceremony where the team looks inward: what went well, what didn't, and what changes to commit to in future sprints.", "After two rushed demos, the team agrees to stop adding work two days before each review."]
    ],
    cards: [
      { d: 1, q: "Who are the three key players in Scrum?", o: [
        ["Product owner, scrum master, team", "Correct. The PO sets what's valuable, the scrum master owns the process, the team does the work."],
        ["Sponsor, project manager and steering committee", "Those are typical waterfall roles."],
        ["Customer, vendor and auditor", "They may be stakeholders, but they aren't Scrum's three key players."],
        ["Architect, tester and business analyst", "These are skills that might sit inside the scrum team, not the three roles."]],
        k: "PO = what. Team = how. Scrum master = the process." },
      { d: 1, q: "Which Scrum artifact is the long list of all the work the product owner wants done?", o: [
        ["Product backlog", "Correct. The team selects from it at sprint planning."],
        ["Sprint backlog", "That's only the subset committed to for the current sprint."],
        ["Product increment", "That's the completed, working product so far."],
        ["Burndown chart", "That's a progress chart, not a list of work."]],
        k: "Product backlog = everything wanted. Sprint backlog = this sprint's commitment." },
      { d: 1, q: "What happens in the sprint retrospective?", o: [
        ["The team reflects on what went well, what didn't and what to change", "Correct. It's the team's internal improvement meeting."],
        ["The team demos the completed work to stakeholders and gets feedback", "That's the sprint review."],
        ["The team chooses which stories to commit to", "That's sprint planning."],
        ["Each person says what they did yesterday and today", "That's the daily scrum."]],
        k: "Review = show the product. Retrospective = improve the team." },
      { d: 2, q: "In Scrum, who decides what work is most valuable, and who decides how to do it?", o: [
        ["The product owner decides what's valuable; the team decides how", "Correct. The PO requests the work; the team decides how to accomplish it."],
        ["The product owner decides both", "The PO owns priority, not the team's methods."],
        ["The scrum master decides both", "The scrum master owns the process, not the priorities or the technical approach."],
        ["The team decides what's valuable; the product owner decides how", "Reversed."]],
        k: "PO owns the what; the team owns the how." },
      { d: 2, q: "Which list contains all five Scrum ceremonies described in the course?", o: [
        ["The sprint, sprint planning, daily scrum, sprint review, retrospective", "Correct. The course counts the sprint itself as a ceremony."],
        ["Kick-off, planning, status meeting, demo, project closure", "A generic project rhythm, not Scrum's ceremonies."],
        ["Sprint planning, daily scrum, review, retrospective, release party", "Close, but the fifth ceremony is the sprint itself, not a release party."],
        ["Product backlog, sprint backlog, increment, review, retrospective", "This mixes artifacts with ceremonies."]],
        k: "Five ceremonies: sprint, planning, daily scrum, review, retrospective." },
      { d: 2, q: "What does the product increment represent?", o: [
        ["All work completed this sprint plus every previous sprint", "Correct. The increment is cumulative: the working product so far."],
        ["Only the work finished in the current sprint, not earlier ones", "Tempting, but the course defines it as this sprint plus all previous ones."],
        ["The extra budget added when scope grows", "Increment refers to the product, not money."],
        ["The work planned for the next sprint", "That would be the next sprint backlog."]],
        k: "Increment = the whole working product built so far." },
      { d: 3, q: "Sprint reviews keep going badly: stakeholders see features for the first time and reject them. Which part of Scrum is most likely failing?", o: [
        ["The PO isn't representing stakeholders", "Correct. The product owner is the business and stakeholder rep; if they aren't, surprises surface at review."],
        ["The team isn't holding daily scrums often enough", "Daily scrums coordinate the team; they don't bring in the stakeholders' view."],
        ["The retrospectives are too short to fix anything", "Retros improve how the team works, not what stakeholders want."],
        ["The sprint backlog doesn't have enough stories in it to stay busy", "More stories wouldn't stop the wrong features being built."]],
        k: "If stakeholders are surprised at the review, look at the product owner link." },
      { d: 3, q: "A company announces “We're agile now” but keeps a six-month approval process before any Scrum team can start. What does Scrum assume about project approval?", o: [
        ["It exists, but it's quick and lean", "Correct. Scrum doesn't dictate how projects are approved, but expects the process to be efficient."],
        ["There's no approval process at all in Scrum", "Scrum assumes an approval process already exists."],
        ["Scrum teams approve their own budgets and scope", "Approval sits with the organisation, not the team."],
        ["Approval is repeated before every single sprint", "That would add exactly the kind of waste Scrum wants removed."]],
        k: "Scrum keeps your approval process, but expects it to be lean." }
    ],
    flips: [
      { d: 2, f: "Scrum: name the three artifacts and what each holds.", b: "Product backlog: everything the product owner wants done. Sprint backlog: what the team commits to for this sprint. Product increment: the working product, made of everything completed in this sprint and all the previous ones." }
    ]
  },

  /* ---------------------------------------------------------------- 3 */
  {
    id: "triple",
    title: "Waterfall and the triple constraint",
    summary: "Like planning home repairs (how soon, how much in the bank, which tasks), every project juggles three linked limits: cost, scope and time. This is the triple constraint, also called the iron triangle or project management triangle. Count every cost: team labour, occasional specialists, equipment, hardware, software and vendors. In waterfall, cost is set at initiating and changes only by an approved change request; scope is locked to fit that cost during planning; and the schedule is locked at the end of planning. A perfect waterfall project delivers all the scope on time at or under budget, and a strict reading says missing any one is failure. The upside: everyone shares the same expectations, and the PM can spot anything that threatens a constraint.",
    figs: ["triangles"],
    terms: [
      ["Triple constraint", "The three linked limits every project manages: cost, scope and time. Also called the iron triangle or the project management triangle.", "A café refit has $80k, six summer weeks and a fixed list of works. Change one, and the others feel it.", 0, "triangles"],
      ["Scope", "All the features or requirements that must be completed to deliver the value the project needs.", "New counter, coffee-machine plumbing, extra power circuits and a menu board."],
      ["Project cost", "Everything the project spends: team labour, occasional specialists, equipment, hardware, software and outside vendors.", "Electrician hours, a hired scissor lift, a new controller licence and the commissioning contractor's invoice."],
      ["Change request", "A formal request to alter cost, scope or time on a waterfall project, approved by the steering committee before it takes effect.", "Asking the committee for $12k more because the switchboard needs upgrading."]
    ],
    cards: [
      { d: 1, q: "What three things make up the triple constraint?", o: [
        ["Cost, scope and time", "Correct. Change one and at least one of the others is affected."],
        ["Cost, quality and risk", "Quality and risk matter, but they aren't the triple constraint described in the course."],
        ["People, process and technology", "That's a different, organisational framework."],
        ["Budget, stakeholders and vendors", "Budget is cost, but stakeholders and vendors aren't constraints in this model."]],
        k: "Cost, scope, time: the iron triangle." },
      { d: 1, q: "What other names does the course give the triple constraint?", o: [
        ["The iron triangle or the project management triangle", "Correct. Same idea, different names."],
        ["The golden ratio or the value chain", "Neither is a name for the triple constraint."],
        ["The critical path or the work breakdown", "Those are scheduling and planning tools."],
        ["The balanced scorecard or the project delivery triangle", "Not names for the triple constraint."]],
        k: "Iron triangle = project management triangle = triple constraint." },
      { d: 1, q: "In waterfall, when is the project's cost set?", o: [
        ["At initiating; changed only by an approved request", "Correct. Any extra cost must go back through the steering committee."],
        ["At the end of the project, once all invoices arrive", "Waterfall sets cost up front, not after the fact."],
        ["Each sprint, based on the team's velocity", "That's closer to how agile tracks cost."],
        ["Whenever the project manager decides it needs to change", "The PM can't change it alone; it needs an approved change request."]],
        k: "Waterfall budgets are locked early and change only through formal approval." },
      { d: 2, q: "Under the strict waterfall interpretation, which of these projects was successful?", o: [
        ["All scope delivered, on time, $5k under budget", "Correct. All scope, on time, at or under cost: the perfect waterfall project."],
        ["All scope delivered, $5k under budget, two weeks late", "Late breaks the time constraint, so strictly it's unsuccessful."],
        ["On time and on budget, with one minor feature dropped", "Dropping scope breaks the scope constraint."],
        ["All scope delivered, on time, $2k over budget", "Any overrun breaks the cost constraint under the strict reading."]],
        k: "Strict waterfall success = all three constraints met." },
      { d: 2, q: "Which list best covers the costs the course says to count when budgeting?", o: [
        ["Labour, specialists, equipment, tech and vendors", "Correct. The course stresses counting everything, including people brought in only now and then."],
        ["Core team salaries and the vendors' invoices, nothing else", "This misses occasional specialists, equipment, hardware and software."],
        ["Hardware and software only, since team labour is treated as a business overhead", "Labour is usually a project's biggest cost and must be counted."],
        ["Team salaries, office rent, coffee and parking for the team", "General overheads aren't the course's checklist, and it misses vendors and equipment."]],
        k: "Budget for everyone and everything the project touches." },
      { d: 2, q: "You've set aside June and a budget to replace kitchen windows for energy efficiency. Then you find a more attractive window type. What does a good project manager check first?", o: [
        ["Whether it fits June, costs the same or less, and still saves the energy", "Correct. That's the course's example: test the new option against time, cost and scope."],
        ["Whether the neighbours prefer the new style", "Opinions don't tell you whether the constraints still hold."],
        ["Whether a bigger budget could be found later in the year if it's needed", "That's planning to break the cost constraint before checking it."],
        ["Whether the original order can be cancelled for free", "Useful later, but first check the option against the constraints."]],
        k: "Test every attractive change against time, cost and scope." },
      { d: 3, q: "A colleague calls the triple constraint “a double-edged sword.” What does that mean in the course's terms?", o: [
        ["Clear targets, but any one slip means failure", "Correct. Everyone's aligned, yet under a strict reading one miss sinks the verdict."],
        ["It speeds projects up, but it makes them more expensive overall", "Speed and expense aren't the two edges the course describes."],
        ["It works for software but not for construction", "If anything, waterfall suits construction better than software."],
        ["It protects scope but ignores time and cost", "It covers all three, which is the point."]],
        k: "Alignment on one edge, unforgiving pass/fail on the other." },
      { d: 3, q: "Mid-project, inflation pushes material costs up 12%. Scope and deadline are fixed by contract. On a waterfall project, what's the correct path?", o: [
        ["Raise a change request for the committee", "Correct. A cost change goes back to the steering committee, which can approve more money or trade-offs."],
        ["Quietly cut a few features so the budget holds", "That breaks the scope constraint without approval."],
        ["Absorb the cost and explain the overrun at closing", "Hiding an overrun until the end removes the committee's chance to act."],
        ["Push the deadline out so costs spread further", "That breaks the time constraint, and spreading costs doesn't reduce them."]],
        k: "When a constraint can't hold, the steering committee decides through change control." }
    ],
    flips: [
      { d: 2, f: "Define the triple constraint and say how waterfall judges success against it.", b: "Cost, scope and time: the three linked limits on every project. Waterfall locks all three by the end of planning. A perfect waterfall project delivers all the scope on time and at or under budget; under a strict reading, missing any one means the project wasn't successful." }
    ]
  },

  /* ---------------------------------------------------------------- 4 */
  {
    id: "wf-control",
    title: "Managing constraints in waterfall",
    summary: "Because waterfall is a defined process, the tools for each constraint are laid out for you. Time: build a work breakdown structure with the team, estimate and define the tasks, sequence them logically (tape the edges before you paint), then build a project plan, usually a Gantt chart, and manage it daily. Scope: prioritise the work, manage stakeholders so scope doesn't creep, put every requested change through change management, and prevent gold plating. Cost: have everyone track their time, compare estimates with actuals every week against the schedule, and gather vendor invoices and other hard costs.",
    figs: ["gantt"],
    terms: [
      ["Work breakdown structure (WBS)", "A breakdown, made with the team, of all the major pieces of work needed to reach the end goal.", "A fit-out WBS: demolition, electrical, plumbing, HVAC, fire services, finishes, commissioning."],
      ["Sequencing", "Putting tasks in a logical order so each one happens after the work it depends on.", "Tape the edges before painting; pressure-test pipes before closing up the ceiling."],
      ["Gantt chart", "A project plan showing tasks as bars over time, connected to show what happens first, second and third.", "Bars for move furniture, tape, prime and paint, each linked to the one before.", 0, "gantt"],
      ["Scope creep", "Uncontrolled growth in scope, often from stakeholders adding requests after work has started.", "“While you're in there, could you also rewire the meeting room?”"],
      ["Gold plating", "Team members adding extras nobody asked for, which grows scope without approval.", "A developer adds an animated dashboard theme because it looks better."],
      ["Change management", "The formal process for reviewing and vetting every requested change, with its schedule and cost impacts accepted by the steering committee.", "A request to add CCTV is assessed, priced and approved before anyone starts work on it."],
      ["Hard costs", "Actual money paid to vendors and suppliers, tracked through their invoices.", "The scaffolding hire invoice and the commissioning contractor's bill."]
    ],
    cards: [
      { d: 1, q: "Which waterfall tool, built with the team, lists all the major pieces of work needed to reach the goal?", o: [
        ["Work breakdown structure", "Correct. It's the first time-management tool the course recommends."],
        ["Burndown chart", "An agile sprint progress chart, not a breakdown of work."],
        ["Product backlog", "An agile list of desired work, owned by the product owner."],
        ["Lessons learned register", "A closing-phase record, not a planning tool."]],
        k: "Start time management with a WBS." },
      { d: 1, q: "What is gold plating?", o: [
        ["Adding extras nobody requested", "Correct. It grows scope without approval, however well meant."],
        ["Rewarding the team with a bonus for finishing early", "That's an incentive, not gold plating."],
        ["Finishing a project early and under budget", "That's a good outcome, not gold plating."],
        ["Adding approved scope through a change request", "Approved changes are controlled scope, the opposite of gold plating."]],
        k: "Gold plating comes from inside the team; scope creep usually comes from outside." },
      { d: 1, q: "What's the usual way to lay out a waterfall project plan?", o: [
        ["A Gantt chart", "Correct. It connects tasks over time to show the overall schedule."],
        ["A kanban board", "A kanban shows status, not a dated, linked schedule."],
        ["A burnup chart", "An agile release-progress chart."],
        ["A user story map", "An agile tool for organising stories."]],
        k: "Waterfall schedules usually live in a Gantt chart." },
      { d: 2, q: "Look at the plan. Why does “Tape the edges” come before “Prime walls”?", fig: "gantt", o: [
        ["Some tasks depend on others, so logical order keeps the schedule on track", "Correct. Sequencing by dependency is what the course's tape-before-paint example shows."],
        ["Taping is cheaper than priming, so the cheaper task always goes first", "Cost doesn't set the order; dependency does."],
        ["Tasks are always scheduled in alphabetical order", "Order follows dependencies, not names."],
        ["The quickest task should always come first", "Duration isn't the reason; the later task needs the earlier one done."]],
        k: "Sequence by dependency: what must be true before this task can start?" },
      { d: 2, q: "Halfway through, a stakeholder asks for a new reporting module “since you're in there anyway.” What's the waterfall way to handle it?", o: [
        ["Put it through change control so its impacts get approved", "Correct. Review, vet and get schedule and cost impacts accepted by the steering committee."],
        ["Add it quietly to the plan to keep the stakeholder happy", "That's scope creep, and it will hit time and cost later."],
        ["Refuse every change once planning is finished", "Waterfall allows changes; it just controls them."],
        ["Let the team decide whether they have time", "The team can't approve scope changes on the committee's behalf."]],
        k: "New request? Change control, every time." },
      { d: 2, q: "How does the course say you keep waterfall costs on track?", o: [
        ["Time tracking, weekly estimate-vs-actual checks and collecting invoices", "Correct. Compare estimates with actuals against the schedule, and gather all hard costs."],
        ["Wait for the final invoices at closing, then reconcile the budget", "By closing it's too late to correct anything."],
        ["Ask the main vendors to track and report the budget for you", "Vendors see only their part; the PM owns the full picture."],
        ["Check costs only at phase gates, since that's when they're approved", "Weekly checks catch drift long before a phase gate."]],
        k: "Track time, compare weekly, collect every invoice." },
      { d: 3, q: "Late in the project, a developer proudly adds a dark mode “as a bonus.” Testing time is now tight. What's the PM's best response?", o: [
        ["It's gold plating: defer it or use change control", "Correct. Unrequested extras grow scope and eat the time testing needs."],
        ["Keep it, since extra features always add value for users and sponsors", "Unrequested features add risk and cost, not guaranteed value."],
        ["Thank them and quietly add it to the documented scope", "That's approving scope without the steering committee."],
        ["Cut a few test cases so there's time to finish it", "Trading quality for an unrequested feature is the worst of both."]],
        k: "Good intentions don't make unapproved scope safe." },
      { d: 3, q: "On a fit-out, the client keeps sending “small” requests by WhatsApp directly to the electricians. Costs creep up and nobody knows what's approved. Which two waterfall tools address this most directly?", o: [
        ["Stakeholder management and change management", "Correct. Set clear expectations about scope, and route every request through review and approval before anyone acts."],
        ["A Gantt chart and team time tracking", "They'd show the delay and cost, but wouldn't stop unapproved work."],
        ["The work breakdown structure and sequencing", "Planning tools, not controls on new requests."],
        ["Lessons learned and formal sign-off", "Closing activities, far too late to help."]],
        k: "Scope creep is stopped by expectations plus a single route for changes." }
    ],
    flips: [
      { d: 2, f: "List the waterfall tools for each constraint: time, scope and cost.", b: "Time: work breakdown structure, task estimates and definitions, sequencing, and a project plan such as a Gantt chart. Scope: prioritising, stakeholder management, change management and preventing gold plating. Cost: team time tracking, weekly estimate-versus-actual checks against the schedule, and collecting vendor invoices and other hard costs." },
      { d: 2, f: "Scope creep vs gold plating: what's the difference?", b: "Scope creep usually comes from stakeholders adding requests after work starts. Gold plating comes from the team adding extras nobody asked for. Both grow scope without approval, and both are stopped by change management." }
    ]
  },

  /* ---------------------------------------------------------------- 5 */
  {
    id: "wf-weak",
    title: "Weaknesses of defined processes",
    summary: "Waterfall has a very high success rate in manufacturing and construction, where you can't put up drywall before the foundation. In software it struggles: in the period the course cites, 29% of waterfall software projects failed versus 9% of agile ones, where failure means cancelled, or completed but not used. Why? No two applications are alike, so the same steps can give different results. The method is inflexible: what you learn in phase three or four is hard and expensive to act on. Separated phases mean teams build what was designed even if it isn't the best thing to build. And testing comes after development, when many developers have moved on, so bugs get released into production.",
    terms: [
      ["Project failure (course definition)", "A project that was cancelled, or completed but the product isn't used.", "A finished ordering system that staff refuse to use counts as a failure, even though it was delivered."],
      ["29% vs 9%", "The failure rates the course cites for software projects: waterfall 29%, agile 9%, over the same period and with the same definition of failure.", "Out of 100 software projects of each kind, roughly 29 waterfall and 9 agile ones failed."],
      ["Late testing", "In waterfall, testing happens after development is complete, often after temporary developers have left, so bugs found then may ship.", "Testers find 80 defects in month 11, but the contract developers left in month 9."],
      ["Phase separation", "Keeping work in isolated phases, which stops teams going back to change earlier decisions without big cost.", "A better approach found during the build can't be used because the design is signed off."]
    ],
    cards: [
      { d: 1, q: "What software project failure rates does the course cite?", o: [
        ["Waterfall 29%, agile 9%", "Correct, over the same time frame and with the same definition of failure."],
        ["Waterfall 9%, agile 29%", "Reversed."],
        ["Both around 50%", "Not the figures the course gives."],
        ["Waterfall 60%, agile 40%", "Not the figures the course gives."]],
        k: "29% versus 9%: waterfall failed about three times as often in software." },
      { d: 1, q: "How does the course define a failed project?", o: [
        ["Cancelled, or finished but unused", "Correct. Delivering something nobody uses still counts as failure."],
        ["Finished more than a month behind its original schedule", "Late projects aren't automatically failures under this definition."],
        ["Any project that needed a change request", "Change requests are normal and don't define failure."],
        ["Delivered by a different team than planned", "Team changes don't define failure."]],
        k: "Failure = cancelled, or built but unused." },
      { d: 1, q: "In which fields does waterfall have a very high success rate?", o: [
        ["Manufacturing and construction", "Correct. Each phase genuinely has to finish before the next."],
        ["Software and app development", "This is where the course says waterfall's success rate drops."],
        ["Marketing and social media", "Not fields the course highlights for waterfall success."],
        ["Research and innovation labs", "Highly uncertain work suits waterfall poorly."]],
        k: "Waterfall shines where the order of work is physically fixed." },
      { d: 2, q: "Why does waterfall struggle more with software than with building cars?", o: [
        ["Every application is unique, so the same steps give different results", "Correct. Two cars can roll off a line identical; no two applications ever are."],
        ["Software teams are less disciplined than car makers", "Discipline isn't the issue the course raises."],
        ["Cars cost less to build than most software", "Cost isn't the reason given."],
        ["Software projects skip the planning phase far too often to succeed", "The problem isn't skipped planning; it's that plans can't anticipate unique software."]],
        k: "Repeatable products suit defined processes; unique ones don't." },
      { d: 2, q: "In a waterfall software project, testing starts after development ends. What risk does the course highlight?", o: [
        ["Developers have moved on, so late bugs ship to production", "Correct. Temporary developers may be gone when bugs are found."],
        ["Testers finish too quickly and sit idle afterwards", "The problem is the opposite: lots of bugs and nobody to fix them."],
        ["Customers see an unfinished product far too early in the project", "In waterfall, customers usually see the product late, not early."],
        ["Testing costs too little to be worth tracking", "Cost of testing isn't the risk described."]],
        k: "Test last, and you may have nobody left to fix what you find." },
      { d: 3, q: "During the build, a waterfall team realises the signed-off design won't work well for users. Changing it means rework, delay and cost. What does the course say tends to happen?", o: [
        ["They build it anyway; change is expensive", "Correct. And the result can be an unusable product."],
        ["They redesign straight away, since early fixes cost nothing", "Changing a signed-off design mid-build is costly in time and money."],
        ["The project switches to an agile method automatically", "Methods don't switch themselves; that's a deliberate choice."],
        ["Users are trained to adapt to the design after launch", "Training can't fix a design that doesn't suit users, and this is how products end up unused."]],
        k: "When change is expensive, teams build the wrong thing on purpose." },
      { d: 3, q: "A council wants a citizen app built waterfall-style: 12 months, every feature specified now, testing at the end. Which risk should you raise first?", o: [
        ["Needs will shift, and late testing lets bugs and wrong features ship", "Correct. That combines two of the course's weaknesses: inflexibility and late testing."],
        ["Twelve months is far too short to build any app", "Duration isn't the core risk here."],
        ["Citizen apps can't be planned in any detail at all, so don't try", "They can be planned; the risk is treating the plan as fixed."],
        ["Testing at the end is cheaper, so there's no risk", "Late testing is one of the risks, not a saving."]],
        k: "Long, fixed plans plus late testing are a risky mix for software." }
    ],
    flips: [
      { d: 2, f: "Give three reasons waterfall struggles in software, from the course.", b: "Every application is unique, so following the same steps can give different results. Phases are rigid, so learning late is hard and expensive to act on, and teams build what was designed even when it isn't the best thing. Testing comes last, often after developers have moved on, so bugs get released into production." }
    ]
  },

  /* ---------------------------------------------------------------- 6 */
  {
    id: "agile-triple",
    title: "Agile and the triple constraint",
    summary: "Waterfall is plan-driven: it assumes time, cost and scope can all stay locked. In reality, time and cost flex as teams learn and push changes through change control, so waterfall projects are almost always late or over budget. Agile flips the model: time and cost are fixed and scope flexes. The course calls this value-driven. Set time and cost at the start, add the scope you believe fits to the backlog, and prioritise the highest-value items to the top. The customer gets a known schedule and cost and always receives something of value. There's no formal change control: the product owner owns the backlog and moves new priorities to the top.",
    figs: ["triangles"],
    terms: [
      ["Plan-driven model", "Waterfall's approach: time, cost and scope are all fixed by the plan, assuming the work can be done exactly as envisioned.", "A fixed-price fit-out contract with a full specification and a set handover date.", 0, "triangles"],
      ["Value-driven model", "Agile's approach: time and cost are fixed, scope flexes, and the highest-value items are always done first.", "Twelve weeks and $90k for a booking app; the PO keeps the most valuable features on top so whatever ships is useful.", 0, "triangles"],
      ["Flexible scope", "In agile, the exact features delivered can change as the team learns, while the value to be delivered stays constant.", "Swapping a planned loyalty feature for click-and-collect after user research, within the same time and budget."]
    ],
    cards: [
      { d: 1, q: "In agile's value-driven model, what's fixed and what flexes?", o: [
        ["Time and cost are fixed; scope flexes", "Correct. Agile flips waterfall's triangle."],
        ["Scope is fixed; time and cost flex", "That's closer to what actually happens on waterfall projects."],
        ["All three are fixed", "That's waterfall's plan-driven assumption."],
        ["All three flex freely", "Agile fixes time and cost deliberately."]],
        k: "Agile: fix time and cost, flex scope." },
      { d: 1, q: "What does the course say happens to waterfall projects in reality?", o: [
        ["Time and cost flex, so they run late or over", "Correct. The plan assumes all three are locked, but change requests move time and cost."],
        ["They finish on plan, because everything is locked down early in planning", "The course says the opposite: they're almost always late or over budget."],
        ["Scope flexes while time and cost stay locked", "That describes agile's model."],
        ["They rarely need change requests once planning is done", "Teams learn as they go, so change requests are common."]],
        k: "Waterfall assumes a perfect world; change control is where reality leaks in." },
      { d: 2, q: "How are changes handled in an agile project, according to the course?", o: [
        ["No formal change control: the product owner reorders the backlog", "Correct. Change is expected, so there's no approval process for it."],
        ["Every change needs formal approval from the steering committee", "That's waterfall's change control."],
        ["Changes wait for the next release planning session", "New priorities can move to the top of the backlog straight away."],
        ["The scrum master approves each change individually", "The product owner owns the backlog, not the scrum master."]],
        k: "In agile, change is a backlog reorder, not a request form." },
      { d: 2, q: "Why does fixing time and cost still guarantee the customer something valuable?", o: [
        ["The most valuable items get done first", "Correct. Whatever is delivered when time runs out is the highest-value work."],
        ["The team works overtime until all of the planned scope is done", "Fixed time means fixed time; overtime isn't the model."],
        ["Scope is locked, so nothing can be dropped", "Scope flexes in agile; that's the point."],
        ["The customer can't change priorities once work starts", "The customer, through the PO, can reprioritise at any time."]],
        k: "Priority order is the safety net when scope flexes." },
      { d: 2, q: "A business unit has 10 weeks and $60k for a staff portal. Using the value-driven model, what's the first step?", o: [
        ["Lock the 10 weeks and $60k, then fill and prioritise the backlog", "Correct. Set time and cost first, then add the scope you believe fits, highest value on top."],
        ["List every feature first, then estimate the time and cost needed", "That's the plan-driven approach."],
        ["Start building and see how far the money goes", "Agile is disciplined: time, cost and a prioritised backlog come first."],
        ["Fix the scope first, then negotiate the time and cost", "That puts scope first, which is the waterfall order."]],
        k: "Value-driven planning: time and cost first, then prioritised scope." },
      { d: 3, q: "A client says: “I need all 40 features, by June, for exactly $100k.” Which model are they asking for, and what's the honest risk?", o: [
        ["Plan-driven: changes will add time or cost", "Correct. With everything fixed, any learning or change has to come out of time or cost."],
        ["Value-driven: scope flexes, so the risk is low", "Scope isn't flexing here; the client fixed it."],
        ["Value-driven: time and cost flex, but the scope stays fixed throughout", "That isn't the value-driven model, and the client fixed time and cost too."],
        ["Neither; this is how agile normally works", "Agile fixes time and cost but lets scope flex."]],
        k: "Fix all three and something will give. Usually time or cost." },
      { d: 3, q: "Mid-project, a new privacy rule means the app needs consent screens. Time and budget are fixed. What's the agile response?", o: [
        ["Put it high in the backlog and let lower-value items drop", "Correct. The product owner reprioritises; scope flexes to fit the fixed time and cost."],
        ["Raise a formal change request to extend the deadline", "That's the waterfall response; agile has no formal change control."],
        ["Leave it for a follow-up project after launch", "A legal requirement can't wait if the app must comply at launch."],
        ["Add it on top and ask the team to work weekends", "That quietly breaks the fixed time and burns the team out."]],
        k: "New must-have? Reorder the backlog; let lower value fall below the line." }
    ],
    flips: [
      { d: 2, f: "Describe the two triangles: waterfall vs agile.", b: "Waterfall (plan-driven): scope is fixed and time and cost are estimated from it, so in practice time and cost slip. Agile (value-driven): time and cost are fixed and scope is estimated, so scope flexes while the most valuable items are delivered first." }
    ]
  }

  ]
});
