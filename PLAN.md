# Piano di Sviluppo: Studio Legale "Digital"

## 1. Obiettivi & Requisiti
- **Obiettivo**: Biglietto da visita digitale, sobrio e autorevole.
- **Target**: Privati e Aziende (Età media 50+, skill tech basse).
- **Stile**: Sobrio, elegante, massima leggibilità.
- **Contenuti**: Gestiti via codice (no CMS/Database).
- **Traffico**: ~100-200 visite/giorno.

## 2. Architettura Tecnica (Solution Architect)
- **Framework**: Next.js 15 (App Router).
- **Styling**: Tailwind CSS.
- **Deploy**: Statico/Vercel (Massima velocità e sicurezza).
- **Sicurezza**: Zero database, solo Cookie Banner tecnico.

## 3. Design System & UX (UX/UI Designer)
- **Palette Colori**:
  - *Dominante*: Navy Blue (Fiducia, Autorità) - es. `#0f172a`
  - *Sfondo*: Off-White/Cream (Meno stancante del bianco puro) - es. `#f8fafc`
  - *Accento*: Muted Gold o Slate Grey (Eleganza sobria).
- **Tipografia**:
  - *Headings*: Serif (es. `Playfair Display` o `Merriweather`) per tono istituzionale.
  - *Body*: Sans-serif (es. `Inter` o `Lato`) ad alto contrasto e dimensione generosa (18px base) per leggibilità target 50+.
- **Layout**: Spazi ampi, griglie ordinate, pulsanti chiari ("Prenota consulenza").

## 4. Struttura Pagine
1.  **Home**: Hero sobria, Chi siamo (sintesi), Aree pratica (griglia), Footer.
2.  **Chi Siamo**: Storia studio e profili (senza foto se non fornite, o placeholder neutri).
3.  **Aree di Attività**: Elenco descrittivo dei rami del diritto.
4.  **Contatti**: Modulo semplice, mappa, dati fiscali.

## 5. Copywriting (Marketing)
- **Tono**: Professionale, rassicurante, "Problem Solver".
- **Focus**: Pluridisciplinarietà e concretezza.
