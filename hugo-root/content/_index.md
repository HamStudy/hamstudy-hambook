---
title: "HamStudy License Class HamBooks"
description: "Free and affordable study guides for every level of amateur radio licensing. Start with the Technician Class HamBook or upgrade with General and Extra guides."
keywords: [ham radio, amateur radio, technician license, general class, extra class, study guide, hambook]

# The home page is built by layouts/index.html from the data below.
# Edit the text, links and prices here; the layout does not need to change.

hero:
  eyebrow: "HamStudy License Class HamBooks"
  title: "Your path to amateur radio <em>success</em>"
  lede: "Free, comprehensive study guides that help you earn your amateur radio license or upgrade to the next level. Created by the team at HamStudy.org and funded by SignalStuff."
  primary: { text: "Read the Technician HamBook free", url: "/tech2026/" }
  secondary: { text: "Buy a copy, from $9.99", url: "#technician-buy" }
  note: "Every book is free to read online. Buying a copy gets you offline access and supports the free version."

journey:
  eyebrow: "Technician, then General, then Extra"
  title: "Begin your license journey today"
  text: "Each license class builds on the last. Pick the book for the exam you are taking next."
  image: "/license-path.svg"

books_title: "The HamBooks"
books_intro: "One book per license class, each matched to the current question pool and linked to practice on HamStudy."

# status: now | rc | draft (sets the badge color)
books:
  - id: technician
    status: now
    badge: "Available now"
    title: "Technician Class"
    pool: "2026–2030 question pool"
    cover: "/tech2026.jpg"
    cover_alt: "Technician License 2026-2030 cover"
    url: "/tech2026/"
    read: "Read online for free"
    tagline: "New operators start here!"
    points:
      - "Complete coverage of the 2026–2030 Technician Class question pool"
      - "Practical guidance for beginners"
      - "Perfect for anyone new to amateur radio"
      - "Includes an appendix with questions from the previous pool for those taking the exam before July 1, 2026"
    buy:
      intro: "Support development and get offline access. From $9.99."
      groups:
        - label: "From SignalStuff"
          items:
            - { name: "PDF", note: "Multiple page sizes available", url: "https://signalstuff.com/products/hambook-tech2026/?format=pdf", price: "from <b>$9.99</b>" }
            - { name: "E-Book (EPUB3)", url: "https://signalstuff.com/products/hambook-tech2026/?format=epub", price: "from <b>$9.99</b>" }
            - { name: "Audiobook", note: "Text to speech, so it stays up to date", url: "https://signalstuff.com/products/hambook-tech2026/?format=audiobook", price: "from <b>$9.99</b>" }
        - label: "Paperback from Amazon"
          items:
            - { name: "6\" × 9\" Paperback", url: "https://amzn.to/4cLrKUM", price: "<b>$19.99</b>" }
            - { name: "8.5\" × 11\" Large Print", url: "https://amzn.to/4d47755", price: "<b>$27.99</b>" }
      thanks: "Your purchase helps support the development and maintenance of these free resources."

  - id: general
    status: rc
    badge: "Release candidate"
    title: "General Class"
    pool: "2023–2027 question pool"
    cover: "/general2023.jpg"
    cover_alt: "General Class 2023-2027 cover"
    url: "/general2023/"
    read: "Read online for free"
    tagline: "Everything you need to pass your General Class license exam!"
    points:
      - "<b>Unlock HF:</b> understand band privileges and what you can do with them"
      - "<b>Operate like a pro:</b> SSB, CW, digital modes, DX, contesting, and more"
      - "<b>Stay safe and legal:</b> grounding, RF exposure, towers, and all the rules"
      - "<b>Study efficiently:</b> clear explanations that stay on topic"
    note: "This book is in final review. Everything is believed to be accurate; please email support@hamstudy.org if you find any errors."
    buy_soon: "PDF, EPUB and paperback editions are not available yet. The full book is free to read online now."

  - id: extra
    status: draft
    badge: "Draft · coming soon"
    title: "Amateur Extra Class"
    pool: "2024–2028 question pool"
    cover: "/extra2024.jpg"
    cover_alt: "Amateur Extra Class 2024-2028 cover"
    url: "/extra2024/"
    read: "Read the draft for free"
    read_style: ghost
    tagline: "Master advanced radio theory and regulations."
    points:
      - "<b>Focus on what matters:</b> clear explanations and highlighted exam facts"
      - "<b>Make sense of the math:</b> worked examples, one step at a time"
      - "<b>Connect theory to practice:</b> put your knowledge to work at your station"
      - "<b>Study efficiently:</b> practice each section's questions with HamStudy"
    buy_soon: "Purchase options come when the book is finished. The draft is free to read online now."

why_title: "Why choose HamBooks?"
why:
  - { icon: "/icons/book.svg", title: "Written for real beginners", text: "No assumed knowledge or technical jargon." }
  - { icon: "/icons/flashcards.svg", title: "Study your way", text: "Whether you prefer quick reviews or deep understanding." }
  - { icon: "/icons/clipboard.svg", title: "Works with HamStudy", text: "Every section links to its questions on HamStudy.org." }
  - { icon: "/icons/faq.svg", title: "Community supported", text: "Constantly improved with user feedback." }
  - { icon: "/icons/globe.svg", title: "Free web version", text: "No paywalls or hidden costs." }

community:
  title: "Join our community"
  text: "These HamBooks are living documents, continuously refined for clarity and accuracy."
  github: "https://github.com/hamstudy/hamstudy-hambook"
  email: "support@hamstudy.org"

about:
  title: "About HamBooks"
  text: |
    All HamBooks are © HamStudy.org LLC and licensed under [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).

    Developed and maintained by the HamStudy.org team and funded by [SignalStuff](https://signalstuff.com), creators of the Signal Stick antenna.
---
