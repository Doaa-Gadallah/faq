/* FAQ — Doaa Gadallah · vanilla JS, no dependencies */

"use strict";

/* ---------- Data: questions in both languages ---------- */

const FAQS = [
  {
    q: { ar: " ماذا أفعل اذا طلب منى أغير كلمة مرور ماى مانس عند الدخول على بوابة اعضاء هيئة التدريس؟", en: "What services do you offer?" },
    a: { ar: "أقدم حلول برمجية وتقنية تشمل تطوير المواقع والتطبيقات، وإنظمة المعلومات، والاستشارات التقنية. يمكنكمراسلتي عبر البريد الإلكتروني لمناقشة تفاصيل مشروعك.", en: "I provide software and IT solutions including web andapp development, information systems, and technical consulting. Email me to discuss your project details." },
    tags: ["services", "خدمات"]
  },
  {
    q: { ar: "ماذا أفعل عند نسيان كلمة مرور ماى مانس؟", en: "How can I contact you?" },
    a: { ar: "أسهل طريقة هي البريد الإلكتروني: doaagadallah.it2027@gmail.com — أرد عادةً خلال ٢٤ ساعة. يمكنك أيضاً استخدام زر «راسلني» أو «نسخ البريد» في الأسفل.", en: "The easiest way is email: doaagadallah.it2027@gmail.com — I usually reply within 24 hours. You can also use the 'Email me' or 'Copy email' buttons below." },
    tags: ["contact", "تواصل", "email"]
  },
    {
    q: { ar: " ماذا أفعل عند عدم ظهور مقرراتى على صفحتى على المنصة التعليمية؟", en: "What services do you offer?" },
    a: { ar: "أقدم حلول برمجية وتقنية تشمل تطوير المواقع والتطبيقات، وإنظمة المعلومات، والاستشارات التقنية. يمكنكمراسلتي عبر البريد الإلكتروني لمناقشة تفاصيل مشروعك.", en: "I provide software and IT solutions including web andapp development, information systems, and technical consulting. Email me to discuss your project details." },
    tags: ["services", "خدمات"]
  },
  {
    q: { ar: "كيف أعمل نسخة احتياطية باك أب؟", en: "How long does a project take?" },
    a: { ar: "يعتمد ذلك على حجم المشروع وتعقيده: الموقع التعريفي البسيط يستغرق عادةً من أسبوع إلى أسبوعين، بينما التطبيقات والأنظمة الأكبر من ثلاثة إلى ستة أسابيع، مع تحديد جدول زمني واضح قبل البدء.", en: "It depends on the sizeand complexity: a simple landing page usually takes one to two weeks, while larger apps and systems take three tosix weeks — with a clear timeline agreed before we start." },
    tags: ["time", "duration", "مدة", "الوقت"]
  },
  {
    q: { ar: "كيف أسترجع ملفات النسخة الاحتياطية على صفخة المقرر؟", en: "What technologies do you work with?" },
    a: { ar: "أعمل بأساسيات الويب HTML و CSS و JavaScript، إضافة إلى أطر العمل الحديثة حسب حاجة المشروع، مع اهتمام خاص بتجربة المستخدم ودعم اللغة العربية والاتجاه من اليمين لليسار.", en: "I work with web fundamentals — HTML, CSS and JavaScript — plus modern frameworks as the project requires, with special care for user experience and full Arabic RTL support." },
    tags: ["tech", "تقنيات", "stack"]
  },
  {
    q: { ar: "كيف أرفع رابط المحاضرة على صفحة المقرر؟", en: "Can you modify or maintain an existing website?" },
    a: { ar: "نعم بالتأكيد. أبدأ بمراجعة سريعة للكود الحالي لتقييم الوضع، ثم أقترح خطة للتحسينات أو الإصلاحات أو إضافة ميزات جديدة، سواء كان التعديل بسيطاً أو إعادة بناء كاملة.", en: "Absolutely. I start with a quick review of the existing code to assess its state, then propose a plan for improvements, fixes, or new features — whether it's a small tweak or a full rebuild." },
    tags: ["maintenance", "صيانة", "تعديل"]
  },
  {
    q: { ar: "كيف أعمل اختبار على المنصة التعليمية؟", en: "How does payment work?" },
    a: { ar: "عادةً تكون الدفعة الأولى عند الاتفاق (نسبة ٣٠ إلى ٥٠٪)، والباقي عند التسليم النهائي. للمشاريع الطويلة يمكن تقسيم المبالغ على مراحل التسليم، وسنسأل دائماً على الفواتير الرسمية.", en: "Typically an upfront payment of 30–50% when we agree, and the rest upon final delivery. For longer projects, payments can be split across deliverymilestones — official invoices are always provided." },
    tags: ["payment", "دفع", "الأسعار", "price"]
  },
  {
    q: { ar: "كيف أرفع ملف للمحاضرة على المنصة التعليمية؟", en: "Do you offer support after delivery?" },
    a: { ar: "نعم، كل مشروع يتضمن فترة دعم مجاني لإصلاح أي ملاحظات بعد الإطلاق، ويمكن الاتفاق على عقد صيانة دوري يشمل التحديثات والنسخ الاحتياطي والمتابعة التقنية.", en: "Yes — every project includes a free support window for fixes after launch, and we can arrange an ongoing maintenance contract covering updates, backups, and technical monitoring." },
    tags: ["support", "دعم", "صيانة"]
  },
  {
    q: { ar: "ماذا أفعل عند نسيان كلمة مرور البريد الجامعى؟", en: "How can I contact you?" },
    a: { ar: "أسهل طريقة هي البريد الإلكتروني: doaagadallah.it2027@gmail.com — أرد عادةً خلال ٢٤ ساعة. يمكنك أيضاً استخدام زر «راسلني» أو «نسخ البريد» في الأسفل.", en: "The easiest way is email: doaagadallah.it2027@gmail.com — I usually reply within 24 hours. You can also use the 'Email me' or 'Copy email' buttons below." },
    tags: ["contact", "تواصل", "email"]
  },
  {
    q: { ar: "كيف أعمل استبيان بجوجل فورم؟", en: "How can I contact you?" },
    a: { ar: "أسهل طريقة هي البريد الإلكتروني: doaagadallah.it2027@gmail.com — أرد عادةً خلال ٢٤ ساعة. يمكنك أيضاً استخدام زر «راسلني» أو «نسخ البريد» في الأسفل.", en: "The easiest way is email: doaagadallah.it2027@gmail.com — I usually reply within 24 hours. You can also use the 'Email me' or 'Copy email' buttons below." },
    tags: ["contact", "تواصل", "email"]
  },
  {
    q: { ar: "كيف أعمل تكليف للطلاب على المنصة؟", en: "How can I contact you?" },
    a: { ar: "أسهل طريقة هي البريد الإلكتروني: doaagadallah.it2027@gmail.com — أرد عادةً خلال ٢٤ ساعة. يمكنك أيضاً استخدام زر «راسلني» أو «نسخ البريد» في الأسفل.", en: "The easiest way is email: doaagadallah.it2027@gmail.com — I usually reply within 24 hours. You can also use the 'Email me' or 'Copy email' buttons below." },
    tags: ["contact", "تواصل", "email"]
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
    const p = document.createElement("p");
    p.textContent = item.a[lang];
    inner.append(p);
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
