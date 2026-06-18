import { z } from 'zod'

const validDateInput = z.union([
  z.date(),
  z.string().refine(value => !Number.isNaN(new Date(value).getTime()), {
    message: 'Invalid date'
  })
])

const postImageSchema = z.object({
  alt: z.string(),
  url: z.string()
})

const postFrontmatterSchema = z.object({
  author: z.string().optional(),
  description: z.string(),
  image: postImageSchema.optional(),
  pubDate: validDateInput,
  tags: z.array(z.string()),
  title: z.string()
})

export { postFrontmatterSchema }
export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>
