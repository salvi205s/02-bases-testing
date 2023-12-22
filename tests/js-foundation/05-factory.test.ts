import { buildMakePerson } from "../../src/js-foundation/05-factory";

// Se describe el conjunto de pruebas relacionadas con la fábrica de personas
describe("js-foundation/05-factory.ts", () => {

  // Se define una función de utilidad para obtener un UUID simulado
  const getUUID = () => "1234";

  // Se define una función de utilidad para obtener una edad simulada
  const getAge = () => 35;

  // Primera prueba: buildMakePerson debe devolver una función
  test("buildMakePerson should return a function", () => {

    // Se construye la función makePerson utilizando buildMakePerson
    const makePerson = buildMakePerson({ getUUID, getAge });

    // Se espera que makePerson sea de tipo 'function'
    expect(typeof makePerson).toBe("function");

  });

  // Segunda prueba: makePerson debe devolver un objeto de persona correctamente construido
  test("makePerson should return a person", () => {

    // Se construye la función makePerson utilizando buildMakePerson
    const makePerson = buildMakePerson({ getUUID, getAge });
    
    // Se llama a makePerson para crear una persona llamada John Doe
    const johnDoe = makePerson({ name: "John Doe", birthdate: "1985-10-21" });

    // Se espera que John Doe sea igual al objeto persona esperado
    expect(johnDoe).toEqual({
      id: "1234",
      name: "John Doe",
      birthdate: "1985-10-21",
      age: 35,
    });
  });
});
