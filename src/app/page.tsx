import { Benefits } from "@/components/Benefits";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Steps } from "@/components/Steps";
import { faqItems } from "@/utils/Constants/faq";
import { whatsappLink } from "@/utils/Constants/whatsapp";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bruna Gouveia Fisioterapeuta",
  description: "Transforme Sua Vida com Fisioterapia Domiciliar",
};

export default function Home() {
  return (
    <div className="bg-white text-gray-600 min-h-screen">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-4 md:gap-8 xl:gap-20 md:items-center py-8">
          <div>
            <h1 className="block text-2xl text-center sm:text-left  font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
              Transforme Sua Vida com{" "}
              <span className="text-primary">Fisioterapia Domiciliar</span>
            </h1>
            <p className="mt-3 text-lg text-center sm:text-left text-gray-800">
              Cuidado personalizado no conforto do seu lar para você que
              valoriza saúde e bem-estar.
            </p>
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                target="_blank"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none"
                href={whatsappLink}
              >
                <svg viewBox="0 0 50 50" height="24">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="white"
                  >
                    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                  </svg>
                </svg>
                Agende Sua Consulta
              </a>
            </div>
          </div>
          <div className="relative ms-4 p-12">
            <img
              className="w-full rounded-md"
              src="hero-bruna-2.jpg"
              alt="bruna gouveia está em uma sessão de fisioterapia domiciliar com uma paciente mulher"
            />
          </div>
        </div>
      </div>

      {/* Sobre Bruna Gouveia */}
      <div className="bg-primary  p-6 sm:p-16">
        <div className="bg-white border-[1px] border-primary-hover  mx-auto p-6 max-w-5xl rounded-2xl">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-4xl font-bold  text-primary">
                Sobre Bruna Gouveia
              </h1>
              <p className="mt-4 text-lg ">
                Olá! Sou Bruna Lorena Gouveia Lopes, fisioterapeuta com mais de
                cinco anos de experiência. Tenho especialização em Pilates,
                massagem terapêutica e treinamento funcional.
              </p>
              <p className="mt-4 text-lg ">
                Meus atendimentos têm como objetivo reduzir a dor e promover
                qualidade de vida, proporcionando independência e funcionalidade
                através de movimentos conscientes, para que você possa desfrutar
                do melhor da vida com saúde.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center">
                <div
                  className="w-64 h-64 bg-no-repeat  bg-contain bg-center rounded-2xl"
                  style={{ backgroundImage: "url('bruna_foto.png')" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="flex flex-row items-start gap-4">
              <div className="w-12 h-12 bg-cover bg-center"></div>
              <div className="flex flex-col">
                <div className="text-xl font-bold  text-primary">Pilates</div>
                <div className="text-lg ">
                  Melhore a flexibilidade, força e equilíbrio com movimentos
                  controlados, reduzindo dores e prevenindo lesões.
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start gap-4">
              <div className="w-12 h-12 bg-cover bg-center"></div>
              <div className="flex flex-col">
                <div className="text-xl font-bold  text-primary">
                  Massagem Terapêutica
                </div>
                <div className="text-lg ">
                  Alivie tensões musculares, melhore a circulação e promova o
                  relaxamento, reduzindo estresse e ansiedade.
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start gap-4">
              <div className="w-12 h-12 bg-cover bg-center"></div>
              <div className="flex flex-col">
                <div className="text-xl font-bold  text-primary">
                  Treinamento Funcional
                </div>
                <div className="text-lg ">
                  Melhore a força, coordenação e resistência com movimentos que
                  simulam atividades do dia a dia, mantendo-se ativo e
                  prevenindo lesões.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefícios */}
      <Benefits />
      {/* Como Funciona */}
      <Steps />

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* Formulário de Agendamento */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        Bruna Gouveia - CREFITO 275747-F
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5 mx-auto cursor-pointer mt-2"
          viewBox="0 0 24 24"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1-3h.01"></path>
        </svg>
      </footer>
    </div>
  );
}

function GoogleComponent() {
  return (
    <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
      <div className="py-5">
        <div className="flex space-x-1">
          <svg
            className="size-4 text-gray-800 "
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
              fill="currentColor"
            />
          </svg>
          <svg
            className="size-4 text-gray-800 "
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
              fill="currentColor"
            />
          </svg>
          <svg
            className="size-4 text-gray-800 "
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
              fill="currentColor"
            />
          </svg>
          <svg
            className="size-4 text-gray-800 "
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
              fill="currentColor"
            />
          </svg>
          <svg
            className="size-4 text-gray-800 "
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <p className="mt-3 text-sm text-gray-800 ">
          <span className="font-bold">5</span> /5 - from 12k reviews
        </p>

        <div className="mt-5">
          <svg
            className="h-auto w-16 text-gray-800"
            width="80"
            height="27"
            viewBox="0 0 80 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.558 9.74046H11.576V12.3752H17.9632C17.6438 16.0878 14.5301 17.7245 11.6159 17.7245C7.86341 17.7245 4.58995 14.7704 4.58995 10.6586C4.58995 6.62669 7.70373 3.51291 11.6159 3.51291C14.6498 3.51291 16.4063 5.42908 16.4063 5.42908L18.2426 3.51291C18.2426 3.51291 15.8474 0.878184 11.4961 0.878184C5.94724 0.838264 1.67578 5.50892 1.67578 10.5788C1.67578 15.5289 5.70772 20.3592 11.6558 20.3592C16.8854 20.3592 20.7177 16.8063 20.7177 11.4969C20.7177 10.3792 20.558 9.74046 20.558 9.74046Z"
              fill="currentColor"
            />
            <path
              d="M27.8621 7.78442C24.1894 7.78442 21.5547 10.6587 21.5547 14.012C21.5547 17.4451 24.1096 20.3593 27.9419 20.3593C31.415 20.3593 34.2094 17.7645 34.2094 14.0918C34.1695 9.94011 30.896 7.78442 27.8621 7.78442ZM27.902 10.2994C29.6984 10.2994 31.415 11.7764 31.415 14.0918C31.415 16.4072 29.7383 17.8842 27.902 17.8842C25.906 17.8842 24.3491 16.2874 24.3491 14.0519C24.3092 11.8962 25.8661 10.2994 27.902 10.2994Z"
              fill="currentColor"
            />
            <path
              d="M41.5964 7.78442C37.9238 7.78442 35.2891 10.6587 35.2891 14.012C35.2891 17.4451 37.844 20.3593 41.6763 20.3593C45.1493 20.3593 47.9438 17.7645 47.9438 14.0918C47.9038 9.94011 44.6304 7.78442 41.5964 7.78442ZM41.6364 10.2994C43.4328 10.2994 45.1493 11.7764 45.1493 14.0918C45.1493 16.4072 43.4727 17.8842 41.6364 17.8842C39.6404 17.8842 38.0835 16.2874 38.0835 14.0519C38.0436 11.8962 39.6004 10.2994 41.6364 10.2994Z"
              fill="currentColor"
            />
            <path
              d="M55.0475 7.82434C51.6543 7.82434 49.0195 10.7784 49.0195 14.0918C49.0195 17.8443 52.0934 20.3992 54.9676 20.3992C56.764 20.3992 57.6822 19.7205 58.4407 18.8822V20.1198C58.4407 22.2754 57.1233 23.5928 55.1273 23.5928C53.2111 23.5928 52.2531 22.1557 51.8938 21.3573L49.4587 22.3553C50.297 24.1517 52.0135 26.0279 55.0874 26.0279C58.4407 26.0279 60.9956 23.9122 60.9956 19.481V8.18362H58.3608V9.26147C57.6423 8.38322 56.5245 7.82434 55.0475 7.82434ZM55.287 10.2994C56.9237 10.2994 58.6403 11.7365 58.6403 14.1317C58.6403 16.6068 56.9636 17.9241 55.2471 17.9241C53.4507 17.9241 51.774 16.4471 51.774 14.1716C51.8139 11.6966 53.5305 10.2994 55.287 10.2994Z"
              fill="currentColor"
            />
            <path
              d="M72.8136 7.78442C69.62 7.78442 66.9453 10.2994 66.9453 14.0519C66.9453 18.004 69.9393 20.3593 73.093 20.3593C75.7278 20.3593 77.4044 18.8822 78.3625 17.6048L76.1669 16.1277C75.608 17.006 74.6499 17.8443 73.093 17.8443C71.3365 17.8443 70.5381 16.8862 70.0192 15.9281L78.4423 12.4152L78.0032 11.3772C77.1649 9.46107 75.2886 7.78442 72.8136 7.78442ZM72.8934 10.2196C74.0511 10.2196 74.8495 10.8184 75.2487 11.5768L69.6599 13.9321C69.3405 12.0958 71.097 10.2196 72.8934 10.2196Z"
              fill="currentColor"
            />
            <path
              d="M62.9531 19.9999H65.7076V1.47693H62.9531V19.9999Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
