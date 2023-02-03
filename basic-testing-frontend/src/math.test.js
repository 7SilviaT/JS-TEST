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