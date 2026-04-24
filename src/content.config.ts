import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const kebabCaseId = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const optionalUrl = z.union([z.url(), z.literal("")]).optional().default("");
const optionalUrlOrPath = z.union([
  z.url(),
  z.string().regex(/^\/[^\s]*$/, "Use a site-relative path starting with /"),
  z.literal(""),
]).optional().default("");
const personRef = z.object({
  personId: kebabCaseId.optional(),
  name: z.string().optional(),
}).refine((ref) => ref.personId || ref.name, {
  message: "Expected a personId for linked people or a name for unlinked people.",
});
const personRefs = z.array(personRef).default([]);
const legacyPersonRefs = z.array(z.union([z.string(), personRef])).default([]);

const members = defineCollection({
  loader: file("src/content/members/members.yaml"),
  schema: z.object({
    id: kebabCaseId,
    name: z.string(),
    aliases: z.array(z.string()).default([]),
    tagline: z.string().optional().default(""),
    company: z.string().optional().default(""),
    website: optionalUrl,
    linkedin: optionalUrl,
    github: optionalUrl,
    addedAt: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

const organisers = defineCollection({
  loader: file("src/content/organisers/organisers.yaml"),
  schema: z.object({
    id: kebabCaseId,
    name: z.string(),
    aliases: z.array(z.string()).default([]),
    role: z.string(),
    company: z.string().optional().default(""),
    companyUrl: z.string().optional().default(""),
    tagline: z.string().optional().default(""),
    linkedin: z.string().optional().default(""),
    github: z.string().optional().default(""),
    website: z.string().optional().default(""),
    email: z.string().optional().default(""),
    photo: z.string().optional().default(""),
  }),
});

const sponsors = defineCollection({
  loader: file("src/content/sponsors/sponsors.yaml"),
  schema: z.object({
    name: z.string(),
    logo: z.string().optional().default(""),
    url: z.string().optional().default(""),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    makers: personRefs,
    url: optionalUrl,
    github: optionalUrl,
    screenshot: z.string().optional().default(""),
    builtWith: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    summary: z.string().optional().default(""),
    date: z.coerce.date(),
  }),
});

const presentations = defineCollection({
  loader: file("src/content/presentations/presentations.yaml"),
  schema: z.object({
    id: kebabCaseId,
    title: z.string(),
    speakers: personRefs,
    eventId: kebabCaseId,
    url: optionalUrlOrPath,
    slidesUrl: optionalUrlOrPath,
    videoUrl: optionalUrlOrPath,
    screenshot: z.string().optional().default(""),
    summary: z.string().optional().default(""),
    links: z.array(z.object({
      label: z.string(),
      url: z.union([z.url(), z.string().regex(/^\/[^\s]*$/)]),
    })).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(["meetup", "learning"]).default("meetup"),
    time: z.string().optional().default(""),
    venue: z.string().optional().default(""),
    venueUrl: z.string().optional().default(""),
    sponsorName: z.string().optional().default(""),
    sponsorUrl: z.string().optional().default(""),
    registrationUrl: z.string().optional().default(""),
    attendance: z.number().optional().default(0),
    speakers: legacyPersonRefs,
    hosts: legacyPersonRefs,
    tags: z.array(z.string()).default([]),
    status: z.enum(["upcoming", "past"]).default("past"),
    preEventSurvey: z.object({
      url: z.string().optional().default(""),
      closesAt: z.coerce.date().optional(),
      closesAtPlacement: z.enum(["inside", "outside"]).default("inside"),
      closesAtLabel: z.string().optional().default(""),
      qrEnabled: z.boolean().optional().default(false),
      qrOpensAt: z.coerce.date().optional(),
      feedbackEnabled: z.boolean().optional().default(false),
      takeSurveyLabel: z.string().optional().default("Take survey"),
      qrToggleLabel: z.string().optional().default("Show survey QR"),
      feedbackToggleLabel: z.string().optional().default("Show survey results"),
      qrSectionTitle: z.string().optional().default("Share your feedback"),
      feedbackSectionTitle: z.string().optional().default("Survey results"),
      qrHintText: z.string().optional().default("Scan to share your suggestions"),
    }).optional(),
    postEventSurvey: z.object({
      url: z.string().optional().default(""),
      opensAt: z.coerce.date().optional(),
      qrEnabled: z.boolean().optional().default(false),
    }).optional(),
    feedback: z.object({
      rating: z.number().min(0).max(5).optional(),
      responses: z.number().optional().default(0),
      highlights: z.array(z.string()).default([]),
    }).optional(),
  }),
});

const articles = defineCollection({
  loader: file("src/content/articles/articles.yaml"),
  schema: z.object({
    id: kebabCaseId,
    title: z.string(),
    authors: personRefs,
    url: z.url(),
    publication: z.string().optional().default(""),
    date: z.coerce.date(),
    summary: z.string().optional().default(""),
    tags: z.array(z.string()).default([]),
  }),
});

const faq = defineCollection({
  loader: file("src/content/faq/faq.yaml"),
  schema: z.object({
    id: z.string(),
    order: z.number().int().positive(),
    question: z.string(),
    answer: z.string(),
  }),
});

export const collections = {
  members,
  organisers,
  sponsors,
  projects,
  presentations,
  events,
  articles,
  faq,
};
