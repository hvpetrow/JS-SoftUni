const {expect} = require('chai');
const sum = require('./sumOfNumbers');
const isSymmetric = require('./checkForSymmetry');

describe('Sum checker', ()=>{
    it('return right sum',()=>{
        expect(sum([1,2,3])).to.equal(6);
    });
});

describe('Check for Symmetry Tests', () => {

    it('returns false for non-array arguement', () => {

        expect(isSymmetric(3)).to.be.false;
        expect(isSymmetric('abcba')).to.be.false;
        expect(isSymmetric('a')).to.be.false;

    });
});