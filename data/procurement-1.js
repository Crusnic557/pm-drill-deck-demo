/* Course 4 · Project Procurement Management — from LinkedIn Learning “Project Management Foundations: Procurement” (PMBOK-based).
   Part 1: foundations, the PM's role, key concepts, pitfalls, BPAs, best practices and tailoring, rewarding results.
   Same card format as the other files: first option is correct, the app shuffles. */

PMQ.fig("proc-process", `<svg viewBox="0 0 600 194" role="img" aria-label="The three procurement processes: plan, conduct and control">
<polygon class="acc" points="1,8 185,8 195,23 185,38 1,38"/><text class="tw" x="96" y="27" text-anchor="middle">1 · PLAN</text>
<polygon class="acc" points="203,8 387,8 397,23 387,38 203,38 213,23"/><text class="tw" x="302" y="27" text-anchor="middle">2 · CONDUCT</text>
<polygon class="acc" points="405,8 589,8 599,23 589,38 405,38 415,23"/><text class="tw" x="504" y="27" text-anchor="middle">3 · CONTROL</text>
<rect class="bx" x="1" y="44" width="194" height="122" rx="4"/><rect class="bx" x="203" y="44" width="194" height="122" rx="4"/><rect class="bx" x="405" y="44" width="194" height="122" rx="4"/>
<text class="t2" x="9" y="62">What, how, when to buy</text><text class="t2" x="9" y="78">Make-or-buy decisions</text><text class="t2" x="9" y="94">Procurement plan,</text><text class="t2" x="9" y="110">strategy and SOW</text><text class="t2" x="9" y="126">Selection criteria</text><text class="t2" x="9" y="142">Bid documents: RFP,</text><text class="t2" x="9" y="158">RFQ, RFI, IFB</text>
<text class="t2" x="219" y="62">Advertise; bidder</text><text class="t2" x="219" y="78">conference</text><text class="t2" x="219" y="94">Release the RFP</text><text class="t2" x="219" y="110">Evaluate proposals</text><text class="t2" x="219" y="126">Negotiate</text><text class="t2" x="219" y="142">Select and award</text><text class="t2" x="219" y="158">Sign the contract</text>
<text class="t2" x="421" y="62">Manage relationships</text><text class="t2" x="421" y="78">Monitor performance</text><text class="t2" x="421" y="94">Technical and admin</text><text class="t2" x="421" y="110">compliance, audits</text><text class="t2" x="421" y="126">Change control, claims</text><text class="t2" x="421" y="142">Close each procurement</text><text class="t2" x="421" y="158">Lessons learned</text>
<text class="t" x="1" y="186">Procurement management: plan, conduct, control (PMBOK)</text>
</svg>`);

PMQ.fig("pm-contract-team", `<svg viewBox="0 0 600 206" role="img" aria-label="How the project manager and the contract team share a procurement">
<defs><marker id="ah-pc" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<rect class="bx" x="1" y="8" width="598" height="152" rx="6"/><line class="s2" x1="1" x2="599" y1="84" y2="84"/><line class="s2" x1="92" x2="92" y1="8" y2="160"/>
<text class="t2" x="10" y="42">Project</text><text class="t2" x="10" y="56">manager</text><text class="t2" x="10" y="118">Contract</text><text class="t2" x="10" y="132">team</text>
<rect class="soft" x="100" y="26" width="86" height="40" rx="4"/><text class="tc" x="143" y="43" text-anchor="middle">Define the</text><text class="tc" x="143" y="56" text-anchor="middle">need</text>
<rect class="bx" x="202" y="102" width="86" height="40" rx="4"/><text class="tc" x="245" y="119" text-anchor="middle">Find</text><text class="tc" x="245" y="132" text-anchor="middle">vendors</text>
<rect class="soft" x="304" y="26" width="86" height="40" rx="4"/><text class="tc" x="347" y="43" text-anchor="middle">Say which</text><text class="tc" x="347" y="56" text-anchor="middle">you prefer</text>
<rect class="bx" x="406" y="102" width="86" height="40" rx="4"/><text class="tc" x="449" y="119" text-anchor="middle">Select,</text><text class="tc" x="449" y="132" text-anchor="middle">award</text>
<rect class="soft" x="508" y="26" width="86" height="40" rx="4"/><text class="tc" x="551" y="43" text-anchor="middle">Work with</text><text class="tc" x="551" y="56" text-anchor="middle">vendor</text>
<path class="s" d="M143 66 V122 H199" marker-end="url(#ah-pc)"/><text class="t2" x="150" y="80">share criteria</text>
<path class="s" d="M245 102 V46 H301" marker-end="url(#ah-pc)"/>
<path class="s" d="M347 66 V122 H403" marker-end="url(#ah-pc)"/>
<path class="s" d="M449 102 V46 H505" marker-end="url(#ah-pc)"/>
<text class="t2" x="1" y="180">Large projects: you manage performance; the contract team manages the contract.</text>
<text class="t2" x="1" y="198">Small projects: you may also sign, modify or even cancel contracts.</text>
</svg>`);

PMQ.fig("bpa-flow", `<svg viewBox="0 0 600 186" role="img" aria-label="A blanket purchase agreement with orders placed as needed">
<text class="t2" x="40" y="24">Blanket purchase agreement: no money committed, either side can cancel</text>
<line class="acc-s" x1="40" x2="580" y1="34" y2="34"/>
<rect class="acc" x="99.5" y="88" width="16" height="32"/><text class="t2" x="107.5" y="83" text-anchor="middle">20</text>
<rect class="acc" x="144.5" y="64" width="16" height="56"/><text class="t2" x="152.5" y="59" text-anchor="middle">35</text>
<rect class="acc" x="234.5" y="104" width="16" height="16"/><text class="t2" x="242.5" y="99" text-anchor="middle">10</text>
<rect class="acc" x="369.5" y="56" width="16" height="64"/><text class="t2" x="377.5" y="51" text-anchor="middle">40</text>
<rect class="acc" x="414.5" y="96" width="16" height="24"/><text class="t2" x="422.5" y="91" text-anchor="middle">15</text>
<rect class="acc" x="504.5" y="80" width="16" height="40"/><text class="t2" x="512.5" y="75" text-anchor="middle">25</text>
<line class="s" x1="40" x2="580" y1="120" y2="120"/>
<text class="t2" x="62.5" y="136" text-anchor="middle">1</text><text class="t2" x="107.5" y="136" text-anchor="middle">2</text><text class="t2" x="152.5" y="136" text-anchor="middle">3</text><text class="t2" x="197.5" y="136" text-anchor="middle">4</text>
<text class="t2" x="242.5" y="136" text-anchor="middle">5</text><text class="t2" x="287.5" y="136" text-anchor="middle">6</text><text class="t2" x="332.5" y="136" text-anchor="middle">7</text><text class="t2" x="377.5" y="136" text-anchor="middle">8</text>
<text class="t2" x="422.5" y="136" text-anchor="middle">9</text><text class="t2" x="467.5" y="136" text-anchor="middle">10</text><text class="t2" x="512.5" y="136" text-anchor="middle">11</text><text class="t2" x="557.5" y="136" text-anchor="middle">12</text>
<text class="t2" x="1" y="136">month</text>
<rect class="acc" x="40" y="151" width="12" height="10"/><text class="t2" x="58" y="160">order placed (reams of paper): money is committed for that order only</text>
<text class="t2" x="40" y="178">Same predetermined price every time; no fixed dates or total quantity.</text>
</svg>`);

PMQ.fig("rewards-loop", `<svg viewBox="0 0 600 140" role="img" aria-label="Rewards drive behaviours, and behaviours drive results">
<defs><marker id="ah-rw" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<text class="ta" x="300" y="22" text-anchor="middle">step 1: monitor</text><text class="ta" x="495" y="22" text-anchor="middle">step 2: measure</text>
<rect class="bx" x="30" y="30" width="150" height="44" rx="6"/><text class="tb" x="105" y="57" text-anchor="middle">Rewards</text>
<rect class="bx" x="225" y="30" width="150" height="44" rx="6"/><text class="tb" x="300" y="57" text-anchor="middle">Behaviours</text>
<rect class="soft" x="420" y="30" width="150" height="44" rx="6"/><text class="tb" x="495" y="57" text-anchor="middle">Results</text>
<path class="s" d="M180 52 H221" marker-end="url(#ah-rw)"/><path class="s" d="M375 52 H416" marker-end="url(#ah-rw)"/>
<path class="dash" d="M495 74 V108 H105 V78" marker-end="url(#ah-rw)"/>
<text class="t2" x="300" y="128" text-anchor="middle">reward behaviours that produce results, not effort or hours</text>
</svg>`);

PMQ.course({
  id: "procurement",
  title: "Project Procurement Management",
  short: "Procurement",
  source: "Project Management Foundations: Procurement",
  blurb: "Buying goods and services for projects: the PM's role, contracts and contract types, planning, conducting and controlling procurements, closeout, agile procurement, rapid buying, reverse auctions, automation and AI.",
  topics: [

  /* ---------------------------------------------------------------- 1 */
  {
    id: "proc-basics",
    title: "What procurement management is",
    summary: "Sooner or later you'll need goods and services from outside your team or organisation, and unlike in your personal life, you can't just go and buy them: you need a contract signed first. Procurement means working with external sources such as sellers or vendors: identifying a need, deciding how best to source it, negotiating terms and conditions such as price, and signing contracts. Procurement management coordinates all of that and integrates it into the project. Its objective is to acquire products and services at competitive prices, on favourable terms that let you meet the project's objectives, usually through a legally binding contract that protects your interests and confirms everyone agrees. It also covers administering contracts so all obligations are met. No project is complete until all contracts are closed out, invoices are paid and lessons learned are documented. Managed strategically, procurement lets you negotiate the best possible price, minimise risk and stay organised. The course follows the PMBOK Guide: like project management itself, procurement management means planning, conducting and controlling.",
    figs: ["proc-process"],
    terms: [
      ["Procurement", "Obtaining goods and services from outside your team or organisation: identifying a need, deciding how best to source it, negotiating terms and conditions, and signing contracts.", "Buying a CRM system from a software vendor for a digital marketing project."],
      ["Procurement management", "Managing procurement in a coordinated way, integrated with the project, to get products and services at competitive prices on terms that meet the project's objectives.", "Planning, buying and then administering a fire alarm subcontract as part of a building fit-out."],
      ["Contract", "A legally binding document that protects your interests and records what everyone has agreed.", "A signed agreement covering scope, price, delivery dates and warranties."],
      ["Vendor (seller)", "An external party that provides the goods or services you're procuring.", "The software company supplying the CRM, or the contractor laying railway track."],
      ["Plan, conduct, control", "The three PMBOK procurement processes: Plan Procurement Management, Conduct Procurements and Control Procurements.", "Plan what to buy and how; select a vendor and sign; then manage the contract through to closeout.", 0, "proc-process"]
    ],
    cards: [
      { d: 1, q: "Unlike buying things in your personal life, what does the course say you need before buying for a project?", o: [
        ["A contract signed before you buy", "Correct. Project buying runs through contracts, not a quick trip to the shop."],
        ["A project credit card in your own name", "Some small purchases use purchase cards, but the course's point is that you need a contract."],
        ["A vote from the whole project team", "The team helps define needs, but a vote isn't the requirement."],
        ["Permission from the vendor's head office", "The vendor doesn't authorise your purchase."]],
        k: "On projects, you contract before you buy." },
      { d: 1, q: "What is the objective of procurement management?", o: [
        ["Get products and services at competitive prices, on terms that meet project objectives", "Correct. Price matters, but so do terms that protect the project and results that meet its objectives."],
        ["Buy everything from the cheapest supplier available, whatever the terms or the quality", "Price matters, but the terms and the project's objectives matter too."],
        ["Move all project risk onto vendors through strict penalty clauses", "Minimising risk is a benefit, but shifting all of it isn't the objective."],
        ["Avoid outside vendors wherever possible to keep work in-house", "Procurement is about getting what you need from outside, when that's the right call."]],
        k: "Competitive prices, favourable terms, project objectives met." },
      { d: 1, q: "According to the course, when is a project complete?", o: [
        ["When all contracts are closed out, invoices paid and lessons documented", "Correct. Delivery alone isn't the finish line."],
        ["As soon as the vendor delivers the final product to the site and leaves", "The contracts and paperwork still need closing."],
        ["When the project sponsor signs the final status report", "A status report doesn't close contracts or pay invoices."],
        ["When the last vendor invoice arrives in the accounts inbox", "Arriving isn't the same as paid, and contracts still need closing."]],
        k: "Not done until contracts are closed, invoices paid, lessons documented." },
      { d: 1, q: "Which three processes make up procurement management in the PMBOK Guide, as the course describes it?", af: "proc-process", o: [
        ["Plan, conduct and control procurements", "Correct. You plan what to buy and how, conduct the buying, then control the contracts through to closure."],
        ["Request, approve and pay invoices", "Those are accounts payable steps."],
        ["Source, negotiate and audit suppliers", "These happen inside the processes, but they aren't the three PMBOK processes."],
        ["Initiate, execute and close contracts", "Close, but not the PMBOK process names."]],
        k: "Plan → conduct → control." },
      { d: 2, q: "Which advantages does the course say strong procurement management brings?", o: [
        ["The best possible price, lower risk and an organised process", "Correct. A disciplined process gets better prices, reduces risk and keeps purchasing organised."],
        ["Guaranteed on-time delivery from every vendor you hire", "Good management helps, but nothing guarantees every delivery."],
        ["No further need for a legal review of each contract you sign", "The course recommends legal review of every contract."],
        ["Freedom to change scope without telling the vendor", "Scope changes go through contract change control."]],
        k: "Best price, minimised risk, organised procurement." },
      { d: 2, q: "Procurement management covers more than signing contracts. What else does the course include?", o: [
        ["Administering contracts so that all obligations are met", "Correct. After signing, someone has to make sure both sides deliver."],
        ["Writing the vendor's own internal project plans on its behalf", "The vendor plans its own work."],
        ["Managing the vendor's staff on their own premises", "You manage the contract and performance, not the vendor's people."],
        ["Setting the vendor's prices for its other customers", "That's outside your control entirely."]],
        k: "Signing starts the job; administering finishes it." },
      { d: 2, q: "Which sequence matches the course's description of procurement?", o: [
        ["Identify a need, decide how to source it, negotiate terms, sign the contract", "Correct. Confirm the need first, then the sourcing route, then the terms, and only then sign."],
        ["Pick a favourite vendor, pay a deposit, and write the requirements once work has started", "Requirements come before vendor choice and payment."],
        ["Ask for a discount, sign quickly, then define what you actually need", "Defining the need comes first."],
        ["Sign the contract first, then work out the need and negotiate the price", "Signing comes last, once terms are agreed."]],
        k: "Need → sourcing → terms → contract." },
      { d: 3, q: "Your software vendor delivered everything, but two invoices are unpaid and no lessons learned were captured. Is the project complete?", o: [
        ["No. It isn't complete until contracts are closed, invoices paid and lessons documented", "Correct. Delivery is only part of it; closed contracts, paid invoices and captured lessons finish the job."],
        ["Yes. Delivery of the software is what counts; finance can chase the paperwork later on", "The course is clear that the paperwork is part of finishing."],
        ["Yes, as long as the sponsor has approved the final product demonstration", "Approval of the product doesn't close the contract."],
        ["No, but only because the vendor hasn't sent a satisfaction survey yet", "Surveys aren't the criterion."]],
        k: "Delivery isn't completion." },
      { d: 3, q: "A team signs up for a GenAI writing tool on a manager's credit card, skipping procurement. What's the main risk in the course's terms?", o: [
        ["No agreed terms protect you, such as on data use", "Correct. Without negotiated terms you're on whatever the vendor's standard terms say."],
        ["The tool might turn out cheaper than finance expected, which upsets the budget", "Price isn't the main risk here."],
        ["The vendor is then obliged to refund you at any time you ask", "You can't assume that without a contract."],
        ["GenAI tools can't legally be sold to businesses", "They can; the issue is buying without agreed terms."]],
        k: "A contract exists to protect your interests." }
    ],
    flips: [
      { d: 1, f: "What's the objective of procurement management, in one sentence?", b: "To acquire the products and services the project needs at competitive prices, on favourable terms that let you meet the project's objectives, usually through a legally binding contract, then administer that contract until every obligation is met and it's closed out." }
    ]
  },

  /* ---------------------------------------------------------------- 2 */
  {
    id: "pm-role",
    title: "The project manager's role in procurement",
    summary: "When planning shows you don't have all the resources you need, the typical flow is: you work out what the project needs and share the criteria with your contract team; they identify potential vendors and you can say which you prefer; the contract team selects the winning vendor; then you work with that vendor to complete the project. On large projects you'll most likely work through a contract team: you manage project performance while they manage all aspects of the contract. On smaller projects you may play a more active role and wear multiple hats: your organisation might let you enter into agreements but not administer or modify them, or it might authorise you to sign, modify and even cancel contracts. Either way, stay in the loop and: engage in contract negotiations; work with your team to tailor contracts to the project plan; identify risks early and see that they're built into the contract; make sure all the agreed work is completed; and bring changes to the contract team's attention. Your value comes from understanding the big picture and making sure the contractor's results match the agreed expectations.",
    figs: ["pm-contract-team"],
    terms: [
      ["Contract team", "The specialists who identify potential vendors, select the winner and manage the contract. Often called procurement or contracts staff.", "On a large rail project, the contract team runs the tender while the PM manages delivery.", 0, "pm-contract-team"],
      ["Contracting authority", "The power your organisation gives you to enter into, administer, modify or cancel contracts. It varies by organisation and project size.", "You may sign agreements but need the contracts manager to change one."],
      ["Wearing multiple hats", "The course's description of PMs on smaller projects who handle procurement tasks as well as managing the project.", "On a small office fit-out, the PM writes the brief, gets quotes and signs the order."]
    ],
    cards: [
      { d: 1, q: "In the course's typical flow, what's your first step when you realise the project needs outside resources?", o: [
        ["Work out what the project needs", "Correct. Then you share the criteria with your contract team."],
        ["Ask three vendors for their prices", "Vendors come later, once the need is clear."],
        ["Sign a letter of intent with a vendor", "Far too early; nothing has been defined."],
        ["Tell the sponsor the budget has to grow", "You don't know the cost until you know the need."]],
        k: "Define the need first." },
      { d: 1, q: "On large projects, how does the course split the work between you and the contract team?", o: [
        ["You manage project performance; they manage all aspects of the contract", "Correct. You focus on whether the work delivers; specialists handle the contract's legal and commercial side."],
        ["They manage the project schedule; you manage the contract and its terms", "Reversed. The contract team owns the contract on large projects."],
        ["You both manage the contract together, and nobody manages performance", "Someone has to own performance: that's you."],
        ["You select the winning vendor; they approve your project schedule", "The contract team selects the vendor in the course's flow."]],
        k: "Large projects: you own performance, they own the contract." },
      { d: 1, q: "Who selects the winning vendor in the course's typical flow?", af: "pm-contract-team", o: [
        ["The contract team, after hearing your preference", "Correct. Your view of the vendors matters, but the contract team makes the formal selection."],
        ["You do, alone, since you know the project best", "You give a preference; the contract team selects."],
        ["The vendor with the lowest price automatically wins", "Selection uses criteria, not price alone."],
        ["The project sponsor, without the contract team", "The sponsor isn't the selector in this flow."]],
        k: "You advise; the contract team selects." },
      { d: 2, q: "On smaller projects, what kinds of authority might your organisation give you?", o: [
        ["Anything from signing agreements to modifying or cancelling them", "Correct. It varies by organisation."],
        ["No authority at all, since only lawyers may touch contracts", "PMs on smaller projects often have some authority."],
        ["Unlimited authority, including over the vendor's own staff", "You never control the vendor's staff directly."],
        ["Authority to change a signed contract without telling the vendor first", "No contract can be changed without the other party's agreement."]],
        k: "Know exactly what you're authorised to do." },
      { d: 2, q: "Which of these is one of the five things the course says a PM should do in procurement?", o: [
        ["Identify risks early and make sure they're built into the contract", "Correct. Risks spotted early can be allocated and priced in the contract instead of surfacing as disputes."],
        ["Personally write every clause of every contract on the project", "You help tailor contracts; you don't draft every clause."],
        ["Negotiate only after the contract has been signed by both parties", "Negotiation happens before signing."],
        ["Keep changes away from the contract team to avoid delays", "The opposite: bring changes to their attention."]],
        k: "Get risks into the contract early." },
      { d: 2, q: "Halfway through, you notice the vendor's scope has quietly grown. What does the course say you should do?", o: [
        ["Bring the change to the contract team's attention", "Correct. Scope changes need a formal contract change; quietly absorbing them creates cost and dispute risk."],
        ["Approve it yourself on the spot to keep the work moving along", "That bypasses the contract and the contract team."],
        ["Ignore it, since the contract team manages contracts", "You're expected to stay in the loop and flag changes."],
        ["Stop paying the vendor until scope shrinks again", "Withholding payment isn't the course's approach."]],
        k: "Flag changes; don't absorb them." },
      { d: 3, q: "On a small website project you can sign agreements but not modify them. The vendor proposes a change. What do you do?", o: [
        ["Take it to whoever is authorised to modify the contract", "Correct. Work within your contracting authority."],
        ["Sign the change yourself, since you signed the original", "Signing authority isn't modifying authority."],
        ["Agree verbally, then update the contract at closeout", "Verbal agreements aren't enforceable, and closeout is too late."],
        ["Refuse every change, because you can't modify contracts", "You can't approve it yourself, but the change may still be valid."]],
        k: "Stay inside your authority, but don't block the process." },
      { d: 3, q: "Why does the course say a PM must understand the procurement process even when a contract team handles it?", o: [
        ["So you can add value and check results match the agreed expectations", "Correct. The big picture is your contribution."],
        ["So you can take over from the contract team whenever it falls behind", "That isn't the point the course makes."],
        ["So you can negotiate a personal bonus with the chosen vendor", "That would be a conflict of interest."],
        ["So you can sign contracts without asking the legal department", "Legal review still applies."]],
        k: "Your value is the big picture." }
    ],
    flips: [
      { d: 2, f: "List the five things the course says you should do in procurement, even with a contract team.", b: "1 Engage in contract negotiations. 2 Work with your team to tailor contracts to the project plan. 3 Identify risks early and see that they're built into the contract. 4 Make sure all the agreed work is completed. 5 Bring changes to the contract team's attention." }
    ]
  },

  /* ---------------------------------------------------------------- 3 */
  {
    id: "key-concepts",
    title: "Key procurement concepts",
    summary: "You don't need to be a legal expert to manage procurements, just familiar with how procurement works, so you can add value from the decision-making stage through to contract closeout. Five concepts: there's no one-size-fits-all in contracting, so contracts can be as simple or as detailed as needed; deliverables should be as clear as possible, to reduce misunderstandings and disappointing results; if it isn't in the contract, it isn't legally enforceable, so anything important enough to agree on is important enough to put in writing (no handshake deals on the details); the project team needs to make sure procurement meets the project's needs, because they'll be building what's procured into their work; and have your legal department review every contract before signing. Engage legal early, because a review can take anywhere from a few days to several weeks.",
    terms: [
      ["Legally enforceable", "Able to be upheld by law. In procurement, only what's written in the contract is enforceable.", "A verbal promise of free training can't be enforced unless it's in the contract."],
      ["Deliverable", "A product, result or service the vendor must provide. The clearer it is, the fewer misunderstandings.", "“Install and commission 48 smoke detectors to NZS 4512, with as-built drawings” rather than “do the fire alarms”."],
      ["Legal review", "Your legal department checking a contract before your organisation commits to it. It can take days to weeks.", "Sending the draft software contract to legal two weeks before the planned signing date."],
      ["Handshake deal", "An informal verbal agreement. Details left out of the written contract aren't legally enforceable.", "Agreeing “we'll sort the warranty out later” over coffee."]
    ],
    cards: [
      { d: 1, q: "Do you need to be a legal expert to manage procurements, according to the course?", o: [
        ["No. You need to be familiar with how procurement works", "Correct. Know how procurement works and when to bring in legal and contract specialists."],
        ["Yes. Only qualified lawyers may manage procurements", "The course says you don't need a law degree."],
        ["Yes, at least for any contract worth over $10,000", "The course sets no such threshold."],
        ["No, because the vendor's lawyers handle everything for you", "The vendor's lawyers protect the vendor, not you."]],
        k: "Familiar, not expert." },
      { d: 1, q: "What's the course's rule about things that aren't written in the contract?", o: [
        ["They aren't legally enforceable", "Correct. If it matters, write it down."],
        ["They're enforceable if both sides remember them", "Memory isn't enforceable."],
        ["They're covered automatically by industry custom", "Don't rely on custom; put it in the contract."],
        ["They become enforceable once the first invoice is paid", "Payment doesn't add unwritten terms."]],
        k: "Not in the contract? Not enforceable." },
      { d: 1, q: "Why should deliverables be as clear as possible?", o: [
        ["To reduce misunderstandings and disappointing results later", "Correct. Vague deliverables invite different interpretations, and the gap shows up at acceptance."],
        ["To make the contract longer and therefore stronger in court", "Length isn't strength; clarity is."],
        ["So the vendor can charge a higher price for the clarity", "Clarity helps both sides; it isn't a price premium."],
        ["So the legal team doesn't need to review the contract", "Legal review is still recommended."]],
        k: "Clear deliverables prevent disappointing ones." },
      { d: 1, q: "Who does the course say is best placed to judge whether a procurement meets the project's needs?", o: [
        ["The project team, since they'll build it into their work", "Correct. They'll use what's bought in their own work, so they can best judge whether it fits."],
        ["The vendor, since it knows its own product best", "The vendor knows the product, not your project's needs."],
        ["The finance team, since it approves the payment", "Finance checks the money, not the fit."],
        ["The legal department, since it reviews every contract before signing", "Legal checks the terms, not whether the product fits the work."]],
        k: "The people using it judge whether it fits." },
      { d: 2, q: "How long can a legal review take, according to the course, and what does that mean for you?", o: [
        ["Days to weeks, so engage legal early", "Correct. Reviews take time, so involve legal early enough that the review doesn't hold up the schedule."],
        ["Always under an hour, so leave it until the day you sign", "Reviews can take weeks."],
        ["Several months, so skip it for urgent purchases", "The course says to review all contracts."],
        ["Exactly one week, so book it seven days before signing", "It varies from days to weeks."]],
        k: "Book legal early." },
      { d: 2, q: "A vendor agrees over coffee to include free training. You shake hands on it. What's the problem?", o: [
        ["It isn't legally enforceable unless it's written into the contract", "Correct. If it isn't in the signed contract, the vendor isn't legally bound to deliver it."],
        ["Nothing, since a handshake is a binding contract in every country", "Don't rely on that; the course says get it in writing."],
        ["Training can never be included in a supply contract", "It can, if it's written in."],
        ["The vendor must now charge for the training separately by law", "No such rule; it just isn't enforceable."]],
        k: "Important enough to agree on? Important enough to write down." },
      { d: 2, q: "What does “no one-size-fits-all” mean for contracts?", o: [
        ["As simple or as detailed as the work needs", "Correct. Match the contract's level of detail to the work's size, complexity and risk."],
        ["Every contract must use your organisation's one standard template", "That's one size for all."],
        ["Contracts should always be as long and detailed as possible", "Detail should match the need."],
        ["Only small purchases need a written contract at all", "All procurements need agreed terms."]],
        k: "Fit the contract to the job." },
      { d: 3, q: "You're buying a fire alarm subcontract. Which deliverable description best follows the course's advice?", o: [
        ["Install and commission 48 smoke detectors to NZS 4512, with as-built drawings", "Correct. Specific, measurable and checkable."],
        ["Do the fire alarms to a good standard, like last time", "Vague: “good” and “like last time” invite disputes."],
        ["Provide fire protection services as required by the project", "Too broad to check or enforce."],
        ["Supply whatever detectors the subcontractor thinks are best, and install them", "That hands the definition of the deliverable to the vendor."]],
        k: "Specific, measurable, checkable." },
      { d: 3, q: "A contract needs signing by Friday, and legal hasn't seen it. What's the course-aligned move?", o: [
        ["Get legal's review before signing, and engage them earlier next time", "Correct. Signing without legal review risks unfavourable terms; plan legal's time in next time."],
        ["Sign it anyway; legal can review it after the work has started", "Reviewing after signing doesn't protect you."],
        ["Ask the vendor's lawyer to review it on your behalf", "The vendor's lawyer represents the vendor."],
        ["Remove the clauses legal would object to, then sign without review", "Guessing isn't a review."]],
        k: "Never sign without legal's eyes on it." }
    ],
    flips: [
      { d: 1, f: "What are the five key procurement concepts from the course?", b: "1 There's no one-size-fits-all: contracts can be as simple or as detailed as needed. 2 Make deliverables as clear as possible. 3 If it's not in the contract, it's not legally enforceable, so get it in writing. 4 The project team checks that procurement meets the project's needs. 5 Have legal review every contract before signing, and engage them early." }
    ]
  },

  /* ---------------------------------------------------------------- 4 */
  {
    id: "pitfalls",
    title: "Conflicts of interest and unclear objectives",
    summary: "Two common pitfalls. First, conflicts of interest. You're buying CRM software for a digital marketing project, and a college friend offers special pricing from his company. Even if there's no actual conflict, it could be perceived as one. It becomes a conflict of interest when a decision would put your personal interests above those of your team or organisation, so serving one undermines the other. When you wear multiple hats there may be few checks and balances, so it's up to you. Manage perception: be transparent in your actions, share information with your organisation, include others in the decision, remove yourself from the decision, or bring in an independent party to evaluate the options. Declare your own potential biases and look for biases in others; done well, you might still use your friend's company: a win-win-win. Second, failing to communicate objectives. Garbage in, garbage out: vendors aren't mind readers, and if your intentions aren't clear, they'll interpret what you want. There's no such thing as a simple software purchase. Give vendors a macro perspective of the overall project, a synopsis of what you're currently working with, and specific details of what you want the solution to accomplish.",
    terms: [
      ["Conflict of interest", "When a decision would put your personal interests above the interests of your team or organisation, so serving one undermines the other.", "Choosing a friend's company because of the friendship, not the merits."],
      ["Perceived conflict of interest", "A situation that looks like a conflict of interest even if there isn't one. It has to be managed just as carefully.", "Buying from a former colleague's firm at a fair price, without telling anyone about the connection."],
      ["Independent party", "Someone with no stake in the outcome who evaluates the options, removing any appearance of bias.", "A manager from another department scores the CRM proposals."],
      ["Garbage in, garbage out", "What you get out can only be as good as what you put in. Unclear requirements produce poor results.", "A vague brief produces a CRM that doesn't fit your sales process."],
      ["Fit for purpose", "Able to do the job it was bought for, in your situation.", "A CRM that syncs with your email platform and tracks your own sales stages."]
    ],
    cards: [
      { d: 1, q: "When does a situation become a conflict of interest, according to the course?", o: [
        ["When personal interest outranks your organisation's", "Correct. The conflict arises when personal gain could outweigh what's best for your organisation."],
        ["Whenever you personally know anyone who works at one of the bidding vendors", "Knowing someone isn't a conflict by itself; it depends on the decision."],
        ["Only when money changes hands between you and a vendor", "Conflicts don't require money to change hands."],
        ["Only when a vendor offers you a gift worth over $100", "The course sets no gift threshold."]],
        k: "Personal interest over organisational interest = conflict." },
      { d: 1, q: "Does it matter if a conflict of interest is only perceived, not actual?", o: [
        ["Yes. Perception has to be managed just as carefully", "Correct. Even the appearance of a conflict damages trust, so it needs the same care as a real one."],
        ["No. Only an actual, proven conflict needs any action at all", "The course says perception matters."],
        ["Only if the vendor complains about it", "You manage it before anyone complains."],
        ["Only on government projects", "It applies everywhere."]],
        k: "Manage perception, not just reality." },
      { d: 1, q: "Which of these is one of the course's ways to manage a potential conflict of interest?", o: [
        ["Remove yourself from the decision-making process", "Correct. Stepping out of the decision takes your personal interest out of it."],
        ["Keep the relationship quiet so it doesn't distract anyone", "Secrecy makes the perception worse."],
        ["Ask your friend to lower the price even further", "That deepens the conflict."],
        ["Make the decision quickly before anyone asks questions", "Speed doesn't remove the conflict."]],
        k: "Step back, open up, bring others in." },
      { d: 2, q: "Your college friend offers special pricing on CRM software. Which response best follows the course?", o: [
        ["Declare the relationship and have an independent party evaluate the options", "Correct. You might still end up using his company, fairly."],
        ["Accept the offer quietly, since special pricing helps the project's budget", "Quiet acceptance is exactly what creates a perceived conflict."],
        ["Refuse to consider his company under any circumstances", "Not necessary; managed properly, his company can compete."],
        ["Ask him to bid under a different company name", "That's concealment."]],
        k: "Declare, then let someone independent decide." },
      { d: 2, q: "Why does the course say conflicts of interest are a bigger risk when you wear multiple hats?", o: [
        ["There may be few checks and balances", "Correct. When one person holds several roles, fewer people check their decisions."],
        ["You'll have less time to read proposals carefully", "Possibly, but not the course's point."],
        ["Vendors are more likely to offer bribes to busy people", "Not the course's point."],
        ["The legal team no longer reviews the contracts you sign yourself", "Legal review should still happen."]],
        k: "Fewer checks means more responsibility on you." },
      { d: 1, q: "What does “garbage in, garbage out” mean in procurement?", o: [
        ["Unclear requirements in, poor results out", "Correct. Vendors can only deliver what you describe, so vague requirements produce poor results."],
        ["Vendors should take away the packaging waste after delivery", "A nice idea, but not the meaning."],
        ["Cheap inputs always produce expensive outputs", "Not the meaning."],
        ["Poor-quality vendors should be removed from the approved supplier list", "Not the meaning."]],
        k: "Clear in, quality out." },
      { d: 2, q: "Which three things does the course say to give a vendor so they don't have to read your mind?", o: [
        ["The big picture, what you're working with now, and what the solution must do", "Correct. With the big picture, the current state and the required functions, vendors can propose a real fit."],
        ["Your budget ceiling, your hard deadline, and every competitor's quote so far", "Sharing competitors' quotes isn't fair or recommended."],
        ["A draft contract, a purchase order and a payment schedule", "Paperwork isn't the same as a clear brief."],
        ["Your org chart, your logo files and your brand guidelines", "Useful sometimes, but not the course's three things."]],
        k: "Macro view, current state, specific needs." },
      { d: 3, q: "You asked a vendor for “a simple CRM” and got one that can't connect to your email platform. What went wrong, in the course's terms?", o: [
        ["You didn't spell out what the software must do or how it would fit in", "Correct. There's no such thing as a simple software purchase."],
        ["The vendor should have read your mind about the integration", "Mind reading is not allowed in procurement."],
        ["Software vendors always cut corners on cheap orders", "The brief was the problem, not the order size."],
        ["CRM systems are far too complex to buy from any outside vendor at all", "They can be bought; they just need a clear brief."]],
        k: "If it matters, specify it." },
      { d: 3, q: "Your team uses an AI tool to score vendor proposals, and the tool was supplied by one of the bidders. What's the issue?", o: [
        ["A perceived conflict of interest; bring in an independent evaluation", "Correct. The bidder has a stake in how the scoring works."],
        ["None at all, because AI scoring tools are always neutral by design", "Tools reflect how they're built and trained."],
        ["The AI should be asked whether it's biased", "Its answer wouldn't settle the perception problem."],
        ["Only the winning bidder should be told about it", "Transparency means telling the organisation."]],
        k: "Perception covers tools as well as people." }
    ],
    flips: [
      { d: 2, f: "List the course's five ways to manage a potential conflict of interest.", b: "Be transparent in your actions; share information with your organisation; include others in the decision-making process; remove yourself from the decision; bring in an independent party to evaluate the options. Declare your own potential biases, and look for biases in others." },
      { d: 2, f: "Brief a vendor on a CRM purchase so there's no mind reading.", b: "Macro perspective: the digital marketing project and why it's needed. Current situation: the tools and data you work with now, such as your email platform and spreadsheets. Specific details: what the CRM must do (track leads through your sales stages, sync with email, report weekly) and how it will be integrated into the project." }
    ]
  },

  /* ---------------------------------------------------------------- 5 */
  {
    id: "bpa",
    title: "Blanket purchase agreements",
    summary: "A blanket purchase agreement (BPA) is a purchase order a buyer makes with a vendor that lets them place future orders without committing to exact dates and quantities: a simplified way to buy goods at a predetermined price. It sets out terms and conditions, descriptions of the goods or services, their pricing, and how orders will be placed. Businesses use BPAs for things they'll buy more than once, like the break-room supplies you order from the intranet. A BPA isn't a contract: it doesn't obligate money or require the buyer to order anything, and either party can cancel it at any time. Money is only obligated when an order is placed. Advantages: flexibility to place future orders quickly at predetermined prices, no commitment to an exact total quantity, discounts negotiated in advance for large purchases, a streamlined ordering process with lower admin costs, and no need to keep large stocks on hand. An engineering office that uses paper every month can get it fast without worrying about price swings. BPAs may not suit an organisation that keeps poor purchasing records and struggles to forecast, doesn't buy on a recurring basis, or is unstable and reluctant to commit to fixed prices. Don't marry yourself to BPAs at the expense of better methods.",
    figs: ["bpa-flow"],
    terms: [
      ["Blanket purchase agreement (BPA)", "An agreement with a vendor to place future orders at predetermined prices, without committing to exact dates or quantities.", "An engineering office orders printer paper whenever it runs low, at the agreed price.", 0, "bpa-flow"],
      ["Obligated money", "Funds legally committed to a purchase. Under a BPA, money is only obligated when an order is placed.", "Nothing is committed when the BPA is signed; the cost of 40 reams is committed when you order them."],
      ["Predetermined price", "A price agreed in advance that applies to future orders.", "Paper at the same price per ream for the next 12 months, whatever the market does."]
    ],
    cards: [
      { d: 1, q: "What is a blanket purchase agreement?", af: "bpa-flow", o: [
        ["An agreement to place future orders at set prices, without fixed dates or quantities", "Correct. Prices and terms are agreed up front; you place orders as and when you need them."],
        ["A binding contract to buy a fixed total quantity on fixed dates at a fixed price", "That's the opposite: a BPA avoids committing to dates and quantities."],
        ["An insurance policy covering goods damaged in transit", "Not a BPA."],
        ["A deposit paid up front to reserve a vendor's capacity", "No money is committed until an order is placed."]],
        k: "Set prices now; order when you need to." },
      { d: 1, q: "Is a BPA a contract, according to the course?", o: [
        ["No. It commits no money and no orders", "Correct. It sets terms and prices, but money is committed only when an order is placed."],
        ["Yes. It legally commits you to buying a minimum total quantity each year", "There's no committed quantity."],
        ["Yes, once both parties have signed the pricing schedule", "Signing still doesn't obligate money."],
        ["No, because it's only ever agreed verbally", "It's written down; it just doesn't obligate money."]],
        k: "A BPA isn't a contract; each order is the commitment." },
      { d: 1, q: "When is money obligated under a BPA?", o: [
        ["Only when an order is placed", "Correct. Each order placed under the BPA is the actual commitment of funds."],
        ["When the BPA is signed", "Signing commits no money."],
        ["At the end of each financial year", "Not under a BPA."],
        ["When the vendor sends its price list", "A price list commits nothing."]],
        k: "Order placed = money committed." },
      { d: 2, q: "Which of these is an advantage of a BPA, according to the course?", o: [
        ["Bulk discounts can be negotiated in advance", "Correct. Agreeing prices in advance lets you lock in volume discounts without committing to totals."],
        ["It guarantees the vendor a fixed total order quantity", "There's no committed total quantity."],
        ["It removes any need to describe the goods or services being bought", "A BPA includes descriptions of the goods or services."],
        ["It locks both parties in so neither can ever cancel", "Either party can cancel at any time."]],
        k: "Pre-negotiated discounts, no fixed totals." },
      { d: 2, q: "Which situation does the course say makes a BPA a poor fit?", o: [
        ["Poor records make future needs hard to forecast", "Correct. Without good records you can't forecast what you'll order, so set prices are hard to agree."],
        ["You buy the same office supplies every single month", "That's the ideal case for a BPA."],
        ["You'd like to avoid holding large quantities of supplies in the storeroom", "That's an advantage of a BPA."],
        ["You want to reduce the admin cost of ordering", "Another advantage."]],
        k: "No records, no recurring need, or no appetite for fixed prices: rethink the BPA." },
      { d: 2, q: "Who can cancel a BPA, and when?", o: [
        ["Either party, at any time", "Correct. Because it commits no money, either side can end it at any time."],
        ["Only the buyer, with 90 days' notice", "The course says either party, any time."],
        ["Only the vendor, at the end of the year", "Not as the course describes it."],
        ["Neither party, until all the goods are ordered", "There's no set total to order."]],
        k: "Easy in, easy out." },
      { d: 3, q: "Your campus store reorders the same drinks every week from one distributor, but quantities swing with the semester. Is a BPA-style arrangement a good fit?", o: [
        ["Yes. Recurring orders, varying quantities and set prices suit a BPA", "Correct. The need recurs, quantities vary and set prices help: exactly what a BPA handles."],
        ["No. BPAs only work when every single order is exactly the same size", "Varying quantities are exactly what BPAs handle."],
        ["No. Weekly orders are too frequent for a BPA", "Frequent recurring orders suit a BPA."],
        ["Yes, but only if you commit to a fixed annual quantity", "A BPA needs no fixed quantity."]],
        k: "Recurring need plus uncertain quantity = BPA territory." },
      { d: 3, q: "A start-up in a volatile market is reluctant to commit to fixed prices and needs a component only once. What's the course's view on a BPA?", o: [
        ["It's probably not the right tool; explore other procurement methods", "Correct. One-off purchases and price instability both count against it."],
        ["Use a BPA anyway, since the advantages always outweigh the disadvantages", "Usually, but not here: there's no recurring need."],
        ["Sign a BPA with the highest-priced vendor to reduce risk", "Price doesn't fix the mismatch."],
        ["Use a BPA but hide it from finance so prices stay flexible", "Concealment is never the answer."]],
        k: "A time and a place for everything, including BPAs." }
    ],
    flips: [
      { d: 2, f: "List the five BPA advantages from the course.", b: "1 Flexibility to place future orders quickly at predetermined prices. 2 No commitment to an exact total quantity. 3 Discounts for large purchases negotiated in advance. 4 A streamlined ordering process with lower administrative costs. 5 No need to keep large quantities of supplies on hand." }
    ]
  },

  /* ---------------------------------------------------------------- 6 */
  {
    id: "best-practices",
    title: "Best practices and tailoring",
    summary: "“If you do what you've always done, you'll get what you've always gotten.” Study procurement best practices and lessons learned from previous projects, and weigh up your current situation. Get involved in contracting as early in the project life cycle as possible: you can help develop optimal contracts, check that requirements and constraints such as the schedule and budget are realistic, evaluate proposals and give feedback, and analyse risks that might threaten success. Keep your procurement team informed throughout, including how the vendor is doing. Build change management into the contract, because unforeseen events will happen. Near the end, make sure the vendor's work is complete, objectives are met and deliverables are fully accepted before telling the contract team the vendor has met its project obligations. Procurement also isn't one-size-fits-all, so tailor it to each project, considering multiple procurements with different vendors, vendor availability and how well procurement integrates with the project. The course's four tailoring steps: understand your organisation's current procurement process (standards, who can sign, approval levels, rules for changing the process); decide which techniques are necessary (for example, buy directly from a pre-approved vendor rather than run a large bidding process); create procurement guidelines and checklists, which also give you a baseline; and monitor your procurements' progress instead of “set it and forget it”.",
    terms: [
      ["Approval levels", "Spending limits above which a purchase needs sign-off from someone more senior.", "Purchases over $10,000 need the finance director's approval."],
      ["Pre-approved vendor", "A vendor your organisation has already vetted, so you can buy directly without a full bidding process.", "Ordering laptops straight from the IT supplier on the approved panel."],
      ["Procurement guidelines and checklists", "Documented rules for when and how to use each procurement technique. They also give you a baseline to review progress against.", "A checklist saying when three quotes are needed and when one is enough."],
      ["Tailoring", "Customising procurement techniques to fit each project's specific needs, rather than using the same routine every time.", "A full tender for a $2M fit-out, but a direct order from a pre-approved vendor for a $3,000 sensor."]
    ],
    cards: [
      { d: 1, q: "When does the course say you should get involved in the contracting process?", o: [
        ["As early in the life cycle as possible", "Correct. The earlier you're involved, the more you can shape requirements, timing and terms."],
        ["Once the contract team has signed the contract", "By then your input can't shape it."],
        ["Only once a vendor has started missing its deadlines", "Waiting for problems is too late."],
        ["At closeout, to check the final invoices", "Far too late to add value."]],
        k: "Early involvement, better contracts." },
      { d: 1, q: "Which of these is a benefit of getting involved early?", o: [
        ["You can check the schedule and budget are realistic", "Correct. Early on, you can still align the contract's schedule and budget with the project's."],
        ["You avoid having to read any of the proposals", "Early involvement includes evaluating proposals."],
        ["You can pick the winning vendor without involving the contract team", "You work with the contract team, not around it."],
        ["You can skip the legal review of the contract", "Legal review still applies."]],
        k: "Early means realistic requirements and constraints." },
      { d: 1, q: "What are the course's four tailoring steps, in order?", o: [
        ["Understand the process, pick techniques, write guidelines, monitor", "Correct. Understand how buying works now, choose suitable techniques, document them, then monitor and adjust."],
        ["Pick a vendor, sign quickly, pay early, review at the end", "Not tailoring at all."],
        ["Copy the last project, skip checklists, set it and forget it", "The opposite of tailoring."],
        ["Write the checklists first, then understand the process, then pick vendors", "Understanding the process comes first."]],
        k: "Understand → choose → document → monitor." },
      { d: 2, q: "What should you find out when you study your organisation's current procurement process?", o: [
        ["Its standards, who can sign, approval levels and rules for changing it", "Correct. Know the standards, signing authority, approval levels and change rules before you tailor anything."],
        ["The vendors' profit margins and their staff salaries", "Not yours to know, and not the point."],
        ["Which vendors your competitors and industry peers have recently used", "That's market research, not your own process."],
        ["How far over budget your last three projects ran", "Useful lessons, but not the process itself."]],
        k: "Know the rules before you tailor them." },
      { d: 2, q: "A small purchase is needed quickly and a pre-approved vendor offers it. What does the course's tailoring advice suggest?", o: [
        ["Buy directly from the pre-approved vendor instead of a large bidding process", "Correct. Use only the techniques the purchase needs."],
        ["Always run a full, open bidding process, whatever the size of the purchase", "That's one-size-fits-all."],
        ["Ask the vendor to set the price and the delivery terms", "You still agree terms."],
        ["Delay the purchase until next year's budget cycle", "No reason to delay."]],
        k: "Match the technique to the size of the deal." },
      { d: 2, q: "Why create procurement guidelines and checklists?", o: [
        ["To know when to change techniques, with a baseline", "Correct. Written guidelines give you a baseline, so you can see when a technique isn't working and change it."],
        ["So vendors can see your internal approval process and plan their bids around it", "They're for your team, not for vendors' tactics."],
        ["Because checklists replace monitoring once they're written", "You still need to monitor."],
        ["So nobody ever needs to change a technique again", "They make changing techniques easier, not unnecessary."]],
        k: "Documented techniques can be reviewed and improved." },
      { d: 2, q: "Why does the course say to build change management into the contract?", o: [
        ["Unforeseen events will come up, and procurements may need modifying", "Correct. Change is inevitable, so the contract should say how changes are requested and agreed."],
        ["So the vendor can change its price whenever costs go up on its side", "Change management controls changes; it doesn't hand them to one side."],
        ["Because changes are banned once a contract is signed", "Changes are allowed through the agreed process."],
        ["So you never need to talk to the contract team again", "You work with them on changes."]],
        k: "Expect change; plan for it in the contract." },
      { d: 3, q: "Near the end of your project, the vendor says it's done and asks you to tell the contract team. What should you check first?", o: [
        ["Work complete, objectives met and deliverables fully accepted", "Correct. Confirm the work is complete, objectives are met and deliverables are accepted before reporting it done."],
        ["That the vendor's final invoice is the right amount", "Important later, but not the first check."],
        ["That the vendor's team is free to start on your next project straight away", "Irrelevant to completing this contract."],
        ["That the vendor has submitted a satisfaction survey", "Not the course's check."]],
        k: "Accept the work before you report it done." },
      { d: 3, q: "Your organisation buys every project's equipment the same way, whatever the size or risk. A complex hospital BMS upgrade is next. What's your advice?", o: [
        ["Tailor the approach: consider the vendors, their availability and integration", "Correct. Run-of-the-mill techniques don't always work."],
        ["Keep the usual routine, since consistency always beats tailoring in the end", "The course says procurement isn't one-size-fits-all."],
        ["Let the BMS vendor design your procurement process", "That's a conflict of interest."],
        ["Skip monitoring, since the routine has worked before", "Monitoring is step four of tailoring."]],
        k: "Complex projects need tailored procurement." }
    ],
    flips: [
      { d: 2, f: "What does the course say you gain by getting involved in contracting early?", b: "You can work with procurement to develop optimal contracts; make sure requirements and constraints, like the schedule and budget, are realistic; evaluate proposals and give feedback; and analyse risks that might interfere with project success." },
      { d: 2, f: "Walk through the four tailoring steps.", b: "1 Understand the current procurement process: standards, who can sign, approval levels, rules for changing it. 2 Decide which techniques are necessary, such as buying directly from a pre-approved vendor instead of a large bidding process. 3 Create guidelines and checklists, which also give you a baseline. 4 Monitor progress: are vendors delivering as expected? Adjust if not." }
    ]
  },

  /* ---------------------------------------------------------------- 7 */
  {
    id: "vendor-results",
    title: "Rewarding vendor behaviours and results",
    summary: "Rewards drive behaviours, and behaviours drive results. Reward behaviours that produce results, not effort and time spent: you're paid to deliver results, and customers pay for results, so hold vendors to the same standard. Start by discussing your needs with vendors up front and documenting them in writing, so you're on the same page and can refer back when issues arise, as they will. Under tight deadlines you'll be tempted to skip this or take a “set it and forget it” approach. Don't: speed matters, but don't cut corners. Vendors need to be held accountable, with a balanced approach that makes sure their behaviours produce the agreed results. The course's two steps: proactively monitor the vendor's behaviours, seeing what actions they're taking and how they produce results (are processes in place to keep scope under control? If not, raise it at a status meeting); then measure their results, the only way to fully hold them accountable. What gets measured gets done, and what gets done can be improved.",
    figs: ["rewards-loop"],
    terms: [
      ["Rewards drive behaviours", "The course's principle that what you reward shapes what vendors do, and what they do shapes the results.", "Paying on accepted deliverables, not hours logged, encourages finishing rather than filling time.", 0, "rewards-loop"],
      ["Set it and forget it", "Signing a contract and then not monitoring the vendor. The course warns against it.", "Not checking in for two months, then finding the work has drifted off scope."],
      ["Vendor accountability", "Holding a vendor responsible for the agreed results by monitoring its behaviours and measuring its results.", "Monthly reviews of a cleaning contractor's audit scores against the contract's standards."]
    ],
    cards: [
      { d: 1, q: "Complete the course's principle: “Rewards drive behaviours, and behaviours drive…”", o: [
        ["…results.", "Correct. What you reward shapes how vendors behave, and that behaviour produces the results."],
        ["…costs.", "Not the principle."],
        ["…contracts.", "Not the principle."],
        ["…relationships.", "Not the principle."]],
        k: "Rewards → behaviours → results." },
      { d: 1, q: "What should you reward vendors for, according to the course?", o: [
        ["Behaviours that produce results", "Correct. Reward the behaviours that lead to the results you want, not activity for its own sake."],
        ["The number of hours they've worked", "Hours are effort, not results."],
        ["How busy their staff appear to be", "Busyness isn't a result."],
        ["Effort, even if no results appear", "The course says reward results, not effort."]],
        k: "Pay for results, not effort." },
      { d: 1, q: "What's the starting point for making sure vendors deliver?", o: [
        ["Agree your needs up front, in writing", "Correct. Then you can refer back when issues arise."],
        ["Pay the full contract value in advance as a goodwill gesture", "That removes your leverage."],
        ["Wait to see what the vendor delivers, then react", "That's set it and forget it."],
        ["Let the vendor decide what your needs are", "Your needs are yours to define."]],
        k: "Agree it, then write it down." },
      { d: 2, q: "What are the course's two steps for encouraging the right vendor behaviours?", af: "rewards-loop", o: [
        ["Monitor behaviours, then measure results", "Correct. Watch how vendors work, then check whether it produces the results you need."],
        ["Measure their invoices first, then reduce their payments where possible", "That's cost-cutting, not accountability."],
        ["Set it and forget it, then review everything at closeout", "The course warns against this."],
        ["Reward effort first, then results if there's budget left", "Reward results, not effort."]],
        k: "Monitor behaviours; measure results." },
      { d: 2, q: "Under a tight deadline, a colleague suggests skipping the up-front needs discussion with a vendor. What's the course's advice?", o: [
        ["Don't skip it. Speed matters, but cutting corners costs more later", "Correct. Skipping alignment saves days now but causes rework and disputes later."],
        ["Skip it this time, since speed is the only thing that really matters now", "The course explicitly says don't."],
        ["Skip it, and let the vendor guess what you need", "That's mind reading."],
        ["Ask the vendor to write your needs for you instead", "Your needs must come from you."]],
        k: "Speed is no excuse for skipping alignment." },
      { d: 2, q: "In a status meeting, which question shows you're monitoring a vendor's behaviour, not just its output?", o: [
        ["Are processes keeping scope in check?", "Correct. It looks at how they produce results."],
        ["Exactly how many hours did each of your staff members work last week?", "Hours measure effort, not behaviour that drives results."],
        ["When will the next invoice be sent?", "That's admin, not behaviour."],
        ["Would you like a bigger contract next year?", "Not monitoring at all."]],
        k: "Look at how the work is being done." },
      { d: 3, q: "A maintenance contractor is paid by the hour, and jobs keep taking longer. What does the course's principle suggest?", o: [
        ["Reward results: tie payment to completed jobs meeting agreed standards", "Correct. Hourly pay rewards time, not results."],
        ["Pay a higher hourly rate so the contractor feels more motivated to finish", "That rewards time even more."],
        ["Stop measuring, because it upsets the contractor", "What gets measured gets done."],
        ["Ask the contractor to log even more detailed timesheets", "More detail on effort still isn't a result."]],
        k: "If you reward hours, you get hours." },
      { d: 3, q: "“What gets measured gets done.” How does the course use this idea?", o: [
        ["Measuring results is the only way to fully hold vendors accountable", "Correct. And what gets done can then be improved."],
        ["Measuring lets you pay vendors less than the contract price says", "Measurement isn't a way to underpay."],
        ["Vendors should measure your team's performance too", "Not the course's point."],
        ["Only measurable work should go into a contract", "Not quite the point; it's about accountability."]],
        k: "Measure to hold accountable, then to improve." }
    ],
    flips: [
      { d: 2, f: "How do you hold a vendor accountable, according to the course?", b: "Discuss your needs up front and document them in writing. Then take the two-step approach: proactively monitor the vendor's behaviours (what actions are they taking, and are processes in place to control scope?) and measure their results. Reward the behaviours that lead to the results you want, not effort or time spent." }
    ]
  }

  ]
});
