# AssignMate 🚀

> **"Hey, what's due today? 👀"**  
> *A warm, collaborative, and stress-free academic companion designed for student peer groups.*

---

## 🎨 Visual Identity & Brand System

AssignMate is designed to feel like a **digital living room for friends**—reducing the friction of academic management through a "casual group chat" lens. Instead of cold, corporate interfaces, AssignMate prioritizes warmth, friendly accountability, and collaborative tracking.

### 🌟 Core Design Principles
- **Soft Minimalist & Tactile**: Uses high-quality whitespace, soft shadows, and organic transitions to reduce academic anxiety.
- **Hyper-Rounded Shape Language**: Interactive elements and cards utilize rounded corners (`12px` to `24px` radius) to feel safe, approachable, and friendly.
- **Atmospheric Depth**: Implements soft background glows (Indigo/Lavender), tonal layering, and glassmorphism (translucent cards with background blur) to create an immersive environment.
- **Bouncy Micro-interactions**: Buttons and inputs respond with subtle scaling and ripple effects to provide satisfying, tactile feedback.

---

## 🔐 The Login Screen ("Hey, what's due today?")

The entry point of AssignMate welcomes students with an encouraging, personalized vibe:

```
    [ task_alt ] Logo
Hey, what's due today? 👀
 Don't forget your assignments lol
 
 +--------------------------------+
 | Email: [ you@university.edu ]  |
 | Password: [ •••••••• ]         |
 |                                |
 |        [ Jump in 🚀 ]          |
 |        - or hang with -        |
 |    [ Google ]    [ LDAP ]      |
 +--------------------------------+
 
   New here? Join the group ->
```

### ✨ Highlighted Features on this Page
1. **Encouraging Copy**: Softens the pressure of deadlines with a friendly subtitle (*"Don't forget your assignments lol"*).
2. **Glassmorphic Card**: A sleek translucent container (`glass-card`) featuring an ambient, multi-layered shadow (`0px 4px 20px rgba(99, 102, 241, 0.08)`).
3. **SSO Integration**: Quick login options for university students via standard email, Google account, or school LDAP directory.
4. **Dynamic Facepile Overlay**: A decorative floating avatar pile showing active members with an encouraging hint: `+12 Your group is waiting!`.
5. **Micro-animations**:
   - Floating background accent blobs.
   - Smooth scaling feedback on input focus.
   - Interactive ripple/ping effect on the **Jump in 🚀** submission.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) (Fast HMR development environment)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) (Rounded, open counters for a friendly aesthetic)
- **Icons**: [Material Symbols Outlined](https://fonts.google.com/icons)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
Clone the repository and install the dependencies:
```bash
# Navigate to the project directory
cd AssignMate

# Install npm dependencies
npm install
```

### Running Locally
To launch the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to the local URL provided (usually `http://localhost:5173`).

### Production Build
To build a highly optimized bundle for production:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```
