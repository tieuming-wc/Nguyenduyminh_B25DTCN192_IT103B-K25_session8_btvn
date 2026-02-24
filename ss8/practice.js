const squads = [
  ["Nguyen Van A", 10, "FW"],
  ["Tran Van B", 5, "MF"],
  ["Le Van C", 2, "DF"],
  ["Pham Van D", 12, "FW"],
  ["Hoang Van E", 0, "GK"],
  ["Dang Van F", 7, "MF"],
];

// Yêu cầu 1: In ra danh sách cầu thủ theo định dạng: ["Nguyen Van A (FW): 10 bàn thắng"]

const viewListSquad = (squads) => {
  const newSquads = squads.map((element) => {
    // Destructuring
    // const [name, goals, position] = element;
    // console.log("name - goals - position: ", name, goals, position);

    console.log("name: ", element[0]);
    console.log("goals: ", element[1]);
    console.log("position: ", element[2]);
    return `${element[0]} (${element[2]}): ${element[1]} bàn thắng`;
  });

  return newSquads;
};

console.log("Danh sách cầu thủ: ", viewListSquad(squads));

// Chức năng 2: Tìm kiếm cầu thủ (Sử dụng find)
const findPlayer = (squads, name) => {
  const resultSearch = squads.find((element) => {
    const playerName = element[0];

    if (playerName.toUpperCase() === name.toUpperCase()) {
      return `${element[0]} (${element[2]}): ${element[1]} bàn thắng`;
    }
  });

  return resultSearch;
};

if (findPlayer(squads, "nguyen van a")) {
  console.log("Kết quả tìm kiếm: ", findPlayer(squads, "nguyen van a"));
} else {
  console.log("Không tìm thấy cầu thủ này!");
}

// Chức năng 3: Lọc cầu thủ theo vị trí (Sử dụng filter)
const filterPosition = (squads, position) => {
  if (
    position !== "FW" &&
    position !== "MF" &&
    position !== "DF" &&
    position !== "GK"
  ) {
    console.log("Vị trí không hợp lệ");
    return;
  } else {
    return squads.filter((element) => {
      const positionName = element[2];

      return positionName.toUpperCase() === position.toUpperCase();
    });
  }
};

console.log(filterPosition(squads, "FW"));

// Chức năng 4: Thống kê tổng bàn thắng (Sử dụng reduce)
const totalGoals = (squads) => {
  return squads.reduce((previousValue, currentValue) => {
    const goalOfPlayer = currentValue[1];
    return previousValue + goalOfPlayer;
  }, 0);
};

console.log("Tổng số bàn thắng của đội là: ", totalGoals(squads));

// Chức năng 5: Kiểm tra hiệu suất (Sử dụng some và every)
const checkPlayer = (squads) => {
  squads.some((element) => {
    const goalOfPlayer = element[1];

    return goalOfPlayer === 0;
  });
};

checkPlayer(squads);
