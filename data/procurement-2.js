/* Course 4 · Project Procurement Management. Part 2: contract change control, planning, research, contract types,
   conducting procurements (solicitation), negotiation and award, and controlling procurements. */

PMQ.fig("contract-change", `<svg viewBox="0 0 600 198" role="img" aria-label="The four steps of contract change control">
<defs><marker id="ah-cc" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<rect class="dash" x="2" y="6" width="596" height="30" rx="4"/><text class="t2" x="300" y="25" text-anchor="middle">Ties into integrated change control: scope · schedule · budget</text>
<rect class="bx" x="6" y="50" width="132" height="50" rx="5"/><text class="tc" x="72" y="71" text-anchor="middle">1 Change request</text><text class="tc" x="72" y="87" text-anchor="middle">form: what, why</text>
<rect class="bx" x="158" y="50" width="132" height="50" rx="5"/><text class="tc" x="224" y="71" text-anchor="middle">2 Assess impact:</text><text class="tc" x="224" y="87" text-anchor="middle">risks, benefits</text>
<rect class="bx" x="310" y="50" width="132" height="50" rx="5"/><rect class="acc-s" x="310" y="50" width="132" height="50" rx="5"/><text class="tc" x="376" y="71" text-anchor="middle">3 Accept or</text><text class="tc" x="376" y="87" text-anchor="middle">reject</text>
<rect class="bx" x="462" y="50" width="132" height="50" rx="5"/><text class="tc" x="528" y="71" text-anchor="middle">4 Update contract</text><text class="tc" x="528" y="87" text-anchor="middle">and the plan</text>
<path class="s" d="M138 75 H155" marker-end="url(#ah-cc)"/><path class="s" d="M290 75 H307" marker-end="url(#ah-cc)"/><path class="s" d="M442 75 H459" marker-end="url(#ah-cc)"/>
<path class="s" d="M376 100 V115" marker-end="url(#ah-cc)"/>
<rect class="note" x="310" y="118" width="132" height="48" rx="3"/><text class="tn" x="318" y="135">Contract change</text><text class="tn" x="318" y="148">log: decision</text><text class="tn" x="318" y="161">and reason</text>
<text class="t2" x="462" y="122">How it's done is</text><text class="t2" x="462" y="138">the vendor's job</text>
<text class="t2" x="6" y="122">Small or agile: minimal documentation</text><text class="t2" x="6" y="138">Large or waterfall: change control board</text><text class="t2" x="6" y="154">and a dispute resolution process</text>
<text class="t2" x="6" y="190">The only way to modify a signed contract. Record approved and denied changes.</text>
</svg>`);

PMQ.fig("plan-outputs", `<svg viewBox="0 0 600 216" role="img" aria-label="Plan procurement management and its outputs">
<rect class="acc" x="1" y="8" width="598" height="34" rx="4"/><text class="tw" x="300" y="30" text-anchor="middle">PLAN PROCUREMENT MANAGEMENT: WHAT, HOW AND WHEN TO BUY</text>
<rect class="bx" x="1" y="52" width="192" height="64" rx="4"/><text class="tb" x="11" y="71">Procurement plan</text><text class="t2" x="11" y="88">coordination, constraints,</text><text class="t2" x="11" y="104">risks, prequalified sellers</text>
<rect class="bx" x="204" y="52" width="192" height="64" rx="4"/><text class="tb" x="214" y="71">Procurement strategy</text><text class="t2" x="214" y="88">the overall approach</text><text class="t2" x="214" y="104">to buying</text>
<rect class="bx" x="407" y="52" width="192" height="64" rx="4"/><text class="tb" x="417" y="71">Procurement SOW</text><text class="t2" x="417" y="88">what's being bought, plus</text><text class="t2" x="417" y="104">a high-level budget</text>
<rect class="bx" x="1" y="124" width="192" height="64" rx="4"/><text class="tb" x="11" y="143">Selection criteria</text><text class="t2" x="11" y="160">set with scope, schedule,</text><text class="t2" x="11" y="176">risks and budget in mind</text>
<rect class="bx" x="204" y="124" width="192" height="64" rx="4"/><text class="tb" x="214" y="143">Bid documents</text><text class="t2" x="214" y="160">RFP, RFQ, RFI, IFB: need,</text><text class="t2" x="214" y="176">response, criteria</text>
<rect class="bx" x="407" y="124" width="192" height="64" rx="4"/><text class="tb" x="417" y="143">Make-or-buy</text><text class="t2" x="417" y="160">in-house, or from</text><text class="t2" x="417" y="176">an outside vendor?</text>
<text class="t2" x="1" y="208">Also weigh the triple bottom line and legal, regulatory and technical rules.</text>
</svg>`);

PMQ.fig("contract-matrix", `<svg viewBox="0 0 600 222" role="img" aria-label="The four contract types: how vendors are paid and when each is best">
<text class="t2" x="8" y="20">TYPE</text><text class="t2" x="160" y="20">HOW THE VENDOR IS PAID</text><text class="t2" x="380" y="20">BEST WHEN</text>
<line class="s" x1="4" x2="596" y1="28" y2="28"/>
<text class="tb" x="8" y="48">Fixed price</text><text class="t2" x="8" y="64">FFP, FPIF, FP-EPA</text>
<text class="tc" x="160" y="48">A set price for clearly</text><text class="tc" x="160" y="64">defined deliverables</text>
<text class="tc" x="380" y="48">No significant scope</text><text class="tc" x="380" y="64">changes expected</text>
<line class="s2" x1="4" x2="596" y1="76" y2="76"/>
<text class="tb" x="8" y="96">Cost-reimbursable</text><text class="t2" x="8" y="112">CPFF, CPIF, CPAF</text>
<text class="tc" x="160" y="96">Allowable costs, plus</text><text class="tc" x="160" y="112">a fee for profit</text>
<text class="tc" x="380" y="96">Significant scope</text><text class="tc" x="380" y="112">changes expected</text>
<line class="s2" x1="4" x2="596" y1="124" y2="124"/>
<text class="tb" x="8" y="144">Time &amp; materials</text><text class="t2" x="8" y="160">a hybrid of the two</text>
<text class="tc" x="160" y="144">Agreed rates for time,</text><text class="tc" x="160" y="160">plus materials used</text>
<text class="tc" x="380" y="144">Small projects and</text><text class="tc" x="380" y="160">staff augmentation</text>
<line class="s2" x1="4" x2="596" y1="172" y2="172"/>
<text class="tb" x="8" y="192">IDIQ</text><text class="t2" x="8" y="208">indefinite delivery/qty</text>
<text class="tc" x="160" y="192">Per order, within upper</text><text class="tc" x="160" y="208">and lower limits, fixed term</text>
<text class="tc" x="380" y="192">Architecture, engineering</text><text class="tc" x="380" y="208">and IT: uncertain timing</text>
</svg>`);

PMQ.fig("contract-risk", `<svg viewBox="0 0 600 142" role="img" aria-label="Who carries more cost risk under each contract family">
<defs><marker id="ah-cr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<text class="t2" x="300" y="16" text-anchor="middle">Who carries the cost risk? (general PMP knowledge, not from the course)</text>
<text class="t2" x="20" y="42">Seller carries more cost risk</text><text class="t2" x="580" y="42" text-anchor="end">Buyer carries more cost risk</text>
<path class="s" d="M26 54 H574" marker-start="url(#ah-cr)" marker-end="url(#ah-cr)"/>
<rect class="bx" x="20" y="68" width="200" height="42" rx="5"/><text class="tb" x="120" y="86" text-anchor="middle">Fixed price</text><text class="t2" x="120" y="102" text-anchor="middle">FFP · FPIF · FP-EPA</text>
<rect class="soft" x="240" y="68" width="120" height="42" rx="5"/><text class="tb" x="300" y="86" text-anchor="middle">T&amp;M</text><text class="t2" x="300" y="102" text-anchor="middle">time and materials</text>
<rect class="bx" x="380" y="68" width="200" height="42" rx="5"/><text class="tb" x="480" y="86" text-anchor="middle">Cost-reimbursable</text><text class="t2" x="480" y="102" text-anchor="middle">CPIF · CPAF · CPFF</text>
<text class="t2" x="20" y="132">FFP: the seller absorbs any overrun</text><text class="t2" x="580" y="132" text-anchor="end">CPFF: the buyer pays every allowable cost</text>
</svg>`);

PMQ.fig("solicitation-flow", `<svg viewBox="0 0 600 200" role="img" aria-label="From public notice to post-award meeting">
<defs><marker id="ah-sf" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<text class="t2" x="4" y="13">CONDUCT PROCUREMENTS</text>
<rect class="bx" x="4" y="20" width="104" height="40" rx="5"/><text class="tc" x="56" y="37" text-anchor="middle">1 Public</text><text class="tc" x="56" y="50" text-anchor="middle">notice</text>
<rect class="bx" x="126" y="20" width="104" height="40" rx="5"/><text class="tc" x="178" y="37" text-anchor="middle">2 Release</text><text class="tc" x="178" y="50" text-anchor="middle">the RFP</text>
<rect class="bx" x="248" y="20" width="104" height="40" rx="5"/><text class="tc" x="300" y="37" text-anchor="middle">3 Answer</text><text class="tc" x="300" y="50" text-anchor="middle">questions</text>
<rect class="bx" x="370" y="20" width="104" height="40" rx="5"/><text class="tc" x="422" y="37" text-anchor="middle">4 Proposals</text><text class="tc" x="422" y="50" text-anchor="middle">arrive</text>
<rect class="bx" x="492" y="20" width="104" height="40" rx="5"/><text class="tc" x="544" y="37" text-anchor="middle">5 Evaluate,</text><text class="tc" x="544" y="50" text-anchor="middle">shortlist</text>
<rect class="bx" x="492" y="112" width="104" height="40" rx="5"/><text class="tc" x="544" y="129" text-anchor="middle">6 Clarify</text><text class="tc" x="544" y="142" text-anchor="middle">proposals</text>
<rect class="bx" x="370" y="112" width="104" height="40" rx="5"/><text class="tc" x="422" y="129" text-anchor="middle">7 Negotiate</text><text class="tc" x="422" y="142" text-anchor="middle">trade-offs</text>
<rect class="soft" x="248" y="112" width="104" height="40" rx="5"/><text class="tc" x="300" y="129" text-anchor="middle">8 Award,</text><text class="tc" x="300" y="142" text-anchor="middle">in writing</text>
<rect class="bx" x="126" y="112" width="104" height="40" rx="5"/><text class="tc" x="178" y="129" text-anchor="middle">9 Notify</text><text class="tc" x="178" y="142" text-anchor="middle">unsuccessful</text>
<rect class="bx" x="4" y="112" width="104" height="40" rx="5"/><text class="tc" x="56" y="129" text-anchor="middle">10 Post-award</text><text class="tc" x="56" y="142" text-anchor="middle">meeting</text>
<path class="s" d="M108 40 H123" marker-end="url(#ah-sf)"/><path class="s" d="M230 40 H245" marker-end="url(#ah-sf)"/><path class="s" d="M352 40 H367" marker-end="url(#ah-sf)"/><path class="s" d="M474 40 H489" marker-end="url(#ah-sf)"/>
<path class="s" d="M544 60 V109" marker-end="url(#ah-sf)"/>
<path class="s" d="M492 132 H477" marker-end="url(#ah-sf)"/><path class="s" d="M370 132 H355" marker-end="url(#ah-sf)"/><path class="s" d="M248 132 H233" marker-end="url(#ah-sf)"/><path class="s" d="M126 132 H111" marker-end="url(#ah-sf)"/>
<text class="t2" x="4" y="176">Bidder conference: everyone hears the same thing at the same time.</text>
<text class="t2" x="4" y="192">Select on predetermined criteria: experience, past performance, fit, price.</text>
</svg>`);

PMQ.fig("negotiation-levers", `<svg viewBox="0 0 600 206" role="img" aria-label="Trade-offs to fund an upgrade from carpet to marble">
<rect class="bx" x="4" y="8" width="180" height="52" rx="5"/><text class="tb" x="14" y="28">Payment terms</text><text class="t2" x="14" y="46">bigger advance, pay faster</text>
<rect class="bx" x="416" y="8" width="180" height="52" rx="5"/><text class="tb" x="426" y="28">Quality standards</text><text class="t2" x="426" y="46">a lower grade of marble</text>
<rect class="bx" x="4" y="146" width="180" height="52" rx="5"/><text class="tb" x="14" y="166">Delivery &amp; install</text><text class="t2" x="14" y="184">work around their schedule</text>
<rect class="bx" x="416" y="146" width="180" height="52" rx="5"/><text class="tb" x="426" y="166">Warranty &amp; upkeep</text><text class="t2" x="426" y="184">accept a shorter warranty</text>
<line class="s2" x1="184" y1="60" x2="208" y2="82"/><line class="s2" x1="416" y1="60" x2="392" y2="82"/><line class="s2" x1="184" y1="146" x2="208" y2="128"/><line class="s2" x1="416" y1="146" x2="392" y2="128"/>
<text class="ta" x="300" y="70" text-anchor="middle">give before you take</text>
<rect class="soft" x="200" y="80" width="200" height="50" rx="6"/><text class="tb" x="300" y="101" text-anchor="middle">Marble, not carpet</text><text class="t2" x="300" y="119" text-anchor="middle">without a bigger cheque</text>
</svg>`);

PMQ.fig("control-two-sides", `<svg viewBox="0 0 600 212" role="img" aria-label="Administering procurements: technical compliance and administrative requirements">
<rect class="acc" x="1" y="8" width="290" height="28" rx="4"/><text class="tw" x="146" y="26" text-anchor="middle">TECHNICAL COMPLIANCE</text>
<rect class="acc" x="309" y="8" width="290" height="28" rx="4"/><text class="tw" x="454" y="26" text-anchor="middle">ADMINISTRATIVE REQUIREMENTS</text>
<rect class="bx" x="1" y="42" width="290" height="108" rx="4"/><rect class="bx" x="309" y="42" width="290" height="108" rx="4"/>
<text class="t2" x="11" y="62">Meeting the technical requirements?</text><text class="t2" x="11" y="80">Quality data showing early warnings?</text><text class="t2" x="11" y="98">Deliverables fit for use?</text><text class="t2" x="11" y="116">Stopping unnecessary scope changes</text><text class="t2" x="11" y="134">and extra features?</text>
<text class="t2" x="319" y="62">Expenses kept in line?</text><text class="t2" x="319" y="80">Delivery and installation on time?</text><text class="t2" x="319" y="98">→ follows regulations and policies</text><text class="t2" x="319" y="116">→ no overbilling</text><text class="t2" x="319" y="134">→ goods and services received</text>
<rect class="soft" x="1" y="158" width="598" height="26" rx="4"/><text class="t" x="300" y="176" text-anchor="middle">Regular contract audits catch issues, like vendor delays, early</text>
<text class="t2" x="1" y="204">Claims: a contract-based process to document, process, monitor and resolve</text>
</svg>`);

PMQ.course({
  id: "procurement",
  topics: [

  /* ---------------------------------------------------------------- 8 */
  {
    id: "change-control",
    title: "Contract change control",
    summary: "Things change, so set up a contract change control system: the only way to modify a contract once all parties have agreed and signed it. It's a process for collecting, analysing, tracking and communicating changes to the contract, both approved and denied, managed in an orderly way because they can affect the whole project. It can be as detailed or as simple as the project demands: on smaller, less complex projects (the course's example is agile projects) minimal documentation and approval levels may be enough; on larger, more complex ones (its example is waterfall) you might need detailed documentation, a contract change control board and a thorough dispute resolution process. It must tie into the project's integrated change control system, which handles changes to scope, schedule and budget, so contract changes don't harm other areas. Example: while updating your company's website, your boss asks for features that need extra plugins; integrated change control shows the impact and, once approved, you add them to the vendor's contract. Four steps: the requester submits a change request form, a formal record of what and why; assess the impact on the contract, including risks and benefits; accept or reject it, recording the reason in a contract change log; and incorporate approved changes into the contract and update the plan, without getting into the weeds of how the vendor implements them, which is the vendor's responsibility. With legal implications at stake, communicate and document everything.",
    figs: ["contract-change"],
    terms: [
      ["Contract change control system", "A process for collecting, analysing, tracking and communicating changes to a contract, both approved and denied. The only way to modify a signed contract.", "A change request form, an impact check, a decision recorded in a log, then a contract amendment.", 0, "contract-change"],
      ["Integrated change control", "The project-wide process for changes to scope, schedule and budget. Contract change control must tie into it.", "Checking how extra website plugins affect the schedule and budget before amending the vendor's contract."],
      ["Contract change log", "The record of every requested contract change, the decision and the reason for it.", "“CR-07: extra plugins. Approved 12 March. Reason: needed for online bookings.”"],
      ["Contract change control board", "A group that reviews and decides on contract changes, typical on larger, more complex projects.", "A monthly board of the PM, contracts manager and sponsor on a hospital build."],
      ["Dispute resolution process", "An agreed way to settle disagreements about the contract, needed especially on larger projects.", "Escalate to senior managers, then mediation, before any legal action."]
    ],
    cards: [
      { d: 1, q: "What is the only way to modify a contract once all parties have signed it?", o: [
        ["Through a contract change control system", "Correct. Once a contract is signed, changes need a formal, agreed process to be valid and enforceable."],
        ["A phone call between the two project managers", "Calls aren't a controlled, documented change."],
        ["An email from the vendor confirming the change", "One side's email isn't an agreed contract change."],
        ["Updating the project plan and telling the team", "The plan isn't the contract."]],
        k: "Signed contracts change only through change control." },
      { d: 1, q: "What does a contract change control system handle?", o: [
        ["Every change, approved or denied: logged, analysed, shared", "Correct. Denied changes are recorded too."],
        ["Only the approved changes, since rejected requests don't need recording anywhere", "The course includes denied changes."],
        ["Payments to the vendor for work completed each month", "That's contract administration, not change control."],
        ["The vendor's internal staffing and its subcontracting choices", "Those are the vendor's business."]],
        k: "Every change, approved or denied, gets recorded." },
      { d: 1, q: "What are the four steps of contract change control, in order?", af: "contract-change", o: [
        ["Request form, assess impact, accept or reject, update contract and plan", "Correct. Submit a request, assess its impact, decide, then update both the contract and the plan."],
        ["Accept the change, update the contract, then assess the impact and log it later", "Assessment must come before the decision."],
        ["Assess impact, tell the vendor, start the work, then fill in a form", "The form comes first, and work waits for approval."],
        ["Update the plan, tell the sponsor, pay the vendor, close the change", "Not the course's steps."]],
        k: "Request → assess → decide → incorporate." },
      { d: 2, q: "Where should you record the reason for accepting or rejecting a change?", o: [
        ["In the contract change log", "Correct. The log records each decision and why, which helps if it's questioned later."],
        ["In the vendor's timesheets", "Not a decision record."],
        ["In the lessons-learned register only", "Lessons come later; the log records each decision."],
        ["Nowhere; only the decision itself matters", "The reason matters, especially if there's a dispute."]],
        k: "Log the decision and the reason." },
      { d: 2, q: "Why must contract change control tie into integrated change control?", o: [
        ["So contract changes don't harm the scope, schedule or budget elsewhere", "Correct. A contract change can affect scope, schedule and budget across the project, so assess it as a whole."],
        ["So the vendor can approve changes to your internal budget and schedule", "The vendor never approves your internal changes."],
        ["Because integrated change control replaces contract change control", "They work together; neither replaces the other."],
        ["So changes can skip the change request form", "The form is step one either way."]],
        k: "Contract changes ripple into the whole project." },
      { d: 2, q: "On a large, complex waterfall project, what might your contract change control system need that a small agile one might not?", o: [
        ["Detailed documentation, a change control board and dispute resolution", "Correct. Big, complex contracts need more formality: documentation, a change board and a dispute route."],
        ["No documentation at all, so the board can make decisions even faster", "Larger projects need more documentation, not less."],
        ["A single verbal approval from the vendor's account manager", "Verbal approval isn't controlled change."],
        ["Fewer approval levels than the agile project has", "Usually the reverse."]],
        k: "Scale the system to the project." },
      { d: 2, q: "Once a change is approved, how involved should you get in how the vendor implements it?", o: [
        ["Not deeply: the how is the vendor's job", "Correct. Don't get into the weeds."],
        ["Very involved. You should direct the vendor's staff through every step", "That's the vendor's job."],
        ["Only if the vendor asks you to write their work plan", "Still the vendor's responsibility."],
        ["Fully, since approval transfers the work to your team", "Approval doesn't transfer the work."]],
        k: "You own the what; the vendor owns the how." },
      { d: 3, q: "Your boss asks for extra website features that need new plugins. Using the course's steps, what comes first?", o: [
        ["Have the requester submit a change request form", "Correct. It creates a formal record of what and why."],
        ["Ask the vendor to install the new plugins straight away, then sort out the paperwork", "Work before approval is uncontrolled change."],
        ["Update the contract, then tell the vendor about it", "You can't update a contract one-sidedly."],
        ["Reject it, since signed contracts can't change", "They can, through change control."]],
        k: "Every change starts with a request." },
      { d: 3, q: "A vendor's site manager emails a price increase for a design change your engineer approved on site. Neither went through change control. What's the risk?", o: [
        ["The change may not be legally valid, and its impact on the project is unknown", "Correct. Bring it into change control now."],
        ["None at all, since an engineer's site approval is as good as a contract amendment", "Site approvals don't amend contracts."],
        ["The vendor is now obliged to absorb the extra cost", "Not necessarily; it's unresolved."],
        ["The project must be cancelled and re-tendered", "An overreaction; process the change properly."]],
        k: "Uncontrolled changes create legal and project risk." }
    ],
    flips: [
      { d: 2, f: "Walk through the four steps of contract change control.", b: "1 The requester submits a change request form: a formal record of what they want and why. 2 Assess the impact on the contract: risks and benefits. 3 Accept or reject it, recording the reason in the contract change log. 4 Incorporate approved changes into the contract and update the plan, leaving how it's done to the vendor. Communicate and document everything." }
    ]
  },

  /* ---------------------------------------------------------------- 9 */
  {
    id: "plan",
    title: "Plan procurement management",
    summary: "“If it's important enough to spend money on, it's important enough to plan.” The PMBOK Guide defines Plan Procurement Management as documenting project procurement decisions, specifying the approach and identifying potential sellers. Take into account social, environmental and financial impacts (the triple bottom line) and regulatory, legal and technological requirements. Put simply, decide whether to acquire goods and services from outside, and if so, what to acquire, how and when. For a new railroad from Washington DC to New York City, knowing what trains will run and how many passengers each carries lets you work out what you need (railroad ties or nails), how you'll get them (from a specific company) and when (once a construction crew is lined up). Then develop the procurement management plan: how procurement coordinates with the rest of the project, constraints and assumptions, risk management issues, and prequalified sellers. Other outputs: a procurement strategy; a procurement statement of work (SOW) with a high-level budget; source selection criteria, set with scope, schedule, risks and budget in mind; bid documents such as requests for proposals (RFPs), quotations (RFQs) and information (RFIs) and invitations for bid (IFBs); and make-or-buy decisions. Large projects need more planning than small ones, but every project needs some, and the more money at stake, the more time to set aside.",
    figs: ["plan-outputs"],
    terms: [
      ["Plan Procurement Management", "The PMBOK process of documenting project procurement decisions, specifying the approach and identifying potential sellers.", "Deciding to buy railway ties from a specialist supplier, how to tender for them and when.", 0, "plan-outputs"],
      ["Procurement management plan", "Guidance on how procurement coordinates with the rest of the project, plus constraints and assumptions, risk management issues and prequalified sellers.", "A plan saying track materials are tendered in month 2 and delivered before the crew starts."],
      ["Procurement statement of work (SOW)", "A description of what's being procured, detailed enough for sellers to decide whether they can provide it.", "“Supply 40,000 concrete railway sleepers (ties) to the agreed spec, in four monthly lots.”"],
      ["Source selection criteria", "The criteria you'll use to choose a vendor, set with the project's scope, schedule, risks and budget in mind.", "Price 40%, technical approach 30%, past performance 20%, delivery time 10%."],
      ["Bid documents (RFP, RFQ, RFI, IFB)", "Documents sent to prospective vendors describing what you need, how to respond and how you'll select: requests for proposals, quotations or information, and invitations for bid.", "An RFQ for standard nails; an RFP for the signalling system design."],
      ["Make-or-buy decision", "Deciding whether to produce something in-house or acquire it from outside.", "Building a booking app in-house versus subscribing to an existing platform."]
    ],
    cards: [
      { d: 1, q: "How does the PMBOK Guide define Plan Procurement Management?", o: [
        ["Documenting procurement decisions, specifying the approach and identifying sellers", "Correct. Planning records the procurement decisions, sets the approach and identifies potential sellers."],
        ["Signing the contracts, paying the vendors' invoices and closing out each procurement", "Those belong to conducting and controlling."],
        ["Selecting a vendor and negotiating the final price", "That's Conduct Procurements."],
        ["Auditing vendors' work against the statement of work", "That's Control Procurements."]],
        k: "Plan = document decisions, set the approach, identify sellers." },
      { d: 1, q: "Put simply, which decisions does planning procurements involve?", o: [
        ["Whether to buy outside, and if so what, how and when", "Correct. Planning decides whether to buy, and if so what, how and when; choosing the vendor comes later."],
        ["Which vendor to pick, and how much to pay them", "Selection comes later, in Conduct Procurements."],
        ["Who to hire, where to put them and what to pay them", "That's resource planning."],
        ["When to close the contract and how to archive it", "That's closeout."]],
        k: "Whether, what, how, when." },
      { d: 1, q: "Which of these is a bid document?", o: [
        ["A request for quotation (RFQ)", "Correct. RFPs, RFIs and IFBs are bid documents too."],
        ["A contract change log", "That records changes after signing."],
        ["A lessons-learned register from closeout", "That's produced at the end."],
        ["A purchase card statement", "That's a payment record."]],
        k: "RFP, RFQ, RFI, IFB." },
      { d: 2, q: "Beyond price, what does the course say to consider when planning procurement?", o: [
        ["Social, environmental and financial impacts, plus legal and technical rules", "Correct. The triple bottom line plus regulatory, legal and technological requirements."],
        ["Only the vendor's brand recognition and how well known it is in the market", "Brand isn't on the course's list."],
        ["The personal preferences of the project team", "Not a planning criterion."],
        ["Whichever vendor the sponsor already knows", "That risks a conflict of interest."]],
        k: "Triple bottom line, plus regulatory, legal and technical rules." },
      { d: 2, q: "In the railroad example, what do you need to know before deciding what to buy?", o: [
        ["What trains will run and how many passengers each carries", "Correct. The need drives the purchase."],
        ["Which vendors the last railroad project used, and what they charged", "Useful research later, but the need comes first."],
        ["The colour scheme of the stations", "Not a driver of the track materials."],
        ["How many lawyers the contract team has", "Irrelevant to what you buy."]],
        k: "Understand the need, then decide what, how and when." },
      { d: 2, q: "Which planning output describes what you'll buy in enough detail for vendors to respond?", o: [
        ["The procurement statement of work (SOW)", "Correct. The SOW describes the work or product clearly enough for vendors to price it and propose."],
        ["The procurement strategy and approach to bidding", "The strategy is how you'll buy, not the detail of what."],
        ["The make-or-buy decision", "That decides whether to buy at all."],
        ["The contract change log", "That's for changes after signing."]],
        k: "The SOW says what's being bought." },
      { d: 2, q: "What should source selection criteria take into account, according to the course?", o: [
        ["Scope, schedule, risks and budget constraints", "Correct. Selection criteria should reflect the project's scope, schedule, risks and budget."],
        ["The vendor's popularity on social media and review sites", "Not a course criterion."],
        ["Only the lowest price, whatever else is offered", "Price is one factor among several."],
        ["The personal preferences of the contract team", "Criteria should be objective."]],
        k: "Criteria come from the project's constraints." },
      { d: 3, q: "Your project will spend $40M on rail signalling and $15k on office furniture. How should the planning effort differ?", o: [
        ["Spend more time planning where more money is at stake", "Correct. Effort should match the stakes: the $40M purchase deserves far more planning."],
        ["Plan both identically, since every procurement is equal", "The course says to scale planning to the money at stake."],
        ["Plan the furniture more, since small buys go wrong more often", "The bigger risk sits with the bigger spend."],
        ["Skip planning for both and rely on the contract team", "Even small purchases need some plan."]],
        k: "More money, more planning." },
      { d: 3, q: "A council must decide whether to build a new IT system with its own developers or buy one. What is this decision, and where does it belong?", o: [
        ["A make-or-buy decision, made in planning", "Correct. Building in-house or buying is a make-or-buy decision, taken during planning."],
        ["A source selection decision, made during contract closeout at the end", "Source selection picks a vendor, and it isn't at closeout."],
        ["A claims decision, made during control procurements", "Claims arise after signing."],
        ["A tailoring decision, made after the contract is signed", "This decision comes before any contract."]],
        k: "Make or buy is decided in planning." }
    ],
    flips: [
      { d: 2, f: "Name the outputs of Plan Procurement Management the course lists.", b: "The procurement management plan (coordination with the project, constraints and assumptions, risk issues, prequalified sellers), a procurement strategy, a procurement statement of work with a high-level budget, source selection criteria, bid documents (RFP, RFQ, RFI, IFB), and make-or-buy decisions." }
    ]
  },

  /* ---------------------------------------------------------------- 10 */
  {
    id: "research",
    title: "Procurement research",
    summary: "Would you buy a house without researching it first? All procurements begin by identifying needs and analysing them to find the critical requirements: the functions the items you buy must perform. Understand your organisation's objectives, priorities and constraints. Then develop the procurement management plan by answering: how will procurements be coordinated with the rest of the project, such as the schedule? When will key procurement activities happen? Which metrics will be used to manage contracts? Which constraints and assumptions could affect procurements? Next, study market trends and compare cost data to decide whether to fill the need internally or look outside. Market research can be simple or complex, depending on the procurement, and it's arguably the most important part of procurement, because that's where most of the major decisions are made. Examine available vendors through pre-solicitation events such as industry days, industry publications and advertising. Market research also lets you produce an internal cost estimate, choose the contract type, finalise the statement of work, set the evaluation criteria and develop the request for proposal (RFP).",
    terms: [
      ["Critical requirements", "The functions that the items you buy must perform.", "A CRM must sync with your email platform and track leads through five sales stages."],
      ["Market research", "Studying market trends, cost data and available vendors to decide whether to fill a need internally or externally, and how. Arguably the most important part of procurement.", "Comparing three cloud booking platforms' prices and features before writing the RFP."],
      ["Industry day", "A pre-solicitation event where a buyer briefs potential vendors on upcoming needs and learns what the market can offer.", "A transport agency briefs 30 rail suppliers on next year's signalling programme."],
      ["Internal cost estimate", "Your own estimate of what the procurement should cost, used to judge vendors' prices.", "Estimating $180k for a CRM roll-out before any bids arrive."]
    ],
    cards: [
      { d: 1, q: "What does every procurement begin with, according to the course?", o: [
        ["Identifying needs and their critical requirements", "Correct. You can't buy well until you know what you need and what it must do."],
        ["Choosing a preferred vendor, then asking for its standard price list and terms", "Vendors come after the need is understood."],
        ["Signing a letter of intent with the market leader", "Far too early."],
        ["Setting the budget before anyone discusses the need", "The need drives the budget, not the other way round."]],
        k: "Needs first, then everything else." },
      { d: 1, q: "What are critical requirements?", o: [
        ["Functions that the items you buy must perform", "Correct. They describe what the purchase must do, not which product or seller to choose."],
        ["Clauses the legal team insists on including", "Those are contract terms."],
        ["The vendor's minimum order quantities", "Those are the vendor's conditions."],
        ["Deadlines the sponsor has set for the project", "Those are constraints, not functions."]],
        k: "What it must do, not who sells it." },
      { d: 1, q: "Why does the course call market research arguably the most important part of procurement?", o: [
        ["Most major decisions are made there", "Correct. Research shapes the major choices: the approach, contract type, estimates and criteria."],
        ["It's the only stage of procurement that vendors are allowed to see", "Not the reason."],
        ["It's the cheapest stage to run", "Cost isn't the reason."],
        ["It's legally required before every purchase", "Not the course's reason."]],
        k: "The big decisions are made in research." },
      { d: 2, q: "Which is a way to examine available vendors during market research?", o: [
        ["Hosting a pre-solicitation industry day", "Correct. Industry publications and advertising help too."],
        ["Signing a contract with each vendor to test them", "Contracts come after selection."],
        ["Asking vendors to start work before the tender", "That's not research."],
        ["Choosing whichever vendor called you first", "That's not examining the market."]],
        k: "Meet the market before you solicit it." },
      { d: 2, q: "Which questions help you build the procurement management plan during research?", o: [
        ["When key activities happen, which metrics manage contracts, what constraints apply", "Correct, plus how procurement coordinates with the schedule."],
        ["Which vendor is the cheapest, which is the fastest, and which is the most well known", "Those are vendor comparisons, not plan questions."],
        ["Who will attend the closeout meeting and where the files will be stored", "Closeout details aren't the plan's core questions."],
        ["How the vendor pays its staff and what its profit margin is on the job", "Not yours to plan."]],
        k: "Timing, metrics, constraints and coordination." },
      { d: 2, q: "What can market research help you produce, according to the course?", o: [
        ["An internal cost estimate, contract type, final SOW, evaluation criteria and RFP", "Correct. Research gives you the cost estimate, contract type, SOW and criteria that go into the RFP."],
        ["A signed contract, a paid deposit, a delivery schedule and the lessons-learned log", "Those come much later."],
        ["The vendor's internal work plan and staffing roster", "Those are the vendor's."],
        ["A list of claims and disputes from past projects", "Not an output of market research."]],
        k: "Research feeds the RFP." },
      { d: 3, q: "Before tendering a $2M CRM roll-out, a colleague says, “We know what we want, let's skip research.” What's the course's response?", o: [
        ["Research first, like before buying a house", "Correct. Big spend deserves research."],
        ["Agree, because research really only matters for physical goods like houses", "The house is an analogy; it applies to every large purchase."],
        ["Agree, as long as the cheapest vendor is chosen", "Cheapest isn't a substitute for research."],
        ["Do the research after the contract is signed", "Too late to inform anything."]],
        k: "Research before you put a large contract out for bid." },
      { d: 3, q: "Market research shows your in-house team could build the tool for less than vendors charge, at similar risk. What should this inform?", o: [
        ["Your make-or-buy decision", "Correct. Comparing in-house and vendor costs is exactly what a make-or-buy decision needs."],
        ["Your vendor's profit margin", "That's the vendor's business."],
        ["Your claims administration process", "Claims come after signing."],
        ["Your post-award meeting agenda", "There may be no award at all."]],
        k: "Cost data informs make or buy." }
    ],
    flips: [
      { d: 2, f: "What does market research let you do, according to the course?", b: "Study market trends and compare cost data to decide whether to fill the need internally or externally; examine available vendors (industry days, industry publications, advertising); and produce an internal cost estimate, choose the contract type, finalise the statement of work, set the evaluation criteria and develop the RFP." }
    ]
  },

  /* ---------------------------------------------------------------- 11 */
  {
    id: "contract-types",
    title: "Contract types",
    summary: "Compensation drives behaviour: contracts tie what vendors do to how they get paid, so expect vendors to perform according to the contract's terms. Four types. Fixed-price contracts set a fixed price for clearly defined deliverables and are best when no significant scope changes are expected. Cost-reimbursable contracts reimburse the vendor's allowable costs plus a fee for profit and are best when significant scope changes are expected. Time and materials (T&M) contracts are hybrids with aspects of both, best for small projects and staff augmentation. Indefinite delivery, indefinite quantity (IDIQ) contracts provide an indefinite quantity of goods or services within predetermined upper and lower limits over a fixed period; they're best for engagements such as architecture, engineering and IT, where delays and overruns can arise from uncertainty about when goods or services will be needed. Fixed-price options include firm fixed price (FFP), fixed price incentive fee (FPIF) and fixed price with economic price adjustment (FP-EPA). Cost-reimbursable options include cost plus fixed fee (CPFF), cost plus incentive fee (CPIF) and cost plus award fee (CPAF). The choice depends on the size of the purchase, how stable the scope is and your risk tolerance. A long, large railroad project with a good idea of its scope would usually favour fixed price, to set the budget and reduce cost uncertainty; but if an emergency means it must be running as soon as possible, cost-reimbursable or T&M may make more sense. Aim for win-win contracts that encourage vendors to deliver.",
    figs: ["contract-matrix", "contract-risk"],
    terms: [
      ["Fixed-price contract", "A set price for clearly defined deliverables. Best when no significant scope changes are expected.", "A firm price to install a fully specified fire alarm system.", 0, "contract-matrix"],
      ["Cost-reimbursable contract", "The vendor is reimbursed for allowable costs, plus a fee so it can make a profit. Best when significant scope changes are expected.", "Emergency repairs to a rail line after a storm, while the full damage is still unknown."],
      ["Time and materials (T&M) contract", "A hybrid with aspects of fixed-price and cost-reimbursable contracts. Best for small projects and staff augmentation.", "Two contract BMS technicians at an agreed hourly rate to clear a three-month backlog."],
      ["IDIQ contract", "Indefinite delivery, indefinite quantity: an indefinite quantity of goods or services within set upper and lower limits over a fixed period. Common for architecture, engineering and IT.", "An engineering firm on call for between 200 and 2,000 design hours over three years."],
      ["Firm fixed price (FFP)", "The simplest fixed-price option: one price that doesn't change, whatever the vendor's costs turn out to be.", "$85,000 for the whole signage package, full stop."],
      ["Fixed price with economic price adjustment (FP-EPA)", "A fixed-price option that allows agreed adjustments for changing market conditions, such as inflation or material prices, over a long contract.", "A five-year steel supply contract adjusted yearly in line with a published price index."],
      ["Cost plus incentive fee (CPIF)", "A cost-reimbursable option where the vendor's fee rises or falls with its performance against agreed targets, such as cost.", "The fee grows if the vendor beats the target cost and shrinks if it overruns."],
      ["Cost plus award fee (CPAF)", "A cost-reimbursable option where an extra award fee is paid based on the buyer's assessment of performance.", "Up to $50k extra if the client rates quality and responsiveness highly."],
      ["Staff augmentation", "Bringing in outside people to add capacity to your own team, often on a T&M basis.", "Two contract developers join your team for a busy quarter."]
    ],
    cards: [
      { d: 1, q: "Which contract type is best when no significant scope changes are expected?", af: "contract-matrix", o: [
        ["Fixed price", "Correct. With stable scope, a fixed price gives budget certainty and puts cost risk on the seller."],
        ["Cost-reimbursable", "That's for when significant scope changes are expected."],
        ["Time and materials", "That's for small projects and staff augmentation."],
        ["Indefinite delivery, indefinite quantity", "That's for uncertain timing and quantities."]],
        k: "Stable scope → fixed price." },
      { d: 1, q: "How is a vendor paid under a cost-reimbursable contract?", o: [
        ["Allowable costs plus a profit fee", "Correct. The buyer reimburses allowable costs and adds a fee for the seller's profit."],
        ["One fixed price for clearly defined deliverables", "That's fixed price."],
        ["Agreed hourly rates plus materials, with nothing else", "That's closer to time and materials."],
        ["Nothing until the full project has been accepted", "Not how cost-reimbursable works."]],
        k: "Costs plus a fee." },
      { d: 1, q: "What does the course say time and materials contracts are best used for?", o: [
        ["Small projects and staff augmentation", "Correct. T&M suits small pieces of work and adding people, where scope is hard to pin down."],
        ["Large, long projects with a stable scope", "That favours fixed price."],
        ["Buying standardised goods in huge volumes", "Consider a BPA or reverse auction."],
        ["Projects where the price must never change", "That's firm fixed price."]],
        k: "T&M: small projects, extra people." },
      { d: 1, q: "What does IDIQ stand for?", o: [
        ["Indefinite delivery, indefinite quantity", "Correct. IDIQ contracts allow an open-ended quantity of goods or services over a set period."],
        ["Initial design, initial quotation", "Not the meaning."],
        ["Independent delivery, independent quality", "Not the meaning."],
        ["Itemised discount, itemised quantity", "Not the meaning."]],
        k: "IDIQ = indefinite delivery, indefinite quantity." },
      { d: 2, q: "Which three factors does the course say drive the choice of contract type?", o: [
        ["Purchase size, scope stability and risk tolerance", "Correct. How big the purchase is, how stable the scope is and how much risk you'll accept drive the choice."],
        ["The vendor's location, its brand and how long it has been in business", "Not the course's factors."],
        ["Which type the vendor prefers and its preferred payment terms", "The project's needs should decide."],
        ["The number of pages in the statement of work", "Length isn't a factor."]],
        k: "Size, scope stability, risk tolerance." },
      { d: 2, q: "Which list contains only fixed-price contract options?", o: [
        ["FFP, FPIF and FP-EPA", "Correct. Firm fixed price, fixed price incentive fee, and fixed price with economic price adjustment."],
        ["CPFF, CPIF and CPAF", "Those are all cost-reimbursable."],
        ["FFP, CPIF and T&M", "A mix of all three families."],
        ["FPIF, CPAF and IDIQ", "A mix of families."]],
        k: "FP family: FFP, FPIF, FP-EPA. CR family: CPFF, CPIF, CPAF." },
      { d: 2, q: "Why does the course say IDIQ contracts suit architecture, engineering and IT work?", o: [
        ["Unclear timing of need can cause delays and overruns", "Correct. IDIQ gives flexibility within agreed limits."],
        ["These fields always have a perfectly stable scope that's fully known up front", "Then fixed price would suit them."],
        ["The quantity is unlimited, with no upper limit at all", "IDIQ has upper and lower limits."],
        ["They never need a fixed time period", "IDIQ runs over a fixed period."]],
        k: "IDIQ: flexible quantity and timing, within limits." },
      { d: 2, q: "A long, large railroad project has a well-understood scope. Which contract family would the course usually favour, and why?", o: [
        ["Fixed price, for budget certainty", "Correct. With a well-understood scope, fixed price gives the buyer budget certainty."],
        ["Cost-reimbursable, because large projects always change a great deal", "With a known scope, fixed price gives cost certainty."],
        ["Time and materials, because it's best for big projects", "T&M suits small projects."],
        ["No contract, to keep things flexible", "Every procurement needs a contract."]],
        k: "Known scope, big spend → fixed price." },
      { d: 3, q: "A storm washes out a rail line, it must reopen as fast as possible, and the full damage isn't known yet. Which contract types make more sense, according to the course?", o: [
        ["Cost-reimbursable or time and materials", "Correct. Speed matters more than minimising cost, and scope is unclear."],
        ["Firm fixed price, to cap the cost before work starts", "Unknown scope makes a firm price risky and slow to agree."],
        ["A blanket purchase agreement for the materials only", "A BPA isn't a contract for urgent works."],
        ["A reverse auction to find the cheapest repair crew", "Auctions suit standardised items, not emergencies."]],
        k: "Urgent and uncertain → cost-reimbursable or T&M." },
      { d: 3, q: "You need two contract BMS technicians for three months to clear a fault backlog. Which contract type fits best?", o: [
        ["Time and materials", "Correct. Staff augmentation is a classic T&M use."],
        ["Firm fixed price", "The work isn't defined well enough for a single price."],
        ["Cost plus award fee", "Heavy machinery for a simple staffing need."],
        ["Fixed price with economic price adjustment", "Suited to long supply contracts with price indexing."]],
        k: "Extra people for a while → T&M." },
      { d: 3, x: 1, q: "Under which contract type does the buyer usually carry the most cost risk?", af: "contract-risk", o: [
        ["Cost plus fixed fee (CPFF)", "Correct. The buyer pays all allowable costs, and the fee doesn't fall if costs rise. (General PMP knowledge, not from the course.)"],
        ["Firm fixed price (FFP)", "Under FFP the seller absorbs overruns."],
        ["Fixed price incentive fee (FPIF)", "Risk is shared, but it's still capped by a ceiling price."],
        ["Fixed price with economic price adjustment", "Still a fixed price; only agreed economic adjustments are allowed."]],
        k: "FFP: seller's risk. CPFF: buyer's risk." },
      { d: 2, q: "What's the course's core point about why contract type matters?", o: [
        ["Compensation drives behaviour, so how vendors are paid shapes what they do", "Correct. Payment terms create incentives, so the contract type influences how vendors behave."],
        ["Contract type only really matters to lawyers, not to the project manager", "It shapes vendor behaviour on your project."],
        ["Vendors behave the same whatever the payment terms are", "The course says the opposite."],
        ["The cheapest contract type always gives the best result", "Fit matters more than cheapness."]],
        k: "How you pay shapes how they behave." }
    ],
    flips: [
      { d: 2, f: "Match each contract type to when the course says it's best.", b: "Fixed price: no significant scope changes expected. Cost-reimbursable: significant scope changes expected. Time and materials: small projects and staff augmentation. IDIQ: architecture, engineering and IT work where the timing of need is uncertain, within upper and lower limits over a fixed period." },
      { d: 3, f: "Name the three fixed-price and three cost-reimbursable options.", b: "Fixed price: firm fixed price (FFP), fixed price incentive fee (FPIF), fixed price with economic price adjustment (FP-EPA). Cost-reimbursable: cost plus fixed fee (CPFF), cost plus incentive fee (CPIF), cost plus award fee (CPAF)." }
    ]
  },

  /* ---------------------------------------------------------------- 12 */
  {
    id: "conduct",
    title: "Conduct procurements: solicitation",
    summary: "Conduct Procurements is execution: obtain vendor responses, select a qualified vendor, award a contract and establish it. Large organisations usually have a dedicated contract team, but you should know how to do it, because one day you might. If any vendor that meets the criteria may bid, advertise the opportunity and host a bidder conference for the most qualified vendors: one of the most effective ways to give everyone the same information at the same time. Or request responses from a pool of vetted vendors, or a single preselected vendor; there's no single best way. Solicitation means getting responses. For a large purchase, get the word out widely, even internationally, by posting notices on your website or emailing vendors. A public notice should at least include a brief description of what you're buying, when and where the solicitation will be available, contact details and the response deadline. Then release the solicitation, usually an RFP, containing an overview of the procurement, the statement of work, instructions for preparing and submitting proposals, evaluation and award criteria, required forms, any exhibits and attachments, and terms and conditions. Encourage vendors to propose unique approaches, and keep communication open so questions are answered quickly. Review proposals to narrow down to qualified vendors, looking at business and technical approaches, delivery methods and key differentiators, then clarify proposals so they're based on accurate assumptions. Using the source selection criteria from planning, you'll select the winner, then make sure the relationship and expected outcomes are clear, the statement of work (scope, schedule, pricing, payment terms and success criteria) and terms and conditions are agreed, and the contract is signed by someone with the authority to enter into it.",
    figs: ["solicitation-flow"],
    terms: [
      ["Conduct Procurements", "The PMBOK execution process: obtain vendor responses, select a qualified vendor, award a contract and establish it.", "Running the tender for track laying, choosing the winner and signing the contract.", 0, "solicitation-flow"],
      ["Bidder conference", "A meeting where all prospective vendors get the same information at the same time and can ask questions.", "A site walk and Q&A for six shortlisted fit-out contractors."],
      ["Solicitation", "Asking vendors for responses, usually by releasing an RFP after a public notice.", "Posting the CRM RFP on your website and emailing 20 vendors."],
      ["Request for proposal (RFP)", "A solicitation document describing what you want to buy and how to respond: an overview, the SOW, submission instructions, evaluation and award criteria, forms, attachments, and terms and conditions.", "A 30-page RFP for a booking system, with a scoring matrix and draft contract."],
      ["Public notice", "An announcement of a procurement opportunity: a brief description, when and where the solicitation is available, contact details and the response deadline.", "A notice on a government tenders website, such as New Zealand's GETS."],
      ["Best value", "The best overall outcome for your organisation, which isn't always the lowest price.", "Choosing a slightly dearer bid with a stronger technical approach and faster delivery."]
    ],
    cards: [
      { d: 1, q: "What is Conduct Procurements all about?", o: [
        ["Execution: responses, selection, award", "Correct. Conducting procurements means getting responses, selecting a seller and awarding the contract."],
        ["Planning: deciding what to buy, how to buy it and when to buy it", "That's Plan Procurement Management."],
        ["Closing: paying the last invoices and archiving the files", "That's closeout."],
        ["Auditing: checking the vendor's invoices against delivery", "That's administration, under Control Procurements."]],
        k: "Conduct = execute the buying." },
      { d: 1, q: "Why host a bidder conference?", o: [
        ["So every vendor gets the same information at once", "Correct. Everyone hears the same answers at the same time, which keeps the process fair."],
        ["To let one favoured vendor see the requirements before all the others do", "That would be unfair, and the opposite of the point."],
        ["To negotiate the final price with every vendor in one room", "Negotiation comes after proposals."],
        ["To sign the contract in front of witnesses", "Signing comes after selection."]],
        k: "Same information, same time, for everyone." },
      { d: 1, q: "Besides open advertising, which other ways to get responses does the course mention?", o: [
        ["Vetted vendors only, or one preselected vendor", "Correct. There's no single best way."],
        ["None: open advertising is the only allowed way for projects", "The course gives alternatives."],
        ["Asking the project team to vote on a vendor", "Not a way to get responses."],
        ["Re-using last year's winning bid without asking anyone", "That's not soliciting responses."]],
        k: "Open market, vetted pool or single source." },
      { d: 2, q: "What should a public notice include, at a minimum?", o: [
        ["A description, where and when it's available, contacts and the deadline", "Correct. Vendors need to know what's being bought, where and when to get it, who to contact and the deadline."],
        ["Your internal cost estimate and budget ceiling, so vendors know what to bid", "Sharing your estimate can anchor bids."],
        ["The names of vendors you'd prefer to win the work", "That undermines fair competition."],
        ["The full draft contract and every attachment", "Those come with the solicitation itself."]],
        k: "What, where and when, who to contact, by when." },
      { d: 2, q: "Which of these belongs in an RFP, according to the course?", o: [
        ["Evaluation and award criteria", "Correct. Telling vendors how they'll be judged lets them respond to what matters to you."],
        ["Your internal cost estimate", "Usually kept internal."],
        ["Other vendors' proposals", "Never shared."],
        ["The names of the vendors you'd most like to win", "That would undermine the process."]],
        k: "Tell vendors how they'll be judged." },
      { d: 2, q: "When reviewing proposals, what does the course say to pay close attention to?", o: [
        ["Business and technical approaches, delivery methods and differentiators", "Correct. Look past the presentation to how they'll actually do and deliver the work, and what sets them apart."],
        ["How glossy, well designed and professional the proposal document looks", "Presentation isn't substance."],
        ["The vendor's office location and its number of staff", "Not the course's focus."],
        ["Whether the vendor has worked with your sponsor before", "That's a potential conflict, not a criterion."]],
        k: "Judge the approach, not the polish." },
      { d: 2, q: "Why clarify proposals before selecting a vendor?", o: [
        ["So proposals rest on accurate assumptions", "Correct. Clarifying removes misunderstandings, so you compare proposals on accurate assumptions."],
        ["So each vendor can lower its price after seeing its competitors' bids", "Clarification isn't a price auction."],
        ["To give a favoured vendor a second chance to win", "That's unfair treatment."],
        ["Because the RFP never needs to be accurate", "The RFP should be accurate; clarification fixes misreadings."]],
        k: "Clear proposals, best value." },
      { d: 3, q: "You're tendering a $1.5M booking platform and want strong competition. Which approach fits the course's advice?", o: [
        ["Advertise widely, issue an RFP, hold a bidder conference", "Correct. A big purchase justifies wide advertising, a formal RFP and a bidder conference for strong competition."],
        ["Email only the one vendor your team liked working with last time", "That's single-sourcing, with little competition."],
        ["Keep it quiet so fewer vendors bid and evaluation is quicker", "Less competition, less value."],
        ["Ask vendors to start building before the RFP is written", "Backwards."]],
        k: "Big purchase, wide net." },
      { d: 3, x: 1, q: "A bidder asks a clarifying question that affects how everyone should price. What's the fair way to handle it?", o: [
        ["Answer promptly and share the answer with all bidders", "Correct. Keeps communication open and the competition fair. (Sharing answers with all bidders is general good practice.)"],
        ["Answer only that bidder, since it asked first", "Others would price on different information."],
        ["Ignore it until all the proposals are in", "The course stresses answering questions in a timely way."],
        ["Tell the bidder to guess and price in the risk", "Guesswork produces proposals built on wrong assumptions."]],
        k: "One answer, shared with everyone." }
    ],
    flips: [
      { d: 2, f: "What should an RFP contain, according to the course?", b: "An overview of the procurement, a statement of work, instructions for preparing and submitting the proposal, evaluation and award criteria, required forms, any exhibits and attachments, and terms and conditions." }
    ]
  },

  /* ---------------------------------------------------------------- 13 */
  {
    id: "negotiate-award",
    title: "Negotiation and award",
    summary: "Almost anything in a procurement can be negotiated: price and delivery dates, but also quality metrics and warranties. These should be in the RFP, but either side may want changes once you decide to work together, because of the vendor's perceived value, the complexity of requirements and scope, the type of goods and services, and more. Example: after reviewing proposals, you'd prefer higher-grade marble to the mid-grade carpet you specified for the reception area. You don't need the best negotiation skills, but you do need a willingness to give and take (give comes first). Work towards a win-win, be fair and let vendors make a reasonable profit. Trade-offs might include payment terms (a larger advance or faster payment), quality standards (a lower grade of marble), delivery and installation times (working around the vendor's schedule), or warranties and maintenance (a shorter warranty). Think about the end result you want, and know what you will and won't accept. To award, evaluate each proposal against the other responses and your predetermined selection criteria, such as relevant experience and qualifications, past performance on similar projects, ability to work within project constraints and competitive pricing, and choose the vendor that best meets your needs. Then notify unsuccessful vendors (they took the time to bid), award the contract promptly, preferably in writing, and hold a post-award meeting to clear up questions, address updates and discuss how the contract will be administered. Here accuracy can matter more than speed.",
    figs: ["negotiation-levers", "solicitation-flow"],
    terms: [
      ["Win-win negotiation", "Negotiating so both sides gain: being fair, letting the vendor make a reasonable profit, and being willing to give and take.", "Paying invoices faster in exchange for an upgrade to marble flooring.", 0, "negotiation-levers"],
      ["Trade-off", "Giving ground on one term to gain on another.", "Accepting a shorter warranty to fund a better grade of flooring."],
      ["Selection criteria (award)", "The predetermined factors used to choose a vendor, such as experience and qualifications, past performance, ability to work within constraints, and competitive pricing.", "Scoring each bid on experience, past performance, schedule fit and price."],
      ["Post-award meeting", "A meeting after the contract is awarded to clear up questions, address changes and agree how the contract will be administered.", "A kick-off with the winning contractor to confirm contacts, reporting and invoicing."],
      ["Walk-away point", "The limit beyond which you won't agree, decided before you negotiate.", "No more than $48,000, and no warranty shorter than two years.", 1]
    ],
    cards: [
      { d: 1, q: "What can be negotiated in a procurement, according to the course?", o: [
        ["Almost anything, from price and dates to quality metrics and warranties", "Correct. Price, dates, quality measures, warranties and more can all be negotiated."],
        ["Only the price, since everything else is fixed once the RFP is released", "The course says almost anything can be negotiated."],
        ["Only delivery dates, since prices are set by the market", "Prices are negotiable too."],
        ["Nothing, once the vendor has submitted a proposal", "Negotiation often follows proposals."]],
        k: "Almost everything is on the table." },
      { d: 1, q: "What does the course say you need most to negotiate well?", o: [
        ["A willingness to give and take", "Correct. Give comes before take."],
        ["The best negotiation skills in the organisation", "The course says you don't need to be the best negotiator."],
        ["A bigger budget than the vendor expects", "Money isn't the key ingredient."],
        ["A tough stance that never concedes anything", "That works against a win-win."]],
        k: "Give and take, in that order." },
      { d: 1, q: "After choosing a vendor, what does the course say you owe the unsuccessful bidders?", o: [
        ["Letting them know they didn't win", "Correct. They took the time to bid."],
        ["A share of the contract value for their effort", "Not owed."],
        ["Nothing, since they knew it was competitive", "The course says to notify them."],
        ["Copies of the winning vendor's proposal", "That would breach confidentiality."]],
        k: "Close the loop with every bidder." },
      { d: 2, q: "You now want marble instead of the carpet in your RFP. Which is a trade-off the course suggests?", af: "negotiation-levers", o: [
        ["Pay faster, or accept a shorter warranty", "Correct. Give something to get something."],
        ["Demand the upgrade for free, or threaten to cancel the whole contract", "That's not win-win."],
        ["Write a bigger cheque, since there's no other way", "The course shows there are other ways."],
        ["Hide the change until the final invoice arrives", "Changes need agreeing and documenting."]],
        k: "Trade terms, not just money." },
      { d: 2, q: "What does the course mean by “give before take”?", o: [
        ["Aim for win-win; let the vendor make a fair profit", "Correct. A deal in which the vendor makes a fair profit is more likely to be delivered well."],
        ["Pay the full contract value up front, before any work, to build goodwill", "That gives away your leverage."],
        ["Give the vendor your internal budget before negotiating", "That anchors the price against you."],
        ["Let the vendor set every term, then accept it", "That's giving without taking."]],
        k: "Fair deals last." },
      { d: 2, q: "Which of these are selection criteria the course mentions for awarding a contract?", o: [
        ["Experience, past performance, fit within constraints and price", "Correct. Award on criteria set in advance, such as experience, past performance, fit and price."],
        ["Logo design, website quality and the size of the vendor's social following", "Not award criteria."],
        ["Which vendor bid first and which bid last", "Timing of the bid isn't a criterion."],
        ["Which vendor the sponsor already knows personally", "That risks a conflict of interest."]],
        k: "Award on predetermined criteria." },
      { d: 2, q: "How should you award the contract, according to the course?", o: [
        ["Promptly, and preferably in writing", "Correct. A prompt, written award avoids delays and confusion about what was agreed."],
        ["Slowly, so other vendors can still improve their bids", "The course says communicate in a timely way."],
        ["Verbally only, to keep things flexible later", "Writing is preferred."],
        ["Quietly, so unsuccessful vendors don't find out", "They should be notified."]],
        k: "Timely and written." },
      { d: 2, q: "What's the purpose of a post-award meeting?", o: [
        ["Clear up questions, address changes and agree how the contract runs", "Correct. It aligns both sides on questions, changes and how the contract will run day to day."],
        ["Let the unsuccessful vendors appeal against the decision in person", "Not its purpose."],
        ["Renegotiate the price now that the vendor is committed", "Not its purpose."],
        ["Celebrate the end of the project with the vendor", "That's closeout."]],
        k: "Start the relationship on the same page." },
      { d: 3, q: "Before negotiating a $50k fit-out, what does the course say you should be clear on?", o: [
        ["What you will and won't accept", "Correct. Decide your limits before you sit down."],
        ["How quickly you can sign, whatever the terms are", "Speed shouldn't override terms."],
        ["The vendor's profit margin on every line item", "You won't know it, and it isn't the point."],
        ["The other vendors' bids, to share with this one", "Sharing rivals' bids is unfair."]],
        k: "Know your limits before you negotiate." },
      { d: 3, q: "Two vendors score closely. One is cheaper; the other has strong past performance on similar hospital projects and fits your schedule. What's the course's guidance?", o: [
        ["Weigh all the selection criteria and pick the best fit, not just the cheapest", "Correct. Price is one criterion; experience, past performance and schedule fit matter too."],
        ["Always pick the cheaper vendor, since price is the deciding factor in the end", "Price is one criterion among several."],
        ["Ask both vendors to bid again with no criteria", "Criteria should be predetermined."],
        ["Split the contract equally to avoid upsetting either vendor", "Not a selection method."]],
        k: "Best fit beats cheapest." }
    ],
    flips: [
      { d: 2, f: "List the steps after you've chosen a vendor.", b: "Notify unsuccessful vendors: they took the time to bid. Award the contract promptly, preferably in writing. Hold a post-award meeting to clear up questions, address updates or changes, and agree how the contract will be administered. Take time to get the vendor up to speed; accuracy can matter more than speed." }
    ]
  },

  /* ---------------------------------------------------------------- 14 */
  {
    id: "control",
    title: "Control and administer procurements",
    summary: "Signing isn't the end: your goal is to deliver the project, so make sure the vendor holds up its end. Control Procurements means managing vendor relationships, monitoring contract performance, making appropriate contract changes and closing out the contract. There are contractual and legal implications, so document every change and communicate it to anyone affected. If the track-laying vendor agrees to upgrade the ties at no extra cost, add it to the contract, often by signing an addendum. Escalate issues to your contract team when necessary. Set up a claims administration process in advance, based on the contract terms, so claims are documented, processed, monitored and resolved in a structured way; negotiate to resolve issues before they escalate into disputes and appeals. If the vendor uses a higher grade of steel than agreed and the track now costs more, catch it early; if it surfaces later, the claims process gives your negotiations structure. Ask: is actual performance meeting planned performance? Are changes or corrective actions needed? How are procurements being closed? Close them as they're completed, not in a pile at the end, and end on a good note. Administering procurements starts once the contract is awarded and has two sides: technical compliance (is the product or service meeting technical requirements, does quality data show early warning signs, are deliverables fit for use, and are unnecessary scope changes and extra features being kept out?) and administrative requirements (monitoring expenses and on-time delivery and installation), which keep contracts within regulations and policies, prevent overbilling and make sure goods and services are received. Regular contract audits catch problems, such as vendor delays, before they grow.",
    figs: ["control-two-sides"],
    terms: [
      ["Control Procurements", "Managing vendor relationships, monitoring contract performance, making appropriate contract changes and closing out contracts.", "Monthly reviews of the track-laying contractor's progress, changes and claims."],
      ["Addendum", "A signed addition to a contract that records an agreed change.", "An addendum recording the vendor's free upgrade to better rail ties."],
      ["Claims administration", "A structured, contract-based process for documenting, processing, monitoring and resolving claims throughout the contract life cycle.", "The vendor's claim for extra steel costs is logged, assessed against the contract and negotiated."],
      ["Claim", "A request by one party, often the vendor, for compensation or a change it believes the contract entitles it to.", "The vendor claims $120k for using higher-grade steel."],
      ["Technical compliance", "Checking procurements against the statement of work: technical requirements, quality data and fitness for use, while keeping out unnecessary scope.", "Testing that delivered sensors meet the specified accuracy before accepting them.", 0, "control-two-sides"],
      ["Contract audit", "A regular review of how a contract is working, to find issues such as delays or overbilling before they grow.", "A quarterly audit comparing invoices with delivery records."]
    ],
    cards: [
      { d: 1, q: "What does Control Procurements involve, according to the course?", o: [
        ["Relationships, performance, changes and closeout", "Correct. Controlling procurements covers managing relationships, performance, changes and closeout."],
        ["Writing the RFP, hosting the bidder conference and selecting the winning vendor", "That's Conduct Procurements."],
        ["Deciding what to buy, how to buy it and when to buy it", "That's planning."],
        ["Choosing the contract type and setting the budget", "That's planning."]],
        k: "Relationships, performance, changes, closeout." },
      { d: 1, q: "Your vendor agrees to upgrade the rail ties at no extra cost. How do you make it legal?", o: [
        ["Put it in the contract, often by addendum", "Correct. Even a no-cost change must be added to the contract, usually by addendum, to be binding."],
        ["Thank them by email, since a friendly email is enough to bind them", "An email isn't a contract change."],
        ["Note it in your diary in case of a dispute", "A diary note isn't enforceable."],
        ["Nothing is needed, because the change is free", "Free changes still need documenting."]],
        k: "Even free changes go in the contract." },
      { d: 1, q: "When should you close procurements, according to the course?", o: [
        ["As each one is completed", "Correct. Closing each procurement when it's done stops loose ends piling up at the end."],
        ["All together in one batch at the very end of the project, to save time", "That's how you end up with a mountain of procurements."],
        ["Only after the next project has started", "Too late."],
        ["When the vendor asks you to close them", "You drive closure."]],
        k: "Close as you go." },
      { d: 2, q: "Why set up a claims administration process in advance?", o: [
        ["To resolve disagreements before they become disputes", "Correct. Agreeing how claims are handled before disagreements arise keeps them from becoming disputes."],
        ["So that every claim the vendor makes can be refused automatically and quickly", "It's for resolving claims fairly, not refusing them."],
        ["Because claims can only be made before the contract is signed", "Claims arise during the contract."],
        ["So the vendor's lawyers can run the process for you", "The process is yours, based on the contract."]],
        k: "Set the rules for disagreements before you have one." },
      { d: 2, q: "The vendor used higher-grade steel than agreed, and the track now costs more. What does the course recommend?", o: [
        ["Catch it early and negotiate; use the claims process if it surfaces late", "Correct. Raise it early and negotiate; if it surfaces late, the claims process resolves it."],
        ["Pay the extra cost immediately so the relationship stays good, then move on", "Unagreed changes shouldn't just be paid."],
        ["Refuse to pay and start legal action straight away", "Negotiate before disputes escalate."],
        ["Ask the vendor to rip it out and use cheaper steel", "Rarely sensible, and not the course's advice."]],
        k: "Early catch, structured negotiation." },
      { d: 2, q: "Which question belongs to technical compliance?", af: "control-two-sides", o: [
        ["Are the deliverables fit for use?", "Correct. Technical compliance checks whether the work itself meets requirements and is fit for use."],
        ["Are invoices being paid on time?", "That's administrative."],
        ["Is the vendor's office near the site?", "Not a compliance question."],
        ["Did the vendor attend the bidder conference?", "That's history, not compliance."]],
        k: "Technical compliance checks the work itself." },
      { d: 2, q: "What does monitoring a contract's administrative requirements help you do?", o: [
        ["Keep to regulations and policies, prevent overbilling, confirm goods are received", "Correct. Administrative checks keep you within the rules, catch overbilling and confirm delivery."],
        ["Redesign the vendor's product so it better meets every technical requirement", "Not your job, and not admin."],
        ["Choose a new vendor for the next phase of the project", "Not the purpose."],
        ["Decide which unsuccessful bidders to notify about the award", "That's done at award."]],
        k: "Admin checks keep the contract clean." },
      { d: 2, q: "Why does the course recommend regular contract audits?", o: [
        ["To find what's working and fix issues, like delays, before they grow", "Correct. Regular audits show what's working and catch problems while they're still small."],
        ["To show the vendor that you don't trust it and are watching closely", "Audits are about improvement, not distrust."],
        ["Because audits replace the need for status meetings", "They complement them."],
        ["So you can renegotiate the price every quarter", "Not their purpose."]],
        k: "Audit early, fix small." },
      { d: 3, q: "Reports show actual progress has fallen behind planned performance on a signalling contract. What does the course say you should ask next?", o: [
        ["Are changes or corrective actions needed?", "Correct. When performance falls behind the plan, consider whether changes or corrective actions are needed."],
        ["Can we close the procurement early and start again?", "An overreaction before understanding the cause."],
        ["Should we stop reading the status reports for a while?", "The opposite of controlling."],
        ["Can we hide the delay from the sponsor until it recovers?", "Concealment makes it worse."]],
        k: "Gap found → corrective action considered." },
      { d: 3, q: "During administration, the vendor offers to add an unrequested dashboard feature “for free”. What does technical compliance advise?", o: [
        ["Prevent unnecessary scope changes and extra features", "Correct. Free features still carry risk and testing effort."],
        ["Accept it gladly, since free extra features always add value for users", "Unrequested features add risk."],
        ["Accept it, but only if the vendor adds two more features", "More scope, more risk."],
        ["Ask the vendor to bill you for it separately later", "That's not free, and it's unplanned scope."]],
        k: "Guard the scope, even against gifts." }
    ],
    flips: [
      { d: 2, f: "What should you ask while controlling procurements, according to the course?", b: "Is actual performance meeting planned performance? Do any changes or corrective actions need to be taken? How are procurements being closed? Close them as they're completed, not in a pile at the end." },
      { d: 2, f: "Contrast technical compliance with administrative requirements.", b: "Technical compliance checks the work against the statement of work: does it meet technical requirements, does quality data show early warnings, are deliverables fit for use, and is unnecessary scope being kept out? Administrative requirements check the contract's admin side: expenses, on-time delivery and installation, regulations and policies, no overbilling, and goods and services actually received. Regular audits support both." }
    ]
  }

  ]
});
