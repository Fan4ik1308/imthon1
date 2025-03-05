// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini


//let qoldiq = 5 % 2;
//alert(qoldiq)


// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini

//let RandomSon = Math.floor(Math.random() * 10) + 1;
//alert(RandomSon)


// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!


//let butunSon = Math.floor(12.510);
//alert(butunSon);



// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 


//function countLetters() {
//    let text = "MARS IT SCHOOL";
//    let count = text.length - text.split(" ").length + 1;
//    alert("В слове 'MARS IT SCHOOL' " + count + " букв");
//}
//countLetters();


// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering

//let text = "Mars It School";

//console.log(text.repeat(10));


// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

//let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
//
//console.log(harflar[3] + harflar[10] + harflar[1] + harflar[3] + harflar[9]); // Elbek
//
//console.log(`${harflar[3]}${harflar[10]}${harflar[1]}${harflar[3]}${harflar[9]}`); // Elbek


// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering


// let yosh = prompt("Yoshingizni kiriting:");
// if(yosh > 18) {
//     console.log("Siz balog'ot yoshiga yetgansiz");
// } else if(yosh < 18) {
//     console.log("Siz balog'at yoshiga yetmagansiz");
// } else {
//     console.log("Balog'at yoshi muborak");
// }


// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering


// let ism = prompt("Ismingizni kiriting:");
// console.log(ism.split('').reverse().join(''));

// 9-savol DOM

// Promtdan ismigizni kiriting va yoshingizni kiriting va uni style berilgan holda DOM ga chiqaring


// Javob:Kodini yozib bering





// let name = prompt("Ismingizni kiriting:");
// let age = prompt("Yoshingizni kiriting:");
// document.body.innerHTML += `
//     <div style="color: blue; font-size: 24px; margin: 20px;">
//         Ism: ${name} <br>
//         Yosh: ${age}
//     </div>
// `;



// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering
let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let juftSonlar = sonlar.filter(son => son % 2 === 0);
console.log(juftSonlar);