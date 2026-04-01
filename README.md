# BROADCAST // Mr. Mystery

> **Digital Brutalism Artist Website Experience**
> 
> A next-generation artist website featuring immersive CRT effects, 3D cassette player, hidden Easter eggs, and GoHighLevel integration for fan engagement.

![Status](https://img.shields.io/badge/status-ready-brightgreen)
![Build](https://img.shields.io/badge/build-passing-success)

---

## 🎯 Quick Start

```bash
# Start development server
npm run dev

# Open browser
http://localhost:3000
```

---

## ✨ Features

### 🖥️ **SignalLanding** - CRT TV Intro
- Flickering white dot animation
- "[ TUNE IN ]" prompt
- Glitchy transition effect
- Grain texture overlay

### 📻 **RadioDialNav** - Floating Navigation
- Rotating radio dial
- Smooth scroll to sections
- Active section tracking

### 🎵 **TheTape** - 3D Cassette Player
- Interactive cassette with rotating reels
- Clickable tracklist
- 24/7 BROADCAST live stream teaser

### 📸 **TheVault** - Photo Gallery
- Polaroid-style photos
- Hidden Easter egg links  
- Handwritten corkboard tracklist

### 📡 **Transmit** - Email Capture
- Command center terminal aesthetic
- GHL webhook integration
- SMS automation triggers

### 🕶️ **Continental Mode** (Secret)
- 3-minute timer Easter egg
- Color inversion mode
- January 2026 countdown

---

## 🎨 Design System

**Color Palette**
- Background: `#000000`
- Transmission Green: `#00ff00`
- Grain Grey: `#1a1a1a`

**Typography**
- ALL CAPS headers
- Wide letter-spacing (0.3em)
- Monospace fonts (Courier New)
- Handwritten (Permanent Marker)

**Effects**
- 15fps grain texture animation
- CRT scanline overlays
- RGB glitch on text
- Cassette reel rotation

---

## 🔧 Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure GHL (Optional)
Create `.env.local`:
```env
NEXT_PUBLIC_GHL_WEBHOOK_URL=your_webhook_url_here
NEXT_PUBLIC_GHL_SMS_TRIGGER_URL=your_sms_webhook_url_here
```

### 3. Add Custom Assets

**Audio Files**
- `/public/audio/ambient.mp3` - Landing page ambient sound
- `/public/audio/tracks/*.mp3` - Track snippets

**Images**
- `/public/images/vault/*.jpg` - Behind-the-scenes photos
- `/public/images/favicon.ico` - Site favicon

**Easter Eggs**
Update unlisted YouTube URLs in `components/TheVault.tsx`

---

## 📁 Project Structure

```
Mr.Mystery/
├── app/
│   ├── globals.css         # Brutalist design system
│   ├── layout.tsx           # Metadata & SEO
│   └── page.tsx             # Main page logic
├── components/
│   ├── SignalLanding.tsx    # CRT landing
│   ├── RadioDialNav.tsx     # Navigation
│   ├── TheTape.tsx          # Cassette player
│   ├── TheVault.tsx         # Photo gallery
│   └── Transmit.tsx         # Email form
├── utils/
│   └── ghl-integration.ts   # GHL webhooks
└── public/
    ├── audio/               # Audio files
    └── images/              # Images
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Connect to GitHub and deploy
vercel
```

### Build for Production
```bash
npm run build
npm start
```

---

## 📚 Documentation

**Full Walkthrough**: See [`walkthrough.md`](file:///Users/on-set/.gemini/antigravity/brain/7ecfdc8e-0fdc-4a9e-87b8-2bb2db8916b3/walkthrough.md)

**GHL Integration**: See [`utils/ghl-integration.ts`](file:///Users/on-set/Local-Coding-Repo/Artist%20Website%20Folder/Mr.Mystery/utils/ghl-integration.ts)

**Tasks**: See [`task.md`](file:///Users/on-set/.gemini/antigravity/brain/7ecfdc8e-0fdc-4a9e-87b8-2bb2db8916b3/task.md)

---

## 🎶 Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **GoHighLevel** - CRM integration

---

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GHL_WEBHOOK_URL` | GHL contact webhook | Optional |
| `NEXT_PUBLIC_GHL_SMS_TRIGGER_URL` | GHL SMS automation | Optional |

---

## 🎯 Next Steps

1. ✅ **Test the site** - Open http://localhost:3000
2. 📸 **Add real photos** to `/public/images/vault/`
3. 🎵 **Add audio files** to `/public/audio/`
4. 🔗 **Update Easter egg links** in TheVault component
5. 🌐 **Configure GHL webhooks** with your credentials
6. 🚀 **Deploy to Vercel** or your hosting provider

---

## 📝 License

© 2026 Mr. Mystery. All transmissions encrypted.

---

## 💬 Credits

**Built by**: Antigravity AI  
**For**: Mr. Mystery // BROADCAST  
**Style**: Digital Brutalism 2026
