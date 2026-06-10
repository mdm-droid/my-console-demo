# Keystone Console — demo site

A static, front-end-only **demo** of an internet-banking operations console for bank
staff. It is built for hosting on GitHub Pages (or any static host) and contains **no
real authentication and no live banking systems**.

> This is a fictional, de-branded demo. "Keystone Console" is a made-up name used only
> for the mockup.

## What it does

1. **`index.html`** — a sign-in page that *pretends* to use a passkey. Clicking
   **"Sign in with a passkey"** shows a simulated device/biometric prompt, then
   automatically forwards to the dashboard. No credentials are checked or sent anywhere.
2. **`dashboard.html`** — the main console with three tiles:
   - **Administration** → `administration.html`
   - **User Management** → `user-management.html`
   - **Reporting** → `reporting.html`
3. The three feature pages show illustrative, fictional sample data relevant to a bank
   employee managing online/mobile banking.

## Files

```
index.html            Login (fake passkey)
dashboard.html        Three-tile console
administration.html   Feature toggles, security policy, branding
user-management.html  User directory, roles, entitlements
reporting.html        Adoption, volume, scheduled reports
assets/styles.css     Shared styling
assets/app.js         Simulated passkey flow
```

## Run locally

Just open `index.html` in a browser — everything is static. Or serve the folder:

```bash
# Python
python -m http.server 8080
# then visit http://localhost:8080
```

## Deploy to GitHub Pages

### Option A — user/organization site (`username.github.io`)

1. Create a repo named **`username.github.io`** (use your own GitHub username).
2. Copy these files into the repo root (keep the `assets/` folder).
3. Commit and push to the `main` branch.
4. Visit `https://username.github.io` — the login page loads automatically because
   GitHub Pages serves `index.html` by default.

### Option B — project site (any repo name)

1. Push these files to a repo (e.g. `console-demo`).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source = Deploy from a branch**, then choose
   **Branch = `main`** and **Folder = `/ (root)`**. Save.
4. After a minute the site publishes at
   `https://username.github.io/console-demo/`.

All links are relative, so both options work without changes.

## Notes

- The "passkey" is purely cosmetic — `assets/app.js` runs a short animation and then
  redirects with `window.location`. It never calls the WebAuthn API or any server.
- The pages contain no logos, labels, or references to any specific vendor product.
- Sample names, emails, and figures are fictitious.
