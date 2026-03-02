# ⚡ TriEV Rider App

> **#JoinTheEVTribe** — Roadside EV Rescue, Anytime.

A mobile-first roadside assistance app for EV riders. Built with React + TypeScript + Node.js + PostgreSQL.

---

## 🚀 Quick Start on Replit

1. **Fork or upload** this repo to Replit
2. **Provision PostgreSQL**: Go to `Tools → PostgreSQL → Provision`
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Push DB schema**:
   ```bash
   npm run db:push
   ```
5. **Start the app**:
   ```bash
   npm run dev
   ```

The client runs on `http://localhost:5173` and the API on `http://localhost:3001`.

---

## 📁 Project Structure

```
triev-app/
├── client/
│   ├── index.html
│   ├── public/
│   │   └── favicon.svg
│   └── src/
│       ├── assets/
│       │   └── triev-logo.png
│       ├── components/
│       │   └── BottomNav.tsx
│       ├── lib/
│       │   ├── api.ts
│       │   └── utils.ts
│       ├── pages/
│       │   ├── HomePage.tsx
│       │   ├── HistoryPage.tsx
│       │   ├── LoginPage.tsx
│       │   ├── ProfilePage.tsx
│       │   ├── RaiseTicketPage.tsx
│       │   └── TrackingPage.tsx
│       ├── store/
│       │   └── app.ts
│       ├── App.tsx
│       ├── index.css
│       └── main.tsx
├── server/
│   ├── index.ts
│   ├── routes.ts
│   └── storage.ts
├── shared/
│   ├── schema.ts
│   └── routes.ts
├── drizzle.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.server.json
└── vite.config.ts
```

---

## ✨ Features

- **Phone-based Login** — Auto account creation on first login
- **SOS Ticket Raising** — Select issue type (Battery, Tyre, System, Lockout, Other)
- **GPS Location Detection** — Auto-detect via browser geolocation + OpenStreetMap reverse geocoding
- **Priority Levels** — Normal / High / Urgent
- **Live Status Tracking** — Radar animation while searching, auto-assigns a technician after ~8s
- **Technician Details** — Name, rating, ETA, phone call button
- **Progress Stepper** — Visual steps from search → assign → route → arrive → complete
- **Rescue History** — Full ticket history with status badges
- **Profile Management** — Edit name, EV model; view battery status

---

## 🎨 Design

- **Theme**: Deep dark orange (Electric Orange) — matches the TriEV brand
- **Typography**: Exo 2 (display) + Plus Jakarta Sans (body)
- **Colors**: `#FF6B00` accent on `#0a0804` dark background
- **Mobile-first**: Max width 448px, bottom nav, safe area aware

---

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, custom CSS animations |
| State | Zustand (persisted auth) |
| Data Fetching | TanStack Query v5 |
| Routing | Wouter |
| Backend | Node.js, Express |
| ORM | Drizzle ORM |
| Database | PostgreSQL |
| Validation | Zod |

---

## 🌐 Deploy on Replit

1. Set `DATABASE_URL` in the Replit Secrets/Environment tab
2. Set `NODE_ENV=production`
3. Run `npm run build` then `npm start`

---

**TriEV** — Rescue. Revive. Ride. ⚡
