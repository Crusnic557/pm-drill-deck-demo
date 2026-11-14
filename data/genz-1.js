/* Course 10 · Gen Z and neuroinclusive communication, for managers. Part 1: generations as a lens, reading tone in texts and
   calls, instructing and giving feedback, and three sets of slang. Updated November 2026; slang shifts fast, so refresh it
   from current sources. Survey figures are cited by name. First option is correct; the app shuffles. */

PMQ.fig("genz-tone", `<svg viewBox="0 0 600 322" role="img" aria-label="How short messages can read differently across generations, with better alternatives, and what common replies from younger colleagues usually mean">
<text class="t2" x="4" y="12">Reading tone across generations: patterns, not rules</text>
<text class="tb" x="4" y="34">You send</text><text class="tb" x="170" y="34">Some readers hear</text><text class="tb" x="390" y="34">Try</text>
<path class="s2" d="M4 42 H596"/>
<text class="tc" x="4" y="60">Ok.</text><text class="tc" x="170" y="60">curt, maybe annoyed</text><text class="tc" x="390" y="60">Ok, thanks!</text>
<path class="s2" d="M4 70 H596"/>
<text class="tc" x="4" y="88">Can you see me at 3?</text><text class="tc" x="170" y="88">I'm in trouble</text><text class="tc" x="390" y="88">add the topic + 'all good'</text>
<path class="s2" d="M4 98 H596"/>
<text class="tc" x="4" y="116">Surprise phone call</text><text class="tc" x="170" y="116">bad news</text><text class="tc" x="390" y="116">text first: free for 2 min?</text>
<path class="s2" d="M4 126 H596"/>
<text class="tc" x="4" y="144">👍 in a busy chat</text><text class="tc" x="170" y="144">a brush-off, sometimes</text><text class="tc" x="390" y="144">add a few words</text>
<path class="s2" d="M4 154 H596"/>
<text class="tb" x="4" y="180">They send</text><text class="tb" x="170" y="180">It usually means</text>
<path class="s2" d="M4 188 H596"/>
<text class="tc" x="4" y="206">💀</text><text class="tc" x="170" y="206">that's hilarious ('I'm dead')</text>
<text class="tc" x="4" y="230">😭</text><text class="tc" x="170" y="230">overwhelmed, often laughing hard</text>
<text class="tc" x="4" y="254">🙂</text><text class="tc" x="170" y="254">often sarcastic or fake-cheerful</text>
<text class="tc" x="4" y="278">bet · 🫡</text><text class="tc" x="170" y="278">yes, on it</text>
<text class="t2" x="4" y="300">Adaptavist 2025: 23% of Gen Z read a closing full stop as cold (10% of over-50s).</text>
<text class="t2" x="4" y="314">Uswitch 2024: 56% of 18–34s think a surprise call from friends or family is bad news.</text>
</svg>`);

PMQ.course({
  id: "genz",
  title: "Gen Z & Neuroinclusive Communication",
  short: "Gen Z & neuroinclusion",
  source: "Updated Nov 2026: National Academies (2020), Deloitte (2025), Adaptavist (2025), Uswitch (2024), MSD, ADHD NZ, Amaze, British Dyslexia Association, NZ law; paraphrased. Not legal advice",
  blurb: "A field guide for managers. How younger colleagues tend to communicate and what helps them do their best work; the slang and workplace terms you'll hear, with plain meanings and work examples; Kiwi talk and everyday te reo; and how to communicate well with neurodivergent colleagues, such as people with ADHD, autism or dyslexia, including what New Zealand law expects. Treat generational patterns as a starting hypothesis, then manage the person in front of you.",
  topics: [

  /* ---------------------------------------------------------------- 1 */
  {
    id: "gen-lens",
    title: "Generations: a lens, not a label",
    summary: "Gen Z usually means people born from about 1997 to 2012 (Pew Research Center's definition), so in 2026 they're roughly 14 to 29, and the oldest are already team leaders themselves. Be careful with the label. A 2020 report from the US National Academies of Sciences found that generational categories aren't supported by research as a basis for managing people: differences are better explained by age, career stage and circumstances, and people born in the same years differ as much as people born decades apart. So treat generational patterns as hypotheses, not facts about the person in front of you. Some patterns are still worth knowing. In Deloitte's 2025 survey, 50% of Gen Z wanted their managers to teach and mentor them, but only 36% said it happens; 89% said a sense of purpose matters to their job satisfaction and wellbeing; and only 6% named a senior leadership role as a main career goal. The New Zealand snapshot found 47% of Gen Z feel stressed or anxious all or most of the time, mainly about money, and 64% live pay cheque to pay cheque. Much of that is life stage: early-career pay, housing costs, first jobs. Good management barely changes: clear goals, regular feedback, fairness and growth, tuned to the individual.",
    terms: [
      ["Gen Z", "People born roughly 1997–2012 (Pew Research Center's definition); in 2026 they're about 14 to 29.", "A 24-year-old graduate engineer on your project team."],
      ["Life-stage effect", "Differences that come from age and career stage rather than generation; today's young workers share many traits with young workers of earlier decades.", "Caring a lot about pay and progression in your twenties, when you're starting out."],
      ["Generational stereotype", "Assuming someone's values or behaviour from their birth year; research finds people in the same generation differ as much as people in different ones.", "'He's Gen Z, so he won't answer the phone.'"],
      ["Purpose (at work)", "Seeing how your work matters; 89% of Gen Z in Deloitte's 2025 survey said it's important to their job satisfaction and wellbeing.", "Explaining that the pump station upgrade keeps a suburb's water safe."]
    ],
    cards: [
      { d: 1, q: "What did the US National Academies of Sciences (2020) conclude about managing people by generation?", o: [
        ["Generational labels aren't a sound basis; manage individuals", "Right. The report found generational categories aren't supported by research for workforce decisions, and that people in the same generation differ as much as people across generations."],
        ["Each generation needs its own management style", "The report found generational categories don't adequately inform management decisions."],
        ["Gen Z's values are fundamentally different from earlier ones", "Differences are better explained by age, career stage and circumstances."],
        ["Older workers should mentor only their own generation", "Nothing like that; the advice is to focus on individual needs."]],
        k: "Generation is a lens, not a label: manage the person." },
      { d: 1, q: "Using Pew Research Center's definition, which birth years make up Gen Z?", o: [
        ["1997 to 2012", "Right. Pew uses 1997–2012; definitions vary a little, so treat the edges loosely."],
        ["1981 to 1996", "Those are millennials."],
        ["1965 to 1980", "That's Gen X."],
        ["2013 onwards", "Those born after Gen Z are usually called Gen Alpha."]],
        k: "Gen Z: born about 1997–2012, so about 14–29 in 2026." },
      { d: 2, q: "A 23-year-old team member pushes hard for a pay rise and a clear path to promotion. What's the most useful way to read this?", o: [
        ["As a normal early-career priority", "Right. Pay, progression and learning matter most early in a career; the National Academies attribute much of what gets called 'generational' to age and career stage. Talk about the path."],
        ["As Gen Z entitlement that needs pushing back on", "That's a stereotype; early-career people of every generation care about pay and progression."],
        ["As a sign they'll quit soon, whatever you do", "Not necessarily; a clear path often keeps people."],
        ["As something to ignore until their annual review", "Better to talk about it now, with a clear path and honest timing."]],
        k: "Check life stage before blaming generation." },
      { d: 2, q: "In Deloitte's 2025 survey, half of Gen Z wanted their managers to teach and mentor them. How many said it actually happens?", o: [
        ["About a third (36%)", "Right. 50% want managers to teach and mentor them, but only 36% say it happens; that's a gap managers can close."],
        ["Almost all of them (90%)", "Far lower: 36%."],
        ["About two-thirds (64%)", "Lower: 36%. (64% is the share of NZ Gen Z living pay cheque to pay cheque.)"],
        ["Hardly any of them (5%)", "Higher than that: 36%."]],
        k: "The mentoring gap: 50% want it, 36% get it. Teaching is part of managing." },
      { d: 2, q: "A new graduate seems disengaged on a routine documentation task. What's the best first move?", o: [
        ["Explain why the task matters and who relies on it", "Right. 89% of Gen Z in Deloitte's survey say a sense of purpose matters. Showing who uses the documents (operators, auditors, the client) turns 'busywork' into a contribution."],
        ["Assume Gen Z doesn't like hard work", "A stereotype; missing context, not effort, is often the issue."],
        ["Give the task to someone more experienced", "That misses a development chance and the real issue."],
        ["Tell them everyone did boring work when they started", "Maybe true, but it won't motivate; purpose and context do."]],
        k: "Connect routine work to its purpose." },
      { d: 3, q: "Deloitte's 2025 New Zealand snapshot found 47% of Gen Z feel stressed or anxious all or most of the time. What was the main cause?", o: [
        ["Money: long-term finances and day-to-day costs", "Right. NZ Gen Z cited long-term and day-to-day finances, and 64% live pay cheque to pay cheque. That shapes attitudes to overtime, travel costs and unpaid extra work."],
        ["Pressure from managers and heavy workloads", "Finances were the main driver."],
        ["Social media", "Finances were the main driver."],
        ["Climate change", "A concern for many, but finances were the main driver here."]],
        k: "Many young Kiwis are financially stretched, and it shows up at work." }
    ],
    flips: [
      { d: 2, f: "How should a manager use generational research without stereotyping?", b: "Treat patterns as hypotheses, not labels. Ask each person how they like to communicate, get feedback and be recognised. Check life stage (pay, housing, first job) before blaming generation. Keep the basics that work for everyone: clear goals, regular feedback, fairness and growth. Revise your assumptions as you get to know the person." },
      { d: 1, f: "Gen Z at work: five numbers worth knowing (Deloitte, 2025).", b: "50% want managers to teach and mentor them; only 36% say they do. 89% say a sense of purpose matters to job satisfaction and wellbeing. Only 6% see a senior leadership role as a main career goal. In New Zealand, 47% feel stressed or anxious all or most of the time, mainly about money, and 64% live pay cheque to pay cheque." }
    ]
  },

  /* ---------------------------------------------------------------- 2 */
  {
    id: "genz-channels",
    title: "Texts, emoji and calls: reading tone",
    summary: "Tone gets lost in text, and people read it differently. In Adaptavist's 2025 survey of 1,000 UK knowledge workers, 23% of Gen Z saw a closing full stop as cold or passive-aggressive, against 10% of over-50s; 43% of Gen Z had had an emoji misunderstanding, and 80% adjust their emoji to suit the recipient. Over-50s were more likely to see emoji as inappropriate or lazy. Across all ages, 46% named misreading tone or phrasing as their biggest communication challenge, and 46% named different expectations about response times. Calls carry their own baggage: in a 2024 Opinium survey for Uswitch, 23% of UK 18–34s said they never answer calls, 61% would rather get a message, and 56% assume an out-of-the-blue call from friends or family means bad news. Common emoji rarely mean what they literally show: 💀 means 'I'm dead (laughing)', 😭 often means overwhelmed or laughing hard, 🙂 can read as sarcastic, and a lone 👍 can feel like a brush-off. Lowercase without punctuation usually signals a casual channel, not carelessness. The fix is to make norms explicit: which channel for what, expected response times, how to flag urgency, and where formal writing is required. Give context in messages, text before calling, and confirm decisions in writing. Misreading runs both ways: younger staff misread terse emails from older colleagues too.",
    figs: ["genz-tone"],
    terms: [
      ["Dry texting", "Replying with very short, flat messages, such as 'ok' or 'k', which many younger readers find cold or uninterested.", "'k.' in reply to a long update."],
      ["Left on read", "When a message shows as seen but gets no reply; it can feel like being ignored.", "Your apprentice sees 'Read 9:02' and still has no answer by lunch."],
      ["Team communication charter", "Agreed norms for which channel to use for what, expected response times, tone and how to flag urgency.", "'Urgent: call. Decisions: email. Quick questions: Teams, reply within 2 hours.'"],
      ["Voice note", "A short recorded audio message sent in a chat instead of a call or text; common among younger people.", "A 30-second voice note explaining a site photo."],
      ["Skull emoji (💀)", "Short for 'I'm dead (laughing)': it means something is hilarious, nothing to do with death.", "'The reversing beeper went off mid-meeting 💀'."]
    ],
    cards: [
      { d: 1, q: "In Adaptavist's 2025 survey, what share of Gen Z workers saw a closing full stop as cold or passive-aggressive, compared with over-50s?", o: [
        ["23% of Gen Z vs 10% of over-50s", "Right. 23% of Gen Z vs 10% of over-50s read it as cold. Most people in every age group didn't, so it's a nuance, not a rule."],
        ["Nearly all Gen Z vs none of the over-50s", "Far from universal: under a quarter of Gen Z."],
        ["Only 10% of Gen Z vs 23% of over-50s", "Reversed: Gen Z were more likely to read it as cold."],
        ["About half of the people in every age group", "Much lower, and it differed by age: 23% vs 10%."]],
        k: "Full stops read as cold to some younger readers, but most don't mind; don't overcorrect." },
      { d: 1, q: "A younger colleague replies '💀' to your message about a funny site mishap. What do they mean?", o: [
        ["It's hilarious", "Right. The skull is shorthand for 'I'm dead (laughing)'. Similarly, 😭 often means overwhelmed or laughing hard, not sad."],
        ["They're upset", "The skull is shorthand for 'I'm dead (laughing)'."],
        ["Someone got hurt", "Not literal; it signals laughter."],
        ["They want you to stop messaging", "It's a laughing reaction."]],
        k: "💀 = 'I'm dead' = very funny." },
      { d: 2, q: "You want to call a graduate engineer about a minor change to tomorrow's plan. What's the considerate approach?", fig: "genz-tone", o: [
        ["Text first with the topic, then call", "Right. In a 2024 UK survey, 56% of 18–34s assumed an out-of-the-blue call from friends or family meant bad news. A quick 'Free for a 2-min call about tomorrow's pour? Nothing urgent' removes the dread."],
        ["Call without warning; it's much quicker", "An out-of-the-blue call can read as bad news to many younger people."],
        ["Email instead and never call", "Calls are fine; a heads-up with context just lands better."],
        ["Ask their supervisor to pass the message on", "That adds a layer and loses detail."]],
        k: "Unexpected call? Send a heads-up with the topic first." },
      { d: 2, q: "Your team keeps clashing over slow replies: some expect answers in minutes, others reply the next day. What's the best fix?", o: [
        ["Agree response-time norms for each channel", "Right. A short team charter (urgent = call, decisions = email, quick questions = chat, reply within X hours) removes guesswork for every age group."],
        ["Tell the slow repliers to be faster", "One-sided; expectations differ, so agree them."],
        ["Ban chat apps and use email only", "That removes a useful channel instead of agreeing how to use it."],
        ["Leave it alone; people will adjust in time", "Different response-time expectations were a top challenge (46%) in Adaptavist's research; they rarely fix themselves."]],
        k: "Make norms explicit: channel, urgency, response time." },
      { d: 2, q: "A senior engineer finds a junior's lowercase, unpunctuated chat messages 'sloppy'. What's the most accurate view?", o: [
        ["Usually casual style; set norms for formal writing", "Right. Lowercase, unpunctuated messages are normal in chat for many younger people. Be explicit about where formal writing is expected: client emails, reports and site records."],
        ["It proves they don't take the job seriously", "Informal chat style isn't evidence of attitude."],
        ["It's fine everywhere, including reports sent to clients", "Client documents still need professional writing; say so clearly."],
        ["It's a sign of poor education", "A stereotype; it's a style choice in casual channels."]],
        k: "Casual channel, casual style is normal; be explicit about where formal writing is needed." },
      { d: 2, q: "In Adaptavist's 2025 research, what did 80% of Gen Z say they do with emoji at work?", o: [
        ["Adjust them to suit the recipient", "Right. 80% adjust emoji use to the recipient, so many younger workers already tone it down for senior or external contacts."],
        ["Avoid them completely", "Most use them, but adapt."],
        ["Use them in every message", "They adapt to who they're writing to."],
        ["Use them only with other Gen Z", "They adjust to the person rather than avoiding other ages."]],
        k: "Most young workers already adapt their emoji; meet them halfway." },
      { d: 3, q: "Your message 'Can you come and see me at 3?' leaves a new team member anxious all day. What would have prevented it?", o: [
        ["Adding the topic and that nothing's wrong", "Right. 'Can you pop by at 3 to plan next week's pour? All good' tells them what it's about. Vague requests read as trouble to many people, not just Gen Z."],
        ["Sending it later in the day", "Timing isn't the issue; missing context is."],
        ["Using more formal wording", "Formality without context can feel even more ominous."],
        ["Nothing; that kind of worry is their own problem", "Clear context costs nothing and keeps people focused."]],
        k: "Vague summons create dread; give the topic up front." }
    ],
    flips: [
      { d: 2, f: "Draft a team communication charter in five lines.", b: "1) Urgent or safety-critical: phone call (text first if it isn't an emergency). 2) Decisions and instructions: email or the project system, so there's a record. 3) Quick questions: chat, with a reply expected within an agreed time. 4) Tone: emoji are fine internally; keep client messages professional. 5) Out of hours: no reply expected unless it's flagged urgent." },
      { d: 1, f: "What do these usually mean from a younger colleague: '💀', '😭', '🙂', 'k.'?", bf: "genz-tone", b: "💀: 'I'm dead', so something's hilarious. 😭: overwhelmed, often laughing hard, not necessarily sad. 🙂: often sarcastic or fake-cheerful rather than happy. 'k.': curt, possibly annoyed. Meanings shift by person and platform, so if it matters, ask." }
    ]
  },

  /* ---------------------------------------------------------------- 3 */
  {
    id: "genz-instruct",
    title: "Instructing, feedback and growth",
    summary: "What helps younger staff mostly helps everyone, so build it into how you manage. Start with why: purpose matters to most people, and a task makes more sense when you know who relies on it. Define what 'done' looks like, ideally with an example, and break big tasks into steps with checkpoints. Brief out loud, then follow up in writing. Make questions normal: psychological safety, Amy Edmondson's term for a shared belief that it's safe to ask, admit mistakes and raise concerns, is what turns a nervous 'all good' into an honest 'I'm not sure how'. Give feedback little and often rather than saving it for an annual review, and keep it specific with Situation–Behaviour–Impact (SBI). Teach and mentor deliberately: half of Gen Z want it and only about a third get it (Deloitte, 2025). Use reverse mentoring where they're ahead, often on tools; 36% of New Zealand Gen Z already use generative AI daily at work, and you bring the judgement about accuracy and confidentiality. Explain the unwritten rules (the hidden curriculum): how to call in sick, who to copy on client emails, when to escalate, how site safety culture works. Be clear about what's fixed (safety, deadlines, client standards) and what's flexible (hours, tools, methods). When someone says they're 'acting their wage', look at workload, fairness and recognition before judging attitude.",
    terms: [
      ["Stretch assignment", "A task a little beyond someone's current ability, given with support and check-ins, to build their skills.", "A graduate drafts the monthly client report, with a senior reviewing it before it goes."],
      ["SBI feedback", "Situation–Behaviour–Impact: describe when and where, what the person did, and the effect it had; a model from the Center for Creative Leadership.", "'In Tuesday's client meeting, you sent the actions within an hour, and the client said it was the clearest update yet.'"],
      ["One-on-one (1:1)", "A regular, short private meeting between a manager and a team member about progress, problems, wellbeing and growth.", "Twenty minutes every Tuesday with each graduate, led by their list, not yours."],
      ["Reverse mentoring", "A junior employee mentors a more senior one, often on tools, technology or new perspectives.", "A graduate shows the project director how to use AI to summarise meeting notes."],
      ["Hidden curriculum", "The unwritten rules of a workplace that newcomers are expected to know but nobody teaches.", "How to call in sick, who to copy on client emails, when it's OK to leave site."]
    ],
    cards: [
      { d: 1, q: "Which feedback model describes the Situation, the Behaviour and its Impact?", o: [
        ["SBI", "Right. SBI, from the Center for Creative Leadership, keeps feedback specific and factual: when and where, what they did, and the effect."],
        ["SMART", "SMART is for setting goals."],
        ["RACI", "RACI maps roles and responsibilities."],
        ["SWOT", "SWOT analyses strengths, weaknesses, opportunities and threats."]],
        k: "SBI: when and where, what they did, what it caused." },
      { d: 2, q: "You ask a graduate to 'tidy up the drawing register'. They spend two days reformatting fonts. What went wrong?", o: [
        ["'Done' wasn't defined", "Right. 'Tidy up' meant something different to each of you. A definition of done (check status against the latest revisions, flag gaps, no formatting changes) plus an example would have saved two days."],
        ["They lack initiative", "They took initiative; the target was unclear."],
        ["Gen Z don't read instructions", "A stereotype; the instruction itself was vague."],
        ["Drawing registers are too hard for graduates", "They're manageable with a clear brief."]],
        k: "Vague task, wasted effort. Define 'done' and show an example." },
      { d: 2, q: "A new starter keeps saying 'all good' but makes errors that show they didn't understand. What's the best fix?", o: [
        ["Have them explain the plan back; welcome questions", "Right. Asking 'How will you start?' checks understanding without blame, and saying 'questions are part of the job' builds psychological safety."],
        ["Tell them to say if they don't understand", "They may not feel safe to; make it normal and check understanding."],
        ["Check their work less often so they feel confident", "That leaves errors unseen; check understanding up front instead."],
        ["Give the work to someone else", "That avoids the real fix and their development."]],
        k: "'All good' isn't understanding; ask for the plan back." },
      { d: 2, q: "How often should a manager give feedback to an early-career team member?", o: [
        ["Little and often, as work happens", "Right. Short, specific, timely feedback, positive and corrective, helps people adjust quickly, and annual reviews then hold no surprises."],
        ["Only in the annual review", "Too rare; small corrections become big problems."],
        ["Only when something goes wrong", "Recognising what went well matters as much."],
        ["Every hour, to keep them on track", "That's micromanagement; aim for regular, timely feedback."]],
        k: "Feedback works best little and often, both positive and corrective." },
      { d: 3, q: "A graduate shows you how they use AI to draft meeting minutes in minutes. What's the best management response?", o: [
        ["Learn from them, then agree rules for safe use", "Right. That's reverse mentoring: they bring the tool, you bring judgement about confidentiality, accuracy and client expectations. 36% of NZ Gen Z already use generative AI daily at work (Deloitte, 2025)."],
        ["Ban AI tools until head office writes a policy", "Blanket bans waste a useful skill; agree safe use instead."],
        ["Let them use it however they like", "Client confidentiality and accuracy still need rules."],
        ["Tell them minutes should be written by hand", "That ignores a genuine productivity gain."]],
        k: "Reverse mentoring: learn the tool from them; you bring judgement about risk." },
      { d: 2, q: "A new starter didn't ring in when sick; they messaged a colleague on social media instead. What's the most useful response?", o: [
        ["Teach the process clearly", "Right. Unwritten rules (who to call, by when, what to say) are the hidden curriculum. Put them in the induction pack and explain them kindly the first time."],
        ["Issue a formal written warning straight away", "Heavy-handed for something they may never have been told."],
        ["Say nothing and assume they'll work it out", "Unwritten rules don't teach themselves."],
        ["Ban social media at work", "Misses the point: tell them the process."]],
        k: "Teach the hidden curriculum: sick calls, client emails, site etiquette." },
      { d: 2, q: "A team member says 'I'm acting my wage' when asked to stay late again. What's the best first step?", o: [
        ["Check their workload and how extra effort is rewarded", "Right. 'Acting your wage' (doing your paid duties, without unpaid extras) often signals overload or unrecognised effort. Check workload, overtime rules and recognition before judging attitude."],
        ["Remind them that hard work always gets noticed eventually", "Vague promises rarely fix it; look at workload and fairness."],
        ["Report them for a poor attitude", "That treats a signal as misconduct."],
        ["Stop asking them for anything extra, ever", "An overcorrection; agree what's reasonable and how extra effort is recognised."]],
        k: "'Acting my wage' is a signal about workload and fairness; investigate before judging." }
    ],
    flips: [
      { d: 2, f: "Give an instruction a new graduate can't misunderstand.", b: "Say why it matters and who uses it. Describe what 'done' looks like, ideally with an example. Break it into steps with a checkpoint. Give the deadline as a date and time. Say who to ask if they're stuck. Put it in writing after you've talked it through. Then ask how they'll start." },
      { d: 2, f: "Turn this into SBI feedback: 'Your site diary is rubbish.'", b: "Situation: 'In this week's site diaries...' Behaviour: '...Monday and Tuesday don't record the weather, the crew on site or the concrete delivery delay.' Impact: 'If the client challenges our extension of time, we can't prove the delay, and that could cost us the claim.' Then agree what good looks like and check the next two entries together." }
    ]
  },

  /* ---------------------------------------------------------------- 4 */
  {
    id: "slang-hype",
    title: "Slang 1: praise, hype and focus",
    summary: "Much of today's youth slang comes from African American Vernacular English (AAVE) and from Black and LGBTQ+ ballroom culture, then spreads through social platforms. Know the meanings and respect the origins, but don't force the words into your own speech to sound young: it usually comes across as try-hard. Words move fast. Oxford's word of the year was 'rizz' in 2023, 'brain rot' in 2024 and 'rage bait' in 2025, and a term that's everywhere this year can sound dated the next, so treat this list as a snapshot to refresh. The words in this set are mostly positive. When a younger colleague says your work 'ate' or that you 'understood the assignment', that's sincere praise. 'Let him cook' asks you to trust someone's unusual approach, and 'lock in' means they're about to focus hard: both worth supporting. 'Rent free' describes something you can't stop thinking about, which can be a worry as easily as a delight, so it's worth a follow-up question.",
    terms: [
      ["Slay", "To do something exceptionally well (from Black and LGBTQ+ ballroom culture).", "'You slayed that client presentation.'"],
      ["Ate (and left no crumbs)", "Did something perfectly, leaving nothing to criticise.", "'The new dashboard? She ate.'"],
      ["It's giving...", "It has the feel or vibe of something; on its own, 'it's giving' means it looks great.", "'This site layout is giving organised chaos.'"],
      ["Understood the assignment", "Did exactly what was needed, and did it well.", "'The graduate's risk register understood the assignment.'"],
      ["Goated / GOAT", "GOAT means 'greatest of all time'; goated means extremely good or skilled.", "'Our site foreman is goated at planning pours.'"],
      ["W / L", "A win or a loss; 'take the L' means accept a loss or failure.", "'Consent approved early: massive W.'"],
      ["Bussin'", "Really good, usually about food (from AAVE).", "'The site barbecue was bussin'.'"],
      ["Hits different", "Feels especially good or meaningful in a particular situation.", "'A coffee at 6 am on a pour day hits different.'"],
      ["Rent free", "Something you can't stop thinking about: 'it lives in my head rent free'.", "'That clash-detection error is living in my head rent free.'"],
      ["Let him (or her) cook", "Let them carry on; they know what they're doing, even if it looks odd at first.", "'He's rebuilding the programme from scratch. Let him cook.'"],
      ["Lock in", "To focus hard on a task and shut out distractions.", "'Two hours to finish the tender. Time to lock in.'"],
      ["Rizz", "Charm or charisma, especially in attracting people; Oxford's word of the year for 2023.", "'The project director's client rizz is unreal.'"],
      ["Main character energy", "Acting like the hero of your own story: confident, sometimes self-centred.", "'Walking into the safety briefing late with a smoothie: main character energy.'"]
    ],
    cards: [
      { d: 1, q: "A graduate says your revised programme 'ate'. What do they mean?", o: [
        ["It's excellent", "Right. 'Ate' (or 'ate and left no crumbs') means it was done perfectly."],
        ["It used up the float", "Not literal; 'ate' means done perfectly."],
        ["It's too long", "It's praise."],
        ["Someone copied it", "It's praise: done perfectly."]],
        k: "'Ate' = nailed it." },
      { d: 1, q: "Your apprentice says, 'Time to lock in.' What are they about to do?", o: [
        ["Focus hard on the task", "Right. 'Lock in' means to concentrate intensely and shut out distractions."],
        ["Secure the site for the night", "Not literal; it means focusing."],
        ["Commit to a fixed price", "It's about concentration."],
        ["Refuse to take on more work", "It means getting focused."]],
        k: "'Lock in' = focus mode." },
      { d: 2, q: "A team member says of a colleague's unusual approach to a scheduling problem, 'Let her cook.' What's the message?", o: [
        ["Give her room; she knows what she's doing", "Right. It means let them carry on; the approach may look odd, but they know what they're doing."],
        ["She should be the one cooking for the team lunch", "Not literal; it means let her carry on."],
        ["Stop her before she wastes everyone's time", "The opposite: let her continue."],
        ["She's in trouble with the project manager again", "It's a vote of confidence."]],
        k: "'Let him/her cook' = trust them to finish." },
      { d: 2, q: "A manager starts using 'slay' and 'bussin'' in every team message to connect with younger staff. Why might it backfire?", o: [
        ["It usually reads as forced", "Right. Understanding slang helps; performing it rarely does. Speak naturally, and respect where the words come from (much comes from AAVE and Black and LGBTQ+ ballroom culture)."],
        ["The words are offensive in New Zealand", "They aren't offensive; overuse just sounds forced."],
        ["Gen Z have stopped understanding them", "They understand them; it's the forced use that jars."],
        ["It breaks company email rules everywhere", "Not the main issue."]],
        k: "Understand the slang; don't perform it." },
      { d: 2, q: "A junior says a long-running defect 'lives in my head rent free'. What do they mean?", o: [
        ["They can't stop thinking about it", "Right. Something living 'rent free' in your head is something you can't stop thinking about, good or bad. Here it's probably a worry worth a chat."],
        ["It costs them nothing to fix", "Not literal: it's stuck in their mind."],
        ["They've stopped caring about it", "The opposite: they keep thinking about it."],
        ["The client should pay for the fix", "It's about being stuck in their thoughts."]],
        k: "'Rent free' = stuck in your head." }
    ],
    flips: [
      { d: 1, f: "Decode: 'Ngl the handover pack ate, you understood the assignment fr.'", b: "'Not going to lie, the handover pack was excellent; you did exactly what was needed, for real.' It's sincere praise." }
    ]
  },

  /* ---------------------------------------------------------------- 5 */
  {
    id: "slang-doubt",
    title: "Slang 2: doubt, drama and attitude",
    summary: "This set signals doubt, criticism, stress or conflict, which makes it useful to managers: these words are often early warnings. 'We're cooked' flags a serious risk. 'Crash out' means someone is near breaking point. 'Sus' says something looks wrong, 'mid' is lukewarm feedback, and 'delulu' (delusional) is often aimed at a deadline nobody believes in. Some words describe online culture: 'rage bait' (Oxford's 2025 word of the year) is content designed to make people angry, 'slop' (Merriam-Webster's 2025 word) is low-quality content, usually AI-generated, produced in bulk, 'parasocial' (Cambridge's 2025 word) is a one-sided connection with a celebrity, influencer or even an AI, and 'brain rot' (Oxford's 2024 word) is the supposed dulling effect of endless trivial content. 'Gaslighting' (Merriam-Webster's 2022 word) means manipulating someone into doubting their own memory or perception, but it's often stretched to mean any disagreement, so listen for what actually happened. 'OK boomer' dismisses someone because of their age; respect runs both ways, so handle it as you would a dismissive remark about a younger person. When you hear these words, treat them like any risk report: ask what's behind them and what would help.",
    terms: [
      ["Cap / no cap", "'Cap' means a lie or exaggeration; 'no cap' means 'no lie, for real' (from AAVE).", "'No cap, the crane booking is confirmed.'"],
      ["Sus", "Suspicious or questionable.", "'That supplier's cheap quote looks sus.'"],
      ["Mid", "Mediocre or average; a mild put-down.", "'The new site canteen is mid.'"],
      ["Delulu", "Short for delusional, usually about unrealistic hopes; often used jokingly about yourself.", "'Finishing this by Friday? I'm delulu.'"],
      ["Salty", "Bitter or annoyed, often about losing out.", "'He's salty he wasn't picked for the project.'"],
      ["Red flag / green flag", "A warning sign / a good sign about a person, place or situation.", "'No safety induction on day one: red flag.'"],
      ["Cooked", "In serious trouble, or past saving.", "'If that inspection fails, we're cooked.'"],
      ["Crash out", "To lose control emotionally and act rashly under pressure.", "'I nearly crashed out when the pour got cancelled again.'"],
      ["Touch grass", "Go outside and reconnect with real life; you're too online or too wound up.", "'Arguing about fonts at 11 pm? Touch grass.'"],
      ["Spill the tea / throw shade", "Spill the tea: share the gossip. Throw shade: make a subtle dig at someone (both from Black and LGBTQ+ ballroom culture).", "'She threw shade at the other contractor's progress photos.'"],
      ["NPC", "'Non-player character', from video games: someone who seems to act on autopilot, without thinking for themselves.", "'Just nodding along in meetings makes you look like an NPC.'"],
      ["Aura", "A person's perceived coolness or presence; embarrassing moments lose 'aura points'.", "'Tripping over the tape measure in front of the client: minus aura.'"],
      ["Yap", "To talk a lot, often without much point; 'sorry for the yap' apologises for a long message.", "'Sorry for the yap, but here's the full defects list.'"],
      ["Rage bait / slop", "Rage bait: content designed to make people angry for engagement (Oxford's 2025 word of the year). Slop: low-quality digital content, usually AI-generated, produced in bulk (Merriam-Webster's 2025 word of the year).", "'That AI-written method statement is pure slop.'"]
    ],
    cards: [
      { d: 1, q: "A site engineer says, 'If the council rejects the drawings again, we're cooked.' What are they telling you?", o: [
        ["There's a serious risk if it happens", "Right. 'Cooked' means in serious trouble. Treat it as a risk signal: ask what would make the council say yes this time."],
        ["They're hungry and keen to break for lunch", "Not literal; 'cooked' means in serious trouble."],
        ["The drawings are finished", "It's about being in trouble."],
        ["They're too hot on site", "It means in serious trouble."]],
        k: "'We're cooked' is a risk flag; ask what would prevent it." },
      { d: 1, q: "A colleague says 'no cap' about a delivery time. What do they mean?", o: [
        ["They're being completely honest", "Right. 'Cap' means a lie or exaggeration, so 'no cap' means they're being honest (the phrase comes from AAVE)."],
        ["There's no upper limit on the cost", "Not about price caps; it means 'no lie'."],
        ["They forgot to wear their hard hat", "Not literal; it means 'for real'."],
        ["The delivery isn't confirmed yet", "The opposite: they're vouching for it."]],
        k: "'Cap' = lie; 'no cap' = for real." },
      { d: 2, q: "A team member says the new reporting process is 'mid'. How should you take it?", o: [
        ["As lukewarm feedback worth exploring", "Right. 'Mid' means mediocre. It's honest, low-key feedback; ask what would make the process better."],
        ["As high praise", "'Mid' means mediocre."],
        ["As a formal complaint", "It's casual criticism, not a complaint."],
        ["As proof they haven't understood the process", "They may understand it fine and think it's average; ask what would improve it."]],
        k: "'Mid' = meh. Ask what would make it good." },
      { d: 2, q: "A usually calm worker messages: 'about to crash out, third cancelled pour this week'. What's the best manager response?", o: [
        ["Check in privately and tackle the cause", "Right. 'Crash out' means losing control under pressure. Treat it as a wellbeing and workload signal: check in privately and look at why pours keep being cancelled."],
        ["Ignore it; it's just slang", "The slang carries a real signal of stress."],
        ["Warn them about using professional language at work", "That misses the point: they're telling you they're near breaking point."],
        ["Forward it to HR as a conduct issue", "That treats a stress signal as misconduct."]],
        k: "'Crash out' = near breaking point. Check in and fix the cause." },
      { d: 2, q: "A frustrated young engineer says a senior colleague is 'gaslighting' them because the senior disagreed with their estimate. What's the best response?", o: [
        ["Ask what happened; disagreement isn't gaslighting", "Right. Gaslighting means manipulating someone into doubting their own memory or perception (Merriam-Webster's 2022 word of the year). The word gets stretched to mean any disagreement, so listen, get specifics, and act if it really is manipulation."],
        ["Agree and discipline the senior colleague", "Disagreement alone isn't manipulation; get the facts first."],
        ["Tell them the word is banned at work", "Banning words won't help; understand the concern."],
        ["Ignore it, as it's only slang", "It may hide a real concern; ask."]],
        k: "Gaslighting = manipulating someone into doubting their own reality; disagreement isn't that." },
      { d: 3, q: "In a meeting, a junior dismisses an older colleague's concern with 'OK boomer'. What should the manager do?", o: [
        ["Address it as disrespect, like any ageist remark", "Right. 'OK boomer' dismisses someone because of their age. Respond calmly and consistently, as you would to a dismissive remark about a younger person, and bring the discussion back to the concern itself."],
        ["Laugh it off; it's harmless banter", "It's dismissive and ageist; letting it go signals it's fine."],
        ["Ban all slang in meetings", "Overkill; deal with the disrespect, not slang in general."],
        ["Side with the junior, since older views are usually outdated", "The concern deserves a hearing on its merits."]],
        k: "Respect runs both ways: call out ageism whichever direction it goes." }
    ],
    flips: [
      { d: 2, f: "Which slang words are early-warning signals a manager should act on?", b: "'We're cooked' (a serious risk ahead), 'crash out' (someone near breaking point), 'sus' (something looks wrong, such as a quote or a shortcut), 'red flag' (a warning sign), 'mid' (lukewarm feedback) and 'delulu' (a deadline nobody believes in). Treat them like any risk report: ask what's behind them and what would help." }
    ]
  },

  /* ---------------------------------------------------------------- 6 */
  {
    id: "slang-short",
    title: "Slang 3: shorthand, agreement and emoji",
    summary: "In chat, short replies and acronyms carry most of the meaning, and many of them simply mean yes. 'Bet' means 'OK, will do'. 'Say less' means 'got it, no need to explain'. The salute emoji (🫡) means 'understood, on it'. None of these is cheek. Sincerity markers include 'fr' (for real), 'ngl' (not gonna lie) and 'tbh' (to be honest). 'Lowkey' means somewhat or quietly ('I'm lowkey worried') and 'highkey' means very or openly, so 'lowkey' often flags a quiet concern worth following up. Other everyday terms: 'IYKYK' (if you know, you know), 'periodt' (end of discussion, emphatically), 'vibe check' (checking the mood), an 'era' (a phase, as in 'my learning-Revit era'), a 'soft launch' versus a 'hard launch', 'gatekeep' (keeping useful information to yourself) and 'chat' (addressing a group the way streamers address their live audience). One rule for managers: whatever style a reply comes in, safety-critical instructions still need a clear read-back. 'Bet' and '🫡' are fine acknowledgements, but before a crane lift or a confined-space entry, ask people to say the key steps back to you, whatever their age.",
    terms: [
      ["Bet", "'OK, will do' or 'deal': agreement (from AAVE).", "'Can you send the RFI by 3?' 'Bet.'"],
      ["Say less", "'Got it, you don't need to explain further': enthusiastic agreement.", "'Free pizza if we finish the pour by noon.' 'Say less.'"],
      ["Fr / ngl / tbh", "For real / not gonna lie / to be honest: markers of sincerity.", "'Ngl, that toolbox talk was useful fr.'"],
      ["Lowkey / highkey", "Lowkey: somewhat, quietly or secretly. Highkey: very, or openly.", "'I'm lowkey stressed about the inspection.'"],
      ["IYKYK", "'If you know, you know': a reference only insiders will get.", "'Friday afternoon concrete pours. IYKYK.'"],
      ["Periodt", "An emphatic full stop: 'end of discussion' (from AAVE and ballroom culture).", "'Safety first, periodt.'"],
      ["Vibe check", "Checking the mood or feel of a person, group or situation.", "'Quick vibe check before the client meeting: how's everyone feeling?'"],
      ["Era", "A phase of life or behaviour: 'in my ___ era'.", "'I'm in my learning-Revit era.'"],
      ["Soft launch / hard launch", "Hinting at something before revealing it fully / announcing it outright (originally about relationships).", "'We soft-launched the new timesheet app with one crew.'"],
      ["Gatekeep", "To keep useful information or access to yourself.", "'Don't gatekeep the good tender template.'"],
      ["Chat", "Addressing a whole group the way a streamer addresses their live audience.", "'Chat, is this programme realistic?'"],
      ["Salute emoji (🫡)", "'Understood, on it': a quick acknowledgement of an instruction.", "'Please check scaffold tags before 7.' '🫡'"]
    ],
    cards: [
      { d: 1, q: "You ask a junior to send the RFI by 3 pm. They reply 'bet'. What does that mean?", o: [
        ["Yes, will do", "Right. 'Bet' means OK, or deal. It's a genuine yes, not cheek."],
        ["They're betting it won't be done", "Not literal; 'bet' means agreement."],
        ["They're being cheeky", "It's a normal, positive reply."],
        ["They need more time", "It's agreement."]],
        k: "'Bet' = OK, will do." },
      { d: 1, q: "What does 'lowkey' mean in 'I'm lowkey worried about the audit'?", o: [
        ["Somewhat, or quietly", "Right. 'Lowkey' means somewhat or secretly; they're flagging a quiet worry worth a follow-up."],
        ["Not worried at all, really", "It signals some worry."],
        ["Extremely, and openly", "That's 'highkey'."],
        ["Worried about the lighting", "Not literal; it means somewhat or quietly."]],
        k: "Lowkey = a bit, or quietly. Highkey = very, or openly." },
      { d: 2, q: "Before a crane lift, you brief a young rigger, who replies '🫡'. What should you do?", o: [
        ["Accept it, then get a read-back of key steps", "Right. 🫡 means 'understood, on it'. For safety-critical work, use a read-back with anyone, of any age: 'Tell me the exclusion zone and the signal for stop.'"],
        ["Treat it as mockery and repeat the briefing more firmly", "The salute emoji means 'understood, on it'."],
        ["Accept it as full confirmation of every detail", "For safety-critical work, confirm understanding with a read-back, whatever the reply style."],
        ["Ban emoji on safety channels", "Unnecessary; a read-back protocol solves it."]],
        k: "Emoji acknowledgement is fine; safety-critical steps still need a read-back." },
      { d: 2, q: "A colleague asks you not to 'gatekeep' the project's lessons-learned file. What are they asking?", o: [
        ["Share it with the team", "Right. To 'gatekeep' is to keep useful information or access to yourself. Sharing lessons learned is exactly what good project teams do."],
        ["Lock it so only managers can edit it", "The opposite: they want access."],
        ["Delete outdated lessons", "It's about access, not cleaning up."],
        ["Put it behind the site gate", "Not literal; it means don't keep it to yourself."]],
        k: "'Gatekeep' = hoard useful information. Don't." },
      { d: 2, q: "A graduate posts in the team chat: 'chat, is this programme realistic?' Who are they addressing?", o: [
        ["The whole group", "Right. Streamers address their live audience as 'chat', so 'chat, ...' asks everyone at once. It's an open request for honest views, and a good moment to give them."],
        ["A colleague named Chat", "It's an audience call-out from streaming culture."],
        ["An AI chatbot", "They're asking the group."],
        ["The client's chat support line", "They're asking the team."]],
        k: "'Chat' = everyone listening, streamer-style." },
      { d: 3, q: "A team member replies 'say less' when you offer to explain the new permit process in detail. How should you read it?", o: [
        ["They're in; confirm the key points", "Right. 'Say less' means 'got it, no need to explain further'. For a permit process, still confirm the essentials, but don't take it as rudeness."],
        ["They're telling you to stop talking, rudely", "It's enthusiastic agreement, not rudeness."],
        ["They want a much longer explanation", "The opposite: they've got it."],
        ["They're refusing to follow the process", "It signals agreement."]],
        k: "'Say less' = I'm in, no need to explain more." }
    ],
    flips: [
      { d: 1, f: "Decode this chat: 'bet 🫡 ngl lowkey stressed abt the audit tho, iykyk'.", b: "'OK, will do (and understood). Not going to lie, I'm a bit stressed about the audit, though. You'll understand if you've been through one.' A yes, plus a quiet worry worth following up." }
    ]
  }

  ]
});
