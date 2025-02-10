const dados = {
	nome: "Davi Oliveira",
	cargo: "Engenheiro de Dados Jr / Desenvolvedor Full-Stack",
	resumo: "Estudante de Ciência da Computação e Ciência de Dados com experiência prática em análise e manipulação de dados, automação de processos e desenvolvimento de pipelines de dados. Especializado em desenvolvimento web com Typescript, ReactJS, Node, Express e NextJs, além de Engenharia de Dados com Python, SQL e ferramentas como Airflow, Databricks, Snowflake e dbt core. Foco em soluções escaláveis e insights estratégicos.",
	experiencia: [
		{
			cargo: "Analista de TI / Analista de Dados",
			empresa: "Coopertuni Logística",
			periodo: "2023 - Presente",
			descricao:
				"Atuação com foco em engenharia de dados e automação de processos. Desenvolvimento e manutenção de pipelines de dados utilizando Python, SQL e SQL Server, implementando soluções de ETL escaláveis e otimizadas. Implementação de softwares em React para demandas específicas, como cadastro de pedidos e visualização de documentos XML. Atendimento a requisitos de negócios e entrega de soluções estratégicas que suportam a tomada de decisão.",
		},
	],
	certificacoes: [
		"Front-End Developer (React) – HackerRank",
		"Front-End in React – AdaTech",
		"Engenharia de Dados – NTT DATA",
		"Santander Tech+ | Data Science",
		"DIO – Scalable Data Pipelines with AWS & Snowflake",
		"Engenharia de Dados com Databricks, Spark e PySpark",
		"Snowflake na Prática: Crie Data Warehouses Direto ao Ponto",
	],
	formacao: [
		{
			curso: "Ciência da Computação",
			instituicao: "Anhanguera",
			periodo: "2024 - 2028",
			tipo: "Bacharelado",
		},
		{
			curso: "Ciência de Dados",
			instituicao: "Anhanguera",
			periodo: "2024 - 2027",
			tipo: "Tecnólogo",
		},
	],
	contato: {
		email: "davi.network@outlook.com",
		localizacao: "Visconde do Rio Branco, MG",
		telefone: "+55 32 9 9975-2472",
		linkedin: "linkedin.com/in/davi-network/",
		github: "github.com/Davi-Ti",
	},
	tecnologias: [
		"React",
		"Next.js",
		"Redux",
		"Node.js",
		"Express",
		"Fastify",
		"Docker",
		"Git & GitHub",
		"Linux",
		"Databricks",
		"DBT Core",
		"Snowflake",
		"Airflow",
		"SQL Server",
		"PostgreSQL",
		"Power BI",
		"PyAutoGUI (RPA)",
		"Selenium",
	],
	linguagens: ["Typescript", "Javascript", "Python", "SQL"],
};

// Preenchendo os dados no HTML
document.getElementById("resumo").textContent = dados.resumo;

// Experiência
const experienciaContainer = document.getElementById("experiencia");
dados.experiencia.forEach((exp) => {
	experienciaContainer.innerHTML += `
	  <div class="bg-white p-4 rounded-lg shadow">
		<h3 class="text-xl font-semibold">${exp.cargo}</h3>
		<p class="text-gray-600">${exp.empresa} | ${exp.periodo}</p>
		<p class="text-gray-700 mt-2">${exp.descricao}</p>
	  </div>
	`;
});

// Certificações
const certificacoesContainer = document.getElementById("certificacoes");
dados.certificacoes.forEach((cert) => {
	certificacoesContainer.innerHTML += `<li>${cert}</li>`;
});

// Formação
const formacaoContainer = document.getElementById("formacao");
dados.formacao.forEach((form) => {
	formacaoContainer.innerHTML += `
	  <div class="bg-white p-4 rounded-lg shadow">
		<h3 class="text-xl font-semibold">${form.curso}</h3>
		<p class="text-gray-600">${form.instituicao} | ${form.periodo}</p>
		<p class="text-gray-700">${form.tipo}</p>
	  </div>
	`;
});

// Contato
const contatoContainer = document.getElementById("contato");
contatoContainer.innerHTML = `
	<p>Email: ${dados.contato.email}</p>
	<p>Localização: ${dados.contato.localizacao}</p>
	<p>Telefone: ${dados.contato.telefone}</p>
	<p>LinkedIn: <a href="https://${dados.contato.linkedin}" class="text-blue-500 hover:underline">${dados.contato.linkedin}</a></p>
	<p>GitHub: <a href="https://${dados.contato.github}" class="text-blue-500 hover:underline">${dados.contato.github}</a></p>
  `;

// Tecnologias
const tecnologiasContainer = document.getElementById("tecnologias");
dados.tecnologias.forEach((tech) => {
	tecnologiasContainer.innerHTML += `
	  <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${tech}</span>
	`;
});

// Linguagens
const linguagensContainer = document.getElementById("linguagens");
dados.linguagens.forEach((lang) => {
	linguagensContainer.innerHTML += `
	  <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">${lang}</span>
	`;
});
