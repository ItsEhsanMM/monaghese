import * as z from "zod";

export const signUpFormSchema = z.object({
  username: z.string().regex(/^[a-zA-Z]{5,}$/, {
    message: `نام کاربری حداقل باید 5 حرف و انگلیسی باشد`,
  }),
  password: z
    .string()
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/, {
      message: `رمز عبور حتما باید از این شرایط برخوردار باشد:
      حداقل 8 حرف،
      بدون هیچ گونه فاصله،
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
  username: z.string().regex(/^[a-zA-Z]{5,}$/, {
    message: `نام کاربری حداقل باید 5 حرف و انگلیسی باشد`,
  }),
  password: z
    .string()
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/, {
      message: `رمز عبور حتما باید از این شرایط برخوردار باشد:
      حداقل 8 حرف،
      بدون هیچ گونه فاصله،
       حداقل یک عدد،
       یک حرف کوچک،
       یک حرف بزرگ،
       و یک حرف غیر الفبا(@,...)
       `,
    }),
});
