//A A A

describe("Test in the App File", () => {

  test("should be 30", () => {
    // 1. Arrange: prepara lo que hace falta para el test 
    const num1 = 10;
    const num2 = 20;

    // 2. Act
    const result = num1 + num2;

    // 3. Assert
    expect(result).toBe(30);
  });

});
