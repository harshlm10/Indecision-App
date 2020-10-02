//ES5
// const square = function (x) {
//     return x * x;
// }

//ES6

// const squarearrow = (x) => {
//     return x * x
// }

// const squarearrow = (x) => x * x
// console.log(squarearrow(56127))

// const getFirstName = (x) => {
//     return x.split(' ')[0]
// }

// const arrowGetFirstName = (x) => x.split(' ')[0]

// console.log(getFirstName('Harshit Singh'))
// // console.log(arrowGetFirstName('Harshit Singh'))

// const user = {
//     name: 'harshit',
//     cities: ['philadelphia', 'new york', 'dublin'],
//     lived: function () {
//         console.log(this.name)
// //         console.log(this.cities)
// //         // const that = this
// //         this.cities.forEach((city) => {
// //             console.log(this.name + ' has lived in ' + city)
// //         })
// //     }
// // }
// // user.lived()

// // const multiplier = {
// //     numbers: [12, 56, 89],
// //     multiplyby: 2,
// //     multiply() {
// //         return this.numbers.map(x => this.multiplyby * x)
// //     }
// // }

// // console.log(multiplier.multiply())

// class Person {
//     constructor(name = 'Annonymous', age = 0) {
//         this.name = name
//         this.age = age
//     }
//     getGreeting() {
//         return `Hello ${this.name} Welcome to React!!`
//     }
//     getDescription() {
//         return `${this.name} is ${this.age} Year(s) old!!`
//     }
// }

// class Student extends Person {
//     constructor(name, age, course) {
//         super(name, age);
//         this.course = course
//     }
//     hasMajor() {
//         return this.course ? true : false
//     }
// }

// class Traveller extends Person {
//     constructor(name, age, location) {
//         super(name, age)
//         this.location = location
//     }
//     getGreeting() {
//         let greeting = super.getGreeting()
//         if (this.location) {
//             greeting = `Hi i am ${this.name}. I am Visiting ${this.location}`
//         }
//         else greeting = `Hi I am ${this.name}.`
//         return greeting
//     }
// }

// // const me = new Person('Harshit Singh');
// // const other = new Person('Babua', 21);
// // console.log(other.getDescription())
// // const harshit = new Student('Thakur', 67, 'CSE')
// // console.log(harshit.hasMajor())
// const me = new Traveller('Harshit', 20, 'philadelphia');
// const other = new Traveller(undefined, undefined, undefined)
// console.log(me.getGreeting())
// console.log(other.getGreeting())

