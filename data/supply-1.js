/* Course 3 · Supply Chain Project Management — from LinkedIn Learning “Supply Chain Foundations: Project Management”. Part 1: topics 1–8.
   Same card format as the other files: first option is correct, the app shuffles. */

PMQ.fig("sipoc", `<svg viewBox="0 0 600 172" role="img" aria-label="SIPOC for making olive oil">
<rect class="acc" x="6" y="8" width="114" height="30" rx="4"/><text class="tw" x="63" y="27" text-anchor="middle">S · SUPPLIERS</text>
<rect class="acc" x="124" y="8" width="114" height="30" rx="4"/><text class="tw" x="181" y="27" text-anchor="middle">I · INPUTS</text>
<rect class="acc" x="242" y="8" width="114" height="30" rx="4"/><text class="tw" x="299" y="27" text-anchor="middle">P · PROCESS</text>
<rect class="acc" x="360" y="8" width="114" height="30" rx="4"/><text class="tw" x="417" y="27" text-anchor="middle">O · OUTPUTS</text>
<rect class="acc" x="478" y="8" width="114" height="30" rx="4"/><text class="tw" x="535" y="27" text-anchor="middle">C · CUSTOMERS</text>
<rect class="bx" x="6" y="42" width="114" height="124" rx="4"/><rect class="bx" x="124" y="42" width="114" height="124" rx="4"/><rect class="bx" x="242" y="42" width="114" height="124" rx="4"/>
<rect class="bx" x="360" y="42" width="114" height="124" rx="4"/><rect class="bx" x="478" y="42" width="114" height="124" rx="4"/>
<text class="t2" x="16" y="68">Olive orchards</text><text class="t2" x="16" y="94">Equipment</text><text class="t2" x="16" y="110">suppliers</text>
<text class="t2" x="134" y="68">Olives</text><text class="t2" x="134" y="94">Manufacturing</text><text class="t2" x="134" y="110">equipment</text><text class="t2" x="134" y="136">Trained</text><text class="t2" x="134" y="152">employees</text>
<text class="t2" x="252" y="68">1 Wash</text><text class="t2" x="252" y="88">2 Crush</text><text class="t2" x="252" y="108">3 Press</text><text class="t2" x="252" y="128">4 Filter</text><text class="t2" x="252" y="148">5 Bottle</text>
<text class="t2" x="370" y="68">Olive oil</text><text class="t2" x="370" y="94">Waste</text><text class="t2" x="370" y="120">Emissions</text>
<text class="t2" x="488" y="68">Wholesalers</text><text class="t2" x="488" y="94">Retailers</text><text class="t2" x="488" y="120">Consumers</text>
</svg>`);

PMQ.fig("flowchart", `<svg viewBox="0 0 600 268" role="img" aria-label="Swim-lane flowchart of receiving a truck at the warehouse">
<defs><marker id="ah-fc" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<rect class="bx" x="1" y="8" width="598" height="256" rx="6"/>
<line class="s2" x1="1" x2="599" y1="72" y2="72"/><line class="s2" x1="1" x2="599" y1="136" y2="136"/><line class="s2" x1="1" x2="599" y1="200" y2="200"/><line class="s2" x1="88" x2="88" y1="8" y2="264"/>
<text class="t2" x="10" y="44">Driver</text><text class="t2" x="10" y="108">Security</text><text class="t2" x="10" y="172">Supervisor</text><text class="t2" x="10" y="236">Warehouse</text>
<circle class="soft" cx="128" cy="40" r="28"/><text class="tc" x="128" y="37" text-anchor="middle">Truck</text><text class="tc" x="128" y="50" text-anchor="middle">arrives</text>
<rect class="bx" x="168" y="84" width="76" height="40" rx="4"/><text class="tc" x="206" y="101" text-anchor="middle">Notify</text><text class="tc" x="206" y="114" text-anchor="middle">supervisor</text>
<polygon class="bx" points="294,140 334,168 294,196 254,168"/><text class="tc" x="294" y="165" text-anchor="middle">OK to</text><text class="tc" x="294" y="178" text-anchor="middle">dock?</text>
<rect class="bx" x="344" y="20" width="76" height="40" rx="4"/><text class="tc" x="382" y="37" text-anchor="middle">Move to</text><text class="tc" x="382" y="50" text-anchor="middle">dock door</text>
<rect class="bx" x="410" y="212" width="76" height="40" rx="4"/><text class="tc" x="448" y="229" text-anchor="middle">Unload</text><text class="tc" x="448" y="242" text-anchor="middle">truck</text>
<rect class="bx" x="500" y="212" width="76" height="40" rx="4"/><text class="tc" x="538" y="229" text-anchor="middle">Receive</text><text class="tc" x="538" y="242" text-anchor="middle">into WMS</text>
<circle class="soft" cx="538" cy="40" r="28"/><text class="tc" x="538" y="37" text-anchor="middle">Truck</text><text class="tc" x="538" y="50" text-anchor="middle">departs</text>
<path class="s" d="M128 68 V104 H165" marker-end="url(#ah-fc)"/>
<path class="s" d="M244 104 H294 V137" marker-end="url(#ah-fc)"/>
<path class="s" d="M334 168 H382 V63" marker-end="url(#ah-fc)"/><text class="t2" x="340" y="161">yes</text>
<path class="s" d="M254 168 H222" marker-end="url(#ah-fc)"/><text class="t2" x="216" y="172" text-anchor="end">no: wait</text>
<path class="s" d="M420 40 H448 V209" marker-end="url(#ah-fc)"/>
<path class="s" d="M486 232 H497" marker-end="url(#ah-fc)"/>
<path class="s" d="M538 212 V71" marker-end="url(#ah-fc)"/>
</svg>`);

PMQ.fig("systems-loop", `<svg viewBox="0 0 600 200" role="img" aria-label="Raising prices after a cost increase can cut demand and leave profit worse">
<defs><marker id="ah-sl" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<rect class="bx" x="30" y="20" width="200" height="40" rx="6"/><text class="t" x="130" y="44" text-anchor="middle">Raw material cost rises</text>
<rect class="bx" x="370" y="20" width="200" height="40" rx="6"/><text class="t" x="470" y="44" text-anchor="middle">Raise customer prices</text>
<rect class="bx" x="370" y="140" width="200" height="40" rx="6"/><text class="t" x="470" y="164" text-anchor="middle">Customer demand falls</text>
<rect class="soft" x="30" y="140" width="200" height="40" rx="6"/><text class="t" x="130" y="164" text-anchor="middle">Revenue and profit fall</text>
<path class="s" d="M230 40 H366" marker-end="url(#ah-sl)"/><text class="t2" x="298" y="32" text-anchor="middle">the obvious fix</text>
<path class="s" d="M470 60 V136" marker-end="url(#ah-sl)"/><text class="t2" x="478" y="102">fewer buyers</text>
<path class="s" d="M370 160 H234" marker-end="url(#ah-sl)"/><text class="t2" x="302" y="176" text-anchor="middle">less money in</text>
<text class="tb" x="300" y="98" text-anchor="middle">The simple fix can make</text><text class="tb" x="300" y="116" text-anchor="middle">profit worse, not better</text>
</svg>`);

PMQ.fig("vsm", `<svg viewBox="0 0 600 204" role="img" aria-label="Value stream map from olives to bottled oil; washing has the most waiting">
<defs><marker id="ah-vs" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<rect class="bx" x="8" y="20" width="86" height="44" rx="6"/><text class="tb" x="51" y="40" text-anchor="middle">Harvest</text><text class="t2" x="51" y="56" text-anchor="middle">LT 6 h</text>
<rect class="bx" x="107" y="20" width="86" height="44" rx="6"/><rect class="bad-s" x="107" y="20" width="86" height="44" rx="6"/><text class="tb" x="150" y="40" text-anchor="middle">Wash</text><text class="t2" x="150" y="56" text-anchor="middle">LT 5 h</text>
<rect class="bx" x="206" y="20" width="86" height="44" rx="6"/><text class="tb" x="249" y="40" text-anchor="middle">Crush</text><text class="t2" x="249" y="56" text-anchor="middle">LT 1 h</text>
<rect class="bx" x="305" y="20" width="86" height="44" rx="6"/><text class="tb" x="348" y="40" text-anchor="middle">Press</text><text class="t2" x="348" y="56" text-anchor="middle">LT 1.5 h</text>
<rect class="bx" x="404" y="20" width="86" height="44" rx="6"/><text class="tb" x="447" y="40" text-anchor="middle">Filter</text><text class="t2" x="447" y="56" text-anchor="middle">LT 2 h</text>
<rect class="bx" x="503" y="20" width="86" height="44" rx="6"/><text class="tb" x="546" y="40" text-anchor="middle">Bottle</text><text class="t2" x="546" y="56" text-anchor="middle">LT 1.5 h</text>
<path class="s" d="M94 42 H104" marker-end="url(#ah-vs)"/><path class="s" d="M193 42 H203" marker-end="url(#ah-vs)"/><path class="s" d="M292 42 H302" marker-end="url(#ah-vs)"/><path class="s" d="M391 42 H401" marker-end="url(#ah-vs)"/><path class="s" d="M490 42 H500" marker-end="url(#ah-vs)"/>
<rect class="acc" x="8" y="80" width="71.7" height="12"/><rect class="bx" x="79.7" y="80" width="14.3" height="12"/>
<rect class="acc" x="107" y="80" width="7.2" height="12"/><rect class="bad" x="114.2" y="80" width="64.5" height="12"/>
<rect class="acc" x="206" y="80" width="14.3" height="12"/>
<rect class="acc" x="305" y="80" width="21.5" height="12"/>
<rect class="acc" x="404" y="80" width="21.5" height="12"/><rect class="bx" x="425.5" y="80" width="7.2" height="12"/>
<rect class="acc" x="503" y="80" width="14.3" height="12"/><rect class="bx" x="517.3" y="80" width="7.2" height="12"/>
<text class="t2" x="8" y="108">5 of 6 h</text><text class="t2" x="107" y="108">0.5 of 5 h</text><text class="t2" x="206" y="108">1 of 1 h</text>
<text class="t2" x="305" y="108">1.5 of 1.5 h</text><text class="t2" x="404" y="108">1.5 of 2 h</text><text class="t2" x="503" y="108">1 of 1.5 h</text>
<rect class="acc" x="8" y="131" width="12" height="10"/><text class="t2" x="24" y="140">adds value</text>
<rect class="bx" x="110" y="131" width="12" height="10"/><text class="t2" x="126" y="140">waiting</text>
<rect class="bad" x="196" y="131" width="12" height="10"/><text class="t2" x="212" y="140">biggest waste: olives waiting to be washed</text>
<text class="t2" x="8" y="172">Illustrative times. Bars: value-adding time out of each step's lead time.</text>
<text class="t" x="8" y="192">Cycle time 17 h · value-adding 10.5 h · waiting 6.5 h (4.5 h at washing)</text>
</svg>`);

PMQ.fig("network", `<svg viewBox="0 0 600 200" role="img" aria-label="Network diagram for onboarding a bottle supplier, with the critical path C then E">
<defs><marker id="ah-nd" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker>
<marker id="ah-nd2" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto-start-reverse"><path class="ah-acc" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<circle class="soft" cx="28" cy="100" r="20"/><text class="t2" x="28" y="104" text-anchor="middle">Start</text>
<rect class="bx" x="66" y="16" width="120" height="44" rx="6"/><text class="t" x="126" y="35" text-anchor="middle">Collect details</text><text class="t2" x="126" y="51" text-anchor="middle">A · 3 days</text>
<rect class="bx" x="212" y="16" width="120" height="44" rx="6"/><text class="t" x="272" y="35" text-anchor="middle">Set up vendor</text><text class="t2" x="272" y="51" text-anchor="middle">B · 2 days</text>
<rect class="bx" x="139" y="78" width="120" height="44" rx="6"/><rect class="acc-s" x="139" y="78" width="120" height="44" rx="6"/><text class="t" x="199" y="97" text-anchor="middle">Order policy</text><text class="t2" x="199" y="113" text-anchor="middle">C · 6 days</text>
<rect class="bx" x="139" y="140" width="120" height="44" rx="6"/><text class="t" x="199" y="159" text-anchor="middle">Logistics plan</text><text class="t2" x="199" y="175" text-anchor="middle">D · 4 days</text>
<rect class="bx" x="360" y="78" width="110" height="44" rx="6"/><rect class="acc-s" x="360" y="78" width="110" height="44" rx="6"/><text class="t" x="415" y="97" text-anchor="middle">First order</text><text class="t2" x="415" y="113" text-anchor="middle">E · 1 day</text>
<circle class="soft" cx="512" cy="100" r="20"/><text class="t2" x="512" y="104" text-anchor="middle">End</text>
<path class="s" d="M42 86 L64 51" marker-end="url(#ah-nd)"/><path class="s" d="M42 114 L136 158" marker-end="url(#ah-nd)"/>
<path class="s" d="M186 38 H209" marker-end="url(#ah-nd)"/><path class="s" d="M332 50 L358 83" marker-end="url(#ah-nd)"/><path class="s" d="M259 162 L358 117" marker-end="url(#ah-nd)"/>
<path class="acc-s" d="M48 100 H136" marker-end="url(#ah-nd2)"/><path class="acc-s" d="M259 100 H357" marker-end="url(#ah-nd2)"/><path class="acc-s" d="M470 100 H489" marker-end="url(#ah-nd2)"/>
<text class="ta" x="360" y="152">critical path: C → E = 7 days</text><text class="t2" x="360" y="170">A → B → E = 6 days · D → E = 5 days</text>
<text class="t2" x="360" y="188">E needs B, C and D finished</text>
<text class="t2" x="8" y="176">Illustrative</text><text class="t2" x="8" y="192">durations</text>
</svg>`);

PMQ.fig("raci", `<svg viewBox="0 0 600 214" role="img" aria-label="RACI matrix for onboarding a new bottle supplier">
<text class="t2" x="8" y="24">TASK</text><text class="t2" x="270" y="24" text-anchor="middle">Purchasing</text><text class="t2" x="352" y="24" text-anchor="middle">Manufacturing</text>
<text class="t2" x="432" y="24" text-anchor="middle">Logistics</text><text class="t2" x="506" y="24" text-anchor="middle">Supplier</text><text class="t2" x="566" y="24" text-anchor="middle">Finance</text>
<line class="s" x1="4" x2="596" y1="34" y2="34"/>
<text class="t" x="8" y="52">Add supplier to</text><text class="t" x="8" y="68">purchasing system</text>
<text class="ta" x="270" y="61" text-anchor="middle">A</text><text class="tc" x="352" y="61" text-anchor="middle">R</text><text class="tc" x="432" y="61" text-anchor="middle">R</text><text class="tc" x="506" y="61" text-anchor="middle">C</text><text class="tc" x="566" y="61" text-anchor="middle">I</text>
<line class="s2" x1="4" x2="596" y1="78" y2="78"/>
<text class="t" x="8" y="96">Set order policy in</text><text class="t" x="8" y="112">planning system</text>
<text class="tc" x="270" y="105" text-anchor="middle">C</text><text class="ta" x="352" y="105" text-anchor="middle">A/R</text><text class="tc" x="432" y="105" text-anchor="middle">I</text><text class="tc" x="506" y="105" text-anchor="middle">C</text><text class="t2" x="566" y="105" text-anchor="middle">–</text>
<line class="s2" x1="4" x2="596" y1="122" y2="122"/>
<text class="t" x="8" y="140">Implement bottle</text><text class="t" x="8" y="156">logistics plan</text>
<text class="tc" x="270" y="149" text-anchor="middle">I</text><text class="tc" x="352" y="149" text-anchor="middle">C</text><text class="ta" x="432" y="149" text-anchor="middle">A/R</text><text class="tc" x="506" y="149" text-anchor="middle">R</text><text class="tc" x="566" y="149" text-anchor="middle">I</text>
<line class="s2" x1="4" x2="596" y1="166" y2="166"/>
<text class="t2" x="8" y="188">R responsible · A accountable (one per task) · C consulted · I informed</text>
<text class="t2" x="8" y="206">Row 1 is the course's example; rows 2 and 3 are illustrative.</text>
</svg>`);

PMQ.course({
  id: "supply",
  title: "Supply Chain Project Management",
  short: "Supply Chain PM",
  source: "Supply Chain Foundations: Project Management",
  blurb: "Analysing supply chain processes (frameworks, SIPOC, flowcharts, systems thinking, value stream maps), choosing waterfall, agile, Lean Six Sigma or a hybrid, and leading projects with the DIRECT model.",
  topics: [

  /* ---------------------------------------------------------------- 1 */
  {
    id: "sc-role",
    title: "The supply chain project manager",
    summary: "Supply chains are complex systems of people, processes and technologies, and the world keeps changing, so they're changed through projects. Supply chain management and project management both need aligned resources and activities, forecasting and risk management. A supply chain project manager plans and executes projects such as starting up a facility or implementing an information system: planning, budgeting and coordinating stakeholders so requirements are understood, risks managed and deadlines met. They partner with purchasing, logistics and transportation, manufacturing, and sales and customer service, and they need to understand how a change in one part of the chain ripples through the rest. The course follows Two Trees Olive Oil, a fictional company in Santa Rosa, California, whose chain runs: grow and harvest, wash, crush and press, filter, bottle, ship to warehouses and distribution centres, sell through retailers and online, and finally use.",
    terms: [
      ["Supply chain project manager", "Someone who plans and executes projects that improve supply chain processes and systems, combining project management skills with supply chain expertise.", "Leading the start-up of a new distribution centre or the roll-out of a new warehouse management system."],
      ["Supply chain", "A complex system of people, processes and technologies, often pictured as linked processes, that gets products from raw materials to customers.", "Olive orchard → mill → bottling → distribution centre → supermarket → your kitchen."],
      ["Two Trees Olive Oil", "The course's fictional case-study company: an olive orchard in Santa Rosa, California, now growing fast on its high-quality oil and transforming its supply chain.", "Every example, from onboarding a bottle supplier to opening an e-commerce fulfilment centre, uses Two Trees."],
      ["Functional areas", "The parts of a business a supply chain project manager partners with, such as purchasing, logistics and transportation, manufacturing, and sales and customer service.", "A new-supplier project needs input from purchasing, manufacturing, logistics and finance."]
    ],
    cards: [
      { d: 1, q: "According to the course, how do supply chains change and adapt?", o: [
        ["Through projects that change them", "Correct. Projects are how changes get made to a supply chain."],
        ["Through annual budget cycles and nothing else", "Budgets fund change, but the change itself happens through projects."],
        ["Automatically, as market conditions shift", "Supply chains are man-made; someone has to change them."],
        ["Only after a supplier fails or a crisis forces the issue", "Disruptions trigger some projects, but most change is planned improvement."]],
        k: "Supply chains are built and rebuilt one project at a time." },
      { d: 1, q: "Which functions does a supply chain project manager typically partner with?", o: [
        ["Purchasing, logistics, manufacturing and sales", "Correct, plus customer service. Supply chain projects cut across functions."],
        ["Mainly the IT department and its software vendors", "IT matters on many projects, but the role spans far more functions."],
        ["Marketing and the legal team only", "They may be stakeholders, but they aren't the core partners the course lists."],
        ["The board of directors and nobody else", "The work happens with the functional leaders, not just the board."]],
        k: "Supply chain projects are cross-functional by nature." },
      { d: 1, q: "What does the course say supply chain management and project management both require?", o: [
        ["Alignment, forecasting and risk management", "Correct. Aligning resources and activities, forecasting and managing risk are common to both."],
        ["Detailed documentation and annual external audits", "Not what the course names as the shared requirements."],
        ["Large, dedicated teams and long project timelines", "Neither discipline requires large teams or long timelines."],
        ["Software development and coding skills on every team", "Coding isn't the common thread; alignment, forecasting and risk are."]],
        k: "Both disciplines live on alignment, forecasting and risk management." },
      { d: 2, q: "In the Two Trees supply chain, what happens right after the olives are pressed?", o: [
        ["The oil is filtered to remove solids", "Correct. Wash, crush, press, then filter, then bottle."],
        ["The olives are harvested by hand or machine", "Harvesting comes first, before the olives reach the mill."],
        ["The oil is shipped to warehouses and distribution centres", "Shipping comes after filtering and bottling."],
        ["The oil is sold to consumers online", "Selling is near the end of the chain."]],
        k: "Grow → harvest → wash, crush, press → filter → bottle → ship → sell → use." },
      { d: 2, q: "Why does a supply chain project manager need supply chain expertise as well as project management skills?", o: [
        ["A change in one place ripples elsewhere", "Correct. You can't manage the project well without seeing its ripple effects."],
        ["Supply chain projects never use project plans", "They do. A project plan is a core tool for this role."],
        ["Standard project management tools don't work in logistics settings", "They work fine; the expertise is about understanding impacts."],
        ["Supply chain staff refuse to work with outsiders", "Not the reason the course gives."]],
        k: "Project skills plus supply chain sense: you need to see the ripples." },
      { d: 2, q: "Your manager suggests bringing in a supply chain project manager as a consultant rather than hiring an employee. Is that unusual, according to the course?", o: [
        ["No. Many supply chain project managers work as consultants.", "Correct. The course says some work as employees and many as consultants."],
        ["Yes. The role only really exists inside large manufacturing firms.", "The role spans manufacturing, retail, logistics, healthcare, technology and government."],
        ["Yes. Consultants can't manage supply chain projects.", "Many do exactly that."],
        ["No, but only government projects use consultants.", "Consultants work across many industries."]],
        k: "Employee or consultant, the role is the same." },
      { d: 3, q: "A retailer asks you to lead the switch from manual stocktakes to RFID tags. Which mix of work best reflects the supply chain project manager's role?", o: [
        ["Plan, budget, align the functions, manage risk", "Correct. Planning, budgeting, stakeholder coordination and risk are the core of the role."],
        ["Configure and test the RFID readers yourself, and skip the stakeholder meetings", "Hands-on work without stakeholder alignment misses the job."],
        ["Hand it to the IT vendor and check in at go-live", "The PM leads design, planning and execution, not just the finish line."],
        ["Focus only on the tag price, since cost is all that matters", "Cost matters, but requirements, risks and deadlines matter too."]],
        k: "The role is coordination and risk, not just one technical slice." }
    ],
    flips: [
      { d: 1, f: "Trace the Two Trees supply chain from orchard to kitchen.", b: "Olives are grown and harvested by hand or machine, then washed, crushed and pressed at the processing facility. The oil is filtered, bottled, shipped to warehouses or distribution centres, sold through supermarkets, specialty stores and online marketplaces, and finally used by consumers. Along the way Two Trees buys supplies, runs manufacturing and manages risks." }
    ]
  },

  /* ---------------------------------------------------------------- 2 */
  {
    id: "frameworks",
    title: "Supply chain process frameworks",
    summary: "It helps to think of a supply chain as a series of connected processes, like links in a chain, and to analyse them you need a framework. The Global Supply Chain Forum (GSCF) framework has eight processes and stresses managing transactions and relationships with customers and suppliers. The SCOR model, curated by the Association for Supply Chain Management, in its latest version, the SCOR Digital Standard, has seven process groups: plan, source, transform, order, fulfill, return and orchestrate. The APQC Process Classification Framework has 13 process groups. They overlap because they describe the same processes. You'll usually use one per project, but companies prefer different ones, so know all three. Frameworks help you pinpoint trade-offs, align decisions with the results you want, and focus on the key metrics.",
    terms: [
      ["GSCF framework", "The Global Supply Chain Forum's eight processes: customer relationship management, supplier relationship management, customer service management, demand management, order fulfilment, manufacturing flow management, product development and commercialisation, and returns management. It emphasises relationships with customers and suppliers.", "Mapping a project's impact on demand management and order fulfilment before changing the ordering system."],
      ["SCOR model", "The Supply Chain Operations Reference model, curated by the Association for Supply Chain Management (ASCM). Its latest version, the SCOR Digital Standard, has seven process groups: plan, source, transform, order, fulfill, return and orchestrate.", "Classifying a new supplier-onboarding project under Source and its warehouse changes under Fulfill."],
      ["APQC Process Classification Framework", "The American Productivity and Quality Center's framework of 13 process groups, from developing vision and strategy to managing external relationships, each broken into processes, activities and tasks.", "A company that already uses APQC for finance and HR uses its “manage supply chain for physical products” group for logistics projects."],
      ["Process framework", "A structured list of the processes needed to create and deliver value, used to analyse a supply chain, spot trade-offs and choose metrics.", "Using SCOR's process groups as the checklist when scoping a project's impact."]
    ],
    cards: [
      { d: 1, q: "How many process groups does the SCOR Digital Standard define, according to the course?", o: [
        ["Seven", "Correct: plan, source, transform, order, fulfill, return, orchestrate."],
        ["Eight", "That's the number of processes in the GSCF framework."],
        ["Thirteen", "That's the number of process groups in the APQC framework."],
        ["Five", "Five is the number of elements in a SIPOC."]],
        k: "SCOR 7, GSCF 8, APQC 13." },
      { d: 1, q: "Which framework has eight processes and emphasises relationships with customers and suppliers?", o: [
        ["The Global Supply Chain Forum framework", "Correct. GSCF stresses managing transactions and relationships between companies."],
        ["The Supply Chain Operations Reference model", "SCOR has seven process groups."],
        ["The APQC Process Classification Framework", "APQC has 13 process groups."],
        ["The DIRECT project leadership model", "DIRECT is a project leadership framework, not a process framework."]],
        k: "GSCF = eight processes, relationship-focused." },
      { d: 1, q: "Which list matches the SCOR Digital Standard's process groups?", o: [
        ["Plan, source, transform, order, fulfill, return, orchestrate", "Correct, as the course lists them."],
        ["Plan, source, make, deliver, return, enable", "Tempting: these are the process groups from earlier SCOR versions. The course uses the newer Digital Standard."],
        ["Plan, purchase, produce, warehouse, distribute, return, enable", "Plausible-sounding, but these aren't SCOR's process groups."],
        ["Suppliers, inputs, process, outputs, customers", "That's SIPOC."]],
        k: "SCOR Digital Standard: plan, source, transform, order, fulfill, return, orchestrate." },
      { d: 1, q: "Who curates the SCOR model?", o: [
        ["The Association for Supply Chain Management (ASCM)", "Correct. ASCM maintains the SCOR model as a reference for supply chain processes."],
        ["The Global Supply Chain Forum", "GSCF maintains its own framework."],
        ["The American Productivity and Quality Center", "APQC maintains the Process Classification Framework."],
        ["The International Organization for Standardization", "ISO publishes standards, but not SCOR."]],
        k: "SCOR belongs to ASCM." },
      { d: 2, q: "Why does the course say it's worth knowing all three frameworks if you'll usually use only one per project?", o: [
        ["Different companies prefer different frameworks", "Correct. You'll meet whichever one your client or employer uses."],
        ["Each project must be checked against all three", "You'll usually use just one on a given project."],
        ["They describe completely different processes", "They're very similar, since they describe the same processes."],
        ["Auditors require all three to be documented", "Not something the course mentions."]],
        k: "Know all three; use the one your organisation speaks." },
      { d: 2, q: "Your company's finance and HR teams already organise their processes with APQC. You're scoping a warehouse project. What's the sensible choice?", o: [
        ["Use APQC, so everyone shares one language", "Correct. Companies prefer different frameworks; matching the one already in use keeps communication simple."],
        ["Introduce SCOR, since APQC can't describe supply chains", "APQC has a whole process group for managing supply chains for physical products."],
        ["Use all three frameworks side by side so that no process is ever missed", "The course says you'll usually use one per project."],
        ["Skip frameworks; they add nothing to project scoping", "Frameworks help pinpoint trade-offs and pick the right metrics."]],
        k: "Pick the framework your organisation already uses." },
      { d: 2, q: "Which benefits of using a process framework does the course name?", o: [
        ["Spotting trade-offs and focusing on the right metrics", "Correct, along with aligning decisions with the results you want."],
        ["Removing the need for a detailed project plan", "A framework analyses processes; it doesn't replace planning."],
        ["Guaranteeing the project comes in under budget", "No framework guarantees budget outcomes."],
        ["Replacing interviews with the project's stakeholders", "You still need stakeholders' input."]],
        k: "Frameworks sharpen trade-offs and metrics." },
      { d: 3, q: "A project will change how online returns are processed. Using the GSCF framework, which process should you analyse first?", o: [
        ["Returns management", "Correct. It's one of GSCF's eight processes and the one most directly affected."],
        ["Product development and commercialisation", "That covers bringing products to market, not handling returns."],
        ["Manufacturing flow management", "Returns may touch manufacturing later, but it isn't the starting point."],
        ["Supplier relationship management", "Supplier relationships aren't the core of a customer returns change."]],
        k: "Map the change to the framework process it touches most." }
    ],
    flips: [
      { d: 2, f: "Name the three supply chain process frameworks and how many processes or groups each has.", b: "GSCF (Global Supply Chain Forum): eight processes, focused on customer and supplier relationships. SCOR Digital Standard (curated by ASCM): seven process groups: plan, source, transform, order, fulfill, return, orchestrate. APQC Process Classification Framework: 13 process groups." }
    ]
  },

  /* ---------------------------------------------------------------- 3 */
  {
    id: "sipoc",
    title: "SIPOC analysis",
    summary: "You can't improve a process until you understand how it's supposed to work. A SIPOC analyses any supply chain process through five elements: suppliers, inputs, process, outputs and customers. For printing an invoice: the suppliers are the makers of the printer, toner and paper, plus the sales department, which supplies the order information; the inputs are those things and that information; the process is entering the data, printing and collecting the invoice; the output is the printed invoice; the customer is whoever asked for it. For Two Trees making olive oil: suppliers are olive orchards and equipment suppliers; inputs are olives, equipment and employees who know how to use it; the process turns olives into oil one step at a time; outputs are olive oil plus waste and emissions; customers are wholesalers, retailers and consumers.",
    figs: ["sipoc"],
    terms: [
      ["SIPOC", "A tool for quickly analysing a process through five elements: Suppliers, Inputs, Process, Outputs and Customers.", "A one-page SIPOC of a store's weekly drinks reorder before changing it.", 0, "sipoc"],
      ["Suppliers (SIPOC)", "The people or organisations that provide what a process needs, including information.", "For printing an invoice: the printer, toner and paper makers, and the sales department supplying order details."],
      ["Inputs (SIPOC)", "The things and information the process receives from its suppliers.", "Olives, manufacturing equipment and employees trained to use it."],
      ["Outputs (SIPOC)", "What the process produces, including by-products that are easy to overlook, such as waste and emissions.", "Olive oil, plus olive pulp waste and the mill's emissions."]
    ],
    cards: [
      { d: 1, q: "What does SIPOC stand for?", o: [
        ["Suppliers, inputs, process, outputs, customers", "Correct. Five elements found in every process."],
        ["Scope, investigate, plan, operate, close", "Not a real acronym in this course."],
        ["Sales, inventory, procurement, orders, cash", "These are business areas, not the SIPOC elements."],
        ["Standards, inspection, process, output, compliance", "Not what SIPOC stands for."]],
        k: "S-I-P-O-C: suppliers, inputs, process, outputs, customers." },
      { d: 1, q: "In the course's invoice example, who supplies the information needed to print the invoice?", o: [
        ["The sales department", "Correct. Information has suppliers too, not just physical things."],
        ["The printer manufacturer", "It supplies a physical input, the printer, not the order information."],
        ["The customer receiving the invoice", "The customer receives the output; they aren't the information supplier here."],
        ["The paper supplier", "It supplies paper, a physical input."]],
        k: "Information has suppliers, just like materials." },
      { d: 1, q: "Why does the course recommend a SIPOC before trying to improve a process?", o: [
        ["You can't improve a process you don't understand yet", "Correct. SIPOC shows how the process is supposed to work."],
        ["It replaces the need to talk to the suppliers", "A SIPOC identifies suppliers; it doesn't replace talking to them."],
        ["It calculates how much the improvement will save", "SIPOC is descriptive; it doesn't produce savings figures."],
        ["Every quality standard requires one first", "Not the reason the course gives."]],
        k: "Understand first, improve second." },
      { d: 2, q: "In the olive oil SIPOC, which of these is an output that's easy to forget?", o: [
        ["Waste and emissions", "Correct. The course points out by-products are outputs too."],
        ["Trained employees and equipment", "Both are inputs, not outputs."],
        ["Olive orchards", "Orchards are suppliers."],
        ["Wholesalers", "Wholesalers are customers."]],
        k: "List every output, including the ones nobody wants." },
      { d: 2, q: "In the olive oil SIPOC, where do “employees who know how to use the equipment” belong?", o: [
        ["Inputs", "Correct. The course lists them as an input, alongside olives and equipment."],
        ["Suppliers", "Suppliers are the sources, such as orchards and equipment makers."],
        ["Outputs", "Outputs are what the process produces, like oil and waste."],
        ["Customers", "Customers receive the outputs."]],
        k: "What the process uses is an input, whether it's olives or skills." },
      { d: 2, q: "You're mapping your store's weekly soft-drink reorder with a SIPOC. Who is the customer of this process?", o: [
        ["The store team that needs the shelves stocked", "Correct. They're the ones the process serves."],
        ["The drinks distributor that delivers the order", "The distributor is a supplier."],
        ["The sales data from the till system", "Sales data is an input."],
        ["The purchase order that gets sent", "The purchase order is an output."]],
        k: "The customer is whoever the process exists to serve." },
      { d: 3, q: "A team's SIPOC for a returns process lists only “returned goods” as the output. What's the most useful challenge?", o: [
        ["What else comes out: refunds, restocked items, waste and data?", "Correct. Like waste and emissions in the olive oil example, outputs are often broader than the obvious one."],
        ["Remove the suppliers column, since a returns process has none", "Returns have suppliers, such as the customer and the courier."],
        ["Replace the outputs with the project budget", "The budget isn't part of a SIPOC."],
        ["Outputs don't matter much; focus on the process", "Outputs show what the process really produces, so they matter."]],
        k: "Push past the obvious output; the hidden ones often matter most." }
    ],
    flips: [
      { d: 1, f: "Build a SIPOC for printing a customer invoice.", b: "Suppliers: the printer, toner and paper makers, plus the sales department for the order details. Inputs: printer, toner, paper, prices and quantities. Process: enter the information, select print, collect the invoice. Output: the printed invoice. Customer: the person who requested it." },
      { d: 2, f: "SIPOC a process from store work: receiving a supplier delivery.", b: "For example. Suppliers: the distributor and its driver, plus whoever raised the order. Inputs: the delivery, the invoice and the purchase order. Process: check the goods against the order, note shortages or damage, put stock away, file the paperwork. Outputs: stock in place, a signed delivery note and any claims. Customers: the store team and its shoppers." }
    ]
  },

  /* ---------------------------------------------------------------- 4 */
  {
    id: "flowcharts",
    title: "Flowcharts and swim lanes",
    summary: "Writing a process as a list is easy, but a list isn't the easiest way for someone else to understand it. A flowchart draws the steps, each with a name and an ID number, using shapes for different kinds of activity: a small circle for the start or end, a rectangle for work being done, a diamond for a decision. In Two Trees' receiving process, a truck arrives, security notifies the receiving supervisor, the supervisor decides whether the truck can pull up to the dock door, the truck moves to the door, is unloaded, the products are received into the warehouse management system, and the truck departs. A plain flowchart doesn't show who does each step. A cross-functional flowchart, or swim lane, does, which makes it the best choice for supply chain processes that involve many functions.",
    figs: ["flowchart"],
    terms: [
      ["Flowchart", "A diagram of the steps in a process, each with a name and ID number, using shapes for different kinds of activity.", "Mapping how a delivery truck is received at the warehouse, from arrival to departure."],
      ["Rectangle (flowchart)", "The shape for an action: work that needs to be done.", "“Security notifies the receiving supervisor.”"],
      ["Diamond (flowchart)", "The shape for a decision point, with a separate path for each answer.", "“Can the truck pull up to the dock door?” Yes or no."],
      ["Swim lane (cross-functional flowchart)", "A flowchart split into lanes, one per person or function, so you can see who is responsible for each step.", "Lanes for the driver, security, the supervisor and the warehouse team on the same receiving process.", 0, "flowchart"]
    ],
    cards: [
      { d: 1, q: "In a flowchart, what does a diamond usually mean?", o: [
        ["A decision has to be made", "Correct. Each answer leads down its own path."],
        ["Some work needs to be done", "That's a rectangle."],
        ["The process starts or ends", "That's a small circle."],
        ["A document is produced", "Some notations have a document shape, but a diamond is a decision."]],
        k: "Circle = start or end. Rectangle = action. Diamond = decision." },
      { d: 1, q: "What does a swim lane show that a plain flowchart doesn't?", o: [
        ["Who is responsible for each step", "Correct. Each lane belongs to a person or function."],
        ["The order the steps happen in", "A plain flowchart already shows the order."],
        ["Where the decisions are made", "Decision diamonds appear on plain flowcharts too."],
        ["Where the process starts and ends", "Plain flowcharts show the start and end."]],
        k: "Swim lanes add the “who” to the “what” and “when”." },
      { d: 1, q: "What does the course say each step in a flowchart should have?", o: [
        ["A name and an ID number", "Correct. IDs make steps easy to refer to."],
        ["A cost and a deadline", "Not part of a basic flowchart."],
        ["An owner and a budget", "Owners appear in swim lanes; budgets don't belong on a flowchart."],
        ["A colour and an icon", "Shapes carry meaning; colours and icons aren't required."]],
        k: "Name it and number it." },
      { d: 2, q: "Look at the receiving process. What happens right after the supervisor decides the truck can proceed?", fig: "flowchart", o: [
        ["The truck moves to the dock door", "Correct. The “yes” path goes back to the driver's lane."],
        ["Security notifies the supervisor", "That happens before the decision."],
        ["Products are received into the WMS", "That comes after unloading."],
        ["The truck departs", "Departing is the last step."]],
        k: "Follow the arrows from the decision diamond." },
      { d: 2, q: "Why are swim lanes especially useful for supply chain processes?", o: [
        ["They involve people from many functions", "Correct. Swim lanes make every hand-off and owner visible."],
        ["Supply chain processes rarely include decisions", "They include plenty of decisions."],
        ["Swim lanes calculate how long each step takes, like a Gantt chart", "Timing belongs on a value stream map, not a swim lane."],
        ["Written lists are banned in most warehouses", "Lists are fine; they're just harder to follow."]],
        k: "Many functions, many hand-offs: draw the lanes." },
      { d: 2, q: "A new colleague keeps mixing up the steps of your returns process. What does the course suggest?", o: [
        ["Draw it as a flowchart", "Correct. A picture of the steps is easier to grasp than a list."],
        ["Give them a longer, more detailed written list of the steps", "More words rarely fix a list that's hard to follow."],
        ["Ask them to memorise the steps in order", "Memorising doesn't build understanding of the flow."],
        ["Show them the SCOR process groups", "A framework is too high-level for one process's steps."]],
        k: "When a list confuses people, draw the process." },
      { d: 3, q: "In a swim lane for a new e-commerce order process, the “check stock” step sits in no lane because nobody is sure who does it. What has the swim lane revealed?", o: [
        ["An ownership gap: a step nobody is responsible for", "Correct. Swim lanes expose unowned steps before they cause failures."],
        ["That the step isn't needed and can be deleted", "Checking stock is essential; the issue is ownership."],
        ["That the flowchart needs more decision diamonds", "Adding decisions doesn't assign an owner."],
        ["That swim lanes don't work for online orders", "They work; this one just did its job."]],
        k: "A step without a lane is a risk without an owner." }
    ],
    flips: [
      { d: 2, f: "Describe the receiving process as a swim lane, lane by lane.", b: "Driver: truck arrives (start), moves to the dock door, departs (end). Security: notify the receiving supervisor. Supervisor: decide whether the truck can pull up to the dock door (diamond). Warehouse: unload the truck, receive the products into the warehouse management system." }
    ]
  },

  /* ---------------------------------------------------------------- 5 */
  {
    id: "systems",
    title: "Systems thinking",
    summary: "“For every complex problem, there's an answer that is clear, simple, and wrong” (H. L. Mencken). Linear, cause-and-effect thinking is useful but limited. Systems thinking analyses the whole supply chain as a system rather than its parts. Supply chains aren't really chains: they're complex networks with many interactions and dependencies, where things change quickly and small changes can have huge impacts. If Two Trees has delays, systems thinking looks for the root cause (raw material availability, manufacturing efficiency, transport reliability) and the knock-on effects; even the weather affects the harvest, and so manufacturing and transport. If raw material prices rise, simply raising prices could cut demand and revenue and leave profit worse. Better strategies include new technology, better communication and coordination, and collaboration and partnerships.",
    figs: ["systems-loop"],
    terms: [
      ["Systems thinking", "Analysing the entire supply chain as a system of interactions and dependencies, rather than looking at its parts in isolation.", "Before raising prices, checking how demand, revenue and profit will respond, not just the cost line.", 0, "systems-loop"],
      ["Linear thinking", "Simple cause-and-effect thinking that expects the future to look like the past and small changes to have small effects. Useful, but limited for supply chains.", "“Costs went up 10%, so we'll raise prices 10%.”"],
      ["Root cause", "The underlying reason a problem happens, as opposed to its symptoms.", "Late deliveries turn out to be caused by a packing-line breakdown, not the courier."],
      ["Supply network", "The course's point that supply chains aren't chains at all but complex networks with many interactions and dependencies.", "A bottle shortage at one supplier delays bottling, which delays shipments to three distribution centres."]
    ],
    cards: [
      { d: 1, q: "What does systems thinking analyse?", o: [
        ["The whole supply chain as one system", "Correct, rather than its individual parts in isolation."],
        ["One department's efficiency at a time", "That's the parts-by-parts view systems thinking moves beyond."],
        ["Only the IT systems a company uses", "“System” here means the whole supply chain, not software."],
        ["The cheapest supplier for each item", "Price comparisons are a narrow, linear view."]],
        k: "Look at the whole, not just the parts." },
      { d: 1, q: "According to the course, supply chains are better described as…", o: [
        ["Complex networks with many interactions and dependencies", "Correct. They aren't really chains at all."],
        ["Simple chains where each link affects only the next", "That's the linear picture the course challenges."],
        ["Isolated departments that rarely interact", "The parts interact constantly."],
        ["Straight lines from supplier to customer", "Real supply chains branch and loop."]],
        k: "Not a chain: a network." },
      { d: 1, q: "What point does the Mencken quote make in this lesson?", o: [
        ["The clear, simple answer is often wrong", "Correct. Complex systems punish simple, linear fixes."],
        ["The simplest answer to a complex problem is usually the right one", "The quote says the opposite."],
        ["Complex problems can't be solved at all", "They can, with systems thinking."],
        ["Supply chains should always be kept simple", "The point is about how we think, not about simplifying the chain."]],
        k: "Distrust the clear, simple answer to a complex problem." },
      { d: 2, q: "Two Trees' raw material costs rise. Why might simply raising prices backfire?", o: [
        ["Demand and revenue may fall, cutting profit", "Correct. That's the course's systems-thinking example."],
        ["Customers rarely notice small price changes", "If they don't notice, there's no backfire; that's not the course's point."],
        ["Suppliers will usually cut their own prices to win back the business", "That's not a likely effect, and not the course's point."],
        ["Higher prices always raise profit in the end", "Not if demand falls enough."]],
        k: "Trace the knock-on effects before pulling the obvious lever." },
      { d: 2, q: "Two Trees is seeing delivery delays. What would a systems-thinking approach do first?", o: [
        ["Find the root cause and check knock-on effects", "Correct. It looks at causes and impacts across the chain."],
        ["Replace the transport company with another one", "That assumes the cause without finding it."],
        ["Add more trucks until the delays disappear", "Treating a symptom may not touch the cause."],
        ["Wait for the delays to sort themselves out", "Waiting isn't analysis."]],
        k: "Root cause first, then the ripples." },
      { d: 2, q: "Which factor does the course say Two Trees must consider because it ripples through manufacturing and transport?", o: [
        ["How the weather affects the olive harvest", "Correct. Weather → harvest → manufacturing and transport needs."],
        ["Which supplier has the cheapest labels", "A narrow purchasing question, not a system-wide ripple."],
        ["The design of the company website", "Not the example the course uses."],
        ["How many shifts the office staff work", "Office shifts don't drive the harvest chain."]],
        k: "Upstream conditions shape everything downstream." },
      { d: 3, q: "A retailer cuts safety stock to save warehouse costs. Three months later a port delay leaves shelves empty and online orders are cancelled. Which systems-thinking lesson applies?", o: [
        ["A local saving caused a bigger cost elsewhere", "Correct. Optimising one part hurt the whole system."],
        ["Warehouse costs should never be cut for any reason", "Cost cuts can be fine if the system-wide effects are understood."],
        ["Port delays are impossible to plan for, so they can safely be ignored", "Disruptions can be planned for; that's the point of buffers."],
        ["Online orders and store stock never affect each other", "They're tightly linked, which is the problem here."]],
        k: "Optimising a part can sub-optimise the whole." },
      { d: 3, q: "Which strategies does the course suggest once you treat the supply chain as a system?", o: [
        ["Technology, coordination and partnerships", "Correct. Improving how the parts work together improves the whole."],
        ["Cutting every supplier's price by the same percentage", "A blunt, linear move, not a systems strategy."],
        ["Centralising every decision in one department", "Coordination isn't the same as centralising everything."],
        ["Holding extra inventory at every site to absorb any shock that comes", "Buffers have a place, but the course's strategies are about working better together."]],
        k: "Systems problems need system-wide fixes." }
    ],
    flips: [
      { d: 2, f: "Explain systems thinking with the Two Trees price example.", b: "Raw material costs rise, so the obvious move is to raise prices. But higher prices can lower demand and reduce revenue, so profitability could end up even worse. Systems thinking traces those knock-on effects across the whole chain before choosing a response." }
    ]
  },

  /* ---------------------------------------------------------------- 6 */
  {
    id: "vsm",
    title: "Value stream mapping",
    summary: "Value stream mapping analyses the flow of materials and information needed to produce a product or service, drawn as a picture of every step from obtaining raw materials to delivering the finished product. Its key parts are the process steps, a flow diagram showing how each step links to the next, the value stream showing where value is added, the cycle time (as the course defines it, the total time from start to finish) and the lead times (as the course defines them, the time to start and complete each step). The aim is to find and eliminate waste and improve efficiency: hidden problems stand out, people see the bigger picture, and opportunities for automation and future improvements become clearer. In Two Trees' olive oil map, the washing step is where you'd look first. Lean companies often build value stream maps together at an event called a kaizen.",
    figs: ["vsm"],
    terms: [
      ["Value stream mapping (VSM)", "A graphical analysis of the flow of materials and information needed to produce a product or service, from raw materials to delivery, used to find and eliminate waste.", "Mapping olives to bottled oil and spotting long waits at washing.", 0, "vsm"],
      ["Value stream", "The part of a value stream map that shows where value is actually added.", "Pressing and filtering add value; olives sitting in bins waiting to be washed don't."],
      ["Cycle time (course definition)", "In the course, the total time to complete the process from start to finish. Many lean practitioners call that lead time and use cycle time for a single step, so check which way your organisation uses the terms.", "Olives in to bottled oil out: 17 hours."],
      ["Lead time (course definition)", "In the course, the time between starting and completing each step. Many lean practitioners use the two terms the other way round, so confirm the definitions with your team.", "Washing takes 5 hours from start to finish, though only 30 minutes is actual washing."],
      ["Kaizen", "A lean improvement event that brings people together, often to build a value stream map and improve a process.", "A two-day kaizen with mill staff, quality and logistics to map and fix the washing bottleneck."]
    ],
    cards: [
      { d: 1, q: "What does value stream mapping analyse?", o: [
        ["How materials and information flow", "Correct, from raw materials to delivery."],
        ["Only how much each step costs, step by step", "Cost may feature, but VSM is about flow."],
        ["Who is responsible for each step, and in which team or department", "Responsibility is what a swim lane shows."],
        ["Which supplier offers the best price per unit", "That's a sourcing comparison, not a VSM."]],
        k: "VSM follows materials and information through the whole process." },
      { d: 1, q: "What is the main purpose of value stream mapping?", o: [
        ["To find and eliminate waste and improve efficiency", "Correct. Mapping each step shows where the waste and delays are, so you can remove them."],
        ["To find out which team is to blame for delays", "It exposes problems in the process, not people to blame."],
        ["To replace the project plan with a single picture", "A VSM analyses a process; it isn't a project plan."],
        ["To document every employee's daily tasks in detail", "It maps process steps and flow, not individual task lists."]],
        k: "VSM exists to find waste." },
      { d: 1, q: "What is a kaizen, in this lesson?", o: [
        ["A lean event to map and improve a process", "Correct. Value stream maps are often built at kaizen events."],
        ["A quality certificate awarded to lean factories", "Kaizen is an improvement event, not a certificate."],
        ["A software tool for drawing and sharing value stream maps", "You can use software, but kaizen is the event."],
        ["A type of long-term supplier contract", "Not a contract type."]],
        k: "Kaizen = people together, improving a process." },
      { d: 2, q: "Look at the olive oil value stream map. Where should the improvement effort start?", fig: "vsm", o: [
        ["Washing: 5 hours, but only 30 minutes adds value", "Correct. Most of the waiting on the map sits at washing, and the course points there too."],
        ["Harvest, because it has the longest lead time of all", "It's the longest step, but most of its time adds value."],
        ["Crushing, because it's the fastest step on the map", "A fast step with no waiting isn't where the waste is."],
        ["Bottling, because it's the last step before shipping", "Position in the chain doesn't make it the bottleneck."]],
        k: "Look for the biggest gap between time taken and value added." },
      { d: 2, q: "Using the course's definitions, what's the difference between cycle time and lead time on a value stream map?", o: [
        ["Cycle time is the whole process start to finish; lead time is each step's", "Correct by the course's definitions."],
        ["Cycle time is each step's time; lead time is the whole process, start to finish", "That's how many lean practitioners use the terms, but the course defines them the other way round. Check which your team uses."],
        ["They're two names for exactly the same measure", "They measure different spans of time."],
        ["Cycle time measures cost; lead time measures quality", "Both are time measures."]],
        k: "Know the course's definitions, and check your organisation's." },
      { d: 2, q: "Besides cutting waste, which benefits of value stream mapping does the course mention?", o: [
        ["Hidden problems stand out and automation chances become visible", "Correct, and people see the bigger picture."],
        ["It removes the need for any process documentation", "A VSM is itself a form of documentation."],
        ["It guarantees the process will run without errors from then on", "It finds problems; it doesn't guarantee perfection."],
        ["It replaces customer feedback on the product", "It's about the process, not customer opinion."]],
        k: "A good map makes the invisible visible." },
      { d: 3, q: "A distribution centre adds robots to speed up picking, but orders still wait hours at packing. What would a value stream map most likely show?", o: [
        ["Packing is the bottleneck, so faster picking just adds waiting", "Correct. Speeding up a non-bottleneck step moves the waiting downstream."],
        ["The robots themselves are causing all of the delay", "The delay is at packing, after the robots."],
        ["Picking still needs to be sped up further, with even more robots", "Faster picking would only make the queue at packing longer."],
        ["Value stream maps can't include automated steps", "They can; the course even mentions finding automation opportunities."]],
        k: "Improve the bottleneck, or you just move the waiting." }
    ],
    flips: [
      { d: 2, f: "List the five key parts of a value stream map from the course.", b: "Process steps (every step, start to finish), a flow diagram (how each step links to the next), the value stream (where value is added), the cycle time (the total time start to finish, by the course's definition) and the lead times (the time to start and complete each step)." }
    ]
  },

  /* ---------------------------------------------------------------- 7 */
  {
    id: "sc-waterfall",
    title: "Waterfall tools: WBS, critical path, Gantt, RACI",
    summary: "Going over a waterfall is a one-way journey: linear and sequential. When Two Trees onboards a new glass-bottle supplier, you describe the current state and the future state, then define requirements by interviewing stakeholders, benchmarking with other companies and doing business analysis (here: the supplier plus the purchasing, logistics and manufacturing teams). Next comes a work breakdown structure of deliverables or milestones and their tasks: add the supplier to the purchasing system, set up an order policy in the manufacturing planning system, and implement a logistics plan for the bottles. From the WBS you can build a network diagram (how long the project takes and which tasks are on the critical path, directly affecting the completion date), a Gantt chart (a calendar laid out horizontally that shows overlapping activities and holiday effects) and a RACI matrix (Responsible, Accountable, Consulted, Informed, with one and only one person accountable for each task).",
    figs: ["network", "raci"],
    terms: [
      ["Current state / future state", "How things work today, and how you want them to work when the project is done. Waterfall projects define both before planning the route between them.", "Today: bottles come from one supplier, ordered by email. Future: a second supplier, with orders set up in the planning system."],
      ["Requirements gathering", "Defining what the future state must deliver by interviewing stakeholders, benchmarking with other companies and doing business analysis.", "Interviewing the new supplier and the purchasing, logistics and manufacturing teams."],
      ["Network diagram", "A diagram built from the WBS that shows task dependencies, how long the project will take and which tasks are on the critical path.", "Boxes for each onboarding task, linked by arrows, with the longest path highlighted.", 0, "network"],
      ["Critical path", "The sequence of tasks that directly determines the project's completion date. A delay on any of them delays the whole project.", "If setting the order policy takes 6 days and everything else fits alongside it, that task and the first order form the critical path."],
      ["RACI matrix", "A chart of each person's role in every task: Responsible (does the work; can be several), Accountable (exactly one per task), Consulted (gives input) and Informed (kept up to date).", "Purchasing accountable for adding the supplier; manufacturing and logistics responsible for supplying information; the supplier consulted; finance informed.", 0, "raci"],
      ["Deliverable", "A significant output or milestone in a WBS, broken down into smaller tasks.", "“Supplier set up in the purchasing system.”"]
    ],
    cards: [
      { d: 1, q: "In a RACI matrix, how many people should be accountable for each task?", o: [
        ["Exactly one", "Correct. One and only one A per task."],
        ["As many as needed", "That's true of Responsible, not Accountable."],
        ["At least two, for backup", "Two As blur ownership."],
        ["None; accountability is shared by all", "Shared accountability usually means nobody owns it."]],
        k: "One task, one A." },
      { d: 1, q: "What does the critical path show?", o: [
        ["The tasks that directly drive the project's completion date", "Correct. Delay one and the whole project slips."],
        ["The most expensive tasks, which need the closest budget control", "Cost doesn't define the critical path."],
        ["The tasks with the most people assigned", "Staffing doesn't define it either."],
        ["The riskiest tasks for the supplier", "Risk matters, but the critical path is about schedule."]],
        k: "Critical path = the chain of tasks that sets the end date." },
      { d: 1, q: "How does the course describe a Gantt chart?", o: [
        ["A calendar laid out horizontally", "Correct. It shows what happens when, and what overlaps."],
        ["A list of who's responsible for each task", "That's a RACI matrix."],
        ["A diagram of where value is added", "That's a value stream map."],
        ["A chart of costs against budget", "Not how the course describes it."]],
        k: "Gantt = a sideways calendar of the work." },
      { d: 1, q: "How are requirements defined for the bottle-supplier project, according to the course?", o: [
        ["Interviews, benchmarking and business analysis", "Correct, including the supplier and the purchasing, logistics and manufacturing teams."],
        ["Copying the previous supplier's contract and requirements word for word", "Requirements come from today's stakeholders, not an old contract."],
        ["Letting the new supplier decide everything for you", "The supplier is one stakeholder among several."],
        ["Waiting to see what goes wrong with the first delivery", "Waterfall defines requirements before work starts."]],
        k: "Requirements come from stakeholders, benchmarks and analysis." },
      { d: 2, q: "Look at the network diagram. Which tasks are on the critical path?", fig: "network", o: [
        ["C (order policy) and E (first order)", "Correct. C → E takes 7 days, the longest path; A → B → E takes 6 and D → E takes 5."],
        ["A, B and E, because they're in sequence", "Three tasks in a row look long, but they total only 6 days."],
        ["D and E, because logistics is complex", "D → E totals 5 days, the shortest path."],
        ["All five tasks, since each one matters", "Every task matters, but only the longest path sets the end date."]],
        k: "Add up each path; the longest one is critical." },
      { d: 2, q: "Look at the RACI matrix. For “Add supplier to purchasing system,” what is the supplier's role?", fig: "raci", o: [
        ["Consulted: they give input", "Correct, as in the course's example."],
        ["Accountable: they own the task", "Purchasing is accountable for this task."],
        ["Responsible: they do the work", "Manufacturing and logistics are responsible for supplying information."],
        ["Informed: they're only told the result", "Finance is the informed party here."]],
        k: "Read across the row: one A, any number of Rs, Cs and Is." },
      { d: 2, q: "Why does the course say a Gantt chart is useful on supply chain projects?", o: [
        ["It shows which activities overlap and how holidays affect the schedule", "Correct. A Gantt chart shows activities on a calendar, so overlaps and holiday effects are easy to see."],
        ["It shows who is responsible and accountable for each task, and when", "That's the RACI matrix."],
        ["It calculates the project's return on investment", "ROI belongs in the business case."],
        ["It shows where value is added in a process", "That's a value stream map."]],
        k: "Gantt charts show timing, overlaps and calendar effects." },
      { d: 3, q: "A RACI for a warehouse move lists both the operations manager and the IT manager as “A” for the cut-over task. What's the problem, and the fix?", o: [
        ["Two people accountable; pick one A and make the other R or C", "Correct. Each task needs one, and only one, accountable person."],
        ["Nothing, because shared accountability is always safer on big tasks", "Shared accountability blurs who makes the final call."],
        ["Add a third A so tied decisions can be voted on", "More As make the problem worse."],
        ["Remove the cut-over task from the RACI entirely", "The riskiest task is the one that most needs clear roles."]],
        k: "Two As means nobody is really accountable." },
      { d: 3, q: "In the network diagram, the order-policy task slips by 2 days and logistics planning slips by 1 day. What happens to the completion date?", fig: "network", o: [
        ["It moves out 2 days; the logistics slip still fits in its slack", "Correct. C → E becomes 9 days; D → E becomes only 6, still shorter."],
        ["It moves out 3 days, because both slips add up along the schedule", "Slips only add up along the same path."],
        ["It doesn't move, because only the cost is affected", "A slip on the critical path always moves the end date."],
        ["It moves out 1 day, matching the smaller slip", "The critical path slipped by 2 days."]],
        k: "Only slips on the critical path move the finish, unless another path becomes longer." }
    ],
    flips: [
      { d: 1, f: "What are the four letters of RACI, and the one rule about A?", b: "Responsible: does the work (there can be several). Accountable: owns the outcome (exactly one per task). Consulted: gives input. Informed: is kept up to date. Every task gets one, and only one, A." },
      { d: 2, f: "From one work breakdown structure, which three tools can you build, and what does each show?", b: "A network diagram (dependencies, total duration and the critical path), a Gantt chart (a horizontal calendar showing overlaps and holiday effects) and a RACI matrix (who is responsible, accountable, consulted and informed for each task)." }
    ]
  },

  /* ---------------------------------------------------------------- 8 */
  {
    id: "sc-agile-hybrid",
    title: "Agile and hybrid supply chain projects",
    summary: "Waterfall breaks a goal into deliverables, milestones, activities and tasks, orders them by dependency (harvest, then wash, then press) and adds up durations, so it pays to document everything first. Agile spends less time planning each step and focuses on what can be built in the time available, in small time-boxed sprints that each deliver something valuable. Planning takes time and raises upfront cost, so agile suits work you'll figure out as you go. Two Trees' e-commerce site starts from a user story (“As a customer, I want to view and order Two Trees' products online so that I can pay for them directly and have them delivered to my home”), sets requirements (show only available products, easy on a computer or phone, high security) and builds in sprints of one to four weeks: secure ordering page first, then the product catalogue, then support for different browsers and devices. Big projects often need a hybrid. For Two Trees' e-commerce fulfilment centre, the building and equipment run waterfall, the order, warehouse and transportation management systems are changed in three agile sprints, and a cross-functional team trained in Lean Six Sigma runs DMAIC projects on new process issues.",
    terms: [
      ["Hybrid approach", "Combining project methods in one project, such as a waterfall plan overall, agile sprints for software and Lean Six Sigma for process issues.", "A new fulfilment centre: construction by waterfall, system changes by sprint, quality issues by DMAIC."],
      ["Iterative and incremental development", "Agile's approach: build the product piece by piece in repeated cycles, adapting the plan as you learn instead of planning everything up front.", "Two Trees builds its online store one feature per sprint."],
      ["OMS, WMS, TMS", "Order management system, warehouse management system and transportation management system: the three systems Two Trees reconfigures, one per sprint, for its fulfilment centre.", "Sprint 1 changes the OMS, sprint 2 the WMS, sprint 3 the TMS."],
      ["E-commerce fulfilment centre", "A facility designed to pick individual products and ship small parcels to consumers, instead of moving whole pallets to retailers.", "Two Trees needs one once it starts selling direct to consumers online."]
    ],
    cards: [
      { d: 1, q: "When does the course say waterfall is often the best approach?", o: [
        ["When you know what the end result looks like", "Correct. When the end result is clear, you can plan the work in sequence up front."],
        ["When you'll need to experiment and learn as you go along the way", "That points to agile."],
        ["When the team is spread across several countries", "Location doesn't decide the method."],
        ["When there's little or no budget for planning", "Waterfall relies on upfront planning."]],
        k: "Known end result → waterfall. Figure it out as you go → agile." },
      { d: 1, q: "What did Two Trees build in its first e-commerce sprint?", o: [
        ["The secure ordering page", "Correct. It was the top priority."],
        ["The product catalogue", "That came in sprint two."],
        ["Support for different devices", "That came in sprint three."],
        ["The warehouse management system", "That belongs to the fulfilment-centre project."]],
        k: "Highest priority goes in the first sprint." },
      { d: 2, x: 1, q: "The course calls each time-boxed step “a sprint or a scrum”. What's the more precise way to put it?", o: [
        ["Scrum is the framework; a sprint is its time box", "Correct. Scrum teams work in sprints, and the Scrum Guide caps a sprint at one month."],
        ["Sprints and scrums are two different lengths of iteration", "They aren't two lengths: one is a framework and the other is a cycle within it."],
        ["A scrum is the daily meeting, and a sprint is the whole project", "The daily meeting is the daily scrum, but a sprint is one cycle, not the whole project."],
        ["Scrum is the waterfall version of a sprint", "Scrum is an agile framework, not a waterfall one."]],
        k: "Scrum is the framework; the sprint is its time box." },
      { d: 1, q: "How long do sprints usually last, according to this course?", o: [
        ["One to four weeks", "Correct. Other courses quote one to two or two to four weeks, so ranges vary."],
        ["One day", "That's a daily stand-up cycle, not a sprint."],
        ["Three to six months", "Far too long for a sprint."],
        ["As long as the feature takes", "Sprints are time-boxed; the feature has to fit the time."]],
        k: "Sprints are short and fixed in length." },
      { d: 2, q: "Why does the course call Two Trees' e-commerce website a great candidate for agile?", o: [
        ["They can describe what it should do but not plan every step upfront", "Correct. Describe the finished product, then build it piece by piece."],
        ["The building work needs strict, fixed sequencing", "That describes waterfall work, like construction."],
        ["Every requirement is already fixed in the contract and won't change", "Fixed requirements point to waterfall."],
        ["No customer will see it until it's finished", "Agile delivers usable pieces early."]],
        k: "Clear goal, unclear steps: build it in sprints." },
      { d: 2, q: "In the hybrid fulfilment-centre project, which part runs as waterfall?", o: [
        ["Building the facility and installing material handling equipment", "Correct. Defined requirements and a detailed task list suit construction."],
        ["Reconfiguring the order, warehouse and transportation management systems", "That part runs as three agile sprints."],
        ["Solving new process problems as they come up", "That's the Lean Six Sigma team's DMAIC work."],
        ["Writing user stories for the new online store", "User stories belong to agile work."]],
        k: "Physical build → waterfall; systems → sprints; issues → DMAIC." },
      { d: 2, q: "Why did Two Trees use three sprints for its information systems?", o: [
        ["They couldn't change all systems at once or plan every task ahead", "Correct. One system per sprint: OMS, WMS, TMS."],
        ["Each sprint had to line up with one of the construction milestones", "The sprints weren't tied to construction milestones."],
        ["Agile projects always need exactly three sprints", "There's no fixed number of sprints."],
        ["The software vendor charged a fixed fee per sprint", "Not the reason the course gives."]],
        k: "When you can't define every task upfront, sprint it." },
      { d: 2, q: "You're running a new distribution centre: construction uses waterfall and IT uses agile for the WMS. What does the course suggest for managing both?", o: [
        ["A waterfall master plan with IT sprints inside it", "Correct. That's the hybrid approach the course describes."],
        ["Force IT onto the waterfall plan, with every task fixed before it starts", "That removes the flexibility the software work needs."],
        ["Switch construction to two-week sprints", "Construction needs sequencing, not sprints."],
        ["Run them as unrelated projects with no shared plan", "The pieces depend on each other and need one view."]],
        k: "Hybrid: one master plan, with room for sprints inside it." },
      { d: 3, q: "A cold-chain logistics firm is fitting IoT temperature sensors to 200 trucks, building a monitoring app, and fixing process problems as alerts reveal them. Which approach fits best?", o: [
        ["Hybrid: waterfall for installs, agile for the app, DMAIC for problems", "Correct. Each part matches a different method, just like the fulfilment centre."],
        ["Pure waterfall for everything, because so much physical hardware is involved", "The app and the problem-solving won't fit a fixed plan."],
        ["Pure agile for everything, because there's an app", "200 hardware installs need sequenced planning."],
        ["No formal method; just start installing the sensors", "A project this size needs structure."]],
        k: "Match each part of a big project to the method that suits it." }
    ],
    flips: [
      { d: 2, f: "Waterfall or agile? Give the course's one-line rule.", b: "If you know what the finished product should look like, waterfall is often best. If you need to figure things out as you go and experiment along the way, agile may be better. Big supply chain projects often need both: a hybrid." }
    ]
  }

  ]
});
