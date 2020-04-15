/* eslint-disable no-undef */
import Calculator from '../js/calculator.js'

jest.mock('../js/calculator.js')

beforeEach(() => {
    Calculator.mockClear();
});



it('The consumer should be able to call new on Calculator', () => {
    const calculator = new Calculator();
    expect(calculator).toBeTruthy();
});