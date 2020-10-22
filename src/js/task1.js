/*Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.Значением исполнившегося промиса должно быть то кол - во миллисекунд которое передали во время вызова функции delay.*/

const result = document.querySelector(".js-task1");

const delay = ms => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(ms);
		}, ms);
	});
};

const logger = time => {
	const message = `Resolved after ${time}ms`;
	console.log(message);
	result.insertAdjacentHTML("beforeend", `<p>${message}</p>`);
}


//---------------------------
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms