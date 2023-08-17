import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  description: z.string().min(3).max(255),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
    }),
  age: z.number().min(18).max(100),
  registerNumber: z.string().min(3).max(255),
  fieldOfStudy: z.string().min(3).max(255),
  verified: z.boolean(),
  image: z.string().min(3).max(255),
  price: z.string().min(0),
  daysAvailable: z.array(z.string()),
  expertise: z.array(z.string()),
});

export const createClinicSchema = z.object({
  zipCode: z.string().min(3).max(255),
  state: z.string().min(3).max(255),
  city: z.string().min(3).max(255),
  street: z.string().min(3).max(255),
  number: z.string().min(1).max(6),
  neighborhood: z.string().min(3).max(255),
});

export const createTherapistSchema = createUserSchema.merge(createClinicSchema);

export type createTherapistSchemaType = z.infer<typeof createTherapistSchema>;
export type createUserSchemaType = z.infer<typeof createUserSchema>;
export type createClinicSchemaType = z.infer<typeof createClinicSchema>;
