window.trailerProduction = {
  title: "الإعلان الرسمي",
  en: "THE FIRE COVENANT — OFFICIAL TRAILER",
  duration: "نحو 84 ثانية",
  format: "Vertical 9:16 · Google Flow Omni",
  cover: "assets/trailer/the-fire-covenant-official-trailer-cover-v1.webp",
  summary: "مقدمة سينمائية، 8 مشاهد مترابطة، ثم قفلة تحمل هوية YEHIA.DIGITAL ودعوة للوصول إلى البرومبت والشرح الكامل.",
  narrator: "صوت أنثوي إنجليزي عميق وهادئ وناضج، ثابت في جميع المشاهد.",
  units: [
    {
      id: "intro",
      order: "00",
      title: "مقدمة التريلر",
      en: "OPENING TITLE",
      duration: "4 ثوانٍ",
      image: "assets/trailer/the-fire-covenant-official-trailer-cover-v1.webp",
      purpose: "تأسيس هوية الفيلم بصريًا وصوتيًا قبل أول نبضة من العهد، من دون كشف أحداث القصة.",
      narrator: "لا يوجد راوٍ في المقدمة.",
      screenText: ["OFFICIAL TRAILER", "THE FIRE COVENANT", "A YEHIA.DIGITAL PRODUCTION"],
      attachments: [
        {
          src: "assets/trailer/the-fire-covenant-official-trailer-cover-v1.webp",
          name: "Official Trailer Cover",
          type: "الصورة الأساسية",
          role: "ارفعها وحدها. هي المرجع الكامل للتكوين، التنين، المدينة، الإضاءة والنصوص. لا تضف Character أو Location Sheets حتى لا يعيد Flow تصميم الغلاف."
        }
      ],
      prompt: `CREATE A 4-SECOND CINEMATIC VERTICAL 9:16 OPENING TITLE FROM THE UPLOADED COVER.

REFERENCE AUTHORITY:
The uploaded cover is the absolute source of truth for composition, dragon anatomy, Golden City architecture, color palette, typography and all written text.
Animate the existing image as layered cinematic key art. Do not redesign, replace or regenerate any element.

CAMERA AND DEPTH:
Begin from full black.
A narrow molten-gold vertical light appears first, then reveals the central citadel.
Perform a very slow controlled push-in with subtle multi-plane parallax:
- foreground embers drift upward;
- low smoke rolls gently across the city;
- the city remains structurally locked;
- storm clouds move slowly behind the dragon;
- the dragon breathes once and gives one restrained wing adjustment without changing anatomy.
Keep the title perfectly stable, centered and readable. Do not animate individual letters.

TIMELINE:
00:00–00:00.7 — black, low sub-bass ignition, thin gold seam appears.
00:00.7–00:02.8 — cover reveals through smoke while the camera slowly pushes toward the title.
00:02.8–00:03.6 — hold the complete title and production credit clearly.
00:03.6–00:04.0 — the gold seam flares and collapses into a single heartbeat pulse, cutting to black for Scene 01.

AUDIO:
No narrator and no dialogue.
Use a deep cinematic sub-bass rise, distant dragon breath, low bowed-metal resonance, restrained choir inhale, soft ember crackle and one final heartbeat.
Do not use a full musical climax; this is the first breath of the trailer.

TEXT LOCK:
Preserve exactly:
"OFFICIAL TRAILER"
"THE FIRE COVENANT"
"A YEHIA.DIGITAL PRODUCTION"
No extra text, no letter changes, no morphing, no subtitles and no watermark.

NEGATIVE CONSTRAINTS:
No dragon flight, no roaring, no city destruction, no fire attack, no added characters, no camera orbit, no fast zoom, no typography distortion, no extra logo and no scene-sheet layout.`
    },
    {
      id: "scene-01",
      order: "01",
      title: "النبضة الأولى",
      en: "THE FIRST PULSE",
      duration: "10 ثوانٍ",
      image: "assets/trailer/scene-01-first-pulse-sheet-v3-master-style.webp",
      purpose: "ليان تهبط إلى الحجرة السفلية وتكتشف البيضة السليمة قبل أن تلمسها. الرهبة تأتي من الصمت والنبضة، لا من كشف التنين.",
      narrator: "“For a thousand years… the Covenant slept beneath the throne. Until now.”",
      screenText: [],
      attachments: [
        {
          src: "assets/trailer/scene-01-first-pulse-sheet-v3-master-style.webp",
          name: "Scene 01 Sheet",
          type: "المرجع الأول",
          role: "يتحكم فقط في ترتيب اللقطات الثماني، الكادرات، حركة ليان والتوقيت. لا تحرّك الشيت كصورة واحدة."
        },
        {
          src: "assets/layan.webp",
          name: "Layan Character Sheet",
          type: "هوية الشخصية",
          role: "المرجع الوحيد لوجه ليان، عمرها، ملابسها، غطاء الرأس، العلامة في الكف ونِسب الجسم. العينان بنيتان بشريتان وبؤبؤ دائري طبيعي."
        },
        {
          src: "assets/lower-chamber.webp",
          name: "Lower Chamber",
          type: "هوية الموقع",
          role: "المرجع الوحيد للعمارة، الممر الحلزوني، المنصة المركزية، الحجر البركاني، القنوات الذهبية والمصابيح."
        },
        {
          src: "assets/azar-and-egg.webp",
          name: "Dragon Egg Reference",
          type: "مرجع العنصر",
          role: "استخدم تصميم البيضة فقط: القشرة الداكنة والعروق الكهرمانية. تجاهل التنين البالغ بالكامل."
        }
      ],
      prompt: `CREATE A 10-SECOND CINEMATIC VERTICAL 9:16 TRAILER SCENE IN GOOGLE FLOW OMNI.

REFERENCE ROLES:
Reference 1, the Scene Sheet, controls only shot order, framing, composition and action progression. Reconstruct every numbered panel as a separate full-screen shot. Never animate the flat sheet, grid, borders, timestamps or panel numbers.
Reference 2 is the sole identity authority for Layan. Preserve her exact face, age, natural skin, brown human eyes with round pupils, covered hair, wardrobe, body proportions and palm mark.
Reference 3 is the sole authority for the Lower Chamber architecture and geography.
Reference 4 is used only for the intact dragon egg. Ignore the adult dragon completely.

STORY:
Layan descends alone into the buried covenant chamber. She senses the dormant egg before reaching it. She stops with her palm close to the shell but never touches it.

SHOT FLOW:
01 — descend from darkness behind Layan on the spiral path, slow floating crane movement.
02 — low tracking shot beside her boots and robe as dormant gold channels faintly respond.
03 — overhead reveal of the deep circular chamber and tiny central egg dais.
04 — slow push from behind her shoulder toward the intact egg.
05 — macro on the faint covenant mark in her open palm beginning to glow.
06 — side-profile medium shot as she raises her hand but stops several centimeters from the shell.
07 — macro on one amber pulse traveling through the intact egg veins; no crack.
08 — close portrait of Layan reacting to a heartbeat only she can hear; natural brown eye, round pupil, no fantasy-eye transformation.

CAMERA:
Use controlled descending crane, low slider, overhead reveal, shoulder push-in, macro lens and restrained portrait dolly. Every move is slow, precise and ominous. No random orbit or handheld shake.

TRANSITION:
Open from the final gold pulse of the title cover. End on immediate full black synchronized to a single heavy heartbeat.

NARRATOR:
Use the same deep, calm, mature English FEMALE narrator for the entire trailer.
She says exactly:
"For a thousand years… the Covenant slept beneath the throne. Until now."

MUSIC AND SOUND:
Subterranean air, distant stone resonance, soft cloth movement, oil-flame hiss, restrained low cello, reversed metal swell and a deep organic heartbeat. Music drops to near silence when the egg pulses.

ON-SCREEN TEXT:
No text, captions, titles or subtitles.

IDENTITY AND STORY LOCKS:
The egg remains completely intact.
Layan never touches it.
No crack, no hatchling, no adult dragon, no extra character, no face drift, no exposed hair, no glowing fantasy iris, no architecture redesign and no watermark.`
    },
    {
      id: "scene-02",
      order: "02",
      title: "استيقاظ آزر",
      en: "AZAR AWAKENS",
      duration: "8 ثوانٍ",
      image: "assets/trailer/scene-02-azar-awakens-sheet-v1-master-style.webp",
      purpose: "النبضة تصل إلى آزر داخل قاعة الحكم، فيستيقظ آخر حراس العالم القديم من دون إطلاق قوته كاملة.",
      narrator: "“One pulse… awakened the last guardian of the old world.”",
      screenText: [],
      attachments: [
        {
          src: "assets/trailer/scene-02-azar-awakens-sheet-v1-master-style.webp",
          name: "Scene 02 Sheet",
          type: "المرجع الأول",
          role: "يتحكم في اللقطات الثماني وتدرج الاستيقاظ من التفاصيل الصغيرة حتى العين."
        },
        {
          src: "assets/azar-and-egg.webp",
          name: "Azar Creature Sheet",
          type: "هوية آزر",
          role: "استخدم التنين البالغ فقط، مع تثبيت الرأس والقرون والحراشف والأجنحة والعين الكهرمانية. تجاهل البيضة."
        },
        {
          src: "assets/great-hall.webp",
          name: "Great Hall",
          type: "هوية الموقع",
          role: "المرجع الوحيد لحجم القاعة، استراحة آزر، الحوض الدائري، الحجر الداكن، النحاس وفتحة السقف."
        }
      ],
      prompt: `CREATE AN 8-SECOND CINEMATIC VERTICAL 9:16 TRAILER SCENE.

REFERENCE ROLES:
Reference 1 controls only the eight-shot order, framing and action rhythm. Rebuild each panel as a separate full-screen shot; never show the sheet grid.
Reference 2 is the absolute creature authority for adult Azar. Use the dragon only and ignore every egg panel.
Reference 3 is the absolute location authority for the Great Hall and dragon resting bay.

CREATURE LOCK:
Preserve Azar's exact horn silhouette, skull shape, scarred charcoal-black volcanic scales, subtle ember fissures, amber eyes, wing anatomy, age and colossal scale. No anatomy mutation, extra limbs, face redesign or size change.

SHOT FLOW:
01 — macro on still water in Azar's resting bay; the previous heartbeat creates one circular ripple.
02 — extreme close-up of a massive claw flexing once against wet stone.
03 — low tracking move along dormant charcoal scales as faint amber fissures wake.
04 — dust falls from the hall while one folded wing shifts with enormous weight.
05 — wide reveal of Azar rising inside the colossal Great Hall.
06 — low-angle push toward his head as he inhales; no roar.
07 — profile close-up as his eyelid begins to open.
08 — extreme macro of the fully opened amber dragon eye, holding steady.

CAMERA:
Use macro slider, low lateral tracking, controlled vibration, wide crane reveal, low dolly and extreme eye macro. Convey scale through slow heavy movement rather than fast camera motion.

NARRATOR:
Use the same deep, calm, mature English FEMALE narrator.
She says exactly:
"One pulse… awakened the last guardian of the old world."

MUSIC AND SOUND:
Continue the low cello motif. Add stone groan, water ripple, claw scrape, leather-like wing tension, falling dust, deep inhale and restrained sub-bass. No roar.

TRANSITION:
Open from Scene 01 black on the continuation of the heartbeat. End by holding the amber eye; its circular glow becomes a distant rebel campfire in Scene 03.

ON-SCREEN TEXT:
No text.

NEGATIVE CONSTRAINTS:
No egg, no humans, no flight, no fire breath, no roar, no malformed wings, no hall redesign, no collage, no subtitles and no watermark.`
    },
    {
      id: "scene-03",
      order: "03",
      title: "العدو يعرف",
      en: "THE ENEMY KNOWS",
      duration: "10 ثوانٍ",
      image: "assets/trailer/scene-03-enemy-knows-sheet-v1-master-style.webp",
      purpose: "نادر يتلقى الإشارة داخل معسكر الرايات السوداء ويكشف أن استيقاظ العهد لم يكن سرًا بل إعلان حرب.",
      narrator: "“The pulse was not a secret… It was a signal.”",
      screenText: ["THE ENEMY", "NEVER FORGOT"],
      attachments: [
        {
          src: "assets/trailer/scene-03-enemy-knows-sheet-v1-master-style.webp",
          name: "Scene 03 Sheet",
          type: "المرجع الأول",
          role: "يتحكم في ترتيب لقطات المعسكر والقطعة والقائد وارتداء القناع."
        },
        {
          src: "assets/nader.webp",
          name: "Nader Character Sheet",
          type: "هوية الشخصية",
          role: "المرجع الوحيد لوجه نادر والندبة والشعر واللحية والدرع والوشاح والسيف والقناع وحافظة القطعة."
        },
        {
          src: "assets/black-banners-camp.webp",
          name: "Black Banners Camp",
          type: "هوية الموقع",
          role: "يثبت الوادي، الخيام، خيمة القيادة، توزيع النيران والرايات السوداء."
        },
        {
          src: "assets/army-pack.webp",
          name: "Army Pack",
          type: "مرجع الـExtras",
          role: "استخدم جانب المتمردين فقط لتثبيت الجنود والدروع والخيول والأسلحة والرايات السوداء."
        }
      ],
      prompt: `CREATE A 10-SECOND CINEMATIC VERTICAL 9:16 ACTION-TRAILER SCENE.
Use 8.8 seconds for visuals and 1.2 seconds for the final text card.

REFERENCE ROLES:
Reference 1 controls the eight-shot order and compositions only. Reconstruct every panel full-screen.
Reference 2 is the sole identity authority for Nader: exact face, scar, hair, beard, age, armor, burgundy scarf, curved sword, mask and fragment case.
Reference 3 is the sole location authority for the Black Banners Camp.
Reference 4 controls rebel soldiers, cavalry, equipment and black banners only.

MASK CONTINUITY:
Nader is unmasked in shots 05 and 06.
He deliberately raises the approved mask in shot 07.
He is fully masked in shot 08.
Never alter his identity while the mask moves.

SHOT FLOW:
01 — the glowing dragon eye from Scene 02 visually transforms into a distant campfire during a high aerial descent over the camp.
02 — ground-level tracking through disciplined rebel lines and snapping black banners.
03 — fast controlled push toward the command tent.
04 — macro reveal of a tiny ancient shell fragment glowing inside its case; keep it small.
05 — unmasked Nader watches the fragment with calm recognition, compressed portrait lens.
06 — slow three-quarter slider as he looks toward the distant capital; sword remains sheathed.
07 — low medium shot as he raises his approved mask over the same face.
08 — masked close-up; he turns slightly toward camera as the camp erupts into coordinated movement behind him.

NARRATOR:
Use the same deep, calm, mature English FEMALE narrator.
She says exactly:
"The pulse was not a secret… It was a signal."

TEXT CARD:
After shot 08, cut to black with drifting embers and display exactly:
"THE ENEMY"
"NEVER FORGOT"
Use centered engraved antique-gold capitals. No other text.

MUSIC AND SOUND:
Cold wind, banner snaps, distant horses, disciplined boots, tent fabric, tiny magical fragment hum, mask click, low war drum and metallic bass pulse. Music grows from surveillance tension into the first military rhythm.

TRANSITION:
The final antique-gold text breaks into one controlled ember. That ember becomes the glowing covenant mark opening Scene 04.

NEGATIVE CONSTRAINTS:
No dragon, no king, no queen, no oversized fragment, no unsheathed sword, no face drift, no mask change, no chaotic bandit camp, no extra text, no collage and no watermark.`
    },
    {
      id: "scene-04",
      order: "04",
      title: "الملك والتنين",
      en: "THE KING AND THE DRAGON",
      duration: "10 ثوانٍ",
      image: "assets/trailer/scene-04-king-and-dragon-sheet-v1-master-style.webp",
      purpose: "تثبيت الرابطة القديمة بين الملك يحيى وآزر، ثم تحويل هذه الرابطة إلى استعداد للحرب.",
      narrator: "“The last king. The last dragon. Bound by an oath… older than the throne.”",
      screenText: [],
      attachments: [
        {
          src: "assets/trailer/scene-04-king-and-dragon-sheet-v1-master-style.webp",
          name: "Scene 04 Sheet",
          type: "المرجع الأول",
          role: "يحدد اللقطات الثماني، أما الوجوه والتصميمات فتأتي من الشيتات المنفصلة."
        },
        {
          src: "assets/king-yahia.webp",
          name: "King Yahia Character Sheet",
          type: "هوية البطل",
          role: "المرجع الوحيد لوجه الملك وبنيته وعمره وشعره ولحيته ودرعه وعباءته وشعار العهد والحزام والسيف."
        },
        {
          src: "assets/azar-and-egg.webp",
          name: "Azar Creature Sheet",
          type: "هوية آزر",
          role: "استخدم التنين البالغ فقط وثبّت تشريحه وحجمه. تجاهل البيضة بالكامل."
        },
        {
          src: "assets/great-hall.webp",
          name: "Great Hall",
          type: "هوية الموقع",
          role: "المرجع الوحيد للقاعة واستراحة آزر والحوض وفتحة السقف."
        }
      ],
      prompt: `CREATE A 10-SECOND CINEMATIC VERTICAL 9:16 TRAILER SCENE.

REFERENCE AUTHORITY:
Reference 1 controls only shot order, composition and action.
Reference 2 is the sole and absolute identity authority for King Yahia.
Reference 3 is used only for adult Azar; ignore the egg.
Reference 4 is the sole authority for the Great Hall.

KING IDENTITY LOCK:
Preserve the exact facial geometry, natural skin texture, brown eyes, eyebrows, nose, lips, hairline, short curly hair, beard, age, athletic body, armor, cloak, emblem, belt and sword from the Character Sheet.
Do not beautify, recast, age-shift or replace him with a generic fantasy king.
For facial shots use controlled sliders and short dollies. Never perform a full orbit around his head.

SHOT FLOW:
01 — macro of the covenant mark glowing once, formed from Scene 03's final ember.
02 — vast symmetrical Great Hall wide shot: King Yahia faces colossal Azar across the resting bay.
03 — low rear tracking shot as the king walks alone toward the dragon.
04 — overhead view of the narrow stone bridge across the circular bay.
05 — extreme close-up of Azar's amber eye reflecting the approaching king.
06 — over Azar's shoulder toward the tiny but steady king.
07 — side-profile eye-level two-shot; use a controlled lateral slider from profile to a slight three-quarter view, never a full orbit.
08 — low hero portrait based directly on the front Character Sheet. Perform a controlled backward dolly, then a very small push-in as Yahia half-draws his sword and Azar rises behind him.

NARRATOR:
Use the same deep, calm, mature English FEMALE narrator.
She says exactly:
"The last king. The last dragon. Bound by an oath… older than the throne."

MUSIC AND SOUND:
Great Hall reverb, measured armor footsteps, water movement, dragon breath, scale friction, a restrained sword draw, low cello, bowed metal, noble horn, distant choir and the first heavy war drum.
Azar does not roar.

TRANSITION:
Open from the ember-to-mark match cut. End with the polished sword edge sweeping across frame as a bright blade wipe into Scene 05.

ON-SCREEN TEXT:
No text.

NEGATIVE CONSTRAINTS:
No face drift, no facial orbit, no generic king, no costume change, no egg, no fire breath, no roar, no sword swing, no attack between king and dragon, no extra characters, no collage, no subtitles and no watermark.`
    },
    {
      id: "scene-05",
      order: "05",
      title: "البوابة الشرقية",
      en: "THE EASTERN GATE",
      duration: "8 ثوانٍ",
      image: "assets/trailer/scene-05-eastern-gate-sheet-v1-master-style.webp",
      purpose: "الحرب تصل إلى العاصمة، والملكة علياء تتخذ قرار إغلاق البوابة قبل أن يبتلعها الغبار والفرسان.",
      narrator: "“Before the kingdom could breathe… war reached its gates.”",
      screenText: [],
      attachments: [
        {
          src: "assets/trailer/scene-05-eastern-gate-sheet-v1-master-style.webp",
          name: "Scene 05 Sheet",
          type: "المرجع الأول",
          role: "يحدد ترتيب اللقطات من رؤية الجيش حتى غلق البوابة."
        },
        {
          src: "assets/queen-alia.webp",
          name: "Queen Alia Character Sheet",
          type: "هوية الملكة",
          role: "المرجع الوحيد للوجه، غطاء الرأس، التاج، الدرع، الحزام والسيف. يمنع تغيير الممثلة بين اللقطات."
        },
        {
          src: "assets/eastern-gate.webp",
          name: "Eastern Gate",
          type: "هوية الموقع",
          role: "المرجع الوحيد للبرجين والبوابة والساحة والآليات والحجر الذهبي."
        },
        {
          src: "assets/army-pack.webp",
          name: "Army Pack",
          type: "مرجع الجيش",
          role: "استخدم المتمردين والفرسان والرايات السوداء فقط في خارج البوابة، والحرس الملكي داخلها."
        }
      ],
      prompt: `CREATE AN 8-SECOND CINEMATIC VERTICAL 9:16 ACTION-TRAILER SCENE.

REFERENCE ROLES:
Reference 1 controls shot order, framing and action progression only.
Reference 2 is the sole identity authority for Queen Alia. Preserve her exact face, age, natural skin, brown eyes, head covering, circlet, armor, belt, sword and athletic body.
Reference 3 is the sole authority for the Eastern Gate architecture, courtyard, towers and mechanisms.
Reference 4 controls the enemy cavalry, royal guards, armor, horses, weapons and banners.

SHOT FLOW:
01 — the sword blade wipe from Scene 04 becomes sunlight sliding along the Eastern Gate; high fast aerial push reveals distant cavalry.
02 — compressed long-lens view from the battlements as black-banner riders emerge through dust.
03 — close three-quarter portrait of Queen Alia. Begin with the army reflected subtly in her natural brown eyes, then use a short controlled slider as she turns to the guards.
04 — low-angle medium shot as she raises her sword in one precise signal to close the gate.
05 — dynamic overhead descending crane into the courtyard as guards move and the giant doors begin closing.
06 — macro tracking along tightening chains, ancient gears and locking teeth; no modern machinery.
07 — ground-level backward tracking beside charging cavalry and pounding hooves.
08 — wide symmetrical exterior: camera pushes toward the narrowing opening until the doors slam shut directly before the lens.

CAMERA:
Use aerial push, telephoto compression, controlled portrait slider, low dolly, overhead crane, macro tracking and ground-level chase. Keep enemy screen direction consistently toward the gate.

NARRATOR:
Use the same deep, calm, mature English FEMALE narrator.
She says exactly:
"Before the kingdom could breathe… war reached its gates."

MUSIC AND SOUND:
Wind, banners, distant hooves growing louder, alarm horn, clean sword draw, indistinct guard shouts, heavy chains, stone gears, wood and metal pressure, horse breathing, armor rattle and a huge sub-bass gate slam.
Music moves from urgent string pulses into taiko-style percussion, then cuts instantly on impact.

TRANSITION:
End on full black after the gate slam. The impact becomes the dragon-claw strike opening Scene 06.

ON-SCREEN TEXT:
No text.

NEGATIVE CONSTRAINTS:
No face drift, no exposed hair, no generic queen, no modern objects, no guns, no gate redesign, no duplicated or malformed horses, no dragon, no king, no collage, no subtitles and no watermark.`
    },
    {
      id: "scene-06",
      order: "06",
      title: "آزر يحلّق",
      en: "AZAR TAKES FLIGHT",
      duration: "8 ثوانٍ",
      image: "assets/trailer/scene-06-azar-takes-flight-sheet-v1-master-style.webp",
      purpose: "آزر يجيب نداء الحرب وينطلق من قاعة الحكم فوق العاصمة في أول انفجار حركي كامل داخل التريلر.",
      narrator: "“And above them… the last guardian answered.”",
      screenText: [],
      attachments: [
        {
          src: "assets/trailer/scene-06-azar-takes-flight-sheet-v1-master-style.webp",
          name: "Scene 06 Sheet",
          type: "المرجع الأول",
          role: "يحدد لقطات الانطلاق من القاعة ثم التحليق فوق المدينة."
        },
        {
          src: "assets/azar-and-egg.webp",
          name: "Azar Creature Sheet",
          type: "هوية آزر",
          role: "استخدم التنين البالغ فقط وثبّت تشريحه وحجم جناحيه. تجاهل البيضة."
        },
        {
          src: "assets/great-hall.webp",
          name: "Great Hall",
          type: "موقع الانطلاق",
          role: "يثبت استراحة التنين والحوض وفتحة السقف التي يخرج منها."
        },
        {
          src: "assets/golden-city.webp",
          name: "Golden City",
          type: "موقع التحليق",
          role: "يثبت القصر الدائري والمدينة العربية الذهبية والحدائق والمحاور الرئيسية."
        }
      ],
      prompt: `CREATE AN 8-SECOND CINEMATIC VERTICAL 9:16 ACTION-FANTASY TRAILER SCENE.

REFERENCE ROLES:
Reference 1 controls the eight-shot sequence and framing only.
Reference 2 is the absolute authority for adult Azar; ignore the egg.
Reference 3 controls the Great Hall launch environment.
Reference 4 controls the Golden City architecture and geography.

CREATURE AND LOCATION LOCK:
Keep Azar's exact head, horns, charcoal volcanic scales, amber fissures, wing structure, tail and colossal scale.
Keep the Great Hall roof portal and Golden City citadel identical to their reference sheets.

SHOT FLOW:
01 — on the gate-slam sound, a massive dragon claw strikes wet stone in the Great Hall resting bay.
02 — low lateral tracking as Azar surges forward and unfolds both wings.
03 — front low-angle shot as one wingbeat throws water and dust toward the lens.
04 — fast rising crane follows him toward the circular roof opening.
05 — exterior low angle as Azar bursts through the portal into storm light without destroying the architecture.
06 — side chase camera beside his first full wingbeat over the royal citadel.
07 — high rear aerial as he banks over the approved Golden City, city remaining structurally stable below.
08 — dramatic front three-quarter aerial as Azar turns toward the distant battlefield and accelerates past camera.

CAMERA:
Use low tracking, impact vibration, rising crane, portal follow-through, side chase and high aerial banking shot. Fast but readable action with realistic inertia. No impossible camera teleportation.

NARRATOR:
Use the same deep, calm, mature English FEMALE narrator.
She says exactly:
"And above them… the last guardian answered."

MUSIC AND SOUND:
Gate impact becomes claw impact. Add water burst, scale friction, wing leather tension, enormous wingbeats, stone reverb, rushing air and distant city alarms.
Music expands into full brass, aggressive low strings, taiko percussion and restrained choir.

TRANSITION:
Azar's final wing crosses the lens as a dark wipe into the battlefield sky of Scene 07.

ON-SCREEN TEXT:
No text.

NEGATIVE CONSTRAINTS:
No egg, no rider, no fire breath, no hall destruction, no changed city, no extra dragon, no malformed wings, no tiny dragon scale, no duplicated limbs, no text, no subtitles and no watermark.`
    },
    {
      id: "scene-07",
      order: "07",
      title: "ظل فوق الجيش",
      en: "SHADOW OVER THE ARMY",
      duration: "10 ثوانٍ",
      image: "assets/trailer/scene-07-shadow-over-army-sheet-v1-master-style.webp",
      purpose: "آزر يهبط بين جيش الرايات السوداء والبوابة، ثم يواجه نادر في لحظة توضح أن المعركة الحقيقية على العهد.",
      narrator: "“He did not come for the city… He came for the Covenant.”",
      screenText: ["EVERY OATH", "HAS A PRICE"],
      attachments: [
        {
          src: "assets/trailer/scene-07-shadow-over-army-sheet-v1-master-style.webp",
          name: "Scene 07 Sheet",
          type: "المرجع الأول",
          role: "يحدد ظل التنين والهبوط والمواجهة والقفلة النصية."
        },
        {
          src: "assets/azar-and-egg.webp",
          name: "Azar Creature Sheet",
          type: "هوية آزر",
          role: "استخدم التنين البالغ فقط. تجاهل البيضة."
        },
        {
          src: "assets/nader.webp",
          name: "Nader Character Sheet",
          type: "هوية نادر",
          role: "المرجع الوحيد لجسمه ودرعه وقناعه وسيفه وانضباط حركته."
        },
        {
          src: "assets/eastern-gate.webp",
          name: "Eastern Gate",
          type: "هوية الموقع",
          role: "يثبت البوابة والأبراج والمسافة بينها وبين ساحة المواجهة."
        },
        {
          src: "assets/army-pack.webp",
          name: "Army Pack",
          type: "مرجع الجيش",
          role: "يثبت المتمردين والخيول والأسلحة والرايات، مع منع تكرار الوجوه أو الأجسام."
        }
      ],
      prompt: `CREATE A 10-SECOND CINEMATIC VERTICAL 9:16 ACTION-TRAILER SCENE.
Use approximately 8.8 seconds for the battle visuals and 1.2 seconds for the text card.

REFERENCE ROLES:
Reference 1 controls the eight-shot order and visual progression.
Reference 2 is the absolute adult Azar authority; ignore the egg.
Reference 3 is the sole identity authority for masked Nader and his equipment.
Reference 4 controls the Eastern Gate architecture.
Reference 5 controls rebels, cavalry, weapons and black banners.

SHOT FLOW:
01 — Azar's wing wipe reveals a huge moving dragon shadow sweeping across ordered rebel ranks.
02 — low ground shot between horse legs as animals react and dust rises.
03 — overhead dive following Azar toward the open ground between army and gate.
04 — heavy three-quarter landing; claws hit earth, wings brake, dust pressure moves outward without killing soldiers.
05 — wide symmetrical standoff: Azar between the black-banner army and Eastern Gate.
06 — compressed close shot of masked Nader remaining still as everyone around him recoils.
07 — low lateral move as Nader steps forward and slowly draws the approved curved sword.
08 — alternating eye-line composition between Azar's amber eye and Nader's mask, ending on both in one tense profile frame.

NARRATOR:
Use the same deep, calm, mature English FEMALE narrator.
She says exactly:
"He did not come for the city… He came for the Covenant."

TEXT CARD:
Cut to black with a single molten-gold crack and display exactly:
"EVERY OATH"
"HAS A PRICE"
Centered antique-gold engraved capitals. No other text.

MUSIC AND SOUND:
Rushing wind, shadow pass, frightened horses, armor movement, massive landing impact, dirt and stone debris, wing brake, dragon breath, clean sword draw and low battlefield silence.
Music hits its largest action peak, then strips down to one sustained choir note during the standoff.

TRANSITION:
The gold crack behind the final text expands into the glowing Lower Chamber channel opening Scene 08.

NEGATIVE CONSTRAINTS:
No egg, no second dragon, no fire breath, no uncontrolled massacre, no Nader face or armor drift, no malformed horses, no duplicated soldiers, no gate redesign, no extra text, no subtitles and no watermark.`
    },
    {
      id: "scene-08",
      order: "08",
      title: "العهد يختار",
      en: "THE COVENANT CHOOSES",
      duration: "10 ثوانٍ",
      image: "assets/trailer/scene-08-covenant-chooses-sheet-v1-master-style.webp",
      purpose: "بينما تقف الحرب عند البوابة، تلمس ليان البيضة للمرة الأولى؛ يظهر شرخ واحد فقط وتنكشف حقيقة أن العهد اختار بالفعل.",
      narrator: "“This war was never for the throne. It was for the Covenant. And it had already chosen.”",
      screenText: ["THE FIRE COVENANT", "COMING SOON"],
      attachments: [
        {
          src: "assets/trailer/scene-08-covenant-chooses-sheet-v1-master-style.webp",
          name: "Scene 08 Sheet",
          type: "المرجع الأول",
          role: "يحدد العودة للحجرة، اللمسة، الشرخ الوحيد، رد فعل ليان والانتقال للعنوان."
        },
        {
          src: "assets/layan.webp",
          name: "Layan Character Sheet",
          type: "هوية ليان",
          role: "المرجع الوحيد للوجه والملابس وغطاء الرأس والعلامة والعين البشرية البنية."
        },
        {
          src: "assets/lower-chamber.webp",
          name: "Lower Chamber",
          type: "هوية الموقع",
          role: "يثبت المنصة والممر والقنوات الحجرية والإضاءة الطقسية."
        },
        {
          src: "assets/azar-and-egg.webp",
          name: "Dragon Egg Reference",
          type: "مرجع البيضة",
          role: "استخدم البيضة فقط. تجاهل التنين البالغ. يظهر شرخ رفيع واحد فقط ولا يحدث فقس."
        }
      ],
      prompt: `CREATE A 10-SECOND CINEMATIC VERTICAL 9:16 FINAL TRAILER SCENE.
Reserve the final 1.5 seconds for the title card.

REFERENCE ROLES:
Reference 1 controls the eight-shot order, compositions and timing.
Reference 2 is the sole identity authority for Layan.
Reference 3 is the sole authority for the Lower Chamber.
Reference 4 is used only for the dragon egg; ignore the adult dragon.

IDENTITY AND EGG LOCK:
Preserve Layan's exact face, age, skin texture, covered hair, wardrobe, proportions, brown human eyes and round pupils.
The egg remains the approved dark volcanic shell with amber veins.
Only one tiny hairline crack appears. No hatchling and no adult dragon.

SHOT FLOW:
01 — the molten crack from Scene 07 becomes one glowing channel in the Lower Chamber floor.
02 — overhead descent toward Layan and the egg on the central dais.
03 — controlled side-profile push as she approaches through flickering amber light.
04 — macro on her covenant mark brightening in the open palm.
05 — extreme close-up of fingertips moving toward the shell.
06 — absolute musical drop as her fingers make first contact; gold light travels through the shell and chamber channels.
07 — macro: one tiny hairline crack appears with a delicate crystalline sound. Do not widen it.
08 — close portrait of Layan in reflected gold light, natural brown eye and round pupil, realizing the Covenant has chosen.

NARRATOR:
Use the same deep, calm, mature English FEMALE narrator.
She says exactly:
"This war was never for the throne.
It was for the Covenant.
And it had already chosen."

TITLE CARD:
After the crack, cut to controlled black and reveal exactly:
"THE FIRE COVENANT"
"COMING SOON"
Use restrained engraved antique-gold typography. No other text.

MUSIC AND SOUND:
Gather the king, dragon, covenant and war motifs into one rising orchestral climax.
At the moment of touch, remove all music.
Use skin contact, low chamber resonance, one crystalline crack and one heartbeat.
After a short silence, use a restrained orchestral title hit, then fade to absolute silence.

TRANSITION:
The title fades into the dedicated final YEHIA.DIGITAL end cover.

NEGATIVE CONSTRAINTS:
No face drift, no glowing fantasy iris, no exposed hair, no multiple cracks, no exploding egg, no hatchling, no adult dragon, no extra character, no extra title, no subtitles and no watermark.`
    },
    {
      id: "outro",
      order: "09",
      title: "الغلاف النهائي والدعوة",
      en: "FINAL END COVER",
      duration: "6 ثوانٍ",
      image: "assets/trailer/the-fire-covenant-final-end-cover-v1.webp",
      purpose: "إغلاق التريلر بهوية الفيلم وYEHIA.DIGITAL، مع توجيه المشاهد إلى البرومبت والشرح الكامل.",
      narrator: "لا يوجد راوٍ. تترك القفلة مساحة للصمت والقراءة.",
      screenText: ["THE FIRE COVENANT", "A YEHIA.DIGITAL PRODUCTION", "WANT THE PROMPT & FULL BREAKDOWN?", "VISIT YEHIA.DIGITAL"],
      attachments: [
        {
          src: "assets/trailer/the-fire-covenant-final-end-cover-v1.webp",
          name: "Final End Cover",
          type: "الصورة الأساسية",
          role: "ارفعها وحدها. هي المرجع النهائي لكل العناصر والنصوص. لا ترفع مراجع إضافية حتى لا يعيد Flow توليد الحروف أو شكل التنين."
        }
      ],
      prompt: `CREATE A 6-SECOND CINEMATIC VERTICAL 9:16 FINAL END CARD FROM THE UPLOADED IMAGE.

REFERENCE AUTHORITY:
The uploaded final cover is the absolute source of truth for the dragon, Golden City, light beam, composition, typography and exact written text.
Animate it as layered key art only. Do not redesign or regenerate it.

CAMERA AND MOTION:
Begin from the previous title card's black.
Reveal the molten vertical beam first, then the dragon and city through slow smoke.
Use an extremely subtle 2.5D push-in:
- embers drift upward at different depths;
- clouds roll slowly behind the dragon;
- the dragon gives one nearly invisible breath;
- the city lights shimmer very subtly;
- the architecture and all typography remain perfectly locked.
At 00:02.5, stop the camera movement and hold the complete cover for reading until the end.

AUDIO:
No narrator and no dialogue.
Use one restrained orchestral resolution hit, distant dragon breath, soft ember crackle and a low warm tonal tail.
Reduce the score after 00:02.5 and finish in complete silence.

TEXT LOCK:
Preserve exactly:
"THE FIRE COVENANT"
"A YEHIA.DIGITAL PRODUCTION"
"WANT THE PROMPT & FULL BREAKDOWN?"
"VISIT YEHIA.DIGITAL"
Do not animate individual letters. Do not change spelling, spacing or punctuation.

ENDING:
Hold the final readable frame, then make a slow clean fade to full black during the final 0.5 second.

NEGATIVE CONSTRAINTS:
No extra text, no “coming soon”, no logo replacement, no QR code, no text morph, no dragon flight, no fire attack, no city destruction, no fast zoom, no camera orbit, no watermark and no subtitles.`
    }
  ]
};
