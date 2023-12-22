import { getPokemonById } from "../../src/js-foundation/06-promises";

// Se describe el conjunto de pruebas relacionadas con las promesas en getPokemonById
describe("js-foundation/06-promises.ts", () => {
  // Primera prueba: getPokemonById debería devolver un pokemon
  test("getPokemonById should return a pokemon", async () => {
    
    // Se define el id de un pokemon existente (por ejemplo, Bulbasaur con id 1)
    const pokemonId = 1;

    // Se llama a getPokemonById y se espera que devuelva el nombre del pokemon (bulbasaur)
    const pokemonName = await getPokemonById(pokemonId);

    // Se espera que el nombre del pokemon sea 'bulbasaur'
    expect(pokemonName).toBe("bulbasaur");
  });

  // Segunda prueba: debería devolver un error si el pokemon no existe
  test("should return an error if pokemon does not exist", async () => {

    // Se define un id de pokemon que probablemente no exista (por ejemplo, 100000000)
    const pokemonId = 100000000;

    try {

      // Se llama a getPokemonById con el id no existente y se espera que arroje un error
      await getPokemonById(pokemonId);

      // Si la llamada anterior no arroja un error, la prueba falla (no debería llegar aquí)
      expect(true).toBeFalsy();
    } catch (error) {

      // Se espera que el error sea "Pokemon not found with id 100000000"
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });
});
