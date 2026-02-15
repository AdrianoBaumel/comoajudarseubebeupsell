import { Heart, Moon, Sparkles, CheckCircle2, X } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [showDownsell, setShowDownsell] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);

  useEffect(() => {
    if (hasShownExitIntent) return;

    const handlePopState = () => {
      if (!showDownsell && !hasShownExitIntent) {
        window.history.pushState(null, '', window.location.href);
        setShowDownsell(true);
        setHasShownExitIntent(true);
      }
    };

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [showDownsell, hasShownExitIntent]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-amber-50">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

        {/* Seção 1: Parabenização */}
        <section className="text-center mb-12 pt-8">
          <div className="inline-block mb-6 animate-pulse">
            <Heart className="w-12 h-12 text-rose-300 mx-auto" fill="currentColor" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-light text-rose-900 mb-6 leading-tight">
            Parabéns pela decisão que você acabou de tomar.
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Você escolheu melhorar o sono do seu bebê e a sua noite.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Isso já coloca você à frente da maioria das mães que continuam tentando no escuro.
            Você fez a escolha <span className="font-medium text-rose-800">certa para você e principalmente para o seu bebê</span>.
          </p>
        </section>

        {/* Seção 2: Reforço do Produto Anterior */}
        <section className="bg-white rounded-3xl shadow-sm p-8 mb-12 border border-rose-100">
          <div className="flex items-center gap-2 mb-6">
            <Moon className="w-6 h-6 text-amber-600" />
            <h2 className="text-xl font-medium text-gray-800">O que você vai conquistar:</h2>
          </div>
          <ul className="space-y-4 mb-6">
            {[
              'Mais previsibilidade nas noites',
              'Organização da rotina',
              'Redução de despertares desnecessários',
              'Mais segurança na hora de dormir'
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Você vai aprender a criar as condições certas para o sono acontecer com mais tranquilidade.
          </p>
          <p className="text-lg text-rose-800 font-medium italic">
            Só que existe uma próxima etapa que quase ninguém fala...
          </p>
        </section>

        {/* Seção 3: Questão Primária */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-8 border border-rose-200">
            <h2 className="text-2xl font-light text-rose-900 mb-6 text-center">
              Agora que você começou a organizar o sono...
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Como manter isso quando vierem:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'As regressões?',
                'Os saltos de desenvolvimento?',
                'As mudanças de fase?',
                'Os picos de apego?'
              ].map((item, index) => (
                <li key={index} className="text-gray-700 pl-4 border-l-2 border-rose-300">
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white/60 rounded-xl p-6 space-y-3 border border-rose-100">
              <p className="text-gray-600 italic">"E se ele voltar a acordar?"</p>
              <p className="text-gray-600 italic">"E se tudo o que eu fiz parar de funcionar?"</p>
              <p className="text-gray-600 italic">"Será que vou ter que começar tudo de novo?"</p>
            </div>

            <p className="text-center text-gray-700 mt-8 leading-relaxed">
              <span className="font-medium">Melhorar</span> é uma coisa.<br />
              <span className="font-medium text-rose-800">Sustentar ao longo dos anos</span> é outra.
            </p>
          </div>
        </section>

        {/* Seção 4: Eis o que eu tenho */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <Sparkles className="w-10 h-10 text-amber-500 mx-auto" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-rose-900 mb-4 leading-tight">
              Constância no sono (0 a 3 anos)
            </h2>
            <p className="text-lg text-gray-600 italic">
              O caminho para manter constância mesmo nas fases mais desafiadoras
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-8 border border-rose-100">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Isso não é um novo método.<br />
              É a <span className="font-medium text-rose-800">estrutura que impede você de se perder a cada fase</span>.
            </p>

            <div className="space-y-4">
              {[
                'Entendimento profundo de como o sono evolui dos 0 aos 3 anos',
                'Ajustes práticos para cada fase',
                'Estratégias para atravessar regressões',
                'Construção da constância no sono',
                'Continuidade sem rigidez'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-rose-50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção 5: Eis o que isso fará por você */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8 border border-amber-200">
            <h2 className="text-2xl font-light text-rose-900 mb-6 text-center">
              Com o Sono Sustentável você:
            </h2>
            <ul className="space-y-4 mb-6">
              {[
                'Não entra em pânico nas regressões',
                'Não sente que voltou à estaca zero',
                'Não vive recomeçando a cada fase',
                'Desenvolve maturidade e segurança',
                'Sustenta noites organizadas a longo prazo'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-rose-400 flex-shrink-0 mt-2" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-gray-700 leading-relaxed pt-6 border-t border-rose-200">
              A verdadeira paz não está em "resolver apenas uma fase".<br />
              <span className="font-medium text-rose-800">Está em saber resolver todas elas.</span>
            </p>
          </div>
        </section>

        {/* Seção 6: Eis como você pode conseguir isso */}
        <section className="mb-12">
          <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-rose-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-medium text-rose-900 mb-4">
                Adquira agora o Constância no Sono
              </h2>
              <div className="inline-block">
                <p className="text-sm text-gray-600 mb-2">por apenas</p>
                <p className="text-5xl font-light text-rose-800">R$37</p>
              </div>
            </div>

            <div className="space-y-3 mb-8 text-center">
              <p className="text-gray-600">✓ Pagamento único</p>
              <p className="text-gray-600">✓ Acesso imediato</p>
              <p className="text-gray-600">✓ Complemento perfeito do método principal</p>
            </div>

            <a
              href="https://www.ggcheckout.com/checkout/v3/7N2uEMos3PAGBqHpemrE"
              className="block w-full bg-rose-500 hover:bg-rose-600 text-white text-center py-5 px-8 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl mb-6"
            >
              SIM, QUERO GARANTIR CONSTÂNCIA NO SONO
            </a>

            <button
              onClick={() => setShowDownsell(true)}
              className="block w-full text-center text-sm text-gray-400 hover:text-gray-600 underline transition-colors py-2 bg-transparent border-0 cursor-pointer"
            >
              Não quero essa opção
            </button>
          </div>
        </section>

        {/* Footer suave */}
        <div className="text-center pb-8">
          <p className="text-xs text-gray-400">
            Oferta exclusiva disponível apenas neste momento
          </p>
        </div>

      </div>

      {/* Popup Downsell */}
      {showDownsell && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full animate-in fade-in zoom-in-95 duration-300">
            <div className="p-8 text-center">
              <button
                onClick={() => setShowDownsell(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>

              <div className="mb-6">
                <Moon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-2xl font-light text-rose-900 mb-2">
                  Espera só um pouquinho...
                </h3>
                <p className="text-gray-600">
                  Temos uma oferta especial para você
                </p>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-6 mb-6 border border-rose-200">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Se R$37 está fora do seu orçamento neste momento, temos uma opção que pode funcionar melhor para você.
                </p>
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600 mb-2">Acesso a</p>
                  <h4 className="text-xl font-medium text-rose-900 mb-3">
                    Constância no Sono
                  </h4>
                  <p className="text-4xl font-light text-rose-800 mb-2">
                    R$17
                  </p>
                  <p className="text-xs text-gray-500">
                    Pagamento único • Acesso imediato
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Você ainda recebe o mesmo conteúdo para sustentar o sono do seu bebê. A diferença é o investimento.
              </p>

              <a
                href="https://www.ggcheckout.com/checkout/v3/UZS4kIeKOAZITvnfdvwL"
                className="block w-full bg-rose-500 hover:bg-rose-600 text-white text-center py-4 px-6 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
              >
                SIM, QUERO APROVEITAR
              </a>

              <button
                onClick={() => {
                  setShowDownsell(false);
                  window.history.back();
                }}
                className="block w-full text-center text-sm text-gray-400 hover:text-gray-600 underline transition-colors py-2 bg-transparent border-0 cursor-pointer"
              >
                Não, obrigada
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
