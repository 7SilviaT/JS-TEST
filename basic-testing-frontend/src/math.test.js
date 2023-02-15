import {test, expect} from "vitest";
import { add } from "./math.js"; 

test("should add all numbers from an array", ()=>{
  //Arrange
  const numbers =[ 1, 2, 3];

  //Act

  const result= add(numbers);

  //Assert
  const expectedResult = numbers.reduce((prevValue,currValue)=>
    prevValue + currValue,0);
  expect(result).toBe(expectedResult);
});

test("should yield NaN if a least one invalid number is provided",()=>{
  const inputs = [ "invalid", 2];
  const result = add(inputs);

  expect(result).toBeNaN();

})

test("should yield a correct sum if an array of string values is provided",()=>{
  const numbers = ["1", "2"];
  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue,curValue)=> +prevValue + +curValue,0
  )

  expect(result).toBe(expectedResult);
})

test("should return 0 if the array is empty",()=>{
  const numbers = [];
  const result = add(numbers);

  expect(result).toBe(0);
})

test("should throw an error if no value is passed into a function",()=>{
  const resultFn = ()=>{
    add();
  };

  expect(resultFn).toThrow(/is not iterable/);
})

test("should throw an error if multiple arguments are provided instead of an array",()=>{
  const num1 = 1;
  const num2 = 2;

  const resultFn = () =>{
    add(num1,num2);
  }

  expect(resultFn).toThrow(/is not iterable/)
})