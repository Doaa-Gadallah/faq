/* FAQ — Doaa Gadallah · vanilla JS, no dependencies */

"use strict";

/* ---------- Data: questions in both languages ---------- */

const FAQS = [
  {
    q: { ar: "ماذا أفعل عند نسيان كلمة مرور ماى مانس؟", en: "What should I do if I forget my MyMans password?" },
    a: { ar: "نضغط على \"هل نسيت كلمة المرور\" ثم يتم إدخال الرقم القومي الخاص بعضو هيئة التدريس، ثم الضغط على \"إرسال\".\n\nيتم إرسال رسالة بكلمة المرور على البريد الإلكتروني ثم نضغط على \"موافق\" ثم نرجع عضو هيئة التدريس إلى صفحة الدخول على ماى مانس، ويسجل:\n• اسم المستخدم\n• كلمة المرور التي تم إرسالها على البريد\n• ثم يضغط على \"تسجيل دخول\".\n\nسيطلب من عضو هيئة التدريس تغيير كلمة المرور من خلال:\n1. اسم المستخدم\n2. إدخال كلمة المرور التي تم إرسالها على البريد الإلكتروني\n3. تسجيل أي كلمة مرور جديدة\n4. إعادة كتابة كلمة المرور الجديدة مرة أخرى\n5. الضغط على \"تغيير كلمة المرور\"", en: "What should I do if I forget my MyMans password?" },
    tags: ["نسيان", "كلمة مرور", "ماي مانس", "MyMans", "password", "forgot"]
  },
  {
    q: { ar: "ماذا أفعل اذا طلب منى أغير كلمة مرور ماى مانس عند الدخول على بوابة أعضاء هيئة التدريس؟", en: "What should I do if I'm prompted to change my MyMans password when logging into the faculty portal?" },
    a: { ar: "نسجل اسم المستخدم لعضو هيئة التدريس ثم نسجل كلمة المرور القديمة ثم نكتب كلمة مرور جديدة ثم نرجع نكتب كلمة المرور الجديدة مرة ثانية ثم نضغط على \"تغيير كلمة المرور\" فتظهر رسالة بأنه تم تعديل البيان بنجاح.\n\nثم يقوم عضو هيئة التدريس بإعادة الدخول على ماى مانس باسم المستخدم وكلمة المرور الجديدة التى تم إنشاؤها.", en: "What should I do if I'm prompted to change my MyMans password when logging into the faculty portal?" },
    tags: ["تغيير", "كلمة مرور", "ماي مانس", "MyMans", "password", "change"]
  },
  {
    q: { ar: "كيف أرفع رابط المحاضرة على صفحة المقرر؟", en: "How do I upload a lecture link to the course page?" },
    a: { ar: "ندخل على صفحة المقرر ثم نضغط على \"Edit mode\" ثم نضغط على \"ADD AN ACTIVITY OR RESOURCE\" فتظهر لنا نافذة نضغط فيها على \"URL\" ثم ندخل اسم المحاضرة فى الحقل \"Name\" ثم نضع نسخة من رابط الفيديو الخاص بالمحاضرة والمرفوع على الدرايف مسبقاً بعمل لصق لرابط الفيديو فى الحقل \"External URL\" ثم نضغط على \"SAVE AND RETURN TO COURSE\".", en: "How do I upload a lecture link to the course page?" },
    tags: ["رفع", "رابط", "محاضرة", "video", "upload", "lecture", "URL"]
  },
  {
    q: { ar: "كيف أعمل نسخة احتياطية \"باك أب\"؟", en: "How do I create a backup?" },
    a: { ar: "ندخل على صفحة المقرر ثم نضغط على \"Edit mode\" ثم نضغط على السهم بجانب \"More\" ثم نضغط على \"Course reuse\" ثم نختار \"Backup\" فتظهر بعض الاختيارات ثم ننزل لأسفل الصفحة ونضغط على \"Next\" ثم نضغط على \"Next\" ثم نضغط على \"PERFORM BACKUP\" فيبدأ يحمل النسخة الاحتياطية من الكورس.\n\nثم نضغط على \"CONTINUE\" فيظهر اسم الملف الخاص بالنسخة الاحتياطية أسفل الصفحة ثم نضغط على كلمة \"Download\" بجانب اسم الملف لكى يتم تنزيله.\n\nثم نجد ملف النسخة الاحتياطية فى الديونلود على جهاز الكمبيوتر.\n\nثم نضغط على \"MANAGE BACKUP FILES\" ثم نضغط بالماوس يمين على اسم الملف لكي نمسحه حتى لا يمثل عبئاً على السيرفر ثم نضغط على \"DELETE\" تظهر رسالة لتأكيد المسح ثم نضغط على \"OK\" ونلاحظ أنه تم حذف الملف ثم نضغط على \"SAVE CHANGES\".", en: "How do I create a backup?" },
    tags: ["نسخة احتياطية", "باك أب", "backup"]
  },
  {
    q: { ar: "كيف أسترجع ملفات النسخ الاحتياطية على صفحة المقرر؟", en: "How do I restore backup files on the course page?" },
    a: { ar: "ندخل على صفحة المقرر ثم نضغط على \"Edit mode\" ثم نضغط على السهم بجانب \"More\" ثم نضغط على \"Course reuse\" ثم نختار \"Restore\".\n\nونبدأ فى تحميل ملف النسخة الاحتياطية فى المكان المخصص لذلك على صفحة الكورس وذلك بالضغط على \"CHOOSE FILE\" ثم يتم تحميل الملف من المكان المخزن به على جهازك وذلك بالضغط على \"Upload file\" ثم الضغط على \"Choose File\" ثم نختار ملف النسخة الاحتياطية من المكان المخزن به على جهاز الكمبيوتر ثم نضغط \"Open\".\n\nثم نختار الملف ثم نضغط على \"UPLOAD THIS FILE\" فيبدأ فى تحميل الملف على المنصة.\n\nبعد الانتهاء من تحميل الملف نجد أن الملف ظهر فى المكان المخصص له على صفحة المقرر.\n\nثم يتم بعدها الضغط على \"Restore\" فنلاحظ ظهور صفحة بها تفاصيل الكورس الذى سوف يتم استرجاعه ثم ننزل لأسفل الصفحة ونضغط على \"CONTINUE\" ثم ننزل لأسفل الصفحة ونضغط على \"NEXT\" ثم نضغط على \"CONTINUE\" أسفل الاختيار \"Restore into this course\" وتحديد الاختيار \"Merge the backup course into this course\".\n\nثم نضغط على \"NEXT\" ثم نضغط على \"PERFORM RESTORE\" ثم نضغط على \"CONTINUE\" فيبدأ فى تحميل ملف النسخة الاحتياطية.\n\nثم ننتظر حتى ينتهى من التحميل فتظهر رسالة بأنه تم الانتهاء من استرجاع النسخة الاحتياطية ثم نضغط على \"CONTINUE\".", en: "How do I restore backup files on the course page?" },
    tags: ["استرجاع", "نسخة احتياطية", "restore", "backup"]
  },
  {
    q: { ar: "كيف أعمل إعلان على المنصة التعليمية؟", en: "How do I create an announcement on the educational platform?" },
    a: { ar: "ندخل على صفحة المقرر ثم نضغط على \"Edit mode\" ثم نضغط \"ADD AN ACTIVITY OR RESOURCE\" أسفل كلمة \"General\" ثم نضغط على \"Text and media area\".\n\nفتظهر لنا نافذة ندخل فيها تنويه لهذا الإعلان وهو نص يكتب فى الـ \"Text\" للطلاب.\n\nوكذلك يمكن إضافة صورة أو مقطع صوتى أو فيديو بالضغط على رمز الصورة أو رمز المقطع الصوتى أو رمز الفيديو من الرموز الموجودة.\n\nمثلاً عند إضافة صورة فنضغط على الرمز فتظهر نافذة نضغط فيها على \"BROWSE REPOSITORIES\" ثم نبدأ نحمل الصورة من المكان المخزنة به على الكمبيوتر بالضغط على \"Upload file\" ثم \"Choose File\" ونختار الصورة ثم نضغط على \"Open\".\n\nفنلاحظ ظهور اسم الصورة بجانب كلمة \"Choose File\" ثم نضغط على \"UPLOAD THIS FILE\".\n\nبعد انتهاء تحميل الصورة يتم وضع وصف للصورة وكذلك نظبط أبعاد الصورة من \"Size\" ثم نضغط على \"SAVE IMAGE\".", en: "How do I create an announcement on the educational platform?" },
    tags: ["إعلان", "announcement", "نص", "صورة", "فيديو"]
  },
  {
    q: { ar: "كيف أرفع ملف للمحاضرة على المنصة التعليمية؟", en: "How do I upload a lecture file to the educational platform?" },
    a: { ar: "ندخل على صفحة المقرر ثم نضغط على \"Edit mode\" ثم نضغط على \"ADD AN ACTIVITY OR RESOURCE\" فتظهر لنا نافذة نضغط فيها على \"File\".\n\nثم ندخل فيها اسم ملف المحاضرة فى الحقل \"Name\" ثم من \"Select Files\" نضغط على \"Files\" وذلك لبدء رفع ملف المحاضرة.\n\nثم يتم تحميل الملف من المكان المخزن به على جهازك وذلك بالضغط على \"Upload file\" ثم الضغط على \"Choose File\" ونختار الملف ثم نضغط على \"UPLOAD THIS FILE\" فيبدأ فى تحميل الملف على المنصة.\n\nثم يتم بعدها الضغط على \"SAVE AND RETURN TO COURSE\".", en: "How do I upload a lecture file to the educational platform?" },
    tags: ["رفع", "ملف", "محاضرة", "upload", "file", "lecture"]
  },
  {
    q: { ar: "ماذا أفعل عند نسيان كلمة مرور البريد الجامعى؟", en: "What should I do if I forget my university email password?" },
    a: { ar: "ندخل على ماى مانس ثم نضغط على \"الخدمات\" ثم \"البريد الإلكترونى الجامعى\" ثم \"استعادة كلمة المرور\".\n\nثم ندخل كلمة المرور الجديدة ثم نعيد كتابتها مرة اخرى ثم نضغط \"حفظ\".", en: "What should I do if I forget my university email password?" },
    tags: ["نسيان", "كلمة مرور", "بريد جامعي", "email", "password", "forgot"]
  },
  {
    q: { ar: "كيف أعمل استبيان بجوجل فورم؟", en: "How do I create a Google Forms survey?" },
    a: { ar: "يمكنك الإطلاع على خطوات إنشاء استبيان بجوجل فورم من خلال قسم تكنولوجيا المعلومات بالكلية. يرجى التواصل معنا للحصول على الدليل التفصيلي.", en: "You can get guidance on creating a Google Forms survey from the IT department. Please contact us for detailed instructions." },
    tags: ["استبيان", "جوجل فورم", "survey", "Google Forms"]
  },
  {
    q: { ar: "ماذا أفعل عند عدم ظهور مقرراتى على صفحتى على المنصة التعليمية؟", en: "What should I do if my courses don't appear on my page on the educational platform?" },
    a: { ar: "أولاً: نعمل تحديث مقررات المنصة التعليمية.\n\nوإذا لم تظهر المقررات يتم الرجوع لقسم الجداول للتأكد من إضافة المقررات على الجدول ثم يتم عمل تحديث بعدها.", en: "What should I do if my courses don't appear on my page on the educational platform?" },
    tags: ["مقررات", "ظهور", "تحديث", "courses", "update"]
  },
  {
    q: { ar: "كيف أرفع مجموعة ملفات مع بعض داخل فولدر على المنصة التعليمية؟", en: "How do I upload multiple files together in a folder on the educational platform?" },
    a: { ar: "ندخل على صفحة المقرر ثم نضغط على \"Edit mode\" ثم نضغط \"ADD AN ACTIVITY OR RESOURCE\" ثم نضغط على \"Folder\" وذلك لرفع أكثر من ملف خاص بالمقرر مع بعضها.\n\nثم ندخل اسم الفولدر فى الحقل \"Name\" ثم نضغط على \"Files\" ونبدأ نحمل الملفات المطلوب رفعها معاً.\n\nفتظهر لنا نافذة من خلالها يتم تحميل الملف من المكان المخزن به على جهازك وذلك بالضغط على \"Upload file\" ثم الضغط على \"Choose File\" ونختار الملفات من على جهاز الكمبيوتر ثم نضغط على \"UPLOAD THIS FILE\".\n\nفيبدأ فى تحميل الملفات على المنصة وننتظر حتى ينتهى التحميل ونلاحظ ظهور أسماء الملفات ثم نضغط على \"SAVE AND RETURN TO COURSE\".", en: "How do I upload multiple files together in a folder on the educational platform?" },
    tags: ["فولدر", "ملفات", "رفع", "folder", "files", "upload"]
  }
];
  


/* ---------- i18n dictionary ---------- */

const I18N = {
  ar: {
    dir: "rtl",
    htmlLang: "ar",
    brandName: "دعاء جادالله",
    eyebrow: "مركز المساعدة",
    title: " الأسئلة الشائعة ",
    sub: "حرصًا من وحدة تكنولوجيا المعلومات – كلية التربية النوعية – جامعة المنصورة على تقديم الدعم الفني المستمر لأعضاء هيئة التدريس،تم إعداد منصة الأسئلة الشائعة لتكون مرجعًا إلكترونيًا مبسطًا وسريعًا للإجابة عن أكثر الاستفسارات شيوعًا.",
    searchPlaceholder: "ابحثي عن سؤال… (مثال     )",
    results: (n) => `${n} من الأسئلة`,
    resultsFiltered: (n) => `${n} نتيجة مطابقة`,
    noResults: "لا توجد نتائج مطابقة — جرّبي كلمة أخرى أو راسليني مباشرة.",
    ctaTitle: "لم تجدي إجابتك؟",
    ctaSub: "أرسلي سؤالك مباشرة وسوف يقوم فريق عمل وحدة تكنولوجيا المعلومات بالكلية بالرد عليك في أقرب وقت ممكن.",
    btnMail: "راسلني عبر البريد",
    btnCopy: "نسخ البريد الإلكتروني",
    copied: "تم نسخ البريد الإلكتروني ✓",
    copyFailed: "تعذّر النسخ — انسخي العنوان يدوياً من التذييل",
    footerNote: "يسعدني تواصلك:"
  },
  en: {
    dir: "ltr",
    htmlLang: "en",
    brandName: "Doaa Gadallah",
    eyebrow: "Help Center",
    title: "Frequently Asked Questions",
    sub: "Clear answers to the questions people ask most — search or browse the list below.",
    searchPlaceholder: "Search a question… (e.g. contact, payment, support)",
    results: (n) => `${n} questions`,
    resultsFiltered: (n) => `${n} matching results`,
    noResults: "No matching results — try another word or email me directly.",
    ctaTitle: "Didn't find your answer?",
    ctaSub: "Send your question directly and I'll get back to you as soon as possible.",
    btnMail: "Email me",
    btnCopy: "Copy email address",
    copied: "Email copied ✓",
    copyFailed: "Couldn't copy — grab it manually from the footer",
    footerNote: "I'd love to hear from you:"
  }
};

const EMAIL = "doaagadallah.it2027@gmail.com";

/* ---------- State ---------- */

let lang = localStorage.getItem("lang") || "ar";
let query = "";

/* ---------- Elements ---------- */

const el = {
  langBtn: document.getElementById("langBtn"),
  themeBtn: document.getElementById("themeBtn"),
  search: document.getElementById("searchInput"),
  clear: document.getElementById("clearBtn"),
  list: document.getElementById("faqList"),
  count: document.getElementById("faqCount"),
  none: document.getElementById("noResults"),
  copy: document.getElementById("copyBtn"),
  toast: document.getElementById("toast")
};

/* ---------- i18n ---------- */

function t(key) {
  return I18N[lang][key];
}

function applyLang() {
  const dict = I18N[lang];
  document.documentElement.lang = dict.htmlLang;
  document.documentElement.dir = dict.dir;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = typeof dict[node.dataset.i18n] === "function"
      ? dict[node.dataset.i18n]
      : dict[node.dataset.i18n];
  });

  el.search.placeholder = t("searchPlaceholder");
  el.langBtn.textContent = lang === "ar" ? "EN" : "عربي";
  document.title = lang === "ar"
    ? "دعاء جادالله · الأسئلة الشائعة — FAQ"
    : "Doaa Gadallah · FAQ — الأسئلة الشائعة";

  renderList();
  updateCount();
}

/* ---------- FAQ rendering ---------- */

function renderList() {
  el.list.innerHTML = "";
  const frag = document.createDocumentFragment();

  FAQS.forEach((item, i) => {
    const card = document.createElement("article");
    card.className = "faq";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "faq-question";
    btn.id = `faq-q-${i}`;
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", `faq-a-${i}`);

    const num = document.createElement("span");
    num.className = "qnum";
    num.textContent = String(i + 1).padStart(2, "0");

    const qtext = document.createElement("span");
    qtext.className = "qtext";
    qtext.textContent = item.q[lang];

    const chev = document.createElement("span");
    chev.className = "chev";
    chev.setAttribute("aria-hidden", "true");
    chev.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';

    btn.append(num, qtext, chev);

    const answer = document.createElement("div");
    answer.className = "faq-answer";
    answer.id = `faq-a-${i}`;
    answer.setAttribute("role", "region");
    answer.setAttribute("aria-labelledby", btn.id);

    const inner = document.createElement("div");
    inner.className = "faq-answer-inner";
    const lines = item.a[lang].split("\n");
    lines.forEach((line, li) => {
      if (line.trim() === "") return;
      const p = document.createElement("p");
      p.textContent = line;
      if (li === lines.length - 1) p.style.marginTop = "0.6rem";
      inner.append(p);
    });
    answer.append(inner);

    btn.addEventListener("click", () => {
      const open = card.classList.toggle("active");
      btn.setAttribute("aria-expanded", String(open));
    });

    card.append(btn, answer);
    frag.append(card);
  });

  el.list.append(frag);
  applyFilter();
}

function updateCount() {
  const visible = el.list.querySelectorAll(".faq:not(.hide)").length;
  el.count.textContent = query
    ? t("resultsFiltered")(visible)
    : t("results")(FAQS.length);
}

/* ---------- Search filter ---------- */

function applyFilter() {
  const q = query.trim().toLowerCase();
  let visible = 0;

  el.list.querySelectorAll(".faq").forEach((card, i) => {
    const item = FAQS[i];
    const haystack = [item.q[lang], item.a[lang], ...(item.tags || [])]
      .join(" ")
      .toLowerCase();
    const match = !q || haystack.includes(q);
    card.classList.toggle("hide", !match);
    if (match) visible++;
  });

  el.none.hidden = visible !== 0;
  updateCount();
}

el.search.addEventListener("input", () => {
  query = el.search.value;
  el.clear.hidden = !query;
  applyFilter();
});

el.clear.addEventListener("click", () => {
  el.search.value = "";
  query = "";
  el.clear.hidden = true;
  applyFilter();
  el.search.focus();
});

/* ---------- Theme ---------- */

el.themeBtn.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
});

/* ---------- Language switch ---------- */

el.langBtn.addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  applyLang();
});

/* ---------- Copy email ---------- */

let toastTimer;

function showToast(msg) {
  el.toast.textContent = msg;
  el.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.toast.classList.remove("show"), 2400);
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(EMAIL);
    showToast(t("copied"));
  } catch {
    const ta = document.createElement("textarea");
    ta.value = EMAIL;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.append(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    showToast(t("copied"));
  }
}

el.copy.addEventListener("click", copyEmail);

/* ---------- Init ---------- */

applyLang();
