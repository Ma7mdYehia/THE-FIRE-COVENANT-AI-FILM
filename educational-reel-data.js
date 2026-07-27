(() => {
  const identityLock = `ABSOLUTE YAHIA IDENTITY LOCK:
The uploaded Mo Yahia Character Sheet is the only and absolute identity reference for Yahia's face, head, hair, beard, skin tone, age, body proportions and modern outfit.
Completely ignore Yahia's face inside the Scene Sheet. The man shown there is only a pose and composition placeholder.
Preserve the exact facial structure, warm medium skin tone, brown eyes, eyebrows, nose, lips, short tightly curled black hair, natural hairline, trimmed black beard and mustache, jawline, age, build and natural skin texture.
Do not generate a similar actor. Do not beautify, de-age, reshape or blend his face with any person inside the Scene Sheet.
During Arabic speech, animate only the minimum natural movement required in the lips, mouth, cheeks and jaw. Do not regenerate or morph the eyes, eyebrows, nose, forehead, hair, beard, jawline or head shape.`;

  const studioLock = `STUDIO CONTINUITY:
Preserve one consistent premium modern editing suite: dark wooden desk, ultrawide monitor, professional editing timeline, keyboard, mouse, physical control surface, black ergonomic chair, warm amber practical lamps, restrained cool monitor light and a dark nighttime atmosphere.
Keep the desk, monitor, chair, office geography, screen direction and lighting direction consistent.`;

  const commonNegative = `NEGATIVE CONSTRAINTS:
Do not use the Scene Sheet as Yahia's facial reference.
Do not generate a similar actor or change Yahia's face, hair, beard, skin tone, age or body.
Do not regenerate his face during dialogue.
Do not duplicate Yahia or add unrequested people.
Do not create malformed hands or extra fingers.
Do not change the office layout, desk, chair or monitor.
Do not add floating interfaces, holograms, random readable text, subtitles, speech bubbles, logos or watermarks.
Do not animate the flat Scene Sheet as a slideshow or show its grid inside the final video.`;

  window.educationalReelProduction = {
    title: "حوّل فكرتك لمسلسل كامل بالـAI",
    en: "FROM SCENE SHEET TO FINAL SCENE",
    format: "Vertical 9:16 · 6 cinematic scenes · Google Flow Omni",
    duration: "حوالي 60 ثانية",
    cover: "assets/educational-reel/reel-cover-turn-idea-into-ai-series-v2.webp",
    videoUrl: "https://www.instagram.com/p/DbQn9Lns3z0/",
    summary: "ريل Marketing Drama تعليمي يكشف بطريقة سينمائية وفكاهية كيف يتحول التخطيط والمراجع والـScene Sheet إلى مشهد نهائي، مع حوار مصري وCTA يقود إلى الشرح المجاني.",
    hook: "حوّل فكرتك لمسلسل كامل بالـAI",
    subline: "الشخصيات، المشاهد، التحريك والإخراج",
    cta: {
      keyword: "Prompt",
      url: "https://yehia.digital/dragon",
      firstMessage: `أهلًا بيك 👋
عاوز تعرف إزاي تحوّل فكرتك لمسلسل كامل بالـAI؟ 🎬🐉

جهزتلك شرح مجاني للمشروع خطوة بخطوة: الشخصيات والـLocations، تجهيز الـScene Sheets، برومبتات التحريك، حركة الكاميرا والصوت، لحد الإخراج والنتيجة النهائية.

اضغط الزرار وهبعتلك رابط الشرح كامل مجانًا 👇`,
      firstButton: "اطلب الرابط 🔥",
      secondMessage: `تمام يا مخرج 🎬

ده رابط المشروع والشرح المجاني كامل:
https://yehia.digital/dragon

هتتعلم إزاي تبني مسلسل بالـAI من الفكرة لحد المشهد النهائي، مع الشخصيات، المواقع، الـScene Sheets، البرومبتات وخطوات التحريك والإخراج.`,
      secondButton: "ابدأ الشرح المجاني 🐉"
    },
    rules: [
      "ارفع Mo Yahia Character Sheet في كل مشهد باعتباره المرجع الوحيد للوجه واللبس.",
      "الـScene Sheet تتحكم في ترتيب اللقطات والكادرات فقط؛ تجاهل الوجه الموجود داخلها.",
      "استخدم نفس صوت يحيى المصري ونفس المكتب والإضاءة في المشاهد الستة.",
      "الحوار مصري طبيعي بتشكيل خفيف، ومن دون Subtitles داخل الفيديو.",
      "أعد بناء كل Panel كلقطة Full Screen؛ لا تحرّك شبكة الشيت نفسها."
    ],
    scenes: [
      {
        id: "edu-scene-01",
        order: "01",
        title: "الملك داخل غرفة المونتاج",
        en: "THE ROYAL EDITOR HOOK",
        duration: "10 ثوانٍ",
        image: "assets/educational-reel/scene-01-royal-editor-hook-sheet-v1.webp",
        purpose: "هوك فكاهي يكشف يحيى مندمجًا في المشروع لدرجة أنه يمنتج بملابس الملك، ثم يستخدم الرداء كـWhip-Wipe ليعود إلى ملابسه العادية.",
        dialogue: `يحيى: «اِستَنّى... أنا شَكلي اندَمَجت في المونتاج زِيادة شُوَيّة.»
بعد التحول: «آه... كِده أَحسَن.»`,
        screenText: [],
        attachments: [
          {src:"assets/educational-reel/mo-yahia-character-sheet-v1.webp",name:"Mo Yahia Character Sheet",type:"هوية مطلقة",role:"المرجع الوحيد للوجه، الشعر، اللحية، الجسم واللبس الأسود قبل وبعد التحول."},
          {src:"assets/educational-reel/scene-01-royal-editor-hook-sheet-v1.webp",name:"Educational Scene Sheet 01",type:"الإخراج",role:"ترتيب اللقطات والكاميرا والتوقيت فقط. تجاهل الوجه الموجود داخله."},
          {src:"assets/king-yahia.webp",name:"King Yahia Character Sheet",type:"الزي الملكي",role:"يتحكم فقط في الدرع والرداء الملكي قبل الـWhip-Wipe."}
        ],
        imagePrompt: `Create a premium photorealistic vertical 9:16 scene sheet with exactly eight tall panels in a 4-by-2 grid. Use Mo Yahia Character Sheet as the only face reference. Show the same modern editing studio in every panel. Shots 01–06: exact Yahia edits in complete King Yahia armor and cloak with deadpan seriousness. Shot 01 macro armored hand on mouse; 02 wide reveal; 03 over-shoulder timeline; 04 he notices the armor; 05 knowing close-up; 06 he throws the cloak toward lens; 07 full-frame fabric wipe; 08 exact match cut to the same man in black blazer calmly editing. Thin dark separators, shot numbers and timestamps only. No title, logo, subtitles, crown, weapon, face drift or costume morph.`,
        motionPrompt: `Create one continuous 10-second vertical 9:16 premium cinematic Marketing Drama scene.

REFERENCE PRIORITY:
1. Mo Yahia Character Sheet controls the exact identity in every frame.
2. Educational Scene Sheet 01 controls only shot order, composition, camera angles, action and comedic timing.
3. King Yahia Character Sheet controls only the medieval armor and cloak.

${identityLock}

For Shots 01–06 Yahia wears the exact engraved charcoal-black King Yahia armor, burgundy under-layer and long black cloak. No helmet or crown.
After the full-lens cloak wipe, he wears his exact charcoal-black blazer, black crew-neck shirt and black trousers.

${studioLock}

00:00–00:01 — macro tracking on the armored hand operating the mouse; one realistic click.
00:01–00:02.50 — fast pull-back with a slight arc reveals Yahia editing in full royal armor; cloak drapes over the chair.
00:02.50–00:05.50 — over-shoulder into a controlled face push-in. He pauses, looks at the armor and says:
“اِستَنّى... أنا شَكلي اندَمَجت في المونتاج زِيادة شُوَيّة.”
00:05.50–00:07.50 — he grips the cloak and sharply swings it toward camera. Heavy realistic fabric progressively covers the complete lens.
00:07.50–00:10 — while the lens is fully covered, exact match cut to the identical composition with Yahia in his modern outfit. He resumes editing, gives a tiny knowing look and says:
“آه... كِده أَحسَن.”

Use the exact same natural adult Egyptian male voice, Cairo accent, dry clever performance and accurate Arabic lip sync. Preserve the face during speech.

CAMERA:
Macro tracking, fast cinematic pull-back, slight arc, over-shoulder, controlled facial push-in, dynamic cloak movement and exact match cut.

MUSIC AND SOUND:
Begin with overly serious restrained medieval strings, low war drums and distant choir. Reduce music before the first line. Add mouse clicks, keyboard, armor and leather movement, chair stress, cloak drag, one powerful cloth whoosh and a short low impact. After the wipe, switch to a minimal modern bass pulse and finish on a mouse click.

The costume change occurs only while the cloak completely covers the lens. No magic particles, smoke, fire, digital glitch, face morph or hybrid costume.

${commonNegative}`
      },
      {
        id: "edu-scene-02",
        order: "02",
        title: "كشف الـScene Sheet",
        en: "THE SCENE SHEET REVEAL",
        duration: "10 ثوانٍ",
        image: "assets/educational-reel/scene-02-the-scene-sheet-reveal-v1.webp",
        purpose: "تحويل النبرة من الكوميديا إلى التعليم: يوقف يحيى التايملاين ويسحب الشيت ليؤكد أن المشهد بدأ بخطة إخراج.",
        dialogue: "يحيى: «المَشهد ده... ما بَدَأش بِفيديو. بَدَأ بِخُطّة إخراج.»",
        screenText: [],
        attachments: [
          {src:"assets/educational-reel/mo-yahia-character-sheet-v1.webp",name:"Mo Yahia Character Sheet",type:"هوية مطلقة",role:"مرجع الوجه واللبس الأسود في كل الكادرات."},
          {src:"assets/educational-reel/scene-02-the-scene-sheet-reveal-v1.webp",name:"Educational Scene Sheet 02",type:"الإخراج",role:"الكادرات وحركة الكرسي وسحب الشيت والمقارنة مع الشاشة فقط."}
        ],
        imagePrompt: `Create a premium photorealistic vertical 9:16 eight-panel scene sheet continuing the same studio and exact Mo Yahia identity. Show Yahia in black blazer: 01 knowing glance at camera; 02 macro spacebar; 03 chair rolls back and he reaches beneath desk; 04 low-angle reveal of a physical eight-frame Scene Sheet; 05 overhead paper placement; 06 finger points to first frame; 07 over-shoulder comparison between sheet and final footage; 08 confident direct-to-camera hold. Four panels top and four bottom, thin dark separators, numbers and timestamps only, no captions or logos.`,
        motionPrompt: `Create one continuous 10-second vertical 9:16 premium cinematic Marketing Drama scene.

REFERENCE PRIORITY:
1. Mo Yahia Character Sheet is the only identity and wardrobe reference.
2. Educational Scene Sheet 02 controls only shot order, composition, action and camera.

${identityLock}
${studioLock}

Yahia wears his charcoal-black blazer, plain black crew-neck shirt and black trousers throughout. No armor or cloak.

00:00–00:01.25 — continue the previous final composition; tiny knowing glance, then he looks back to monitor.
00:01.25–00:02.20 — macro finger presses spacebar; timeline stops on one precise click.
00:02.20–00:03.50 — fast lateral camera slide as he rolls the chair back and reaches below the desk.
00:03.50–00:04.80 — low desk-level reveal as he pulls out a premium physical eight-frame Scene Sheet.
00:04.80–00:06.00 — clean overhead shot; he places and straightens the sheet with a satisfying paper impact.
00:06.00–00:07.20 — close side angle; finger points to first frame and rack focus moves toward the matching completed footage on monitor.
00:06.20–00:09.60 — he gradually turns toward camera and says:
“المَشهد ده... ما بَدَأش بِفيديو. بَدَأ بِخُطّة إخراج.”
00:09.60–00:10 — confident medium close-up holding the Scene Sheet, restrained half-smile.

Use the same adult Egyptian male voice, natural Cairo accent, calm intelligent delivery. Pause after “المَشهد ده” and after “بِفيديو”. Preserve exact face during lip sync.

CAMERA:
Continuation drift, macro keyboard, lateral chair move, low sheet reveal, overhead, rack focus and direct-to-camera push-in.

MUSIC AND SOUND:
Minimal modern bass pulse, restrained percussion, keyboard click, chair wheels, paper slide and impact, editing-room ambience. Reduce music beneath dialogue.

${commonNegative}`
      },
      {
        id: "edu-scene-03",
        order: "03",
        title: "نظام بناء المشهد",
        en: "THE PRODUCTION WORKFLOW",
        duration: "10 ثوانٍ",
        image: "assets/educational-reel/scene-03-production-workflow-v1.webp",
        purpose: "مونتاج سريع يشرح ترتيب اللقطات وتثبيت الشخصية والمكان والكاميرا والصوت قبل بدء التوليد.",
        dialogue: "Voiceover: «بَرَتِّب اللّقطات، وأثَبِّت الشَّخصيّة والمَكان... بَعدين الكاميرا والصّوت. ساعتها بس... أبدأ التوليد.»",
        screenText: [],
        attachments: [
          {src:"assets/educational-reel/mo-yahia-character-sheet-v1.webp",name:"Mo Yahia Character Sheet",type:"هوية مطلقة",role:"مرجع يحيى داخل الاستوديو."},
          {src:"assets/educational-reel/scene-03-production-workflow-v1.webp",name:"Educational Scene Sheet 03",type:"الإخراج",role:"ترتيب مونتاج الـWorkflow والكاميرا."},
          {src:"assets/king-yahia.webp",name:"King Yahia Character Sheet",type:"مرجع مطبوع",role:"يظهر داخل الورق والشاشة فقط، ولا يتحول يحيى الحديث إليه."},
          {src:"assets/great-hall.webp",name:"Great Hall Location Sheet",type:"مرجع مطبوع",role:"الموقع الظاهر داخل ورق الإنتاج والشاشة."},
          {src:"assets/episode-02/scene-03-the-kings-order-sheet-v1.png",name:"The King's Order Scene Sheet",type:"المشهد التجريبي",role:"الشيت الفعلي الذي يتم شرحه وبناء التايملاين منه."}
        ],
        imagePrompt: `Create a premium photorealistic vertical 9:16 scene sheet with eight independent tall panels. Same modern studio and exact Mo Yahia identity in black blazer. 01 overhead arrangement of Scene Sheet, King character reference and Great Hall reference; 02 tap exact character identity; 03 align location reference; 04 trace camera path and compare monitor; 05 macro typing motion prompt; 06 sound-control fader and waveforms; 07 align clips and sound on timeline; 08 wide hero view of the complete organized workflow. No floating UI, readable random text, medieval person physically inside office, captions or logos.`,
        motionPrompt: `Create one continuous 10-second vertical 9:16 premium cinematic Marketing Drama production montage.

REFERENCE PRIORITY:
1. Mo Yahia Character Sheet controls modern Yahia identity.
2. Educational Scene Sheet 03 controls shot order and camera only.
3. The King's Order Scene Sheet controls the physical storyboard and monitor footage.
4. King Yahia and Great Hall sheets appear only as printed or monitor references.

${identityLock}
${studioLock}

00:00–00:01.20 — fast top-down descent; Scene Sheet centered while Yahia slides character reference left and location reference right.
00:01.20–00:02.20 — low side whip-pan; one finger taps the King identity reference and rack focus moves to matching monitor footage.
00:02.20–00:03.20 — opposite-side whip-pan; align Great Hall reference with matching Scene Sheet frame.
00:03.20–00:04.50 — over-shoulder; trace intended camera direction across the sheet and rack focus to final monitor composition.
00:04.50–00:05.80 — macro typing structured motion instructions; screen shows clean timing blocks without readable text.
00:05.80–00:07.00 — macro sound-design shot; hand moves one physical fader, colored waveform shapes react.
00:07.00–00:08.40 — fast diagonal desk move; align video clips, waveforms and transitions according to the physical Scene Sheet.
00:08.40–00:10 — wide hero pull-back; complete workflow visible. Yahia turns toward camera for the final phrase.

VOICEOVER:
“بَرَتِّب اللّقطات، وأثَبِّت الشَّخصيّة والمَكان... بَعدين الكاميرا والصّوت. ساعتها بس... أبدأ التوليد.”

Use the same Egyptian male voice. Earlier phrases are voiceover; animate Yahia's mouth only for “ساعتها بس... أبدأ التوليد” in the final shot.

MUSIC AND SOUND:
Modern restrained editorial rhythm, bass pulse, tight electronic percussion and subtle ticking. Synchronize paper placement, reference taps, typing, fader and timeline cuts. Add room ambience, computer fan, paper slides, keyboard, mouse and control-surface sounds. Reduce music for the final phrase.

No physical medieval characters, floating holograms or readable fake UI.

${commonNegative}`
      },
      {
        id: "edu-scene-04",
        order: "04",
        title: "من الورق إلى السينما",
        en: "FROM PAPER TO CINEMA",
        duration: "10 ثوانٍ",
        image: "assets/educational-reel/scene-04-paper-to-cinema-v1.webp",
        purpose: "الـPayoff البصري: تدخل الكاميرا داخل فريم مطبوع فيتحول بنفس التكوين إلى مشهد Fantasy كامل ثم يعود إلى شاشة المونتاج.",
        dialogue: "Voiceover: «لَمّا كلّ قرار يِبقى واضِح... الورق ما بِيطلعش صُورة. بِيطلع مَشهد.»",
        screenText: [],
        attachments: [
          {src:"assets/educational-reel/mo-yahia-character-sheet-v1.webp",name:"Mo Yahia Character Sheet",type:"هوية مطلقة",role:"مرجع الوجه في نسخة الاستوديو ونسخة King Yahia."},
          {src:"assets/educational-reel/scene-04-paper-to-cinema-v1.webp",name:"Educational Scene Sheet 04",type:"الإخراج",role:"مسار التحول من الورق للمشهد ثم العودة للشاشة."},
          {src:"assets/king-yahia.webp",name:"King Yahia Character Sheet",type:"الزي الملكي",role:"يتحكم في الدرع والرداء داخل المشهد النهائي فقط."},
          {src:"assets/episode-02/scene-03-the-kings-order-sheet-v1.png",name:"The King's Order Scene Sheet",type:"الحدث",role:"تكوين الحرس والعربة والبيضة داخل المشهد."},
          {src:"assets/great-hall.webp",name:"Great Hall Location Sheet",type:"الموقع",role:"المرجع المعماري الوحيد للقاعة."}
        ],
        imagePrompt: `Create a premium 9:16 eight-panel cinematic sheet. 01 macro finger on selected printed frame; 02 camera pushes into paper; 03 exact-composition midpoint where paper becomes dimensional stone and armor; 04 low wide live-action guards moving the intact egg with King Yahia; 05 parallel side tracking; 06 exact King Yahia hero close-up; 07 rapid pull-back reveals footage inside modern ultrawide monitor; 08 modern Yahia in black blazer watches and nods. Preserve exact identities, egg, Great Hall and screen direction. No portal, magic, glitch, captions or logos.`,
        motionPrompt: `Create one continuous 10-second vertical 9:16 paper-to-cinema transformation.

REFERENCE PRIORITY:
1. Mo Yahia Character Sheet is the only face reference for both Modern and King Yahia.
2. Educational Scene Sheet 04 controls the shot order and transition.
3. King Yahia sheet controls armor only.
4. The King's Order sheet controls fantasy action.
5. Great Hall sheet controls architecture.

${identityLock}
${studioLock}

00:00–00:01.20 — macro overhead on Yahia's fingertip resting on the selected printed frame; visible paper grain.
00:01.20–00:02.50 — fast optical push into the frame until its paper borders fill the screen.
00:02.50–00:03.60 — exact-composition transformation: paper grain becomes dust, printed stone becomes dimensional architecture, static cloth and armor become live action. No portal or magic effect.
00:03.60–00:05.00 — low wide backward tracking inside the exact Great Hall; exactly four Royal Guards push the heavy egg cart while exact King Yahia walks beside them.
00:05.00–00:06.30 — parallel side tracking; cloth briefly reveals part of the intact black-scaled egg with restrained ember-orange cracks.
00:06.30–00:07.40 — fast controlled push toward exact King Yahia in three-quarter profile. He does not speak.
00:07.40–00:08.80 — rapid pull-back reveals the fantasy sequence playing inside the ultrawide monitor, then the desk and physical references.
00:08.80–00:10 — modern Yahia watches, gives a subtle satisfied half-smile and tiny nod.

VOICEOVER:
“لَمّا كلّ قرار يِبقى واضِح... الورق ما بِيطلعش صُورة. بِيطلع مَشهد.”
Use the same natural Egyptian male voice. Do not animate either Yahia's mouth; this is voiceover.

MUSIC:
Begin with the modern editorial rhythm, blend into deep strings, low war drums, restrained choir and metallic accents during the transformation, then return to the modern pulse on the pull-back.

SOUND:
Paper touch, rising whoosh, dimensional impact, Great Hall ambience, cart wheels, boots, armor, leather, cloak, subtle egg resonance, monitor playback and final control click.

Preserve the exact egg intact. No hatch, dragon, portal, magical ring, digital glitch or modern object inside the Great Hall.

${commonNegative}`
      },
      {
        id: "edu-scene-05",
        order: "05",
        title: "الـAI نفّذ… ويحيى وجّه",
        en: "THE AI EXECUTED · I GUIDED",
        duration: "10 ثوانٍ",
        image: "assets/educational-reel/scene-05-ai-executed-i-guided-v1.webp",
        purpose: "حوار Marketing Drama يحدد دور الإنسان بوضوح: الـAI ينفذ، لكن التوجيه والقرار الإخراجي من صانع المشهد.",
        dialogue: `الزميل: «يَعني الـAI هوّ اللي عَمِل المَشهد ده؟»
يحيى: «هوّ اللي نَفَّذه... بس أنا اللي وَجَّهته.»`,
        screenText: [],
        attachments: [
          {src:"assets/educational-reel/mo-yahia-character-sheet-v1.webp",name:"Mo Yahia Character Sheet",type:"هوية مطلقة",role:"مرجع وجه يحيى ولبسه وصوته الثابت."},
          {src:"assets/educational-reel/scene-05-ai-executed-i-guided-v1.webp",name:"Educational Scene Sheet 05",type:"الإخراج",role:"الكادرات، حركة الزميل، الـEye Lines وتوقيت الحوار."},
          {src:"assets/episode-02/scene-03-the-kings-order-sheet-v1.png",name:"The King's Order Scene Sheet",type:"محتوى الشاشة",role:"المشهد النهائي الظاهر على المونيتور فقط."}
        ],
        imagePrompt: `Create a premium photorealistic vertical 9:16 eight-panel dialogue scene sheet in the same editing studio. Preserve exact Mo Yahia in black blazer and add one consistent male creative colleague in charcoal overshirt. 01 colleague enters; 02 over-shoulder gesture to monitor; 03 side two-shot question; 04 tight Yahia reaction; 05 reverse over-shoulder first response; 06 Yahia places hand on Scene Sheet; 07 subtle hero push-in; 08 strong two-depth finish. Numbers and timestamps only. No captions, armor, extra people, face drift or malformed hands.`,
        motionPrompt: `Create one continuous 10-second vertical 9:16 premium cinematic Marketing Drama dialogue scene.

REFERENCE PRIORITY:
1. Mo Yahia Character Sheet is the only Yahia identity reference.
2. Educational Scene Sheet 05 controls shot order, blocking, camera and dialogue progression.
3. The King's Order sheet controls only monitor footage.

${identityLock}
${studioLock}

Preserve one consistent supporting Egyptian male colleague: early thirties, average build, short dark hair, charcoal-gray overshirt, dark T-shirt and trousers.

00:00–00:01.20 — wide continuation; Yahia watches completed footage while colleague enters and leans toward monitor.
00:01.20–00:02.30 — over colleague's shoulder; he gestures naturally toward monitor.
00:02.30–00:04.00 — balanced side two-shot. Colleague asks:
“يَعني الـAI هوّ اللي عَمِل المَشهد ده؟”
00:04.00–00:04.80 — tight Yahia reaction; he turns, gives a tiny knowing half-smile and pauses.
00:04.80–00:06.40 — reverse over-shoulder. Yahia gestures toward the footage and says:
“هوّ اللي نَفَّذه...”
00:06.40–00:08.50 — medium close-up. Yahia places his hand firmly on the physical Scene Sheet and says:
“بس أنا اللي وَجَّهته.”
Synchronize “وَجَّهته” with his hand settling on paper.
00:08.50–00:09.40 — subtle push-in; Yahia briefly looks toward camera.
00:09.40–00:10 — strong two-depth hold with Yahia sharp, colleague soft and final footage glowing behind.

VOICES:
The colleague uses a distinct natural Egyptian male voice, curious and impressed. Yahia uses the exact same established Egyptian male voice, calm, confident and conversational. Do not overlap dialogue. Preserve both faces during lip sync.

MUSIC AND SOUND:
Restrained modern bass pulse and atmospheric synth. Reduce music during the question; hold a low note through Yahia's pause; add a restrained bass accent when his hand lands on the Scene Sheet. Include room tone, monitor playback, footsteps, chair and paper contact.

Exactly two adult men. No third person, armor, subtitles or text.

${commonNegative}`
      },
      {
        id: "edu-scene-06",
        order: "06",
        title: "اسحب الشيت… ثم اطلب Prompt",
        en: "COMMENT PROMPT CTA",
        duration: "10 ثوانٍ",
        image: "assets/educational-reel/scene-06-comment-prompt-cta-v1.webp",
        purpose: "قفلة CTA داخل القصة: الزميل يحاول أخذ الشيت، فيسحبه يحيى بخفة ثم يدعو المشاهد لطلب الشرح المجاني.",
        dialogue: "يحيى: «عاوِز البرومبت والشَّرح كامِل؟ اُكتُب “Prompt” في الكومنت.»",
        screenText: ["WANT THE PROMPT & FULL BREAKDOWN?", "COMMENT “PROMPT”"],
        attachments: [
          {src:"assets/educational-reel/mo-yahia-character-sheet-v1.webp",name:"Mo Yahia Character Sheet",type:"هوية مطلقة",role:"مرجع يحيى في الحوار والقفلة."},
          {src:"assets/educational-reel/scene-06-comment-prompt-cta-v1.webp",name:"Educational Scene Sheet 06",type:"الإخراج",role:"توقيت سحب الشيت والإشارة للكومنتات والقفلة النصية."},
          {src:"assets/episode-02/scene-03-the-kings-order-sheet-v1.png",name:"The King's Order Scene Sheet",type:"الشيت والنتيجة",role:"محتوى الورق والشاشة."},
          {src:"assets/king-yahia.webp",name:"King Yahia Character Sheet",type:"مرجع مطبوع",role:"يظهر ضمن أوراق الـWorkflow فقط."},
          {src:"assets/great-hall.webp",name:"Great Hall Location Sheet",type:"مرجع مطبوع",role:"يظهر ضمن أوراق الـWorkflow فقط."}
        ],
        imagePrompt: `Create a premium photorealistic 9:16 eight-panel CTA sheet in the same editing studio. Exact Mo Yahia and the same colleague. 01 colleague reaches for Scene Sheet; 02 macro fingertips and Yahia's hand reaches first; 03 Yahia slides sheet back; 04 restrained amused reaction; 05 overhead organized workflow pages; 06 Yahia points down while holding sheet; 07 hero composition with negative space; 08 premium end frame with exact text “WANT THE PROMPT & FULL BREAKDOWN?” and “COMMENT “PROMPT””. No other text, logos, extra people or face drift.`,
        motionPrompt: `Create one continuous 10-second vertical 9:16 premium cinematic Marketing Drama CTA scene.

REFERENCE PRIORITY:
1. Mo Yahia Character Sheet is the only Yahia identity reference.
2. Educational Scene Sheet 06 controls shot order, camera, comedic action and CTA.
3. Other references appear only as paper or monitor content.

${identityLock}
${studioLock}

Preserve the same supporting colleague from Scene 05.

00:00–00:01.20 — continue Scene 05; colleague slowly reaches toward the Scene Sheet while Yahia notices.
00:01.20–00:02.30 — macro tabletop shot; colleague's fingertips nearly touch paper, Yahia's natural hand lands on opposite edge first.
00:02.30–00:03.40 — fast desk-level lateral move as Yahia smoothly slides the sheet toward himself. Understated, not aggressive.
00:03.40–00:04.40 — medium reaction two-shot; colleague is surprised and amused, Yahia holds the sheet with a knowing half-smile.
00:04.40–00:05.50 — top-down shot; Yahia places and fans the complete physical workflow toward camera.
00:05.50–00:07.70 — direct-to-camera medium shot. Yahia holds the Scene Sheet, points down once and says:
“عاوِز البرومبت والشَّرح كامِل؟ اُكتُب “Prompt” في الكومنت.”
00:07.70–00:08.50 — subtle hero push-in; Yahia maintains eye contact while colleague remains softly blurred.
00:08.50–00:10 — premium end frame with Yahia lower-right and clean dark negative space. Render only:
WANT THE PROMPT & FULL BREAKDOWN?
COMMENT “PROMPT”
First line smaller off-white; second line larger muted warm-gold. If exact spelling cannot be maintained, leave the space blank rather than misspell it.

VOICE:
Same established adult Egyptian male voice, Cairo accent, playful, confident, natural and inviting. Preserve exact face during Arabic lip sync and pronounce “Prompt” naturally.

MUSIC AND SOUND:
Minimal modern editorial beat. Stop percussion briefly on the sheet pull and add a soft comedic bass accent. Bring rhythm back for the CTA, then finish with one warm bass impact and clean atmospheric hold. Include paper touch and slide, page fan, room ambience, monitor playback and clear dialogue.

Exactly two men before the final dominant Yahia frame. No fake social UI, subtitles, extra text, logos or watermark.

${commonNegative}`
      }
    ]
  };
})();
