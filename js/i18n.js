/* Aspaloyy — i18n dictionary | EN RU DE TR KY
 *
 * Static HTML ships in English (baseline / crawler language).
 * Language is resolved in js/boot.js before paint, applied here.
 * Values may contain inline HTML (<strong>, <em>, <br>).
 */

window.LANGS = ['en', 'de', 'ru', 'tr', 'ky'];

window.LANG = {

/* ════════════════════════════════════════════════════════════ ENGLISH ═══ */
en: {
  "meta.home.title": "Asman Rahmanov — developer, Bishkek",
  "meta.home.desc":  "Asman Rahmanov (Aspaloyy) — developer from Bishkek, Kyrgyzstan. Two apps released on Google Play; building Manas: Prologue, a 3D action RPG based on the Kyrgyz epic.",
  "meta.about.title": "About — Asman Rahmanov",
  "meta.about.desc":  "The full path: school, a year of self-teaching, two released apps, a sole proprietorship, and the route to a US LLC. How I work and what I have shipped.",
  "meta.projects.title": "Projects — Asman Rahmanov",
  "meta.projects.desc":  "Released: Calculator (May 2026) and Span It (June 2026) on Google Play. In development: Manas: Prologue and Scribe.",
  "meta.manas.title": "Manas: Prologue — 3D action RPG",
  "meta.manas.desc":  "A story-driven 3D action RPG in a semi-open world, based on Manas — the largest epic in the world and UNESCO intangible cultural heritage. In development.",
  "meta.scribe.title": "Scribe — research system",
  "meta.scribe.desc":  "Scribe decodes any source — video, articles, threads, pages, files, speech — into structured markdown, then files it into a knowledge base.",

  "nav.projects": "Projects",
  "nav.manas":    "Manas",
  "nav.scribe":   "Scribe",
  "nav.about":    "About",
  "nav.menu":     "Menu",

  "id.name":     "Asman Rahmanov",
  "id.legal":    "Asman Rysbaevich Rahmanov",
  "id.legalcyr": "Рахманов Асман Рысбаевич",

  "status.shipped":  "Released",
  "status.dev":      "In development",
  "status.internal": "Internal tool",
  "status.flagship": "Flagship project",

  /* ── home ── */
  "home.role": "Developer from Bishkek, Kyrgyzstan",
  "home.lede": "I take an idea to a released product. Two of them are public on Google Play; the third is a game based on the epic I grew up inside.",
  "home.p1":   "I am 18 and I build under the name <strong>Aspaloyy</strong>. I have been a registered Google Play developer since December 2025. In May 2026 I released a calculator app, in June 2026 a hypercasual game called Span It. Both are live in the store, and both can be checked in a minute.",
  "home.p2":   "Most of my time now goes into <strong>Manas: Prologue</strong> — a story-driven 3D action RPG based on the Kyrgyz epic Manas — and into <strong>Scribe</strong>, the research system I built to feed it.",
  "home.cta.projects": "Projects →",
  "home.cta.about":    "The full path →",

  "facts.head": "At a glance",
  "facts.k1": "BORN",     "facts.v1": "18 November 2007 · Bishkek, Kyrgyzstan",
  "facts.k2": "BASED",    "facts.v2": "Bishkek, Kyrgyzstan",
  "facts.k3": "PLAY DEV", "facts.v3": "Google Play developer since December 2025",
  "facts.k4": "RELEASED", "facts.v4": "2 apps on Google Play (2026)",
  "facts.k5": "BUILDING", "facts.v5": "Manas: Prologue · Scribe",
  "facts.k6": "BRAND",    "facts.v6": "Aspaloyy, rebranding to Aspalloy",

  "home.flag.cta":    "Read about the project →",
  "home.shipped.head": "Released on Google Play",
  "home.method.head": "How I work",
  "home.method.p":    "I have run the full cycle myself — from researching requirements to a published release on Google Play. I define the goal, break it into tasks, research the standards each task actually depends on, build the pipeline, and take it to the store. Modern tools, AI included, are how I move faster through research and decisions. It is all self-taught, and the two released products are the evidence.",
  "home.method.cta":  "How that worked in practice →",

  /* ── projects page ── */
  "proj.title": "Projects",
  "proj.lede":  "Two released products, one game in development, one tool I built for myself. Package names and store links are listed so that anything here can be verified directly.",
  "proj.flag.head":     "Flagship",
  "proj.released.head": "Released",
  "proj.tools.head":    "Tools",

  "spanit.kind":   "2D game · hypercasual",
  "spanit.date":   "Released June 2026",
  "spanit.desc":   "A hypercasual 2D Android game built around a single core loop.",
  "spanit.detail": "Two weeks from the first line to the store page, start to finish on an old laptop. AdMob modules are integrated as the monetisation path.",

  "calc.name":   "Calculator",
  "calc.kind":   "Utility · no ads",
  "calc.date":   "Released May 2026",
  "calc.desc":   "A clean, no-advertising calculator for Android.",
  "calc.detail": "Built in two days. I had no development machine at the time: this app and this website were written entirely on a phone, and the final build was assembled on an old laptop.",

  "manas.short": "A story-driven 3D action RPG in a semi-open world, based on Manas — the largest epic in the world and part of UNESCO's intangible cultural heritage of humanity. The full trilogy is years of work, so it is being released in parts, starting with the prologue.",
  "scribe.short": "A system that decodes any source of information — video, articles, threads, web pages, files, recorded speech — into structured markdown, then breaks it down into finished modules and files them into a knowledge base.",

  "play.get":   "GET IT ON",
  "play.store": "Google Play",
  "ui.pkg":     "PKG",
  "ui.more":    "Details →",
  "ui.backhome": "← Home",

  /* ── about page ── */
  "about.title": "About",
  "about.lede":  "The full version — how I got from finishing school to two released products, and what I am building now.",

  "who.head": "Who I am",
  "who.p1":   "My name is <strong>Asman Rahmanov</strong>. I was born on 18 November 2007 in Bishkek, Kyrgyzstan, and I live there. I release my work under the name Aspaloyy; once the company is registered it becomes <strong>Aspalloy</strong>.",
  "who.p2":   "I build software and games, and I ship them. That last part matters to me more than any label: two products of mine are publicly available, dated, and downloadable by anyone reading this.",

  "work.head": "How I work",
  "work.p1":   "I have taken applications through the entire cycle on my own: researching the requirements, designing the thing, building it, and releasing it on Google Play. The way I work is to take a defined goal and drive it to the required result — break the goal into tasks, research the data and standards each task depends on using modern technology, and build the road map and pipeline for the work. I use current tooling, AI included, to accelerate research and decision-making; the judgement about what to build and what counts as finished stays mine.",
  "work.p2":   "I learn and build in the same motion. An example. I decided to put an app on Google Play, so I went and found out what that actually takes. A developer account — which means a specific set of documents, a $25 fee, and forms filled in correctly. Then an engine to build in — which means learning an unfamiliar interface, making something small in it, and working out what the app really needs. Then publishing: keystores, app signing, Google's pre-release review, policy declarations, a published privacy policy, version codes, and release tracks — internal, closed, production.",
  "work.p3":   "None of that was taught to me in a classroom. I researched every step, verified it against the source, and did it. Then I did it a second time, for a game, and the second time was faster.",
  "work.p4":   "All of it is self-taught: I have no formal degree in development and I am not going to claim one. What I would rather be judged on is the output — two products that exist, are dated, and can be downloaded right now. I think that is what this moment makes possible: you can learn a layer at the moment you need it and still ship something real, as long as you take responsibility for the result. I do.",

  "path.head": "The path",
  "path.1.date": "2025",
  "path.1.title": "Finished school",
  "path.1.body": "Completed eleven years of school in Bishkek.",
  "path.2.date": "2025 — 2026",
  "path.2.title": "A year in Turkey · self-teaching",
  "path.2.body": "A year in Turkey, enrolled at a faculty of oral health. In parallel, entirely on my own, I learned development: how software is actually made, signed, published and maintained. Everything that follows on this page started in that year.",
  "path.3.date": "December 2025",
  "path.3.title": "aspaloyy.com · Google Play developer",
  "path.3.body": "Launched this site and registered as a developer on Google Play — documents, fee, forms, verification.",
  "path.4.date": "May 2026",
  "path.4.title": "Calculator released · sole proprietorship registered",
  "path.4.body": "Released Calculator (com.aspaloyy.calculator), built in two days. The website and the app were written entirely on my phone — I had no other hardware — and the final build was assembled on an old laptop. In the same month I registered a sole proprietorship in Kyrgyzstan to obtain a business payment profile.",
  "path.5.date": "June 2026",
  "path.5.title": "Span It released",
  "path.5.body": "Released Span It (com.aspaloyy.spanit), a 2D hypercasual game built on a single core loop. Two weeks from the first line to the store page, all of it on the old laptop, with AdMob modules integrated as the monetisation path.",
  "path.6.date": "2026 — now",
  "path.6.title": "Manas: Prologue · Scribe · Aspalloy",
  "path.6.body": "Manas: Prologue is in development. Scribe is functionally complete and in daily use. I am saving for the registration of a US LLC; after that come Steam developer registration and the rebrand to Aspalloy.",

  "build.head": "What it was built on",
  "build.p":    "For the first stretch I had no development machine at all. This website and the calculator were written on a phone; the final build was assembled on an old laptop, which is also the machine Span It was made on from start to finish. I mention it not as a complaint but as the clearest measure I have: most of this was method, not equipment.",

  "biz.head": "Running it as a business",
  "biz.p1":   "In May 2026 I registered a sole proprietorship in Kyrgyzstan for one concrete reason: a business payment profile, so that released apps could actually earn. Then I hit a wall. Kyrgyzstan is not on Google Play's list of countries eligible for a merchant profile, which made monetisation through that entity impossible.",
  "biz.p2":   "So I went and learned how international corporate structures work, and switched to the route that does work: a <strong>US LLC</strong>. I am saving for the registration now. Once it is done: Steam developer registration, and the rebrand from Aspaloyy to Aspalloy.",
  "biz.p3":   "I include this because it is the honest shape of the work. A plan met a hard constraint; the response was to research the constraint and find a legal route around it, not to drop the goal.",

  "next.head": "Next",
  "next.1": "Register the US LLC — Aspalloy LLC",
  "next.2": "Register as a Steam developer",
  "next.3": "Complete the rebrand to Aspalloy",
  "next.4": "Ship Manas: Prologue in parts, starting with the prologue",

  "skills.head": "What I work with",
  "verify.head": "Verifiable",
  "verify.p":    "Every claim on this page has a public counterpart. Both applications are listed under one Google Play developer account with their package names given in full; release months match the store. If anything here needs confirming for an application, the store pages are the primary source.",

  "contact.head":   "Contact",
  "contact.k.name":  "NAME",
  "contact.k.loc":   "LOCATION",
  "contact.v.loc":   "Bishkek, Kyrgyzstan",
  "contact.k.email": "EMAIL",
  "contact.k.tg":    "TELEGRAM",
  "contact.k.play":  "PLAY",
  "contact.v.play":  "Google Play developer page",
  "contact.status":  "Currently applying for an <strong>Ausbildung</strong> place in Germany. The fastest way to reach me is email; I answer every message.",
  "contact.note":    "The name above is the one used in my applications and documents.",

  /* ── manas page ── */
  "manas.kind": "3D action RPG · semi-open world · story-driven",
  "manas.lede": "A game built on Manas — the epic my father performs. In development.",

  "manas.what.head": "What it is",
  "manas.what.p":    "<strong>Manas: Prologue</strong> is a story-driven 3D action RPG set in a semi-open world, based on the Kyrgyz epic Manas. It is a narrative game first: the point is to make the epic something you move through rather than something you are told about.",

  "manas.epic.head": "The source",
  "manas.epic.p":    "Manas is the largest epic in the world — recognised as such by Guinness World Records — and is inscribed on UNESCO's list of the intangible cultural heritage of humanity. It is the first part of a trilogy: Manas, Semetey, Seytek. This is not obscure material at home; it is the central text of Kyrgyz culture, and it has never had a game that treats it seriously.",

  "manas.scope.head": "Why a prologue",
  "manas.scope.p":    "Telling the whole epic is years of work, and pretending otherwise would be the fastest way to deliver nothing. So the plan is to release in parts, and the first part is the prologue: a contained, finished piece of the story rather than a promise of everything. Scope decided honestly is the only reason a project this size gets to exist at all.",

  "manas.research.head": "Research",
  "manas.research.p":    "I do the research myself, using Scribe — the tool I built for exactly this kind of volume. Canon, vocabulary and historical detail come in part from two books by my father, and in part from the recorded versions of the epic. The aim is a game that a Kyrgyz player recognises as accurate and a player who has never heard of Manas can still follow.",

  "manas.father.head": "Lineage",
  "manas.father.p":    "My father, <strong>Rysbai Isakov</strong>, is a manaschy — a performer of Manas. He holds the Guinness World Record for the longest continuous recitation of the epic: 124 hours, performed in Bursa, Turkey. He is an Honoured People's Artist of the Kyrgyz Republic and the author of two books I work from — <em>Sagymbaidyn Manasy</em> (a prose rendering of Sagymbai Orozbakov's version) and <em>Tamgalar dangktait Manasty</em> — and he is available to consult on the research at any time.",

  "manas.status.head": "Status",
  "manas.status.p":    "In development. No release date is announced, and I will not announce one before it is real. Visuals will be published on this page as they are ready.",

  "manas.media.head": "Visuals",
  "manas.media.note": "Nothing here is placeholder art from elsewhere — these frames stay empty until there are real captures of the game to put in them.",
  "manas.frame1": "Environment",
  "manas.frame2": "Character",
  "manas.frame3": "Gameplay",
  "manas.soon":   "In progress",

  /* ── scribe page ── */
  "scribe.kind": "Research system · internal tool",
  "scribe.lede": "The tool I built because the research for Manas outgrew note-taking.",

  "scribe.what.head": "What it does",
  "scribe.what.p":    "<strong>Scribe</strong> decodes any source of information into structured markdown. Not a summariser — a decoder: whatever the format, what comes out is clean, structured text that can be worked with.",

  "scribe.io.head": "Sources it reads",
  "scribe.io.1": "YouTube videos",
  "scribe.io.2": "Articles and long-form pages",
  "scribe.io.3": "Posts and threads on X",
  "scribe.io.4": "Any web page, from a bare link",
  "scribe.io.5": "Social media content",
  "scribe.io.6": "Almost any file format, PDFs included",
  "scribe.io.7": "Spoken audio, transcribed via Whisper / Omnilingual",

  "scribe.flow.head": "What happens next",
  "scribe.flow.p":    "From there the material is broken down semi-automatically into finished, self-contained modules and filed into a knowledge base. The point is that a subject researched once stays usable: it does not decay back into forty open tabs and a folder of half-read PDFs.",

  "scribe.why.head": "Why it exists",
  "scribe.why.p":    "Manas needs real research at volume — canon, lexicon, historical detail, variant versions of the epic, academic commentary. Manual note-taking does not survive that scale. Scribe was built to make the research tractable, and it now handles everything I read for the project.",

  "scribe.status.head": "Status",
  "scribe.status.p":    "Functionally it works and I use it every day. What remains is packaging: turning it into a product that does not depend on one specific machine, including a Telegram bot as the mobile entry point. It is an internal tool for now, not a public product — I would rather say that than overstate it.",

  /* ── footer ── */
  "footer.tagline": "Built and maintained by Asman Rahmanov · Bishkek",
  "footer.nav":     "Pages",
},

/* ═════════════════════════════════════════════════════════════ GERMAN ═══ */
de: {
  "meta.home.title": "Asman Rahmanov — Entwickler, Bischkek",
  "meta.home.desc":  "Asman Rahmanov (Aspaloyy) — Entwickler aus Bischkek, Kirgisistan. Zwei Apps auf Google Play veröffentlicht; in Arbeit: Manas: Prologue, ein 3D-Action-RPG nach dem kirgisischen Epos.",
  "meta.about.title": "Über mich — Asman Rahmanov",
  "meta.about.desc":  "Der ganze Weg: Schule, ein Jahr Selbststudium, zwei veröffentlichte Apps, ein Einzelunternehmen und der Weg zur US-LLC. Wie ich arbeite und was ich veröffentlicht habe.",
  "meta.projects.title": "Projekte — Asman Rahmanov",
  "meta.projects.desc":  "Veröffentlicht: Calculator (Mai 2026) und Span It (Juni 2026) auf Google Play. In Arbeit: Manas: Prologue und Scribe.",
  "meta.manas.title": "Manas: Prologue — 3D-Action-RPG",
  "meta.manas.desc":  "Ein erzählgetriebenes 3D-Action-RPG in einer halboffenen Welt, nach Manas — dem größten Epos der Welt und immaterielles Kulturerbe der UNESCO. In Arbeit.",
  "meta.scribe.title": "Scribe — Recherchesystem",
  "meta.scribe.desc":  "Scribe wandelt jede Quelle — Video, Artikel, Threads, Webseiten, Dateien, Sprache — in strukturiertes Markdown um und legt sie in einer Wissensbasis ab.",

  "nav.projects": "Projekte",
  "nav.manas":    "Manas",
  "nav.scribe":   "Scribe",
  "nav.about":    "Über mich",
  "nav.menu":     "Menü",

  "id.name":     "Asman Rahmanov",
  "id.legal":    "Asman Rysbaevich Rahmanov",
  "id.legalcyr": "Рахманов Асман Рысбаевич",

  "status.shipped":  "Veröffentlicht",
  "status.dev":      "In Arbeit",
  "status.internal": "Internes Werkzeug",
  "status.flagship": "Hauptprojekt",

  "home.role": "Entwickler aus Bischkek, Kirgisistan",
  "home.lede": "Ich bringe eine Idee bis zum veröffentlichten Produkt. Zwei davon sind öffentlich auf Google Play; das dritte ist ein Spiel nach dem Epos, mit dem ich aufgewachsen bin.",
  "home.p1":   "Ich bin 18 und entwickle unter dem Namen <strong>Aspaloyy</strong>. Seit Dezember 2025 bin ich registrierter Google-Play-Entwickler. Im Mai 2026 habe ich eine Rechner-App veröffentlicht, im Juni 2026 das Hypercasual-Spiel Span It. Beide sind im Store verfügbar und in einer Minute überprüfbar.",
  "home.p2":   "Der größte Teil meiner Zeit geht heute in <strong>Manas: Prologue</strong> — ein erzählgetriebenes 3D-Action-RPG nach dem kirgisischen Epos Manas — und in <strong>Scribe</strong>, das Recherchesystem, das ich dafür gebaut habe.",
  "home.cta.projects": "Projekte →",
  "home.cta.about":    "Der ganze Weg →",

  "facts.head": "Auf einen Blick",
  "facts.k1": "GEBOREN",  "facts.v1": "18. November 2007 · Bischkek, Kirgisistan",
  "facts.k2": "WOHNORT",  "facts.v2": "Bischkek, Kirgisistan",
  "facts.k3": "PLAY DEV", "facts.v3": "Google-Play-Entwickler seit Dezember 2025",
  "facts.k4": "RELEASES", "facts.v4": "2 Apps auf Google Play (2026)",
  "facts.k5": "IN ARBEIT","facts.v5": "Manas: Prologue · Scribe",
  "facts.k6": "MARKE",    "facts.v6": "Aspaloyy, Umbenennung zu Aspalloy",

  "home.flag.cta":     "Mehr über das Projekt →",
  "home.shipped.head": "Veröffentlicht auf Google Play",
  "home.method.head":  "Wie ich arbeite",
  "home.method.p":     "Ich habe den gesamten Zyklus selbst durchlaufen — von der Recherche der Anforderungen bis zur veröffentlichten Version auf Google Play. Ich definiere das Ziel, zerlege es in Aufgaben, recherchiere die Standards, von denen jede Aufgabe tatsächlich abhängt, baue die Pipeline und bringe das Ergebnis in den Store. Moderne Werkzeuge, KI eingeschlossen, nutze ich, um in Recherche und Entscheidungen schneller zu sein. Alles davon ist autodidaktisch gelernt, und die zwei veröffentlichten Produkte sind der Beleg.",
  "home.method.cta":   "Wie das konkret aussah →",

  "proj.title": "Projekte",
  "proj.lede":  "Zwei veröffentlichte Produkte, ein Spiel in Arbeit, ein Werkzeug für den eigenen Gebrauch. Paketnamen und Store-Links stehen dabei, damit alles hier direkt überprüfbar ist.",
  "proj.flag.head":     "Hauptprojekt",
  "proj.released.head": "Veröffentlicht",
  "proj.tools.head":    "Werkzeuge",

  "spanit.kind":   "2D-Spiel · Hypercasual",
  "spanit.date":   "Veröffentlicht Juni 2026",
  "spanit.desc":   "Ein Hypercasual-2D-Spiel für Android, gebaut um einen einzigen Core Loop.",
  "spanit.detail": "Zwei Wochen von der ersten Zeile bis zur Store-Seite, vollständig auf einem alten Laptop. AdMob-Module sind als Monetarisierungsweg integriert.",

  "calc.name":   "Calculator",
  "calc.kind":   "Werkzeug · werbefrei",
  "calc.date":   "Veröffentlicht Mai 2026",
  "calc.desc":   "Ein schlichter, werbefreier Rechner für Android.",
  "calc.detail": "In zwei Tagen gebaut. Ich hatte damals keinen Entwicklungsrechner: diese App und diese Website wurden vollständig auf dem Telefon geschrieben, der finale Build auf einem alten Laptop gebaut.",

  "manas.short": "Ein erzählgetriebenes 3D-Action-RPG in einer halboffenen Welt, nach Manas — dem größten Epos der Welt und Teil des immateriellen Kulturerbes der UNESCO. Die vollständige Trilogie bedeutet Jahre Arbeit, deshalb erscheint das Spiel in Teilen, beginnend mit dem Prolog.",
  "scribe.short": "Ein System, das jede Informationsquelle — Video, Artikel, Threads, Webseiten, Dateien, gesprochene Sprache — in strukturiertes Markdown umwandelt, in fertige Module zerlegt und in einer Wissensbasis ablegt.",

  "play.get":   "JETZT BEI",
  "play.store": "Google Play",
  "ui.pkg":     "PKG",
  "ui.more":    "Details →",
  "ui.backhome": "← Startseite",

  "about.title": "Über mich",
  "about.lede":  "Die vollständige Fassung — vom Schulabschluss zu zwei veröffentlichten Produkten, und woran ich jetzt arbeite.",

  "who.head": "Wer ich bin",
  "who.p1":   "Ich heiße <strong>Asman Rahmanov</strong>, geboren am 18. November 2007 in Bischkek, Kirgisistan, wo ich auch lebe. Ich veröffentliche unter dem Namen Aspaloyy; mit der Gründung des Unternehmens wird daraus <strong>Aspalloy</strong>.",
  "who.p2":   "Ich baue Software und Spiele — und ich veröffentliche sie. Dieser letzte Teil ist mir wichtiger als jede Bezeichnung: zwei meiner Produkte sind öffentlich verfügbar, datiert und von jedem herunterladbar, der das hier liest.",

  "work.head": "Wie ich arbeite",
  "work.p1":   "Ich habe Anwendungen eigenständig durch den gesamten Zyklus gebracht: Anforderungen recherchieren, entwerfen, umsetzen und auf Google Play veröffentlichen. Meine Arbeitsweise ist, ein definiertes Ziel zum verlangten Ergebnis zu führen — das Ziel in Aufgaben zerlegen, die Daten und Standards, von denen jede Aufgabe abhängt, mit modernen Technologien recherchieren und Roadmap und Pipeline für die Arbeit bauen. Aktuelle Werkzeuge, KI eingeschlossen, setze ich ein, um Recherche und Entscheidungen zu beschleunigen; die Entscheidung darüber, was gebaut wird und was als fertig gilt, bleibt bei mir.",
  "work.p2":   "Lernen und Bauen passieren bei mir gleichzeitig. Ein Beispiel: Ich wollte eine App auf Google Play bringen — also habe ich herausgefunden, was dafür wirklich nötig ist. Ein Entwicklerkonto: ein bestimmter Satz an Dokumenten, 25 Dollar Gebühr und korrekt ausgefüllte Formulare. Dann eine Engine: eine unbekannte Oberfläche lernen, etwas Kleines darin bauen, herausarbeiten, was die App tatsächlich braucht. Dann die Veröffentlichung: Keystores, App-Signierung, die Prüfung durch Google vor dem Release, Richtlinienangaben, eine veröffentlichte Datenschutzerklärung, Versionscodes und Release-Tracks — intern, geschlossen, Produktion.",
  "work.p3":   "Nichts davon wurde mir in einem Kurs beigebracht. Ich habe jeden Schritt recherchiert, an der Quelle geprüft und umgesetzt. Danach ein zweites Mal, für ein Spiel — und das zweite Mal ging schneller.",
  "work.p4":   "Alles hier ist autodidaktisch gelernt: Ich habe keinen formalen Abschluss in der Entwicklung und werde auch keinen behaupten. Woran ich lieber gemessen werde, ist das Ergebnis — zwei Produkte, die existieren, datiert sind und sich jetzt herunterladen lassen. Ich glaube, genau das macht dieser Moment möglich: Man kann eine Ebene in dem Moment lernen, in dem man sie braucht, und trotzdem etwas Echtes veröffentlichen — solange man die Verantwortung für das Ergebnis übernimmt. Das tue ich.",

  "path.head": "Der Weg",
  "path.1.date": "2025",
  "path.1.title": "Schulabschluss",
  "path.1.body": "Elf Schuljahre in Bischkek abgeschlossen.",
  "path.2.date": "2025 — 2026",
  "path.2.title": "Ein Jahr in der Türkei · Selbststudium",
  "path.2.body": "Ein Jahr in der Türkei, eingeschrieben an einer Fakultät für Mundgesundheit. Parallel dazu habe ich mir vollständig selbst die Entwicklung beigebracht: wie Software wirklich gebaut, signiert, veröffentlicht und gepflegt wird. Alles Weitere auf dieser Seite hat in diesem Jahr begonnen.",
  "path.3.date": "Dezember 2025",
  "path.3.title": "aspaloyy.com · Google-Play-Entwickler",
  "path.3.body": "Diese Website online gestellt und mich als Entwickler bei Google Play registriert — Dokumente, Gebühr, Formulare, Verifizierung.",
  "path.4.date": "Mai 2026",
  "path.4.title": "Calculator veröffentlicht · Einzelunternehmen gegründet",
  "path.4.body": "Calculator veröffentlicht (com.aspaloyy.calculator), gebaut in zwei Tagen. Website und App wurden vollständig auf meinem Telefon geschrieben — andere Hardware hatte ich nicht — der finale Build entstand auf einem alten Laptop. Im selben Monat habe ich in Kirgisistan ein Einzelunternehmen angemeldet, um ein geschäftliches Zahlungsprofil zu bekommen.",
  "path.5.date": "Juni 2026",
  "path.5.title": "Span It veröffentlicht",
  "path.5.body": "Span It veröffentlicht (com.aspaloyy.spanit), ein 2D-Hypercasual-Spiel auf Basis eines einzigen Core Loops. Zwei Wochen von der ersten Zeile bis zur Store-Seite, alles auf dem alten Laptop, mit integrierten AdMob-Modulen als Monetarisierungsweg.",
  "path.6.date": "2026 — heute",
  "path.6.title": "Manas: Prologue · Scribe · Aspalloy",
  "path.6.body": "Manas: Prologue ist in Arbeit. Scribe ist funktional fertig und täglich im Einsatz. Ich spare für die Gründung einer US-LLC; danach folgen die Registrierung als Steam-Entwickler und die Umbenennung zu Aspalloy.",

  "build.head": "Womit gebaut",
  "build.p":    "In der ersten Phase hatte ich überhaupt keinen Entwicklungsrechner. Diese Website und der Rechner wurden auf einem Telefon geschrieben; der finale Build entstand auf einem alten Laptop — demselben Gerät, auf dem Span It von Anfang bis Ende gebaut wurde. Ich erwähne das nicht als Klage, sondern als das klarste Maß, das ich habe: das meiste davon war Methode, nicht Ausrüstung.",

  "biz.head": "Die unternehmerische Seite",
  "biz.p1":   "Im Mai 2026 habe ich in Kirgisistan ein Einzelunternehmen angemeldet, aus einem konkreten Grund: ein geschäftliches Zahlungsprofil, damit veröffentlichte Apps tatsächlich Einnahmen erzielen können. Dann stieß ich an eine Wand. Kirgisistan steht nicht auf der Länderliste von Google Play für ein Verkäuferprofil — Monetarisierung über dieses Unternehmen war damit unmöglich.",
  "biz.p2":   "Also habe ich mich in internationale Unternehmensstrukturen eingearbeitet und auf den Weg gewechselt, der funktioniert: eine <strong>US-LLC</strong>. Dafür spare ich derzeit. Danach: Registrierung als Steam-Entwickler und die Umbenennung von Aspaloyy zu Aspalloy.",
  "biz.p3":   "Ich schreibe das hier hin, weil es die ehrliche Form der Arbeit ist. Ein Plan traf auf eine harte Beschränkung; die Antwort war, die Beschränkung zu recherchieren und einen legalen Weg darum herum zu finden — nicht, das Ziel aufzugeben.",

  "next.head": "Als Nächstes",
  "next.1": "Gründung der US-LLC — Aspalloy LLC",
  "next.2": "Registrierung als Steam-Entwickler",
  "next.3": "Umbenennung zu Aspalloy abschließen",
  "next.4": "Manas: Prologue in Teilen veröffentlichen, beginnend mit dem Prolog",

  "skills.head": "Womit ich arbeite",
  "verify.head": "Überprüfbar",
  "verify.p":    "Zu jeder Aussage auf dieser Seite gibt es eine öffentliche Entsprechung. Beide Anwendungen laufen über ein Google-Play-Entwicklerkonto, die Paketnamen sind vollständig angegeben, und die Release-Monate stimmen mit dem Store überein. Wenn für eine Bewerbung etwas bestätigt werden muss, sind die Store-Seiten die primäre Quelle.",

  "contact.head":   "Kontakt",
  "contact.k.name":  "NAME",
  "contact.k.loc":   "ORT",
  "contact.v.loc":   "Bischkek, Kirgisistan",
  "contact.k.email": "E-MAIL",
  "contact.k.tg":    "TELEGRAM",
  "contact.k.play":  "PLAY",
  "contact.v.play":  "Google-Play-Entwicklerseite",
  "contact.status":  "Ich bewerbe mich derzeit um einen <strong>Ausbildungsplatz</strong> in Deutschland. Am schnellsten erreichen Sie mich per E-Mail; ich antworte auf jede Nachricht.",
  "contact.note":    "Der Name oben ist derselbe, den ich in Bewerbungen und Dokumenten verwende.",

  "manas.kind": "3D-Action-RPG · halboffene Welt · erzählgetrieben",
  "manas.lede": "Ein Spiel nach Manas — dem Epos, das mein Vater vorträgt. In Arbeit.",

  "manas.what.head": "Was es ist",
  "manas.what.p":    "<strong>Manas: Prologue</strong> ist ein erzählgetriebenes 3D-Action-RPG in einer halboffenen Welt, nach dem kirgisischen Epos Manas. Es ist zuerst ein Erzählspiel: Das Epos soll etwas werden, durch das man sich bewegt, und nicht etwas, das man erzählt bekommt.",

  "manas.epic.head": "Die Vorlage",
  "manas.epic.p":    "Manas ist das größte Epos der Welt — so anerkannt vom Guinness-Buch der Rekorde — und steht auf der UNESCO-Liste des immateriellen Kulturerbes der Menschheit. Es ist der erste Teil einer Trilogie: Manas, Semetey, Seytek. In Kirgisistan ist das kein Nischenstoff, sondern der zentrale Text der Kultur — und es gab noch kein Spiel, das ihn ernst nimmt.",

  "manas.scope.head": "Warum ein Prolog",
  "manas.scope.p":    "Das ganze Epos zu erzählen bedeutet Jahre Arbeit, und etwas anderes zu behaupten wäre der schnellste Weg, nichts zu liefern. Deshalb erscheint das Spiel in Teilen, und der erste Teil ist der Prolog: ein abgeschlossenes, fertiges Stück der Geschichte statt eines Versprechens auf alles. Ehrlich gesetzter Umfang ist der einzige Grund, warum ein Projekt dieser Größe überhaupt existieren kann.",

  "manas.research.head": "Recherche",
  "manas.research.p":    "Die Recherche mache ich selbst, mit Scribe — dem Werkzeug, das ich genau für dieses Volumen gebaut habe. Kanon, Wortschatz und historische Details kommen zum Teil aus zwei Büchern meines Vaters, zum Teil aus den aufgezeichneten Fassungen des Epos. Das Ziel ist ein Spiel, das kirgisische Spieler als korrekt erkennen und dem jemand folgen kann, der von Manas noch nie gehört hat.",

  "manas.father.head": "Herkunft",
  "manas.father.p":    "Mein Vater, <strong>Rysbai Isakov</strong>, ist Manastschi — ein Vortragender des Manas. Er hält den Guinness-Weltrekord für den längsten durchgehenden Vortrag des Epos: 124 Stunden, in Bursa, Türkei. Er ist Verdienter Volkskünstler der Kirgisischen Republik und Autor der zwei Bücher, mit denen ich arbeite — <em>Sagymbaidyn Manasy</em> (eine Prosafassung der Version von Sagymbai Orozbakow) und <em>Tamgalar dangktait Manasty</em> — und er steht jederzeit für Rückfragen zur Recherche bereit.",

  "manas.status.head": "Status",
  "manas.status.p":    "In Arbeit. Es gibt kein angekündigtes Release-Datum, und ich kündige keins an, bevor es belastbar ist. Bildmaterial erscheint auf dieser Seite, sobald es fertig ist.",

  "manas.media.head": "Bildmaterial",
  "manas.media.note": "Hier steht keine geliehene Platzhalter-Grafik — diese Rahmen bleiben leer, bis es echte Aufnahmen aus dem Spiel gibt.",
  "manas.frame1": "Umgebung",
  "manas.frame2": "Figur",
  "manas.frame3": "Gameplay",
  "manas.soon":   "In Arbeit",

  "scribe.kind": "Recherchesystem · internes Werkzeug",
  "scribe.lede": "Das Werkzeug, das entstand, weil die Recherche zu Manas über Notizen hinausgewachsen ist.",

  "scribe.what.head": "Was es macht",
  "scribe.what.p":    "<strong>Scribe</strong> wandelt jede Informationsquelle in strukturiertes Markdown um. Keine Zusammenfassung — ein Decoder: unabhängig vom Format kommt sauberer, strukturierter Text heraus, mit dem man arbeiten kann.",

  "scribe.io.head": "Quellen, die es liest",
  "scribe.io.1": "YouTube-Videos",
  "scribe.io.2": "Artikel und Langtexte",
  "scribe.io.3": "Beiträge und Threads auf X",
  "scribe.io.4": "Jede Webseite, aus einem einfachen Link",
  "scribe.io.5": "Inhalte aus sozialen Netzwerken",
  "scribe.io.6": "Nahezu jedes Dateiformat, PDF eingeschlossen",
  "scribe.io.7": "Gesprochene Sprache, transkribiert über Whisper / Omnilingual",

  "scribe.flow.head": "Was danach passiert",
  "scribe.flow.p":    "Das Material wird anschließend halbautomatisch in fertige, in sich geschlossene Module zerlegt und in einer Wissensbasis abgelegt. Der Sinn: Ein einmal recherchiertes Thema bleibt nutzbar und zerfällt nicht wieder in vierzig offene Tabs und einen Ordner halb gelesener PDFs.",

  "scribe.why.head": "Warum es existiert",
  "scribe.why.p":    "Manas verlangt echte Recherche in großer Menge — Kanon, Lexik, historische Details, Fassungsvarianten des Epos, wissenschaftliche Kommentare. Handschriftliche Notizen halten dieser Größe nicht stand. Scribe wurde gebaut, um die Recherche beherrschbar zu machen, und verarbeitet inzwischen alles, was ich für das Projekt lese.",

  "scribe.status.head": "Status",
  "scribe.status.p":    "Funktional läuft es, und ich nutze es täglich. Offen ist die Verpackung: daraus ein Produkt zu machen, das nicht von einem einzelnen Gerät abhängt — inklusive Telegram-Bot als mobilem Zugang. Es ist vorläufig ein internes Werkzeug und kein öffentliches Produkt; das sage ich lieber so, als mehr zu versprechen.",

  "footer.tagline": "Gebaut und gepflegt von Asman Rahmanov · Bischkek",
  "footer.nav":     "Seiten",
},

/* ════════════════════════════════════════════════════════════ RUSSIAN ═══ */
ru: {
  "meta.home.title": "Асман Рахманов — разработчик, Бишкек",
  "meta.home.desc":  "Асман Рахманов (Aspaloyy) — разработчик из Бишкека, Кыргызстан. Два приложения выпущены в Google Play; в разработке Manas: Prologue — 3D action RPG по киргизскому эпосу.",
  "meta.about.title": "Обо мне — Асман Рахманов",
  "meta.about.desc":  "Полный путь: школа, год самообучения, два выпущенных приложения, ИП и путь к US LLC. Как я работаю и что уже выпустил.",
  "meta.projects.title": "Проекты — Асман Рахманов",
  "meta.projects.desc":  "Выпущено: Calculator (май 2026) и Span It (июнь 2026) в Google Play. В разработке: Manas: Prologue и Scribe.",
  "meta.manas.title": "Manas: Prologue — 3D action RPG",
  "meta.manas.desc":  "Сюжетная 3D action RPG в полуоткрытом мире по эпосу «Манас» — крупнейшему эпосу мира и нематериальному наследию ЮНЕСКО. В разработке.",
  "meta.scribe.title": "Scribe — система исследований",
  "meta.scribe.desc":  "Scribe декодирует любой источник — видео, статьи, треды, страницы, файлы, речь — в структурированный markdown и раскладывает по базе знаний.",

  "nav.projects": "Проекты",
  "nav.manas":    "Манас",
  "nav.scribe":   "Scribe",
  "nav.about":    "Обо мне",
  "nav.menu":     "Меню",

  "id.name":     "Асман Рахманов",
  "id.legal":    "Asman Rysbaevich Rahmanov",
  "id.legalcyr": "Рахманов Асман Рысбаевич",

  "status.shipped":  "Выпущено",
  "status.dev":      "В разработке",
  "status.internal": "Внутренний инструмент",
  "status.flagship": "Флагманский проект",

  "home.role": "Разработчик из Бишкека, Кыргызстан",
  "home.lede": "Довожу идею до выпущенного продукта. Два таких продукта доступны в Google Play; третий — игра по эпосу, внутри которого я вырос.",
  "home.p1":   "Мне 18, я работаю под именем <strong>Aspaloyy</strong>. С декабря 2025 года я зарегистрированный разработчик в Google Play. В мае 2026 выпустил приложение-калькулятор, в июне 2026 — гиперказуальную игру Span It. Оба продукта опубликованы, и проверить их можно за минуту.",
  "home.p2":   "Основное время сейчас уходит на <strong>Manas: Prologue</strong> — сюжетную 3D action RPG по киргизскому эпосу «Манас» — и на <strong>Scribe</strong>, систему исследований, которую я построил под этот проект.",
  "home.cta.projects": "Проекты →",
  "home.cta.about":    "Весь путь →",

  "facts.head": "Коротко",
  "facts.k1": "РОЖДЕНИЕ",  "facts.v1": "18 ноября 2007 · Бишкек, Кыргызстан",
  "facts.k2": "ГОРОД",     "facts.v2": "Бишкек, Кыргызстан",
  "facts.k3": "PLAY DEV",  "facts.v3": "Разработчик в Google Play с декабря 2025",
  "facts.k4": "ВЫПУЩЕНО",  "facts.v4": "2 приложения в Google Play (2026)",
  "facts.k5": "В РАБОТЕ",  "facts.v5": "Manas: Prologue · Scribe",
  "facts.k6": "БРЕНД",     "facts.v6": "Aspaloyy, ребрендинг в Aspalloy",

  "home.flag.cta":     "О проекте →",
  "home.shipped.head": "Выпущено в Google Play",
  "home.method.head":  "Как я работаю",
  "home.method.p":     "Я сам прошёл весь цикл — от исследования требований до опубликованного релиза в Google Play. Определяю цель, разбиваю её на задачи, исследую стандарты, от которых каждая задача реально зависит, строю пайплайн и довожу до стора. Современные инструменты, включая ИИ, использую, чтобы быстрее двигаться в исследовании и решениях. Всё это освоено самостоятельно, а доказательство — два выпущенных продукта.",
  "home.method.cta":   "Как это выглядело на практике →",

  "proj.title": "Проекты",
  "proj.lede":  "Два выпущенных продукта, одна игра в разработке и один инструмент, сделанный под себя. Имена пакетов и ссылки на стор указаны — всё здесь можно проверить напрямую.",
  "proj.flag.head":     "Флагман",
  "proj.released.head": "Выпущено",
  "proj.tools.head":    "Инструменты",

  "spanit.kind":   "2D-игра · гиперказуальная",
  "spanit.date":   "Релиз: июнь 2026",
  "spanit.desc":   "Гиперказуальная 2D-игра для Android, построенная на одной core loop механике.",
  "spanit.detail": "Две недели от первой строки до страницы в сторе, целиком на старом ноутбуке. Интегрированы рекламные модули AdMob как план монетизации.",

  "calc.name":   "Calculator",
  "calc.kind":   "Утилита · без рекламы",
  "calc.date":   "Релиз: май 2026",
  "calc.desc":   "Чистый калькулятор для Android без рекламы.",
  "calc.detail": "Разработан за два дня. Железа тогда не было: и это приложение, и сайт я делал целиком с телефона, а финальную сборку собрал на старом ноутбуке.",

  "manas.short": "Сюжетная 3D action RPG в полуоткрытом мире по мотивам эпоса «Манас» — крупнейшего эпоса мира и части нематериального культурного наследия человечества ЮНЕСКО. Полный эпос — это годы работы, поэтому игра выходит частями, начиная с пролога.",
  "scribe.short": "Система, которая декодирует любой источник информации — видео, статьи, треды, страницы сайтов, файлы, записанную речь — в структурированный markdown, затем разбирает материал на завершённые модули и раскладывает их по базе знаний.",

  "play.get":   "СКАЧАТЬ В",
  "play.store": "Google Play",
  "ui.pkg":     "PKG",
  "ui.more":    "Подробнее →",
  "ui.backhome": "← На главную",

  "about.title": "Обо мне",
  "about.lede":  "Полная версия — как я прошёл путь от выпуска из школы до двух выпущенных продуктов и над чем работаю сейчас.",

  "who.head": "Кто я",
  "who.p1":   "Меня зовут <strong>Асман Рахманов</strong>. Родился 18 ноября 2007 года в Бишкеке, Кыргызстан, здесь и живу. Работы выпускаю под именем Aspaloyy; после регистрации компании оно станет <strong>Aspalloy</strong>.",
  "who.p2":   "Я делаю программы и игры — и выпускаю их. Последнее для меня важнее любого звания: два моих продукта общедоступны, у них есть даты, и любой читающий это может их скачать.",

  "work.head": "Как я работаю",
  "work.p1":   "Я самостоятельно прошёл весь цикл разработки и публикации приложений: от исследования требований и проектирования до релиза в Google Play. Мой метод — довести поставленную цель до нужного результата: расставить задачи, исследовать нужные данные и стандарты с помощью современных технологий и построить дорожную карту пайплайна работы. Современные инструменты, включая ИИ, использую для ускорения исследования и принятия решений; решение о том, что делать и что считать готовым, остаётся за мной.",
  "work.p2":   "Я изучаю и делаю одновременно. Пример. Решил выпустить приложение в Google Play — пошёл выяснять, что для этого реально нужно. Аккаунт разработчика: перечень документов, 25 долларов и правильно заполненные бланки. Дальше движок: разобраться в незнакомом интерфейсе, попробовать поработать, понять, что нужно приложению. Дальше публикация: кейсторы, подписи приложения, проверка Google перед релизом, декларации политик, опубликованная политика конфиденциальности, версии приложения и типы публикаций — внутренняя, закрытая, рабочая.",
  "work.p3":   "Ничему из этого меня не учили на курсе. Каждый шаг я исследовал, сверял с первоисточником и делал. Потом сделал это второй раз, для игры, и второй раз получился быстрее.",
  "work.p4":   "Всё это освоено самостоятельно: у меня нет формального образования в разработке, и я не собираюсь его заявлять. Судить меня правильнее по результату — два продукта существуют, у них есть даты, и их можно скачать прямо сейчас. Мне кажется, именно это делает возможным нынешнее время: можно осваивать слой в тот момент, когда он понадобился, и всё равно выпускать реальное — при условии, что берёшь ответственность за результат. Я беру.",

  "path.head": "Путь",
  "path.1.date": "2025",
  "path.1.title": "Окончил школу",
  "path.1.body": "Закончил 11 классов в Бишкеке.",
  "path.2.date": "2025 — 2026",
  "path.2.title": "Год в Турции · самообучение",
  "path.2.body": "Год в Турции, факультет здоровья полости рта. Параллельно, полностью самостоятельно, осваивал разработку: как программы реально делаются, подписываются, публикуются и поддерживаются. Всё, что дальше на этой странице, началось в тот год.",
  "path.3.date": "Декабрь 2025",
  "path.3.title": "aspaloyy.com · разработчик в Google Play",
  "path.3.body": "Открыл этот сайт и зарегистрировался разработчиком в Google Play — документы, взнос, бланки, верификация.",
  "path.4.date": "Май 2026",
  "path.4.title": "Релиз Calculator · оформил ИП",
  "path.4.body": "Выпустил Calculator (com.aspaloyy.calculator), разработан за два дня. Сайт и приложение делал целиком с телефона — другого железа не было — а финальную сборку собрал на старом ноутбуке. В том же месяце оформил ИП в Кыргызстане, чтобы получить платёжный профиль юрлица.",
  "path.5.date": "Июнь 2026",
  "path.5.title": "Релиз Span It",
  "path.5.body": "Выпустил Span It (com.aspaloyy.spanit) — гиперказуальную 2D-игру на одной core loop механике. Две недели от первой строки до страницы в сторе, целиком на старом ноутбуке, с интегрированными рекламными модулями AdMob как планом монетизации.",
  "path.6.date": "2026 — сейчас",
  "path.6.title": "Manas: Prologue · Scribe · Aspalloy",
  "path.6.body": "Manas: Prologue в разработке. Scribe функционально готов и используется ежедневно. Коплю на регистрацию US LLC; после этого — регистрация разработчиком в Steam и ребрендинг в Aspalloy.",

  "build.head": "На чём это сделано",
  "build.p":    "Первое время у меня вообще не было машины для разработки. Этот сайт и калькулятор писались на телефоне; финальную сборку я собрал на старом ноутбуке — на нём же Span It сделан от начала до конца. Пишу это не как жалобу, а как самую честную мерку, которая у меня есть: большая часть здесь — метод, а не оборудование.",

  "biz.head": "Предпринимательская часть",
  "biz.p1":   "В мае 2026 я оформил ИП в Кыргызстане ради одной конкретной вещи: платёжного профиля юрлица, чтобы выпущенные приложения могли зарабатывать. И уперся в стену. Кыргызстана нет в списке стран Google Play для профиля продавца — монетизация через это ИП оказалась невозможной.",
  "biz.p2":   "Тогда я разобрался в международной корпоративной механике и перешёл на путь, который работает: <strong>US LLC</strong>. Сейчас коплю на регистрацию. После неё — регистрация разработчиком в Steam и ребрендинг из Aspaloyy в Aspalloy.",
  "biz.p3":   "Я включаю это здесь, потому что это честная форма работы. План уперся в жёсткое ограничение; ответом стало исследовать ограничение и найти законный обход, а не отказаться от цели.",

  "next.head": "Дальше",
  "next.1": "Зарегистрировать US LLC — Aspalloy LLC",
  "next.2": "Зарегистрироваться разработчиком в Steam",
  "next.3": "Завершить ребрендинг в Aspalloy",
  "next.4": "Выпускать Manas: Prologue частями, начиная с пролога",

  "skills.head": "С чем работаю",
  "verify.head": "Проверяемость",
  "verify.p":    "У каждого утверждения на этой странице есть публичное подтверждение. Оба приложения выпущены с одного аккаунта разработчика Google Play, имена пакетов указаны полностью, месяцы релизов совпадают со стором. Если для заявки нужно что-то подтвердить — страницы в сторе и есть первоисточник.",

  "contact.head":   "Контакты",
  "contact.k.name":  "ИМЯ",
  "contact.k.loc":   "ГОРОД",
  "contact.v.loc":   "Бишкек, Кыргызстан",
  "contact.k.email": "EMAIL",
  "contact.k.tg":    "TELEGRAM",
  "contact.k.play":  "PLAY",
  "contact.v.play":  "Страница разработчика в Google Play",
  "contact.status":  "Сейчас подаю заявки на место <strong>Ausbildung</strong> в Германии. Быстрее всего до меня дойти по email; отвечаю на каждое письмо.",
  "contact.note":    "Имя выше — то же, что в моих заявках и документах.",

  "manas.kind": "3D action RPG · полуоткрытый мир · сюжетная игра",
  "manas.lede": "Игра по эпосу «Манас» — тому самому, который исполняет мой отец. В разработке.",

  "manas.what.head": "Что это",
  "manas.what.p":    "<strong>Manas: Prologue</strong> — сюжетная 3D action RPG в полуоткрытом мире по мотивам киргизского эпоса «Манас». Это в первую очередь повествовательная игра: смысл в том, чтобы эпос стал тем, через что игрок проходит, а не тем, о чём ему рассказывают.",

  "manas.epic.head": "Первоисточник",
  "manas.epic.p":    "«Манас» — крупнейший эпос мира, это зафиксировано Книгой рекордов Гиннесса, и он внесён в список нематериального культурного наследия человечества ЮНЕСКО. Это первая часть трилогии: Манас — Семетей — Сейтек. Дома это не редкий материал, а центральный текст киргизской культуры — и игры, которая отнеслась бы к нему серьёзно, до сих пор не было.",

  "manas.scope.head": "Почему пролог",
  "manas.scope.p":    "Рассказать эпос целиком — это годы работы, и утверждать обратное было бы самым быстрым способом не выпустить ничего. Поэтому план — выпускать частями, и первая часть это пролог: замкнутый, завершённый фрагмент истории, а не обещание всего сразу. Честно определённый объём — единственная причина, по которой проект такого размера вообще может существовать.",

  "manas.research.head": "Исследования",
  "manas.research.p":    "Исследования я веду сам, своим инструментом Scribe — он и был сделан именно под такой объём. Канон, лексика и исторические детали берутся частью из двух книг моего отца, частью из записанных версий эпоса. Цель — игра, которую киргизский игрок признает точной и за которой сможет следить тот, кто про «Манас» никогда не слышал.",

  "manas.father.head": "Происхождение",
  "manas.father.p":    "Мой отец, <strong>Рысбай Исаков</strong>, — манасчы, исполнитель «Манаса». Он обладатель мирового рекорда Гиннесса за самое продолжительное непрерывное исполнение эпоса: 124 часа, Бурса, Турция. Заслуженный народный артист Кыргызской Республики и автор двух книг, с которыми я работаю: «Сагымбайдын Манасы» (прозаическое изложение версии Сагымбая Орозбакова) и «Тамгалар даңктайт Манасты». Он готов помогать с исследованиями в любой момент.",

  "manas.status.head": "Статус",
  "manas.status.p":    "В разработке. Дата релиза не объявлена, и я не объявлю её раньше, чем она станет реальной. Визуал будет появляться на этой странице по мере готовности.",

  "manas.media.head": "Визуал",
  "manas.media.note": "Здесь нет чужих картинок-заглушек — эти рамки останутся пустыми, пока не будет настоящих кадров из игры.",
  "manas.frame1": "Окружение",
  "manas.frame2": "Персонаж",
  "manas.frame3": "Геймплей",
  "manas.soon":   "В работе",

  "scribe.kind": "Система исследований · внутренний инструмент",
  "scribe.lede": "Инструмент, который появился, когда исследования для «Манаса» перестали влезать в заметки.",

  "scribe.what.head": "Что он делает",
  "scribe.what.p":    "<strong>Scribe</strong> декодирует любой источник информации в структурированный markdown. Это не пересказчик, а декодер: каким бы ни был формат на входе, на выходе получается чистый структурированный текст, с которым можно работать.",

  "scribe.io.head": "Что он читает",
  "scribe.io.1": "Видео с YouTube",
  "scribe.io.2": "Статьи и длинные материалы",
  "scribe.io.3": "Посты и треды в X",
  "scribe.io.4": "Любую страницу сайта — по одной ссылке",
  "scribe.io.5": "Контент из соцсетей",
  "scribe.io.6": "Почти любой формат файла, включая PDF",
  "scribe.io.7": "Речь — расшифровка через Whisper / Omnilingual",

  "scribe.flow.head": "Что происходит дальше",
  "scribe.flow.p":    "Дальше материал полуавтоматически разбирается на завершённые самостоятельные модули и раскладывается по базе знаний. Смысл в том, чтобы однажды исследованная тема оставалась пригодной к работе, а не рассыпалась обратно в сорок открытых вкладок и папку недочитанных PDF.",

  "scribe.why.head": "Зачем он нужен",
  "scribe.why.p":    "«Манас» требует настоящих исследований в объёме — канон, лексика, исторические детали, варианты версий эпоса, научные комментарии. Ручные заметки такого масштаба не выдерживают. Scribe был построен, чтобы сделать исследования управляемыми, и сейчас через него проходит всё, что я читаю по проекту.",

  "scribe.status.head": "Статус",
  "scribe.status.p":    "Функционально работает, пользуюсь им каждый день. Осталась упаковка: сделать из него продукт, не зависящий от конкретного устройства, включая Telegram-бота как мобильную точку входа. Пока это внутренний инструмент, а не публичный продукт — так честнее, чем обещать больше.",

  "footer.tagline": "Сделано и поддерживается Асманом Рахмановым · Бишкек",
  "footer.nav":     "Страницы",
},

/* ════════════════════════════════════════════════════════════ TURKISH ═══ */
tr: {
  "meta.home.title": "Asman Rahmanov — geliştirici, Bişkek",
  "meta.home.desc":  "Asman Rahmanov (Aspaloyy) — Bişkek, Kırgızistan'dan geliştirici. Google Play'de iki yayınlanmış uygulama; geliştirme aşamasında Manas: Prologue, Kırgız destanına dayanan bir 3D aksiyon RPG.",
  "meta.about.title": "Hakkımda — Asman Rahmanov",
  "meta.about.desc":  "Yolun tamamı: okul, bir yıl kendi kendine öğrenme, iki yayınlanmış uygulama, şahıs şirketi ve US LLC'ye giden yol. Nasıl çalıştığım ve neler yayınladığım.",
  "meta.projects.title": "Projeler — Asman Rahmanov",
  "meta.projects.desc":  "Yayınlandı: Calculator (Mayıs 2026) ve Span It (Haziran 2026), Google Play'de. Geliştirme aşamasında: Manas: Prologue ve Scribe.",
  "meta.manas.title": "Manas: Prologue — 3D aksiyon RPG",
  "meta.manas.desc":  "Yarı açık dünyada geçen, hikâye odaklı bir 3D aksiyon RPG; dünyanın en büyük destanı ve UNESCO somut olmayan kültürel mirası olan Manas'a dayanıyor. Geliştirme aşamasında.",
  "meta.scribe.title": "Scribe — araştırma sistemi",
  "meta.scribe.desc":  "Scribe her kaynağı — video, makale, thread, sayfa, dosya, konuşma — yapılandırılmış markdown'a çevirir ve bilgi tabanına yerleştirir.",

  "nav.projects": "Projeler",
  "nav.manas":    "Manas",
  "nav.scribe":   "Scribe",
  "nav.about":    "Hakkımda",
  "nav.menu":     "Menü",

  "id.name":     "Asman Rahmanov",
  "id.legal":    "Asman Rysbaevich Rahmanov",
  "id.legalcyr": "Рахманов Асман Рысбаевич",

  "status.shipped":  "Yayınlandı",
  "status.dev":      "Geliştiriliyor",
  "status.internal": "Dahili araç",
  "status.flagship": "Ana proje",

  "home.role": "Bişkek, Kırgızistan'dan geliştirici",
  "home.lede": "Bir fikri yayınlanmış bir ürüne kadar götürüyorum. Bunlardan ikisi Google Play'de herkese açık; üçüncüsü, içinde büyüdüğüm destana dayanan bir oyun.",
  "home.p1":   "18 yaşındayım ve <strong>Aspaloyy</strong> adıyla geliştiriyorum. Aralık 2025'ten beri kayıtlı bir Google Play geliştiricisiyim. Mayıs 2026'da bir hesap makinesi uygulaması, Haziran 2026'da Span It adlı hyper-casual bir oyun yayınladım. İkisi de mağazada yayında ve bir dakikada doğrulanabilir.",
  "home.p2":   "Zamanımın büyük kısmı şu anda <strong>Manas: Prologue</strong>'a — Kırgız destanı Manas'a dayanan hikâye odaklı bir 3D aksiyon RPG'ye — ve onu beslemek için kurduğum araştırma sistemi <strong>Scribe</strong>'a gidiyor.",
  "home.cta.projects": "Projeler →",
  "home.cta.about":    "Yolun tamamı →",

  "facts.head": "Kısaca",
  "facts.k1": "DOĞUM",     "facts.v1": "18 Kasım 2007 · Bişkek, Kırgızistan",
  "facts.k2": "YAŞADIĞI",  "facts.v2": "Bişkek, Kırgızistan",
  "facts.k3": "PLAY DEV",  "facts.v3": "Aralık 2025'ten beri Google Play geliştiricisi",
  "facts.k4": "YAYINLANAN","facts.v4": "Google Play'de 2 uygulama (2026)",
  "facts.k5": "ÜZERİNDE",  "facts.v5": "Manas: Prologue · Scribe",
  "facts.k6": "MARKA",     "facts.v6": "Aspaloyy, Aspalloy'a geçiyor",

  "home.flag.cta":     "Proje hakkında →",
  "home.shipped.head": "Google Play'de yayında",
  "home.method.head":  "Nasıl çalışıyorum",
  "home.method.p":     "Tüm döngüyü kendim yürüttüm — gereksinimlerin araştırılmasından Google Play'de yayınlanmış bir sürüme kadar. Hedefi tanımlıyorum, görevlere bölüyorum, her görevin gerçekte dayandığı standartları araştırıyorum, iş hattını kuruyorum ve mağazaya kadar götürüyorum. Modern araçları, yapay zekâ dâhil, araştırmada ve kararlarda daha hızlı ilerlemek için kullanıyorum. Hepsini kendi kendime öğrendim; kanıtı da yayınlanmış iki ürün.",
  "home.method.cta":   "Pratikte nasıl işledi →",

  "proj.title": "Projeler",
  "proj.lede":  "İki yayınlanmış ürün, geliştirilen bir oyun ve kendim için yaptığım bir araç. Paket adları ve mağaza bağlantıları burada — buradaki her şey doğrudan doğrulanabilir.",
  "proj.flag.head":     "Ana proje",
  "proj.released.head": "Yayınlandı",
  "proj.tools.head":    "Araçlar",

  "spanit.kind":   "2D oyun · hyper-casual",
  "spanit.date":   "Haziran 2026'da yayınlandı",
  "spanit.desc":   "Tek bir core loop üzerine kurulu, Android için hyper-casual 2D oyun.",
  "spanit.detail": "İlk satırdan mağaza sayfasına iki hafta, baştan sona eski bir dizüstü bilgisayarda. Para kazanma yolu olarak AdMob modülleri entegre edildi.",

  "calc.name":   "Calculator",
  "calc.kind":   "Araç · reklamsız",
  "calc.date":   "Mayıs 2026'da yayınlandı",
  "calc.desc":   "Android için sade, reklamsız bir hesap makinesi.",
  "calc.detail": "İki günde yapıldı. O sırada geliştirme donanımım yoktu: bu uygulama da bu site de tamamen telefonda yazıldı, son derleme eski bir dizüstü bilgisayarda alındı.",

  "manas.short": "Yarı açık dünyada geçen, hikâye odaklı bir 3D aksiyon RPG; dünyanın en büyük destanı ve UNESCO insanlığın somut olmayan kültürel mirasının parçası olan Manas'a dayanıyor. Destanın tamamı yıllar süren bir iş, bu yüzden oyun parçalar hâlinde, prologla başlayarak yayınlanacak.",
  "scribe.short": "Her bilgi kaynağını — video, makale, thread, web sayfası, dosya, kayıtlı konuşma — yapılandırılmış markdown'a çeviren, ardından bitmiş modüllere bölüp bilgi tabanına yerleştiren bir sistem.",

  "play.get":   "İNDİR",
  "play.store": "Google Play",
  "ui.pkg":     "PKG",
  "ui.more":    "Ayrıntılar →",
  "ui.backhome": "← Ana sayfa",

  "about.title": "Hakkımda",
  "about.lede":  "Tam hâli — okulu bitirmekten iki yayınlanmış ürüne nasıl geldim ve şimdi ne inşa ediyorum.",

  "who.head": "Ben kimim",
  "who.p1":   "Adım <strong>Asman Rahmanov</strong>. 18 Kasım 2007'de Bişkek, Kırgızistan'da doğdum ve orada yaşıyorum. İşlerimi Aspaloyy adıyla yayınlıyorum; şirket kurulduğunda bu ad <strong>Aspalloy</strong> olacak.",
  "who.p2":   "Yazılım ve oyun yapıyorum — ve onları yayınlıyorum. Bu son kısım benim için her unvandan önemli: iki ürünüm herkese açık, tarihli ve bunu okuyan herkes tarafından indirilebilir.",

  "work.head": "Nasıl çalışıyorum",
  "work.p1":   "Uygulamaları baştan sona kendim yürüttüm: gereksinimleri araştırmak, tasarlamak, geliştirmek ve Google Play'de yayınlamak. Çalışma biçimim, belirlenmiş bir hedefi istenen sonuca kadar götürmek — hedefi görevlere bölmek, her görevin dayandığı verileri ve standartları modern teknolojilerle araştırmak, işin yol haritasını ve iş hattını kurmak. Güncel araçları, yapay zekâ dâhil, araştırmayı ve karar almayı hızlandırmak için kullanıyorum; neyin yapılacağına ve neyin bitmiş sayılacağına ise ben karar veriyorum.",
  "work.p2":   "Öğrenmek ve yapmak bende aynı anda olur. Bir örnek: Google Play'e bir uygulama koymaya karar verdim ve bunun gerçekte ne gerektirdiğini araştırdım. Geliştirici hesabı: belirli bir belge listesi, 25 dolar ücret ve doğru doldurulmuş formlar. Sonra bir oyun motoru: tanımadığım bir arayüzü öğrenmek, içinde küçük bir şey yapmak, uygulamanın gerçekte neye ihtiyacı olduğunu çıkarmak. Sonra yayınlama: keystore'lar, uygulama imzalama, Google'ın yayın öncesi incelemesi, politika bildirimleri, yayınlanmış bir gizlilik politikası, sürüm kodları ve yayın kanalları — dahili, kapalı, üretim.",
  "work.p3":   "Bunların hiçbiri bana bir derste öğretilmedi. Her adımı araştırdım, kaynağından doğruladım ve yaptım. Sonra ikinci kez, bir oyun için yaptım — ve ikincisi daha hızlı oldu.",
  "work.p4":   "Buradaki her şeyi kendi kendime öğrendim: geliştirme alanında resmî bir diplomam yok ve varmış gibi de davranmayacağım. Değerlendirilmeyi tercih ettiğim şey sonuç — var olan, tarihli ve şu anda indirilebilen iki ürün. Bence bu dönemin mümkün kıldığı şey tam olarak bu: bir katmanı ihtiyaç duyduğun anda öğrenip yine de gerçek bir şey yayınlayabilirsin — sonucun sorumluluğunu aldığın sürece. Ben alıyorum.",

  "path.head": "Yol",
  "path.1.date": "2025",
  "path.1.title": "Okulu bitirdim",
  "path.1.body": "Bişkek'te on bir yıllık okulu tamamladım.",
  "path.2.date": "2025 — 2026",
  "path.2.title": "Türkiye'de bir yıl · kendi kendine öğrenme",
  "path.2.body": "Türkiye'de bir yıl, ağız sağlığı fakültesine kayıtlı olarak. Bu süre boyunca tamamen kendi başıma geliştirmeyi öğrendim: yazılımın gerçekte nasıl yapıldığını, imzalandığını, yayınlandığını ve sürdürüldüğünü. Bu sayfadaki her şey o yıl başladı.",
  "path.3.date": "Aralık 2025",
  "path.3.title": "aspaloyy.com · Google Play geliştiricisi",
  "path.3.body": "Bu siteyi açtım ve Google Play'de geliştirici olarak kaydoldum — belgeler, ücret, formlar, doğrulama.",
  "path.4.date": "Mayıs 2026",
  "path.4.title": "Calculator yayınlandı · şahıs şirketi kuruldu",
  "path.4.body": "Calculator'ı yayınladım (com.aspaloyy.calculator), iki günde yapıldı. Site ve uygulama tamamen telefonumda yazıldı — başka donanımım yoktu — son derleme eski bir dizüstü bilgisayarda alındı. Aynı ay, kurumsal bir ödeme profili almak için Kırgızistan'da şahıs şirketi kurdum.",
  "path.5.date": "Haziran 2026",
  "path.5.title": "Span It yayınlandı",
  "path.5.body": "Span It'i yayınladım (com.aspaloyy.spanit), tek bir core loop üzerine kurulu 2D hyper-casual bir oyun. İlk satırdan mağaza sayfasına iki hafta, tamamı eski dizüstü bilgisayarda, para kazanma yolu olarak AdMob modülleri entegre edilmiş hâlde.",
  "path.6.date": "2026 — bugün",
  "path.6.title": "Manas: Prologue · Scribe · Aspalloy",
  "path.6.body": "Manas: Prologue geliştiriliyor. Scribe işlevsel olarak hazır ve her gün kullanılıyor. Bir US LLC kuruluşu için para biriktiriyorum; ardından Steam geliştirici kaydı ve Aspalloy'a geçiş geliyor.",

  "build.head": "Neyin üstünde yapıldı",
  "build.p":    "İlk dönemde hiç geliştirme makinem yoktu. Bu site ve hesap makinesi telefonda yazıldı; son derleme eski bir dizüstü bilgisayarda alındı — Span It'in baştan sona yapıldığı makine de o. Bunu şikâyet olarak değil, elimdeki en net ölçü olarak yazıyorum: buradakinin çoğu ekipman değil, yöntemdi.",

  "biz.head": "İşin girişimcilik tarafı",
  "biz.p1":   "Mayıs 2026'da Kırgızistan'da tek bir somut sebeple şahıs şirketi kurdum: yayınlanan uygulamaların gerçekten kazanç sağlayabilmesi için kurumsal bir ödeme profili. Sonra duvara çarptım. Kırgızistan, Google Play'in satıcı profili için uygun ülkeler listesinde yok — yani o şirket üzerinden para kazanmak imkânsızdı.",
  "biz.p2":   "Bunun üzerine uluslararası şirket yapılarını öğrendim ve işleyen yola geçtim: bir <strong>US LLC</strong>. Şu anda kuruluş için para biriktiriyorum. Tamamlandığında: Steam geliştirici kaydı ve Aspaloyy'dan Aspalloy'a geçiş.",
  "biz.p3":   "Bunu buraya yazıyorum çünkü işin dürüst hâli bu. Bir plan katı bir kısıtlamaya çarptı; cevap, hedefi bırakmak değil, kısıtlamayı araştırıp yasal bir yol bulmak oldu.",

  "next.head": "Sırada",
  "next.1": "US LLC'yi kurmak — Aspalloy LLC",
  "next.2": "Steam geliştiricisi olarak kaydolmak",
  "next.3": "Aspalloy'a geçişi tamamlamak",
  "next.4": "Manas: Prologue'u parçalar hâlinde, prologla başlayarak yayınlamak",

  "skills.head": "Neyle çalışıyorum",
  "verify.head": "Doğrulanabilir",
  "verify.p":    "Bu sayfadaki her iddianın herkese açık bir karşılığı var. İki uygulama da tek bir Google Play geliştirici hesabı altında, paket adları tam olarak verilmiş ve yayın ayları mağazayla örtüşüyor. Bir başvuru için doğrulanması gereken bir şey varsa, birincil kaynak mağaza sayfalarıdır.",

  "contact.head":   "İletişim",
  "contact.k.name":  "AD",
  "contact.k.loc":   "KONUM",
  "contact.v.loc":   "Bişkek, Kırgızistan",
  "contact.k.email": "E-POSTA",
  "contact.k.tg":    "TELEGRAM",
  "contact.k.play":  "PLAY",
  "contact.v.play":  "Google Play geliştirici sayfası",
  "contact.status":  "Şu anda Almanya'da bir <strong>Ausbildung</strong> yeri için başvuru yapıyorum. Bana en hızlı ulaşma yolu e-posta; her mesaja cevap veriyorum.",
  "contact.note":    "Yukarıdaki ad, başvurularımda ve belgelerimde kullandığım adla aynıdır.",

  "manas.kind": "3D aksiyon RPG · yarı açık dünya · hikâye odaklı",
  "manas.lede": "Babamın icra ettiği destan olan Manas'a dayanan bir oyun. Geliştirme aşamasında.",

  "manas.what.head": "Nedir",
  "manas.what.p":    "<strong>Manas: Prologue</strong>, Kırgız destanı Manas'a dayanan, yarı açık bir dünyada geçen hikâye odaklı bir 3D aksiyon RPG. Önce bir anlatı oyunu: amaç, destanı anlatılan bir şey olmaktan çıkarıp içinden geçilen bir şeye dönüştürmek.",

  "manas.epic.head": "Kaynak",
  "manas.epic.p":    "Manas dünyanın en büyük destanıdır — Guinness Rekorlar Kitabı bunu böyle tescil etmiştir — ve UNESCO'nun insanlığın somut olmayan kültürel mirası listesindedir. Bir üçlemenin ilk bölümüdür: Manas, Semetey, Seytek. Kırgızistan'da bu bilinmeyen bir metin değil, kültürün merkezindeki metindir — ve onu ciddiye alan bir oyun bugüne kadar yapılmadı.",

  "manas.scope.head": "Neden prolog",
  "manas.scope.p":    "Destanın tamamını anlatmak yıllar süren bir iş ve aksini iddia etmek hiçbir şey teslim etmemenin en hızlı yolu olurdu. Bu yüzden plan parçalar hâlinde yayınlamak ve ilk parça prolog: her şeyin vaadi değil, hikâyenin kapanmış, bitmiş bir bölümü. Dürüstçe belirlenmiş bir kapsam, bu büyüklükte bir projenin var olabilmesinin tek sebebi.",

  "manas.research.head": "Araştırma",
  "manas.research.p":    "Araştırmayı kendim yapıyorum; tam olarak bu hacim için yaptığım araç Scribe ile. Kanon, sözcük dağarcığı ve tarihsel ayrıntılar kısmen babamın iki kitabından, kısmen destanın kayıtlı versiyonlarından geliyor. Amaç, Kırgız bir oyuncunun doğru bulacağı, Manas'ı hiç duymamış birinin ise takip edebileceği bir oyun.",

  "manas.father.head": "Köken",
  "manas.father.p":    "Babam <strong>Rısbay İsakov</strong> bir manasçı — Manas'ın icracısı. Destanın en uzun kesintisiz icrası için Guinness dünya rekorunu elinde tutuyor: Bursa, Türkiye'de 124 saat. Kırgız Cumhuriyeti'nin Halk Sanatçısı ve benim çalıştığım iki kitabın yazarı — <em>Sagımbaydın Manası</em> (Sagımbay Orozbakov versiyonunun düzyazı anlatımı) ve <em>Tamgalar dañktayt Manastı</em> — ve araştırma konusunda her an destek vermeye hazır.",

  "manas.status.head": "Durum",
  "manas.status.p":    "Geliştirme aşamasında. Açıklanmış bir çıkış tarihi yok ve gerçek olmadan önce bir tarih açıklamayacağım. Görseller hazır oldukça bu sayfada yayınlanacak.",

  "manas.media.head": "Görseller",
  "manas.media.note": "Burada başka yerden alınmış yer tutucu görsel yok — bu çerçeveler, oyundan gerçek kareler olana kadar boş kalacak.",
  "manas.frame1": "Ortam",
  "manas.frame2": "Karakter",
  "manas.frame3": "Oynanış",
  "manas.soon":   "Devam ediyor",

  "scribe.kind": "Araştırma sistemi · dahili araç",
  "scribe.lede": "Manas araştırmasının not tutmayı aşması üzerine yaptığım araç.",

  "scribe.what.head": "Ne yapar",
  "scribe.what.p":    "<strong>Scribe</strong> her bilgi kaynağını yapılandırılmış markdown'a çevirir. Özetleyici değil, bir kod çözücü: giriş formatı ne olursa olsun, çıkan şey üzerinde çalışılabilecek temiz ve yapılandırılmış metindir.",

  "scribe.io.head": "Okuduğu kaynaklar",
  "scribe.io.1": "YouTube videoları",
  "scribe.io.2": "Makaleler ve uzun metinler",
  "scribe.io.3": "X'teki gönderiler ve thread'ler",
  "scribe.io.4": "Tek bir bağlantıdan herhangi bir web sayfası",
  "scribe.io.5": "Sosyal medya içerikleri",
  "scribe.io.6": "PDF dâhil neredeyse her dosya biçimi",
  "scribe.io.7": "Konuşma — Whisper / Omnilingual ile çözümleme",

  "scribe.flow.head": "Sonra ne olur",
  "scribe.flow.p":    "Ardından malzeme yarı otomatik olarak bitmiş, kendi içinde tam modüllere bölünür ve bilgi tabanına yerleştirilir. Amaç şu: bir kez araştırılmış bir konu kullanılabilir kalsın, kırk açık sekme ve yarım okunmuş PDF klasörüne geri dönüşmesin.",

  "scribe.why.head": "Neden var",
  "scribe.why.p":    "Manas hacimli, gerçek bir araştırma istiyor — kanon, sözcük dağarcığı, tarihsel ayrıntı, destanın versiyon farkları, akademik yorumlar. Elle not almak bu ölçeğe dayanmıyor. Scribe araştırmayı yönetilebilir kılmak için yapıldı ve artık proje için okuduğum her şey oradan geçiyor.",

  "scribe.status.head": "Durum",
  "scribe.status.p":    "İşlevsel olarak çalışıyor ve her gün kullanıyorum. Kalan iş paketleme: tek bir cihaza bağlı olmayan bir ürüne dönüştürmek, mobil giriş noktası olarak bir Telegram botu dâhil. Şimdilik dahili bir araç, herkese açık bir ürün değil — olduğundan fazlasını söylemek yerine bunu söylemeyi tercih ederim.",

  "footer.tagline": "Asman Rahmanov tarafından yapıldı ve sürdürülüyor · Bişkek",
  "footer.nav":     "Sayfalar",
},

/* ═══════════════════════════════════════════════════════════ KYRGYZ ════ */
ky: {
  "meta.home.title": "Асман Рахманов — иштеп чыгуучу, Бишкек",
  "meta.home.desc":  "Асман Рахманов (Aspaloyy) — Бишкектен иштеп чыгуучу. Google Play'де эки колдонмо жарыяланган; иштелип жаткан Manas: Prologue — «Манас» эпосу боюнча 3D action RPG.",
  "meta.about.title": "Мен жөнүндө — Асман Рахманов",
  "meta.about.desc":  "Толук жол: мектеп, өз алдынча үйрөнгөн бир жыл, эки жарыяланган колдонмо, ЖИ жана US LLC'ге баруучу жол. Кантип иштейм жана эмне чыгардым.",
  "meta.projects.title": "Долбоорлор — Асман Рахманов",
  "meta.projects.desc":  "Чыккан: Calculator (май 2026) жана Span It (июнь 2026), Google Play'де. Иштелип жаткан: Manas: Prologue жана Scribe.",
  "meta.manas.title": "Manas: Prologue — 3D action RPG",
  "meta.manas.desc":  "Жарым ачык дүйнөдө өтүүчү сюжеттик 3D action RPG — дүйнөдөгү эң чоң эпос жана ЮНЕСКОнун материалдык эмес мурасы болгон «Манас» боюнча. Иштелип жатат.",
  "meta.scribe.title": "Scribe — изилдөө системасы",
  "meta.scribe.desc":  "Scribe ар кандай булакты — видео, макала, тред, сайт барагы, файл, сүйлөө — структуралуу markdown'га айлантып, билим базасына жайгаштырат.",

  "nav.projects": "Долбоорлор",
  "nav.manas":    "Манас",
  "nav.scribe":   "Scribe",
  "nav.about":    "Мен жөнүндө",
  "nav.menu":     "Меню",

  "id.name":     "Асман Рахманов",
  "id.legal":    "Asman Rysbaevich Rahmanov",
  "id.legalcyr": "Рахманов Асман Рысбаевич",

  "status.shipped":  "Чыккан",
  "status.dev":      "Иштелип жатат",
  "status.internal": "Ички курал",
  "status.flagship": "Негизги долбоор",

  "home.role": "Бишкектен, Кыргызстандан иштеп чыгуучу",
  "home.lede": "Идеяны жарыяланган продуктка чейин алып барам. Экөө Google Play'де ачык турат; үчүнчүсү — өзүм өскөн эпос боюнча оюн.",
  "home.p1":   "Мен 18 жаштамын, <strong>Aspaloyy</strong> аты менен иштейм. 2025-жылдын декабрынан бери Google Play'де катталган иштеп чыгуучумун. 2026-жылдын майында калькулятор колдонмосун, июнунда Span It деген гиперказуал оюнду чыгардым. Экөө да дүкөндө турат, бир мүнөттө текшерүүгө болот.",
  "home.p2":   "Азыр убактымдын көбү <strong>Manas: Prologue</strong>'го — кыргыз эпосу «Манас» боюнча сюжеттик 3D action RPG'ге — жана ошол долбоор үчүн курган изилдөө системасы <strong>Scribe</strong>'га кетет.",
  "home.cta.projects": "Долбоорлор →",
  "home.cta.about":    "Толук жол →",

  "facts.head": "Кыскача",
  "facts.k1": "ТУУЛГАН",   "facts.v1": "2007-жылы 18-ноябрь · Бишкек, Кыргызстан",
  "facts.k2": "ШААР",      "facts.v2": "Бишкек, Кыргызстан",
  "facts.k3": "PLAY DEV",  "facts.v3": "2025-жылдын декабрынан Google Play иштеп чыгуучусу",
  "facts.k4": "ЧЫККАН",    "facts.v4": "Google Play'де 2 колдонмо (2026)",
  "facts.k5": "ИШТЕ",      "facts.v5": "Manas: Prologue · Scribe",
  "facts.k6": "БРЕНД",     "facts.v6": "Aspaloyy, Aspalloy'го өтүп жатат",

  "home.flag.cta":     "Долбоор жөнүндө →",
  "home.shipped.head": "Google Play'де чыккан",
  "home.method.head":  "Кантип иштейм",
  "home.method.p":     "Толук циклди өзүм өттүм — талаптарды изилдөөдөн Google Play'де жарыяланган релизге чейин. Максатты аныктайм, тапшырмаларга бөлөм, ар бир тапшырма чындыгында эмнеге таянганын изилдейм, пайплайн курам жана дүкөнгө чейин жеткирем. Заманбап куралдарды, ИИ кошо, изилдөөдө жана чечим кабыл алууда тезирээк жүрүү үчүн колдоном. Мунун баары өз алдынча үйрөнүлгөн, ал эми далили — чыккан эки продукт.",
  "home.method.cta":   "Бул иш жүзүндө кандай болду →",

  "proj.title": "Долбоорлор",
  "proj.lede":  "Эки чыккан продукт, иштелип жаткан бир оюн жана өзүм үчүн жасаган бир курал. Пакет аттары менен дүкөн шилтемелери көрсөтүлгөн — бул жердеги баарын түз текшерүүгө болот.",
  "proj.flag.head":     "Негизги долбоор",
  "proj.released.head": "Чыккан",
  "proj.tools.head":    "Куралдар",

  "spanit.kind":   "2D оюн · гиперказуал",
  "spanit.date":   "2026-жылдын июнунда чыккан",
  "spanit.desc":   "Бир эле core loop механикасына курулган Android үчүн гиперказуал 2D оюн.",
  "spanit.detail": "Биринчи саптан дүкөн барагына чейин эки жума, башынан аягына чейин эски ноутбукта. Монетизация жолу катары AdMob модулдары кошулган.",

  "calc.name":   "Calculator",
  "calc.kind":   "Утилита · жарнамасыз",
  "calc.date":   "2026-жылдын майында чыккан",
  "calc.desc":   "Android үчүн жөнөкөй, жарнамасыз калькулятор.",
  "calc.detail": "Эки күндө жасалган. Ошондо техникам жок эле: бул колдонмону да, бул сайтты да толугу менен телефондон жасадым, акыркы сборканы эски ноутбукта жыйнадым.",

  "manas.short": "Жарым ачык дүйнөдө өтүүчү сюжеттик 3D action RPG — дүйнөдөгү эң чоң эпос жана ЮНЕСКОнун адамзаттын материалдык эмес маданий мурасынын бир бөлүгү болгон «Манас» боюнча. Толук эпос — жылдар бою иш, ошондуктан оюн бөлүктөр менен, прологдон башталып чыгат.",
  "scribe.short": "Ар кандай маалымат булагын — видео, макала, тред, сайт барагы, файл, жазылган сүйлөө — структуралуу markdown'га айлантып, андан кийин бүткөн модулдарга бөлүп, билим базасына жайгаштырган система.",

  "play.get":   "ЖҮКТӨП АЛ",
  "play.store": "Google Play",
  "ui.pkg":     "PKG",
  "ui.more":    "Кеңири →",
  "ui.backhome": "← Башкы бет",

  "about.title": "Мен жөнүндө",
  "about.lede":  "Толук вариант — мектепти бүткөндөн эки чыккан продуктка чейин кантип келгеним жана азыр эмне куруп жатканым.",

  "who.head": "Мен киммин",
  "who.p1":   "Менин атым <strong>Асман Рахманов</strong>. 2007-жылдын 18-ноябрында Бишкекте туулгам, ошол жерде жашайм. Иштеримди Aspaloyy аты менен чыгарам; компания катталгандан кийин ал <strong>Aspalloy</strong> болот.",
  "who.p2":   "Мен программа жана оюн жасайм — жана аларды чыгарам. Ушул акыркысы мен үчүн ар кандай атактан маанилүү: эки продуктум ачык турат, датасы бар, бул саптарды окуган ар бир адам жүктөп алса болот.",

  "work.head": "Кантип иштейм",
  "work.p1":   "Мен колдонмолорду өз алдынча толук циклден өткөрдүм: талаптарды изилдөө, долбоорлоо, жасоо жана Google Play'де жарыялоо. Иштөө ыкмам — коюлган максатты керектүү натыйжага жеткирүү: тапшырмаларды тизүү, керектүү маалыматты жана стандарттарды заманбап технологиялар менен изилдөө, иштин пайплайндарынын жол картасын куруу. Заманбап куралдарды, ИИ кошо, изилдөөнү жана чечим кабыл алууну тездетүү үчүн колдоном; эмне жасалат жана эмне бүткөн деп саналат — аны өзүм чечем.",
  "work.p2":   "Мен үйрөнүү менен жасоону бир учурда алып барам. Мисал. Google Play'ге колдонмо чыгарууну чечтим — ошол үчүн эмне талап кылынарын изилдедим. Иштеп чыгуучунун аккаунту: документтердин тизмеси, 25 доллар жана бланктарды туура толтуруу. Андан кийин движок: тааныш эмес интерфейсти үйрөнүү, ичинде кичине нерсе жасап көрүү, колдонмого эмне керек экенин түшүнүү. Андан кийин жарыялоо: кейсторлор, колдонмонун колтамгасы, Google'дун релизге чейинки текшерүүсү, политикалардын декларациялары, жарыяланган купуялык политикасы, колдонмонун версиялары жана жарыялоо түрлөрү — ички, жабык, жумушчу.",
  "work.p3":   "Булардын бирине да мени курста окуткан жок. Ар бир кадамды изилдедим, түп булактан салыштырдым жана жасадым. Кийин экинчи жолу, оюн үчүн жасадым — экинчиси тезирээк болду.",
  "work.p4":   "Бул жердегинин баары өз алдынча үйрөнүлгөн: иштеп чыгуу боюнча расмий билимим жок жана бар деп айтпайм. Мени баалоо туура болгон нерсе — натыйжа: эки продукт бар, датасы бар, азыр эле жүктөп алууга болот. Менимче, бүгүнкү убак ушуну мүмкүн кылат: катмарды керек болгон учурда үйрөнүп, ошентсе да чыныгы нерсе чыгарууга болот — натыйжа үчүн жоопкерчиликти алсаң. Мен алам.",

  "path.head": "Жол",
  "path.1.date": "2025",
  "path.1.title": "Мектепти бүттүм",
  "path.1.body": "Бишкекте 11 классты бүттүм.",
  "path.2.date": "2025 — 2026",
  "path.2.title": "Түркияда бир жыл · өз алдынча үйрөнүү",
  "path.2.body": "Түркияда бир жыл, ооз көңдөйүнүн ден соолугу факультетинде. Ошол убакта толугу менен өз алдынча иштеп чыгууну үйрөндүм: программа чындыгында кантип жасалат, кол коюлат, жарыяланат жана колдоого алынат. Бул барактагы калган нерселердин баары ошол жылы башталды.",
  "path.3.date": "Декабрь 2025",
  "path.3.title": "aspaloyy.com · Google Play иштеп чыгуучусу",
  "path.3.body": "Бул сайтты ачтым жана Google Play'де иштеп чыгуучу болуп катталдым — документтер, төлөм, бланктар, верификация.",
  "path.4.date": "Май 2026",
  "path.4.title": "Calculator чыкты · ЖИ ачылды",
  "path.4.body": "Calculator'ду чыгардым (com.aspaloyy.calculator), эки күндө жасалган. Сайтты да, колдонмону да толугу менен телефондон жасадым — башка техника жок эле — акыркы сборканы эски ноутбукта жыйнадым. Ошол айда юридикалык жактын төлөм профилин алуу үчүн Кыргызстанда жеке ишкердик (ЖИ) ачтым.",
  "path.5.date": "Июнь 2026",
  "path.5.title": "Span It чыкты",
  "path.5.body": "Span It'ти чыгардым (com.aspaloyy.spanit) — бир core loop механикасына курулган гиперказуал 2D оюн. Биринчи саптан дүкөн барагына чейин эки жума, толугу менен эски ноутбукта, монетизация жолу катары AdMob модулдары кошулган.",
  "path.6.date": "2026 — азыр",
  "path.6.title": "Manas: Prologue · Scribe · Aspalloy",
  "path.6.body": "Manas: Prologue иштелип жатат. Scribe функционалдык жактан даяр жана күн сайын колдонулат. US LLC каттоосуна акча жыйнап жатам; андан кийин — Steam'де иштеп чыгуучу болуп каттоо жана Aspalloy'го ребрендинг.",

  "build.head": "Эмненин үстүндө жасалган",
  "build.p":    "Башында иштеп чыгуу үчүн машинам таптакыр жок эле. Бул сайт менен калькулятор телефондо жазылды; акыркы сборканы эски ноутбукта жыйнадым — Span It да ошол ноутбукта башынан аягына чейин жасалды. Буну арыз катары эмес, эң ачык өлчөм катары жазып жатам: бул иштин көбү техника эмес, метод болгон.",

  "biz.head": "Ишкердик жагы",
  "biz.p1":   "2026-жылдын майында Кыргызстанда бир конкреттүү нерсе үчүн ЖИ ачтым: чыккан колдонмолор чындап акча таба алышы үчүн юридикалык жактын төлөм профили керек эле. Анан дубалга урундум. Кыргызстан Google Play'дин сатуучу профили үчүн уруксат берилген өлкөлөрдүн тизмесинде жок — ошондуктан ал ЖИ аркылуу монетизация мүмкүн эмес болуп чыкты.",
  "biz.p2":   "Ошондон кийин эл аралык корпоративдик механиканы изилдеп, иштеген жолго өттүм: <strong>US LLC</strong>. Азыр каттоого акча жыйнап жатам. Ал бүткөндөн кийин: Steam'де иштеп чыгуучу болуп каттоо жана Aspaloyy'дан Aspalloy'го ребрендинг.",
  "biz.p3":   "Буну ушул жерге жазып жатам, анткени иштин чынчыл түрү ушул. План катуу чектөөгө урунду; жооп максаттан баш тартуу эмес, чектөөнү изилдеп, мыйзамдуу жол табуу болду.",

  "next.head": "Андан кийин",
  "next.1": "US LLC каттоо — Aspalloy LLC",
  "next.2": "Steam'де иштеп чыгуучу болуп каттоо",
  "next.3": "Aspalloy'го ребрендингди бүтүрүү",
  "next.4": "Manas: Prologue'ду бөлүктөр менен, прологдон баштап чыгаруу",

  "skills.head": "Эмне менен иштейм",
  "verify.head": "Текшерилет",
  "verify.p":    "Бул барактагы ар бир айтылган нерсенин ачык далили бар. Эки колдонмо да бир Google Play иштеп чыгуучу аккаунтунан чыккан, пакет аттары толук көрсөтүлгөн, релиз айлары дүкөн менен туура келет. Арыз үчүн бир нерсени тастыктоо керек болсо — түп булак дүкөндөгү барактар.",

  "contact.head":   "Байланыш",
  "contact.k.name":  "АТЫ",
  "contact.k.loc":   "ЖАЙГАШУУ",
  "contact.v.loc":   "Бишкек, Кыргызстан",
  "contact.k.email": "EMAIL",
  "contact.k.tg":    "TELEGRAM",
  "contact.k.play":  "PLAY",
  "contact.v.play":  "Google Play'деги иштеп чыгуучунун барагы",
  "contact.status":  "Азыр Германияда <strong>Ausbildung</strong> ордуна арыз берип жатам. Мага эң тез email аркылуу жетүүгө болот; ар бир катка жооп берем.",
  "contact.note":    "Жогорудагы аты-жөн — арыздарымдагы жана документтеримдеги аты-жөн менен бирдей.",

  "manas.kind": "3D action RPG · жарым ачык дүйнө · сюжеттик оюн",
  "manas.lede": "Атам аткарган «Манас» эпосу боюнча оюн. Иштелип жатат.",

  "manas.what.head": "Бул эмне",
  "manas.what.p":    "<strong>Manas: Prologue</strong> — кыргыз эпосу «Манас» боюнча, жарым ачык дүйнөдө өтүүчү сюжеттик 3D action RPG. Бул биринчи иретте баяндоочу оюн: максат — эпос айтылып берилген нерсе эмес, оюнчу өзү аралап өткөн нерсе болушу.",

  "manas.epic.head": "Түп булак",
  "manas.epic.p":    "«Манас» — дүйнөдөгү эң чоң эпос, бул Гиннестин рекорддор китеби менен тастыкталган, жана ал ЮНЕСКОнун адамзаттын материалдык эмес маданий мурасынын тизмесине киргизилген. Ал үчилтиктин биринчи бөлүгү: Манас — Семетей — Сейтек. Бул жерде ал сейрек материал эмес, кыргыз маданиятынын негизги тексти — жана ага чын дилден мамиле кылган оюн бүгүнкү күнгө чейин жок болчу.",

  "manas.scope.head": "Эмне үчүн пролог",
  "manas.scope.p":    "Эпосту толук айтып берүү — жылдар бою иш, тескерисинче айтуу эч нерсе чыгарбоонун эң тез жолу болмок. Ошондуктан план — бөлүктөр менен чыгаруу, биринчи бөлүк пролог: баарын убада кылуу эмес, окуянын жабык, бүткөн бир бөлүгү. Чынчыл аныкталган көлөм — мындай чоң долбоордун жашоого укугу бар болушунун бирден-бир себеби.",

  "manas.research.head": "Изилдөө",
  "manas.research.p":    "Изилдөөнү өзүм жүргүзөм, өз куралым Scribe менен — ал ушундай көлөм үчүн эле жасалган. Канон, лексика жана тарыхый деталдар бир жагынан атамдын эки китебинен, бир жагынан эпостун жазылган варианттарынан алынат. Максат — кыргыз оюнчусу так деп таанырлык, «Манасты» такыр укпаган адам да түшүнө алгыдай оюн.",

  "manas.father.head": "Тамыр",
  "manas.father.p":    "Менин атам, <strong>Рысбай Исаков</strong>, — манасчы, «Манасты» аткаруучу. Ал эпосту эң узак үзгүлтүксүз аткаруу боюнча Гиннестин дүйнөлүк рекордунун ээси: 124 саат, Бурса, Түркия. Кыргыз Республикасынын эмгек сиңирген эл артисти жана мен иштеген эки китептин автору: «Сагымбайдын Манасы» (Сагымбай Орозбаковдун вариантынын прозалык баяндамасы) жана «Тамгалар даңктайт Манасты». Ал изилдөөгө каалаган убакта жардам берүүгө даяр.",

  "manas.status.head": "Статус",
  "manas.status.p":    "Иштелип жатат. Чыгуу датасы жарыяланган эмес, ал чындап белгилүү болмоюнча жарыялабайм. Визуал даяр болгон сайын ушул баракта жарыяланат.",

  "manas.media.head": "Визуал",
  "manas.media.note": "Бул жерде башка жактан алынган убактылуу сүрөттөр жок — бул рамкалар оюндан чыныгы кадрлар болгонго чейин бош калат.",
  "manas.frame1": "Айлана",
  "manas.frame2": "Каарман",
  "manas.frame3": "Геймплей",
  "manas.soon":   "Иште",

  "scribe.kind": "Изилдөө системасы · ички курал",
  "scribe.lede": "«Манас» боюнча изилдөө жазмаларга батпай калганда жасалган курал.",

  "scribe.what.head": "Эмне кылат",
  "scribe.what.p":    "<strong>Scribe</strong> ар кандай маалымат булагын структуралуу markdown'га айлантат. Бул кыскача баяндамачы эмес, декодер: киргизилген формат кандай болбосун, чыгышында иштөөгө болгон таза, структуралуу текст турат.",

  "scribe.io.head": "Эмнени окуйт",
  "scribe.io.1": "YouTube видеолорун",
  "scribe.io.2": "Макалаларды жана узун материалдарды",
  "scribe.io.3": "X'теги посттор жана тредлерди",
  "scribe.io.4": "Бир шилтеме менен сайттын каалаган барагын",
  "scribe.io.5": "Социалдык тармактардагы контентти",
  "scribe.io.6": "PDF кошо дээрлик ар кандай файл форматын",
  "scribe.io.7": "Сүйлөөнү — Whisper / Omnilingual аркылуу чечмелөө",

  "scribe.flow.head": "Андан кийин эмне болот",
  "scribe.flow.p":    "Андан кийин материал жарым автоматтык түрдө бүткөн, өз алдынча модулдарга бөлүнүп, билим базасына жайгаштырылат. Максат — бир жолу изилденген тема иштөөгө жарактуу болуп калышы, кайра кырк ачык бет менен жарым окулган PDF папкасына чачылбашы.",

  "scribe.why.head": "Эмне үчүн керек",
  "scribe.why.p":    "«Манас» чоң көлөмдө чыныгы изилдөө талап кылат — канон, лексика, тарыхый деталдар, эпостун варианттары, илимий комментарийлер. Кол менен жазган жазмалар мындай масштабга туруштук бербейт. Scribe изилдөөнү башкарууга мүмкүн кылуу үчүн курулган, азыр долбоор боюнча окуганымдын баары ошол аркылуу өтөт.",

  "scribe.status.head": "Статус",
  "scribe.status.p":    "Функционалдык жактан иштейт, күн сайын колдоном. Калганы — таңгактоо: аны конкреттүү түзмөккө көз каранды эмес продуктка айлантуу, мобилдик кирүү түйүнү катары Telegram-бот кошо. Азырынча бул ички курал, ачык продукт эмес — ашыкча убада берүүдөн көрө ушундай айтуу чынчыл.",

  "footer.tagline": "Асман Рахманов тарабынан жасалган жана колдоого алынган · Бишкек",
  "footer.nav":     "Барактар",
},

};

/* ─────────────────────────────────────────────────────── apply / switch ── */

window.setLang = function (lang) {
  if (!window.LANG[lang]) lang = 'en';
  var t = window.LANG[lang];
  var fb = window.LANG.en;

  function val(key) {
    return t[key] !== undefined ? t[key] : fb[key];
  }

  /* text nodes */
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var v = val(el.getAttribute('data-i18n'));
    if (v !== undefined) el.innerHTML = v;
  });

  /* attribute targets: <meta content>, aria-label, alt, title */
  document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
    var v = val(el.getAttribute('data-i18n-content'));
    if (v !== undefined) el.setAttribute('content', v);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    var v = val(el.getAttribute('data-i18n-aria'));
    if (v !== undefined) el.setAttribute('aria-label', v);
  });

  document.documentElement.lang = lang;

  var sel = document.getElementById('langSelect');
  if (sel) sel.value = lang;

  try { localStorage.setItem('asp_lang', lang); } catch (e) {}
  window._currentLang = lang;

  document.documentElement.classList.remove('i18n-pending');
};

document.addEventListener('DOMContentLoaded', function () {
  var sel = document.getElementById('langSelect');
  if (sel) {
    sel.addEventListener('change', function () { window.setLang(this.value); });
  }
  window.setLang(window.__lang || 'en');
});
