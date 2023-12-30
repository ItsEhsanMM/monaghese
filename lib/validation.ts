import * as z from "zod";

export const formSchema = z.object({
  username: z.string().min(5, {
    message: "نام کاربری حداقل باید پنج کاراکتر باشد",
  }),
  password: z
    .string()
    .min(8, { message: "رمز عبور حداقل باید از 8 کاراکتر برخوردار باشد." })
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).*$/, {
      message: `رمز عبور حتما باید شرایط زیر را برخوردار باشد:
       حداقل یک عدد،
       یک حرف کوچک،
       یک حرف بزرگ،
       و یک حرف غیر الفبا(@,...)
       `,
    }),
});
