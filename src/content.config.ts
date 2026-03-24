import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const people = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/data/people" }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    organisation: z.string().optional(),
    location: z.string().optional(),
    topics: z.array(z.string()).default([]),
    availability: z
      .enum(["open to chat", "open to collaborate", "mentoring", "speaking"])
      .optional(),
    links: z
      .object({
        website: z.url().optional(),
        github: z.url().optional(),
        linkedin: z.url().optional(),
        x: z.url().optional(),
        bluesky: z.url().optional()
      })
      .partial()
      .optional(),
    bio: z.string().optional()
  })
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/data/resources" }),
  schema: z.object({
    title: z.string(),
    url: z.url(),
    kind: z
      .enum(["article", "guide", "repository", "tool", "video", "event", "other"])
      .default("other"),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
    addedBy: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

const shares = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/data/shares" }),
  schema: z.object({
    title: z.string(),
    sharedAt: z.coerce.date(),
    sharedBy: z.string().optional(),
    channel: z.string().optional(),
    resourceUrl: z.url().optional(),
    note: z.string().optional(),
    tags: z.array(z.string()).default([])
  })
});

const meetups = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/data/meetups" }),
  schema: z.object({
    title: z.string(),
    startsAt: z.coerce.date(),
    endsAt: z.coerce.date().optional(),
    status: z.enum(["planned", "completed", "cancelled"]).default("planned"),
    city: z.string().optional(),
    venue: z.string().optional(),
    hosts: z.array(z.string()).default([]),
    registrationUrl: z.url().optional(),
    notesUrl: z.url().optional(),
    summary: z.string().optional()
  })
});

const tips = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/tips" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    publishedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  people,
  resources,
  shares,
  meetups,
  tips
};
