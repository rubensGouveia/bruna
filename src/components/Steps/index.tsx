import { whatsappLink } from "@/utils/Constants/whatsapp";

export const Steps = () => {
  return (
    <div className="bg-neutral-900">
      <div className="max-w-5xl xl:px-8 py-10 lg:pt-20 lg:pb-20 px-8 sm:px-8 mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Caminho para o Bem-Estar
          </h2>
          <p className="mt-1 text-neutral-400">
            Inicie Sua Jornada de Recuperação com Quatro Passos Simples:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
            <img
              className="w-full object-cover rounded-xl"
              src="bruna-sofa-2.jpg"
              alt="imagem de bruna gouveia fazendo a anaminese com um paciente mulher no sofa"
            />
          </div>

          <div>
            <div className="mb-4">
              <h3 className="text-primary text-xs font-medium uppercase">
                Etapas
              </h3>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-primary font-semibold text-xs uppercase rounded-full">
                    1
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-neutral-400">
                  <span className="text-white">Agendamento Simplificado:</span>
                  {"  "}
                  Escolha o melhor horário para você, online ou por Whatsapp.
                  Comece sua jornada de cuidado sem complicações.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-primary font-semibold text-xs uppercase rounded-full">
                    2
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-neutral-400">
                  <span className="text-white">Avaliação Personalizada:</span>
                  {"  "}
                  Na primeira visita, faremos uma análise detalhada das suas
                  necessidades para traçar seus objetivos de saúde.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-primary font-semibold text-xs uppercase rounded-full">
                    3
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-neutral-400">
                  <span className="text-white">
                    Plano de Tratamento Sob Medida:{"  "}
                  </span>
                  Desenvolveremos um plano de tratamento personalizado,
                  utilizando métodos eficazes e adaptados a você.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-primary font-semibold text-xs uppercase rounded-full">
                    4
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-neutral-400">
                  <span className="text-white">Sessões em Casa:{"  "}</span>
                  Receba tratamento de alta qualidade onde você se sente mais
                  confortável. Concentre-se na sua recuperação, sem se preocupar
                  em sair de casa.
                </p>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start">
              <a
                target="_blank"
                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-primary font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                href={whatsappLink}
              >
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                    d="M14.05 2a9 9 0 0 1 8 7.94"
                  ></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                    d="M14.05 6A5 5 0 0 1 18 10"
                  ></path>
                </svg>
                Agende Sua Consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
