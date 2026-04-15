import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import minhaFoto from './assets/minha-foto.jpeg'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const listaDeProjetos = [
    {
      id: 1,
      titulo: "Dashboard Financeiro FullStack",
      descricao: "Arquitetura Cliente-Servidor. Back-End em python (FastAPI/SQlite e Front-End em react consumindo API(FastAPI)",
      link: "https://github.com/Pedro2505/API-financias",
      tecnologias: ["Python", "FastAPI", "React", "SQLite"]
    },
    {
      id : 2,
      titulo: "Analise de Dados (Estou fazendo)",
      descricao: "Projeto em desenvolvimento focado em extração e tratamento de dados usando Pandas",
      link: "#",
      tecnologias: ["Pandas", "Jupyter", "Python"]
    }
  ];

  return (
    <div>
      {/* SECÇÃO 1: A CAPA (Hero) */}
      <div className="fundo-animado text-light min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center" style={{ position: 'relative', overflow: 'hidden' }}>
        
        {/* ---> COLOQUE A LISTA FLUTUANTE AQUI <--- */}
        <ul className="area-flutuante">
          <li></li><li></li><li></li><li></li><li></li>
          <li></li><li></li><li></li><li></li><li></li>
        </ul>
        {/* ---------------------------------------- */}

        {/* Adicione o style={{ zIndex: 1 }} neste container para o texto ficar na frente de tudo */}
        <div className="container text-center" style={{ zIndex: 1 }}>
          <img 
            src={minhaFoto} 
            alt="Meu Perfil" 
            className="foto-perfil rounded-circle mb-4 border border-3 border-primary shadow"
            style={{ width: '180px', height: '180px', objectFit: 'cover' }}
          />
          <h1 className="display-3 fw-bold mb-3">
            Prazer, sou <span className="text-primary">Pedro Henrique Juliani</span>
          </h1>
          <h2 className="text-secondary mb-4 fs-4">
            Desenvolvedor Full Stack focado em Back-End
          </h2>
          <p className="lead mx-auto mb-5 text-light opacity-75" style={{ maxWidth: '600px' }}>
            Dev Full Stack Júnior focado em BACK-END: (Python, C#, Node.js) com conhecimentos em FRONT-END: (HTML, CSS e React)
          </p>
          <div>
            {/* Estes links vão procurar os "id" nas secções abaixo */}
            <a href="#projetos" className="btn btn-primary btn-lg mx-2 px-5 py-3 rounded-pill fw-bold shadow btn-custom">
              Ver Projetos
            </a>
            <a href="#contato" className="btn btn-outline-light btn-lg mx-2 px-5 py-3 rounded-pill fw-bold btn-custom">
              Contato
            </a>
            <div className="rede-sociais-centro">
        <a href = "https://github.com/Pedro2505"  target="_blank" rel ="noreferrer" className="icon-rede">
          <FaGithub/>
        </a>
        <a href = "https://www.linkedin.com/in/pedro-henrique-juliani/" target ="_blank" rel = "noreferrer" className="icon-rede">
          <FaLinkedin/>
        </a>
      </div>
          </div>
        </div>
      </div>

      {/* SECÇÃO 2: PROJETOS (Para onde o primeiro botão leva) */}
      <section id="projetos" className="bg-dark text-light min-vh-100 w-100 py-5 d-flex align-items-center">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 display-5 text-primary">Meus Projetos</h2>
          
          <div className="row justify-content-center">
            
            {listaDeProjetos.map((projeto) => (
              <div key={projeto.id} className="col-md-8 mb-4">
                
                {/* 1. Usamos a nossa nova classe 'card-projeto' aqui */}
                <div className="card text-light shadow-lg p-4 card-projeto">
                  <div className="card-body text-center">
                    
                    <h3 className="card-title fw-bold mb-3">{projeto.titulo}</h3>
                    
                    {/* 2. O MAP SECUNDÁRIO: Desenhando as etiquetas de tecnologia */}
                    <div className="mb-3">
                      {projeto.tecnologias.map((tech, index) => (
                        <span key={index} className="badge-tech">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <p className="card-text mt-3 opacity-75">{projeto.descricao}</p>
                    
                    {/* Botão sutil */}
                    <a href={projeto.link} target="_blank" rel="noreferrer" className="btn btn-outline-light mt-3 rounded-pill px-4 btn-custom">
                      Ver Projeto no GitHub
                    </a>
                    
                  </div>
                </div>
                
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* SECÇÃO 3: CONTATO (Para onde o segundo botão leva) */}
      <section id="contato" className="bg-black text-light w-100 py-5" style={{ minHeight: '40vh' }}>
        <div className="container text-center mt-5">
          <h2 className="fw-bold mb-4">Me manda um mensagem ai!</h2>
          <p className="lead mb-4 opacity-75">
            Estou sempre aberto a novas oportunidades, desafios técnicos e networking.
          </p>
          {/* O mailto: faz com que ao clicar, abra o programa de email do recrutador */}
          <a href="https://wa.me/14999009142" target="_blank" rel = "noreferrer" className="btn btn-success btn-lg rounded-pill px-5 shadow"> 
            WhatsApp
          </a>
        </div>
      </section>

    </div>
  )
}

export default App