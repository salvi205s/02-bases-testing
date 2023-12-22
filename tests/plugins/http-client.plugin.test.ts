import { httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe("plugins/http-client.plugin.ts", () => {

  test("httpClientPlugin.get() should return the expected data", async () => {
    // Define la URL de la API a la que se hará la solicitud
    const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

    // Realiza la solicitud HTTP utilizando httpClientPlugin.get
    const responseData = await httpClientPlugin.get(apiUrl);

    // Muestra la información de la respuesta en la consola (opcional)
    console.log({ responseData });

    // Define la estructura esperada de la respuesta
    const expectedData = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    };

    // Utiliza expect para asegurarte de que la respuesta coincida con la estructura esperada
    expect(responseData).toEqual(expectedData);
  });

  test("httpClientPlugin should have POST, PUT and Delete methods", () => {
    expect(typeof httpClientPlugin.post).toBe("function");
    expect(typeof httpClientPlugin.delete).toBe("function");
    expect(typeof httpClientPlugin.put).toBe("function");
    expect(typeof httpClientPlugin.get).toBe("function");
  });
});
