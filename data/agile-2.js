/* Course 1 · Agile & Kanban Essentials — part 2: topics 6–10. Same card format as agile-1.js. */

PMQ.fig("kanban-rows", `<svg viewBox="0 0 600 232" role="img" aria-label="A kanban board with one task per row and progress columns">
<rect class="bx" x="1" y="1" width="598" height="230" rx="8"/>
<text class="t2" x="16" y="30">TASK</text>
<text class="t2" x="232" y="30" text-anchor="middle">NOT STARTED</text><text class="t2" x="334" y="30" text-anchor="middle">IN PROGRESS</text>
<text class="t2" x="436" y="30" text-anchor="middle">TESTING</text><text class="t2" x="538" y="30" text-anchor="middle">DONE</text>
<line class="s2" x1="10" x2="590" y1="42" y2="42"/>
<line class="s2" x1="181" x2="181" y1="12" y2="222"/><line class="s2" x1="283" x2="283" y1="12" y2="222"/><line class="s2" x1="385" x2="385" y1="12" y2="222"/><line class="s2" x1="487" x2="487" y1="12" y2="222"/>
<text class="t" x="16" y="74">Supplier list</text><line class="s2" x1="10" x2="590" y1="88" y2="88"/>
<text class="t" x="16" y="120">Order form</text><line class="s2" x1="10" x2="590" y1="134" y2="134"/>
<text class="t" x="16" y="166">Price check</text><line class="s2" x1="10" x2="590" y1="180" y2="180"/>
<text class="t" x="16" y="210">Delivery slots</text>
<rect class="note" x="503" y="54" width="70" height="26" rx="3"/><text class="tn" x="538" y="71" text-anchor="middle">done</text>
<rect class="note" x="401" y="100" width="70" height="26" rx="3"/><text class="tn" x="436" y="117" text-anchor="middle">day 2</text>
<rect class="bad" x="299" y="146" width="70" height="26" rx="3"/><text class="tw" x="334" y="163" text-anchor="middle">day 7</text>
<rect class="note" x="197" y="192" width="70" height="26" rx="3"/><text class="tn" x="232" y="209" text-anchor="middle">queued</text>
</svg>`);

PMQ.fig("kanban-wip", `<svg viewBox="0 0 600 252" role="img" aria-label="A kanban board with work-in-progress limits; In progress holds 4 cards against a limit of 3">
<rect class="bx2" x="5" y="36" width="140" height="210" rx="6"/><rect class="bx2" x="155" y="36" width="140" height="210" rx="6"/>
<rect class="bx2" x="305" y="36" width="140" height="210" rx="6"/><rect class="bx2" x="455" y="36" width="140" height="210" rx="6"/>
<text class="t2" x="12" y="24">TO DO</text><text class="tbad" x="162" y="24">IN PROGRESS 4/3</text><text class="t2" x="312" y="24">REVIEW 1/2</text><text class="t2" x="462" y="24">DONE</text>
<rect class="note" x="13" y="46" width="124" height="34" rx="3"/><text class="tn" x="21" y="67">Promo codes</text>
<rect class="note" x="13" y="88" width="124" height="34" rx="3"/><text class="tn" x="21" y="109">Gift cards</text>
<rect class="note" x="163" y="46" width="124" height="34" rx="3"/><text class="tn" x="171" y="67">Saved cards</text>
<rect class="note" x="163" y="88" width="124" height="34" rx="3"/><text class="tn" x="171" y="109">Delivery slots</text>
<rect class="note" x="163" y="130" width="124" height="34" rx="3"/><text class="tn" x="171" y="151">Address lookup</text>
<rect class="note" x="163" y="172" width="124" height="34" rx="3"/><text class="tn" x="171" y="193">GST rules</text>
<rect class="bad-s" x="159" y="40" width="132" height="202" rx="5"/>
<rect class="note" x="313" y="46" width="124" height="34" rx="3"/><text class="tn" x="321" y="67">Order email</text>
<rect class="note" x="463" y="46" width="124" height="34" rx="3"/><text class="tn" x="471" y="67">Login</text>
<rect class="note" x="463" y="88" width="124" height="34" rx="3"/><text class="tn" x="471" y="109">Cart</text>
</svg>`);

PMQ.course({
  id: "agile",
  topics: [

  /* ---------------------------------------------------------------- 6 */
  {
    id: "po",
    title: "The product owner",
    summary: "You can't do everything at once, so someone has to decide what comes next. The product owner balances what customers want with the business strategy and the team's capabilities. Their most important job is prioritising user stories: deciding which features get added at all and in what order, so the team always works on what creates the most value. They link the team to the rest of the business, need both business acumen and technical savvy, and set the vision for what the team builds. In many ways they're like the sponsor on a waterfall project.",
    terms: [
      ["Product owner (PO)", "The person who prioritises user stories and decides which features get added, balancing customer wants, business strategy and team capability.", "A PO puts contactless payment ahead of a loyalty scheme for the next sprint because it's what most customers are asking for."],
      ["Prioritisation", "Ordering work so the most valuable items are done first, which also means choosing what not to do yet.", "Ranking the fire-panel fault alert above a new dashboard colour theme."],
      ["Product vision", "The shared picture of what the product is for and who it serves. The product owner sets it.", "“Help small shops reorder stock in under two minutes.”"],
      ["Project sponsor", "On a waterfall project, the senior person who champions and backs the project. The product owner plays a similar role in agile.", "A regional manager sponsors a store-refit project and signs off its budget."]
    ],
    cards: [
      { d: 1, q: "What is the product owner's most important job?", o: [
        ["Prioritising user stories", "Correct. Setting priorities decides what the team builds and in what order."],
        ["Writing the code", "Developers build the product; the PO decides what's most valuable to build."],
        ["Running the daily meeting", "That's usually a facilitator's job, such as a project manager or scrum master."],
        ["Approving timesheets", "Administration isn't the core of the role."]],
        k: "The PO's superpower is choosing what comes next." },
      { d: 1, q: "Which waterfall role is the product owner most similar to?", o: [
        ["The project sponsor", "Correct. The course draws this comparison directly."],
        ["The tester", "Testers check quality; the PO sets priorities and vision."],
        ["The scheduler", "Scheduling isn't the PO's focus; value and priority are."],
        ["The procurement officer", "Buying goods and services is a different role altogether."]],
        k: "Product owner in agile ≈ sponsor in waterfall, with prioritising as the main job." },
      { d: 1, q: "Which three things does the product owner balance?", o: [
        ["What customers want, the business strategy and the team's capabilities", "Correct, as the course puts it."],
        ["Cost, time and quality only", "Those are project constraints, but not the three pressures the course describes for the PO."],
        ["Developer preferences, the team's favourite tools and the office layout", "None of these drive product priority."],
        ["Marketing, legal and HR", "They may be stakeholders, but they're not the balance the course describes."]],
        k: "Customer wants, business strategy, team capability: the PO weighs all three." },
      { d: 2, q: "Sales wants a feature for one big client, users are asking for faster checkout, and developers say the database needs work first. Who decides the order, and how?", o: [
        ["The product owner, weighing value and capacity", "Correct. Balancing competing pressures is exactly the PO's job."],
        ["Sales, because they bring in the revenue that funds the team", "Revenue matters, but one group alone shouldn't set priorities."],
        ["The developers, because they know what the code can handle", "Their input on capability matters, but the PO owns the priority call."],
        ["Whoever raised it first, so requests are handled fairly", "First come, first served sounds fair, but it ignores value."]],
        k: "One accountable person sets priority after hearing everyone." },
      { d: 2, q: "Why does a product owner need both business acumen and technical savvy?", o: [
        ["They link the team and the business, talking to executives, users and developers", "Correct. The PO translates in both directions."],
        ["Because they write much of the code themselves, especially on small product teams", "They don't need to code; they need to understand enough to make good calls."],
        ["Because they sign off the project budget without the sponsor", "Budget may involve others. The skills are for communication and prioritising."],
        ["Because they replace the testers during acceptance testing", "Testing is a separate responsibility."]],
        k: "The PO is a bridge, and bridges need footings on both sides." },
      { d: 3, q: "A product owner says yes to every request and labels everything “top priority.” What's the likely result?", o: [
        ["The team loses focus", "Correct. When everything is top priority, nothing is, and the team may deliver less of what matters most."],
        ["The team delivers everything faster", "More demands don't create more capacity."],
        ["Customers get exactly what they want", "They usually get a lot of half-finished work instead."],
        ["Nothing changes, because priority doesn't really matter in agile", "Priority is central to agile. The backlog order drives everything."]],
        k: "A PO who can't say “not yet” isn't prioritising." },
      { d: 3, q: "A PO is pressured to add GenAI features because competitors have them, but customer interviews show shoppers mainly want reliable delivery tracking. What should the PO do?", o: [
        ["Prioritise delivery tracking and treat GenAI as a hypothesis to test", "Correct. Evidence of customer value beats competitor envy. GenAI can earn its place if it solves a real need."],
        ["Build the GenAI features first so the app keeps up with its competitors", "Copying competitors without evidence risks building something customers don't value."],
        ["Build both at once so no stakeholder feels ignored", "Splitting focus usually means both arrive late and half-done."],
        ["Let the team vote on which feature sounds most exciting", "Team input is useful, but prioritising is the PO's accountability."]],
        k: "Prioritise on customer value; treat trends as hypotheses to test." }
    ],
    flips: [
      { d: 2, f: "Explain the product owner role in two sentences to a new team member.", b: "The product owner decides what the team builds and in what order, by prioritising user stories on customer value, business strategy and what the team can do. They're the bridge between the team and the rest of the business, and they hold the product vision." }
    ]
  },

  /* ---------------------------------------------------------------- 7 */
  {
    id: "daily",
    title: "The daily meeting",
    summary: "Communication inside the team matters, and a short daily meeting with everyone is one of the best ways to keep it flowing. It may be called a stand-up or scrum meeting. A common format is three questions: What have you completed? What are you working on? What do you need help with? The answers keep the kanban (or scorecard) up to date and catch issues early. Keep it to about 15 minutes, start and finish on time, and take any issue that needs real discussion offline after the meeting.",
    terms: [
      ["Daily stand-up", "A short daily team meeting, also called a scrum meeting, for status updates and surfacing issues. About 15 minutes, starting and ending on time.", "A hybrid team meets on a video call at 9:00 every morning and is done by 9:15."],
      ["Three questions", "A common stand-up format: What have you completed? What are you working on? What do you need help with?", "“Finished the delivery email template. Now coding the trigger. Need help getting test access to the mail server.”"],
      ["Blocker", "Anything stopping someone from making progress. Stand-ups exist partly to surface blockers fast.", "Waiting three days for a supplier to send an API key.", 1],
      ["Parking lot", "A list of issues raised in a meeting that need longer discussion, handled straight afterwards with only the people involved.", "Two developers and the PO stay on after stand-up to sort out the payment error.", 1]
    ],
    cards: [
      { d: 1, q: "What are the three common daily meeting questions?", o: [
        ["What's done? What's in progress? What help do you need?", "Correct. Done, doing, help needed."],
        ["What went well this sprint? What didn't go well? What will we change next sprint?", "Those are retrospective questions, asked at the end of a sprint."],
        ["What's the budget? What's the deadline? What's the scope?", "Those are project constraint questions, not a stand-up format."],
        ["Who's late? Who's over budget? Who needs training?", "That turns the meeting into blame, which kills honest updates."]],
        k: "Done, doing, and where I need help." },
      { d: 1, q: "How long should a daily meeting usually be?", o: [
        ["About 15 minutes", "Correct. Short and fast-paced."],
        ["About an hour", "Far too long for a daily status check."],
        ["As long as it takes to solve every issue", "Problem-solving belongs after the meeting, with only the people involved."],
        ["Two minutes in total", "Too short for a whole team to share status and blockers."]],
        k: "Fifteen minutes, on time, every day." },
      { d: 2, q: "During stand-up, a developer raises a tricky database bug that will need research. What should happen?", o: [
        ["Note it, and deal with it after the meeting with the people involved", "Correct. That's the course's advice for issues needing discussion."],
        ["Solve it now with the whole team", "That holds everyone hostage to one problem and blows the time box."],
        ["Leave it until the end-of-sprint retrospective, when everyone has more time", "A blocker can't wait two weeks."],
        ["Give it to whoever spoke last", "Assignment should go to whoever is best placed, decided after the meeting."]],
        k: "Raise it in the stand-up, solve it after the stand-up." },
      { d: 2, q: "What does the course say the daily meeting feeds?", o: [
        ["The information needed to keep the kanban or scorecard up to date", "Correct. The meeting keeps the board accurate."],
        ["Evidence about each person's output for their annual performance review", "Stand-ups are about the work, not individual appraisal."],
        ["Updates to the project charter and business case", "The charter is written once at the start, not updated daily."],
        ["Changes to the supplier contracts and their terms", "Contracts aren't updated through stand-ups."]],
        k: "Daily talk keeps the board true." },
      { d: 2, q: "A remote team's stand-up keeps running 40 minutes because people demo their work and debate designs. What's the best fix?", o: [
        ["Keep stand-up to status and blockers; book follow-ups for the rest", "Correct. Protect the short format and move deep discussion elsewhere."],
        ["Cancel stand-ups and switch to email updates", "You'd lose the quick daily conversation that catches issues early."],
        ["Hold two shorter stand-ups a day instead of one", "That doubles the meeting load without fixing the format."],
        ["Let it run long, because remote teams need more time to talk things through", "Remote teams do need connection, but long stand-ups drain everyone. Use other sessions for that."]],
        k: "Short stand-up, separate deep dives." },
      { d: 3, q: "A manager uses stand-up to grill each person on why their tasks are late. Soon everyone gives vague updates. What's going wrong?", o: [
        ["It's become a blame session", "Correct. The meeting should surface issues and get help fast. When honesty is punished, problems go underground until they're expensive."],
        ["The questions are too short to get detailed answers", "Short questions are fine; the tone is the problem."],
        ["The meeting is too early in the day", "Timing isn't why people are hiding information."],
        ["Nothing. Accountability needs this kind of pressure.", "Pressure that punishes honesty produces less accurate information, not more accountability."]],
        k: "“What do you need help with?” only works if asking for help is safe." },
      { d: 3, q: "A team says the three-question format feels robotic. They'd rather walk the board and discuss progress toward the sprint goal. Is that acceptable?", x: 1, o: [
        ["Yes, if it stays short and focused on progress and blockers", "Correct. The 2020 Scrum Guide dropped the mandatory three questions; the purpose matters more than the script."],
        ["No. The three questions are a mandatory part of the meeting.", "They're a popular format, not a rule. The course itself calls them a common format."],
        ["Only if the product owner approves every change", "Teams own how they run their daily meeting."],
        ["Only for teams of more than ten, where walking the board is faster", "Team size isn't the deciding factor; purpose is."]],
        k: "Keep the purpose (short, progress, blockers); adapt the format." }
    ],
    flips: [
      { d: 1, f: "Give a good stand-up update using the three questions.", b: "For example: “Yesterday I finished the supplier contact list. Today I'm setting up the order form. I need help getting edit access to the shared price sheet.” Short and specific, with the blocker stated clearly." }
    ]
  },

  /* ---------------------------------------------------------------- 8 */
  {
    id: "acceptance",
    title: "Acceptance testing",
    summary: "At the end of a sprint the team must deliver a working product, and acceptance testing decides whether it's ready. Acceptance criteria are questions or statements that show whether a story's requirements are met. Rule-based criteria are simple statements; scenario-based criteria follow Given / When / Then. Criteria must be unambiguous, a story can have many, and when all of them are met the story is complete and the team moves on.",
    figs: ["story-card"],
    terms: [
      ["Acceptance testing", "Checking whether the product meets each user story's requirements before it's accepted, usually at the end of a sprint.", "Before the sprint review, the PO runs the new booking flow against every criterion."],
      ["Acceptance criteria", "Questions or statements that show whether a user story's requirements have been met. One story can have many.", "“The confirmation email arrives within two minutes of booking.”"],
      ["Rule-based criteria", "Simple acceptance criteria stating a rule that is either met or not.", "“The software package is stored in the install folder.”"],
      ["Given / When / Then", "The three-step template for scenario-based acceptance criteria: the starting situation, the action, and the expected result.", "Given a completed order, when it's picked up for delivery, then email the customer the tracking number.", 0, "story-card"],
      ["Definition of Done", "A team-wide checklist every story must meet to count as finished, on top of its own acceptance criteria.", "Done means: merged, tested on mobile, accessibility checked and release notes updated.", 1]
    ],
    cards: [
      { d: 1, q: "What are the two common types of acceptance criteria?", o: [
        ["Rule-based and scenario-based", "Correct, as the course describes."],
        ["Cheap and expensive", "Cost isn't how criteria are classified."],
        ["Internal and external", "Not the classification the course uses."],
        ["Optional and mandatory criteria", "All of a story's criteria must be met for it to be complete."]],
        k: "Rule-based: a simple true/false statement. Scenario-based: Given/When/Then." },
      { d: 1, q: "Which template do scenario-based acceptance criteria usually follow?", o: [
        ["Given, when, then", "Correct. Situation, action, expected result."],
        ["As a, I want, so that", "That's the user story template, not acceptance criteria."],
        ["Plan, do, check, act", "That's a continuous improvement cycle."],
        ["What, why, how", "Not a standard acceptance template."]],
        k: "Given (situation), When (action), Then (result)." },
      { d: 1, q: "When is a user story complete?", o: [
        ["Once all criteria pass", "Correct. Every criterion, not most of them."],
        ["When the code is written", "Written code can still fail the criteria."],
        ["When the sprint ends", "The sprint ending doesn't make unfinished work complete."],
        ["When the product owner likes the sprint demo", "Liking it isn't the test; meeting the agreed criteria is."]],
        k: "All criteria met = story complete." },
      { d: 2, q: "Which acceptance criterion is best written?", o: [
        ["Given a confirmed booking, when the customer cancels more than 24 hours ahead, then refund the full amount within 3 working days.", "Correct. A clear situation, action and measurable result. Nobody can argue about whether it's met."],
        ["Given a booking, when the customer cancels, then process the refund quickly and politely.", "It looks structured, but “quickly” and “politely” can't be measured, so it's ambiguous."],
        ["Refunds are handled within a reasonable time for every type of cancellation.", "“Reasonable” means different things to different people, so nobody can say for sure it passed."],
        ["Given a confirmed booking, when the customer cancels at any time before the trip, then they are satisfied with how the refund is handled.", "Satisfaction matters, but it can't be tested as a clear pass or fail."]],
        k: "If two people could disagree on whether it passed, rewrite it." },
      { d: 2, q: "“The fire panel's fault log exports as a CSV file to the shared drive.” What type of criterion is this?", o: [
        ["Rule-based", "Correct. It's a simple statement that's either true or false."],
        ["Scenario-based", "There's no Given/When/Then situation and action."],
        ["A user story", "It has no user, goal or “so that.”"],
        ["A task", "It describes an outcome to check, not work to do."]],
        k: "A plain yes/no statement is a rule-based criterion." },
      { d: 2, q: "Why must acceptance criteria be unambiguous?", o: [
        ["So it's clear whether they're met", "Correct. That's the course's reason."],
        ["So they're shorter", "Length isn't the goal; clarity is."],
        ["So only developers can understand them", "Criteria should be clear to the whole team and the customer."],
        ["So the customer can't change them once the sprint has started", "Customers can add new stories; clarity isn't about locking them out."]],
        k: "Clear criteria end arguments before they start." },
      { d: 3, q: "All of a story's criteria are met, but the product owner now says it must also work offline. What's the cleanest response?", o: [
        ["It's complete as defined; make offline support a new story", "Correct. Done is done against the agreed criteria. Offline support becomes a new story with its own criteria, prioritised like any other."],
        ["Reopen the story and keep working until offline mode works", "That moves the goalposts mid-sprint and makes “done” meaningless."],
        ["Refuse the request, since the criteria were already agreed", "The need may be valuable; it just belongs in a new story."],
        ["Mark the story as failed until offline mode is added", "It met every agreed criterion, so it isn't a failure."]],
        k: "New requirement after the fact? New story, not a moved goalpost." },
      { d: 3, q: "For a story about storing customers' phone numbers, which criterion is the most useful for checking the privacy requirement?", o: [
        ["Given a confirmed deletion request, when 30 days have passed, then no record holds that phone number.", "Correct. It's specific and testable, so the team can prove the requirement is met."],
        ["Phone numbers are stored securely and handled in line with our privacy policy.", "A worthy aim, but “securely” and “in line with policy” are too vague to test."],
        ["Given a customer's phone number, when it's stored anywhere in our systems, then privacy is respected at all times.", "It borrows the template, but “privacy is respected” can't be verified."],
        ["Given a deletion request, when it arrives, then the team deals with it promptly.", "Better structured, but “promptly” and “deals with it” can't be tested."]],
        k: "Compliance needs criteria you can actually test." }
    ],
    flips: [
      { d: 2, f: "Write a Given/When/Then criterion for: “As a shopper, I want a low-stock warning, so that I can buy before it sells out.”", b: "Given a product page, when fewer than 5 units are in stock, then show “Only X left” beside the price. A clear trigger and a clear result, with nothing to argue about." }
    ]
  },

  /* ---------------------------------------------------------------- 9 */
  {
    id: "kanban",
    title: "The project kanban",
    summary: "Kanban was developed by Toyota, is used widely in lean manufacturing, and has been adapted for agile projects. The idea is to make work visual so everyone can see what's being worked on and its status. In the course's layout each task is a row and the columns are progress milestones, which makes stuck or slipping tasks easy to spot. A kanban can live on a wall, a whiteboard, a spreadsheet or in software, but it's only useful if it's accurate and updated often.",
    figs: ["kanban-rows", "kanban-wip"],
    terms: [
      ["Kanban", "A technique from Toyota's lean manufacturing, adapted for agile, that makes work visual so everyone can see each task's status.", "A café's whiteboard shows each catering order moving from ordered to prepping to delivered.", 0, "kanban-rows"],
      ["Kanban board", "A board showing tasks against progress stages. In the course's version each task is a row and the columns are milestones; many teams instead move cards across columns.", "Rows for Supplier list, Order form and Price check; columns for Not started, In progress, Testing and Done."],
      ["Lean", "An approach from manufacturing focused on eliminating waste: any work that doesn't add value for the customer.", "Removing a double data-entry step so order details are typed in only once."],
      ["Electronic kanban", "A kanban kept in a spreadsheet or specialised software instead of on a wall.", "A team split between Auckland and Manila uses one shared online board so everyone sees the same status."],
      ["WIP limit", "A cap on how many items can sit in a column at once. It stops people starting more than they can finish and exposes bottlenecks.", "“In progress: max 3.” A fourth card can't start until one moves on.", 1, "kanban-wip"]
    ],
    cards: [
      { d: 1, q: "Where did kanban originate?", o: [
        ["At Toyota, in lean manufacturing", "Correct. It was later adapted for agile projects."],
        ["In NASA's space program", "Not where kanban comes from."],
        ["At a software company in the 2000s", "Software teams adopted it much later."],
        ["In the construction industry", "Construction is associated with waterfall, not kanban's origins."]],
        k: "Toyota, lean manufacturing, then agile." },
      { d: 1, q: "What is the basic idea of a kanban?", o: [
        ["Make every task's status visible to all", "Correct. Visibility is the whole point."],
        ["Track who is responsible when tasks run late", "Visibility helps spot problems, not assign blame."],
        ["Replace most team meetings with a written status board on the wall", "A board supports conversation; it doesn't replace it."],
        ["Store the project's documents in one shared place", "That's a document library, not a kanban."]],
        k: "Kanban = make the work visible." },
      { d: 2, q: "Look at this board. What does it tell you?", fig: "kanban-rows", o: [
        ["“Price check” may be stuck after 7 days in progress", "Correct. Spotting stuck or slipping tasks at a glance is exactly what a kanban is for."],
        ["Every task is moving at a healthy pace", "One task is clearly lingering much longer than the rest."],
        ["“Order form” is furthest behind its planned schedule", "It's in testing after 2 days, which is further along."],
        ["The board needs more columns to be useful", "The columns are fine. The signal is the stuck task."]],
        k: "A task that sits in one column far longer than the rest is your warning light." },
      { d: 2, q: "What makes a kanban useful, according to the course?", o: [
        ["It's accurate and updated often", "Correct. Tasks must match what people are really doing, and statuses must be current. An out-of-date board misleads."],
        ["It uses a clear colour for each person", "Colour helps readability but doesn't make the board useful."],
        ["It's on a physical wall everyone walks past", "Electronic boards work too, as the course notes."],
        ["It has as many columns as possible", "Extra columns add noise without adding accuracy."]],
        k: "Accurate and current, or it's just decoration." },
      { d: 2, q: "This team set a work-in-progress limit of 3 for “In progress.” What should happen next?", fig: "kanban-wip", x: 1, o: [
        ["Finish or unblock a card in “In progress” before anyone starts a new one", "Correct. The column is over its limit, so the team stops starting and starts finishing."],
        ["Raise the limit to 5 so nothing is held up", "Raising the limit hides the bottleneck the limit just revealed."],
        ["Move a card back to “To do” at random", "Random shuffling doesn't fix the flow problem."],
        ["Start the next card anyway, since WIP limits are really just guidelines", "Ignoring the limit removes its benefit: focus and faster finishing."]],
        k: "Over the WIP limit? Stop starting, start finishing." },
      { d: 3, q: "A board shows every task “in progress” for weeks, but the team says most of them are basically done. What's the real problem?", o: [
        ["The board can't show what's stuck", "Correct. Update statuses and split tasks so movement is visible. A board that doesn't match reality can't do its job."],
        ["The team needs a bigger board with more space", "Size isn't the issue; accuracy is."],
        ["Kanban doesn't work for this kind of work", "It works when it reflects reality. The fix is accuracy, not abandoning it."],
        ["Tasks should stay in progress until the project ends", "Marking work done is how the board shows progress."]],
        k: "If “basically done” is the norm, the board has stopped telling the truth." },
      { d: 3, q: "A hybrid team uses a physical board in the Auckland office, but half the team works from home. What's the best move?", o: [
        ["Switch to an electronic kanban", "Correct. The course notes kanbans can be electronic; everyone needs the same view."],
        ["Ask remote staff to phone the office whenever they need a status update", "Slow and error-prone, and the board drifts out of date."],
        ["Photograph the board once a week", "A weekly snapshot is too stale to manage daily work."],
        ["Stop using a kanban", "The team would lose visibility altogether."]],
        k: "A kanban only works if the whole team can see and update it." }
    ],
    flips: [
      { d: 1, f: "Name two things a kanban board lets everyone see at a glance.", b: "What's being worked on right now and its status, and which tasks are stuck or slipping behind." },
      { d: 3, f: "Why does a WIP limit speed a team up, even though it stops people starting new work?", b: "Less work in progress means less task-switching and fewer half-finished items. Bottlenecks show up straight away, and finished work reaches customers sooner. Stop starting, start finishing.", x: 1 }
    ]
  },

  /* ---------------------------------------------------------------- 10 */
  {
    id: "mvp",
    title: "Minimum viable product",
    summary: "One manifesto principle says the highest priority is satisfying the customer through early and continuous delivery of valuable software. A minimum viable product (MVP) does that: a working version that's just good enough to show how the product works. Waterfall projects often start with too much scope, including features customers don't want. An MVP moves you from a promise or theory to a real product customers can use and react to, and their feedback becomes new user stories.",
    terms: [
      ["Minimum viable product (MVP)", "A working version of the product that's just good enough to show how it works, so real customers can use it and give feedback.", "A first ordering app that only lets one shop reorder from one supplier, which is enough to learn whether staff will use it."],
      ["Early and continuous delivery", "The manifesto principle that the top priority is satisfying the customer by delivering valuable software early and often.", "Shipping a basic version in week three, then improvements every two weeks."],
      ["Excess scope", "Features customers don't actually want or need, a common problem when everything is decided at the start.", "A rostering tool built with 40 report types when managers only ever use three."],
      ["Feedback loop", "Putting a working product in front of users, learning what they need and turning it into new user stories.", "MVP users ask for a one-tap reorder button, which becomes next sprint's top story."]
    ],
    cards: [
      { d: 1, q: "What is a minimum viable product?", o: [
        ["A working version just good enough to show it works", "Correct, as the course defines it."],
        ["The most valuable person on the delivery team", "That's a different MVP."],
        ["The final release, with every planned feature included", "An MVP comes early and is deliberately minimal."],
        ["A paper sketch or mock-up of the product that customers can react to early", "The course's MVP is a working version people can actually use."]],
        k: "MVP = working, minimal, real enough to learn from." },
      { d: 1, q: "What happens to customer feedback on the MVP?", o: [
        ["It becomes new user stories", "Correct. Feedback flows straight into the backlog."],
        ["It's filed until the project ends", "That wastes the main reason for building an MVP."],
        ["It replaces the product owner", "The PO uses the feedback to prioritise; it doesn't replace them."],
        ["It's used only to write documentation", "Its main job is shaping what gets built next."]],
        k: "MVP feedback becomes the next user stories." },
      { d: 2, q: "Which manifesto principle does the MVP support most directly?", o: [
        ["Satisfying the customer through early and continuous delivery of valuable software", "Correct. The course links the MVP to this principle."],
        ["Comprehensive documentation before development starts", "The manifesto values working software over comprehensive documentation."],
        ["Following the agreed plan from start to finish", "Responding to change is valued over following a plan."],
        ["Negotiating a clear, detailed contract with the customer before any work starts", "Customer collaboration is valued over contract negotiation."]],
        k: "Ship something real early, then keep improving it." },
      { d: 2, q: "Which common waterfall problem does an MVP help avoid?", o: [
        ["Too much scope, including unwanted features", "Correct. The MVP adds features only as users show they need them."],
        ["Too much customer feedback, slowing decisions down", "Feedback is welcome; it's what the MVP is for."],
        ["Too many short releases that confuse customers", "Short releases are an agile strength, not a waterfall problem."],
        ["Too little up-front planning and design before the first build starts", "Waterfall's issue is usually too much up-front scope, not too little planning."]],
        k: "Build less to start, and let real users pull the rest." },
      { d: 2, q: "A team is planning the MVP for a staff rostering app. Which is the best MVP?", o: [
        ["Managers can create one week's roster and staff can see their shifts on their phones", "Correct. Minimal, but it works end to end and tests the core value."],
        ["A full suite with payroll, leave, demand forecasting and AI-powered shift scheduling", "That's the whole product, not a minimum version."],
        ["A slide deck describing the app", "Customers can't use a slide deck, so you'd learn little."],
        ["A login page and nothing else", "It works, but it delivers no value to test."]],
        k: "Minimal, but it must still deliver the core value end to end." },
      { d: 3, q: "Your MVP launches. Users ignore the feature you thought was the star, but heavily use a simple export button. What's the agile move?", o: [
        ["Follow the evidence: improve what's used", "Correct. Write stories that improve what users actually use, and rethink the star feature. The MVP's job is learning; this is the learning."],
        ["Push users toward the star feature with pop-ups", "That ignores what the feedback is telling you."],
        ["Stick to the original roadmap, since it was agreed", "That's following a plan over responding to change."],
        ["Remove the export button so they try the star feature", "Taking away what users value to prove a point loses customers."]],
        k: "Let real usage, not your favourite feature, steer the backlog." },
      { d: 3, q: "A founder insists the MVP of an AI study app must include voice chat, image recognition and 12 languages, “or it won't be viable.” What's the best counter?", o: [
        ["“Viable” means it tests the core value. Start with one capability, then add.", "Correct. Every extra feature delays learning and adds cost before you know what users value."],
        ["Agree. More features at launch reduce the risk of a weak first impression with users.", "More features usually mean more cost, more delay and more untested assumptions."],
        ["Build all of it, but release it quietly to a small group", "You'd still spend the time and money up front."],
        ["Skip the MVP and plan a big launch with full marketing", "A big launch with untested features is exactly the risk an MVP avoids."]],
        k: "“Viable” means it tests the core value, not that it has every feature." }
    ],
    flips: [
      { d: 2, f: "MVP or not? “A polished clickable mock-up that doesn't save any data.”", b: "Not by the course's definition. An MVP is a working version that's just good enough to show how it works. A mock-up can test interest, but customers can't really use it, so the feedback you get is limited." }
    ]
  }

  ]
});
