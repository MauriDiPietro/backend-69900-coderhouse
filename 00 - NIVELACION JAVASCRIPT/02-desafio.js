const users = [
  {
    name: "Matias",
    age: 25,
    series: ["Casados con hijos", "Breaking Bad"],
  },
  {
    name: "Emiliano",
    age: 36,
    series: ["La casa de papel", "Prison Break"],
  },
];

// users.forEach((user) => {
//   user.age++, user.series.push("Game of thrones");
// });

for (const user of users) {
    user.age++, user.series.push("Sorjonen");
}

console.log(users);
