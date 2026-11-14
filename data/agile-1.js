/* Course 1 · Agile & Kanban Essentials — from LinkedIn Learning “Project Management Tips”. Part 1: topics 1–5.
   Card format: d = difficulty (1 easy, 2 medium, 3 hard). o = options; the FIRST option is always the correct one (the app shuffles).
   Each option is [text, explanation]. k = key takeaway. x: 1 marks material beyond the course. fig = diagram id. */

PMQ.fig("manifesto", `<svg viewBox="0 0 600 196" role="img" aria-label="The four Agile Manifesto values">
<rect class="bx" x="1" y="1" width="598" height="194" rx="8"/>
<text class="t2" x="20" y="28">WE VALUE …</text><text class="t2" x="372" y="28">… MORE THAN</text>
<line class="s2" x1="20" x2="580" y1="38" y2="38"/>
<text class="tb" x="20" y="66">Individuals and interactions</text><text class="t2" x="300" y="66">over</text><text class="t" x="372" y="66">processes and tools</text>
<line class="s2" x1="20" x2="580" y1="80" y2="80"/>
<text class="tb" x="20" y="106">Working software</text><text class="t2" x="300" y="106">over</text><text class="t" x="372" y="106">comprehensive documentation</text>
<line class="s2" x1="20" x2="580" y1="120" y2="120"/>
<text class="tb" x="20" y="146">Customer collaboration</text><text class="t2" x="300" y="146">over</text><text class="t" x="372" y="146">contract negotiation</text>
<line class="s2" x1="20" x2="580" y1="160" y2="160"/>
<text class="tb" x="20" y="184">Responding to change</text><text class="t2" x="300" y="184">over</text><text class="t" x="372" y="184">following a plan</text>
</svg>`);

PMQ.fig("story-card", `<svg viewBox="0 0 600 252" role="img" aria-label="A user story card with acceptance criteria">
<rect class="bx" x="1" y="1" width="598" height="250" rx="6"/>
<text class="t2" x="18" y="28">USER STORY · DELIVERY-07</text>
<line class="rule" x1="1" x2="599" y1="42" y2="42"/>
<text class="ta" x="18" y="74">AS A</text><text class="t" x="100" y="74">online shopping customer</text>
<text class="ta" x="18" y="100">I WANT</text><text class="t" x="100" y="100">to be told when my order will be delivered</text>
<text class="ta" x="18" y="126">SO THAT</text><text class="t" x="100" y="126">I can be there to accept the shipment</text>
<line class="s2" x1="18" x2="582" y1="146" y2="146"/>
<text class="t2" x="18" y="170">ACCEPTANCE CRITERIA</text>
<text class="t" x="18" y="194">Given a completed order, when it's picked up for delivery,</text>
<text class="t" x="18" y="212">then email the customer the tracking number.</text>
<text class="t" x="18" y="238">The email states a two-hour delivery window.</text>
</svg>`);

PMQ.fig("sprint-cycle", `<svg viewBox="0 0 600 250" role="img" aria-label="The sprint cycle">
<defs><marker id="ah-sc" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<rect class="bx" x="10" y="30" width="104" height="46" rx="6"/><text class="t" x="62" y="50" text-anchor="middle">Product</text><text class="t" x="62" y="66" text-anchor="middle">backlog</text>
<rect class="bx" x="138" y="30" width="104" height="46" rx="6"/><text class="t" x="190" y="50" text-anchor="middle">Sprint</text><text class="t" x="190" y="66" text-anchor="middle">planning</text>
<rect class="bx" x="266" y="30" width="104" height="46" rx="6"/><text class="t" x="318" y="50" text-anchor="middle">Sprint</text><text class="t" x="318" y="66" text-anchor="middle">backlog</text>
<circle class="soft" cx="512" cy="118" r="52"/><text class="tb" x="512" y="114" text-anchor="middle">SPRINT</text><text class="t2" x="512" y="132" text-anchor="middle">1–2 weeks</text>
<path class="s" d="M494 66 C494 40, 530 40, 530 66" marker-end="url(#ah-sc)"/><text class="t2" x="512" y="28" text-anchor="middle">daily stand-up</text>
<rect class="bx" x="394" y="186" width="104" height="46" rx="6"/><text class="t" x="446" y="206" text-anchor="middle">Working</text><text class="t" x="446" y="222" text-anchor="middle">increment</text>
<rect class="bx" x="266" y="186" width="104" height="46" rx="6"/><text class="t" x="318" y="206" text-anchor="middle">Review</text><text class="t" x="318" y="222" text-anchor="middle">and demo</text>
<rect class="bx" x="138" y="186" width="104" height="46" rx="6"/><text class="t" x="190" y="206" text-anchor="middle">Retro-</text><text class="t" x="190" y="222" text-anchor="middle">spective</text>
<path class="s" d="M114 53 H134" marker-end="url(#ah-sc)"/><path class="s" d="M242 53 H262" marker-end="url(#ah-sc)"/>
<path class="s" d="M370 53 C420 53, 448 64, 466 84" marker-end="url(#ah-sc)"/>
<path class="s" d="M488 164 L462 184" marker-end="url(#ah-sc)"/>
<path class="s" d="M394 209 H374" marker-end="url(#ah-sc)"/><path class="s" d="M266 209 H246" marker-end="url(#ah-sc)"/>
<path class="s" d="M190 186 V80" marker-end="url(#ah-sc)"/><text class="t2" x="40" y="138">next sprint,</text><text class="t2" x="40" y="152">a bit better</text>
</svg>`);

PMQ.course({
  id: "agile",
  title: "Agile & Kanban Essentials",
  short: "Agile & Kanban",
  source: "Project Management Tips",
  blurb: "How agile projects work day to day: personas, user stories, tasks, sprints, the product owner, stand-ups, acceptance tests, kanban boards and the MVP.",
  topics: [

  /* ---------------------------------------------------------------- 1 */
  {
    id: "agile",
    title: "What makes a project agile",
    summary: "Waterfall plans everything up front and moves step by step in sequence. That sounds logical, but in fast-changing environments it can become rigid, bureaucratic and hierarchical. Agile is faster, more collaborative and less bureaucratic: less long-range planning, more communication and short-term planning, and a constant focus on delivering value to the customer, even if that means changing course midstream. Its four values come from the one-page Agile Manifesto.",
    figs: ["manifesto"],
    terms: [
      ["Waterfall method", "The traditional approach: plan everything at the start, then let each step flow into the next in a fixed sequence.", "A shop fit-out where design, council consent, build and handover happen strictly one after another, each signed off before the next starts."],
      ["Agile project management", "A faster, more collaborative, less bureaucratic way to run projects. Teams plan in short cycles, talk constantly and deliver working value early, adapting when things change.", "A council app team ships a basic bin-day reminder in three weeks, then adds the features residents ask for every fortnight.", 0, "manifesto"],
      ["Agile Manifesto", "A one-page statement of four values: individuals and interactions over processes and tools; working software over comprehensive documentation; customer collaboration over contract negotiation; responding to change over following a plan.", "Instead of writing a 40-page spec, a team demos a clickable, working slice to the client every two weeks and adjusts from the feedback."]
    ],
    cards: [
      { d: 1, q: "Which of these is one of the four values in the Agile Manifesto?", o: [
        ["Responding to change over following a plan", "Correct. Agile still plans, but when reality shifts it adapts instead of defending the original plan."],
        ["Following a plan over responding to change", "This is the manifesto value turned around. Agile puts responding to change first."],
        ["Comprehensive documentation over working software", "Reversed. Working software is valued more than comprehensive documentation."],
        ["Processes and tools over individuals and interactions", "Reversed. People and how they work together come before processes and tools."]],
        k: "Each value reads “X over Y”: the items on the right still matter, the items on the left matter more." },
      { d: 1, q: "According to the course, why has agile become so popular, especially in software?", o: [
        ["Many environments are too dynamic and unpredictable for a plan made at the start to hold", "Correct. Rigid up-front plans break down when the world keeps changing, which is exactly where agile helps."],
        ["It removes the need for any planning", "Agile still plans. It plans for shorter horizons and more often."],
        ["It guarantees projects finish under budget", "No method guarantees that. Agile manages cost differently, but projects can still overspend."],
        ["It works best in stable settings where every requirement is known and fixed from day one", "Fully known, fixed requirements are the classic case for waterfall, not agile."]],
        k: "Agile trades long-range prediction for short-range planning and fast feedback." },
      { d: 1, q: "How does the course describe the risk of the traditional waterfall approach?", o: [
        ["Rigid, bureaucratic, hierarchical", "Correct. These are the three words the course uses for waterfall gone wrong."],
        ["It is too fast to control", "Speed is usually agile's selling point, not waterfall's problem."],
        ["It has too little up-front planning", "Waterfall front-loads planning. The issue is that the plan can't flex."],
        ["It relies too heavily on customer feedback at every step", "Waterfall typically involves customers mainly at the start and end, not continuously."]],
        k: "Waterfall's logic is sound for stable work; its weakness shows when conditions change." },
      { d: 2, q: "A client asks for a 60-page specification describing every screen of a new booking app before anyone builds anything. Which manifesto value is most in tension with this request?", o: [
        ["Working software over comprehensive documentation", "Correct. The request puts a large document ahead of anything usable. Agile would show a working slice early and learn from it."],
        ["Responding to change over following a plan", "Related, since a fixed spec resists change, but the core of the request is documentation versus working product."],
        ["Individuals and interactions over processes and tools", "The request isn't mainly about tools or process. It's about producing a big document first."],
        ["Customer collaboration over contract negotiation", "Tempting if you read the spec as a contract, but the request is about documentation volume, not negotiating terms."]],
        k: "Agile prefers a working slice the client can react to over a thick document they have to imagine." },
      { d: 2, q: "Halfway through building an online store, customer research shows shoppers want click-and-collect far more than gift wrapping, which is next on the plan. What is the agile response?", o: [
        ["Reprioritise: build click-and-collect next", "Correct. Agile values responding to change and delivering what customers value, even midstream."],
        ["Finish gift wrapping first because the plan was approved", "That's following a plan over responding to change, the opposite of the manifesto value."],
        ["Pause the project and rewrite the whole plan from scratch", "Overkill. Agile adjusts the next piece of work; it doesn't stop everything to replan."],
        ["Add click-and-collect on top of the current work, without dropping or delaying anything else", "Piling on work without trade-offs usually means neither feature is finished well."]],
        k: "When evidence about customer value changes, change the order of the work." },
      { d: 2, q: "Which statement about planning in agile is accurate?", o: [
        ["There's less up-front, long-range planning and more communication and short-term planning", "Correct. That's how the course sums up agile planning."],
        ["There's no planning; the team just starts building", "A common myth. Agile teams plan constantly, in shorter cycles."],
        ["One detailed, long-range plan is made at the very start and then followed without changes", "That describes a rigid waterfall plan, not agile."],
        ["Only the sponsor plans; the team just executes", "Agile planning is collaborative. Top-down planning is the hierarchical habit agile moves away from."]],
        k: "Agile plans little and often instead of all at once." },
      { d: 3, q: "A hybrid team, half in Auckland and half in Manila, starts with a detailed fixed plan, a formal approval for every change and tasks handed down by managers. Changes take weeks and morale drops. Which diagnosis best fits the course?", o: [
        ["Waterfall habits that turn rigid, bureaucratic and hierarchical when things change", "Correct. Fixed plans, heavy approvals and top-down control are exactly the risks the course names."],
        ["The time-zone split is the real root cause, and fixing it will fix all of the delays", "Distance adds friction, but slow approvals and top-down control explain the weeks-long delays."],
        ["They need more detailed documentation to keep everyone aligned", "More documents would deepen the bureaucracy rather than fix it."],
        ["Agile can't work for distributed teams, so the plan is right", "Plenty of distributed teams run agile well with good communication habits."]],
        k: "Look at how decisions and changes flow. Slow approvals and top-down control are the warning signs." },
      { d: 3, q: "A manager says: “The manifesto values working software over documentation, so from now on we write no documentation.” What's the best response?", o: [
        ["“Over” means more valued, not instead of", "Correct. The manifesto says the right-hand items still have value; agile just keeps them lean and useful."],
        ["Agree. The manifesto bans documentation.", "It doesn't. It ranks documentation below working software, which isn't the same as banning it."],
        ["Disagree. Agile needs exactly the same documentation as waterfall, signed off at every stage.", "Agile deliberately keeps documentation lighter than a typical waterfall project."],
        ["Documentation only matters if an auditor asks for it", "Audits matter, but so do onboarding new people and supporting the product. Useful documentation serves the team too."]],
        k: "Read every manifesto value as a priority, not a prohibition." }
    ],
    flips: [
      { d: 1, f: "Name the four Agile Manifesto values.", b: "Individuals and interactions over processes and tools. Working software over comprehensive documentation. Customer collaboration over contract negotiation. Responding to change over following a plan." },
      { d: 2, f: "Your manager asks: “In one sentence, what's the difference between waterfall and agile?”", b: "Waterfall plans everything at the start and moves step by step in a fixed sequence; agile plans in short cycles, keeps working with the customer and delivers working pieces early so it can change course as it learns." }
    ]
  },

  /* ---------------------------------------------------------------- 2 */
  {
    id: "persona",
    title: "Personas",
    summary: "Agile is about delivering value to customers, but every customer is different. A persona is a fictional customer who represents the shared characteristics of a group: the demographics that matter for the product, plus their goals, motivations and limitations. Build personas from customer discovery and market research, or use them to write down the assumptions you're making. A persona is like a market segment with a human face, and personas are the starting point for user stories.",
    terms: [
      ["Persona", "A fictional customer who represents the shared characteristics of a group of real customers: product-relevant demographics plus goals, motivations and limitations.", "Mere, 34, a night-shift nurse in South Auckland, orders groceries on her phone during breaks and needs delivery slots after 9 am."],
      ["Customer discovery", "Talking to and watching real customers to learn their needs, problems and habits.", "Interviewing ten café owners about how they order stock today before designing an ordering app."],
      ["Market segment", "A group of customers defined by shared data such as age, location or spending. A persona puts a human face on a segment.", "“Urban renters aged 25–34” is a segment. “Priya, who rents a one-bedroom flat, has no car and shops after work” is a persona."]
    ],
    cards: [
      { d: 1, q: "What is a persona in agile development?", o: [
        ["A fictional customer who represents the characteristics of a group of customers", "Correct. One made-up person stands in for many real ones."],
        ["A real, named customer whose exact needs and wishes the team must meet in full", "A persona is fictional and represents a group, not one real individual."],
        ["A list of every feature the product will have", "That sounds more like a product backlog."],
        ["A role on the project team, such as tester", "Personas describe customers, not team members."]],
        k: "A persona is one invented person standing in for a whole group of real customers." },
      { d: 1, q: "Which detail belongs in a useful persona?", o: [
        ["Their goals, motivations and limitations when using the product", "Correct. These are the details the course says make a persona useful for development."],
        ["Their favourite colour, because more detail is always better", "Only details that matter for the product help. Irrelevant detail is noise."],
        ["The project's budget and deadline", "Those are project constraints, not customer characteristics."],
        ["The database the developers plan to use", "That's technical design, not a description of the customer."]],
        k: "Include what changes design decisions: goals, motivations, limitations." },
      { d: 1, q: "How does a persona differ from a market segment?", o: [
        ["It puts a human face on the customer instead of only analysing data about a group", "Correct. That's the distinction the course draws."],
        ["A persona always needs more data than a segment", "Not necessarily. A persona can even be built from assumptions."],
        ["Segments are fictional; personas are real people", "It's the other way round: personas are fictional characters."],
        ["There's no real difference; in agile the two words mean exactly the same thing", "They're related but different. A segment is a group defined by data; a persona is a character."]],
        k: "Segments describe groups with numbers; personas make them human." },
      { d: 2, q: "A startup has no customer research yet but must start designing a budgeting app for students. What does the course suggest about personas here?", o: [
        ["Write them as assumptions, then test them", "Correct. The course explicitly allows personas as a record of assumptions. Writing them down makes them testable."],
        ["Don't create any persona until research is complete", "Not required. Assumption personas make your guesses visible so you can check them."],
        ["Use one persona based on the founder, who knows the problem best", "The founder isn't the customer group, and designing for yourself is a classic trap."],
        ["Skip personas for now and start coding the core features", "You'd lose the customer focus that personas and user stories provide."]],
        k: "No research yet? Write assumption personas so your guesses are out in the open." },
      { d: 2, q: "Your ordering-app persona reads: “Tama, 52, store manager, not confident with tech, orders stock at 6 am on a tablet shared by the team.” Which design decision does this persona support most directly?", o: [
        ["Big buttons, one-tap “reorder last week” and no personal logins", "Correct. It fits low tech confidence, an early rush and a shared device."],
        ["An advanced analytics dashboard with custom formulas", "Powerful, but a poor fit for a user who isn't confident with tech and is ordering in a hurry."],
        ["A dark mode so the screen is easier on the eyes at night", "Nothing in the persona points to night use as the key need."],
        ["A desktop-only interface with detailed menus for every option", "Tama uses a shared tablet, so desktop-only would shut him out."]],
        k: "A good persona makes design trade-offs obvious." },
      { d: 3, q: "Your personas are two years old. Since then most customers have moved from desktop to mobile and use AI assistants to compare prices. What's the best move?", o: [
        ["Revisit the personas with fresh customer discovery and update their goals, behaviour and limitations", "Correct. Personas are living descriptions; when behaviour shifts, they need updating or they'll mislead the team."],
        ["Keep them. Once written, personas are permanent.", "Out-of-date personas push the team to design for customers who no longer exist."],
        ["Delete all personas because customers change too fast to model", "The answer to change is to refresh personas, not abandon customer focus."],
        ["Add a footnote about mobile use to each persona, but leave the user stories and backlog unchanged", "If the persona changes, the stories built on it probably need to change too."]],
        k: "Refresh personas when customer behaviour changes; stale personas mislead." },
      { d: 3, q: "A designer writes this persona: “Users are people aged 18–65 who want a good experience.” What's the main problem?", o: [
        ["It's a segment, with no goals, motives or limits", "Correct. It describes almost everyone and nothing specific, so it helps no trade-off."],
        ["It's too specific, so it will exclude most real customers", "The opposite. It's so broad it's meaningless."],
        ["Personas shouldn't mention age, because age leads to stereotypes", "Age can be relevant. The problem is the lack of goals, motivations and limitations."],
        ["It should name the developers who'll build for this user", "Personas describe customers, not the team."]],
        k: "If a persona could describe anyone, it can't guide anything." }
    ],
    flips: [
      { d: 2, f: "Turn this segment into a persona: “Tradespeople, 25–45, Auckland.”", b: "For example: “Sione, 31, self-employed electrician. Works from his van and quotes jobs on his phone between sites. Hates typing on small screens. Needs invoices sent the same day to keep cash flowing.” A name, a situation, a goal, a motivation and a limitation." },
      { d: 1, f: "Where can personas come from, according to the course?", b: "Customer discovery and market research data, or simply a written record of the assumptions you're making about your customers, to be tested later." }
    ]
  },

  /* ---------------------------------------------------------------- 3 */
  {
    id: "story",
    title: "User stories",
    summary: "A user story starts with a character, often a persona, and explains what should happen from that user's point of view. The common template is “As a ___, I want ___, so that ___.” A good story covers high-level functionality: what should happen and why, not how. You can write lots of stories, combine related ones into an epic, and prioritise them so the team always works on what customers value most.",
    figs: ["story-card"],
    terms: [
      ["User story", "A short description of what should happen from the user's point of view, usually written “As a ___, I want ___, so that ___.”", "As an online shopper, I want to be told when my order will arrive, so that I can be home to accept it.", 0, "story-card"],
      ["Epic", "A larger piece of work made by combining several related user stories.", "“Online checkout” is an epic holding stories for saved cards, promo codes and delivery slots."],
      ["“So that” clause", "The last part of the story template, which states the value or reason. It's what lets the team prioritise and design the right thing.", "“…so that I can call the contractor before the inspection.” Without it, nobody knows why the alert matters."],
      ["INVEST", "A checklist for good stories: Independent, Negotiable, Valuable, Estimable, Small, Testable.", "A story too big to finish in one sprint fails the Small test and should be split.", 1]
    ],
    cards: [
      { d: 1, q: "Which is the common user story template?", o: [
        ["As a ___, I want ___, so that ___.", "Correct. User, goal, reason, in one sentence."],
        ["Given ___, when ___, then ___.", "That's the template for scenario-based acceptance criteria, which test a story."],
        ["If ___, then ___, otherwise ___.", "That's a logic rule, not a story template."],
        ["Task: ___. Owner: ___. Due: ___.", "That's a task card format, not a user story."]],
        k: "User, goal, reason: “As a…, I want…, so that…”" },
      { d: 1, q: "What should a good user story focus on?", o: [
        ["What should happen, not how", "Correct. The how belongs in tasks."],
        ["The exact code, screens and database changes the developers will need", "That's implementation detail, which the team works out in tasks."],
        ["The budget for the feature", "Cost isn't part of the story itself."],
        ["Which developer will do the work", "Assignment happens later, at the task level."]],
        k: "Stories say what and why; tasks say how." },
      { d: 1, q: "What is an epic?", o: [
        ["A bundle of related user stories", "Correct, as the course describes it."],
        ["The most urgent bug in the backlog", "Urgency doesn't make something an epic; size and grouping do."],
        ["A story written by the customer directly, instead of by the delivery team", "Who writes it doesn't matter. An epic is a bundle of stories."],
        ["The final sprint of a project", "An epic is a unit of work, not a time period."]],
        k: "Epic = a big piece of value made of several stories." },
      { d: 2, q: "Which is the best-written user story?", o: [
        ["As a delivery driver, I want my route sorted by drop-off time, so that I finish before the shop closes.", "Correct. Clear user, clear goal, clear value, and no technical how."],
        ["Build a route optimisation algorithm using a graph database and a nightly batch job for drivers.", "That's a technical solution. There's no user and no reason."],
        ["As a user, I want the app to be better.", "Too vague to build, estimate or test."],
        ["The driver screen shall show routes in a table with 12-point font.", "A spec detail with no user goal or reason behind it."]],
        k: "A good story names a real user, a specific goal and the value it brings." },
      { d: 2, q: "Your backlog holds 40 stories and the team has two weeks of capacity. How does the course say you keep effort on the right work?", o: [
        ["Prioritise the stories so the team always works on what customers value most", "Correct. Prioritised stories keep effort pointed at value."],
        ["Do the easiest stories first", "Easy isn't the same as valuable; you might finish lots of low-value work."],
        ["Let each developer pick favourites", "That optimises for preference, not customer value."],
        ["Work through them in the order they were written, so nothing is skipped or forgotten", "Order of writing says nothing about value."]],
        k: "Prioritisation is how stories turn into value, sprint after sprint." },
      { d: 2, q: "A stakeholder submits: “As an admin, I want a CSV export.” What's missing that matters most?", o: [
        ["The “so that”: the reason it matters", "Correct. Without the reason you can't judge priority or design the right export."],
        ["The developer's name, so someone owns it", "Assignment isn't part of a story."],
        ["The estimated hours for the export", "Estimates come later, usually on tasks or as story points."],
        ["Nothing. It names a user and a want, so it's complete.", "It names a user and a want but no value, so it can't be prioritised properly."]],
        k: "The “so that” clause turns a feature request into a reason to build." },
      { d: 3, q: "A team wants to add a GenAI chatbot. The story reads: “As the CEO, I want an AI chatbot, so that we look innovative.” What's the strongest critique?", o: [
        ["It's about the company, not a user's need", "Correct. Stories should express value to users. “Looking innovative” isn't customer value."],
        ["Stories shouldn't name a technology like AI, only business goals", "Stories can involve any technology, as long as they express user value."],
        ["It should be an epic instead, because AI features are complicated and slow to build", "Size isn't the main problem; the missing customer need is."],
        ["The CEO isn't allowed to write stories; only the team can", "Anyone can suggest stories. The problem is the content, not the author."]],
        k: "Start stories from a real user and a real need, even for shiny technology." },
      { d: 3, q: "A story reads: “As a shopper, I want the whole checkout redesigned, so that buying is easier.” It's far too big for one sprint. What's the best move?", x: 1, o: [
        ["Split it into stories; keep the big one as an epic", "Correct. Saved cards, promo codes and delivery slots can each be finished, tested and delivered within a sprint."],
        ["Keep it whole and make this one sprint longer so the whole story fits", "Stretching the time box loses the fast feedback that short sprints give."],
        ["Turn it into one giant task list for the whole team", "That hides the user value of each piece and makes progress hard to see."],
        ["Drop it, because big ideas don't fit into agile sprints", "Big ideas fit fine once they're split into deliverable stories."]],
        k: "Too big for a sprint? Split the story; keep the big idea as an epic." }
    ],
    flips: [
      { d: 2, f: "Write a user story for a building fire-safety officer who needs to know when a sprinkler valve is tampered with.", b: "As a building fire-safety officer, I want an instant alert when a sprinkler valve is closed or tampered with, so that I can restore protection before the building is left unprotected. User, goal and reason, with no technical how." },
      { d: 2, f: "Story or task? “Configure the email server to send tracking numbers.”", b: "A task: it describes how work gets done. The story it serves is something like “As a customer, I want to be told when my order will be delivered, so that I can be there to accept it.”" }
    ]
  },

  /* ---------------------------------------------------------------- 4 */
  {
    id: "tasks",
    title: "Breaking stories into tasks",
    summary: "A user story explains what should happen and why it matters; it doesn't say how. The team turns each story into tasks that describe the work needed to make the story true, then breaks those into smaller tasks such as writing code or configuring servers. Once tasks are broken down, they're estimated and assigned. Starting from the story means every task is tied to something the customer values.",
    terms: [
      ["Task", "A detailed piece of work needed to make a user story true. Tasks can be split into smaller tasks, estimated and assigned.", "For the delivery-notification story: “Send the customer an email with the shipping date and tracking number.”"],
      ["Decomposition", "Breaking work into smaller pieces until each one can be estimated and assigned with confidence.", "“Send tracking email” becomes: write the template, code the trigger, configure the mail server, test with a real order."],
      ["Traceability to value", "Every task links back to a user story, so all work connects to something a customer values.", "A developer can trace “configure the mail relay” straight back to the customer's delivery-notification story."]
    ],
    cards: [
      { d: 1, q: "What's the difference between a user story and a task?", o: [
        ["The story says what and why; tasks describe the work to make it true", "Correct. Stories carry the value; tasks carry the how."],
        ["They're the same thing; teams just use different names", "They work at different levels. One story usually needs several tasks."],
        ["Customers write tasks and developers write stories", "It's closer to the reverse: stories reflect users; the team defines tasks."],
        ["Stories hold the technical detail; tasks hold the high-level goals", "Reversed. Stories are high-level; tasks get technical."]],
        k: "Story = what and why. Task = how." },
      { d: 1, q: "Once tasks are broken down, what does the course say happens next?", o: [
        ["Estimate how long they'll take and assign them to people", "Correct, exactly as the course describes."],
        ["Send them to the customer for review and formal sign-off", "Customers judge the story through acceptance criteria, not each task."],
        ["Merge them back into a single story", "That would undo the breakdown."],
        ["Archive them until the next project", "Tasks are worked now, in the sprint, not stored away."]],
        k: "Break down, then estimate, then assign." },
      { d: 2, q: "Story: “As a customer, I want to be told my delivery time, so that I can be there.” Which of these is a task for it?", o: [
        ["Send the customer an email with the shipping date and tracking number", "Correct. This is the course's own example of a task that makes the story true."],
        ["As a customer, I want to track my parcel live on a map, so I know when to be home", "That's another user story, not a task."],
        ["Increase customer satisfaction scores", "That's a business goal, not a piece of work."],
        ["Replace the courier company's delivery vans", "Outside the team's control and unrelated to making the story true."]],
        k: "A task is concrete work that helps make a specific story true." },
      { d: 2, q: "Why does the course recommend starting from the user story when creating tasks?", o: [
        ["So every task links to customer value", "Correct. Tasks inherit their purpose from the story."],
        ["Because the story already contains the code", "Stories deliberately avoid the how."],
        ["Because only the product owner is allowed to write the tasks", "The team usually creates tasks; the point is linking them to value."],
        ["So tasks never need estimating", "Tasks still need estimates. Starting from the story gives them a purpose."]],
        k: "No story, no clear value. Anchor tasks to stories." },
      { d: 2, q: "A task called “Build notification system” is estimated at 15 days. What's the best next step?", o: [
        ["Break it into smaller, estimable tasks", "Correct. Template, trigger, server setup and testing are each easier to estimate, and splitting exposes hidden work."],
        ["Accept the 15-day estimate and start work straight away", "Big, vague tasks hide risk and make progress hard to track."],
        ["Give it to the most senior developer and hope for the best", "Seniority doesn't remove the uncertainty in a huge task."],
        ["Drop the story because anything over a week is too big", "The story may be valuable; the task just needs breaking down."]],
        k: "If a task is too big to estimate confidently, split it." },
      { d: 3, q: "In planning, someone adds a task: “Upgrade the office printers.” It doesn't connect to any story in the product backlog. What's the agile view?", o: [
        ["Question it: it traces back to no story", "Correct. Work that doesn't trace to a story isn't delivering customer value here. It may be worth doing, but it belongs somewhere else, such as an operations list."],
        ["Keep it. Any useful task can go into the sprint.", "Busy isn't the same as valuable. Untraced tasks eat sprint capacity."],
        ["Write a quick printer story so the task fits the backlog after all", "Forcing a fake story hides the fact that it isn't product work."],
        ["Do it quietly without putting it on the board", "Hidden work makes the board inaccurate, which defeats the purpose of kanban."]],
        k: "If a task can't point to a story, ask why it's in the sprint." },
      { d: 3, q: "Your team uses an AI coding assistant that writes code fast. A developer suggests skipping task breakdown because “the AI will just write it.” What's the strongest reason to keep breaking stories into tasks?", o: [
        ["Tasks expose hidden steps like setup and testing", "Correct. Code is only part of the work. Breakdown keeps the whole job visible and shared."],
        ["AI tools aren't allowed in agile teams, so the question is moot", "Nothing in agile bans AI tools; the question is how the work is organised."],
        ["Task breakdown is an old waterfall habit that most modern agile teams have now dropped", "The course describes task breakdown as a core agile practice."],
        ["The customer has to approve every task before work starts", "Customers accept stories through acceptance criteria, not individual tasks."]],
        k: "Faster coding doesn't remove the need to plan, share and track the work." }
    ],
    flips: [
      { d: 2, f: "Break this story into tasks: “As a gym member, I want to book a class from my phone, so that I don't have to call reception.”", b: "For example: design the booking screen; build the class timetable data; send a booking confirmation by text or email; handle full classes with a waitlist; test on iPhone and Android. Each task makes part of the story true." }
    ]
  },

  /* ---------------------------------------------------------------- 5 */
  {
    id: "sprint",
    title: "Sprints",
    summary: "Instead of one long project, agile runs a series of short, iterative development cycles called sprints. A sprint is a time box, usually one to two weeks, in which the team commits to a specific amount of work: short enough to stay focused, long enough to deliver something of value. During a sprint the team works on a fixed number of user stories, including the acceptance testing, holds daily meetings and tracks progress on a kanban board.",
    figs: ["sprint-cycle"],
    terms: [
      ["Sprint", "A short, time-boxed development cycle, usually one to two weeks, in which a fixed set of user stories is completed and tested.", "A two-week sprint delivers online booking and confirmation texts for a physio clinic.", 0, "sprint-cycle"],
      ["Time box", "A fixed period in which you commit to a set amount of work. The end date holds; the work inside it is planned to fit.", "A team commits to three stories in a 10-working-day sprint ending Friday the 14th."],
      ["Iterative development", "Building a product through repeated short cycles, each adding working value and learning from feedback.", "Version 1 of a store's ordering app lists suppliers; version 2, two weeks later, adds reorder reminders."]
    ],
    cards: [
      { d: 1, q: "How long does a sprint usually last, according to this course?", o: [
        ["One to two weeks", "Correct. Short enough to stay focused, long enough to deliver value."],
        ["One day", "That's the rhythm of the daily meeting, not a sprint."],
        ["Three to six months", "That's far too long for a sprint; it would lose the fast feedback."],
        ["Until every feature is finished", "Sprints are time-boxed. The end date doesn't wait for everything to be done."]],
        k: "Sprints are short, fixed cycles, typically one to two weeks." },
      { d: 1, q: "Why is a sprint called a time-boxed development cycle?", o: [
        ["You commit to a certain amount of work within a fixed, short period", "Correct. The time is fixed; the work is planned to fit inside it."],
        ["Because the work is stored in a box on the board", "The phrase is about fixed time, not storage."],
        ["Because the end date can move out whenever the planned work runs late", "The point of a time box is that the end date holds."],
        ["Because each person logs hours in a timesheet box", "Time tracking isn't what makes it a time box."]],
        k: "Fixed time, planned scope: that's a time box." },
      { d: 2, q: "What makes a good sprint length?", o: [
        ["Short enough to focus, long enough to deliver value", "Correct. That's the balance the course describes."],
        ["As long as possible, to cut down on planning and meetings", "Long sprints delay feedback and blur focus."],
        ["Exactly 30 days, because that's the standard length for every agile team everywhere", "There's no single correct length; one to two weeks is common."],
        ["Whatever length the client asks for at the start of each one", "Constantly changing the length breaks the team's rhythm and predictability."]],
        k: "Pick a length that keeps focus and still ships value." },
      { d: 2, q: "Mid-sprint, a stakeholder asks to add three new stories to the current sprint. What fits the course's description of a sprint?", o: [
        ["Keep the sprint fixed; backlog the new ones", "Correct. A sprint addresses a fixed number of stories; new ideas get prioritised for later."],
        ["Add them to the sprint and extend it until all of them are done", "That breaks the time box and the team's commitment."],
        ["Cancel the sprint and restart with all stories", "Restarting throws away progress for a routine request."],
        ["Add them and skip acceptance testing to save time", "Untested work isn't done work. Quality is part of the commitment."]],
        k: "Protect the sprint's focus; new requests go to the backlog." },
      { d: 2, q: "What must be completed before a sprint ends?", o: [
        ["The tasks for the sprint's user stories and their acceptance testing", "Correct. The course includes acceptance testing inside the sprint."],
        ["Only the coding; testing for these stories can happen next sprint", "Then nothing is truly done at the end of the sprint."],
        ["The project's final documentation", "That's not a sprint goal; sprints deliver working increments."],
        ["The entire product", "A sprint delivers an increment, not the whole product."]],
        k: "Done means built and tested within the sprint." },
      { d: 3, q: "A team keeps ending sprints with stories “done except testing.” Which change best matches the course?", o: [
        ["Plan fewer stories, each fully tested", "Correct. Finishing fewer stories properly beats starting many."],
        ["Make each sprint longer so all the testing fits in after the coding", "Tempting, but it delays feedback and usually just lets more work pile up."],
        ["Move all testing into one big final sprint", "That recreates waterfall's late-testing problem, where bugs surface too late to fix cheaply."],
        ["Count untested stories as done to keep velocity up", "That hides risk and misleads everyone about real progress."]],
        k: "If testing keeps spilling over, plan less and finish more." },
      { d: 3, q: "A team building a stock-ordering app depends on a supplier's API, which is now three weeks late. The next sprint was planned around it. What's the best sprint move?", o: [
        ["Re-plan the sprint around stories that don't depend on the API, so the sprint still delivers value", "Correct. Agile adapts the plan to reality and keeps value flowing."],
        ["Keep the team idle until the API arrives", "Idle time wastes capacity when other valuable work exists."],
        ["Extend the current sprint by three weeks", "That breaks the time box and hides the real problem."],
        ["Start the API stories anyway with mock data, and mark them done once the real API arrives", "Work that can't be tested isn't done, and the board becomes misleading."]],
        k: "When a dependency slips, re-plan the sprint around what can still be delivered." }
    ],
    flips: [
      { d: 2, f: "Which agile tools come together inside a sprint, according to the course?", b: "A fixed set of user stories, the tasks that make them true, acceptance testing before the sprint ends, daily meetings to manage priorities and issues, and a kanban board to track progress." }
    ]
  }

  ]
});
