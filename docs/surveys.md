# Event Surveys

This guide explains how to create and manage surveys for Agentic Builders Collective events using Google Forms + Sheets.

## Philosophy

We keep surveys simple and external:
- **Google Forms** for collection (free, familiar, mobile-friendly)
- **Google Sheets** for storage (automatic, shareable, exportable)
- **Manual curation** for display (maintainers export highlights to event YAML)

No database required. No complex integrations. Just forms, sheets, and YAML.

---

## Quick Start

### 1. Create a Survey

1. Go to [forms.new](https://forms.new)
2. Build your survey (see templates below)
3. Click **Responses** tab → **Link to Sheets**
4. Copy the **form URL** (not the sheet URL)
5. Paste into event frontmatter

### 2. Add to Event

Edit the event Markdown file:

```yaml
---
title: "#7 - Agentic Builders Meetup"
date: 2026-05-14
# ... other fields ...

preEventSurvey:
  url: https://forms.gle/your-pre-event-link
  closesAt: 2026-05-10

postEventSurvey:
  url: https://forms.gle/your-post-event-link
  opensAt: 2026-05-14
  qrEnabled: true
---
```

### 3. Export Results (After Event)

1. Open linked Google Sheet
2. Review responses
3. Calculate average rating
4. Pick 2-3 highlight quotes
5. Update event YAML:

```yaml
feedback:
  rating: 4.5        # Average rating (0-5)
  responses: 42      # Total responses
  highlights:
    - "Great demos and networking"
    - "Loved the hands-on workshop format"
```

---

## Survey Types

### Pre-Event Survey

**Purpose:** Gather topic suggestions, speaker requests, and attendance info before the event.

**When to enable:** 1-2 weeks before event

**Suggested questions:**
1. What topics would you like to see covered? (short answer)
2. Any speaker suggestions? (short answer)
3. What's your experience level with AI coding tools? (multiple choice)
   - Beginner
   - Intermediate  
   - Advanced
4. Dietary restrictions? (for catered events)

**Frontmatter:**
```yaml
preEventSurvey:
  url: https://forms.gle/example
  closesAt: 2026-05-10  # Survey closes this date
```

---

### Post-Event Survey

**Purpose:** Collect feedback, ratings, and testimonials after the event.

**When to enable:** Day of event through 1 week after

**Suggested questions:**
1. Overall rating (1-5 scale)
2. What did you like most? (short answer)
3. What could be improved? (short answer)
4. Which sessions were most valuable? (checkboxes)
5. Would you attend again? (Yes/Maybe/No)
6. Any other comments? (paragraph)

**Frontmatter:**
```yaml
postEventSurvey:
  url: https://forms.gle/example
  opensAt: 2026-05-14      # Survey opens this date
  qrEnabled: true          # Show QR code on event page
```

---

## QR Codes

When `qrEnabled: true`, the event page will:
1. Display a QR code linking to the post-event survey
2. Show prominently during and after the event
3. Make it easy for attendees to scan and give feedback

**How to use at events:**
- Display on projector/TV during closing remarks
- Include in slides: "Scan to share feedback"
- Add to physical signage near exit

---

## Google Forms Tips

### Make Forms Mobile-Friendly
- Keep questions short
- Use multiple choice where possible
- Limit to 5-7 questions max
- Enable "Collect email addresses" if you want to follow up

### Organize Responses

In Google Sheets:
1. Create a new tab called "Summary"
2. Use `=AVERAGE()` for rating calculations
3. Use `=COUNTA()` for response counts
4. Copy standout quotes manually

### Share Access

1. Click **Share** on Google Sheet
2. Add organizers with "Editor" access
3. Or set to "Anyone with link can view" for transparency

---

## Example: Complete Event with Surveys

```md
---
title: "#7 - ABC at Example Labs"
date: 2026-05-14
kind: meetup
time: 7:00 PM - 9:00 PM SGT
venue: Example Labs
venueUrl: https://example.com/location
registrationUrl: https://luma.com/abc-7
attendance: 65
speakers:
  - Jane Doe
  - John Smith
hosts:
  - YJ Soon
  - Jensen
tags:
  - meetup
  - agents
  - claude-code
status: past

# Pre-event: Collect topic suggestions
preEventSurvey:
  url: https://forms.gle/abc-pre-event
  closesAt: 2026-05-10

# Post-event: Collect feedback via QR code
postEventSurvey:
  url: https://forms.gle/abc-post-event
  opensAt: 2026-05-14
  qrEnabled: true

# Manually updated after reviewing responses
feedback:
  rating: 4.6
  responses: 38
  highlights:
    - "Claude Code demo was mind-blowing"
    - "Great venue and networking"
    - "Would love more hands-on sessions"
---

Evening meetup at Example Labs featuring demos of agentic coding workflows.
```

---

## Workflow Summary

| Phase | Action | Tool |
|-------|--------|------|
| **2 weeks before** | Create pre-event form | Google Forms |
| **1 week before** | Add form URL to event YAML | GitHub PR |
| **During event** | Display QR code for feedback | Event page |
| **1 day after** | Review responses in Sheets | Google Sheets |
| **2 days after** | Export highlights to YAML | GitHub PR |

---

## Questions?

Ask in the WhatsApp chat or open an issue. Remember: keep it simple, use what you know, and let the AI help if you get stuck!
