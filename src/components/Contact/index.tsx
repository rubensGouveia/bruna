"use client";
export const Contact = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-5xl px-4 lg:px-8 py-12 lg:py-24 mx-auto ">
        <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Agende Sua Consulta
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
          <img
            className=" rounded-2xl"
            src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image Description"
          />

          <div>
            <div>
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-4 max-w-md "
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Seu Nome"
                  className="border p-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu E-mail"
                  className="border p-2"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Seu Telefone"
                  className="border p-2"
                />
                <textarea
                  name="message"
                  placeholder="Mensagem (Opcional)"
                  className="border p-2"
                ></textarea>
                <button
                  type="submit"
                  className="bg-primary text-white font-bold py-2 px-4 rounded"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-14 mt-10 ">
          <div className="flex gap-4">
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

            <div className="grow">
              <p className="text-sm text-gray-600 dark:text-neutral-400">
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

          <div className="flex gap-4">
            <svg
              className="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500"
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>

            <div className="grow">
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Whatsapp
              </p>
              <p>
                <a
                  className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                  href="https://wa.me/558391486666"
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
