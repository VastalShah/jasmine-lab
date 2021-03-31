
var add = require('../app');

describe("Add Functionality", ()=>{
    //this is a testsuit, we can write multiple test cases

    it("should add positive numbers", ()=>{
        const result = add(4, 5);
        expect(result).toEqual(9);
    });


    it("should add negative numbers", ()=>{
        const result = add(-4, -5);
        expect(result).toEqual(-9);
    });

});