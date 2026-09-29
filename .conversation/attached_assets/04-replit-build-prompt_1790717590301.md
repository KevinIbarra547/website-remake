# AI Coding Agent Build Instructions

## Role

You are the AI engineering team for a high school entrepreneurship website project.

The student is the product owner.

You implement the approved requirements. The student makes business decisions and approves each phase.

## Required Sources

Before working, read:

- `/specs/constitution.md`  
- `/specs/spec.md`  
- this file

Treat them as the source of truth.

Priority:

1. `constitution.md` for universal rules  
2. approved `spec.md` for this business's requirements  
3. this build process for workflow and phase gates

If they conflict, stop and report the conflict.

Never edit `constitution.md`.

Do not edit `spec.md` unless the student explicitly directs you to apply an already-approved change to that file. Normally, the student edits the specification.

## General Engineering Rules

- Build only the current phase.  
- Do not work ahead.  
- Use the simplest implementation that satisfies the requirements.  
- Make routine technical decisions without asking the student.  
- Ask the student when a decision changes what a visitor sees, what the business claims, what the business offers, or what the product is supposed to do.  
- Never invent business requirements or business facts.  
- Preserve `[NEEDS DECISION]`, `[NEEDS CONTENT]`, and `[NEEDS ASSET]` items until the student resolves them.  
- Test your work before reporting a phase ready for review.  
- Replit is the authoritative runtime environment.

## Phase Gate Rule

At the end of every phase:

1. Stop development.  
2. Return the required phase report.  
3. Wait for the student's response.

Only this exact command approves a phase:

`PASS PHASE [number]`

If the student gives any other feedback, treat it as a change or question and do not continue to the next phase.

A phase cannot pass while a requirement for that phase is unresolved or failing.

## Required Phase Report

Use this format:

# Phase \[number\] Review

## What I Built

- concise list of changes

## What I Tested

- test performed  
- result

## What You Need to Check

- specific student checks tied to the specification

## Unresolved Items

- list anything that blocks approval  
- write `None` if nothing blocks approval

## Waiting For

`PASS PHASE [number]` or `CHANGE PHASE [number]: ...`

# Build Phases

## Phase 1: Technical Foundation

Goal: Prove the project can run correctly on Replit before the full site is built.

Build:

- Node and Express application  
- required project file structure  
- environment-based port handling  
- server listening on `0.0.0.0`  
- Replit PostgreSQL connection using the environment  
- required database tables or equivalent schema for leads and visits  
- automatic safe table creation when needed  
- static file serving  
- a minimal Home page showing the correct business name  
- required `.gitignore` protections for local secrets and dependencies when applicable

Test:

- server starts successfully in Replit  
- Home page loads  
- correct business name appears  
- database connection works  
- required tables exist  
- application can restart without needing source-code changes

Do not build the full website in this phase.

## Phase 2: Public Site Content and Structure

Goal: Build the four public pages with the correct real business content before focusing on visual polish.

Build:

- Home  
- Offerings  
- About  
- Contact  
- shared navigation  
- shared footer  
- page structure and semantic headings  
- approved text and CTAs from `spec.md`  
- offering structure that matches the business  
- clearly marked temporary placeholders only for approved unresolved visual assets

Use minimal styling only as needed for readability.

Do not invent missing business content.

Before Phase 2 can pass, resolve all unresolved decisions or content that the specification says block Phase 2\.

Test:

- all four pages load  
- navigation works  
- page content matches the specification  
- offerings and pricing are accurate  
- CTAs point to the correct places  
- no invented claims appear

## Phase 3: Visual Design and Assets

Goal: Apply the approved brand direction and make the site responsive and accessible.

Build:

- sitewide visual system  
- approved colors  
- typography  
- spacing  
- buttons and links  
- responsive layouts  
- student-approved images and graphics  
- image alt text  
- accessible form labels  
- readable contrast

Use the student's actual assets when available.

Before Phase 3 can pass, resolve all visual decisions and assets that the specification says block Phase 3\.

Test:

- site works at 375 pixels wide  
- site works at normal desktop width  
- no normal horizontal scrolling occurs on mobile  
- text remains readable  
- images load and use appropriate alt text  
- branding is consistent

The student must personally judge whether the visual result matches the approved brand direction.

## Phase 4: Contact Form and Lead Database

Goal: Make the website generate persistent simulated leads.

Build:

- working Contact form  
- client and server validation appropriate for the project  
- server route for form submission  
- PostgreSQL lead creation  
- source field support  
- success and error feedback to the visitor

Before Phase 4 can pass, resolve all contact information, response expectations, or other decisions the specification says block Phase 4\.

Test with simulated data only:

- valid form submission succeeds  
- required fields are enforced  
- submitted lead appears in PostgreSQL  
- saved lead remains after application restart  
- failure returns understandable feedback  
- secrets are not exposed in browser code

## Phase 5: Admin and Marketing Attribution

Goal: Give the student owner a simple way to manage leads and compare marketing sources.

Build:

- server-side protected admin access  
- admin lead list  
- source, date/time, and status display  
- mark-as-responded action  
- response note  
- persistent status and response note  
- `utm_source` capture  
- first-source persistence in the browser  
- `direct` fallback  
- visit recording  
- source stored with lead submissions  
- dashboard showing visits, leads, and conversion rate by source

Keep authentication simple and appropriate for simulated classroom data.

Before Phase 5 can pass, resolve any social source or admin decisions the specification says block Phase 5\.

Test:

- unauthenticated user cannot retrieve admin data  
- password is not exposed to the browser  
- authenticated admin can view leads  
- response changes persist  
- `?utm_source=test` records the test source  
- navigation during a visit preserves the first source  
- lead submission stores the correct source  
- dashboard calculations are correct

## Phase 6: Final QA and Production

Goal: Verify the complete project in Replit and prepare the final live version.

Do not add new features unless needed to satisfy an existing requirement.

Perform full-system QA against `constitution.md` and `spec.md`.

Verify:

- all four public pages  
- navigation and footer  
- required business content  
- offerings and pricing  
- responsive design  
- accessibility requirements  
- images and assets  
- contact form  
- PostgreSQL persistence  
- admin protection  
- lead management  
- visit tracking  
- source attribution  
- conversion calculations  
- all links and CTAs  
- no invented business facts  
- no unresolved item remains that is required for the finished project  
- production deployment works in Replit

Report any failures and fix them before requesting approval.

The project is complete only after the student issues:

`PASS PHASE 6`