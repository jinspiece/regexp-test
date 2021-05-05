let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`
// 생성자 방식
const regexp = new RegExp('the', '')
console.log(str.match(regexp))

const regexp1 = new RegExp('the', 'g')
console.log(str.match(regexp1))

const regexp2 = new RegExp('the', 'gi')
console.log(str.match(regexp2))

// 리터럴 방식
const regexpLtr = /the/gi
console.log(str.match(regexpLtr))

const regexp3 = /fox/gi
console.log(regexp3.test(str))

const regexp4 = /HEROPY/gi
console.log(regexp4.test(str))

const regexp5 = /fox/gi
console.log(str.replace(regexp5, 'AAA'))

// $ : 문자 끝부분(백틱기호 앞)
console.log(str.match(/\.$/gim))
console.log(str.match(/d$/gm))
console.log(str.match(/^t/gm))
console.log(str.match(/./gm))
console.log(str.match(/h..p/g))
console.log(str.match(/fox|dog/g))
console.log(str.match(/fox|dog/))
console.log(str.match(/dog|fox/))
console.log(str.match(/https?/g))

console.log(str.match(/d{2}/))
console.log(str.match(/d{2}/g))
console.log(str.match(/d{2,}/g))
console.log(str.match(/\w{2,3}/g))
// \b : 단어의 경계를 의미
console.log(str.match(/\b\w{2,3}\b/g))
console.log(str.match(/[fox]/g))
console.log(str.match(/[0-9]/g))
console.log(str.match(/[0-9]{1,}/g))
console.log(str.match(/[가-힣]{1,}/g))

console.log(str.match(/\w/g))
console.log(str.match(/\b/g))
console.log(str.match(/\bf\w/g))
console.log(str.match(/\bf\w{1,}\b/g))
console.log(str.match(/\s/g)) // 줄바꿈도 해당

const h = `  the hello  world   !

`
console.log(h.replace(/\s/g, ''))

console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))