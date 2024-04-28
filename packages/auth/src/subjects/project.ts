import { z } from 'zod'

import { projectSchema } from '../models/project'

// Tuple => Quando basicamente temos um Array com 02 posições.
export const projectSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([z.literal('Project'), projectSchema]),
])

export type ProjectSubject = z.infer<typeof projectSubject>
