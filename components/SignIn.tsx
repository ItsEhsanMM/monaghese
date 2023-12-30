"use client";

import { useState } from "react";
import { formSchema } from "@/lib/validation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

/**
 * Renders a sign-in form component.
 *
 * The component uses the `react-hook-form` library for form validation and submission.
 * The form has two fields: username and password.
 * When the form is submitted, the `onSubmit` function is called to handle the form submission.
 * The component also renders error and success messages based on the form submission status.
 *
 * @returns {JSX.Element} The sign-in form component.
 */
const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setErrors({});
    setServerError(null);
    setSuccessMessage("");

    try {
      // Make API call to submit form data
      // If there is an error, set the serverError state with the error message
      // Otherwise, handle successful form submission
      // TODO: make an api call to database in server by user ID
      console.log(values);
      setSuccessMessage("ورود با موفقیت انجام شد !");
    } catch (error: any) {
      setServerError(error || null);
    } finally {
      setIsSubmitting(false);
    }
  };

  // TODO: make sure to refactor the code and make it reusable for better performance
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-[60%] w-[95%] flex-col justify-evenly rounded-xl border bg-card px-8 py-9 text-color-secondary shadow-2xl sm:w-[50%]"
        >
          <div className="mb-4 flex flex-col items-center gap-1 text-black">
            <Image
              alt="oil company logo"
              src="/assets/icons/oil-company.png"
              width={64}
              height={64}
              className="mx-auto"
            />
            <span>شرکت ملی نفت ایران</span>
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="mb-2 flex flex-col">
                <FormLabel className="text-lg font-medium">
                  نام کاربری:
                </FormLabel>
                <FormControl>
                  <Input
                    spellCheck={false}
                    className="no-focus text-black"
                    placeholder="مثال: JohnDoe12"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{errors.username}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className=" flex flex-col">
                <FormLabel className="text-lg font-medium">رمز عبور:</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="no-focus text-black"
                    placeholder="مثال: JohnDoe@2001"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{errors.password}</FormMessage>
              </FormItem>
            )}
          />

          <div className="mb-2 mt-5 flex flex-col justify-evenly gap-5">
            <div className="group flex cursor-pointer justify-center  rounded-md bg-color-secondary text-card transition duration-500 ease-in-out active:bg-secondary-active md:hover:bg-secondary-hover">
              <Button
                type="submit"
                className="text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? "در حال ارسال..." : "ورود"}
              </Button>
              <Image
                alt="arrow left"
                width={16}
                height={16}
                className="hidden transition-all group-hover:-translate-x-3  md:block"
                src="/assets/icons/arrow-left.svg"
              />
            </div>
            <Link
              href="/auth/signup"
              className="group flex cursor-pointer items-center justify-center px-4 text-color-secondary"
            >
              <Image
                alt="arrow right"
                width={16}
                height={16}
                className="hidden transition-all group-hover:translate-x-3  md:block"
                src="/assets/icons/arrow-right.svg"
              />
              <Button className="text-base">ثبت نام</Button>
            </Link>
          </div>
        </form>
        {serverError && (
          <FormMessage className="text-red-500">{serverError}</FormMessage>
        )}

        {/* TODO: Create a Toast for Error and success messages */}
        {successMessage && (
          <div className="w-[95%] rounded bg-green-200 p-2 px-4 text-center text-success-800 sm:w-[50%]">
            {successMessage}
          </div>
        )}
      </Form>
    </div>
  );
};

export default SignIn;
