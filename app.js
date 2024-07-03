// 1. nums = [4,5,6,7,0,1,2], target = 0 => mana shu nums array ichida targetga teng bo'lgan qiymatning nechinchi indexda turganini aniqlang rasult=>[ index ]
let target = 0
let nums = [4, 5, 6, 7, 4, 0, 1, 2]
const index = (arr, item) => {
  let indexOf
  for (let index in arr) {
    if (arr[index] == item) {
      indexOf = index
    }
  }
  return indexOf
}
// console.log(index(nums, target));




// 2. nums = [1,3,2,4,5,6,99,102], target = 5, o'sish va kamayish tartibli array ichida target qiymati array ichida nechinchi qiymatda turganini aniqlang 
const twoIndex = function () {
  let twoNums = [1, 3, 2, 4, 5, 6, 99, 102];
  let twoTarget = 5;

  // ndex(twoNums, twoTarget) bu 1-misolni f-yasi
  twoNums.sort((a, b) => a - b)
  let index1 = index(twoNums, twoTarget)

  // ndex(twoNums, twoTarget) bu 1-misolni f-yasi
  twoNums.sort((a, b) => b - a)
  let index2 = index(twoNums, twoTarget)
  return { index1, index2 }
}
// console.log(twoIndex())





// 3.ixtiyoriy object yaratilsin va key va valuesi kamida 4 ta bo'lsin 1. key larini ro'yxati chiqarilsin 2. value larining ro'yxati chiqarilsin
function keysVelues() {
  let obj = {
    name: "Alik", tel: "90 123 12 12", email: "a@gmail.com", hobbiy: "game"
  }
  let values = Object.values(obj)
  let keys = Object.keys(obj)
  return { values, keys }
}
// console.log(keysVelues())




// 4. 2 ta 4 tadan element dan mavjud bo'lgan object yaratilsin 1. ularning birlashmasi topilsin 2. birlashmasining keyi topilsin 3. birlashmasining valuesi topilsin 4. birlashmasining valuelarining yig'indisi topilsin 
const fourEx = () => {
  err1 = { num1: 2, sum2: 4 }
  err2 = { num3: 6, sum4: 8 }
  // Birlashmasi
  let union = Object.assign(err1, err2)

  // Birlashmani keylari
  let keys = Object.keys(union)

  // Birlashmani keylari
  let values = Object.values(union)

  // Birlashmani yig'indisi
  let total = 0
  for (let item of values) {
    total += item
  }

  return { union, keys, values, total }
}
// console.log(fourEx());




// 5. Parametr sifatida istalgancha son qabul qiladigan funksiya yarating. Bu funksiyada shu sonlarning yig'indisi hisoblansin.(rast operation bilan qilinsin) 
const restOperator = (...err) => {
  let sum = 0
  for (let item of err) {
    sum += item
  }
  return sum
}
// console.log(restOperator(1, 2, 3, 4, 5, 6))




// 6. Ixtiyoriy function va array yarating, functionga berilgan parametr o'sish tartibida joylashgan array da nechinchi indexda, kamayish tartibida joylashgan arraydagi index toping.
const endEx = (son) => {
  let err = [7, 5, 8, 10, 14, 6, son];

  let index1
  let index2

  err.sort((a, b) => a - b)
  for (let index in err) {
    if (err[index] == son) {
      index1 = index
    }
  }
  err.sort((a, b) => b - a)
  for (let index in err) {
    if (err[index] == son) {
      index2 = index
    }
  }

  return { index1, index2 }
}
console.log(endEx(1));