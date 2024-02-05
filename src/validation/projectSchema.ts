import { z } from 'zod';

export type ProjectFormData = z.infer<typeof projectSchema>;

export const projectSchema = z.object({
  id: z.any().optional(),
  title: z
    .string()
    .min(5, 'Deve ter no mínimo 5 letras')
    .max(255, 'Deve ter no máximo 255 letras'),
  tags: z
    .array(z.string())
    .default([])
    .refine(i => i.length >= 1, {
      message: 'Precisa ter pelo menos uma tag',
    })
    .refine(i => i.length < 3, {
      message: 'Não pode ter mais de 2 tags',
    }),
  link: z.string().min(1, 'Não pode estar vazio'),
  description: z
    .string()
    .min(1, 'Não pode estar vazio')
    .max(2000, 'Deve ter no máximo 2000 caracteres'),
  imageProject: z.any(),
});
