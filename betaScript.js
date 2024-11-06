import markdownit from 'https://cdn.jsdelivr.net/npm/markdown-it@14.1.0/+esm'

const data = {
	0: {
		question: 'Ваши параметры',
		answers: [
			{
				id: 0,
				name: 'Рост',
				type: 'number',
				attr: 'max=250 min=30 placeholder="Введите ваш рост в сантиметрах" pattern="[30-251]"',
			},
			{
				id: 1,
				name: 'Вес',
				type: 'number',
				attr: 'max=250 min=30 placeholder="Введите ваш вес в килограммах"',
			},
			{
				id: 2,
				name: 'Возраст',
				type: 'number',
				attr: 'max=100 min=0 placeholder="Введите ваш возраст"',
			},
			{
				id: 3,
				name: 'Пол',
				type: 'text',
				attr: 'list="options" placeholder="Выберите ваш пол"',
				html: `<datalist id="options">
                <option value="Мужской">
                <option value="Женский">
                </datalist>`,
			},
		],
	},
	1: {
		question: 'Уровень подготовки',
		answers: [
			{
				id: 0,
				name: 'Ваша цель',
				type: 'text',
				attr: 'list="options" placeholder="Выберите цель"',
				html: `<datalist id="options">
                <option value="Похудеть (убрать жир)">
                <option value="Поддерживать форму">
                <option value="Увеличить мышечную массу">
                </datalist>`,
			},
			{
				id: 1,
				name: 'Планируемое число тренировок',
				type: 'number',
				attr: 'placeholder="Выберите кол-во часов за неделю" min=0 max=50',
			},
			{
				id: 2,
				name: 'Уровень физической подготовки',
				type: 'text',
				attr: 'list="options2" placeholder="Оцените вашу физ. подготовку"',
				html: `<datalist id="options2">
                <option value="Новичок">
                <option value="Периодически тренируюсь (2-4 часа/неделя)">
                <option value="Спортсмен-любитель (регулярные занятия в течении 1-3 лет)">
                <option value="Профессиональный спортсмен (регулярные занятия в течении более 5 лет)">
                </datalist>`,
			},
			{
				id: 3,
				name: 'Уровень активности',
				type: 'text',
				attr: 'list="options3" placeholder="Какой образ жизни вы ведёте"',
				html: `<datalist id="options3">
                <option value="Сидячий, малоподвижный образ жизни">
                <option value="Средняя активность">
                <option value="Активный образ жизни">
                </datalist>`,
			},
		],
	},
	2: {
		type: 'checkbox',
		question: 'Пищевая аллергия',
		answers: [
			{
				id: 0,
				name: 'Лактоза',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 1,
				name: 'Рыба',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 2,
				name: 'Мёд',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 3,
				name: 'Орехи',
				type: 'checkbox',
				attr: '',
			},
		],
	},
	3: {
		type: 'checkbox',
		question: 'Предпочтения в еде - крупы',
		answers: [
			{
				id: 0,
				name: 'Гречка',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 1,
				name: 'Рис',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 2,
				name: 'Овсянка',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 3,
				name: 'Пшёнка',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 4,
				name: 'Перловка',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 5,
				name: 'Кус-кус',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 6,
				name: 'Чечевица',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 7,
				name: 'Ячмень',
				type: 'checkbox',
				attr: '',
			},
		],
	},
	4: {
		type: 'checkbox',
		question: 'Предпочтения в еде - хлеб',
		answers: [
			{
				id: 0,
				name: 'Белый хлеб',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 1,
				name: 'Чёрный хлеб',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 2,
				name: 'Ржаной хлеб',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 3,
				name: 'Пшеничный хлеб',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 4,
				name: 'Лаваш',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 5,
				name: 'Лепешка',
				type: 'checkbox',
				attr: '',
			},
		],
	},
	5: {
		question: 'Предпочтения в еде - мясо',
		type: 'checkbox',
		answers: [
			{
				id: 0,
				name: 'Куриная грудка',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 1,
				name: 'Куриное бедро',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 2,
				name: 'Куриная голень',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 3,
				name: 'Куриное филе',
				type: 'checkbox',
				attr: '',
			},
			{
				id: 4,
				name: 'Говядина',
				type: 'checkbox',
				attr: '',
			},
		],
	},
}
async function getOpenAIResponse(prompt) {
	const aiQuestion = `Представь, что ты профессиональный фитнес-тренер и диетолог, напиши тренировочный план на 30 дней на основе моих входных данных: рост ${prompt.рост} сантиметров; вес ${prompt.вес}; пол ${prompt.пол}; возраст ${prompt.возраст}
    Я могу уделять тренировкам ${prompt.часы} часов в неделю, я оцениваю свою физическую подготовку как ${prompt.уровень}, я веду ${prompt.образ}. Моя цель — это ${prompt.цель}.
    С учетом подобранных тобою тренировок распиши мне правильное питание на каждый день, чтобы достичь моей цели, учитывая мою пищевую аллергию на такие продукты как ${prompt.аллергия} а также учитывая мои предпочтения
     в крупах: ${prompt.крупы}
    в хлебе: ${prompt.хлеба}
    в мясе: ${prompt.мясо}
    Подробно распиши к каким результатам я приду через 30 дней, следуя твоему плану тренировок и питания.`
	console.log('Sended AI Question: ' + aiQuestion)
	return await fetch('https://api.proxyapi.ru/openai/v1/chat/completions', {
		method: 'POST',
		headers: {
			Authorization: `Bearer sk-gds1ifuLhswpVP5m7c7E2G2Obe5layVQ`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			model: 'gpt-4-turbo',
			messages: [
				{
					role: 'system',
					content: aiQuestion,
					temperature: 0.7,
				},
			],
		}),
	})
		.then(res => res.json())
		.then(data => {
			// console.log(data.choices[0].message.content)
			//     results.innerHTML = `
			//   <div class="results__AIResult">${resultAI}</div>`
			return data.choices[0].message.content
		})
}

const dataResults = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} }
document.addEventListener('DOMContentLoaded', main)
function main() {
	console.log('starting')
	const quiz = document.getElementById('quiz')
	const questions = document.getElementById('questions')
	const next = document.getElementById('next')
	const back = document.getElementById('back')
	const results = document.getElementById('results')
	const result = document.getElementById('result')
	const H1 = document.querySelector('h1')
	const md = markdownit()

	const againBtn = document.getElementById('again')
	function renderQuestions(index) {
		console.log('Started render questions...')
		questions.dataset.currentStep = index
		function renderAnswers(index) {
			if (data[index].type !== 'checkbox') {
				console.log('TRUE')
				return data[index].answers
					.map(ans => {
						return `
                    <li>        
                        <label> 
                            <input type=${
															ans.type
														} class="answer-input" name=${index} id=${
							ans.id
						} required ${ans.attr}>
                                ${ans.html ? ans.html : ''}
                        </label>
                    </li>
                    `
					})
					.join('')
			} else {
				return `<div class="checkbox-column"> 
                ${data[index].answers
									.map(ans => {
										return `<div class="checkbox-item"><input type=${ans.type} class="answer-input checkbox" name=${index} id=${ans.id} ${ans.attr}>${ans.name}</div>`
									})
									.join('\n')}
            </div>`
			}
		}

		questions.innerHTML = `
        <div class="quiz__questions__questions"><p>${
					data[index].question
				}</p></div>
                    <ul class="quiz__questions__answers">
                        ${renderAnswers(index)}
                    </ul>`
	}
	async function renderResults(data) {
		console.log('Start rendering...')
		var grain = ''
		var bread = ''
		var meat = ''
		var allergy = ''

		if (dataResults[2][0] == true) {
			allergy += 'Лактоза, '
		}

		if (dataResults[2][1] == true) {
			allergy += 'Рыба, '
		}

		if (dataResults[2][2] == true) {
			allergy += 'Мед, '
		}
		if (dataResults[2][3] == true) {
			allergy += 'Орехи'
		}

		if (dataResults[3][0] == true) {
			grain += 'Гречка, '
		}
		if (dataResults[3][1] == true) {
			grain += 'Рис, '
		}
		if (dataResults[3][2] == true) {
			grain += 'Овсянка, '
		}
		if (dataResults[3][3] == true) {
			grain += 'Пшено, '
		}
		if (dataResults[3][4] == true) {
			grain += 'Перловка, '
		}
		if (dataResults[3][5] == true) {
			grain += 'Кус-кус, '
		}
		if (dataResults[3][6] == true) {
			grain += 'Чечевица, '
		}
		if (dataResults[3][7] == true) {
			grain += 'Ячмень'
		}

		if (dataResults[4][0] == true) {
			bread += 'Белый, '
		}
		if (dataResults[4][1] == true) {
			bread += 'Черный, '
		}
		if (dataResults[4][2] == true) {
			bread += 'Ржаной, '
		}
		if (dataResults[4][3] == true) {
			bread += 'Пшеничный, '
		}
		if (dataResults[4][4] == true) {
			bread += 'Лаваш, '
		}
		if (dataResults[4][5] == true) {
			bread += 'Лепешка'
		}

		if (dataResults[5][0] == true) {
			meat += 'Куриная грудка, '
		}
		if (dataResults[5][1] == true) {
			meat += 'Куриное бедро, '
		}
		if (dataResults[5][2] == true) {
			meat += 'Куриная голень, '
		}
		if (dataResults[5][3] == true) {
			meat += 'Куриное филе, '
		}
		if (dataResults[5][4] == true) {
			meat += 'Говядина, '
		}

	
		
		questions.hidden = true
		result.hidden = false
		next.hidden = true
		back.hidden = true
		result.hidden = true
		againBtn.hidden = false
		results.hidden = false
        results.innerHTML = `
		<div class="results__AIResult">Обработка результатов...</div>`
        var resultAI = await getOpenAIResponse({
			вес: dataResults[0][1],
			пол: dataResults[0][3],
			рост: dataResults[0][0],
			цель: dataResults[1][0],
			возраст: dataResults[0][2],
			часы: dataResults[1][1],
			уровень: dataResults[1][2],
			образ: dataResults[1][3],
			аллергия: allergy,
			крупы: grain,
			хлеба: bread,
			мясо: meat,
		})
        const parsedResponse = md.render(resultAI)
		results.innerHTML = `
		<div class="results__AIResult">${parsedResponse}</div>`
		H1.innerText = 'Ваш персональный план'
		console.log(dataResults)
	}

	quiz.addEventListener('click', event => {
		if (event.target.id == 'next') {
			console.log('Next')
			renderQuestions(++questions.dataset.currentStep)
			console.log(Object.keys(data).length)
			console.log(questions.dataset.currentStep)
			if (+questions.dataset.currentStep > 0) back.disabled = false
			next.disabled = true
			if (data[questions.dataset.currentStep].type == 'checkbox') {
				next.disabled = false
			}
			if (Object.keys(data).length == +questions.dataset.currentStep + 1) {
				next.hidden = true
				result.hidden = false
				result.disabled = true
				if (data[questions.dataset.currentStep].type == 'checkbox') {
					result.disabled = false
				}
			}
		} else if (event.target.id == 'back') {
			console.log('back')
			renderQuestions(--questions.dataset.currentStep)
			if (+questions.dataset.currentStep == 0) back.disabled = true
			next.disabled = true
			next.hidden = false
			result.hidden = true
		} else if (event.target.id == 'result') {
			console.log('Подбор плана ...')
			renderResults(results)
		} else if (event.target.id == 'again') {
			console.log('Сначала')
			renderQuestions(0)
			questions.hidden = false
			next.hidden = false
			next.disabled = true
			back.disabled = true
			back.hidden = false
			againBtn.hidden = true
			results.hidden = true
			H1.innerText = 'Подбор диеты'
		}
	})
	quiz.addEventListener('change', event => {
		if (event.target.classList.contains('answer-input')) {
			console.log('answer-input')
			dataResults[event.target.name][event.target.id] =
				event.target.value == 'on'
					? !dataResults[event.target.name][event.target.id]
					: event.target.value
			let isFilled = true
			for (const el of document.querySelectorAll('[class="answer-input"]')) {
				if (el.value == '') {
					console.log('not filled')
					isFilled = false
					break
				}
			}
			if (isFilled) {
				next.disabled = false
				if (Object.keys(data).length == +questions.dataset.currentStep + 1) {
					result.disabled = false
				}
			}
		}
	})

	renderQuestions(0)
}
