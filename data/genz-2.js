/* Course 10 · Gen Z and neuroinclusive communication. Part 2: workplace trend terms, Kiwi talk and everyday te reo, and
   communicating with neurodivergent colleagues (ADHD, autism, dyslexia), including New Zealand law and privacy. General
   guidance, not legal or medical advice. First option is correct; the app shuffles. */

PMQ.fig("neuro-instruction", `<svg viewBox="0 0 600 262" role="img" aria-label="Anatomy of a clear instruction: goal, steps, what done looks like, deadline, where to get help, and a check-back question">
<text class="t2" x="4" y="12">Anatomy of a clear instruction (it works for everyone)</text>
<rect class="soft" x="4" y="24" width="136" height="30" rx="4"/><text class="tb" x="72" y="44" text-anchor="middle">Goal</text><text class="tc" x="152" y="44">Why: the client needs it for Friday's board meeting</text>
<rect class="soft" x="4" y="60" width="136" height="30" rx="4"/><text class="tb" x="72" y="80" text-anchor="middle">Steps</text><text class="tc" x="152" y="80">1) update the RFI log · 2) flag overdue items · 3) send to Sam</text>
<rect class="soft" x="4" y="96" width="136" height="30" rx="4"/><text class="tb" x="72" y="116" text-anchor="middle">Done looks like</text><text class="tc" x="152" y="116">every RFI has a status and an owner; overdue ones in red</text>
<rect class="soft" x="4" y="132" width="136" height="30" rx="4"/><text class="tb" x="72" y="152" text-anchor="middle">Deadline</text><text class="tc" x="152" y="152">3 pm Thursday (a date and time, not 'soon')</text>
<rect class="soft" x="4" y="168" width="136" height="30" rx="4"/><text class="tb" x="72" y="188" text-anchor="middle">Help</text><text class="tc" x="152" y="188">stuck? message me, or ask Priya</text>
<rect class="acc" x="4" y="204" width="136" height="30" rx="4"/><text class="tw" x="72" y="224" text-anchor="middle">Check back</text><text class="tc" x="152" y="224">'How will you start?' (and allow thinking time)</text>
<text class="t2" x="4" y="254">Follow any verbal brief in writing · one instruction at a time · plain, literal words</text>
</svg>`);

PMQ.fig("adjust-process", `<svg viewBox="0 0 600 202" role="img" aria-label="Agreeing a workplace adjustment: ask and listen, explore options, decide what's reasonable, record it privately, and review regularly">
<defs><marker id="ah-adjust" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<text class="t2" x="4" y="12">Agreeing a workplace adjustment</text>
<rect class="bx" x="4" y="26" width="108" height="46" rx="4"/><text class="tc" x="58" y="45" text-anchor="middle">Ask and listen</text><text class="tc" x="58" y="61" text-anchor="middle">privately</text>
<path class="s" d="M112 49 H123" marker-end="url(#ah-adjust)"/>
<rect class="bx" x="125" y="26" width="108" height="46" rx="4"/><text class="tc" x="179" y="45" text-anchor="middle">Explore options</text><text class="tc" x="179" y="61" text-anchor="middle">together</text>
<path class="s" d="M233 49 H244" marker-end="url(#ah-adjust)"/>
<rect class="soft" x="246" y="26" width="108" height="46" rx="4"/><text class="tc" x="300" y="45" text-anchor="middle">Decide what's</text><text class="tc" x="300" y="61" text-anchor="middle">reasonable</text>
<path class="s" d="M354 49 H365" marker-end="url(#ah-adjust)"/>
<rect class="bx" x="367" y="26" width="108" height="46" rx="4"/><text class="tc" x="421" y="45" text-anchor="middle">Record it;</text><text class="tc" x="421" y="61" text-anchor="middle">keep it private</text>
<path class="s" d="M475 49 H486" marker-end="url(#ah-adjust)"/>
<rect class="bx" x="488" y="26" width="108" height="46" rx="4"/><text class="tc" x="542" y="45" text-anchor="middle">Review</text><text class="tc" x="542" y="61" text-anchor="middle">regularly</text>
<text class="t2" x="58" y="92" text-anchor="middle">they often know</text><text class="t2" x="58" y="106" text-anchor="middle">what helps</text>
<text class="t2" x="179" y="92" text-anchor="middle">start with</text><text class="t2" x="179" y="106" text-anchor="middle">low-cost ones</text>
<text class="t2" x="300" y="92" text-anchor="middle">practical?</text><text class="t2" x="300" y="106" text-anchor="middle">effective?</text><text class="t2" x="300" y="120" text-anchor="middle">cost vs size?</text><text class="t2" x="300" y="134" text-anchor="middle">disruptive?</text><text class="t2" x="300" y="148" text-anchor="middle">safe?</text>
<text class="t2" x="421" y="92" text-anchor="middle">what, why,</text><text class="t2" x="421" y="106" text-anchor="middle">who pays</text>
<text class="t2" x="542" y="92" text-anchor="middle">in a few weeks,</text><text class="t2" x="542" y="106" text-anchor="middle">then regularly</text>
<text class="t2" x="4" y="176">Human Rights Act 1993: reasonable accommodation unless an adjustment is unreasonable</text>
<text class="t2" x="4" y="192">Privacy Act 2020: collect only job-related health information and keep it confidential</text>
</svg>`);

PMQ.course({
  id: "genz",
  topics: [

  /* ---------------------------------------------------------------- 7 */
  {
    id: "work-trends",
    title: "Workplace trend terms",
    summary: "These terms spread through social media and the news, and you'll hear them from staff, recruiters and executives alike. Treat each one as a signal to investigate, not a diagnosis. Fortune's 2025 take is a good rule: buzzwords can trivialise serious issues when leaders stop at the label, but they can also start useful conversations and show people they aren't alone. Several describe pulling back: quiet quitting and acting your wage (doing the job as defined, no unpaid extras), bare minimum Mondays, downshifting and 'conscious unbossing' (avoiding management roles), and the 'snail girl' who works to live. Some describe disengagement that hides in plain sight: resenteeism, taskmasking (looking busy while checked out) and quiet cracking (privately unhappy, still showing up). Some are about the job market: career cushioning, rage applying and job hugging (staying for security). Others name manager or employer behaviour: quiet firing (withholding support to push someone out) and hybrid creep (more office days than the official policy). Coffee badging, boreout, microbreaks and toxic productivity round it out. The usual remedies are unglamorous: look at workloads, be visible and approachable, offer growth paths that include technical careers, recognise effort, and manage by outcomes rather than online status.",
    terms: [
      ["Quiet quitting", "Doing the job as defined and no more: no unpaid extra hours and no 'going above and beyond'.", "Logging off at 5 pm sharp and declining optional weekend work."],
      ["Act your wage", "Matching your effort to your pay: doing your core duties without going above and beyond.", "Declining to cover a manager's admin work for no extra pay."],
      ["Bare minimum Mondays", "Starting the week with small, manageable tasks and low expectations to ease Sunday-night dread.", "Monday morning spent on emails and planning, with no big deliverables."],
      ["Boreout", "The opposite of burnout: apathy and disengagement caused by chronic boredom.", "A capable graduate stuck on photocopying for months stops caring."],
      ["Career cushioning", "Quietly lining up other job options while still employed, out of dissatisfaction or economic uncertainty.", "Updating LinkedIn and taking recruiters' calls 'just in case'."],
      ["Coffee badging", "Showing up at the office just long enough to swipe in and be seen, maybe grab a coffee, then leaving to work remotely.", "In at 9:30, coffee with the team, gone by 11."],
      ["Downshifting / conscious unbossing", "Deliberately stepping off the career ladder by cutting hours or commitment, or avoiding management roles ('conscious unbossing').", "A top engineer turns down a team-lead role to stay technical."],
      ["Microbreak", "A very short break during the workday to manage energy and recover from fatigue.", "Two minutes of stretching between drawing reviews."],
      ["Quiet firing", "A manager ignoring an employee and withholding support, mentoring or guidance, sometimes to push them out.", "No one-on-ones, no new projects and no feedback for months."],
      ["Rage applying", "Firing off lots of job applications while angry at your current job.", "Twenty applications sent the night after a bad review."],
      ["Resenteeism", "Turning up to a job you resent, without the will to work hard or well (a play on 'absenteeism').", "Present at every meeting, contributing nothing."],
      ["Snail girl", "The opposite of the 'girlboss': someone who prioritises work-life balance and works to live rather than lives to work.", "Turning down overtime to keep evenings for family."],
      ["Taskmasking", "Looking busy while actually checked out, also called 'productivity theatre'.", "Staying 'active' on Teams all day while doing little."],
      ["Toxic productivity", "An unhealthy obsession with constant work and worry about doing enough, even on nights and weekends.", "Answering emails at 11 pm and feeling guilty when resting."],
      ["Job hugging", "Staying in a job because it feels secure, even when you no longer enjoy it, often from fear of layoffs or a lack of openings elsewhere.", "Staying put through a hiring freeze despite feeling stuck."],
      ["Quiet cracking", "Keeping up appearances at work while privately feeling unhappy and disengaged.", "Still delivering, but dreading every Monday and telling no one."],
      ["Hybrid creep", "The gradual increase in days employees are expected in the office, despite an official hybrid policy.", "'Two days in' quietly becoming four."]
    ],
    cards: [
      { d: 1, q: "What is 'coffee badging'?", o: [
        ["Swiping in to be seen, then leaving", "Right. It's showing up just long enough to swipe in and be seen, often to meet return-to-office rules while keeping remote work. It usually signals that office time doesn't feel worthwhile."],
        ["Earning a badge for the most coffees bought", "It's about office attendance rules."],
        ["Taking a coffee break every hour", "That's closer to microbreaks."],
        ["Wearing your ID badge at the café", "It's about appearing at the office briefly."]],
        k: "Coffee badging = showing your face to meet office rules." },
      { d: 2, q: "A capable graduate has spent months on photocopying and data entry and now seems apathetic. Which term fits, and what helps?", o: [
        ["Boreout; give them real, stretching work", "Right. Boreout is apathy from chronic boredom. Stretch tasks, ownership of a small deliverable and a learning plan usually bring people back."],
        ["Burnout; give them a long holiday", "Burnout comes from overload; this is under-stimulation."],
        ["Quiet firing; it's the graduate's choice", "Quiet firing is something managers do; here the cause is the work itself."],
        ["Snail girl; leave them be", "That's a work-life balance choice, not apathy from boredom."]],
        k: "Boreout: chronic boredom drains motivation. The fix is meaningful work." },
      { d: 2, q: "A team member who used to volunteer for everything now does exactly their job description and logs off on time. What's the best first response?", o: [
        ["Talk openly about workload and recognition", "Right. Quiet quitting or 'acting your wage' often follows overload, unrecognised effort or stalled growth. Ask what changed and what would help."],
        ["Start a performance process for poor attitude", "Doing the job as defined isn't misconduct."],
        ["Give their extra work to someone else and say nothing", "That avoids the conversation, and you may lose them."],
        ["Praise them publicly to restore their motivation", "Praise without understanding the cause rarely works."]],
        k: "Quiet quitting is a signal; ask what changed." },
      { d: 2, q: "Your team's chat shows people 'active' all day, yet output has fallen. Which term describes the risk?", o: [
        ["Taskmasking", "Right. Taskmasking is looking busy while checked out ('productivity theatre'). Manage by outcomes and regular check-ins, not online status."],
        ["Coffee badging", "That's about office attendance."],
        ["Job hugging", "That's staying in a job for security."],
        ["Downshifting", "That's deliberately stepping back from career ambition."]],
        k: "Taskmasking = looking busy, not being productive. Measure outcomes, not online status." },
      { d: 3, q: "During a hiring freeze, a solid performer stays on but privately dreads coming to work. Which two terms fit?", o: [
        ["Job hugging and quiet cracking", "Right. Job hugging is staying because it feels safe; quiet cracking is being privately unhappy and disengaged while still showing up. Regular, honest one-on-ones are how you spot it."],
        ["Rage applying and coffee badging", "They aren't applying elsewhere or dodging the office."],
        ["Snail girl and microbreaks", "Those are about balance and short rests, not unhappiness."],
        ["Toxic productivity and boreout", "Not quite; the key signs are staying for security and private unhappiness."]],
        k: "Job hugging + quiet cracking = staying for security, struggling silently." },
      { d: 2, q: "A strong engineer declines promotion to team lead, saying they want to stay technical. What's the best response?", o: [
        ["Respect it and offer a technical growth path", "Right. 'Conscious unbossing' (avoiding management roles) is common. A technical path, such as senior or principal engineer, keeps their expertise and motivation. Only 6% of Gen Z in Deloitte's 2025 survey saw senior leadership as a main goal."],
        ["Insist; leadership is the only real path up", "Many good people prefer technical paths; forcing it risks losing them."],
        ["Assume they lack ambition", "Choosing a technical path isn't a lack of ambition."],
        ["Promote them anyway and review later", "Ignoring their choice damages trust."]],
        k: "Conscious unbossing is a choice; offer dual career paths." }
    ],
    flips: [
      { d: 2, f: "How should a manager respond when a workplace buzzword seems to fit someone on the team?", b: "Treat it as a signal, not a diagnosis. Talk privately and ask what's going on. Check workload, recognition, growth and how they're being managed (quiet firing is a manager behaviour). Agree one or two concrete changes and review them. Fortune's advice: look at workloads, rebuild trust by being visible and approachable, and build career paths and recognition." }
    ]
  },

  /* ---------------------------------------------------------------- 8 */
  {
    id: "kiwi-talk",
    title: "Kiwi talk and everyday te reo at work",
    summary: "New Zealand workplaces mix Kiwi slang with te reo Māori, and many younger Kiwis use both without thinking; newcomers often find it hard to follow at first. A few phrases matter more than others. 'Yeah nah' is a polite no, and 'nah yeah' is a yes. 'Sweet as' means great, or no problem, and 'chur' means thanks or nice one. 'Hard out' means definitely, 'keen?' asks whether you want to join, 'stoked' and 'gutted' mean delighted and very disappointed, and 'stink one' means bad luck. 'She'll be right' means it'll be fine, which is charming over a barbecue and dangerous before work at height: when someone uses it to skip a control, stop and check. Everyday te reo is common in workplaces and emails: kia ora (hello, thanks), mōrena (good morning), ka pai (good, well done), mahi (work), hui (a meeting), kōrero (talk, discussion), whānau (family, including extended family), kai (food) and ngā mihi (thanks or regards, a common email sign-off). Many meetings, especially in the public sector, open or close with a karakia, a Māori prayer or blessing: be still and quiet, and follow the room's lead. Learn to pronounce te reo properly and use macrons. For newcomers, a short glossary and a buddy help them belong, and plain language in safety and planning briefings makes sure everyone understands.",
    terms: [
      ["Chur", "Thanks, or 'cool, nice one'.", "'Chur for covering my shift.'"],
      ["Sweet as", "Great, no problem, all fine.", "'Can you start at 7?' 'Sweet as.'"],
      ["Yeah nah / nah yeah", "'Yeah nah' is a polite no; 'nah yeah' means yes.", "'Will the steel arrive today?' 'Yeah nah, Thursday.'"],
      ["Hard out", "Definitely, or intensely: 'yes, absolutely', or 'working hard out'.", "'Keen for Friday drinks?' 'Hard out.'"],
      ["Keen as / keen?", "'Keen as' means very enthusiastic; 'keen?' asks whether you want to join.", "'Lunch at the food truck, keen?'"],
      ["Stoked / gutted", "Very pleased / very disappointed.", "'Stoked the consent came through; gutted about the rain delay.'"],
      ["Stink one", "'That's unfortunate', or 'bad luck'.", "'Your car got towed? Stink one.'"],
      ["She'll be right", "'It'll be fine': a relaxed attitude that can slide into ignoring real risks.", "'No harness check needed, she'll be right' is a safety red flag."],
      ["Eh", "A tag that seeks agreement, like 'isn't it?' or 'right?'.", "'Cold on site this morning, eh.'"],
      ["Tu meke", "'Too much!': something is awesome.", "'You finished the as-builts already? Tu meke!'"],
      ["Kia ora / mōrena", "Kia ora: hello, thanks or best wishes. Mōrena: good morning.", "'Mōrena team, kia ora for coming in early.'"],
      ["Hui / kōrero", "Hui: a meeting or gathering. Kōrero: a talk, discussion or conversation.", "'Quick hui at 10 to kōrero about the programme.'"],
      ["Mahi / kai / whānau", "Mahi: work. Kai: food. Whānau: family, including extended family.", "'Great mahi this week; kai is on me Friday.'"],
      ["Ka pai / ngā mihi", "Ka pai: good, well done. Ngā mihi: thanks or regards, a common email sign-off.", "'Ka pai on the handover. Ngā mihi, Sam.'"],
      ["Karakia", "A Māori prayer, blessing or incantation, often used to open or close meetings and events.", "A project blessing at the start of site works."]
    ],
    cards: [
      { d: 1, q: "A Kiwi supplier says, 'Yeah nah, can't do Thursday.' Can they deliver on Thursday?", o: [
        ["No", "Right. 'Yeah nah' is a polite no: the 'yeah' acknowledges you, the 'nah' is the answer. 'Nah yeah' means yes."],
        ["Yes", "'Yeah nah' means no."],
        ["Maybe, if you push", "It's a polite no."],
        ["Yes, but late", "It's a no."]],
        k: "'Yeah nah' = no. 'Nah yeah' = yes." },
      { d: 2, q: "Before work at height, a worker says, 'She'll be right, no need for the harness check.' What's the manager's move?", o: [
        ["Stop and do the check anyway", "Right. 'She'll be right' is a relaxed Kiwi attitude that can slide into ignoring risk. For critical risks such as work at height, the check happens every time."],
        ["Accept it; experienced workers know best", "Experience doesn't replace controls at height."],
        ["Laugh it off as Kiwi humour", "It's a risk attitude, not just a phrase."],
        ["Note it for the next toolbox talk", "Deal with it now; the risk is now."]],
        k: "'She'll be right' + a critical risk = stop and check." },
      { d: 1, q: "An email from a New Zealand colleague ends 'Ngā mihi'. What does it mean?", o: [
        ["Thanks / regards", "Right. 'Ngā mihi' is a common te reo sign-off meaning thanks or regards; 'ngā mihi nui' is warmer: many thanks."],
        ["Urgent: reply today", "It's a polite sign-off."],
        ["Out of office", "It's a sign-off meaning thanks or regards."],
        ["Meeting cancelled", "It's a polite sign-off."]],
        k: "'Ngā mihi' = thanks or regards. 'Kia ora' = hello, thanks." },
      { d: 2, q: "A client meeting opens with a karakia. What should you do?", o: [
        ["Pause, stay quiet and follow the room's lead", "Right. A karakia is a Māori prayer or blessing often used to open or close meetings. Be still and quiet; if others stand, stand. You can ask about it afterwards."],
        ["Use the time to check your emails", "Disrespectful; it's a moment to be still."],
        ["Leave the room until it's over", "Unnecessary; stay and be respectful."],
        ["Ask the speaker to translate it first", "Not the moment; you can ask about it afterwards."]],
        k: "A karakia opens or closes many NZ meetings: be still and respectful." },
      { d: 2, q: "Your site lead says, 'Quick hui at 10 to kōrero about the programme.' What's happening?", o: [
        ["A short meeting to discuss the programme", "Right. A hui is a meeting or gathering, and kōrero means to talk or discuss."],
        ["A safety stand-down", "A hui is a meeting; kōrero is discussion."],
        ["A team lunch", "That would be kai."],
        ["A formal disciplinary hearing for the crew", "A hui is simply a meeting or gathering."]],
        k: "Hui = meeting. Kōrero = talk or discussion." },
      { d: 2, q: "A new migrant engineer is struggling to follow Kiwi slang in site meetings. What's the most helpful thing a manager can do?", o: [
        ["Explain key terms; keep critical briefings plain", "Right. A short glossary and a buddy help them belong, and plain language in safety and planning briefings makes sure everyone understands, not only newcomers."],
        ["Tell them they'll just pick it up eventually on site", "True in time, but they need to understand safety briefings now."],
        ["Ban slang on site", "Unrealistic; clarity in key briefings matters more."],
        ["Pair them only with other migrants", "That isolates them; include them and explain."]],
        k: "Slang is part of belonging; plain language is part of safety." }
    ],
    flips: [
      { d: 1, f: "Translate: 'Mōrena whānau! Ka pai on the mahi yesterday. Hui at 10, then kai. Chur.'", b: "'Good morning, team (family)! Well done on the work yesterday. Meeting at 10, then food. Thanks.'" },
      { d: 2, f: "Which Kiwi phrases can hide a 'no' or a risk?", b: "'Yeah nah' is a polite no. 'Yeah right' is sarcastic disbelief. 'She'll be right' can mean a risk is being brushed off. 'Stink one' acknowledges bad news without solving it. When it matters, ask a direct follow-up: 'So is that a yes for Thursday?'" }
    ]
  },

  /* ---------------------------------------------------------------- 9 */
  {
    id: "neuro-basics",
    title: "Neurodiversity at work: the basics",
    summary: "Neurodiversity is the natural variation in how people's brains work. Neurodivergent people include those with ADHD, autism, dyslexia and other differences; 'neurotypical' describes the majority pattern. Labels tell you little about an individual: two people with the same diagnosis can need completely different things, many people are undiagnosed, and many mask (hide or suppress traits to fit in), which is exhausting. Avoid both stereotypes, the deficit one and the 'superpower' one. ADHD affects attention, activity and impulse control, and often executive function (planning, starting tasks, working memory, managing time). ADHD New Zealand lists overstimulation, rejection sensitivity and people-pleasing as workplace challenges that can lead to misunderstandings or burnout, and names open-plan offices and interruptions as common triggers. Many people with ADHD also describe strengths such as energy, creativity and deep focus on engaging work. Autism shapes how people communicate and process sensory information: many autistic people prefer clear, direct, literal language, some prefer written communication, many value predictability and notice of changes, and noise, lighting or busy social events can be draining. Dyslexia mainly affects reading, spelling and processing written language; summaries, diagrams, extra time and assistive technology help, and many dyslexic people are strong big-picture thinkers. Some people prefer identity-first language ('autistic person'), others person-first ('person with autism'), so ask. A manager's job isn't to diagnose; it's to make work clear and adjustable for everyone, then respond to individual needs.",
    terms: [
      ["Neurodiversity", "The natural variation in how people's brains work, including how they think, learn, focus and process information.", "A project team where some people think in pictures and others in lists."],
      ["Neurodivergent / neurotypical", "Neurodivergent: thinking or processing differently from the majority, as with ADHD, autism or dyslexia. Neurotypical: the majority pattern.", "A neurodivergent planner who prefers written briefs to verbal ones."],
      ["ADHD", "Attention deficit hyperactivity disorder: differences in attention, activity and impulse control that can affect time management, focus and working memory.", "Losing track of verbal instructions in a noisy site office, yet excelling in a crisis."],
      ["Autism", "A lifelong difference in how people communicate, process sensory information and experience the world; it varies widely between people.", "Preferring a written agenda and direct, literal instructions."],
      ["Dyslexia", "A difference that mainly affects reading, spelling and processing written language, often alongside strong big-picture thinking.", "Finding a 40-page specification hard going, but spotting design clashes quickly."],
      ["Executive function", "The mental skills used to plan, organise, start tasks, hold information in mind and manage time; often affected in ADHD.", "Struggling to start a big report without a step-by-step plan."],
      ["Masking", "Hiding or suppressing neurodivergent traits to fit in, which can be exhausting over time.", "Forcing eye contact and small talk all day, then crashing at home."],
      ["Sensory overload", "When noise, light, smells or busyness become overwhelming and make it hard to think.", "A loud, bright open-plan office during a fit-out."],
      ["Rejection sensitivity", "Feeling criticism or rejection very intensely; ADHD New Zealand lists it, with overstimulation and people-pleasing, among workplace challenges.", "Reading a short 'see me' message as a sign of being in trouble."]
    ],
    cards: [
      { d: 1, q: "Which statement about neurodivergent colleagues is most accurate?", o: [
        ["Needs vary widely, so ask the person what helps", "Right. Neurodivergent people differ as much as anyone. Ask how they work best, and avoid both deficit and 'superpower' stereotypes."],
        ["Everyone with the same diagnosis needs the same support", "People with the same diagnosis can need very different things."],
        ["Neurodivergent people all have hidden superpowers", "A well-meant stereotype; strengths and challenges vary."],
        ["It only matters if someone has a formal diagnosis", "Many people are undiagnosed, and good practice helps everyone."]],
        k: "Ask, don't assume: the label doesn't tell you the need." },
      { d: 2, q: "A team member with ADHD misses details from long verbal briefings in a noisy site office. What's likely going on?", o: [
        ["Noise and verbal-only briefs overload memory", "Right. Open-plan noise and interruptions are common triggers (ADHD New Zealand). A written follow-up, a quieter spot for briefings and a short checklist usually fix it."],
        ["They don't really care about the details", "It's a processing issue, not attitude."],
        ["They need a stern warning so they focus properly", "Pressure doesn't fix working memory; written follow-up and quieter briefings do."],
        ["They should change roles", "Simple adjustments usually solve it."]],
        k: "ADHD + noise + verbal-only = lost details. Write it down, reduce noise." },
      { d: 2, q: "An autistic engineer asks for an agenda before every meeting. How should you treat this?", o: [
        ["As a reasonable request that helps everyone", "Right. Advance agendas help people who prefer predictability, and they make every meeting better: universal design at its simplest."],
        ["As inflexibility you should challenge", "Predictability helps many autistic people, and agendas help everyone."],
        ["As a sign they can't handle meetings", "It shows they know what helps them perform."],
        ["As extra admin work that you don't have time for", "An agenda takes minutes and improves every meeting."]],
        k: "Agendas in advance: essential for some, useful for all." },
      { d: 2, q: "What is 'masking' in the context of neurodiversity?", o: [
        ["Hiding traits to fit in, often at a cost", "Right. Masking means hiding or suppressing neurodivergent traits (forcing eye contact, scripting small talk) to fit in. It's tiring, so workplaces where people don't need to mask help them work well."],
        ["Wearing a dust mask on site", "Not literal; it's hiding traits to fit in."],
        ["Pretending to be busy at work", "That's taskmasking."],
        ["Refusing to disclose a diagnosis to your manager", "Disclosure is a personal choice; masking is suppressing traits day to day."]],
        k: "Masking = hiding traits to fit in; it's exhausting. Inclusion reduces the need." },
      { d: 3, q: "Should you call a colleague an 'autistic person' or a 'person with autism'?", o: [
        ["Ask them; preferences differ", "Right. Many autistic people prefer identity-first language ('autistic person'), while others prefer person-first. Ask, and use their words."],
        ["Always say 'person with autism'", "Many autistic people prefer identity-first language; preferences differ."],
        ["Always say 'an autistic person'", "Common, but not universal; ask."],
        ["Avoid mentioning it at all, even if they raise it", "If they raise it, follow their lead."]],
        k: "Language preferences differ: ask, and follow their lead." },
      { d: 2, q: "A dyslexic site supervisor struggles with a dense 40-page method statement. Which adjustment is most likely to help?", o: [
        ["A summary, diagrams and text-to-speech", "Right. The British Dyslexia Association suggests highlighted key points, summaries, diagrams or flowcharts, and assistive technology such as text-to-speech."],
        ["A deadline extension and nothing else", "Time helps, but the format is the bigger barrier."],
        ["Reading it aloud to the whole crew", "Putting someone on the spot can embarrass them."],
        ["Moving them to a role with no paperwork", "An overreaction; format changes usually solve it."]],
        k: "Dyslexia: change the format (summaries, diagrams, audio), not the person's role." }
    ],
    flips: [
      { d: 2, f: "What can ADHD, autism and dyslexia look like at work, and what tends to help?", b: "ADHD: lost details in noisy or interrupted settings, difficulty tracking time, overwhelm; helped by written instructions, chunked tasks, reminders, quiet focus time and short check-ins. Autism: a preference for direct, literal communication and predictability, and sensory overload; helped by clear written briefs, notice of changes, quiet spaces and flexible social expectations. Dyslexia: slow or tiring reading and writing; helped by summaries, diagrams, extra time and assistive technology. Always ask the person." }
    ]
  },

  /* ---------------------------------------------------------------- 10 */
  {
    id: "neuro-practice",
    title: "Neuroinclusive communication in practice",
    summary: "Neuroinclusive communication is mostly good communication done consistently, so build it in for everyone (universal design), then adjust for individuals. Instructions: one at a time, in numbered steps, with the why, what 'done' looks like, a deadline as a date and time, and who to ask; follow any verbal brief in writing. Check understanding by asking people to talk you through their first steps, and allow thinking time: the British Dyslexia Association warns, 'Do not assume that they have not heard.' Language: clear, direct and literal. 'It'd be great if someone could...' becomes 'Priya, please do X by Thursday.' Keep sarcasm, idioms and hints out of instructions. Meetings: send agendas in advance, take a break in anything long, share notes or recordings, welcome written input, and allow fidgeting or movement. Environment: quiet spaces, noise-cancelling headphones, flexible hours or remote days for focused work, and early warning of new noise such as nearby construction (Amaze). Change: give notice, in writing, with the reason. Feedback: private, specific and kind, with next steps, especially for someone who feels criticism intensely. Social events: share details early and make opting out easy. A buddy with structured check-ins helps in the first weeks. Above all, ask each person how they prefer to receive information, and review what's working regularly.",
    figs: ["neuro-instruction"],
    terms: [
      ["Universal design (at work)", "Designing communication, spaces and processes to work for as many people as possible from the start, rather than fixing them case by case.", "Every briefing comes with written notes, so nobody needs to ask for them."],
      ["Chunking", "Breaking a big task or message into smaller, ordered pieces.", "Splitting 'prepare the tender' into five steps with dates."],
      ["Read-back", "Asking someone to repeat or summarise an instruction, to confirm it's understood.", "'Can you tell me the three things you'll check before the pour?'"],
      ["Body doubling", "Working alongside someone, in person or online, to help with focus and getting started; some people with ADHD find it useful.", "Two engineers on a quiet video call, each finishing their own report."],
      ["Buddy system", "Pairing a new or neurodivergent employee with a colleague for questions and structured check-ins, especially in the first weeks.", "A buddy checks in daily during week one, then weekly."]
    ],
    cards: [
      { d: 1, q: "Which instruction is the most neuroinclusive?", o: [
        ["'Please send the updated RFI log to Sam by 3 pm today.'", "Right. It says exactly what, to whom and by when, with no hints, idioms or assumptions. That helps everyone and is essential for some."],
        ["'It'd be great if someone could look at the RFI log at some point.'", "Indirect and vague: who, what and when are all unclear."],
        ["'You know what to do with the RFI log, right?'", "It assumes shared understanding and invites a polite 'yes'."],
        ["'RFI log. Sorted by the usual time, eh?'", "It relies on unwritten norms and slang."]],
        k: "Direct, specific, literal: who, what, by when." },
      { d: 2, q: "You change tomorrow's site start from 7 to 6 am. How should you tell an autistic team member who values predictability?", o: [
        ["As early as possible, in writing, with the reason", "Right. Advance notice of changes, in writing, with the reason, helps people who rely on predictability, and avoids no-shows for everyone else."],
        ["Mention it as they leave today", "Short notice, verbal only, is the hardest way; give it early and in writing."],
        ["Don't; they'll see the others arriving early", "Leaving people out causes stress and missed starts."],
        ["Ask a colleague to pass it on casually", "Second-hand messages lose detail."]],
        k: "Changes: early, in writing, with the why." },
      { d: 2, q: "After giving instructions, you ask 'Any questions?' and get silence. What's a better way to check understanding?", fig: "neuro-instruction", o: [
        ["Ask them to talk you through their first steps", "Right. A read-back ('Talk me through how you'll start') checks understanding without putting anyone on the spot. Allow thinking time too: a pause isn't a 'no'."],
        ["Assume their silence means everyone understood it", "Silence often hides confusion."],
        ["Repeat the instructions louder", "Volume isn't the issue."],
        ["Test them with a quiz on the spot", "That feels like an exam; a friendly walk-through works better."]],
        k: "Swap 'Any questions?' for 'How will you start?'" },
      { d: 2, q: "A team member with ADHD asks to wear noise-cancelling headphones in the open-plan office. What's the best response?", o: [
        ["Agree, and agree how to get their attention", "Right. Headphones are a common, low-cost adjustment (ADHD New Zealand lists them). Agree a signal, such as a tap on the desk or a chat message, for when someone needs them."],
        ["Refuse; it looks antisocial", "It's a simple, common adjustment."],
        ["Agree, but only on Fridays", "An arbitrary limit undermines the point."],
        ["Ask them to provide a medical certificate first", "Usually unnecessary for a low-cost adjustment; talk it through."]],
        k: "Low-cost adjustments: say yes, then sort out the practicalities." },
      { d: 2, q: "How should you give critical feedback to someone who's told you they feel criticism very intensely?", o: [
        ["Privately and specifically, with next steps", "Right. Lead with the purpose, describe the specific issue (SBI works well), agree next steps, and follow up in writing. Clear and kind beats vague or harsh."],
        ["Avoid giving them any critical feedback at all", "Withholding feedback denies them the chance to improve."],
        ["In the team meeting, so it feels less personal", "Public criticism makes it worse."],
        ["By email only, with no conversation", "A written follow-up helps, but a conversation lets you check how it landed."]],
        k: "Rejection sensitivity: private, specific, kind, forward-looking." },
      { d: 3, q: "A two-hour planning workshop is coming up. Which set-up is the most neuroinclusive?", o: [
        ["Agenda first, a break, notes, written input", "Right. Agendas in advance, breaks, shared notes and the option to contribute in writing help people with ADHD, autism or dyslexia, and everyone else."],
        ["No agenda, so that people bring truly fresh ideas", "Uncertainty makes preparation hard for many people."],
        ["Two hours straight through to keep the momentum", "Long sessions without breaks drain focus."],
        ["Cameras on and everyone must speak", "Forced participation can shut people down; offer options."]],
        k: "Agenda, breaks, notes, and more than one way to contribute." },
      { d: 2, q: "Builders next door will be drilling all week. A colleague who's sensitive to noise sits by that wall. What should you do?", o: [
        ["Warn them and offer options", "Right. Amaze suggests warning staff about new noise early so they can take precautions, such as a quieter spot or working from home that day."],
        ["Nothing; everyone has to put up with it", "Advance warning and options are simple and effective."],
        ["Tell them only if they complain", "Notice in advance lets them plan."],
        ["Move them without asking", "Ask; they may prefer another option."]],
        k: "Warn about new sensory stimuli early, and offer choices." }
    ],
    flips: [
      { d: 2, f: "Rewrite: 'Could someone sort the defects list at some stage? Cheers.'", bf: "neuro-instruction", b: "'Priya, please update the defects list by 4 pm Thursday: 1) add the 12 items from today's walk-through, 2) mark closed items with the date, 3) send it to me and the client. If anything's unclear, message me.' A named person, clear steps, a deadline and a way to get help." },
      { d: 2, f: "List six neuroinclusive habits for meetings.", b: "1) Send the agenda and papers in advance. 2) Start with the goal. 3) Take a break in anything over an hour. 4) Share notes and actions in writing afterwards. 5) Welcome written input before or after, not only speaking up. 6) Allow fidgeting or movement, and don't force cameras on." }
    ]
  },

  /* ---------------------------------------------------------------- 11 */
  {
    id: "neuro-law",
    title: "NZ law, privacy and workplace adjustments",
    summary: "The Human Rights Act 1993 bans discrimination in employment on the ground of disability, and section 21 defines disability broadly: physical disability or impairment, physical illness, psychiatric illness, intellectual or psychological disability or impairment, and reliance on a guide dog, wheelchair or other remedial means. That's wide enough to cover many neurodivergent conditions. Real equality means making reasonable adjustments ('reasonable accommodation') throughout employment, from recruitment to the end of the job. Section 29's exceptions are narrow: different treatment is allowed only where the person could do the job only with special services or facilities the employer can't reasonably be expected to provide, or where there's an unreasonable risk of harm that can't be reduced to a normal level without unreasonable disruption. Employers must also consider whether another employee could reasonably take on particular tasks, and once an employee shows a case, it's for the employer to prove an exception applies. What's reasonable depends on the circumstances: practicality, effectiveness, cost relative to the size of the business, disruption and health and safety (MSD's guide). Good process: talk with the employee (and support people), consider a specialist assessment, record the decision, the reasons and who pays, and offer a review if they disagree. Workbridge administers Support Funds that can help with some costs. Privacy matters: health questions and records should relate to the job (Privacy Act 2020), and a broad 'Do you have any medical problems?' question has been held to indicate an intention to discriminate. Disclosure is generally the employee's choice (unless, say, a condition affects safety at work), and what they share should stay confidential. An employee who believes they faced discrimination can raise a personal grievance under the Employment Relations Act 2000 or complain to the Human Rights Commission, but not both (section 112).",
    figs: ["adjust-process"],
    terms: [
      ["Disability (Human Rights Act)", "Defined broadly in section 21: physical disability or impairment, physical illness, psychiatric illness, intellectual or psychological disability or impairment, or reliance on a guide dog, wheelchair or other remedial means.", "Broad enough to cover many conditions, including some neurodivergent ones."],
      ["Reasonable accommodation", "Adjusting the work, the workplace or processes so a disabled person can do the job, unless the adjustment would be unreasonable in the circumstances.", "Written instructions, flexible hours and a quieter desk for an employee with ADHD."],
      ["Section 29 exceptions", "The Human Rights Act's narrow exceptions: special services or facilities the employer can't reasonably provide, or an unreasonable risk of harm that can't be reduced without unreasonable disruption.", "A role where a serious risk can't reasonably be brought down to a normal level."],
      ["Workbridge Support Funds", "Government funding, administered by Workbridge, that can help pay for some disability-related workplace costs, such as specialist assessments or equipment.", "Funding a specialist workplace assessment."],
      ["Personal grievance (discrimination)", "A claim under the Employment Relations Act 2000; for disability discrimination, an employee can choose this or a Human Rights Commission complaint, but not both (section 112).", "A grievance after a reasonable adjustment was refused without reasons."],
      ["Health information (privacy)", "Under the Privacy Act 2020, employers should collect only health information related to the job, use it for that purpose, keep it secure and disclose it only as the law allows.", "Keeping an employee's diagnosis out of the team's shared folder."]
    ],
    cards: [
      { d: 1, q: "Under the Human Rights Act 1993, can 'disability' include conditions like ADHD, autism or dyslexia?", o: [
        ["Yes; the definition is broad enough", "Right. Section 21 covers physical disability, physical and psychiatric illness, intellectual or psychological disability or impairment, and reliance on remedial means, which can include neurodivergent conditions."],
        ["No; it covers physical impairments only", "It also covers psychiatric illness and intellectual or psychological disability or impairment."],
        ["Only if the person is registered as disabled", "There's no registration requirement in the definition."],
        ["Only for government employers", "The employment provisions apply to employers generally."]],
        k: "The Act's 'disability' is broad: physical, psychiatric, intellectual or psychological." },
      { d: 2, q: "An employee with dyslexia asks for written instructions and screen-reading software. What does the law expect?", o: [
        ["Provide them unless that's unreasonable", "Right. The duty to reasonably accommodate disability runs throughout employment. Written instructions and screen readers are low-cost and effective, so they're usually reasonable."],
        ["Nothing, unless it's in their employment agreement", "The Human Rights Act applies whatever the agreement says."],
        ["Provide them only if the employee pays for them", "Cost is one factor in what's reasonable, but low-cost adjustments like these are usually expected."],
        ["Agree only if every other employee gets the same", "Adjustments are individual; fairness isn't sameness."]],
        k: "Reasonable accommodation: provide adjustments unless they're unreasonable in the circumstances." },
      { d: 2, q: "Which factors help decide whether an adjustment is 'reasonable'?", fig: "adjust-process", o: [
        ["Cost, practicality, disruption and safety", "Right. MSD's guide lists practicality, effectiveness in helping the person do the job, cost relative to the size of the business, disruption to the business or others, and health and safety."],
        ["Whether the manager personally agrees with it", "Personal views aren't the test."],
        ["Whether other staff might also want the same", "Not the test; adjustments are individual."],
        ["How long the person has worked for the company", "Length of service isn't a factor."]],
        k: "Reasonable? Weigh practicality, effectiveness, cost (relative to size), disruption and safety." },
      { d: 2, q: "In a job interview, a manager asks: 'Do you have any medical problems of any kind?' What's the issue?", o: [
        ["Too broad; questions must relate to the job", "Right. In Imperial Enterprises v Ashwood, a question like this was found to indicate an intention to discriminate. Ask whether the person can meet the job's genuine requirements, with any adjustments."],
        ["None; employers can ask anything", "Health questions must relate to the job; a broad one can indicate an intention to discriminate."],
        ["It should only be asked in writing", "The format isn't the problem; the breadth is."],
        ["It should be asked of the candidate's referees instead", "Asking referees doesn't fix an unlawful question."]],
        k: "Ask only about what the job genuinely needs." },
      { d: 2, q: "An employee tells you privately that they have ADHD and asks you not to tell the team. What should you do?", o: [
        ["Keep it confidential and discuss what would help", "Right. Keep health information confidential and share it only with consent, on a need-to-know basis (Privacy Act 2020). Focus on the adjustments, not the diagnosis."],
        ["Tell the team, so they can be understanding", "Sharing health information without consent breaches trust and privacy."],
        ["Ask for a full medical history", "Collect only what's needed to agree adjustments."],
        ["Note it on their file and change nothing", "The point is to discuss what would help."]],
        k: "Their health information stays private; focus on what helps." },
      { d: 3, q: "An employee believes they faced disability discrimination at work. Which statement is right?", o: [
        ["They choose a grievance or an HRC complaint, not both", "Right. Section 112 of the Employment Relations Act 2000 lets the employee take one route, a personal grievance or a Human Rights Commission complaint, but not both."],
        ["They must go to the Human Rights Commission first", "They can choose; neither is a required first step."],
        ["They can pursue both routes at once", "Section 112 of the Employment Relations Act says one or the other."],
        ["Discrimination claims go straight to the District Court", "The routes are a personal grievance (to the Employment Relations Authority) or a Human Rights Commission complaint."]],
        k: "Disability discrimination: a personal grievance (ERA) or an HRC complaint, one route only." },
      { d: 2, q: "What should a manager record when agreeing a workplace adjustment?", o: [
        ["What was discussed and decided, why, and who pays", "Right. MSD's guide recommends documenting discussions, any specialist assessment, the decision and its reasons (including who pays), with a review process if the person disagrees."],
        ["Nothing; written records would feel too formal", "Records protect both sides and help reviews."],
        ["The full diagnosis and medical history", "Record what's needed for the adjustment, not more."],
        ["Only refusals, not approvals", "Record both, with reasons."]],
        k: "Document the discussion, decision, reasons and funding; review it regularly." }
    ],
    flips: [
      { d: 2, f: "Walk through a good workplace-adjustment conversation.", bf: "adjust-process", b: "1) Meet privately and ask what would help; the person often knows. 2) Explore options together, starting with low-cost ones (written instructions, headphones, flexible hours, a quieter desk). 3) Decide using practicality, effectiveness, cost relative to the business's size, disruption and safety. 4) Record what was agreed, why and who pays, and keep health details confidential. 5) Review it in a few weeks, then regularly." },
      { d: 2, f: "What does New Zealand law say about disability in employment, in five points?", b: "1) The Human Rights Act 1993 bans disability discrimination in employment and defines disability broadly. 2) Employers must make reasonable adjustments throughout employment. 3) The section 29 exceptions are narrow (unreasonable special services or facilities, or an unreasonable risk that can't be reduced), and the employer must show they apply. 4) Health questions and records must relate to the job (Privacy Act 2020). 5) An employee can raise a personal grievance or complain to the Human Rights Commission, but not both." }
    ]
  }

  ]
});
