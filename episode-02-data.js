window.episodeTwoProduction = {
  title: "رماد تحت العرش",
  en: "EPISODE 02 · ASH BENEATH THE THRONE",
  summary: "حلقة سياسية مشحونة تبدأ بتلخيص الحلقة الأولى، ثم تنتقل إلى صراع يقوده الحوار بين الشخصيات: إشاعة منظمة، خيانة داخل القصر، محاولة سرقة، وآزر يوجّه الجميع إلى أن الخطر الحقيقي في الداخل.",
  format: "Vertical 9:16 · Google Flow Omni",
  voiceSystem: "الراوية الأنثوية الإنجليزية تظهر في Previously On، ومشاهد الغموض المختارة، وNext Episode فقط. بقية الحلقة يقودها حوار الشخصيات.",
  locations: ["capital-market-rooftops", "royal-inner-passages"],
  watermark: {
    master: "assets/branding/fire-covenant-yehia-digital-watermark-v1.png",
    overlay: "assets/branding/fire-covenant-yehia-digital-watermark-512-v1.png",
    usage: "ضع نسخة 512×512 أعلى يمين فيديو 1080×1920 بعرض 110–135px، شفافية 65–75%، ومسافة 45px من الحواف."
  },
  rules: [
    "ارفع Scene Sheet أولًا؛ هي المرجع الحاسم لترتيب اللقطات والكادرات والإيقاع.",
    "ارفع بعدها ملفات الشخصيات والمواقع بالترتيب المحدد داخل كل مشهد.",
    "أعد بناء كل Panel كلقطة Full Screen مستقلة؛ لا تحرّك شبكة الشيت أو الأرقام أو الفواصل.",
    "ثبّت هوية الوجوه والملابس والأسلحة والعمارة من ملفات Character وLocation.",
    "الراوية ثابتة: صوت أنثوي إنجليزي عميق وناضج وهادئ، بنفس النبرة والجودة في كل ظهور.",
    "المشاهد الوسطية تعتمد على حوار الشخصيات، ولا تُضف راويًا أو حوارًا غير مكتوب.",
    "لا تُظهر هوية الخائن أو وجهه أو جنسه، ولا تخلط ألوان وشعارات الحرس والرايات السوداء.",
    "استخدم علامة YEHIA.DIGITAL الشفافة في المونتاج النهائي فقط، ولا تطلب من مولّد الفيديو إعادة رسمها."
  ],
  scenes: [
    {
      id: "scene-00",
      order: "00",
      title: "ما حدث في الحلقة السابقة",
      en: "PREVIOUSLY ON EPISODE 01",
      duration: "10 ثوانٍ",
      location: "ملخص الحلقة الأولى",
      cast: "البيضة · زين · يحيى · علياء · آزر · ليان · نادر",
      image: "assets/episode-02/scene-00-previously-on-episode-01-recap-sheet-v1.png",
      purpose: "ربط الحلقة الثانية مباشرة باكتشاف البيضة ووصولها إلى القصر واستجابة آزر وليان وبدء تحرك نادر.",
      narrator: "راوية فقط: “They found the last egg... and carried it to the throne. The dragon answered. The enemy did too.”",
      screenText: ["PREVIOUSLY ON"],
      attachments: [
        {src:"assets/episode-02/scene-00-previously-on-episode-01-recap-sheet-v1.png",name:"Scene 00 Recap Sheet",type:"المرجع الوحيد",role:"استخدمه لترتيب لقطات الملخص. لا ترفع مراجع إضافية حتى لا يغيّر Flow الشخصيات أو يعيد بناء أحداث جديدة."}
      ],
      imagePrompt: `CREATE ONE PORTRAIT 9:16 CINEMATIC RECAP SCENE SHEET.

LAYOUT LOCK:
Exactly eight equal vertical panels in a strict 4-column by 2-row grid, thin dark separators, small shot numbers and timestamps only.

RECAP PANELS:
01 royal scouts uncover the intact black-scaled egg beneath burned ruins;
02 the heavy egg is covered and loaded into the courier wagon;
03 the wagon races toward the Eastern Gate while four Black Banner riders pursue;
04 exact Zayn orders the gate opened and the wagon crosses;
05 exact King Yahia, Queen Alia and Azar confront the covered egg in the Great Hall;
06 Azar lowers his ancient head toward the intact egg;
07 exact Layan's marked palm answers one restrained amber pulse;
08 exact Nader raises the Black Banners before dawn.

STYLE:
Premium live-action Arab medieval dark fantasy, blackened armor, muted gold, forest green, deep crimson, grounded anatomy, realistic scale and coherent continuity.

NEGATIVE:
No new event, no egg hatching, no extra dragon, no face drift, no captions beyond panel numbers and timestamps, no grid distortion or watermark.`,
      motionPrompt: `CREATE A 10-SECOND VERTICAL 9:16 “PREVIOUSLY ON” MONTAGE.

Use the uploaded Scene Sheet as the only visual authority. Reconstruct its eight panels as full-screen live-action shots; never animate the flat sheet.

TIMELINE:
00:00–00:01.1 — fast descent into the ruins and reveal the intact egg.
00:01.1–00:02.1 — canvas pulls over the egg and match-cuts to the wagon.
00:02.1–00:03.4 — aggressive aerial chase toward the Eastern Gate.
00:03.4–00:04.5 — Zayn signals; the wagon clears the gate.
00:04.5–00:05.7 — Great Hall reveal before the royal family.
00:05.7–00:06.8 — Azar lowers his head toward the egg.
00:06.8–00:08.0 — Layan's palm mark and the egg pulse once.
00:08.0–00:10.0 — Nader raises the banners; hard cut to black.

FEMALE NARRATOR:
Use the established deep, mature English female voice:
"They found the last egg... and carried it to the throne. The dragon answered. The enemy did too."

TEXT:
Show only "PREVIOUSLY ON" at the opening.

AUDIO:
Low strings, restrained war drums, stone, canvas, galloping horses, gate impact, dragon breath, organic egg pulse and one final banner snap.

NEGATIVE:
No character dialogue, subtitles, new characters, egg crack, hatchling, extra dragon, face morphing, slideshow, grid, logo or watermark.`
    },
    {
      id: "scene-01",
      order: "01",
      title: "رماد فوق المدينة",
      en: "ASH OVER THE CITY",
      duration: "8 ثوانٍ",
      location: "العاصمة · السوق والأسطح · صباح اليوم التالي",
      cast: "المواطنون · الحرس الملكي",
      image: "assets/episode-02/scene-01-ash-over-the-city-sheet-v1.png",
      purpose: "افتتاح الحاضر بإظهار أن المعلومة تحولت خلال ليلة واحدة إلى منشورات وشك عام يهدد ثقة الناس في الملك.",
      narrator: "لا يوجد راوي — حوار المواطنين والحرس يقود المشهد.",
      screenText: ["THE NEXT MORNING"],
      attachments: [
        {src:"assets/episode-02/scene-01-ash-over-the-city-sheet-v1.png",name:"Scene 01 Sheet",type:"المرجع الأول",role:"ترتيب اللقطات وانتقال المنشورات من السماء إلى السوق."},
        {src:"assets/golden-city.webp",name:"Golden Capital",type:"هوية المدينة",role:"الأفق والقصر والعمارة العامة للعاصمة."},
        {src:"assets/capital-market-rooftops.webp",name:"Capital Market & Rooftops",type:"هوية الموقع",role:"السوق، القناة، الجسر، الأزقة والأسطح."},
        {src:"assets/army-pack.webp",name:"Army Pack",type:"الحرس والمواطنون",role:"استخدم الحرس الملكي فقط بأخضر داكن وبرونز."}
      ],
      imagePrompt: `CREATE A PORTRAIT 9:16 EIGHT-PANEL SCENE SHEET IN A STRICT EQUAL 4×2 GRID.

Show the morning after Episode 01 across the approved Golden Capital and Capital Market: propaganda sheets released above the city, papers landing on roofs and canal, citizens reading the claim that the King hid a dragon egg, fear spreading through the market, one Royal Guard confronting the crowd, an older citizen challenging him, and the palace visible above the growing unrest. Use varied aerial, macro, street-level, over-shoulder and compressed lenses. Premium photoreal Arab medieval fantasy, warm stone under cold morning haze.

Only panel numbers and timestamps. No readable propaganda text except a simple black egg symbol. No combat, fire, modern objects, face duplication, architecture drift or watermark.`,
      motionPrompt: `CREATE ONE CONTINUOUS 8-SECOND VERTICAL 9:16 CINEMATIC SCENE.

00:00–00:01 — descend behind propaganda papers falling over the capital; show "THE NEXT MORNING".
00:01–00:02 — follow one sheet onto a market rooftop.
00:02–00:03 — match-cut the paper into a citizen's hands beside the canal.
00:03–00:04 — orbit through whispering citizens as concern spreads.
00:04–00:05.3 — Royal Guard steps forward and clears the path.
00:05.3–00:06.5 — older citizen challenges from offscreen; crowd turns.
00:06.5–00:08 — pull upward toward the palace while papers fill the foreground.

DIALOGUE:
MARKET WOMAN: "A dragon egg... inside the palace?"
ROYAL GUARD: "Enough. Keep moving."
OLDER MALE CITIZEN, OFFSCREEN: "Then why hide it?"

No narrator.

AUDIO:
Morning market ambience, paper flutter, canal water, uneasy whispers, armor step, restrained low strings and a distant bell.

TRANSITIONS:
Paper wipe, rooftop-to-hand match cut, crowd eye-line to palace.

NEGATIVE:
No subtitles, extra dialogue, riot, violence, fire, Black Banner uniforms, face drift, slideshow, grid, logo or watermark.`
    },
    {
      id: "scene-02",
      order: "02",
      title: "الرجل خلف الهمس",
      en: "THE MAN BEHIND THE WHISPER",
      duration: "10 ثوانٍ",
      location: "معسكر الرايات السوداء · خيمة القيادة",
      cast: "نادر · أربعة عملاء",
      image: "assets/episode-02/scene-02-the-man-behind-the-whisper-sheet-v1.png",
      purpose: "كشف أن غضب السوق ليس عفويًا؛ نادر يهاجم ثقة الناس في العرش بدلًا من مهاجمة القصر مباشرة.",
      narrator: "لا يوجد راوي — حوار نادر وعميله يقود المشهد.",
      screenText: [],
      attachments: [
        {src:"assets/episode-02/scene-02-the-man-behind-the-whisper-sheet-v1.png",name:"Scene 02 Sheet",type:"المرجع الأول",role:"تسلسل الخطة وتوزيع الحزم وخروج العملاء."},
        {src:"assets/nader.webp",name:"Nader Character Sheet",type:"هوية الشخصية",role:"ثبّت وجه نادر وندبته ودرعه ووشاحه النبيذي."},
        {src:"assets/black-banners-camp.webp",name:"Black Banners Camp",type:"هوية الموقع",role:"خيمة القيادة والخريطة والمعسكر المنظم."},
        {src:"assets/army-pack.webp",name:"Army Pack",type:"هوية العملاء",role:"استخدم أربعة عملاء رايات سوداء فقط بأقنعة وهوية فصيل ثابتة."}
      ],
      imagePrompt: `CREATE A STRICT 4×2 EIGHT-PANEL PORTRAIT 9:16 CINEMATIC SCENE SHEET.

Inside the approved Black Banners Camp, exact Nader studies a detailed capital map. Exactly four masked agents stand around him. Show propaganda packets, marked market routes, Nader explaining the strategy, one lead agent questioning him, four packets distributed, four riders leaving separately, and Nader watching the distant capital. Keep Nader's exact face, swept dark hair, beard, scar, black armor and burgundy scarf. Premium live-action political dark fantasy, controlled firelight and cold moonlight.

No attack, no extra agents, no duplicated riders, no readable modern map labels, no demon styling, captions or watermark.`,
      motionPrompt: `CREATE A 10-SECOND VERTICAL 9:16 POLITICAL-THRILLER SCENE.

00:00–00:01.2 — macro slide over the capital map and four sealed packets.
00:01.2–00:02.7 — rise to exact Nader addressing exactly four agents.
00:02.7–00:04.2 — orbit to the lead agent as he questions the plan.
00:04.2–00:05.8 — push into Nader's calm face for his answer.
00:05.8–00:07.1 — four packets pass to four gloved hands.
00:07.1–00:08.5 — cloak wipe to four riders leaving by separate routes.
00:08.5–00:10 — slow push as Nader watches the capital.

DIALOGUE:
NADER: "Do not attack the throne."
LEAD AGENT: "Then what do we attack?"
NADER: "Their trust."

No narrator.

AUDIO:
Tent wind, map paper, wax packets, leather, horse tack, low cello ostinato, restrained drum pulse and one cold metallic sting after "Their trust."

NEGATIVE:
Exactly four agents and four riders. No subtitles, extra dialogue, face drift, royal colors, battle, modern objects, slideshow, grid, logo or watermark.`
    },
    {
      id: "scene-03",
      order: "03",
      title: "أمر الملك",
      en: "THE KING'S ORDER",
      duration: "10 ثوانٍ",
      location: "قاعة الحكم · الممرات الملكية",
      cast: "يحيى · زين · رسول · الحرس",
      image: "assets/episode-02/scene-03-the-kings-order-sheet-v1.png",
      purpose: "يرد يحيى على انتشار المنشورات بعزل القاعة ونقل البيضة سرًا، وهو القرار الذي يضعها داخل طريق الخائن.",
      narrator: "لا يوجد راوي — حوار الملك وزين والحارس يقود المشهد.",
      screenText: [],
      attachments: [
        {src:"assets/episode-02/scene-03-the-kings-order-sheet-v1.png",name:"Scene 03 Sheet",type:"المرجع الأول",role:"ترتيب وصول المنشورات، أمر الملك، وتغطية البيضة ونقلها."},
        {src:"assets/king-yahia.webp",name:"King Yahia",type:"هوية الملك",role:"المرجع الوحيد لوجه يحيى ودرعه وتاجه."},
        {src:"assets/zayn.webp",name:"Zayn",type:"هوية زين",role:"ثبّت وجه زين وندبته ودرعه وعباءته الخضراء."},
        {src:"assets/great-hall.webp",name:"Great Hall",type:"هوية الموقع",role:"قاعة الأمر ومنصة الحكم."},
        {src:"assets/royal-inner-passages.webp",name:"Royal Inner Passages",type:"مسار النقل",role:"الممر السري الذي تسلكه العربة المغطاة."}
      ],
      imagePrompt: `CREATE AN EIGHT-PANEL PORTRAIT 9:16 SCENE SHEET, EXACTLY FOUR EQUAL VERTICAL PANELS ABOVE FOUR.

Show a guard messenger bringing propaganda sheets into the approved Great Hall; exact King Yahia reads one beside exact Zayn; the King orders a lockdown; guards cover the intact egg on its cart; the concealed door opens; a small escort moves the cart into the approved Royal Inner Passages; the Great Hall doors close behind them. Preserve distinct King and Zayn identities. Cold morning shafts, amber torches, black stone and aged bronze.

No Azar close-up, no egg damage, no face merge, no extra readable text, captions or watermark.`,
      motionPrompt: `CREATE A 10-SECOND VERTICAL 9:16 ROYAL-THRILLER SCENE.

00:00–00:01.3 — guard crosses the Great Hall carrying propaganda.
00:01.3–00:02.4 — paper lands before King Yahia.
00:02.4–00:04.2 — controlled push between King and Zayn during the order.
00:04.2–00:05.5 — guards pull canvas over the intact egg.
00:05.5–00:06.8 — hidden door opens through a bronze mechanism.
00:06.8–00:08.5 — track backward before the covered cart entering the inner passages.
00:08.5–00:10 — massive door closes and cuts to darkness.

DIALOGUE:
GUARD: "Majesty... these were found across the city."
KING YAHIA: "Until we understand what returned... no one leaves this hall."
ZAYN: "And the egg?"
KING YAHIA, OFFSCREEN: "Move it below. Quietly."

No narrator.

AUDIO:
Boots, paper, low court murmur, canvas, cart wheels, bronze lock, stone door and restrained bass tension.

NEGATIVE:
No subtitles, extra speech, King/Zayn identity swap, visible traitor, egg crack, attack, slideshow, grid, logo or watermark.`
    },
    {
      id: "scene-04",
      order: "04",
      title: "الاسم يعود",
      en: "THE NAME RETURNS",
      duration: "10 ثوانٍ",
      location: "الممرات الملكية · ذكرى قيس",
      cast: "زين · قيس · البيضة",
      image: "assets/episode-02/scene-04-the-name-returns-sheet-v1.png",
      purpose: "نبضة البيضة تستدعي ذكرى قيس وتؤكد أن الاسم المحذوف من التاريخ مرتبط مباشرة بالعهد.",
      narrator: "راوية غموض: “Some names are buried for a reason... but the egg remembered his.”",
      screenText: ["QAIS", "FORMER ROYAL COMMANDER", "EXILED. NEVER FORGOTTEN."],
      attachments: [
        {src:"assets/episode-02/scene-04-the-name-returns-sheet-v1.png",name:"Scene 04 Sheet",type:"المرجع الأول",role:"تسلسل النبضة والذاكرة والـHero Freeze."},
        {src:"assets/qais.webp",name:"Qais Character Sheet",type:"هوية قيس",role:"المرجع الحاسم لأول ظهور واضح لقيس."},
        {src:"assets/zayn.webp",name:"Zayn Character Sheet",type:"هوية زين",role:"ثبّت وجه زين وندبته أثناء رد الفعل."},
        {src:"assets/royal-inner-passages.webp",name:"Royal Inner Passages",type:"هوية الموقع",role:"الممر الحالي ومكان ظهور أثر الذاكرة."},
        {src:"assets/azar-and-egg.webp",name:"Dragon Egg",type:"مرجع العنصر",role:"استخدم البيضة فقط؛ تجاهل آزر في هذا المشهد."}
      ],
      imagePrompt: `CREATE A STRICT 4×2 EIGHT-PANEL PORTRAIT SCENE SHEET.

The covered egg cart stops in the Royal Inner Passages; one ember pulse passes through the intact egg; exact Zayn touches an old broken insignia; fractured memory images reveal exact Qais as former Royal Commander; show Qais turning during an old emergency, his broken Covenant insignia, Zayn recognizing him, then a clean chest-up Qais hero composition with negative space for text. Premium photoreal memory fragments with restrained desaturation, ash and amber light. Qais and Zayn remain different men.

No hatchling, adult dragon, face merge, glowing weapon, readable text beyond panel labels or watermark.`,
      motionPrompt: `CREATE A 10-SECOND VERTICAL 9:16 MYSTERY FLASHBACK.

00:00–00:01.2 — cart stops; camera pushes under the canvas toward one egg pulse.
00:01.2–00:02.5 — amber reflection travels across Zayn's eye and broken insignia.
00:02.5–00:04.6 — rapid fractured flashback: Qais in the old corridor, ash, cloak and broken Covenant mark.
00:04.6–00:05.8 — return to Zayn; he says one name.
00:05.8–00:06.0 — whip into exact chest-up Qais composition.
00:06.0–00:08.0 — freeze Qais completely for two seconds.
00:08.0–00:10 — text wipes away; Qais disappears into smoke; hard return to the corridor.

FEMALE NARRATOR:
"Some names are buried for a reason... but the egg remembered his."

ZAYN:
"Qais."

FREEZE TEXT:
QAIS
FORMER ROYAL COMMANDER
EXILED. NEVER FORGOTTEN.

AUDIO:
Low pulse, reversed breath, distant steel, deep bass impact at freeze, suspended percussion and an unresolved metallic tail.

NEGATIVE:
Do not morph or move Qais during the freeze. No text errors, subtitles, extra dialogue, egg crack, dragon, face drift, slideshow, grid, logo or watermark.`
    },
    {
      id: "scene-05",
      order: "05",
      title: "حريق السوق",
      en: "FIRE IN THE MARKET",
      duration: "10 ثوانٍ",
      location: "سوق العاصمة",
      cast: "عميل محرض · المواطنون · الحرس",
      image: "assets/episode-02/scene-05-fire-in-the-market-sheet-v1.png",
      purpose: "ينقل نادر الإشاعة إلى أزمة ملموسة عبر دليل مزيف وحريق محدود يشعلان غضب السوق من غير معركة مفتوحة.",
      narrator: "لا يوجد راوي — المحرض والمواطنون والحرس يقودون المشهد.",
      screenText: ["THE KING LIED"],
      attachments: [
        {src:"assets/episode-02/scene-05-fire-in-the-market-sheet-v1.png",name:"Scene 05 Sheet",type:"المرجع الأول",role:"زرع القشرة المزيفة والحريق والخطاب وهروب العميل."},
        {src:"assets/capital-market-rooftops.webp",name:"Capital Market & Rooftops",type:"هوية الموقع",role:"السوق والقناة والجسر ومخرج العميل."},
        {src:"assets/golden-city.webp",name:"Golden Capital",type:"استمرارية المدينة",role:"الأفق والقصر فوق السوق."},
        {src:"assets/army-pack.webp",name:"Army Pack",type:"الحرس والعميل",role:"افصل بوضوح ألوان الحرس عن العميل الأسود المقنّع."}
      ],
      imagePrompt: `CREATE A PORTRAIT 9:16 CINEMATIC SCENE SHEET WITH EXACTLY EIGHT EQUAL PANELS IN A 4×2 GRID.

At the approved Capital Market, a masked agent plants a false black shell fragment; a controlled cart fire begins; citizens gather; the agitator raises the fragment and blames the King; Royal Guards push through to clear the street and extinguish the fire; the agent slips into the service alley and climbs toward the rooftops. Grounded crowd tension, no massacre, limited practical fire, Golden Capital visible above.

No dragon, real egg, gore, modern objects, duplicated crowd, captions or watermark.`,
      motionPrompt: `CREATE A 10-SECOND VERTICAL 9:16 MARKET-UNREST SCENE.

00:00–00:01.2 — macro gloved hand plants a false shell fragment beneath a cart.
00:01.2–00:02.4 — spark catches cloth; controlled smoke rises.
00:02.4–00:03.7 — handheld push through citizens toward the fragment.
00:03.7–00:05.5 — agitator raises it and points toward the palace.
00:05.5–00:06.8 — crowd reacts; guard line enters.
00:06.8–00:08.1 — guards clear the lane and smother the fire.
00:08.1–00:10 — agent escapes into the alley; camera follows to rooftop stairs.

DIALOGUE:
AGITATOR: "The King hid this beneath your homes!"
CIVILIAN: "He brought it inside the city?"
ROYAL GUARD: "Clear the street!"

TEXT:
THE KING LIED

No narrator.

AUDIO:
Market crowd, sudden flame, wood crack, water, guard armor, low drums and urgent strings.

NEGATIVE:
No riot massacre, gore, real egg, dragon, subtitles, extra dialogue, uncontrolled fire, face drift, slideshow, grid, logo or watermark.`
    },
    {
      id: "scene-06",
      order: "06",
      title: "مطاردة فوق السوق",
      en: "CHASE ABOVE THE MARKET",
      duration: "10 ثوانٍ",
      location: "السوق · الأزقة · الأسطح",
      cast: "زين · رسول مقنّع · الحرس",
      image: "assets/episode-02/scene-06-chase-above-the-market-sheet-v1.png",
      purpose: "يحوّل زين الفوضى إلى مطاردة فعلية، لكنه يحصل على رسالة أخطر من القبض على العميل: المرسل شخص يثق به.",
      narrator: "لا يوجد راوي — حوار الحرس وزين والرسول يقود المشهد.",
      screenText: [],
      attachments: [
        {src:"assets/episode-02/scene-06-chase-above-the-market-sheet-v1.png",name:"Scene 06 Sheet",type:"المرجع الأول",role:"مسار المطاردة من السوق إلى الأسطح وسقوط الحزمة."},
        {src:"assets/zayn.webp",name:"Zayn Character Sheet",type:"هوية البطل",role:"ثبّت وجه زين وندبته ودرعه وعباءته."},
        {src:"assets/capital-market-rooftops.webp",name:"Capital Market & Rooftops",type:"جغرافيا الأكشن",role:"المرجع الحاسم للسلم والجسر والأسطح ومسافات القفز."},
        {src:"assets/army-pack.webp",name:"Army Pack",type:"هوية الفصائل",role:"الحرس الملكي والرسول الأسود من دون خلط الألوان."}
      ],
      imagePrompt: `CREATE A STRICT EIGHT-PANEL 4×2 PORTRAIT 9:16 ACTION SCENE SHEET.

Exact Zayn spots one masked courier escaping the market, chases him through a service alley, climbs exterior stairs, crosses connected rooftops, performs one believable jump, nearly catches the courier at a roof edge, and a sealed packet falls between them before the courier escapes. Use the approved Market & Rooftops as coherent action geography. Varied long lens, low tracking, overhead and close combat framing.

No duplicated courier, lethal strike, gore, impossible parkour, modern object, face drift, captions or watermark.`,
      motionPrompt: `CREATE A 10-SECOND VERTICAL 9:16 ROOFTOP CHASE.

00:00–00:01.1 — Zayn sees the courier and accelerates through the market.
00:01.1–00:02.3 — low tracking through the service alley.
00:02.3–00:03.6 — whip upward along exterior stairs.
00:03.6–00:05.0 — side tracking over rooftops; one believable jump.
00:05.0–00:06.4 — guard shouts from below; Zayn redirects him.
00:06.4–00:07.8 — Zayn nearly catches the courier at the edge.
00:07.8–00:08.8 — courier twists free and drops a sealed packet.
00:08.8–00:10 — macro packet lands; courier answers and disappears.

DIALOGUE:
GUARD: "Captain! He's heading for the rooftops!"
ZAYN: "Cut him off below!"
ZAYN: "Who sent you?"
COURIER: "Someone you trust."

No narrator.

AUDIO:
Fast footsteps, cloth, roof tiles, market echoes, breath, one impact, packet landing, aggressive cellos and restrained war drums.

NEGATIVE:
No subtitles, extra courier, face change, glowing weapon, gore, impossible jump, slideshow, grid, logo or watermark.`
    },
    {
      id: "scene-07",
      order: "07",
      title: "الختم الملكي",
      en: "THE ROYAL SEAL",
      duration: "10 ثوانٍ",
      location: "أسطح العاصمة · الممرات الملكية",
      cast: "زين",
      image: "assets/episode-02/scene-07-the-royal-seal-sheet-v1.png",
      purpose: "يكتشف زين أن الحزمة تحمل ختمًا ملكيًا وخريطة طريق تنتهي داخل القصر، فتتحول المؤامرة من إشاعة خارجية إلى خيانة داخلية.",
      narrator: "راوية غموض: “A royal seal should have meant loyalty... instead, it opened a path to betrayal.”",
      screenText: [],
      attachments: [
        {src:"assets/episode-02/scene-07-the-royal-seal-sheet-v1.png",name:"Scene 07 Sheet",type:"المرجع الأول",role:"فتح الحزمة وكشف الختم والطريق والعودة إلى القصر."},
        {src:"assets/zayn.webp",name:"Zayn Character Sheet",type:"هوية زين",role:"ثبّت وجه زين وندبته وملابسه."},
        {src:"assets/royal-inner-passages.webp",name:"Royal Inner Passages",type:"هوية الطريق",role:"الممر الذي تكشفه الخريطة."},
        {src:"assets/capital-market-rooftops.webp",name:"Market Rooftops",type:"بداية المشهد",role:"سطح العثور على الحزمة."},
        {src:"assets/golden-city.webp",name:"Golden Capital",type:"استمرارية",role:"مسار النظر من السطح إلى القصر."}
      ],
      imagePrompt: `CREATE AN EIGHT-PANEL PORTRAIT 9:16 MYSTERY SCENE SHEET IN A STRICT 4×2 GRID.

Exact Zayn retrieves the dropped packet on a rooftop; macro royal wax seal; he opens it and finds a route diagram; the route aligns from market rooftops to a concealed palace entrance; match the wax emblem to a royal architectural insignia; Zayn returns through the approved inner passage and studies the exact junction. Premium grounded political fantasy, cold dusk and restrained gold detail.

No visible traitor, magic map, readable modern labels, extra character, face drift, captions or watermark.`,
      motionPrompt: `CREATE A 10-SECOND VERTICAL 9:16 INVESTIGATION SCENE.

00:00–00:01.3 — macro packet and Zayn's gloved hand.
00:01.3–00:02.6 — controlled orbit as he studies the royal seal.
00:02.6–00:04.0 — wax breaks; route map unfolds.
00:04.0–00:05.4 — overhead camera traces the route with light and shadow only.
00:05.4–00:06.8 — match-cut seal symbol to palace bronze insignia.
00:06.8–00:08.3 — tracking behind Zayn entering the inner passages.
00:08.3–00:10 — push to the marked junction and Zayn's realization.

FEMALE NARRATOR:
"A royal seal should have meant loyalty... instead, it opened a path to betrayal."

ZAYN:
"This route leads inside the palace."

AUDIO:
Wind, paper, wax break, distant city, corridor footsteps, low strings, muted metal and unresolved bass.

NEGATIVE:
No subtitles, extra speech, visible traitor, magical map, face drift, slideshow, grid, logo or watermark.`
    },
    {
      id: "scene-08",
      order: "08",
      title: "البيضة تسمع الغضب",
      en: "THE EGG HEARS ANGER",
      duration: "10 ثوانٍ",
      location: "الحجرة السفلية · الممرات الملكية",
      cast: "ليان · البيضة",
      image: "assets/episode-02/scene-08-the-egg-hears-anger-sheet-v1.png",
      purpose: "تكشف علاقة ليان بالبيضة أنها لا تسمع الأصوات بل تستجيب للخيانة، ثم يقودها النبض إلى موقع حراسة خالٍ.",
      narrator: "راوية غموض: “The egg did not hear voices... it heard betrayal.”",
      screenText: [],
      attachments: [
        {src:"assets/episode-02/scene-08-the-egg-hears-anger-sheet-v1.png",name:"Scene 08 Sheet",type:"المرجع الأول",role:"النبضة وعلامة الكف وتتبعها حتى موقع الحراسة."},
        {src:"assets/layan.webp",name:"Layan Character Sheet",type:"هوية ليان",role:"ثبّت الوجه والغطاء والملابس وعلامة كف واحدة."},
        {src:"assets/azar-and-egg.webp",name:"Dragon Egg",type:"مرجع العنصر",role:"استخدم البيضة فقط، سليمة وثقيلة."},
        {src:"assets/lower-chamber.webp",name:"Lower Chamber",type:"هوية الموقع",role:"منصة البيضة والإضاءة والقنوات."},
        {src:"assets/royal-inner-passages.webp",name:"Royal Inner Passages",type:"نهاية المشهد",role:"موقع الحراسة الخالي والمفاتيح."}
      ],
      imagePrompt: `CREATE A STRICT 4×2 EIGHT-PANEL PORTRAIT 9:16 SCENE SHEET.

Exact Layan studies the intact egg in the approved Lower Chamber; distant anger vibrates faintly through stone; one amber pulse crosses the egg; her single palm mark answers; she follows the pulse into the Royal Inner Passages; discovers an empty guard post, abandoned helmet and keys; final close-up of one missing key position. Intimate mystery, dark volcanic stone, amber pulse and teal wardrobe accent.

No Azar, hatchling, egg damage, second palm mark, visible attacker, captions or watermark.`,
      motionPrompt: `CREATE A 10-SECOND VERTICAL 9:16 MYSTERY SCENE.

00:00–00:01.3 — slow orbit from Layan to the intact egg.
00:01.3–00:02.6 — low vibration; oil flames move; egg pulses.
00:02.6–00:04.0 — macro palm mark answers without touching.
00:04.0–00:05.3 — Layan follows the fading glow toward the passage.
00:05.3–00:06.8 — shoulder tracking through the corridor.
00:06.8–00:08.1 — reveal the empty guard post.
00:08.1–00:09.1 — helmet and key ring on stone.
00:09.1–00:10 — macro missing key position.

FEMALE NARRATOR:
"The egg did not hear voices... it heard betrayal."

LAYAN:
"What did you hear?"
LAYAN, INTO THE EMPTY CORRIDOR: "Guard?"

AUDIO:
Subterranean drone, egg pulse, lamp vibration, quiet footsteps, distant metal and one missing-key sting.

NEGATIVE:
No subtitles, extra dialogue, Azar, egg crack, attacker reveal, face drift, slideshow, grid, logo or watermark.`
    },
    {
      id: "scene-09",
      order: "09",
      title: "الحارس المفقود",
      en: "THE MISSING GUARD",
      duration: "10 ثوانٍ",
      location: "الممرات الملكية",
      cast: "علياء · ليان · الحرس",
      image: "assets/episode-02/scene-09-the-missing-guard-sheet-v1.png",
      purpose: "تبدأ علياء وليان تحقيقًا داخليًا يكشف مفتاحًا مفقودًا وسجل حراسة معدلًا وبابًا سريًا يقود نحو الحجرة.",
      narrator: "لا يوجد راوي — حوار علياء وليان يقود التحقيق.",
      screenText: [],
      attachments: [
        {src:"assets/episode-02/scene-09-the-missing-guard-sheet-v1.png",name:"Scene 09 Sheet",type:"المرجع الأول",role:"الأدلة والسجل والباب المخفي والظل الأخير."},
        {src:"assets/queen-alia.webp",name:"Queen Alia",type:"هوية الملكة",role:"ثبّت وجه علياء وحجابها ودرعها الخفيف."},
        {src:"assets/layan.webp",name:"Layan",type:"هوية ليان",role:"ثبّت هويتها وملابسها وعلامة الكف."},
        {src:"assets/royal-inner-passages.webp",name:"Royal Inner Passages",type:"هوية الموقع",role:"التقاطع وسجل الحراسة والباب السري."},
        {src:"assets/army-pack.webp",name:"Army Pack",type:"هوية الحرس",role:"استخدم عددًا محدودًا من الحرس الملكي فقط."}
      ],
      imagePrompt: `CREATE AN EIGHT-PANEL PORTRAIT 9:16 INVESTIGATION SHEET, STRICT EQUAL 4×2 GRID.

Exact Queen Alia arrives at the empty guard post with exact Layan; abandoned helmet and keys; one key is missing; they compare a tampered duty roster; Layan explains the egg reacted before the disappearance; they locate a concealed dragon-relief door; a distant anonymous silhouette crosses behind it; Alia orders the corridor sealed. Premium live-action palace thriller.

No traitor identity, corpse, gore, face drift, exposed hair, extra text, captions or watermark.`,
      motionPrompt: `CREATE A 10-SECOND VERTICAL 9:16 DIALOGUE-DRIVEN INVESTIGATION.

00:00–00:01.2 — Queen Alia enters the empty post.
00:01.2–00:02.4 — macro abandoned helmet and keys.
00:02.4–00:03.4 — Alia identifies the missing key.
00:03.4–00:04.8 — Layan opens the tampered roster.
00:04.8–00:06.3 — two-shot as Layan explains the egg's warning.
00:06.3–00:07.6 — follow Layan to the concealed door.
00:07.6–00:08.7 — anonymous silhouette crosses deep background.
00:08.7–00:10 — Alia turns and commands the guards.

DIALOGUE:
QUEEN ALIA: "Where is the guard?"
LAYAN: "Gone. The keys were left."
QUEEN ALIA: "Not all of them."
LAYAN: "It reacted before he vanished."
LAYAN: "That passage leads to the chamber."
QUEEN ALIA: "Seal the corridor. No one leaves."

No narrator.

AUDIO:
Quiet armor, key metal, paper, corridor reverb, hidden mechanism, low pulse and fast guard footsteps.

NEGATIVE:
No subtitles, extra speech, traitor reveal, gore, face drift, exposed hair, slideshow, grid, logo or watermark.`
    },
    {
      id: "scene-10",
      order: "10",
      title: "سرقة منتصف الليل",
      en: "THE MIDNIGHT THEFT",
      duration: "10 ثوانٍ",
      location: "الحجرة السفلية",
      cast: "ليان · متسلل مجهول",
      image: "assets/episode-02/scene-10-the-midnight-theft-sheet-v1.png",
      purpose: "يستخدم متسلل مجهول درعًا ملكيًا ومفتاح الحارس لمحاولة تحرير البيضة، لكن نبضتها توقفه قبل وصول ليان.",
      narrator: "لا يوجد راوي — كلام ليان القصير يقود المشهد.",
      screenText: [],
      attachments: [
        {src:"assets/episode-02/scene-10-the-midnight-theft-sheet-v1.png",name:"Scene 10 Sheet",type:"المرجع الأول",role:"دخول المتسلل، فتح القيد، النبضة، وصول ليان والمفتاح."},
        {src:"assets/layan.webp",name:"Layan Character Sheet",type:"هوية ليان",role:"ثبّت وجه ليان وملابسها وعلامة الكف."},
        {src:"assets/azar-and-egg.webp",name:"Dragon Egg",type:"مرجع العنصر",role:"استخدم البيضة السليمة فقط."},
        {src:"assets/lower-chamber.webp",name:"Lower Chamber",type:"هوية الموقع",role:"المنصة والأقفال والمداخل."},
        {src:"assets/army-pack.webp",name:"Army Pack",type:"درع المتسلل",role:"استخدم درع حرس ملكي، لكن أخفِ الوجه والجنس والرتبة."}
      ],
      imagePrompt: `CREATE A STRICT EIGHT-PANEL 4×2 PORTRAIT 9:16 NIGHT-THRILLER SCENE SHEET.

An anonymous intruder wearing royal-guard armor enters the Lower Chamber with the missing key; gloved hands unlock one restraint; the intact egg emits a violent but controlled pulse; the intruder is thrown back without injury reveal; exact Layan runs in; the intruder escapes into shadow; Layan finds the missing key beside the opened restraint. Hide face, eyes, skin, gender, ring and identity.

No egg damage, Azar, magic weapon, gore, extra intruder, captions or watermark.`,
      motionPrompt: `CREATE A 10-SECOND VERTICAL 9:16 MIDNIGHT THEFT SCENE.

00:00–00:01.3 — anonymous royal-armored intruder enters through the concealed door.
00:01.3–00:02.6 — macro missing key enters the old lock.
00:02.6–00:03.8 — one restraint opens; straps loosen.
00:03.8–00:05.0 — egg emits a strong amber pulse and forces the intruder back.
00:05.0–00:06.2 — corridor alarm and Layan's running footsteps.
00:06.2–00:07.4 — Layan enters as the intruder escapes through shadow.
00:07.4–00:08.7 — she checks the intact egg and opened restraint.
00:08.7–00:10 — macro missing key in her hand; match toward Scene 11.

LAYAN:
"The chamber. Now."
LAYAN:
"He had the key."

No narrator.

AUDIO:
Lock, chain, leather straps, egg pulse, stone vibration, alarm bell, running steps and unresolved low strings.

NEGATIVE:
Do not reveal intruder face, skin, gender, insignia or ring. No subtitles, extra speech, egg crack, Azar, gore, face drift, slideshow, grid, logo or watermark.`
    },
    {
      id: "scene-11",
      order: "11",
      title: "آزر يرفض الملك",
      en: "AZAR REFUSES THE KING",
      duration: "10 ثوانٍ",
      location: "قاعة الحكم · قبل الفجر",
      cast: "يحيى · زين · آزر · الحرس",
      image: "assets/episode-02/scene-11-azar-refuses-the-king-sheet-v1.png",
      purpose: "يحاول يحيى نقل البيضة، لكن آزر يمنع العربة وينظر إلى داخل القصر، فيفهم الملك وزين أن التنين يحميها من شخص بينهم.",
      narrator: "لا يوجد راوي — حوار يحيى وزين يقود المشهد.",
      screenText: [],
      attachments: [
        {src:"assets/episode-02/scene-11-azar-refuses-the-king-sheet-v1.png",name:"Scene 11 Sheet",type:"المرجع الأول",role:"الأمر، حركة العربة، هبوط آزر، المنع والقفلة."},
        {src:"assets/king-yahia.webp",name:"King Yahia",type:"هوية الملك",role:"ثبّت وجه يحيى وعمره ودرعه."},
        {src:"assets/zayn.webp",name:"Zayn",type:"هوية زين",role:"ثبّت وجه زين وندبته وعباءته الخضراء."},
        {src:"assets/azar-and-egg.webp",name:"Azar & Egg",type:"هوية المخلوق",role:"آزر واحد والبيضة السليمة نفسها."},
        {src:"assets/great-hall.webp",name:"Great Hall",type:"هوية الموقع",role:"القاعة وفتحة السقف ومسار العربة."}
      ],
      imagePrompt: `CREATE A PORTRAIT 9:16 EIGHT-PANEL CINEMATIC SCENE SHEET IN A STRICT 4×2 GRID.

Exact King Yahia orders the intact egg moved before dawn; exact Zayn escorts the covered cart through the Great Hall; one huge Azar shadow crosses the floor; exact Azar descends through the roof portal; King confronts him; Azar places one massive claw before the wheel; he refuses to move; final wide shows him curled around the egg while staring toward the palace interior. Preserve realistic scale and distinct King/Zayn identities.

No attack, fire breath, extra dragon, egg damage, face merge, captions or watermark.`,
      motionPrompt: `CREATE ONE CONTINUOUS 10-SECOND VERTICAL 9:16 MEDIEVAL-FANTASY SCENE.

00:00–00:01.2 — low push toward King Yahia ordering the move.
00:01.2–00:02.35 — track beside the cart; Zayn confirms the gate.
00:02.35–00:03.2 — overhead dragon shadow crosses the floor.
00:03.2–00:04.35 — wing wipe into Azar's heavy landing.
00:04.35–00:05.55 — King steps forward and orders him aside.
00:05.55–00:06.75 — extreme low claw blocks the wheel.
00:06.75–00:08.15 — slow orbit; egg pulses; Azar refuses.
00:08.15–00:10 — Azar curls around the egg and watches the palace interior.

DIALOGUE:
KING YAHIA: "Move the egg before dawn."
ZAYN: "The Eastern Gate is ready."
KING YAHIA: "Stand aside, Azar."
ZAYN: "He's not watching the gate."
KING YAHIA: "He's watching us."

No narrator.

AUDIO:
Cart wheels, armor, wing pressure, heavy landing, claw on stone, low growl, egg pulse, restrained cellos and an unresolved corridor note.

NEGATIVE:
No subtitles, extra dialogue, Azar attack, fire breath, egg damage, extra dragon, King/Zayn identity swap, malformed anatomy, slideshow, grid, logo or watermark.`
    },
    {
      id: "scene-12",
      order: "12",
      title: "العدو في الداخل",
      en: "THE ENEMY WITHIN",
      duration: "10 ثوانٍ",
      location: "قاعة الحكم · الممرات الملكية · معسكر نادر",
      cast: "يحيى · زين · نادر · خائن مجهول",
      image: "assets/episode-02/scene-12-the-enemy-within-sheet-v1.png",
      purpose: "يؤكد التحقيق أن الدخول تم بمساعدة من الداخل، بينما يرسل الخائن رسالة مختومة بالخاتم الملكي إلى نادر ليبدأ المرحلة التالية.",
      narrator: "لا يوجد راوي — التحقيق وأمر نادر يقودان قفلة الحلقة.",
      screenText: ["THE ENEMY", "IS ALREADY INSIDE"],
      attachments: [
        {src:"assets/episode-02/scene-12-the-enemy-within-sheet-v1.png",name:"Scene 12 Sheet",type:"المرجع الأول",role:"التحقيق، الخاتم، الرسالة، نادر والقفلة."},
        {src:"assets/king-yahia.webp",name:"King Yahia",type:"هوية الملك",role:"ثبّت وجه يحيى ودرعه وتاجه."},
        {src:"assets/zayn.webp",name:"Zayn",type:"هوية زين",role:"ثبّت وجه زين وندبته وعباءته."},
        {src:"assets/nader.webp",name:"Nader",type:"هوية الخصم",role:"ثبّت وجه نادر ودرعه ووشاحه."},
        {src:"assets/great-hall.webp",name:"Great Hall",type:"بداية التحقيق",role:"طاولة الأدلة والقاعة."},
        {src:"assets/royal-inner-passages.webp",name:"Royal Inner Passages",type:"هوية الخيانة",role:"الممر والمخبأ والباب الحجري."},
        {src:"assets/black-banners-camp.webp",name:"Black Banners Camp",type:"نهاية الرسالة",role:"خيمة نادر وطاولة الحرب."}
      ],
      imagePrompt: `CREATE A STRICT EIGHT-PANEL 4×2 PORTRAIT 9:16 EPISODE-ENDING SCENE SHEET.

Exact King Yahia and exact Zayn investigate evidence in the Great Hall; Zayn confirms someone enabled the breach; an anonymous figure walks the Royal Inner Passages carrying a folded message; macro old worn royal signet ring presses dark wax; masked courier delivers the sealed message; exact Nader receives and reads it in the Black Banners Camp; final view of Nader over the capital war model. Never reveal the traitor's face, eyes, skin, gender or identifiable uniform.

Premium live-action political dark fantasy. No magic ring, readable message, face merge, captions or watermark.`,
      motionPrompt: `CREATE A 10-SECOND VERTICAL 9:16 EPISODE-ENDING SCENE.

00:00–00:01.25 — slow push through the Great Hall to King Yahia and Zayn over evidence.
00:01.25–00:02.5 — slide from missing key and false seal to Zayn.
00:02.5–00:03.55 — Zayn cloak wipe to anonymous figure in the inner passages.
00:03.55–00:04.75 — macro signet ring presses dark wax.
00:04.75–00:05.85 — message enters courier pouch.
00:05.85–00:06.9 — one rider leaves the capital.
00:06.9–00:08.15 — cloak wipe to Nader receiving and reading the message.
00:08.15–00:10 — return to anonymous ring hand in the palace; torch cuts to black.

DIALOGUE:
KING YAHIA: "How did they reach the chamber?"
ZAYN: "They didn't break in. Someone let them through."
NADER: "Then begin."

TEXT:
THE ENEMY
IS ALREADY INSIDE

No narrator.

AUDIO:
Low cello, evidence metal, paper, hidden stone, wax impact, leather pouch, horse gallop, seal break, distant palace steps, torch extinguish and hard silence.

NEGATIVE:
Never reveal traitor identity, face, eyes, skin, gender or full costume. No subtitles, extra dialogue, glowing ring, readable message, face drift, slideshow, grid, logo or watermark.`
    },
    {
      id: "scene-13",
      order: "13",
      title: "تشاهدون في الحلقة الثالثة",
      en: "NEXT EPISODE · EPISODE 03",
      duration: "10 ثوانٍ",
      location: "القصر · المعسكر · الحجرة السفلية",
      cast: "يحيى · زين · نادر · آزر · الخائن",
      image: "assets/episode-02/scene-13-next-episode-03-teaser-sheet-v1.png",
      purpose: "وعد بصري للحلقة الثالثة: إغلاق القصر، مطاردة الخائن، تحرك جيش نادر واستجابة البيضة، من دون كشف هوية الخائن.",
      narrator: "راوية فقط: “Next time... the King hunts a traitor within. Nader marches on the capital... and the egg begins to answer.”",
      screenText: ["NEXT EPISODE"],
      attachments: [
        {src:"assets/episode-02/scene-13-next-episode-03-teaser-sheet-v1.png",name:"Next Episode Sheet",type:"المرجع الأول",role:"ترتيب مونتاج التشويق والكادرات الثمانية."},
        {src:"assets/king-yahia.webp",name:"King Yahia",type:"هوية الملك",role:"ثبّت وجه يحيى ودرعه."},
        {src:"assets/zayn.webp",name:"Zayn",type:"هوية زين",role:"ثبّت وجه زين وندبته وعباءته الخضراء."},
        {src:"assets/nader.webp",name:"Nader",type:"هوية نادر",role:"ثبّت وجه نادر ودرعه والوشاح النبيذي."},
        {src:"assets/azar-and-egg.webp",name:"Azar & Egg",type:"هوية المخلوق",role:"آزر واحد يحمي البيضة السليمة."}
      ],
      imagePrompt: `CREATE ONE TALL 9:16 “NEXT EPISODE” SCENE SHEET WITH EXACTLY EIGHT EQUAL VERTICAL PANELS IN A RIGID 4×2 GRID.

01 King Yahia orders a palace lockdown beside Zayn;
02 Zayn studies the signet impression and missing key;
03 anonymous traitor runs through the inner passages;
04 Zayn pursues as a concealed stone door closes;
05 Nader commands Black Banner riders;
06 cavalry moves toward the distant capital;
07 exact Azar protects the intact pulsing egg;
08 anonymous gloved hand holds the royal signet while King and Zayn search in the distance, with exact text "NEXT EPISODE".

Premium live-action medieval political fantasy, distinct characters, realistic action and restrained gold/ember palette.

Never reveal the traitor. No egg hatching, extra dragon, face swap, panel merge, extra text or watermark.`,
      motionPrompt: `CREATE A 10-SECOND VERTICAL 9:16 CINEMATIC “NEXT EPISODE” MONTAGE.

Reconstruct all eight Scene Sheet panels as moving full-screen shots.

00:00–00:01.2 — descend through the Great Hall as guards close the palace.
00:01.2–00:02.3 — macro slide over key and signet to Zayn's scarred face.
00:02.3–00:03.35 — track behind the anonymous traitor through the corridor.
00:03.35–00:04.4 — low pursuit as Zayn reaches the closing hidden door.
00:04.4–00:05.55 — door wipe to Nader raising one command hand.
00:05.55–00:06.75 — extreme-low tracking beside Black Banner cavalry.
00:06.75–00:08.25 — slow orbit around Azar and the intact pulsing egg.
00:08.25–00:10 — match pulse to royal ring; hand closes; torches extinguish.

FEMALE NARRATOR:
Use the same established deep, mature English female voice:
"Next time... the King hunts a traitor within. Nader marches on the capital... and the egg begins to answer."

No character dialogue or lip movement.

TEXT:
NEXT EPISODE

AUDIO:
Deep impact, low-string ostinato, corridor footsteps, concealed stone, storm wind, banners, galloping horses, dragon breath, two egg pulses, signet metal and final unresolved stop.

NEGATIVE:
No traitor identity, character dialogue, lip movement, subtitles, face drift, egg crack, hatchling, extra dragon, battle, slideshow, grid, logo or watermark.`
    }
  ]
};
