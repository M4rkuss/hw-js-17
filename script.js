// //1) Функция, которая принимает 2 строки и сравнивает их длину
// function strLength (strOne, strTwo) {
//   if (strOne.length > strTwo.length) return console.log('1')
//   else if (strOne.length < strTwo.length) return console.log('-1')
//   else return console.log("0")
// }
//
// strLength('Hello', 'dhjfbdfjddf')

// //2) В верхний регистр 1-ый символ строки
// function toUpper (userStr) {
//   return console.log(userStr[0].toUpperCase() + userStr.slice(1))
// }
//
// toUpper("example")

// //3) Считаем кол-во гласных букв в строке
// function isVowel (userStr) {
//   let arr = [...userStr]
//   let vowels = ["a", "e", "i", "o", "u", "y"]
//   let count = 0
//   for (let i = 0; i < arr.length; i++) {
//     vowels.forEach(e => {
//       if (arr[i].toLowerCase() === e) count++
//     })
//   }
//   return (console.log(`В вашем слове ${count} гласных`))
// }
//
// isVowel("Hello")

// //4) Проверка спама в переданной строке
// function isSpam (userStr) {
//   let lowerUserStr = userStr.toLowerCase()
//   let arr = [
//     '100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'xxx'
//   ]
//   for (let i = 0; i < arr.length; i++) {
//     if (lowerUserStr.indexOf(arr[i]) !== -1) {
//       console.log(`Обнаружен спам!`)
//     }
//   }
// }
//
// isSpam("Hello my name is Mark!")

// //5) Сокращение строки
// function truncate (userStr, strLength) {
//   if (userStr.length > strLength) {
//    return console.log(userStr.slice(0, strLength - 1) + '…')
//   }
//   else return console.log(userStr)
// }
//
// truncate("Hello, world!", 8)

// //6) Палиндром?
// function isPalindrom (userStr) {
//   let reverseUserStr = userStr.split("").reverse().join("")
//   if (userStr === reverseUserStr) console.log("Палиндром!")
//   else console.log("Не палиндром!")
// }
//
// isPalindrom('lol')

// //7) Кол-во слов в предложении
// function amountOfWords (userStr) {
//   let newArr = userStr.split(" ")
//   console.log(`В предложении ${newArr.length} слов`)
// }
//
// amountOfWords('Hello, my name is Mark!')

// //8) Возвращаем самое длинное слово
// function theLongest (userStr) {
//   let splitArr = userStr.split(" ")
//   return splitArr.reduce((a, b) => (b.length > a.length) ? b : a)
// }
//
// console.log(theLongest("One two three"))

// // 9) Находим символ
// function findSymbol (userStr, symbol) {
//   let count = 0
//   let splitArr = userStr.split("")
//   console.log(`Ваша строка: "${userStr}". Искомый символ: "${symbol}"`)
//   console.log("Индексы символа/ов:")
//     for (let i = 0; i < splitArr.length; i++) {
//       if (splitArr[i] === symbol){
//         console.log(i)
//         count++
//       }
//     }
//   console.log(`Символ встречается ${count++} раз`)
// }
//
// findSymbol("Hello, I'm M4rkuss", ",")

//10) Средняя длина слова
function avg (userStr) {
  let splitArr = userStr.split("")
  for (let i = 0; i < userStr.length; i++) {
    if (splitArr[i] === " ") {
      splitArr.splice(i,1)
    }
  }
  console.log(`Средняя длина слова в предложении: ${splitArr.length / userStr.split(" ").length}`)
}

avg("hello I am Mark")