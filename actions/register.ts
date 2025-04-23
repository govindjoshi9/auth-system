"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod"

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid Fields" }
    }
    return { success: "Email sent!" }
}