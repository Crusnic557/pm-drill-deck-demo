/* Course 7 · Grey areas: real management calls. Part 2: Brumadinho, Sitakunda, Pike River, Challenger, Kumamoto,
   and the patterns across all the cases. Calls have no right answer; MCQs (patterns) do, with the first option correct. */

PMQ.course({
  id: "grey",
  topics: [

  /* ---------------------------------------------------------------- 6 */
  {
    id: "brumadinho",
    title: "Brumadinho: a certified dam above the canteen",
    summary: "On 25 January 2019, at 12:28 pm, Dam I at Vale's Córrego do Feijão iron ore mine near Brumadinho, in Minas Gerais, Brazil, failed. The tailings dam, built in 1976, released a mudflow that engulfed the mine's administrative buildings and canteen, which sat directly below it, burying many employees at lunch, then swept on through houses, farms and roads down the valley. 270 people died (272 counting two unborn babies), most of them Vale employees or contractors. In September 2018, a Brazilian subsidiary of the German certifier TÜV SÜD had issued a stability certificate for the dam. Investigators allege that several other firms had refused to certify it, that the certifier lowered its measurement standards to reach the required safety factor, and that internal emails showed staff feared Vale would drop them if they refused too; a report commissioned by Vale itself later found the dam had been certified with a safety factor below satisfactory levels. Vale had also reportedly known of problems with the sensors that monitored the dam. In 2020, prosecutors charged Vale, TÜV SÜD and 16 people with homicide and environmental crimes; hearings began in February 2026 and were scheduled to run into 2027. In 2021, Vale agreed a reparations deal with the state of Minas Gerais initially estimated at US$7 billion.",
    terms: [
      ["Independence (assurance)", "Freedom of an auditor or certifier from pressures, such as fees or relationships, that could bias their judgement.", "A certifier worried about losing its biggest client."]
    ],
    calls: [
      { d: 3, ctx: "Minas Gerais, Brazil · 2018 · you're the engineer signing a dam's stability declaration",
        q: "Your analysis puts an old tailings dam just below the safety factor the standard requires. The client is one of your firm's most important, and colleagues say other firms have declined to certify it. Your manager suggests a less conservative analysis method that would just clear the threshold, with recommendations for improvements attached. What do you do?",
        o: [
          ["Refuse to sign unless the dam is reinforced or the risk reduced, and report your concerns", "Your firm may lose an important client and you may lose your job; the client may find someone else to sign."],
          ["Sign using the other method, with the recommendations attached", "Recommendations don't make an unstable dam stable, and your signature tells everyone downstream that it's safe."],
          ["Sign, but warn the client privately that it's marginal", "A private warning doesn't reach the people at risk, and the public record still says 'stable'."],
          ["Decline the job and say nothing more", "Protects you, but someone else may certify it, and the people below the dam still don't know."]],
        h: "In September 2018 the certifier's Brazilian subsidiary issued a stability certificate. Investigators allege that other firms had refused to certify it, that the certifier lowered its standards to reach the required safety factor, and that internal emails showed staff feared losing the client. On 25 January 2019 the dam failed, and the mudflow buried the mine's offices and canteen directly below it at lunchtime. 270 people died. Vale, the certifier and 16 individuals were later charged with homicide; hearings began in February 2026.",
        k: "A certificate is only as independent as the person signing it. When the client pays the certifier, the certifier's integrity is the last line of defence.",
        src: [["ECCHR factsheet (2026)", "https://www.ecchr.eu/fileadmin/user_upload/2026-05-19_Factsheet_Brumadinho.pdf"], ["The Chemical Engineer", "https://www.thechemicalengineer.com/news/brazil-dam-collapse-victims-take-t%C3%BCv-s%C3%BCd-to-court/"]] },
      { d: 2, ctx: "Córrego do Feijão mine · 2018 · you're planning a site upgrade",
        q: "The mine's offices and canteen sit in the valley directly below an old tailings dam, which is certified stable. Moving them would cost millions and disrupt operations, while leaving them is convenient for staff. Do you move them?",
        o: [
          ["Move them out of the dam's flow path", "High cost and disruption, for a risk that's officially certified as safe."],
          ["Leave them; the dam is certified stable", "If the certificate is wrong, the people most likely to be hit are your own staff, with little chance to escape."],
          ["Leave them, but install sirens and run evacuation drills", "Better, but a dam-break flow can reach nearby buildings very quickly; warnings only help if there's time to act on them."],
          ["Get an independent second opinion on the dam before deciding", "Costs time and money, and may simply confirm the first opinion, but it tests the assumption everything rests on."]],
        h: "The administrative buildings and canteen stood directly below the dam. When it failed at 12:28 pm, the mudflow engulfed them while many employees were at lunch. Most of the 270 people who died were Vale employees or contractors.",
        k: "Ask what happens if your key assumption is wrong. Don't put people in the path of the failure you're counting on not happening.",
        src: [["ECCHR factsheet (2026)", "https://www.ecchr.eu/fileadmin/user_upload/2026-05-19_Factsheet_Brumadinho.pdf"], ["Wikipedia (sourced summary)", "https://en.wikipedia.org/wiki/Brumadinho_dam_disaster"]] }
    ],
    flips: [
      { d: 2, f: "What do investigators allege went wrong with the Brumadinho dam's certification?", b: "That several other firms had refused to certify it; that the certifier lowered its measurement standards to reach the required safety factor; and that internal emails showed staff feared Vale would drop them if they refused too. A report commissioned by Vale later found the dam had been certified with a safety factor below satisfactory levels. The certificate gave false comfort to the people working below the dam." }
    ]
  },

  /* ---------------------------------------------------------------- 7 */
  {
    id: "sitakunda",
    title: "Sitakunda: what the firefighters weren't told",
    summary: "On the night of 4 June 2022, fire broke out at the BM Container Depot in Sitakunda, near Chattogram, Bangladesh's main port. The depot held containers of everything from garments to chemicals, including hydrogen peroxide made at a local chemical plant for export. Fire officials said they hadn't been told chemicals were stored there. Later that night, with firefighters working at the scene, the chemical containers exploded. About 50 people died, including at least nine firefighters, and more than 200 were injured. Inquiries blamed irregularities by the chemical company and mismanagement at the depot: dangerous goods weren't kept separately as the rules require, the hydrogen peroxide jars didn't meet international standards, and the depot lacked adequate safety measures, fire hydrants and trained staff. One inquiry also found negligence by the agencies meant to monitor the depot, alongside the owners.",
    terms: [
      ["Dangerous goods segregation", "Keeping hazardous materials apart from incompatible goods and ignition sources, as rules require, so one incident can't escalate.", "Chemical containers in a separate, protected area of a depot."]
    ],
    calls: [
      { d: 2, ctx: "Chattogram, Bangladesh · 4 June 2022 · you're the depot's duty manager",
        q: "Fire has broken out among the containers and firefighters are arriving. Some containers hold hydrogen peroxide, which the fire service doesn't know about, and word getting out would alarm the neighbours and bring scrutiny. The owner isn't answering the phone. What do you tell people?",
        o: [
          ["Tell the crew everything now, and warn neighbours to move back", "Panic, legal exposure and blame may follow, and you've acted without the owner's say-so."],
          ["Tell the crew everything, but keep it from the public to avoid panic", "Neighbours stay close to a possible blast, and the information will leak anyway."],
          ["Wait for the owner's approval before disclosing anything", "Delays the one piece of information that changes how firefighters tackle the blaze."],
          ["Say it's a clothing depot, which is mostly true", "Sends firefighters in unprepared, close to chemicals that can explode in a fire."]],
        h: "Fire officials said they hadn't been told chemicals were stored at the depot. The hydrogen peroxide containers exploded while firefighters were working at the scene. About 50 people died, including at least nine firefighters, and more than 200 were injured.",
        k: "Accurate hazard information is a first responder's most important tool. Sharing it immediately is never the wrong call, whatever it costs the company.",
        src: [["TBS News (5 June 2022)", "https://www.tbsnews.net/node/433422"], ["Al Jazeera (2022)", "https://www.aljazeera.com/news/2022/6/9/bangladesh-begins-investigation-into-deadly-container-depot-fire"]] },
      { d: 3, ctx: "Chattogram · early 2022 · you run operations at a container depot",
        q: "A client wants you to hold export containers of hydrogen peroxide for a few weeks. Your yard has no separate dangerous-goods area, but the contract pays well, and the chemical isn't flammable on its own. What do you do?",
        o: [
          ["Decline until you have a compliant, separate area and trained staff", "You lose the contract and the revenue, and the client may take it to a competitor who's less careful."],
          ["Accept, and put the containers at the edge of the yard", "Distance helps, but without proper separation, fire protection and trained staff, a nearby fire can still reach them."],
          ["Accept, and rely on the fire service if anything happens", "The fire service can only plan for hazards it knows about."],
          ["Accept only after notifying the fire service and the regulator and agreeing an emergency plan", "Paperwork, cost and scrutiny, and notifying people doesn't fix the lack of separation."]],
        h: "Inquiries found that dangerous goods hadn't been kept separately as the rules require, that the hydrogen peroxide jars didn't meet international standards, and that the depot lacked adequate safety measures, fire hydrants and trained staff. They blamed irregularities by the chemical company and mismanagement at the depot, and one found the monitoring agencies negligent too. A representative of the depot's owners acknowledged a lack of planning over where the chemical containers were kept.",
        k: "Hazardous goods change what a site is. When the profitable answer and the safe answer differ, only one of them can be defended afterwards.",
        src: [["TBS News (probe findings)", "https://www.tbsnews.net/bangladesh/sitakunda-fire-probes-find-depot-owners-liable-455690"], ["Al Jazeera (2022)", "https://www.aljazeera.com/news/2022/6/9/bangladesh-begins-investigation-into-deadly-container-depot-fire"]] }
    ],
    flips: [
      { d: 2, f: "What did the Sitakunda inquiries find about how the depot handled the chemicals?", b: "Dangerous goods weren't kept separately as the rules require; the hydrogen peroxide jars didn't meet international standards; the depot lacked adequate safety measures, fire hydrants and trained staff; fire officials said they hadn't been told chemicals were there; and one inquiry found the agencies meant to monitor the depot negligent too." }
    ]
  },

  /* ---------------------------------------------------------------- 8 */
  {
    id: "pike-river",
    title: "Pike River: warnings that became normal",
    summary: "On 19 November 2010, a methane explosion in the Pike River coal mine, on New Zealand's West Coast, killed 29 men; two escaped. The Royal Commission found the company was exposing its workers to unacceptable risks as it strove to meet financial targets. In the seven weeks before the explosion, workers had warned 21 times that methane had built up to explosive levels, plus 27 warnings of dangerous levels; some had rigged their machines to bypass methane sensors that kept shutting them down; and the Commission called the decision to put the main ventilation fan underground a major error, as it failed after the first explosion and shut down the ventilation. Regulators failed to provide adequate oversight: there were just two mine inspectors, who couldn't keep up with their workload. In 2013 the company, by then bankrupt, was convicted on nine health and safety charges, fined $760,000 and ordered to pay $3.41 million in reparations, which it never paid. Charges against the chief executive were dropped after an insurer-funded payment of $3.41 million to the families; in 2017, the Supreme Court ruled this was an unlawful agreement to stifle prosecution. The disaster led to a new regulator, WorkSafe New Zealand, and the Health and Safety at Work Act 2015. In February 2026, police said their criminal investigation was in its final stages; no charges had been laid.",
    terms: [
      ["Normalisation of deviance", "When repeated departures from safe practice come to be accepted as normal because nothing bad has happened yet.", "Methane alarms at Pike River treated as routine."]
    ],
    calls: [
      { d: 3, ctx: "West Coast, New Zealand · October 2010 · you're a mine's production manager",
        q: "The mine is far behind its production targets and the company needs cash. Methane readings above explosive limits keep appearing in reports, several times a week; each time, ventilation is adjusted and work resumes. The board wants a recovery plan. What do you do?",
        o: [
          ["Slow production until gas drainage and ventilation can reliably handle the methane, and tell the board the targets will slip", "Deepens the financial crisis, could cost jobs or the company itself, and puts you at odds with the board."],
          ["Keep pushing production; every event so far has been managed", "Each managed event is a near miss. A pattern of near misses is a warning, not proof of control."],
          ["Investigate the pattern while carrying on at the current rate", "Better than nothing, but the exposure continues every shift while you investigate."],
          ["Crack down on workers who bypass gas sensors, and carry on", "Treats one symptom; people bypass sensors because production pressure rewards it."]],
        h: "In the seven weeks before the explosion, workers reported methane at explosive levels 21 times, plus 27 warnings of dangerous levels, and some had bypassed methane sensors on their machines. The Royal Commission found the company exposed workers to unacceptable risks as it strove to meet its financial targets. On 19 November 2010, an explosion killed 29 men.",
        k: "Warnings that get managed every time can make danger feel normal. A trend of near misses is the system telling you to stop.",
        src: [["Royal Commission findings (AP)", "https://www.manufacturing.net/news/2012/11/methane-warnings-ignored-nz-mine-disaster"], ["Al Jazeera (2012)", "https://www.aljazeera.com/news/2012/11/5/safety-issues-blamed-for-nz-mine-disaster"]] },
      { d: 3, ctx: "Wellington · 2013 · you advise the regulator's prosecution team",
        q: "The company has been convicted, but it's insolvent, so the families won't receive their reparations. The chief executive's lawyers offer that his insurer will pay the families $3.41 million if all charges against him are dropped. The families need the money, and the case against him may be hard to win. What do you advise?",
        o: [
          ["Refuse; decide the prosecution on its merits alone", "The families may get nothing, the case may fail, and you'll be accused of putting principle before people."],
          ["Accept; the families get certainty and money now", "Trading a prosecution for a payment can look like buying immunity, and it may be unlawful."],
          ["Drop the charges for other reasons, and accept the payment separately", "If the payment influenced the decision, separating them on paper doesn't make it lawful."],
          ["Get legal advice on whether the offer is lawful before deciding", "Slower and uncertain, but it tests the arrangement before you're committed to it."]],
        h: "In December 2013 the regulator offered no evidence and the charges were dismissed, after the insurer-funded payment was offered. In 2017 the Supreme Court ruled that this was an unlawful agreement to stifle prosecution. The company itself had been fined $760,000 and ordered to pay $3.41 million in reparations, which it never paid. In February 2026, police said their criminal investigation was in its final stages; no charges had been laid.",
        k: "Accountability can't be bought. When money and justice are offered as a trade, test the deal's legality first; a bad deal does lasting harm to trust.",
        src: [["Supreme Court of New Zealand (2017)", "https://www.courtsofnz.govt.nz/assets/cases/2017/MR-2017-NZSC-175.pdf"], ["NZ Police (2026)", "https://www.police.govt.nz/index%2Ephp/news/release/investigation-update-pike-river"]] }
    ],
    flips: [
      { d: 2, f: "What changed in New Zealand because of Pike River?", b: "The Royal Commission recommended a dedicated workplace safety regulator, and WorkSafe New Zealand was set up. The Health and Safety at Work Act 2015 replaced the old law, putting a primary duty of care on businesses (PCBUs) and due-diligence duties on officers such as directors." }
    ]
  },

  /* ---------------------------------------------------------------- 9 */
  {
    id: "challenger",
    title: "Challenger: the engineering hat and the management hat",
    summary: "The night before Challenger's launch, engineers at Morton Thiokol, which built the shuttle's solid rocket boosters, warned that the forecast cold could stop the rubber O-rings sealing the booster joints from working. O-ring damage had been seen on earlier flights, and they recommended not launching below 53°F, the coldest flight temperature they had experience of. NASA managers at the Marshall Space Flight Center challenged their reasoning. Thiokol's managers held an off-line caucus in which a senior manager asked the head of engineering to change roles and think as a manager; the company then reversed its position and recommended launch, over its engineers' objections. Those concerns didn't reach NASA's top launch officials. On 28 January 1986, at 36°F, Challenger lifted off; an O-ring seal in the right booster failed, and the shuttle broke apart 73 seconds into the flight, killing all seven crew. The Rogers Commission found a serious flaw in the decision-making process, and concluded that a well-run system emphasising safety would have flagged the rising doubts.",
    terms: [
      ["Burden of proof (safety)", "In safety-critical decisions, those who want to proceed should show it's safe, rather than objectors having to prove it's unsafe.", "Engineers being asked to prove the O-rings would fail in the cold."]
    ],
    calls: [
      { d: 3, ctx: "Teleconference · 27 January 1986 · you're Thiokol's head of engineering",
        q: "Your engineers recommend against launching tomorrow below 53°F, and the forecast is far colder. Their data is thin, but the concern is real. Your customer, NASA, is pushing back hard, and your senior manager asks you to take off your engineering hat and decide as a manager. What do you recommend?",
        o: [
          ["Hold the engineering recommendation: no launch below 53°F", "Delays a high-profile launch, angers NASA and may cost your company future business."],
          ["Recommend launch, since the data doesn't prove it's unsafe", "Flips the burden of proof: engineers now have to prove it's unsafe, instead of managers showing it's safe."],
          ["Recommend launch, but record the engineers' dissent", "Covers you on paper, but a recorded dissent doesn't stop the launch, and it may never reach the decision-makers."],
          ["Insist the disagreement goes to NASA's top launch officials before anyone decides", "Slow and uncomfortable, and it may still end in a launch, but the people accountable decide with the full picture."]],
        h: "After an off-line caucus, Thiokol's managers reversed the engineers' recommendation and approved the launch, and the engineers' objections didn't reach NASA's top launch officials. Challenger launched on 28 January 1986 at 36°F. An O-ring seal in the right booster failed, and the shuttle broke apart 73 seconds after lift-off, killing all seven crew. The Rogers Commission found a serious flaw in the decision-making process.",
        k: "When engineers can't prove something is safe, the answer isn't 'then it must be safe'. Keep the burden of proof on the risk-taker, and make sure dissent reaches the decision-maker.",
        src: [["Rogers Commission, ch. 5 (NASA)", "https://www.nasa.gov/history/rogersrep/v1ch5.htm"], ["History.com", "https://www.history.com/articles/how-the-challenger-disaster-changed-nasa"]] }
    ],
    flips: [
      { d: 2, f: "What did the Rogers Commission say went wrong in the Challenger launch decision?", b: "A serious flaw in the decision-making process: engineers' concerns about the O-rings in the cold were overruled after a management caucus, and their objections never reached NASA's top launch officials. It found that waiving launch constraints appeared to have been at the expense of flight safety, and that a well-structured system emphasising safety would have flagged the rising doubts." }
    ]
  },

  /* ---------------------------------------------------------------- 10 */
  {
    id: "kumamoto",
    title: "Kumamoto: back inside for the takings",
    summary: "At about 4:30 pm on Tuesday 28 July 2026, a magnitude 7.1 earthquake struck Kumamoto Prefecture in south-western Japan. At Aeon Mall Kumamoto, about 3,000 customers and well over a thousand staff got out, nearly all within about 30 minutes. Two employees of a local variety-store chain evacuated to the car park and helped guide customers to safety. Their company's sales manager then told the store manager to have them go back in and move the day's takings from the second-floor store to a safe on the first floor, after getting the mall operator's permission. At 5:21 pm the mall office told workers to go home. At about 5:35 pm the two women went back inside; a mall employee they knew, near the entrance, reportedly told them to be careful. At about 5:50 pm an explosion killed seven shop workers who had gone back in, including both of them; one was 22. The chain admitted giving the instruction and apologised to the families; its sales manager said the order was inappropriate and that he deeply regretted it, adding that life is more important than money. A former prosecutor said such orders could amount to negligent homicide, because an employer's instruction can be coercive even when it's phrased as a suggestion. The mall operator at first denied authorising anyone's return, but later said it had allowed some workers a temporary re-entry to collect car keys and phones and secure their tills, because many had driven to work and couldn't get home. An official said its rules didn't cover this, so people on the scene were left to make their own judgements. A committee of outside experts was to investigate.",
    terms: [
      ["Re-entry control", "Rules and gatekeepers that keep people out of an evacuated building until it's declared safe, with a plan for the predictable reasons people want back in.", "Staff posted at mall entrances after an earthquake, with a way to get stranded workers home."]
    ],
    calls: [
      { d: 1, ctx: "Kumamoto, Japan · 28 July 2026 · you're a retail chain's sales manager",
        q: "A strong earthquake has just hit. Your staff at a mall store have evacuated safely, but the day's takings are still upstairs in the store. The mall seems to be standing, and a quick trip would secure the cash. What do you tell your staff?",
        o: [
          ["Stay out; the cash can wait until the building is declared safe", "The takings may be lost to theft or damage, and head office may ask awkward questions."],
          ["Go back in quickly if the mall says it's OK", "Puts the decision on staff who can't easily refuse their employer, and on a mall that may not yet know the building's state."],
          ["Go back in, move the cash to the safe, and come straight out", "After a major quake, buildings can hide damage, gas leaks and fires, and aftershocks can follow. Money can be replaced; people can't."],
          ["Ask mall security to secure the store once it's safe", "The store may stay unsecured for a while, but nobody goes back into a damaged building for cash."]],
        h: "The company's sales manager told the store manager to have the two employees go back in and move the day's takings to a safe, after getting the mall's permission. They went back in at about 5:35 pm; at about 5:50 pm an explosion killed seven shop workers who had gone back in, including both of them. The company admitted giving the order and apologised; the sales manager said it was inappropriate and that life is more important than money. A former prosecutor said orders like this could amount to negligent homicide, because an employer's instruction can be coercive even when it's phrased as a suggestion.",
        k: "After an emergency, no property is worth re-entering a building before it's declared safe. Staff can't freely refuse an order, so the person giving it carries the risk.",
        src: [["Nippon.com (Jiji Press)", "https://www.nippon.com/en/news/yjj2026080300801/kumamoto-store-workers-sent-back-into-quake-hit-building.html"], ["Malay Mail", "https://www.malaymail.com/news/world/2026/08/04/two-women-killed-in-aeon-mall-explosion-had-been-ordered-to-re-enter-mall-after-earthquake-to-secure-money/230183"], ["The Standard (Hong Kong)", "https://www.thestandard.com.hk/world/article/338964/2-HABITA-staff-died-after-returning-on-company-order-in-Japan-quake-negligent-homicide-probe-warned"]] },
      { d: 2, ctx: "Kumamoto · 28 July 2026 · you're on the mall's staff after the quake",
        q: "The mall has been evacuated, and nobody has checked the building yet. Shop workers keep asking to go back in for their car keys and phones, and to lock up their tills; many drove to work and can't get home without their keys. Your rules don't say how to handle this. What do you do?",
        o: [
          ["Keep everyone out until the building is checked, and help stranded staff get home another way", "Angry staff, stranded people to look after, and shops left unlocked; you may be overruled."],
          ["Allow short, temporary re-entry for essentials", "Hidden damage, gas leaks and aftershocks don't care how short the trip is, and nobody will know exactly who's inside."],
          ["Let people in one at a time, and log their names", "You'll know who's inside if something happens, but you're still sending people into an unchecked building."],
          ["Refer it to the mall's emergency coordinator, and keep the doors shut until they decide", "Slower and frustrating, and a coordinator under pressure may still approve exceptions, but nobody goes in meanwhile."]],
        h: "The mall's operator later said it had allowed some shop workers a temporary re-entry, to collect personal items such as car keys and phones and to secure cash registers, because many had commuted by car and couldn't get home. It said it didn't know who had been let back in, and an official said its rules didn't cover the situation, so people on the scene were left to make their own judgements. At about 5:50 pm an explosion killed seven shop workers who had gone back in. Days earlier, the operator's president had denied authorising anyone's return.",
        k: "Rules that skip the hard case leave the person at the door to decide alone. Plan before an emergency for its predictable pressures (keys, cash, stranded staff), and give frontline staff a clear 'no' they can stand behind.",
        src: [["The Star (Jiji Press)", "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/08/11/japan-retailer-aeon-allowed-workers-to-return-to-kumamoto-mall-shops-before-fatal-explosion"], ["Nippon.com (Jiji Press)", "https://www.nippon.com/en/news/yjj2026081100278/"], ["The Standard (Hong Kong)", "https://www.thestandard.com.hk/world/article/338964/2-HABITA-staff-died-after-returning-on-company-order-in-Japan-quake-negligent-homicide-probe-warned"]] }
    ],
    flips: [
      { d: 1, f: "After an evacuation, who should decide when people can go back in, and why not their own manager?", b: "Whoever controls the building's safety (its emergency coordinator, advised by engineers or the fire service), once it's been checked. An employee's own manager has a conflict of interest (cash, stock, deadlines), and staff can't freely refuse their employer. Plan ahead for the predictable requests, such as car keys, tills and stranded staff, so nobody has to improvise at the door." }
    ]
  },

  /* ---------------------------------------------------------------- 11 */
  {
    id: "grey-patterns",
    title: "Patterns behind the cases",
    summary: "Different countries, industries and decades, but the same patterns repeat. Production or schedule pressure: a delivery date, a festival, a launch window or a cash crunch makes the risky option look reasonable (Rana Plaza, Morbi, Pike River, Challenger). Normalisation of deviance: warnings that are managed each time stop feeling like warnings (Pike River's methane reports, Challenger's earlier O-ring damage). A reversed burden of proof: objectors are asked to prove danger instead of decision-makers showing safety (Challenger, Rana Plaza). Diffused responsibility: many people know, nobody owns it (Beirut). Hazard information that doesn't travel: the people at risk, or the people responding, aren't told (Sitakunda, Tazreen's 'drill', Beirut's hangar work). Rules that don't cover the predictable hard case, so the person on the spot improvises (Kumamoto). Compromised independence: a certifier paid by the party it checks (Brumadinho). Layers of protection switched off, left in repair or cut back, several of them to save money (Bhopal). And the people with the least power carry the most risk, while 'choice' under pay or job threat isn't really choice (Rana Plaza, Tazreen, Kumamoto). As a project manager, you can counter these: make safety a non-negotiable constraint rather than a variable, give everyone stop-work authority and back them when they use it, treat near misses as leading indicators, keep the burden of proof on whoever wants to proceed, make sure dissent reaches the accountable decision-maker, insist on independent sign-off, share hazard information immediately, and never let a deadline decide a safety question.",
    terms: [
      ["Production pressure", "Pressure to meet output, schedule or cost targets that pushes people to accept risks they otherwise wouldn't.", "Reopening a cracked building to ship an order on time."],
      ["Authority gradient", "The difference in power between people in a decision. When it's steep, juniors hesitate to challenge, and seniors discount their warnings.", "Engineers' objections to a launch overruled by managers."],
      ["Near miss", "An event that could have caused harm but didn't. Investigated, it's a free lesson; ignored, it becomes the new normal.", "A methane reading above the explosive limit that clears without ignition."]
    ],
    cards: [
      { d: 1, q: "Repeated methane alarms at Pike River came to be treated as routine. Which pattern is that?", o: [
        ["Normalisation of deviance", "Correct. Departures from safe limits became the new normal because nothing had happened yet."],
        ["Diffusion of responsibility", "That's many people knowing and nobody acting, as at Beirut."],
        ["Confirmation bias", "Related, but this is about warnings becoming normal over time."],
        ["Scope creep", "A project control issue, not a safety pattern."]],
        k: "Managed warnings can stop feeling like warnings." },
      { d: 2, q: "At Challenger, engineers were effectively asked to prove the O-rings would fail. What went wrong in that decision?", o: [
        ["The burden of proof was reversed", "Correct. Those proceeding should show it's safe; objectors shouldn't have to prove it's unsafe."],
        ["The engineers lacked any relevant test data", "Their data was thin, but the concern was real, and thin data is a reason for caution."],
        ["The launch was escalated to too many people", "The opposite: the objections never reached NASA's top launch officials."],
        ["The temperature forecast was unreliable", "The cold was forecast well in advance; the flaw was in the decision process."]],
        k: "Proceeding needs proof of safety, not proof of danger." },
      { d: 2, q: "Beirut's ammonium nitrate sat in a port warehouse for nearly six years, although many officials knew about it. Which pattern best explains that?", o: [
        ["Diffusion of responsibility", "Correct. Many informed agencies, and no single accountable owner."],
        ["Normalisation of deviance", "Partly, but the main problem was that nobody owned the fix."],
        ["A reversed burden of proof", "Not the core issue here."],
        ["Compromised independence", "That's Brumadinho's certification problem."]],
        k: "Many owners can mean no owner." },
      { d: 2, q: "Which case most clearly shows an independent check compromised by the commercial relationship?", o: [
        ["Brumadinho's dam certification", "Correct. Investigators allege staff feared losing an important client."],
        ["Morbi's reopening without a fitness certificate", "There, the independent check was skipped, not compromised."],
        ["Tazreen's fire alarm", "That was a call made under production pressure."],
        ["Pike River's methane reports", "That's normalisation of deviance."]],
        k: "When the client pays the checker, independence needs protecting." },
      { d: 3, q: "You're the PM on a fast-tracked hospital fit-out. Which single practice would most reduce the chance of a grey-area disaster?", o: [
        ["Give everyone stop-work authority and back them up", "Correct. The people closest to danger can act before it escalates."],
        ["Add a weekly safety slide to the steering committee pack", "Reporting helps, but it doesn't stop unsafe work in the moment."],
        ["Require sponsor approval before any work can be stopped", "That slows the very stop that prevents harm, and signals that stopping is unwelcome."],
        ["Increase penalties for missing schedule milestones", "That adds exactly the pressure these cases warn against."]],
        k: "Empower the person nearest the danger to stop it." },
      { d: 3, q: "A near miss happens on your site, and nobody is hurt. What's the best response?", o: [
        ["Investigate it like an accident and fix the cause", "Correct. Near misses are free lessons and leading indicators."],
        ["Note it in the site diary and move on, since no one was hurt", "That's how near misses become normal."],
        ["Find out who was responsible and formally discipline them", "Blame drives near misses underground, so you hear about fewer of them."],
        ["Report it only if it happens again", "Waiting for a pattern means waiting for the accident."]],
        k: "Treat near misses as warnings, not luck." }
    ],
    flips: [
      { d: 2, f: "List the warning patterns that recur across these cases.", b: "Production or schedule pressure; normalisation of deviance (warnings managed until they feel normal); a reversed burden of proof; diffused responsibility (many know, nobody owns it); hazard information that doesn't reach the people at risk or responding; rules that skip the predictable hard case; compromised independence of checks; layers of protection switched off or cut back to save money; and the least powerful people carrying the most risk." },
      { d: 2, f: "As a project manager, how can you counter those patterns?", b: "Make safety a fixed constraint, not a variable; give everyone stop-work authority and back them; treat near misses as leading indicators; keep the burden of proof on whoever wants to proceed; make sure dissent reaches the accountable decision-maker; insist on independent sign-off; share hazard information immediately; and never let a deadline decide a safety question." }
    ]
  }

  ]
});
