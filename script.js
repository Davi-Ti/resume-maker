// Template JSON
const templateJson = {
	nome: "",
	cargo: "",
	resumo: "",
	experiencia: [],
	certificacoes: [],
	formacao: [],
	contato: {
		email: "",
		localizacao: "",
		telefone: "",
		linkedin: "",
		github: "",
	},
	tecnologias: [],
	linguagens: [],
};

// Mostrar formulário ou JSON com animação
document.getElementById("btnFormulario").addEventListener("click", () => {
	const formularioSection = document.getElementById("formularioSection");
	const jsonSection = document.getElementById("jsonSection");
	formularioSection.classList.remove("hidden");
	jsonSection.classList.add("hidden");
	formularioSection.classList.add("fade-in");
});

document.getElementById("btnJson").addEventListener("click", () => {
	const formularioSection = document.getElementById("formularioSection");
	const jsonSection = document.getElementById("jsonSection");
	jsonSection.classList.remove("hidden");
	formularioSection.classList.add("hidden");
	jsonSection.classList.add("fade-in");
	document.getElementById("jsonInput").value = JSON.stringify(
		templateJson,
		null,
		2
	);
});

// Importar JSON
document.getElementById("btnImportar").addEventListener("click", () => {
	const input = document.createElement("input");
	input.type = "file";
	input.accept = ".json";
	input.onchange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = (event) => {
			const json = JSON.parse(event.target.result);
			preencherCurriculo(json);
			salvarNoLocalStorage(json);
		};
		reader.readAsText(file);
	};
	input.click();
});

// Gerar currículo a partir do JSON
document.getElementById("btnGerarJson").addEventListener("click", () => {
	const json = JSON.parse(document.getElementById("jsonInput").value);
	preencherCurriculo(json);
	salvarNoLocalStorage(json);
});

// Gerar currículo a partir do formulário
document.getElementById("formulario").addEventListener("submit", function (e) {
	e.preventDefault();

	const dados = {
		nome: document.getElementById("nome").value,
		cargo: document.getElementById("cargo").value,
		resumo: document.getElementById("resumoInput").value,
		experiencia: JSON.parse(
			document.getElementById("experienciaInput").value
		),
		certificacoes: document
			.getElementById("certificacoesInput")
			.value.split("\n"),
		formacao: JSON.parse(document.getElementById("formacaoInput").value),
		contato: JSON.parse(document.getElementById("contatoInput").value),
		tecnologias: document
			.getElementById("tecnologiasInput")
			.value.split("\n"),
		linguagens: document
			.getElementById("linguagensInput")
			.value.split("\n"),
	};

	preencherCurriculo(dados);
	salvarNoLocalStorage(dados);
});

// Função para preencher o currículo
function preencherCurriculo(dados) {
	document.getElementById("curriculoNome").textContent = dados.nome;
	document.getElementById("curriculoCargo").textContent = dados.cargo;
	document.getElementById("curriculoResumo").textContent = dados.resumo;

	// Experiência
	const experienciaContainer = document.getElementById(
		"curriculoExperiencia"
	);
	experienciaContainer.innerHTML = "";
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
	const certificacoesContainer = document.getElementById(
		"curriculoCertificacoes"
	);
	certificacoesContainer.innerHTML = "";
	dados.certificacoes.forEach((cert) => {
		certificacoesContainer.innerHTML += `<li>${cert}</li>`;
	});

	// Formação
	const formacaoContainer = document.getElementById("curriculoFormacao");
	formacaoContainer.innerHTML = "";
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
	const contatoContainer = document.getElementById("curriculoContato");
	contatoContainer.innerHTML = `
	  <p>Email: ${dados.contato.email}</p>
	  <p>Localização: ${dados.contato.localizacao}</p>
	  <p>Telefone: ${dados.contato.telefone}</p>
	  <p>LinkedIn: <a href="https://${dados.contato.linkedin}" class="text-blue-500 hover:underline">${dados.contato.linkedin}</a></p>
	  <p>GitHub: <a href="https://${dados.contato.github}" class="text-blue-500 hover:underline">${dados.contato.github}</a></p>
	`;

	// Tecnologias
	const tecnologiasContainer = document.getElementById(
		"curriculoTecnologias"
	);
	tecnologiasContainer.innerHTML = "";
	dados.tecnologias.forEach((tech) => {
		tecnologiasContainer.innerHTML += `
		<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${tech}</span>
	  `;
	});

	// Linguagens
	const linguagensContainer = document.getElementById("curriculoLinguagens");
	linguagensContainer.innerHTML = "";
	dados.linguagens.forEach((lang) => {
		linguagensContainer.innerHTML += `
		<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">${lang}</span>
	  `;
	});

	// Mostrar o currículo
	document.getElementById("curriculo").classList.remove("hidden");
}

// Salvar no Local Storage
function salvarNoLocalStorage(dados) {
	localStorage.setItem("curriculo", JSON.stringify(dados));
}

// Carregar do Local Storage ao abrir a página
window.addEventListener("load", () => {
	const dadosSalvos = localStorage.getItem("curriculo");
	if (dadosSalvos) {
		const dados = JSON.parse(dadosSalvos);
		preencherCurriculo(dados);
	}
});
