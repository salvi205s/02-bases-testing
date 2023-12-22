// Importa la función getUUID desde el archivo ../../src/plugins
import { getUUID } from "../../src/plugins";

// Describe un conjunto de pruebas para el archivo get-id.plugin.ts
describe("plugins/get-id.plugin.ts", () => {
  
  // Prueba: getUUID() debería devolver un UUID
  test("getUUID() should return a UUID", () => {
    // Llama a la función getUUID para obtener un UUID
    const uuid = getUUID();

    // Asegúrate de que el tipo del UUID sea una cadena (string)
    expect(typeof uuid).toBe("string");

    // Asegúrate de que la longitud del UUID sea 36 caracteres
    expect(uuid.length).toBe(36);
  });
});
