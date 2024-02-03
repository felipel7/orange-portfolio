import { z } from 'zod';

export type RegisterFormData = z.infer<typeof userSchema>;

export const userSchema = z.object({
  firstname: z
    .string()
    .min(3, 'Deve ter no mínimo 3 letras')
    .max(255, 'Deve ter no máximo 255 letras'),
  lastname: z
    .string()
    .min(3, 'Deve ter no mínimo 3 letras')
    .max(255, 'Deve ter no máximo 255 letras'),
  email: z
    .string()
    .min(1, 'Não pode estar vazio')
    .email('Deve ser um endereço de e-mail válido'),
  password: z.string().min(5, 'Deve ter no mínimo 5 letras'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const loginSchema = z.object({
  email: userSchema.shape.email,
  password: userSchema.shape.password,
});
