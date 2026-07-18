# AssignMate 🚀

> **"Hey, what's due today? 👀"**  
> *A warm, collaborative, and stress-free assignment tracker designed for student friend groups.*

---

## 🎨 Visual Identity & Brand System

AssignMate is designed to feel like a **digital living room for friends**—reducing the friction of academic management through a "casual group chat" lens. Instead of cold, corporate interfaces, AssignMate prioritizes warmth, friendly accountability, and collaborative tracking.

### 🌟 Core Design Principles
- **Soft Minimalist & Tactile**: Uses high-quality whitespace, soft shadows, and organic transitions to reduce academic anxiety.
- **Hyper-Rounded Shape Language**: Interactive elements and cards utilize rounded corners (`12px` to `24px` radius) to feel safe, approachable, and friendly.
- **Atmospheric Depth**: Implements soft background glows (Indigo/Lavender), tonal layering, and glassmorphism (translucent cards with background blur) to create an immersive environment.
- **Bouncy Micro-interactions**: Buttons and inputs respond with subtle scaling and ripple effects to provide satisfying, tactile feedback.

---

## 👥 User Roles

AssignMate has two types of users — both see the **exact same UI**:

| Role | What they can do |
|---|---|
| **Editor** | Post new assignments via the floating `+ New Task` FAB button |
| **Viewer** | View all assignments and check/uncheck their own submission status |

The only visual difference between roles is the presence or absence of the FAB button. Role is assigned by whoever manages the group — not selectable at login.

---

## 🔐 The Login Screen ("Hey, what's due today?")

```
    [ task_alt ] Logo
Hey, what's due today? 👀
 Don't forget your assignments lol

 +--------------------------------+
 | Email: [ you@university.edu ]  |
 | Password: [ •••••••• ] Forgot? |
 |                                |
 |        [ Jump in 🚀 ]          |
 |        - or hang with -        |
 |    [ Google ]    [ LDAP ]      |
 +--------------------------------+

   New here? Join the group →
```

### ✨ Features
1. **Encouraging copy** — friendly subtitle softens deadline pressure
2. **Glassmorphic card** — `rgba(255,255,255,0.7)` with `backdrop-filter: blur(12px)`
3. **Animated background** — floating indigo/lavender glow blobs
4. **Solid indigo CTA** — `#4648d4` button with bouncy hover + scale animation
5. **White input fields** — with subtle `#a6b5fd` focus border glow
6. **SSO options** — Google and LDAP login
7. **Decorative facepile** — `+12 Your group is waiting!`

---

## 📝 The Register Screen ("Join AssignMate")

```
    [ school ] Logo
    Join AssignMate
Your digital living room for getting things done.

 +--------------------------------+
 | Full Name: [ Alex Johnson ]    |
 | Email:     [ alex@campus.edu ] |
 | Password [ •••• ] Confirm[••••]|
 |                                |
 |          [ I'm in 🎒 ]         |
 |  ℹ️ Access set by group admin  |
 +--------------------------------+

  Already have a room? Log in
```

### ✨ Features
1. **Indigo heading** — `#4648d4` colored title to differentiate from login
2. **Same glassmorphic card and background** as login for visual consistency
3. **Password confirmation** with mismatch validation
4. **Info note** reminding users their editor/viewer access is set externally
5. **Decorative toast** — `3 friends just joined`

---

## 📋 The Dashboard

The main screen — a shared assignment board grouped by subject.

- Assignments organized under collapsible **subject accordions** (MATH, PHYSICS, etc.)
- Each **TaskCard** shows: checkbox, title, due date, status badge (OVERDUE / DUE TOMORROW), priority dot
- **Editor** sees a floating `+ New Task` FAB button (bottom right)
- **Viewer** sees the identical layout — FAB button simply absent
- Bell icon in navbar opens the **notification drawer**

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) (Fast HMR development environment)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) (Rounded, open counters for a friendly aesthetic)
- **Icons**: [Material Symbols Outlined](https://fonts.google.com/icons)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Login.jsx        # Login page
│   ├── Register.jsx     # Registration page
│   └── Dashboard.jsx    # Main assignment board (Editor + Viewer)
├── App.jsx              # Routes setup
├── App.css
├── index.css
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
```bash
cd AssignMate
npm install
```

### Running Locally
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### Production Build
```bash
npm run build
npm run preview
```

---

## 🗺️ Routes

| Route | Component | Description |
|---|---|---|
| `/` | Redirects to `/login` | Default entry point |
| `/login` | `Login.jsx` | Email + password login |
| `/register` | `Register.jsx` | New user registration |
| `/dashboard` | `Dashboard.jsx` | Main assignment board |
