const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions')

test ('Should return 2', () => {
    expect(returnTwo(2)).toEqual(2)
})

test ('Should return Hello, James and Hello, Jill', () => {
    expect(greeting('James')).toEqual('Hello, James');
    expect(greeting('Jill')).toEqual('Hello, Jill');
})

test ('Should return 3 and 14', () => {
    expect(add(1,2)).toEqual(3);
    expect(add(5,9)).toEqual(14);
})

describe('Math functions', () => {

    test('Should return 6', () => {
        expect(multiply(2,3)).toEqual(6)
    })

    test('Should return 5', () => {
        expect(divide(10,2)).toEqual(5)
    })

    test('Should return 10', () => {
        expect(subtract(20,10)).toEqual(10)
    })
})
