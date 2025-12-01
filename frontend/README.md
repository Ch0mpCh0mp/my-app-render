This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



/classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/XZw3Y7c_)




# **Aufgabe: Entwicklung und Deployment einer kleinen Full-Stack-Applikation**

## **Ziel**

Entwickeln Sie eine kleine Full-Stack-Webanwendung, die sowohl ein Frontend als auch ein Backend umfasst. Anschließend deployen Sie die Anwendung auf der Hosting-Plattform **Render**.

---

## **Anforderungen**

### **1. Funktionale Anforderungen**

Ihre Anwendung soll:

- eine einfache Datenstruktur verwalten (z. B. Aufgabenliste, Notizen, Produkte, Kontakte, o. Ä.),
- mindestens folgende Funktionen enthalten:

  - **Erstellen** eines Eintrags
  - **Anzeigen** aller Einträge
  - **Löschen** eines Eintrags

- die Daten persistent speichern (z. B. über eine Datenbank wie PostgreSQL oder MongoDB – lokal oder gehostet).

---

### **2. Technische Anforderungen**

#### **Backend**

- Implementiert mit einer Technologie Ihrer Wahl (z. B. Node.js/Express, Python/Flask, Java/Spring Boot, etc.).
- Bietet eine **REST-API** mit mindestens drei Endpunkten:

  - `GET /items`
  - `POST /items`
  - `DELETE /items/:id`

- Enthält ein sauberes Projekt-Setup (Package-Manager, Startskript etc.).

#### **Frontend**

- Implementiert mit einem Framework Ihrer Wahl (z. B. React, Next JS)
- Kommuniziert per Fetch/Axios mit dem Backend.
- Stellt eine einfache, benutzerfreundliche Oberfläche zur Verfügung.

#### **Deployment**

- **Backend** wird als Web Service auf Render deployt.
- **Frontend** wird entweder:

  - als **Static Site** oder
  - vom Backend aus **mitserviert**.

- Die Anwendung muss nach dem Deployment öffentlich erreichbar sein.

---

## **Abgabe**

Reichen Sie folgende Elemente ein:

1. **GitHub-Repository**

   - Sauber strukturierter Code
   - README.md mit:

     - Projektbeschreibung
     - Installations- und Startanleitung
     - Beschreibung der API
     - Link zur Render-Deployment-URL

2. **Live-URL der Anwendung auf Render**

3. **Kurze Dokumentation (max. 1 Seite)**

   - Architekturübersicht
   - verwendete Technologien
   - Herausforderungen & Lösungen

---

## **Bewertungskriterien**

- Funktionalität der Anwendung
- Sauberkeit und Lesbarkeit des Codes
- Architektur und Struktur des Projekts
- Benutzerfreundlichkeit des Frontends
- Erfolgreiches Deployment auf Render
- Dokumentation & Branchen-Standards

* [Render Deploy Youtube - 1](https://www.youtube.com/watch?v=tNpoc86cHrQ&pp=ygUNUmVuZGVyIGRlcGxveQ%3D%3D)
* [Render Deploy Youtube - 2](https://www.youtube.com/watch?v=VyxA3mlvo84&t=96s&pp=ygUNUmVuZGVyIGRlcGxveQ%3D%3D)