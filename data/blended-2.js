/* Course 2 · Waterfall, Agile & Blended Delivery — part 2: topics 7–13. Same card format. */

PMQ.fig("complexity", `<svg viewBox="0 0 600 192" role="img" aria-label="Simple, complicated, complex and chaotic, from most to least predictable">
<defs><marker id="ah-cx" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<rect class="bx" x="6" y="14" width="142" height="124" rx="6"/><rect class="bx" x="152" y="14" width="142" height="124" rx="6"/>
<rect class="soft" x="298" y="14" width="142" height="124" rx="6"/><rect class="bx2" x="444" y="14" width="142" height="124" rx="6"/>
<text class="tb" x="77" y="40" text-anchor="middle">Simple</text><text class="tb" x="223" y="40" text-anchor="middle">Complicated</text>
<text class="tb" x="369" y="40" text-anchor="middle">Complex</text><text class="tb" x="515" y="40" text-anchor="middle">Chaotic</text>
<text class="t2" x="77" y="68" text-anchor="middle">a sail</text><text class="t2" x="223" y="68" text-anchor="middle">a sailboat</text>
<text class="t2" x="369" y="62" text-anchor="middle">sailing the</text><text class="t2" x="369" y="76" text-anchor="middle">open ocean</text>
<text class="t2" x="515" y="62" text-anchor="middle">a sailboat in</text><text class="t2" x="515" y="76" text-anchor="middle">a hurricane</text>
<text class="t" x="77" y="104" text-anchor="middle">knowable <tspan class="tok">✓</tspan></text><text class="t" x="77" y="124" text-anchor="middle">predictable <tspan class="tok">✓</tspan></text>
<text class="t" x="223" y="104" text-anchor="middle">knowable <tspan class="tok">✓</tspan></text><text class="t" x="223" y="124" text-anchor="middle">predictable <tspan class="tok">✓</tspan></text>
<text class="t" x="369" y="104" text-anchor="middle">knowable <tspan class="tbad">✗</tspan></text><text class="t" x="369" y="124" text-anchor="middle">predictable <tspan class="ta">~</tspan></text>
<text class="t" x="515" y="104" text-anchor="middle">knowable <tspan class="tbad">✗</tspan></text><text class="t" x="515" y="124" text-anchor="middle">predictable <tspan class="tbad">✗</tspan></text>
<path class="s" d="M20 158 H578" marker-end="url(#ah-cx)"/>
<text class="t2" x="20" y="180">more predictable</text><text class="t2" x="580" y="180" text-anchor="end">less predictable</text>
</svg>`);

PMQ.fig("decision-matrix", `<svg viewBox="0 0 600 282" role="img" aria-label="Nine criteria for choosing waterfall or agile">
<text class="t2" x="12" y="24">CRITERION</text><text class="t2" x="196" y="24">POINTS TO WATERFALL</text><text class="t2" x="384" y="24">POINTS TO AGILE</text>
<line class="s" x1="8" x2="592" y1="34" y2="34"/>
<text class="tc" x="12" y="56">Time</text><text class="tc" x="196" y="56">Fixed</text><text class="tc" x="384" y="56">Fixed (can vary on request)</text>
<line class="s2" x1="8" x2="592" y1="68" y2="68"/>
<text class="tc" x="12" y="82">Cost</text><text class="tc" x="196" y="82">Fixed</text><text class="tc" x="384" y="82">Fixed (can vary on request)</text>
<line class="s2" x1="8" x2="592" y1="94" y2="94"/>
<text class="tc" x="12" y="108">Scope</text><text class="tc" x="196" y="108">Fixed</text><text class="tc" x="384" y="108">Flexible (fixed also works)</text>
<line class="s2" x1="8" x2="592" y1="120" y2="120"/>
<text class="tc" x="12" y="134">Complexity</text><text class="tc" x="196" y="134">Simple</text><text class="tc" x="384" y="134">Complicated or complex</text>
<line class="s2" x1="8" x2="592" y1="146" y2="146"/>
<text class="tc" x="12" y="160">Customer availability</text><text class="tc" x="196" y="160">Only at milestones</text><text class="tc" x="384" y="160">Throughout the project</text>
<line class="s2" x1="8" x2="592" y1="172" y2="172"/>
<text class="tc" x="12" y="186">Team construct</text><text class="tc" x="196" y="186">10+ people, not dedicated</text><text class="tc" x="384" y="186">Under 10, dedicated</text>
<line class="s2" x1="8" x2="592" y1="198" y2="198"/>
<text class="tc" x="12" y="212">Requirement clarity</text><text class="tc" x="196" y="212">Clear and known</text><text class="tc" x="384" y="212">Unknown or evolving</text>
<line class="s2" x1="8" x2="592" y1="224" y2="224"/>
<text class="tc" x="12" y="238">Success criteria</text><text class="tc" x="196" y="238">All three fixed</text><text class="tc" x="384" y="238">Fixed time and cost, flex scope</text>
<line class="s2" x1="8" x2="592" y1="250" y2="250"/>
<text class="tc" x="12" y="264">Delivery preference</text><text class="tc" x="196" y="264">One delivery at the end</text><text class="tc" x="384" y="264">Incremental value</text>
</svg>`);

PMQ.fig("burndown", `<svg viewBox="0 0 600 260" role="img" aria-label="Sprint burndown: 28 points committed, day 6 of 10, 18 points left against an ideal of 11.2">
<text class="t2" x="12" y="20">points left</text><text class="t2" x="362" y="20" text-anchor="middle">today · day 6</text>
<line class="dash" x1="440" x2="466" y1="16" y2="16"/><text class="t2" x="472" y="20">ideal</text>
<line class="acc-s" x1="512" x2="538" y1="16" y2="16"/><text class="t2" x="544" y="20">actual</text>
<line class="s2" x1="50" x2="570" y1="30" y2="30"/><line class="s2" x1="50" x2="570" y1="77.5" y2="77.5"/><line class="s2" x1="50" x2="570" y1="125" y2="125"/><line class="s2" x1="50" x2="570" y1="172.5" y2="172.5"/>
<line class="s2" x1="362" x2="362" y1="30" y2="220"/>
<line class="s" x1="50" x2="570" y1="220" y2="220"/><line class="s" x1="50" x2="50" y1="30" y2="220"/>
<text class="t2" x="42" y="34" text-anchor="end">28</text><text class="t2" x="42" y="81.5" text-anchor="end">21</text><text class="t2" x="42" y="129" text-anchor="end">14</text><text class="t2" x="42" y="176.5" text-anchor="end">7</text><text class="t2" x="42" y="224" text-anchor="end">0</text>
<text class="t2" x="50" y="238" text-anchor="middle">0</text><text class="t2" x="154" y="238" text-anchor="middle">2</text><text class="t2" x="258" y="238" text-anchor="middle">4</text>
<text class="t2" x="362" y="238" text-anchor="middle">6</text><text class="t2" x="466" y="238" text-anchor="middle">8</text><text class="t2" x="570" y="238" text-anchor="middle">10</text>
<text class="t2" x="570" y="254" text-anchor="end">sprint day</text>
<line class="dash" x1="50" x2="570" y1="30" y2="220"/>
<polyline class="acc-s" points="50,30 102,30 154,50.4 206,50.4 258,70.7 310,84.3 362,97.9"/>
<circle class="acc" cx="362" cy="97.9" r="4.5"/><circle class="bx" cx="362" cy="144" r="4"/>
<text class="ta" x="372" y="94">18 left</text><text class="t2" x="352" y="164" text-anchor="end">ideal: 11.2</text>
</svg>`);

PMQ.fig("burnup", `<svg viewBox="0 0 600 258" role="img" aria-label="Release burnup: 250 points of scope; the team fell behind in sprint 3 and caught up by sprint 6">
<line class="acc-s" x1="60" x2="86" y1="14" y2="14"/><text class="t2" x="92" y="18">completed</text>
<line class="dash" x1="168" x2="194" y1="14" y2="14"/><text class="t2" x="200" y="18">ideal</text>
<line class="s" x1="250" x2="276" y1="14" y2="14"/><text class="t2" x="282" y="18">scope</text>
<line class="s2" x1="50" x2="570" y1="78" y2="78"/><line class="s2" x1="50" x2="570" y1="116" y2="116"/><line class="s2" x1="50" x2="570" y1="154" y2="154"/><line class="s2" x1="50" x2="570" y1="192" y2="192"/>
<line class="s" x1="50" x2="570" y1="40" y2="40"/><text class="t2" x="570" y="33" text-anchor="end">scope: 250 points</text>
<line class="s" x1="50" x2="570" y1="230" y2="230"/><line class="s" x1="50" x2="50" y1="40" y2="230"/>
<text class="t2" x="42" y="44" text-anchor="end">250</text><text class="t2" x="42" y="82" text-anchor="end">200</text><text class="t2" x="42" y="120" text-anchor="end">150</text>
<text class="t2" x="42" y="158" text-anchor="end">100</text><text class="t2" x="42" y="196" text-anchor="end">50</text><text class="t2" x="42" y="234" text-anchor="end">0</text>
<text class="t2" x="115" y="248" text-anchor="middle">S1</text><text class="t2" x="180" y="248" text-anchor="middle">S2</text><text class="t2" x="245" y="248" text-anchor="middle">S3</text><text class="t2" x="310" y="248" text-anchor="middle">S4</text>
<text class="t2" x="375" y="248" text-anchor="middle">S5</text><text class="t2" x="440" y="248" text-anchor="middle">S6</text><text class="t2" x="505" y="248" text-anchor="middle">S7</text><text class="t2" x="570" y="248" text-anchor="middle">S8</text>
<line class="dash" x1="50" x2="570" y1="230" y2="40"/>
<polyline class="acc-s" points="50,230 115,206.4 180,182.9 245,170.7 310,144.9 375,116 440,87.1"/>
<circle class="acc" cx="440" cy="87.1" r="4.5"/>
<text class="tbad" x="253" y="190">behind in S3</text><text class="tok" x="448" y="104">caught up by S6</text>
</svg>`);

PMQ.fig("portfolio", `<svg viewBox="0 0 600 214" role="img" aria-label="A unified portfolio report covering agile and waterfall projects">
<text class="t2" x="12" y="22">PORTFOLIO STATUS</text><text class="tbad" x="134" y="22">AT RISK</text><text class="t2" x="196" y="22">1 of 4 projects behind plan</text>
<text class="t2" x="12" y="50">PROJECT</text><text class="t2" x="150" y="50">METHOD</text><text class="t2" x="250" y="50">SCHEDULE ELAPSED</text><text class="t2" x="390" y="50">SCOPE COMPLETE</text><text class="t2" x="520" y="50">STATUS</text>
<line class="s" x1="8" x2="592" y1="58" y2="58"/>
<text class="t" x="12" y="80">Web portal</text><text class="t2" x="150" y="80">Agile</text>
<text class="tc" x="250" y="80">50%</text><rect class="bx2" x="284" y="71" width="70" height="8" rx="4"/><rect class="acc" x="284" y="71" width="35" height="8" rx="4"/>
<text class="tc" x="390" y="80">50%</text><rect class="bx2" x="424" y="71" width="70" height="8" rx="4"/><rect class="ok" x="424" y="71" width="35" height="8" rx="4"/>
<text class="t2" x="390" y="93">200 of 400 pts</text><text class="tok" x="520" y="80">on track</text>
<line class="s2" x1="8" x2="592" y1="102" y2="102"/>
<text class="t" x="12" y="116">ERP upgrade</text><text class="t2" x="150" y="116">Waterfall</text>
<text class="tc" x="250" y="116">70%</text><rect class="bx2" x="284" y="107" width="70" height="8" rx="4"/><rect class="acc" x="284" y="107" width="49" height="8" rx="4"/>
<text class="tc" x="390" y="116">40%</text><rect class="bx2" x="424" y="107" width="70" height="8" rx="4"/><rect class="bad" x="424" y="107" width="28" height="8" rx="4"/>
<text class="t2" x="390" y="129">4 of 10 milestones</text><text class="tbad" x="520" y="116">at risk</text>
<line class="s2" x1="8" x2="592" y1="138" y2="138"/>
<text class="t" x="12" y="152">Data warehouse</text><text class="t2" x="150" y="152">Waterfall</text>
<text class="tc" x="250" y="152">30%</text><rect class="bx2" x="284" y="143" width="70" height="8" rx="4"/><rect class="acc" x="284" y="143" width="21" height="8" rx="4"/>
<text class="tc" x="390" y="152">33%</text><rect class="bx2" x="424" y="143" width="70" height="8" rx="4"/><rect class="ok" x="424" y="143" width="23" height="8" rx="4"/>
<text class="t2" x="390" y="165">2 of 6 milestones</text><text class="tok" x="520" y="152">on track</text>
<line class="s2" x1="8" x2="592" y1="174" y2="174"/>
<text class="t" x="12" y="188">Mobile app</text><text class="t2" x="150" y="188">Agile</text>
<text class="tc" x="250" y="188">40%</text><rect class="bx2" x="284" y="179" width="70" height="8" rx="4"/><rect class="acc" x="284" y="179" width="28" height="8" rx="4"/>
<text class="tc" x="390" y="188">45%</text><rect class="bx2" x="424" y="179" width="70" height="8" rx="4"/><rect class="ok" x="424" y="179" width="31.5" height="8" rx="4"/>
<text class="t2" x="390" y="201">90 of 200 pts</text><text class="tok" x="520" y="188">on track</text>
</svg>`);

PMQ.course({
  id: "blended",
  topics: [

  /* ---------------------------------------------------------------- 7 */
  {
    id: "agile-control",
    title: "Managing constraints in agile",
    summary: "Agile follows empirical process control: inspect and adapt. When a project is approved, the timeframe is set and a cross-functional team is allocated 100%, so cost is easy to work out. The course's Red 30 Tech example: 5 people × $50 a day = $250 a day; a two-week sprint is 10 days, so $2,500 a sprint; four months is 8 sprints, so a $20,000 budget. Scope stays flexible while the value stays constant: develop, inspect, adapt, deliver. The customer stays involved so the highest-value items stay on top, and can buy more time and money if they want more features. Velocity, measured every sprint, becomes predictable after two or three sprints, so you can tell the customer early how much of the backlog will be done.",
    terms: [
      ["Empirical process control", "Managing work through inspection and adaptation (develop, inspect, adapt, deliver) instead of a fully defined plan.", "Every two weeks the team checks what users did with the last release and adjusts the next sprint."],
      ["Cross-functional team", "A team with every skill needed to finish the work, allocated to the project 100%.", "A developer, a designer, a tester and a data analyst working only on the booking app."],
      ["Velocity", "How much work a team completes per sprint: its speed of delivery. It usually becomes predictable after two or three sprints.", "A team averaging 30 points a sprint needs about 8 sprints for 240 points of backlog."],
      ["Agile cost formula", "Cost per day = people × daily rate. Cost per sprint = daily cost × days in the sprint. Project cost = sprint cost × number of sprints.", "5 people × $50 = $250 a day; × 10 days = $2,500 a sprint; × 8 sprints = $20,000."]
    ],
    cards: [
      { d: 1, q: "What does empirical process control rely on?", o: [
        ["Inspection and adaptation", "Correct. Develop, inspect, adapt, deliver."],
        ["A fully defined plan, followed in order", "That's defined process control: waterfall."],
        ["Formal change requests", "Agile has no formal change control for scope."],
        ["Scope signed off at the start", "Agile keeps scope flexible."]],
        k: "Empirical = learn from what actually happens, then adjust." },
      { d: 1, q: "Why is it easy to calculate the cost of an agile project?", o: [
        ["The team is allocated 100%, so cost follows directly from time", "Correct. Fixed people for a fixed time gives a fixed cost."],
        ["Agile projects don't have any vendor costs", "They can; that isn't why the maths is simple."],
        ["The product owner sets a new budget at the start of each sprint", "The budget is set up front with the timeframe."],
        ["Scope is fixed, so cost is fixed too", "Scope is the part that flexes in agile."]],
        k: "Dedicated team × fixed time = known cost." },
      { d: 2, q: "A team of 6 costs $80 per person per day and works 10-day sprints. What does one sprint cost?", o: [
        ["$4,800", "Correct. 6 × $80 = $480 a day, × 10 days = $4,800."],
        ["$480", "That's the cost of one day, not a sprint."],
        ["$9,600", "That would be two sprints."],
        ["$800", "That's one person for 10 days."]],
        k: "People × daily rate × sprint days." },
      { d: 2, q: "Red 30 Tech's team costs $2,500 per sprint. The project runs four months, with two sprints a month. What's the budget?", o: [
        ["$20,000", "Correct. 4 months × 2 = 8 sprints; 8 × $2,500 = $20,000."],
        ["$10,000", "That's four sprints, or only two months."],
        ["$2,500", "That's a single sprint."],
        ["$40,000", "That would be sixteen sprints."]],
        k: "Months → sprints → sprint cost × number of sprints." },
      { d: 2, q: "After how many sprints does a team's velocity typically become predictable?", o: [
        ["Two to three", "Correct. That's when forecasting becomes reliable."],
        ["One", "One sprint isn't enough to see a stable pattern."],
        ["Ten or more", "It settles much sooner than that."],
        ["Never; velocity can't be predicted", "The course says it does become predictable."]],
        k: "Give velocity two or three sprints to settle." },
      { d: 2, q: "300 points remain in the backlog, velocity has settled at 30 points per sprint, and six sprints are left in the budget. What should you tell the customer now?", o: [
        ["About 180 done; agree which 120 to drop", "Correct. 6 × 30 = 180. Predictable velocity lets you have this talk early, while priorities can still change."],
        ["Everything will still get done if the team works harder from now on", "That ignores the evidence of the team's actual speed."],
        ["Nothing yet; wait until the last sprint to see", "The point of predictable velocity is to communicate early."],
        ["Velocity can't be used for forecasting", "Forecasting is exactly what a stable velocity is for."]],
        k: "Remaining sprints × velocity = what will actually get done." },
      { d: 3, q: "The customer sees the forecast and wants 60 more points delivered. What options does an agile project have?", o: [
        ["More time and cost, or reprioritise", "Correct. The course says customers can extend time and cost for more features; reprioritising decides what's above the line."],
        ["Ask the team to double their velocity at no extra cost", "Velocity reflects real capacity; demanding double just hides the problem."],
        ["Lock the scope and raise a formal change request", "That's waterfall's mechanism, not agile's."],
        ["Remove testing so more features fit in", "Untested work isn't done, and quality debt costs more later."]],
        k: "More scope means more time and money, or a different priority order." },
      { d: 3, q: "A team adopts an AI coding assistant and its velocity jumps from 30 to 45 points in one sprint. The PM immediately re-forecasts the release using 45. What's the risk?", o: [
        ["One sprint isn't a trend", "Correct. Velocity becomes predictable over two or three sprints; one spike can mislead."],
        ["Velocity can't rise, so the number must be wrong", "Velocity can change when how the team works changes."],
        ["Points from AI-written code shouldn't count at all", "Completed, accepted work counts however it was produced."],
        ["Forecasts should always stay on the first velocity", "Forecasts should follow a settled trend, not stay frozen."]],
        k: "Re-forecast on a settled trend, not a single spike." }
    ],
    flips: [
      { d: 2, f: "Work it out: 7 people at $100 a day, 10-day sprints, 8 sprints. Daily, sprint and project cost?", b: "7 × $100 = $700 a day. × 10 days = $7,000 a sprint. × 8 sprints = $56,000 for the project. These are the numbers from the course's burnup example." }
    ]
  },

  /* ---------------------------------------------------------------- 8 */
  {
    id: "agile-weak",
    title: "Weaknesses of empirical processes",
    summary: "Agile has weaknesses too. It demands a lot of time and commitment: customers and the team collaborate closely on requirements and design, and do user acceptance testing every sprint. It's unpredictable up front: it's hard to say in advance exactly how much time and cost a precise result will need, though teams estimate accurately once work starts. Evolving scope can make customers uncomfortable, and without a strong, clear product vision scope creep is a real risk. Design and documentation are lightweight, sometimes just meeting notes or a photo of a whiteboard, so teams can wander off the architecture and it's harder to onboard people or pass an audit. Close leadership from the scrum master helps offset these weaknesses.",
    terms: [
      ["User acceptance testing (UAT)", "Customers or users checking that a feature meets their needs. In agile it happens every sprint, which takes ongoing time and commitment.", "Store managers test the new ordering screen at the end of every sprint."],
      ["Architectural drift", "When evolving designs wander off the intended technical architecture because there are no regular touch points with the architects.", "Three teams each build their own login system because nobody checked the shared design."],
      ["Lightweight documentation", "Agile's minimal, evolving documentation, sometimes just meeting notes or a photo of a whiteboard. It can make onboarding and audits harder.", "The only record of a key design decision is a phone photo of a whiteboard."]
    ],
    cards: [
      { d: 1, q: "Which is a weakness of agile's empirical process, according to the course?", o: [
        ["It demands lots of time and commitment", "Correct. Close collaboration and UAT every sprint take real effort."],
        ["It responds slowly to change because of all the formal approvals needed", "Agile has no formal approval process for changes."],
        ["It needs a huge, detailed plan before work can start", "That describes waterfall's planning phase."],
        ["It keeps the customer out of the work until the end", "Agile involves the customer throughout."]],
        k: "Agile's strength, close collaboration, is also its biggest cost." },
      { d: 1, q: "When can agile teams give accurate estimates?", o: [
        ["Once the work has started", "Correct. Before work begins, the time and cost for an exact result are hard to pin down."],
        ["Before the project begins", "That's exactly what the course says is hard in agile."],
        ["Only after the project ends", "Estimates become accurate well before the end."],
        ["Never; agile doesn't estimate", "Agile teams estimate, using story points and velocity."]],
        k: "Agile estimates sharpen once real work begins." },
      { d: 2, q: "Why can evolving scope make customers uncomfortable?", o: [
        ["They can't know exactly which features they'll get at the start", "Correct. The feature list is the flex point."],
        ["They have to pay extra for every change request the team raises", "Agile has no formal change requests for scope."],
        ["They have to sign off every task before work starts", "Customers don't approve individual tasks."],
        ["They lose their say once the first sprint begins", "Customers stay involved throughout."]],
        k: "Known time and cost, but not a known feature list. Some customers hate that." },
      { d: 2, q: "What makes scope creep a real risk in agile?", o: [
        ["No strong, clear product vision while requirements keep emerging", "Correct. Emerging requirements need a firm vision to judge them against."],
        ["Too many formal change requests slowing the team down every sprint", "Agile doesn't use formal change requests."],
        ["Sprints that are too short to finish anything", "Short sprints actually help control scope creep."],
        ["A product owner who says no to most requests", "Saying no protects against scope creep."]],
        k: "A clear product vision is agile's defence against scope creep." },
      { d: 2, q: "A new developer joins mid-project and struggles because the only record of a key design is a whiteboard photo. Which weakness is this?", o: [
        ["Lightweight documentation", "Correct. It makes onboarding new team members harder."],
        ["Fixed time and cost", "Not related to the onboarding problem."],
        ["Unstable velocity", "Velocity measures speed, not documentation."],
        ["Too much up-front planning", "The problem here is too little captured design, not too much planning."]],
        k: "Light docs speed the team up and slow newcomers down." },
      { d: 3, q: "An auditor asks an agile team to show how a safety-critical requirement was decided and tested. The team has only chat messages. What's the best lesson?", o: [
        ["Keep docs light, but record key decisions and test results", "Correct. Lightweight doesn't mean missing; audits need traceable records."],
        ["Agile teams are exempt from audits, so explain that", "No method makes a team exempt from audits."],
        ["Switch the whole project to waterfall immediately", "An overreaction; the gap is in record-keeping, not the method."],
        ["Recreate the missing documents from memory before the audit starts", "Reconstructed records are unreliable and can mislead auditors."]],
        k: "Light documentation still has to cover what an audit will ask." },
      { d: 3, q: "Three agile teams on one platform each built their own way to store customer data. Integration is now painful. Which weakness does this show, and what prevents it?", o: [
        ["Architectural drift: regular architect touch points", "Correct. Without ongoing contact with the architects, teams wander off the architectural path."],
        ["Too much documentation; have the product owner cut it back", "The problem is too little shared design, not too much."],
        ["Too many sprints; ask the sponsor to stop the project early", "Ending the project doesn't fix the design gap."],
        ["A fixed budget; ask finance to fund an extra clean-up sprint at the end", "Money may help clean up, but it doesn't prevent the drift."]],
        k: "Evolving design needs regular check-ins with the architecture." }
    ],
    flips: [
      { d: 2, f: "List four weaknesses of empirical (agile) processes from the course.", b: "Heavy time and commitment from customers and the team, including UAT every sprint. Unpredictable time and cost before work starts. Evolving scope that unsettles customers, with scope-creep risk if the vision is weak. Light design and documentation, which risks architectural drift and makes onboarding and audits harder." }
    ]
  },

  /* ---------------------------------------------------------------- 9 */
  {
    id: "complexity",
    title: "Simple, complicated, complex, chaotic",
    summary: "People use “complicated” and “complex” as if they mean the same thing, but they don't, and on projects the difference can make or break the work. The course uses a four-level scale. Simple: predictable and easy to understand, like a sail. Complicated: harder to understand, but knowable and predictable, like a sailboat; remove a plank and it will sink. Complex: you can never know everything, only make educated guesses, so you act, learn and adapt, like sailing on the ocean. Chaotic: neither understandable nor predictable, like a sailboat in a hurricane. Knowing where a project sits gives you a better chance of choosing the right method.",
    figs: ["complexity"],
    terms: [
      ["Simple", "Predictable and easy to understand.", "A sail: wind fills a sheet of fabric and pushes the boat forward.", 0, "complexity"],
      ["Complicated", "Harder to understand, but knowable and predictable with enough study.", "A sailboat: learn every part and you can predict that removing a plank will sink it."],
      ["Complex", "Never fully knowable. You can only make educated guesses, so you act, learn and adapt.", "Sailing on the ocean: currents and weather can't be fully predicted."],
      ["Chaotic", "Neither understandable nor predictable.", "Taking a sailboat into a hurricane."]
    ],
    cards: [
      { d: 1, q: "Order the scale from most to least predictable.", o: [
        ["Simple, complicated, complex, chaotic", "Correct. Complicated is still knowable; complex isn't."],
        ["Simple, complex, complicated, chaotic", "Tempting, because the course first lists them in this order, but complicated is knowable and complex isn't, so complicated comes first."],
        ["Complicated, simple, complex, chaotic", "Simple is the most predictable of all."],
        ["Chaotic, complex, complicated, simple", "That's least to most predictable, the reverse of what was asked."]],
        k: "Simple → complicated → complex → chaotic: predictability falls at each step." },
      { d: 1, q: "In the course's sailing example, what is “complex”?", o: [
        ["Sailing on the ocean", "Correct. You can only make educated guesses about currents and weather."],
        ["A sail", "That's the simple example."],
        ["A sailboat", "That's complicated: knowable with study."],
        ["A sailboat in a hurricane", "That's chaotic."]],
        k: "Sail = simple. Sailboat = complicated. Ocean = complex. Hurricane = chaotic." },
      { d: 1, q: "What's the key difference between complicated and complex?", o: [
        ["Complicated is knowable and predictable; complex never fully is", "Correct. With enough effort you can master a complicated system, but not a complex one."],
        ["Complex just means it has more parts than complicated", "The number of parts isn't the distinction; knowability is."],
        ["Complicated problems can't be solved, complex ones can", "It's roughly the reverse."],
        ["They mean the same thing; the two words are fully interchangeable", "The course makes the point that they aren't."]],
        k: "Complicated: learnable. Complex: only partly predictable, however much you learn." },
      { d: 2, q: "Replacing 200 smoke detectors with a newer model in a building whose layout and wiring are fully documented. Where does this sit on the scale?", o: [
        ["Complicated: technical but predictable", "Correct. It needs expertise, but the system can be fully understood and outcomes predicted."],
        ["Complex: the outcome can't really be predicted in advance", "The building is documented and the work is repeatable, so it's predictable."],
        ["Chaotic: nothing about it can be understood", "Far from it; the work is well understood."],
        ["Simple: anyone could do it with no knowledge", "It needs real technical knowledge, which makes it complicated rather than simple."]],
        k: "Needs expertise but behaves predictably? That's complicated." },
      { d: 2, q: "Launching a brand-new app into a market nobody has served before. Where does this sit, and what's the right approach?", o: [
        ["Complex: guess, act, learn and adapt", "Correct. You can't know everything in advance, so you learn by doing."],
        ["Simple: follow the standard steps", "Nothing about an unproven market is predictable enough for that."],
        ["Complicated: study it fully first, then plan every single step", "You can't study your way to certainty here; customers' reactions can't be fully known."],
        ["Chaotic: nothing can be learned, so don't start", "It's uncertain, not chaotic; you can learn and make predictions."]],
        k: "New product, new market: complex. Act, learn, adapt." },
      { d: 2, q: "Why does the course say it's essential to know where a project sits on this scale?", o: [
        ["Better odds of picking the right method", "Correct. The scale feeds the choice between methodologies."],
        ["It sets the project's budget automatically", "The scale doesn't calculate cost."],
        ["It decides who the sponsor will be", "Sponsorship isn't determined by complexity."],
        ["It tells you exactly how many sprints the project will need to run", "It informs the method, not the number of sprints."]],
        k: "Diagnose the problem type before choosing the method." },
      { d: 3, q: "During a cyberattack, systems are down, information is contradictory and conditions change by the minute. What level is this, and what does it mean for detailed plans?", o: [
        ["Chaotic: detailed plans won't hold yet", "Correct. When nothing is understandable or predictable, a detailed plan can't survive contact with events."],
        ["Complicated: experts can analyse it fully before acting", "Waiting for full analysis isn't possible when conditions change by the minute."],
        ["Simple: follow the runbook and it's solved", "Runbooks help, but this situation is far from simple."],
        ["Complex: careful analysis will predict the outcome", "Even complex situations allow only educated guesses; this one allows less."]],
        k: "In chaos, detailed long-range plans break. Recognise it for what it is." }
    ],
    flips: [
      { d: 2, f: "Explain simple, complicated, complex and chaotic with the sailing example.", b: "Simple: a sail, which predictably catches the wind. Complicated: a sailboat, which you can fully learn and predict (remove a plank and it sinks). Complex: sailing on the ocean, where currents and weather allow only educated guesses, so you act, learn and adapt. Chaotic: a sailboat in a hurricane, neither understandable nor predictable." }
    ]
  },

  /* ---------------------------------------------------------------- 10 */
  {
    id: "choose",
    title: "Choosing waterfall or agile",
    summary: "The course's decision matrix uses nine criteria. Time, cost and scope: waterfall needs all three fixed; agile fixes time and cost (though they can vary if the customer asks) and can also work with a fixed scope. Complexity: agile is the better fit for complex or complicated work. Customer availability: only available at milestones points to waterfall. Team construct: fewer than 10 people and dedicated points to agile; more people who aren't dedicated points to waterfall. Requirement clarity: if the solution is unknown or evolving, choose agile. Customer success criteria: fixed time and cost with flexible scope points to agile; all three fixed points to waterfall. Delivery preference: value from incremental delivery points to agile; no value from frequent deliveries points to waterfall.",
    figs: ["decision-matrix"],
    terms: [
      ["Decision matrix (waterfall vs agile)", "The course's nine criteria for choosing a method: time, cost, scope, complexity, customer availability, team construct, requirement clarity, customer success criteria and delivery preference.", "A fixed-scope compliance report with a part-time client and a large shared team points to waterfall.", 0, "decision-matrix"],
      ["Team construct", "The team's size and dedication. Under 10 and dedicated points to agile; larger and shared points to waterfall.", "Seven people working only on one product suits Scrum."],
      ["Requirement clarity", "How well the solution is known. A clear outcome with an unclear solution, such as new technology, points to agile.", "The goal is “cut energy use by 20%”, but nobody knows yet which mix of sensors and controls will do it."],
      ["Incremental delivery", "Delivering usable pieces throughout the project instead of everything at the end.", "A new intranet released section by section, with the HR pages live in month one."]
    ],
    cards: [
      { d: 1, q: "According to the course's framework, which kind of project is agile the better fit for?", o: [
        ["Complex or complicated projects", "Correct. Inspect and adapt helps navigate the unknown and unpredictable."],
        ["Only simple, repeatable projects", "Simple, predictable work is where waterfall is comfortable."],
        ["Only chaotic emergencies", "The framework doesn't single out chaos for agile."],
        ["Projects where every step is known in advance", "That describes a defined process, which suits waterfall."]],
        k: "Uncertainty points to agile." },
      { d: 1, q: "If the customer is only available at milestones, which method does the framework favour?", o: [
        ["Waterfall", "Correct. Waterfall needs the customer mainly at milestones."],
        ["Agile", "Agile needs the customer involved throughout."],
        ["Kanban", "Kanban is an agile framework and also relies on close collaboration."],
        ["Extreme programming (XP)", "XP needs an even higher degree of customer involvement."]],
        k: "Part-time customer → waterfall." },
      { d: 1, q: "Which team construct favours agile in the framework?", o: [
        ["Under 10 people, dedicated to it", "Correct. Both conditions together point to agile."],
        ["Fifty people shared across many projects", "Large, non-dedicated teams point to waterfall."],
        ["Any team that has a project manager", "Having a PM doesn't decide it."],
        ["Teams of any size, spread across several vendors", "Not the criterion the course uses."]],
        k: "Small and dedicated → agile." },
      { d: 2, q: "A client needs a regulatory report with fixed scope, a fixed deadline, a fixed budget and one final delivery. Which method fits best?", o: [
        ["Waterfall", "Correct. All three constraints fixed and no value from frequent delivery both point to waterfall."],
        ["Agile", "Agile shines when scope can flex and incremental delivery adds value; neither applies here."],
        ["Extreme programming (XP)", "XP suits high-uncertainty new development, not a fixed regulatory deliverable."],
        ["Kanban", "Kanban suits ongoing enhancement or support work."]],
        k: "Everything fixed plus one delivery → waterfall." },
      { d: 2, q: "The outcome is clear (cut the building's energy use by 20%) but nobody knows which mix of sensors, controls and settings will get there. Which criterion is this, and which way does it point?", o: [
        ["Requirement clarity points to agile", "Correct. Clear outcome, unclear solution: inspect and adapt."],
        ["Team construct: the team is large, so waterfall", "Team size isn't mentioned in the scenario."],
        ["Customer availability: the client is busy, so waterfall", "Availability isn't described either."],
        ["Time: the deadline is fixed, so agile", "A fixed deadline alone doesn't decide it; both methods can work to dates."]],
        k: "Known goal, unknown solution → agile." },
      { d: 2, q: "Can agile work with a fixed scope, according to the course?", o: [
        ["Yes, fixed scope doesn't rule it out", "Correct. The course says a fixed scope isn't a deterrent to choosing agile."],
        ["No; agile always needs a flexible scope", "Flexible scope is agile's default, not a requirement."],
        ["Only if the team has more than 10 people", "Team size isn't the condition here."],
        ["Only for maintenance and support work", "Not a condition the course mentions."]],
        k: "Fixed scope doesn't disqualify agile." },
      { d: 3, q: "A new mobile app: client available weekly, a dedicated team of 7, evolving requirements, a fixed budget and timeline with flexible features, and early releases wanted. What does the framework point to?", o: [
        ["Agile: every listed criterion favours it", "Correct. Fixed time and cost with flexible scope is agile's own model."],
        ["Waterfall, because the budget is fixed", "Agile fixes the budget too; it's scope that flexes."],
        ["Waterfall, because the timeline is fixed", "Agile also works to a fixed timeline."],
        ["Neither; the criteria split evenly", "They don't. All of them point the same way."]],
        k: "Fixed time and cost isn't a waterfall signal when scope can flex." },
      { d: 3, q: "A hospital fire-system upgrade: a fixed design approved by the fire engineer and council, a large team of non-dedicated subcontractors, a client available at milestones, and no value in partial delivery. Which method fits, and why?", o: [
        ["Waterfall: fixed scope, big shared team, milestone client, one handover", "Correct. Every criterion in the scenario points to waterfall."],
        ["Agile, because safety-critical work always needs sprints", "Safety doesn't dictate the method; the criteria do."],
        ["Agile, because any building work this big is complex", "The design is fixed and the work predictable, which is complicated at most."],
        ["Kanban, because subcontractors' work arrives as a continuous flow on site", "Kanban suits small dedicated teams improving an existing product."]],
        k: "Run the criteria, not the label: fixed, large, milestone-based, single delivery → waterfall." }
    ],
    flips: [
      { d: 2, f: "Name the nine criteria in the course's waterfall-vs-agile decision matrix.", b: "Time, cost, scope, complexity, customer availability, team construct (size and dedication), requirement clarity, the customer's success criteria, and their delivery preference." }
    ]
  },

  /* ---------------------------------------------------------------- 11 */
  {
    id: "flavours",
    title: "Choosing within agile: Scrum, XP, kanban",
    summary: "Agile is a family of frameworks, and all of them need close customer collaboration and respond to change. Scrum is the most widely adopted: the product owner is embedded in the team, the team has fewer than 10 dedicated people, and two-to-four-week cycles help control scope creep and deliver high-quality, tested work. It needs a strong product owner and an experienced scrum master, and suits new development or large enhancements. XP has even shorter one-to-three-week iterations and a light structure of developers plus the customer, so it gets through uncertainty and risk quickly. It demands discipline and very experienced developers, leaves little time for documentation, and suits new development with high uncertainty. Kanban suits small dedicated teams focused on eliminating waste and continuous delivery: no sprints, just working through the backlog. It works best with developers who can work in any area of the product, and suits enhancement or support of existing products.",
    terms: [
      ["Extreme Programming (XP)", "An agile framework with very short iterations (one to three weeks), a light team of developers plus the customer, and fast learning through uncertainty. Needs disciplined, very experienced developers.", "A small team prototyping a new trading algorithm with the client in the room every day."],
      ["Continuous delivery (kanban)", "Working through the backlog as quickly as possible with no sprints or iterations, releasing work as it's finished.", "A support team ships each bug fix the day it's done instead of waiting for a sprint to end."],
      ["Generalist developer", "A developer who can work in any area of the product, which cuts hand-offs and waiting in kanban.", "One developer handles a front-end fix and the database change behind it."]
    ],
    cards: [
      { d: 1, q: "Which agile framework is the most widely adopted?", o: [
        ["Scrum", "Correct. Scrum is the most widely used agile framework."],
        ["XP", "XP is less common and needs very experienced developers."],
        ["Kanban", "Popular, but not the most widely adopted agile framework."],
        ["Waterfall", "Waterfall isn't an agile framework."]],
        k: "Scrum is the most common agile framework." },
      { d: 1, q: "Which framework has no sprints or iterations?", o: [
        ["Kanban", "Correct. It focuses on continuous delivery through the backlog."],
        ["Scrum", "Scrum runs in sprints."],
        ["XP", "XP uses short iterations of one to three weeks."],
        ["All agile frameworks", "Most agile frameworks use iterations; kanban is the exception here."]],
        k: "Kanban: no sprints, continuous flow." },
      { d: 1, q: "How long are XP iterations, according to the course?", o: [
        ["One to three weeks", "Correct. Shorter than Scrum's two to four."],
        ["Two to four weeks", "That's the range the course gives for Scrum."],
        ["Three to six months", "Far too long for XP."],
        ["XP doesn't use iterations", "That's kanban, not XP."]],
        k: "XP iterates fastest: one to three weeks." },
      { d: 2, q: "Your team supports and enhances an existing customer portal, handling a steady stream of fixes and small improvements. Which framework fits best?", o: [
        ["Kanban", "Correct. The course says kanban suits enhancement and support of existing products."],
        ["Scrum", "Scrum suits new development or large enhancements."],
        ["XP", "XP suits new development with high uncertainty."],
        ["Waterfall", "A steady stream of small changes doesn't suit a phased, fixed plan."]],
        k: "Ongoing support and small enhancements → kanban." },
      { d: 2, q: "Which is a shortcoming of Scrum named in the course?", o: [
        ["A weak PO may mean the wrong features", "Correct. The team can perform well and still not deliver the most valuable features."],
        ["It struggles to control scope creep within sprints", "The course says Scrum's short time boxes are good at controlling scope creep."],
        ["It leaves testing until after the final sprint", "Scrum tests and accepts work within each sprint."],
        ["It needs very large teams of 50 or more people", "Scrum teams have fewer than 10 dedicated people."]],
        k: "Scrum's weak spot is a weak product owner." },
      { d: 3, q: "A start-up is building a brand-new product in a fast-moving, uncertain space. The client sits with the team daily, and the developers are very experienced and disciplined. Which framework does the course point to?", o: [
        ["XP", "Correct. High uncertainty, a need to learn fast, a closely involved customer and very experienced developers are XP's profile."],
        ["Kanban", "Kanban suits enhancing or supporting existing products."],
        ["Waterfall", "High uncertainty is exactly where waterfall struggles."],
        ["Scrum, because it only suits small enhancements", "Scrum suits new development too, but the profile here is XP's."]],
        k: "New, uncertain, expert team, client in the room → XP." },
      { d: 3, q: "A kanban team keeps waiting on hand-offs: front-end work waits for the one database specialist, then for the one tester. What does the course suggest?", o: [
        ["Build generalists who can work across the product to cut waiting", "Correct. The course says kanban works best when developers can complete work in any area."],
        ["Switch to waterfall so the hand-offs are planned", "Planned hand-offs are still hand-offs; the waste remains."],
        ["Add sprints so the waiting happens in batches", "Batching the wait doesn't remove it."],
        ["Hire more specialists for each narrow area so work never waits", "More specialists can mean more hand-offs."]],
        k: "In kanban, versatile people keep work flowing." },
      { d: 3, q: "A company runs Scrum for its new AI product and kanban for its IT help desk. A director wants everyone on Scrum “for consistency.” What's the best response?", o: [
        ["Scrum for new builds, kanban for support", "Correct. Choosing the framework to fit the work is the point of this lesson."],
        ["Agree, because one framework is always best for everyone", "The course shows each framework suits different situations."],
        ["Move both teams to waterfall to standardise reporting", "Reporting can be blended without changing methods, as the portfolio lesson shows."],
        ["Move both to XP, since it's the fastest framework", "XP's speed suits uncertain new builds, not a help desk."]],
        k: "Consistency of outcomes matters more than consistency of framework." }
    ],
    flips: [
      { d: 2, f: "Scrum, XP or kanban? Match each to its best-fit project.", b: "Scrum: new development or large enhancements, with an embedded product owner and a dedicated team under 10. XP: new development with high uncertainty and a need to learn fast, with very experienced developers and a closely involved customer. Kanban: enhancing or supporting an existing product, with a small dedicated team working continuously." }
    ]
  },

  /* ---------------------------------------------------------------- 12 */
  {
    id: "tracking",
    title: "Tracking team progress",
    summary: "Waterfall tracks progress at three levels: phases, the milestones in each phase, and the tasks inside each milestone, each with a time estimate. In the course's example, a legal review has a 4-hour estimate and a July 5–9 window: started on Monday means on target; not started by the 8th, or more than 4 hours used, means act now. Budget is tracked as hours applied against estimates. Agile tracks the completion of distinct features rather than time. Stories are sized in story points, a relative measure of effort, and each story covers everything from design to user acceptance. At sprint level a burndown chart, updated daily and reviewed at the daily scrum, compares the ideal line with the actual line. At release level a burnup chart shows completed points rising toward a scope line that moves if scope changes. Agile cost is a direct expression of time.",
    figs: ["burndown", "burnup"],
    terms: [
      ["Milestone", "A significant checkpoint within a waterfall phase, made up of tasks with time estimates.", "Signed statement of work, made up of: receive the SOW from the vendor, legal review, sign."],
      ["Statement of work (SOW)", "A document describing the work a vendor will deliver. Getting it signed is often a planning-phase milestone.", "A commissioning contractor's SOW listing the test procedures, deliverables and dates."],
      ["Story points", "A relative measure of the effort needed to complete a work item, used by agile teams instead of hours.", "A login fix is 2 points, a payment integration 8. Not hours, just relative size."],
      ["Burndown chart", "A sprint-level chart, updated daily, showing points remaining against an ideal line. Above the ideal line means behind.", "Day 6 of 10: the ideal says about 11 points left, the team has 18. Time to help each other.", 0, "burndown"],
      ["Burnup chart", "A release-level chart showing completed points rising toward a scope line, which moves if scope changes.", "The team fell behind the ideal in sprint 3 and caught up by sprint 6.", 0, "burnup"]
    ],
    cards: [
      { d: 1, q: "What are the three levels of waterfall progress tracking?", o: [
        ["Phases, milestones in phases, tasks in milestones", "Correct. Each level has time estimates set during planning."],
        ["Sprints, then stories, then story points within each", "That's agile's way of tracking."],
        ["Epics, then features, then the bugs inside them", "Not the waterfall levels the course describes."],
        ["Daily, weekly and monthly status reports to the steering board", "Reporting cadence isn't the same as tracking levels."]],
        k: "Waterfall tracks phase → milestone → task." },
      { d: 1, q: "What do agile teams track progress by?", o: [
        ["The completion of distinct features", "Correct. Time is tracked only to manage commitment."],
        ["Hours logged against each task", "That's closer to waterfall's task tracking."],
        ["Milestones reached within each phase", "That's waterfall."],
        ["Invoices received from vendors", "That tracks cost, not progress."]],
        k: "Agile measures done features, not hours spent." },
      { d: 1, q: "What are story points?", o: [
        ["A relative measure of effort", "Correct. They compare work items with each other rather than counting hours."],
        ["The exact number of working hours a story will take to finish", "Story points are deliberately not hours."],
        ["Points customers award to features they like", "That's not what story points are."],
        ["A score for how well the team followed Scrum", "They measure work size, not process compliance."]],
        k: "Story points = relative size, not time." },
      { d: 2, q: "Look at the burndown chart. What should the team conclude on day 6?", fig: "burndown", o: [
        ["Behind: 18 points left versus about 11", "Correct. The ideal on day 6 is 28 − 6 × 2.8 = 11.2. The daily review lets them act now."],
        ["They're ahead, because the actual line is going down", "Going down is normal; the question is whether it's below the ideal line, and it isn't."],
        ["They're exactly on track, as planned on day one", "The actual line sits well above the ideal line."],
        ["The sprint has already failed and should be cancelled straight away", "Behind isn't failed; there are four days left to recover, and the team can help each other."]],
        k: "On a burndown, above the ideal line means behind." },
      { d: 2, q: "A legal review task has a 4-hour effort estimate and a window of July 5–9. It's July 8 and the task hasn't started. What should the PM do?", o: [
        ["Take corrective action now", "Correct. This is the course's example: not started by the 8th means act."],
        ["Nothing yet, because the window runs until the 9th", "With one day left and nothing started, the deadline is at risk."],
        ["Wait until the 9th, then report it as late", "By then it's too late to correct."],
        ["Mark the milestone complete and move on", "The task hasn't even started."]],
        k: "Track tasks against their windows and act before the deadline, not after." },
      { d: 2, q: "On a burnup chart, what does the line across the top show, and when does it move?", o: [
        ["Total scope, which moves with changes", "Correct. The course says it fluctuates if scope changes."],
        ["The budget; it moves whenever costs rise or fall", "A burnup tracks points, not money."],
        ["Velocity; it moves every sprint", "Velocity shows in the slope of the completed line, not the top line."],
        ["The deadline; it moves when work slips", "Time runs along the bottom axis."]],
        k: "Burnup top line = scope. If it moves, scope changed." },
      { d: 2, q: "That legal review has started, but 6 hours have been used against the 4-hour estimate. What does this tell the PM?", o: [
        ["There's a problem: effort is over the estimate, so act now", "Correct. More hours than estimated signals trouble, even inside the window."],
        ["Nothing, as long as it finishes by the 9th", "The extra hours hit the budget, and they signal a problem."],
        ["The estimate was spot on, since the work has started on time", "Six hours against four is 50% over."],
        ["The task should be split into two milestones", "Restructuring doesn't address why it's over estimate."]],
        k: "Waterfall watches both the window and the effort estimate." },
      { d: 3, q: "Look at the burnup chart. What happened, and where does the team stand now?", fig: "burnup", o: [
        ["They fell behind in sprint 3 and had caught up by sprint 6", "Correct. The completed line dipped below the ideal in sprint 3 and met it again by sprint 6."],
        ["They were ahead of the ideal line the whole time", "In sprint 3 the completed line is clearly below the ideal."],
        ["They fell behind in sprint 6 and never recovered", "Sprint 6 is where they caught up."],
        ["Scope doubled in sprint 3, which stalled the team for the rest", "The scope line stays flat at 250 points."]],
        k: "Read a burnup by comparing the completed line with the ideal line." },
      { d: 3, q: "A team of 7 at $100 per person per day runs 10-day sprints. The release was planned at 8 sprints, then the PO adds scope worth 2 more sprints. What's the new release cost?", o: [
        ["$70,000", "Correct. 10 sprints × $7,000 = $70,000."],
        ["$56,000", "That's the original 8 sprints."],
        ["$7,000", "That's one sprint."],
        ["$14,000", "That's only the two added sprints."]],
        k: "In agile, extra scope costs sprints × sprint cost." }
    ],
    flips: [
      { d: 2, f: "How do waterfall and agile track progress differently?", b: "Waterfall tracks time against plan: phases, milestones and tasks with time estimates, plus hours applied against the budget. Agile tracks completed features: story points done, shown daily on a burndown chart in the sprint and on a burnup chart for the release, with cost following directly from time." }
    ]
  },

  /* ---------------------------------------------------------------- 13 */
  {
    id: "portfolio",
    title: "Blended reporting across a portfolio",
    summary: "A program is a group of related projects, each delivering part of the program's goal. All the independent projects plus all the programs make up the organisation's portfolio. Reporting gets tricky when agile and waterfall projects sit side by side. Waterfall locks time, cost and scope, so those must be reported. Agile fixes time and cost and reports progress toward the overall objective rather than specific scope items. A unified report can still show both fairly: planned start and finish, the % of schedule elapsed and the % of features or scope complete. Agile: completed story points ÷ total points (200 of 400 = 50%). Waterfall: major milestones completed (3 of 6 = 50%).",
    figs: ["portfolio"],
    terms: [
      ["Program", "A group of related projects, each delivering part of a shared goal.", "A store-modernisation program: a new POS, a supplier ordering app and a store refit."],
      ["Portfolio", "All of an organisation's independent projects plus its programs: the whole body of project work.", "Every IT, property and operations project the company is running this year."],
      ["Unified (blended) report", "A single status report that shows agile and waterfall projects side by side using shared measures such as % schedule elapsed and % scope complete.", "One page for the executive team, whatever method each project uses.", 0, "portfolio"],
      ["% complete (agile)", "Completed story points divided by total story points.", "200 of 400 points done = 50% complete."],
      ["% complete (waterfall)", "Major milestones completed divided by total major milestones.", "3 of 6 milestones done = 50% complete."]
    ],
    cards: [
      { d: 1, q: "What is a program?", o: [
        ["A group of related projects", "Correct. Each project delivers part of the program's goal."],
        ["A single, very large project", "Size alone doesn't make a program."],
        ["All the project work in the organisation", "That's the portfolio."],
        ["A piece of software", "Not in this context."]],
        k: "Program = related projects working toward one goal." },
      { d: 1, q: "What is a portfolio?", o: [
        ["All projects plus all programs in the organisation", "Correct. The whole body of project work."],
        ["A group of related projects that share one goal", "That's a program."],
        ["The documents a project produces from start to finish", "That's project documentation, not a portfolio."],
        ["The set of projects that one manager is personally running at a time", "A portfolio covers the organisation, not one manager."]],
        k: "Portfolio = every project and program together." },
      { d: 2, q: "How is % complete calculated for an agile project in the unified report?", o: [
        ["Completed story points ÷ total story points", "Correct. 200 of 400 points = 50%."],
        ["Hours spent ÷ hours budgeted", "That measures effort used, not progress delivered."],
        ["Sprints finished ÷ sprints planned", "That's closer to % schedule elapsed."],
        ["Milestones finished ÷ total milestones planned", "That's how waterfall projects are measured."]],
        k: "Agile % complete = points done ÷ total points." },
      { d: 2, q: "A waterfall project has completed 3 of its 6 major milestones. What does the unified report show?", o: [
        ["50% complete", "Correct. Major milestones completed ÷ total."],
        ["3% complete", "It's a fraction of milestones, not a raw count."],
        ["6 milestones remaining", "Only 3 remain, and the report shows a percentage."],
        ["On budget", "Milestone completion doesn't tell you about budget."]],
        k: "Waterfall % complete = milestones done ÷ total milestones." },
      { d: 2, q: "Look at the portfolio report. Which project needs attention first?", fig: "portfolio", o: [
        ["The ERP upgrade: 70% time gone, only 40% done", "Correct. The gap between time used and work delivered is the warning sign."],
        ["The web portal: 50% elapsed and 50% complete", "Time and progress are in step, so it's on track."],
        ["The data warehouse: 30% elapsed and 33% complete", "Slightly ahead, so no concern."],
        ["None of them, since every project is showing at least some progress", "Some progress isn't enough when time is running out faster than work is done."]],
        k: "Compare % elapsed with % complete: a big gap means trouble." },
      { d: 3, q: "An executive asks why the agile project's feature list keeps changing in the report while the waterfall project's doesn't. What's the best explanation?", o: [
        ["Agile fixes time and cost and flexes scope", "Correct. The objective stays constant; the features that achieve it evolve."],
        ["The agile team isn't sticking to its approved plan", "Changing scope is how agile is designed to work, not a failure."],
        ["Waterfall projects lock scope, so they never change at all", "They lock scope, but changes still happen through change control."],
        ["The report double-counts the agile project's features", "The difference is the method, not a reporting error."]],
        k: "Agile reports progress toward an objective, not a frozen feature list." },
      { d: 3, q: "A portfolio has five agile and four waterfall projects. The CFO wants one dashboard. Which measures make the comparison fair?", o: [
        ["Dates, % schedule elapsed, % scope complete", "Correct. Each method calculates % complete its own way, but the result is comparable."],
        ["Story points for every project, including waterfall ones", "Waterfall projects don't track story points."],
        ["Gantt-chart progress for all projects, agile ones included", "Agile projects don't run on Gantt charts."],
        ["Each project's own status report, stapled together into one big pack", "That's a pile of reports, not a unified view."]],
        k: "Shared measures, calculated each method's own way, make one honest dashboard." }
    ],
    flips: [
      { d: 2, f: "Your portfolio mixes agile and waterfall. What goes in one status report, and how is % complete worked out?", b: "Planned start and finish, % of schedule elapsed, % of features or scope complete, and overall status. Agile % complete = completed story points ÷ total points. Waterfall % complete = major milestones done ÷ total milestones." }
    ]
  }

  ]
});
