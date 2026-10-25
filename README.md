# Proof of Coffee

A responsive hackathon demo for reciprocal career mentorship: discover mentors, explain matches, create a Junior/Mentor/dual-role profile, and book simulated coffee chats.

## Run

Node.js 20 or later; no external packages or credentials required.

```sh
npm start
```

The server listens on port 3000 (override with `PORT`). `npm test` runs HTTP smoke tests.

## Demo scope

Matching uses transparent, deterministic topic and budget rules, not a live AI model. Wallet connection, mentor acceptance, and Solana payments are simulated; no blockchain transactions or video meetings are created. Profiles and bookings are stored only in browser localStorage. Avoid entering sensitive personal information. Mentor identities and experiences are fictional demo content.

Google Fonts is optional; system fonts are used if it is unavailable. Production work would require authentication, a database, calendar integration, real matching, payment verification, refunds, and mentor acceptance.
