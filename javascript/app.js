document.addEventListener('DOMContentLoaded', () => {
    // Array de objetos com os dados dos agentes
    const agents = [
        {
            name: "Jett",
            videoUrl: "https://www.youtube.com/embed/-cPLXswVsvc?si=0YWv8PEfbHarqtoU&autoplay=1&mute=1",
            description: "Jett, a agente sul-coreana ágil, é especialista em movimentos de flanco e ataques rápidos. Suas habilidades incluem Rajada de Brisa (um dash rápido), Corrente Ascendente (um salto alto), e a ultimate Tempestade de Lâminas (lança facas letais)."
        },
        {
            name: "Phoenix",
            videoUrl: "https://www.youtube.com/embed/ttJMFW2wUQM?si=o4MO5GAk5172Iw-2&autoplay=1&mute=1",
            description: "Phoenix é um agente britânico que manipula o fogo para curar a si mesmo e queimar seus inimigos. Suas habilidades são Bola Curva (um flashbang), Mãos Quentes (uma parede de fogo que cura aliados), e a ultimate Renascimento (volta à vida se for abatido)."
        },
        {
            name: "Sage",
            videoUrl: "https://www.youtube.com/embed/1aRwM_QsqQI?si=C-O5_Lad6vcpHdU_&autoplay=1&mute=1",
            description: "Sage, a sentinela chinesa, é uma poderosa curandeira e controladora de campo de batalha. Ela pode curar aliados com Orbe Curativo, desacelerar inimigos com Orbe de Lentidão e até ressuscitar um aliado com sua ultimate Ressurreição."
        },
        {
            name: "Sova",
            videoUrl: "https://www.youtube.com/embed/OZ76UP-c8Ao?si=xSLbk1LajU9akFik&autoplay=1&mute=1",
            description: "Sova, o iniciador russo, é um mestre em reconhecimento e rastreamento. Ele usa Flecha Rastreadora para revelar inimigos, Drone Coruja para explorar áreas e Flecha de Choque para causar dano. Sua ultimate, Ira do Caçador, dispara projéteis que atravessam paredes."
        },
        {
            name: "Raze",
            videoUrl: "https://www.youtube.com/embed/2-uAL__pp_U?si=21cLobehxIA4Vrya&autoplay=1&mute=1",
            description: "Raze é uma agente brasileira com um arsenal explosivo. Suas habilidades incluem Carga de Boombot (um robô que persegue inimigos), Cargas de Explosivos (granadas de concussão) e a ultimate Estraga-Prazeres (um lança-foguetes devastador)."
        },
        {
            name: "Cypher",
            videoUrl: "https://www.youtube.com/embed/SgbqFtRRgLA?si=9gB-SdUTb3NDX1zK&autoplay=1&mute=1",
            description: "Cypher é um agente marroquino, especialista em coleta de informações e bloqueio de locais. Ele usa jaulas cibernéticas para impedir inimigos, câmera espiã para vigiar e sua ultimate, Roubo Neural, para revelar a localização de todos os inimigos próximos."
        },
        {
            name: "Brimstone",
            videoUrl: "https://www.youtube.com/embed/7yHnJ_oNxTI?si=vID-iVfZgxFGUyDe&autoplay=1&mute=1",
            description: "Brimstone é um controlador americano que utiliza seu arsenal orbital para dominar o campo de batalha. Ele pode usar Granadas Incendiárias, Fumaça Celeste para bloquear a visão e sua ultimate, Ataque Orbital, um ataque a laser devastador."
        }
        // Adicione mais agentes aqui seguindo o mesmo formato
    ];

    const agentListDiv = document.querySelector('.agent-list');
    const agentNameElement = document.getElementById('agent-name');
    const agentVideoIframe = document.getElementById('agent-video');
    const agentDescriptionElement = document.getElementById('agent-description');

    let activeAgentButton = null; // Variável para rastrear o botão ativo

    // Função para carregar os detalhes do agente
    function loadAgentDetails(agent) {
        agentNameElement.textContent = agent.name;
        // Definindo o src do iframe
        agentVideoIframe.src = agent.videoUrl;
        agentDescriptionElement.textContent = agent.description;
    }

    // Função para criar e adicionar os botões dos agentes
    function createAgentButtons() {
        agents.forEach(agent => {
            const button = document.createElement('button');
            button.classList.add('agent-button');
            button.textContent = agent.name;
            button.addEventListener('click', () => {
                // Remove a classe 'active' do botão anterior, se houver
                if (activeAgentButton) {
                    activeAgentButton.classList.remove('active');
                }
                // Adiciona a classe 'active' ao botão clicado
                button.classList.add('active');
                activeAgentButton = button; // Atualiza o botão ativo

                loadAgentDetails(agent);
            });
            agentListDiv.appendChild(button);
        });
    }

    // Inicializa a página: cria os botões e carrega o primeiro agente
    createAgentButtons();
    if (agents.length > 0) {
        loadAgentDetails(agents[0]);
        // Marca o primeiro botão como ativo ao carregar a página
        const firstButton = document.querySelector('.agent-button');
        if (firstButton) {
            firstButton.classList.add('active');
            activeAgentButton = firstButton;
        }
    }
});