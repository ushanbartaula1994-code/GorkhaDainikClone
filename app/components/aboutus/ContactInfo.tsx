"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContactSchema, ContactFormData } from "@/app/lib/contact.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactInfo() {
  const { lang } = useLanguage();
  const schema = createContactSchema(lang);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormData) {
    console.log(data);
  }

  const inputClass =
    "w-full px-[14px] py-[10px] border border-[#0000001A] rounded-[6px] font-nep font-normal text-[16px] leading-[100%] text-[#111110] placeholder:text-[#757575] outline-none focus:border-[#C01C28] transition-colors bg-white h-[43px]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-[22px] w-full"
    >
      <div className="flex items-center gap-2 pb-[14px] border-b-2 border-[#111110]">
        <span className="w-[3px] self-stretch bg-[#C01C28] rounded-full" />
        <h2 className="font-nep font-bold text-[17px] md:text-[17.6px] leading-[28.16px] text-[#111110]">
          {lang === "EN" ? "Contact Us" : "सम्पर्क गर्नुहोस्"}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-[14px] w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="font-nep font-semibold text-[15.2px] leading-[24.32px] text-[#7A7470]">
                    {lang === "EN" ? "Full Name" : "पूरा नाम"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={lang === "EN" ? "Your name" : "तपाईंको नाम"}
                      className={inputClass}
                    />
                  </FormControl>
                  <FormMessage className="font-nep text-[13px] text-[#C01C28]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="font-nep font-semibold text-[15.2px] leading-[24.32px] text-[#7A7470]">
                    {lang === "EN" ? "Email Address" : "इमेल ठेगाना"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </FormControl>
                  <FormMessage className="font-nep text-[13px] text-[#C01C28]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="font-nep font-semibold text-[15.2px] leading-[24.32px] text-[#7A7470]">
                    {lang === "EN" ? "Subject" : "विषय"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={
                        lang === "EN" ? "Message subject" : "सन्देशको विषय"
                      }
                      className={inputClass}
                    />
                  </FormControl>
                  <FormMessage className="font-nep text-[13px] text-[#C01C28]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-[5px]">
                  <FormLabel className="font-nep font-semibold text-[15.2px] leading-[24.32px] text-[#7A7470]">
                    {lang === "EN" ? "Message" : "सन्देश"}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder={
                        lang === "EN" ? "Your message..." : "तपाईंको सन्देश..."
                      }
                      className={`${inputClass} resize-none h-[126px]`}
                    />
                  </FormControl>
                  <FormMessage className="font-nep text-[13px] text-[#C01C28]" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-[43px] px-[22px] py-[11px] bg-[#C01C28] rounded-[6px]
                         font-nep font-bold text-[16px] leading-[100%] text-center text-white
                         hover:bg-[#a01020] transition-colors cursor-pointer"
            >
              {lang === "EN" ? "Send Message" : "सन्देश पठाउनुहोस्"}
            </Button>
          </form>
        </Form>

        <div className="bg-white p-5 rounded-lg">
          <div className="flex flex-col gap-[14px] md:p-4"></div>
          <div className="flex flex-col gap-1 pb-[14px] border-b border-[#0000001A]">
            <p className="font-nep font-semibold text-[15.2px] leading-[24.32px] text-[#7A7470]">
              {lang === "EN" ? "Address" : "ठेगाना"}
            </p>
            <p className="font-nep font-normal text-[16px] leading-[25.6px] text-[#111110]">
              {lang === "EN"
                ? "Gorkha Municipality 6, Harmatari, Gorkha"
                : "गोरखा नगरपालिका ६, हरमटारी, गोरखा"}
            </p>
          </div>

          <div className="flex flex-col gap-1 pb-[14px] border-b border-[#0000001A]">
            <p className="font-nep font-semibold text-[15.2px] leading-[24.32px] text-[#7A7470]">
              {lang === "EN" ? "Email" : "इमेल"}
            </p>
            <Link
              href="mailto:mail@mail.com"
              className="font-normal text-[16px] leading-[25.6px] text-[#111110] hover:text-[#C01C28] transition-colors"
            >
              mail99@mail.com
            </Link>
          </div>

          <div className="flex flex-col gap-1 pb-[14px] border-b border-[#0000001A]">
            <p className="font-nep font-semibold text-[15.2px] leading-[24.32px] text-[#7A7470]">
              {lang === "EN" ? "Phone" : "फोन"}
            </p>
            <p className="font-mono font-normal text-[16px] leading-[25.6px] text-[#111110] hover:text-[#C01C28] transition-colors">
              +९७७ ९८४६०९८०७३
            </p>
          </div>
          <div className="flex flex-col border-4 rounded-sm sm:mt-2 md:mt-5">
            <iframe
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Gorkha,Nepal&output=embed"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
