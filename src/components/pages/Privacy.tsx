import Container from "../layout/Container";
import Navbar from "../layout/Navbar";
import MeetUsHome from "../partials/Home/MeetUsHome";

function Privacy() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Container classname="bg-[var(--primary-color)] bg-gradient-to-b from-[var(--primary-color)] to-[var(--gradient-color)] text-white">
          <div className="flex flex-col container mx-auto md:items-center">
            <Navbar />
            <h2 className="md:text-6xl lg:ml-0 ml-4 text-4xl w-[92%] md:w-[65%] lg:leading-normal font-semibold my-12 lg:my-24">
              Política de Privacidade e Segurança da Acesse-me
            </h2>
          </div>
        </Container>
        <div className="flex flex-col container px-4 lg:px-0 lg:mx-[22rem]">
            <h3 className="font-semibold text-4xl lg:ml-2 p-6">Sumário</h3>
          <ol role="list" className="flex flex-col gap-6 md:ml-4">
            <li className="flex items-center">
              <a href="#item-1" className="underline text-lg text-[#333]lg:ml-10">
                1. Propriedade e Apresentação
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-2" className="underline text-lg text-[#333]lg:ml-10">
                2. Definições
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-3" className="underline text-lg text-[#333]lg:ml-10">
                3. Contato
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-4" className="underline text-lg text-[#333]lg:ml-10">
                4. Quais Informações são Coletadas e Como são Tratadas
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-5" className="underline text-lg text-[#333]lg:ml-10">
                5. Como os Dados podem ser Compartilhados
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-6" className="underline text-lg text-[#333]lg:ml-10">
                6. Direitos dos USUÁRIOS
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-7" className="underline text-lg text-[#333]lg:ml-10">
                7. Bases Legais para Tratamento de Dados
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-8" className="underline text-lg text-[#333]lg:ml-10">
                8. Armazenamento
              </a>
            </li>
            <li className="flex items-center">
              <a href="#item-9" className="underline text-lg text-[#333]lg:ml-10">
                9. Medidas de Segurança
              </a>
            </li>
          </ol>
        </div>
        <div role="list" className="lg:mx-[22rem] mx-8 md:mx-16 lg:w-[60%]  pb-8 my-12">
          <div role="listitem" className="w-dyn-item" id="item-1">
            <div aria-hidden="true" className="screen-reader-only"></div>
            <div className="section-4">
              <div className="container-12 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-3">
                  1. Propriedade e Apresentação
                </h2>
                <div className="rich-text-block-2 w-richtext">
                  <p className="py-3">
                    Esta plataforma digital, com endereço eletrônico
                    “acesseme.com”, é de propriedade exclusiva e administrada
                    pela ACESSE-ME SOLUÇÕES ONLINE E CONSULTORIA ASSISTIVA LTDA,
                    citada neste documento como <strong>ACESSE-ME</strong>, com
                    endereço na rua Rua Titânio, nº 280, apto. 202, bloco 08,
                    bairro Camargos, Belo Horizonte, Minas Gerais, CEP
                    30.520-150, inscrita no Cadastro Nacional de Pessoas
                    Jurídicas do Ministério da Fazenda sob o nº
                    37.056.154/0001-05, e correio eletrônico para contato{" "}
                    <br></br>{" "}
                    <a
                      className="underline"
                      href="mailto:atendimento@acesseme.com"
                    >
                      atendimento@acesseme.com
                    </a>
                  </p>
                  <p className="py-3">
                    A plataforma ACESSE-ME<strong> </strong>foi criada com o
                    objetivo de aproximar histórias e encurtar caminhos por meio
                    de uma conexão rápida entre pessoas com deficiência, pessoas
                    com doenças raras, seus familiares e amigos, e profissionais
                    especializados.&nbsp;
                  </p>
                  <p className="py-3">
                    Esta Política de Privacidade e Segurança descreve como a
                    plataforma ACESSE-ME pode realizar a coleta, processamento,
                    tratamento, armazenamento e compartilhamento de dados que o
                    USUÁRIO insere ou produz durante o cadastro e/ou navegação
                    pela plataforma. Esse documento é o principal em relação à
                    privacidade, tratamento de dados e segurança, mas todos os
                    demais documentos que regem a relação entre o USUÁRIO e a{" "}
                    <strong>ACESSE-ME</strong> são parte integrante e
                    inseparável desta Política de Privacidade e Segurança,
                    incluindo-se os <br></br>
                    <a className="underline" href="/terms">
                      Termos e Condições de Uso
                    </a>
                  </p>
                  <p className="py-3">
                    A plataforma ACESSE-ME poderá ser denominada neste documento
                    como “Plataforma digital”, “Aplicação” ou simplesmente como
                    ACESSE-ME. A empresa ACESSE-ME SOLUÇÕES ONLINE E CONSULTORIA
                    ASSISTIVA LTDA poderá ser denominada neste documento
                    simplesmente como “<strong>ACESSE-ME”.</strong>
                  </p>
                  <p className="py-3">‍</p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-2">
            <div aria-hidden="true" className="screen-reader-only"></div>
            <div className="section-4">
              <div className="container-12 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-3">2. Definições</h2>
                <div className="rich-text-block-2 w-richtext">
                  <p className="py-3">
                    Para melhor entendimento desta Política de Privacidade e
                    Segurança pelo USUÁRIO, abaixo, seguem algumas definições
                    relevantes de termos e expressões que serão utilizados neste
                    regramento:
                  </p>
                  <p className="py-3">‍</p>
                  <p className="py-3">
                    <strong>“Dados”</strong> qualquer informação que identifique
                    ou não; ou que possa identificar uma pessoa natural ou não;
                    e/ou qualquer informação que identifique ou possa
                    identificar uma pessoa jurídica; informações anonimizadas e
                    ou estatísticas. Inclui dentro da sua definição os dados
                    pessoais.
                  </p>
                  <p className="py-3">
                    <strong>“Dados Pessoais” </strong>qualquer informação que
                    identifique ou que possa identificar uma pessoa natural;
                    dados de uma pessoa natural, indivíduo vivo que pode ser
                    identificado a partir desses dados (ou dessas e outras
                    informações que possuímos ou que podemos vir a possuir).
                  </p>
                  <p className="py-3">
                    “<strong>Dados Pessoais Sensíveis”</strong> dado pessoal
                    sobre origem racial ou étnica, convicção religiosa, opinião
                    política, filiação a sindicato ou a organização de caráter
                    religioso, filosófico ou político, dado referente à saúde ou
                    à vida sexual, dado genético ou biométrico, quando vinculado
                    a uma pessoa natural.
                  </p>
                  <p className="py-3">
                    <strong>“Dados de Uso”</strong> Os Dados de Uso são dados
                    coletados automaticamente, gerados pelo uso do Serviço ou
                    pela própria infraestrutura do Serviço (por exemplo, a
                    duração de uma visita à página).
                  </p>
                  <p className="py-3">
                    <strong>“Cookies”</strong> Cookies são pequenos pedaços de
                    dados armazenados no dispositivo do usuário (por exemplo,
                    dados de sites ou links já visitados).
                  </p>
                  <p className="py-3">
                    “Controlador dos Dados” pessoa natural ou jurídica, de
                    direito público ou privado, a quem competem as decisões
                    referentes ao tratamento de dados pessoais.
                  </p>
                  <p className="py-3">
                    <strong>“Operador dos Dados”</strong> pessoa natural ou
                    jurídica, de direito público ou privado, que realiza o
                    tratamento de dados pessoais em nome do controlador.
                  </p>
                  <p className="py-3">
                    <strong>“Agentes de Tratamento”</strong> são o conjunto do
                    qual fazem parte o controlador e o operador. Para os fins
                    desta Política de Privacidade e Segurança, a{" "}
                    <strong>ACESSE-ME</strong> faz parte dos Agentes de
                    Tratamento de Dados, pois exerce ambos os papéis, de
                    Controlador e Operador, uma vez que coleta, trata, usa,
                    compartilha e armazena Dados Pessoais do USUÁRIO.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-3">
            <div aria-hidden="true" className="screen-reader-only"></div>
            <div className="section-4">
              <div className="container-12 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-3">3. Contato</h2>
                <div className="rich-text-block-2 w-richtext">
                  <p className="py-3">
                    <strong>3.1. Do USUÁRIO com a ACESSE-ME</strong>
                  </p>
                  <p className="py-3">
                    Caso o USUÁRIO queira realizar qualquer contato para falar
                    sobre qualquer direito relacionado a dados, pessoais ou não,
                    e/ou sobre o tratamento desses dados realizado pela{" "}
                    <strong>ACESSE-ME, </strong>como, por exemplo, armazenamento
                    e compartilhamento de dados, correção de dados, pedido de
                    exclusão, pedido de envio dos dados, dentre outros,
                    <strong> </strong>deverá fazer o contato pelo e-mail
                    “atendimento@acesseme.com”, incluindo no assunto o tema do
                    contato.
                  </p>
                  <p className="py-3">
                    Todas as demais comunicações a serem realizadas com a{" "}
                    <strong>ACESSE-ME</strong> poderão ser realizadas por meio
                    dos canais indicados nos <br></br>
                    <a className="underline" href="/terms">
                      Termos e Condições de Uso
                    </a>{" "}
                    <br />
                  </p>
                  <p className="py-3">
                    <strong>3.2. Da ACESSE-ME com o USUÁRIO</strong>
                  </p>
                  <p className="py-3">
                    A <strong>ACESSE-ME </strong>respeita a privacidade dos
                    USUÁRIOS e não faz contatos indesejados, não esperados e não
                    autorizados aos mesmos.
                  </p>
                  <p className="py-3">
                    Para facilitar a utilização da plataforma, a{" "}
                    <strong>ACESSE-ME</strong> poderá realizar o envio de
                    e-mails com mensagens sobre as funcionalidades da
                    plataforma, novidades, orientações e demais informações
                    importantes para a relação com a <strong>ACESSE-ME</strong>{" "}
                    durante sua utilização da aplicação ou para a relação com
                    outros USUÁRIOS
                    <strong>.&nbsp;</strong>
                  </p>
                  <p className="py-3">
                    Além das informações essenciais, a{" "}
                    <strong>ACESSE-ME </strong>
                    utilizará o endereço de e-mail do USUÁRIO&nbsp; PESSOAL para
                    o envio de mensagens publicitárias e promocionais sobre a
                    plataforma, podendo também incluir produtos, serviços,
                    promoções, conteúdos e novidades de nossos parceiros. O
                    consentimento para tal será dado mediante marcação
                    específica desta opção no ato do cadastro na plataforma,
                    sendo certo que o USUÁRIO poderá, a qualquer momento,
                    solicitar o cancelamento de e-mails de publicidade ou
                    marketing de terceiros.
                  </p>
                  <p className="py-3">
                    A <strong>ACESSE-ME </strong>também utilizará o seu e-mail
                    de forma prioritária para enviar informações necessárias
                    sobre a criação de Conta de Acesso, recuperação da senha de
                    acesso e interações realizadas dentro da plataforma.
                  </p>
                  <p className="py-3">
                    Caso o USUÁRIO decida por não receber e-mails da{" "}
                    <strong>ACESSE-ME </strong>ou de seus parceiros, ele deverá
                    clicar no campo de excluir o cadastro existente nos e-mails
                    enviados, quando recebê-los. Também é possível realizar a
                    solicitação de cancelamento de e-mails através de qualquer
                    um dos canais disponibilizados para contato com a{" "}
                    <strong>ACESSE-ME</strong>. Importante o USUÁRIO estar
                    ciente que existem tecnologias e serviços de automatização
                    de e-mails que podem demandar um prazo para a execução do
                    cancelamento; logo, a <strong>ACESSE-ME</strong> precisará
                    de um prazo de até 5 (cinco) dias para garantir que o
                    USUÁRIO não receberá mais os e-mails. A{" "}
                    <strong>ACESSE-ME </strong>não poderá ser responsabilizada
                    pelos e-mails que já estavam programados para serem enviados
                    antes da solicitação e que não puderam ser cancelados.
                  </p>
                  <p className="py-3">
                    É importante destacar, ainda, que nenhum pedido de
                    cancelamento para recebimento dos e-mails inclui aqueles
                    referentes a informações importantes e necessárias para a
                    utilização da plataforma e manutenção da relação com a{" "}
                    <strong>ACESSE-ME.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-4">
            <div aria-hidden="true" className="screen-reader-only"></div>
            <div className="section-4">
              <div className="container-12 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-3">
                  4. Quais Informações são Coletadas e Como são Tratadas
                </h2>
                <div className="rich-text-block-2 w-richtext">
                  <p className="py-3">
                    A <strong>ACESSE-ME </strong>poderá coletar dados inseridos
                    diretamente pelo USUÁRIO no cadastro e durante a utilização
                    da plataforma e, ainda, informações que são produzidas
                    dentro do site e da aplicação de forma automática pelo
                    USUÁRIO
                    <strong> </strong>ou por seus equipamentos/hardwares.
                  </p>
                  <p className="py-3">
                    <strong>4.1. Dados fornecidos pelo USUÁRIO</strong>
                  </p>
                  <p className="py-3">
                    No momento do cadastro, o USUÁRIO deverá inserir na
                    plataforma seu nome, nome de usuário que o identifique,
                    e-mail, senha, gênero, qual é a deficiência/doença que
                    possui (em se tratando de USUÁRIO PESSOAL), se é membro de
                    alguma Associação, e qual é o seu tipo de perfil (pessoa com
                    deficiência, familiar/amigo ou profissional). Feito o
                    cadastro, ao acessar a página "Minha Conta", será possível
                    ao USUÁRIO, também, inserir uma foto.
                  </p>
                  <p className="py-3">
                    Os Dados fornecidos são utilizados para gestão, navegação e
                    consulta da própria plataforma, do cadastro e dos serviços;
                    e para a segurança do USUÁRIO e também da{" "}
                    <strong>ACESSE-ME</strong>, evitando fraudes na utilização
                    da Conta de Acesso.&nbsp;
                  </p>
                  <p className="py-3">
                    A <strong>ACESSE-ME</strong> utilizará esses dados também
                    para publicidade e marketing, promoções, descontos, eventos
                    e realização de pesquisa de satisfação, sempre priorizando o
                    respeito à privacidade e outros direitos fundamentais do
                    USUÁRIO, buscando sempre melhorar a sua experiência e nunca
                    agindo de forma indesejável.
                  </p>
                  <p className="py-3">
                    Todos os dados inseridos pelo USUÁRIO poderão ser
                    confirmados com a comparação com bases de Dados públicas ou
                    privadas. Isso é extremamente importante para garantir a
                    segurança de todas as partes e evitar fraudes e/ou prática
                    de exercício ilegal da profissão.
                  </p>
                  <p className="py-3">
                    <strong>4.2. Dados coletados automaticamente</strong>
                  </p>
                  <p className="py-3">
                    Também poderá ocorrer a coleta de informações sobre como os
                    serviços, páginas, funcionalidades e a plataforma é
                    utilizada pelo USUÁRIO<strong>.</strong> Essa coleta poderá
                    incluir dados como: características do dispositivo de
                    acesso, do navegador, IP (com data e hora), origem do IP,
                    informações sobre cliques, páginas acessadas, as páginas
                    seguintes acessadas após a saída das páginas, tempo de
                    visualização em cada página, dentre outros. Para tal coleta,
                    a <strong>ACESSE-ME</strong> fará o uso de algumas
                    tecnologias padrões, como <em>cookies, pixel tags </em>e{" "}
                    <em>local shared object.</em>
                  </p>
                  <p className="py-3">
                    Os Dados coletados de forma automática são utilizados
                    principalmente com o propósito de melhorar a experiência de
                    navegação do<strong> </strong>USUÁRIO nas páginas conforme
                    os hábitos e as preferências, e a velocidade nas atividades
                    e experiências futuras dentro das páginas e da
                    plataforma.&nbsp;
                  </p>
                  <p className="py-3">
                    A <strong>ACESSE-ME</strong> poderá utilizar, ainda, esses
                    dados, também para que a publicidade e marketing, promoções,
                    descontos e eventos ocorram de forma comedida e conforme as
                    preferências e hábitos do USUÁRIO. Esse tipo de utilização
                    das informações, quando realizada, priorizará o bem estar
                    dentro e fora da plataforma e sempre respeitará os direitos
                    fundamentais e a privacidade do USUÁRIO<strong>.</strong>
                  </p>
                  <p className="py-3">
                    É importante informar que a utilização destas informações é
                    restrita aos objetivos indicados neste documento, que se
                    compromete a não utilizar ou compartilhá-los com terceiros
                    para finalidades diversas das informadas neste instrumento.
                  </p>
                  <p className="py-3">
                    A qualquer tempo, o USUÁRIO pode utilizar as ferramentas de
                    seu navegador que impedem a instalação de cookies e, ainda,
                    excluir quaisquer cookies existentes em seus dispositivos de
                    conexão com a Internet. No entanto, os dados automáticos
                    produzidos e coletados são essenciais para o funcionamento
                    de alguns serviços disponíveis nos sites e na plataforma
                    digital da <strong>ACESSE-ME,</strong> assim, a não
                    autorização ou o bloqueio pelo navegador pode fazer com que
                    ocorram erros ou que algumas funcionalidades não estejam
                    disponíveis.
                  </p>
                  <p className="py-3">
                    <strong>4.3. Dados Financeiros</strong>
                  </p>
                  <p className="py-3">
                    As informações de pagamento são armazenadas temporariamente
                    pela <strong>ACESSE-ME</strong>, tendo em vista que os
                    pagamentos mensais devidos pelos USUÁRIOS PROFISSIONAIS e
                    pelos USUÁRIOS PESSOAIS PREMIUM são realizados por meio da
                    própria plataforma. A <strong>ACESSE-ME </strong>garante que
                    essas informações não serão compartilhadas com terceiros e
                    não serão utilizadas para outras finalidades que não as aqui
                    expressamente definidas.
                  </p>
                  <p className="py-3">
                    A <strong>ACESSE-ME </strong>se reserva ao direito de
                    realizar mudanças unilaterais nos procedimentos de
                    pagamento, a seu critério, de acordo com o que melhor lhe
                    couber, sempre com a adequada comunicação de forma prévia
                    aos USUÁRIOS cadastrados, que poderão optar com liberalidade
                    pelo cancelamento ou continuidade de sua Conta de Acesso.
                  </p>
                  <p className="py-3">
                    <strong>4.4. Outros Dados</strong>
                  </p>
                  <p className="py-3">
                    Excepcionalmente, a <strong>ACESSE-ME</strong> poderá
                    coletar informações inseridas pelo USUÁRIO, que não as
                    expressamente identificadas neste documento e nos Termos e
                    Condições de Uso, que sejam inseridas pelo USUÁRIO e sobre o
                    USUÁRIO
                    <strong> </strong>voluntariamente no processo de navegação
                    da plataforma, ou quando entrar em contato com a{" "}
                    <strong>ACESSE-ME</strong>.
                  </p>
                  <p className="py-3">
                    A <strong>ACESSE-ME</strong> garante que os Dados Pessoais e
                    informações inseridas na plataforma ACESSE-ME, mesmo que
                    armazenadas em banco de dados, não serão utilizadas e nem
                    compartilhadas em desacordo com a legislação pátria
                    aplicável e com o disposto neste instrumento.
                  </p>
                  <p className="py-3">
                    Além das formas até aqui expostas, a{" "}
                    <strong>ACESSE-ME</strong> poderá utilizar os Dados do
                    USUÁRIO das seguintes formas:
                  </p>
                  <ol className="ml-6 flex flex-col gap-3" role="list">
                    <li>
                      <strong>1.atualização de cadastro;</strong>
                    </li>
                    <li>
                      <strong>
                        2. para prestar serviços ao USUÁRIO, incluindo gerenciar e
                        criar Conta de Acesso, resolver dificuldades técnicas e
                        habilitar ou desabilitar funcionalidades;
                      </strong>
                    </li>
                    <li>
                      <strong>3. garantia da segurança do USUÁRIO;</strong>
                    </li>
                    <li>
                      <strong>
                        4. resposta a solicitações do próprio USUÁRIO;
                      </strong>
                    </li>
                    <li>
                      <strong>
                        5. informação acerca de alterações nos termos e seus
                        acessórios;
                      </strong>
                    </li>
                    <li>
                      <strong>
                        6. elaboração de estatísticas com relação ao uso da
                        plataforma ACESSE-ME, garantido o anonimato do USUÁRIO,
                        inclusive para fins de aperfeiçoamento e entendimento do
                        perfil dos USUÁRIOS para a melhoria da plataforma
                        ACESSE-ME;
                      </strong>
                    </li>
                    <li>
                      <strong>
                        7. aperfeiçoamento de ferramentas de interatividade entre a
                        plataforma ACESSE-ME e o USUÁRIO, garantido seu
                        anonimato;
                      </strong>
                    </li>
                    <li>
                      <strong>8. cumprimento de ordens judiciais;</strong>
                    </li>
                    <li>
                      <strong>
                        9. defesa dos direitos da ACESSE-ME contra o USUÁRIO e
                        terceiros em procedimentos judiciais ou administrativos;
                      </strong>
                    </li>
                    <li>
                      <strong>10. para customizar ofertas e experiências;</strong>
                    </li>
                    <li>
                      <strong>
                        11. para acompanhar as atividades do USUÁRIO e tráfego na
                        plataforma ACESSE-ME;&nbsp;
                      </strong>
                    </li>
                    <li>
                      <strong>
                        12. para entrar em contato com o USUÁRIO, incluindo sobre
                        assuntos de serviço, respostas de contato com a
                        ACESSE-ME ou comunicações de marketing permitidas por
                        meio de qualquer meio de comunicação disponível;&nbsp;
                      </strong>
                    </li>
                    <li>
                      <strong>
                       13. para auxiliar no cumprimento dos Termos e Condições de
                        Uso da plataforma ACESSE-ME e de suas Políticas, tal
                        como esta.&nbsp;{" "}
                      </strong>
                    </li>
                  </ol>
                  <p className="py-3">‍</p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-5">
            <div aria-hidden="true" className="screen-reader-only"></div>
            <div className="section-4">
              <div className="container-12 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-3">
                  5. Como os Dados Podem ser Compartilhados
                </h2>
                <div className="rich-text-block-2 w-richtext">
                  <p className="py-3">
                    A <strong>ACESSE-ME</strong> tem como princípio a
                    confidencialidade e segurança das Informações do USUÁRIO e o
                    tem como prioridade em seus negócios. Assim a{" "}
                    <strong>ACESSE-ME</strong> assume o compromisso de não
                    divulgar, compartilhar, dar acesso, facilitar acesso,
                    alugar, vender, trocar ou, de qualquer outra forma,
                    disponibilizar tais informações a outros USUÁRIOS e
                    terceiros, sob nenhum pretexto, exceto nos casos autorizados
                    expressamente pelo USUÁRIO e aqui indicados.
                  </p>
                  <p className="py-3">
                    <strong>5.1. Perfil do USUÁRIO</strong>
                  </p>
                  <p className="py-3">
                    Todos os dados informados no item 4.1 desta política
                    formarão um Perfil do USUÁRIO que poderá ficar visível ou
                    poderá ser exibido para outros USUÁRIOS<strong>. </strong>
                    Assim, o USUÁRIO declara estar ciente e consente
                    expressamente com o compartilhamento de todas as informações
                    inseridas no cadastro com outros USUÁRIOS. Nenhum USUÁRIO
                    <strong> </strong>que visualizar o perfil de outros USUÁRIOS
                    <strong> </strong>está autorizado a coletar, copiar, ou
                    utilizar para qualquer outro fim que não aqueles para o qual
                    foram disponibilizados.
                  </p>
                  <p className="py-3">
                    <strong>5.2. Prestadores de serviços</strong>
                  </p>
                  <p className="py-3">
                    A <strong>ACESSE-ME</strong> contrata empresas terceiras
                    para ajudar a fornecer os serviços que o USUÁRIO
                    <strong> </strong>
                    utiliza (por exemplo, manutenção, análise, auditoria,
                    pagamentos, detecção de fraudes, marketing e
                    desenvolvimento) e esses serviços são necessários para o
                    funcionamento da plataforma digital e de seus sites. As
                    principais empresas e serviços terceiros que poderão ter
                    acesso aos dados dos USUÁRIOS para executar atividades em
                    nome da <strong>ACESSE-ME </strong>são: [inserir]
                  </p>
                  <p className="py-3">
                    <strong>5.3. Outras formas de compartilhamento</strong>
                  </p>
                  <p className="py-3">
                    Serão permitidas também, em exceção, a entrega de dados do
                    USUÁRIO em caso de cumprimento de ordens judiciais e/ou
                    defesa dos direitos da <strong>ACESSE-ME</strong> contra o
                    USUÁRIO e terceiros em procedimentos judiciais ou
                    administrativos. A <strong>ACESSE-ME</strong> se compromete
                    a cientificar o USUÁRIO<strong>,</strong> caso os dados
                    sejam pessoais, e divulgar esses Dados apenas na medida
                    necessária para cumprir a determinação judicial,
                    permanecendo sigilosos os Dados não requeridos pela
                    autoridade em questão ou não necessários para a demanda.
                  </p>
                  <p className="py-3">
                    Existe a possibilidade de a <strong>ACESSE-ME </strong>
                    precisar divulgar seus dados se assim exigido por lei,
                    intimação judicial ou outro procedimento legal; ou se
                    acreditarmos, de boa-fé, que a revelação seja necessária
                    para: (i) investigar, impedir ou tomar medidas relacionadas
                    a atividades ilegais suspeitas ou reais ou para cooperar com
                    órgãos públicos; (ii) executar os contratos da{" "}
                    <strong>ACESSE-ME</strong>; (iii) investigar e defender
                    contra quaisquer reivindicações ou alegações de terceiros
                    contra a <strong>ACESSE-ME</strong>; (iv) proteger a
                    segurança ou a integridade dos serviços (por exemplo, o
                    compartilhamento com empresas que estão sofrendo ameaças
                    semelhantes) da <strong>ACESSE-ME;</strong> ou (v) exercer
                    ou proteger os direitos e a segurança{" "}
                    <strong>ACESSE-ME</strong>, dos USUÁRIOS, funcionários ou
                    terceiros. Sempre que isso ocorrer, procuraremos notificar
                    os USUÁRIOS sobre as demandas legais referentes aos seus
                    dados pessoais, a menos que proibido por lei ou mandado
                    judicial ou se a requisição for emergencial. A{" "}
                    <strong>ACESSE-ME</strong> poderá contestar qualquer demanda
                    para acesso a dados, a seu exclusivo critério, quando julgar
                    que as solicitações são excessivas, vagas ou feitas por
                    autoridades incompetentes.
                  </p>
                  <p className="py-3">
                    Caso a <strong>ACESSE-ME</strong> passe por qualquer
                    operação societária ou alienação de propriedade intelectual
                    que seja parte de uma venda, fusão, alteração no controle ou
                    qualquer evento preparatório para qualquer dessas operações,
                    ela estará autorizada a compartilhar os dados dos USUÁRIOS
                    com terceiros participantes do evento. Qualquer outra
                    entidade que comprar a <strong>ACESSE-ME</strong>, ou parte
                    desta, terá o direito de continuar utilizando os dados se
                    sub-rogando em todos os direito incluídos neste documento.
                  </p>
                  <p className="py-3">
                    A <strong>ACESSE-ME</strong> se reserva ao direito de
                    compartilhar certas informações desde que não pessoais,
                    sendo dados estatísticos e/ou anonimizados - Dados que não
                    identificam os USUÁRIOS da plataforma{" "}
                    <strong>ACESSE-ME </strong>individualmente - e que não
                    exponham o conteúdo detalhado dos serviços realizados entre
                    os USUÁRIOS<strong>,</strong> com terceiros prestadores de
                    serviços, empresas parceiras ou pesquisadores aprovados, no
                    intuito de melhor compreender quais publicidades e serviços
                    podem interessar ao USUÁRIO, para melhorar a experiência do
                    USUÁRIO e qualidade e a efetividade geral dos serviços
                    prestados pela <strong>ACESSE-ME</strong>, para contribuir
                    em pesquisas acadêmicas ou qualquer outro tipo de negociação
                    de interesse da <strong>ACESSE-ME</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-6">
            <div aria-hidden="true" className="screen-reader-only"></div>
            <div className="section-4">
              <div className="container-12 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-3">
                  6. Direitos do USUÁRIO
                </h2>
                <div className="rich-text-block-2 w-richtext">
                  <p className="py-3">
                    A <strong>ACESSE-ME</strong> armazenará e tratará os dados
                    do USUÁRIO enquanto este mantiver uma conta ativa na
                    plataforma digital, o que inclui todos os dados inseridos
                    dentro da plataforma, produzidos dentro da plataforma e
                    aqueles gerados de forma automática.
                  </p>
                  <p className="py-3">
                    <strong>
                      6.1. Direito de acessar e controlar os dados
                    </strong>
                  </p>
                  <p className="py-3">
                    O USUÁRIO poderá solicitar, a qualquer momento, a
                    interrupção do uso de todos ou de alguns de seus dados
                    pessoais, ou limitar a nossa utilização dos mesmos, estando
                    ciente de que este tipo de interrupção poderá prejudicar o
                    desempenho esperado das funcionalidades da plataforma. Para
                    tal, o USUÁRIO deverá entrar em contato com a{" "}
                    <strong>ACESSE-ME </strong>por meio do canal disponibilizado
                    no item 3.1 deste documento.
                  </p>
                  <p className="py-3">
                    Quando não for possível, por meio dos recursos de edição e
                    atualização das informações pelo próprio USUÁRIO dentro da
                    plataforma, este poderá realizar a solicitação de alteração,
                    correção ou atualização dos dados para a{" "}
                    <strong>ACESSE-ME</strong>.
                  </p>
                  <p className="py-3">
                    A qualquer momento, o USUÁRIO poderá solicitar uma cópia de
                    todos os seus dados pessoais sob a posse da{" "}
                    <strong>ACESSE-ME</strong>. O formato do arquivo contendo os
                    dados será definido segundo os critérios da{" "}
                    <strong>ACESSE-ME</strong>, não podendo ser esta solicitação
                    objeto de onerosidade excessiva para esta.
                  </p>
                  <p className="py-3">
                    <strong>6.2. Exclusão da conta</strong>
                  </p>
                  <p className="py-3">
                    Caso o USUÁRIO opte por excluir sua conta da plataforma
                    ACESSE-ME, este deverá estar ciente de que a{" "}
                    <strong>ACESSE-ME</strong> poderá armazenar seus dados mesmo
                    após a exclusão. Essa manutenção ocorrerá apenas para dados
                    essenciais para que a <strong>ACESSE-ME </strong>possa
                    cumprir suas obrigações legais, para resolver litígios,
                    garantir a segurança, evitar fraudes e abuso ou para atender
                    a alguma solicitação de não recebimento de e-mails ou
                    mensagens.
                  </p>
                  <p className="py-3">
                    As informações e dados necessários para a cobrança de
                    eventuais pagamentos ainda não realizados e para o registro
                    das operações financeiras realizadas também serão mantidos,
                    anonimizados, quando possível, para maior segurança da{" "}
                    <strong>ACESSE-ME </strong>e dos USUÁRIOS, e para
                    cumprimento das legislações vigentes.
                  </p>
                  <p className="py-3">
                    Poderão ser mantidos, ainda, textos, fotos e informações
                    eventualmente publicados pelo USUÁRIO durante a utilização
                    da plataforma ACESSE-ME. Caso seja de interesse do USUÁRIO
                    excluí-los e não seja possível fazer isso por sua própria
                    conta, ele deverá entrar em contato com a{" "}
                    <strong>ACESSE-ME </strong>por meio dos canais de contato
                    disponíveis.
                  </p>
                  <p className="py-3">
                    Dados que não identificam ou não tem condições de
                    identificar USUÁRIOS poderão ser mantidos mesmo após o
                    encerramento da conta, mesmo que sejam dados pessoais, desde
                    que tenham sido anonimizados ou tornados parte de dados
                    estatísticos.
                  </p>
                  <p className="py-3">
                    <strong>6.3. Revogação do Consentimento</strong>
                  </p>
                  <p className="py-3">
                    O USUÁRIO<strong> </strong>poderá revogar o consentimento
                    dado à <strong>ACESSE-ME</strong> para tratar os seus dados
                    pessoais a qualquer momento informando esta pelo canal
                    disponibilizado no item 3.1. A revogação do consentimento
                    não impedirá a <strong>ACESSE-ME </strong>de tratar dos
                    dados do USUÁRIO, podendo o tratamento ocorrer em relação a
                    outros dados que não sejam pessoais ou quando houver outras
                    bases legais para o tratamento dispostas na legislação
                    aplicáveis a esta relação.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-7">
            <div aria-hidden="true" className="screen-reader-only"></div>
            <div className="section-4">
              <div className="container-12 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-3">
                  7. Bases Legais para Tratamento de Dados
                </h2>
                <div className="rich-text-block-2 w-richtext">
                  <p className="py-3">
                    A <strong>ACESSE-ME</strong> coleta e trata Dados Pessoais
                    apenas quando possui bases legais para isso. As bases legais
                    para o tratamento de dados realizado pela{" "}
                    <strong>ACESSE-ME</strong> em sua plataforma incluem o
                    Consentimento fornecido de forma expressa antes da criação
                    da Conta de Acesso, sendo este essencial para acesso às
                    funcionalidades da plataforma. O consentimento dado pelo
                    USUÁRIO é específico para as finalidades descritas neste
                    documento. Todas as vezes que este documento ou alguma
                    funcionalidade da plataforma ACESSE-ME passar por
                    atualizações ou modificações que impactem em alteração no
                    tratamento de dados pessoais, o USUÁRIO será informado para
                    que possa dar o seu consentimento novamente.
                  </p>
                  <p className="py-3">
                    Outras bases legais podem autorizar a{" "}
                    <strong>ACESSE-ME</strong> a tratar dados do USUÁRIO por
                    meio da plataforma ACESSE-ME mesmo sem o consentimento
                    expresso para tal, que incluem mas não se limitam ao
                    Contrato firmado entre <strong>ACESSE-ME</strong> e USUÁRIO
                    (Termos de Uso) ou Obrigação legal.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-8">
            <div aria-hidden="true" className="screen-reader-only"></div>
            <div className="section-4">
              <div className="container-12 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-3">
                  8. Armazenamento
                </h2>
                <div className="rich-text-block-2 w-richtext">
                  <p className="py-3">
                    Preocupada com a segurança das informações que transitam no
                    site e na plataforma ACESSE-ME, a <strong>ACESSE-ME</strong>{" "}
                    realiza o armazenamento de todos os dados por meio do AMAZON
                    WEB SERVICE (AWS), que é um serviço de banco de dados que
                    possui um dos melhores níveis e ferramentas de segurança do
                    mundo. O serviço oferecido pela Amazon tem conformidade com
                    SSAE 16, ISO 27001, PCI DSS v3.2 e HIPAA que são os
                    protocolos mais avançados de segurança, dispondo de
                    proteções contra ataques. Além disso, a plataforma possui
                    segurança baseada em JWT e certificado de segurança SSL.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="w-dyn-item" id="item-9">
            <div aria-hidden="true" className="screen-reader-only"></div>
            <div className="section-4">
              <div className="container-12 w-container">
                <h2 className="pt-4 font-bold text-4xl pb-3">
                  9. Medidas de Segurança
                </h2>
                <div className="rich-text-block-2 w-richtext">
                  <p className="py-3">
                    A <strong>ACESSE-ME</strong> recomenda que o USUÁRIO utilize
                    uma senha que não contenha partes de seus dados pessoais
                    (nome, data de aniversário, etc) e que contenha letras
                    maiúsculas, números e caracteres especiais. É recomendado
                    ainda que o USUÁRIO não utilize a mesma senha para outros
                    sites e/ou serviços e que troque sua senha de forma
                    periódica. Além disso, é importante que o USUÁRIO
                    <strong> </strong>
                    mantenha seus dados da Conta de Acesso à plataforma
                    ACESSE-ME (login e senha) sob total sigilo, não os
                    divulgando a outros USUÁRIOS ou a terceiros.
                  </p>
                  <p className="py-3">
                    A <strong>ACESSE-ME</strong> nunca solicitará ao USUÁRIO que
                    informe sua senha fora da plataforma ACESSE-ME, por
                    telefone, e-mail ou por qualquer outro meio de comunicação.
                    A senha do USUÁRIO deverá ser usada exclusivamente no
                    momento do ingresso à Conta de Acesso do USUÁRIO na
                    plataforma ACESSE-ME. Caso o USUÁRIO suspeite que sua senha
                    tenha sido exposta a outros USUÁRIOS ou a terceiros, a
                    ACESSE-ME recomenda a imediata substituição da senha.
                  </p>
                  <p className="py-3">
                    Mesmo com os maiores esforços e dedicação da{" "}
                    <strong>ACESSE-ME</strong> para com os seus USUÁRIOS, o
                    atual estágio da tecnologia não permite que seja criada uma
                    base de Dados absolutamente inviolável e segura contra
                    ataques, sendo que a <strong>ACESSE-ME</strong> se utiliza
                    de toda a proteção compatível com a sua atuação e porte.
                  </p>
                  <p className="py-3">
                    A <strong>ACESSE-ME</strong> adota recursos tecnológicos
                    avançados compatíveis com a sua atuação para garantir a
                    segurança de todos os dados do USUÁRIO coletados e
                    armazenados. Nem mesmo os colaboradores da{" "}
                    <strong>ACESSE-ME</strong> possuem livre acesso à base de
                    Dados dos USUÁRIOS, sendo este limitado apenas àquelas
                    pessoas cujas funções exigem o contato com Dados do USUÁRIO.
                  </p>
                  <p className="py-3">
                    Entre as medidas de segurança implementadas para a proteção
                    dos Dados inseridos na plataforma ACESSE-ME, estão a
                    utilização de servidor terceirizado que utiliza serviços de
                    nuvem da AMAZON WEB SERVICE (AWS), que possui um dos
                    melhores níveis e ferramentas de segurança do mundo; de
                    segurança baseada em JWT; de modernas formas de proteção SSL
                    (criptografia); e a instalação de barreiras contra o acesso
                    indevido à base de dados (firewalls).
                  </p>
                  <p className="py-3">
                    A <strong>ACESSE-ME</strong> tem como princípio de sua
                    atuação o respeito ao USUÁRIO, agindo sempre em conformidade
                    com as disposições da legislação pátria aplicável. Conforme
                    dispõe a legislação pátria vigente, a fim de coibir ao
                    máximo o anonimato, a <strong>ACESSE-ME</strong> manterá em
                    sua base de Dados todas as informações relativas aos acessos
                    do USUÁRIO à plataforma ACESSE-ME, incluindo, mas não se
                    limitando ao endereço IP, às páginas acessadas, aos horários
                    e datas de acesso e o dispositivo de acesso utilizado. Esses
                    registros poderão ser utilizados em investigações internas
                    ou públicas para averiguação de práticas que possam gerar
                    quaisquer prejuízos à <strong>ACESSE-ME</strong>, a outros
                    USUÁRIOS e a terceiros, inclusive a prática de crimes em
                    ambientes virtuais.
                  </p>
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

export default Privacy;
