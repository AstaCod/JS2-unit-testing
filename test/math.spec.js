// const { expect } = require('chai');
import { expect } from 'chai';
import  {sum} from '../index.js';

it('calc with positive numbers', () => {
    expect(sum(5, 7)).to.equal(12);
});

it('calc with negative numbers', () => {
    expect(sum(-5, -7)).to.equal(-12); // Исправил значение на -12
});
