// import {
//   buildLogger,
//   logger as winstonLogger,
// } from "../../src/plugins/logger.plugin";

// describe("plugins/logger.plugin.ts", () => {
//   test("buildLogger should return a function logger", () => {
//     const logger = buildLogger("test");

//     expect(typeof logger.log).toBe("function");
//     expect(typeof logger.error).toBe("function");
//   });

//   test("logger.log should log a message", () => {
//     const winstonLoggerMock = jest.spyOn(winstonLogger, "log");
//     const message = "test message";
//     const service = "test service";

//     const logger = buildLogger(service);

//     logger.log(message);

//     expect(winstonLoggerMock).toHaveBeenCalledWith(
//       "info",
//       expect.objectContaining({
//         level: "info",
//         message,
//         service,
//       })
//     );
//   });
// });

//-----------------------------------------------------------------
// Este cubre el 100%

// Importa las funciones y objetos necesarios del módulo 'logger.plugin'
import { buildLogger, logger as winstonLogger } from "../../src/plugins/logger.plugin";

// Describe el conjunto de pruebas para el módulo 'logger.plugin'
describe("plugins/logger.plugin.ts", () => {
  
  // Prueba la función 'buildLogger'
  test("buildLogger should return a function logger", () => {
    // Llama a la función 'buildLogger' con un nombre de servicio 'test'
    const logger = buildLogger("test");

    // Verifica que el resultado de 'buildLogger' tenga propiedades 'log' y 'error' de tipo función
    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  // Prueba la función 'logger.log'
  test("logger.log should log a message", () => {
    
    // Crea un objeto simulado de 'winstonLogger' para espiar las llamadas a la función 'log'
    const winstonLoggerMock = jest.spyOn(winstonLogger, "log");
    const message = "test message";
    const service = "test service";

    // Llama a la función 'buildLogger' con un nombre de servicio 'test'
    const logger = buildLogger(service);

    // Llama a la función 'log' del logger creado
    logger.log(message);

    // Verifica que la función 'log' de 'winstonLogger' haya sido llamada con los parámetros correctos
    expect(winstonLoggerMock).toHaveBeenCalledWith("info", expect.objectContaining({
      level: "info",
      message,
      service,
    }));
  });

  // Prueba la función 'logger.error'
  test("logger.error should log an error message", () => {
    // Crea un objeto simulado de 'winstonLogger' para espiar las llamadas a la función 'error'
    const winstonLoggerMock = jest.spyOn(winstonLogger, "error");
    const errorMessage = "test error message";
    const service = "test service";

    // Llama a la función 'buildLogger' con un nombre de servicio 'test'
    const logger = buildLogger(service);

    // Llama a la función 'error' del logger creado
    logger.error(errorMessage);

    // Verifica que la función 'error' de 'winstonLogger' haya sido llamada con los parámetros correctos
    expect(winstonLoggerMock).toHaveBeenCalledWith("error", expect.objectContaining({
      message: errorMessage,
      service,
    }));
  });
});
