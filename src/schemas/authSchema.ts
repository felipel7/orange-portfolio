import { z } from 'zod';

export type SignUpFormData = z.infer<typeof signUpSchema>;

export const signUpSchema = z.object({
  firstName: z
    .string()
    .min(3, 'Deve ter no mínimo 3 letras')
    .max(255, 'Deve ter no máximo 255 letras'),
  lastName: z
    .string()
    .min(3, 'Deve ter no mínimo 3 letras')
    .max(255, 'Deve ter no máximo 255 letras'),
  email: z
    .string()
    .min(1, 'Não pode estar vazio')
    .email('Deve ser um endereço de e-mail válido'),
  password: z.string().min(5, 'Deve ter no mínimo 5 letras'),
});

export type SignInFormData = z.infer<typeof signInSchema>;

export const signInSchema = z.object({
  email: signUpSchema.shape.email,
  password: signUpSchema.shape.password,
});
