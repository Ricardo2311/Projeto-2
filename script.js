(function inicializar() {
	var botaoTema = document.getElementById('alternarTema');
	var anoRodape = document.getElementById('anoAtual');

	if (anoRodape) {
		var agora = new Date();
		anoRodape.textContent = String(agora.getFullYear());
	}

	var temaSalvo = null;
	try {
		temaSalvo = localStorage.getItem('tema-site');
	} catch (erro) {}
	if (temaSalvo === 'escuro') {
		document.body.classList.add('tema-escuro');
	}

	if (botaoTema) {
		botaoTema.addEventListener('click', function () {
			var usandoEscuro = document.body.classList.contains('tema-escuro');
			if (usandoEscuro) {
				document.body.classList.remove('tema-escuro');
				try { localStorage.setItem('tema-site', 'claro'); } catch (erro) {}
				alert('Tema claro ativado');
			} else {
				document.body.classList.add('tema-escuro');
				try { localStorage.setItem('tema-site', 'escuro'); } catch (erro) {}
				alert('Tema escuro ativado');
			}
		});
	}
})();
(function sliderBasico() {
	var titulo = document.getElementById('cartaoSlideTitulo');
	var descricao = document.getElementById('cartaoSlideDescricao');
	var imagem = document.getElementById('cartaoSlideImagem');
	var proximo = document.getElementById('proximoSlide');
	var anterior = document.getElementById('anteriorSlide');
	if (!titulo || !descricao || !imagem || !proximo || !anterior) return;
	var slides = [
		{ titulo: 'Foz do Iguaçu', descricao: 'Cataratas e natureza única.', imagem: 'foz do iguacu.jpg' },
		{ titulo: 'Lisboa', descricao: 'História e miradouros.', imagem: 'lisboa.jpg' },
		{ titulo: 'Gramado', descricao: 'Clima europeu na serra.', imagem: 'gramado.jpg' },
		{ titulo: 'Fernando de Noronha', descricao: 'Praias e mergulhos.', imagem: 'fernando.jpg' }
	];
	var nomes = [];
	for (var i = 0; i < slides.length; i++) {
		nomes.push(slides[i].titulo);
	}
	console.log(nomes.join(', '));
	var indice = 0;
	function mostrar(posicao) {
		var s = slides[posicao];
		titulo.textContent = s.titulo;
		descricao.textContent = s.descricao;
		imagem.src = s.imagem;
		var regiao = '';
		switch (s.titulo) {
			case 'Lisboa': regiao = 'Europa'; break;
			case 'Foz do Iguaçu': regiao = 'Brasil'; break;
			case 'Gramado': regiao = 'Brasil'; break;
			default: regiao = 'Brasil';
		}
		var contador = 0;
		var pontos = '';
		while (contador < 2) {
			pontos = pontos + '.';
			contador = contador + 1;
		}
		var feito = 0;
		do {
			feito = feito + 1;
		} while (feito < 1);
	}
	mostrar(indice);
	proximo.addEventListener('click', function () {
		indice = (indice + 1) % slides.length;
		mostrar(indice);
	});
	anterior.addEventListener('click', function () {
		indice = (indice - 1 + slides.length) % slides.length;
		mostrar(indice);
	});
})();
(function validarFormularioContato() {
	var formulario = document.getElementById('contactForm');
	if (!formulario) return;

	var campoNome = document.getElementById('nome');
	var erroNome = document.getElementById('error-nome');
	var campoEmail = document.getElementById('email');
	var erroEmail = document.getElementById('error-email');
	var campoDestino = document.getElementById('destino');
	var erroDestino = document.getElementById('error-destino');
	var campoData = document.getElementById('data');
	var erroData = document.getElementById('error-data');
	var sucesso = document.getElementById('successMessage');

	function emailValido(valor) {
		return valor.indexOf('@') > 0 && valor.indexOf('.') > 0;
	}

	function dataNoFuturoOuHoje(valor) {
		if (!valor) return false;
		var hoje = new Date();
		var selecionada = new Date(valor + 'T00:00:00');
		hoje.setHours(0, 0, 0, 0);
		selecionada.setHours(0, 0, 0, 0);
		return selecionada >= hoje;
	}

	formulario.addEventListener('submit', function (evento) {
		evento.preventDefault();
		var valido = true;

		if (!campoNome.value || campoNome.value.trim().length < 3) {
			erroNome.textContent = 'Informe seu nome (mín. 3 caracteres).';
			valido = false;
		} else {
			erroNome.textContent = '';
		}

		if (!emailValido(campoEmail.value)) {
			erroEmail.textContent = 'E-mail inválido.';
			valido = false;
		} else {
			erroEmail.textContent = '';
		}

		if (!campoDestino.value) {
			erroDestino.textContent = 'Selecione um destino.';
			valido = false;
		} else {
			erroDestino.textContent = '';
		}

		if (!dataNoFuturoOuHoje(campoData.value)) {
			erroData.textContent = 'Escolha hoje ou uma data futura.';
			valido = false;
		} else {
			erroData.textContent = '';
		}

		if (!valido) {
			alert('Verifique os campos em vermelho.');
			return;
		}

		var resumo = [
			'Nome: ' + campoNome.value,
			'Email: ' + campoEmail.value,
			'Destino: ' + campoDestino.value
		];
		console.log('Resumo do formulário:', resumo.join(' | '));

		if (sucesso) {
			sucesso.hidden = false;
			formulario.reset();
			setTimeout(function () {
				sucesso.hidden = true;
			}, 3000);
		}
	});
})();
(function canvasBasico() {
	var quadro = document.getElementById('demoCanvas');
	if (!quadro) return;
	var contexto = quadro.getContext('2d');
	contexto.fillStyle = '#1a73e8';
	contexto.fillRect(10, 10, 120, 60);
	contexto.fillStyle = '#000';
	contexto.font = '16px Arial';
	contexto.fillText('Canvas demo', 12, 85);
})();

