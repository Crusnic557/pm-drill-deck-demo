/* Course 5 · Critical Thinking & Decisions with GenAI. Part 3: the DREAMS decision framework, strength tests (pre-mortem,
   stakeholders, futurecast), learning from past decisions and everyday tools, then both frameworks together.
   First option is correct; the app shuffles. */

PMQ.fig("dreams", `<svg viewBox="0 0 600 152" role="img" aria-label="The six DREAMS steps, and when to use them">
<rect class="acc" x="1" y="8" width="93" height="34" rx="5"/><text class="tL" x="47" y="33" text-anchor="middle">D</text>
<rect class="acc" x="102" y="8" width="93" height="34" rx="5"/><text class="tL" x="148" y="33" text-anchor="middle">R</text>
<rect class="acc" x="203" y="8" width="93" height="34" rx="5"/><text class="tL" x="249" y="33" text-anchor="middle">E</text>
<rect class="acc" x="304" y="8" width="93" height="34" rx="5"/><text class="tL" x="350" y="33" text-anchor="middle">A</text>
<rect class="acc" x="405" y="8" width="93" height="34" rx="5"/><text class="tL" x="451" y="33" text-anchor="middle">M</text>
<rect class="acc" x="506" y="8" width="93" height="34" rx="5"/><text class="tL" x="552" y="33" text-anchor="middle">S</text>
<text class="tb" x="7" y="60">Define</text><text class="t2" x="7" y="76">the problem:</text><text class="t2" x="7" y="89">what to solve</text><text class="t2" x="7" y="102">and its stakes</text>
<text class="tb" x="108" y="60">Refine</text><text class="t2" x="108" y="76">turn it into</text><text class="t2" x="108" y="89">a decision</text><text class="t2" x="108" y="102">question</text>
<text class="tb" x="209" y="60">Examine</text><text class="t2" x="209" y="76">your why:</text><text class="t2" x="209" y="89">the goals</text><text class="t2" x="209" y="102">behind it</text>
<text class="tb" x="310" y="60">Activate</text><text class="t2" x="310" y="76">find options,</text><text class="t2" x="310" y="89">research and</text><text class="t2" x="310" y="102">narrow them</text>
<text class="tb" x="411" y="60">Manage</text><text class="t2" x="411" y="76">your biases</text><text class="t2" x="411" y="89">and AI's</text><text class="t2" x="411" y="102">errors</text>
<text class="tb" x="512" y="60">Select</text><text class="t2" x="512" y="76">your path:</text><text class="t2" x="512" y="89">a uniquely</text><text class="t2" x="512" y="102">human moment</text>
<line class="s2" x1="1" x2="599" y1="114" y2="114"/>
<text class="t2" x="1" y="130"><tspan class="ta">Low stakes</tspan> (dinner from five ingredients): skip it, just ask AI.</text>
<text class="t2" x="1" y="146"><tspan class="ta">High stakes</tspan> (it keeps you up at night): work through all six steps.</text>
</svg>`);

PMQ.fig("refine-steps", `<svg viewBox="0 0 600 184" role="img" aria-label="Turning a problem into a specific decision question">
<defs><marker id="ah-rf" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<rect class="bx" x="1" y="8" width="180" height="82" rx="5"/>
<text class="tb" x="11" y="28">Problem</text><text class="t2" x="11" y="46">“I'm unhappy at work.”</text><text class="tbad" x="11" y="78">passive: no direction</text>
<rect class="bx" x="210" y="8" width="180" height="82" rx="5"/>
<text class="tb" x="220" y="28">Decision question</text><text class="t2" x="220" y="46">“What would make my</text><text class="t2" x="220" y="59">job more enjoyable?”</text><text class="tok" x="220" y="78">active: invites options</text>
<rect class="bx" x="419" y="8" width="180" height="82" rx="5"/><rect class="acc-s" x="419" y="8" width="180" height="82" rx="5"/>
<text class="tb" x="429" y="28">Get specific</text><text class="t2" x="429" y="46">“I'd like some new</text><text class="t2" x="429" y="59">challenges.”</text><text class="ta" x="429" y="78">a criterion, not a fix</text>
<path class="s" d="M181 49 H207" marker-end="url(#ah-rf)"/><path class="s" d="M390 49 H416" marker-end="url(#ah-rf)"/>
<text class="t2" x="1" y="116">AI's draft: “What steps can I take to address my unhappiness</text>
<text class="t2" x="1" y="130">at work and improve my overall job satisfaction?”</text>
<text class="t" x="1" y="154">Her edit: “…and increase my <tspan class="ta">work-life balance</tspan>?”</text>
<text class="t2" x="1" y="176">Edit AI's question until it reflects what matters to you.</text>
</svg>`);

PMQ.fig("options-funnel", `<svg viewBox="0 0 600 166" role="img" aria-label="Activating options: generate with AI, direct it to your motivation, narrow, then research">
<defs><marker id="ah-of" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<rect class="bx" x="1" y="8" width="136" height="110" rx="5"/><text class="tb" x="11" y="30">Generate</text><text class="t2" x="11" y="48">AI: a long list</text><text class="t2" x="11" y="62">of options</text>
<rect class="bx" x="155" y="18" width="136" height="90" rx="5"/><text class="tb" x="165" y="40">Direct</text><text class="t2" x="165" y="58">options that fit</text><text class="t2" x="165" y="72">your motivation</text>
<rect class="bx" x="309" y="28" width="136" height="70" rx="5"/><text class="tb" x="319" y="50">Narrow</text><text class="t2" x="319" y="66">you keep the</text><text class="t2" x="319" y="80">few that fit</text>
<rect class="bx" x="463" y="38" width="136" height="50" rx="5"/><rect class="acc-s" x="463" y="38" width="136" height="50" rx="5"/><text class="tb" x="473" y="56">Research</text><text class="t2" x="473" y="70">benefits, then</text><text class="t2" x="473" y="82">practical steps</text>
<path class="s" d="M137 63 H152" marker-end="url(#ah-of)"/><path class="s" d="M291 63 H306" marker-end="url(#ah-of)"/><path class="s" d="M445 63 H460" marker-end="url(#ah-of)"/>
<text class="t" x="1" y="140">For each option, ask: <tspan class="ta">What are the benefits?</tspan></text>
<text class="t" x="1" y="158">Then: <tspan class="ta">What would I have to do to get them?</tspan></text>
</svg>`);

PMQ.fig("dm-bias-check", `<svg viewBox="0 0 600 186" role="img" aria-label="Three human thinking mistakes and three common AI flaws to check for">
<rect class="bx" x="1" y="8" width="294" height="146" rx="5"/><rect class="bx" x="305" y="8" width="294" height="146" rx="5"/>
<text class="tb" x="11" y="30">Your thinking mistakes</text>
<text class="ta" x="11" y="54">Optimism bias</text><text class="t2" x="11" y="68">“it'll work out better than it will”</text>
<text class="ta" x="11" y="92">Confirmation bias</text><text class="t2" x="11" y="106">you find what you were looking for</text>
<text class="ta" x="11" y="130">Planning fallacy</text><text class="t2" x="11" y="144">tasks take longer than you budget</text>
<text class="tb" x="315" y="30">AI's common flaws</text>
<text class="ta" x="315" y="54">Outdated</text><text class="t2" x="315" y="68">How up to date is this information?</text>
<text class="ta" x="315" y="92">Incomplete</text><text class="t2" x="315" y="106">Where might it be incomplete?</text>
<text class="ta" x="315" y="130">Inaccurate</text><text class="t2" x="315" y="144">How might it go wrong? Any errors?</text>
<text class="t" x="1" y="178">Ask AI to probe both, then turn each finding into an action.</text>
</svg>`);

PMQ.fig("premortem-futurecast", `<svg viewBox="0 0 600 200" role="img" aria-label="A pre-mortem looks back from an imagined failure; a futurecast looks ahead to signs of success">
<defs><marker id="ah-pf1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker><marker id="ah-pf2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path class="ah-acc" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<text class="tb" x="40" y="22">Pre-mortem</text>
<text class="t2" x="40" y="38">Imagine it has failed: what went wrong? Add safeguards.</text>
<path class="dash" d="M540 56 H66" marker-end="url(#ah-pf1)"/>
<rect class="acc" x="30" y="76" width="116" height="26" rx="13"/><text class="tw" x="88" y="93" text-anchor="middle">Today: decide</text>
<path class="s" d="M146 89 H454"/>
<rect class="bx" x="454" y="76" width="116" height="26" rx="13"/><text class="tc" x="512" y="93" text-anchor="middle">The future</text>
<path class="acc-s" d="M60 122 H534" marker-end="url(#ah-pf2)"/>
<text class="tb" x="40" y="148">Futurecast</text>
<text class="t2" x="40" y="164">If it works, what becomes possible? Which signs will show it?</text>
<text class="t" x="40" y="192">AI gives a generic list; you add what only you know.</text>
</svg>`);

PMQ.fig("stakeholder-prep", `<svg viewBox="0 0 600 158" role="img" aria-label="Preparing stakeholder conversations: your part, then AI's part">
<defs><marker id="ah-sp" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<rect class="bx" x="1" y="8" width="284" height="118" rx="5"/>
<text class="tb" x="11" y="28">Your part</text>
<text class="t2" x="11" y="46">Who's affected, and what you know:</text>
<text class="t2" x="11" y="64">· brother: holidays with his family</text>
<text class="t2" x="11" y="80">· husband: no flexible schedule</text>
<text class="t2" x="11" y="96">· best friend: hikes national parks</text>
<text class="t2" x="11" y="112">· boss: noticed her unused leave</text>
<rect class="bx" x="315" y="8" width="284" height="118" rx="5"/><rect class="acc-s" x="315" y="8" width="284" height="118" rx="5"/>
<text class="tb" x="325" y="28">AI's part</text>
<text class="t2" x="325" y="46">Two positive ways to ask each one.</text>
<text class="t2" x="325" y="64">For her brother:</text>
<text class="t2" x="325" y="80">· say she admires his family time</text>
<text class="t2" x="325" y="96">· offer easy options, from a weekend</text>
<text class="t2" x="337" y="112">away to a few hours at dinner</text>
<path class="s" d="M285 67 H312" marker-end="url(#ah-sp)"/>
<text class="t" x="1" y="150">Easy, flexible asks make a yes more likely.</text>
</svg>`);

PMQ.fig("past-chart", `<svg viewBox="0 0 600 118" role="img" aria-label="Reviewing a past decision's strengths and weaknesses against the DREAMS steps">
<text class="t2" x="8" y="16">DECISION</text><text class="t2" x="112" y="16">STRENGTHS</text><text class="t2" x="282" y="16">WEAKNESSES</text><text class="t2" x="452" y="16">DREAMS STEP</text>
<line class="s" x1="4" x2="596" y1="24" y2="24"/>
<text class="tb" x="8" y="44">New car</text>
<text class="t2" x="112" y="44">safest, most fuel-</text><text class="t2" x="112" y="58">efficient, in budget</text>
<text class="t2" x="282" y="44">too small for kids</text><text class="t2" x="282" y="58">and dog on family trips</text>
<text class="ta" x="452" y="44">E: Examine</text><text class="t2" x="452" y="58">her real why: family</text><text class="t2" x="452" y="72">road trips</text>
<line class="s2" x1="4" x2="596" y1="86" y2="86"/>
<text class="tb" x="8" y="106">Your turn</text><text class="t2" x="112" y="106">what went well?</text><text class="t2" x="282" y="106">what could be better?</text><text class="t2" x="452" y="106">which step helps?</text>
</svg>`);

PMQ.fig("three-tools", `<svg viewBox="0 0 600 140" role="img" aria-label="Three everyday decision tools to use with AI">
<rect class="bx" x="1" y="8" width="194" height="98" rx="5"/><rect class="bx" x="203" y="8" width="194" height="98" rx="5"/><rect class="bx" x="405" y="8" width="194" height="98" rx="5"/>
<text class="tb" x="11" y="30">Pro/con</text><text class="t2" x="11" y="50">one decision, or</text><text class="t2" x="11" y="64">between options;</text><text class="t2" x="11" y="78">sorts upsides and</text><text class="t2" x="11" y="92">downsides</text>
<text class="tb" x="213" y="30">Data analysis</text><text class="t2" x="213" y="50">upload the data, ask</text><text class="t2" x="213" y="64">for key insights:</text><text class="t2" x="213" y="78">collecting isn't</text><text class="t2" x="213" y="92">making meaning</text>
<text class="tb" x="415" y="30">Three stories</text><text class="t2" x="415" y="50">it works out well,</text><text class="t2" x="415" y="64">neutral, or poorly:</text><text class="t2" x="415" y="78">a scenario analysis</text><text class="t2" x="415" y="92">of the variables</text>
<text class="t" x="1" y="132">Hybrid stories revealed: a heavy battery can cut ground clearance.</text>
</svg>`);

PMQ.course({
  id: "thinking",
  topics: [

  /* ---------------------------------------------------------------- 13 */
  {
    id: "dreams",
    title: "DREAMS: define the problem and its stakes",
    summary: "AI is a powerful tool for decisions, with strengths and limits. Just as we don't let a car decide where we drive, we use AI to help us reach the best available choice. Making decisions is the main way we move into the future, which is why decision expert Cheryl Strauss Einhorn named her process DREAMS: Define your problem, getting clear on what you want to solve; Refine your decision, turning the problem statement into a decision question; Examine your motivation, defining your goals; Activate your options, researching and analysing them; Manage your biases, both human thinking mistakes and where AI is error-prone; and Select your path forward. It's a logical, repeatable process, and without one we cut corners and lean on well-worn mental pathways. Planning an all-inclusive holiday, you might jump straight to choosing a resort and miss what matters most: location or cost? Travel distance or crowds? The busiest times of year? A different kind of holiday that would suit you better? Defining starts with the stakes. A low-stakes problem has small consequences and doesn't need a process: with five ingredients in the fridge, just ask AI to suggest two meals, jumping over problem solving straight to an answer. A high-stakes problem keeps you up at night or would be costly to get wrong, like a flat that's too snug for a growing family, work that feels mundane, or too many stray dogs in the neighbourhood. Those deserve research and a thoughtful process that goes through problem solving before decision making.",
    figs: ["dreams"],
    terms: [
      ["DREAMS framework", "A six-step decision process: Define the problem, Refine the decision, Examine motivation, Activate options, Manage biases, Select a path.", "Working from “I'm unhappy at work” to a chosen, tested action.", 0, "dreams"],
      ["Low-stakes decision", "A decision with small consequences, where you can skip the process and go straight to an answer.", "Asking AI for two meals from what's in the fridge."],
      ["High-stakes decision", "A decision that keeps you up at night or would be costly to get wrong, which deserves research and a process.", "Choosing whether to move house for a growing family."]
    ],
    cards: [
      { d: 1, q: "What does the S in DREAMS stand for?", af: "dreams", o: [
        ["Select your path forward", "Correct. The decision itself."],
        ["Survey your stakeholders", "Stakeholders come after the decision, when you strength-test it."],
        ["Summarise your research", "Not a step."],
        ["Simplify the problem", "Not a step."]],
        k: "Define, Refine, Examine, Activate, Manage, Select." },
      { d: 1, q: "Which DREAMS step turns a problem statement into a decision question?", o: [
        ["Refine", "Correct. Refine reframes the problem as a clear question you can decide on."],
        ["Define", "Define is about getting clear on the problem and its stakes."],
        ["Examine", "That's about motivation."],
        ["Activate", "That's about options."]],
        k: "R = reframe the problem as a question." },
      { d: 1, q: "When does the course say you can skip the DREAMS process?", o: [
        ["When the stakes are low", "Correct. Like asking AI for two meals from five ingredients."],
        ["Whenever AI is confident about its recommendation", "Confidence isn't the test; stakes are."],
        ["When the decision affects only other people", "Other people's stakes matter too."],
        ["Never; every decision needs all six steps", "Low-stakes decisions don't need a process."]],
        k: "Low stakes: just get an answer." },
      { d: 1, q: "What's the M step in DREAMS?", o: [
        ["Manage your biases, and AI's errors", "Correct. Human thinking mistakes and where AI is error-prone."],
        ["Measure your results after the decision", "Tracking comes later, in futurecasting."],
        ["Map your stakeholders' interests", "Stakeholders come after selecting."],
        ["Make a shortlist of your best options", "Narrowing options is part of Activate."]],
        k: "M = manage biases, yours and AI's." },
      { d: 2, q: "You have five ingredients and want a dinner idea. What does the course suggest?", o: [
        ["Just ask AI for two meal ideas", "Correct. It's low stakes, so skip straight to an answer."],
        ["Run the full DREAMS framework to avoid biases", "Overkill for a low-stakes choice."],
        ["Research nutrition data before choosing anything", "Overkill again."],
        ["Ask friends to vote on a recipe", "Not the course's suggestion."]],
        k: "Match the effort to the stakes." },
      { d: 2, q: "Planning an all-inclusive holiday, why does a process beat jumping straight to picking a resort?", o: [
        ["You might miss what matters most to you", "Correct. Location or cost? Travel time or crowds? Busy seasons? Another kind of holiday?"],
        ["Resorts change their prices too often to compare", "Not the point."],
        ["AI can't compare resorts without a framework", "It can; the risk is in your thinking."],
        ["A process always finds the cheapest option", "Cheapest isn't necessarily best for you."]],
        k: "Jumping to solutions skips your priorities." },
      { d: 2, q: "What makes a problem high stakes, in the course's terms?", o: [
        ["Losing sleep over it, or a bad choice is costly", "Correct. A problem is high stakes when it worries you or a wrong choice would be costly."],
        ["It involves a large amount of data that needs analysing", "Data volume isn't the test."],
        ["It involves AI tools that you haven't used before", "Not the test."],
        ["It has more than one answer that looks reasonable", "Not the test."]],
        k: "High stakes: it keeps you up at night." },
      { d: 3, q: "Your manager asks you to choose a BMS vendor for a new hospital wing. Where should you start?", o: [
        ["Define the problem and confirm it's high stakes", "Correct. Then work through the rest of DREAMS."],
        ["Select a vendor, then research to justify it", "That's confirmation bias built in."],
        ["Ask AI which vendor is best and go with it", "That skips problem solving on a high-stakes choice."],
        ["Pick the vendor you used last time", "A well-worn pathway, not a process."]],
        k: "High stakes: define first, decide last." },
      { d: 3, q: "Why does the course say “we don't let a car decide where we drive”?", o: [
        ["AI is a tool; you decide where to go", "Correct. Use AI to reach the best choice; don't hand it the choice."],
        ["Cars and AI both need regular maintenance", "Not the analogy."],
        ["AI should be avoided for important decisions", "The course embraces AI as a tool."],
        ["Self-driving cars will make decisions for us", "Not the analogy."]],
        k: "AI informs; you decide." }
    ],
    flips: [
      { d: 1, f: "Spell out DREAMS.", bf: "dreams", b: "Define your problem, and its stakes. Refine your decision into a question. Examine your motivation: your why. Activate your options: generate, research and analyse. Manage biases: your thinking mistakes and AI's errors. Select your path forward: a uniquely human moment." }
    ]
  },

  /* ---------------------------------------------------------------- 14 */
  {
    id: "refine",
    title: "R: Refine the problem into a decision question",
    summary: "A problem is a situation you're unhappy with, such as “I don't like my job”. It's not a decision: it has no momentum or direction. Nor does an opportunity, like a new position opening at work, which doesn't suggest what to do with it. Once you choose to deal with the problem or take the opportunity, you can identify a decision, and reframing it this way moves you from a passive state to an active one. Decisions encourage you to consider options and see the situation from different angles, so now you have something actionable to investigate. Get specific, or the problem stays frustrating and hard to unpack. “I'm not happy at work” becomes the question “What would make my job more enjoyable?”, which becomes “I'd like some new challenges.” That doesn't tell you how to solve it, but it gives you a specific criterion: you might find new challenges in your current role or need a new job. Phrase your decision as a question, because questions elicit information and open lines of communication, while statements only explain or declare. AI helps here with two of its strengths, idea generation and communication. Ask it to turn your problem into a decision question. It offered “What steps can I take to address my unhappiness at work and improve my overall job satisfaction?”, and the author edited it to “…and increase my work-life balance?” to reflect what mattered to her.",
    figs: ["refine-steps"],
    terms: [
      ["Problem (DREAMS)", "A situation you're unhappy with. It has no momentum or direction until you turn it into a decision.", "“I don't like my job.”", 0, "refine-steps"],
      ["Decision question", "A problem or opportunity reframed as an active, specific question that invites options.", "“What steps can I take to address my unhappiness at work and increase my work-life balance?”"]
    ],
    cards: [
      { d: 1, q: "Why isn't “I don't like my job” a decision yet?", o: [
        ["It has no momentum or direction", "Correct. It's a problem: a situation you're unhappy with."],
        ["It's an opinion rather than a fact", "Not the reason."],
        ["It hasn't been checked with AI", "AI isn't what makes it a decision."],
        ["It's too personal to analyse", "Personal problems can become decisions."]],
        k: "Problems sit still; decisions move." },
      { d: 1, q: "How should a decision be phrased, according to the course?", o: [
        ["As a question", "Correct. Questions elicit information and open communication."],
        ["As a goal statement", "Statements declare; questions seek answers."],
        ["As a list of options", "Options come later, in Activate."],
        ["As a yes/no choice", "Too narrow; it closes off options."]],
        k: "Decisions are questions." },
      { d: 1, q: "What does reframing a problem as a decision do?", o: [
        ["Moves you from passive to active", "Correct. You're in the driver's seat."],
        ["Hands the problem over to AI to solve", "You stay in the driver's seat."],
        ["Makes the problem disappear", "It doesn't; it makes it workable."],
        ["Guarantees a good outcome", "No process guarantees that."]],
        k: "From stuck to steering." },
      { d: 2, q: "Which two AI strengths does the Refine step lean on?", o: [
        ["Idea generation and communication", "Correct. AI can generate alternative framings and help you word the decision question clearly."],
        ["Spotting biases and fact-checking", "Those come in Manage biases."],
        ["Data analysis and forecasting", "Those come later."],
        ["Memory and personalisation", "Not the two named."]],
        k: "AI helps you word the question." },
      { d: 2, q: "“What would make my job more enjoyable?” becomes “I'd like some new challenges.” What has this added?", o: [
        ["A specific criterion, though not yet a solution", "Correct. New challenges could come in the current role or a new one."],
        ["The final decision to quit and find a new job", "It could be met in the current role or a new one."],
        ["Proof that the current job is the problem", "Not proof."],
        ["A list of options to research", "That's Activate."]],
        k: "Specific criteria, not solutions yet." },
      { d: 2, q: "AI turned “I'm unhappy at work” into a question about job satisfaction. Why did the author edit it to mention work-life balance?", af: "refine-steps", o: [
        ["To reflect what mattered to her", "Correct. AI's draft is a starting point."],
        ["AI's question was grammatically wrong", "It was fine; it just wasn't hers yet."],
        ["Work-life balance is easier to measure", "Not the reason."],
        ["The course requires that exact wording", "No exact wording is required."]],
        k: "Edit AI's draft until it's yours." },
      { d: 3, q: "A new team-lead role opens at your company. How does the course treat this?", o: [
        ["An opportunity to frame as a question", "Correct. Like a problem, it has no direction until you frame a decision."],
        ["It's a decision already, so apply straight away", "An opportunity doesn't tell you what to do."],
        ["It's a problem, so define the stakes and stop", "It isn't a problem, and stopping skips the work."],
        ["It's irrelevant unless you're unhappy", "Opportunities deserve decisions too."]],
        k: "Opportunities need framing too." },
      { d: 3, q: "Your problem: “Our store keeps running out of milk.” Which is the best decision question?", o: [
        ["How can we keep milk in stock without extra waste?", "Correct. Active, specific and open to options."],
        ["Milk keeps running out at our store, and customers are annoyed.", "Still a problem statement."],
        ["Why is our milk supplier so unreliable every single week?", "Assumes the cause, and blames."],
        ["Should we just stop selling milk at the store altogether?", "A narrow yes/no that skips the options."]],
        k: "Specific, active, open." }
    ],
    flips: [
      { d: 2, f: "Turn “I'm unhappy at work” into a decision question, the course's way.", b: "1 Reframe it as a question: “What would make my job more enjoyable?” 2 Get specific: “I'd like some new challenges.” 3 Ask AI to turn the problem into a decision question: “What steps can I take to address my unhappiness at work and improve my job satisfaction?” 4 Edit it to reflect what matters to you: “…and increase my work-life balance?”" }
    ]
  },

  /* ---------------------------------------------------------------- 15 */
  {
    id: "motivation",
    title: "E: Examine your motivation",
    summary: "Your motivation is the driving force behind your actions: it answers why. Why am I unhappy at work? Why does my flat no longer suit my needs? Understanding what truly matters to you lets you make decisions that align with your values, goals and aspirations, avoid mistakes, and choose what contributes to your wellbeing and success. If work-life balance is part of your decision question, your motivation depends on how you define it: for the author it meant more time for friends; for someone else, no work on weekends. AI can better strengthen a decision when it knows why you're solving the problem. Tell it that, for you, work-life balance means more time with friends, and its responses will drive toward that goal. Examining your motivation creates a set of guidelines that help AI respond better in the later DREAMS steps.",
    terms: [
      ["Motivation (DREAMS)", "The driving force behind a decision: why it matters to you, defined in your own terms.", "“For me, work-life balance means more time with friends.”"]
    ],
    cards: [
      { d: 1, q: "What question does motivation answer?", o: [
        ["Why", "Correct. Why does this decision matter to me?"],
        ["What", "What you'll decide comes later."],
        ["When", "Timing isn't motivation."],
        ["How", "How comes with options and practical steps."]],
        k: "Motivation = your why." },
      { d: 1, q: "Why share your motivation with AI?", o: [
        ["Its responses can drive toward your goal", "Correct. It strengthens decisions better when it knows your why."],
        ["It's a legal requirement for AI tools", "Not a requirement."],
        ["So it can make the decision for you", "The decision stays yours."],
        ["It needs it to avoid hallucinating", "Motivation doesn't prevent hallucination."]],
        k: "Give AI your why." },
      { d: 2, q: "Two people both want “work-life balance”. Why might they need different options?", o: [
        ["They define it differently", "Correct. More time for friends, or no work on weekends: the why shapes the right options."],
        ["One of them has misunderstood the phrase", "Both can be right; meanings differ."],
        ["AI gives random answers each time", "Not the reason."],
        ["Work-life balance can't be defined", "It can, by each person."]],
        k: "Same words, different whys." },
      { d: 2, q: "What does examining motivation create for later DREAMS steps?", o: [
        ["Guidelines that help AI respond better", "Correct. Knowing your why gives AI guidelines, so its later suggestions fit what matters to you."],
        ["A final shortlist of options to choose from", "Options come in Activate."],
        ["A record of every bias you have", "That's Manage biases."],
        ["A contract with your stakeholders", "Not the output."]],
        k: "Your why guides every later step." },
      { d: 2, q: "How does knowing your motivation improve a decision?", o: [
        ["It aligns the choice with your values and goals", "Correct. And helps you avoid mistakes."],
        ["It removes the need to research options in any depth", "You still research."],
        ["It makes the decision faster but riskier", "Not the claim."],
        ["It guarantees others will support you", "Stakeholders still need bringing along."]],
        k: "Aligned with what matters." },
      { d: 3, q: "A client asks for “a smarter building”. Before asking AI for options, what should you pin down?", o: [
        ["Why they want it: comfort, energy, compliance?", "Correct. Different whys lead to very different systems."],
        ["Which vendor offers the most advanced features", "That jumps to options."],
        ["The cheapest system that meets the brief", "Cheapest assumes a why that may not be theirs."],
        ["How smart the building next door is", "Comparison isn't motivation."]],
        k: "Find the why behind the request." },
      { d: 3, q: "Why does motivation matter especially when you're working with AI?", o: [
        ["Without your why, AI aims at a generic goal", "Correct. It doesn't know you unless you tell it."],
        ["AI already knows your motivation from past chats", "Don't assume it knows."],
        ["AI refuses to answer until motivation is given", "It answers anyway, just generically."],
        ["Motivation makes AI's answers shorter", "Not the point."]],
        k: "No why, generic advice." }
    ],
    flips: [
      { d: 2, f: "In DREAMS, what's the difference between the decision question and the motivation?", b: "The decision question is what you're deciding: “What steps can I take to address my unhappiness at work and increase my work-life balance?” The motivation is why, and what the key words mean to you: “For me, work-life balance means more time with friends.” The why guides AI, and your choices, in every later step." }
    ]
  },

  /* ---------------------------------------------------------------- 16 */
  {
    id: "options",
    title: "A: Activate your options",
    summary: "Now you're at a busy intersection with many possible paths. Examining your options lets you weigh pros and cons and different outcomes before choosing a direction, and AI is terrific at it: a super-smart research assistant, a search engine on steroids that sifts mountains of data, spots patterns and doesn't get tired or bored. Activating options has two parts. First, generate and narrow: partner with AI to find options, then sift its responses for the ones that best suit you. AI responds to your instructions, but it needs you to direct it toward options that speak to your motivation. The author asked for options to increase her work-life balance, then for options that prioritise more time with friends, which added two she hadn't considered: optimising chores and errands, and using vacation days to deepen relationships (her boss had noticed she wasn't taking hers). Second, research the shortlist. For each option ask: what are the benefits? and what would I have to do to get them? AI said using vacation days could reduce stress, build closer relationships and help her disconnect from work, which matched her motivation. But knowing something is possible doesn't mean it's practical for you: the practical steps were planning the days in advance and keeping that time focused and disconnected from work. Then reflect: do I want to take these steps?",
    figs: ["options-funnel"],
    terms: [
      ["Activate your options", "The DREAMS step where you generate options with AI, narrow them to your motivation, and research each one's benefits and practical steps.", "Shortlisting “use vacation days with friends”, then asking what that would take.", 0, "options-funnel"]
    ],
    cards: [
      { d: 1, q: "In Activate your options, what's AI's role and what's yours?", o: [
        ["AI generates; you sift and direct", "Correct. Together you find strategies you might not have considered."],
        ["You do everything; AI checks spelling", "That wastes AI's strengths."],
        ["AI does everything; you approve it", "You actively direct and sift."],
        ["You generate; AI picks the winner", "Reversed, and AI doesn't pick."]],
        k: "AI widens; you narrow." },
      { d: 1, q: "Which two questions does the course ask about each shortlisted option?", af: "options-funnel", o: [
        ["Benefits, and what I'd have to do", "Correct. What are the benefits, and what would I have to do to get them?"],
        ["What does it cost, and who else has tried it?", "Useful, but not the two."],
        ["What could go wrong, and who's to blame?", "Closer to a pre-mortem, and blame isn't useful."],
        ["Is it popular, and is it new?", "Not the two."]],
        k: "Upside, then practicality." },
      { d: 2, q: "The author's first AI list of work-life balance options was broad. What got her more creative ideas?", o: [
        ["Tying the request to her motivation", "Correct. “Options that increase my time with friends” produced chores and errands, and vacation days."],
        ["Asking AI to choose the best option for her", "Choosing is hers."],
        ["Asking the same question again and again", "Repetition doesn't add direction."],
        ["Switching to a different AI tool", "The prompt, not the tool, was the fix."]],
        k: "Direct AI with your why." },
      { d: 2, q: "AI suggested benefits like stress reduction and closer relationships. What did the author do next?", o: [
        ["Asked what she'd have to do to get those benefits", "Correct. Possible isn't the same as practical."],
        ["Booked the vacation days straight away with her boss", "She checked the practical steps first."],
        ["Dropped the option as too good to be true", "It matched her motivation."],
        ["Asked AI for even more benefits", "Benefits weren't the gap."]],
        k: "From upside to steps." },
      { d: 2, q: "Which new option did AI suggest once the author focused on more time with friends?", o: [
        ["Using vacation days to deepen relationships", "Correct. Optimising chores and errands was the other."],
        ["Asking for a pay rise to fund extra outings", "Not suggested."],
        ["Moving closer to where her friends live", "Not suggested."],
        ["Quitting her job to freelance", "Not suggested."]],
        k: "Motivation-led prompts find new paths." },
      { d: 3, q: "Why does the course warn that “knowing something is possible doesn't mean it's practical for you”?", o: [
        ["The steps may not fit your life", "Correct. Planning days in advance and disconnecting from work are steps you must be willing to take."],
        ["Practical options are always the cheapest", "Not the point."],
        ["AI's lists of benefits are usually invented", "Not the warning."],
        ["Possibilities should never be researched", "They should; practically."]],
        k: "Ask what it would take, then if you'd do it." },
      { d: 3, q: "For a store's stock-out problem, AI lists 15 options. What's the course's next move?", o: [
        ["Narrow to the ones that fit your why", "Correct. Then research the benefits and steps of each."],
        ["Pick the first option, since AI ranks them", "Order isn't a ranking you can trust."],
        ["Try all 15 at once to see which works", "Wasteful and confusing."],
        ["Ask AI to pick one and implement it", "You narrow and decide."]],
        k: "Many options in, a few that fit out." },
      { d: 3, q: "Why does the course compare AI here to “a search engine on steroids”?", o: [
        ["It sifts data fast and never tires", "Correct. It churns through information without getting bored."],
        ["It replaces your judgement about options", "Your role is to sift and direct."],
        ["It always finds the single best answer", "It finds options; you judge."],
        ["It only searches the most recent news", "Not the point."]],
        k: "Tireless breadth; your judgement." }
    ],
    flips: [
      { d: 2, f: "Activate your options: the two parts and the questions to ask.", b: "Part 1, generate and narrow: ask AI for options, then for options that serve your specific motivation, and sift them down to a few that feel right. Part 2, research: for each, ask “What are the benefits?” and “What would I have to do to get them?”, then reflect on whether you want to take those steps." }
    ]
  },

  /* ---------------------------------------------------------------- 17 */
  {
    id: "dm-biases",
    title: "M: Manage your biases, and AI's",
    summary: "We all rely on well-worn mental pathways. These shortcuts, built on assumptions and judgements from past experience, can become cognitive biases: habits and patterns of flawed thinking that affect understanding, actions and decisions unconsciously. They're activated involuntarily, so you need awareness to thwart them explicitly. Three common thinking mistakes: optimism bias, thinking things will work out better than they will, so you overlook or underestimate negative outcomes; confirmation bias, finding information that confirms a favourite hypothesis and missing opposing information; and the planning fallacy, underestimating how long a task takes even when you've done it before, so you budget time poorly. A straightforward counter is to direct AI to examine the biases you're most concerned about. The author asked how to combat optimism bias in her plan to spend vacation days with friends, and got 10 tips, including setting realistic expectations and thinking about obstacles such as scheduling conflicts or budget constraints. The aha: she didn't actually know whether her friends would be willing to spend those days with her, so she asked them. Repeat the question for each bias. AI is error-prone too, and its three most common flaws are outdated, incomplete and inaccurate information. Ask: how up to date is the information you gave me? Where might it be incomplete? How might it go wrong? Where might there be errors? AI said its advice depended on flexible work policies, that it had repeated some advice, and that it might be out of date. Some of these are errors of omission, which you fix by giving AI more specific information; others are imperfections in its training. Her company requires a plan to cover her workload before time off, which makes spur-of-the-moment leave harder and affects whether the decision will work. Turn both kinds of finding into action steps.",
    figs: ["dm-bias-check"],
    terms: [
      ["Optimism bias", "Thinking things will work out better than they actually will, so negative outcomes get overlooked or underestimated.", "Assuming your friends will all be free during your vacation days.", 0, "dm-bias-check"],
      ["Planning fallacy", "Underestimating how long a task will take, even one you've done before.", "Budgeting a weekend for a move that takes a week."],
      ["Cognitive bias", "A habit or pattern of flawed thinking from mental shortcuts, which works unconsciously and is triggered involuntarily.", "Relying on how the last project went without checking what's different."],
      ["Error of omission (AI)", "An AI mistake caused by missing information, fixed by giving AI more specific detail.", "Advice that assumes flexible leave when your workplace requires a cover plan."]
    ],
    cards: [
      { d: 1, q: "What is the planning fallacy?", o: [
        ["Underestimating how long tasks take", "Correct. Even tasks you've done before, so time gets budgeted poorly."],
        ["Planning too far ahead to stay flexible", "Not it."],
        ["Refusing to plan because plans fail", "Not it."],
        ["Overestimating the risks in a plan", "Not it."]],
        k: "It always takes longer than you think." },
      { d: 1, q: "Which three common AI flaws does the course name?", af: "dm-bias-check", o: [
        ["Outdated, incomplete, inaccurate", "Correct. AI's information can be out of date, incomplete or simply wrong."],
        ["Hallucinated, plagiarised, private", "Real concerns, but not the three named here."],
        ["Slow, expensive, unreliable", "Not the three."],
        ["Biased, rude, repetitive", "Not the three."]],
        k: "Old, partial, wrong." },
      { d: 1, q: "Which human bias leads you to overlook or underestimate negative outcomes?", o: [
        ["Optimism bias", "Correct. Optimism bias makes good outcomes feel likelier, and bad ones smaller, than they are."],
        ["Confirmation bias", "That's about finding what you look for."],
        ["Availability bias", "That's about memorable examples."],
        ["Planning fallacy", "That's about time estimates."]],
        k: "Sunny outlook, hidden downsides." },
      { d: 2, q: "Why do cognitive biases need deliberate effort to thwart?", o: [
        ["They work unconsciously and kick in involuntarily", "Correct. Awareness is the first defence."],
        ["They can be switched off once you know their names", "Knowing the names isn't enough."],
        ["They only affect people with little experience", "They affect everyone; experience builds the well-worn pathways."],
        ["AI removes them, so we only need to check AI", "AI has its own flaws."]],
        k: "Biases run on autopilot." },
      { d: 2, q: "Asked to help combat optimism bias, AI suggested thinking about obstacles. What was the author's aha?", o: [
        ["She didn't know if her friends were free", "Correct. Thinking about obstacles exposed an untested assumption, so she checked it with her friends."],
        ["Her vacation days had already expired", "Not it."],
        ["She should cancel the plan entirely", "She checked instead of cancelling."],
        ["AI was being too optimistic itself", "Not it."]],
        k: "Test the rosy assumption with real people." },
      { d: 2, q: "AI's vacation advice assumed flexible work policies, but her company needs a cover plan before leave. What kind of AI flaw is that?", o: [
        ["Incomplete: give AI more detail", "Correct. An error of omission: it didn't know her company's policy, so tell it."],
        ["A hallucination: AI made up a fake policy", "It didn't invent anything; it lacked context."],
        ["No flaw; flexible policies are universal", "They aren't."],
        ["A deliberate bias toward employers", "Not deliberate."]],
        k: "Missing context? Supply it." },
      { d: 2, q: "Which question checks AI for outdated information?", o: [
        ["How up to date is the information you gave me?", "Correct. Asking how current the information is exposes whether AI is relying on old data."],
        ["Can you make your answer sound more confident?", "Tone isn't currency."],
        ["Can you list more options for me?", "Not a check."],
        ["What would you do in my position?", "Not a check."]],
        k: "Ask how current it is." },
      { d: 3, q: "Your team estimates a cabling job at three days “because we did one last month.” Which bias should you probe?", o: [
        ["The planning fallacy", "Correct. Having done it before doesn't stop us underestimating."],
        ["Representation bias", "That's one of GenAI's data biases."],
        ["Authority bias", "No authority is invoked."],
        ["Cultural bias", "Not relevant here."]],
        k: "“We've done it before” still underestimates." },
      { d: 3, q: "After AI lists its own possible flaws, what does the course say you should do?", o: [
        ["Turn findings into action steps for you and AI", "Correct. Give it more detail, check sources, adjust the plan."],
        ["Accept the advice now that flaws are disclosed", "Disclosure doesn't fix them."],
        ["Ask a second AI to rate the first", "Doesn't fix anything."],
        ["Discard the AI's advice entirely", "That's cynicism."]],
        k: "Findings become actions." }
    ],
    flips: [
      { d: 2, f: "Manage biases: what do you check in yourself, and what do you check in AI?", b: "Yourself: direct AI to help you combat the biases you're most worried about, such as optimism bias, confirmation bias and the planning fallacy, then act on its tips (the author asked her friends if they were free). AI: ask how up to date its information is, where it might be incomplete, how it might go wrong and where there might be errors; fix gaps by giving it more specific detail." }
    ]
  },

  /* ---------------------------------------------------------------- 18 */
  {
    id: "select",
    title: "S: Select your path, a uniquely human moment",
    summary: "Deciding is a uniquely human moment: only you can decide what's right for you, and AI, for all its help, can't make the decision for you. Ideally the problem solving leaves one clear best path. For the author, using vacation days to strengthen relationships was a big win: it encouraged her to actually take her days, gave her dedicated time with the people she cares about, and kept her job just as it was. But you might still have more than one good option. With a flat that's too small for a growing family, renovating could be cheaper, while moving could be closer to work and in a better school district. Then go back to your motivation, here “What's best for my family?”, and look at how each option fits it. Different people could answer differently: there's no single right answer, but there's likely a right decision for you. AI may know a lot, but not how you want to live your life, what your aspirations are, or what's best for you. Record your choice, and you have a record of the whole decision process.",
    cards: [
      { d: 1, q: "Why does the course call the S step a uniquely human moment?", o: [
        ["AI can't know what's right for your life", "Correct. It doesn't know your aspirations or how you want to live."],
        ["Humans are always more accurate than AI", "Not the reason."],
        ["It's the step with the most paperwork", "Not the reason."],
        ["AI is banned from making decisions", "Not a ban; a limitation."]],
        k: "Only you can choose your path." },
      { d: 1, q: "After working through DREAMS, you still have two good options. What does the course suggest?", o: [
        ["Go back to your why", "Correct. For the flat: which option is best for my family?"],
        ["Start the whole framework again from scratch", "Revisit the motivation, not everything."],
        ["Choose whichever option is cheaper", "Cost may not be your why."],
        ["Ask AI to pick one at random", "The choice stays yours, and randomness ignores your why."]],
        k: "Tie-breaker: your motivation." },
      { d: 2, q: "For a growing family, renovating might be cheaper, but a new flat might be closer to work and a better school. How should they decide?", o: [
        ["By what's best for their family", "Correct. Test each option against the motivation."],
        ["Pick the move because schools matter most to everyone", "That assumes everyone's why."],
        ["Pick the renovation because it costs less", "Cost is one factor, not the motivation."],
        ["Ask AI which option most families choose", "Popularity isn't your right decision."]],
        k: "Weigh options against the why." },
      { d: 2, q: "What's the course's view on whether a decision has one right answer?", o: [
        ["No single right one, but one right for you", "Correct. Different people can rightly choose differently."],
        ["Yes: the answer with the most data behind it", "Data informs; your life decides."],
        ["Yes: whatever AI recommends after analysis", "AI can't decide for you."],
        ["No: all decisions are equally good", "Some fit you far better."]],
        k: "Right for you beats right in general." },
      { d: 3, q: "Why was using vacation days a clear winner for the author?", o: [
        ["It met her why and kept her job as it was", "Correct. More time with people she cares about, and she'd actually use her days."],
        ["AI ranked it first among all the options", "AI doesn't rank for her."],
        ["It was the cheapest option available", "Cost wasn't the point."],
        ["Her boss ordered her to take leave", "The boss had only commented."]],
        k: "A clear winner fits the why with few costs." },
      { d: 3, q: "A sponsor asks GenAI which of two project options to approve, and plans to go with its answer. What's the issue?", o: [
        ["The choice belongs to people who know the goals", "Correct. AI can inform it, not own it."],
        ["GenAI is always wrong about the project options", "Not always; it just can't own the choice."],
        ["Sponsors shouldn't be involved in decisions", "They should."],
        ["Two options are too few to compare", "Two is fine."]],
        k: "Accountable people decide." }
    ],
    flips: [
      { d: 2, f: "What should you do when DREAMS leaves you with two good options?", b: "Go back to your motivation and ask how well each option fits it. For the growing family's flat, renovating may be cheaper while moving may be closer to work and a better school district; the question is which is best for this family. Different people may choose differently, and that's fine: there's no single right answer, but there's likely a right one for you." }
    ]
  },

  /* ---------------------------------------------------------------- 19 */
  {
    id: "premortem",
    title: "Pre-mortem: learn from failure in advance",
    summary: "Once your decision is made, strength-test it before you execute. Failure is a good teacher: examining why something went wrong shows you what to improve. A pre-mortem imagines that your decision has already failed, so you can identify what might go wrong and strengthen your path: you look back from the future to spot problems before they occur. AI helps because it can quickly list the items that, if not thought through, could make the decision fail, along with preventive measures. Asked for a pre-mortem on using vacation days with family and friends, AI gave generic answers, like lack of personal time (schedule some “me time”) and unrealistic expectations (be flexible and stay positive about minor setbacks). Next, decide which items concern you and remove the rest. Then look for the gaps, because AI gives generic ideas and doesn't know you: it didn't know that some of her friends have small children and might not want to take vacation time with her. She added that pitfall, with a plan for spending time with friends who have family obligations. Finally, ask AI to help you avoid the gaps you've found, and note how you'll close them.",
    figs: ["premortem-futurecast"],
    terms: [
      ["Pre-mortem", "Imagining that a decision has already failed, so you can identify what might go wrong and set up safeguards.", "“It's a year from now and the supplier switch failed. Why?”", 0, "premortem-futurecast"],
      ["Post-mortem", "A review after something has failed, to learn why. A pre-mortem does this in advance.", "A lessons-learned review after a troubled commissioning.", 1]
    ],
    cards: [
      { d: 1, q: "What is a pre-mortem?", af: "premortem-futurecast", o: [
        ["Imagining it failed, to find why early", "Correct. You look back from the future to spot problems before they happen."],
        ["Reviewing a project after it has failed", "That's a post-mortem."],
        ["Asking AI to predict whether you'll succeed", "Not prediction: imagined failure."],
        ["Listing the benefits you expect from a decision", "That's closer to futurecasting."]],
        k: "Fail on paper first." },
      { d: 1, q: "Why does the course call failure a good teacher?", o: [
        ["Examining why things went wrong shows what to improve", "Correct. Understanding why things fail shows what to change, ideally before the failure happens."],
        ["Failure is unavoidable in projects, so you might as well accept it", "Fatalism isn't learning."],
        ["It shows clearly which people were to blame for problems", "Blame isn't learning."],
        ["Failing often builds confidence for the next attempt", "Not the reason."]],
        k: "Learn from failure, ideally before it happens." },
      { d: 2, q: "AI's pre-mortem flagged “lack of personal time” and “unrealistic expectations”. What did the author do next?", o: [
        ["Kept what concerned her and looked for gaps", "Correct. AI's list was generic."],
        ["Asked AI to make the final call on whether to proceed", "Not its job."],
        ["Accepted the whole list as complete and correct", "AI doesn't know her life."],
        ["Cancelled the decision to be on the safe side", "The point is to strengthen it."]],
        k: "Filter, then fill the gaps." },
      { d: 2, q: "What gap did the author find that AI's pre-mortem missed?", o: [
        ["Friends with small children may not join her", "Correct. So she planned for friends with family obligations."],
        ["Her boss might not approve her vacation days", "Not the gap she named."],
        ["Travel prices might rise in summer", "Not it."],
        ["AI's list was out of date", "Not it."]],
        k: "Add what only you know." },
      { d: 2, q: "Why do you need to add your own items to AI's pre-mortem?", o: [
        ["AI's ideas are generic; it doesn't know you", "Correct. AI doesn't know your situation, so add the risks only you can see."],
        ["Pre-mortems must be done entirely by hand", "AI helps; you complete it."],
        ["AI only lists technical failures", "Not the issue."],
        ["AI refuses to list failures", "It lists them readily."]],
        k: "Generic list + your context." },
      { d: 3, q: "You're about to commit to a new supplier for the campus store. How would you run a pre-mortem with AI?", o: [
        ["Ask why it failed a year on, then add what AI missed", "Correct. Then ask AI to help close those gaps."],
        ["List the benefits and share them with your manager", "That's not imagining failure."],
        ["Ask AI if the supplier is reliable and stop there", "That's a check, not a pre-mortem."],
        ["Wait for the first late delivery, then review", "That's after the fact."]],
        k: "Imagine the failure, find the causes, add safeguards." },
      { d: 3, x: 1, q: "How does a pre-mortem differ from a typical risk register review?", o: [
        ["It starts from imagined failure and works backwards", "Correct. That framing surfaces risks people hesitate to raise."],
        ["It only covers risks that the sponsor already knows", "It's meant to surface the unknown ones."],
        ["It replaces the need for any risk management", "It complements risk management."],
        ["It's only done after the project has failed", "That's a post-mortem."]],
        k: "“It failed. Why?” is a different question from “what might go wrong?”" }
    ],
    flips: [
      { d: 2, f: "Run a pre-mortem with AI in four moves.", b: "1 Ask AI to conduct a pre-mortem on your decision: imagine it failed, and list why, with preventive measures. 2 Keep the items that concern you; remove the rest. 3 Add the gaps AI missed, because it doesn't know you (like friends with small children). 4 Ask AI to help you avoid those gaps, and note how you'll close them." }
    ]
  },

  /* ---------------------------------------------------------------- 20 */
  {
    id: "dm-stakeholders",
    title: "Stakeholders: bring people with you",
    summary: "Who else is affected by your decision? It may feel like yours alone, but its success often depends on how other people receive it, and their cooperation makes success more or less likely. So far you've looked at the decision only from your own perspective; acting on it means working with others, so imagine a positive conversation with them. There are two parts. Your part: list the people who are affected by the decision or play a role in its outcome, and what you know about each that matters here. The author's list: her brother, who uses his vacation time to be with his wife and children; her husband, who doesn't have a flexible work schedule; her best friend, an avid hiker who travels the world to tour national parks; and her boss, who'd commented that she wasn't using her vacation days. AI's part: share those details and ask for two positive ways to share your decision with each person. For her brother, AI suggested telling him she admires that he spends his vacation with his family and wants to use some of her own time off to see more of him, and offering options from a weekend away to joining a family dinner for just a few hours. Easy, flexible options make it more likely he can say yes, which helps the decision succeed.",
    figs: ["stakeholder-prep"],
    terms: [
      ["Stakeholder (decision)", "Anyone affected by your decision or who plays a role in whether it succeeds.", "A brother who spends his holidays with his young family.", 0, "stakeholder-prep"]
    ],
    cards: [
      { d: 1, q: "Why does the course say a decision isn't yours alone?", o: [
        ["Its success depends on how others receive it", "Correct. Their cooperation raises or lowers its chances."],
        ["Other people must approve every decision you make", "Not approval; cooperation."],
        ["AI shares responsibility for decisions it informs", "It doesn't."],
        ["Decisions are only valid if made by a group", "Not the point."]],
        k: "Others' cooperation makes or breaks it." },
      { d: 1, q: "In the stakeholder step, what's your part and what's AI's?", af: "stakeholder-prep", o: [
        ["You list people and facts; AI drafts positive asks", "Correct. Two suggestions for each person."],
        ["AI lists the people; you write all the messages yourself", "Reversed: you know your people."],
        ["You do it all yourself; AI isn't useful at this stage", "AI helps prepare the conversations."],
        ["AI contacts your stakeholders and negotiates for you", "You have the conversations."]],
        k: "You know them; AI helps you ask." },
      { d: 2, q: "The author's brother spends his vacation time with his wife and children. What did AI suggest?", o: [
        ["Admire it; offer short, flexible options", "Correct. From a weekend away to joining a family dinner for a few hours."],
        ["Ask him to choose between his family and her", "That would set up a conflict."],
        ["Skip asking him, since he's clearly too busy", "That assumes the answer."],
        ["Insist on a week-long trip together", "Inflexible, so harder to say yes to."]],
        k: "Respect their situation; make yes easy." },
      { d: 2, q: "Why do flexible options matter when you ask stakeholders for support?", o: [
        ["They make a yes easier", "Correct. Which makes the decision more likely to succeed."],
        ["They remove the need to explain your why", "Sharing your reasoning still helps."],
        ["They let you avoid hard conversations", "You still have the conversation."],
        ["They make you look less decisive", "Not the effect."]],
        k: "Lower the cost of saying yes." },
      { d: 3, q: "You plan to move a store's delivery window to early morning. Applying the course, what comes before asking AI for talking points?", o: [
        ["List who's affected and what you know about each", "Correct. Staff, the supplier's drivers, security, cleaners, and so on."],
        ["Email everyone the new times straight away and wait for replies", "That skips preparation."],
        ["Only tell the supplier, since they deliver", "Staff and others are affected too."],
        ["Ask AI to decide who needs to know", "You know your stakeholders best."]],
        k: "Map the people first." },
      { d: 3, q: "The author's boss had commented that she wasn't using her vacation days. Why list him as a stakeholder?", o: [
        ["He plays a role in whether the plan works", "Correct. Leave needs his support, and a cover plan."],
        ["He's the most senior, so his view matters most", "Seniority isn't the reason; his role is."],
        ["Bosses must approve every personal decision", "Not the reason."],
        ["He'll be jealous of her time off", "An assumption, not a reason."]],
        k: "Include anyone who shapes the outcome." }
    ],
    flips: [
      { d: 2, f: "Prepare stakeholders for your decision: the two parts.", b: "Your part: list everyone affected by the decision or who plays a role in its outcome, and what you know about each that bears on it. AI's part: share those details and ask for two positive ways to share your decision with, or ask something of, each person, so their support becomes more likely." }
    ]
  },

  /* ---------------------------------------------------------------- 21 */
  {
    id: "futurecast",
    title: "Futurecast: what becomes possible?",
    summary: "If your decision works out, what becomes possible then? The decision will soon have a life of its own, so look ahead to see how it matches your long-term goals; feeling confident you can create the future you want helps you move into it well. Asking AI about the future has two benefits. First, it can draw on its vast knowledge and others' experience to show what good may come of your decision. Second, once you know the benefits, you can watch for signs of them materialising. The author asked what the long-term impact of taking vacation days with friends and family would be; AI pointed to improved mental and physical health and more creativity and productivity, which spoke to her original motivation of a more balanced life. Then she asked what signs would show it: AI suggested watching whether her bonds with friends and family feel closer, and whether work and personal life feel more in harmony. Tracking those signs confirms the decision is succeeding, motivates her to stick with it, and tells her when a new decision is needed: if work piles up on her days off, she might plan more, or change course. Three steps: ask AI what the future holds for your decision; ask what signs will show the good possibilities materialising; and ask how to track and document those signs, your decision's success metrics.",
    figs: ["premortem-futurecast"],
    terms: [
      ["Futurecast", "Looking ahead with AI at what becomes possible if a decision works out, and which signs will show it's succeeding.", "Tracking whether bonds with friends feel closer after taking leave together.", 0, "premortem-futurecast"],
      ["Success signs", "Observable indicators that a decision's benefits are materialising, used to track it and know when to decide again.", "Feeling better balance between work and personal life."]
    ],
    cards: [
      { d: 1, q: "What question does futurecasting start with?", o: [
        ["If this works out, what becomes possible?", "Correct. Futurecasting imagines success first, then looks for the signs that it's happening."],
        ["How soon can we make the actual decision?", "Not the question."],
        ["If this fails, who will be affected?", "Closer to a pre-mortem."],
        ["What would a competitor do instead?", "Not the question."]],
        k: "Imagine success, then look for it." },
      { d: 1, q: "What are the two benefits of asking AI about the future?", o: [
        ["Learn the upside, then watch for its signs", "Correct. What good may come, and how you'll know it's arriving."],
        ["Predict the future exactly, then relax", "No exact prediction."],
        ["Find the risks, then blame the right people", "Not the aim."],
        ["Save time, then skip the decision", "Not the aim."]],
        k: "Know the upside; track the signs." },
      { d: 2, q: "AI said time with friends could improve health, creativity and productivity. What did the author ask next?", o: [
        ["What signs would show it's working?", "Correct. So she could track her decision's success."],
        ["How to tell her boss she'll be more productive", "Not her next step."],
        ["Whether she should take even more days off", "Not her next step."],
        ["Which friends are the most creative", "Not her next step."]],
        k: "Benefits → signs → tracking." },
      { d: 2, q: "Which signs did AI suggest for tracking the vacation decision?", af: "premortem-futurecast", o: [
        ["Closer bonds and better work-life harmony", "Correct. The signs matched the motivation behind the decision: stronger bonds and better balance."],
        ["A bigger social media following and more likes", "Not a sign of her goal."],
        ["Fewer emails waiting in her inbox each morning", "Not suggested."],
        ["More money saved each month for future travel", "Not her goal."]],
        k: "Signs should match the motivation." },
      { d: 2, q: "What should you do if the signs show the decision isn't working?", o: [
        ["Make a new decision", "Correct. If work piles up on her days off, she might plan more or change course."],
        ["Wait it out, since all decisions are final", "Decisions can be revisited."],
        ["Stop tracking so it feels better", "Ignoring the signs doesn't help."],
        ["Blame the AI that suggested it", "Not useful."]],
        k: "Signs tell you when to decide again." },
      { d: 3, q: "You've decided to trial a pre-order system at the store. Futurecasting with AI, which three steps follow?", o: [
        ["Possibilities, signs, then tracking", "Correct. What becomes possible, which signs will show it, and how to track them."],
        ["Ask what could fail, who to blame, how to stop", "That's a pre-mortem gone wrong."],
        ["Ask for a forecast of next year's exact sales", "Not the three steps."],
        ["Ask AI to run the trial, report and decide", "AI doesn't run your trial or decide."]],
        k: "Upside, indicators, tracking." },
      { d: 3, q: "How do a pre-mortem and a futurecast work together?", o: [
        ["One guards against failure; the other tracks success", "Correct. Both strengthen the decision after you've made it."],
        ["Futurecasts replace pre-mortems when you're using AI", "They complement each other."],
        ["They're the same exercise with different names", "One imagines failure, the other success."],
        ["Both are done before defining the problem", "Both come after selecting."]],
        k: "Imagine failure and success." }
    ],
    flips: [
      { d: 2, f: "Futurecast your decision with AI in three steps.", b: "1 Ask AI what becomes possible if the decision works out (for the author: better mental and physical health, more creativity and productivity). 2 Ask what signs will show those possibilities materialising (closer bonds, better harmony between work and life). 3 Ask how to track those signs and document progress; if they don't appear, make a new decision." }
    ]
  },

  /* ---------------------------------------------------------------- 22 */
  {
    id: "past-decisions",
    title: "Learn from past decisions",
    summary: "Your new skills apply beyond one decision. Look back at a few high-stakes decisions you've made, such as which car to buy, whether to move to a new city for a job, or whether to go to grad school, and chart their strengths and weaknesses. For her car, the author spent most of her time researching the safest and most fuel-efficient cars within her budget: a strength. But she never took the car when the whole family travelled together, because it couldn't fit the kids and the dog: a weakness. Then compare the weaknesses with the DREAMS steps and ask which one would have helped. For the car, it was E, examining motivation: she'd thought about budget, but never wrote down the most obvious reason, that the car was meant to benefit the family, for family road trips. Add that step to a DREAMS column in your chart. That's how you learn from your past to improve your future.",
    figs: ["past-chart"],
    cards: [
      { d: 1, q: "What two columns does the course's past-decision chart start with?", af: "past-chart", o: [
        ["Strengths and weaknesses", "Correct. Then a third column for the DREAMS step that would have helped."],
        ["Risks and opportunities", "Not this chart."],
        ["Costs and benefits", "Close to a pro/con, but not this chart."],
        ["Facts and opinions", "That's PIQPACC's Conclusions."]],
        k: "What went well, what didn't, which step helps." },
      { d: 1, q: "What was the weakness in the author's car decision?", o: [
        ["Too small for family trips", "Correct. It couldn't fit the kids and the dog."],
        ["It was more expensive than her budget", "Budget was a strength."],
        ["It used too much fuel on long trips", "Fuel efficiency was a strength."],
        ["It wasn't safe enough for the kids", "Safety was a strength."]],
        k: "Good research, missing why." },
      { d: 2, q: "Which DREAMS step would have improved the author's car decision?", o: [
        ["Examine motivation: the car was for the family", "Correct. Her real why was family road trips."],
        ["Manage biases: she was too optimistic about price", "Price was handled well."],
        ["Activate options: she should have seen more cars", "Options weren't the gap."],
        ["Select: she should have bought two cars", "Not the lesson."]],
        k: "The missing step was E." },
      { d: 2, q: "Why compare a past decision's weaknesses against the DREAMS steps?", o: [
        ["To find which step would have helped", "Correct. So you strengthen it next time."],
        ["To decide whether to undo the decision", "Not the aim."],
        ["To prove the past decision was right", "The aim is learning, not proof."],
        ["To work out who was to blame", "Blame isn't the aim."]],
        k: "Map weaknesses to steps." },
      { d: 3, q: "Looking back, a fit-out you ran over-ran because you assumed the trades would be available when needed. Which DREAMS step should you strengthen next time?", o: [
        ["Manage biases: optimism and the planning fallacy", "Correct. And probe availability as an assumption."],
        ["Refine: the decision question was too specific", "Not the gap."],
        ["Define: the stakes were too low to plan for", "They weren't low."],
        ["Select: you should have let AI choose", "Never the fix."]],
        k: "Rosy assumptions point to Manage biases." },
      { d: 3, q: "What does reviewing past decisions add to DREAMS?", o: [
        ["Your own pattern of strengths and gaps", "Correct. You learn which steps you tend to need most."],
        ["A way to change decisions already made", "It's for future decisions."],
        ["Proof that past choices were mistakes", "Strengths count too."],
        ["A replacement for the six steps", "It strengthens them."]],
        k: "Know your own decision habits." }
    ],
    flips: [
      { d: 2, f: "Build the past-decision chart.", bf: "past-chart", b: "Pick a few high-stakes past decisions (a car, a move, grad school). Strengths: what you're proud of in how you decided. Weaknesses: where your decision-making could have been better. DREAMS: which step would have helped. For the author's car, safety, fuel economy and budget were strengths; it was too small for family trips because she skipped Examine." }
    ]
  },

  /* ---------------------------------------------------------------- 23 */
  {
    id: "everyday",
    title: "Everyday tools: pro/con, data and three stories",
    summary: "Three decision strategies you can use with AI for everyday decisions. Pro/con analysis lists the positives and negatives of a decision, either a single one (“Should I buy a hybrid car?”) or between options (“Which hybrid should I buy?”). Laying out upsides and downsides helps you think about your needs and motivations, and leads to further questions and research; ask AI to “make a pro/con list for buying a hybrid car” and note your top two aha moments. Data analysis: collecting information isn't the same as making meaning of it, and interpreting data is a key decision skill that AI does quickly. The author uploaded survey data on how hybrid cars perform in snow and asked AI to pull key insights from it. Storytelling: stories organise facts and data into a narrative that shows how the pieces fit together, and our brains are attuned to them. Ask AI for three short stories about the decision, one that works out well, one neutral and one that fails: a scenario analysis showing the different ways a decision could play out. The author's hybrid stories changed her thinking: she hadn't realised a heavy battery pack can reduce ground clearance, which can be a problem on steep inclines. The course closes by reminding you to always start with a clear definition of your problem, which guides AI to the most relevant advice, and to keep the momentum going on new problems.",
    figs: ["three-tools"],
    terms: [
      ["Pro/con analysis", "A list of a decision's positives and negatives, for a single choice or between options.", "Pros and cons of buying a hybrid car.", 0, "three-tools"],
      ["Scenario analysis", "Seeing how a decision might play out in different ways, such as stories that end well, neutrally and poorly.", "Three stories of owning a hybrid in a snowy, hilly town."]
    ],
    cards: [
      { d: 1, q: "Which tool organises a decision into positive and negative viewpoints?", o: [
        ["Pro/con analysis", "Correct. A pro/con analysis lists a decision's positives and negatives side by side."],
        ["Scenario analysis", "That's the three stories."],
        ["Data analysis", "That pulls insights from data."],
        ["Pre-mortem", "That imagines failure."]],
        k: "Pros and cons: two viewpoints." },
      { d: 1, q: "What does asking AI for three stories (well, neutral, poorly) give you?", af: "three-tools", o: [
        ["A scenario analysis", "Correct. Different ways the decision could play out."],
        ["A guaranteed best choice", "No guarantee."],
        ["Three times the data", "Not the point."],
        ["A pro/con list", "A different tool."]],
        k: "Three endings, many variables." },
      { d: 2, q: "Why does the course include data analysis as a decision strategy?", o: [
        ["Collecting isn't making meaning", "Correct. Interpreting data is a key decision skill, and AI does it fast."],
        ["AI can't read spreadsheets, so you must", "It can, and quickly."],
        ["Data always gives the right answer", "It informs; it doesn't decide."],
        ["Surveys are the most reliable data", "Not the point."]],
        k: "Data needs interpreting." },
      { d: 2, q: "What surprising insight came from the hybrid-car stories?", o: [
        ["A heavy battery can cut ground clearance", "Correct. That can be a problem on steep inclines."],
        ["Hybrids can't be driven in the snow at all", "Not what the stories showed."],
        ["Hybrids always cost less to insure", "Not it."],
        ["Hybrids are only sold in cities", "Not it."]],
        k: "Stories surface hidden variables." },
      { d: 2, q: "Can a pro/con analysis compare options, as well as weigh a single decision?", o: [
        ["Yes: “should I?” or “which one?”", "Correct. Should I buy a hybrid, or which hybrid should I buy."],
        ["No: it only works for yes/no decisions", "It also works between options."],
        ["No: comparing needs a full DREAMS run", "Not required for everyday decisions."],
        ["Only when AI generates the list", "You can do it with or without AI."]],
        k: "Pro/con works both ways." },
      { d: 3, q: "You're choosing between two delivery schedules for the store. Which everyday tool best shows how each could play out over time?", o: [
        ["Three stories", "Correct. Good, neutral and poor outcomes reveal the variables."],
        ["A pro/con list of today's facts", "Useful, but it doesn't play out over time."],
        ["A data upload of last year's weather", "Maybe relevant, but not a scenario."],
        ["A purpose boundary statement", "That's PIQPACC's Purpose."]],
        k: "Stories play decisions forward." },
      { d: 3, q: "Why does the course say storytelling helps decisions?", o: [
        ["They show how the facts fit together", "Correct. And our brains are naturally attuned to stories."],
        ["Stories make decisions more emotional", "Not the aim."],
        ["AI is better at stories than analysis", "Not the claim."],
        ["Stories are more accurate than data", "Not the claim."]],
        k: "Narratives connect the facts." }
    ],
    flips: [
      { d: 2, f: "Three everyday decision strategies with AI, and a prompt for each.", bf: "three-tools", b: "Pro/con: “Make a pro/con list for buying a hybrid car.” Data analysis: upload the data and ask AI to pull key insights from it. Storytelling: “Tell me three short stories of how buying a hybrid works out well, fairly and poorly” — a scenario analysis." }
    ]
  },

  /* ---------------------------------------------------------------- 24 */
  {
    id: "together",
    title: "Both frameworks on the job",
    summary: "Beyond the course: the two frameworks fit together. Reach for PIQPACC whenever you're judging information, claims or AI output: is it reliable, relevant and valid, what's being assumed, what do the key words mean, and is the conclusion a fact, a truth claim or an opinion? Reach for DREAMS when you face a high-stakes choice: define, refine, examine, activate, manage biases, select, then strength-test with a pre-mortem, stakeholders and a futurecast. On big project decisions, use both: DREAMS gives the decision its structure, and PIQPACC tests the evidence inside each step, especially when you activate options and manage biases. These cards apply both to everyday project situations.",
    cards: [
      { d: 3, x: 1, q: "A vendor's AI-written report claims their fire panel “cuts false alarms by 60%”. Which PIQPACC elements do you apply first?", o: [
        ["Information (RRV) and Conclusions", "Correct. Is the source reliable, and is “60%” a verified fact or a truth claim?"],
        ["Concepts only: define “false alarm”, then accept the figure", "Defining terms helps, but the figure still needs checking."],
        ["Perspectives only: ask how competitors would react", "That doesn't test the claim."],
        ["Purpose only: decide whether you want fewer alarms", "You already know you do."]],
        k: "Test the source, then the claim's category." },
      { d: 3, x: 1, q: "Your sponsor wants to decide this week whether to switch BMS platforms mid-project. Where do DREAMS and PIQPACC each help?", o: [
        ["DREAMS structures the choice; PIQPACC tests the evidence", "Correct. DREAMS gives the decision a structure, while PIQPACC checks the evidence behind each option."],
        ["Use only DREAMS, since PIQPACC is for research papers", "PIQPACC tests any information."],
        ["DREAMS is for personal choices; PIQPACC is for work", "Both work anywhere."],
        ["Use neither; mid-project decisions need gut feel", "High stakes call for a process."]],
        k: "Structure from DREAMS, scrutiny from PIQPACC." },
      { d: 3, x: 1, q: "During a pre-mortem, someone says “the client might reject the commissioning report.” What's the PIQPACC follow-up?", o: [
        ["Probe it: what would make them reject it?", "Correct. Turn the worry into testable assumptions."],
        ["Dismiss it, since the client approved the last one", "Past approval isn't proof."],
        ["Accept it as a fact and add it to the minutes", "It's an imagined risk, not a fact."],
        ["Ask AI to write a rejection letter to prepare", "Not useful."]],
        k: "Pre-mortem worries become probing questions." },
      { d: 3, x: 1, q: "A stakeholder wants the business case to call the project “sustainable”. Which element and phrase do you use?", o: [
        ["Concepts: “by that I mean…”, with a measure", "Correct. Agree what sustainable means here, then say so."],
        ["Perspectives: ask AI how a city bird would see it", "Not the main issue."],
        ["Assumptions: ask why they want it removed", "They want it included."],
        ["Purpose: delete the word from the brief", "The intent may be valid; clarify it instead."]],
        k: "Mushy words need “by that I mean”." },
      { d: 3, x: 1, q: "You've selected a supplier using DREAMS. What do you do next to protect the decision?", o: [
        ["Run a pre-mortem, then prepare the stakeholders", "Correct. Then futurecast and track the signs."],
        ["Stop thinking about it; the decision is made", "Execution needs testing too."],
        ["Restart DREAMS to be sure it was right", "Strength-test it; don't restart."],
        ["Ask AI to monitor the supplier for you", "You track the signs."]],
        k: "Decide, then strength-test." },
      { d: 3, x: 1, q: "GenAI recommends crashing the schedule by adding two technicians, citing an article you can't find. What's your move?", o: [
        ["Verify the source, then test the claim both ways", "Correct. Reliability first, then evidence that confirms and disconfirms it."],
        ["Reject crashing entirely, since the source failed", "A missing source fails reliability, not the idea itself."],
        ["Add the technicians; AI rarely invents sources", "It can, as Horse Sense showed."],
        ["Ask the AI again until it gives a real link", "Repeating doesn't validate the claim."]],
        k: "A missing source sinks the evidence, not the idea." }
    ],
    flips: [
      { d: 2, x: 1, f: "When do you reach for PIQPACC, and when for DREAMS?", b: "PIQPACC when you're judging information, claims or AI output: purpose, reliable information, empowered questions, other perspectives, hidden assumptions, clear concepts and the type of conclusion. DREAMS when you have a high-stakes choice: define, refine, examine, activate, manage biases and select, then a pre-mortem, stakeholders and a futurecast. On big decisions, use both: DREAMS for the structure, PIQPACC on the evidence in each step." }
    ]
  }

  ]
});
