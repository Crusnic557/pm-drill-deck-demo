/* Course 6 · PMP-style scenarios. Part 4 (added in v2): exam maths with worked answers, negotiation, virtual teams,
   documentation and configuration management, training and mentoring, and a linked case study in the style of the
   2026 exam's case-study sets. Mapped to the PMP Examination Content Outline (July 2026); every scenario is original.
   First option is correct; the app shuffles. */

PMQ.fig("decision-tree", `<svg viewBox="0 0 600 210" role="img" aria-label="Decision tree comparing building in-house with buying at a fixed price, using expected cost">
<text class="t2" x="4" y="12">Decision tree: build or buy?</text>
<rect class="bx" x="8" y="102" width="24" height="24" rx="2"/>
<path class="acc-s" d="M32 114 L150 68"/><path class="s" d="M32 114 L150 166"/>
<text class="tb" x="40" y="66">Build</text><text class="t2" x="40" y="80">$120k</text>
<text class="tb" x="40" y="156">Buy</text><text class="t2" x="40" y="170">fixed price</text>
<circle class="bx" cx="162" cy="68" r="12"/>
<path class="s" d="M174 68 L300 42"/><path class="s" d="M174 68 L300 94"/>
<text class="t2" x="182" y="36">30% · $50k overrun</text><text class="t2" x="190" y="110">70% · on budget</text>
<text class="tc" x="306" y="46">$170k</text><text class="tc" x="306" y="98">$120k</text>
<text class="ta" x="306" y="72">= 0.3 × 170 + 0.7 × 120 = $135k expected</text>
<rect class="bx2" x="150" y="154" width="12" height="24" rx="2"/><text class="tc" x="170" y="170">$140k, no risk of overrun</text>
<text class="tok" x="4" y="202">Choose build: an expected $135k beats buy's fixed $140k</text>
</svg>`);

PMQ.course({
  id: "pmp",
  topics: [

  /* ---------------------------------------------------------------- 23 */
  {
    id: "exam-maths",
    title: "Exam maths: worked calculations",
    summary: "The 2026 exam is mostly situational, but a handful of questions still need quick sums, and the numbers help you reason about real projects. Earned value: CPI = EV ÷ AC and SPI = EV ÷ PV; below 1 is bad. EAC (estimate at completion) is BAC ÷ CPI if current cost performance continues; AC + (BAC − EV) if the overrun was a one-off; AC + (BAC − EV) ÷ (CPI × SPI) if both cost and schedule performance will keep pulling on the result. ETC (estimate to complete) = EAC − AC, and VAC (variance at completion) = BAC − EAC, where negative means a forecast overrun. Three-point (PERT) estimates: tE = (O + 4M + P) ÷ 6, with a standard deviation of (P − O) ÷ 6; about 68% of outcomes fall within one standard deviation and about 95% within two. Expected monetary value (EMV) = probability × impact; threats are negative and opportunities positive, and a decision tree picks the option with the best expected value. Total float is how far an activity can slip without delaying the project; on a path, it's the critical path's length minus that path's length. For a fixed-price-incentive-fee contract, the point of total assumption is ((ceiling price − target price) ÷ buyer's share) + target cost. Net present value discounts future cash flows: divide each by (1 + rate) raised to the power of its year.",
    figs: ["decision-tree"],
    terms: [
      ["Estimate to complete (ETC)", "The expected cost of finishing the remaining work: EAC − AC.", "EAC $250,000 and AC $90,000 give an ETC of $160,000."],
      ["Variance at completion (VAC)", "The forecast difference between the budget and the final cost: BAC − EAC; negative means a forecast overrun.", "BAC $200,000 and EAC $250,000 give a VAC of −$50,000."],
      ["Standard deviation (PERT)", "A measure of an estimate's spread: (P − O) ÷ 6. About 68% of outcomes fall within one standard deviation of the mean, about 95% within two.", "O = 6 and P = 18 days give a standard deviation of 2 days."],
      ["Decision tree analysis", "A diagram of choices and uncertain outcomes, with the expected monetary value of each path, used to pick the best option.", "Build for an expected $135,000 or buy for a fixed $140,000.", 0, "decision-tree"],
      ["Point of total assumption (PTA)", "In a fixed-price-incentive-fee contract, the cost above which the seller bears every extra dollar: ((ceiling price − target price) ÷ buyer's share) + target cost.", "A target cost of $100k, target price of $110k, ceiling of $120k and 70% buyer share give a PTA of about $114,300."]
    ],
    cards: [
      { d: 1, q: "BAC is $200,000 and CPI is 0.8. If cost performance continues as it is, what's the EAC?", o: [
        ["$250,000", "Right. EAC = BAC ÷ CPI = 200,000 ÷ 0.8 = 250,000."],
        ["$160,000", "That's BAC × CPI; multiplying shrinks the estimate when it should grow."],
        ["$200,000", "That assumes the overrun disappears."],
        ["$240,000", "Check the division: 200,000 ÷ 0.8 is 250,000."]],
        k: "Typical variance: EAC = BAC ÷ CPI." },
      { d: 1, q: "BAC is $200,000, the EAC is now $250,000, and you've spent $90,000 so far. What's the estimate to complete?", o: [
        ["$160,000", "Right. ETC = EAC − AC = 250,000 − 90,000."],
        ["$340,000", "That's EAC + AC; you subtract what's already spent."],
        ["$110,000", "That subtracts from the original budget (200,000 − 90,000), not from the new estimate."],
        ["$90,000", "That's what you've already spent."]],
        k: "ETC = EAC − AC." },
      { d: 2, q: "BAC is $200,000 and the EAC is now $250,000. What's the variance at completion, and what does it mean?", o: [
        ["−$50,000: a forecast $50,000 overrun", "Right. VAC = BAC − EAC = 200,000 − 250,000."],
        ["+$50,000: you're forecast to finish under budget", "The sign is the other way round; negative means over."],
        ["−$50,000: you're $50,000 behind schedule", "VAC is about cost, not schedule."],
        ["$450,000: the total you'll spend", "That's BAC + EAC, which isn't a measure of anything."]],
        k: "VAC = BAC − EAC; negative is an overrun." },
      { d: 3, q: "BAC is $100,000, EV is $40,000, AC is $50,000 and PV is $50,000. If both cost and schedule performance keep affecting the work, what's the EAC?", o: [
        ["$143,750", "Right. CPI = 0.8 and SPI = 0.8, so EAC = 50,000 + 60,000 ÷ 0.64 = 143,750."],
        ["$125,000", "That's BAC ÷ CPI, which ignores the schedule effect."],
        ["$110,000", "That's AC + (BAC − EV), which assumes the overrun won't recur."],
        ["$156,250", "That's BAC ÷ (CPI × SPI), which wrongly re-estimates the work already done."]],
        k: "Both pulling: EAC = AC + (BAC − EV) ÷ (CPI × SPI)." },
      { d: 2, q: "An activity's three-point estimates are O = 6, M = 9 and P = 18 days. What are the PERT estimate and its standard deviation?", o: [
        ["10 days, with a standard deviation of 2 days", "Right. (6 + 36 + 18) ÷ 6 = 10, and (18 − 6) ÷ 6 = 2."],
        ["11 days, with a standard deviation of 4 days", "11 is the simple average of the three estimates, and 4 is (P − O) ÷ 3."],
        ["9 days, with a standard deviation of 2 days", "9 is the most likely value, not the PERT estimate."],
        ["10 days, with a standard deviation of 12 days", "12 is P − O; divide it by 6."]],
        k: "tE = (O + 4M + P) ÷ 6; SD = (P − O) ÷ 6." },
      { d: 3, q: "A work package's PERT estimate is 20 days, with a standard deviation of 3 days. What range gives you about 95% confidence?", o: [
        ["14 to 26 days", "Right. ±2 standard deviations: 20 − 6 to 20 + 6."],
        ["17 to 23 days", "That's ±1 standard deviation, about 68%."],
        ["11 to 29 days", "That's ±3 standard deviations, about 99.7%."],
        ["20 to 26 days", "Confidence ranges spread both ways from the mean."]],
        k: "±1 SD ≈ 68%, ±2 SD ≈ 95%, ±3 SD ≈ 99.7%." },
      { d: 2, q: "Building in-house costs $120,000, with a 30% chance of a $50,000 overrun. Buying costs a fixed $140,000. On expected cost, which should you choose?", af: "decision-tree", o: [
        ["Build: its expected cost is $135,000", "Right. 0.3 × 170,000 + 0.7 × 120,000 = 135,000, less than 140,000."],
        ["Buy, since a fixed price always beats a risky one", "Fixed prices have value, but on expected cost build is cheaper."],
        ["Build: its expected cost is $120,000", "That ignores the 30% chance of the overrun."],
        ["Buy, since building could cost $170,000", "The worst case isn't the expected case."]],
        k: "Decision trees compare expected values, not worst cases." },
      { d: 2, q: "Your risk register holds a threat at 10% × $40,000, a threat at 25% × $20,000 and an opportunity at 20% × $10,000. What's the net expected monetary value to cover?", o: [
        ["$7,000", "Right. 4,000 + 5,000 − 2,000: the opportunity offsets part of the threats."],
        ["$9,000", "That leaves out the opportunity."],
        ["$11,000", "That adds the opportunity instead of offsetting it."],
        ["$70,000", "That adds the full impacts without the probabilities."]],
        k: "Net EMV: threats minus opportunities, each × probability." },
      { d: 2, q: "Three paths run from start to finish: A is 18 days, B is 22 days and C is 15 days. How much total float does path A have?", o: [
        ["4 days", "Right. The critical path B is 22 days, so A can slip 22 − 18 = 4 days."],
        ["7 days", "That's path C's float: 22 − 15."],
        ["0 days", "Only the critical path has zero float."],
        ["18 days", "That's path A's length, not its float."]],
        k: "Path float = critical path length − path length." },
      { d: 3, q: "A fixed-price-incentive-fee contract has a target cost of $100,000, a target fee of $10,000, a ceiling price of $120,000 and a 70/30 buyer/seller share. What's the point of total assumption?", o: [
        ["About $114,300", "Right. (120,000 − 110,000) ÷ 0.7 + 100,000 = 114,286."],
        ["$120,000", "That's the ceiling price; the PTA is a cost, and it's lower."],
        ["About $103,000", "That multiplies the gap by the seller's 30% share instead of dividing it by the buyer's 70%."],
        ["$110,000", "That's the target price."]],
        k: "PTA = (ceiling − target price) ÷ buyer's share + target cost." },
      { d: 2, q: "A 10-month schedule has an SPI of 0.8, and performance isn't expected to change. Roughly how long will it take?", o: [
        ["About 12.5 months", "Right. A rough forecast: planned duration ÷ SPI = 10 ÷ 0.8."],
        ["8 months", "That's 10 × 0.8; a low SPI means it will take longer, not shorter."],
        ["10 months", "That assumes the slippage disappears."],
        ["About 10.8 months", "That just adds 0.8 of a month."]],
        k: "Rough duration forecast = planned ÷ SPI." },
      { d: 3, q: "A project costs $100,000 now and returns $60,000 at the end of each of the next two years. At a 10% discount rate, what's its NPV, roughly?", o: [
        ["About +$4,100", "Right. 60,000 ÷ 1.1 + 60,000 ÷ 1.21 ≈ 54,545 + 49,587 = 104,132, minus 100,000: worthwhile, but only just."],
        ["About +$20,000", "That ignores discounting: 120,000 − 100,000."],
        ["About −$4,100", "The sign is wrong; the discounted returns exceed the cost."],
        ["About +$9,100", "That discounts both years' returns by 10% only once: 120,000 ÷ 1.1 − 100,000."]],
        k: "Discount each cash flow by (1 + r) to the power of its year." }
    ],
    flips: [
      { d: 2, f: "Write down the EVM and estimating formulas you'd want ready for the exam.", bf: "decision-tree", b: "CV = EV − AC; SV = EV − PV; CPI = EV ÷ AC; SPI = EV ÷ PV. EAC = BAC ÷ CPI (typical), AC + (BAC − EV) (one-off), or AC + (BAC − EV) ÷ (CPI × SPI) (both). ETC = EAC − AC; VAC = BAC − EAC; TCPI = (BAC − EV) ÷ (BAC − AC). PERT: (O + 4M + P) ÷ 6, SD = (P − O) ÷ 6. EMV = probability × impact. Channels = n(n − 1) ÷ 2. PTA = (ceiling − target price) ÷ buyer's share + target cost." }
    ]
  },

  /* ---------------------------------------------------------------- 24 */
  {
    id: "negotiation",
    title: "Negotiation in practice",
    summary: "Project managers negotiate constantly: for people with functional managers, over scope with customers, over dates with sponsors, and over prices and change orders with suppliers. Prepare first: know your priorities, your BATNA (what you'll do if there's no deal) and, as far as you can, the other side's interests and constraints. In the room, separate the people from the problem, focus on interests rather than positions, look for options that serve both sides, and use objective criteria such as data, market prices or the contract. Aim for agreements both sides can live with, because you'll work with these people again. Respect cultural differences in how directly people say yes and no. Afterwards, write down what was agreed and confirm it with everyone, and route anything that changes the baseline through change control.",
    terms: [
      ["Interest-based negotiation", "Negotiating by uncovering the needs behind each side's stated position and looking for options that meet them, rather than haggling over positions.", "Finding that a supplier's real concern is cash flow, and agreeing faster payment instead of a higher price."],
      ["Objective criteria", "Independent standards, such as market rates, data or contract terms, used to settle a negotiation fairly.", "Using published labour rates to judge a vendor's change-order price."],
      ["ZOPA", "Zone of possible agreement: the overlap between what each side is willing to accept.", "You'll pay up to $50k; they'll accept $45k or more; the ZOPA is $45–50k."]
    ],
    cards: [
      { d: 1, q: "What's the most useful first step in preparing for a negotiation?", o: [
        ["Map both sides' interests and your limits", "Right. Know both sides' interests, your priorities and your walk-away point; preparation shapes everything that follows."],
        ["Decide on an aggressive opening offer", "An anchor can help, but only once you know what you need."],
        ["Find the other side's weaknesses to exploit", "That sets up a win-lose contest and damages the relationship."],
        ["Ask the sponsor to come and lead it", "You may need their support, but you still have to prepare."]],
        k: "Prepare: interests, priorities, BATNA." },
      { d: 2, q: "A functional manager won't release a tester your critical path depends on. What's your best approach?", o: [
        ["Explore options that work for both of you", "Right. Show the impact on shared goals, and explore options such as part-time help or a later window."],
        ["Escalate straight to their director", "Try to resolve it with them first."],
        ["Ask the tester to help you in their own time", "That goes around the manager and exploits the tester."],
        ["Remove testing from the plan", "That trades a resource problem for a quality problem."]],
        k: "Shared goals and options before escalation." },
      { d: 2, q: "Just before sign-off, the customer asks for extra features 'at no cost, as goodwill'. What do you do?", o: [
        ["Assess it and offer options via change control", "Right. Options might be trading other scope, or extra time and cost."],
        ["Agree, to keep the customer happy", "Free scope changes erode the baseline and margins."],
        ["Refuse flatly; the contract is fixed", "A flat no damages the relationship; explore options."],
        ["Add them quietly after sign-off", "Undocumented scope is still scope creep."]],
        k: "Requests become options, through change control." },
      { d: 2, q: "A vendor quotes $30,000 for a change order that looks expensive. What's the best next step?", o: [
        ["Ask for a breakdown and check it independently", "Right. Get the cost breakdown and compare it with an independent estimate, so the negotiation is about facts."],
        ["Accept it, to avoid delaying the rest of the work", "You'd be paying without knowing whether it's fair."],
        ["Counter with $15,000, half their price, and see what they say", "Splitting arbitrarily ignores what the work actually costs."],
        ["Threaten to end the contract", "Coercion damages the relationship and may breach the contract."]],
        k: "Negotiate on objective criteria." },
      { d: 3, q: "You're negotiating with stakeholders from a culture where saying 'no' directly is considered rude. They keep saying 'we'll try'. How do you handle it?", o: [
        ["Read indirect signals and confirm in writing", "Right. Allow time, adapt to their style, and confirm agreements clearly in writing."],
        ["Treat 'we'll try' as a firm yes", "It may be a polite no."],
        ["Push them to give a direct yes or no in the meeting", "That can cause embarrassment and damage trust."],
        ["Leave them out of decisions until they're clearer", "Excluding stakeholders creates bigger problems later."]],
        k: "Adapt to cultural norms; confirm commitments in writing." },
      { d: 2, q: "You and a supplier reach a verbal agreement on a revised delivery date. What should you do next?", o: [
        ["Write it down and confirm it with everyone", "Right. A shared written record prevents later disputes."],
        ["Nothing; a handshake between professionals is enough", "Memories differ, and people move on."],
        ["Tell your team and leave the supplier to remember", "Both sides need the same record."],
        ["Wait until the date arrives to see whether they deliver", "That's too late to discover a misunderstanding."]],
        k: "Agreements aren't done until they're written and confirmed." },
      { d: 3, q: "The sponsor demands the schedule shortened by 20% with the same scope, budget and team. How do you negotiate?", o: [
        ["Show the trade-offs and offer options", "Right. Use data to show the trade-offs, and offer options such as reducing scope, adding resources or accepting more risk."],
        ["Agree, and ask the team to work overtime", "Overwork isn't a plan and hides the real trade-off."],
        ["Refuse, as the plan is already approved", "Plans change; your job is to inform the decision."],
        ["Agree publicly, then report a delay later", "That's dishonest and removes options."]],
        k: "Negotiate with trade-offs, not promises." },
      { d: 2, q: "Two team members argue over who gets the only test rig this week. What's the best way to resolve it?", o: [
        ["Help them agree a shared schedule", "Right. Get them talking about what each needs; collaborating meets both needs where possible."],
        ["Give it to the more senior person", "Seniority doesn't decide project priority."],
        ["Toss a coin", "Random choice ignores real needs."],
        ["Tell them to sort it out themselves", "Withdrawing leaves the conflict to grow."]],
        k: "Collaborate on needs before ruling." }
    ],
    flips: [
      { d: 2, f: "Walk through how you'd prepare for and run a negotiation over a vendor's change order.", b: "Prepare: understand the change, its value to you, your budget limits and your BATNA (another supplier, doing it in-house, or dropping it). Ask for the vendor's cost breakdown and get an independent estimate. In the meeting, explore their interests (cash flow, timing, future work) as well as price, use objective criteria such as market rates and contract terms, and look for options that work for both. Write down and confirm what's agreed, and put it through change control." }
    ]
  },

  /* ---------------------------------------------------------------- 25 */
  {
    id: "virtual-teams",
    title: "Virtual and distributed teams",
    summary: "Most project teams now work at least partly remotely. Distance makes trust, communication and inclusion harder, so they need deliberate effort. Agree working norms in a team charter: core overlap hours, which tool is used for what, how fast people should respond, and how decisions are recorded. Spread the pain of time zones by rotating meeting times, and use asynchronous updates for anything that doesn't need a live conversation. Choose richer media (video or a call) for sensitive, complex or tense topics, and leaner media (chat, email) for simple updates. Make work and decisions visible to everyone, so people at the smaller sites aren't left out. Check in individually with quiet members. Discuss cultural differences in feedback, hierarchy and directness openly. Invest early in relationships: a kickoff with real introductions, and face-to-face time when it's possible.",
    terms: [
      ["Asynchronous communication", "Communication that doesn't need people to be online at the same time, such as shared documents, recorded updates or message threads.", "A written daily update instead of a stand-up across five time zones."],
      ["Core overlap hours", "An agreed window when everyone on a distributed team is available for live collaboration.", "11 am to 1 pm Auckland time, which is the evening before in London."],
      ["Media richness", "How much information a channel carries, such as tone, body language and instant feedback; richer media suit complex or sensitive messages.", "A video call, not an email, for difficult feedback."]
    ],
    cards: [
      { d: 1, q: "What's usually the biggest challenge for a virtual team?", o: [
        ["Trust and communication across distance", "Right. Most remote problems trace back to these."],
        ["Finding enough software tools", "Tools are plentiful; using them well is the challenge."],
        ["Keeping everyone's hours identical", "Identical hours aren't needed, or realistic across time zones."],
        ["Monitoring keyboard activity", "Surveillance destroys trust and doesn't measure outcomes."]],
        k: "Remote teams run on trust and communication." },
      { d: 2, q: "Your team spans Auckland, Manila and London, and the weekly planning meeting always falls in London's night. What's the fairest fix?", o: [
        ["Rotate the time, and go async for updates", "Right. Rotate the meeting time to share the inconvenience, and move routine updates to asynchronous channels."],
        ["Keep it at Auckland's best time, since the PM is there", "That always puts the burden on the same people."],
        ["Drop the London members from planning", "Excluding them hurts both the plan and morale."],
        ["Record it and ask London to watch later", "Recordings help, but people still need a voice in planning."]],
        k: "Rotate the pain; go async where you can." },
      { d: 2, q: "A remote team member rarely speaks in video meetings, though their written work is strong. What's the best approach?", o: [
        ["Talk one-on-one and add written input", "Right. Check in with them one-on-one, and add ways to contribute such as round-robins or written input."],
        ["Call on them by name to force participation", "Putting people on the spot can make it worse."],
        ["Assume they've got nothing to add", "Quiet doesn't mean disengaged or without ideas."],
        ["Record their silence in their performance review", "Treats a style difference as a performance issue."]],
        k: "Create more than one way to contribute." },
      { d: 2, q: "You're kicking off a new distributed team. What should go into the team charter?", o: [
        ["Hours, tools, response times and decisions", "Right. Overlap hours, which tool to use for what, response times and how decisions are recorded: explicit norms replace office cues."],
        ["Only the project objectives and the budget", "Those matter, but working norms are what remote teams most need."],
        ["Each person's home address and personal phone number", "That's private information, not working norms."],
        ["A rule that everyone uses video all day", "Constant video is tiring and rarely necessary."]],
        k: "Write down how you'll work together." },
      { d: 2, q: "A disagreement between two remote team members is escalating in a chat thread. What do you do?", o: [
        ["Move it to a video call to talk it through", "Right. Richer media carry tone and allow quick clarification."],
        ["Let them finish the argument in the thread", "Text strips out tone and tends to escalate conflict."],
        ["Delete the thread to stop it", "That removes the evidence, not the problem."],
        ["Reply to everyone with a ruling on who's right", "A public ruling embarrasses people and skips understanding."]],
        k: "Tension in text? Switch to a richer medium." },
      { d: 3, q: "The smaller Wellington site feels decisions are made in Auckland's corridors and only shared afterwards. What's the best response?", o: [
        ["Make decisions visible and rotate facilitation", "Right. Make decisions in shared forums or record them visibly, and rotate facilitation, so every site has a voice."],
        ["Tell Wellington that Auckland is where the leadership sits", "That confirms their fear and hurts engagement."],
        ["Move all decisions to email so there's a written record", "Email alone can leave people out of the reasoning."],
        ["Close the Wellington site and bring everyone into Auckland", "An extreme response to a fixable process problem."]],
        k: "Make decisions visible and inclusive." },
      { d: 2, q: "Your team uses chat, email, two messaging apps and a shared drive, and updates keep getting lost. What's the fix?", o: [
        ["One agreed home for each kind of information", "Right. Agree one place for each type of information, with a single source of truth for status."],
        ["Add a project management tool on top of the others", "Another channel adds to the confusion unless you agree how it's used."],
        ["Ask people to post everything everywhere, to be safe", "Duplication makes it harder to find what's current."],
        ["Let each person use their favourite tool", "That's what caused the problem."]],
        k: "One agreed home for each kind of information." },
      { d: 3, q: "Team members from different cultures react very differently to direct feedback: some find it helpful, others hurtful. What's the best approach?", o: [
        ["Discuss norms openly and adapt", "Right. Discuss feedback norms openly as a team, and adapt how you give feedback to each person."],
        ["Use the same blunt style with everyone, for fairness", "Treating people identically isn't the same as treating them fairly."],
        ["Stop giving feedback to avoid offence", "People need feedback to grow."],
        ["Give feedback only in writing", "Writing can feel even harsher without tone."]],
        k: "Name cultural differences and adapt." }
    ],
    flips: [
      { d: 2, f: "List the working norms a distributed team should agree in its charter.", b: "Core overlap hours and time-zone rules (including rotating meeting times); which channel to use for what (chat for quick questions, the board for work status, video for complex or sensitive topics); expected response times; where documents and decisions live, as a single source of truth; how decisions are made and recorded; meeting etiquette, such as cameras and agendas; and how to raise problems or conflicts." }
    ]
  },

  /* ---------------------------------------------------------------- 26 */
  {
    id: "documentation",
    title: "Documentation and configuration management",
    summary: "Good project documentation is accurate, current, findable and no heavier than it needs to be. Configuration management controls the specifications of deliverables (drawings, code, documents) and their versions: identifying each item, controlling changes to it, recording its status, and auditing that what's built matches what was approved. Version control keeps one current version that everyone uses, with a history of changes. Logs have different jobs: the issue log tracks problems happening now; the risk register tracks uncertain events that might happen; the change log records change requests and their decisions; the decision log records what was decided, why and by whom; and the assumption log lists what you've assumed to be true, so you can check it. A requirements traceability matrix links each requirement to its source and to the deliverables and tests that satisfy it. Agile teams keep 'just enough' documentation that has value, such as a clear backlog, definitions of done and information radiators. At closure, archive records according to the organisation's retention policy, and protect confidential documents with access controls.",
    terms: [
      ["Configuration management", "Controlling the specifications of deliverables and their versions: identifying items, controlling changes, recording status and auditing what's built against what was approved.", "Making sure the installed controllers match the approved, current drawing revision."],
      ["Decision log", "A record of key decisions: what was decided, why, by whom and when.", "Choosing vendor B for its support, despite a higher price."],
      ["Assumption log", "A list of things the team has assumed to be true, with owners, so they can be checked and turned into risks or issues if they prove false.", "Assuming the client will provide site access from 1 March."],
      ["Requirements traceability matrix", "A table linking each requirement to its source and to the deliverables and tests that satisfy it.", "Requirement R12 traces to the board's request, design section 4 and test case T31."]
    ],
    cards: [
      { d: 1, q: "What is configuration management on a project?", o: [
        ["Controlling deliverable versions", "Right. It controls deliverables' specifications and versions, and changes to them, so what's built matches what was approved."],
        ["Setting up the team's laptops and software", "That's IT configuration, not project configuration management."],
        ["Arranging the project team's structure", "That's organisational design."],
        ["Choosing the project's development approach", "That's tailoring."]],
        k: "Configuration management: the right version of every deliverable." },
      { d: 2, q: "Site crews are working from two different versions of the same drawing. What's the best fix?", o: [
        ["Keep one controlled version and withdraw old copies", "Right. Set up one controlled current version, withdraw the old copies, and tell everyone where to find it."],
        ["Ask each crew to choose the version they think is right", "That guarantees inconsistent work."],
        ["Email the latest drawing and hope it's used", "Without withdrawing old copies, both stay in circulation."],
        ["Let the site supervisor decide drawing by drawing", "That creates an informal, untraceable process."]],
        k: "One controlled version, old copies withdrawn." },
      { d: 2, q: "A critical delivery has failed to arrive, and installation stops tomorrow without it. Where should this be recorded first?", o: [
        ["The issue log", "Right. It's a problem happening now, with an owner and actions."],
        ["The risk register", "It's no longer uncertain; it has happened."],
        ["The lessons-learned register", "You'll capture the lesson later, but first you need to manage it."],
        ["The assumption log", "It isn't an assumption."]],
        k: "Happening now → issue log." },
      { d: 2, q: "You assumed the client would give site access from 1 March, and you've just learned it'll be 1 April. What should you do?", o: [
        ["Log it, then manage the impact", "Right. Update the assumption log, then assess and manage the impact as an issue or a risk."],
        ["Nothing, since it was only an assumption", "The plan depends on it, so it needs action."],
        ["Delete the assumption so the log stays accurate", "Deleting it loses the record of what changed and why."],
        ["Start work off-site without telling anyone", "Unilateral changes skip analysis and approval."]],
        k: "Broken assumptions trigger action." },
      { d: 2, q: "What is a requirements traceability matrix for?", o: [
        ["Tracing requirements from source to test", "Right. It links each requirement to its source and to the deliverables and tests that meet it, so nothing gets lost and nothing unrequested sneaks in."],
        ["Listing the team's roles and responsibilities", "That's a RACI chart."],
        ["Tracking costs against the budget", "That's cost control."],
        ["Recording who attended each requirements workshop", "That's a meeting record."]],
        k: "Trace requirements from source to test." },
      { d: 3, q: "An agile team says it doesn't need any documentation because 'working software over documentation'. What's the best response?", o: [
        ["Agree just enough documentation that adds value", "Right. Keep documentation that has value, such as the backlog and support handover notes; the Agile Manifesto values working software more, not documentation at zero."],
        ["Accept it; agile teams don't document", "Handover, compliance and support still need records."],
        ["Require full predictive documentation, to be safe", "Heavy documentation that nobody uses wastes effort."],
        ["Write the documentation yourself, after the team's gone", "You'd lose the team's knowledge, and it would be late."]],
        k: "Just enough documentation, with value." },
      { d: 2, q: "At closure, what should happen to the project's records?", o: [
        ["Archive them under the retention policy", "Right. Records may be needed for audits, disputes, warranties or future projects."],
        ["Delete them to free up storage", "Some records have legal retention requirements."],
        ["Leave them on team members' laptops", "Records get lost as people move on."],
        ["Send everything to the client", "The organisation needs its own records too."]],
        k: "Archive per policy." },
      { d: 2, q: "A contractor asks for access to a folder that holds staff salary data alongside the design files. What do you do?", o: [
        ["Share only the files they need", "Right. Separate the confidential files and give least-privilege access to just what they need."],
        ["Grant full access, since they're on the project", "Being on the project doesn't entitle them to confidential data."],
        ["Refuse any access at all", "They need the design files to do their work."],
        ["Email the design files and the salary data separately", "Salary data shouldn't go to the contractor at all."]],
        k: "Least-privilege access to confidential documents." }
    ],
    flips: [
      { d: 2, f: "Tell the logs apart: issue log, risk register, change log, decision log and assumption log.", b: "Issue log: problems happening now, with owners and actions. Risk register: uncertain events that might happen, with responses. Change log: change requests and what was decided about them. Decision log: key decisions, why, by whom and when. Assumption log: things believed true but not yet proven, checked over time; if one fails, it becomes an issue or a risk." }
    ]
  },

  /* ---------------------------------------------------------------- 27 */
  {
    id: "mentoring",
    title: "Training, mentoring and coaching",
    summary: "Developing people is part of a project manager's job. Training builds specific skills through structured instruction. Coaching helps someone improve their performance in their current role, mostly by asking questions so they find their own answers. Mentoring is a longer relationship in which someone more experienced shares advice and perspective about careers and development. Start with a training needs analysis: compare the skills the work requires with the skills people have, then close the gaps with training, pairing, on-the-job learning or hiring. Onboard new people deliberately, with context, contacts, tools and an early win. Watch for single points of failure (a 'bus factor' of one) and reduce them with pairing, cross-training and documentation. Judge training by whether behaviour and results change on the job, not by attendance.",
    terms: [
      ["Coaching", "Helping someone improve performance in their current role, mainly by asking questions so they reach their own solutions.", "Asking 'What options do you see?' instead of telling them what to do."],
      ["Mentoring", "A longer-term relationship in which someone more experienced shares advice and perspective on career and development.", "A senior PM meeting a junior colleague monthly to talk through their growth."],
      ["Training needs analysis", "Comparing the skills the work requires with the skills people have, to target training where it's needed.", "Finding that only two of eight engineers can configure the new controllers."],
      ["Bus factor", "The number of people who could leave before a project stalls for lack of knowledge; a bus factor of one is a serious risk.", "Only one engineer understands the legacy integration."]
    ],
    cards: [
      { d: 1, q: "What's the main difference between coaching and mentoring?", o: [
        ["Coaching: current role. Mentoring: career", "Right. Coaching targets performance in the current role, mostly by asking questions; mentoring is longer-term career guidance from experience."],
        ["Coaching is for juniors, mentoring for executives", "Both can suit anyone."],
        ["They're the same thing under different names", "They overlap, but their focus and timeframe differ."],
        ["Mentoring is formal training with a certificate", "That's training."]],
        k: "Coach for performance now; mentor for growth over time." },
      { d: 2, q: "Your project is rolling out a new scheduling tool to 40 planners. What should come first?", o: [
        ["A training needs analysis", "Right. Find which skills each group needs and what they have now, then target training at the gaps."],
        ["The same full-day course for everyone", "Some need much more, others much less."],
        ["Send everyone the user manual", "Manuals rarely build skills by themselves."],
        ["Train only the planners who ask for it", "Those who don't ask may need it most."]],
        k: "Analyse needs before you train." },
      { d: 2, q: "A new engineer joins mid-project. Which onboarding plan works best?", o: [
        ["Context, contacts, tools, a buddy and an early win", "Right. People get productive faster with structure and support."],
        ["Give them the project folder and let them read", "Reading alone is slow and lonely."],
        ["Put them straight onto the critical path to save time", "Risky for them and the project."],
        ["Wait for a quiet period before onboarding them", "Delay wastes their time and yours."]],
        k: "Structured onboarding gets people productive." },
      { d: 2, q: "Only one engineer understands the legacy integration your project depends on. What should you do?", o: [
        ["Pair someone with them and document it", "Right. Pair a second engineer with them and document the integration as you go, before the single point of failure bites."],
        ["Offer a bonus so they never leave", "No bonus guarantees someone stays, or stays well."],
        ["Accept the risk; it's always been this way", "It's a known, serious risk with simple responses."],
        ["Ask them to do all the integration work faster", "Speed doesn't spread the knowledge."]],
        k: "Bus factor of one? Pair and document." },
      { d: 3, q: "A team member asks you how to solve a design problem you could answer in seconds. They're capable but lack confidence. As a coach, what do you do?", o: [
        ["Ask questions that lead them to the answer", "Right. They build skill and confidence, and you'll get fewer such questions later."],
        ["Give them the answer, to save both of you some time", "Quick today, but it keeps them dependent."],
        ["Tell them to work it out alone and walk away", "That's abandonment, not coaching."],
        ["Reassign the task to someone more experienced", "That removes the chance to grow."]],
        k: "Coach with questions, not answers." },
      { d: 2, q: "A junior team member asks for advice on becoming a project manager. What's the most useful response?", o: [
        ["Offer mentoring, or find them a mentor", "Right. Career growth suits an ongoing mentoring relationship."],
        ["Send them a link to a PMP course", "A course may help later, but they asked for guidance."],
        ["Tell them to focus on their current role", "That shuts down growth they're asking for."],
        ["Promise them a PM role on your next project", "You can't promise roles you don't control."]],
        k: "Career questions → mentoring." },
      { d: 2, q: "Your training budget can't cover everything the team wants to learn. How do you prioritise?", o: [
        ["Fund the most critical gaps; pair for the rest", "Right. Fund the skills most critical to the project's risks and goals, and use pairing and on-the-job learning for the rest."],
        ["Split the budget equally between everyone on the team", "Equal isn't the same as effective."],
        ["Fund whoever asked first", "Order of asking isn't a priority."],
        ["Cancel training until there's more budget", "Gaps don't wait for budgets."]],
        k: "Train where the gaps hurt most." },
      { d: 3, q: "How should you judge whether training actually worked?", o: [
        ["By changed behaviour and results on the job", "Right. Attendance and smile sheets don't show changed behaviour."],
        ["By how many people attended", "Attendance shows exposure, not learning."],
        ["By the participants' satisfaction scores", "People can enjoy training that changes nothing."],
        ["By how much the training cost", "Cost says nothing about results."]],
        k: "Training works when behaviour and results change." }
    ],
    flips: [
      { d: 2, f: "Training, coaching or mentoring? Give an example of when you'd use each.", b: "Training: teaching specific skills, such as configuring a new controller, through structured instruction. Coaching: helping someone improve in their current role, such as running better client meetings, mostly by asking questions so they find the answers. Mentoring: an ongoing relationship for career growth, such as a senior PM guiding a junior colleague towards leading their own projects." }
    ]
  },

  /* ---------------------------------------------------------------- 28 */
  {
    id: "case-hospital",
    title: "Case study: the hospital booking app",
    summary: "The 2026 exam adds case-study sets: several questions about one evolving situation. Here's the case. A regional hospital is replacing phone bookings with a patient booking app and a new front-desk process. A vendor builds the app in two-week sprints; the hospital's IT team integrates it with the patient record system. The overall approach is hybrid: a fixed go-live date agreed with the regional health board, stage gates for funding, and agile delivery inside. Stakeholders include clinicians, front-desk staff, IT security, the health board and patients. The sponsor is the hospital's operations director; the benefit is that 40% of bookings move online within six months, cutting call volumes and missed appointments. Each question is a new moment in the project: read it, decide what a good project manager would do next, then see the reasoning.",
    terms: [
      ["Case-study set", "A 2026 PMP exam format in which several questions refer to the same scenario as it develops.", "Five questions following one hospital project from kickoff to benefits review."]
    ],
    cards: [
      { d: 2, q: "Case, kickoff: senior clinicians say the app will 'create chaos at clinics' and decline to join design sessions. What's your best first move?", o: [
        ["Understand their concerns and involve them", "Right. Meet them to understand their concerns and involve them in shaping the design; their support is needed for adoption."],
        ["Ask the sponsor to order them to attend", "Forced attendance rarely produces support."],
        ["Proceed without them and show them the finished app", "Late involvement guarantees resistance."],
        ["Record them as resistant in the stakeholder register and move on", "Labelling isn't engaging."]],
        k: "Resistant stakeholders: understand, then involve." },
      { d: 2, q: "Case, sprint 3 review: the demo shows nice-to-have features, while the clinic scheduling rules clinicians need are still in the backlog. What do you do?", o: [
        ["Get the product owner to reorder by value", "Right. Work with the product owner to reorder the backlog by value, with clinicians' input."],
        ["Tell the vendor's developers what to build next", "The product owner prioritises the backlog."],
        ["Add a sprint at the end for the scheduling rules", "That delays the most valuable work and risks the date."],
        ["Accept it; the team chose its own priorities", "Self-organising teams decide how, not what matters most."]],
        k: "Value drives the backlog order." },
      { d: 3, q: "Case, month 3: IT security finds that the vendor stores patient data in an overseas cloud region, against hospital policy and privacy obligations. What's your best response?", o: [
        ["Escalate it as an issue and fix it before go-live", "Right. Log it as an issue, escalate through governance, and agree a compliant fix before go-live; a patient-data breach isn't negotiable."],
        ["Let it go, since the vendor says the data is encrypted", "Encryption doesn't satisfy a data-location requirement."],
        ["Ask the vendor to fix it after go-live", "Live patient data would breach the policy from day one."],
        ["Cancel the vendor's contract immediately", "Premature; first assess the contract terms and options."]],
        k: "Compliance problems get fixed before go-live." },
      { d: 2, q: "Case, month 4: front-desk staff are anxious about the new process, and two have told their union rep they won't use it. What's the best approach?", o: [
        ["Involve them, train them and use champions", "Right. Treat it as organisational change: involve them in redesigning the process, train them, and use champions."],
        ["Tell them it's mandatory and set a deadline", "Compliance without commitment rarely lasts."],
        ["Leave the union out of the conversation", "Engaging their representative early usually helps."],
        ["Delay training until the week of go-live", "Late training adds to the anxiety."]],
        k: "Front-line adoption is change management." },
      { d: 3, q: "Case, month 4 report: the CPI is 0.9 and the SPI is 1.05. What's the best reading, and your next step?", o: [
        ["Ahead of schedule, over budget: find the cost driver", "Right. Speed may be costing money, for example through overtime or extra vendor hours; find what's driving the cost before it grows."],
        ["On track overall, since the two indices average out", "Indices don't cancel each other."],
        ["Behind schedule and under budget; add resources", "That reads both indices backwards."],
        ["Over budget and behind schedule; escalate immediately", "SPI above 1 means ahead of schedule."]],
        k: "CPI < 1: over budget. SPI > 1: ahead of schedule." },
      { d: 2, q: "Case, month 5: the vendor's lead developer resigns. What's your first step?", o: [
        ["Log it, assess it, and use the contract", "Right. Log the issue, assess the impact, and ask the vendor for a replacement under the contract."],
        ["Hire the developer directly", "That may breach the contract and creates new risks."],
        ["Push the go-live date back straight away", "Assess the impact before changing the plan."],
        ["Ask your IT team to take over the vendor's code", "A big unilateral change with unknown risk."]],
        k: "Issue → impact → the contractual route." },
      { d: 3, q: "Case, month 5: the health board asks for go-live two weeks early, to coincide with a ministerial announcement. What do you do?", o: [
        ["Give options; keep the safety gates", "Right. Assess the impact and present options to the sponsor and board, keeping the safety and testing gates."],
        ["Agree, and shorten testing to make it", "Cutting patient-system testing creates safety risk."],
        ["Refuse, since the date is in the contract", "The board may have good reasons; give them options."],
        ["Agree, and hope the team can catch up", "Hope isn't a plan."]],
        k: "Date pressure → options, with safety gates intact." },
      { d: 2, q: "Case, three months after go-live: only 15% of bookings are online, against a 40% target. What's the right response?", o: [
        ["Find out why with the benefit owner, and act", "Right. Work with the benefit owner to find out why, and plan actions such as patient communications or easier sign-up; benefits realisation continues after closure."],
        ["Nothing; the project closed when the app went live", "Delivering the app wasn't the goal; the benefit was."],
        ["Lower the target to 15%", "Moving the goalposts hides the problem."],
        ["Blame the front-desk staff for not promoting it", "Find causes before assigning blame."]],
        k: "After go-live, chase the benefit, not blame." }
    ],
    flips: [
      { d: 3, f: "Looking back on the hospital case, which PMP mindset habits does it test?", b: "Engage resistant stakeholders early; let value order the backlog, through the product owner; treat compliance and safety as non-negotiable; manage adoption as organisational change; read EVM indices separately and investigate causes; follow the contract when vendor issues arise; answer date pressure with options rather than promises; and keep chasing benefits after go-live." }
    ]
  }

  ]
});
