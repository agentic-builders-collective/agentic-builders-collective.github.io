import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const people = defineCollection({
  loader: file("src/content/people/people.yaml"),
  schema: z.object({
    id: z.string().optional().default(""),
    name: z.string(),
    aliases: z.array(z.string()).default([]),
    tagline: z.string().optional().default(""),
    company: z.string().optional().default(""),
    linkedin: z.string().optional().default(""),
    github: z.string().optional().default(""),
    featured: z.boolean().default(false),
  }),
});

const organisers = defineCollection({
  loader: file("src/content/organisers/organisers.yaml"),
  schema: z.object({
    id: z.string().optional().default(""),
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

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional().default(""),
    summary: z.string().optional().default(""),
    tags: z.array(z.string()).default([]),
  }),
});

const showcase = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/showcase" }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional().default(""),
    url: z.string().optional().default(""),
    github: z.string().optional().default(""),
    screenshot: z.string().optional().default(""),
    builtWith: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    summary: z.string().optional().default(""),
    date: z.coerce.date(),
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
    speakers: z.array(z.string()).default([]),
    hosts: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    status: z.enum(["upcoming", "past"]).default("past"),
    preEventSurvey: z.object({
      url: z.string().optional().default(""),
      closesAt: z.coerce.date().optional(),
      qrEnabled: z.boolean().optional().default(false),
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

const resources = defineCollection({
  loader: file("src/content/resources/resources.yaml"),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    category: z.string(),
    contributor: z.string().optional().default(""),
    date: z.coerce.date(),
    description: z.string().optional().default(""),
  }),
});

const articles = defineCollection({
  loader: file("src/content/articles/articles.yaml"),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    url: z.string(),
    publication: z.string().optional().default(""),
    date: z.coerce.date(),
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
  people,
  organisers,
  sponsors,
  blog,
  showcase,
  events,
  resources,
  articles,
  faq,
};
