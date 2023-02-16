import {test, expect} from "vitest";
import { transformToNumber } from "./numbers";

test("should transform a string to number", ()=>{
const input = "3";

const expectedResult = transformToNumber(input);

expect(expectedResult).toBeTypeOf("number")
})

test("should return NaN for non-transformable values",()=>{
  const input = "invalid";
  const expectedResult = transformToNumber(input);

  expect(expectedResult).toBeNaN();
})