const squad = [
  ["Nguyen Van A", 10, "FW"],
  ["Tran Van B", 5, "MF"],
  ["Le Van C", 2, "DF"],
  ["Pham Van D", 12, "FW"],
  ["Hoang Van E", 0, "GK"],
  ["Dang Van F", 7, "MF"],
];

// yeu cầu 1: in ra danh sách cầu thủ theo định dạng: ["Nguyen Van A (FW): 10 bàn thắng"]

const viewlistSquad = (squad) => {
    const newSquads = squad.map((elemnt) => {
        // destructuring
    //     const [name, goals, position] = elemnt;
    //     console.log(" name - goals -position: ", name, goals, position);
    //     return `${name} (${position}): ${goals} bàn thắng`;
    // });

    squad.map((elemnt) => {
        console.log("name: ", elemnt[0]);
        console.log("goals: ", elemnt[1]);
        console.log("position: ", elemnt[2]);
        return `${elemnt[0]} (${elemnt[2]}): ${elemnt[1]} bàn thắng`;
    });

    return newSquads;
}

// chức năng 2: tìm kiếm cầu thủ( sử dụng find)
// const findplayer = (squad, name) => {
//     const resultSearch = squad.find((element)) => {
//         const playerName = element[0];

//         if (playerName.toUpperCase() === name.toUpperCase()) {
//             return `${element[0]} (${element[2]}): ${element[1]} bàn thắng`;
//         }
//     });

//     return resultSearch;
// };

// if (findplayer(squad, "Nguyễn Văn A")) {
//     console.log("kết quả tìm kiếm :", findplayer(squad, "Nguyễn Văn A"));
// } else {
//     console.log("Không tìm thấy cầu thủ");
// }

//chức năng 3 lọc cầu thủ theo vị trí ( sử dụng filter)
const filterPorition = (squad, position) => {
    if (
        position != "FW" &&
        position != "MF" &&
        position != "DF" &&
        position != "GK"
    ) {
        console.log("Vị trí không hợp lệ");
        return; 
    } else {
        return squad.filter((element) => {
            const positionName = element[2];
            return positionName.toUpperCase() === position.toUpperCase();
        });
        }
    };
    console.log(filterPorition(squad, "FW"));

    // chức năng 4: thống kê tổng số bàn thắng
    const totalGoals = (squad) => {
        squad.reduce((previousValue, currentValue) => {
            
            console.log(previousValue, previousValue);

        }; 0);
    };
