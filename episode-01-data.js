window.episodeOneProduction = {
  title: "البيضة الأخيرة",
  en: "EPISODE 01 — THE LAST EGG",
  cover: "assets/episode-01/episode-01-the-last-egg-cover-v1.webp",
  videoUrl: "",
  format: "Vertical 9:16 · 12 cinematic units · Google Flow Omni",
  narrator: "نفس الصوت الأنثوي الإنجليزي العميق والهادئ والناضج في جميع المشاهد.",
  summary: "افتتاحية قوية تكشف دفن البيضة قبل ثمانية عشر عامًا، عودتها إلى العاصمة، استجابة آزر والعلامة، ثم الخيانة الداخلية وقيام جيش الرايات السوداء.",
  rules: [
    "ارفع الـScene Sheet أولًا، ثم ملفات الشخصيات والموقع والعناصر بالترتيب المكتوب.",
    "الـScene Sheet مرجع للكادرات وترتيب اللقطات فقط؛ لا تحرّك الشبكة أو الأرقام أو الفواصل.",
    "ملفات Character وLocation هي المرجع الحاسم للوجه والملابس والعمارة.",
    "استخدم نفس صوت الراوية الأنثوي الإنجليزي في كل المشاهد.",
    "كل Freeze Intro مدته ثانيتان، والنص الإنجليزي يظل ثابتًا وواضحًا بلا تشوه.",
    "لا تضف ترجمة أو Watermark أو شخصيات أو مباني غير موجودة في المراجع."
  ],
  scenes: [
    {
      id: "scene-01",
      order: "01",
      title: "العهد المدفون",
      en: "THE BURIED OATH",
      duration: "8 ثوانٍ",
      location: "الحجرة السفلية · قبل 18 عامًا",
      cast: "قيس · البيضة",
      image: "assets/episode-01/scene-01-the-buried-oath-sheet-v1.png",
      purpose: "افتتاح الحلقة بسر دفن قيس للبيضة قبل مقتله، وربط الماضي مباشرة بالنبضة التي ستوقظ الحاضر.",
      narrator: "“Eighteen years ago... the Covenant buried its last promise beneath fire and stone.”",
      screenText: ["EIGHTEEN YEARS AGO"],
      attachments: [
        {src:"assets/episode-01/scene-01-the-buried-oath-sheet-v1.png",name:"Scene 01 Sheet",type:"المرجع الأول",role:"ترتيب اللقطات الثماني والكادرات والإيقاع فقط. لا تُظهر الشيت أو حدوده داخل الفيديو."},
        {src:"assets/qais.webp",name:"Qais Character Sheet",type:"هوية الشخصية",role:"ثبّت ملابس قيس وجسمه ويديه. لا تُظهر وجهه بوضوح في الحلقة الأولى."},
        {src:"assets/azar-and-egg.webp",name:"Dragon Egg Reference",type:"مرجع العنصر",role:"استخدم البيضة فقط بقشرتها البركانية الداكنة وعروقها الكهرمانية. تجاهل التنين البالغ."},
        {src:"assets/lower-chamber.webp",name:"Lower Chamber",type:"هوية الموقع",role:"المرجع الوحيد للممر الحلزوني والمنصة والقنوات الحجرية والإضاءة."}
      ],
      imagePrompt: `CREATE ONE PORTRAIT 9:16 CINEMATIC SCENE SHEET FOR EPISODE 01 OF THE FIRE COVENANT.

LAYOUT LOCK:
Exactly eight separate tall cinematic panels in a clean 4-column by 2-row grid. Thin dark separators. Every panel is clearly isolated. Put only a small white shot number in the upper-left and a small timestamp in the upper-right. No captions, title, logo or extra text.

REFERENCE AUTHORITY:
Use the uploaded Lower Chamber as the exact location authority, the Qais sheet for his body and wardrobe, and the Azar-and-Egg sheet for the intact egg only. Never reveal Qais's face clearly.

STORY AND PANELS:
01 — wide descending view of the buried circular chamber during an ancient emergency, smoke and distant fire above.
02 — rear low tracking composition of Qais carrying the intact egg down the spiral path.
03 — close detail of his ash-covered hands protecting the egg.
04 — overhead view as he reaches the central stone dais.
05 — side silhouette lowering the egg into the covenant cradle.
06 — macro of a royal seal and a blood-marked hand activating the mechanism.
07 — the stone channels close around the intact egg while Qais retreats into darkness.
08 — extreme close-up of one faint amber pulse inside the sealed chamber.

STYLE:
Premium photoreal historical dark fantasy, grounded Arab-inspired architecture, charcoal volcanic stone, restrained amber fire, deep blacks, realistic skin and fabric, cinematic lens variety, coherent geography and identity.

NEGATIVE:
No adult dragon, no egg crack, no hatchling, no visible modern object, no clear Qais face, no duplicated person, no collage captions and no malformed hands.`,
      motionPrompt: `CREATE AN 8-SECOND CINEMATIC VERTICAL 9:16 EPISODE OPENING IN GOOGLE FLOW OMNI.

REFERENCE ROLES:
Reference 1 controls only the eight-shot order, framing and action progression. Reconstruct every panel as a separate full-screen shot. Never animate the flat sheet, grid, borders, timestamps or numbers.
Reference 2 is the sole authority for Qais's body, wardrobe and hands. Keep his face obscured by angle, shadow or shallow focus.
Reference 3 is used only for the intact dragon egg. Ignore the adult dragon.
Reference 4 is the sole authority for the Lower Chamber.

TIMELINE AND CAMERA:
00:00–00:00.7 — black screen, then the exact text "EIGHTEEN YEARS AGO" appears in restrained antique-gold capitals over distant fire and stone resonance.
00:00.7–00:02.0 — descending crane follows behind Qais carrying the egg down the spiral path.
00:02.0–00:03.2 — low side tracking and hand macro; ash falls and cloth moves naturally.
00:03.2–00:04.6 — overhead reveal as he lowers the intact egg onto the central dais.
00:04.6–00:06.2 — macro on seal, hand and covenant mechanism; radial channels awaken.
00:06.2–00:07.3 — controlled dolly backward as stone closes and Qais disappears into shadow.
00:07.3–00:08.0 — macro amber pulse, then hard cut to black on one heartbeat.

NARRATOR:
Use a deep, calm, mature English FEMALE narrator. She says exactly:
"Eighteen years ago... the Covenant buried its last promise beneath fire and stone."

AUDIO:
Subterranean wind, distant fire, stone grinding, restrained low cello, cloth movement, one organic heartbeat and a final sub-bass cut.

TEXT LOCK:
Only "EIGHTEEN YEARS AGO". No subtitles or other text.

NEGATIVE:
No clear Qais face, no egg crack, no hatchling, no adult dragon, no added character, no architecture redesign, no grid, no watermark.`
    },
    {
      id: "scene-02",
      order: "02",
      title: "القبو المكتشف",
      en: "THE UNEARTHED VAULT",
      duration: "8 ثوانٍ",
      location: "أطلال المعبد · الحاضر",
      cast: "كشّافو الحدود · البيضة",
      image: "assets/episode-01/scene-02-the-unearthed-vault-sheet-v1.png",
      purpose: "الانتقال إلى الحاضر واكتشاف الكشّافين للقبو والبيضة التي ظن العالم أنها اختفت.",
      narrator: "“For eighteen years, the world forgot what waited beneath the ruins.”",
      screenText: ["PRESENT DAY"],
      attachments: [
        {src:"assets/episode-01/scene-02-the-unearthed-vault-sheet-v1.png",name:"Scene 02 Sheet",type:"المرجع الأول",role:"يتحكم في اللقطات الثماني من دخول الأطلال حتى كشف البيضة."},
        {src:"assets/army-pack.webp",name:"Army Pack",type:"مرجع الكشّافين",role:"استخدم جنود المملكة فقط بملابس سفر منهكة، من دون رايات سوداء."},
        {src:"assets/azar-and-egg.webp",name:"Dragon Egg Reference",type:"مرجع العنصر",role:"استخدم البيضة السليمة فقط. تجاهل التنين البالغ."},
        {src:"assets/lower-chamber.webp",name:"Lower Chamber",type:"مرجع معماري",role:"يستفاد من لغة الحجر والآلية القديمة مع جعل المكان مدفونًا ومحطمًا بفعل الزمن."},
        {src:"assets/episode-01/scene-01-the-buried-oath-sheet-v1.png",name:"Scene 01 Continuity",type:"اختياري",role:"للحفاظ على استمرارية القبو والقطع من الماضي إلى الحاضر."}
      ],
      imagePrompt: `CREATE ONE PORTRAIT 9:16 CINEMATIC SCENE SHEET WITH EXACTLY EIGHT TALL PANELS, FOUR ACROSS THE TOP AND FOUR ACROSS THE BOTTOM.

Only small shot numbers and timestamps may appear. Use thin dark separators and make every shot visually independent.

Create the present-day discovery of the buried covenant vault beneath a burned temple. Use the Army Pack for exhausted royal scouts, the approved egg design only, and the Lower Chamber language for the ruined architecture.

PANELS:
01 aerial wide of blackened temple ruins at cold dawn;
02 scouts entering a fractured stairwell with torches;
03 low angle through rubble as they clear a sealed stone door;
04 over-shoulder reveal of a deep forgotten vault;
05 macro of an ancient covenant carving beneath ash;
06 a scout's torch reveals the intact egg inside a collapsed cradle;
07 three scouts stand small around the egg, shocked but disciplined;
08 close macro of amber veins giving one faint pulse.

Photoreal grounded dark fantasy, cold grey daylight versus restrained amber torchlight, varied aerial, tracking, overhead, macro and portrait lenses. No adult dragon, no cracks, no black-banner soldiers, no modern tools, no captions, no duplicated bodies.`,
      motionPrompt: `CREATE AN 8-SECOND CINEMATIC VERTICAL 9:16 SCENE.

Use the uploaded Scene Sheet only for shot order and framing; rebuild all eight panels as separate full-screen shots. Use the Army Pack for royal scouts, the egg reference for the intact egg only, and the location reference for the ruined vault.

TIMELINE:
00:00–00:00.6 — carry the previous heartbeat into black; show exactly "PRESENT DAY".
00:00.6–00:01.8 — fast aerial descent into the burned temple ruins.
00:01.8–00:03.0 — shoulder-level tracking behind scouts entering with torches.
00:03.0–00:04.1 — low push as stone and ash are cleared from the old door.
00:04.1–00:05.3 — overhead reveal of the buried vault.
00:05.3–00:06.5 — torchlight travels across the intact egg.
00:06.5–00:07.4 — controlled reaction shot; no shouting.
00:07.4–00:08.0 — macro amber pulse, cut on sound.

NARRATOR:
Use the same deep, calm, mature English FEMALE narrator:
"For eighteen years, the world forgot what waited beneath the ruins."

AUDIO:
Cold wind, boots on grit, torch hiss, falling pebbles, stone scrape, low strings and one muted organic pulse.

No dialogue. No text except "PRESENT DAY". No egg crack, adult dragon, face drift, extra scouts, grid or watermark.`
    },
    {
      id: "scene-03",
      order: "03",
      title: "السهم الأسود",
      en: "THE BLACK ARROW",
      duration: "8 ثوانٍ",
      location: "مرتفعات الأطلال · الحاضر",
      cast: "مراقب الرايات السوداء",
      image: "assets/episode-01/scene-03-the-black-arrow-sheet-v1.png",
      purpose: "كشف أن العدو يراقب الاكتشاف منذ اللحظة الأولى وتحويل البيضة من سر أثري إلى شرارة حرب.",
      narrator: "“The egg was found... and in the darkness, an old enemy was already watching.”",
      screenText: [],
      attachments: [
        {src:"assets/episode-01/scene-03-the-black-arrow-sheet-v1.png",name:"Scene 03 Sheet",type:"المرجع الأول",role:"ترتيب رصد الكشّافين وتجهيز السهم وإطلاق الإشارة."},
        {src:"assets/army-pack.webp",name:"Army Pack",type:"هوية المراقب",role:"استخدم مظهر الرايات السوداء فقط لجندي الاستطلاع والقوس والدرع."},
        {src:"assets/black-banners-camp.webp",name:"Black Banners Camp",type:"هوية الوجهة",role:"يثبت المعسكر البعيد الذي تستقبل نيرانه إشارة السهم."},
        {src:"assets/episode-01/scene-02-the-unearthed-vault-sheet-v1.png",name:"Scene 02 Continuity",type:"اختياري",role:"للحفاظ على جغرافيا الأطلال والكشّافين في الخلفية."}
      ],
      imagePrompt: `CREATE A PORTRAIT 9:16 EIGHT-PANEL CINEMATIC SCENE SHEET, FOUR TALL PANELS ABOVE FOUR TALL PANELS, WITH THIN DARK SEPARATORS, SMALL SHOT NUMBERS AND TIMESTAMPS ONLY.

Story: a hidden Black Banner lookout watches royal scouts recover the egg, then fires a black signal arrow toward the distant rebel camp.

PANELS:
01 extreme long lens through foreground rock, scouts tiny below;
02 close profile of a hooded lookout remaining hidden;
03 point-of-view through a narrow rock gap toward the covered egg cart;
04 macro hand selecting a black-fletched signal arrow;
05 low close shot drawing the bow, controlled tension;
06 extreme macro on dark arrowhead catching one amber reflection;
07 dynamic rear three-quarter release into stormy sky;
08 distant wide view of the arrow flare traveling toward campfires across the valley.

Use Army Pack rebel identity and Black Banners Camp geography. Photoreal military dark fantasy, cold wind, hard rock, compressed surveillance lenses and one energetic action angle. No clear hero face, no adult dragon, no egg close-up, no captions, no modern weapon, no duplicated archer.`,
      motionPrompt: `CREATE AN 8-SECOND CINEMATIC VERTICAL 9:16 SURVEILLANCE-TO-ACTION SCENE.

Reference 1 controls shot order only. Reference 2 controls the Black Banner lookout and equipment. Reference 3 controls the distant camp. Reference 4 is optional geography continuity.

SHOT FLOW:
01 — compressed telephoto push through rock toward royal scouts below.
02 — slow profile slider reveals the hidden lookout without a clear full face.
03 — precise POV rack focus from rock edge to the covered egg cart.
04 — macro hand chooses the approved black-fletched arrow.
05 — low arc around the bow as the string reaches full tension.
06 — extreme arrowhead macro with a fleeting amber reflection.
07 — sharp controlled whip following release into the sky.
08 — aerial tracking behind the arrow as its dark flare races toward distant campfires.

NARRATOR:
Same deep, calm, mature English FEMALE narrator:
"The egg was found... and in the darkness, an old enemy was already watching."

AUDIO:
High cold wind, leather creak, bowstring tension, one clean release, arrow whistle, distant raven and the first restrained war-drum hit.

TRANSITION:
The arrow's dark flare wipes across frame and becomes the spinning wheel shadow in Scene 04.

No dialogue, no on-screen text, no modern projectile, no random camera shake, no grid, no watermark.`
    },
    {
      id: "scene-04",
      order: "04",
      title: "السباق إلى البوابة الشرقية",
      en: "RACE TO THE EASTERN GATE",
      duration: "10 ثوانٍ",
      location: "الطريق الشرقي · البوابة الشرقية",
      cast: "زين · الكشّافون · حرس المملكة",
      image: "assets/episode-01/scene-04-race-to-the-eastern-gate-sheet-v1.png",
      purpose: "أول انفجار أكشن في الحلقة: عربة البيضة تُطارد، وزين يثبت حضوره قبل أن يأمر بإغلاق البوابة.",
      narrator: "“The egg reached the city... and the enemy followed.”",
      screenText: ["ZAYN", "CAPTAIN OF THE ROYAL GUARD", "LOYALTY BEFORE BLOOD"],
      attachments: [
        {src:"assets/episode-01/scene-04-race-to-the-eastern-gate-sheet-v1.png",name:"Scene 04 Sheet",type:"المرجع الأول",role:"تسلسل المطاردة والكادرات والـFreeze Frame."},
        {src:"assets/zayn.webp",name:"Zayn Character Sheet",type:"هوية البطل",role:"المرجع الوحيد لوجه زين ودرعه وسيفه ونسب جسمه؛ يمنع أي Face Drift."},
        {src:"assets/eastern-gate.webp",name:"Eastern Gate",type:"هوية الموقع",role:"يثبت الطريق والبرجين والبوابة وساحة التفتيش."},
        {src:"assets/army-pack.webp",name:"Army Pack",type:"مرجع الجنود",role:"جنود المملكة والمطاردون والخيول والعربة، مع فصل الطرفين بوضوح."},
        {src:"assets/azar-and-egg.webp",name:"Dragon Egg Reference",type:"مرجع العنصر",role:"استخدم البيضة فقط وهي ثابتة داخل العربة. تجاهل التنين."}
      ],
      imagePrompt: `CREATE A PORTRAIT 9:16 ACTION SCENE SHEET WITH EXACTLY EIGHT SEPARATE TALL PANELS IN A 4×2 GRID. Thin dark gutters, small shot numbers and timestamps only.

Use the exact approved Zayn face and armor, Eastern Gate architecture, army and horse designs, and the intact egg inside a reinforced wagon.

PANELS:
01 low wheel-level chase shot, wagon racing through dust;
02 aerial three-quarter view showing pursuers closing from the ridge;
03 tight interior wagon shot of the covered intact egg jolting but secured;
04 frontal telephoto of the Eastern Gate and Zayn riding out;
05 side tracking shot as Zayn intercepts the lead pursuer;
06 exact hero freeze portrait of Zayn turning toward camera, clean silhouette and readable face;
07 wide low angle as Zayn points toward the gate and royal guards react;
08 gate-level action frame as the wagon crosses and the massive doors begin closing.

Premium photoreal action fantasy, grounded horse physics, dust, late-afternoon hard light, varied pursuit lenses and coherent screen direction.

No face change, no glowing swords, no egg crack, no adult dragon, no vehicle mutation, no duplicated riders, no captions other than panel numbers/timestamps.`,
      motionPrompt: `CREATE A 10-SECOND CINEMATIC VERTICAL 9:16 ACTION SEQUENCE.

UPLOAD ROLES:
The Scene Sheet controls shot order and framing only. Zayn's sheet is the absolute face, armor and body authority. Eastern Gate fixes all architecture. Army Pack fixes soldiers, horses and wagon. Use the egg reference only for the secured intact egg.

TIMELINE:
00:00–00:01.2 — wheel-level pursuit tracking; fast but readable, dust strikes lens edge.
00:01.2–00:02.4 — aerial chase angle with pursuers closing.
00:02.4–00:03.3 — wagon interior, secured egg receives one faint pulse.
00:03.3–00:04.5 — telephoto rush toward the gate as Zayn rides out.
00:04.5–00:06.0 — controlled side action: Zayn blocks the lead pursuer and turns toward the gate.
00:06.0–00:08.0 — EXACT TWO-SECOND HERO FREEZE. Freeze Zayn's approved face and body; background dust continues subtly. Display exactly:
"ZAYN"
"CAPTAIN OF THE ROYAL GUARD"
"LOYALTY BEFORE BLOOD"
00:08.0–00:09.1 — action resumes. Zayn points and shouts exactly: "Open the gate!"
00:09.1–00:10.0 — wagon crosses; he shouts exactly: "Close it! Now!" Massive doors begin slamming shut on the cut.

NARRATOR:
Same English FEMALE narrator:
"The egg reached the city... and the enemy followed."

AUDIO:
Galloping horses, wagon rattle, dust impacts, bow whistle, armor, gate chains, heavy war percussion and two clean dialogue lines. Duck narration and dialogue correctly.

No face drift, no text spelling changes, no subtitles, no adult dragon, no egg crack, no slow passive camera, no grid or watermark.`
    },
    {
      id: "scene-05",
      order: "05",
      title: "مملكة ما زالت نائمة",
      en: "A KINGDOM STILL ASLEEP",
      duration: "8 ثوانٍ",
      location: "العاصمة الذهبية · الغروب",
      cast: "أهل المدينة · العربة الملكية",
      image: "assets/episode-01/scene-05-a-kingdom-still-asleep-sheet-v1.png",
      purpose: "تهدئة محسوبة بعد المطاردة تُظهر جمال المملكة وجهل أهلها بالخطر الذي دخل من البوابة.",
      narrator: "“Inside the walls, the kingdom slept... unaware that its oldest secret had returned.”",
      screenText: [],
      attachments: [
        {src:"assets/episode-01/scene-05-a-kingdom-still-asleep-sheet-v1.png",name:"Scene 05 Sheet",type:"المرجع الأول",role:"تسلسل مرور العربة داخل المدينة والظل القادم."},
        {src:"assets/golden-city.webp",name:"Golden City",type:"هوية الموقع",role:"المرجع الوحيد للعاصمة وشوارعها وقنواتها والقصر المرتفع."},
        {src:"assets/episode-01/scene-04-race-to-the-eastern-gate-sheet-v1.png",name:"Scene 04 Continuity",type:"استمرارية",role:"يحافظ على نفس العربة واتجاه الحركة بعد عبور البوابة."},
        {src:"assets/azar-and-egg.webp",name:"Dragon Egg Reference",type:"مرجع العنصر",role:"البيضة مغطاة داخل العربة ولا تُكشف إلا كنبضة خافتة."}
      ],
      imagePrompt: `CREATE A PORTRAIT 9:16 EIGHT-PANEL CINEMATIC SCENE SHEET, 4 PANELS TOP AND 4 BOTTOM, EACH TALL AND CLEARLY SEPARATED. Small numbers and timestamps only.

Show the covered egg wagon moving through the approved Golden Capital while peaceful citizens remain unaware.

PANELS:
01 high golden-hour city establishing view;
02 street-level lateral view of markets, water and families;
03 wagon enters frame under disciplined royal escort;
04 overhead tracking along a canal as citizens continue normal life;
05 close detail of wagon canvas with one faint amber glow beneath it;
06 child watches the silent convoy pass, no direct contact;
07 long-lens palace view as the wagon climbs toward the citadel;
08 huge cloud shadow crosses the city while sunlight fades behind the convoy.

Warm prosperous Arab-inspired fantasy city, restrained tension, photoreal, visual contrast between ordinary life and hidden danger. No combat, no adult dragon, no exposed egg, no text, no modern object or architecture drift.`,
      motionPrompt: `CREATE AN 8-SECOND CINEMATIC VERTICAL 9:16 BREATH-BEFORE-THE-STORM SEQUENCE.

Use the Scene Sheet for eight separate shots, Golden City as the absolute location, Scene 04 for wagon continuity and the egg reference only for a faint concealed pulse.

CAMERA FLOW:
01 slow aerial glide over the sunlit city;
02 smooth low slider past water and market life;
03 match the motion with the wagon crossing frame under escort;
04 overhead tracking along the canal;
05 macro canvas movement and one very faint amber light beneath it;
06 intimate child reaction as the convoy passes;
07 compressed telephoto climb toward the citadel;
08 wide crane rise as a vast storm shadow moves across the city.

NARRATOR:
Same deep, calm, mature English FEMALE narrator:
"Inside the walls, the kingdom slept... unaware that its oldest secret had returned."

AUDIO:
Market ambience, water, distant bells, wagon wheels and soft strings. Gradually remove city sound as the shadow crosses; finish with low thunder and one muted pulse.

TRANSITION:
The palace silhouette fills frame and match-cuts to the Great Hall interior.

No dialogue, no text, no exposed egg, no combat, no random shake, no grid or watermark.`
    },
    {
      id: "scene-06",
      order: "06",
      title: "أمام العرش",
      en: "BEFORE THE THRONE",
      duration: "10 ثوانٍ",
      location: "قاعة الحكم",
      cast: "الملك يحيى · الملكة علياء · زين · البيضة",
      image: "assets/episode-01/scene-06-before-the-throne-sheet-v1.png",
      purpose: "تقديم الملك والملكة وتثبيت أن البيضة تحمل علامة قيس، الاسم الذي يعيد الماضي إلى قلب الحكم.",
      narrator: "“Before the throne, the past returned... carrying the mark of a dead man.”",
      screenText: ["KING YAHIA", "THE LAST KING", "BOUND TO THE DRAGON", "QUEEN ALIA", "THE WARRIOR QUEEN", "SHIELD OF THE CAPITAL"],
      attachments: [
        {src:"assets/episode-01/scene-06-before-the-throne-sheet-v1.png",name:"Scene 06 Sheet",type:"المرجع الأول",role:"ترتيب الدخول والكشف وFreeze الملك والملكة."},
        {src:"assets/king-yahia.webp",name:"King Yahia Character Sheet",type:"هوية البطل",role:"المرجع الوحيد لوجه الملك ودرعه وعباءته وسيفه."},
        {src:"assets/queen-alia.webp",name:"Queen Alia Character Sheet",type:"هوية البطلة",role:"المرجع الوحيد لوجه الملكة وملابسها وسيفها وبنيتها."},
        {src:"assets/great-hall.webp",name:"Great Hall",type:"هوية الموقع",role:"يثبت محور العرش ومنطقة آزر وفتحة السقف."},
        {src:"assets/azar-and-egg.webp",name:"Dragon Egg Reference",type:"مرجع العنصر",role:"استخدم البيضة فقط. لا يظهر آزر بعد في هذا المشهد."}
      ],
      imagePrompt: `CREATE ONE PORTRAIT 9:16 CINEMATIC SCENE SHEET WITH EXACTLY EIGHT TALL PANELS IN A 4×2 GRID. Thin separators; small shot numbers and timestamps only.

Use the exact approved King Yahia and Queen Alia identities, Great Hall and intact egg.

PANELS:
01 vast symmetrical Great Hall as the covered object is brought before the throne;
02 low tracking beside King Yahia descending from the throne;
03 royal guards pull away the canvas and reveal the intact egg;
04 clean heroic portrait of King Yahia with the egg glow reflected in his eyes;
05 two-second-intro-ready portrait composition of the king, uncluttered negative space;
06 Queen Alia steps between the egg and court, alert and controlled;
07 two-second-intro-ready heroic composition of Queen Alia, exact face and armor;
08 macro of an old royal mark on the egg as Yahia whispers Qais's name.

Premium photoreal royal dark fantasy, monumental scale, amber and cool daylight, precise face continuity, composed blocking.

No adult dragon, no face changes, no egg crack, no crown mutation, no duplicated rulers, no scene captions.`,
      motionPrompt: `CREATE A 10-SECOND CINEMATIC VERTICAL 9:16 ROYAL REVEAL.

The Scene Sheet controls framing only. King and Queen sheets are absolute identity authorities. Great Hall controls architecture. Use the egg reference only for the intact egg.

TIMELINE:
00:00–00:01.3 — wide crane down the throne axis as guards bring the covered object.
00:01.3–00:02.4 — low dolly with Yahia approaching; canvas is removed.
00:02.4–00:04.4 — EXACT TWO-SECOND KING FREEZE with subtle background ember motion. Display exactly:
"KING YAHIA"
"THE LAST KING"
"BOUND TO THE DRAGON"
00:04.4–00:05.6 — action resumes; Queen Alia moves protectively beside him.
00:05.6–00:07.6 — EXACT TWO-SECOND QUEEN FREEZE. Display exactly:
"QUEEN ALIA"
"THE WARRIOR QUEEN"
"SHIELD OF THE CAPITAL"
00:07.6–00:09.2 — macro inspection of the ancient mark on the intact shell.
00:09.2–00:10.0 — close King portrait. He whispers exactly: "Qais."

NARRATOR:
Same English FEMALE narrator:
"Before the throne, the past returned... carrying the mark of a dead man."

AUDIO:
Hall reverb, boots, canvas fall, low choir, restrained strings, tiny shell hum and a silence pocket for "Qais."

Text must remain perfectly spelled and stable. No adult dragon, no egg crack, no face drift, no subtitles, no grid or watermark.`
    },
    {
      id: "scene-07",
      order: "07",
      title: "آزر يتذكر",
      en: "AZAR REMEMBERS",
      duration: "10 ثوانٍ",
      location: "قاعة الحكم · استراحة آزر",
      cast: "آزر · الملك يحيى · الملكة علياء",
      image: "assets/episode-01/scene-07-azar-remembers-sheet-v1.png",
      purpose: "تقديم آزر كحارس قديم، وتحويل رؤيته للبيضة إلى ذكرى عهد وقيس لا إلى استيقاظ وحش.",
      narrator: "“The dragon did not see an egg... he remembered an oath.”",
      screenText: ["AZAR", "THE LAST GUARDIAN", "DRAGON OF THE OLD COVENANT"],
      attachments: [
        {src:"assets/episode-01/scene-07-azar-remembers-sheet-v1.png",name:"Scene 07 Sheet",type:"المرجع الأول",role:"تسلسل الاستيقاظ والذاكرة وFreeze آزر."},
        {src:"assets/azar-and-egg.webp",name:"Azar & Egg Sheet",type:"هوية آزر والعنصر",role:"المرجع الحاسم لتشريح آزر والقرون والحراشف والعين، وكذلك البيضة."},
        {src:"assets/great-hall.webp",name:"Great Hall",type:"هوية الموقع",role:"يثبت استراحة آزر وحجم القاعة."},
        {src:"assets/king-yahia.webp",name:"King Yahia",type:"مرجع الشخصية",role:"تثبيت الملك في اللقطات المشتركة."},
        {src:"assets/queen-alia.webp",name:"Queen Alia",type:"مرجع الشخصية",role:"تثبيت الملكة في اللقطات المشتركة."},
        {src:"assets/episode-01/scene-01-the-buried-oath-sheet-v1.png",name:"Buried Oath Memory",type:"اختياري",role:"مرجع بصري خاطف لذاكرة قيس من دون إظهار وجهه."}
      ],
      imagePrompt: `CREATE A PORTRAIT 9:16 EIGHT-PANEL CINEMATIC SCENE SHEET, FOUR TALL PANELS PER ROW, THIN DARK GUTTERS, SMALL SHOT NUMBERS AND TIMESTAMPS ONLY.

Use exact adult Azar anatomy and Great Hall resting bay. The dragon sees the egg and remembers the old oath.

PANELS:
01 macro water ripple beside one enormous claw;
02 low slider over ancient charcoal scales as amber fissures respond;
03 colossal head rises toward the intact egg across the hall;
04 clean hero-intro composition of Azar, exact horn silhouette and amber eye;
05 extreme eye macro reflecting Qais carrying the egg eighteen years ago;
06 brief fragmented memory of a blood-marked oath hand, Qais face unseen;
07 present-day profile as Azar lowers his head toward the egg but does not touch;
08 wide frame with King and Queen tiny between dragon and egg.

Photoreal ancient dragon, anatomically coherent wings and horns, monumental scale, emotional restraint, amber memory light and cool hall shafts.

No roar, no fire breath, no extra limbs, no egg crack, no clear Qais face, no captions or anatomy drift.`,
      motionPrompt: `CREATE A 10-SECOND CINEMATIC VERTICAL 9:16 CREATURE-MEMORY SEQUENCE.

Reference 1 controls shots only. Reference 2 is the absolute adult Azar and egg authority. Reference 3 fixes Great Hall. References 4 and 5 fix the rulers. Reference 6 may guide only the brief Qais memory.

TIMELINE:
00:00–00:01.2 — macro ripple and claw flex, heavy sub-bass.
00:01.2–00:03.0 — low scale tracking as Azar raises his colossal head.
00:03.0–00:05.0 — EXACT TWO-SECOND AZAR FREEZE. Preserve anatomy; only dust and ember particles move subtly. Display exactly:
"AZAR"
"THE LAST GUARDIAN"
"DRAGON OF THE OLD COVENANT"
00:05.0–00:06.4 — extreme eye push; reflection becomes a brief fractured memory of Qais and the oath.
00:06.4–00:08.4 — return to present through the amber eye; Azar lowers his head near the egg and inhales once.
00:08.4–00:10.0 — wide crane reveals the king and queen between dragon and egg; no attack.

NARRATOR:
Same English FEMALE narrator:
"The dragon did not see an egg... he remembered an oath."

AUDIO:
Water ripple, stone groan, scale tension, deep dragon inhale, faint memory whispers, low cello and restrained choir. No roar.

No malformed dragon, no fire, no egg crack, no clear Qais face, no text errors, subtitles, grid or watermark.`
    },
    {
      id: "scene-08",
      order: "08",
      title: "استدعاء الحافظة",
      en: "SUMMON THE KEEPER",
      duration: "10 ثوانٍ",
      location: "مكتبة العهد",
      cast: "ليان · رسول الحرس",
      image: "assets/episode-01/scene-08-summon-the-keeper-sheet-v1.png",
      purpose: "تقديم ليان داخل عالمها المعرفي، ثم دفعها من هدوء المكتبة إلى قلب الأزمة.",
      narrator: "“Only one keeper still understood what the Covenant had buried.”",
      screenText: ["LAYAN", "KEEPER OF THE COVENANT", "CHOSEN BY THE MARK"],
      attachments: [
        {src:"assets/episode-01/scene-08-summon-the-keeper-sheet-v1.png",name:"Scene 08 Sheet",type:"المرجع الأول",role:"ترتيب البحث واكتشاف الرمز وFreeze ليان ودخول الرسول."},
        {src:"assets/layan.webp",name:"Layan Character Sheet",type:"هوية البطلة",role:"المرجع الوحيد لوجه ليان وغطاء الرأس وملابسها والعلامة في كفها."},
        {src:"assets/covenant-library.webp",name:"Covenant Library",type:"هوية الموقع",role:"يثبت الرفوف والطاولة والضوء والآلية السرية."},
        {src:"assets/army-pack.webp",name:"Royal Messenger",type:"مرجع الـExtra",role:"استخدم جنديًا ملكيًا واحدًا فقط كرسول، من دون رايات سوداء."}
      ],
      imagePrompt: `CREATE ONE PORTRAIT 9:16 CINEMATIC SCENE SHEET WITH EXACTLY EIGHT TALL PANELS, FOUR ABOVE FOUR, THIN SEPARATORS, SMALL NUMBERS AND TIMESTAMPS ONLY.

Use exact Layan identity and approved Covenant Library.

PANELS:
01 high wide of Layan alone at the central research table;
02 macro fingers tracing an ancient dragon-rider diagram;
03 over-shoulder view of a symbol matching her covered palm;
04 mirror-like bronze reflection reveals her thoughtful face;
05 clean hero-intro portrait of Layan with controlled negative space;
06 macro as her palm mark gives a faint response without fantasy-eye changes;
07 library door opens and a single royal messenger enters urgently;
08 side two-shot as he delivers the King's summons and Layan closes the covenant book.

Photoreal scholarly dark fantasy, warm shaft light, dust, parchment, deep brown stone and teal wardrobe accent. Brown human eyes with round pupils, hair fully covered.

No exposed hair, no glowing iris, no duplicated messenger, no egg, no dragon, no captions or text beyond shot labels.`,
      motionPrompt: `CREATE A 10-SECOND CINEMATIC VERTICAL 9:16 CHARACTER INTRODUCTION.

Scene Sheet controls framing only. Layan sheet is the absolute face, wardrobe, covered-hair and palm-mark authority. Library sheet fixes architecture. Army Pack supplies one royal messenger only.

TIMELINE:
00:00–00:01.4 — slow overhead descent toward Layan researching alone.
00:01.4–00:03.0 — macro slider across parchment, symbol and her hovering fingers.
00:03.0–00:05.0 — controlled portrait push as the mark faintly responds; natural brown eyes remain unchanged.
00:05.0–00:07.0 — EXACT TWO-SECOND LAYAN FREEZE. Display exactly:
"LAYAN"
"KEEPER OF THE COVENANT"
"CHOSEN BY THE MARK"
00:07.0–00:08.2 — action resumes; the door opens with a light shaft and one messenger enters.
00:08.2–00:09.4 — he says exactly: "The King summons you. Now."
00:09.4–00:10.0 — Layan closes the book; hard match cut on the cover symbol.

NARRATOR:
Same English FEMALE narrator:
"Only one keeper still understood what the Covenant had buried."

AUDIO:
Page turns, quill scratch, library air, bronze mechanism, door stone, urgent footsteps, restrained mystery strings.

No face drift, exposed hair, fantasy iris, egg, dragon, text errors, subtitles, grid or watermark.`
    },
    {
      id: "scene-09",
      order: "09",
      title: "العلامة تجيب",
      en: "THE MARK ANSWERS",
      duration: "8 ثوانٍ",
      location: "قاعة الحكم",
      cast: "ليان · الملك · الملكة · آزر · البيضة",
      image: "assets/episode-01/scene-09-the-mark-answers-sheet-v1.png",
      purpose: "تلامس العلامة طاقة البيضة فتمنح ليان أول رؤية للخيانة: الباب فُتح من الداخل.",
      narrator: "“When the mark touched the egg... the Covenant showed her what the walls concealed.”",
      screenText: [],
      attachments: [
        {src:"assets/episode-01/scene-09-the-mark-answers-sheet-v1.png",name:"Scene 09 Sheet",type:"المرجع الأول",role:"ترتيب الاقتراب والاستجابة والرؤية والعودة."},
        {src:"assets/layan.webp",name:"Layan Character Sheet",type:"هوية ليان",role:"المرجع الحاسم للوجه والعلامة والملابس والعين البشرية."},
        {src:"assets/azar-and-egg.webp",name:"Azar & Egg Sheet",type:"مرجع المخلوق والعنصر",role:"يثبت آزر والبيضة؛ لا يحدث فقس أو تشقق."},
        {src:"assets/great-hall.webp",name:"Great Hall",type:"هوية الموقع",role:"يثبت القاعة والجغرافيا."},
        {src:"assets/episode-01/scene-06-before-the-throne-sheet-v1.png",name:"Royal Continuity",type:"استمرارية",role:"يحافظ على مواقع الملك والملكة والبيضة قبل دخول ليان."}
      ],
      imagePrompt: `CREATE A PORTRAIT 9:16 EIGHT-PANEL CINEMATIC SCENE SHEET IN A CLEAN 4×2 GRID. Each tall panel is separate, with thin dark gutters, small numbers and timestamps only.

Use exact Layan, Azar, intact egg and Great Hall.

PANELS:
01 wide royal group around the egg as Layan approaches;
02 over-shoulder from behind Layan toward the shell;
03 macro open palm and covenant mark inches from the egg;
04 contactless amber arc between mark and shell;
05 extreme close-up of Layan's natural brown eye receiving a vision;
06 vision: an unidentified insider hand opens a hidden door from within;
07 vision: four black silhouettes cross the threshold, faces unseen;
08 return to Layan's close portrait as she warns the rulers.

Photoreal supernatural restraint, sharp identity continuity, amber energy kept elegant and physical, vision imagery colder and fragmented.

No glowing fantasy iris, no exposed hair, no egg crack, no visible traitor identity, no adult dragon attack, no captions or duplicated heroes.`,
      motionPrompt: `CREATE AN 8-SECOND CINEMATIC VERTICAL 9:16 COVENANT VISION SCENE.

Use the Scene Sheet only for shot order. Layan reference is absolute for identity and palm mark. Azar-and-Egg controls creature and intact shell. Great Hall fixes location. Scene 06 maintains royal blocking.

SHOT FLOW:
00:00–00:01.2 — shoulder push behind Layan toward the egg.
00:01.2–00:02.4 — macro palm rises and stops just above the shell.
00:02.4–00:03.4 — one restrained amber response passes between mark and intact egg.
00:03.4–00:04.2 — rapid controlled push into Layan's natural brown eye.
00:04.2–00:05.3 — cold fragmented vision: unknown hand releases an inner lock.
00:05.3–00:06.3 — four silhouettes enter; keep all identities hidden.
00:06.3–00:07.2 — snap back to present with breath and fading light.
00:07.2–00:08.0 — Layan says exactly: "The door was opened from inside."

NARRATOR:
Same English FEMALE narrator:
"When the mark touched the egg... the Covenant showed her what the walls concealed."

AUDIO:
Low egg resonance, crystalline palm tone, reverse breath, lock mechanism, distant footsteps, sudden silence and Layan's clear line.

No subtitles, no eye transformation, no crack, no traitor face, no grid or watermark.`
    },
    {
      id: "scene-10",
      order: "10",
      title: "المجلس السري",
      en: "THE SECRET COUNCIL",
      duration: "8 ثوانٍ",
      location: "مكتبة العهد",
      cast: "الملك · الملكة · ليان · زين",
      image: "assets/episode-01/scene-10-the-secret-council-sheet-v1.png",
      purpose: "مجلس صغير يخطط لحماية البيضة بينما تكشف الكاميرا أن السر نفسه يُراقَب.",
      narrator: "“They planned in secret... never knowing the secret was listening.”",
      screenText: [],
      attachments: [
        {src:"assets/episode-01/scene-10-the-secret-council-sheet-v1.png",name:"Scene 10 Sheet",type:"المرجع الأول",role:"ترتيب المجلس ومسار الكاميرا نحو المراقب الخفي."},
        {src:"assets/covenant-library.webp",name:"Covenant Library",type:"هوية الموقع",role:"يثبت غرفة الخرائط والممرات المخفية."},
        {src:"assets/king-yahia.webp",name:"King Yahia",type:"هوية الشخصية",role:"تثبيت الملك."},
        {src:"assets/queen-alia.webp",name:"Queen Alia",type:"هوية الشخصية",role:"تثبيت الملكة."},
        {src:"assets/layan.webp",name:"Layan",type:"هوية الشخصية",role:"تثبيت ليان."},
        {src:"assets/zayn.webp",name:"Zayn",type:"هوية الشخصية",role:"تثبيت زين."}
      ],
      imagePrompt: `CREATE A PORTRAIT 9:16 EIGHT-PANEL CINEMATIC SCENE SHEET, EXACT 4×2 LAYOUT, TALL ISOLATED PANELS, THIN DARK SEPARATORS, SMALL NUMBERS AND TIMESTAMPS ONLY.

Use exact King Yahia, Queen Alia, Layan, Zayn and Covenant Library.

PANELS:
01 high symmetrical view of four figures around the map table;
02 tight King profile placing the egg route on the map;
03 Queen Alia points to the inner defensive ring;
04 Zayn studies the open-door route with controlled anger;
05 Layan opens the covenant book beside her glowing mark;
06 circular slider composition uniting the four while hidden shelves frame them;
07 point-of-view from behind a narrow archive grille watching the council;
08 macro of an unseen listener's hand withdrawing from the secret mechanism.

Photoreal conspiracy thriller in ancient fantasy architecture, warm table light, deep surrounding shadow, exact faces and wardrobes.

No visible spy face, no egg in the room, no new council member, no captions, no identity drift.`,
      motionPrompt: `CREATE AN 8-SECOND CINEMATIC VERTICAL 9:16 SECRET-COUNCIL SEQUENCE.

Scene Sheet controls shots. Location and four character sheets are absolute authorities.

SHOT FLOW:
00:00–00:01.2 — overhead descent to the four-person map table.
00:01.2–00:02.3 — intimate King profile and route marker.
00:02.3–00:03.4 — lateral move from Queen's defensive gesture to Zayn's reaction.
00:03.4–00:04.5 — macro on Layan's book and restrained palm mark.
00:04.5–00:05.7 — smooth circular slider around the council, serious micro-expressions.
00:05.7–00:06.7 — camera passes behind shelving and becomes a hidden observer POV.
00:06.7–00:08.0 — macro unknown hand releases the grille and disappears.

NARRATOR:
Same English FEMALE narrator, split deliberately:
At the opening: "They planned in secret..."
Near the final shot: "...never knowing the secret was listening."

AUDIO:
Low whispers without intelligible dialogue, parchment, map stones, distant clocklike mechanism, restrained pulse and one hidden metal click.

TRANSITION:
The click becomes the inner-door lock opening in Scene 11.

No spy identity, no subtitles, no extra characters, no face drift, no grid or watermark.`
    },
    {
      id: "scene-11",
      order: "11",
      title: "فُتح من الداخل",
      en: "OPENED FROM INSIDE",
      duration: "8 ثوانٍ",
      location: "الممر السفلي",
      cast: "الخائن المجهول · أربعة متسللين",
      image: "assets/episode-01/scene-11-opened-from-inside-sheet-v1.png",
      purpose: "تحويل رؤية ليان إلى حقيقة: خائن مجهول يفتح ممرًا داخليًا لأربعة من الرايات السوداء.",
      narrator: "“The enemy did not breach the walls... someone opened them from within.”",
      screenText: [],
      attachments: [
        {src:"assets/episode-01/scene-11-opened-from-inside-sheet-v1.png",name:"Scene 11 Sheet",type:"المرجع الأول",role:"ترتيب فتح الباب ودخول المتسللين وإخفاء هوية الخائن."},
        {src:"assets/lower-chamber.webp",name:"Lower Chamber",type:"هوية الموقع",role:"يثبت لغة الممر والحجر والآلية الداخلية."},
        {src:"assets/army-pack.webp",name:"Black Banner Infiltrators",type:"هوية المتسللين",role:"استخدم أربعة متسللين فقط من الرايات السوداء بعتاد متناسق."},
        {src:"assets/episode-01/scene-10-the-secret-council-sheet-v1.png",name:"Scene 10 Transition",type:"استمرارية",role:"يوصل صوت وموضع الآلية من المجلس إلى الباب."},
        {src:"assets/episode-01/scene-09-the-mark-answers-sheet-v1.png",name:"Vision Continuity",type:"اختياري",role:"يحافظ على تطابق الحدث مع رؤية ليان."}
      ],
      imagePrompt: `CREATE A PORTRAIT 9:16 EIGHT-PANEL CINEMATIC INFILTRATION SHEET, FOUR TALL PANELS ON EACH ROW, THIN DARK GUTTERS, SMALL NUMBERS AND TIMESTAMPS ONLY.

Story: an unidentified palace insider opens a sealed lower passage from within and admits exactly four Black Banner infiltrators.

PANELS:
01 extreme macro internal lock turning from the protected side;
02 shadowed hand presses the ancient release, no identifying jewelry or face;
03 low symmetrical view as the sealed stone door opens a narrow crack;
04 four silhouettes wait outside in cold blue night;
05 first infiltrator slips through, low handheld tension;
06 overhead view of exactly four figures entering in formation;
07 unknown insider remains a featureless foreground silhouette as the last one passes;
08 close on black wax mark left beside the slowly closing door.

Use Lower Chamber architecture and Army Pack rebel equipment. Photoreal stealth thriller, warm interior versus cold exterior, clear spatial continuity.

No visible traitor identity, no fifth infiltrator, no heroes, no dragon, no egg, no captions, no modern weapons.`,
      motionPrompt: `CREATE AN 8-SECOND CINEMATIC VERTICAL 9:16 INFILTRATION SEQUENCE.

Scene Sheet controls the eight shots. Lower Chamber fixes the passage. Army Pack supplies exactly four Black Banner infiltrators. Scene 10 provides the opening mechanism transition; Scene 09 is optional vision continuity.

SHOT FLOW:
00:00–00:01.0 — begin on the exact metal click; macro gears and inner bolt retract.
00:01.0–00:02.0 — shadowed insider hand activates the release, identity completely hidden.
00:02.0–00:03.1 — low symmetrical dolly as the stone door opens a narrow line of blue night.
00:03.1–00:04.2 — four disciplined silhouettes wait outside.
00:04.2–00:05.5 — close shoulder tracking as the first two slip inside.
00:05.5–00:06.6 — overhead confirms exactly four infiltrators.
00:06.6–00:07.4 — featureless insider silhouette lets the final man pass.
00:07.4–00:08.0 — macro black wax mark; door closes into darkness.

NARRATOR:
Same English FEMALE narrator:
"The enemy did not breach the walls... someone opened them from within."

AUDIO:
Ancient gears, stone weight, controlled boots, cloth and armor, distant night wind, muffled heartbeat and a low war-drum pickup.

No dialogue, no traitor face, no extra infiltrator, no subtitles, no grid or watermark.`
    },
    {
      id: "scene-12",
      order: "12",
      title: "ارفعوا الرايات",
      en: "RAISE THE BANNERS",
      duration: "10 ثوانٍ",
      location: "معسكر الرايات السوداء",
      cast: "نادر · جيش الرايات السوداء",
      image: "assets/episode-01/scene-12-raise-the-banners-sheet-v1.png",
      purpose: "قفلة الحلقة: تقديم نادر رسميًا، إعلان الحرب، وربط الخيانة الداخلية بقيام الجيش خارج المدينة.",
      narrator: "“The door was open... and the last war had begun.”",
      screenText: ["NADER", "COMMANDER OF THE BLACK BANNERS", "THE ENEMY WHO REMEMBERS"],
      attachments: [
        {src:"assets/episode-01/scene-12-raise-the-banners-sheet-v1.png",name:"Scene 12 Sheet",type:"المرجع الأول",role:"تسلسل وصول الإشارة وFreeze نادر وقيام الجيش."},
        {src:"assets/nader.webp",name:"Nader Character Sheet",type:"هوية الخصم",role:"المرجع الوحيد لوجه نادر وندبته ودرعه ووشاحه وسيفه وقناعه."},
        {src:"assets/black-banners-camp.webp",name:"Black Banners Camp",type:"هوية الموقع",role:"يثبت المعسكر والوادي وخيمة القيادة والرايات."},
        {src:"assets/army-pack.webp",name:"Army Pack",type:"مرجع الجيش",role:"استخدم جيش الرايات السوداء والخيول والأسلحة والرايات فقط."},
        {src:"assets/episode-01/scene-11-opened-from-inside-sheet-v1.png",name:"Scene 11 Continuity",type:"استمرارية",role:"يوصل علامة الشمع وإشارة نجاح فتح الباب."},
        {src:"assets/golden-city.webp",name:"Golden City",type:"اختياري",role:"لإظهار العاصمة البعيدة كهدف ثابت عند الأفق فقط."}
      ],
      imagePrompt: `CREATE A PORTRAIT 9:16 EIGHT-PANEL CINEMATIC EPISODE-FINALE SHEET, EXACTLY FOUR TALL PANELS TOP AND FOUR BOTTOM, THIN DARK SEPARATORS, SMALL NUMBERS AND TIMESTAMPS ONLY.

Use exact Nader identity, Black Banners Camp and disciplined rebel army.

PANELS:
01 macro black wax signal and ancient shell fragment on the command table;
02 unmasked Nader studies them with calm recognition;
03 clean hero-intro portrait, exact scar, face, armor and dark-red scarf;
04 low three-quarter as he turns toward the distant Golden City;
05 Nader steps from the command tent while drums begin;
06 wide camp view as soldiers rise in coordinated ranks;
07 low action angle as enormous black banners lift across the valley;
08 final epic silhouette: Nader before the assembled army and distant capital.

Photoreal epic military dark fantasy, disciplined army rather than bandits, cold predawn blue, orange fires, black cloth and restrained dark-red accents. Strong finale scale and varied macro, portrait, tracking, low and aerial lenses.

No theatrical grin, no face drift, no extra dragon, no modern army gear, no chaotic crowd, no captions.`,
      motionPrompt: `CREATE A 10-SECOND CINEMATIC VERTICAL 9:16 EPISODE FINALE.

Scene Sheet controls shot order. Nader sheet is the absolute face, scar, armor, scarf, sword and mask authority. Camp fixes geography. Army Pack fixes disciplined soldiers, cavalry and banners. Scene 11 provides the black-wax success signal. Golden City is optional and may appear only at the distant horizon.

TIMELINE:
00:00–00:01.2 — macro on black wax and the tiny ancient shell fragment; low drum begins.
00:01.2–00:03.0 — slow compressed push to unmasked Nader's calm recognition.
00:03.0–00:05.0 — EXACT TWO-SECOND NADER FREEZE. Preserve the approved face and scar. Background fire and smoke move subtly. Display exactly:
"NADER"
"COMMANDER OF THE BLACK BANNERS"
"THE ENEMY WHO REMEMBERS"
00:05.0–00:06.4 — action resumes; Nader exits the tent toward the waiting ranks.
00:06.4–00:07.8 — crane rises as soldiers stand in disciplined waves.
00:07.8–00:09.2 — Nader raises one hand and says exactly: "Raise the banners."
00:09.2–00:10.0 — synchronized black banners surge upward; enormous orchestral hit, then hard cut to black.

NARRATOR:
Same English FEMALE narrator:
"The door was open... and the last war had begun."

AUDIO AND MUSIC:
Begin with one isolated war drum. Add boots, armor, horse breath, banner rope and rising low brass. The full army motif enters only after Nader's line. Finish with a huge banner snap, orchestral impact and immediate silence.

No text errors, subtitles, face drift, chaotic movement, extra dragon, modern weapons, grid or watermark.`
    }
  ]
};
