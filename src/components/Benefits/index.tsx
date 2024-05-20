import { BenefitItem } from "./BenefitItem";

export const Benefits = () => {
  return (
    <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Benefícios da Fisioterapia Domiciliar
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 items-center gap-12">
        <BenefitItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-home"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          }
          title="Conforto do Lar"
          description="Receba cuidados sem sair de casa, ideal para quem busca
            conveniência e conforto."
        />
        <BenefitItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
          }
          title="Atendimento Personalizado"
          description="Cada sessão é planejada para atender às suas necessidades
              específicas, promovendo uma recuperação eficaz."
        />
        <BenefitItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-clock"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          }
          title="Economia de Tempo"
          description="Evite deslocamentos e otimize seu tempo, focando no que realmente importa: sua saúde."
        />
        <BenefitItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-key-round"
            >
              <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
            </svg>
          }
          title="Privacidade e Conveniência"
          description="Desfrute de sessões no ambiente privado e confortável do seu lar."
        />
      </div>
    </div>
  );
};
