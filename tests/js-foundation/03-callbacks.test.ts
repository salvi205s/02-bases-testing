// Importa la función getUserById desde el archivo 03-callbacks en la carpeta js-foundation
import { getUserById } from "../../src/js-foundation/03-callbacks";

// Inicia un bloque de pruebas para el archivo 03-callbacks.ts
describe("js-foundation/03-callbacks.ts", () => {
  // Primera prueba: getUserById debe devolver un error si el usuario no existe
  test("getUserById should return an error if user does not exist", (done) => {
    // Asigna un id que no existe en el sistema (por ejemplo, 10)
    const id = 10;

    // Llama a la función getUserById con el id y un callback
    getUserById(id, (err, user) => {
      // Verifica que el error sea igual a un mensaje específico indicando que el usuario no se encontró
      expect(err).toBe(`User not found with id ${id}`);
      // Verifica que el usuario sea indefinido (ya que el usuario no existe)
      expect(user).toBeUndefined();

      // Llama a la función 'done' para indicar que la prueba ha terminado
      done();
    });
  });

  // Segunda prueba: getUserById debe devolver un objeto con el nombre "John Doe" para un id específico
  test("getUserById should return John Doe", (done) => {
    // Asigna un id existente en el sistema (por ejemplo, 1)
    const id = 1;
    // Llama a la función getUserById con el id y un callback
    getUserById(id, (err, user) => {
      // Verifica que no haya error (err debe ser undefined)
      expect(err).toBeUndefined();

      // Verifica que el usuario sea igual a un objeto específico con id y nombre
      expect(user).toEqual({
        id: 1,
        name: "John Doe",
      });

      // Llama a la función 'done' para indicar que la prueba ha terminado
      done();
    });
  });
});
