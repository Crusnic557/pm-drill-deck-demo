/* Course 4 · Project Procurement Management. Part 3: closeout, agile procurement and contracting techniques,
   rapid procurement, reverse auctions, and automation and AI. */

PMQ.fig("closeout-flow", `<svg viewBox="0 0 600 228" role="img" aria-label="Closing a procurement: contract closure, then administrative closeout">
<defs><marker id="ah-co" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<rect class="acc" x="1" y="8" width="286" height="28" rx="4"/><text class="tw" x="144" y="26" text-anchor="middle">1 · CONTRACT CLOSURE</text>
<rect class="acc" x="313" y="8" width="286" height="28" rx="4"/><text class="tw" x="456" y="26" text-anchor="middle">2 · ADMINISTRATIVE CLOSEOUT</text>
<rect class="bx" x="1" y="42" width="286" height="156" rx="4"/><rect class="bx" x="313" y="42" width="286" height="156" rx="4"/>
<path class="s" d="M289 120 H309" marker-end="url(#ah-co)"/>
<text class="t2" x="11" y="62">Evaluate the vendor:</text><text class="t2" x="11" y="80">· requirements and quality met?</text><text class="t2" x="11" y="98">· on schedule and within budget?</text><text class="t2" x="11" y="116">· kept you informed?</text>
<text class="t2" x="11" y="134">· deliverables complete?</text><text class="t2" x="11" y="152">Resolve disputes, accept the work</text><text class="t2" x="11" y="170">Handover: vendor explains the result</text><text class="t2" x="11" y="188">Pay the remaining invoices</text>
<text class="t2" x="323" y="62">Close out action items</text><text class="t2" x="323" y="80">Confirm remaining deliverables</text><text class="t2" x="323" y="98">Legal: close claims, resolve disputes,</text><text class="t2" x="323" y="116">get sign-offs and final acceptance</text>
<text class="t2" x="323" y="134">Formal approval to close and pay</text><text class="t2" x="323" y="152">Lessons learned; update policies</text><text class="t2" x="323" y="170">Close all accounts: no more charges</text><text class="t2" x="323" y="188">Closeout meeting; archive documents</text>
<text class="t2" x="1" y="220">Completed or terminated early, every procurement must be closed.</text>
</svg>`);

PMQ.fig("agile-contracts", `<svg viewBox="0 0 600 232" role="img" aria-label="Adapting each contract type for agile projects">
<text class="t2" x="8" y="20">TYPE</text><text class="t2" x="160" y="20">USE IN AGILE WHEN</text><text class="t2" x="390" y="20">ADAPT IT BY</text>
<line class="s" x1="4" x2="596" y1="28" y2="28"/>
<text class="tb" x="8" y="54">Fixed price</text><text class="tc" x="160" y="46">Backlog and release</text><text class="tc" x="160" y="62">elements are defined</text><text class="tc" x="390" y="46">A shorter time span</text><text class="tc" x="390" y="62">per contract</text>
<line class="s2" x1="4" x2="596" y1="72" y2="72"/>
<text class="tb" x="8" y="98">Cost-reimbursable</text><text class="tc" x="160" y="90">Requirements evolve</text><text class="tc" x="160" y="106">over several releases</text><text class="tc" x="390" y="90">Incentive fees on</text><text class="tc" x="390" y="106">performance criteria</text>
<line class="s2" x1="4" x2="596" y1="116" y2="116"/>
<text class="tb" x="8" y="142">Time &amp; materials</text><text class="tc" x="160" y="134">Duration or cost is</text><text class="tc" x="160" y="150">hard to estimate</text><text class="tc" x="390" y="134">Close monitoring of</text><text class="tc" x="390" y="150">efficiency and cost</text>
<line class="s2" x1="4" x2="596" y1="160" y2="160"/>
<text class="tb" x="8" y="186">IDIQ</text><text class="tc" x="160" y="178">Most flexibility, close</text><text class="tc" x="160" y="194">working relationships</text><text class="tc" x="390" y="178">Service contract; task</text><text class="tc" x="390" y="194">orders mapped to releases</text>
<line class="s" x1="4" x2="596" y1="204" y2="204"/>
<text class="t2" x="8" y="224">Hybrid: predictive terms in a master agreement, adaptive ones in an addendum</text>
</svg>`);

PMQ.fig("agile-tiers", `<svg viewBox="0 0 600 184" role="img" aria-label="A three-tier agile contract structure">
<defs><marker id="ah-at" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<rect class="soft" x="150" y="10" width="300" height="44" rx="5"/><text class="tb" x="300" y="29" text-anchor="middle">Tier 3 · Lightweight SOW</text><text class="t2" x="300" y="46" text-anchor="middle">dynamic items: this release's features</text>
<rect class="bx" x="90" y="60" width="420" height="44" rx="5"/><text class="tb" x="300" y="79" text-anchor="middle">Tier 2 · Schedule of services</text><text class="t2" x="300" y="96" text-anchor="middle">items subject to change: rates, roles, services</text>
<rect class="acc" x="30" y="110" width="540" height="44" rx="5"/><text class="tw" x="300" y="129" text-anchor="middle">TIER 1 · MASTER AGREEMENT</text><text class="tw" x="300" y="146" text-anchor="middle">fixed items: payment terms, IP, liability, disputes</text>
<path class="s" d="M586 152 V48" marker-end="url(#ah-at)"/><text class="t2" x="592" y="22" text-anchor="end">more likely</text><text class="t2" x="592" y="36" text-anchor="end">to change</text>
<text class="t2" x="8" y="176">One document, separate sections: change the top without touching the base.</text>
</svg>`);

PMQ.fig("purchase-thresholds", `<svg viewBox="0 0 600 132" role="img" aria-label="Micro-purchases, small purchases and traditional purchases">
<text class="t2" x="580" y="30" text-anchor="end">higher value →</text>
<text class="t2" x="180" y="30" text-anchor="middle">$10,000 (course's example)</text>
<rect class="soft" x="20" y="44" width="160" height="40"/><rect class="bx" x="180" y="44" width="220" height="40"/><rect class="bx" x="400" y="44" width="180" height="40"/>
<line class="s" x1="180" x2="180" y1="36" y2="90"/>
<text class="tb" x="100" y="69" text-anchor="middle">Micro-purchase</text><text class="tb" x="290" y="69" text-anchor="middle">Small purchase</text><text class="tb" x="490" y="69" text-anchor="middle">Traditional</text>
<text class="t2" x="100" y="104" text-anchor="middle">purchase card,</text><text class="t2" x="100" y="120" text-anchor="middle">no competing quotes</text>
<text class="t2" x="290" y="104" text-anchor="middle">quotes from several sources,</text><text class="t2" x="290" y="120" text-anchor="middle">unless pre-vetted vendors</text>
<text class="t2" x="490" y="104" text-anchor="middle">RFP, evaluation,</text><text class="t2" x="490" y="120" text-anchor="middle">negotiation, award</text>
</svg>`);

PMQ.fig("svip-timeline", `<svg viewBox="0 0 600 142" role="img" aria-label="The streamlined DHS Silicon Valley Innovation Program process">
<line class="s" x1="30" x2="570" y1="56" y2="56"/>
<circle class="acc" cx="50" cy="56" r="7"/><circle class="acc" cx="175" cy="56" r="7"/><circle class="acc" cx="300" cy="56" r="7"/><circle class="acc" cx="425" cy="56" r="7"/><circle class="acc" cx="550" cy="56" r="7"/>
<text class="tb" x="50" y="38" text-anchor="middle">Apply</text><text class="tb" x="175" y="38" text-anchor="middle">Pitch</text><text class="tb" x="300" y="38" text-anchor="middle">Decision</text><text class="tb" x="425" y="38" text-anchor="middle">Contract</text><text class="tb" x="550" y="38" text-anchor="middle">Repeat</text>
<text class="t2" x="50" y="82" text-anchor="middle">10-page</text><text class="t2" x="50" y="98" text-anchor="middle">application</text>
<text class="t2" x="175" y="82" text-anchor="middle">15 minutes to</text><text class="t2" x="175" y="98" text-anchor="middle">agency experts</text>
<text class="t2" x="300" y="82" text-anchor="middle">within 24–48 h</text><text class="t2" x="300" y="98" text-anchor="middle">of the pitch</text>
<text class="t2" x="425" y="82" text-anchor="middle">awarded in</text><text class="t2" x="425" y="98" text-anchor="middle">45–60 days</text>
<text class="t2" x="550" y="82" text-anchor="middle">new awards</text><text class="t2" x="550" y="98" text-anchor="middle">each quarter</text>
<text class="t" x="30" y="130">Federal buying often took over a year; SVIP awards within about 60 days.</text>
</svg>`);

PMQ.fig("reverse-auction", `<svg viewBox="0 0 600 186" role="img" aria-label="Forward auction bids rise; reverse auction bids fall">
<text class="tb" x="30" y="20">Forward auction</text><text class="t2" x="30" y="36">buyers bid up; highest wins</text>
<text class="tb" x="330" y="20">Reverse auction</text><text class="t2" x="330" y="36">sellers bid down; lowest wins</text>
<line class="s2" x1="30" x2="30" y1="48" y2="160"/><line class="s2" x1="30" x2="280" y1="160" y2="160"/>
<line class="s2" x1="330" x2="330" y1="48" y2="160"/><line class="s2" x1="330" x2="580" y1="160" y2="160"/>
<path class="acc-s" d="M30 140 H70 V125 H110 V112 H150 V96 H190 V86 H230 V74 H270"/><circle class="acc" cx="270" cy="74" r="4.5"/>
<text class="t2" x="270" y="62" text-anchor="end">highest bid wins</text>
<path class="acc-s" d="M330 74 H370 V90 H410 V104 H450 V118 H490 V128 H530 V140 H570"/><circle class="acc" cx="570" cy="140" r="4.5"/>
<text class="t2" x="570" y="155" text-anchor="end">lowest bid wins</text>
<text class="t2" x="38" y="58">price</text><text class="t2" x="338" y="58">price</text>
<text class="t2" x="300" y="180" text-anchor="middle">Best for standardised items with plenty of competing vendors</text>
</svg>`);

PMQ.fig("rpa-invoice", `<svg viewBox="0 0 600 172" role="img" aria-label="Invoice processing by hand versus with robotic process automation">
<text class="t2" x="10" y="20">By hand: six steps, for every invoice</text>
<rect class="bx" x="10" y="30" width="90" height="38" rx="4"/><text class="tc" x="55" y="46" text-anchor="middle">Receive</text><text class="tc" x="55" y="60" text-anchor="middle">by email</text>
<rect class="bx" x="108" y="30" width="90" height="38" rx="4"/><text class="tc" x="153" y="46" text-anchor="middle">Retrieve</text><text class="tc" x="153" y="60" text-anchor="middle">invoice</text>
<rect class="bx" x="206" y="30" width="90" height="38" rx="4"/><text class="tc" x="251" y="46" text-anchor="middle">Check</text><text class="tc" x="251" y="60" text-anchor="middle">accuracy</text>
<rect class="bx" x="304" y="30" width="90" height="38" rx="4"/><text class="tc" x="349" y="46" text-anchor="middle">File in</text><text class="tc" x="349" y="60" text-anchor="middle">a folder</text>
<rect class="bx" x="402" y="30" width="90" height="38" rx="4"/><text class="tc" x="447" y="46" text-anchor="middle">Update</text><text class="tc" x="447" y="60" text-anchor="middle">accounts</text>
<rect class="bx" x="500" y="30" width="90" height="38" rx="4"/><text class="tc" x="545" y="46" text-anchor="middle">Pay the</text><text class="tc" x="545" y="60" text-anchor="middle">invoice</text>
<rect class="soft" x="10" y="84" width="580" height="34" rx="5"/><text class="tb" x="300" y="106" text-anchor="middle">RPA bot runs all six, following the rules you set</text>
<text class="t2" x="10" y="144">Lower cost · fewer people needed · scales quickly for peaks</text>
<text class="t2" x="10" y="162">Better accuracy · higher productivity</text>
</svg>`);

PMQ.course({
  id: "procurement",
  topics: [

  /* ---------------------------------------------------------------- 15 */
  {
    id: "closeout",
    title: "Closing procurements",
    summary: "It's not over until it's over. Vendors must fulfil the contractual and administrative obligations and get your approval; that's how they get paid. Whether a contract is completed or terminated early, it has to be closed, and contract closure comes first. Make sure the vendor's work is satisfactorily complete under the contract's terms and conditions, and evaluate how well they did before signing off: did they meet contractual requirements and deliver quality work, stay on schedule and within budget, keep you and your team properly informed, and complete the deliverables? Once you've verified this, resolved disputes and accepted the work, pay any remaining invoices after the completed work has been turned over and the vendor has explained what they've delivered, such as how to use it. Then comes administrative closeout: close out action items (making sure documents and deliverables are up to date); confirm remaining deliverables are complete; meet legal obligations (close open claims, resolve disputes, get sign-offs such as final acceptance); get formal approval to close the contract and pay remaining invoices; and share and transfer knowledge (lessons learned, updated policies and procedures, results for future projects). Close all accounts so no more time and money can be charged to the contract. You'll often hold a closeout meeting with the vendor, the opposite of a kick-off, to discuss what went well and what could improve while it's fresh. Finally, store all performance and contract documents in a repository as part of lessons learned, and celebrate a job well done.",
    figs: ["closeout-flow"],
    terms: [
      ["Contract closure", "The first stage of closing a procurement: confirming the vendor's work is complete under the contract, evaluating its performance, resolving disputes, accepting the work and paying remaining invoices.", "Checking the CRM vendor met requirements, then accepting and paying the final milestone.", 0, "closeout-flow"],
      ["Administrative closeout", "The second stage: closing action items, confirming remaining deliverables, meeting legal obligations, getting formal approval to close, transferring knowledge and closing accounts.", "Closing open claims, filing the sign-offs and closing the project's cost code."],
      ["Closeout meeting", "A meeting with the vendor at the end of a contract, the opposite of a kick-off, to discuss what went well and what could be improved.", "A one-hour review with the fit-out contractor the week after handover."],
      ["Early termination", "Ending a contract before its work is complete. The procurement still has to be formally closed.", "Cancelling a software contract after phase one, then closing it out properly anyway."],
      ["Final acceptance", "The buyer's formal sign-off that the remaining deliverables meet the contract.", "Signing off the commissioned fire alarm system once the final tests pass."]
    ],
    cards: [
      { d: 1, q: "Does a contract that's terminated early still need to be closed?", o: [
        ["Yes. Every procurement must be closed", "Correct. Whether it's completed or terminated, every procurement needs formal closure."],
        ["No. Termination ends the contract automatically, with nothing more to do", "Termination still needs formal closure."],
        ["Only if the vendor asks for it to be closed formally", "You drive closure."],
        ["Only if there are unpaid invoices left on the account", "Closure covers far more than invoices."]],
        k: "Every procurement gets closed, however it ends." },
      { d: 1, q: "Which comes first: contract closure or administrative closeout?", af: "closeout-flow", o: [
        ["Contract closure", "Correct. Then administrative closeout."],
        ["Administrative closeout", "That comes second."],
        ["They must happen at exactly the same time", "The course puts contract closure first."],
        ["Whichever the vendor prefers to start with", "The order is set, not the vendor's choice."]],
        k: "Contract closure, then administrative closeout." },
      { d: 1, q: "What does the course compare a closeout meeting to?", o: [
        ["The opposite of a kick-off meeting", "Correct. A kick-off starts the relationship; a closeout meeting formally ends it."],
        ["A sprint planning session", "Not the comparison."],
        ["A bidder conference", "That happens before award."],
        ["A job interview for the vendor's next contract", "Not the comparison."]],
        k: "Kick-off opens; closeout meeting closes." },
      { d: 2, q: "Which questions does the course suggest when evaluating the vendor before sign-off?", o: [
        ["Requirements and quality, schedule and budget, communication, deliverables", "Correct. Review requirements and quality, schedule and budget, communication and deliverables."],
        ["Office size, staff numbers, brand awareness and its social media presence", "Not performance questions."],
        ["Whether its staff were friendly and whether they wore uniforms", "Not the course's questions."],
        ["How many other clients it has and what it charged them", "Not your evaluation's concern."]],
        k: "Judge delivery, quality, schedule, budget and communication." },
      { d: 2, q: "When should you pay the remaining invoices?", o: [
        ["After acceptance, handover and an explanation", "Correct. Pay once the work is accepted and handed over, so payment never runs ahead of delivery."],
        ["Before the final inspection, so that the vendor stays motivated to finish the work", "Paying first removes your leverage."],
        ["As soon as they arrive, whatever state the work is in", "Acceptance comes first."],
        ["Never, if any small dispute was raised during the project", "Resolve disputes, then pay what's owed."]],
        k: "Accept, hand over, then pay." },
      { d: 2, q: "Why must all accounts be closed at the end?", o: [
        ["So nothing more can be charged to the contract", "Correct. Closed accounts mean nothing more can be charged against the contract."],
        ["So the vendor can't bid on any of your organisation's future projects", "Closing accounts doesn't ban the vendor."],
        ["Because auditors delete open accounts after a year", "Not the reason."],
        ["So the vendor's staff can be reassigned more easily", "Not the reason."]],
        k: "Closed accounts stop stray charges." },
      { d: 2, q: "Which of these is part of administrative closeout?", o: [
        ["Lessons learned and updated procedures", "Correct. Administrative closeout captures lessons learned and updates procedures for next time."],
        ["Writing the procurement statement of work for the next phase of the project", "That's planning for new work."],
        ["Hosting a bidder conference for new vendors", "That's conducting a new procurement."],
        ["Choosing the contract type for the procurement", "That's decided in planning."]],
        k: "Close out = capture knowledge, not start new buying." },
      { d: 3, q: "Handover is done, but two vendor claims are still open and the cost code is live. Can you close the procurement?", o: [
        ["Not yet: close the claims and the accounts first", "Correct. Open claims or a live cost code mean the procurement isn't finished."],
        ["Yes, since open claims will simply lapse and close themselves over time", "Claims must be formally closed."],
        ["Yes, as long as the sponsor is happy with the result", "Happiness doesn't close legal obligations."],
        ["Yes, because handover means the contract is complete", "Handover is only part of closure."]],
        k: "Open claims or live accounts mean it isn't closed." },
      { d: 3, q: "Why does the course recommend storing all performance and contract documents in a repository at the end?", o: [
        ["To reference later as lessons learned", "Correct. Stored records become lessons learned and evidence for future procurements."],
        ["So the vendor can't access them if a future dispute ever arises", "Not the purpose."],
        ["Because the legal team will delete them otherwise", "Not the reason."],
        ["So the project looks more complete to the sponsor", "Not the reason."]],
        k: "Today's records are tomorrow's lessons." }
    ],
    flips: [
      { d: 2, f: "List the administrative closeout actions from the course.", b: "Close out action items (documents and deliverables up to date); confirm remaining deliverables are complete; meet legal obligations (close open claims, resolve disputes, get sign-offs such as final acceptance); get formal approval to close the contract and pay remaining invoices; share and transfer knowledge (lessons learned, updated policies and procedures, results for future projects); close all accounts; hold a closeout meeting; store the documents in a repository." }
    ]
  },

  /* ---------------------------------------------------------------- 16 */
  {
    id: "agile-proc",
    title: "Agile procurement",
    summary: "Agile procurement optimises agile projects: match your contracting practices to the project's needs, using contracts that support short-term planning, incremental delivery and continuous improvement. It emphasises adaptability and responsiveness so decisions are made faster, which suits work like adding features to existing software, where changes are made on the fly. The main advantage: small-batch deliveries can be examined and closed at the end of each sprint instead of waiting for the end of the project, so progress is assessed sooner, problems are found faster, and changes to scope, schedule and budget happen quicker; and if priorities shift, you aren't locked into an unfavourable arrangement. Adapting the contract types: fixed-price contracts can be used once the product backlog and the critical elements of each release are defined, with a shorter time span; cost-reimbursable contracts suit requirements expected to evolve over several releases, with incentive fees based on defined performance criteria; T&M contracts suit work whose duration or cost is hard to estimate with confidence, monitored closely so work is efficient and costs are controlled; and IDIQ contracts give the most flexibility and suit close working relationships, managed as service contracts with quality metrics and estimates mapped to releases by task order, where near-term releases should have better estimates than later ones. On a hybrid (predictive plus adaptive) project, put the predictive parts in a master agreement and the adaptive parts in an addendum, so you can change the adaptive parts without touching the rest. Any contract type can be used; choose the one best suited to the project.",
    figs: ["agile-contracts"],
    terms: [
      ["Agile procurement", "Contracting practices matched to agile projects: supporting short-term planning, incremental delivery and continuous improvement, with faster decisions.", "Paying a software vendor sprint by sprint and closing each sprint's delivery as it's accepted.", 0, "agile-contracts"],
      ["Small-batch delivery", "Delivering work in small increments that can be examined and closed at the end of each sprint.", "Accepting and paying for the booking feature at the end of sprint 3."],
      ["Master agreement", "The overarching contract holding the stable, predictive terms. Adaptive parts can sit in addenda.", "A master agreement for payment terms and IP, with each release's scope in an addendum."],
      ["Task order", "An order placed under an IDIQ contract for a specific piece of work, such as one release.", "Task order 4 covers release 2.1, with its own estimate and quality metrics."]
    ],
    cards: [
      { d: 1, q: "What's the main idea of agile procurement?", o: [
        ["Fit contracting practices to agile projects", "Correct. Contracts should support the way agile projects deliver, rather than fight it."],
        ["Use exactly the same contracts as waterfall projects do, just signed faster", "Speed alone isn't the point; fit is."],
        ["Avoid contracts entirely on agile projects", "Agile projects still need contracts."],
        ["Let the vendor choose the contract type every sprint", "You choose what suits the project."]],
        k: "Contract the way the project works." },
      { d: 1, q: "What's the main advantage of agile procurement, according to the course?", o: [
        ["Each sprint's delivery is checked and closed", "Correct. Checking and closing each sprint's delivery keeps risk small and value visible."],
        ["Every deliverable is accepted together, in one large batch at the end of the project", "That's the waterfall pattern agile procurement avoids."],
        ["Vendors never need to report on their progress", "Progress is assessed more often, not less."],
        ["Prices are guaranteed never to change", "Not an agile procurement feature."]],
        k: "Check and close every sprint." },
      { d: 1, q: "Which three things should agile-friendly contracts support?", o: [
        ["Short-term planning, incremental delivery and continuous improvement", "Correct. Agile work plans in short cycles, delivers in increments and keeps improving, and the contract must allow that."],
        ["Long-range planning, a single final delivery and a scope fixed from day one", "Those are waterfall traits."],
        ["Low prices, long warranties and penalty clauses", "Not the course's three."],
        ["Big up-front payments and no reporting", "Not the course's three."]],
        k: "Short-term, incremental, improving." },
      { d: 2, q: "When can a fixed-price contract work on an agile project?", af: "agile-contracts", o: [
        ["Once the backlog and releases are defined", "Correct. Keep the time span shorter."],
        ["Only before any of the requirements have been written down or discussed", "You need something defined to fix a price."],
        ["Never; fixed price can't be used on agile projects", "It can, with adaptation."],
        ["Only for projects lasting several years", "Shorter spans suit agile fixed-price."]],
        k: "Define the release, then fix its price." },
      { d: 2, q: "How does the course suggest adapting a cost-reimbursable contract for agile work?", o: [
        ["Add incentive fees based on defined performance criteria", "Correct. Incentive fees tied to defined performance criteria reward the outcomes agile teams deliver."],
        ["Remove all of the vendor's fees so that it works purely at cost", "The vendor still needs a fee to make a profit."],
        ["Fix the total price before the first release", "That turns it into fixed price."],
        ["Pay only when the whole product is finished", "Against agile's incremental delivery."]],
        k: "Cost-reimbursable + incentive fees." },
      { d: 2, q: "What does an agile T&M contract need, according to the course?", o: [
        ["Close monitoring of efficiency and cost", "Correct. T&M pays for time, so efficiency and cost need close watching."],
        ["No monitoring at all, because the agreed hourly rate controls the cost", "The rate is fixed, but the hours aren't."],
        ["A fixed total quantity of goods delivered on fixed dates", "That's not T&M."],
        ["Payment only at the end of the final release", "Not how T&M works."]],
        k: "T&M needs watching." },
      { d: 2, q: "How does the course suggest managing an IDIQ contract on an agile project?", o: [
        ["As a service contract, with metrics and estimates mapped to releases by task order", "Correct. Near-term releases get better estimates."],
        ["As one fixed-price contract for the whole product, signed once at the very start", "That loses IDIQ's flexibility."],
        ["As a blanket purchase agreement with no quality metrics", "Quality metrics are part of the adaptation."],
        ["As an informal arrangement with no written terms", "Never informal."]],
        k: "IDIQ: task orders per release." },
      { d: 3, q: "Your project mixes a fixed hardware roll-out with evolving software features. How does the course suggest structuring the contract?", o: [
        ["Master agreement for predictive, addendum for adaptive", "Correct. You can change the addendum without touching the rest."],
        ["Everything in one fixed-price contract that can't be changed once it's signed", "The software needs room to change."],
        ["Two unrelated contracts that never refer to each other", "They need to work together."],
        ["A handshake for the software and a contract for the hardware", "Handshakes aren't enforceable."]],
        k: "Fixed in the master, flexible in the addendum." },
      { d: 3, q: "Halfway through, research shows customers want different features. Why does agile procurement leave you better placed?", o: [
        ["You aren't locked into an unfavourable arrangement when priorities shift", "Correct. A flexible agile contract lets you change direction without renegotiating a fixed deal."],
        ["The vendor must build every new feature anyway, at no extra cost to you", "Changes still cost something."],
        ["The original contract can simply be ignored", "It's adapted, not ignored."],
        ["Agile contracts let you change the price without agreement", "Price changes still need agreement."]],
        k: "Flexibility when priorities move." }
    ],
    flips: [
      { d: 3, f: "How can each contract type be adapted for agile procurement?", b: "Fixed price: once the backlog and each release's critical elements are defined, with a shorter time span. Cost-reimbursable: when requirements evolve over several releases, with incentive fees on defined performance criteria. T&M: when duration or cost is hard to estimate, monitored closely. IDIQ: for the most flexibility and close relationships, managed as a service contract with quality metrics and estimates mapped to releases by task order. Hybrid: predictive parts in a master agreement, adaptive parts in an addendum." }
    ]
  },

  /* ---------------------------------------------------------------- 17 */
  {
    id: "agile-techniques",
    title: "Agile contracting techniques",
    summary: "Share risks and rewards with contractors: match the contract type with techniques that encourage consistent delivery of working products while staying flexible. A multitiered structure puts a master agreement with fixed items in tier 1, a schedule of services with items subject to change in tier 2, and a lightweight statement of work with the most dynamic items in tier 3, all in one document but in separate sections, so changeable items are separate from fixed ones and you can respond quickly. Emphasise value delivered, for example by tying payment terms to milestones based on value-driven deliverables. Fixed-price increments break scope into small fixed-price micro-deliverables, such as user stories, giving you more control over spend while limiting the supplier's financial risk. Not-to-exceed T&M caps the overall budget, so you can replace original work or add new ideas as the project progresses, and add time later if needed. Graduated T&M shares financial risk: a higher hourly rate for delivering earlier than expected, a lower one for delivering late. An early cancellation option lets you pay a cancellation fee once enough value has been delivered, spending less than you would on work you no longer need. A dynamic scope option lets you vary the scope at predetermined points while keeping the original budget. Team augmentation embeds the supplier's team in your organisation, giving you more control over what gets done. And favour full-service suppliers that offer comprehensive solutions delivering usable services or products.",
    figs: ["agile-tiers"],
    terms: [
      ["Multitiered contract structure", "One contract in tiers: a master agreement with fixed items, a schedule of services with items subject to change, and a lightweight SOW with dynamic items.", "Payment terms and IP in tier 1; rates and roles in tier 2; this quarter's features in tier 3.", 0, "agile-tiers"],
      ["Fixed-price increments", "Breaking scope into small fixed-price micro-deliverables, such as user stories.", "A set price per accepted user story in a booking system."],
      ["Not-to-exceed T&M", "A time and materials contract with a capped overall budget. Work can be swapped or added within the cap.", "T&M up to $120k; new features replace old ones within the cap."],
      ["Graduated T&M", "Sharing financial risk by paying a higher hourly rate for early delivery and a lower one for late delivery.", "$150 an hour if the release ships early, $130 if it's late."],
      ["Early cancellation option", "Paying a cancellation fee to end the contract once enough value has been delivered, instead of paying for work you no longer need.", "Stopping after release 3 because it already does what you need."],
      ["Dynamic scope option", "Varying the scope at predetermined points in the project while keeping the original budget.", "At each quarterly review, swapping two planned features for a new one."],
      ["Team augmentation", "Embedding the supplier's team in your organisation, giving you more control over what gets done.", "Two of the vendor's developers join your team's daily stand-ups."]
    ],
    cards: [
      { d: 1, q: "What's the overall aim of agile contracting techniques, according to the course?", o: [
        ["Share risks and rewards so contractors deliver and stay flexible", "Correct. Sharing risk and reward keeps contractors motivated to deliver while still allowing change."],
        ["Move all of the risk onto contractors through strict penalty clauses", "The course says share risks, not offload them."],
        ["Avoid paying contractors until the whole product is finished", "Against incremental delivery."],
        ["Let contractors set their own scope and price each sprint", "You still control scope and spend."]],
        k: "Shared risk, shared reward." },
      { d: 1, q: "In a multitiered contract structure, what goes in tier 1?", af: "agile-tiers", o: [
        ["A master agreement with the fixed items", "Correct. The master agreement holds the stable, fixed terms; changeable items sit in the lower tiers."],
        ["A lightweight SOW with the most dynamic items", "That's tier 3."],
        ["A schedule of services subject to change", "That's tier 2."],
        ["The vendor's internal staffing plan", "Not part of the structure."]],
        k: "Tier 1 fixed, tier 2 changeable, tier 3 dynamic." },
      { d: 1, q: "What are fixed-price increments?", o: [
        ["Small fixed-price pieces of scope, like user stories", "Correct. Pricing small pieces of scope, such as user stories, limits the risk on each piece."],
        ["One fixed price for the entire project, paid in a single large increment at the end", "The opposite: many small fixed prices."],
        ["Price rises that happen automatically each sprint", "Not the meaning."],
        ["Discounts for paying invoices in fixed weekly increments", "Not the meaning."]],
        k: "Many small fixed prices instead of one big one." },
      { d: 2, q: "How does graduated T&M share financial risk?", o: [
        ["A higher rate for early delivery, a lower rate for late delivery", "Correct. Paying more for early delivery and less for late delivery shares the schedule risk."],
        ["A lower rate for early delivery, a higher rate for late delivery", "Reversed. That would reward lateness."],
        ["The same rate whatever happens, with a cap on total hours", "That's closer to not-to-exceed T&M."],
        ["No hourly rate at all; payment is by result only", "It's still time and materials."]],
        k: "Early pays more; late pays less." },
      { d: 2, q: "What does a not-to-exceed T&M contract let you do?", o: [
        ["Swap or add features within a fixed overall budget", "Correct. More time can be added later if needed."],
        ["Spend without limit as long as the work is valuable", "The budget is capped."],
        ["Fix every feature up front so that nothing can ever change later", "It's designed for flexibility."],
        ["Pay the vendor a bonus for every hour over budget", "The cap prevents overspend."]],
        k: "Flexible scope, capped spend." },
      { d: 2, q: "Why would you use an early cancellation option?", o: [
        ["To pay a fee and stop once enough value is delivered, saving money", "Correct. If enough value arrives early, paying a fee to stop saves the cost of the rest."],
        ["To punish the vendor financially whenever one of its sprints runs late", "It isn't a penalty clause."],
        ["To cancel without paying anything for completed work", "You pay for completed work plus a fee."],
        ["To force the vendor to finish all scope at any cost", "The opposite."]],
        k: "Buy your way out when you have enough." },
      { d: 2, q: "What does a dynamic scope option allow?", o: [
        ["Varying scope at set points while keeping the original budget", "Correct. You can change what's delivered at set points while the budget stays the same."],
        ["Changing the overall budget at any time without telling the vendor first", "Budget stays as agreed."],
        ["Fixing the scope permanently so nothing can be added", "The opposite."],
        ["Letting the vendor decide the scope on its own", "Scope changes are yours, at agreed points."]],
        k: "Change what, not how much." },
      { d: 2, q: "What does team augmentation give you, according to the course?", o: [
        ["More control over what gets done", "Correct. With the supplier's people embedded in your team, you have more say in what they work on."],
        ["No responsibility for the vendor's staff at all", "Not the point of augmentation."],
        ["A lower hourly rate for the vendor's people", "Not what the course says."],
        ["A guarantee of a fixed price for the project", "Augmentation isn't a pricing model."]],
        k: "Embedded suppliers, more control." },
      { d: 3, q: "You're contracting for a new booking app. You want control of spend, and the supplier wants limited financial risk. Which technique suits you both?", o: [
        ["Fixed-price increments, priced per user story", "Correct. The course names this mutual benefit."],
        ["One firm fixed price for the entire app, agreed and signed on the first day", "That loads risk onto the supplier."],
        ["Unlimited time and materials with no cap or monitoring", "That gives you no control of spend."],
        ["A reverse auction for each user story", "Not suited to custom development."]],
        k: "Small fixed prices balance both sides' risk." },
      { d: 3, q: "Why does the course suggest favouring full-service suppliers?", o: [
        ["They offer comprehensive solutions that deliver a usable service or product", "Correct. One supplier delivering a complete, usable solution avoids fragments that don't fit together."],
        ["They always charge less than smaller, specialist suppliers do for the same work", "Not what the course says."],
        ["They never need a statement of work", "Every supplier needs a scope."],
        ["They don't need any monitoring once hired", "All vendors need monitoring."]],
        k: "Usable outcomes beat fragments." }
    ],
    flips: [
      { d: 2, f: "Name the course's agile contracting techniques.", b: "Multitiered structure; emphasise value delivered (payment tied to value-driven milestones); fixed-price increments; not-to-exceed T&M; graduated T&M; early cancellation option; dynamic scope option; team augmentation; favour full-service suppliers." }
    ]
  },

  /* ---------------------------------------------------------------- 18 */
  {
    id: "rapid",
    title: "Rapid procurement",
    summary: "When you need something fast, avoid a long buying process. Complex contracts with long lead times may still suit infrastructure or large construction, but software and R&D projects, where scope and costs are hard to pin down up front, need a streamlined process. Micro-purchases acquire goods and services that don't exceed a nominal threshold (the course's example is $10,000); they can usually be made on a credit or purchase card and don't need competitive price quotes. Small purchases exceed the micro-purchase level and usually need quotes or bids from several sources, unless pre-vetted preferred vendors are used. Both minimise the work of evaluating offers, and they're easier to explain, gain consensus on and implement than traditional purchases. The course's case: the US Department of Homeland Security's Silicon Valley Innovation Program (SVIP), set up to find innovative technology to support first responders and secure critical infrastructure, awarded its first contract in 2016. Federal procurements often took more than a year, and start-ups were intimidated and couldn't wait months for funding decisions. So DHS streamlined: a ten-page application; successful applicants pitch agency experts for 15 minutes; a funding decision within 24 to 48 hours; a contract within 45 to 60 days; and further awards announced quarterly. It now completes awards within about 60 days. To follow its lead, engage vendors directly and early, and break broad requirements and scope into smaller, more detailed user stories to shorten procurement time.",
    figs: ["purchase-thresholds", "svip-timeline"],
    terms: [
      ["Micro-purchase", "A purchase that doesn't exceed a nominal threshold (the course's example is $10,000), usually made on a purchase card without competitive quotes.", "Buying a $900 software licence on the team's purchase card.", 0, "purchase-thresholds"],
      ["Small purchase", "A purchase above the micro-purchase level, usually needing quotes or bids from several sources unless pre-vetted preferred vendors are used.", "Getting three quotes for a $25,000 network upgrade."],
      ["Purchase card", "A credit card issued for organisational buying, used for micro-purchases.", "A procurement card with a set limit per transaction."],
      ["Silicon Valley Innovation Program (SVIP)", "The US Department of Homeland Security programme the course uses to show rapid procurement: short applications, quick pitches and contracts within 45 to 60 days.", "Funding a start-up's technology for first responders within about two months.", 0, "svip-timeline"],
      ["Rapid procurement", "Streamlined buying for projects that need flexible, innovative solutions quickly, using micro and small purchases and early vendor engagement.", "Funding a prototype within weeks rather than through a year-long tender."]
    ],
    cards: [
      { d: 1, q: "What's a micro-purchase, according to the course?", af: "purchase-thresholds", o: [
        ["Below a small threshold, like $10k", "Correct. Micro-purchases are very small buys, under a low dollar threshold."],
        ["A purchase over $10,000 that needs at least three quotes", "That's closer to a small purchase."],
        ["Any purchase made by a single person", "Not the definition."],
        ["A purchase of fewer than ten items", "It's about value, not item count."]],
        k: "Micro = below a nominal value threshold." },
      { d: 1, q: "How are micro-purchases usually made?", o: [
        ["On a credit or purchase card, without competitive quotes", "Correct. They're small enough to buy on a card without competitive quotes."],
        ["Through a full public tender, with a bidder conference and an RFP", "Far too heavy for a micro-purchase."],
        ["Only through a signed IDIQ contract", "Not required."],
        ["By reverse auction among three vendors", "Not the usual method."]],
        k: "Card, no quotes." },
      { d: 1, q: "What do small purchases usually require?", o: [
        ["Quotes or bids from several sources, unless pre-vetted vendors are used", "Correct. Small purchases need a few competing quotes, unless you use pre-vetted vendors."],
        ["A full public tender, a bidder conference and a formal evaluation panel", "That's a traditional purchase."],
        ["Nothing at all, as long as the purchase goes on a company card", "That describes micro-purchases."],
        ["A signed IDIQ contract with upper and lower limits", "Not required."]],
        k: "Small = a few quotes, or a pre-vetted vendor." },
      { d: 2, q: "Which projects does the course say most need rapid procurement?", o: [
        ["Software and R&D, where scope and costs are hard to set up front", "Correct. Scope and costs for software and R&D are hard to fix up front, so speed and flexibility matter."],
        ["Large construction projects, where every step must be planned in detail first", "Traditional contracts can still suit construction."],
        ["Office supplies, where prices never change", "A BPA may suit those."],
        ["Infrastructure with long, fixed lead times", "The course says traditional buying can still work there."]],
        k: "Uncertain, innovative work needs fast buying." },
      { d: 2, q: "Why did DHS change how SVIP contracts with start-ups?", o: [
        ["Start-ups couldn't wait a year for contracts", "Correct. Many were also intimidated by the process."],
        ["Start-ups were demanding much higher prices than large defence firms", "Not the reason given."],
        ["The law banned contracts with small businesses", "Not true."],
        ["Large firms refused to bid on security work", "Not the reason given."]],
        k: "Slow buying loses fast innovators." },
      { d: 2, q: "In the streamlined SVIP process, how soon after their pitch do companies hear about funding?", af: "svip-timeline", o: [
        ["Within 24 to 48 hours", "Correct. The streamlined process gives companies a funding decision within a day or two of their pitch."],
        ["Within 45 to 60 days", "That's when the contract is awarded."],
        ["Within one year", "That's what the old process could take."],
        ["Within one quarter", "Awards are announced quarterly, but decisions come faster."]],
        k: "Pitch today, decision in a day or two." },
      { d: 2, q: "What does the course say micro and small purchases have in common?", o: [
        ["They cut the work of evaluating offers and are easier to explain and implement", "Correct. Both need little evaluation, so they're quicker to agree, explain and put in place."],
        ["They both still need a full RFP process, just with fewer pages and fewer forms to fill", "Neither needs a full RFP."],
        ["They're only allowed for government agencies", "Not what the course says."],
        ["They remove any need to record what was bought", "Records are still kept."]],
        k: "Less evaluation, faster consensus." },
      { d: 3, q: "To follow DHS's lead on a new app, what does the course suggest doing early?", o: [
        ["Engage vendors and break broad requirements into smaller user stories", "Correct. Engaging vendors early and slicing requirements into small user stories speeds up buying."],
        ["Write a detailed 200-page specification before speaking to a single vendor", "That slows things down."],
        ["Wait for vendors to approach you with their own ideas", "The course says engage them directly."],
        ["Pick the largest vendor to reduce the number of contracts", "Size isn't the point."]],
        k: "Engage early; slice the scope small." },
      { d: 3, q: "Your team needs a $600 data-visualisation subscription for a two-week analysis. What's the most sensible route?", o: [
        ["A micro-purchase on a purchase card, if your rules allow", "Correct. At $600, a micro-purchase on a card is proportionate, where your rules allow it."],
        ["A full RFP process, with a bidder conference and an evaluation panel", "Massive overkill for $600."],
        ["An IDIQ contract with a three-year minimum", "Far too heavy."],
        ["A reverse auction among ten software vendors", "Not worth it at this value."]],
        k: "Match the process to the value." }
    ],
    flips: [
      { d: 2, f: "Describe the SVIP process after DHS streamlined it.", b: "Companies submit a ten-page application; successful applicants move to the next round; they pitch agency experts for 15 minutes; they hear a funding decision within 24 to 48 hours; contracts are awarded within 45 to 60 days; and future awards are announced quarterly. DHS completes awards within about 60 days instead of more than a year." }
    ]
  },

  /* ---------------------------------------------------------------- 19 */
  {
    id: "reverse-auctions",
    title: "Reverse auctions",
    summary: "In a forward auction, buyers compete by offering more money. In a reverse auction, sometimes called an e-auction, the roles reverse: sellers compete for the buyer's business by underbidding each other until the lowest bid wins. The goal is to drive prices as low as possible while still meeting your requirements and expectations. Reverse auctions are one of the best ways to buy standardised items efficiently, usually with technology automating the process so vendors bid in real time with little human interaction. Five steps: set up a responsive, transparent system to automate the process (bid deadlines, last-minute extensions, tracking); select a well-defined commodity or service, such as paper or window washing, so bids are easy to compare; load the information into the system and open bidding; monitor the bidding on relevant factors, requesting samples from the lowest bidders if quality is a concern; and compare bids and make an award. Vendors new to reverse auctions may need educating. Beyond saving money, benefits include better use of time and resources, sustainable cost savings from competitive prices, a bigger vendor pool for current and future needs, more transparency, and real-time market pricing. But they're not good for complex, higher-quality items, or when there are only a handful of vendors or highly differentiated offerings, because there won't be enough competition. Then consider a best-value reverse auction, which evaluates bids on price plus other factors such as terms, quality and vendor relationships.",
    figs: ["reverse-auction"],
    terms: [
      ["Reverse auction (e-auction)", "An auction where sellers compete for a buyer's business by underbidding each other until the lowest bid wins.", "Five paper suppliers bid down live online for a 12-month supply contract.", 0, "reverse-auction"],
      ["Forward auction", "A traditional auction where buyers compete by offering more money.", "Bidders raising their offers for a used forklift."],
      ["Best-value reverse auction", "A reverse auction that evaluates bids on price plus other factors, such as terms, quality and vendor relationships.", "Scoring cleaning bids on price, plus quality audit results and contract terms."],
      ["Commodity", "A standardised, well-defined good or service that's easy to compare across vendors.", "A4 copy paper, or window washing for a building."]
    ],
    cards: [
      { d: 1, q: "In a reverse auction, who competes, and how?", af: "reverse-auction", o: [
        ["Sellers, underbidding until the lowest wins", "Correct. Sellers compete by bidding their prices down, and the lowest bid wins."],
        ["Buyers, by outbidding each other until the highest wins", "That's a forward auction."],
        ["Sellers, by outbidding each other until the highest price wins", "Sellers bid down, not up."],
        ["Buyers and sellers together, by voting on a fair price", "Not an auction."]],
        k: "Reverse auction: sellers bid down." },
      { d: 1, q: "What kind of purchase are reverse auctions best for?", o: [
        ["Standardised, well-defined items", "Correct. When items are standard and clearly specified, price is the main difference between sellers."],
        ["Complex, high-quality custom systems", "Not a good fit."],
        ["Unique services from one specialist vendor", "No competition, no auction."],
        ["Long, uncertain research projects", "Too hard to compare bids."]],
        k: "Commodities suit reverse auctions." },
      { d: 1, q: "What's another name for a reverse auction?", o: [
        ["An e-auction", "Correct. Reverse auctions usually run online, hence e-auctions."],
        ["A bidder conference", "That's an information session."],
        ["A blanket purchase agreement", "That's an ordering arrangement."],
        ["A dynamic scope option", "That's an agile contracting technique."]],
        k: "Reverse auction = e-auction." },
      { d: 2, q: "If quality is a concern during the bidding, what does the course suggest?", o: [
        ["Request samples from the lowest bidders", "Correct. Samples let you check quality before you award to the lowest bidder."],
        ["Award to the highest bidder instead", "That defeats the purpose."],
        ["Stop the auction and switch to a BPA", "Not the course's advice."],
        ["Ask bidders to rate their own quality out of ten", "Self-ratings aren't evidence."]],
        k: "Check samples before you award." },
      { d: 2, q: "Which is a benefit of reverse auctions besides saving money?", o: [
        ["Live market pricing, more transparency", "Correct. Bidding happens live and in the open, which shows true market prices."],
        ["Guaranteed top quality from every bidder", "Quality isn't guaranteed."],
        ["No need to define what you're buying", "You must define it precisely."],
        ["Long-term, exclusive partnerships with a much smaller pool of vendors", "Reverse auctions tend to widen the vendor pool."]],
        k: "Transparency and live market prices." },
      { d: 2, q: "When is a reverse auction a poor choice, according to the course?", o: [
        ["Few vendors, or highly differentiated offerings", "Correct. Not enough competition."],
        ["Plenty of vendors selling identical, standardised products like paper", "That's the ideal case."],
        ["When you need real-time market pricing", "That's a benefit."],
        ["When the item is a simple, well-defined commodity", "That's the best fit."]],
        k: "No competition, no point." },
      { d: 2, q: "What's a best-value reverse auction?", o: [
        ["One that weighs price plus factors like terms, quality and relationships", "Correct. It weighs price against other factors such as terms, quality and the relationship."],
        ["One where the highest bid always wins, to guarantee the best quality", "Price still matters; it just isn't the only factor."],
        ["One that's held without any technology platform", "Not the meaning."],
        ["One that only accepts bids from preferred vendors", "Not the meaning."]],
        k: "Best value: price plus other factors." },
      { d: 3, q: "You need a building management system with custom integration, and only three vendors can do it. Should you run a reverse auction?", o: [
        ["No: complex, differentiated, too few bidders", "Correct. Complex, custom work with only three capable vendors doesn't suit price-only bidding."],
        ["Yes, because reverse auctions always get the lowest price for anything at all", "Not for complex, differentiated purchases."],
        ["Yes, as long as you don't tell the vendors it's an auction", "Concealment is never the answer."],
        ["Yes, but only accept bids from the most expensive vendor", "That isn't an auction."]],
        k: "Complex and few vendors → not an auction." },
      { d: 3, q: "Your campus store wants a 12-month supply of standard paper bags, and many suppliers sell the same product. Which approach fits?", o: [
        ["A reverse auction: standard item, many sellers", "Correct. A standard product with many sellers is ideal for driving the price down by auction."],
        ["A cost-plus-award-fee contract, since paper bag costs are highly uncertain", "Paper bag costs are well known."],
        ["A dynamic scope option with team augmentation", "Agile techniques for a commodity? No."],
        ["A single-source contract with one preselected supplier", "Wastes the competition available."]],
        k: "Many sellers, standard product → reverse auction." }
    ],
    flips: [
      { d: 2, f: "Walk through the course's five steps for a reverse auction.", b: "1 Set up a responsive, transparent system to automate it (deadlines, extensions, tracking). 2 Select a well-defined commodity or service, such as paper or window washing. 3 Load the information and open bidding. 4 Monitor the bidding on relevant factors; ask the lowest bidders for samples if quality matters. 5 Compare bids and make an award. Educate vendors who are new to it." }
    ]
  },

  /* ---------------------------------------------------------------- 20 */
  {
    id: "tech",
    title: "Automation and AI in procurement",
    summary: "Modern procurement needs modern technology. Online tools streamline how you solicit, receive, evaluate and award opportunities, and give you a repository where procurement documents can be stored, advertised and accessed. Robotic process automation (RPA) is technology that mimics human actions to automate high-volume, repetitive, rules-based tasks such as receiving forms and processing transactions. Invoice processing is a prime example: instead of receiving invoices by email, retrieving them, checking accuracy, filing them, updating the accounting system and paying them by hand, RPA does it all once you've provided the rules. Benefits: lower expenses, fewer people needed, the ability to scale up quickly for short-term demand, better accuracy and higher productivity, freeing you for higher-value work. AI can help too. Morgan Stanley, with more than 80,000 employees, trained a generative AI chatbot on over 100,000 curated internal documents, to educate front-line staff and let financial advisers search the firm's intellectual capital for answers. In procurement, the course's use case is knowledge management: accumulating, storing and sharing knowledge, ideally in one repository with rigorous version control. Combined with AI, it can keep procurement data up to date using natural language processing (NLP), give better self-help through intelligent chatbots, translate procurement knowledge into other languages with conversational AI, and create cognitive decision trees that suggest the best actions for different procurement scenarios. AI is only as good as the data it's trained on, so keep data correct, curated and updated. Other uses include strategic sourcing, rapid prototyping, supplier relationship management, agile sourcing and smart contracts.",
    figs: ["rpa-invoice"],
    terms: [
      ["Robotic process automation (RPA)", "Technology that mimics human actions to automate high-volume, repetitive, rules-based tasks.", "A bot that collects emailed invoices, checks them, files them, updates the accounts and schedules payment.", 0, "rpa-invoice"],
      ["Knowledge management", "Accumulating, storing and sharing knowledge within an organisation, ideally in one repository with rigorous version control.", "All past contracts, templates and lessons learned, searchable in one place."],
      ["Natural language processing (NLP)", "AI that understands, collects and categorises text and spoken words from various sources.", "Automatically tagging incoming supplier emails by contract and topic."],
      ["Cognitive decision tree", "A set of predefined rules that generates a graphical view of data and can suggest the best action for different procurement scenarios.", "A tree that recommends a micro-purchase, quotes or a tender, depending on value and risk."],
      ["Smart contract", "A contract whose terms are written as code that runs automatically when conditions are met. The course only names it as a future AI use case.", "Payment released automatically when a delivery is scanned in.", 1]
    ],
    cards: [
      { d: 1, q: "What is RPA?", o: [
        ["Technology that mimics human actions to automate repetitive, rules-based tasks", "Correct. RPA bots copy the steps a person takes, to automate repetitive, rules-based work."],
        ["A physical robot arm that picks, packs and dispatches goods in a warehouse", "RPA is software, not a physical robot."],
        ["A type of contract for buying robots and other automation equipment", "Not a contract type."],
        ["A rule that every procurement must be approved by a robot", "Not what RPA means."]],
        k: "RPA = software bots doing rules-based work." },
      { d: 1, q: "Which kind of task is RPA best suited to?", o: [
        ["High-volume, repetitive, rules-based tasks", "Correct. RPA works best on high-volume tasks that follow clear rules."],
        ["Negotiating complex contracts with new vendors", "That needs human judgement."],
        ["Deciding the project's procurement strategy", "Strategy needs people."],
        ["Building relationships with key suppliers", "Relationships need people."]],
        k: "Repetitive and rules-based → automate it." },
      { d: 1, q: "According to the course, what's knowledge management?", o: [
        ["Accumulating, storing and sharing knowledge within an organisation", "Correct. Knowledge management collects, stores and shares what the organisation knows."],
        ["Keeping each person's know-how private so that their job stays protected", "The opposite of sharing."],
        ["Deleting old documents so only current ones remain", "Version control, yes; deleting knowledge, no."],
        ["Training every employee to become a procurement expert", "Not the definition."]],
        k: "Collect it, store it, share it." },
      { d: 2, q: "Which is a benefit of RPA the course lists?", af: "rpa-invoice", o: [
        ["Scaling up fast for short-term peaks", "Correct. Bots can be added quickly to handle short-term spikes in workload."],
        ["No need to define any rules, since the bot works them out for itself", "You provide the rules."],
        ["Better relationships with every supplier", "Not an RPA benefit the course lists."],
        ["Guaranteed lower prices from vendors", "RPA cuts processing cost, not vendor prices."]],
        k: "RPA scales with demand." },
      { d: 2, q: "Why does the course warn about the data behind AI tools?", o: [
        ["AI is only as good as its training data, so keep it correct and current", "Correct. AI learns from its data, so incorrect or outdated data gives poor answers."],
        ["AI tools never need updating once they've been trained on your data", "Data must be kept updated."],
        ["AI always produces the right answer, whatever data it's trained on", "Garbage in, garbage out applies."],
        ["Data should be kept away from AI tools altogether", "Curated data is what makes AI useful."]],
        k: "Curate the data; trust follows." },
      { d: 2, q: "How did Morgan Stanley use generative AI, according to the course?", o: [
        ["A chatbot trained on 100,000+ internal documents", "Correct. It built a chatbot on more than 100,000 internal documents to answer staff questions."],
        ["A robot that processes every client trade automatically, without any staff involved", "Not the course's example."],
        ["A tool that writes all of its contracts without legal review", "Not the course's example."],
        ["An auction platform for buying office supplies", "Not the course's example."]],
        k: "Curated knowledge + GenAI = answers on tap." },
      { d: 2, q: "Which of these is a way AI plus knowledge management can help procurement?", o: [
        ["Intelligent chatbots that give personalised self-help answers faster", "Correct. Chatbots drawing on curated knowledge give people faster, personalised answers."],
        ["Removing any need to store procurement documents in a repository at all", "The repository is the foundation."],
        ["Replacing every contract with a verbal agreement", "Never."],
        ["Choosing vendors without any selection criteria", "Criteria still apply."]],
        k: "Better self-help through chatbots." },
      { d: 3, q: "Your accounts team spends 20 hours a week retrieving emailed invoices, checking them and keying them into the accounts system. What does the course suggest?", o: [
        ["Automate it with RPA, following your rules", "Correct. Retrieving, checking and keying invoices is repetitive and rules-based: ideal for RPA."],
        ["Hire more staff, since invoice work can't be automated", "The course's prime RPA example is exactly this."],
        ["Stop checking invoices for accuracy to save time", "Accuracy checks matter."],
        ["Ask suppliers to post paper invoices instead", "A step backwards."]],
        k: "Invoice processing is RPA's sweet spot." },
      { d: 3, q: "You want a GenAI assistant that answers staff questions about procurement rules. What must you get right first, per the course?", o: [
        ["Accurate, curated, current source documents", "Correct. A GenAI assistant is only as good as the documents behind it, so curate them first."],
        ["The most powerful and expensive AI model currently available on the market", "A great model on bad data still gives bad answers."],
        ["A rule that staff can't ask about contracts", "That defeats the purpose."],
        ["Deleting old documents so the AI has less to read", "Version control, not deletion."]],
        k: "Data first, model second." },
      { d: 2, q: "Which of these does the course list as other AI use cases in procurement?", o: [
        ["Strategic sourcing, supplier relationship management and smart contracts", "Correct, along with rapid prototyping and agile sourcing."],
        ["Hiring new staff, running payroll and writing staff performance reviews", "Those are HR uses."],
        ["Cleaning, catering and facilities bookings", "Not procurement AI use cases."],
        ["Office design, branding and social media posts", "Not procurement AI use cases."]],
        k: "AI reaches across sourcing, suppliers and contracts." }
    ],
    flips: [
      { d: 2, f: "Describe RPA's benefits, using invoice processing as the example.", b: "RPA can take over the whole invoice routine (receive, retrieve, check accuracy, file, update the accounting system and pay) once you set the rules. Benefits: lower expenses, fewer people needed, the ability to scale up quickly for short-term demand, better accuracy (fewer human errors) and higher productivity, freeing you for higher-value work." }
    ]
  }

  ]
});
