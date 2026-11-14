/* Course 9 · NZS 3910 construction contracts. Part 2: getting paid under the Construction Contracts Act, retentions and
   security, risk and safety, disputes, and working across both editions. First option is correct; the app shuffles. */

PMQ.fig("cca-flow", `<svg viewBox="0 0 600 284" role="img" aria-label="Construction Contracts Act payment process: the payment claim, whether a payment schedule arrives on time, and the payee's remedies">
<defs><marker id="ah-ccaflow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<text class="t2" x="4" y="12">Getting paid under the Construction Contracts Act 2002</text>
<rect class="bx" x="180" y="22" width="240" height="34" rx="4"/><text class="tc" x="300" y="43" text-anchor="middle">Contractor's payment claim (s20)</text>
<path class="s" d="M300 56 V80" marker-end="url(#ah-ccaflow)"/>
<rect class="soft" x="150" y="84" width="300" height="50" rx="4"/><text class="tb" x="300" y="104" text-anchor="middle">Payment schedule on time?</text><text class="tc" x="300" y="124" text-anchor="middle">contract time, or 20 working days (s22)</text>
<path class="s" d="M240 134 L150 160" marker-end="url(#ah-ccaflow)"/>
<path class="s" d="M360 134 L450 160" marker-end="url(#ah-ccaflow)"/>
<rect class="bx" x="4" y="162" width="284" height="56" rx="4"/><text class="tok" x="146" y="181" text-anchor="middle">Yes</text><text class="tc" x="146" y="197" text-anchor="middle">Pay the scheduled amount</text><text class="tc" x="146" y="211" text-anchor="middle">by the due date</text>
<rect class="bx" x="312" y="162" width="284" height="56" rx="4"/><text class="tbad" x="454" y="181" text-anchor="middle">No</text><text class="tc" x="454" y="197" text-anchor="middle">Payer owes the full claimed</text><text class="tc" x="454" y="211" text-anchor="middle">amount on the due date (s23)</text>
<text class="t2" x="146" y="236" text-anchor="middle">Disagree with the schedule? Adjudicate.</text>
<text class="t2" x="146" y="250" text-anchor="middle">Unpaid? Recover as a debt or adjudicate.</text>
<text class="t2" x="454" y="236" text-anchor="middle">Recover it as a debt, suspend work</text>
<text class="t2" x="454" y="250" text-anchor="middle">after notice, or adjudicate</text>
<text class="t2" x="4" y="276">Pay-when-paid clauses don't work (s13) · standard 2013 terms: schedule 12 WD, pay 17 WD</text>
</svg>`);

PMQ.fig("nzs-disputes", `<svg viewBox="0 0 600 292" role="img" aria-label="Dispute resolution under NZS 3910: the 2013 edition's tiered, time-limited process and the 2023 edition's simpler process, with adjudication available under both">
<defs><marker id="ah-nzdisp" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<text class="t2" x="4" y="12">Resolving disputes under NZS 3910</text>
<text class="tb" x="148" y="30" text-anchor="middle">2013: tiered, time-limited</text>
<text class="tb" x="452" y="30" text-anchor="middle">2023: simpler, no deemed finality</text>
<rect class="bx" x="4" y="40" width="288" height="34" rx="4"/><text class="tb" x="148" y="62" text-anchor="middle">Engineer's decision</text>
<path class="s" d="M148 74 V90" marker-end="url(#ah-nzdisp)"/>
<rect class="bx" x="4" y="94" width="288" height="44" rx="4"/><text class="tb" x="148" y="112" text-anchor="middle">Request a Formal Decision</text><text class="t2" x="148" y="128" text-anchor="middle">within the time limit (generally 3 months)</text>
<path class="s" d="M148 138 V154" marker-end="url(#ah-nzdisp)"/>
<rect class="bx" x="4" y="158" width="288" height="44" rx="4"/><text class="tb" x="148" y="176" text-anchor="middle">Mediation or arbitration</text><text class="t2" x="148" y="192" text-anchor="middle">within 1 month of the Formal Decision</text>
<text class="tbad" x="148" y="222" text-anchor="middle">Miss a step: the decision can</text>
<text class="tbad" x="148" y="236" text-anchor="middle">become final and binding</text>
<rect class="bx" x="308" y="40" width="288" height="34" rx="4"/><text class="tb" x="452" y="62" text-anchor="middle">IC Decision (within 20 WD)</text>
<path class="s" d="M452 74 V90" marker-end="url(#ah-nzdisp)"/>
<rect class="bx" x="308" y="94" width="288" height="44" rx="4"/><text class="tb" x="452" y="112" text-anchor="middle">Good-faith negotiation</text><text class="t2" x="452" y="128" text-anchor="middle">between senior representatives (13.1.1)</text>
<path class="s" d="M452 138 V154" marker-end="url(#ah-nzdisp)"/>
<rect class="bx" x="308" y="158" width="288" height="44" rx="4"/><text class="tb" x="452" y="176" text-anchor="middle">Mediation or arbitration</text><text class="t2" x="452" y="192" text-anchor="middle">mediation if agreed; arbitration any time</text>
<text class="tok" x="452" y="222" text-anchor="middle">Missed time limits don't make</text>
<text class="tok" x="452" y="236" text-anchor="middle">IC Decisions final and binding</text>
<rect class="soft" x="4" y="254" width="592" height="30" rx="4"/><text class="tc" x="300" y="273" text-anchor="middle">CCA adjudication: available under both editions, alongside the contract process</text>
</svg>`);

PMQ.course({
  id: "nzs3910",
  topics: [

  /* ---------------------------------------------------------------- 6 */
  {
    id: "nzs-payment",
    title: "Getting paid: claims, schedules and the CCA",
    summary: "The Contractor submits progress payment claims, usually monthly, and the payer responds with a payment schedule saying what it will pay and why. Under the standard 2013 terms, the Engineer has 12 working days from receiving the claim to issue the schedule, and payment is due 17 working days after the claim; Special Conditions often change these. Under 2023, the Independent Certifier issues payment schedules as the Principal's agent. The Construction Contracts Act 2002 (CCA) sits over every construction contract in New Zealand, and the parties can't contract out of it. A payment claim must meet section 20: in writing, identifying the contract, the work and the period, stating the amount and due date, showing how it was calculated, and saying it's made under the Act. A payment schedule (section 21) must identify the claim and state the scheduled amount and, if that's less than claimed, how it was calculated and why. The schedule is due within the contract's time or, if there's none, 20 working days after the claim (section 22). If no schedule arrives in time, the payer must pay the full claimed amount on the due date (section 23), and the payee can recover it as a debt, suspend work after notice, or go to adjudication. Pay-when-paid clauses are ineffective (section 13). Adjudication is fast, and its payment determinations are enforceable straight away, while the merits can be reargued later: 'pay now, argue later'.",
    figs: ["cca-flow"],
    terms: [
      ["Payment claim (CCA)", "A claim for a progress payment that meets section 20 of the Construction Contracts Act: in writing, identifying the contract, work and period, the amount and due date, how it was calculated, and stating it's made under the Act.", "The monthly claim for March, with a measured breakdown."],
      ["Payment schedule", "The payer's written response stating how much it will pay; if that's less than claimed, it must show how the amount was calculated and why (section 21).", "Scheduling $412,000 against a $480,000 claim, with reasons for each deduction."],
      ["Construction Contracts Act 2002 (CCA)", "The law that sets payment rules for New Zealand construction contracts, makes pay-when-paid clauses ineffective, provides fast adjudication and protects retentions; parties can't contract out of it.", "It applies to a kitchen fit-out subcontract as much as to a motorway contract."],
      ["Adjudication", "The CCA's fast dispute process; an adjudicator's payment determination is enforceable straight away, though the merits can be revisited in arbitration or court.", "A subcontractor recovers an unpaid claim in weeks, not years."],
      ["Pay-when-paid clause", "A clause making payment depend on the payer being paid by someone else; the CCA makes these ineffective.", "'You'll be paid when the client pays us' in a subcontract."]
    ],
    cards: [
      { d: 1, q: "When the contract doesn't set a time, how long does the payer have to provide a payment schedule under the Construction Contracts Act?", o: [
        ["20 working days after the payment claim", "Right. Section 22: within the time the contract sets or, if none, 20 working days after the payment claim is served."],
        ["10 working days after the payment claim", "The Act's default is 20 working days."],
        ["30 calendar days after the end of the month", "The Act counts working days from the claim: 20 by default."],
        ["Whenever the payer has finished checking it", "There's a firm deadline, and missing it has serious consequences."]],
        k: "CCA default: payment schedule within 20 working days of the claim." },
      { d: 1, q: "Under the CCA, what happens if the payer doesn't provide a payment schedule in time?", fig: "cca-flow", o: [
        ["It owes the full claimed amount on the due date", "Right. The payer becomes liable for the claimed amount on the due date; the payee can recover it as a debt, suspend work after notice, or go to adjudication."],
        ["The claim lapses and must be resubmitted", "The opposite: the claimed amount becomes payable."],
        ["The Engineer decides the amount instead", "Missing the deadline takes the decision out of the payer's hands; the claimed amount is owed."],
        ["Interest is added; the amount stays disputed", "The claimed amount becomes payable and recoverable as a debt."]],
        k: "No schedule in time = the full claim is payable." },
      { d: 2, q: "Under the standard NZS 3910:2013 timings, how long does the Engineer have to issue a payment schedule?", o: [
        ["12 working days after receiving the claim", "Right. The standard 2013 timings are 12 working days for the payment schedule and 17 for payment, unless the Special Conditions change them."],
        ["17 working days after receiving the claim", "17 working days is when payment is due under the standard 2013 terms."],
        ["20 working days, the same as the Act", "That's the CCA default when a contract is silent; NZS 3910:2013 sets shorter times."],
        ["5 working days after the end of the month", "Not the standard timing."]],
        k: "Standard 2013 terms: schedule in 12 working days, payment in 17. Check the Special Conditions." },
      { d: 2, q: "A subcontract says: 'Payment is due within 5 days of the head contractor being paid by the Principal.' Is that enforceable?", o: [
        ["No; pay-when-paid clauses don't work", "Right. Section 13 makes conditional payment (pay-when-paid) provisions ineffective, so the subcontractor's payment can't depend on the head contractor being paid."],
        ["Yes, because both parties signed the subcontract", "You can't contract out of the Act; pay-when-paid clauses have no effect."],
        ["Only on commercial construction projects", "The rule applies to construction contracts generally."],
        ["Yes, as long as the clause is in bold", "Formatting doesn't matter; the clause has no effect."]],
        k: "Pay-when-paid is out (CCA s13): payment can't hinge on someone else paying." },
      { d: 2, q: "Your payment schedule pays less than was claimed. What must it include?", o: [
        ["How you calculated the amount and why it's less", "Right. Section 21: identify the claim and the scheduled amount and, if it's less than claimed, how you calculated it and why, including any set-off."],
        ["Just the amount you'll pay", "If it's less than claimed, you must show the calculation and the reasons."],
        ["The Contractor's written agreement to the lower figure", "Agreement isn't required; reasons are."],
        ["A statutory declaration signed by a company director", "No declaration is needed; the schedule must explain itself."]],
        k: "Schedule less than the claim? Show the calculation and the reasons." },
      { d: 3, q: "Your team misses the payment schedule deadline on a claim that includes $90,000 of variations you dispute. What's the position?", o: [
        ["You likely owe it all, and argue the variations later", "Right. Without a schedule in time, the claimed amount is payable on the due date. You can still dispute the variations later, through the contract, adjudication or arbitration."],
        ["You can deduct the disputed amount when paying", "Without a timely schedule you can't withhold it; you'd have to pursue it separately."],
        ["The deadline doesn't apply to disputed items", "The deadline applies to the whole claim."],
        ["The claim is invalid, since it includes disputed work", "Disputed content doesn't invalidate a claim; responding to it is what a schedule is for."]],
        k: "Miss the schedule and you pay now, argue later." },
      { d: 2, q: "What does 'pay now, argue later' mean in CCA adjudication?", o: [
        ["Pay what's ordered now; the merits can be reargued", "Right. An adjudicator's payment determination is enforceable straight away, keeping cash flowing; the underlying dispute can still be decided finally in arbitration or court."],
        ["The losing side pays both sides' costs at once", "Costs aren't the point; it's cash flow first, final rights later."],
        ["Payment waits until any arbitration is finished", "The reverse: payment comes first."],
        ["The adjudicator's decision can never be reviewed", "The underlying dispute can be revisited in arbitration or court."]],
        k: "Adjudication keeps cash flowing; final rights can be settled later." },
      { d: 2, q: "Under the 2023 edition, who issues payment schedules?", o: [
        ["The Independent Certifier, as the Principal's agent", "Right. The IC is impartial when making Decisions but acts as the Principal's agent when issuing payment schedules."],
        ["The Contract Administrator, as the Principal's representative", "Payment schedules sit with the IC, acting as the Principal's agent."],
        ["The Principal's accounts payable team", "The contract gives this job to the IC."],
        ["The Contractor's quantity surveyor", "The Contractor makes payment claims; it doesn't schedule them."]],
        k: "2023: the IC issues payment schedules as the Principal's agent." }
    ],
    flips: [
      { d: 2, f: "What must a valid CCA payment claim contain?", b: "Under section 20 it must be in writing; identify the construction contract; identify the work and the period it covers; state the amount claimed and the due date for payment; show how the amount was calculated; and state that it's made under the Construction Contracts Act 2002. Check the contract for any extra requirements." },
      { d: 2, f: "A payment claim lands on your desk. What do you do as the payer's manager?", bf: "cca-flow", b: "Log the date received and diarise the schedule deadline (the contract's time, 12 working days under standard 2013 terms, or 20 by default). Check the claim against progress, rates and variations. Issue a payment schedule on time stating the scheduled amount, how you calculated it and why it's less, if it is. Pay the scheduled amount by the due date. A missed schedule can make the full claim payable." }
    ]
  },

  /* ---------------------------------------------------------------- 7 */
  {
    id: "nzs-retentions",
    title: "Retentions, bonds and security",
    summary: "Retentions are a portion of each progress payment held back as security for finishing the work and fixing defects. The rate and the release points are set in the Special or Specific Conditions; commonly part is released at Practical Completion and the rest after the defects period. The Construction Contracts Act protects retention money on commercial construction contracts, and the Retention Money Amendment Act 2023 tightened the rules for contracts entered into or renewed after 5 October 2023. Retention money is held on trust, so it isn't available to the holder's creditors if the holder fails. It must sit in a separate account at a registered New Zealand bank, used only for retentions, unless a complying instrument such as a bond, guarantee or insurance is used instead. The holder must keep separate records for each party and contract, and report the amount and account details to each beneficiary, then at least every three months. Retentions can be used to fix defects only if the contract allows it, and only after at least 10 working days' written notice. Non-compliance is an offence, with fines up to $200,000 for the holder and $50,000 for each director. The reforms followed collapses that left subcontractors unable to recover their retentions. Bonds are a separate kind of security: a performance bond from a bank or insurer lets the Principal claim if the Contractor defaults, and it's often reduced at Practical Completion.",
    terms: [
      ["Retention money", "A portion of each progress payment held back as security for completion and defects, released as the contract specifies.", "5% held from each claim, half released at Practical Completion."],
      ["Retention trust (CCA)", "On commercial construction contracts, retention money is held on trust for the party it was withheld from, in a separate NZ bank account used only for retentions, unless a complying instrument is used.", "A head contractor's dedicated retentions account for its subcontractors' money."],
      ["Complying instrument", "Security, such as a bond, guarantee or insurance, that can replace holding retention money in a separate account.", "A retention bond from an insurer instead of cash retentions."],
      ["Performance bond", "A guarantee from a bank or insurer that the Principal can call on if the Contractor defaults; often reduced at Practical Completion.", "A bond for 5% of the contract price."]
    ],
    cards: [
      { d: 1, q: "What are retentions for?", o: [
        ["Security for completion and fixing defects", "Right. A portion of each progress payment is held back and released as the contract says, commonly part at Practical Completion and the rest after the defects period."],
        ["A discount for paying the Contractor promptly", "They're security, not a discount."],
        ["A fund for the Principal's design changes", "Design changes are Variations, paid for separately."],
        ["The Contractor's profit, paid at the very end", "They're the Contractor's money held as security, not profit."]],
        k: "Retentions = security for completion and defects." },
      { d: 2, q: "For a commercial contract entered into after 5 October 2023, how must the payer hold retention money?", o: [
        ["On trust, in a separate NZ bank account", "Right. Retention money is held on trust in a separate account at a registered NZ bank, used only for retentions, unless a complying instrument such as a bond, guarantee or insurance is used."],
        ["In its general operating account, tracked in the ledger", "Mixing retentions with general funds is exactly what the 2023 changes stop."],
        ["In an account run by Standards New Zealand", "Standards New Zealand publishes forms; it doesn't hold money."],
        ["It needn't, because retentions were abolished in 2023", "Retentions still exist; the rules on holding them got stricter."]],
        k: "Retentions: on trust, in a separate NZ bank account, or a complying instrument." },
      { d: 2, q: "A head contractor wants to use a subcontractor's retentions to fix that subcontractor's defects. What must it do first?", o: [
        ["Give 10 working days' written notice", "Right. Retentions can be used to fix defects only if the contract allows it, and only after at least 10 working days' written notice stating the purpose and the defects."],
        ["Nothing; retentions can be used at any time", "The Act requires notice, and the contract must allow it."],
        ["Get an adjudicator's approval", "No approval is needed, but notice is."],
        ["Wait until the defects period has ended", "Timing isn't the issue; notice is."]],
        k: "Using retentions for defects: the contract must allow it, plus 10 working days' notice." },
      { d: 3, q: "Why do directors pay close attention to retention compliance?", o: [
        ["They can be personally fined, up to $50,000 each", "Right. Non-compliance is an offence for the party holding retentions (fines up to $200,000) and its directors (up to $50,000 each), with a defence for taking all reasonable steps."],
        ["Breaches make the construction contract void", "The contract stands; the breach is an offence."],
        ["Directors must sign every retention release", "No such rule; the risk is personal liability for non-compliance."],
        ["Any breach triggers the company's automatic liquidation", "Nothing is automatic, but fines and personal liability apply."]],
        k: "Retention breaches are offences: up to $200,000 for the holder and $50,000 per director." },
      { d: 2, q: "Instead of holding cash retentions in a separate account, what can the payer use?", o: [
        ["A bond, guarantee or insurance", "Right. A complying instrument, such as a bond, guarantee or insurance, is the alternative to holding retention money in a separate account."],
        ["A promise in the contract to pay later", "A promise isn't security; the Act requires trust money or a complying instrument."],
        ["A higher liquidated damages rate", "LDs are about delay, not retentions."],
        ["A personal guarantee from the project manager", "That isn't a complying instrument under the Act."]],
        k: "Complying instrument (bond, guarantee, insurance) = the alternative to cash retentions." },
      { d: 2, q: "Why did New Zealand tighten its retention rules in 2023?", o: [
        ["Firms collapsed and subcontractors lost retentions", "Right. Collapses left subcontractors unable to recover retentions. Now the money is trust property, kept away from the holder's creditors."],
        ["To stop Principals using retentions at all", "Retentions are still allowed; the aim was to protect them."],
        ["To align New Zealand law with FIDIC contracts", "Nothing to do with FIDIC."],
        ["Retention rates were too low to cover defects", "The issue was protecting the money, not the rates."]],
        k: "The 2023 rules protect retention money if the holder goes under." }
    ],
    flips: [
      { d: 2, f: "Summarise the retention rules for commercial contracts entered into from 5 October 2023.", b: "Retention money is held on trust. Keep it in a separate account at a registered NZ bank, used only for retentions, or use a complying instrument (bond, guarantee or insurance). Keep separate records for each party and contract, and report the amount and account details to each beneficiary, then at least every three months. Use retentions to fix defects only if the contract allows it, after 10 working days' written notice. Breaches can mean fines up to $200,000 for the holder and $50,000 for each director." }
    ]
  },

  /* ---------------------------------------------------------------- 8 */
  {
    id: "nzs-risk",
    title: "Risk, insurance, liability and safety",
    summary: "The contract allocates risk; insurance pays for much of it. The Special or Specific Conditions say who arranges contract works insurance (physical loss or damage to the works), and the Contractor normally carries public liability insurance, plus professional indemnity where it designs. The standard clauses let the Contractor claim for physical conditions an experienced contractor couldn't reasonably have foreseen at tender, such as an uncharted buried tank, but Principals often amend this, so read the Special or Specific Conditions. The 2023 edition made the Contractor's indemnity expressly fault-based (clause 7.1), so it covers loss the Contractor causes rather than loss regardless of fault. It added an optional cap on liability (clause 7.2), which can be set at the insurance cover a party has arranged (7.2.3). There's still no general good-faith duty or force majeure clause; parties who want them add them in the Specific Conditions. On safety, the Principal and Contractor are usually both PCBUs (persons conducting a business or undertaking) under the Health and Safety at Work Act 2015, with overlapping duties: they must consult, cooperate and coordinate, and neither can contract its duty away. The 2023 edition aligns its safety clause with that Act (clause 5.8) and expects a site-specific safety plan. It also adds an environmental clause (practicable steps against contaminant discharges, adverse effects and excessive boundary noise) and groups project plans, including any sustainability plan, as Management Plans.",
    terms: [
      ["Contract works insurance", "Insurance against physical loss of or damage to the works during construction; the Special or Specific Conditions say who arranges it.", "Cover for a partly built retaining wall damaged in a storm."],
      ["Public liability insurance", "Insurance for a party's legal liability for injury to people or damage to other people's property.", "A truck damages a neighbour's fence and driveway."],
      ["Fault-based indemnity (2023)", "Clause 7.1: the Contractor indemnifies the Principal for loss caused by the Contractor's fault, rather than for loss regardless of fault.", "It covers damage from careless excavation, not damage nobody caused."],
      ["Limitation of liability (2023)", "Clause 7.2's optional cap on a party's total liability under the contract, which can be set at the insurance cover arranged (7.2.3).", "Liability capped at the contract price."],
      ["Site-specific safety plan", "A health and safety plan for a particular site and job, setting out its hazards, controls, responsibilities and emergency arrangements; the 2023 edition expects one.", "The plan for a live-road culvert job, covering traffic management, excavation and confined spaces."],
      ["Unforeseeable physical conditions", "Ground or physical conditions an experienced contractor couldn't reasonably have foreseen at tender; the standard clauses let the Contractor claim for them unless the contract is amended.", "An uncharted old tank found while digging foundations."]
    ],
    cards: [
      { d: 1, q: "Under the 2023 edition, the Contractor's indemnity to the Principal is:", o: [
        ["Fault-based", "Right. Clause 7.1 makes the Contractor's indemnity expressly fault-based, which narrows its exposure."],
        ["Unlimited and regardless of fault", "2023 narrowed the indemnity to loss caused by the Contractor's fault (clause 7.1)."],
        ["Removed entirely", "It's still there, just fault-based."],
        ["Limited to injuries to third parties", "It isn't limited like that; the change is that it's fault-based."]],
        k: "2023 indemnity (7.1): fault-based." },
      { d: 2, q: "What can the 2023 liability cap be set at under clause 7.2.3?", o: [
        ["The insurance cover a party has arranged", "Right. The cap can be the amount of insurance cover a party has arranged under the contract, even if the aggregate cap figure is lower; parties may amend this."],
        ["Always 10% of the contract price", "There's no fixed percentage; the parties choose, and 7.2.3 links it to insurance."],
        ["The value of retentions held at the time", "Retentions aren't the measure."],
        ["Whatever the IC decides at completion", "The cap is agreed in the contract, not decided later."]],
        k: "2023 liability cap (7.2): optional, and can equal the insurance arranged (7.2.3)." },
      { d: 2, q: "Under the Health and Safety at Work Act 2015, how do the Principal and Contractor share duties on site?", o: [
        ["Both have duties: consult, cooperate and coordinate", "Right. Both are PCBUs with overlapping duties. They must consult, cooperate and coordinate with each other, and neither can contract its duty away."],
        ["The contract can transfer all duties to the Contractor", "You can't contract out of health and safety duties."],
        ["Only whoever holds the building consent has duties", "Duties come from being a PCBU, not from holding a consent."],
        ["The Principal's duties end once a Contractor is appointed", "The Principal keeps its duties as far as it can influence and control the work."]],
        k: "Overlapping duties: consult, cooperate and coordinate; you can't contract out." },
      { d: 2, q: "While excavating, the Contractor hits an uncharted concrete tank that no site investigation showed. Under the unamended standard clauses, what's likely?", o: [
        ["A claim, if an experienced contractor couldn't foresee it", "Right. The standard clauses let the Contractor claim for physical conditions an experienced contractor couldn't reasonably have foreseen at tender. Many Principals amend this, so check."],
        ["No claim, because ground risk always sits with the Contractor", "The standard clauses allow a claim for conditions an experienced contractor couldn't reasonably foresee."],
        ["The Principal must end the contract", "Nothing like that; it's a question of time and cost."],
        ["The provisional sums pay for it automatically", "Provisional sums cover only the work they were set up for."]],
        k: "Unforeseeable physical conditions: claimable under the standard clauses unless amended." },
      { d: 3, q: "A Principal adds a Special Condition making the Contractor responsible for all ground conditions. What should the Contractor's manager do at tender?", o: [
        ["Price the risk or negotiate it before signing", "Right. Use the site investigation data to price the extra risk, ask for it to be removed or capped, or decide not to bid. Special Conditions override the standard clauses."],
        ["Ignore it; the General Conditions override it", "Special Conditions amend the General Conditions, not the other way round."],
        ["Assume the Construction Contracts Act makes it void", "The Act deals with payment and adjudication; it doesn't ban risk transfer."],
        ["Rely on contract works insurance to cover ground risk", "That insurance covers physical damage to the works, not the extra cost of unexpected ground."]],
        k: "Risk shifted by amendment must be priced, negotiated or declined, not ignored." },
      { d: 2, q: "Which statement about NZS 3910:2023 is true?", o: [
        ["It has no general good faith or force majeure clause", "Right. Commentators note there's no general good-faith duty or force majeure clause, though disputes start with good-faith negotiation. Add them through the Specific Conditions if needed."],
        ["It makes the Contractor arrange all the insurance", "Who arranges which insurance is set in the Specific Conditions."],
        ["It removed the health and safety clauses", "It updated them to align with the Health and Safety at Work Act 2015."],
        ["It requires adjudication for every dispute", "Adjudication is available, never required."]],
        k: "2023 still has no general good faith or force majeure clause; add them if you need them." },
      { d: 2, q: "What does the 2023 edition's environmental clause ask of the Contractor?", o: [
        ["Take practicable steps to limit environmental harm", "Right. The new clause asks for practicable steps to prevent contaminant discharges, adverse environmental effects and excessive noise at the boundary."],
        ["A personal resource consent for every activity", "Consents are a statutory matter; the clause is about practicable steps on site."],
        ["Offsetting all the project's carbon emissions", "The clause doesn't require that; sustainability goals go in Management Plans if wanted."],
        ["Nothing new; it repeats a 2013 clause", "It's a new clause in 2023."]],
        k: "2023 environmental clause: practicable steps against discharges, adverse effects and boundary noise." }
    ],
    flips: [
      { d: 2, f: "What changed on liability and safety in the 2023 edition?", b: "The Contractor's indemnity is fault-based (7.1). There's an optional cap on liability (7.2), which can be set at the insurance arranged (7.2.3). Health and safety clauses align with the Health and Safety at Work Act 2015 (5.8), with a site-specific safety plan. A new environmental clause and Management Plans (including sustainability) were added. There's still no general good faith or force majeure clause unless you add one." },
      { d: 2, f: "The Principal and Contractor are both PCBUs. What do 'overlapping duties' look like on site?", b: "Agree in writing who controls what: site access, traffic management, permits to work, inductions and incident reporting. Share hazard information and the site-specific safety plan. Meet regularly to consult, cooperate and coordinate. Neither party can contract its duty away, though they can agree who does which task." }
    ]
  },

  /* ---------------------------------------------------------------- 9 */
  {
    id: "nzs-disputes",
    title: "Disputes: 2013 vs 2023",
    summary: "The 2013 edition has a tiered, time-limited process. A party unhappy with an Engineer's decision must ask the Engineer for a Formal Decision within the time limit (generally three months), then refer that Formal Decision to mediation or arbitration within one month. Miss a step and the decision can become final and binding. Courts have taken these steps seriously: cases such as SRG Global (Court of Appeal, 2022) turned on the time-limited preconditions to arbitration, and in Northlake v Civil Construction (High Court, 2023) the court indicated that giving notice isn't enough; the dispute must be actively progressed within the clause 13 limits. The 2023 edition is simpler. A party can ask the Independent Certifier for a Decision or a review (clause 6.4), which commentators say comes within 20 working days of the request, and missing the time limits for challenging an IC Decision doesn't make it final and binding. Disputes go first to good-faith negotiation between senior representatives (clause 13.1.1); mediation follows if both agree; and either party can refer a dispute to arbitration at any stage, without contractual time limits or preconditions (clause 13.3.1). Adjudication under the Construction Contracts Act is a statutory right under both editions and sits alongside the contract process. Whatever the edition: record facts as they happen, diarise every decision date, and escalate early.",
    figs: ["nzs-disputes"],
    terms: [
      ["Formal Decision (2013)", "The Engineer's review of an earlier decision, which a party must request within the contract's time limits before taking a dispute further.", "Asking the Engineer to reconsider a rejected extension of time."],
      ["Final and binding", "A decision that can no longer be challenged; under 2013, an Engineer's decision can become final and binding if the time limits for disputing it are missed.", "A valuation that stands because no one referred it on within a month."],
      ["Mediation", "A facilitated negotiation in which a neutral mediator helps the parties reach their own agreement; the mediator doesn't decide.", "A one-day mediation that settles a variations dispute."],
      ["Arbitration", "A private, binding process in which an arbitrator decides the dispute; under 2023 it's available at any stage, without contractual time limits or preconditions.", "An arbitrator's award on a $2 million delay claim."],
      ["Senior representatives' negotiation (2023)", "Clause 13.1.1: the parties try to resolve a dispute by good-faith negotiation between senior people before mediation or arbitration.", "The two companies' general managers meet to settle a stalled final account."]
    ],
    cards: [
      { d: 1, q: "Under the 2013 edition, what can happen if a party misses the time limit to challenge the Engineer's decision?", o: [
        ["The decision can become final and binding", "Right. Under the 2013 clause 13 process, missing the time limits can make the decision final and binding, and courts have enforced this."],
        ["The Engineer must reconsider it anyway", "There's no obligation to reconsider once the time has passed."],
        ["The dispute goes straight to the High Court", "The clause doesn't send it to court; it can make the decision final."],
        ["Nothing; the time limits are only guidance", "Courts have enforced them."]],
        k: "2013: miss a dispute deadline and the Engineer's decision can stick." },
      { d: 1, q: "Under the 2023 edition, when can a party refer a dispute to arbitration?", o: [
        ["At any stage, with no contractual preconditions", "Right. Clause 13.3.1 lets either party refer a dispute to arbitration without contractual time limits or preconditions, usually after good-faith negotiation."],
        ["Only after a Final Decision and mediation", "2023 removed those preconditions."],
        ["Only within one month of an IC Decision", "There are no contractual time limits on referral."],
        ["Only after Practical Completion", "It can happen at any stage."]],
        k: "2023: arbitration at any stage (13.3.1), with no contractual time limits or preconditions." },
      { d: 2, q: "Is adjudication under the Construction Contracts Act available on NZS 3910 contracts?", o: [
        ["Yes, under either edition", "Right. Adjudication is a statutory right that sits alongside the contract's dispute process; the parties can't contract out of it."],
        ["Only under the 2023 edition", "It's a statutory right, so the edition doesn't matter."],
        ["Only if the Special Conditions allow it", "You can't contract out of the Act."],
        ["No, because the arbitration clause excludes it", "An arbitration clause doesn't remove the statutory right to adjudicate."]],
        k: "CCA adjudication is a statutory right under any edition." },
      { d: 2, q: "On a 2013 job, you write to the Engineer disputing a decision within the time limit, then do nothing for months. What's the risk?", o: [
        ["Notice may not be enough; you must actively progress it", "Right. In Northlake v Civil Construction (2023), the High Court indicated that a notice alone isn't enough; the dispute has to be actively progressed within clause 13's time limits."],
        ["None; the letter keeps your rights open indefinitely", "Courts have said a dispute must be actively progressed within the clause 13 limits."],
        ["The Engineer must refer it to arbitration for you", "The Engineer doesn't refer disputes on a party's behalf."],
        ["The Principal must pay the disputed sum into trust", "There's no such requirement."]],
        k: "2013 disputes: notify, then actively progress within the limits (Northlake, 2023)." },
      { d: 2, q: "Under the 2023 edition, an IC Decision isn't challenged within the time limits. Is it final and binding?", o: [
        ["No; missing the limits doesn't make it final", "Right. Missing the time limits for challenging an IC Decision doesn't make it final and binding, unlike the 2013 regime."],
        ["Yes, exactly as it would be under the 2013 edition", "2023 dropped that deemed finality."],
        ["Yes, once the Principal endorses it", "The Principal can't make the IC's Decision binding."],
        ["Only for claims under $50,000", "There's no threshold."]],
        k: "2023: no deemed finality for missed IC time limits." },
      { d: 2, q: "What's the first formal step for resolving a dispute under the 2023 edition's clause 13?", fig: "nzs-disputes", o: [
        ["Good-faith talks between senior representatives", "Right. Clause 13.1.1 starts with good-faith negotiation between senior representatives; mediation follows if both agree, and arbitration is available at any stage."],
        ["Compulsory mediation", "Mediation happens if both parties agree; it isn't compulsory."],
        ["Asking the Engineer for a Formal Decision on the dispute", "That's the 2013 process; 2023 has no Engineer."],
        ["Filing proceedings in the High Court straight away", "The contract points to negotiation, then mediation or arbitration."]],
        k: "2023 disputes: senior-level good-faith talks (13.1.1), then mediation if agreed, or arbitration." },
      { d: 3, q: "Why was the 2013 dispute clause seen as a trap for the unwary?", o: [
        ["Missed deadlines could make decisions final", "Right. The tiered process had short time limits, and missing one could make an Engineer's decision final and binding. Cases such as SRG Global (Court of Appeal, 2022) turned on these time-limited preconditions."],
        ["It let the Principal skip mediation whenever it wanted", "Both parties followed the same process."],
        ["It banned adjudication", "Adjudication was always available under the Act."],
        ["It required both parties to hire lawyers at every step", "No such requirement."]],
        k: "2013: diarise every decision date; deadlines can make decisions final." },
      { d: 2, q: "How long does the IC have to give a Decision after a request under the 2023 regime?", o: [
        ["20 working days", "Right. Commentary on the 2023 regime gives the IC 20 working days from the request."],
        ["Within 5 working days", "Too short; it's 20 working days."],
        ["3 calendar months", "Three months relates to asking the IC for a review, not how long the IC has to decide."],
        ["Whenever practicable", "There's a set time: 20 working days."]],
        k: "IC Decision: within 20 working days of the request." }
    ],
    flips: [
      { d: 2, f: "Compare the 2013 and 2023 dispute processes.", bf: "nzs-disputes", b: "2013: Engineer's decision → request a Formal Decision within the time limit (generally three months) → refer it to mediation or arbitration within one month; miss a step and the decision can become final and binding. 2023: ask the IC for a Decision or review (within 20 working days) → good-faith negotiation between senior representatives → mediation if both agree, or arbitration at any stage; missed time limits don't make Decisions final. CCA adjudication is available under both." },
      { d: 2, f: "Set up a dispute-safe routine on a 2013-edition project.", b: "Log every Engineer decision with its date. Diarise the deadline for requesting a Formal Decision and, after it, the one-month window to refer to mediation or arbitration. Decide early whether to challenge; if you do, actively progress it rather than relying on a notice. Keep records as things happen. Remember that adjudication under the Construction Contracts Act is available alongside." }
    ]
  },

  /* ---------------------------------------------------------------- 10 */
  {
    id: "nzs-edition",
    title: "Working on either edition: spot it, run it",
    summary: "You'll often manage both editions at once, so learn to tell them apart in a minute. Check the cover and the Agreement for 'NZS 3910:2013' or 'NZS 3910:2023'. Look at the roles: an Engineer and Engineer's Representative mean 2013; a Contract Administrator and Independent Certifier mean 2023. 'Special Conditions' is the 2013 term and 'Specific Conditions' the 2023 one. 2013 has the Contractor's 'advance notification'; 2023 has two-way 'Early Warning' (clause 6.10). Features found only in 2023 include a Target Contract Price, the Interim Final Account and Final Account, a fault-based indemnity and a liability cap. The dispute clause is a strong clue: a Formal Decision with deemed finality is 2013, while IC Decisions, senior-level talks and arbitration at any stage are 2023. Beware hybrids: 2013 contracts amended to borrow 2023 ideas (an independent certifier, say), or 2023 contracts whose Specific Conditions bring back strict time bars. The amendments, not the label, decide how a contract works. A start date proves nothing, since many recent projects still use 2013. Keep a one-page summary for each contract (roles, notice periods, payment timings, LDs, retentions, insurance, dispute steps), and when experienced colleagues apply 2013 habits to a 2023 job, explain the difference kindly and route the item to the right person.",
    terms: [
      ["Contract summary (one-pager)", "A one-page digest of a contract's roles, dates, notice periods, payment timings, LDs, retentions, insurance and dispute steps, kept for the project team.", "Pinned in the site office: 'EOT notice 20 WD; claims due on the 20th; IC: J. Smith'."],
      ["Advance notification (2013)", "The 2013 edition's requirement for the Contractor to give early notice of matters affecting the works; replaced in 2023 by two-way Early Warning.", "Telling the Engineer that a supplier's steel will be late."],
      ["Hybrid contract", "An informal term for a standard form amended to borrow features of another edition or form; the amendments, not the label, decide how it works.", "A 2013 contract whose Special Conditions add an independent certifier."]
    ],
    cards: [
      { d: 1, q: "The dispute clause mentions a 'Formal Decision' by the Engineer. Which edition is it most likely to be?", o: [
        ["NZS 3910:2013", "Right. The Engineer and the Formal Decision step belong to the 2013 dispute process."],
        ["NZS 3910:2023", "2023 has no Engineer; the IC makes Decisions."],
        ["NZS 3917:2025", "That's the fixed-term form, which follows the 2023 approach."],
        ["You can't tell anything from the dispute clause", "The dispute clause is one of the clearest clues."]],
        k: "'Engineer' and 'Formal Decision' point to 2013." },
      { d: 1, q: "Which term appears only in the 2023 edition?", o: [
        ["Independent Certifier", "Right. The Independent Certifier, with the Contract Administrator, replaced the Engineer in 2023."],
        ["Engineer's Representative", "That's a 2013 role."],
        ["The Special Conditions", "That's the 2013 term; 2023 uses Specific Conditions."],
        ["An advance notification", "That's 2013; 2023 uses Early Warning."]],
        k: "2023 words: Contract Administrator, Independent Certifier, Specific Conditions, Early Warning." },
      { d: 2, q: "A 2013-edition contract's Special Conditions appoint an 'independent certifier' and add a liability cap. How should you treat it?", o: [
        ["As 2013 with those changes; read each amendment", "Right. It's a 2013 contract modified by its Special Conditions. Read each amendment and how it interacts with the 2013 clauses; don't assume 2023 rules apply."],
        ["As a 2023 contract, since it borrows the 2023 features", "The base text is 2013; only the amendments change it."],
        ["As invalid, because editions can never be mixed", "Parties can amend a standard form however they agree."],
        ["As plain 2013, ignoring the amendments", "Amendments are part of the contract and override the standard clauses."]],
        k: "Hybrids are common: the amendments, not the label, decide how a contract works." },
      { d: 2, q: "On a 2023 job, a senior engineer says: 'Just send it to the Engineer to decide.' What's the helpful response?", o: [
        ["Explain the CA/IC split and route it correctly", "Right. Many experienced people learnt on 2013. A quick, respectful explanation (the CA for Instructions and agreement, the IC for impartial Decisions) gets the item to the right person."],
        ["Agree; the CA and IC are just the Engineer renamed", "They're two distinct roles with different duties."],
        ["Send it to both and let them sort it out", "That blurs the roles and risks a decision from the wrong person."],
        ["Escalate the confusion to the Principal's board", "Overkill; a quick explanation solves it."]],
        k: "Old habits die hard: explain the CA/IC split kindly and route items correctly." },
      { d: 2, q: "You manage two projects, one on each edition. What's the best way to avoid mixing up their rules?", o: [
        ["Keep a one-page summary for each contract", "Right. A one-page summary of roles, notice periods, payment timings, LDs, retentions and dispute steps keeps both teams on the right rules."],
        ["Use the 2023 rules on both, as they're newer", "Each contract's own terms apply."],
        ["Rely on the commercial manager to remember", "Memory isn't a control; a written summary is."],
        ["Apply whichever rule suits your company at the time", "That's how claims and disputes get lost."]],
        k: "One page per contract: roles, notice periods, payment dates, LDs, retentions, disputes." },
      { d: 3, q: "Which clue is the weakest evidence of a contract's edition?", o: [
        ["The project started in 2024", "Right. Many projects starting after 2023 still use the 2013 edition. Check the document itself."],
        ["Roles called Contract Administrator and Independent Certifier", "Strong evidence of 2023 (or a heavily amended 2013)."],
        ["References to 'Specific Conditions'", "A strong 2023 clue."],
        ["A Target Contract Price clause", "Target pricing is a 2023 feature."]],
        k: "A start date proves nothing: plenty of new projects still use 2013." },
      { d: 2, q: "On a 2023 job, the Contractor spots a risk that may delay completion. What should it give, and under which clause?", o: [
        ["An early warning under clause 6.10", "Right. Clause 6.10 requires written early warning as soon as a party becomes aware of a matter likely to affect the price, completion or statutory compliance."],
        ["An advance notification under the 2013 clause", "That's the 2013 mechanism; 2023 replaced it with Early Warning."],
        ["A request for a Formal Decision", "That's a 2013 dispute step."],
        ["An adjustment to its next payment claim", "Payment claims don't notify risks."]],
        k: "2023 risk notice = early warning (6.10)." }
    ],
    flips: [
      { d: 1, f: "Five clues that tell you which edition you're reading.", b: "1) The cover or Agreement: NZS 3910:2013 or :2023. 2) Roles: Engineer and Engineer's Representative (2013), or Contract Administrator and Independent Certifier (2023). 3) 'Special Conditions' (2013) or 'Specific Conditions' (2023). 4) 'Advance notification' (2013) or two-way 'Early Warning' (2023). 5) Disputes: Formal Decision and deemed finality (2013), or IC Decisions, senior-level talks and arbitration at any stage (2023). Then read the amendments, which can change all of this." },
      { d: 2, f: "Make a one-page contract summary for your project team.", b: "Include: the edition and key amendments; who's who (the Engineer, or the CA and IC, with contacts); the Due Date for Completion and LD rate; EOT and early-warning notice periods; payment claim dates and schedule and payment timings; the retention rate and release points; who arranges which insurance; the defects period; dispute steps and deadlines. Update it whenever a variation or amendment changes the deal." }
    ]
  }

  ]
});
