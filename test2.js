import "dotenv/config";

async function getOpenAIResponse(prompt) {
	try {
		await fetch("https://api.proxyapi.ru/openai/v1/chat/completions", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
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
                console.log(data.choices[0].message.content)
                console.log(data.choices[0].message)
				return data.choices[0].message.content;
			});
		// console.log(response.json());
	} catch (error) {
		console.error("Error calling OpenAI API:", error);
	}
}

// console.log(await getOpenAIResponse("What is the future of AI?"));
getOpenAIResponse({
    вес: 70,
    пол: "мужчина",
    рост: 180,
    цель: "lose weight",
    возраст: 23

})
