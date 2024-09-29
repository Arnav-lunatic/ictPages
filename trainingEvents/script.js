const eventContainer = document.querySelector(".event-container");

const eventArr = [
	[
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi aut similique assumenda saepe doloremque at iure.",
		"12/12/2012"
    ],
    [
		"Lorem dolor sit, amet consectetur adipisicing elit. Quasi aut similique assumenda saepe doloremque at iure.",
		"12/12/2012"
	],
	[
		"Lorem dolor sit, amet consectetur adipisicing elit. Quasi aut similique assumenda saepe doloremque at iure.",
		"12/12/2012"
	],
	[
		"Lorem dolor sit, amet consectetur adipisicing elit. Quasi aut similique assumenda saepe doloremque at iure.",
		"12/12/2012"
    ],	
];

eventArr.forEach(elem => {
    eventContainer.innerHTML += `<div class="events"><h3>${elem[0]}</h3><h3 class="date">${elem[1]}</h3></div>`;
});


