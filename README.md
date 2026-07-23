# عهد النار — The Fire Covenant

ملف إنتاج تفاعلي لمسلسل فانتازيا عربي أصلي مصنوع بالذكاء الاصطناعي.

يوثّق المشروع:

- قصة الموسم الأول وقوسه الدرامي.
- 8 حلقات مخططة.
- 10 مراجع معتمدة للشخصيات والجيوش.
- 6 مراجع معتمدة للمواقع.
- Scene breakdown للحلقة الأولى.
- Image prompts وMotion prompts.
- مساحات لإضافة Scene Sheets ونتائج الفيديو.

## تشغيل المشروع

المشروع Static بالكامل ولا يحتاج إلى تثبيت dependencies.

افتح `index.html` مباشرة، أو شغّله من Local Server:

```bash
python3 -m http.server 8080
```

ثم افتح:

```text
http://localhost:8080
```

## هيكل الملفات

```text
.
├── index.html
├── assets/
│   ├── شخصيات وجيوش بصيغة WebP
│   └── مواقع بصيغة WebP
└── .github/workflows/pages.yml
```

## النشر على GitHub Pages

1. ارفع المشروع إلى GitHub.
2. افتح `Settings → Pages`.
3. اختر `GitHub Actions` كمصدر النشر.
4. سيعمل Workflow تلقائيًا عند كل تحديث على فرع `main`.

## الحقوق

قصة وشخصيات وهوية المشروع © 2026 YEHIA.DIGITAL.

