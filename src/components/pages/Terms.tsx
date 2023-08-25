import Container from "../layout/Container";
import Navbar from "../layout/Navbar";
import MeetUsHome from "../partials/Home/MeetUsHome";

function Terms() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Container classname="bg-[var(--primary-color)] bg-gradient-to-b from-[var(--primary-color)] to-[var(--gradient-color)] text-white">
          <div className="flex flex-col container mx-auto md:items-center">
            <Navbar />
            <h2 className="md:text-6xl lg:ml-0 ml-4 text-4xl w-[92%] md:w-[65%] md:leading-normal font-semibold my-12 lg:my-24">
            Termos Gerais de Uso da Acesse-me
            </h2>
          </div>
        </Container>
        <div className="flex flex-col container px-4 lg:px-0 lg:mx-[22rem]">
          <h3 className="font-semibold text-4xl lg:ml-2 p-6">Sumário</h3>
          <ol role="list" className="flex flex-col lg:gap-6 gap-4 md:ml-4">
            <li className="flex items-center">
              <a href="#item-1" className="underline text-lg text-[#333] ml-10">
                1. Propriedade e Apresentação
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-2" className="underline text-lg text-[#333] ml-10">
                2. Condições de Acesso e Uso da Plataforma ACESSE-ME
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-3" className="underline text-lg text-[#333] ml-10">
                3. Cadastro de USUÁRIOS
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-4" className="underline text-lg text-[#333] ml-10">
                4. Cadastro de Associações
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-5" className="underline text-lg text-[#333] ml-10">
                5. Funcionalidades da Plataforma ACESSE-ME
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-6" className="underline text-lg text-[#333] ml-10">
                6. Preços e Pagamentos
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-7" className="underline text-lg text-[#333] ml-10">
                7. Cancelamento da Conta de Acesso
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-8" className="underline text-lg text-[#333] ml-10">
                8. Comunicações e Contato
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-9" className="underline text-lg text-[#333] ml-10">
                9. Exclusão de Garantias e Responsabilidade
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-10" className="underline text-lg text-[#333] ml-10">
                10. Duração e Atualizações
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-11" className="underline text-lg text-[#333] ml-10">
                11. Dados Pessoais, Privacidade e Segurança
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-12" className="underline text-lg text-[#333] ml-10">
                12. Propriedade Intelectual e Industrial
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-13" className="underline text-lg text-[#333] ml-10">
                13. Condições Gerais
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-14" className="underline text-lg text-[#333] ml-10">
                14. Lei aplicável e Foro de Eleição
              </a>
            </li>
          </ol>
        </div>
        <div
          role="list"
          className="lg:mx-[22rem] mx-8 md:mx-16 lg:w-[60%] pb-8 my-12"
        >
          <div role="listitem" className="w-dyn-item" id="item-1">
            <div aria-hidden="true" className="idtext screen-reader-only"></div>
            <div className="leading-relaxed">
              <div className="container-11 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-4">
                  1. Propriedade e Apresentação
                </h2>
                <div className="rich-text-block w-richtext">
                  <p className=" pb-3">
                    Esta plataforma digital, com endereço eletrônico
                    “acesseme.com”, é de propriedade exclusiva e administrada
                    pela ACESSE-ME SOLUÇÕES ONLINE E CONSULTORIA ASSISTIVA LTDA,
                    citada neste documento como{" "}
                    <strong className="font-bold">ACESSE-ME</strong>, com
                    endereço na rua Rua Titânio, nº 280, apto. 202, bloco 08,
                    bairro Camargos, Belo Horizonte, Minas Gerais, CEP
                    30.520-150, inscrita no Cadastro Nacional de Pessoas
                    Jurídicas do Ministério da Fazenda sob o nº
                    37.056.154/0001-05, e correio eletrônico para contato{" "}
                    <br></br>
                    <a
                      className="underline  text-[#333]"
                      href="http://atendimento@acesseme.com"
                    >
                      atendimento@acesseme.com
                    </a>
                    <br></br>.
                  </p>
                  <p className=" pb-3">
                    Este documento tem como objetivo orientar e expor as regras
                    que devem ser observadas pelos USUÁRIOS durante a utilização
                    da plataforma ACESSE-ME, para que possam usufruir das
                    experiências proporcionadas por meio desta de forma legal e
                    consciente. A{" "}
                    <strong className="font-bold">ACESSE-ME </strong>também está
                    sujeita às regras aqui dispostas, e se compromete a
                    respeitá-las em prol de uma boa relação com você.&nbsp;
                  </p>
                  <p className=" pb-3">
                    A plataforma ACESSE-ME
                    <strong className="font-bold"> </strong>foi criada com o
                    objetivo de aproximar histórias e encurtar caminhos através
                    de uma conexão rápida entre pessoas com deficiência (PcD's),
                    pessoas com doenças raras, seus familiares e amigos, citados
                    neste documento como USUÁRIOS PESSOAIS, e parceiros
                    profissionais especializados, citados neste documento como
                    USUÁRIOS PROFISSIONAIS. Vem conosco construir uma comunidade
                    global de ajuda mútua?
                  </p>
                  <p className=" pb-3">
                    Importante destacar que, além destes Termos, fazem parte
                    integrante e inseparável os demais documentos acessórios e
                    específicos da plataforma, tal como a <br></br>
                    <a
                      className="underline  text-[#333] "
                      href="/privacy-policies"
                    >
                      Política de Privacidade e Segurança
                    </a>
                    <br></br>
                    <strong className="font-bold"></strong> e demais condições
                    particulares que venham a ser apresentadas e aceitas pelo
                    USUÁRIO de forma tácita ou expressa, conforme o caso, ao
                    longo da utilização desta.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-2">
            <div aria-hidden="true" className="idtext screen-reader-only"></div>
            <div className="section-3">
              <div className="container-11 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-4">
                  2. Condições de Acesso e Uso da Plataforma ACESSE-ME
                </h2>
                <div className="rich-text-block w-richtext">
                  <p className=" pb-3">
                    O acesso às funcionalidades da plataforma ACESSE-ME somente
                    poderá ser realizado pelos USUÁRIOS que estiverem
                    adequadamente cadastrados na plataforma.&nbsp;
                  </p>
                  <p className=" pb-3">
                    No momento do cadastro à plataforma, você deverá realizar o
                    aceite expresso sobre estes termos e seus acessórios. Sendo
                    assim, somente será possível acessar os conteúdos e as
                    funcionalidades da plataforma a partir do momento em que
                    você confirmar que concorda com tudo o que está previsto
                    neste documento. Em caso de atualizações, a garantia do uso
                    contínuo da plataforma ACESSE-ME também requer o aceite das
                    novas versões.
                  </p>
                  <p className=" pb-3">
                    Desse modo, você declara ter lido e aceito estes Termos de
                    Uso e seus acessórios antes de ter iniciado a utilização da
                    plataforma ACESSE-ME e estar de acordo com a versão vigente
                    destes.
                  </p>
                  <p className=" pb-3">
                    Você reconhece e aceita que o uso da plataforma ACESSE-ME
                    será feito por sua exclusiva conta, responsabilidade e
                    riscos, comprometendo-se a utilizá-la de acordo com estes
                    Termos e seus acessórios, com a legislação vigente aplicável
                    no ordenamento jurídico brasileiro, a moral, os bons
                    costumes e a ordem pública.
                  </p>
                  <p className=" pb-3">
                    Portanto, não é permitida a realização de acessos não
                    autorizados às contas de terceiros, assim como é
                    expressamente proibido utilizar a plataforma ACESSE-ME para
                    realizar atos ilícitos nos termos da legislação vigente
                    aplicável e do disposto neste instrumento.
                  </p>
                  <p className=" pb-3">
                    Saiba que é seu dever proteger os seus dados de acesso
                    (login e senha) à plataforma, definidos no momento em que
                    você se cadastrar à nossa rede. A{" "}
                    <strong className="font-bold">ACESSE-ME, </strong>em
                    hipótese alguma, os solicitará.&nbsp;
                  </p>
                  <p className=" pb-3">
                    É de sua exclusiva responsabilidade qualquer perda ou dano
                    ocasionado, direta ou indiretamente, por qualquer atividade
                    não autorizada que tenha sido conduzida por você; portanto,
                    tome as devidas precauções!
                  </p>
                  <p className=" pb-3">
                    Se você enfrentar qualquer problema com os seus dados de
                    acesso à plataforma, entre em contato imediatamente com a{" "}
                    <strong className="font-bold">ACESSE-ME</strong>, por meio
                    dos canais de contato definidos no item 8, a fim de que as
                    devidas providências possam ser tomadas.
                  </p>
                  <p className=" pb-3">
                    Não é permitida a utilização de mecanismos que não os
                    expressamente habilitados ou recomendados pela{" "}
                    <strong className="font-bold">ACESSE-ME</strong> para
                    obtenção e/ou extração de informações, conteúdos e serviços,
                    e nem a utilização de aplicativos automatizados de coleta e
                    seleção de dados para realizar operações massificadas ou
                    para quaisquer finalidades para fins não permitidos ou
                    ilícitos, tendo em vista que estes podem afetar a segurança
                    e o funcionamento da plataforma.
                  </p>
                  <p className=" pb-3">
                    Buscando garantir a sua proteção, a{" "}
                    <strong className="font-bold">ACESSE-ME</strong> se
                    resguarda ao direito de bloquear, restringir, desabilitar ou
                    impedir o acesso de qualquer USUÁRIO à plataforma, total ou
                    parcialmente, sem qualquer aviso prévio, sempre que for
                    constatada uma conduta inadequada do USUÁRIO e/ou o
                    descumprimento destes Termos e de seus acessórios, ou mesmo
                    das normas vigentes, sem prejuízo das medidas
                    administrativas, extrajudiciais e judiciais que julgar
                    convenientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-3">
            <div aria-hidden="true" className="idtext screen-reader-only"></div>
            <div className="section-3">
              <div className="container-11 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-4">
                  3. Cadastro de USUÁRIOS
                </h2>
                <div className="rich-text-block w-richtext">
                  <p className=" pb-3">
                    Para que seja possível o acesso à plataforma ACESSE-ME e
                    suas funcionalidades de forma integral, pelo USUÁRIO, é
                    indispensável a criação de uma Conta de Acesso, por meio do
                    preenchimento de informações que serão solicitadas no ato do
                    cadastro, tais como nome completo, correio eletrônico,
                    senha, gênero e tipo perfil (pessoa com deficiência;
                    familiar/amigo; profissional).&nbsp;
                  </p>
                  <p className=" pb-3">
                    Ao finalizar o cadastro, você declara que as informações
                    fornecidas são completas, verdadeiras, atuais e precisas,
                    sendo de sua total responsabilidade a atualização frequente
                    dos dados cadastrados sempre que houver qualquer
                    modificação.
                  </p>
                  <p className=" pb-3">
                    Caso seja realizado o cadastro, será presumido o seu
                    consentimento expresso sobre coleta, uso, armazenamento e
                    tratamento de dados pessoais pela{" "}
                    <strong className="font-bold">ACESSE-ME </strong>
                    e/ou por terceiros por ela contratados para realizar
                    qualquer procedimento ou processo relacionado à plataforma
                    ACESSE-ME, inclusive processamento de pagamentos, tendo em
                    vista o condicionamento do aceite do tratamento dos dados
                    para a realização do cadastro junto à ACESSE-ME.
                  </p>
                  <p className=" pb-3">
                    Uma vez finalizada a realização do cadastro, você
                    <strong className="font-bold"> </strong>receberá um e-mail
                    informativo.
                  </p>
                  <p className=" pb-3">
                    Sempre que você quiser acessar a sua Conta de Acesso,
                    compartilhar histórias e participar de fóruns, você deverá
                    entrar no link de acesso ao endereço eletrônico da ACESSE-ME
                    e fazer o login, podendo alterar os dados informados e
                    excluir a sua conta a qualquer momento.
                  </p>
                  <p className=" pb-3">
                    É vedado o cadastro na plataforma ACESSE-ME de USUÁRIOS
                    menores de 18 (dezoito) anos não devidamente acompanhados ou
                    representados pelos seus responsáveis legais no momento do
                    cadastro devido à sua incapacidade civil.
                  </p>
                  <h3 className="text-3xl font-light">
                    <strong className="font-bold">
                      3.1 Deveres dos USUÁRIOS
                    </strong>
                  </h3>
                  <p className=" pb-3">
                    Para a completa experiência e utilização da plataforma
                    ACESSE-ME, e sob pena de responsabilizar-se diretamente para
                    todos os fins de Direito em caso de descumprimento, os
                    USUÁRIOS deverão respeitar as regras aqui definidas,
                    devendo, além de todo o já exposto:
                  </p>
                  <ol className="ml-10 flex flex-col gap-3" role="list">
                    <li>
                      1. Responsabilizar-se pelos dados e informações
                      manualmente inseridos na plataforma;
                    </li>
                    <li>
                      2. Responsabilizar-se por todo o conteúdo, veracidade e
                      conformidade de informações inseridas na plataforma,
                      incluindo-se todos os textos, fotos e outros que venha a
                      incluir na plataforma, não infringindo direitos autorais
                      alheios e responsabilizando-se diretamente caso o faça;
                    </li>
                    <li>
                      3. Responsabilizar-se por quaisquer comunicações ou
                      opiniões que emitir através da plataforma ACESSE-ME;
                    </li>
                    <li>
                      4. Responsabilizar-se pela conformidade com a maneira
                      através da qual utiliza as informações fornecidas por
                      outros USUÁRIOS, assim, comprometendo-se a utilizar as
                      informações apenas para os fins para os quais estas foram
                      fornecidas;
                    </li>
                    <li>
                      5. Responsabilizar-se por não violar quaisquer das
                      disposições avençadas nesses Termos ou em seus acessórios,
                      direitos de outros USUÁRIOS, direitos de terceiros.
                    </li>
                    <li>
                      6. Zelar pelo bom relacionamento com os USUÁRIOS na
                      plataforma ACESSE-ME, responsabilizando-se diretamente
                      pelas suas ações e omissões na utilização desta.
                    </li>
                  </ol>
                  <p className=" pb-3">‍</p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-4">
            <div aria-hidden="true" className="idtext screen-reader-only"></div>
            <div className="section-3">
              <div className="container-11 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-4">
                  4. Cadastro de Associações
                </h2>
                <div className="rich-text-block w-richtext">
                  <p className=" pb-3">
                    Também é possível que Associações de pessoas com deficiência
                    (PcD's) e/ou de pessoas com doenças raras se cadastrem na
                    plataforma ACESSE-ME. Neste caso, o cadastro será realizado
                    pessoalmente, devendo a Associação interessada entrar em
                    contato com a{" "}
                    <strong className="font-bold">ACESSE-ME </strong>por meio
                    dos canais de contato indicados no item 8.&nbsp;
                  </p>
                  <p className=" pb-3">
                    A ideia, aqui, é que a Associação indique seus associados
                    para a plataforma ACESSE-ME, contribuindo para a construção
                    desta comunidade global de ajuda mútua, em troca de
                    participação nos valores arrecadados com as mensalidades
                    pagas pelos associados que se cadastrarem e se tornarem
                    membros premium.&nbsp;
                  </p>
                  <p className=" pb-3">
                    Sendo assim, a Associação que se cadastrar pessoalmente e
                    indicar associados para a plataforma ACESSE-ME receberá 10%
                    (dez por cento) do total arrecadado com as mensalidades de
                    todos os associados que efetivamente se cadastrarem na
                    plataforma e se tornarem membros premium.
                  </p>
                  <p className=" pb-3">
                    Importante destacar que as Associações também estão sujeitas
                    a todas as regras dispostas nestes Termos e Condições de
                    Uso.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-5">
            <div aria-hidden="true" className="idtext screen-reader-only"></div>
            <div className="section-3">
              <div className="container-11 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-4">
                  5. Funcionalidades da Plataforma ACESSE-ME
                </h2>
                <div className="rich-text-block w-richtext">
                  <p className=" pb-3">
                    A plataforma ACESSE-ME é uma plataforma com funcionalidades
                    que viabilizam a conexão entre PcD's, pessoas com doenças
                    raras e profissionais especializados, por meio de suas
                    histórias. Dentre suas funcionalidades, estão:
                  </p>
                  <ol className="ml-10" role="list">
                    <li>
                      <strong className="font-bold">1. Sobre</strong>: por aqui,
                      você poderá saber quem somos e o que fazemos, bem como
                      assistir ao nosso teaser para entender um pouco melhor o
                      nosso propósito;
                    </li>
                    <li>
                      <strong className="font-bold">2. Como funciona</strong>:
                      para entender melhor como funciona a nossa plataforma, o
                      que você poderá fazer navegando por ela e quais são os
                      perfis de usuários possíveis, vá até esta página;
                    </li>
                    <li>
                      <strong className="font-bold">
                        3. Nossos Apoiadores:
                      </strong>{" "}
                      por meio desta página, você poderá conhecer quem já está
                      com a gente;
                    </li>
                    <li>
                      <strong className="font-bold">4. Cadastre-se: </strong>se
                      você ainda não realizou o seu cadastro, aqui é o lugar
                      certo;
                    </li>
                    <li>
                      <strong className="font-bold">5. Fórum:</strong> se você
                      já fez o seu cadastro e quer navegar pela atmosfera
                      ACESSE-ME, está no lugar certo! Faça parte dos fóruns de
                      discussão, conte suas histórias, tire suas dúvidas,
                      conheça todos os membros da atmosfera ACESSE-ME e obtenha
                      informações técnicas de nossos parceiros profissionais
                      especializados!
                    </li>
                    <li>
                      <strong className="font-bold">6. Minha Conta: </strong>se
                      quiser alterações os seus dados de acesso à plataforma
                      (login e senha), inserir fotos, ou mesmo excluir a sua
                      conta, este é o local.&nbsp;
                    </li>{" "}
                    <br></br>
                  </ol>
                  <p className=" pb-3">
                    Durante toda a sua experiência, se precisar de qualquer
                    apoio, você também poderá entrar em contato conosco por meio
                    do correio eletrônico <br></br>{" "}
                    <a
                      className="underline  text-[#333] "
                      href="mailto:atendimento@acesseme.com"
                    >
                      atendimento@acesseme.com
                    </a>
                    <br></br>. Estaremos à disposição para te escutar e te
                    ajudar a ter uma experiência ainda mais agradável dentro da
                    plataforma!
                  </p>
                  <h3 className="text-3xl font-light">
                    <strong className="font-bold">
                      5.1 Seja um Membro Premium!
                    </strong>
                  </h3>
                  <p className=" pb-3">
                    Além de todas as funcionalidades detalhadas até aqui, o
                    USUÁRIO PESSOAL que se tornar um Membro Premium também
                    poderá ter acesso a uma rede de descontos nos serviços
                    prestados pelos USUÁRIOS PROFISSIONAIS e pelos nossos
                    patrocinadores.&nbsp;
                  </p>
                  <p className=" pb-3">
                    Para se tornar um Membro Premium, você deverá colaborar com
                    um valor mensal de R$6,90 (seis reais e noventa
                    centavos).&nbsp;
                  </p>
                  <p className=" pb-3">
                    Vale destacar que, quanto mais engajado você se mostrar
                    dentro da plataforma, maior será a rede de descontos
                    disponível para você. Portanto, quanto mais você colabora,
                    mais você ganha! Esta é uma condição exclusiva para USUÁRIOS
                    PESSOAIS.
                  </p>
                  <h3 className="text-3xl font-light">
                    <strong className="font-bold">
                      5.2 Novas Funcionalidades e atualizações
                    </strong>
                  </h3>
                  <p className=" pb-3">
                    A fim de manter a plataforma ACESSE-ME ainda mais
                    interessante a você, novas funcionalidades são implementadas
                    e validadas de forma contínua, fazendo parte integrante
                    deste instrumento. Também é importante esclarecer que
                    poderão acontecer desativações de funcionalidades já
                    disponibilizadas de acordo com os avanços tecnológicos e
                    desuso das mesmas, o que não implicará em redução do serviço
                    prestado, diante das atualizações contínuas e novas
                    funcionalidades propostas para o correto funcionamento da
                    plataforma.
                  </p>
                  <p className=" pb-3">‍</p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-6">
            <div aria-hidden="true" className="idtext screen-reader-only"></div>
            <div className="section-3">
              <div className="container-11 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-4">
                  6. Preços e Pagamentos
                </h2>
                <div className="rich-text-block w-richtext">
                  <p className=" pb-3">
                    Caso seja de seu interesse, na qualidade de USUÁRIO PESSOAL,
                    você poderá se tornar um Membro Premium. Será um prazer para
                    nós! Neste caso, você deverá contribuir com um valor mensal
                    para utilização das funcionalidades premium da plataforma.
                  </p>
                  <p className=" pb-3">
                    Os USUÁRIOS PROFISSIONAIS também deverão contribuir com um
                    valor mensal para utilizar a plataforma.
                  </p>
                  <p className=" pb-3">
                    Os valores mensais a serem pagos pelos Membros Premium e
                    pelos USUÁRIOS PROFISSIONAIS serão aqueles praticados e
                    expressamente aceitos no ato de criação da Conta de Acesso
                    do USUÁRIO.&nbsp;
                  </p>
                  <p className=" pb-3">
                    Os USUÁRIOS PROFISSIONAIS que convidarem terceiros para
                    também se cadastrem na plataforma, criando um perfil
                    profissional, terão direito a uma mensalidade grátis. A
                    isenção da mensalidade ocorrerá no mês subsequente ao
                    pagamento da primeira mensalidade do USUÁRIO PROFISSIONAL
                    indicado, e somente se o USUÁRIO PROFISSIONAL indicado
                    informar o nome de quem o indicou.
                  </p>
                  <p className=" pb-3">
                    Todos os Membros Premium e USUÁRIOS PROFISSIONAIS poderão
                    contar com um período de teste. Sendo assim, caso você
                    decida por se tornar um Membro Premium, ou caso você seja um
                    USUÁRIO PROFISSIONAL, você poderá testar as funcionalidades
                    pagas da plataforma por 7 (sete) dias. Caso você não se
                    adapte e queira realizar o cancelamento (o que nós esperamos
                    que não aconteça), você poderá solicitá-lo neste período,
                    sem haver qualquer cobrança.&nbsp;
                  </p>
                  <p className=" pb-3">
                    A partir do momento em você se tornar um Membro Premium ou
                    um USUÁRIO PROFISSIONAL, esta condição se renovará
                    mensalmente, de modo automático. Caso não seja de seu
                    interesse prosseguir utilizando as funcionalidades pagas da
                    plataforma ACESSE-ME, você deverá solicitar o cancelamento,
                    por meio dos canais de contato definidos no item 8, com, no
                    mínimo, 20 (dez) dias de antecedência da data que pretende
                    encerrar o uso da plataforma nas condições pagas.&nbsp;
                  </p>
                  <p className=" pb-3">
                    As informações de pagamento serão armazenadas pela{" "}
                    <strong className="font-bold">ACESSE-ME</strong>, tendo em
                    vista que os pagamentos serão realizados por meio da própria
                    plataforma. Entretanto, a{" "}
                    <strong className="font-bold">ACESSE-ME</strong> garante que
                    o armazenamento ocorrerá somente pelo tempo em que for
                    estritamente necessário, isto é, somente pelo tempo em que
                    for mantida a condição de Membro Premium do USUÁRIO PESSOAL
                    ou somente pelo tempo em que for mantido o cadastro do
                    USUÁRIO PROFISSIONAL.&nbsp;
                  </p>
                  <p className=" pb-3">
                    A <strong className="font-bold">ACESSE-ME</strong> também
                    garante que essas informações não serão compartilhadas com
                    terceiros e não serão utilizadas para outras finalidades que
                    não as aqui expressamente definidas.
                  </p>
                  <p className=" pb-3">
                    A <strong className="font-bold">ACESSE-ME</strong> se
                    reserva ao direito de realizar mudanças unilaterais nos
                    procedimentos de pagamento, a seu critério, de acordo com o
                    que melhor lhe couber, sempre com a adequada comunicação de
                    forma prévia aos Membros Premium e USUÁRIOS PROFISSIONAIS
                    cadastrados na plataforma ACESSE-ME, que poderão optar, com
                    liberalidade, pelo cancelamento ou continuidade de sua conta
                    de acesso premium.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-7">
            <div aria-hidden="true" className="idtext screen-reader-only"></div>
            <div className="section-3">
              <div className="container-11 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-4">
                  7. Cancelamento da Conta de Acesso
                </h2>
                <div className="rich-text-block w-richtext">
                  <p className=" pb-3">
                    Caso seja de seu interesse realizar a exclusão da sua Conta
                    de Acesso, bastará a você que vá até a página "Minha Conta"
                    e clique no botão "Deletar Conta".&nbsp;
                  </p>
                  <p className=" pb-3">
                    É importante que você compreenda que, com a exclusão da sua
                    Conta de Acesso, poderão ser mantidos na plataforma textos,
                    fotos e informações eventualmente publicados por você nos
                    fóruns de discussão. Caso seja de seu interesse excluí-los e
                    não tenha sido possível por sua própria conta, você deverá
                    entrar em contato com a{" "}
                    <strong className="font-bold">ACESSE-ME </strong>por meio
                    dos canais de contato definidos no item 8.
                  </p>
                  <p className=" pb-3">
                    As informações e dados necessários para a cobrança de
                    eventuais pagamentos ainda não realizados e para o registro
                    das operações financeiras realizadas serão mantidos,
                    anonimizados, quando possível, para maior segurança da{" "}
                    <strong className="font-bold">ACESSE-ME</strong> e dos
                    USUÁRIOS, e para cumprimento das legislações vigentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-8">
            <div aria-hidden="true" className="idtext screen-reader-only"></div>
            <div className="section-3">
              <div className="container-11 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-4">
                  8. Comunicações e Contato
                </h2>
                <div className="rich-text-block w-richtext">
                  <p className=" pb-3">
                    Para entrar em contato com a{" "}
                    <strong className="font-bold">ACESSE-ME, </strong>você
                    poderá se utilizar dos seguintes canais de comunicação:
                  </p>
                  <br></br>
                  <ol className="flex flex-col lg:gap-8 gap-4 ml-10" role="list">
                    <li>
                      1. E-mails <br></br>
                      <a
                        className="underline  text-[#333] "
                        href="mailto:atendimento@acesseme.com"
                      >
                        atendimento@acesseme.com
                      </a>{" "}
                      <br></br>{" "}
                      <a
                        className="underline  text-[#333] "
                        href="mailto:camila@acesseme.com"
                      >
                        camila@acesseme.com
                      </a>{" "}
                      <br></br>
                    </li>
                    <li>
                      2. Telefone<br></br>{" "}
                      <a
                        className="underline  text-[#333] "
                        href="tel:+553198866-7222"
                      >
                        +55 31 9 8866-7222
                      </a>
                      <br></br>
                    </li>
                    <li>
                      3. Correspondência endereçada à{" "}
                      <strong className="font-bold">ACESSE-ME, </strong>
                      conforme endereço informado no item 1.
                    </li>
                  </ol>
                  <br></br>
                  <p className=" pb-3">
                    Os canais de atendimento da{" "}
                    <strong className="font-bold">ACESSE-ME</strong> funcionam
                    de segunda a sexta, das 9h às 18h em dias úteis.
                  </p>
                  <p className=" pb-3">
                    O tempo máximo de resposta da{" "}
                    <strong className="font-bold">ACESSE-ME</strong> para uma
                    solicitação enviada é de até 05 (cinco) dias úteis, como
                    regra geral.&nbsp;
                  </p>
                  <p className=" pb-3">
                    Se estivermos em um período de tráfego excepcionalmente
                    alto, o retorno ao seu contato poderá ser em tempo maior,
                    sendo que você receberá uma resposta com um aviso sobre esta
                    alta demanda e do novo prazo estimado para retorno.
                  </p>
                  <p className=" pb-3">
                    Caso a <strong className="font-bold">ACESSE-ME</strong>{" "}
                    tenha algum comunicado a ser feito a você, este comunicado
                    será realizado de forma segura, conforme informações
                    prestadas no ato do cadastro na plataforma.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-9">
            <div aria-hidden="true" className="idtext screen-reader-only"></div>
            <div className="section-3">
              <div className="container-11 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-4">
                  9. Exclusão de Garantias e Responsabilidade
                </h2>
                <div className="">
                  <h3 className="text-3xl font-light">
                    <strong className="font-bold">
                      9.1 Disponibilidade e Continuidade do SITE e dos Serviços
                    </strong>
                  </h3>
                  <p className=" pb-3">
                    De acordo com os limites estabelecidos na legislação pátria
                    vigente, a <strong className="font-bold">ACESSE-ME </strong>
                    não será responsável pelos danos e prejuízos causados aos
                    USUÁRIOS como consequência da indisponibilidade, falhas de
                    acesso e falta de continuidade do SITE e de seus serviços
                    por razões alheias à sua vontade ou quando assim comunicar
                    com antecedência, por livre liberalidade, aos
                    USUÁRIOS.&nbsp;
                  </p>
                  <h3 className="text-3xl font-light">
                    <strong className="font-bold">
                      9.2 Conteúdos da plataforma ACESSE-ME
                    </strong>
                  </h3>
                  <p className=" pb-3">
                    Podemos garantir que a{" "}
                    <strong className="font-bold">ACESSE-ME</strong> procura
                    manter a plataforma sempre atualizada, para gerar a melhor
                    experiência possível aos seus USUÁRIOS; entretanto, nós não
                    nos responsabilizamos por eventuais problemas não causados
                    diretamente por nós, por exemplo, por eventuais imprecisões,
                    erros, inexatidão ou divergências nos dados cadastrados
                    pelos USUÁRIOS. Sendo verificada qualquer das situações aqui
                    elencadas, você pode contatar a{" "}
                    <strong className="font-bold">ACESSE-ME</strong> por
                    quaisquer dos canais de comunicação para que possamos ser
                    cientificados da situação e, consequentemente, possamos
                    saná-la, sendo o caso.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-10">
            <div aria-hidden="true" className="idtext screen-reader-only"></div>
            <div className="section-3">
              <div className="container-11 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-4">
                  10. Duração e Atualizações
                </h2>
                <div className="rich-text-block w-richtext">
                  <p className=" pb-3">
                    Os presentes Termos e Condições de Uso e seus acessórios têm
                    duração indefinida e permanecerão em vigor enquanto a
                    plataforma ACESSE-ME e suas funcionalidades estiverem
                    ativas, considerando a aplicação da redação da data de
                    acesso na plataforma; da mesma forma, o acesso à plataforma
                    ACESSE-ME e suas funcionalidades são de duração
                    indeterminada, a exclusivo critério da{" "}
                    <strong className="font-bold">ACESSE-ME</strong>.
                  </p>
                  <p className=" pb-3">
                    A <strong className="font-bold">ACESSE-ME </strong>
                    reserva-se ao direito de suspender e/ou cancelar, de forma
                    unilateral e a qualquer momento, o acesso à Conta de Acesso
                    ou a algumas de suas partes ou a alguns de seus recursos,
                    com a realização de aviso prévio aos USUÁRIOS cadastrados.
                  </p>
                  <p className=" pb-3">
                    A <strong className="font-bold">ACESSE-ME </strong>também se
                    reserva ao direito de revisar, aprimorar, modificar e/ou
                    atualizar, unilateralmente e a qualquer momento, qualquer
                    cláusula ou disposição aqui contida. A versão atualizada
                    valerá para o uso da plataforma, sendo que a continuidade de
                    acesso ou utilização da plataforma ACESSE-ME, depois da
                    divulgação de quaisquer modificações, confirmará tacitamente
                    a aceitação dos novos Termos e Condições de Uso e de seus
                    acessórios.
                  </p>
                  <p className=" pb-3">
                    Caso você não esteja de acordo com uma determinada alteração
                    dos Termos e Condições de Uso e de seus acessórios, você
                    poderá finalizar seu vínculo com a{" "}
                    <strong className="font-bold">ACESSE-ME, </strong>não
                    estando obrigado a aceitá-la. No entanto, é importante
                    destacar que a solicitação de cancelamento devido a uma
                    alteração de conteúdo realizada unilateralmente pela{" "}
                    <strong className="font-bold">ACESSE-ME </strong>para acesso
                    à plataforma ACESSE-ME não eximirá o USUÁRIO de cumprir com
                    todas as obrigações assumidas sob as versões precedentes das
                    dos Termos e Condições de Uso e de seus acessórios.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-11">
            <div aria-hidden="true" className="idtext screen-reader-only"></div>
            <div className="section-3">
              <div className="container-11 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-4">
                  11. Dados Pessoais, Privacidade e Segurança
                </h2>
                <div className="rich-text-block w-richtext">
                  <p className=" pb-3">
                    A <strong className="font-bold">ACESSE-ME </strong>se
                    compromete a respeitar os Dados Pessoais, a Privacidade e a
                    Segurança dos USUÁRIOS, sempre tomando cautelosamente as
                    medidas necessárias para garantir a sua proteção nos
                    momentos em que estiver utilizando a plataforma ACESSE-ME.
                  </p>
                  <p className=" pb-3">
                    Para a total utilização da plataforma, é necessária a Conta
                    de Acesso com o registro de alguns dados e informações
                    pessoais do USUÁRIO, conforme aqui definidos.
                  </p>
                  <p className=" pb-3">
                    Os Dados solicitados no momento de criação da Conta de
                    Acesso são utilizados para gestão, navegação e consulta da
                    própria plataforma, do cadastro e dos serviços; e para a
                    segurança do USUÁRIO e também da{" "}
                    <strong className="font-bold">ACESSE-ME</strong>, evitando
                    fraudes na utilização da Conta de Acesso.&nbsp;
                  </p>
                  <p className=" pb-3">
                    Para a sua maior tranquilidade, a{" "}
                    <strong className="font-bold">ACESSE-ME </strong>
                    garante que os dados pessoais e informações coletadas na
                    plataforma ACESSE-ME não serão compartilhados em desacordo
                    com a legislação pátria aplicável. Poderá haver o
                    compartilhamento tão somente com terceiros contratados pela{" "}
                    <strong className="font-bold">ACESSE-ME, </strong>se
                    necessário for, para realizar qualquer procedimento
                    relacionado à plataforma ACESSE-ME; e/ou no caso de
                    informações e dados estatísticos e/ou anonimizados.
                  </p>
                  <p className=" pb-3">
                    A utilização da plataforma ACESSE-ME implica no seu
                    consentimento para coleta, armazenamento e uso das
                    informações pessoais fornecidas e suas atualizações, dados
                    de tráfego, endereços IP, entre outros que sejam necessários
                    para possibilitar a navegação e utilização completa da
                    plataforma ACESSE-ME.
                  </p>
                  <p className=" pb-3">
                    Diante da necessidade legal de manutenção de registros
                    fiscais e contábeis, a{" "}
                    <strong className="font-bold">ACESSE-ME</strong> guardará os
                    seus dados por 05 (cinco) anos ou pelo prazo legal indicado
                    pela legislação para a manutenção dos registros caso haja
                    alguma alteração, eliminando-os definitivamente após
                    transcorrido este período.
                  </p>
                  <p className=" pb-3">
                    Vale lembrar que, com a exclusão da sua Conta de Acesso,
                    poderão ser mantidos na plataforma textos, fotos e
                    informações eventualmente publicados por você nos fóruns de
                    discussão. Caso seja de seu interesse excluí-los e não tenha
                    sido possível por sua própria conta, você deverá entrar em
                    contato com a{" "}
                    <strong className="font-bold">ACESSE-ME </strong>por meio
                    dos canais de contato definidos no item 8.
                  </p>
                  <p className=" pb-3">
                    Nos preocupamos muito com a segurança das informações que
                    transitam na plataforma ACESSE-ME e, por isso, possuímos
                    segurança baseada em JWT, certificado de segurança SSL e
                    todo o armazenamento de dados da plataforma é realizado por
                    meio de servidor que utiliza serviços de nuvem da AMAZON WEB
                    SERVICE (AWS), que possui um dos melhores níveis e
                    ferramentas de segurança do mundo.
                  </p>
                  <p className=" pb-3">
                    A <strong className="font-bold">ACESSE-ME </strong>dispõe de
                    uma política específica para regular a coleta, guarda e
                    utilização de dados, bem como a sua segurança; a Política de
                    Privacidade e Segurança da{" "}
                    <strong className="font-bold">ACESSE-ME</strong> poderá ser
                    acessada a qualquer momento e integra inseparavelmente estes
                    termos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-12">
            <div aria-hidden="true" className="idtext screen-reader-only"></div>
            <div className="section-3">
              <div className="container-11 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-4">
                  12. Propriedade Intelectual e Industrial
                </h2>
                <div className="rich-text-block w-richtext">
                  <p className=" pb-3">
                    Não é autorizada a utilização das Marcas e de qualquer
                    propriedade intelectual e/ou industrial da{" "}
                    <strong className="font-bold">ACESSE-ME </strong>pelos
                    USUÁRIOS da plataforma sem a prévia e expressa autorização e
                    aprovação da{" "}
                    <strong className="font-bold">ACESSE-ME</strong>, ficando
                    resguardados todos os direitos acerca destas.
                  </p>
                  <p className=" pb-3">
                    Ao acessar a plataforma ACESSE-ME, você concorda que
                    respeitará a existência e a extensão dos direitos de
                    Propriedade Intelectual da{" "}
                    <strong className="font-bold">ACESSE-ME</strong>, bem como
                    de todos os direitos de terceiros que sejam usados, a
                    qualquer título, na plataforma ou que venham a ser
                    disponibilizadas de outras formas.
                  </p>
                  <p className=" pb-3">
                    O acesso à plataforma ACESSE-ME não lhe dá direito ou
                    prerrogativa ao uso de qualquer Propriedade Intelectual,
                    Marca ou outro conteúdo nele inserido.
                  </p>
                  <p className=" pb-3">
                    Se você violar as proibições contidas na legislação pátria
                    vigente sobre propriedade intelectual e/ou nestes Termos,
                    você poderá ter a sua Conta de Acesso bloqueada ou excluída
                    definitivamente, se tiver uma, além de ser responsabilizado,
                    civil e criminalmente, pelas infrações cometidas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-13">
            <div aria-hidden="true" className="idtext screen-reader-only"></div>
            <div className="section-3">
              <div className="container-11 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-4">
                  13. Condições Gerais
                </h2>
                <div className="rich-text-block w-richtext">
                  <p className=" pb-3">
                    Em caso de problemas com a Conta de Acesso, você deverá
                    entrar em contato com a{" "}
                    <strong className="font-bold">ACESSE-ME </strong>através dos
                    seus diversos meios de comunicação disponibilizados no item
                    8.
                  </p>
                  <p className=" pb-3">
                    A <strong className="font-bold">ACESSE-ME </strong>não será
                    responsabilizada, e nem mesmo você, em caso de eventual
                    descumprimento ou cumprimento extemporâneo de uma obrigação
                    prevista nesses termos e em seus acessórios, quando isso
                    ocorrer por casos fortuitos ou eventos de força maior,
                    enquanto perduraram as suas consequências.
                  </p>
                  <p className=" pb-3">
                    Para todos os fins de direito, durante a utilização da
                    plataforma ACESSE-ME, deverá ser considerado oficial o
                    horário da capital do Brasil, Brasília.
                  </p>
                  <p className=" pb-3">
                    Caso, em uma eventualidade, a{" "}
                    <strong className="font-bold">ACESSE-ME </strong>não consiga
                    fazer valer ou cumprir qualquer cláusula ou condição contida
                    nesses termos e em seus acessórios, tal fato não configurará
                    desistência, tolerância ou novação dessa cláusula ou
                    condição.
                  </p>
                  <p className=" pb-3">
                    Se alguma cláusula ou condição contida nesses Termos e em
                    seus acessórios for declarada inválida, no todo ou
                    parcialmente, tal invalidade não afetará as demais cláusulas
                    dos termos e de seus acessórios. Neste caso, a{" "}
                    <strong className="font-bold">ACESSE-ME </strong>fará as
                    adaptações necessárias para que reflitam, da forma mais
                    próxima possível, os termos da previsão declarada
                    inexequível.
                  </p>
                  <p className=" pb-3">
                    A <strong className="font-bold">ACESSE-ME </strong>tem como
                    princípio de sua atuação o respeito a você, USUÁRIO, agindo
                    sempre em conformidade com as disposições do Código de
                    Proteção e Defesa do Consumidor (Lei Federal nº 8.078 de
                    1990), do Marco Civil da Internet (Lei Federal nº 12.965 de
                    2014) e das demais normas referentes a produtos e serviços
                    em ambiente eletrônico previstas em nosso ordenamento
                    jurídico pátrio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="leading-relaxed" id="item-14">
            <div aria-hidden="true" className="idtext screen-reader-only"></div>
            <div className="section-3">
              <div className="container-11 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-4">
                  14. Lei aplicável e Foro de Eleição
                </h2>
                <div className="rich-text-block w-richtext">
                  <p className=" pb-3">
                    A plataforma ACESSE-ME é controlada, operada e administrada
                    pela <strong className="font-bold">ACESSE-ME </strong>na
                    cidade de Belo Horizonte, Estado de Minas Gerais, Brasil,
                    podendo ser acessada por qualquer dispositivo conectado à
                    rede mundial de computadores.
                  </p>
                  <p className=" pb-3">
                    Em vista das diferenças que podem existir entre as
                    legislações locais e nacionais, ao acessar a plataforma,
                    você concorda que a legislação aplicável para fins destes
                    termos e seus acessórios será aquela vigente na República
                    Federativa do Brasil.
                  </p>
                  <p className="pb-3">
                    Você também concorda, juntamente com a{" "}
                    <strong className="font-bold">ACESSE-ME</strong>, que, caso
                    ocorra qualquer desentendimento envolvendo estes Termos e
                    seus acessórias, este será resolvido, preferencialmente, no
                    foro da comarca de Belo Horizonte, Minas Gerais, Brasil.
                    Estaremos disponíveis para saná-lo por meio de negociação,
                    conciliação e mediação antes de partir para a esfera
                    judicial, em prol de uma solução pacífica e amigável
                  </p>
                  <p className="pb-3">
                    Portanto, concordamos expressamente em tentarmos solucionar
                    todo e qualquer impasse por meio de:
                  </p>
                  <ol className="ml-10" role="list">
                    <li>
                      {" "}
                      1. contatos extrajudiciais para realização de acordo
                      amigável;
                    </li>
                    <br></br>
                    <li>
                      2. Mediação Extrajudicial, como meio prévio e obrigatório
                      de solução a ser administrado pela Câmara Privada de
                      Mediação, Conciliação e Arbitragem do Instituto de Ensino,
                      Pesquisa e Extensão – doravante denominada CÂMARA INSEPE,
                      instituída como pessoa jurídica sem fins lucrativos, com
                      atuação em todo território nacional, credenciada junto ao
                      Tribunal de Justiça de Minas Gerais, tendo sede à Rua dos
                      Goitacazes, nº14, sala 409, Centro, Belo Horizonte/MG,
                      CEP: 30190-050, endereço eletrônico
                      “câmara@insepe.org.br”;
                    </li>
                    <br></br>
                    <li>
                      3. e, em último caso, através de uma ação judicial, que
                      ainda assim não impedirá, a qualquer momento, a retomada
                      do procedimento de Mediação, hipótese em que será
                      requerida ao juiz a suspensão do respectivo processo por
                      prazo suficiente para a solução consensual do conflito.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container classname="bg-[#f8f8f8]">
        <MeetUsHome/>
        </Container>
      </div>
    </>
  );
}

export default Terms;
