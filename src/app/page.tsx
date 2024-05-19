import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-white text-gray-600 min-h-screen">
      <Head>
        <title>Bruna Gouveia Fisioterapia Domiciliar</title>
        <meta
          name="description"
          content="Transforme Sua Vida com Fisioterapia Domiciliar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight ">
              Transforme Sua Vida com{" "}
              <span className="text-primary">Fisioterapia Domiciliar</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 ">
              Cuidado personalizado no conforto do seu lar para você que
              valoriza saúde e bem-estar.
            </p>

            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Agende Sua Consulta
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
            {/* Google */}
          </div>

          <div className="relative ms-4">
            <img
              className="w-full rounded-md"
              src="https://images.pexels.com/photos/4506073/pexels-photo-4506073.jpeg?auto=compress&cs=tinysrgb&w=600&auto=format&fit=crop&w=700&h=800&q=80"
              alt="Image Description"
            />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center py-20 bg-primary text-white">
        <h1 className="text-4xl font-bold">
          Transforme Sua Vida com Fisioterapia Domiciliar
        </h1>
        <p className="mt-4">
          Cuidado personalizado no conforto do seu lar para você que valoriza
          saúde e bem-estar.
        </p>
        <button className="mt-8 bg-white text-primary font-bold py-2 px-4 rounded">
          Agende Sua Consulta
        </button>
      </div>

      {/* Sobre Bruna Gouveia */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center">Sobre Bruna Gouveia</h2>
        <p className="text-center mt-4">
          Bruna Gouveia é uma fisioterapeuta dedicada, com mais de 10 anos de
          experiência...
        </p>
      </div>

      {/* Benefícios */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">
            Benefícios da Fisioterapia Domiciliar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="text-center">
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </div>
              <h3 className="font-semibold">Conforto do Lar</h3>
              <p>
                Receba cuidados sem sair de casa, ideal para quem busca
                conveniência e conforto.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mx-auto"
                >
                  <path d="M2 13V5a3 3 0 013-3h10a3 3 0 013 3v8a3 3 0 01-3 3h-4a1 1 0 110-2h4a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v8a1 1 0 001 1h1a1 1 0 110 2H5a3 3 0 01-3-3z" />
                  <path d="M9 14H7a1 1 0 000 2h2a1 1 0 000-2z" />
                </svg>
              </div>
              <h3 className="font-semibold">Atendimento Personalizado</h3>
              <p>
                Cada sessão é planejada para atender às suas necessidades
                específicas, promovendo uma recuperação eficaz.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-semibold">Economia de Tempo</h3>
              <p>
                Evite deslocamentos e otimize seu tempo, focando no que
                realmente importa: sua saúde.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm2 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 100 2h6a1 1 0 100-2H7zm-1 5a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-semibold">Privacidade e Conveniência</h3>
              <p>
                Desfrute de sessões no ambiente privado e confortável do seu
                lar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Como Funciona */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center">Como Funciona</h2>
        <div className="mt-8 space-y-4">
          <div>
            <h3 className="font-semibold">1. Agendamento Fácil</h3>
            <p>
              Entre em contato através do formulário ou pelo telefone para
              marcar sua consulta.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">2. Avaliação Personalizada</h3>
            <p>
              Na primeira visita, realizaremos uma avaliação completa para
              entender suas necessidades.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">3. Plano de Tratamento Sob Medida</h3>
            <p>
              Desenvolveremos um plano de tratamento personalizado, focando em
              sua rápida recuperação.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">4. Sessões no Conforto do Seu Lar</h3>
            <p>
              Realize suas sessões de fisioterapia em casa, com todo o suporte
              necessário.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">FAQ</h2>
          <div className="mt-8 space-y-4">
            <div>
              <h3 className="font-semibold">
                Como posso agendar minha primeira consulta?
              </h3>
              <p>
                Você pode agendar sua consulta preenchendo o formulário abaixo
                ou entrando em contato pelo telefone fornecido.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Quais são os métodos de pagamento aceitos?
              </h3>
              <p>
                Aceitamos diversos métodos de pagamento, incluindo transferência
                bancária, cartão de crédito e dinheiro.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                É necessário algum preparativo para a primeira sessão?
              </h3>
              <p>
                Recomendamos um espaço tranquilo e confortável em sua casa onde
                você possa se movimentar livremente. Bruna trará todo o
                equipamento necessário.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulário de Agendamento */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center">Agende Sua Consulta</h2>
        <div className="mt-8">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 gap-4 max-w-md mx-auto"
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        Siga-nos nas Redes Sociais:
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
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
            className="h-auto w-16 text-gray-800 "
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
