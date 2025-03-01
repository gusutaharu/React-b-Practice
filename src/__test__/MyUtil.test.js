import { getTriangleArea } from "../chap09/MyUtil";

describe('getTriangleArea', () => {
  
  beforeEach(() => {
    console.log(new Date().toLocaleString());
  });

  test('正常パターン',() => {
    expect(getTriangleArea(10, 2)).toBe(10);
  })
});