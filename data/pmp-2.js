/* Course 6 · PMP-style scenarios. Part 2: the Process domain gaps (integration and scope, resources, schedule,
   budget and reserves, earned value, quality, status and closure). First option is correct; the app shuffles. */

PMQ.fig("schedule-net", `<svg viewBox="0 0 600 180" role="img" aria-label="A small schedule network with activities A to E and their durations">
<defs><marker id="ah-pmsn" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<rect class="bx" x="4" y="72" width="56" height="32" rx="16"/><text class="tc" x="32" y="92" text-anchor="middle">Start</text>
<rect class="bx" x="100" y="18" width="110" height="46" rx="5"/><text class="tb" x="112" y="37">A</text><text class="t2" x="112" y="54">4 days</text>
<rect class="bx" x="100" y="112" width="110" height="46" rx="5"/><text class="tb" x="112" y="131">B</text><text class="t2" x="112" y="148">3 days</text>
<rect class="bx" x="250" y="18" width="110" height="46" rx="5"/><text class="tb" x="262" y="37">C</text><text class="t2" x="262" y="54">5 days</text>
<rect class="bx" x="250" y="112" width="110" height="46" rx="5"/><text class="tb" x="262" y="131">D</text><text class="t2" x="262" y="148">4 days</text>
<rect class="bx" x="400" y="65" width="110" height="46" rx="5"/><text class="tb" x="412" y="84">E</text><text class="t2" x="412" y="101">3 days</text>
<rect class="bx" x="540" y="72" width="56" height="32" rx="16"/><text class="tc" x="568" y="92" text-anchor="middle">Finish</text>
<path class="s" d="M60 82 L97 45" marker-end="url(#ah-pmsn)"/><path class="s" d="M60 94 L97 131" marker-end="url(#ah-pmsn)"/>
<path class="s" d="M210 41 H247" marker-end="url(#ah-pmsn)"/><path class="s" d="M210 135 H247" marker-end="url(#ah-pmsn)"/>
<path class="s" d="M360 46 L397 80" marker-end="url(#ah-pmsn)"/><path class="s" d="M360 130 L397 97" marker-end="url(#ah-pmsn)"/>
<path class="s" d="M510 88 H537" marker-end="url(#ah-pmsn)"/>
<text class="t2" x="4" y="176">Illustrative durations in days</text>
</svg>`);

PMQ.fig("reserves", `<svg viewBox="0 0 600 198" role="img" aria-label="How work package estimates, contingency reserve and management reserve build the cost baseline and project budget">
<rect class="bx" x="20" y="96" width="120" height="80" rx="3"/><text class="tc" x="80" y="140" text-anchor="middle">work packages</text>
<rect class="soft" x="20" y="64" width="120" height="32" rx="3"/><text class="tc" x="80" y="84" text-anchor="middle">contingency</text>
<rect class="bx" x="170" y="96" width="120" height="80" rx="3"/><text class="tc" x="230" y="140" text-anchor="middle">work packages</text>
<rect class="soft" x="170" y="64" width="120" height="32" rx="3"/><text class="tc" x="230" y="84" text-anchor="middle">contingency</text>
<rect class="acc" x="170" y="32" width="120" height="32" rx="3"/><text class="tw" x="230" y="52" text-anchor="middle">mgmt reserve</text>
<text class="tb" x="80" y="194" text-anchor="middle">Cost baseline</text><text class="tb" x="230" y="194" text-anchor="middle">Project budget</text>
<text class="ta" x="312" y="40">Management reserve</text><text class="t2" x="312" y="54">unknown unknowns · outside the baseline</text><text class="t2" x="312" y="68">released with management approval</text>
<text class="ta" x="312" y="88">Contingency reserve</text><text class="t2" x="312" y="102">known unknowns (identified risks)</text><text class="t2" x="312" y="116">inside the baseline · used per the risk plan</text>
<text class="ta" x="312" y="140">Work package estimates</text><text class="t2" x="312" y="154">activity estimates rolled up</text><text class="t2" x="312" y="168">into control accounts</text>
</svg>`);

PMQ.fig("evm-curve", `<svg viewBox="0 0 600 226" role="img" aria-label="Earned value chart: planned value, earned value and actual cost at month 5"><line class="s2" x1="60" x2="560" y1="190.0" y2="190.0"/><text class="t2" x="54" y="194.0" text-anchor="end">0</text><line class="s2" x1="60" x2="560" y1="152.5" y2="152.5"/><text class="t2" x="54" y="156.5" text-anchor="end">25</text><line class="s2" x1="60" x2="560" y1="115.0" y2="115.0"/><text class="t2" x="54" y="119.0" text-anchor="end">50</text><line class="s2" x1="60" x2="560" y1="77.5" y2="77.5"/><text class="t2" x="54" y="81.5" text-anchor="end">75</text><line class="s2" x1="60" x2="560" y1="40.0" y2="40.0"/><text class="t2" x="54" y="44.0" text-anchor="end">100</text><text class="t2" x="60" y="206" text-anchor="middle">0</text><text class="t2" x="160" y="206" text-anchor="middle">2</text><text class="t2" x="260" y="206" text-anchor="middle">4</text><text class="t2" x="360" y="206" text-anchor="middle">6</text><text class="t2" x="460" y="206" text-anchor="middle">8</text><text class="t2" x="560" y="206" text-anchor="middle">10</text><text class="t2" x="8" y="12">$k</text><text class="t2" x="560" y="222" text-anchor="end">months</text><line class="dash" x1="310" x2="310" y1="22" y2="190"/><text class="t2" x="314" y="30">status date</text><path class="s" d="M60 190.0 L110 184.0 L160 175.0 L210 160.0 L260 139.0 L310 115.0 L360 91.0 L410 70.0 L460 55.0 L510 46.0 L560 40.0"/><path class="bad-s" d="M60 190.0 L110 184.0 L160 175.0 L210 160.0 L260 140.5 L310 118.0"/><path class="acc-s" d="M60 190.0 L110 185.5 L160 178.0 L210 166.0 L260 149.5 L310 130.0"/><text class="tc" x="556" y="32.0" text-anchor="end">PV · BAC $100k</text><text class="tbad" x="302" y="110.0" text-anchor="end">AC</text><text class="ta" x="302" y="148.0" text-anchor="end">EV</text><rect class="bx" x="66" y="20" width="196" height="54" rx="4"/><text class="tb" x="76" y="38">At month 5:</text><text class="t2" x="76" y="53">PV $50k · EV $40k · AC $48k</text><text class="t2" x="76" y="67">Illustrative figures</text></svg>`);

PMQ.fig("coq", `<svg viewBox="0 0 600 160" role="img" aria-label="The four categories of the cost of quality">
<rect class="bx" x="1" y="8" width="294" height="118" rx="5"/><rect class="bx" x="305" y="8" width="294" height="118" rx="5"/>
<text class="tb" x="11" y="30">Cost of conformance</text>
<text class="ta" x="11" y="54">Prevention</text><text class="t2" x="11" y="68">training, design reviews, better processes</text>
<text class="ta" x="11" y="92">Appraisal</text><text class="t2" x="11" y="106">testing, inspection, audits</text>
<text class="tb" x="315" y="30">Cost of nonconformance</text>
<text class="ta" x="315" y="54">Internal failure</text><text class="t2" x="315" y="68">rework and scrap before handover</text>
<text class="ta" x="315" y="92">External failure</text><text class="t2" x="315" y="106">warranty, call-backs, liability, reputation</text>
<text class="t" x="1" y="150">Spend on prevention to cut failure costs; external failure costs most.</text>
</svg>`);

PMQ.fig("control-chart", `<svg viewBox="0 0 600 190" role="img" aria-label="Control chart with all points inside the limits but seven in a row above the mean"><line class="dash" x1="40" x2="560" y1="34.0" y2="34.0"/><line class="s2" x1="40" x2="560" y1="100.0" y2="100.0"/><line class="dash" x1="40" x2="560" y1="166.0" y2="166.0"/><text class="t2" x="566" y="38.0">UCL</text><text class="t2" x="566" y="104.0">mean</text><text class="t2" x="566" y="170.0">LCL</text><rect class="acc-s" x="301" y="57.0" width="174" height="44.2" rx="8"/><path class="s" d="M50 97.8 L76 117.6 L102 82.4 L128 108.8 L154 73.6 L180 126.4 L206 91.2 L232 111.0 L258 102.2 L284 122.0 L310 86.8 L336 78.0 L362 91.2 L388 67.0 L414 82.4 L440 73.6 L466 84.6 L492 106.6 L518 115.4 L544 95.6"/><circle class="acc" cx="50" cy="97.8" r="3.5"/><circle class="acc" cx="76" cy="117.6" r="3.5"/><circle class="acc" cx="102" cy="82.4" r="3.5"/><circle class="acc" cx="128" cy="108.8" r="3.5"/><circle class="acc" cx="154" cy="73.6" r="3.5"/><circle class="acc" cx="180" cy="126.4" r="3.5"/><circle class="acc" cx="206" cy="91.2" r="3.5"/><circle class="acc" cx="232" cy="111.0" r="3.5"/><circle class="acc" cx="258" cy="102.2" r="3.5"/><circle class="acc" cx="284" cy="122.0" r="3.5"/><circle class="acc" cx="310" cy="86.8" r="3.5"/><circle class="acc" cx="336" cy="78.0" r="3.5"/><circle class="acc" cx="362" cy="91.2" r="3.5"/><circle class="acc" cx="388" cy="67.0" r="3.5"/><circle class="acc" cx="414" cy="82.4" r="3.5"/><circle class="acc" cx="440" cy="73.6" r="3.5"/><circle class="acc" cx="466" cy="84.6" r="3.5"/><circle class="acc" cx="492" cy="106.6" r="3.5"/><circle class="acc" cx="518" cy="115.4" r="3.5"/><circle class="acc" cx="544" cy="95.6" r="3.5"/><text class="ta" x="388" y="51.0" text-anchor="middle">7 in a row above the mean</text><text class="t2" x="40" y="182">Daily defect rate on a production line · illustrative</text></svg>`);

PMQ.course({
  id: "pmp",
  topics: [

  /* ---------------------------------------------------------------- 10 */
  {
    id: "integration",
    title: "The integrated plan, scope and value",
    summary: "Assess the project's needs, complexity and size, then recommend a development approach (predictive, adaptive or hybrid) and an execution strategy. The integrated project management plan pulls the subsidiary plans and baselines together so they work as one: the scope, schedule and cost baselines (together, the performance measurement baseline) plus plans for quality, resources, communication, risk, procurement and stakeholder engagement. Tailor it: a small internal project doesn't need a hospital build's paperwork. Include critical information requirements, such as sustainability or security reporting, and estimate the effort and resources needed. Scope: define it, get stakeholder agreement, and break it down (a WBS in predictive work; epics, features and stories in agile). The scope baseline is the approved scope statement, WBS and WBS dictionary, and changes to it go through change control. Watch for scope creep (uncontrolled additions) and gold plating (extras nobody asked for). Value: identify what stakeholders value, prioritise by value and feedback, deliver incrementally where you can, and make sure a measurement system tracks the benefits, often long after the project closes. Check consolidated plans for dependencies, gaps and continued business value, and use data, not hunches, for decisions.",
    terms: [
      ["Integrated project management plan", "The plan that combines all subsidiary plans and baselines into one coordinated whole.", "One plan linking a BMS install's schedule, budget, risks and procurement."],
      ["Performance measurement baseline", "The integrated scope, schedule and cost baselines that performance is measured against.", "The approved plan that earned value is compared with."],
      ["Benefits register", "A record of planned benefits: how, when and by whom each will be measured.", "Energy savings of 15%, measured monthly by facilities for two years."]
    ],
    cards: [
      { d: 1, q: "Which three baselines make up the performance measurement baseline?", o: [
        ["Scope, schedule and cost", "Correct. The scope, schedule and cost baselines together form the performance measurement baseline."],
        ["Schedule, cost and resources", "Resources aren't a separate baseline."],
        ["Cost, risk and procurement", "Not the three."],
        ["Scope, quality and risk", "Quality and risk have plans, not baselines in the PMB."]],
        k: "PMB = scope + schedule + cost." },
      { d: 1, q: "What makes up the scope baseline?", o: [
        ["Scope statement, WBS and WBS dictionary", "Correct. Approved, and changed only through change control."],
        ["Requirements documentation and the change log", "Inputs and records, not the baseline."],
        ["Project charter and business case", "Those authorise and justify the project."],
        ["Gantt chart and milestone list", "That's schedule."]],
        k: "Scope baseline = statement + WBS + dictionary." },
      { d: 1, q: "What's gold plating?", o: [
        ["Adding extras the customer didn't ask for", "Correct. It adds cost, time and risk without agreement."],
        ["Uncontrolled growth in scope from stakeholder requests", "That's scope creep."],
        ["Using premium materials the contract requires", "If it's required, it's scope."],
        ["Approving a change through the change board", "That's proper change control."]],
        k: "Gold plating: unrequested extras." },
      { d: 2, q: "A small, low-risk internal project is told to use the full corporate template, including a 40-page risk plan. What's the best approach?", o: [
        ["Tailor the documents to the project's needs", "Correct. Within policy, fit the process to the project."],
        ["Skip planning entirely since the project is small", "Under-planning is the opposite error."],
        ["Use the full template; consistency matters most", "Over-processing wastes effort."],
        ["Ask the PMO to waive all documentation", "Tailor, don't abandon."]],
        k: "Tailor to fit." },
      { d: 2, q: "On a campus store upgrade, a team member adds a loyalty-card feature nobody requested “because it was easy”. What's this, and what's the response?", o: [
        ["Gold plating: remove it unless approved", "Correct. Easy extras still carry cost, testing and risk."],
        ["Good initiative: show it to the client as a bonus", "Unrequested extras add risk and cost."],
        ["Scope creep: add it to the baseline retroactively", "Retroactive baselining hides the problem."],
        ["Value delivery: record it as a benefit", "Unrequested work isn't value delivery."]],
        k: "Easy isn't the same as agreed." },
      { d: 2, q: "Who should agree the project scope before it's baselined?", o: [
        ["Sponsor, customer and key stakeholders", "Correct. They must agree what's being delivered."],
        ["The project manager, who owns the scope", "The PM manages it but doesn't own the agreement."],
        ["The project team only, since they do the work", "Stakeholders must agree what's being delivered."],
        ["The vendor, since they'll price it", "Vendors price agreed scope."]],
        k: "Scope is agreed with stakeholders." },
      { d: 3, q: "A new BMS will save energy, but nobody has said how the savings will be measured after handover. What's the best move?", o: [
        ["Agree benefit measures, owners and baselines now", "Correct. Without a baseline and an owner, benefits can't be shown."],
        ["Leave it to operations to work out after go-live", "Too late to set a baseline."],
        ["Measure energy use only during commissioning", "Benefits often arrive after the project."],
        ["Estimate the savings in the closure report", "An estimate isn't measurement."]],
        k: "Plan how benefits will be measured." },
      { d: 3, q: "A hardware rollout has fixed lead times, but its dashboard software needs frequent user feedback. What approach fits best?", o: [
        ["Hybrid: plan hardware, iterate software", "Correct. Fit the approach to each part of the work."],
        ["Predictive for everything, to keep one plan", "Locks in software requirements too early."],
        ["Agile for everything, including procurement", "Long lead times need firm planning."],
        ["Whichever the vendor prefers", "The approach should fit the work, not the vendor."]],
        k: "Mixed work, hybrid approach." }
    ],
    flips: [
      { d: 2, f: "Scope creep versus gold plating.", b: "Scope creep: scope grows without control, usually through requests that skip change control. Gold plating: the team adds extras nobody asked for. Both add cost, time and risk; the cure is a clear scope baseline and change control." }
    ]
  },

  /* ---------------------------------------------------------------- 11 */
  {
    id: "resources",
    title: "Planning and managing resources",
    summary: "Define resource needs from the scope and schedule: people with the right skills, plus equipment, materials, facilities and access. Record availability in resource calendars, and make clear who does what (a responsibility matrix such as RACI). In matrix organisations you negotiate for people with the functional managers who control their time: agree commitments in advance, and resolve clashes directly before escalating. Resource levelling adjusts dates to fit limited resources, which can extend the schedule and change the critical path; resource smoothing moves work only within float, so the end date holds, though some peaks may remain. Keep optimising as conditions change: track utilisation, rebalance workloads, deal with burnout and skill gaps through training or pairing, and plan for the lead times of physical resources. Virtual teams widen the talent pool but need deliberate communication. In agile, keep teams stable and dedicated where possible, and let the team pull work rather than assigning individuals.",
    terms: [
      ["Resource levelling", "Adjusting activity dates to balance resource demand with supply, which can extend the schedule and change the critical path.", "Delaying a task because the only crane is booked."],
      ["Resource smoothing", "Rescheduling activities within their float to even out resource demand without changing the end date.", "Moving a non-critical cabling task two days later."],
      ["Resource calendar", "A record of when each resource is available.", "The commissioning engineer is away 14–25 March."]
    ],
    cards: [
      { d: 1, q: "Which technique can extend the project end date to resolve resource overallocation?", o: [
        ["Resource levelling", "Correct. It can also change the critical path."],
        ["Resource smoothing", "Works only within float, so the end date holds."],
        ["Fast tracking", "Compresses the schedule; doesn't fix overallocation."],
        ["Crashing", "Adds resources to shorten the schedule."]],
        k: "Levelling can move the end date; smoothing can't." },
      { d: 1, q: "In a matrix organisation, who usually controls a team member's availability?", o: [
        ["Their functional manager", "Correct. The PM negotiates with them for commitments."],
        ["The project manager alone", "PMs negotiate for people in a matrix."],
        ["The team member themselves", "Not on their own."],
        ["The project sponsor", "Sponsors fund and support; they don't schedule staff."]],
        k: "In a matrix, negotiate with functional managers." },
      { d: 2, q: "Your electrician is booked on two tasks on the same day, but one task has three days of float. What's the best fix?", o: [
        ["Shift the task that has float", "Correct. Smoothing within float keeps the end date."],
        ["Fast track by overlapping the two tasks", "One person can't do both at once."],
        ["Extend the project end date by a day", "Not needed; there's float."],
        ["Crash both tasks by adding overtime", "Unnecessary cost; float solves it."]],
        k: "Use float before spending money." },
      { d: 2, q: "A functional manager pulls your committed designer onto another project without warning. What's your first move?", o: [
        ["Talk to the manager about the impact", "Correct. Revisit the commitment directly, then escalate if you must."],
        ["Ask the designer to keep working for you secretly", "Unethical, and it puts them in a bind."],
        ["Replan without the designer and say nothing", "Accepts the impact silently."],
        ["Escalate to the sponsor immediately", "Try resolving it directly first."]],
        k: "Go to the source first." },
      { d: 2, q: "Your team has worked weekends for a month to hold the date, and two people are showing signs of burnout. What's the best move?", o: [
        ["Rebalance work and revisit the plan", "Correct. Sustainable pace protects quality and people."],
        ["Replace the two people with fresh staff", "Loses knowledge and trust."],
        ["Keep pushing; it's only until go-live", "Burnout causes errors and resignations."],
        ["Offer them a bonus to keep going", "Money doesn't cure exhaustion."]],
        k: "Burnout is a resource risk." },
      { d: 3, q: "The schedule shows fire dampers installed in week 10, but they have a 12-week lead time. What's the best move?", o: [
        ["Order now and resequence work to absorb the gap", "Correct. Then check whether the end date is really affected."],
        ["Tell the sponsor the project will be two weeks late", "Check options before declaring a slip."],
        ["Keep the date and hope the supplier is early", "Hope isn't a plan."],
        ["Install without dampers and retrofit later", "A compliance and safety risk."]],
        k: "Physical resources have lead times; plan for them." },
      { d: 3, q: "An agile team's members are each split across four projects, and velocity is erratic. What's the best recommendation?", o: [
        ["Keep the team stable and dedicated", "Correct. Context switching kills flow."],
        ["Assign tasks to individuals to track their hours", "Micro-tracking doesn't fix context switching."],
        ["Add more people to the team to boost velocity", "More people, more switching and coordination."],
        ["Lengthen sprints so the splits matter less", "Treats the symptom."]],
        k: "Dedicated teams deliver more predictably." }
    ],
    flips: [
      { d: 2, f: "Resource levelling versus resource smoothing.", b: "Levelling adjusts start and finish dates to fit limited resources; it can delay the end date and change the critical path. Smoothing moves work only within available float, so the end date and critical path don't change; it may not remove every peak." }
    ]
  },

  /* ---------------------------------------------------------------- 12 */
  {
    id: "schedule",
    title: "Estimating, float and schedule compression",
    summary: "Prepare the schedule to suit the approach: a detailed network in predictive work, a release plan with sprints and story points in agile, or both. Estimate with the best technique for what you know: analogous (top-down, from a similar past project; fast but rough), parametric (a unit rate times a quantity, such as 2 hours per device for 400 devices), bottom-up (estimate each work package and add them up; the most accurate and the slowest), three-point (optimistic, most likely and pessimistic, averaged as (O + M + P) ÷ 3 or, with beta/PERT weighting, (O + 4M + P) ÷ 6), and relative sizing in agile. Use benchmarks and historical data. The critical path is the longest path through the network and sets the earliest finish; its activities usually have zero total float. Total float is how long an activity can slip without delaying the project end; free float is how long it can slip without delaying its successor. To shorten the schedule, crash (add resources to critical-path activities, at extra cost) or fast-track (overlap activities that were sequential, at the risk of rework). Baseline the schedule once it's agreed, coordinate with other projects and operations, track variance or burndown, and act on trends early.",
    figs: ["schedule-net"],
    terms: [
      ["Critical path (PMP)", "The longest path through the schedule network, which sets the earliest project finish.", "A–C–E at 12 days.", 0, "schedule-net"],
      ["Total float", "How long an activity can be delayed without delaying the project end date.", "Activity D can slip 2 days."],
      ["Free float", "How long an activity can be delayed without delaying the earliest start of its successor.", "A task finishing day 6 whose successor can start day 8 has 2 days."],
      ["Crashing", "Shortening the schedule by adding resources to critical-path activities, at extra cost.", "Adding a second commissioning crew."],
      ["Fast tracking", "Shortening the schedule by overlapping activities normally done in sequence, at higher risk.", "Starting cabling before the design is fully signed off."],
      ["Three-point estimate", "An estimate from optimistic, most likely and pessimistic values: (O + M + P) ÷ 3, or (O + 4M + P) ÷ 6 with beta weighting.", "O 4, M 6, P 14 days → beta estimate 7 days."]
    ],
    cards: [
      { d: 1, q: "Which estimating technique multiplies a unit rate by a quantity?", o: [
        ["Parametric", "Correct. For example, 2 hours per device × 400 devices."],
        ["Three-point", "Uses optimistic, most likely and pessimistic values."],
        ["Analogous", "Uses a similar past project as a whole."],
        ["Bottom-up", "Estimates each work package and adds them up."]],
        k: "Parametric = rate × quantity." },
      { d: 1, q: "Using the beta (PERT) formula, what's the estimate for O = 4, M = 6 and P = 14 days?", o: [
        ["7 days", "Correct. (4 + 24 + 14) ÷ 6 = 7."],
        ["8 days", "That's the triangular average: (4 + 6 + 14) ÷ 3."],
        ["6 days", "That's just the most likely value."],
        ["9 days", "Check the weighting: (O + 4M + P) ÷ 6."]],
        k: "Beta: (O + 4M + P) ÷ 6." },
      { d: 1, q: "What's the difference between crashing and fast tracking?", o: [
        ["Crashing adds resources; fast tracking overlaps activities", "Correct. Crashing costs money; fast tracking adds risk."],
        ["Crashing overlaps activities; fast tracking adds resources", "Reversed."],
        ["Both add resources, but fast tracking costs less", "Fast tracking overlaps work."],
        ["Crashing cuts scope; fast tracking cuts quality", "Neither is about cutting scope or quality."]],
        k: "Crash = add resources. Fast-track = overlap." },
      { d: 2, q: "Look at the network. Which path is critical, and how long is the project?", fig: "schedule-net", o: [
        ["A–C–E, 12 days", "Correct. 4 + 5 + 3 = 12; B–D–E is 10."],
        ["B–D–E, 10 days", "That path has 2 days of float."],
        ["A–C–E, 10 days", "Add the durations again: 4 + 5 + 3."],
        ["B–D–E, 12 days", "Wrong path, and the wrong total."]],
        k: "The longest path is critical." },
      { d: 2, q: "In the network, activity D slips by 3 days. What happens to the project end date?", fig: "schedule-net", o: [
        ["It moves out by 1 day", "Correct. D has 2 days of float, so 1 day of the slip hits the end date."],
        ["It moves out by 3 days", "D has 2 days of float to absorb part of the slip."],
        ["It moves out by 2 days", "Subtract the float from the slip: 3 − 2."],
        ["Nothing; D isn't on the critical path", "Its float is only 2 days, and the slip is 3."]],
        k: "Slip beyond float delays the project." },
      { d: 2, q: "The sponsor wants the project finished two weeks earlier, and the budget can't grow. Which compression technique fits first?", o: [
        ["Fast tracking, accepting more risk of rework", "Correct. It costs little extra money, but adds risk."],
        ["Crashing, adding contractors to critical tasks", "Crashing costs money, which you don't have."],
        ["Resource levelling to balance the workload", "Levelling usually lengthens the schedule."],
        ["Cutting testing to save time", "Quality shortcuts aren't compression."]],
        k: "No extra money? Fast-track." },
      { d: 3, q: "You crash an activity that isn't on the critical path. What's the effect on the end date?", o: [
        ["None; it isn't on the critical path", "Correct. Only critical-path work drives the end date, so the money is wasted."],
        ["It lengthens, because crashing adds coordination", "Not inherently."],
        ["It shortens by the time saved on that activity", "Only if the activity is critical."],
        ["It shortens by half the time saved", "No such rule."]],
        k: "Only crash the critical path." },
      { d: 3, q: "Your team has never installed this BMS brand, but a sister company has done three similar jobs. How should you estimate early on?", o: [
        ["Analogous, from their actuals, then refine", "Correct. Start with history, then go bottom-up as detail emerges."],
        ["Bottom-up, in full detail, before scope is clear", "Too much effort with too little information."],
        ["Use the vendor's sales estimate as the plan", "Optimistic and unverified."],
        ["Guess generously, so you won't be late", "Padding hides risk; use data."]],
        k: "Use history early; refine as you learn." },
      { d: 2, q: "What's free float?", o: [
        ["How long it can slip without delaying its successor", "Correct. Free float is how long an activity can slip without delaying the early start of the next one."],
        ["How long an activity can slip without delaying the project", "That's total float."],
        ["Time added to the schedule as a buffer", "That's a reserve, not float."],
        ["The time between two milestones", "Not float."]],
        k: "Free float protects the next activity." }
    ],
    flips: [
      { d: 2, f: "Total float versus free float, and how to work them out.", b: "Total float: how long an activity can slip without delaying the project end (late start − early start, or late finish − early finish). Free float: how long it can slip without delaying the early start of its successor (successor's early start − this activity's early finish). Critical-path activities usually have zero total float." }
    ]
  },

  /* ---------------------------------------------------------------- 13 */
  {
    id: "finance",
    title: "Budget, reserves and funding",
    summary: "Analyse the project's financial needs from the bottom up: activity cost estimates roll up into work packages and control accounts. Contingency reserves for identified risks (“known unknowns”) are added to form the cost baseline, and the project manager uses them as the risk response plan allows. Management reserve for unidentified risks (“unknown unknowns”) sits on top of the cost baseline to form the project budget, and using it needs management approval, usually through change control. Size contingency with risk analysis, such as expected monetary value or simulation, rather than padding every estimate. Plan how spending will be tracked and reported, and reconcile planned spending with funding limits, since money may arrive in tranches. Anticipate financial challenges such as exchange rates, inflation and supplier price rises; monitor variances and work through the governance process when forecasts cross thresholds; and manage reserves, returning what's unused as policy requires.",
    figs: ["reserves"],
    terms: [
      ["Cost baseline", "The approved, time-phased budget excluding management reserve, used to measure cost performance.", "Work package estimates plus $60k of contingency.", 0, "reserves"],
      ["Contingency reserve", "Money or time within the baseline for identified risks (known unknowns).", "$8k set aside in case the switchboard fails testing."],
      ["Management reserve", "Money outside the cost baseline for unidentified risks (unknown unknowns), released with management approval.", "Funds used when unmapped asbestos is found."],
      ["Funding limit reconciliation", "Comparing planned spending with when funds become available, and adjusting the schedule or spend to fit.", "Moving an equipment purchase to the second funding tranche."]
    ],
    cards: [
      { d: 1, q: "Where does the contingency reserve sit?", af: "reserves", o: [
        ["Inside the cost baseline", "Correct. And therefore inside the project budget too."],
        ["In the vendor's contract price", "Not the project's reserve."],
        ["Outside the project budget", "It's within both the baseline and the budget."],
        ["In the management reserve", "That's separate, for unknown unknowns."]],
        k: "Contingency: inside the baseline." },
      { d: 1, q: "What is the management reserve for?", o: [
        ["Unknown unknowns: risks nobody identified", "Correct. Released with management approval."],
        ["The project manager's personal discretion", "Using it needs management approval."],
        ["Known risks listed in the risk register", "That's contingency reserve."],
        ["Paying suppliers on time", "Not a reserve's purpose."]],
        k: "Management reserve: the unidentified." },
      { d: 2, q: "An identified risk occurs and costs $8,000 to resolve, as the risk response plan allows. Where should the money come from?", o: [
        ["The contingency reserve", "Correct. It's there for exactly this."],
        ["A change request to raise the budget", "Not needed; it's already planned."],
        ["The management reserve", "That's for unidentified risks."],
        ["The next phase's budget", "Borrowing from the future hides the cost."]],
        k: "Planned risk, planned money." },
      { d: 2, q: "An unforeseen ground condition, never identified as a risk, will cost $40,000. What's the right path?", o: [
        ["Request management reserve through change control", "Correct. Unidentified risk, management approval."],
        ["Use contingency reserve, since the money is already there", "Contingency is for identified risks."],
        ["Hide it until the end-of-phase report", "Unethical and risky."],
        ["Absorb it by cutting testing", "Quality shortcuts create bigger costs."]],
        k: "Unknown unknowns need approval." },
      { d: 2, q: "How is the project budget built from the cost baseline?", o: [
        ["Cost baseline plus management reserve", "Correct. The project budget is the cost baseline (which includes contingency) plus the management reserve."],
        ["Cost baseline plus a 10% standard buffer", "Reserves should come from risk analysis, not a fixed buffer."],
        ["Cost baseline minus contingency reserve", "Contingency is already inside the baseline."],
        ["Activity estimates plus profit margin", "Not how the project budget is formed."]],
        k: "Budget = baseline + management reserve." },
      { d: 3, q: "Funding arrives quarterly, but the plan front-loads equipment purchases in the first month. What should you do?", o: [
        ["Reconcile the spend plan with funding", "Correct. Resequence purchases to fit when money arrives."],
        ["Delay the whole project until funding is complete", "Overreaction; resequence the spend."],
        ["Ask suppliers for 12 months' free credit", "Unrealistic, and avoids the real issue."],
        ["Buy everything anyway and explain later", "Overspending available funds breaches governance."]],
        k: "Spend can't run ahead of funding." },
      { d: 3, q: "A key component is priced in US dollars, and the NZ dollar has fallen 8% since you estimated. What's the best move?", o: [
        ["Update the forecast; treat it as a risk or change", "Correct. Make the impact visible and handle it through the right process."],
        ["Take the difference from management reserve without asking", "Management reserve needs approval."],
        ["Ignore it; exchange rates will bounce back", "Hope isn't a plan."],
        ["Switch to a cheaper, lower-spec component", "Changing spec needs change control and may hurt quality."]],
        k: "Anticipate financial risks; don't absorb them silently." },
      { d: 1, q: "Why set contingency using risk analysis rather than padding every estimate?", o: [
        ["It ties visible reserves to specific risks", "Correct. Padding hides risk and inflates estimates."],
        ["It produces a smaller total budget every time", "Not necessarily smaller; more transparent."],
        ["Risk analysis removes the need for any reserve", "It sizes the reserve; it doesn't remove it."],
        ["Padding is illegal on public projects", "Not the reason."]],
        k: "Transparent reserves beat hidden padding." }
    ],
    flips: [
      { d: 2, f: "Build the project budget from the bottom up.", bf: "reserves", b: "Activity cost estimates roll up into work package estimates and control accounts. Add contingency reserves for identified risks to get the cost baseline. Add management reserve for unidentified risks to get the project budget. The PM uses contingency under the risk plan; management reserve needs approval through change control." }
    ]
  },

  /* ---------------------------------------------------------------- 14 */
  {
    id: "evm",
    title: "Earned value",
    summary: "Earned value management compares what you planned, what you've done and what it cost. Planned value (PV) is the budgeted cost of the work scheduled to date; earned value (EV) is the budgeted cost of the work actually completed; actual cost (AC) is what that work really cost; budget at completion (BAC) is the total budget for the work. Variances: cost variance CV = EV − AC (negative means over budget) and schedule variance SV = EV − PV (negative means behind schedule). Indices: CPI = EV ÷ AC and SPI = EV ÷ PV; below 1 is bad, above 1 is good. Forecasts: the estimate at completion is EAC = BAC ÷ CPI if current cost performance continues; EAC = AC + (BAC − EV) if the variance was a one-off; or EAC = AC + (BAC − EV) ÷ (CPI × SPI) when both cost and schedule performance will shape the remaining work. Estimate to complete ETC = EAC − AC; variance at completion VAC = BAC − EAC; and the to-complete performance index TCPI = (BAC − EV) ÷ (BAC − AC) is the cost efficiency you'd need on the remaining work to finish within budget. In agile, a release burnup, or EV based on completed story points, gives similar insight.",
    figs: ["evm-curve"],
    terms: [
      ["Earned value (EV)", "The budgeted cost of the work actually completed.", "40% of a $100k job done = $40k EV.", 0, "evm-curve"],
      ["Planned value (PV)", "The budgeted cost of the work scheduled to be done by now.", "$50k of work planned by month 5."],
      ["Actual cost (AC)", "What the completed work actually cost.", "$48k spent to do $40k of planned work."],
      ["CPI", "Cost performance index, EV ÷ AC: value earned for each dollar spent.", "40 ÷ 48 ≈ 0.83."],
      ["SPI", "Schedule performance index, EV ÷ PV: progress against the plan.", "40 ÷ 50 = 0.80."],
      ["Estimate at completion (EAC)", "The forecast total cost of the project.", "$100k ÷ 0.83 ≈ $120k."],
      ["TCPI", "To-complete performance index: the cost efficiency needed on the remaining work to meet a target (BAC or EAC).", "(100 − 40) ÷ (100 − 48) ≈ 1.15."]
    ],
    cards: [
      { d: 1, q: "Which formula gives the cost variance?", o: [
        ["CV = EV − AC", "Correct. Negative means over budget."],
        ["CV = AC − EV", "Reversed."],
        ["CV = EV − PV", "That's schedule variance."],
        ["CV = PV − AC", "Uses planned, not earned, value."]],
        k: "CV = EV − AC." },
      { d: 1, q: "A CPI of 0.8 means:", o: [
        ["80 cents of work per dollar spent", "Correct. You're over budget: each dollar spent is producing only 80 cents of planned work."],
        ["You've completed 80% of the project's planned work so far", "CPI measures cost efficiency, not progress."],
        ["You're on schedule but over budget", "CPI says nothing about schedule."],
        ["You're 20% under budget", "Below 1 means over budget."]],
        k: "CPI below 1 = over budget." },
      { d: 2, q: "Look at the chart at month 5. What are the CPI and SPI?", fig: "evm-curve", o: [
        ["CPI 0.83, SPI 0.80", "Correct. CPI = 40 ÷ 48 ≈ 0.83; SPI = 40 ÷ 50 = 0.80. Over budget and behind schedule."],
        ["CPI 0.80, SPI 0.83", "Swapped."],
        ["CPI 1.20, SPI 1.25", "Inverted: CPI = EV ÷ AC, SPI = EV ÷ PV."],
        ["CPI 0.96, SPI 0.80", "CPI uses EV, not PV: 40 ÷ 48."]],
        k: "CPI = EV ÷ AC; SPI = EV ÷ PV." },
      { d: 2, q: "Using the chart, if current cost performance continues, what's the estimate at completion?", fig: "evm-curve", o: [
        ["About $120k", "Correct. BAC ÷ CPI = 100 ÷ 0.83 ≈ 120."],
        ["About $108k", "That's AC + (BAC − EV): only if the overrun was a one-off."],
        ["About $125k", "That's BAC ÷ SPI; use CPI for cost."],
        ["About $83k", "That's BAC × CPI; divide instead."]],
        k: "Typical EAC = BAC ÷ CPI." },
      { d: 2, q: "EV is $40k, PV is $50k and AC is $48k. What's the schedule variance, and what does it mean?", o: [
        ["−$10k: behind schedule", "Correct. SV = EV − PV = 40k − 50k = −10k, so you're behind schedule."],
        ["+$10k: ahead of schedule", "Sign error: SV = EV − PV."],
        ["−$2k: slightly behind", "Not the formula."],
        ["−$8k: over budget", "That's the cost variance."]],
        k: "SV = EV − PV." },
      { d: 3, q: "A one-off supplier error caused a cost overrun, and the rest of the work should go to plan. Which EAC formula fits?", o: [
        ["AC + (BAC − EV)", "Correct. The remaining work is expected at budget rates."],
        ["AC + (BAC − EV) ÷ (CPI × SPI)", "Assumes both indices keep affecting the remaining work."],
        ["BAC ÷ CPI", "Assumes the overrun continues."],
        ["BAC × SPI", "Not an EAC formula."]],
        k: "One-off variance: AC + (BAC − EV)." },
      { d: 3, q: "Your TCPI is 1.15. What does that tell you?", o: [
        ["Remaining work must be 15% more efficient", "Correct. To finish within budget, which may not be realistic."],
        ["The project will now finish about 15% ahead of schedule", "TCPI is about cost."],
        ["You're 15% under budget on the work done so far", "TCPI is about the remaining work."],
        ["You can safely relax spending by 15% from here", "Above 1 means you must tighten, not relax."]],
        k: "TCPI above 1: tighter efficiency needed." },
      { d: 3, q: "On a hospital BMS install, CPI is 1.1 and SPI is 0.85. What's the best interpretation?", o: [
        ["Under budget, but behind schedule", "Correct. Low spend may just mean the work hasn't happened yet."],
        ["On track overall, since the two average out", "Indices don't cancel out."],
        ["Under budget and ahead of schedule", "SPI below 1 means behind."],
        ["Over budget and ahead of schedule", "Read the indices again: CPI above 1 is good; SPI below 1 is behind."]],
        k: "Read each index on its own." }
    ],
    flips: [
      { d: 2, f: "The earned value formulas you need.", bf: "evm-curve", b: "CV = EV − AC; SV = EV − PV; CPI = EV ÷ AC; SPI = EV ÷ PV. EAC = BAC ÷ CPI (trend continues), AC + (BAC − EV) (one-off), or AC + (BAC − EV) ÷ (CPI × SPI) (both matter). ETC = EAC − AC; VAC = BAC − EAC; TCPI = (BAC − EV) ÷ (BAC − AC)." }
    ]
  },

  /* ---------------------------------------------------------------- 15 */
  {
    id: "quality",
    title: "Quality and the cost of quality",
    summary: "Quality is the degree to which a deliverable meets its requirements; grade is its category or level of features. Low grade can be fine (a basic but reliable sensor); low quality never is (a sensor that drifts). Gather quality requirements, including regulatory ones, and plan the processes and tools to meet them. Prevention beats inspection: building quality in is cheaper than finding defects later. The cost of quality has two sides. The cost of conformance covers prevention (training, design reviews, better processes) and appraisal (testing, inspections, audits). The cost of nonconformance covers internal failure (rework and scrap found before handover) and external failure (warranty claims, call-backs, liability and reputation, found by the customer). Managing quality (quality assurance) checks that the agreed processes are followed and work, for example through audits; controlling quality (quality control) inspects deliverables against requirements. Useful tools: cause-and-effect (fishbone) diagrams for root causes; Pareto charts to focus on the vital few causes (the 80/20 rule); control charts to see whether a process is stable, where a point outside the control limits, or seven in a row on one side of the mean, signals a problem; plus checklists, histograms and scatter diagrams. Build in continuous improvement (plan-do-check-act, kaizen, retrospectives), and treat sustainability, such as energy use and waste, as a quality requirement.",
    figs: ["coq", "control-chart"],
    terms: [
      ["Cost of quality", "All the costs of achieving quality: prevention and appraisal (conformance), plus internal and external failure (nonconformance).", "Training (prevention) versus call-outs after handover (external failure).", 0, "coq"],
      ["Quality vs grade", "Quality is how well requirements are met; grade is the category or level of features.", "A basic but reliable thermostat: low grade, high quality."],
      ["Manage quality (QA)", "Checking that quality processes are followed and effective, for example through audits.", "Auditing whether peer reviews actually happen."],
      ["Control quality (QC)", "Inspecting and testing deliverables against requirements.", "Point-to-point testing of every BMS sensor."],
      ["Control chart", "A chart showing whether a process is stable over time; a point outside the limits, or seven in a row on one side of the mean, is a warning.", "Daily defect counts plotted against control limits.", 0, "control-chart"],
      ["Pareto chart", "A bar chart that ranks causes by frequency so you can focus on the vital few (80/20).", "Three fault types causing 80% of call-outs."]
    ],
    cards: [
      { d: 1, q: "What's the difference between quality and grade?", o: [
        ["Quality meets requirements; grade is feature level", "Correct. Low grade can be fine; low quality never is."],
        ["Grade meets requirements; quality is feature level", "Reversed."],
        ["They're the same thing, measured differently", "They're different concepts."],
        ["Quality is about cost; grade is about time", "No."]],
        k: "Quality ≠ grade." },
      { d: 1, q: "Which is a cost of nonconformance?", af: "coq", o: [
        ["Rework after a failed inspection", "Correct. An internal failure cost."],
        ["Training technicians before installation", "Prevention: a cost of conformance."],
        ["Testing every controller before dispatch", "Appraisal: a cost of conformance."],
        ["Design reviews with the fire engineer", "Prevention."]],
        k: "Failure costs are nonconformance." },
      { d: 1, q: "What does a Pareto chart help you do?", o: [
        ["Focus on the vital few causes", "Correct. The few causes behind most of the problems (80/20)."],
        ["Show whether a process is statistically stable", "That's a control chart."],
        ["Track the schedule against the baseline", "Not a quality tool."],
        ["Map every possible cause of one problem", "That's a fishbone diagram."]],
        k: "Pareto: the vital few." },
      { d: 2, q: "Look at the control chart. Every point is inside the control limits, but seven in a row sit above the mean. What should you conclude?", fig: "control-chart", o: [
        ["The process may be out of control; investigate", "Correct. A run of seven on one side suggests a non-random cause."],
        ["The process is in control, since all points are in limits", "A run of seven is a warning even inside the limits."],
        ["Nothing until a point crosses a limit", "The run is already a signal."],
        ["The specification limits must be wrong", "Specification limits come from requirements, not the chart."]],
        k: "Rule of seven: investigate." },
      { d: 2, q: "A quality audit finds the team is skipping the agreed peer review of BMS programming. Which quality process found it?", o: [
        ["Manage quality (quality assurance)", "Correct. Auditing whether processes are followed."],
        ["Control quality (quality control)", "QC inspects deliverables; this was a process audit."],
        ["Plan quality management", "Planning comes before the work."],
        ["Validate scope", "That's customer acceptance of deliverables."]],
        k: "QA checks the process; QC checks the product." },
      { d: 2, q: "Defects found by the client after handover are costing call-outs and goodwill. What would most reduce these costs over time?", o: [
        ["More prevention and earlier testing", "Correct. Fixing causes early is cheapest."],
        ["Ask the client to report defects faster", "Faster reporting, same defects."],
        ["Inspect every unit twice at handover", "Appraisal helps, but prevention costs less."],
        ["Add a bigger warranty reserve", "Funds the failure; doesn't prevent it."]],
        k: "Prevent rather than inspect." },
      { d: 3, q: "The client wants top-grade components on a tight budget, and the team proposes mid-grade parts that fully meet the specification. What's the best response?", o: [
        ["Mid-grade is fine if it meets the requirements", "Correct. Agree the trade-off with the client."],
        ["Insist on top grade; anything less is low quality", "Lower grade isn't lower quality."],
        ["Let the team decide without involving the client", "The client must agree the trade-off."],
        ["Use the cheapest parts and test them harder", "May not meet requirements."]],
        k: "Grade is a choice; quality isn't." },
      { d: 3, q: "Repeated sensor faults have several suspected causes. Which tool helps the team explore root causes systematically?", o: [
        ["A cause-and-effect (fishbone) diagram", "Correct. Group causes by category, then dig into each."],
        ["A RACI matrix for the maintenance team", "Clarifies roles, not causes."],
        ["A Gantt chart of the repair work", "Schedules work; doesn't find causes."],
        ["A stakeholder engagement matrix", "Not a quality tool."]],
        k: "Fishbone for root causes." }
    ],
    flips: [
      { d: 2, f: "The four categories of the cost of quality.", bf: "coq", b: "Conformance: prevention (training, design reviews, better processes) and appraisal (testing, inspection, audits). Nonconformance: internal failure (rework and scrap before handover) and external failure (warranty, call-backs, liability and reputation after handover). Spending on prevention usually cuts failure costs the most." }
    ]
  },

  /* ---------------------------------------------------------------- 16 */
  {
    id: "status-closure",
    title: "Status, artifacts and closure",
    summary: "Decide which artifacts the project really needs (a risk register, a burndown, a decision log, as-built drawings), and tailor them. Make sure they're created, reviewed, kept current and accessible to the people who need them, and check now and then whether each is still earning its keep. Measure progress with metrics that suit the approach: variance and earned value in predictive work; burndown or burnup, velocity and cycle time in agile. Reconcile the metrics with reality before reporting, and communicate status honestly, bad news included. Closure: agree the criteria for closing the project or phase up front; get formal acceptance of the deliverables from the right stakeholders; validate readiness for transition (operations trained, support in place, documentation handed over, warranties and spares arranged); close contracts; capture final lessons learned and run a final retrospective; archive the records; release resources; and recognise the team. A project cancelled early still needs a proper closure: document where things stand, why it stopped, and what can be reused.",
    terms: [
      ["Transition readiness", "Confirming the receiving team can operate and support what the project delivers: training, documentation, support and spares in place.", "Facilities staff trained on the new BMS before handover."],
      ["Artifact (project)", "Any template, document, output or deliverable a project creates or uses, tailored to what the project needs.", "A risk register, a burndown chart or as-built drawings."]
    ],
    cards: [
      { d: 1, q: "Which is a sign an artifact needs tailoring or retiring?", o: [
        ["Nobody uses it for decisions", "Correct. Artifacts should earn their keep."],
        ["It's stored in the shared drive", "Accessibility is good."],
        ["It's updated every week", "Regular updates are good if it's used."],
        ["The sponsor reads it", "Being used is the point."]],
        k: "Unused artifacts are waste." },
      { d: 1, q: "What must happen before a project or phase is closed?", o: [
        ["Formal acceptance of the deliverables", "Correct. By the right stakeholders."],
        ["Approval of the next project's budget", "Not related."],
        ["Destruction of all project records", "Records are archived, not destroyed."],
        ["A final party for the team", "Nice, but not a closure requirement."]],
        k: "No acceptance, no closure." },
      { d: 2, q: "The BMS works, but the facilities team hasn't been trained and has no spares. Is the project ready to close?", o: [
        ["No; transition readiness isn't met yet", "Correct. Ready for operations is part of done."],
        ["Yes; training is operations' responsibility", "Transition is part of the project's job."],
        ["No; but close anyway and log it as a risk", "Closing with known gaps passes problems on."],
        ["Yes; the system meets its specification", "Meeting spec isn't the same as being ready for operations."]],
        k: "Done includes ready to operate." },
      { d: 2, q: "The sponsor cancels your project at 60% complete because priorities changed. What should you do?", o: [
        ["Run a proper closure, including lessons", "Correct. Record the status, the reasons and what can be reused."],
        ["Keep the team working quietly in case it resumes", "Unauthorised work."],
        ["Argue for the project to continue at all costs", "Make the case once, then accept the decision."],
        ["Stop work immediately and release everyone", "Releasing people is part of closure, but records, contracts and lessons matter too."]],
        k: "Cancelled projects still close properly." },
      { d: 2, q: "Your burndown shows the team on track, but three stories are stuck waiting for client data. What should your status report say?", o: [
        ["The real picture, blocked stories included", "Correct. Honest status, with what you need from whom."],
        ["Nothing about the blocked stories, to avoid alarm", "Hiding issues erodes trust."],
        ["That the client is the reason the team is late", "Blame doesn't help; state facts and needs."],
        ["On track, as the burndown shows", "Reports should reflect reality, not just the chart."]],
        k: "Report reality, not just the chart." },
      { d: 3, q: "Who should formally accept the final deliverables on a client-funded building systems project?", o: [
        ["The client or their authorised representative", "Correct. The PM verifies; the client accepts."],
        ["The project manager, after internal testing", "Verification isn't acceptance."],
        ["The PMO, once documents are filed", "Governance, not acceptance."],
        ["The installation subcontractor", "They deliver; they don't accept."]],
        k: "The customer accepts." },
      { d: 3, q: "At closure, which activity is easiest to skip and most costly to the organisation later?", o: [
        ["Capturing and sharing final lessons learned", "Correct. Skipped lessons get relearned at full price."],
        ["Updating the final cost figures in the finance system", "Usually done for finance anyway."],
        ["Sending a thank-you note to the client and team", "Nice, but not the costliest gap."],
        ["Releasing team members back to their managers", "Rarely skipped."]],
        k: "Don't skip the lessons." }
    ],
    flips: [
      { d: 2, f: "Closure checklist for a project or phase.", b: "Confirm closure criteria; get formal acceptance; confirm transition readiness (training, support, documentation, spares, warranties); close contracts; run a final lessons-learned session and retrospective; write the final report; archive records; release resources; recognise the team." }
    ]
  }

  ]
});
