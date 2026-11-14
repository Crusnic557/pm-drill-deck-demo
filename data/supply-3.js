/* Course 3 · Supply Chain Project Management. Part 3: Execute, Change, Transition, and DIRECT in practice. */

PMQ.fig("scorecard", `<svg viewBox="0 0 600 222" role="img" aria-label="A weekly project scorecard for a fulfilment centre start-up">
<rect class="bx" x="1" y="1" width="598" height="220" rx="6"/>
<text class="tb" x="12" y="24">PROJECT SCORECARD · WEEK 14</text><text class="t2" x="588" y="24" text-anchor="end">to sponsor every Friday</text>
<line class="s" x1="1" x2="599" y1="34" y2="34"/>
<text class="t2" x="12" y="52">METRIC</text><text class="t2" x="180" y="52">STATUS</text><text class="t2" x="290" y="52">NOTE</text>
<text class="t" x="12" y="76">Schedule</text><circle class="bad" cx="185" cy="72" r="5"/><text class="tbad" x="196" y="76">At risk</text><text class="t2" x="290" y="76">Racking install 4 days late</text>
<line class="s2" x1="12" x2="588" y1="84" y2="84"/>
<text class="t" x="12" y="100">Budget</text><circle class="ok" cx="185" cy="96" r="5"/><text class="tok" x="196" y="100">On track</text><text class="t2" x="290" y="100">Spend 3% under plan</text>
<line class="s2" x1="12" x2="588" y1="108" y2="108"/>
<text class="t" x="12" y="124">Quality</text><circle class="ok" cx="185" cy="120" r="5"/><text class="tok" x="196" y="124">On track</text><text class="t2" x="290" y="124">UAT: 46 of 50 test scripts passed</text>
<line class="s2" x1="12" x2="588" y1="132" y2="132"/>
<text class="t" x="12" y="148">Risk</text><circle class="bad" cx="185" cy="144" r="5"/><text class="tbad" x="196" y="148">At risk</text><text class="t2" x="290" y="148">Fire sign-off date not confirmed</text>
<line class="s2" x1="12" x2="588" y1="156" y2="156"/>
<text class="t" x="12" y="172">Customer satisfaction</text><circle class="ok" cx="185" cy="168" r="5"/><text class="tok" x="196" y="172">On track</text><text class="t2" x="290" y="172">Pilot users rate new WMS 4.2 / 5</text>
<line class="s" x1="1" x2="599" y1="184" y2="184"/>
<text class="t2" x="12" y="206">Action items: 7 open, 2 overdue · Scope changes: 1 awaiting approval</text>
</svg>`);

PMQ.fig("delta-dip", `<svg viewBox="0 0 600 206" role="img" aria-label="Performance dips after go-live, then climbs the learning curve above the old level">
<line class="s2" x1="50" x2="50" y1="16" y2="180"/><line class="s2" x1="50" x2="584" y1="180" y2="180"/>
<line class="dash" x1="50" x2="584" y1="80" y2="80"/><line class="dash" x1="230" x2="230" y1="36" y2="180"/>
<path class="acc-s" d="M50 80 H230 C245 80 250 150 272 150 C300 150 340 95 400 72 C450 54 520 44 575 40"/>
<text class="t2" x="56" y="24">performance</text><text class="t2" x="56" y="72">old level</text>
<text class="ta" x="236" y="30">go live</text>
<text class="tbad" x="272" y="170" text-anchor="middle">delta dip</text>
<text class="t2" x="410" y="100">learning curve</text>
<text class="tok" x="575" y="30" text-anchor="end">new, higher level</text>
<text class="t2" x="56" y="198">Plan for the dip before you go live.</text><text class="t2" x="584" y="198" text-anchor="end">time</text>
</svg>`);

PMQ.fig("transition-map", `<svg viewBox="0 0 600 214" role="img" aria-label="Who needs help with the transition, and what each group needs">
<text class="tb" x="8" y="20">Change happens around people. Transition is how it affects them.</text>
<line class="s" x1="8" x2="592" y1="32" y2="32"/>
<text class="t" x="8" y="54">Customers, suppliers</text><circle class="acc" cx="176" cy="50" r="3.5"/><text class="t2" x="186" y="54">Hear early; concerns answered; expectations set</text>
<line class="s2" x1="8" x2="592" y1="64" y2="64"/>
<text class="t" x="8" y="82">Employees</text><circle class="acc" cx="176" cy="78" r="3.5"/><text class="t2" x="186" y="82">Know why it's changing; trained to do the new job</text>
<line class="s2" x1="8" x2="592" y1="92" y2="92"/>
<text class="t" x="8" y="110">Roles removed</text><circle class="acc" cx="176" cy="106" r="3.5"/><text class="t2" x="186" y="110">Severance, re-employment help, job-search tools</text>
<line class="s2" x1="8" x2="592" y1="120" y2="120"/>
<text class="t" x="8" y="138">Project team</text><circle class="acc" cx="176" cy="134" r="3.5"/><text class="t2" x="186" y="138">Handover, lessons learned, next role, celebration</text>
<line class="s2" x1="8" x2="592" y1="148" y2="148"/>
<text class="t" x="8" y="166">You</text><circle class="acc" cx="176" cy="162" r="3.5"/><text class="t2" x="186" y="166">Reflect: what went well, how to support teams better</text>
<line class="s" x1="8" x2="592" y1="180" y2="180"/>
<text class="t2" x="8" y="202">“People don't really resist change. They resist the transition.”</text>
</svg>`);

PMQ.fig("direct-wildfire", `<svg viewBox="0 0 600 226" role="img" aria-label="A DIRECT response to a wildfire near the bottle supplier">
<text class="tb" x="8" y="20">Wildfire near the bottle supplier: a DIRECT response</text>
<rect class="acc" x="8" y="34" width="24" height="24" rx="4"/><text class="tw" x="20" y="50" text-anchor="middle">D</text><text class="tc" x="42" y="50">Objective: enough bottles to keep the supply chain running</text>
<rect class="acc" x="8" y="66" width="24" height="24" rx="4"/><text class="tw" x="20" y="82" text-anchor="middle">I</text><text class="tc" x="42" y="82">Check stock on hand, bottles in transit or rescuable, then other suppliers</text>
<rect class="acc" x="8" y="98" width="24" height="24" rx="4"/><text class="tw" x="20" y="114" text-anchor="middle">R</text><text class="tc" x="42" y="114">Agree who has authority to decide; use a RACI so everyone knows their role</text>
<rect class="acc" x="8" y="130" width="24" height="24" rx="4"/><text class="tw" x="20" y="146" text-anchor="middle">E</text><text class="tc" x="42" y="146">Act fast on partial information; run a disruption response centre</text>
<rect class="acc" x="8" y="162" width="24" height="24" rx="4"/><text class="tw" x="20" y="178" text-anchor="middle">C</text><text class="tc" x="42" y="178">Return to normal operations; onboard a new supplier if the factory is lost</text>
<rect class="acc" x="8" y="194" width="24" height="24" rx="4"/><text class="tw" x="20" y="210" text-anchor="middle">T</text><text class="tc" x="42" y="210">People first: safety, families, and support to do their jobs</text>
</svg>`);

PMQ.course({
  id: "supply",
  topics: [

  /* ---------------------------------------------------------------- 14 */
  {
    id: "execute",
    title: "Execute the plan",
    summary: "Project managers joke that the first 90% of the work takes 90% of the time, and the last 10% takes another 90%. We overestimate the work we've done and underestimate what's left, which leads to missed deadlines and budget overruns. The plan is really just a guess about how the work will get done; it can't account for everything that can go wrong. Five things keep execution on track, or get it back on track: regular updates from team members (through meetings, emails or even online surveys, with each task's status tracked in project management software); a project scorecard summarising status, often with metrics for schedule, budget, quality, risk and customer satisfaction; an action item tracker listing the issues that have come up and what's being done about them; a scope change management process, so everyone knows how changes to the plan are made and every change is communicated to the whole team; and a communication plan saying who needs updates, what information they need and how they'll get it, such as a weekly scorecard to the sponsor and other stakeholders.",
    figs: ["scorecard"],
    terms: [
      ["90/90 rule", "The project managers' joke that the first 90% of the work takes 90% of the time and the last 10% takes another 90%: we overestimate progress and underestimate what's left.", "A fit-out reported as “nearly done” for six weeks while snags and sign-offs drag on."],
      ["Project scorecard", "A document summarising the project's status, often with metrics for schedule, budget, quality, risk and customer satisfaction.", "A one-page weekly scorecard the project manager sends the sponsor every Friday.", 0, "scorecard"],
      ["Action item tracker", "A list of the issues that have come up and what's being done to fix them.", "“Racking delivery late: chasing supplier, owner Sam, due Wednesday.”"],
      ["Scope change management process", "An agreed way to request, approve and record changes to the plan, so changes are controlled and communicated to the whole team.", "A change request form for extra software modifications, reviewed weekly by the sponsor."],
      ["Communication plan", "A plan of who needs project updates, what information they need, and how and when they'll get it.", "Sponsor: weekly scorecard by email. Site team: daily stand-up. Key suppliers: fortnightly call."]
    ],
    cards: [
      { d: 1, q: "What does the 90/90 joke say about projects?", o: [
        ["We overestimate work done and underestimate work left", "Correct. That leads to missed deadlines and budget overruns."],
        ["Ninety per cent of projects finish on time and budget", "Sadly not; the joke is about the opposite."],
        ["Teams should spend 90% planning and 10% doing", "Not what the joke means."],
        ["The last 10% of budget buys 90% of the results", "Not what the joke means."]],
        k: "“Nearly done” usually isn't." },
      { d: 1, q: "Which metrics does a project scorecard often include, according to the course?", o: [
        ["Schedule, budget, quality, risk, satisfaction", "Correct. A scorecard tracks schedule, budget, quality, risk and customer satisfaction at a glance."],
        ["Revenue, profit margin, market share and the company share price", "Those are business results, not project status."],
        ["Headcount, staff turnover, overtime and sick leave", "Those are HR metrics."],
        ["Website visits, clicks, downloads and shares", "Those are marketing metrics."]],
        k: "Scorecard: schedule, budget, quality, risk, customer satisfaction." },
      { d: 1, q: "What is an action item tracker?", o: [
        ["A list of open issues and what's being done to fix them", "Correct. It lists open issues with the action being taken on each and who owns it."],
        ["A record of every email sent on the project", "That's an archive, not a tracker."],
        ["The list of scope changes approved by the sponsor so far", "Scope changes have their own process."],
        ["A chart of who is responsible for each task", "That's a RACI matrix."]],
        k: "Every issue gets an action and an owner." },
      { d: 2, q: "Why does the course call the project plan “really just a guess”?", o: [
        ["It can't account for everything that could go wrong", "Correct. That's why execution needs tracking and adjusting."],
        ["Plans are usually written by people outside the team", "Not the course's point."],
        ["Sponsors rarely read the project plan anyway", "Not the course's point."],
        ["Plans are only really needed for agile projects", "Plans matter for every method."]],
        k: "The plan is a forecast; execution tests it." },
      { d: 2, q: "Halfway through, a stakeholder asks for an extra feature. What should already exist so this is handled well?", o: [
        ["A scope change management process", "Correct. Everyone knows how changes are made, and every change is communicated."],
        ["A larger contingency budget and schedule", "Buffer helps absorb change, but it doesn't decide whether to accept it."],
        ["A brand-new project charter", "You don't rewrite the charter for every request."],
        ["A user acceptance test plan", "UAT checks the finished solution; it doesn't manage change requests."]],
        k: "Changes go through the process, not around it." },
      { d: 2, q: "Look at the scorecard. What should you raise with the sponsor first?", fig: "scorecard", o: [
        ["The late racking install and the unconfirmed fire sign-off", "Correct. They're the two items marked at risk."],
        ["The budget, because spending is under plan", "Under plan and on track isn't the urgent news."],
        ["Quality, because four of the UAT test scripts haven't passed yet", "Quality is marked on track; the failures are being worked through."],
        ["Customer satisfaction, as pilot users rate it 4.2", "That's marked on track."]],
        k: "Lead with what's at risk." },
      { d: 2, q: "Which execution tool says the sponsor receives the scorecard at least once a week?", o: [
        ["The communication plan", "Correct. It sets who gets what information, how and when."],
        ["The action item tracker", "That lists issues and fixes."],
        ["The scope change process", "That governs changes to the plan."],
        ["The work breakdown structure", "That breaks down the work, not the reporting."]],
        k: "Who hears what, how and when = communication plan." },
      { d: 3, q: "The WMS integration has been reported as “95% done” for four weeks running. What's the best response?", o: [
        ["Track the remaining work task by task", "Correct. Task-level updates beat a vague percentage, the classic 90/90 trap."],
        ["Accept it, because the last 5% of any integration is always quick", "The 90/90 joke says the opposite."],
        ["Cut testing so it can be finished sooner", "That trades a late project for a broken one."],
        ["Stop asking for updates until it's finished", "Fewer updates make the problem harder to see."]],
        k: "Track tasks, not percentages." },
      { d: 3, q: "The scorecard shows a risk with no mitigation plan. Where should the fix be captured and followed up?", o: [
        ["The action item tracker, with an owner and date", "Correct. It's where issues and what's being done about them are tracked."],
        ["The project charter, by rewriting the objective", "The objective hasn't changed."],
        ["The Gantt chart, by hiding the risk inside a buffer", "Hiding a risk doesn't mitigate it."],
        ["The RACI matrix, by adding a second accountable person to the task", "One A per task; more As won't help."]],
        k: "Every risk without a plan becomes an action item." },
      { d: 3, q: "Your team is spread across Auckland, Sydney and Manila. What's the course-aligned way to get regular updates?", o: [
        ["Meetings, emails or online surveys, with task status in PM software", "Correct. These are the course's update channels."],
        ["Wait for the monthly steering committee meeting to hear about issues", "Monthly is too slow to catch problems early."],
        ["Ask only the team leads, once a quarter", "Too infrequent, and it misses the people doing the work."],
        ["Rely on people to raise problems if they have any", "Problems tend to surface late that way."]],
        k: "Regular, structured updates from everyone." }
    ],
    flips: [
      { d: 1, f: "List the five things the course says to do while executing a project.", b: "1 Get regular updates from team members. 2 Summarise status in a project scorecard (schedule, budget, quality, risk, customer satisfaction). 3 Keep an action item tracker of issues and fixes. 4 Run a scope change management process. 5 Follow a communication plan: who gets what, how and when." }
    ]
  },

  /* ---------------------------------------------------------------- 15 */
  {
    id: "change",
    title: "Change over: going live",
    summary: "The point where a project brings a lot of change to a lot of people is called the implementation, launch, start-up or go-live, and many critical activities happen in a very short time. Two Trees' new facility might take a year, with milestones like buying the land, finishing construction and installing equipment, yet that work barely affects anyone outside the project team. At go-live, people start using new equipment and processes, and new staff may need hiring and training. The course's tips: treat the go-live as a separate project (know who's on the go-live team and how to contact them, and maybe write a separate go-live plan); test all the pieces, then the entire system, often called user acceptance testing, as close to the real production environment as possible (Two Trees tests each machine, then does a mock run from receiving raw materials to delivering bottles to its distribution centre); plan how you'll communicate with the whole team, perhaps with a daily stand-up for all functional groups and everyone's email and phone number; have contingency plans (what if the new olive washer fails, people get sick or the power goes out?); and plan for a drop in performance, the delta dip, before performance climbs the learning curve to better than before.",
    figs: ["delta-dip"],
    terms: [
      ["Go-live", "The point when the new solution is switched on and many people start using new systems and processes. Also called implementation, launch or start-up.", "The first morning the new fulfilment centre ships real customer orders."],
      ["User acceptance testing (UAT)", "Testing every piece, then the entire system working together, as close to the real production environment as possible, before go-live.", "Testing each new machine, then a mock run from receiving olives to delivering bottles to the distribution centre."],
      ["Delta dip", "The temporary drop in performance just after go-live, before people and processes get up to speed.", "Pick rates fall in the new warehouse's first fortnight, then climb past the old rate.", 0, "delta-dip"],
      ["Learning curve", "The way performance improves as people keep using new processes and systems, eventually beating the old level.", "Pick rates rising week by week as staff learn the new layout."],
      ["Contingency plan", "A backup plan for something that could go wrong, such as equipment failure, illness or a power cut.", "Hand-held scanners and paper pick lists ready in case the WMS goes down."]
    ],
    cards: [
      { d: 1, q: "What other names does the course give the go-live?", o: [
        ["The implementation, launch or start-up", "Correct. The course uses go-live, implementation, launch and start-up for the same moment."],
        ["The kick-off, initiation or charter", "Those belong to the start of a project."],
        ["The handover, closure or wrap-up", "Those come at the end, after go-live."],
        ["The baseline, freeze or sign-off", "Those are planning and control terms."]],
        k: "Go-live = implementation = launch = start-up." },
      { d: 1, q: "What is the delta dip?", af: "delta-dip", o: [
        ["A temporary drop in performance after go-live", "Correct. Performance then climbs the learning curve."],
        ["A cost saving made at the end of a project", "Not a cost term."],
        ["The gap between planned and actual budget", "That's a budget variance."],
        ["A fall in demand before a product launches", "Not what the delta dip means."]],
        k: "Expect performance to dip before it rises." },
      { d: 1, q: "What does the course mean by “treat the go-live as a separate project”?", o: [
        ["Give it its own team list, contacts and maybe its own plan", "Correct. Lots of detail, and you need to respond to issues fast."],
        ["Hand it over to a different, specialist project manager entirely", "You still lead it; you just plan it as its own piece."],
        ["Fund it from a completely separate budget", "Budget isn't the point."],
        ["Delay it until the main project has closed", "Go-live is part of the project, not something after it."]],
        k: "Go-live deserves its own plan." },
      { d: 2, q: "Two Trees tests each new machine, then runs raw materials all the way through to bottles at the distribution centre. What is this?", o: [
        ["User acceptance testing, including a mock run", "Correct. Every piece, then the whole system, before go-live."],
        ["A kaizen event to improve the process", "A kaizen improves a process; this is testing before go-live."],
        ["External benchmarking against other firms", "Benchmarking learns from others; this tests your own system."],
        ["Measuring the delta dip before go-live", "The delta dip happens after go-live, so it can't be measured beforehand."]],
        k: "Test the pieces, then the whole." },
      { d: 2, q: "Why does most of a year-long facility project barely affect people outside the team, while go-live affects many?", o: [
        ["Many people suddenly switch to new ways of working", "Correct. That's why so much change lands at go-live."],
        ["Construction details are usually kept confidential until go-live", "Secrecy isn't the reason."],
        ["Outsiders aren't told about the project until the end", "They may know about it; it just doesn't change their work yet."],
        ["Go-live is when most of the budget gets spent", "Most spending usually happens earlier."]],
        k: "Most of the change for most people arrives at go-live." },
      { d: 2, q: "Which of these is a go-live contingency plan the course would want?", o: [
        ["A backup if the olive washer fails", "Correct. The course also mentions sickness and power outages."],
        ["A plan to celebrate the team's success after go-live", "That's part of Transition."],
        ["A plan to brainstorm more options", "That's part of Investigate."],
        ["A plan to rewrite the project charter", "That isn't contingency planning."]],
        k: "Ask “what if?” before go-live, not during it." },
      { d: 2, q: "Which communication idea does the course suggest for go-live?", o: [
        ["A daily stand-up with all the functional groups", "Correct. Plus having everyone's email and phone number."],
        ["A monthly newsletter to all staff", "Far too slow for go-live issues."],
        ["One email once go-live is complete", "You need communication during go-live."],
        ["A weekly steering committee review of go-live issues", "Too slow for the pace of a go-live."]],
        k: "Go-live needs daily contact." },
      { d: 3, q: "You're commissioning a new building's fire alarm and BMS integration. Every device passed its own test. What's still missing before handover?", o: [
        ["Testing the whole system together", "Correct. Pieces can pass alone and still fail together."],
        ["Nothing: if every device passed its own test, the system works", "Integration problems only show up when everything runs together."],
        ["A new charter for the handover phase", "A charter won't find integration faults."],
        ["Celebrating the team's hard work", "Celebrate after the system is proven."]],
        k: "Test the parts, then test the whole." },
      { d: 3, q: "A new WMS goes live and pick rates drop 25% in week one. The operations director wants to roll back. What's your advice?", o: [
        ["Expect a delta dip and support staff", "Correct, unless there's a real fault. Agree beforehand what size of dip would trigger the contingency plan."],
        ["Roll back to the old system now, since the new one has clearly failed", "A first-week dip is expected, not proof of failure."],
        ["Hide the numbers until they improve", "Hiding performance destroys trust."],
        ["Cut training to free up more picking time", "Less training slows the learning curve."]],
        k: "Plan for the dip so it doesn't cause panic." }
    ],
    flips: [
      { d: 2, f: "Give the course's go-live tips.", b: "1 Treat the go-live as a separate project, with its own team list, contacts and maybe its own plan. 2 Test every piece, then the whole system (user acceptance testing), as close to production as possible. 3 Plan communication, such as a daily stand-up with all functional groups, and have contingency plans. 4 Plan for the delta dip: performance drops before it climbs the learning curve." }
    ]
  },

  /* ---------------------------------------------------------------- 16 */
  {
    id: "transition",
    title: "Transition the people",
    summary: "“People don't really resist change. They resist the transition.” Change happens around people; transition is how it affects them: the process people go through as they respond, adapt and come to terms with a change. Supply chain projects affect many stakeholders in different ways. Customers and suppliers may need to do business with you differently: tell them well in advance, address their concerns, and help them plan ahead and set expectations. Employees may need to learn a new program or process: make sure they understand why it's happening and have the training to do their jobs. If a project reduces headcount, prepare those people to move on with severance, re-employment assistance and access to job-search tools like LinkedIn. When the project team hands operational responsibility to a permanent team, have a turnover process so everyone knows who's responsible for what and when, and capture lessons learned. The end of the project may also end team members' jobs, so help them into new roles or onward. Celebrate success, with a team lunch or dinner, awards or certificates, messages from upper management, or treats and bonuses. And don't forget yourself: reflect on what you achieved and how to support your teams better.",
    figs: ["transition-map"],
    terms: [
      ["Change vs transition", "Change is what happens around people, such as a new building or new software. Transition is how it affects them: the process of responding, adapting and coming to terms with it.", "The new WMS is the change; a picker learning new scanning routines and worrying about targets is the transition.", 0, "transition-map"],
      ["Turnover to operations", "Handing operational responsibility from the project team to the permanent team, with a clear process for who's responsible for what, and when.", "The project team hands the running fulfilment centre to the site manager, with the open issues listed."],
      ["Lessons learned", "Capturing what went well and what didn't so future projects benefit, typically at handover.", "“Book the electrical inspector earlier next time.”"],
      ["Re-employment assistance", "Help for people whose jobs a project removes, such as severance pay, outplacement support and access to job-search tools.", "CV workshops and job-search support for staff whose roles are automated."],
      ["Bridges' transition model", "William Bridges' model, which the course's change-versus-transition idea echoes: people move through an ending, a neutral zone and a new beginning.", "Staff let go of the old warehouse routine, muddle through a confusing in-between stage, then settle into the new one.", 1]
    ],
    cards: [
      { d: 1, q: "Complete the course's quote: “People don't really resist change…”", o: [
        ["“…They resist the transition.”", "Correct. That's why Transition is its own DIRECT pillar."],
        ["“…They resist the extra workload.”", "Workload can matter, but it isn't the quote."],
        ["“…They resist the people leading it.”", "Not the quote."],
        ["“…They resist not being asked first.”", "Not the quote."]],
        k: "People resist the transition, not the change." },
      { d: 1, q: "How does the course distinguish change from transition?", o: [
        ["Change happens around people; transition is how it affects them", "Correct. Change is the external event; transition is the human experience of adjusting to it."],
        ["Change is planned; transition happens by accident", "Transition should be planned for too."],
        ["Change is for the systems; transition is for the buildings and sites", "Both can involve systems and buildings."],
        ["They mean exactly the same thing in DIRECT", "They're separate pillars."]],
        k: "Change is the event; transition is the human experience of it." },
      { d: 1, q: "How should you help customers and suppliers through a transition?", o: [
        ["Tell them early and set expectations", "Correct. Early notice and clear expectations give partners time to prepare and raise concerns."],
        ["Tell them on go-live day, so there's no confusion about the timing", "Too late for them to plan ahead."],
        ["Let the sales team decide whether to tell them", "Everyone affected should be told."],
        ["Only tell them if they complain", "By then it's too late."]],
        k: "Early notice, concerns answered, expectations set." },
      { d: 2, q: "What two things does the course say employees need to transition well?", o: [
        ["Why it's changing, and training", "Correct. People need to understand why things are changing, and be trained to work the new way."],
        ["A pay rise and a new job title", "Not what the course says."],
        ["A vote on the vendor choice and the budget", "Not what the course says."],
        ["Extra leave and lower performance targets during the change", "Not what the course says."]],
        k: "Explain why; train for how." },
      { d: 2, q: "A project automates 15 roles. What should the transition include for those people?", o: [
        ["Severance and re-employment help", "Correct. The course mentions access to tools like LinkedIn."],
        ["Nothing: their roles no longer exist", "The transition still includes them."],
        ["A guaranteed place on the project team", "Not what the course suggests."],
        ["Training so they can operate the new automated system", "That's for people who'll keep working with it."]],
        k: "Prepare people to move on with dignity." },
      { d: 2, q: "When the project team hands the running operation to a permanent team, what should happen?", o: [
        ["A turnover process: who owns what, and when", "Correct. It's also a good time to capture lessons learned."],
        ["The project team stays on indefinitely to run it", "Projects end; operations take over."],
        ["The operations team works it out on its own as issues come up", "That's how things fall through the cracks."],
        ["The project is reopened to add more changes", "Handover isn't a reason to reopen scope."]],
        k: "Hand over deliberately, and capture lessons learned." },
      { d: 2, q: "Which of these does the course suggest for celebrating a project team's success?", o: [
        ["A team meal, awards, or messages from upper management", "Correct. Treats or bonuses are on the list too."],
        ["Extending the project so the team can stay together", "Not a celebration idea."],
        ["Skipping it to start the next project sooner", "The course recommends celebrating."],
        ["Celebrating only if the project came in under budget", "The course doesn't set that condition."]],
        k: "Celebrate the team." },
      { d: 2, q: "What's the course's final tip about transition?", o: [
        ["Don't forget yourself: reflect on the project and how to improve", "Correct. The end of a project affects the project manager too."],
        ["Always ask for a promotion when a project ends", "Not the course's tip."],
        ["Delete the project files to protect the client's confidentiality", "Not the course's tip."],
        ["Move straight on to the next project", "The course suggests pausing to reflect."]],
        k: "Transition yourself too." },
      { d: 3, q: "Your store is moving to self-checkouts. Cashiers are anxious and rumours are spreading. Which action best fits the Transition pillar?", o: [
        ["Explain why, what it means, and train them", "Correct. Understanding why, plus training, is what the course recommends for employees."],
        ["Install the machines overnight so that nobody has any time to object first", "Surprise makes the transition harder."],
        ["Tell staff it's not up for discussion", "Shutting down concerns feeds the rumours."],
        ["Wait until go-live and answer questions then", "Too late to prepare people."]],
        k: "Rumours fill the gap that communication leaves." },
      { d: 3, x: 1, q: "In Bridges' transition model, which phase comes between the ending and the new beginning?", o: [
        ["The neutral zone", "Correct. The uncomfortable in-between stage where the old way has gone and the new one isn't settled yet."],
        ["The delta dip", "Tempting, but that's the course's performance drop after go-live, not a Bridges phase."],
        ["The go-live", "Go-live is a project event, not a phase of personal transition."],
        ["The learning curve", "That describes performance improving, not a Bridges phase."]],
        k: "Ending → neutral zone → new beginning." }
    ],
    flips: [
      { d: 2, f: "Who needs help with the transition on a supply chain project, and what kind of help?", b: "Customers and suppliers: early notice, concerns addressed, expectations set. Employees: why it's changing, plus training. People whose roles go: severance, re-employment help and job-search tools. The project team: a clear handover, lessons learned, help into new roles, and a celebration. You: time to reflect." }
    ]
  },

  /* ---------------------------------------------------------------- 17 */
  {
    id: "direct-cases",
    title: "DIRECT in practice: start-ups and disruptions",
    summary: "The course ends with two DIRECT exercises. Starting up an e-commerce fulfilment centre. Define: fill online orders efficiently, raising revenue and cutting the cost of earning it, documented in a project charter. Investigate: model the logistics network to choose a location; compare buying an existing building, leasing one or building new; and consider outsourcing to a third-party logistics (3PL) provider. Resolve: a WBS, then a Gantt chart and RACI matrix, in a hybrid of waterfall and agile because of the software work. Execute: frequent updates, consolidated into a weekly scorecard. Change: user acceptance testing of the information systems before go-live; well-defined processes, from inbound deliveries and shift schedules to cleaning the offices; and suppliers told to route some shipments to the new site. Transition: training for everyone, since they're all starting new jobs, and an expected learning curve; plan when the project team wraps up, celebrate, and hand over to operations. Responding to a disruption is usually a project too. When a wildfire threatens Two Trees' glass-bottle supplier, DIRECT gives a quick structure, from making sure there are enough bottles to looking after people and their families first.",
    figs: ["direct-wildfire"],
    terms: [
      ["Third-party logistics (3PL)", "An outside company that runs warehousing, fulfilment or transport for you.", "Outsourcing e-commerce fulfilment to a 3PL instead of opening your own centre."],
      ["Logistics network modelling", "Analysing where facilities should be, based on customers, suppliers, costs and delivery times.", "Modelling whether a fulfilment centre in Auckland or Hamilton reaches more customers next day."],
      ["Disruption response centre", "A central place, physical or virtual, where the team gives updates and reports issues during a supply chain disruption.", "A shared channel and a twice-daily call while a wildfire threatens a supplier."],
      ["Supply chain disruption", "An unexpected event that interrupts supply, such as a fire, storm, strike or port closure. The course says responding to one is usually a project.", "A wildfire near Two Trees' glass-bottle supplier.", 0, "direct-wildfire"]
    ],
    cards: [
      { d: 1, q: "In the fulfilment-centre exercise, what's the ultimate goal in Define?", o: [
        ["Raise revenue and cut the cost of earning it", "Correct, by filling online orders efficiently."],
        ["Build the biggest warehouse in the region", "Size isn't the objective."],
        ["Replace all retail sales with online sales", "The course doesn't say to drop retail."],
        ["Avoid buying any new software", "The project actually needs software changes."]],
        k: "Define the business outcome, then document it in a charter." },
      { d: 1, q: "Which alternative to opening its own fulfilment centre does the course suggest Two Trees investigate?", o: [
        ["Outsourcing to a third-party logistics firm", "Correct. Alongside buying, leasing or building a facility."],
        ["Going back to selling only to wholesalers", "That abandons the online objective."],
        ["Shipping online orders straight from the factory floor to customers", "Not an option the course raises."],
        ["Asking customers to collect orders in person", "Not an option the course raises."]],
        k: "Outsourcing to a 3PL is always worth investigating." },
      { d: 2, q: "Why is the fulfilment-centre project likely to be a hybrid?", o: [
        ["It mixes software work with a physical build", "Correct. Waterfall for the facility, agile for the software."],
        ["Hybrid projects always cost less than pure waterfall or agile ones", "Cost isn't why it's hybrid."],
        ["The sponsor prefers the language of agile", "Preference isn't the reason."],
        ["The building is too small for a waterfall plan", "Size doesn't rule out waterfall."]],
        k: "Physical build plus software = hybrid." },
      { d: 2, q: "In the Change step, why tell suppliers about the new fulfilment centre?", o: [
        ["To route shipments to the new site", "Correct. Suppliers need to know where to send shipments once the new site goes live."],
        ["So they can bid to run the new centre on Two Trees' behalf", "Not the reason the course gives."],
        ["So they can raise prices for the new site", "Not the reason the course gives."],
        ["So they can take over the old warehouse", "Not the reason the course gives."]],
        k: "Go-live changes your partners' processes too." },
      { d: 2, q: "In the wildfire case, what's the objective?", o: [
        ["Enough bottles to keep the chain running", "Correct. Even in a crisis, a clear objective (enough bottles to keep the chain running) guides every decision."],
        ["Help the supplier fight the fire at its factory", "Safety matters, but that isn't Two Trees' objective."],
        ["Find the cheapest replacement bottle supplier anywhere in the country", "Price is one factor, not the objective."],
        ["Switch permanently to plastic bottles", "Not the course's objective."]],
        k: "Define the objective even in a crisis." },
      { d: 2, q: "What should Two Trees check first when investigating its options in the wildfire case?", o: [
        ["How many bottles it already has in inventory", "Correct. That tells it how soon it'll be in trouble."],
        ["Which supplier has the nicest bottle design", "Design isn't the urgent question."],
        ["Whether customers would accept oil without bottles", "Not a realistic option."],
        ["How much the supplier's insurance will pay out", "That's the supplier's concern, not Two Trees' first step."]],
        k: "First, how long can we last?" },
      { d: 2, q: "For each alternative bottle supplier, which three facts does the course want?", o: [
        ["Location, how quickly they can fill an order, and price", "Correct. Location, speed to fill an order and price let you compare suppliers quickly."],
        ["Size, age and ownership of the company", "Not the course's three facts."],
        ["Brand, logo and website quality", "Not relevant in a disruption."],
        ["Staff numbers, shift patterns and upcoming public holidays", "Not the course's three facts."]],
        k: "Where are they, how fast, how much?" },
      { d: 2, q: "Why does the course stress knowing who has decision-making authority in the wildfire response?", o: [
        ["A quick response is essential if the situation gets worse", "Correct. A RACI makes everyone's role clear."],
        ["The law requires one named decision-maker", "Not the course's reason."],
        ["The supplier must approve every decision Two Trees makes", "Two Trees makes its own decisions."],
        ["It's needed for the lessons-learned report", "It's needed for speed now, not for the report."]],
        k: "In a crisis, know who decides." },
      { d: 3, q: "If the bottle factory does burn down, what does Change mean in this case?", o: [
        ["Getting back to normal operations by onboarding a new supplier", "Correct. In a disruption, change is about returning to normal."],
        ["Going live with a new e-commerce website", "That's a different project."],
        ["Changing the project objective to cutting bottle costs instead", "The objective stays the same."],
        ["Rebuilding the supplier's factory for them", "That's the supplier's job."]],
        k: "In a disruption, Change means back to normal." },
      { d: 3, q: "Why does the course say Transition in a disruption starts with taking care of people?", o: [
        ["Staff may need to look after family first", "Correct. People can't help the business until their own lives are safe."],
        ["People matter less than bottles in a crisis", "The course says the opposite."],
        ["Staff must be retrained on the new supplier's ordering process first", "Training may come later; safety comes first."],
        ["The supplier's contract requires it", "Not the course's reason."]],
        k: "People first, especially in a disruption." },
      { d: 3, q: "The course says Two Trees probably won't act until the fire gets worse. Why plan now anyway?", o: [
        ["If it worsens, they'll need to act fast on incomplete information", "Correct. Planning ahead makes a fast response possible."],
        ["Plans are only useful if they're never used", "Not the course's point."],
        ["Its insurer requires a written plan before the fire reaches the area", "Not the course's reason."],
        ["Planning early guarantees the fire won't spread", "Planning can't control the fire."]],
        k: "Plan in calm, act fast in crisis." },
      { d: 3, q: "A cyclone, like Gabrielle in 2023, closes the main road from your produce supplier. Using DIRECT, what's the best first move?", o: [
        ["Define the objective: keep enough supply to serve customers", "Correct. A clear objective focuses a fast response."],
        ["Execute at once: send trucks down any open road", "Speed matters, but without an objective and options you may make it worse."],
        ["Transition: celebrate the team's hard work", "Celebration comes much later."],
        ["Resolve: sign a contract with the first new supplier you can find", "That skips investigating options such as stock on hand."]],
        k: "Even a fast response starts with Define." }
    ],
    flips: [
      { d: 3, f: "Run DIRECT on the wildfire near Two Trees' bottle supplier.", b: "Define: make sure there are enough bottles to keep the supply chain running. Investigate: bottles in inventory (how long can we last?), bottles in transit or rescuable, and other suppliers' location, speed and price. Resolve: be clear who has authority to decide; use a RACI. Execute: move fast, even on partial information; set up a disruption response centre. Change: if the factory is lost, get back to normal by onboarding a new supplier. Transition: people first: safety, families, and support to do their jobs." },
      { d: 3, f: "Run DIRECT on starting up an e-commerce fulfilment centre.", b: "Define: fill online orders efficiently to raise revenue and cut the cost of earning it, in a project charter. Investigate: network modelling for location; buy, lease or build; outsourcing to a 3PL. Resolve: WBS, Gantt chart and RACI, as a hybrid of waterfall and agile. Execute: frequent updates rolled into a weekly scorecard. Change: UAT of the systems, well-defined processes, and suppliers told where to ship. Transition: training for everyone, an expected learning curve, celebration, and a handover to operations." },
      { d: 3, f: "Pick a disruption that could hit your own workplace and run DIRECT on it.", b: "For example, your main drinks distributor's warehouse floods. Define: keep the chillers stocked for customers. Investigate: stock on hand, orders in transit, other distributors (location, lead time, price), substitute products. Resolve: who can approve a new supplier and the spend; a quick RACI. Execute: a daily check-in and one channel for updates. Change: back to normal ordering, or onboard the new distributor. Transition: brief staff and customers, and check on anyone affected." }
    ]
  }

  ]
});
