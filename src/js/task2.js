/*Перепиши функцию toggleUserState() так, чтобы она не использовала callback - функцию callback, а принимала всего два параметра allUsers и userName и возвращала промис.*/

const result = document.querySelector(".js-task2");

const users = [
	{ name: 'Mango', active: true },
	{ name: 'Poly', active: false },
	{ name: 'Ajax', active: true },
	{ name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
	const updatedUsers = allUsers.map(user =>
		user.name === userName ? { ...user, active: !user.active } : user,
	);
	return Promise.resolve(updatedUsers);
};

const logger = updatedUsers => {
	console.table(updatedUsers);

	const tableHead = "<tr><th>Index</th><th>Name</th><th>isActive</th></tr>";
	const innerData = updatedUsers.map(({ name, active }, index) => `<tr><td>${index}</td><td>${name}</td><td>${active}</td></tr>`).join("");
	result.insertAdjacentHTML("beforeend", `<table>${tableHead}${innerData}</table>`);
}

//---------------------------
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);