const squads = [
  ["Messi", "Forward"],
  ["Ronaldo", "Forward"],
  ["Neymar", "Forward"],
  ["De Bruyne", "Midfielder"],
  ["Kante", "Midfielder"],
  ["Van Dijk", "Defender"],
  ["Alisson", "Goalkeeper"],
];

// Yêu cầu 1: In ra danh sách cầu thủ theo định dạng: ["Messi, Forward"]

const viewListSquad = (squads) => {
  const newSquads = squads.map((element) => {
    console.log("name: ", element[0]);
    console.log("position: ", element[1]);
    return `${element[0]}, ${element[1]}`;
  });

  return newSquads;
};

console.log("Danh sách cầu thủ: ", viewListSquad(squads));
