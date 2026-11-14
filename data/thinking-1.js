/* Course 5 · Critical Thinking & Decisions with GenAI — from LinkedIn Learning “Amplify Your Critical Thinking with Generative AI”
   and “Strengthen Your Decision-Making with Generative AI”. Part 1: mindset, AI and human biases, PIQPACC, Purpose, Information.
   Same card format as the other files: first option is correct, the app shuffles. */

PMQ.fig("skeptic-scale", `<svg viewBox="0 0 600 128" role="img" aria-label="Cynic, skeptic or neither: three reactions to a GenAI claim">
<rect class="bx" x="1" y="8" width="190" height="112" rx="5"/><rect class="bx" x="205" y="8" width="190" height="112" rx="5"/><rect class="acc-s" x="205" y="8" width="190" height="112" rx="5"/><rect class="bx" x="409" y="8" width="190" height="112" rx="5"/>
<text class="tb" x="11" y="30">Cynic</text><text class="t2" x="11" y="50">“Stock tips from a machine?</text><text class="t2" x="11" y="64">No thanks.”</text><text class="t2" x="11" y="88">passive withdrawal:</text><text class="t2" x="11" y="102">the whole salt shaker</text>
<text class="tb" x="215" y="30">Skeptic</text><text class="ta" x="385" y="30" text-anchor="end">the course's pick</text><text class="t2" x="215" y="50">“Interesting. Show me</text><text class="t2" x="215" y="64">the data.”</text><text class="t2" x="215" y="88">active doubt: probe,</text><text class="t2" x="215" y="102">then update on evidence</text>
<text class="tb" x="419" y="30">Neither (all in)</text><text class="t2" x="419" y="50">“Is this how I become</text><text class="t2" x="419" y="64">wildly rich?”</text><text class="t2" x="419" y="88">a leap of faith, with</text><text class="t2" x="419" y="102">no dollop of doubt</text>
</svg>`);

PMQ.fig("thinking-types", `<svg viewBox="0 0 600 124" role="img" aria-label="Strategic, creative and critical thinking">
<rect class="bx" x="1" y="8" width="194" height="84" rx="5"/><rect class="bx" x="203" y="8" width="194" height="84" rx="5"/><rect class="bx" x="405" y="8" width="194" height="84" rx="5"/><rect class="acc-s" x="405" y="8" width="194" height="84" rx="5"/>
<text class="tb" x="11" y="30">Strategic</text><text class="ta" x="11" y="47">the chess game</text><text class="t2" x="11" y="66">Several moves ahead:</text><text class="t2" x="11" y="81">risks and opportunities</text>
<text class="tb" x="213" y="30">Creative</text><text class="ta" x="213" y="47">the idea lab</text><text class="t2" x="213" y="66">Mix elements into</text><text class="t2" x="213" y="81">new possibilities</text>
<text class="tb" x="415" y="30">Critical</text><text class="ta" x="415" y="47">the truth filter</text><text class="t2" x="415" y="66">Reliability, relevance</text><text class="t2" x="415" y="81">and validity</text>
<text class="t" x="1" y="114">GenAI doesn't know the difference: tell it which way to think.</text>
</svg>`);

PMQ.fig("ai-biases", `<svg viewBox="0 0 600 204" role="img" aria-label="Five GenAI biases and a question to probe each">
<text class="t2" x="8" y="18">BIAS</text><text class="t2" x="170" y="18">ASK GENAI</text><line class="s" x1="4" x2="596" y1="26" y2="26"/>
<text class="tb" x="8" y="48">Historical</text><text class="t2" x="170" y="48">Is this data from this year, or from a time when things differed?</text><line class="s2" x1="4" x2="596" y1="60" y2="60"/>
<text class="tb" x="8" y="80">Representation</text><text class="t2" x="170" y="80">Do your sources cover different demographics and backgrounds?</text><line class="s2" x1="4" x2="596" y1="92" y2="92"/>
<text class="tb" x="8" y="112">Cultural</text><text class="t2" x="170" y="112">Is this mostly Western data? How might it differ elsewhere?</text><line class="s2" x1="4" x2="596" y1="124" y2="124"/>
<text class="tb" x="8" y="144">Algorithm</text><text class="t2" x="170" y="144">Are you overweighting the most frequently cited views?</text><line class="s2" x1="4" x2="596" y1="156" y2="156"/>
<text class="tb" x="8" y="176">Data drift</text><text class="t2" x="170" y="176">Is this current, or a snapshot from your last training?</text>
<text class="t" x="8" y="200">GenAI is only as unbiased as the data it was trained on.</text>
</svg>`);

PMQ.fig("piqpacc", `<svg viewBox="0 0 600 216" role="img" aria-label="The seven PIQPACC elements and their key questions">
<text class="tb" x="8" y="18">PIQPACC: seven critical-thinking checks</text>
<rect class="acc" x="8" y="30" width="24" height="22" rx="4"/><text class="tw" x="20" y="45" text-anchor="middle">P</text><text class="tb" x="42" y="45">Purpose</text><text class="t2" x="150" y="45">What am I trying to achieve, and what's out of bounds?</text>
<rect class="acc" x="8" y="56" width="24" height="22" rx="4"/><text class="tw" x="20" y="71" text-anchor="middle">I</text><text class="tb" x="42" y="71">Information</text><text class="t2" x="150" y="71">Is it reliable, relevant and valid (RRV)?</text>
<rect class="acc" x="8" y="82" width="24" height="22" rx="4"/><text class="tw" x="20" y="97" text-anchor="middle">Q</text><text class="tb" x="42" y="97">Questions</text><text class="t2" x="150" y="97">Which empowered questions would surface insight?</text>
<rect class="acc" x="8" y="108" width="24" height="22" rx="4"/><text class="tw" x="20" y="123" text-anchor="middle">P</text><text class="tb" x="42" y="123">Perspectives</text><text class="t2" x="150" y="123">How would critics, supporters and experts see it?</text>
<rect class="acc" x="8" y="134" width="24" height="22" rx="4"/><text class="tw" x="20" y="149" text-anchor="middle">A</text><text class="tb" x="42" y="149">Assumptions</text><text class="t2" x="150" y="149">What am I taking for granted, and does it hold up?</text>
<rect class="acc" x="8" y="160" width="24" height="22" rx="4"/><text class="tw" x="20" y="175" text-anchor="middle">C</text><text class="tb" x="42" y="175">Concepts</text><text class="t2" x="150" y="175">What exactly do we mean by this word?</text>
<rect class="acc" x="8" y="186" width="24" height="22" rx="4"/><text class="tw" x="20" y="201" text-anchor="middle">C</text><text class="tb" x="42" y="201">Conclusions</text><text class="t2" x="150" y="201">Is it a fact, a truth claim or an opinion?</text>
</svg>`);

PMQ.fig("purpose-steps", `<svg viewBox="0 0 600 132" role="img" aria-label="Setting a purpose and purpose boundaries with GenAI">
<defs><marker id="ah-ps" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="ah" d="M0,0 L8,4 L0,8 z"/></marker></defs>
<rect class="bx" x="1" y="10" width="136" height="50" rx="5"/><text class="tc" x="69" y="31" text-anchor="middle">1 Ask GenAI for</text><text class="tc" x="69" y="46" text-anchor="middle">probing questions</text>
<rect class="bx" x="155" y="10" width="136" height="50" rx="5"/><text class="tc" x="223" y="31" text-anchor="middle">2 Write a specific</text><text class="tc" x="223" y="46" text-anchor="middle">purpose statement</text>
<rect class="bx" x="309" y="10" width="136" height="50" rx="5"/><rect class="acc-s" x="309" y="10" width="136" height="50" rx="5"/><text class="tc" x="377" y="31" text-anchor="middle">3 Ask GenAI for a</text><text class="tc" x="377" y="46" text-anchor="middle">boundary statement</text>
<rect class="bx" x="463" y="10" width="136" height="50" rx="5"/><text class="tc" x="531" y="31" text-anchor="middle">4 Test new ideas</text><text class="tc" x="531" y="46" text-anchor="middle">against it</text>
<path class="s" d="M137 35 H152" marker-end="url(#ah-ps)"/><path class="s" d="M291 35 H306" marker-end="url(#ah-ps)"/><path class="s" d="M445 35 H460" marker-end="url(#ah-ps)"/>
<text class="t2" x="1" y="84">Sarah's board: ages 6–18 · at least 80% graduation · up to 12 years of support</text>
<text class="t2" x="1" y="100">· no more than 30 students · 70% into further study or vocational training</text>
<text class="t" x="1" y="124">Out of bounds: anything that dilutes care or exceeds 30 students</text>
</svg>`);

PMQ.fig("rrv", `<svg viewBox="0 0 600 176" role="img" aria-label="Testing information for reliability, relevance and validity">
<rect class="acc" x="1" y="8" width="194" height="28" rx="4"/><text class="tw" x="98" y="26" text-anchor="middle">RELIABILITY</text>
<rect class="acc" x="203" y="8" width="194" height="28" rx="4"/><text class="tw" x="300" y="26" text-anchor="middle">RELEVANCE</text>
<rect class="acc" x="405" y="8" width="194" height="28" rx="4"/><text class="tw" x="502" y="26" text-anchor="middle">VALIDITY</text>
<rect class="bx" x="1" y="42" width="194" height="100" rx="4"/><rect class="bx" x="203" y="42" width="194" height="100" rx="4"/><rect class="bx" x="405" y="42" width="194" height="100" rx="4"/>
<text class="t2" x="11" y="60">Trustworthy source? Are</text><text class="t2" x="11" y="76">its sources verifiable?</text><text class="tbad" x="11" y="110">✗ “Horse Sense Magazine”</text><text class="tbad" x="11" y="126">didn't exist</text>
<text class="t2" x="213" y="60">Pertinent to your purpose</text><text class="t2" x="213" y="76">and your question?</text><text class="tok" x="213" y="110">✓ emotional support is</text><text class="tok" x="213" y="126">part of the purpose</text>
<text class="t2" x="415" y="60">Does it tell the whole</text><text class="t2" x="415" y="76">story? Seek evidence</text><text class="t2" x="415" y="92">for and against it</text><text class="ta" x="415" y="126">? inconclusive</text>
<text class="t" x="1" y="166">Result: six-month trials of horse and dog therapy</text>
</svg>`);

PMQ.course({
  id: "thinking",
  title: "Critical Thinking & Decisions with GenAI",
  short: "Thinking & Decisions",
  source: "Amplify Your Critical Thinking with Generative AI; Strengthen Your Decision-Making with Generative AI",
  blurb: "Two frameworks for thinking with GenAI: PIQPACC to test information, assumptions and conclusions, and DREAMS to make high-stakes decisions, plus spotting AI and human biases, pre-mortems and futurecasting.",
  topics: [

  /* ---------------------------------------------------------------- 1 */
  {
    id: "ct-mindset",
    title: "Skeptic, not cynic: the truth filter",
    summary: "When you meet a GenAI claim, are you a skeptic, a cynic or neither? Offered a GenAI that predicts the next big stock market trend, the skeptic says “Interesting. Show me the data,” and cross-checks it; the cynic says “Stock tips from a machine? No thanks”; and neither, the all-in enthusiast, asks whether this is how to get rich. The course makes the case for skepticism: it doesn't assume the worst or the best, but probes and questions to reach the best possible understanding, keeping an open mind so you can update your thinking on good evidence. Skepticism is an active form of doubt, and you can even turn it on GenAI, asking it to second-guess its own outputs. Cynicism is a passive withdrawal, a pre-emptive shrug that can stop conversations and keep you from the good stuff. Being neither may mean you're open, but accepting what GenAI offers without a dollop of doubt invites nasty surprises. Good thinking has three types: strategic thinking (the chess game: looking several moves ahead, weighing risks and opportunities), creative thinking (the idea lab: mixing elements into new possibilities) and critical thinking (the truth filter: questioning information for reliability, relevance and validity). GenAI doesn't know the difference, so you must tell it which way to think. A Northern California apparel store that trusted GenAI's strategic and creative advice stocked up on puffer scarves and oversized earmuffs for a #CaliWinterIsComing launch, but the hashtags came from a TV show, not the weather. The missing step was the truth filter: How reliable are your sources? Is the data recent and relevant to Northern California? What are these hashtags really about?",
    figs: ["skeptic-scale", "thinking-types"],
    terms: [
      ["Skepticism", "Active doubt: probing and questioning to reach the best possible understanding, while staying open to updating your view on good evidence.", "“Interesting. Show me the data, and I'll cross-check it.”", 0, "skeptic-scale"],
      ["Cynicism", "Passive withdrawal: a pre-emptive shrug that rejects ideas without examining them and can shut down conversations.", "“Stock tips from a machine? No thanks.”"],
      ["Strategic thinking", "The chess game: looking several moves ahead, assessing risks and evaluating opportunities.", "Planning which market to enter first, and how competitors might respond.", 0, "thinking-types"],
      ["Creative thinking", "The idea lab: mixing different elements together to generate new possibilities.", "Brainstorming a launch event and campaign for a new store."],
      ["Critical thinking", "The truth filter: questioning and evaluating information for reliability, relevance and validity.", "Checking whether a trending hashtag is really about the weather before stocking winter gear."]
    ],
    cards: [
      { d: 1, q: "Offered a GenAI that claims to predict the next stock market trend, which response is the skeptic's?", af: "skeptic-scale", o: [
        ["“Interesting. Show me the data.”", "Correct. Open, but probing for evidence."],
        ["“Stock tips from a machine? No thanks.”", "That's the cynic: rejecting it without looking."],
        ["“Tell me more. Is this how I get rich?”", "That's neither: all in, with no doubt at all."],
        ["“If it's AI, it must be right.”", "Also neither: a leap of faith."]],
        k: "Skeptics probe; cynics shrug; the all-in leap." },
      { d: 1, q: "How does the course describe cynicism?", o: [
        ["A passive withdrawal: a shrug that says “why bother?”", "Correct. It can stop conversations and keep you from the good stuff."],
        ["An active form of doubt that keeps probing for evidence", "That's skepticism."],
        ["A healthy default for anyone using GenAI tools", "The course argues for skepticism, not cynicism."],
        ["A leap of faith into new technology", "That's being neither: all in."]],
        k: "Cynicism withdraws; skepticism investigates." },
      { d: 1, q: "Which of the three types of thinking is “the truth filter”?", af: "thinking-types", o: [
        ["Critical thinking", "Correct. It questions information for reliability, relevance and validity."],
        ["Strategic thinking", "That's the chess game."],
        ["Creative thinking", "That's the idea lab."],
        ["Systems thinking", "Not one of the course's three."]],
        k: "Strategic = chess game. Creative = idea lab. Critical = truth filter." },
      { d: 1, q: "What's the key difference between a skeptic and a cynic?", o: [
        ["A skeptic probes; a cynic dismisses without looking", "Correct. A skeptic also updates their view on good evidence."],
        ["A skeptic trusts AI completely; a cynic only trusts experts", "Skeptics don't trust anything completely."],
        ["There's no difference; both assume the worst about AI", "Skepticism doesn't assume the worst or the best."],
        ["A cynic asks more questions than a skeptic does", "The reverse: cynics stop asking."]],
        k: "Doubt that investigates versus doubt that withdraws." },
      { d: 2, q: "Why does the course say you must tell GenAI which way to think?", o: [
        ["GenAI doesn't know the difference between them", "Correct. If you only ask for strategy or creativity, critical thinking gets skipped."],
        ["GenAI always defaults to critical thinking unless told otherwise", "It doesn't; that's why the store got burned."],
        ["GenAI refuses creative tasks unless you ask politely", "Not the point."],
        ["Only one type of thinking can be used per conversation", "You can combine them; you just have to ask."]],
        k: "Ask explicitly for the truth filter." },
      { d: 2, q: "The Northern California store stocked winter gear for a #CaliWinterIsComing launch and was left with unsold stock. What went wrong?", o: [
        ["No one put the AI's strategy and ideas through the truth filter", "Correct. The hashtags were about a TV show, not the weather."],
        ["The creative campaign wasn't ambitious enough to drive sales", "The campaign wasn't the root problem."],
        ["The store should have launched in winter, as the AI said", "The demand itself was the mistake."],
        ["The AI's suggestions were fine; the launch date was unlucky", "The data behind the suggestions was wrong."]],
        k: "Brilliant-sounding strategy on shaky data is still shaky." },
      { d: 2, q: "Which question would have caught the store's mistake?", o: [
        ["Are these hashtags really about cold weather in California?", "Correct. They were tied to a TV show."],
        ["What else could we sell alongside the earmuffs this winter?", "That builds on the mistake."],
        ["How can we make the ice sculpture contest go viral?", "A creative question, not a critical one."],
        ["Which influencers should promote the launch event?", "Doesn't test the underlying data."]],
        k: "Ask what the data really shows." },
      { d: 2, q: "What does the course mean by turning skepticism back on GenAI?", o: [
        ["Ask it to question its own outputs", "Correct. It can second-guess itself when asked."],
        ["Refuse to use GenAI for important work", "That's cynicism."],
        ["Only use GenAI for creative brainstorming tasks", "Not the point."],
        ["Trust GenAI more once it has been right a few times", "A track record doesn't replace checking."]],
        k: "Make the AI audit itself." },
      { d: 3, q: "A colleague pastes an AI-generated market forecast into a project business case without checking it. Which mindset is that, and what's the risk?", o: [
        ["Neither: unchecked acceptance invites nasty surprises", "Correct. Not a dollop of doubt."],
        ["Skeptic: they kept an open mind, which is always enough", "An open mind without probing isn't skepticism."],
        ["Cynic: they rejected the forecast without examining it", "They accepted it; they didn't reject it."],
        ["Strategic: they looked several moves ahead", "There was no checking at all."]],
        k: "Unchecked acceptance is the risky mindset." },
      { d: 3, q: "Your team asks GenAI for a launch strategy and campaign. What should happen before you commit budget?", o: [
        ["Truth-filter it: check sources, recency and local relevance", "Correct. A GenAI strategy can sound convincing yet rest on poor, outdated or irrelevant sources, so check it before spending."],
        ["Ask the AI for a bigger, bolder creative campaign", "More creativity doesn't test the data."],
        ["Commit quickly, since an AI strategy is already based on large amounts of data", "Lots of data isn't the same as relevant, reliable data."],
        ["Ask a second AI to write the press release", "That's not checking anything."]],
        k: "Strategy and creativity first get filtered for truth." }
    ],
    flips: [
      { d: 1, f: "Name the three types of good thinking and their nicknames.", b: "Strategic thinking, the chess game: looking several moves ahead, weighing risks and opportunities. Creative thinking, the idea lab: mixing elements into new possibilities. Critical thinking, the truth filter: questioning information for reliability, relevance and validity." }
    ]
  },

  /* ---------------------------------------------------------------- 2 */
  {
    id: "ct-ai-bias",
    title: "Biases in GenAI",
    summary: "GenAI is only as unbiased as the data it was trained on, and that data was created by people: a messy closet of stereotypes and biases. Five biases to watch, with questions that make GenAI turn the mirror on itself (the course's example: it's recommending an MBA over opening a food truck). Historical bias: training data reflects historical or societal biases, so ask whether its MBA earnings data is from the current year or from periods when an MBA may have been worth more. Representation bias: training data may not represent all perspectives or groups, so ask whether its statistics include women, minorities and different socioeconomic backgrounds. Cultural bias: if most training data is in English and from Western, especially American, contexts, its sense of norms and values may be skewed, so ask how things differ elsewhere, and whether food trucks are more or less esteemed in other cultures. Algorithm bias: even neutral algorithms can give frequently occurring viewpoints more weight, so ask whether it's leaning on often-cited benefits like salary and networking, and dismissing the food truck because most data favours traditional careers. Data drift bias: training is frozen at a point in time while attitudes and markets move on, so ask whether its data is current or a snapshot, and how changes since then affect its advice. GenAI won't mind the interrogation.",
    figs: ["ai-biases"],
    terms: [
      ["Historical bias", "Bias from training data that reflects past or societal biases.", "MBA salary advice drawn from years when an MBA was worth more.", 0, "ai-biases"],
      ["Representation bias", "Bias because training data doesn't fully represent all perspectives or groups.", "MBA success rates drawn mostly from one demographic."],
      ["Cultural bias", "Bias because most training data is in English and from Western, especially American, contexts.", "Assuming a food truck carries the same status in every country."],
      ["Algorithm bias", "Bias from how an algorithm weighs information, such as giving frequently occurring viewpoints more prominence.", "Favouring salary and networking because they're the most-cited MBA benefits."],
      ["Data drift bias", "Bias that appears because a model's training is frozen at a point in time while attitudes and conditions keep changing.", "Job-market advice that was neutral on training day but is now out of date."]
    ],
    cards: [
      { d: 1, q: "According to the course, how unbiased is GenAI?", o: [
        ["Only as unbiased as its training data", "Correct. And that data was created by people."],
        ["Far less biased than people, by design", "It inherits our biases through its data."],
        ["Completely neutral, because it's a machine", "Being a machine doesn't make it neutral."],
        ["Biased only when users ask leading questions", "Bias can come from the training data itself."]],
        k: "Biased data in, biased answers out." },
      { d: 1, q: "Which bias arises when GenAI's training is frozen at a point in time while the world moves on?", o: [
        ["Data drift bias", "Correct. The model's knowledge stops at its training cut-off, so its picture of the world drifts out of date."],
        ["Cultural bias", "That's about English-language, Western-heavy data."],
        ["Historical bias", "Close, but that's about past societal biases in the data."],
        ["Representation bias", "That's about which groups are represented."]],
        k: "Frozen training + moving world = data drift." },
      { d: 1, q: "If most of GenAI's training data is in English and from American contexts, which bias may result?", o: [
        ["Cultural bias", "Correct. Training data dominated by one language and culture skews answers towards that culture's norms."],
        ["Algorithm bias", "That's about how information is weighted."],
        ["Data drift bias", "That's about training being frozen in time."],
        ["Confirmation bias", "That's a human bias, not one of the five AI biases."]],
        k: "Western-heavy data → cultural bias." },
      { d: 2, q: "GenAI favours the MBA because salary and networking are the most-cited benefits in its data. Which bias is that?", o: [
        ["Algorithm bias: frequent viewpoints get more weight", "Correct. The model weights views by how often they appear, so the most-cited benefits dominate, important or not."],
        ["Historical bias: it relies on data from the 1990s", "Nothing here says the data is old."],
        ["Representation bias: it ignores women entirely", "Not what's described."],
        ["Authority bias: it trusts the famous business schools too much", "Authority bias is a human bias in this course."]],
        k: "Most-cited isn't the same as most important." },
      { d: 2, q: "Which question best probes representation bias in GenAI's MBA advice?", o: [
        ["Do your statistics include people from different backgrounds?", "Correct. Representation bias comes from who is, and isn't, in the data, so ask which backgrounds are included."],
        ["Is this data from this year or from years ago?", "That probes historical or data drift bias."],
        ["Are food trucks esteemed differently in other cultures?", "That probes cultural bias."],
        ["Are you overweighting the most frequently cited MBA benefits?", "That probes algorithm bias."]],
        k: "Who's in the data, and who's missing?" },
      { d: 2, q: "Which question probes historical bias?", o: [
        ["Is the earnings data recent?", "Correct. Or is it from a time when an MBA was worth more?"],
        ["Do your sources include different socioeconomic groups?", "That's representation bias."],
        ["How might other cultures view running a food truck?", "That's cultural bias."],
        ["Are you favouring the most common viewpoints in your data?", "That's algorithm bias."]],
        k: "Ask when the data comes from." },
      { d: 3, q: "You ask GenAI about salaries for project coordinators in Auckland, and it quotes US figures. Which biases may be at play, and what should you ask?", o: [
        ["Cultural bias; ask for current local sources", "Correct. US-heavy data skews the answer, and old figures add data drift."],
        ["None; salary data is the same across countries", "Pay varies a lot by country."],
        ["Only authority bias; ask which experts it quoted", "The issue is whose data it's using."],
        ["Optimism bias; ask it to be more cautious", "Optimism bias is a human bias."]],
        k: "Ask for local, current data." },
      { d: 3, q: "Why does the course want you to make GenAI “turn the mirror on itself”?", o: [
        ["It can surface its own likely biases when asked directly", "Correct. GenAI won't mind the interrogation."],
        ["It will refuse to answer if it detects bias", "It won't; you have to ask."],
        ["Interrogation makes the AI more confident in its answers", "The aim is accuracy, not confidence."],
        ["It's the only way to get AI to cite sources", "Not the point."]],
        k: "Interrogate the AI about its own blind spots." }
    ],
    flips: [
      { d: 2, f: "Name the five GenAI biases and one probing question for each.", b: "Historical: is this data from this year, or from a time when things were different? Representation: do your sources include different demographics and backgrounds? Cultural: is this mostly Western data, and how might it differ elsewhere? Algorithm: are you overweighting the most frequently cited views? Data drift: is your data current, or a snapshot from your last training?" }
    ]
  },

  /* ---------------------------------------------------------------- 3 */
  {
    id: "ct-own-bias",
    title: "Biases in your own thinking",
    summary: "Your own cognitive biases can cloud even strong data. The course's example: your team is hyped to launch a next-generation trading card game; research, play tests and sales projections all look great. Three common biases, and how GenAI can expose them. Confirmation bias: seeking only information that confirms what you already believe. Explain the evidence for launching, then ask GenAI for negative feedback or contrasting views you may have overlooked or dismissed, and for analysis showing where you're unintentionally favouring positive outcomes. Availability bias: relying too heavily on recent examples that come easily to mind, like a buzzy new Magic: The Gathering series or a viral Pokémon video. Ask what long-term data and less recent events you should consider, and how similar trends have played out over their life cycles. Authority bias: accepting opinions from authority figures without good supporting evidence. Ask GenAI to compare the track records of the experts endorsing you, and for examples where recognised experts missed shifts in the market; if they aren't public figures, ask how your game might be exposed to dynamics the experts haven't foreseen. GenAI isn't starstruck or easily offended, which makes rooting out human biases a great task for a non-human intelligence.",
    terms: [
      ["Confirmation bias", "Seeking only information that confirms what you already believe, and ignoring evidence to the contrary.", "Only reading the glowing play-test reports for your game."],
      ["Availability bias", "Relying too heavily on recent or memorable examples that come easily to mind.", "Assuming everyone loves trading card games because of one viral video."],
      ["Authority bias", "Accepting or overvaluing opinions from authority figures without good supporting evidence.", "Launching because a famous analyst endorsed it, without checking their track record."],
      ["Disconfirming evidence", "Evidence that challenges your view. Seeking it out is how you counter confirmation bias.", "Asking GenAI for the strongest negative feedback on your game."]
    ],
    cards: [
      { d: 1, q: "What is confirmation bias?", o: [
        ["Seeking only what supports your existing beliefs", "Correct. You notice and favour evidence that agrees with you, and discount what doesn't."],
        ["Trusting famous experts without checking their evidence", "That's authority bias."],
        ["Overweighting recent, memorable examples", "That's availability bias."],
        ["Assuming things will turn out better than they will", "That's optimism bias."]],
        k: "You find what you're looking for." },
      { d: 1, q: "Which bias makes a viral video seem like proof that everyone loves trading card games?", o: [
        ["Availability bias", "Correct. Recent, memorable examples feel more common than they are."],
        ["Authority bias", "No expert is involved here."],
        ["Confirmation bias", "Related, but the trigger here is how memorable the example is."],
        ["Representation bias", "That's one of GenAI's biases, about whose data is included."]],
        k: "Memorable ≠ representative." },
      { d: 1, q: "How does the course suggest countering authority bias with GenAI?", o: [
        ["Ask it to compare the experts' track records", "Correct. Even experts get it wrong."],
        ["Ask it which expert is the most famous", "Fame isn't evidence."],
        ["Ask it to agree with the experts", "That reinforces the bias."],
        ["Ask it to write a press release quoting the experts", "That uses the bias instead of checking it."]],
        k: "Check the record, not the reputation." },
      { d: 2, q: "To counter confirmation bias, what does the course suggest asking GenAI?", o: [
        ["For contrasting views you may have dismissed", "Correct, plus analysis of where you're favouring positive outcomes."],
        ["For more data that supports launching the game", "That feeds the bias."],
        ["To confirm the play-test results are accurate", "Still looking for confirmation."],
        ["To summarise the positive reviews more clearly", "Same bias, nicer formatting."]],
        k: "Ask for the case against you." },
      { d: 2, q: "To counter availability bias, what should you ask GenAI?", o: [
        ["What do long-term trend life cycles show?", "Correct. Look past what's hot right now."],
        ["What's trending on social media this week?", "That deepens the bias."],
        ["Which celebrities are talking about our game?", "More of what's easily available."],
        ["How can we make our launch go viral too?", "Not a check at all."]],
        k: "Look past what's hot now." },
      { d: 2, q: "Why does the course call GenAI well suited to rooting out human biases?", o: [
        ["It isn't starstruck or easily offended", "Correct. It can scrutinise big names objectively."],
        ["It has no biases of its own", "It does have biases; the course covers five."],
        ["It always agrees with the user", "That would make it useless for this."],
        ["It knows the user's thinking better than they do", "It only knows what you tell it."]],
        k: "A non-human check on human blind spots." },
      { d: 3, q: "Three senior engineers endorse a vendor's BMS platform for your project. What's the critical-thinking move?", o: [
        ["Check their track records, then seek evidence", "Correct. Authority isn't evidence."],
        ["Accept it; three senior engineers can't all be wrong", "That's authority bias."],
        ["Reject it; senior engineers are usually out of date", "That's cynicism, not critical thinking."],
        ["Ask GenAI to write a business case quoting them", "That builds on the bias."]],
        k: "Endorsements need evidence too." },
      { d: 3, q: "Your team has found only positive data for a new product. What does the course say to do before deciding?", o: [
        ["Seek disconfirming evidence", "Correct. One-sided evidence is a warning sign; go looking for data that could prove you wrong."],
        ["Celebrate and launch quickly", "All-positive data is a warning sign."],
        ["Gather even more positive data", "That's confirmation bias in action."],
        ["Ask the most senior person to decide", "That's authority bias."]],
        k: "No bad news? Go looking for it." }
    ],
    flips: [
      { d: 2, f: "For each of the three human biases, what would you ask GenAI?", b: "Confirmation: “What negative feedback or contrasting views might we have overlooked or dismissed?” Availability: “What long-term data and less recent events should we consider? How have similar trends played out over time?” Authority: “How good are these experts' track records? Where have recognised experts missed shifts in this market?”" }
    ]
  },

  /* ---------------------------------------------------------------- 4 */
  {
    id: "piqpacc",
    title: "The PIQPACC framework",
    summary: "We navigate a dense jungle of ideas, information and voices competing to influence our choices. For over 2,500 years, critical thinking has been the best way to cut a path to reliable, relevant and valid evidence, but it isn't our default way of thinking, and smart people don't automatically know it: it's a learned skill, and its nuanced parts are hard to remember when you're overwhelmed. PIQPACC (pronounced “pick-pack”) is a portable operating manual for critical thinking, designed to pick apart your thinking and rigorously assess information with GenAI as your partner. Its seven elements: Purpose, so you stay focused on your objectives and know what you want, and don't want, from GenAI; Information, to assess the quality of the information you use; Questions, so GenAI helps you ask empowered questions that capture insights you'd otherwise miss; Perspectives, so GenAI takes the guesswork out of considering other views; Assumptions, to identify and probe the assumptions in your thinking; Concepts, so they're crisp and clear before you send messages into the world; and Conclusions, to tell opinion-based, truth-based and fact-based conclusions apart.",
    figs: ["piqpacc"],
    terms: [
      ["PIQPACC", "A critical thinking framework with seven elements: Purpose, Information, Questions, Perspectives, Assumptions, Concepts, Conclusions. Pronounced “pick-pack”.", "Running a big AI-assisted decision through all seven checks.", 0, "piqpacc"],
      ["Critical thinking as a skill", "Not our default way of thinking, and not something smart people automatically know: a learned skill.", "Practising PIQPACC on everyday claims until it becomes a habit."]
    ],
    cards: [
      { d: 1, q: "What does PIQPACC stand for?", af: "piqpacc", o: [
        ["Purpose, information, questions, perspectives, assumptions, concepts, conclusions", "Correct. The seven elements of thinking: purpose, information, questions, perspectives, assumptions, concepts and conclusions."],
        ["Plan, investigate, question, prioritise, analyse, check, conclude", "Plausible, but not the framework."],
        ["Priorities, investigation, quality, perspectives, accountability, criteria, consensus", "Only perspectives matches the real framework."],
        ["Problem, information, questions, proof, answers, criteria, choice", "A few words match; most don't."]],
        k: "P-I-Q-P-A-C-C." },
      { d: 1, q: "Which PIQPACC element helps you decide what you want, and don't want, from GenAI?", o: [
        ["Purpose", "Correct. It keeps you focused and sets boundaries."],
        ["Perspectives", "That's about simulating other viewpoints."],
        ["Concepts", "That's about clarifying words."],
        ["Questions", "That's about empowered questions."]],
        k: "Purpose comes first." },
      { d: 1, q: "How long does the course say critical thinking has been our best way through the “jungle” of information?", o: [
        ["Over 2,500 years", "Correct. The course traces critical thinking back more than 2,500 years; GenAI is a new tool for an old skill."],
        ["About 250 years", "Much longer than that."],
        ["Since the internet began", "Far older than the internet."],
        ["Since GenAI arrived", "GenAI amplifies it; it didn't invent it."]],
        k: "An ancient skill, newly amplified." },
      { d: 2, q: "Is critical thinking our natural default, according to the course?", o: [
        ["No. It's a learned skill, even for smart people", "Correct. It doesn't come naturally, even to smart people; it has to be learned and practised."],
        ["Yes. Smart people think critically automatically", "The course says they don't."],
        ["Yes, once you've read enough about a topic", "Knowledge isn't the same as critical thinking."],
        ["No, and it can't really be learned at all", "It can be learned; that's the point of PIQPACC."]],
        k: "Critical thinking is trained, not innate." },
      { d: 2, q: "Which element uses GenAI to tell fact-based, truth-based and opinion-based conclusions apart?", o: [
        ["Conclusions", "Correct. The conclusions element sorts conclusions into fact-based, truth-based and opinion-based."],
        ["Concepts", "That's about clarifying meaning."],
        ["Perspectives", "That's about other viewpoints."],
        ["Assumptions", "That's about probing what you take for granted."]],
        k: "The last C: conclusions." },
      { d: 2, q: "Which element makes sure words like “freedom” are crisp and clear before you communicate?", o: [
        ["Concepts", "Correct. The concepts element makes sure key words mean the same thing to everyone."],
        ["Conclusions", "That's about sorting facts, truth claims and opinions."],
        ["Questions", "That's about empowered questions."],
        ["Purpose", "That's about objectives and boundaries."]],
        k: "The first C: concepts." },
      { d: 3, q: "A team uses GenAI to build a vendor recommendation, but nobody defined the goal, checked the sources or challenged the assumptions. Which PIQPACC elements were skipped?", o: [
        ["Purpose, information and assumptions", "Correct. No defined goal is purpose, unchecked sources are information, and unchallenged assumptions are assumptions."],
        ["Only concepts, since words matter most", "Several elements were skipped, not just concepts."],
        ["None; GenAI applies PIQPACC automatically", "It doesn't; you have to direct it."],
        ["Questions and perspectives, but nothing else", "The scenario describes purpose, information and assumptions."]],
        k: "Map the gaps to the elements." },
      { d: 3, q: "Why does the course call PIQPACC an operating manual you can carry in your head?", o: [
        ["Its parts are easy to forget when you're overwhelmed", "Correct. A portable framework keeps them in reach."],
        ["It replaces the need for GenAI tools in decisions", "It's designed to be used with GenAI."],
        ["It's a formal legal standard that every workplace has to follow", "It's a thinking tool, not a legal standard."],
        ["It's only useful when you have no time to think", "It's for careful thinking."]],
        k: "A checklist for when your head is full." }
    ],
    flips: [
      { d: 1, f: "Spell out PIQPACC with one key question for each element.", b: "Purpose: what am I trying to achieve, and what's out of bounds? Information: is it reliable, relevant and valid? Questions: which empowered questions would surface insight? Perspectives: how would others see this? Assumptions: what am I taking for granted, and does it hold up? Concepts: what exactly do we mean by this word? Conclusions: is this a fact, a truth claim or an opinion?" }
    ]
  },

  /* ---------------------------------------------------------------- 5 */
  {
    id: "purpose",
    title: "P: Purpose and purpose boundaries",
    summary: "It's easy to get carried away by everything GenAI can do, so start by establishing your purpose and putting boundaries around it. Sarah joined a non-profit board deciding the future of a private school for at-risk youth. When the board got excited about generating new programmes and fundraising ideas, she steered them to establish purpose first. She told ChatGPT they were a 15-member board governing a school whose purpose is to care for and educate at-risk youth, and asked for probing questions to make the purpose clear: Who qualifies as at-risk? What does care encompass? What educational outcomes are you aiming for? How long will you support each child? How will you measure success? What's the maximum number of children you can support at once? Debated points, like who qualifies as at-risk, went back to GenAI for objective, bias-avoiding criteria. The board's purpose statement set specifics: children aged 6 to 18; physical, emotional and mental-health care; at least an 80% high school graduation rate; support for up to 12 years; at least 70% moving on to higher education or vocational programmes; no more than 30 students at a time; and 10-year growth targets. The clearer the purpose, the easier the boundaries: Sarah pasted the statement into ChatGPT and asked for a purpose boundary statement, which ruled out proposals that dilute the care model, divert resources from core objectives or exceed 30 students. Bonus tip: later, ask GenAI whether an issue falls within your purpose boundaries.",
    figs: ["purpose-steps"],
    terms: [
      ["Purpose statement", "A clear, specific statement of what you're trying to achieve, ideally measurable.", "Serve up to 30 at-risk children aged 6–18, aiming for at least an 80% graduation rate."],
      ["Purpose boundary", "A statement of what's out of bounds, so discussions and decisions don't veer from the purpose.", "Proposals that exceed 30 students or divert resources from core care are out of bounds.", 0, "purpose-steps"],
      ["Probing questions (purpose)", "Questions that make a vague purpose specific: who qualifies, what's included, what outcomes, how success is measured, what capacity.", "“Who qualifies as at-risk in the context of our school?”"]
    ],
    cards: [
      { d: 1, q: "What does the course say to do first, before exploring everything GenAI can do?", o: [
        ["Establish your purpose and set boundaries", "Correct. A clear purpose and boundaries stop GenAI's many possibilities from pulling you off course."],
        ["Generate as many new ideas as possible", "That's what the board wanted to do; Sarah held them back."],
        ["Choose the most powerful AI tool available", "The tool matters less than the purpose."],
        ["Collect all the data you can find", "Without a purpose, you won't know what's relevant."]],
        k: "Purpose before possibilities." },
      { d: 1, q: "Sarah asked ChatGPT for probing questions. What were they for?", o: [
        ["To make the board's purpose clear", "Correct. Then boundaries could follow."],
        ["To test the board members' knowledge", "Not the aim."],
        ["To raise money for the school quickly", "Fundraising came later, within the purpose."],
        ["To decide which board members to replace", "Not the aim."]],
        k: "Probing questions sharpen a vague purpose." },
      { d: 2, q: "Why does a clear purpose statement matter for boundaries?", o: [
        ["A clearer purpose makes boundaries much easier to set", "Correct. Once you know exactly what you're trying to achieve, it's clear what's in and out of bounds."],
        ["Boundaries are only needed when a purpose is unclear", "Clear purposes still need boundaries."],
        ["A clear purpose removes the need for any boundaries", "Boundaries protect even a clear purpose."],
        ["Boundaries should be set before the purpose is written", "The order is purpose, then boundaries."]],
        k: "Sharp purpose, easy boundaries." },
      { d: 2, q: "Which proposal falls outside the school's purpose boundaries?", af: "purpose-steps", o: [
        ["Expanding to 45 students to raise more fees", "Correct. The boundary caps capacity at 30."],
        ["Adding a mental-health assessment each term", "Within the care model."],
        ["Hiring a dedicated counsellor for emotional support", "Within the purpose: emotional support through counsellors."],
        ["Tracking yearly progress in education levels", "That's how success is measured."]],
        k: "Test proposals against the boundary." },
      { d: 2, q: "When the board debated who counts as at-risk, how did Sarah use GenAI?", o: [
        ["She asked for objective criteria that avoid bias", "Correct. Objective criteria from GenAI gave the board a fair, less biased basis for the decision."],
        ["She asked it to pick the students for the school", "It informed the criteria; people still decide."],
        ["She let the most senior member decide", "That would invite authority bias."],
        ["She asked it to write a fundraising letter instead", "That would sidestep the question."]],
        k: "Use GenAI to make debated criteria objective." },
      { d: 2, q: "What's the course's bonus tip about purpose boundaries?", o: [
        ["Later, ask GenAI whether an issue is within them", "Correct. Once boundaries are set, GenAI can check whether a new issue falls inside them."],
        ["Rewrite them every week to stay flexible", "That defeats the point of boundaries."],
        ["Keep them secret from the people they affect", "Boundaries only work if they're shared."],
        ["Let GenAI change them whenever it suggests", "You set the boundaries; GenAI helps you test against them."]],
        k: "Use GenAI as a boundary checker." },
      { d: 3, q: "Your project team is excited by GenAI's ideas for new features, but the deadline is fixed. What's the PIQPACC move?", o: [
        ["Set purpose boundaries, then test ideas", "Correct. Ideas outside the boundary wait or go."],
        ["Build every feature GenAI suggests, then cut later", "That burns time you don't have."],
        ["Ask GenAI to pick the features it likes best", "It doesn't know your purpose unless you define it."],
        ["Pause all AI use until the project is over", "That's cynicism, not focus."]],
        k: "Excitement needs a boundary." },
      { d: 3, q: "Which is the strongest purpose statement for a supplier-ordering app at a campus store?", o: [
        ["Halve stock-outs of our top 20 lines in six months", "Correct. Specific, measurable and time-bound."],
        ["Make ordering better and easier for everyone involved", "Too vague to measure or bound."],
        ["Use AI to transform our supply chain and delight customers", "A slogan, not a purpose."],
        ["Build the best ordering app possible for the store", "“Best” isn't measurable."]],
        k: "Specific and measurable beats inspiring and vague." }
    ],
    flips: [
      { d: 2, f: "Walk through the course's steps for setting purpose boundaries with GenAI.", b: "1 Share your situation and ask GenAI for probing questions that clarify your purpose. 2 Answer them, using GenAI for objective criteria on debated points. 3 Write a specific, measurable purpose statement. 4 Paste it into GenAI and ask for a purpose boundary statement. 5 Later, ask GenAI whether a new issue falls within those boundaries." }
    ]
  },

  /* ---------------------------------------------------------------- 6 */
  {
    id: "information",
    title: "I: Information quality (RRV)",
    summary: "“Experts estimate that 90% of online content may be AI-generated by 2026.” If your first thought is “Who are these experts, and what's their evidence?”, you're thinking critically. To decide whether you can trust information, check it for RRV. Reliability: is it trustworthy? Does it come from a trustworthy source (a person, organisation, measuring tool or GenAI), and are your source's sources reliable? Sources fail when they give no verifiable evidence, or don't exist at all. Relevance: is it pertinent to your purpose, relating directly to your question or issue? Validity: is it accurate in that it tells the whole story, rather than leaving out a big part of the puzzle? Sarah's board tested board member Malik's claim, backed by an article in “Horse Sense Magazine”, that horse-assisted psychotherapy gives at-risk students the best emotional support. It seemed relevant. For reliability, they asked GenAI how to evaluate the source, and to evaluate it. ChatGPT couldn't find the article; Google's Bard confidently described the magazine as reliable and published by a well-respected association. The board investigated further: the magazine didn't exist. GenAI can hallucinate convincing sources, and different tools access different data, so bring your own critical thinking. Validating a claim means seeking reliable, relevant information that both confirms and disconfirms it. The evidence was inconclusive, so the board ran six-month trials: horse therapy for half the students and dog therapy for the other half.",
    figs: ["rrv"],
    terms: [
      ["RRV", "The three tests of information quality: reliability, relevance and validity.", "Checking a supplier's sustainability claim against all three before quoting it.", 0, "rrv"],
      ["Reliability", "Whether information is trustworthy: from a trustworthy source whose own sources are reliable and verifiable.", "A study you can trace and check, versus an unnamed blog."],
      ["Relevance", "Whether information is pertinent to your purpose and relates directly to your question.", "Equine therapy research is relevant to a school offering emotional support."],
      ["Validity", "Whether information is accurate in that it tells the whole story, not just part of it.", "A claim backed by good studies that ignores equally good studies against it."],
      ["Hallucination", "When GenAI produces convincing but false information, including sources that don't exist.", "An AI describing “Horse Sense Magazine” as reputable when no such magazine exists."]
    ],
    cards: [
      { d: 1, q: "What does RRV stand for?", af: "rrv", o: [
        ["Reliability, relevance, validity", "Correct. Reliability, relevance and validity: three tests for any information you use."],
        ["Research, review, verify", "Good habits, but not RRV."],
        ["Reliability, relevance, veracity", "Close, but the V is validity: does it tell the whole story?"],
        ["Relevance, reputation, value", "Only relevance is right."]],
        k: "Reliable? Relevant? Valid?" },
      { d: 1, q: "Which RRV test asks whether information tells the whole story?", o: [
        ["Validity", "Correct. Validity asks whether the information is complete and accurate, not just partly true."],
        ["Reliability", "That asks whether the source is trustworthy."],
        ["Relevance", "That asks whether it's pertinent to your purpose."],
        ["Recency", "Not one of the three tests."]],
        k: "Validity = the whole story." },
      { d: 1, q: "Which RRV test asks whether information is pertinent to your purpose?", o: [
        ["Relevance", "Correct. Relevance checks the information against your purpose."],
        ["Reliability", "That's about trustworthiness."],
        ["Validity", "That's about the whole story."],
        ["Verifiability", "Part of reliability, not a separate test."]],
        k: "Relevance links back to Purpose." },
      { d: 2, q: "What happened when the board asked two AI tools about “Horse Sense Magazine”?", o: [
        ["One couldn't find it; another vouched for it", "Correct. The magazine didn't exist: a convincing hallucination."],
        ["Both confirmed it was a respected peer-reviewed journal", "Only one vouched for it, wrongly."],
        ["Both refused to answer questions about therapy", "They both answered."],
        ["Both found the article and agreed with Malik", "Neither could truly find it, because it didn't exist."]],
        k: "AI can vouch for sources that don't exist." },
      { d: 2, q: "What does validating a claim require, according to the course?", o: [
        ["Evidence for and against it", "Correct. Reliable, relevant information that both confirms and disconfirms it."],
        ["One reliable source that confirms it", "Confirmation alone isn't validation."],
        ["Agreement from at least two AI tools", "Two tools can share the same error."],
        ["A majority vote of the people affected", "Votes aren't evidence."]],
        k: "Validate both ways." },
      { d: 2, q: "Why does the course say you still need your own critical thinking when GenAI gives you a source?", o: [
        ["The source may be unreliable, or may not exist", "Correct. GenAI can cite weak sources, or invent ones that don't exist, so check them yourself."],
        ["AI tools are never right about sources, so ignore any they give you", "They're often right; you just have to check."],
        ["Sources are only needed for academic work", "Sources matter for any decision."],
        ["AI only cites sources it has paid for", "Not true."]],
        k: "Check the source behind the source." },
      { d: 2, q: "When the evidence on horse therapy was inconclusive, what did the board do?", o: [
        ["Ran six-month trials of horse and dog therapy", "Correct. Half the students each."],
        ["Rejected Malik's idea because the source was fake", "The idea was still relevant; only the source failed."],
        ["Adopted horse therapy for every student straight away", "The evidence didn't justify that."],
        ["Asked GenAI to make the final decision for them", "They decided themselves."]],
        k: "When evidence is unclear, test small." },
      { d: 3, q: "A vendor's brochure says its sensors cut energy use by 40%, citing “an independent study” it won't share. Which RRV test fails first?", o: [
        ["Reliability: the evidence can't be verified", "Correct. If you can't see the study, you can't check it, so the claim isn't reliable yet."],
        ["Relevance: energy savings don't matter here", "Energy savings are clearly relevant."],
        ["Validity: 40% is too round a number", "A round number isn't the problem."],
        ["None; brochures are always reliable", "Marketing claims need checking too."]],
        k: "Unverifiable = unreliable." },
      { d: 3, q: "A colleague shares the claim that “90% of online content may be AI-generated by 2026”. What's the critical-thinking response?", o: [
        ["Ask who the experts are and on what evidence", "Correct. That's exactly the course's point."],
        ["Share it widely, since experts said it", "That's authority bias."],
        ["Ignore it, since all statistics are made up", "That's cynicism."],
        ["Assume it's true because it sounds plausible", "Plausible isn't verified."]],
        k: "Who says so, and on what evidence?" }
    ],
    flips: [
      { d: 2, f: "Run the RRV test on Malik's horse-therapy claim.", b: "Relevance: yes, emotional support for at-risk students is part of the school's purpose. Reliability: no, the cited “Horse Sense Magazine” didn't exist, though one AI tool vouched for it. Validity: unclear, because reliable studies for and against weren't conclusive. So the board ran six-month trials of horse therapy and dog therapy instead of deciding on a weak source." }
    ]
  }

  ]
});
