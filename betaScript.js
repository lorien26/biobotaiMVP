const data = {
    0: {
        question: "Ваши параметры",
        answers: [
            {
                id:0,
                name: "Рост",
                type: "number",
                attr: 'max=250 min=30 placeholder="Введите ваш рост в сантиметрах" pattern="[30-251]"',
            },
            {
                id:1,
                name: "Вес",type: "number",
                attr: 'max=250 min=30 placeholder="Введите ваш вес в килограммах"'
            },
            {
                id:2,
                name: "Возраст",type: "number",
                attr: 'max=100 min=0 placeholder="Введите ваш возраст"'
          
            },
            {
                id:3,
                name: "Пол",type: "text",
                attr: 'list="options" placeholder="Выберите ваш пол"',
                html: `<datalist id="options">
                <option value="Мужской">
                <option value="Женский">
                </datalist>`
            }
        ]
    },
    1: {
        question: "Уровень подготовки",
        answers: [
            {
                id:0,
                name: "Ваша цель",type: "text",
                attr: 'list="options" placeholder="Выберите цель"',
                html: `<datalist id="options">
                <option value="Похудеть (убрать жир)">
                <option value="Поддерживать форму">
                <option value="Увеличить мышечную массу">
                </datalist>`
            },
            {
                id:1,
                name: "Планируемое число тренировок",type: "number",
                attr: 'placeholder="Выберите кол-во часов за неделю" min=0 max=50',
            },
            {
                id:2,
                name: "Уровень физической подготовки",type: "text",
                attr: 'list="options2" placeholder="Оцените вашу физ. подготовку"',
                html: `<datalist id="options2">
                <option value="Новичок">
                <option value="Периодически тренируюсь (2-4 часа/неделя)">
                <option value="Спортсмен-любитель (регулярные занятия в течении 1-3 лет)">
                <option value="Профессиональный спортсмен (регулярные занятия в течении более 5 лет)">
                </datalist>`
            },
            {
                id:3,
                name: "Уровень активности",type: "text",
                attr: 'list="options3" placeholder="Какой образ жизни вы ведёте"',
                html: `<datalist id="options3">
                <option value="Сидячий, малоподвижный образ жизни">
                <option value="Средняя активность">
                <option value="Активный образ жизни">
                </datalist>`
            }
        ]
    },
    2: {
        type: "checkbox",
        question: "Пищевая аллергия",
        answers: [
            {
                id:0,
                name: "Лактоза",type: "checkbox",
                attr: '',
            },
            {
                id:1,
                name: "Рыба",type: "checkbox",
                attr: '',
            },
            {
                id:2,
                name: "Мёд",type: "checkbox",
                attr: '',
            },
            {
                id:3,
                name: "Орехи",type: "checkbox",
                attr: '',
            },
        ]
    },
    3:{
        type: "checkbox",
        question: "Предпочтения в еде - крупы",
        answers: [
            {
                id:0,
                name: "Гречка",type: "checkbox",
                attr: '',
            },
            {
                id:1,
                name: "Рис",type: "checkbox",
                attr: '',
            },
            {
                id:2,
                name: "Овсянка",type: "checkbox",
                attr: '',
            },
            {
                id:3,
                name: "Пшёнка",type: "checkbox",
                attr: '',
            },
            {
                id:4,
                name: "Перловка",type: "checkbox",
                attr: '',
            },
            {
                id:5,
                name: "Макароны",type: "checkbox",
                attr: '',
            },
            {
                id:6,
                name: "Чечевица",type: "checkbox",
                attr: '',
            },
            {
                id:7,
                name: "Картофель",type: "checkbox",
                attr: '',
            },
        ]
    },
    4:{
        type: "checkbox",
        question: "Предпочтения в еде - хлеб",
        answers: [
            {
                id:0,
                name: "Белый хлеб",type: "checkbox",
                attr: '',
            },
            {
                id:1,
                name: "Чёрный хлеб",type: "checkbox",
                attr: '',
            },
            {
                id:2,
                name: "Ржаной хлеб",type: "checkbox",
                attr: '',
            },
            {
                id:3,
                name: "Пшеничный хлеб",type: "checkbox",
                attr: '',
            },
            {
                id:4,
                name: "Лаваш",type: "checkbox",
                attr: '',
            },
            {
                id:5,
                name: "Лепешка",type: "checkbox",
                attr: '',
            },
        ]
    },
    5:{
        question: "Предпочтения в еде - мясо",
        type: "checkbox",
        answers: [
            {
                id:0,
                name: "Куриная грудка",type: "checkbox",
                attr: '',
            },
            {
                id:1,
                name: "Куриное бедро",type: "checkbox",
                attr: '',
            },
            {
                id:2,
                name: "Куриная голень",type: "checkbox",
                attr: '',
            },
            {
                id:3,
                name: "Куриное филе",type: "checkbox",
                attr: '',
            },
            {
                id:4,
                name: "Лаваш",type: "checkbox",
                attr: '',
            },
        ]
    }
}

async function getOpenAIResponse(prompt) {
	try {
		await fetch("https://api.proxyapi.ru/openai/v1/chat/completions", {
			method: "POST",
			headers: {
				Authorization: `Bearer sk-gds1ifuLhswpVP5m7c7E2G2Obe5layVQ`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				model: "gpt-4-turbo",
				messages: [{ role: "user", content: "Create a meal plan" }, {
                    "role": "system",
                    "content": ` You are a nutritional therapist and you need to create a detailed meal plan for seven days to sex: ${prompt.пол}, age: ${prompt.возраст}, centimeters tall ${prompt.рост} which weighs ${prompt.вес} kilo which wants to ${prompt.цель}
                    When making the plan, use data to personalize the diet, including BMI, calculate the number of calories the person needs, and modify the diet plan based on the goal the person has set for themselves, such as losing weight or gaining mass. 
                    Write your answer in Russian. Разбей план по дням и напиши количество белков, жиров и углеводов для каждого приема пищи`
                 }],
				temperature: 0.7,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log("Data is: ");
				// console.log(data);
                // console.log('\n\n')
                // console.log(data.choices[0])
                // console.log('\n\n')
                // console.log(data.choices[0].message.content)
                // console.log(data.choices[0].message)
				return data.choices[0].message.content;
			});
		// console.log(response.json());
	} catch (error) {
		console.error("Error calling OpenAI API:", error);
	}
}
const dataResults = {0: {}, 1: {}, 2: {}, 3: {}, 4:{}, 5:{}, 6:{},7:{}}
document.addEventListener("DOMContentLoaded", main);
function main(){
    console.log('starting')
    const quiz = document.getElementById("quiz");
    const questions = document.getElementById("questions");
    const next = document.getElementById('next');
    const back = document.getElementById('back')
    const results = document.getElementById('results')
    const result = document.getElementById('result')
    const H1 = document.querySelector('h1')
    console.log(H1)
    const againBtn = document.getElementById('again');
    function renderQuestions(index){
        questions.dataset.currentStep = index
        function renderAnswers(index){
            if(data[index].type !== 'checkbox') {
                console.log("TRUE")
                return data[index].answers.map((ans) => {
                    return `
                    <li>        
                        <label> 
                            <input type=${ans.type} class="answer-input" name=${index} id=${ans.id} required ${ans.attr}>
                                ${ans.html ? ans.html : ''}
                        </label>
                    </li>
                    `
                }).join('')
            }
            else {
                return `<div class="checkbox-column"> 
                ${data[index].answers.map((ans) => {
                return `<div class="checkbox-item"><input type=${ans.type} class="answer-input checkbox" name=${index} id=${ans.id} ${ans.attr}>${ans.name}</div>`
            }).join('\n')}
            </div>`
        }
        }

        questions.innerHTML = `
        <div class="quiz__questions__questions"><p>${data[index].question}</p></div>
                    <ul class="quiz__questions__answers">
                        ${renderAnswers(index)}
                    </ul>`
    }
    async function renderResults(data){
        console.log("Start rendering...")
        // const resultAI = await getOpenAIResponse({
        //     вес: 70,
        //     пол: "мужчина",
        //     рост: 180,
        //     цель: "lose weight",
        //     возраст: 23
        // })
        // console.log(resultAI)
        const resultAI = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque libero similique corrupti adipisci eaque debitis magnam enim impedit velit sit quae recusandae quidem, aperiam pariatur explicabo eius quo, quisquam unde tempore alias! Dolor consequuntur voluptatem cumque aut quia architecto veniam, repellendus labore, autem, quidem quam optio velit corporis pariatur voluptates. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque libero similique corrupti adipisci eaque debitis magnam enim impedit velit sit quae recusandae quidem, aperiam pariatur explicabo eius quo, quisquam unde tempore alias! Dolor consequuntur voluptatem cumque aut quia architecto veniam, repellendus labore, autem, quidem quam optio velit corporis pariatur voluptates. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque libero similique corrupti adipisci eaque debitis magnam enim impedit velit sit quae recusandae quidem, aperiam pariatur explicabo eius quo, quisquam unde tempore alias! Dolor consequuntur voluptatem cumque aut quia architecto veniam, repellendus labore, autem, quidem quam optio velit corporis pariatur voluptates. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque libero similique corrupti adipisci eaque debitis magnam enim impedit velit sit quae recusandae quidem, aperiam pariatur explicabo eius quo, quisquam unde tempore alias! Dolor consequuntur voluptatem cumque aut quia architecto veniam, repellendus labore, autem, quidem quam optio velit corporis pariatur voluptates. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque libero similique corrupti adipisci eaque debitis magnam enim impedit velit sit quae recusandae quidem, aperiam pariatur explicabo eius quo, quisquam unde tempore alias! Dolor consequuntur voluptatem cumque aut quia architecto veniam, repellendus labore, autem, quidem quam optio velit corporis pariatur voluptates. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque libero similique corrupti adipisci eaque debitis magnam enim impedit velit sit quae recusandae quidem, aperiam pariatur explicabo eius quo, quisquam unde tempore alias! Dolor consequuntur voluptatem cumque aut quia architecto veniam, repellendus labore, autem, quidem quam optio velit corporis pariatur voluptates.'
        questions.hidden = true;
        result.hidden = false;
        results.innerHTML = `
        <div class="results__AIResult">${resultAI}</div>`
        H1.innerText = 'Ваш персональный план'
        next.hidden = true
        back.hidden = true
        result.hidden = true
        againBtn.hidden = false
        results.hidden = false;
        console.log(dataResults)
    }
    
    quiz.addEventListener('click', (event)=>{
        if(event.target.id == 'next'){
            console.log('Next')
            renderQuestions(++questions.dataset.currentStep)
            console.log(Object.keys(data).length)
            console.log(questions.dataset.currentStep)
            if(+questions.dataset.currentStep > 0) back.disabled = false;
            next.disabled = true
            if(data[questions.dataset.currentStep].type == "checkbox") {
                next.disabled=false
            }
            if(Object.keys(data).length == +questions.dataset.currentStep + 1){
                next.hidden = true
                result.hidden = false
                result.disabled = true;
                if(data[questions.dataset.currentStep].type == "checkbox") {
                    result.disabled=false
                }
            }
            
        }
        else if(event.target.id == 'back'){
            console.log('back')
            renderQuestions(--questions.dataset.currentStep)
            if(+questions.dataset.currentStep == 0) back.disabled = true;
            next.disabled = true;
            next.hidden = false;
            result.hidden = true;



        }
        else if(event.target.id == 'result'){
            console.log("Подбор плана ...")
            renderResults()
        }
        else if(event.target.id == 'again'){
            console.log("Сначала")
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
        if(event.target.classList.contains('answer-input')){
            console.log("answer-input")
            dataResults[event.target.name][event.target.id] = event.target.value == 'on' ? !dataResults[event.target.name][event.target.id] : event.target.value
            let isFilled = true;
            for(const el of document.querySelectorAll('[class="answer-input"]')){
                if(el.value == '') {
                    console.log("not filled")
                    isFilled = false
                    break;
                }
            }
            if(isFilled){
                next.disabled = false;
            if(Object.keys(data).length == +questions.dataset.currentStep + 1){
                result.disabled = false;
            }
            }
        }
    })
    // renderQuestions(0)
    renderQuestions(Object.keys(data).length - 1)
}