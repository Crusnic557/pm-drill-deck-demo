/* Course 8 · PMI standards, ethics and the PMP. Part 2: tailoring, the organisational context, value and benefits, AI on
   projects, and the models project managers use. First option is correct; the app shuffles. */

PMQ.fig("org-spectrum", `<svg viewBox="0 0 600 178" role="img" aria-label="Organisational structures from functional to project-oriented, with the project manager's authority increasing">
<defs><marker id="ah-pmiorg" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path class="ah-acc" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<text class="t2" x="4" y="12">Organisational structure and the project manager's authority</text>
<rect class="bx" x="96" y="22" width="96" height="40" rx="4"/><text class="tb" x="144" y="47" text-anchor="middle">Functional</text>
<rect class="bx" x="197" y="22" width="96" height="40" rx="4"/><text class="tb" x="245" y="39" text-anchor="middle">Weak</text><text class="tb" x="245" y="55" text-anchor="middle">matrix</text>
<rect class="bx" x="298" y="22" width="96" height="40" rx="4"/><text class="tb" x="346" y="39" text-anchor="middle">Balanced</text><text class="tb" x="346" y="55" text-anchor="middle">matrix</text>
<rect class="bx" x="399" y="22" width="96" height="40" rx="4"/><text class="tb" x="447" y="39" text-anchor="middle">Strong</text><text class="tb" x="447" y="55" text-anchor="middle">matrix</text>
<rect class="soft" x="500" y="22" width="96" height="40" rx="4"/><text class="tb" x="548" y="39" text-anchor="middle">Project-</text><text class="tb" x="548" y="55" text-anchor="middle">oriented</text>
<text class="t2" x="4" y="84">Authority</text>
<text class="tc" x="144" y="84" text-anchor="middle">little/none</text><text class="tc" x="245" y="84" text-anchor="middle">low</text><text class="tc" x="346" y="84" text-anchor="middle">low–moderate</text><text class="tc" x="447" y="84" text-anchor="middle">moderate–high</text><text class="tc" x="548" y="84" text-anchor="middle">high</text>
<path class="s2" d="M4 93 H596"/>
<text class="t2" x="4" y="108">PM role</text>
<text class="tc" x="144" y="108" text-anchor="middle">part-time</text><text class="tc" x="245" y="108" text-anchor="middle">part-time</text><text class="tc" x="346" y="108" text-anchor="middle">full-time</text><text class="tc" x="447" y="108" text-anchor="middle">full-time</text><text class="tc" x="548" y="108" text-anchor="middle">full-time</text>
<path class="s2" d="M4 117 H596"/>
<text class="t2" x="4" y="132">Budget</text>
<text class="tc" x="144" y="132" text-anchor="middle">functional mgr</text><text class="tc" x="245" y="132" text-anchor="middle">functional mgr</text><text class="tc" x="346" y="132" text-anchor="middle">mixed</text><text class="tc" x="447" y="132" text-anchor="middle">project mgr</text><text class="tc" x="548" y="132" text-anchor="middle">project mgr</text>
<path class="acc-s" d="M96 152 H588" marker-end="url(#ah-pmiorg)"/>
<text class="t2" x="96" y="172">authority, a dedicated team and budget control grow towards the right</text>
</svg>`);

PMQ.fig("value-chain", `<svg viewBox="0 0 600 154" role="img" aria-label="From outputs to outcomes to benefits to value, and who realises each">
<defs><marker id="ah-pmival" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<text class="t2" x="4" y="12">From what the project delivers to the value it creates</text>
<rect class="bx" x="4" y="24" width="128" height="62" rx="5"/><text class="tb" x="16" y="44">Outputs</text><text class="t2" x="16" y="62">a booking app;</text><text class="t2" x="16" y="76">trained staff</text>
<rect class="bx" x="158" y="24" width="128" height="62" rx="5"/><text class="tb" x="170" y="44">Outcomes</text><text class="t2" x="170" y="62">customers book</text><text class="t2" x="170" y="76">online</text>
<rect class="bx" x="312" y="24" width="128" height="62" rx="5"/><text class="tb" x="324" y="44">Benefits</text><text class="t2" x="324" y="62">fewer calls,</text><text class="t2" x="324" y="76">more bookings</text>
<rect class="soft" x="466" y="24" width="128" height="62" rx="5"/><text class="tb" x="478" y="44">Value</text><text class="t2" x="478" y="62">revenue up,</text><text class="t2" x="478" y="76">happier customers</text>
<path class="s" d="M134 55 H154" marker-end="url(#ah-pmival)"/><path class="s" d="M288 55 H308" marker-end="url(#ah-pmival)"/><path class="s" d="M442 55 H462" marker-end="url(#ah-pmival)"/>
<path class="acc-s" d="M4 100 H132"/><path class="dash" d="M158 100 H594"/>
<text class="ta" x="4" y="118">project delivers</text><text class="t2" x="158" y="118">the business realises these, often after the project closes</text>
<text class="t2" x="4" y="144">A benefit owner on the business side tracks them against the business case</text>
</svg>`);

PMQ.fig("cynefin", `<svg viewBox="0 0 600 236" role="img" aria-label="The Cynefin framework: complex, complicated, chaotic and clear domains, with confusion in the centre">
<text class="t2" x="4" y="12">Cynefin: match how you act to the kind of situation</text>
<rect class="bx" x="4" y="22" width="294" height="102" rx="5"/>
<text class="tb" x="16" y="42">Complex</text><text class="t2" x="16" y="58">probe → sense → respond</text><text class="t2" x="16" y="72">run safe-to-fail experiments</text><text class="t2" x="16" y="86">and let practice emerge</text><text class="ta" x="16" y="102">e.g. a product for a new market</text>
<rect class="bx" x="302" y="22" width="294" height="102" rx="5"/>
<text class="tb" x="314" y="42">Complicated</text><text class="t2" x="314" y="58">sense → analyse → respond</text><text class="t2" x="314" y="72">bring in experts; there are</text><text class="t2" x="314" y="86">several good answers</text><text class="ta" x="314" y="102">e.g. diagnosing a structural fault</text>
<rect class="bx" x="4" y="128" width="294" height="102" rx="5"/>
<text class="tb" x="16" y="150">Chaotic</text><text class="t2" x="16" y="166">act → sense → respond</text><text class="t2" x="16" y="180">stabilise first, then work out</text><text class="t2" x="16" y="194">what's happening (novel practice)</text><text class="ta" x="16" y="210">e.g. a data centre fire</text>
<rect class="bx" x="302" y="128" width="294" height="102" rx="5"/>
<text class="tb" x="314" y="150">Clear</text><text class="t2" x="314" y="166">sense → categorise → respond</text><text class="t2" x="314" y="180">follow the known procedure</text><text class="t2" x="314" y="194">(best practice)</text><text class="ta" x="314" y="210">e.g. processing a standard order</text>
<rect class="note" x="240" y="107" width="120" height="26" rx="5"/><text class="tn" x="300" y="124" text-anchor="middle">Confusion</text>
</svg>`);

PMQ.course({
  id: "pmi",
  topics: [

  /* ---------------------------------------------------------------- 6 */
  {
    id: "tailoring",
    title: "Tailoring the approach",
    summary: "Tailoring is deliberately adapting the approach, governance, processes and tools to fit the project and its context. It isn't skipping the hard parts. The PMBOK Guide's 7th edition describes four steps: select the initial development approach, tailor it for the organisation (its governance, policies and culture), tailor it for the project (size, risk, team, stakeholders), and keep improving it as you learn. Development approaches run along a spectrum. Predictive: scope is defined early and the plan drives the work. Iterative: you repeat cycles to refine a solution. Incremental: you deliver usable pieces one after another. Adaptive (agile): iterative and incremental, with frequent feedback. Hybrid: a deliberate mix, such as fixed milestones and governance with agile delivery inside. Delivery cadence can be a single delivery, multiple deliveries, periodic deliveries or continuous delivery. Factors that shape the choice include how certain the requirements are, the rate of change, risk, safety and regulatory constraints, stakeholder availability, team experience, contract terms and organisational culture.",
    terms: [
      ["Development approach", "The way a project creates and evolves its product: predictive, iterative, incremental, adaptive, or a hybrid of them.", "A predictive approach for a bridge; an adaptive one for a new app."],
      ["Delivery cadence", "The timing and frequency of deliveries: single, multiple, periodic or continuous.", "A team releasing to customers every fortnight has a periodic cadence."],
      ["Hybrid approach (PMI)", "A deliberate combination of predictive and adaptive elements, chosen to suit different parts or conditions of a project.", "Stage gates for funding, with sprints for building the software."]
    ],
    cards: [
      { d: 1, q: "What does tailoring mean in project management?", o: [
        ["Adapting the approach and processes to fit the context", "Right. It's deliberately adapting the approach, governance and processes to the project and its context, and revisiting it as you learn."],
        ["Removing any process the team finds tedious", "Tailoring isn't skipping what's needed."],
        ["Using exactly the same method on every project for consistency", "That's the opposite of tailoring."],
        ["Customising the project's software tools", "Tools are one thing you can tailor, but it's much broader."]],
        k: "Tailor deliberately, not lazily." },
      { d: 2, q: "Which is the clearest example of an incremental approach?", o: [
        ["Releasing an app in usable pieces: search, then payments, then loyalty", "Right. Each increment adds working functionality."],
        ["Designing everything, then building everything, then testing once at the end", "That's predictive."],
        ["Reworking the same prototype again and again until users are finally happy", "That's iterative: refining the same thing."],
        ["Handing over the finished product in one go", "That's a single delivery."]],
        k: "Incremental: usable pieces, one after another." },
      { d: 2, q: "A pharmaceutical plant upgrade has strict validation rules, well-defined requirements and a fixed shutdown window. Which approach fits best?", o: [
        ["Predictive, with tight change control around the shutdown", "Right. Stable requirements and regulatory constraints favour a plan-driven approach."],
        ["Fully adaptive, with requirements emerging sprint by sprint", "Emergent scope clashes with validation and a fixed shutdown."],
        ["Kanban with no fixed scope", "Continuous flow doesn't suit a one-off validated shutdown."],
        ["No formal approach; let each contractor decide", "Regulated work needs a deliberate, controlled approach."]],
        k: "Stable, regulated, fixed window → predictive." },
      { d: 3, q: "A council website rebuild has fixed funding and a legal accessibility deadline, but nobody is sure what residents need. What's the best tailoring decision?", o: [
        ["Hybrid: a fixed frame with iterative design inside", "Right. Fix the governance, budget and legal deadline, and learn residents' needs through iterative design and user testing inside them."],
        ["Predictive: specify every page up front before building", "You'd be specifying needs you don't yet understand."],
        ["Adaptive, and treat the deadline as flexible until the backlog is done", "The legal deadline isn't optional."],
        ["Wait until residents' needs are clear before choosing an approach", "Discovering those needs is part of the work."]],
        k: "Hybrid: fixed frame, flexible inside." },
      { d: 2, q: "In PMBOK 7's tailoring steps, what does 'tailor for the organisation' mean?", o: [
        ["Fit it to the organisation's governance and culture", "Right. Fit the approach to the organisation's governance, policies and culture, then tailor further for the project."],
        ["Let each team choose its own method without oversight", "Tailoring still works within governance."],
        ["Rewrite the organisation's policies to suit the project", "You adapt to the organisation, not the other way round."],
        ["Copy another organisation's process exactly", "Copying skips the point of tailoring."]],
        k: "Approach → organisation → project → improve." },
      { d: 2, q: "A team pushes small changes into production several times a day. Which delivery cadence is that?", o: [
        ["Continuous delivery", "Right. Small changes flow to users as soon as they're ready."],
        ["Single delivery", "That's one handover at the end."],
        ["Periodic delivery", "That's releases on a regular schedule, such as monthly."],
        ["Multiple deliveries", "That's several planned releases, not a constant flow."]],
        k: "Several times a day = continuous." },
      { d: 3, q: "Midway through a predictive project, one component built on new technology keeps producing surprises. What's the best response?", o: [
        ["Use short experiments on that part only", "Right. Tailor where the uncertainty is: run short experiments or iterations on that component while the rest stays plan-driven."],
        ["Switch the whole project to agile straight away", "An abrupt switch disrupts the parts that are working."],
        ["Push on with the plan and absorb the surprises", "Ignoring the signal lets the risk grow."],
        ["Drop the component from scope without consulting anyone", "Scope changes go through change control."]],
        k: "Tailor where the uncertainty is." },
      { d: 1, q: "Is tailoring a one-off decision made at the start?", o: [
        ["No: revisit it as the project learns", "Right. Improve the approach as you go; retrospectives and reviews feed back into it."],
        ["Yes: the approach is locked once the plan is approved", "Locking it ignores what you learn."],
        ["Yes, unless the sponsor changes", "Many things besides the sponsor can prompt a change."],
        ["No: it only happens at closure", "At closure it's too late to help this project."]],
        k: "Tailoring is ongoing." }
    ],
    flips: [
      { d: 2, f: "What factors push you towards a predictive approach, and which towards an adaptive one?", b: "Predictive suits clear, stable requirements, low rates of change, strict safety or regulatory controls, fixed-price contracts and work that can't be delivered in pieces, such as a building. Adaptive suits uncertain or evolving requirements, a fast-changing market, the ability to deliver usable increments, stakeholders available to give frequent feedback, and a team experienced in self-organising. Many projects mix the two: a hybrid." }
    ]
  },

  /* ---------------------------------------------------------------- 7 */
  {
    id: "org-context",
    title: "Projects, programs, portfolios and the organisation",
    summary: "PMBOK 8 defines a project as a temporary initiative in a unique context undertaken to create value. Operations are the ongoing work that keeps the organisation running. A program is a group of related projects and program activities managed together to get benefits they wouldn't deliver separately. A portfolio is a collection of programs, projects and operations managed as a group to maximise value and support strategy; its parts don't have to be related. How an organisation is structured shapes a project manager's authority. In a functional structure the PM is part-time with little authority, and functional managers hold the budget and the people. In a weak, balanced or strong matrix, authority is shared, rising from weak to strong. In a project-oriented structure the PM works full-time with a dedicated team and controls the budget. Enterprise environmental factors (EEFs) are conditions the team doesn't control that influence the project: internal ones such as culture, structure and infrastructure, and external ones such as regulation, markets and the economy. Organisational process assets are the organisation's own plans, policies, templates and knowledge, such as lessons-learned repositories.",
    figs: ["org-spectrum"],
    terms: [
      ["Operations", "The ongoing, repetitive work that keeps an organisation running, as opposed to temporary projects.", "The IT service desk answering calls every day."],
      ["Weak matrix", "A structure where the project manager acts mainly as a coordinator, with low authority; functional managers control people and budget.", "A PM who must ask department heads for every resource.", 0, "org-spectrum"],
      ["Strong matrix", "A structure where the project manager works full-time with moderate to high authority and controls the budget, while staff still report to functional managers.", "A PM who sets priorities for engineers on loan from their departments.", 0, "org-spectrum"],
      ["Project-oriented organisation", "A structure in which most work is done as projects, with full-time project managers who have high authority and dedicated teams.", "A construction company organised around its building projects.", 0, "org-spectrum"],
      ["Enterprise environmental factors (EEFs)", "Conditions outside the project team's control that influence the project, either internal (culture, structure, systems) or external (laws, markets, economy).", "A new privacy law, or the company's risk-averse culture."]
    ],
    cards: [
      { d: 1, q: "Which is the best example of a program?", o: [
        ["A hospital's new records system, training and process redesign, run together", "Right. Related projects coordinated for benefits they wouldn't deliver separately."],
        ["A single project to install and configure a new server for the finance team", "That's one project."],
        ["Everything the company invests in, chosen and prioritised against its strategy", "That's a portfolio."],
        ["The help desk's day-to-day work", "That's operations."]],
        k: "Program: related projects, managed together for shared benefits." },
      { d: 1, q: "What makes a portfolio different from a program?", o: [
        ["Its parts needn't be related; it's managed for strategic value", "Right. A portfolio can mix programs, projects and operations, chosen and balanced to maximise value in line with strategy."],
        ["A portfolio is simply a very large project with several sub-teams", "Size doesn't define a portfolio."],
        ["A portfolio has one shared deliverable that all its parts contribute to", "That's closer to a project."],
        ["A portfolio contains operations only", "It can contain programs, projects and operations."]],
        k: "Portfolio: chosen and balanced for strategy." },
      { d: 2, q: "In a weak matrix organisation, who usually controls the project budget?", af: "org-spectrum", o: [
        ["The functional manager", "Right. The PM coordinates, with little authority over money or people."],
        ["The project manager", "That's a strong matrix or project-oriented structure."],
        ["The PMO director", "It depends on the organisation, but not typically in a weak matrix."],
        ["The customer", "The customer funds the work but doesn't usually control the internal budget."]],
        k: "Weak matrix: the functional manager holds the money." },
      { d: 2, q: "In which structure does a project manager have the most authority and a dedicated team?", af: "org-spectrum", o: [
        ["Project-oriented", "Right. The PM works full-time and controls the budget and team."],
        ["Functional", "The PM has little or no authority there."],
        ["Balanced matrix", "Authority is shared between the PM and functional managers."],
        ["Weak matrix", "The PM is mainly a coordinator."]],
        k: "Project-oriented: highest PM authority." },
      { d: 2, q: "Which of these is an organisational process asset rather than an enterprise environmental factor?", o: [
        ["The lessons-learned repository from past projects", "Right. It's the organisation's own knowledge, available for you to use."],
        ["A new privacy law", "An external environmental factor."],
        ["The company's risk-averse culture", "An internal environmental factor."],
        ["A shortage of electricians in the local labour market", "An external environmental factor."]],
        k: "Process assets: the organisation's own know-how and templates." },
      { d: 3, q: "You're in a balanced matrix. A functional manager pulls your key engineer onto urgent operational work for two weeks. What's your best first move?", o: [
        ["Negotiate priorities with the functional manager", "Right. Shared authority means agreeing priorities, using the impact on your schedule; escalate only if you can't agree."],
        ["Tell the engineer to ignore their manager's request", "That puts the engineer in an impossible position."],
        ["Accept it and quietly cut scope to cover the gap", "Scope changes need approval, and the conflict stays unresolved."],
        ["Go straight to the chief executive and ask them to step in", "Premature; try to resolve it with the functional manager first."]],
        k: "Matrix conflicts: negotiate priorities with facts, then escalate." },
      { d: 2, q: "A new regulation will change the labelling your product needs. In PMI terms, what is it?", o: [
        ["An external enterprise environmental factor", "Right. It's outside your control, but you must work within it."],
        ["An organisational process asset", "Process assets are the organisation's own assets."],
        ["A constraint you can choose to ignore", "Legal requirements can't be ignored."],
        ["A lesson learned", "It's a new condition, not a lesson from past work."]],
        k: "Laws and markets: external EEFs." },
      { d: 3, q: "Two projects in your portfolio compete for the same specialist team. Who should decide which goes first?", o: [
        ["Portfolio governance", "Right. It decides on strategic priority and value; that's exactly the trade-off portfolio management exists for."],
        ["Whichever project manager asks first", "Timing of a request isn't a strategy."],
        ["The specialists, based on which project they prefer", "Their input matters, but it isn't their call."],
        ["The bigger project, automatically", "Size doesn't equal priority or value."]],
        k: "Competing projects: portfolio governance decides." }
    ],
    flips: [
      { d: 2, f: "Describe how project manager authority changes across organisational structures.", bf: "org-spectrum", b: "Functional: the PM is part-time with little or no authority; the functional manager controls the budget and people. Weak matrix: still mainly a coordinator, low authority. Balanced matrix: the PM is full-time, with low to moderate authority and shared budget control. Strong matrix: moderate to high authority, and the PM controls the budget. Project-oriented: high authority, a dedicated team and full budget control." }
    ]
  },

  /* ---------------------------------------------------------------- 8 */
  {
    id: "value-benefits",
    title: "Value, benefits and strategic alignment",
    summary: "Projects produce outputs (deliverables), which enable outcomes (changes in what people can do or how they work), which produce benefits (measurable gains for the organisation or stakeholders), which together create value. The business case justifies the investment; a benefits management plan sets out which benefits are expected, how and when they'll be measured, and who owns them. Many benefits arrive after the project closes, so a benefit owner in the business, not the project manager, tracks them. Projects should trace to organisational goals, such as strategic objectives or OKRs, and if the business case stops stacking up, the project manager's job is to say so and offer options, including stopping. Common financial measures: net present value (NPV), where positive is worthwhile and higher is better; internal rate of return (IRR), compared with the organisation's hurdle rate; payback period, where shorter means faster recovery, but it ignores cash flows after payback; and the benefit-cost ratio (BCR), where above 1 means benefits exceed costs. Opportunity cost is the value of the best alternative you give up. Sunk costs are already spent and shouldn't drive future decisions.",
    figs: ["value-chain"],
    terms: [
      ["Output (project)", "A deliverable the project produces, such as a product, system or document.", "A new online booking app.", 0, "value-chain"],
      ["Outcome (project)", "The change that results from using a project's outputs, such as new behaviour or capability.", "Customers booking online instead of phoning.", 0, "value-chain"],
      ["Benefit (project)", "A measurable improvement for the organisation or its stakeholders that results from an outcome.", "20% fewer calls to the contact centre.", 0, "value-chain"],
      ["Benefits management plan", "A document setting out the expected benefits, how and when they'll be measured, who owns them and how they'll be sustained.", "It names the contact-centre manager as owner of the call-reduction benefit."],
      ["Benefit-cost ratio (BCR)", "Total benefits divided by total costs, usually in present-value terms; above 1 means benefits exceed costs.", "Benefits of $1.5m against costs of $1m give a BCR of 1.5."],
      ["Opportunity cost", "The value of the best alternative you give up when you choose one option.", "Funding project A means not doing project B, worth $200,000."],
      ["Sunk cost", "Money or effort already spent that can't be recovered, and so shouldn't decide what happens next.", "The $2m already spent on a failing system."]
    ],
    cards: [
      { d: 1, q: "Which of these is an outcome rather than an output?", af: "value-chain", o: [
        ["Customers now book online instead of phoning", "Right. It's a change in behaviour that the outputs make possible."],
        ["The new booking app built by the vendor team", "That's an output: something the project delivers."],
        ["Training material for staff", "Also an output."],
        ["The project closure report", "A project document, not an outcome."]],
        k: "Outputs are made; outcomes are what changes." },
      { d: 2, q: "Who should own a project's benefits after it closes?", af: "value-chain", o: [
        ["A business owner who uses the outputs", "Right. A business-side owner is accountable for tracking benefits, which often appear long after the project team has moved on."],
        ["The project manager, until every benefit is realised", "The PM usually moves on at closure."],
        ["The vendor who built the solution", "The vendor delivers outputs; the business realises benefits."],
        ["Nobody; benefits are measured once, at closure", "Many benefits only appear months or years later."]],
        k: "Benefits belong to the business." },
      { d: 2, q: "Project A has an NPV of $120,000 and Project B an NPV of $80,000. Everything else being equal, which do you choose?", o: [
        ["Project A, because its NPV is higher", "Right. Higher NPV means more value in today's money."],
        ["Project B, because a lower NPV means lower risk", "NPV doesn't measure risk."],
        ["Either, because both NPVs are positive", "Both are worthwhile, but A creates more value."],
        ["Neither, because NPV must exceed $1 million", "There's no such threshold; above zero is worthwhile."]],
        k: "Higher NPV, more value." },
      { d: 2, q: "Project X pays back in two years and Project Y in three, but Y's NPV is much higher. What's the main weakness of choosing on payback alone?", o: [
        ["It ignores cash flows after payback, so it can miss more value", "Right. It measures how fast you recover the cost, not the total value."],
        ["Payback already accounts for the time value of money", "Simple payback doesn't discount cash flows."],
        ["Payback always favours longer projects", "It favours faster recovery, not longer projects."],
        ["Payback can't be calculated for IT projects", "It can be calculated for any project with cash flows."]],
        k: "Payback shows speed, not total value." },
      { d: 2, q: "A project has spent $2 million and needs $1 million more, but the market has collapsed and the benefits are now worth $300,000. What should drive the decision?", o: [
        ["Future costs and benefits only", "Right. The $2 million is gone whatever you decide, so recommend stopping or reshaping the project."],
        ["Finish it, or the $2 million will have been wasted", "That's the sunk cost trap."],
        ["Finish it quietly and report the outcome later", "Hiding it is dishonest and wastes another $1 million."],
        ["Cut quality to finish for $300,000", "Spending less on the wrong thing doesn't fix it."]],
        k: "Sunk costs are sunk; decide on what's ahead." },
      { d: 1, q: "What is opportunity cost?", o: [
        ["The value of the best option you give up", "Right. Choosing one project means not doing another."],
        ["Money already spent that can't be recovered", "That's a sunk cost."],
        ["The penalty a contract imposes for missing a deadline", "That may be a contract penalty, not opportunity cost."],
        ["The profit margin on a contract", "Unrelated."]],
        k: "Every choice has a forgone alternative." },
      { d: 2, q: "Your project is on time and on budget, but surveys show the new process hasn't cut complaints, the benefit it promised. What should you do?", o: [
        ["Raise it with the sponsor and benefit owner", "Right. Then find out why the outcome isn't happening; delivering outputs isn't the same as delivering value."],
        ["Close the project, since the deliverables were accepted", "Acceptance doesn't guarantee the benefit."],
        ["Change the survey questions until the results improve", "That hides the problem; it's dishonest."],
        ["Extend the project until complaints fall, without approval", "Any extension needs approval through governance."]],
        k: "On time and on budget isn't the finish line; value is." },
      { d: 3, q: "During planning, what's the strongest way to show a project's strategic alignment?", o: [
        ["Trace its goals and benefits to specific strategic objectives", "Right. A clear, measurable link to organisational goals or OKRs shows alignment."],
        ["List the strategy document in the references section of the charter", "A reference doesn't show alignment."],
        ["Have the chief executive sign the charter", "A signature shows support, not alignment."],
        ["Show that the project uses the newest technology", "New technology isn't a strategic goal in itself."]],
        k: "Alignment = traceable, measurable links to goals." },
      { d: 2, q: "A project's benefit-cost ratio is 0.8. What does that tell you?", o: [
        ["Benefits are worth less than costs", "Right. Below 1, the project destroys value on these numbers."],
        ["It returns an 80% profit", "A BCR above 1 shows benefits exceeding costs; 0.8 is below."],
        ["It pays back its full cost in 0.8 years", "BCR isn't a payback period."],
        ["Its benefits exceed its costs by 80%", "That would be a BCR of 1.8."]],
        k: "BCR below 1: costs outweigh benefits." },
      { d: 3, q: "Halfway through, a competitor launches a cheaper product and your business case no longer stacks up. What's your responsibility?", o: [
        ["Update the analysis and present options, including stopping", "Right. Take it to the sponsor and governance body; the business case is a living document."],
        ["Keep delivering; the business case was approved at the start", "Approval at the start doesn't make it true now."],
        ["Speed up delivery to beat the competitor, without consulting anyone", "A unilateral change to the plan."],
        ["Keep the analysis quiet until the next stage gate", "Delay wastes money and hides a known problem."]],
        k: "When the case changes, say so, with options." }
    ],
    flips: [
      { d: 2, f: "Explain outputs, outcomes, benefits and value with an example.", bf: "value-chain", b: "A clinic's project delivers outputs: an online booking app and trained staff. The outcome is that patients book online instead of phoning. The benefits are measurable: 30% fewer calls and fewer missed appointments. Together they create value: lower costs, better access and happier patients. The project delivers outputs; a benefit owner in the business makes sure the benefits are realised, often after the project closes." }
    ]
  },

  /* ---------------------------------------------------------------- 9 */
  {
    id: "ai-in-pm",
    title: "AI on projects: using it well and safely",
    summary: "The PMP outline that took effect in July 2026 adds AI integration in project management to the Business Environment domain, and the PMBOK Guide's 8th edition has a new appendix on AI. AI tools can draft documents, summarise meetings, analyse risk logs, find patterns in data and support forecasts, but the project manager stays accountable for anything they use or send. The main risks are confidentiality and privacy (data pasted into unapproved tools), accuracy (confident but wrong answers), bias, intellectual property, security and over-reliance. Good practice: use tools your organisation has approved, check the data classification before sharing anything, keep a person reviewing and owning every output, be open about where AI was used, and record decisions and their reasons. Bringing AI into how people work is also organisational change: involve the people affected, explain what will and won't change, and plan for training and new roles. PMI launched a certification for managing AI projects, PMI-CPMAI, in late 2025.",
    terms: [
      ["AI governance (project)", "The rules for which AI tools may be used, with what data, for what purposes, and with what human review and records.", "A policy allowing an approved assistant for drafting, but not for client data."],
      ["Human in the loop", "A person reviews, corrects and takes responsibility for AI outputs before they're used or acted on.", "The PM checks an AI-drafted status report before sending it."],
      ["Data classification", "Labelling information by sensitivity, such as public, internal, confidential or restricted, to decide how it can be shared and stored.", "Client contracts marked confidential can't go into public AI tools."]
    ],
    cards: [
      { d: 1, q: "A team member pastes a client's confidential contract into a free public chatbot to summarise it. What's the main problem?", o: [
        ["It may breach confidentiality and data rules", "Right. It sends client data outside approved systems; classify data first and use only approved tools."],
        ["The summary might be too long and detailed to be useful", "A minor issue compared with the data exposure."],
        ["Chatbots can't read contracts", "They can, which is exactly why the data risk is real."],
        ["Nothing, as long as the summary turns out to be accurate", "Accuracy doesn't undo the breach."]],
        k: "Confidential data stays in approved tools." },
      { d: 2, q: "Your organisation hasn't set AI rules yet. What should happen before the team uses AI tools on project data?", o: [
        ["Agree approved tools and what data can go in", "Right. Set the guardrails first, in line with company policy and with IT, legal or privacy advice as needed."],
        ["Let everyone use any tool they like, and review it later", "Data can't be pulled back once it's shared."],
        ["Ban AI from the project permanently", "An overreaction that throws away real benefits."],
        ["Buy the most popular tool and start", "Popularity isn't the same as approval or fitness for your data."]],
        k: "Guardrails before tools." },
      { d: 2, q: "An AI tool gives you a precise-looking schedule forecast. How should you treat it?", o: [
        ["As an input to check, not as the answer", "Right. Check it against the team's knowledge and the plan, and test its assumptions before relying on it."],
        ["Publish it, since AI forecasts are objective", "Models carry their data's gaps and biases."],
        ["Ignore it, since AI tools can't forecast schedules", "It can be a useful input when checked."],
        ["Use it only if it shows an early finish date", "Picking forecasts by what you want to hear is bias."]],
        k: "AI output is input, not verdict." },
      { d: 2, q: "Who's accountable for a status report drafted with AI and sent out under your name?", o: [
        ["You are, for its accuracy and content", "Right. Using a tool doesn't move accountability."],
        ["The AI vendor", "The vendor doesn't own your report."],
        ["Whoever typed the prompt", "If it goes out under your name, you're accountable."],
        ["Nobody, as long as you disclosed that AI was used", "Disclosure is good practice, but you still own the content."]],
        k: "Your name, your accountability." },
      { d: 3, q: "Call-centre staff fear that the AI rollout your project is delivering will cost them their jobs, and engagement is falling. What's your best move?", o: [
        ["Treat it as organisational change", "Right. Involve them, explain what will change and why, and work with leaders and HR on roles and training."],
        ["Reassure them their fears are unfounded, and carry on", "Empty reassurance destroys trust if roles do change."],
        ["Delay any communication until go-live to avoid panic", "Silence feeds rumour."],
        ["Leave them out of testing to keep things moving", "Excluding the people affected makes adoption harder."]],
        k: "AI adoption is change management." },
      { d: 2, q: "Which use of AI on a project carries the lowest risk?", o: [
        ["Drafting an internal meeting agenda you then edit", "Right. Low-sensitivity data, low stakes, and a person reviews it."],
        ["Approving change requests automatically", "Decisions need accountable people and governance."],
        ["Ranking staff from performance data", "High-stakes, sensitive and prone to bias."],
        ["Relying on its reading of a contract clause, without review", "Legal interpretation needs expert review."]],
        k: "Low stakes plus human review = low risk." },
      { d: 3, q: "An AI tool screening vendor proposals keeps scoring firms from one region lower. What do you do?", o: [
        ["Stop using its scores and check for bias", "Right. Investigate for bias, and evaluate every proposal fairly against the published criteria."],
        ["Keep using it, since it's consistent", "Consistently biased is still biased."],
        ["Adjust those firms' scores upwards by hand", "Guessing a correction doesn't make the evaluation fair."],
        ["Ask those firms to rewrite their proposals", "The problem is the tool, not their proposals."]],
        k: "Biased tools don't get to decide." },
      { d: 1, q: "Where does AI appear in the PMP exam outline that took effect in July 2026?", o: [
        ["In Business Environment, as AI integration", "Right. 'AI integration in project management' sits in the Business Environment domain, alongside sustainability."],
        ["It isn't covered", "It's part of the new outline."],
        ["Only in the People domain, as a member of the team", "It's covered under Business Environment."],
        ["As a separate fourth domain covering technology", "There are still three domains."]],
        k: "AI sits in Business Environment." },
      { d: 2, q: "You'd like to use AI transcription in meetings with an external stakeholder. What should you do first?", o: [
        ["Tell participants and get their consent", "Right. Recording people needs transparency and consent, following privacy rules and company policy."],
        ["Record quietly, since it's only for your notes", "Recording without consent breaks trust, and possibly the law."],
        ["Use it only when senior people attend", "Seniority isn't the test; consent and policy are."],
        ["Transcribe, then delete the recordings without telling anyone", "Deleting afterwards doesn't fix the lack of consent."]],
        k: "Recording people: tell them and get consent." }
    ],
    flips: [
      { d: 2, f: "Give five rules for using AI responsibly on a project.", b: "1. Use only tools your organisation has approved. 2. Check the data's classification before sharing it; keep confidential and personal data out of unapproved tools. 3. Keep a person reviewing and owning every output, especially anything sent out or decided on. 4. Be open with stakeholders about where AI was used. 5. Watch for bias and errors, record important decisions and their reasons, and treat AI adoption as a change that affects people." }
    ]
  },

  /* ---------------------------------------------------------------- 10 */
  {
    id: "models-pm",
    title: "Models project managers use",
    summary: "A few models help you read situations and people. Cynefin (Dave Snowden) sorts situations by how cause and effect relate. Clear: the answer is known, so sense, categorise and respond with best practice. Complicated: experts can analyse it, so sense, analyse and respond, and there may be several good answers. Complex: cause and effect are only clear in hindsight, so probe with safe-to-fail experiments, sense and respond as practice emerges. Chaotic: act first to stabilise, then sense and respond. In the centre is confusion, when you don't know which domain you're in. The Stacey matrix plots agreement against certainty: near agreement and certainty is simple, further out is complicated, then complex, then chaos. French and Raven's bases of power are legitimate (role), reward, coercive (penalties), expert (knowledge) and referent (respect and admiration); in a matrix, expert and referent power usually matter most. In negotiation, separate people from the problem, explore the interests behind positions, and know your BATNA, the best alternative to a negotiated agreement. Vroom's expectancy theory says people are motivated when they believe effort leads to performance, performance leads to a reward, and they value the reward. Satir's change model expects a dip in performance and some chaos before a new way of working takes hold.",
    figs: ["cynefin"],
    terms: [
      ["Cynefin framework", "A sense-making model that sorts situations into clear, complicated, complex, chaotic and confusion, each calling for a different way of acting.", "Running small experiments in a complex market rather than writing a five-year plan.", 0, "cynefin"],
      ["Stacey matrix", "A model plotting agreement among stakeholders against certainty about the solution, to judge how simple or complex a situation is.", "Low agreement and low certainty point to an adaptive approach."],
      ["Referent power", "Influence that comes from being respected, liked or admired.", "A team follows a PM because they trust and admire her."],
      ["Expert power", "Influence that comes from knowledge, skill or experience.", "Engineers listen to the PM because she's built three of these plants."],
      ["BATNA", "Best alternative to a negotiated agreement: what you'll do if the negotiation fails, which sets your walk-away point.", "If the vendor won't move on price, you'll use the second-ranked bidder."],
      ["Expectancy theory (Vroom)", "Motivation depends on believing effort leads to performance, performance leads to a reward, and the reward is valued.", "A bonus motivates only if people think the target is reachable and the bonus is worth it."],
      ["Satir change model", "A model of how performance changes through a change: late status quo, resistance and chaos, a transforming idea, integration, and a new status quo.", "Productivity dips after a new system goes live, then recovers above the old level."]
    ],
    cards: [
      { d: 2, q: "Your team faces a problem nobody has seen before, where cause and effect only make sense in hindsight. Using Cynefin, how should you approach it?", af: "cynefin", o: [
        ["Run small, safe-to-fail experiments", "Right. That's complex: probe, sense, respond, and adapt to what emerges."],
        ["Apply the documented best practice", "That fits the clear domain."],
        ["Hire experts to analyse it fully before acting", "That fits the complicated domain, where analysis can find the answer."],
        ["Act decisively to restore order, then think", "That's for chaos, when the situation is out of control."]],
        k: "Complex: probe → sense → respond." },
      { d: 2, q: "A data centre is on fire and services are down. Which Cynefin domain is this, and how do you act?", af: "cynefin", o: [
        ["Chaotic: act first to stabilise", "Right. Act to restore some order, then sense and respond; there's no time to analyse."],
        ["Complex: run experiments to see what works", "Experimenting is too slow in a crisis."],
        ["Clear: follow the normal procedure and wait", "Normal procedures assume a stable situation."],
        ["Complicated: commission an expert analysis first", "Analysis comes after you've stabilised."]],
        k: "Chaos: act → sense → respond." },
      { d: 1, q: "Which Cynefin domain calls for experts and analysis, with several good answers possible?", af: "cynefin", o: [
        ["Complicated", "Right. Sense, analyse, respond."],
        ["Clear", "Clear has one known best practice."],
        ["Complex", "Complex needs experiments; analysis alone won't find the answer."],
        ["Chaotic", "Chaos needs action first."]],
        k: "Complicated: ask the experts." },
      { d: 2, q: "On the Stacey matrix, a project with strong agreement and high certainty about requirements and technology is...", o: [
        ["Simple: plan-driven approaches work well", "Right. Close to agreement and certainty, a predictive plan suits."],
        ["Complex: it needs agile experimentation", "Complexity comes with lower agreement or certainty."],
        ["Chaotic: it needs crisis management", "Chaos is far from both agreement and certainty."],
        ["Complicated: it needs consensus-building first", "Agreement is already strong."]],
        k: "High agreement + high certainty = simple." },
      { d: 2, q: "A team member follows your lead because they admire you and want to work the way you do. Which power is that?", o: [
        ["Referent", "Right. It comes from respect and admiration."],
        ["Legitimate", "That comes from your formal role."],
        ["Expert", "That comes from your knowledge and skill."],
        ["Reward", "That comes from your ability to give rewards."]],
        k: "Admiration → referent power." },
      { d: 2, q: "You're a PM in a matrix organisation with little formal authority. Which kinds of power are most worth building?", o: [
        ["Expert and referent power", "Right. Both are earned through knowledge, trust and relationships, and work even without a formal title."],
        ["Coercive, because threats work when authority is weak", "Coercion damages trust and rarely lasts."],
        ["Legitimate, because your title should be enough", "In a matrix, your title carries limited weight."],
        ["Reward, by promising bonuses you can't approve", "Promising what you can't deliver is dishonest."]],
        k: "Little authority? Build expertise and trust." },
      { d: 2, q: "Before asking the sponsor for more budget, you work out what you'll do if they say no. What's that called?", o: [
        ["Your BATNA", "Right. Your best alternative to a negotiated agreement tells you when walking away beats the deal on offer."],
        ["Your ZOPA", "That's the zone of possible agreement between both sides."],
        ["Your anchor", "An anchor is a first offer that frames the negotiation."],
        ["Your opening position", "That's what you ask for first, not your fallback."]],
        k: "Know your BATNA before you negotiate." },
      { d: 3, q: "A supplier insists on a 10% price rise; you insist on the old price, and talks have stalled. What's most likely to unlock it?", o: [
        ["Explore the interests behind both positions", "Right. Their rising costs and your budget cycle are interests; they open up options that positions hide."],
        ["Split the difference at 5% straight away", "Possibly fine eventually, but it skips finding better options."],
        ["Threaten to cancel the contract", "Coercion damages the relationship and may backfire."],
        ["Escalate to their chief executive", "Premature; the people at the table haven't explored options yet."]],
        k: "Interests, not positions." },
      { d: 2, q: "Using Vroom's expectancy theory, why might a capable engineer ignore a bonus on offer for an early finish?", o: [
        ["They doubt the target or don't value the bonus", "Right. Motivation needs both belief that effort pays off and a reward they value."],
        ["Herzberg's hygiene factors, such as pay and conditions, are missing", "A different theory, about dissatisfaction."],
        ["The team is in the storming stage", "That's Tuckman's model of team development."],
        ["Their basic needs are already met", "That's Maslow's hierarchy."]],
        k: "Expectancy: can I do it, will I get it, do I want it?" },
      { d: 2, q: "A new finance system has just gone live and productivity has dropped. What does Satir's change model say about this?", o: [
        ["A dip is normal before the change takes hold", "Right. Some chaos and a dip in performance come before people integrate the change; support them through it."],
        ["The change has failed and should be rolled back", "A dip alone doesn't mean failure."],
        ["Productivity should rise the day after go-live", "Most changes cause a temporary dip."],
        ["People are refusing to change, so you need stricter rules", "Resistance and confusion are a normal stage, not just refusal."]],
        k: "Expect the dip; support people through it." }
    ],
    flips: [
      { d: 2, f: "Name Cynefin's domains and how to act in each.", bf: "cynefin", b: "Clear: sense, categorise, respond, using best practice. Complicated: sense, analyse, respond, using experts; there are several good answers. Complex: probe, sense, respond; run safe-to-fail experiments and let practice emerge. Chaotic: act, sense, respond; stabilise first. Confusion: you don't yet know which domain you're in, so break the situation into parts and place each one." }
    ]
  }

  ]
});
