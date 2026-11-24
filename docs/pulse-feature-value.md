# Pulse feature value

## Executive summary

Pulse is a focused survey-to-decision tool. It helps a business ask a small group of customers, users, event attendees, or employees a few targeted questions, collect answers through one shareable link, and turn the responses into a clear next move.

The primary value is not simply creating a questionnaire. Pulse reduces the work between **“We are unsure about something”** and **“We have enough evidence to decide what to do next.”**

## What the feature does

Pulse provides a three-step workflow:

1. **Write:** The user describes what they want to find out in one sentence, chooses a starter template, or starts blank. The assistant can draft the title, description, and questions. It can also review the draft and suggest one-tap improvements. Drafts autosave.
2. **Share:** The user publishes the pulse and gets one link that can be copied, emailed, sent by SMS, or shown as a QR code. They can choose whether answers are anonymous or include a respondent’s name and email, and can stop collection manually, on a date, or after a response count.
3. **Results:** Answers are presented as decision-ready results rather than only a raw response list. Pulse shows counts, ratings, averages, distributions, themes, and representative text answers. After enough answers are collected, the assistant writes a summary and recommends a next move.

Respondents do not need an account. The public answering flow presents one question at a time, supports common question types, shows progress, works on phones and computers, and can conditionally show follow-up questions based on earlier answers.

## Why a user would need it

Many small teams need customer or team input but do not have the time, research expertise, or volume of data to run a formal research project. Their recurring problem is usually one of these:

- “Are our clients happy enough to renew?”
- “What should we change about the next event?”
- “Would people use or pay for this idea?”
- “What is getting in the team’s way this month?”
- “Which option should we choose, and why?”

Pulse gives them a lightweight way to replace assumptions with direct evidence. It is especially useful when the decision is important enough to ask other people about, but too immediate or too small to justify a large research process.

## How it makes the job easier

### 1. It removes the blank-page problem

The user can start with an intent instead of designing a survey from scratch. A sentence such as “Find out whether our clients are happy and likely to renew” can become a usable first draft. Templates cover client check-ins, event feedback, idea validation, and team health.

### 2. It improves question quality

The assistant reviews the draft after editing settles and can suggest changes such as adding a “Not sure” option or removing a weak question. This helps a non-researcher produce clearer, more answerable questions without needing to know survey design principles.

### 3. It lowers response friction

One link is easy to send. Respondents can answer without signing in, and the one-question-at-a-time flow is designed for quick completion on a phone. The owner can choose anonymous responses when candor matters or collect identity when follow-up matters.

### 4. It prevents the survey from becoming an open-ended project

The owner can define when the pulse closes: manually, on a date, or after a selected number of answers. This creates a natural stopping point and keeps the activity focused.

### 5. It turns raw feedback into a decision aid

The Results view combines quantitative signals—ratings, averages, counts, and distributions—with qualitative evidence such as themes and representative quotes. The owner does not have to manually read every answer before understanding the main pattern.

### 6. It connects insight to action

The assistant’s next move can be turned into a task or used to draft an email. The user can also ask for another idea. This helps prevent the common failure mode where feedback is collected, understood, and then forgotten.

## Who benefits most

- **Small-business owners and consultants:** Validate client satisfaction, renewal risk, or a new service without running a full research program.
- **Customer-success and account teams:** Run structured check-ins and identify people or themes that need follow-up.
- **Event and community organizers:** Learn what worked and what to change while the experience is still fresh.
- **Product and marketing teams:** Test an idea, message, feature, or price before investing heavily.
- **Team leads:** Take a recurring team pulse and surface blockers or morale issues with an option for anonymous feedback.

## Product positioning

Pulse is best positioned as **a lightweight decision-feedback loop**, not as a general-purpose enterprise survey platform.

Its differentiator is the combination of:

> focused questions + low-friction sharing + assistant-generated interpretation + a suggested next action

Traditional form tools are good at collecting data. Pulse is designed to help a busy person decide what to ask, get answers quickly, understand what they mean, and do something with them.

## Evidence in the code

The feature description above is based on the implemented web app:

- `src/app/features/pulse/new/new-pulse.component.ts` — assistant-generated drafts, templates, and blank starts.
- `src/app/features/pulse/write/write-step.component.ts` — autosave, question editing, and assistant review suggestions.
- `src/app/features/pulse/share/share-step.component.ts` — publishing, link sharing, QR code generation, identity choice, and close rules.
- `src/app/features/take-survey/take-survey.component.ts` — public no-account response flow, one-question navigation, progress, branching, and identity collection.
- `src/app/features/pulse/results/results-step.component.ts` — results, themes, quotes, CSV export, summaries, next moves, email drafts, and tasks.
- `src/app/models/survey.model.ts` — supported question types, branching, response settings, result structures, and assistant insights.
- `src/app/features/pulse/pulse-templates.ts` — client check-in, event feedback, idea check, and team pulse starters.

## Important expectation to set

Pulse is most valuable when the user has a specific decision or uncertainty in mind. Pulse is most valuable when the user has a specific decision or uncertainty in mind. Its promise is speed and clarity for focused, practical questions.
