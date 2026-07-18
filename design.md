# AssignMate Design System & Specification

This document details the complete design tokens, aesthetic principles, reusable components, and configuration guides for **AssignMate** based on the Figma/Stitch designs.

---

## 1. Brand Identity & Vibe

AssignMate is styled as a **"digital living room for friends"** rather than a sterile corporate utility. It addresses academic and project tracking through a lens of casual group communication, friendly accountability, and stress reduction.
- **Aesthetic**: Soft Minimalist with a Tactile touch.
- **Tone**: Approachable, warm, composed, and encouraging.
- **Visual Feel**: Airy layouts, high-quality whitespace, hyper-rounded edges, and smooth micro-animations.

---

## 2. Full Color Palette

The palette avoids harsh blacks and sterile grays, opting instead for a soft, light-flooded, lavender-tinted background with deep slate typography.

### Core Brand Colors
| Token Name | Hex Code | Visual Use Case |
| :--- | :--- | :--- |
| **Primary (Indigo)** | `#4648d4` | CTA buttons, brand logo, heading highlights, focus rings |
| **Primary Container** | `#6063ee` | Hover state for buttons, active selection icons |
| **Secondary (Muted Blue)** | `#4b5a9c` | Secondary headers |
| **Secondary Container (Light Blue/Lavender)**| `#a6b5fd` | Input focus border glow, active tabs |
| **Secondary Fixed (Soft Blue)** | `#dde1ff` | Form input borders, default card outlines |
| **Background (Warm Lavender-White)** | `#f8f9ff` | Core canvas background for all pages |

### Neutral Colors
| Token Name | Hex Code | Visual Use Case |
| :--- | :--- | :--- |
| **On-Surface (Deep Slate)** | `#121c28` | Main headings (Login), primary body text |
| **On-Surface-Variant (Muted Slate)** | `#464554` | Subtitles, description labels, secondary details |
| **Outline (Slate Gray)** | `#767586` | Standard borders, divider lines, prefix icons |
| **Outline Variant (Muted Gray)** | `#c7c4d7` | Input placeholders, inactive borders |
| **Surface-Container-Lowest (Pure White)** | `#ffffff` | Input field fills, main task card backgrounds |
| **Surface-Container-Low (Light Gray-Blue)** | `#eef4ff` | Social button backgrounds, dropdown card lists |
| **Surface-Container** | `#e5eeff` | Info/note box backgrounds |
| **Surface-Dim (Muted Gray-Blue)** | `#d1dbec` | Accordion headers, collapsible panels background |

### Semantic / Accent Colors
| Token Name | Hex Code | Visual Use Case |
| :--- | :--- | :--- |
| **Overdue Red** | `#ba1a1a` | Red priority dots, "OVERDUE" text |
| **Overdue Red Container** | `#ffdad6` | "OVERDUE" badge background |
| **Warning Orange / Due Tomorrow** | `#904900` | Orange priority dots, "DUE TOMORROW" text |
| **Warning Orange Container** | `#ffdcc5` | "DUE TOMORROW" badge background |
| **Chill Green / Completed** | `#10b981` | Green priority dots, completed task badges |

---

## 3. Typography

AssignMate uses **Nunito Sans** for all elements. Its rounded terminals and open counters reinforce the friendly, informal brand aesthetic.

| Style Name | Font Size | Line Height | Weight | Tailwind Class Equivalent |
| :--- | :--- | :--- | :--- | :--- |
| **Headline XL** | `40px` (`2.5rem`) | `48px` | `800` (Extra Bold) | `font-extrabold text-[40px] leading-[48px]` |
| **Headline LG** | `32px` (`2rem`) | `40px` | `800` (Extra Bold) | `font-extrabold text-[32px] leading-[40px]` |
| **Headline MD** | `24px` (`1.5rem`) | `32px` | `700` (Bold) | `font-bold text-[24px] leading-[32px]` |
| **Body LG** | `18px` (`1.125rem`)| `28px` | `400` (Regular) | `font-normal text-[18px] leading-[28px]` |
| **Body MD** | `16px` (`1rem`) | `24px` | `400` (Regular) | `font-normal text-[16px] leading-[24px]` |
| **Label MD** | `14px` (`0.875rem`)| `20px` | `700` (Bold) | `font-bold text-[14px] leading-[20px] tracking-wide` |
| **Label SM** | `12px` (`0.75rem`) | `16px` | `600` (Semi-Bold)| `font-semibold text-[12px] leading-[16px]` |

---

## 4. Spacing System

Layout margins and paddings are based on an `8px` grid system. Spaces are generous to allow the UI to breathe.

- **Desktop Page Margins**: `2.5rem` (40px) padding around the main canvas.
- **Mobile Page Margins**: `1.25rem` (20px) padding.
- **Gutter Width (Grids)**: `1.5rem` (24px) spacing between layout items.
- **Stack Spacing (Vertical rhythm)**:
  - `stack-sm`: `0.5rem` (8px) for labels and input gaps.
  - `stack-md`: `1rem` (16px) between standard task items inside a list.
  - `stack-lg`: `2rem` (32px) internal card padding and spacing between main panels.

---

## 5. Border Radius

To eliminate sharp edges and create a safe feel, the design system utilizes hyper-rounded corners:

- **Large Containers (Cards, Modals)**: `24px` (`1.5rem`) corner radius.
- **Medium Containers (Inputs, Action Buttons)**: `16px` (`1rem`) corner radius.
- **Small Elements (Pill Badges, Tags)**: Fully rounded (`9999px`) or `8px` (`0.5rem`).
- **Avatars**: Circular (`50%` / `rounded-full`).

---

## 6. Shadows & Glassmorphism

- **Standard Elevation (Task Cards)**:
  - Subtle, Indigo-tinted shadow:
    `box-shadow: 0px 4px 20px rgba(99, 102, 241, 0.08);`
- **Glassmorphism (Login/Register Cards & Modals)**:
  - Translucent white fills layered over background accents:
    `background: rgba(255, 255, 255, 0.7);`
    `backdrop-filter: blur(12px);`
  - Subtle bordering:
    `border: 1px solid rgba(217, 227, 244, 0.5);`

---

## 7. Page-Level Design Specs

### Login Page (`/login`)
- **Heading**: `"Hey, what's due today? 👀"` — `32px`, weight `800`, color `#121c28`
- **Subtext**: `"Don't forget your assignments lol"` — `16px`, color `#464554`
- **Logo icon**: `task_alt` (Material Symbols)
- **CTA Button**: `"Jump in 🚀"` — background `#4648d4`, white text, hover `#6063ee`, `active:scale-95`
- **Input background**: `#ffffff` white
- **Input border**: `1px solid rgba(217, 227, 244, 0.5)`, focus border `#a6b5fd`
- **Input focus animation**: `scale(1.02)` on focus
- **Extra**: Google + LDAP SSO buttons, facepile decoration (`+12 Your group is waiting!`)

### Register Page (`/register`)
- **Heading**: `"Join AssignMate"` — `32px`, weight `800`, color `#4648d4` (indigo — different from login)
- **Subtext**: `"Your digital living room for getting things done."` — `16px`, color `#464554`
- **Logo icon**: `school` (Material Symbols)
- **CTA Button**: `"I'm in 🎒"` — background `#4648d4`, white text, hover `#6063ee`, `active:scale-95`
- **Input background**: `#ffffff` white
- **Input border**: same as login
- **Extra**: Info note box (`#e5eeff` background) about editor/viewer access, toast decoration (`3 friends just joined`)
- **Validation**: Password must match Confirm Password field

### Login vs Register — Key Differences

| Property | Login | Register |
|---|---|---|
| Heading text | `Hey, what's due today? 👀` | `Join AssignMate` |
| Heading color | `#121c28` dark slate | `#4648d4` indigo |
| Logo icon | `task_alt` | `school` |
| CTA label | `Jump in 🚀` | `I'm in 🎒` |
| Fields | Email + Password | Name + Email + Password + Confirm |
| Extra element | Google + LDAP SSO buttons | Info note about role access |
| Facepile copy | `Your group is waiting!` | `3 friends just joined` |
| Card style | Identical glassmorphic card | Identical glassmorphic card |
| Background | Identical lavender + glow blobs | Identical lavender + glow blobs |

---

## 8. Reusable Components

### 1. **NavigationBar**
- **Structure**: Sticky layout spanning the top of the viewport.
- **Elements**: Bold text logo ("AssignMate") on the left; notification bell (with dynamic red activity dot) and user profile picture on the right.
- **No nav links** — keeps the UI minimal and casual.

### 2. **GlassCard**
- **Structure**: Glassmorphic card — `rgba(255,255,255,0.7)`, `backdrop-filter: blur(12px)`, `border: 1px solid rgba(217,227,244,0.5)`, `border-radius: 24px`, padding `32px`.

### 3. **FormInput**
- **Structure**: Rounded inputs (`16px`) with a fixed height of `56px` (`h-14`).
- **Elements**: Left-aligned prefix icons (Material Symbols), white background `#ffffff`, smooth `#a6b5fd` border focus glow, `scale(1.02)` on focus.

### 4. **BouncyButton**
- **Structure**: `height: 56px`, `border-radius: 16px`, bouncy hover scale transition.
- **Primary variant**: `#4648d4` background, white text, hover `#6063ee`, `active:scale-95`.
- **SSO variant**: White background, `rgba(217,227,244,0.5)` border, gray text.

### 5. **TaskAccordionGroup**
- **Structure**: Collapsible subject panel (e.g. "MATH").
- **Elements**: Thick colored vertical line on the left, subject name in caps, chevron arrow on the right.

### 6. **TaskCard**
- **Structure**: Rectangular panel inside the accordion stack.
- **Elements**: Circular checkbox (left), assignment title + due date, status badges (OVERDUE / DUE TOMORROW), priority dot (right).

### 7. **PriorityBadge**
- **Structure**: Semi-transparent colored pill with emoji.
- **Variants**: `OVERDUE 😬` (red), `DUE TOMORROW ⚠️` (amber), no badge for normal.

### 8. **ToastNotification**
- **Structure**: Floating card anchored bottom-left, slides up on entry.
- **Elements**: Icon, description text, optional avatar facepile.

### 9. **NewTaskModal** *(Editor only)*
- **Structure**: Centered dialog over blurred backdrop.
- **Elements**: Subject dropdown, title input, due date picker, priority chips (chill 🟢 / soon 🟡 / urgent 🔴), extra details textarea, `"Post it 📌"` submit button.

### 10. **FAB Button** *(Editor only)*
- **Structure**: Floating `+ New Task` pill button, fixed bottom-right corner.
- **Style**: `#4648d4` background, white text + icon, fully rounded (`9999px`).
- **Viewers do not see this button** — it is the only UI difference between roles.

---

## 9. Icons Library

Icons are sourced from the **Material Symbols Outlined** collection.

| Icon | Used For |
|---|---|
| `task_alt` | Login page logo |
| `school` | Register page logo |
| `mail` | Email input prefix |
| `lock` | Password input prefix |
| `key` | Confirm password input prefix |
| `person` | Full name input prefix |
| `rocket_launch` | Login CTA button |
| `backpack` | Register CTA button |
| `groups` | LDAP login option |
| `notifications` | Navbar bell icon |
| `calendar_today` | Due date on task cards |
| `close` | Closing modals/drawers |
| `info` | Info/note boxes |
| `add` | FAB task button |
| `push_pin` | Post assignment button in modal |
| `sync` | Loading spinner on buttons |
| `arrow_forward` | Navigation links |

---

## 10. Decorative Elements

- **Background Glows (Blobs)** — used on all pages:
  - Top-left: `400px` radial circle, `#4648d4` at `5% opacity`, `blur: 100px`
  - Bottom-right: `500px` radial circle, `#a6b5fd` at `20% opacity`, `blur: 120px`
  - Both animate with slow vertical float every `6s`
- **Facepiles**:
  - Login: overlapping avatars + `+12` counter chip — `"Your group is waiting!"`
  - Register: small toast card with 3 avatars — `"3 friends just joined"`

---

## 11. Animations & Micro-interactions

1. **Floating Glow Blobs**: Subtle `translate-y` loop every `6s`.
2. **Bouncy Button Hover**: `hover:bg-[#6063ee]`, `active:scale-95`.
   - Transition: `transition-all`
3. **Input Focus Scale**: `focus-within:scale-[1.02]` on the input wrapper.
4. **Button Loading State**: Spinning `sync` icon + `"Hang tight..."` text while submitting.
5. **Toast Slide-in**: Bottom-left notification slides upward on entry.

---

## 12. Routes & Pages

| Page | Route | Component | Notes |
| :--- | :--- | :--- | :--- |
| **Login** | `/login` | `Login.jsx` | Default entry, redirected from `/` |
| **Register** | `/register` | `Register.jsx` | New user sign up |
| **Dashboard** | `/dashboard` | `Dashboard.jsx` | Main board, same UI for both roles |
| **Notification Drawer** | *(component)* | Inside Dashboard | Bell icon toggles slide-in drawer |
| **New Task Modal** | *(component)* | Inside Dashboard | FAB button triggers, Editor only |

---

## 13. Tailwind Configuration

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4648d4',
        'primary-container': '#6063ee',
        secondary: '#4b5a9c',
        'secondary-container': '#a6b5fd',
        'secondary-fixed': '#dde1ff',
        'secondary-fixed-dim': '#b8c4ff',
        'on-surface': '#121c28',
        'on-surface-variant': '#464554',
        outline: '#767586',
        'outline-variant': '#c7c4d7',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#eef4ff',
        'surface-container': '#e5eeff',
        'surface-container-high': '#dfe9fa',
        'surface-container-highest': '#d9e3f4',
        'surface-dim': '#d1dbec',
        'tertiary-fixed': '#ffdcc5',
        'tertiary-fixed-dim': '#ffb783',
        'on-tertiary-fixed': '#301400',
        error: '#ba1a1a',
        'error-container': '#ffdad6',
      },
      borderRadius: {
        'lg': '0.5rem',      // 8px
        'xl': '0.75rem',     // 12px
        '2xl': '1rem',       // 16px
        '3xl': '1.5rem',     // 24px
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      spacing: {
        'stack-sm': '0.5rem',
        'stack-md': '1rem',
        'stack-lg': '2rem',
        'container-padding-desktop': '2.5rem',
        'container-padding-mobile': '1.25rem',
      },
    },
  },
}
```
