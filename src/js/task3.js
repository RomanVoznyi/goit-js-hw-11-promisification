/*Перепиши функцию makeTransaction() так, чтобы она не использовала callback - функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.*/

const result = document.querySelector(".js-task3");

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
	const delay = randomIntegerFromInterval(200, 500);

	return new Promise((onSuccess, onError) => {
		setTimeout(() => {
			const canProcess = Math.random() > 0.3;

			if (canProcess) {
				onSuccess({ id: transaction.id, time: delay });
			} else {
				onError(transaction.id);
			}
		}, delay);
	})
};

const logSuccess = ({ id, time }) => {
	const message = `Transaction ${id} processed in ${time}ms`;
	console.log(message);
	result.insertAdjacentHTML("beforeend", `<p>${message}</p>`);
};

const logError = id => {
	const message = `Error processing transaction ${id}. Please try again later.`;
	console.warn(message);
	result.insertAdjacentHTML("beforeend", `<p class="error">${message}</p>`);
};

//----------------------------------------
makeTransaction({ id: 70, amount: 150 })
	.then(logSuccess)
	.catch(logError);

makeTransaction({ id: 71, amount: 230 })
	.then(logSuccess)
	.catch(logError);

makeTransaction({ id: 72, amount: 75 })
	.then(logSuccess)
	.catch(logError);

makeTransaction({ id: 73, amount: 100 })
	.then(logSuccess)
	.catch(logError);