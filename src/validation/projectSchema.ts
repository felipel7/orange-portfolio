import { z } from 'zod';

export type ProjectFormData = z.infer<typeof projectSchema>;

export const projectSchema = z.object({
  title: z
    .string()
    .min(5, 'Deve ter no mínimo 5 letras')
    .max(255, 'Deve ter no máximo 255 letras'),
  tags: z.array(z.string()),
  link: z.string().min(1, 'Não pode estar vazio'),
  description: z
    .string()
    .min(1, 'Não pode estar vazio')
    .max(2000, 'Deve ter no máximo 2000 caracteres'),
  imageProject: z.any(),
});
