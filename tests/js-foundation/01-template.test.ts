// Importa la plantilla de correo electrónico desde el módulo 'js-foundation/01-template'
import { emailTemplate } from "../../src/js-foundation/01-template";

// Describe un conjunto de pruebas para el archivo 'js-foundation/01-template.ts'
describe("js-foundation/01-template.ts", () => {

  // Prueba que la plantilla de correo electrónico contenga un saludo
  test("emailTemplate should contain a greeting", () => {
    
    // Utiliza la función 'expect' de Jest para verificar que la plantilla de correo electrónico contenga la cadena "Hi, "
    expect(emailTemplate).toContain("Hi, ");
  });

  // Prueba que la plantilla de correo electrónico contenga las variables {{name}} y {{orderId}}
  test("emailTemplate should contain {{name}} and {{orderId}}", () => {
    // Utiliza la función 'expect' de Jest para verificar que la plantilla de correo electrónico coincida con la expresión regular /{{name}}/
    expect(emailTemplate).toMatch(/{{name}}/);

    // Utiliza la función 'expect' de Jest para verificar que la plantilla de correo electrónico coincida con la expresión regular /{{orderId}}/
    expect(emailTemplate).toMatch(/{{orderId}}/);

    // Utiliza la función 'expect' de Jest para verificar que la plantilla de correo electrónico contenga la cadena "{{name}}"
    expect(emailTemplate).toContain("{{name}}");

    // Utiliza la función 'expect' de Jest para verificar que la plantilla de correo electrónico contenga la cadena "{{orderId}}"
    expect(emailTemplate).toContain("{{orderId}}");
  });
});
