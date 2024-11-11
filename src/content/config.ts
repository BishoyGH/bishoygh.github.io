// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    language: z.enum(["en", "ar"]),
    order: z.number(),
  }),
});

const blogPostsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      language: z.enum(["en", "ar"]).default("en"),
      isDraft: z.boolean(),
      date: z.string().transform((str) => new Date(str)),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
      seo: z.object({
        title: z.string(),
        description: z.string(),
        keywords: z.array(z.string()),
        og: z.object({
          title: z.string(),
          description: z.string(),
          image: image(),
          url: z.string().url(),
        }),
        twitter: z.object({
          title: z.string(),
          description: z.string(),
          image: image(),
        }),
      }),
      canonicalUrl: z.string().url(),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  services: servicesCollection,
  blog: blogPostsCollection,
};
