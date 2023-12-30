import * as z from "zod";

export const signUpFormSchema = z.object({
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
  fullName: z
    .string()
    .regex(/^([A-Za-z]+|[\u0600-\u06FF]+)(?: ([A-Za-z]+|[\u0600-\u06FF]+))+$/, {
      message: `حتما باید نام و نام خانوادگی به صورت انگلیسی یا فارسی باشد`,
    }),
  email: z.string().email({
    message: `لطفا ایمیل خود را به صورت درست وارد نمایید`,
  }),
});

export const signInFormSchema = z.object({
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
