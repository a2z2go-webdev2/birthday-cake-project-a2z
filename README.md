# 🎂 A2Z2GO CEO Ms. Mary Birthday Surprise & Chaos Prank

An authentic recreation of the official **A2Z2GO** e-commerce website with an escalating "bug / chaos prank" that crashes into an emergency diagnostics terminal before revealing an interactive birthday celebration for CEO **Ms. Mary**!

---

## 🌟 Features

1. **100% Authentic A2Z2GO Storefront**:
   - Matches the real `a2z2go.com` layout, logo, header, search bar, navigation, and trust badges.
   - Exact Payday Sale banner (`PIE2_qjsz.jpg` Sept 29 – Oct 3, 2026).
   - Real product catalog with authentic prices in Philippine Pesos (₱).

2. **The Chaos Prank Progression**:
   - **Step 1 — The Hook**: An authentic "⚠️ CEO Action Required: Order Sign-Off" modal requesting Ms. Mary's authorization.
   - **Step 2 — Auto Search**: System automatically types `birthday cake delivery for Ms. Mary` into the search bar.
   - **Step 3 — System Glitch**: Results return `CAKE_NOT_FOUND`. Prices corrupt into `₱PRICELESS`, `₱NaN`, `₱9,999,999`. Product cards float and shake chaotically. Cart count spirals to `∞`. Buttons turn red with `PANIC!!` and `HELP!!`. Glitch bars and CRT scanlines flicker.
   - **Step 4 — Blue Screen / Diagnostic Terminal**: `A2Z2GO.EXE has stopped working :(`. Emergency terminal analyzes inventory (OK), gateways (OK), and scans calendar:
     `!! CRITICAL ANOMALY: TODAY IS MS. MARY'S BIRTHDAY! <<`
     `Verdict: THIS IS NOT A BUG. IT'S A FEATURE! Initiating Celebration Protocol...`

3. **The Grand Celebration Reveal**:
   - Screen flash and 60fps canvas confetti explosion.
   - Colorful balloons floating up.
   - Synthesized Web Audio sound effects (horns, cheer, and synth Happy Birthday melody — 0 external audio files needed!).
   - **Interactive 3D Layered Birthday Cake**: Flickering candles that Ms. Mary can blow out with one click (smoke puffs, cheer sound, wish confirmation).
   - **Heartfelt Tribute Letter**: Dedicated to Ms. Mary from the A2Z2GO Family.
   - **Limited Edition 1-of-1 Collectible**: "CEO Ms. Mary — Legendary Edition" (Rating: ★★★★★★, Price: ₱PRICELESS).
   - Sound toggle (`🔊 / 🔇`), Replay button, and `ESC` shortcut to skip straight to the surprise at any time.

---

## 🚀 How to Preview Locally

To preview in your browser right now:

```powershell
npx serve . -l 3000
```
Then open `http://localhost:3000` in your browser.

---

## ☁️ How to Deploy to Vercel (Choose Option A or B)

### Option A: 1-Click via Vercel CLI (Fastest — 1 Minute)

Run inside this project directory:

```powershell
npx vercel
```

- When asked `Set up and deploy?`, press **Y**.
- Which scope? Press **Enter**.
- Link to existing project? Type **N**.
- Project name? Press **Enter** (e.g., `a2z2go-ceo-surprise`).
- In which directory is your code located? Press **Enter** (`./`).
- Want to modify settings? Type **N**.

To deploy straight to production URL:
```powershell
npx vercel --prod
```
Vercel will output your live URL (e.g. `https://a2z2go-ceo-surprise.vercel.app`)!

---

### Option B: Deploy via GitHub + Vercel Dashboard

1. Initialize git and commit:
   ```powershell
   git init
   git add .
   git commit -m "feat: A2Z2GO CEO Ms. Mary birthday surprise website"
   ```
2. Push to your GitHub repository.
3. In [vercel.com](https://vercel.com/new), click **Import Repository**, choose your repo, and click **Deploy**!

---

## ⚙️ URL Customization (Optional)

You can customize parameters directly via the URL:
- `?name=Ms.%20Mary` — Change the CEO name
- `?from=Your%20Dev%20Team` — Change the sign-off team name
