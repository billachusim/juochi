# Chi's Shrine

Build a modern responsive web app called AskChi.

This app connects Igbo users to traditional doctors called Dibias.

Core concept

Users can chat with an AI assistant called Chi to discuss their problems.
Chi recommends suitable Dibias or users can browse and book a Dibia directly.



Pages to create

1. Landing Page

Sections:

Hero section with headline:
“Talk to Chi. Find the Right Dibia.”

Short explanation of how it works (3 steps)

Categories grid (8 categories)

Featured Dibias preview

CTA button: “Chat with Chi”



2. Chat Page (Chi Assistant)

Create a chat UI.

Assistant name: Chi

When user sends a message:

Simulate AI responses.

Ask 1–2 follow-up questions.

Based on keywords, recommend Dibias.

Keyword → Category mapping:

money/business → Business & Prosperity

love/marriage → Love & Relationships

bad luck/attack → Spiritual Cleansing or Protection

pregnancy/child → Fertility & Childbirth

dreams → Dream Interpretation

sickness/herbs → Healing Herbs

After response show:
Button → “View Recommended Dibias”



3. Browse Dibias Page

Grid layout of Dibia cards.

Filters:

Specialization dropdown

Price range

Free / Paid toggle



4. Dibia Profile Page

Show:

Name

Photo placeholder

Specializations

Bio

Services list

Price per session

Book Session button



5. Booking Page

Flow:

Choose service

Select date/time

Enter name + email

Fake payment confirmation

Show booking success page



Hardcode Dibia data

Create 6 Dibias with these fields:

name

specialization list

bio

price

rating

services

Use Nigerian Naira currency (₦).



Design style

Warm African aesthetic

Earth colors (brown, gold, beige)

Friendly and spiritual feel

Modern marketplace UI





From Demo to Real Marketplace

Your MVP already proves the concept:

* Browse Dibias ✔

* Chat with Chi ✔

* Book session ✔ (fake)

Now we make it real + scalable.

⸻

🧠 BIG PICTURE ARCHITECTURE

You now have 3 systems to add:

1️⃣ Real AI (Chi becomes smart)

2️⃣ Real payments (Paystack)

3️⃣ Dibia dashboard (supply side)

Think of it as:

User App → Backend → AI + Payments → Dibia Portal

⸻

1️⃣ REAL AI FOR CHI

Right now Chi is keyword-based.

We upgrade to LLM-powered spiritual concierge.

What Chi will actually do now

Chi becomes the front desk receptionist of the shrine 😄

Chi should:

* Ask deeper questions

* Understand Igbo + English

* Classify problem category

* Recommend Dibias intelligently

* Recommend services

* Upsell booking

⸻

🧠 AI SYSTEM DESIGN

We use:

* OpenAI / XAI / Claude API

* Simple RAG (knowledge base)

Knowledge base for Chi

We create a small dataset:

Categories knowledge

Explain what each Dibia speciality means.

This helps Chi sound authentic and culturally grounded.

⸻

🪶 Chi System Prompt

This is your backend prompt:

You are Chi, a warm and respectful Igbo spiritual assistant.

Your role is to understand users’ problems and guide them to the right Dibia.

You must:

* Ask clarifying questions

* Categorize the user problem into one or more specialties:

    Spiritual Cleansing, Love & Relationships, Business & Prosperity,

    Protection & Security, Fertility & Childbirth, Healing Herbs,

    Dream Interpretation, Ancestral Guidance.

* Recommend booking a Dibia session.

* Be respectful, culturally sensitive and never scary.

Tone:

Warm, wise, supportive, culturally grounded.

⸻

🧩 Backend endpoint

You will create:

POST /chat-with-chi

Input:

* user message

* chat history

Output:

* chi response

* detected category

* recommended dibias

This is EASY for you as a Python dev.

⸻

2️⃣ REAL PAYMENTS (Paystack)

Now we monetize 💰

Users must pay before booking.

Booking flow becomes:

User clicks “Book session”

→ choose date/time

→ Paystack popup

→ payment success webhook

→ booking saved

⸻

Database tables needed

Users

* id

* name

* email

Dibias

* id

* name

* bio

* specializations

* price

* rating

Bookings

* id

* user_id

* dibia_id

* date

* status

* payment_reference

Payments

* id

* booking_id

* amount

* status

* paystack_ref

⸻

Commission model

Example:

* Session price: ₦10,000

* Platform takes 25%

* Dibia gets ₦7,500

You hold funds → pay Dibias later.

⸻

3️⃣ DIBIA ONBOARDING DASHBOARD 🔥

This is where the real marketplace begins.

Dibias need to:

* Apply to join

* Create profile

* Add services

* See bookings

* Get paid

⸻

Dibia Signup Flow

Page: “Become a Dibia”

Collect:

* Name

* Phone

* WhatsApp

* Years of experience

* Specializations

* Bio

* Photo upload

Status:

* Pending approval

* Approved

* Rejected

Manual approval for safety.

⸻

Dibia Dashboard Pages

Dashboard Home

Show:

* Upcoming bookings

* Total earnings

* Completed sessions

Services Manager

Add/edit services:

* Service name

* Price

* Duration

* Description

Bookings Page

See bookings list.

⸻

⭐ IMPORTANT TRUST FEATURE

You are entering a spiritual/traditional space.

You MUST add:

* Reviews ⭐⭐⭐⭐⭐

* Verified badge

* “For cultural guidance only” disclaimer

This builds trust and avoids legal trouble.

⸻

🌍 VIRAL GROWTH FEATURES

These will make this blow up in Nigeria:

Share your Dibia result

After booking:

“Share your spiritual journey”

Users can share link:

askchi.app/your-reading

Organic growth 🔥

⸻

📈 NEXT BUILD PROMPT FOR LOVEABLE

Paste this into Loveable 👇

⸻

LOVEABLE PROMPT — PHASE 2

Upgrade the AskChi web app with real marketplace features.

Add the following pages and systems:

New Pages

1. Become a Dibia page

    Form fields:

* Name

* Phone

* WhatsApp

* Years of experience

* Specializations (multi select)

* Bio

* Photo upload

* Submit application

Show success message:

“Your application is under review.”

⸻

2. Dibia Dashboard (protected area)

Sections:

* Dashboard overview (earnings, bookings)

* My Services (add/edit service)

* Bookings list

* Profile settings

Use mock data for now.

⸻

3. Reviews System

    Users can leave:

* Star rating (1–5)

* Comment

Show reviews on Dibia profile page.

⸻

4. Booking Database Simulation

    Replace fake booking with:

* Booking object creation

* Booking confirmation page

⸻

5. Add Trust Section

    On landing page add:

* Disclaimer section

* Reviews/testimonials

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://juochi.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d517a9d4-71c1-4ea0-935b-11224b0931e2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
