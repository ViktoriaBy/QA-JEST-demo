


const { add, subtract, multiply, divide, sayHello } = require('../function');

test('Hello World', () =>{
    expect(true).toBeTruthy()

})




//REFERENCES TYPES ARE SPECIAL
test('reference types', () =>{
    // expect([12]).toBe([12]) //bad
    expect({car:'honda'}).toEqual({ car:'honda'})
})

describe('math test', () =>{
    //TO BE
test('add should add two numbers', () =>{
    expect(add(4, 2)).toEqual(6)
})
test('subtract should subtract two numbers', () =>{
    expect(subtract(10, 8)).toEqual(2)
})
})

//CONTAINS
const myArr = ['shoe', 'sock', 'dress', 'hat']

test('myArr contains hat', () =>{
    expect(myArr).toContain('hat')
})

test('myArr will add chair', () =>{
    const myItem = 'chair'
    myArr.push(myItem)

    expect(myArr).toContain('chair')
})

//TEST OBJECT METHODS
let bankAccount = {
    balance: 1000,
    depositMoney(amount) {
      this.balance += amount;
    },
    withdrawMoney(amount) {
      this.balance -= amount;
    },
  };

  describe('bank account methods', () =>{
      //BEFOREEACH, AFTEREACH, BEFORE ALL, AFTERALL
      beforeEach(() =>{
          bankAccount.balance = 1000;

      })

      test('bank account can deposit money', ()=>{
          bankAccount.depositMoney(500)
          expect(bankAccount.balance).toEqual(1500)
      })
      test('bank account can withdraw money', ()=>{
        bankAccount.withdrawMoney(700)
        expect(bankAccount.balance).toEqual(300)
    })
  })

  //EOD TESTING REVIEW
  //create array of at least 5 items
  //create test that checks that an item is not in the array

  const arr = ['apple', 'orange', 'banana', 'cherry', 'mango']

  test('is it in the array', () =>{
      expect(arr).not.toContain('blueberries')
         
  })

  //CREATE TWO VARIABLES
  //one for your age one for your best friends/
  //test should check that your age is always greater than your friends age


let myAge = 31
let friendsAge = 20

test('my age is greater', () =>{
    expect(myAge).toBeGreaterThan(friendsAge)
})

//test that the array will always have 5 elements
test('always five elements',() => {
    expect(arr.length).toEqual(7)
    expect(arr).toHaveLength(5)
})

