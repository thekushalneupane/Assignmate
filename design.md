# AssignMate Design System & Specification

This document details the complete design tokens, aesthetic principles, reusable components, and configuration guides for **AssignMate** based on the Figma designs.

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
| **Primary (Indigo)** | `#4648d4` | Active states, brand logo, text highlights, focus rings |
| **Primary Container** | `#6063ee` | High-contrast fills, active selection icons, header cards |
| **Secondary (Muted Blue)** | `#4b5a9c` | Muted button fills, secondary headers |
| **Secondary Container (Light Blue/Lavender)**| `#a6b5fd` | Default buttons (e.g., "Jump in"), active tabs background |
| **Secondary Fixed (Soft Blue)** | `#dde1ff` | Form input borders, default card outlines |
| **Background (Warm Lavender-White)** | `#f8f9ff` | Core canvas background |

### Neutral Colors
| Token Name | Hex Code | Visual Use Case |
| :--- | :--- | :--- |
| **On-Surface (Deep Slate)** | `#121c28` | Main headings, primary body text, dark buttons text |
| **On-Surface-Variant (Muted Slate)** | `#464554` | Subtitles, description labels, secondary details |
| **Outline (Slate Gray)** | `#767586` | Standard borders, divider lines, prefix icons |
| **Outline Variant (Muted Gray)** | `#c7c4d7` | Input placeholders, inactive borders |
| **Surface-Container-Lowest (Pure White)** | `#ffffff` | Input field fills, main task card backgrounds |
| **Surface-Container-Low (Light Gray-Blue)** | `#eef4ff` | Social button backgrounds, dropdown card lists |
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
- **Medium Containers (Inputs, Action Buttons)**: `12px` to `16px` (`0.75rem` to `1rem`) corner radius.
- **Small Elements (Pill Badges, Tags)**: Fully rounded (`9999px`) or `8px` (`0.5rem`).
- **Avatars**: Circular (`50%` / `rounded-full`).

---

## 6. Shadows & Glassmorphism

- **Standard Elevation (Task Cards)**:
  - Subtle, Indigo-tinted shadow to ground elements:
    `box-shadow: 0px 4px 20px rgba(99, 102, 241, 0.08);`
- **Glassmorphism (Login/Register Cards & Modals)**:
  - Translucent white fills layered over background accents:
    `background: rgba(255, 255, 255, 0.7);`
    `backdrop-filter: blur(12px);`
  - Subtle bordering to define container edges:
    `border: 1px solid rgba(217, 227, 244, 0.5);`

---

## 7. Reusable Components

### 1. **NavigationBar**
- **Structure**: Sticky layout spanning the top of the viewport.
- **Elements**: Bold text logo ("AssignMate") on the left; notification bell (with dynamic red activity dot) and user profile picture on the right.

### 2. **GlassCard**
- **Structure**: Glassmorphic styling containing authentication forms, modals, or page summaries.

### 3. **FormInput**
- **Structure**: Rounded inputs (`16px`) with a fixed height of `56px` (`h-14`).
- **Elements**: Includes left-aligned prefix icons (Material Symbols) and a smooth blue border focus glow.

### 4. **BouncyButton**
- **Structure**: Substantial buttons (`h-14`) with a bouncy hover scale transition.
- **Variants**:
  - *Primary*: Indigo/Lavender background with high-contrast text.
  - *SSO Button*: White background, gray border, including Google/LDAP branding icons.

### 5. **TaskAccordion Group**
- **Structure**: Collapsible subject panel (e.g. "MATH").
- **Elements**: 
  - Thick, colored vertical line indicator on the left side.
  - Chevron arrow on the right side indicating collapse state.
  - Active hover tint over the header block.

### 6. **TaskCard**
- **Structure**: Rectangular panel sitting inside the accordion stack.
- **Elements**:
  - Circular checkbox on the far left.
  - Task Title and Due Date metadata (calendar icon + text).
  - Status/Due Pill tags (e.g. "OVERDUE 😬" or "DUE TOMORROW ⚠️").
  - Small circular priority dot on the far right (Red: Urgent, Orange: Soon, Green: Chill).

### 7. **PriorityBadge**
- **Structure**: Semi-transparent colored pills with custom emojis.
- **Examples**: `OVERDUE 😬` (Red themed), `DUE TOMORROW ⚠️` (Orange themed).

### 8. **ToastNotification**
- **Structure**: Floating alert anchored at the bottom-left corner of the screen.
- **Elements**: Left icon, description string, close button, and optional overlapping avatar facepiles.

### 9. **NewTaskModal**
- **Structure**: Centered dialog card over a dark blurred backdrop blur.
- **Elements**: Subject dropdown picker, title inputs, date picker, priority tag selector (Radio styles), text area, and closing `x` icon.

---

## 8. Icons Library

Icons are sourced from the **Material Symbols Outlined** collection.

**Key Icons Used:**
- `task_alt`: Main brand logo mark.
- `alternate_email`: Email input fields.
- `lock` / `vpn_key`: Password inputs.
- `rocket_launch`: Authentication call-to-action button.
- `groups`: LDAP/Group login option.
- `arrow_forward`: Next page anchors.
- `notifications`: Top navigation header.
- `calendar_today` / `calendar_month`: Due dates indicators.
- `close`: Closing modals and drawers.
- `priority_high` / `info`: Warnings and notes.
- `add`: FAB task additions.
- `push_pin`: Task posting.

---

## 9. Decorative Elements

- **Background Glows (Blobs)**:
  - Top-left glow: `400px` radial blob, `bg-primary/5`, `blur-[100px]`.
  - Bottom-right glow: `500px` radial blob, `bg-secondary-container/20`, `blur-[120px]`.
- **Facepiles**:
  - Overlapping avatars with `border-4 border-white` and a subtle shadow.
  - Final avatar displaying a counter chip (e.g., `+12`) to signify user groups.

---

## 10. Animations & Micro-interactions

1. **Floating Glow Blobs**: Subtle vertical translation (`translate-y`) looping every `6s` to simulate a live, breathing space.
2. **Bouncy Hovers**: Buttons scale down slightly when active/pressed, and lift when hovered:
   - `transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);`
   - Active state: `scale-95` / `scale-98`
3. **Form Focus**: Inputs expand by a scale of `1.02` when focused, transitioning back smoothly on blur.
4. **Button Ripple**: Simple ripple-burst or ping animation on button click.
5. **Toast Slide-in**: Bottom-left notification slides upward on entry.

---

## 11. Page & Route Suggestions

| Page Title | Route Path | Component Description |
| :--- | :--- | :--- |
| **Login** | `/login` | Authentication form, SSO credentials, and active group facepiles. |
| **Register / Join** | `/register` | Sign-up fields, access warning note box, and friend notification toast. |
| **Dashboard** | `/` or `/dashboard` | Main student task overview with accordions, priority indicators, and FAB. |
| **Notification popover** | *(Drawer component)* | Floating notifications drawer toggleable from the navbar bell. |
| **New Task Dialog** | *(Modal component)* | Form overlay for creating new tasks. |

---

## 12. Tailwind Configuration Suggestions

Add the following tokens to your `tailwind.config.js` to ensure styling is accurate:

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
