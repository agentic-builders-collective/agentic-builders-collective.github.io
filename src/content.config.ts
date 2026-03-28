import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const people = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/data/people" }),
  schema: z.object({
    name: z.string(),
    interests: z.array(z.string()).default([]),
    linkedin: z.url().optional(),
    website: z.url().optional(),
    notes: z.string().optional(),
    updated: z.coerce.date().optional()
  })
});

const showcase = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/data/showcase" }),
  schema: z.object({
    name: z.string(),
    link: z.url(),
    about: z.string().optional(),
    by: z.string().optional(),
    image: z.string().optional(),
    updated: z.coerce.date().optional()
  })
});

const learning = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/data/learning" }),
  schema: z.object({
    title: z.string(),
    link: z.url(),
    platform: z.string().optional(),
    tags: z.array(z.string()).default([]),
    by: z.string().optional(),
    updated: z.coerce.date().optional()
  })
});

const connect = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/data/connect" }),
  schema: z.object({
    title: z.string(),
    startsAt: z.coerce.date(),
    endsAt: z.coerce.date().optional(),
    kind: z.enum(["meetup", "event"]).default("meetup"),
    venue: z.string().optional(),
    city: z.string().optional(),
    registrationUrl: z.url().optional(),
    speakers: z.array(z.string()).default([]),
    topics: z.array(z.string()).default([]),
    notes: z.string().optional(),
    status: z.enum(["planned", "completed", "cancelled"]).default("planned")
  })
});

export const collections = {
  people,
  showcase,
  learning,
  connect
};
