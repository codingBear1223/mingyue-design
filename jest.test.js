test("common macther", () => {
  expect(1 + 1).toBe(2);
  expect(2 + 2).not.toBe(5);
});
test("to be true or false", () => {
  expect(1 + 1 === 2).toBeTruthy();
  expect(1 + 1 === 3).toBeFalsy();
});
