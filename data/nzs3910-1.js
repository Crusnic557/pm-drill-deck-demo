/* Course 9 · NZS 3910 construction contracts, 2013 and 2023 editions, for people managing New Zealand building and civil
   projects. Concepts are paraphrased from published summaries of the standards (Standards New Zealand and NZ law firms) and
   the Construction Contracts Act 2002; scenarios are original. Not legal advice: the signed contract and its Special or
   Specific Conditions govern. Part 1. First option is correct; the app shuffles. */

PMQ.fig("nzs-roles", `<svg viewBox="0 0 600 286" role="img" aria-label="NZS 3910:2013 has one Engineer wearing two hats; NZS 3910:2023 splits the job between a Contract Administrator and an Independent Certifier">
<defs><marker id="ah-nzroles" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<text class="t2" x="4" y="12">Who runs the contract</text>
<text class="tb" x="150" y="36" text-anchor="middle">NZS 3910:2013</text>
<text class="tb" x="455" y="36" text-anchor="middle">NZS 3910:2023</text>
<path class="s2" d="M302 24 V280"/>
<rect class="bx" x="8" y="48" width="104" height="30" rx="4"/><text class="tb" x="60" y="68" text-anchor="middle">Principal</text>
<rect class="bx" x="188" y="48" width="104" height="30" rx="4"/><text class="tb" x="240" y="68" text-anchor="middle">Contractor</text>
<path class="s" d="M112 63 H188"/><text class="t2" x="150" y="58" text-anchor="middle">contract</text>
<path class="s" d="M60 78 V108" marker-end="url(#ah-nzroles)"/><text class="t2" x="66" y="98">appoints</text>
<path class="s" d="M240 110 V80" marker-end="url(#ah-nzroles)"/><text class="t2" x="234" y="98" text-anchor="end">instructs</text>
<rect class="soft" x="40" y="112" width="220" height="62" rx="4"/>
<text class="tb" x="150" y="132" text-anchor="middle">Engineer</text>
<text class="tc" x="150" y="150" text-anchor="middle">hat 1: Principal's agent</text>
<text class="tc" x="150" y="166" text-anchor="middle">hat 2: fair, impartial certifier</text>
<text class="t2" x="150" y="196" text-anchor="middle">Engaged by the Principal, yet</text>
<text class="t2" x="150" y="210" text-anchor="middle">expected to value and certify fairly.</text>
<text class="t2" x="150" y="230" text-anchor="middle">Disputes often began with:</text>
<text class="t2" x="150" y="244" text-anchor="middle">which hat was the Engineer wearing?</text>
<rect class="bx" x="314" y="48" width="104" height="30" rx="4"/><text class="tb" x="366" y="68" text-anchor="middle">Principal</text>
<rect class="bx" x="492" y="48" width="104" height="30" rx="4"/><text class="tb" x="544" y="68" text-anchor="middle">Contractor</text>
<path class="s" d="M418 63 H492"/><text class="t2" x="455" y="58" text-anchor="middle">contract</text>
<path class="s" d="M366 78 V108" marker-end="url(#ah-nzroles)"/>
<path class="s" d="M410 78 L505 110" marker-end="url(#ah-nzroles)"/><text class="t2" x="372" y="103">appoints both</text>
<rect class="bx2" x="314" y="112" width="136" height="62" rx="4"/>
<text class="tb" x="382" y="130" text-anchor="middle">Contract</text>
<text class="tb" x="382" y="146" text-anchor="middle">Administrator</text>
<text class="tc" x="382" y="164" text-anchor="middle">acts for Principal</text>
<rect class="soft" x="462" y="112" width="134" height="62" rx="4"/>
<text class="tb" x="529" y="130" text-anchor="middle">Independent</text>
<text class="tb" x="529" y="146" text-anchor="middle">Certifier</text>
<text class="tc" x="529" y="164" text-anchor="middle">impartial</text>
<text class="t2" x="314" y="196">CA: gives Instructions; agrees</text>
<text class="t2" x="314" y="210">Variations, valuations and EOTs</text>
<text class="t2" x="314" y="230">IC: Decisions and certificates, with</text>
<text class="t2" x="314" y="244">reasons; payment schedules as agent</text>
<text class="t2" x="314" y="264">One person may hold both roles (6.1.2)</text>
<text class="t2" x="314" y="278">but must make clear which one.</text>
</svg>`);

PMQ.fig("nzs-timeline", `<svg viewBox="0 0 600 226" role="img" aria-label="From construction to final payment: Practical Completion, the defects notification period, the Final Completion Certificate, then the final account and the final payment claim">
<defs><marker id="ah-nztime" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<text class="t2" x="4" y="12">Time milestones, start to final payment</text>
<rect class="bx" x="4" y="24" width="136" height="44" rx="4"/><text class="tc" x="72" y="42" text-anchor="middle">Build to the Due</text><text class="tc" x="72" y="57" text-anchor="middle">Date for Completion</text>
<path class="s" d="M140 46 H154" marker-end="url(#ah-nztime)"/>
<rect class="soft" x="156" y="24" width="136" height="44" rx="4"/><text class="tb" x="224" y="42" text-anchor="middle">Practical</text><text class="tb" x="224" y="58" text-anchor="middle">Completion</text>
<path class="s" d="M292 46 H306" marker-end="url(#ah-nztime)"/>
<rect class="bx" x="308" y="24" width="136" height="44" rx="4"/><text class="tc" x="376" y="42" text-anchor="middle">Defects</text><text class="tc" x="376" y="57" text-anchor="middle">Notification Period</text>
<path class="s" d="M444 46 H458" marker-end="url(#ah-nztime)"/>
<rect class="bx" x="460" y="24" width="136" height="44" rx="4"/><text class="tc" x="528" y="42" text-anchor="middle">Final Completion</text><text class="tc" x="528" y="57" text-anchor="middle">Certificate</text>
<text class="t2" x="72" y="86" text-anchor="middle">early warnings;</text><text class="t2" x="72" y="100" text-anchor="middle">EOT claims in 20 WD</text>
<text class="t2" x="224" y="86" text-anchor="middle">LDs stop; defects</text><text class="t2" x="224" y="100" text-anchor="middle">period starts</text>
<text class="t2" x="376" y="86" text-anchor="middle">fix notified</text><text class="t2" x="376" y="100" text-anchor="middle">defects</text>
<path class="s" d="M528 68 V116" marker-end="url(#ah-nztime)"/>
<rect class="bx" x="460" y="120" width="136" height="44" rx="4"/><text class="tc" x="528" y="138" text-anchor="middle">Final Account</text><text class="tc" x="528" y="153" text-anchor="middle">within 20 WD</text>
<path class="s" d="M460 142 H446" marker-end="url(#ah-nztime)"/>
<rect class="bx" x="308" y="120" width="136" height="44" rx="4"/><text class="tc" x="376" y="138" text-anchor="middle">Agreed, or the</text><text class="tc" x="376" y="153" text-anchor="middle">IC decides</text>
<path class="s" d="M308 142 H294" marker-end="url(#ah-nztime)"/>
<rect class="bx2" x="156" y="120" width="136" height="44" rx="4"/><text class="tc" x="224" y="138" text-anchor="middle">Final payment</text><text class="tc" x="224" y="153" text-anchor="middle">claim (CCA)</text>
<text class="t2" x="4" y="136">2023 edition</text><text class="t2" x="4" y="150">(clause 9.11)</text>
<text class="t2" x="4" y="188">2023: Completion Records (5.20) come before Practical Completion, and an Interim</text>
<text class="t2" x="4" y="202">Final Account covers work to that date. The Final Account isn't a CCA payment claim.</text>
<text class="t2" x="4" y="218">2013: the Contractor's final payment claim follows the Final Completion Certificate.</text>
</svg>`);

PMQ.course({
  id: "nzs3910",
  title: "NZS 3910 Construction Contracts (2013 & 2023)",
  short: "NZS 3910",
  source: "NZS 3910:2013 and 2023, NZS 3916/3917:2025, Construction Contracts Act 2002, NZ law-firm guidance; paraphrased. Not legal advice: the signed contract governs",
  blurb: "New Zealand's most-used construction contract, in both editions you'll meet on site. Who does what (the Engineer, or the Contract Administrator and Independent Certifier), pricing, instructions and variations, time and extensions, getting paid under the Construction Contracts Act, retentions, risk and insurance, disputes, and how to tell which edition you're working under. Plenty of projects still run on the 2013 edition, so every topic shows what changed in 2023 and why it matters.",
  topics: [

  /* ---------------------------------------------------------------- 1 */
  {
    id: "nzs-basics",
    title: "What NZS 3910 is and when it's used",
    summary: "NZS 3910 is Standards New Zealand's standard conditions of contract for building and civil engineering construction. It's written for construct-only (traditional) procurement: the Principal, the client, provides the design through its consultants, and the Contractor builds to it. A typical contract bundles the Agreement, the General Conditions (the standard printed clauses), the Special Conditions (2013) or Specific Conditions (2023) that fill in project details and amend the standard clauses, then the specification, drawings and schedule of prices. The family has companions: NZS 3915 where no engineer is appointed and the Principal administers the contract itself, NZS 3916 for design and construct, and NZS 3917 for fixed-term work such as maintenance; 3916 and 3917 were updated in 2025 to match the 2023 approach. The 2023 edition, published on 28 November 2023, was the first update in ten years, yet many organisations still use their tested, heavily amended 2013 templates, so uptake of 2023 started slowly and is increasing. A standard form saves everyone time because the baseline is known, but it is only a baseline: the Special or Specific Conditions can change almost anything, so read them first.",
    terms: [
      ["NZS 3910", "Standards New Zealand's standard conditions of contract for building and civil engineering construction, used mainly where the Principal provides the design.", "A council road upgrade designed by its consultant, then tendered to contractors."],
      ["Principal", "The client under NZS 3910: the party that engages the Contractor and pays for the works.", "A council or developer commissioning a new pump station."],
      ["General Conditions", "The standard printed clauses of NZS 3910, which apply unless the contract changes them.", "The standard rules for claiming an extension of time, before any amendments."],
      ["Special Conditions / Specific Conditions", "The project-specific part of the contract that fills in details (dates, rates, retentions, insurance) and amends the General Conditions; called Special Conditions in 2013 and Specific Conditions in 2023.", "A clause setting liquidated damages at $2,500 per working day."],
      ["NZS 3915, 3916 and 3917", "Companion standards: 3915 where no engineer is appointed, 3916 for design and construct, 3917 for fixed-term work such as maintenance (3916 and 3917 were updated in 2025).", "A three-year road maintenance contract on NZS 3917."],
      ["Construct-only (traditional) procurement", "The client designs, through its consultants, and the contractor builds to that design; the model NZS 3910 is written for.", "A school block designed by architects, then tendered for construction."]
    ],
    cards: [
      { d: 1, q: "Which kind of project is NZS 3910 mainly written for?", o: [
        ["The Principal provides the design and the Contractor builds it", "Right. NZS 3910 suits construct-only (traditional) procurement: the Principal's consultants design, and the Contractor builds to that design."],
        ["The Contractor designs and builds the works for one price", "That's design and construct, which NZS 3916 is written for."],
        ["A three-year maintenance contract with no fixed scope", "Fixed-term work such as maintenance uses NZS 3917."],
        ["Engaging a consultant to design a building or bridge", "Consultants are engaged under consultancy agreements, not construction contract conditions."]],
        k: "3910: you design, they build. 3916: they design and build. 3917: fixed-term work." },
      { d: 1, q: "On a 2013-edition contract, where do you look first to see how the standard clauses have been changed?", o: [
        ["The Special Conditions", "Right. They fill in project details and amend the General Conditions, so they decide how the contract actually works."],
        ["The printed General Conditions", "They're the standard baseline; the changes to them sit in the Special Conditions."],
        ["The technical specification", "The specification sets technical requirements, not changes to the contract clauses."],
        ["The tender clarification letters", "Clarifications may form part of the contract, but amendments to the clauses live in the Special Conditions."]],
        k: "General Conditions = baseline. Special (2013) or Specific (2023) Conditions = the changes. Read the changes first." },
      { d: 2, q: "Your company is tendering a design and construct job. The client plans to use 'the usual 3910' with no changes. What should you raise?", o: [
        ["NZS 3916 is written for design and construct", "Right. NZS 3916 (updated in 2025 to match the 2023 approach) deals with the Contractor's design responsibility; NZS 3910 assumes the Principal designs."],
        ["Nothing; NZS 3910 handles design risk the same way", "NZS 3910 assumes the Principal provides the design, so the Contractor's design responsibility isn't properly covered."],
        ["Ask for NZS 3917 instead, because it's the newest form", "NZS 3917 is for fixed-term work such as maintenance, not design and construct."],
        ["Insist the client writes its own contract from scratch", "A bespoke contract is costly and untested; the standard form written for design and construct is the better ask."]],
        k: "Match the form to the procurement model: design and construct means NZS 3916." },
      { d: 2, q: "Why do many New Zealand organisations still use NZS 3910:2013 years after the 2023 edition came out?", o: [
        ["Their amended 2013 templates are familiar and tested", "Right. Organisations have years of tested Special Conditions and staff who know 2013. Switching means new templates and training, so uptake of 2023 started slowly but is increasing."],
        ["Only the 2013 edition is allowed for public-sector work", "There's no such rule; public bodies can and do use the 2023 edition."],
        ["The 2023 edition was withdrawn after complaints", "It's the current edition; uptake started slowly but is increasing."],
        ["2013 contracts aren't covered by the Construction Contracts Act", "The Act applies to construction contracts whichever edition they use."]],
        k: "Familiarity keeps 2013 alive, so expect to work on both editions." },
      { d: 1, q: "What did the 2023 edition rename 'Special Conditions' to?", o: [
        ["Specific Conditions", "Right. The 2023 edition refers consistently to the Specific Conditions for contract information and amendments."],
        ["Particular Conditions", "That's the term FIDIC's international contracts use."],
        ["Supplementary Conditions", "Not the NZS 3910 term; 2023 uses 'Specific Conditions'."],
        ["Project Conditions", "Not the NZS 3910 term; 2023 uses 'Specific Conditions'."]],
        k: "2013 Special → 2023 Specific." },
      { d: 2, q: "The Principal will run the contract itself, with no engineer appointed. Which standard is designed for that?", o: [
        ["NZS 3915", "Right. NZS 3915 covers building and civil construction where no person is appointed to act as engineer, so the Principal administers the contract."],
        ["NZS 3917", "NZS 3917 is for fixed-term work such as maintenance."],
        ["NZS 3916", "NZS 3916 is for design and construct."],
        ["NZS 3910:2023, which removed the engineer", "The 2023 edition replaced the Engineer with a Contract Administrator and an Independent Certifier; someone still administers it."]],
        k: "No engineer appointed? That's what NZS 3915 is for." },
      { d: 2, q: "What's the main benefit of a standard form like NZS 3910 over a bespoke contract?", o: [
        ["Everyone knows the baseline, so focus goes to the changes", "Right. A known baseline cuts tender and legal costs and reduces surprises, so everyone can concentrate on price and the project-specific amendments."],
        ["It removes the need to read the contract closely", "The Special or Specific Conditions can change almost anything; they must be read closely."],
        ["It guarantees a fair risk split, whatever the changes", "Amendments can shift a lot of risk; the standard text is only balanced until it's changed."],
        ["It means disputes can't end up in court or arbitration", "Disputes can still go to adjudication, arbitration or court."]],
        k: "Standard forms save effort only if you still read the amendments." }
    ],
    flips: [
      { d: 1, f: "Name the NZS 39xx family and when each is used.", b: "NZS 3910: construct-only (traditional), where the Principal provides the design. NZS 3915: as 3910, but with no engineer appointed, so the Principal administers. NZS 3916: design and construct (updated in 2025). NZS 3917: fixed-term work such as maintenance (updated in 2025). Always check which edition you have and what the Special or Specific Conditions change." },
      { d: 2, f: "You're handed an NZS 3910 contract on your first day. In what order do you read it?", b: "1) The Agreement: parties, price and which edition. 2) The Special or Specific Conditions: dates, liquidated damages, retentions, insurance and every amendment to the standard clauses. 3) The General Conditions sections they amend, especially roles, variations, time, payment and disputes. 4) The specification and drawings for your scope. Put every time limit in a diary: missed notices cost money." }
    ]
  },

  /* ---------------------------------------------------------------- 2 */
  {
    id: "nzs-roles",
    title: "Who's who: the Engineer, or the CA and IC",
    summary: "Under the 2013 edition, the Engineer (who can delegate to an Engineer's Representative) runs the contract wearing two hats. As the Principal's agent, the Engineer gives instructions, such as ordering Variations. As a certifier, the Engineer must act fairly and impartially when valuing Variations, deciding extensions of time, certifying payments and issuing completion certificates. Because the Engineer is engaged by the Principal, people often disagreed about which hat applied, and many disputes started there. The 2023 edition splits the job in two. The Contract Administrator (clause 6.2.1) acts for and on behalf of the Principal: giving Instructions and trying to agree Variations, valuations and extensions of time with the Contractor (2023 requires more of this agreement: clauses 9.2.4, 9.3.4 and 10.3.4). The Independent Certifier (clauses 6.2.2 and 6.2.3) acts fairly, impartially and independently: making Decisions with written reasons, including where the CA and Contractor can't agree, and issuing certificates; it issues payment schedules as the Principal's agent. The Principal appoints both. One person can hold both roles (clause 6.1.2), which can suit small projects, but must make clear which role they're acting in. The Engineer's Representative delegation has gone, and advisers who help the IC have no authority.",
    figs: ["nzs-roles"],
    terms: [
      ["Engineer (2013)", "The person who administers a 2013-edition contract, acting both as the Principal's agent and as a fair, impartial certifier.", "Instructs a change on Monday, then values it fairly on Friday."],
      ["Engineer's Representative", "In the 2013 edition, the person the Engineer can delegate duties to, often on site; the 2023 edition removed this delegation.", "The resident engineer who signs day-to-day site instructions."],
      ["Contract Administrator (CA)", "In the 2023 edition, the Principal's representative who gives Instructions and tries to agree Variations, valuations and extensions of time with the Contractor.", "Instructs an extra culvert and negotiates its price with the Contractor."],
      ["Independent Certifier (IC)", "In the 2023 edition, the impartial decision-maker who issues certificates and Decisions with written reasons, including where the CA and Contractor can't agree.", "Decides a disputed extension of time after negotiations stall."],
      ["Decision (2023)", "A determination by the Independent Certifier, with written reasons, on a matter the contract gives the IC; a party can ask the IC to review it.", "The IC's ruling on how many working days of extension the Contractor gets."]
    ],
    cards: [
      { d: 1, q: "Under NZS 3910:2013, who gives instructions and certifies payments?", o: [
        ["The Engineer", "Right. In 2013 the Engineer administers the contract: instructing as the Principal's agent and certifying fairly and impartially."],
        ["The Independent Certifier", "That role exists only in the 2023 edition."],
        ["The Principal's quantity surveyor", "A QS may help, but the contract gives these powers to the Engineer."],
        ["The Contractor's project manager", "The Contractor receives instructions; it doesn't give them."]],
        k: "2013: the Engineer does both. 2023: the job is split between the CA and the IC." },
      { d: 1, q: "In the 2023 edition, which role acts for the Principal in giving Instructions?", o: [
        ["The Contract Administrator", "Right. Clause 6.2.1: the CA acts for and on behalf of the Principal, giving Instructions and agreeing Variations, valuations and extensions of time."],
        ["The Independent Certifier", "The IC is the impartial decision-maker; it doesn't instruct for the Principal."],
        ["The Engineer's Representative", "The 2023 edition removed the Engineer's Representative."],
        ["The IC's technical adviser", "Advisers support the IC but have no authority to instruct."]],
        k: "CA = acts for the Principal. IC = decides impartially." },
      { d: 2, q: "The CA and the Contractor can't agree the value of a Variation. Under the 2023 edition, who decides?", o: [
        ["The Independent Certifier, with written reasons", "Right. The IC makes impartial Decisions with written reasons where the CA and Contractor don't agree."],
        ["The CA, as the Principal's representative", "The CA tries to agree; if agreement fails, it isn't the CA's call."],
        ["An adjudicator, appointed automatically by the contract", "Adjudication under the Construction Contracts Act is available, but nothing is automatic; the contract sends it to the IC."],
        ["The Principal's board, at its next scheduled meeting", "The Principal doesn't decide its own disputes; that's why the IC exists."]],
        k: "No agreement with the CA? The IC decides, with reasons." },
      { d: 2, q: "Why did the 2023 edition split the Engineer's role?", af: "nzs-roles", o: [
        ["One person juggling both hats caused conflict", "Right. The 2013 Engineer was the Principal's agent and also expected to act fairly between the parties. Confusion about which hat applied led to disputes."],
        ["To cut the Principal's administration costs", "Two roles can cost more, not less; the reason was clarity and impartiality."],
        ["There weren't enough chartered engineers", "Not the reason; the change was about impartiality and clarity."],
        ["To give the Contractor its own certifier", "The Principal appoints both roles; the IC is impartial, not the Contractor's."]],
        k: "Two hats in one person bred disputes; 2023 separates them." },
      { d: 2, q: "On a small 2023-edition job, one consultant is appointed as both CA and IC. Is that allowed?", o: [
        ["Yes, but they must make clear which role they're acting in", "Right. Clause 6.1.2 allows it, which can suit small projects, but each act must be clearly as CA or as IC."],
        ["No, the two roles must always be held by different people or firms", "Clause 6.1.2 allows one person to hold both."],
        ["Yes, and they can switch roles without saying so", "They must make clear which role they're acting in."],
        ["Only if the Contractor agrees to pay half their fee", "There's no such requirement."]],
        k: "One person can wear both 2023 hats, but must say which one is on." },
      { d: 3, q: "On a 2013 contract, the Engineer emails: 'Rate for the extra excavation is $45/m³, as the Principal won't go higher.' What's the problem?", o: [
        ["When valuing, the Engineer must act fairly, not on orders", "Right. The email shows the valuation was dictated by the Principal. Ask the Engineer to value it fairly under the contract, and keep the email."],
        ["None; the Engineer acts for the Principal in everything", "Only partly: when valuing, certifying and deciding, the 2013 Engineer must act fairly and impartially."],
        ["Only an adjudicator can set a rate for extra work", "The contract gives valuation to the Engineer first; adjudication is a separate option."],
        ["The Principal must value Variations itself under 2013", "The 2013 edition gives valuation to the Engineer, not the Principal."]],
        k: "Instructing = the Principal's agent. Valuing, certifying, deciding = fair and impartial." },
      { d: 2, q: "Who appoints the CA and the IC under the 2023 edition?", o: [
        ["The Principal appoints both", "Right. The Principal appoints both roles, which is why the IC's duty to act fairly, impartially and independently matters."],
        ["The Contractor appoints the IC; the Principal, the CA", "The Principal appoints both."],
        ["Standards New Zealand assigns them from a panel", "Standards New Zealand publishes the form; it doesn't appoint people."],
        ["Both parties vote at the first site meeting", "Not how it works; the Principal appoints both roles."]],
        k: "The Principal appoints both; the IC must still act impartially." },
      { d: 3, q: "Under 2023, an adviser helping the IC tells your site team to re-sequence the works. What should you do?", o: [
        ["Ask the CA for a written Instruction first", "Right. Advisers to the IC have no authority. If the change is wanted, the CA can instruct it, and you'll have a record for time and cost."],
        ["Comply; anyone on the IC's team can instruct the Contractor", "The IC doesn't instruct for the Principal, and its advisers have no authority at all."],
        ["Ignore it without telling anyone", "Better to clarify in writing: the CA may want the change, and silence invites disputes later."],
        ["Stop work until the Principal confirms the change", "Stopping causes delay; keep working to the current programme and ask the CA."]],
        k: "Only the CA instructs under 2023; advisers can't." }
    ],
    flips: [
      { d: 2, f: "Compare the 2013 Engineer with the 2023 CA and IC.", b: "2013: one Engineer (plus an Engineer's Representative) acts as the Principal's agent when instructing, and as a fair, impartial certifier when valuing, certifying and deciding. 2023: the Contract Administrator acts for the Principal (Instructions; agreeing Variations, valuations and extensions of time), and the Independent Certifier acts fairly, impartially and independently (certificates and Decisions with written reasons; payment schedules as the Principal's agent). One person may hold both roles but must say which." },
      { d: 2, f: "How do you protect yourself when you're unsure which hat a 2013 Engineer is wearing?", b: "Ask in writing which capacity the decision is made in. Record the facts and the clause relied on. If it's a valuation, certificate or decision, remind them it must be fair and impartial. Put the time limits for disputing it in your diary, so the decision doesn't become final by default." }
    ]
  },

  /* ---------------------------------------------------------------- 3 */
  {
    id: "nzs-price",
    title: "Pricing: who carries which cost risk",
    summary: "The pricing basis decides who carries quantity and cost risk. Under a lump sum, the Contractor agrees a fixed price for defined work and carries the risk that quantities were underestimated; only Variations and other contract adjustments change the price. Under measure and value, quantities in a schedule are remeasured as the work is done and paid at the tendered rates, so the Principal carries quantity risk. Under cost reimbursement, the Contractor is paid its actual costs plus an agreed fee or margin, so the Principal carries most of the cost risk and needs open-book controls. NZS 3910:2013 offers these three. The 2023 edition adds a Target Contract Price (clauses 2.4 and 2.5), where the parties agree a target and share savings or overruns as the Specific Conditions set out, and explicitly recognises a mixed price that uses different bases for different parts of the work. It also renames on-site overheads as Preliminary and General (P&G) and off-site overheads and profit as Margin, and groups Variations, cost fluctuations, provisional sums, provisional items and prime cost (PC) sums in one section. Provisional and PC sums are allowances replaced by actual values: nobody pockets an unused allowance. Match the basis to how well the scope is defined.",
    terms: [
      ["Lump sum", "A fixed price for defined work; the Contractor carries the risk that quantities were underestimated, except where Variations change the work.", "$4.2 million to build the specified bridge, whatever the actual tonnes of steel."],
      ["Measure and value", "Pricing where quantities in a schedule are remeasured as built and paid at the tendered rates, so the Principal carries quantity risk.", "Excavation paid at $38 per cubic metre, measured each month."],
      ["Cost reimbursement", "Pricing where the Contractor is paid its actual costs plus an agreed fee or margin, so the Principal carries most of the cost risk.", "Emergency slip repairs paid at cost plus 12%."],
      ["Target Contract Price", "A 2023-edition option where the parties agree a target price and share savings or overruns as the Specific Conditions set out.", "A $10 million target, with a $600,000 saving split 50/50."],
      ["Provisional sum", "An allowance for work that can't be defined at tender, replaced by the value of the work actually instructed (or omitted if it isn't needed).", "$80,000 for possible disposal of contaminated soil."],
      ["Prime cost (PC) sum", "An allowance for work or goods from a nominated subcontractor or supplier; the actual cost replaces it and the Contractor adds its margin.", "$150,000 for lifts from the client's chosen supplier."],
      ["Preliminary and General (P&G)", "Site establishment and time-related on-site overheads, such as site offices, supervision and traffic management; the 2023 edition calls off-site overheads and profit the Margin.", "A weekly rate for site cabins, supervision and traffic management."]
    ],
    cards: [
      { d: 1, q: "On a lump sum contract, your estimator under-measured the kerbing on the tender drawings. The design hasn't changed. Who carries the extra cost?", o: [
        ["The Contractor", "Right. Under a lump sum, quantity risk sits with the Contractor. Only Variations or other contract adjustments change the price."],
        ["The Principal, through remeasurement", "Lump sums aren't remeasured; that's measure and value."],
        ["The parties, 50/50 by default", "There's no default split."],
        ["The Engineer, for missing the error", "The Engineer doesn't carry the Contractor's pricing risk."]],
        k: "Lump sum: your quantities, your risk, unless a Variation changes the work." },
      { d: 1, q: "Which pricing basis puts quantity risk on the Principal?", o: [
        ["Measure and value", "Right. Actual quantities are measured and paid at the tendered rates, so if there's more work, the Principal pays for it."],
        ["Lump sum", "A lump sum puts quantity risk on the Contractor."],
        ["A fixed price for design and construct", "A fixed price leaves quantity risk with the Contractor."],
        ["Lump sum with fixed P&G", "Still a lump sum; quantity risk stays with the Contractor."]],
        k: "Measure and value: quantities are remeasured, so the Principal carries quantity risk." },
      { d: 2, q: "What is a Target Contract Price (2023 edition) designed to do?", o: [
        ["Share savings and overruns so both gain from lower cost", "Right. The parties agree a target and share savings or overruns in the proportions the Specific Conditions set out (clauses 2.4 and 2.5)."],
        ["Cap the price so overruns are all the Contractor's risk", "That's closer to a guaranteed maximum price; a target shares overruns and savings."],
        ["Set the most the Principal will pay for Variations", "Variations are still valued under the contract; the Specific Conditions say which ones adjust the target."],
        ["Replace the need to value Variations at all", "Variations still need valuing, and may adjust the target."]],
        k: "Target price = shared pain, shared gain, as the Specific Conditions set out." },
      { d: 2, q: "The tender includes a $60,000 provisional sum for rock removal. No rock is found. What happens to the sum?", o: [
        ["It's omitted; the Contractor isn't paid it", "Right. A provisional sum is an allowance for work that can't be defined at tender; it's replaced by the value of work actually instructed, which here is nothing."],
        ["The Contractor keeps it as a risk allowance", "Provisional sums are adjusted to what's actually needed; nothing is kept for unused allowances."],
        ["It's split between the Principal and Contractor", "There's no split; it's omitted."],
        ["It moves into the P&G to cover overheads", "It isn't reallocated; it's omitted."]],
        k: "Provisional sums are replaced by the actual value: zero if the work isn't needed." },
      { d: 2, q: "Which costs does the 2023 edition call 'Preliminary and General' (P&G)?", o: [
        ["On-site overheads: set-up, supervision and facilities", "Right. The 2023 edition renamed on-site overheads as Preliminary and General, and off-site overheads and profit as Margin."],
        ["Off-site overheads and profit", "The 2023 edition calls those the Margin."],
        ["Materials bought before the contract starts", "Those are material costs, not P&G."],
        ["Allowances for work that can't be defined yet", "Those are provisional sums."]],
        k: "2023: on-site overheads = P&G; off-site overheads and profit = Margin." },
      { d: 3, q: "An emergency slip repair is let on a cost reimbursement basis. What's the most important control for the Principal's manager?", o: [
        ["Open-book cost records and regular productivity checks", "Right. With cost risk on the Principal, open-book records, agreed rates and regular checks on productivity and waste are the main protection."],
        ["A detailed bill of quantities priced competitively at tender", "The scope is unknown, which is why it's on cost reimbursement; a bill of quantities can't be priced well."],
        ["A higher retention rate than usual", "Retentions secure completion and defects, not cost efficiency."],
        ["A clause banning Variations on the job", "Banning Variations doesn't control cost; the scope will change in an emergency anyway."]],
        k: "Cost reimbursement moves cost risk to the Principal, so watch costs and productivity closely." },
      { d: 2, q: "When does a mixed contract price (2023 edition) make sense?", o: [
        ["When some work is well defined and some isn't", "Right. For example, a lump sum for a building plus measure and value for uncertain earthworks. The 2023 edition recognises this mix explicitly."],
        ["When the parties can't agree on any one price for the job", "You still need agreed prices; a mixed price just uses different bases for different parts."],
        ["Only for long-term maintenance contracts", "It suits any job with parts that fit different pricing bases; maintenance often uses NZS 3917."],
        ["When the Principal wants to avoid paying P&G", "P&G is still paid; the pricing basis doesn't remove overheads."]],
        k: "Mixed price: lump sum where the scope is clear, remeasure where quantities are uncertain." }
    ],
    flips: [
      { d: 2, f: "Match the pricing basis to the scope.", b: "Well-defined scope and design: lump sum (price certainty; the Contractor carries quantity risk). Quantities uncertain but the work types known, such as earthworks or pipes: measure and value. Scope unknown or urgent, such as emergency repairs: cost reimbursement with open-book controls. Complex work where you want shared incentives: a Target Contract Price (2023). Mixed scope: a mixed price (2023 recognises it explicitly)." },
      { d: 2, f: "Provisional sum or PC sum: what's the difference?", b: "A provisional sum is an allowance for work that can't be defined yet (possible rock or contamination, say). The value of the work actually instructed replaces it, and it's omitted if the work isn't needed. A PC (prime cost) sum is an allowance for specific work or goods from a nominated subcontractor or supplier; the actual cost replaces it, and the Contractor adds its margin. Both are adjusted, never pocketed." }
    ]
  },

  /* ---------------------------------------------------------------- 4 */
  {
    id: "nzs-variations",
    title: "Instructions, variations and valuing them",
    summary: "A Variation is a change to the Contract Works instructed under the contract: adding, omitting or changing work, changing its quality, character, dimensions, levels or position, or changing a specified sequence, method or timing. Only the Engineer (2013) or the Contract Administrator (2023) can instruct one; the Principal's designers, advisers and visitors can't, however senior. Get Instructions in writing, and confirm any oral instruction in writing straight away. If something changes the work but isn't called a Variation, such as a demand on a site walk, notify promptly in writing that you treat it as one, and keep records: photos, dockets, labour and plant. Valuation starts from contract rates where the work is similar, adjusts them where conditions differ, and otherwise uses reasonable rates or cost plus margin; daywork (recorded labour, plant and materials at agreed rates) suits small or unpredictable work. The 2023 edition asks the CA and Contractor to try to agree Variations (clause 9.2.4) and their valuation (9.3.4) before the Independent Certifier decides. Price and time go together: if you agree a price without dealing with the time impact, you may struggle to claim time or time-related costs later.",
    terms: [
      ["Variation", "A change to the Contract Works instructed under the contract: adding, omitting or changing work, or changing a specified sequence, method or timing.", "Adding a pedestrian crossing to a road job."],
      ["Instruction", "A direction to the Contractor under the contract, from the Engineer (2013) or the Contract Administrator (2023); some Instructions are Variations.", "A written instruction to use a different pipe material."],
      ["Daywork", "Valuing work by recording the actual labour, plant and materials used, at agreed rates; usually for small or unpredictable work.", "Dockets for a crew and digger removing an unexpected old foundation."],
      ["Valuation", "Working out what a Variation is worth: contract rates where the work is similar, adjusted rates where conditions differ, otherwise reasonable rates or cost plus margin.", "Using the tendered trenching rate, adjusted for deeper digging."],
      ["Implied (constructive) variation", "An informal term for a requirement that changes the work without being instructed as a Variation; the Contractor should notify it in writing promptly.", "The client's project director demands a higher-grade finish during a site walk."]
    ],
    cards: [
      { d: 1, q: "Under the 2023 edition, who can instruct a Variation?", o: [
        ["The Contract Administrator", "Right. The CA gives Instructions for the Principal, including Variations."],
        ["The Independent Certifier", "The IC decides impartially; it doesn't instruct."],
        ["The Principal's architect on a site walk", "Designers can't vary the contract unless the contract appoints them as CA."],
        ["The Contractor's site manager", "The Contractor can propose changes but can't instruct them."]],
        k: "Variations come from the CA (2023) or the Engineer (2013), in writing." },
      { d: 1, q: "The Engineer tells your foreman on site to add a second manhole. What should you do first?", o: [
        ["Confirm the instruction in writing straight away", "Right. Written confirmation creates the record you'll need to value the Variation and claim any time."],
        ["Start the work; verbal instructions don't need any record", "Without a written record, valuing and claiming it later becomes a fight."],
        ["Refuse until a priced Variation order is signed off", "Refusing a valid instruction can delay the works; confirm it in writing and price it."],
        ["Add it to the final account at the end", "Waiting risks missing notice requirements and losing records."]],
        k: "Verbal instruction? Confirm it in writing today." },
      { d: 2, q: "The Principal's designer asks you to change the paving pattern 'as a small favour'. The CA isn't involved. What's the best response?", o: [
        ["Ask for a CA Instruction before acting", "Right. Only the CA can instruct. Asking for an Instruction protects payment and keeps the designer onside."],
        ["Do it; designers act for the Principal", "Designers aren't authorised to vary the contract unless the contract appoints them to."],
        ["Do it, then add the cost to next month's claim", "Without an Instruction, you may not get paid for it."],
        ["Refuse and complain about the designer to the Principal", "Unnecessary escalation; a polite request for an Instruction solves it."]],
        k: "No Instruction, no Variation. Ask politely, in writing." },
      { d: 2, q: "How is a Variation normally valued when the contract has a rate for similar work?", o: [
        ["From that rate, adjusted if conditions differ", "Right. Contract rates come first, adjusted where conditions differ; otherwise reasonable rates or cost plus margin, and daywork for small, unpredictable work."],
        ["On daywork, every time", "Daywork is for small or unpredictable work, not where good rates exist."],
        ["At whatever price the Contractor chooses to quote", "Valuation follows the contract's rules, starting from contract rates."],
        ["At the CA's own estimate, with no discussion needed", "Under 2023 the CA must try to agree it; under 2013 the Engineer values it fairly."]],
        k: "Value from contract rates first, adjust for different conditions, otherwise use reasonable rates." },
      { d: 2, q: "Under the 2023 edition, what must happen before the IC decides the value of a Variation?", o: [
        ["The CA and Contractor try to agree it", "Right. Clause 9.3.4 requires the CA and Contractor to try to agree valuations; the IC decides if they can't."],
        ["The Principal approves the IC's draft figure", "That would undermine the IC's impartiality."],
        ["The dispute goes to adjudication first", "Adjudication is optional and separate, not a step before the IC."],
        ["Nothing; the IC values every Variation from the start", "Under 2023 the CA and Contractor try to agree first (clause 9.3.4)."]],
        k: "2023: agree with the CA first (9.2.4, 9.3.4, 10.3.4); the IC decides if you can't." },
      { d: 3, q: "On a site walk, the Principal's project director demands a higher-grade concrete finish than the specification requires. No Instruction follows, and your crew starts doing it. What protects your position best?", o: [
        ["Notify in writing that it's a Variation and keep records", "Right. Prompt written notice lets the CA confirm, reject or instruct it, and your records support the valuation."],
        ["Do it quietly to protect the relationship", "You may never recover the cost, and the dispute just moves to the end of the job."],
        ["Ignore it, as only written instructions from the CA ever count", "Your crew has already changed the work; you need a record and a decision now."],
        ["Wait until the final account to raise it", "Late notice weakens the claim and the records."]],
        k: "Changed work without an Instruction: notify in writing early and keep records." },
      { d: 2, q: "When is daywork the sensible way to value a Variation?", o: [
        ["When the work is small or unpredictable", "Right. When work can't be priced in advance, recording actual labour, plant and materials at agreed rates is fairest."],
        ["When the Contractor wants a better margin", "Daywork rates are agreed; it isn't a margin tool."],
        ["For every omission", "Omissions are valued by removing the value of the omitted work."],
        ["Whenever the contract already has a rate", "If a suitable rate exists, use it."]],
        k: "Daywork suits small, unpredictable work: record labour, plant and materials daily." },
      { d: 3, q: "What's the risk of agreeing a Variation's price without considering its effect on time?", o: [
        ["You may struggle to claim time or time-related costs later", "Right. Agree time and cost together, or state in writing that time is reserved; an agreed price can be read as covering everything."],
        ["None; time is always assessed separately at the end", "An agreed price may be treated as covering all its effects unless you reserve time."],
        ["The CA can reopen the agreed price whenever it likes", "Agreed valuations bind both sides; that's the point of agreeing."],
        ["The Variation becomes void", "It stays valid; the risk is to your time claim."]],
        k: "Agree price and time together, or reserve time in writing." }
    ],
    flips: [
      { d: 2, f: "Walk through a clean Variation process from the Contractor's side.", b: "1) Get the Instruction in writing from the Engineer or CA, and confirm oral ones immediately. 2) Flag the time and cost impact early. 3) Record resources, photos and dockets as the work is done. 4) Price it from contract rates where similar, adjusted rates where conditions differ, or reasonable costs plus margin. 5) Agree it (2023: with the CA), or seek a decision from the Engineer or the IC. 6) Include it in the next payment claim." },
      { d: 2, f: "Who can, and can't, vary the contract by instruction?", b: "Can: the Engineer (2013) or the Contract Administrator (2023), by Instruction under the contract. Can't: the Principal's designers, advisers and site visitors, however senior, and the IC's advisers. If someone without authority asks for a change, ask for a written Instruction before acting, and notify in writing if the work has already changed." }
    ]
  },

  /* ---------------------------------------------------------------- 5 */
  {
    id: "nzs-time",
    title: "Time: early warning, extensions and completion",
    summary: "The Contractor must reach Practical Completion by the Due Date for Completion, as extended. An extension of time (EOT) is available for causes the contract lists that aren't the Contractor's fault, such as Variations, delays by the Principal or unusually bad weather, where they actually delay completion. Both editions expect the claim within 20 working days of the Contractor becoming aware (or as soon as practicable). Under the standard clauses, a late claim isn't automatically lost: the Engineer or IC is 'not bound' to grant it but may. Special or Specific Conditions often make notice a condition precedent, and then late usually means lost. Under 2023, the CA and Contractor try to agree EOTs (clause 10.3.4), and the IC decides if they can't. Early warning (2023 clause 6.10) requires each party, and the CA, to give written notice as soon as it becomes aware of a matter likely to materially change the price, delay completion or cause a breach of statute; it replaces 2013's advance notification, which fell on the Contractor. Miss the Due Date and the Principal can recover liquidated damages (LDs) at the stated rate until Practical Completion. New Zealand's Supreme Court (127 Hobson Street v Honey Bees Preschool, 2020) treats a clause as an unenforceable penalty only if it's out of all proportion to the innocent party's legitimate interest. Practical Completion means complete except minor omissions and defects that don't prevent use; 2023 also requires the Completion Records listed in the Specific Conditions (clause 5.20). The Defects Notification Period follows, then the Final Completion Certificate, and under 2023 a Final Account (clause 9.11).",
    figs: ["nzs-timeline"],
    terms: [
      ["Due Date for Completion", "The date by which the Contractor must reach Practical Completion, as adjusted by any extensions of time.", "15 March, extended to 2 April after two weather claims."],
      ["Extension of time (EOT)", "More time to complete, granted when a cause the contract lists, such as a Variation or a Principal delay, actually delays completion and isn't the Contractor's fault.", "Ten working days for a late design change on the critical path."],
      ["Early warning (2023)", "Clause 6.10: each party, and the CA, must give written notice as soon as it becomes aware of a matter likely to materially change the price, delay completion or breach a statute; it replaces 2013's advance notification.", "Flagging that the power company's cable relocation is slipping."],
      ["Liquidated damages (LDs)", "A pre-agreed amount per day the Principal can recover if the Contractor misses the Due Date for Completion, without proving its actual loss.", "$3,000 per working day for a late classroom block."],
      ["Practical Completion", "The stage when the works are complete except minor omissions and defects that don't prevent their intended use; LDs stop and the defects period starts.", "A road opens to traffic with line-marking touch-ups outstanding."],
      ["Defects Notification Period", "The period after Practical Completion, set in the Special or Specific Conditions, when the Contractor must fix defects notified to it; the Final Completion Certificate follows.", "Twelve months to fix a leaking joint found in winter."],
      ["Completion Records (2023)", "The records the Specific Conditions require before Practical Completion (clause 5.20), such as as-built records and other asset information.", "As-builts, operating manuals and warranties for a pump station."],
      ["Final Account (2023)", "Clause 9.11's process for settling the final contract value: an Interim Final Account to Practical Completion, then the Final Account within 20 working days after the Final Completion Certificate.", "Agreeing the last variations before the final payment claim."]
    ],
    cards: [
      { d: 1, q: "What normally stops liquidated damages running?", o: [
        ["Practical Completion", "Right. LDs compensate for late completion, so they stop when the works reach Practical Completion."],
        ["The Final Completion Certificate", "That comes after the defects period; LDs stop earlier, at Practical Completion."],
        ["Submitting the final payment claim", "Payment claims don't affect LDs."],
        ["The first defects inspection", "Defects inspections happen after Practical Completion."]],
        k: "LDs run from the Due Date for Completion until Practical Completion." },
      { d: 2, q: "A Variation on the critical path delays completion. Your EOT claim goes in 35 working days after you became aware. Under the standard clauses, what's the effect?", o: [
        ["The Engineer or IC isn't bound to grant it, but may", "Right. Late notice means the Engineer or IC 'isn't bound' to grant the extension, though they still can. Special or Specific Conditions may make the time limit strict."],
        ["It's automatically rejected as late", "Under the standard clauses it isn't automatic; the decision-maker keeps a discretion."],
        ["No effect; extension claims have no time limits", "The clauses expect notice within 20 working days, or as soon as practicable."],
        ["It must go to adjudication instead", "Adjudication is optional; the claim still goes to the Engineer or IC."]],
        k: "EOT notice: within 20 working days. Late isn't fatal under the standard terms, but it's risky." },
      { d: 3, q: "The Specific Conditions say EOT notice within 20 working days 'is a condition precedent to any entitlement'. You notify late. What now?", o: [
        ["You've likely lost the extension", "Right. That wording turns the soft time bar into a hard one. Courts generally enforce clear conditions precedent, so late notice can cost the extension and expose you to LDs."],
        ["The IC can still grant it at its discretion", "A condition precedent removes that discretion."],
        ["Late notice only trims the days you were late", "Conditions precedent don't work proportionally."],
        ["Conditions precedent don't apply to Variations", "They apply to whatever the clause covers, including delays from Variations."]],
        k: "Condition precedent = hard time bar. Diarise every notice deadline." },
      { d: 1, q: "Under the 2023 edition, who must give early warnings?", o: [
        ["Both parties, and the CA", "Right. Clause 6.10 requires each party, and the CA, to give written notice as soon as it becomes aware of a matter likely to materially change the price, delay completion or breach a statute."],
        ["Only the Contractor", "That's closer to 2013's advance notification; 2023 widened the duty."],
        ["Only the Principal", "The Contractor must warn too."],
        ["Only the Independent Certifier", "The duty sits with the parties and the CA, not the IC."]],
        k: "2023 early warning (6.10) runs both ways." },
      { d: 2, q: "Under New Zealand law, when is a liquidated damages clause unenforceable as a penalty?", o: [
        ["When out of all proportion to the legitimate interest", "Right. In 127 Hobson Street v Honey Bees Preschool (2020), the Supreme Court adopted the legitimate interest test. LD rates that reflect real delay costs are usually enforceable."],
        ["Whenever it exceeds the loss actually suffered", "LDs can exceed the actual loss and still be valid; the test is proportion to a legitimate interest."],
        ["If it isn't a genuine pre-estimate to the dollar", "The courts have moved past a strict pre-estimate test."],
        ["Never; agreed LDs always apply", "Courts can strike out penalties."]],
        k: "NZ penalty test (Honey Bees, 2020): out of all proportion to a legitimate interest?" },
      { d: 2, q: "Which best describes Practical Completion?", o: [
        ["Done except minor defects that don't stop its use", "Right. The works (or a separable portion) are complete except minor omissions and defects that don't prevent their intended use. LDs stop and the defects period starts."],
        ["Every defect fixed and the site fully cleared", "That's closer to final completion; Practical Completion allows minor defects."],
        ["The Principal has paid the final account", "Payment comes much later."],
        ["The council has issued a code compliance certificate", "That's a Building Act matter; it may be listed as a requirement, but it isn't the definition."]],
        k: "Practical Completion: usable, with only minor omissions and defects left." },
      { d: 2, q: "Under the 2023 edition, when is the Final Account due?", o: [
        ["20 working days after the Final Completion Certificate", "Right. Clause 9.11: the Final Account is due within 20 working days after the Final Completion Certificate, unless the IC extends the time."],
        ["With the payment claim for Practical Completion", "That's the Interim Final Account stage; the Final Account comes after the defects period."],
        ["Within 12 months of the original Due Date for Completion", "It's tied to the Final Completion Certificate, not the Due Date."],
        ["Whenever the Contractor chooses, as long as it's before final payment", "There's a set time: 20 working days after the Final Completion Certificate (the IC can extend it)."]],
        k: "2023 final account: Interim (to Practical Completion), then Final (20 working days after Final Completion)." },
      { d: 3, q: "Is a 2023-edition Final Account a payment claim under the Construction Contracts Act?", o: [
        ["No; the final payment claim follows it", "Right. Clause 9.11.8 says the Final Account isn't a payment claim, which keeps it out of the Act's strict timetable; the final payment claim comes after."],
        ["Yes, so a missed schedule makes it a debt", "Clause 9.11.8 says it's not a payment claim under the Act."],
        ["Only if it's for more than $100,000 in total", "There's no threshold; it simply isn't a payment claim."],
        ["Yes, but only on residential building projects", "No such rule; clause 9.11.8 says it isn't a payment claim."]],
        k: "Final Account (9.11.8) isn't a CCA payment claim: agree the account, then claim." },
      { d: 2, q: "A transformer the Principal is supplying will arrive three weeks late, and it's on your critical path. What's the right move under the 2023 edition?", o: [
        ["Give an early warning now, then claim an EOT in time", "Right. Clause 6.10 requires prompt written notice, and the EOT claim must follow within the time limit, backed by an updated programme."],
        ["Wait until the delay bites, to avoid alarming anyone", "Early warning exists so problems can be managed while there's still time."],
        ["Accelerate at your own cost to protect the date", "You may be entitled to time; accelerating unpaid gives that away."],
        ["Raise it only in the final account", "Too late; notices and records matter now."]],
        k: "Warn early, claim on time, keep records." }
    ],
    flips: [
      { d: 2, f: "List the steps from Practical Completion to final payment under the 2023 edition.", bf: "nzs-timeline", b: "1) Provide the Completion Records and get the Certificate of Practical Completion: LDs stop, the defects period starts, and retentions are partly released as the contract says. 2) Interim Final Account for work to Practical Completion. 3) Fix notified defects during the Defects Notification Period. 4) Final Completion Certificate. 5) Final Account within 20 working days, agreed or decided by the IC (not a CCA payment claim). 6) Final payment claim." },
      { d: 3, f: "Build a defensible EOT claim.", b: "Show that the cause is one the contract lists and isn't your fault; that it actually delays completion (the critical path, using an updated programme); the period claimed, backed by records such as diaries, photos, correspondence and weather data; and that you gave notice within 20 working days of becoming aware, or as soon as practicable. Check the Special or Specific Conditions for a condition precedent. Under 2023, try to agree it with the CA first; the IC decides if you can't." }
    ]
  }

  ]
});
