/* Course 7 · Grey areas: real management calls. Real cases where management decisions went badly wrong, researched from
   inquiries, court records and major news reports (sources on each card). Judgement-call cards ("calls") have no right
   answer: every option shows its risks, then what actually happened and the lesson. Part 1: Rana Plaza, Tazreen,
   Bhopal, Morbi, Beirut. */

PMQ.fig("bhopal-layers", `<svg viewBox="0 0 600 184" role="img" aria-label="Layers of protection that had failed at the Bhopal plant on the night of the leak">
<defs><marker id="ah-gbl" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path class="ah-acc" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<text class="t2" x="4" y="12">Layers of protection on the night (Bhopal, 1984)</text>
<rect class="bx" x="105" y="22" width="50" height="116" rx="4"/><rect class="bx" x="200" y="22" width="50" height="116" rx="4"/><rect class="bx" x="295" y="22" width="50" height="116" rx="4"/><rect class="bx" x="390" y="22" width="50" height="116" rx="4"/><rect class="bx" x="485" y="22" width="50" height="116" rx="4"/>
<ellipse class="soft" cx="130" cy="80" rx="13" ry="17"/><ellipse class="soft" cx="225" cy="80" rx="13" ry="17"/><ellipse class="soft" cx="320" cy="80" rx="13" ry="17"/><ellipse class="soft" cx="415" cy="80" rx="13" ry="17"/><ellipse class="soft" cx="510" cy="80" rx="13" ry="17"/>
<text class="tb" x="4" y="76">Toxic gas</text><text class="tb" x="4" y="92">tank</text>
<path class="acc-s" d="M80 80 H584" marker-end="url(#ah-gbl)"/>
<text class="tb" x="596" y="108" text-anchor="end">City</text>
<text class="t2" x="130" y="158" text-anchor="middle">refrigeration</text><text class="t2" x="225" y="158" text-anchor="middle">scrubber</text><text class="t2" x="320" y="158" text-anchor="middle">flare tower</text><text class="t2" x="415" y="158" text-anchor="middle">water curtain</text><text class="t2" x="510" y="158" text-anchor="middle">training</text>
<text class="ta" x="130" y="174" text-anchor="middle">switched off</text><text class="ta" x="225" y="174" text-anchor="middle">in repair</text><text class="ta" x="320" y="174" text-anchor="middle">disconnected</text><text class="ta" x="415" y="174" text-anchor="middle">too short</text><text class="ta" x="510" y="174" text-anchor="middle">cut to 15 days</text>
</svg>`);

PMQ.course({
  id: "grey",
  title: "Grey Areas: Real Management Calls",
  short: "Grey areas",
  source: "Real cases, from official inquiries, court records and major news reports (sources on each card)",
  blurb: "Stand where the decision-maker stood: what they knew, the pressure they were under, and the options. There's no answer key. Each choice shows its risks, then what actually happened and the lesson. Most cases come from low- and middle-income countries, alongside New Zealand's Pike River, Challenger and a 2026 earthquake in Japan. These are real events in which people died; they're told to learn from, and some court cases are still open.",
  topics: [

  /* ---------------------------------------------------------------- 1 */
  {
    id: "rana-plaza",
    title: "Rana Plaza: cracks the day before",
    summary: "On 23 April 2013, large cracks appeared in Rana Plaza, an eight-storey building in Savar, near Dhaka, with garment factories above a bank and shops. Footage of the cracks was broadcast, the building was evacuated, and industrial police asked for it to stay closed pending an inspection. An engineer called in declared it unsafe, and the bank and shops on the lower floors kept their staff away the next day. But the building's owner told the media it was safe and that workers should return, and a local official backed him. Garment factory managers told workers to come back; at one factory, workers were reportedly threatened with losing a month's pay. On the morning of 24 April a power cut started diesel generators on the upper floors, and at about 8:57 am the building collapsed. 1,134 people died and around 2,500 were rescued injured. Investigators found the building stood on a filled-in pond, had been designed for shops and offices rather than factories, and had upper floors added without permits; heavy machinery and generators overloaded it. The owner was arrested, and years later the murder and building-code trials still hadn't concluded. Within weeks, about 40 brands and retailers signed a legally binding Accord on Fire and Building Safety with global unions, providing independent inspections and repairs; it had around 220 brand signatories by 2015. A US$30 million compensation fund, coordinated with ILO support, reached its target in June 2015.",
    terms: [
      ["Precautionary principle", "When there's a credible threat of serious harm, act to prevent it before the danger is fully proven.", "Keeping a cracked building closed until an engineer clears it."]
    ],
    calls: [
      { d: 2, ctx: "Savar, Bangladesh · evening of 23 April 2013 · you run a garment factory on an upper floor",
        q: "Cracks appeared in the building's pillars today. The bank downstairs has told its staff to stay home, and an engineer called the building unsafe. But the owner says it's safe, and a local official agrees. You have a large order due to ship next week, a penalty for late delivery, and workers who are paid only for the days they work. What do you do about tomorrow?",
        o: [
          ["Stay closed until an independent structural engineer clears the building, and pay workers for the lost days", "Lost production and possible late-delivery penalties; paying idle wages; an angry building owner; you may have to find space elsewhere. But nobody is inside if the engineer is right."],
          ["Reopen, as the owner and the official say it's safe, and keep watching the cracks", "If the structure is failing, watching won't save anyone; collapses can happen in minutes. You're relying on assurances from people with a stake in reopening."],
          ["Reopen, but let each worker decide whether to come in", "Sounds fair, but workers paid by the day and afraid for their jobs don't have a free choice. It shifts the risk to the people with the least power."],
          ["Ask the buyer for a short extension and move urgent work to another factory while experts assess", "Costs money and goodwill, may be refused, and other factories bring their own unknowns. But it buys time without putting people inside."]],
        h: "Factory managers told workers to return, and at one factory workers were reportedly told they'd lose a month's pay if they refused. The bank and shops on the lower floors kept their staff out. A power cut started the diesel generators on the upper floors, and at about 8:57 am the building collapsed. 1,134 people died and around 2,500 were rescued injured.",
        k: "When a qualified engineer says a structure is unsafe, the burden of proof sits with whoever wants people back inside. A delivery date is never worth that gamble.",
        src: [["Clean Clothes Campaign", "https://cleanclothes.org/campaigns/past/ua/2013/cases/ranaplaza"], ["Wikipedia (sourced summary)", "https://en.wikipedia.org/wiki/Rana_Plaza_collapse"]] },
      { d: 3, ctx: "Europe · May 2013 · you're the sourcing director of a clothing brand",
        q: "Your brand had orders in one of Rana Plaza's factories. Unions and campaigners are pushing brands to sign a legally binding safety accord: independent inspections, published reports, and a duty to help pay for repairs, enforceable through arbitration. A rival, non-binding scheme is also being set up. Your board worries about cost and legal exposure. What do you recommend?",
        o: [
          ["Sign the binding accord and commit to helping fund repairs at your suppliers", "Real cost and legal liability; you may need to keep buying from factories while they're repaired; rivals who don't sign may undercut you on price."],
          ["Join the voluntary scheme: the same goals with less legal risk", "Lower exposure, but weaker enforcement and less trust from workers and unions. If another disaster happens, 'voluntary' looks like a choice not to commit."],
          ["Quietly move orders out of Bangladesh to lower-risk countries", "Protects the brand in the short term, but abandons workers who depend on the jobs and moves the risk to places with less oversight."],
          ["Rely on your existing social audits", "Audits had been passing factories like these. You'd be relying on the system that had just failed."]],
        h: "Within weeks, about 40 brands and retailers signed the Accord with two global unions and eight Bangladeshi unions. It had around 220 brand signatories by July 2015 and, by 2018, had contributed to safer workplaces for over two million workers. Several North American retailers, including Walmart, set up a separate, non-binding alliance instead. A US$30 million compensation fund reached its target in June 2015.",
        k: "After a failure, binding commitments rebuild trust that voluntary promises can't. Ask who carries the risk if your commitment turns out to be hollow.",
        src: [["International Accord", "https://internationalaccord.org/bangladesh-safety-agreement-origins/"], ["UN News (2015)", "https://news.un.org/en/story/2015/06/501132"]] }
    ],
    flips: [
      { d: 2, f: "What warning signs did Rana Plaza give before it collapsed, and who heeded them?", b: "Visible cracks in the pillars; footage on TV; industrial police asking for it to stay closed; an engineer's 'unsafe' verdict; upper floors added without permits to a building designed for shops, on a filled-in pond; heavy generators and machinery. The bank and shops kept their staff out. The garment factories ordered workers back." }
    ]
  },

  /* ---------------------------------------------------------------- 2 */
  {
    id: "tazreen",
    title: "Tazreen: “it's only a drill”",
    summary: "On 24 November 2012, fire broke out in ground-floor storage at Tazreen Fashions, a nine-storey garment factory in Ashulia, on the edge of Dhaka. All three staircases led down through the ground floor, so the fire cut them off. The factory's fire certificate had expired in June, and inspectors said it had permission for only three floors. When the alarm sounded, survivors said managers told them it was a drill, or that the alarm was faulty, and to go back to work. Police arrested three mid-level managers accused of stopping workers from leaving, and workers reported finding gates locked. At least 112 people died. Clothes and order books found at the site linked the factory to several international brands. Walmart said a supplier had subcontracted work to Tazreen without authorisation, in violation of its policies, and that it had ended the relationship. The owners were charged with homicide; the case was still unresolved years later.",
    terms: [
      ["Unauthorised subcontracting", "A supplier passing work to another factory without the buyer's knowledge or approval, so its conditions go unchecked.", "Orders moved to an unaudited nine-storey factory permitted for three floors."]
    ],
    calls: [
      { d: 2, ctx: "Ashulia, Dhaka · evening of 24 November 2012 · you supervise a sewing floor",
        q: "The fire alarm goes off. Alarms have sounded before with nothing wrong, and a big order is behind schedule. Your manager tells you to keep everyone working while someone checks. You can't see or smell smoke yet. What do you do?",
        o: [
          ["Evacuate your floor now, and let the manager deal with any lost production", "If it's a false alarm, you've cost time and defied your manager, which could cost you your job. If it's real, minutes matter."],
          ["Keep everyone working while someone checks, as instructed", "If the fire is real, the stairs may be full of smoke by the time it's confirmed. False alarms train people to ignore the real one."],
          ["Send one worker to check, and get everyone ready to move", "Better than nothing, but checking takes minutes you may not have, especially if every staircase passes the floor where the fire is."],
          ["Let each worker decide whether to leave", "Leaves the decision to people with the least information and the least power, and splits the group in a crisis."]],
        h: "Survivors said managers told workers the alarm was a drill or faulty, and to return to their machines. Three managers were arrested, accused of stopping workers from leaving, and workers reported finding gates locked. The fire had started in ground-floor storage, and every staircase led through the ground floor. At least 112 people died.",
        k: "Treat every alarm as real until it's proven false. Production pressure is exactly when people talk themselves out of evacuating.",
        src: [["Al Jazeera (2012)", "https://www.aljazeera.com/news/2012/11/29/arrests-made-after-bangladesh-factory-blaze"], ["NPR (2014)", "https://www.npr.org/sections/thetwo-way/2014/02/09/274095885/bangladesh-factory-owners-surrender-in-2012-fire-that-killed-112"]] },
      { d: 3, ctx: "Head office · 2012 · you're the compliance manager for a large retailer",
        q: "You discover that one of your approved suppliers has been quietly subcontracting some of your orders to a factory you've never audited. The supplier says it's the only way to meet your delivery dates and prices. What do you do?",
        o: [
          ["Stop the unauthorised work, audit the factory, and revisit the dates and prices that pushed the supplier there", "Costs time and money, may delay stock, and admits that your own buying terms are part of the problem."],
          ["Terminate the supplier immediately", "Sends a strong message, but the work may just move further out of sight, and workers at both factories lose income."],
          ["Allow it, as long as the supplier takes responsibility for the subcontractor", "Responsibility on paper isn't safety in practice; you'd still know nothing about conditions where your goods are made."],
          ["Note it, and audit the factory in the next annual cycle", "Months of exposure while you wait, with the factory's real conditions unknown."]],
        h: "After the Tazreen fire, Walmart said a supplier had subcontracted work to the factory without authorisation and in violation of its policy, and that it had ended the relationship. Order books and clothing found at the site linked the factory to several other international brands. The fire fed directly into the debate about whether brands are responsible for their whole supply chain, not just the suppliers they contract with.",
        k: "Unauthorised subcontracting is often a symptom of buying pressure. Fix the pressure as well as the breach, or the risk simply moves somewhere you can't see.",
        src: [["Al Jazeera (2012)", "https://www.aljazeera.com/news/2012/11/29/arrests-made-after-bangladesh-factory-blaze"], ["Wikipedia (sourced summary)", "https://en.wikipedia.org/wiki/2012_Dhaka_garment_factory_fire"]] }
    ],
    flips: [
      { d: 2, f: "Name three things that turned the Tazreen fire into a mass-casualty event.", b: "Every staircase led through the ground floor where the fire started, and there were no external fire escapes; managers told workers the alarm was a drill or faulty and to keep working; and workers found gates locked. The building also had six more floors than it was permitted, and its fire certificate had expired." }
    ]
  },

  /* ---------------------------------------------------------------- 3 */
  {
    id: "bhopal",
    title: "Bhopal: safety cuts at a loss-making plant",
    summary: "On the night of 2–3 December 1984, tonnes of methyl isocyanate (MIC), a highly toxic gas, escaped from a pesticide plant run by Union Carbide India Limited in Bhopal, after water entered a storage tank and set off a runaway reaction. Several safety systems that might have contained the release weren't working: the tank's refrigeration had been switched off months earlier, the vent gas scrubber was under maintenance and too small for a release that size, the flare tower was disconnected, and the water curtain couldn't reach the top of the vent stack. An economy drive had cut on-site safety training from six months to 15 days and reduced safety and maintenance staff. Official counts of the immediate dead range from about 2,259 to 3,787; campaigners put the eventual toll above 20,000, and more than half a million people were exposed. In 1989, Union Carbide paid US$470 million in a settlement with the Indian government. In 2010, seven former managers of the Indian company were convicted of criminal negligence and sentenced to two years. Contamination at the site remained a problem for decades.",
    figs: ["bhopal-layers"],
    terms: [
      ["Defence in depth", "Several independent layers of protection, so one failure doesn't become a disaster.", "Refrigeration, a scrubber, a flare and a water curtain on a toxic-gas tank.", 0, "bhopal-layers"]
    ],
    calls: [
      { d: 3, ctx: "Bhopal, India · 1984 · you manage a pesticide plant that's losing money",
        q: "Head office wants costs down. Your team proposes savings: switch off the refrigeration on the toxic-gas storage tank (rarely needed, they say), defer maintenance on the gas scrubber, and shorten safety training from six months to two weeks. Each saves real money, and the plant has run without a major incident. What do you approve?",
        o: [
          ["None of the safety cuts; find savings elsewhere, or make the case for a safe shutdown", "You may miss your targets, lose head office's confidence, or hasten the plant's closure and the job losses that come with it."],
          ["All of them; they're backups, and the plant has run safely", "Backups exist for the day the main control fails. Removing several at once leaves nothing between the hazard and the city."],
          ["Only the training cut; keep all the equipment running", "Less visible, but poorly trained operators misread warnings and mishandle abnormal events, which is when the equipment matters."],
          ["All of them, temporarily, until profits recover", "'Temporary' safety cuts tend to become permanent, and the hazard doesn't pause while you wait."]],
        h: "By the night of the leak, the tank's refrigeration had been off for months, the scrubber was under maintenance and too small for the release, the flare tower was disconnected, the water curtain couldn't reach the stack, and safety training had been cut from six months to 15 days. When water entered a tank of MIC, the gas escaped over the sleeping city. Official counts of the immediate dead range from about 2,259 to 3,787; campaigners put the eventual toll above 20,000, with more than half a million people exposed.",
        k: "Safety systems work as layers. Each cut looks small, but together they remove the margin; cost pressure should never decide which layers stay on.",
        af: "bhopal-layers",
        src: [["Engineers Ireland", "https://www.engineersireland.ie/Engineers-Journal/Chemical/bhopal-gas-tragedy-the-scar-of-process-safety"], ["Environment & Society Portal", "https://www.environmentandsociety.org/tools/keywords/bhopal-chemical-disaster"], ["VOA (2010 verdict)", "https://voanews.com/a/indian-state-to-challenge-bhopal-verdict-95947534/165806.html"]] }
    ],
    flips: [
      { d: 2, f: "Name the layers of protection that had failed at Bhopal by the night of the leak.", bf: "bhopal-layers", b: "Refrigeration of the gas tank (switched off months earlier), the vent gas scrubber (under maintenance, and too small anyway), the flare tower (disconnected), the water curtain (too short to reach the stack), and people: safety training cut from six months to 15 days, and fewer safety and maintenance staff." }
    ]
  },

  /* ---------------------------------------------------------------- 4 */
  {
    id: "morbi",
    title: "Morbi: a bridge reopened for the festival",
    summary: "The Jhulto Pul, a 19th-century pedestrian suspension bridge over the Machchhu river in Morbi, Gujarat, was handed to a private company under a 15-year maintenance and management contract signed in March 2022. After about six months of renovation, it reopened on 26 October 2022 for the Gujarati New Year, without a fitness certificate; the municipality's chief officer said the firm opened it without telling the municipality, so no safety audit was done. On 30 October, with hundreds of people on it, the bridge collapsed at about 6:40 pm. 135 people died. A special investigation team found that 22 of the 49 wires in one main cable had already corroded and may have broken before the collapse; that old suspenders had been welded to new ones; that the wooden deck had been replaced with heavier aluminium; that no load test or structural assessment was done before reopening; and that the work was done without competent technical experts. A government lawyer told a court that 3,165 tickets were sold that day; guards and ticket staff had no crowd-management training, and there were no lifeguards or boats. The company's managing director and nine others were arrested, and the case was still before the courts years later.",
    terms: [
      ["Stop-work authority", "The power, given to anyone on a job, to halt work they believe is unsafe, without fear of reprisal.", "A ticket clerk closing the entrance to an overcrowded bridge."]
    ],
    calls: [
      { d: 2, ctx: "Morbi, India · October 2022 · you manage the bridge contract for the operator",
        q: "Renovation of the old suspension bridge has finished just before the New Year festival, when big crowds are expected. The municipality's fitness inspection hasn't happened yet, but the new deck looks great. Your managing director wants it open for the festival. What do you do?",
        o: [
          ["Keep it closed until the fitness certificate and a load test are done", "You miss the festival, disappoint the public and your boss, and lose ticket income."],
          ["Open it, with staff counting people on to stay under a set number", "A limit only protects people if it's based on a tested structure, and if untrained staff can enforce it against festival crowds."],
          ["Open it; the renovation was thorough and the inspection is just paperwork", "Paperwork is how an independent check happens. A new deck says nothing about whether the old cables and anchors can carry the load."],
          ["Open only the approaches for viewing, and keep the span closed", "Some visitors will be disappointed and crowds may push to get on, but nobody is on an untested span."]],
        h: "The bridge reopened on 26 October 2022 without a fitness certificate and without a load test. On 30 October, with hundreds of people on it, a main cable failed; investigators found 22 of its 49 wires already corroded, old suspenders welded to new ones, and an aluminium deck heavier than the old wooden one. 135 people died.",
        k: "A festival or launch date isn't a safety case. Independent sign-off exists precisely for the moment when everyone is excited to open.",
        src: [["Al Jazeera (SIT findings)", "https://www.aljazeera.com/news/2023/2/20/broken-wires-faulty-renovation-caused-india-bridge-mishap-probe"], ["Wikipedia (sourced summary)", "https://en.wikipedia.org/wiki/2022_Morbi_bridge_collapse"]] },
      { d: 3, ctx: "Morbi, India · 30 October 2022, afternoon · you supervise the ticket counter",
        q: "It's a festival Sunday and the queue is huge. The bridge is crowded and swaying as people move. You have no headcount system and no instructions on limits. Your manager says ticket sales are the day's priority. What do you do?",
        o: [
          ["Stop selling and hold people at the entrance until it clears", "Angry crowds, possible confrontation, lost revenue and your manager's displeasure, and you have no clear authority to do it."],
          ["Keep selling as instructed; crowd control isn't your job", "If the structure has a limit, nobody is enforcing it."],
          ["Call your manager for a decision, and keep selling while you wait", "Escalating is right, but every minute of selling adds more load while you wait."],
          ["Quietly slow ticket sales without telling anyone", "Reduces the load a little, but with no known limit you can't tell whether it's enough."]],
        h: "Guards and ticket staff had no crowd-management training and no guidance on how many people the bridge could hold, and there were no lifeguards or boats. A government lawyer told a court that 3,165 tickets were sold that day. When the cable failed at about 6:40 pm, hundreds of people fell into the river; 135 died.",
        k: "Frontline staff need a clear limit and the authority to stop. Without stop-work authority, the sales target becomes the only rule.",
        src: [["Free Press Journal", "https://www.freepressjournal.in/amp/india/morbi-bridge-collapse-oreva-sold-3165-tickets-to-visitors-on-the-day-of-mishap"], ["Al Jazeera (SIT findings)", "https://www.aljazeera.com/news/2023/2/20/broken-wires-faulty-renovation-caused-india-bridge-mishap-probe"]] }
    ],
    flips: [
      { d: 2, f: "What did the investigation into the Morbi bridge collapse find?", b: "22 of the 49 wires in one main cable had already corroded; old suspenders were welded to new ones; the wooden deck was replaced with heavier aluminium; there was no load test or structural assessment before reopening; the work was done without competent technical experts; and staff had no crowd-management training. It reopened without a fitness certificate." }
    ]
  },

  /* ---------------------------------------------------------------- 5 */
  {
    id: "beirut",
    title: "Beirut: six years of warnings",
    summary: "In November 2013, the cargo ship Rhosus put into Beirut carrying about 2,750 tonnes of ammonium nitrate, a fertiliser that can explode. The ship was detained, and in October 2014 the cargo was moved into Hangar 12 at the port, where it stayed for nearly six years, poorly secured, stored with other flammable materials, a few hundred metres from homes. Customs officials warned repeatedly that it could ignite, and sent at least six letters to judges asking for it to be re-exported or sold; the letters came back on procedural grounds. Warnings went to the army, to state security and, in July 2020, to the president and the prime minister. From 1 to 4 August 2020, maintenance work was done on the hangar under a prosecutor's order, reportedly without the port authority's supervision or knowledge of what was inside. On 4 August a fire in the hangar set off the ammonium nitrate. 218 people died, about 7,000 were injured, some 300,000 were left homeless, and damage was estimated at US$3.8–4.6 billion. Human Rights Watch found evidence that many officials knew of the risk and failed to act. Six years later, the domestic investigation had been repeatedly stalled and no one had been indicted.",
    terms: [
      ["Diffusion of responsibility", "When many people know about a problem, each assumes someone else will act, so nobody does.", "Warnings about stored ammonium nitrate passing between agencies for six years."],
      ["Permit to work", "A formal system that controls high-risk jobs, such as hot work, by checking hazards, isolations and precautions before work starts.", "A hot-work permit that requires a fire watch and a check of nearby materials."]
    ],
    calls: [
      { d: 3, ctx: "Beirut port · 2016 · you're a senior customs official",
        q: "Thousands of tonnes of seized ammonium nitrate have sat in a port warehouse for two years. You've written to the courts asking for permission to re-export or sell it, and your letters keep coming back on procedural grounds. Legally, it isn't your cargo, and several other agencies know it's there. What do you do next?",
        o: [
          ["Escalate in writing to the highest level that can act, spelling out what an explosion would do", "Treads on other agencies' toes, may still be ignored, and makes you the visible owner of an awkward problem."],
          ["Keep writing to the courts through the proper channel", "Procedurally correct, but the danger sits unchanged while letters go back and forth."],
          ["Accept it: the courts and other agencies are responsible now", "When everyone knows and nobody owns it, nothing happens. This is how hazards wait for years."],
          ["Work with port and safety agencies to separate and secure it while the legal question is settled", "May go beyond your formal authority and costs money nobody has budgeted, but it reduces the danger now."]],
        h: "Customs officials did warn repeatedly and sent at least six letters to judges, and the warnings reached the army, state security and, in July 2020, the president and the prime minister. Yet the ammonium nitrate stayed in Hangar 12, stored with other flammable goods. On 4 August 2020 it exploded, killing 218 people, injuring about 7,000 and leaving some 300,000 homeless.",
        k: "A warning isn't a fix. When a hazard has many informed owners and no accountable one, push for a single owner and an interim safeguard.",
        src: [["Human Rights Watch (2021)", "https://www.hrw.org/news/2021/08/03/lebanon-evidence-implicates-officials-beirut-blast"], ["OCCRP (2026)", "https://www.occrp.org/en/news/six-years-on-victims-of-beirut-port-explosion-still-waiting-for-justice"]] },
      { d: 2, ctx: "Beirut port · summer 2020 · you supervise a maintenance crew",
        q: "You're sent to repair the doors and a hole in the wall of Hangar 12 so it can be secured. Nobody has given you a list of what's stored inside, there's no permit-to-work system, and the job will involve cutting and fixing metal. What do you do before starting?",
        o: [
          ["Refuse to start until you know what's inside and hot-work precautions are in place", "Delays an urgent security job, and you may be overruled or replaced by someone less careful."],
          ["Start; you've been ordered to secure the hangar quickly", "Hot work near unknown materials can start a fire, and you won't know what you're dealing with until it's too late."],
          ["Start, with a fire extinguisher close by", "An extinguisher won't stop a fire in some materials, and it assumes you'll catch the fire early."],
          ["Ask the port authority to supervise and confirm what's stored before you begin", "Slower, and you may not get answers, but someone accountable knows what you're doing and where."]],
        h: "Maintenance work on Hangar 12 ran from 1 to 4 August 2020 under a prosecutor's order, reportedly without the port authority's supervision or knowledge of the materials inside. Human Rights Watch said the work may have triggered the fire. On 4 August, the fire set off the ammonium nitrate.",
        k: "Before hot work, know what's around you. A permit-to-work system isn't paperwork: it's how the person with the tools learns what the office already knows.",
        src: [["Human Rights Watch (2021)", "https://www.hrw.org/news/2021/08/03/lebanon-evidence-implicates-officials-beirut-blast"]] }
    ],
    flips: [
      { d: 2, f: "Why did a known hazard sit in Beirut's port for nearly six years?", b: "Responsibility was spread across customs, the courts, the port, the army and state security. Each knew about the ammonium nitrate and passed warnings or letters on, and the courts returned customs' requests on procedural grounds, but no single owner was accountable for making it safe. Warnings reached the president and the prime minister just weeks before it exploded." }
    ]
  }

  ]
});
