function BMIcalculate() {
    var weight = document.querySelector('#weight').value;
    var height = document.querySelector('#height').value;
    // 讀取輸入的值 .value
    var BMI = document.querySelector('#BMI');
    var ans = document.querySelector('#ans');
    BMI.innerHTML = BMIfun(weight, height);
    // 將 BMIfun() 的值存入 id = BMI
    ans.innerHTML = BMIans(BMIfun(weight, height));
    // 將 BMIans() 的值存入 id = ans
}

// 依照 BMI 公式進行計算後回傳
function BMIfun(weight, height) {
    height = height / 100;  // 換算公尺
    BMI = weight / (height * height);
    BMI = BMI.toFixed(2);  // 小數2位
    // console.log(BMI);
    return BMI;
}

// 將 BMI的值代入進行判斷後回傳
function BMIans(BMI) {
    // console.log(BMI);
    // 檢查用，確保輸入對的值
    if (BMI < 18.5) {
        return "太輕了";
    } else if (BMI >= 18.5 && BMI < 24) {
        return "體重正常 ";
    } else if (BMI >= 24 && BMI < 27) {
        return "過重 ";
    } else if (BMI >= 27 && BMI < 30) {
        return "輕度肥胖 ";
    } else if (BMI >= 30 && BMI < 35) {
        return "中度肥胖 ";
    } else if (BMI >= 35) {
        return "重度肥胖 ";
    }
}