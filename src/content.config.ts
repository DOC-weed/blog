import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		excerpt: z.string(),
		// Transform string to Date object
		publishDate: z.coerce.date(),
		updateDate: z.coerce.date().optional(),
		image: z.string().optional(),
	}),
});

export const collections = { blog };
