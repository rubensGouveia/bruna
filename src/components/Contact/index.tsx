"use client";

import { whatsappLink } from "@/utils/Constants/whatsapp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

//...

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formSchema = z.object({
    name: z
      .string()
      .min(1, "Nome é obrigatório")
      .regex(/^[A-Za-z\s]+$/i, "Somente letras são permitidas"),
    email: z.string().email("Email inválido"),
    phone: z
      .string()
      .min(11, "Número de whatsapp inválido")
      .transform((phone) => phone.replace(/\D+/g, "")),
    message: z.string(),
  });

  type FormData = z.infer<typeof formSchema>;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const phoneValue = watch("phone");

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  }
  const onSubmit = (data: FormData) => {
    setLoading(true);
    postData(
      "https://webhook.n8n.rubensgouveia.com.br/webhook/form-bruna",
      data
    )
      .then((d) => {
        setLoading(false);
        setFormSubmitted(true);
        reset();
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  const normalizePhoneNumber = (value: String | undefined) => {
    if (!value) return "";

    return value
      .replace(/[\D]/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)/, "$1");
  };

  useEffect(() => {
    setValue("phone", normalizePhoneNumber(phoneValue));
  }, [phoneValue, setValue]);
  function showBorderError(key: keyof FormData) {
    if (errors[key]) {
      return "border-red-500 w-full";
    } else {
      return "w-full";
    }
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-5xl px-8 lg:px-8 py-12 lg:py-24 mx-auto ">
        <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800">
            Agende Sua Consulta
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
          <img
            className=" rounded-2xl"
            src="https://images.unsplash.com/photo-1533022422823-39f3ad778be4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="imagem de uma pessoa fazendo um agendamento pelo celular"
          />

          <div>
            <div>
              {formSubmitted && (
                <div className="space-y-3 absolute z-10">
                  <div
                    className="max-w-xs bg-teal-500 text-sm text-white rounded-xl shadow-lg"
                    role="alert"
                  >
                    <div className="flex p-4">
                      Enviado com sucesso
                      <div className="ms-auto">
                        <button
                          onClick={() => setFormSubmitted(false)}
                          type="button"
                          className="inline-flex flex-shrink-0 justify-center items-center size-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100"
                        >
                          <span className="sr-only">Close</span>
                          <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-6 max-w-md "
              >
                <div className="relative flex w-full">
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Seu Nome*"
                    className={`${showBorderError(
                      "name"
                    )} border rounded-md p-2`}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs absolute bottom-[-1rem]">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="relative flex w-full">
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Seu E-mail*"
                    className={`${showBorderError(
                      "email"
                    )} border  p-2 rounded-md`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs absolute bottom-[-1rem]">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="relative flex w-full">
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="Seu Whatsapp*"
                    className={`${showBorderError(
                      "phone"
                    )} border rounded-md p-2`}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs absolute bottom-[-1rem]">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
                <textarea
                  {...register("message")}
                  placeholder="Mensagem (Opcional)"
                  className="border rounded-md p-2"
                ></textarea>
                <button
                  type="submit"
                  onClick={() => console.log("submit", errors)}
                  disabled={loading}
                  className="bg-primary disabled:opacity-50 disabled:cursor-progress text-white font-bold py-2 px-4 rounded"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col sm:flex-row gap-14 mt-10 ">
          <div className="flex gap-4 ">
            <svg
              className="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
            </svg>

            <div className="sm:grow">
              <p className="text-xs text-gray-600 dark:text-neutral-400">
                Email
              </p>
              <p>
                <a
                  className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                  href="mailto:brunago.fisio@gmail.com"
                >
                  brunago.fisio@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center sm:justify-start">
            <svg viewBox="0 0 50 50" height="24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="currentColor"
              >
                <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
              </svg>
            </svg>

            <div className="sm:grow">
              <p className="text-xs text-gray-600 dark:text-neutral-400">
                Whatsapp
              </p>
              <p>
                <a
                  target="_blank"
                  className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                  href={whatsappLink}
                >
                  +55 (83) 99148-6666
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
