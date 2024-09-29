const ctx = document.getElementById("barChart");

new Chart(ctx, {
	type: "bar",
	data: {
		labels: ["B.Tech CSE", "B.Tech IT", "B.Tech AI", "BCA", "MCA", "M.Tech"],
		datasets: [
			{
				label: "Statistic Data",
				data: [160, 120, 60, 20, 25, 5],
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});
