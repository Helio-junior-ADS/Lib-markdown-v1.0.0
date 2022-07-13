const pegaArquivo = require("../index");

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
];

describe("pegaArquivo::", () => {
  it("deve ser uma função", () => {
    expect(typeof pegaArquivo).toBe("function");
  });
  it("deve retorna array com resultados", async () => {
    const resultado = await pegaArquivo('C:/Users/MSI/Desktop/Alura/lib-nodejs-markdown/test/arquivos/texto1.md');
    expect(resultado).toEqual(arrayResult);
  });
  it('deve retorna mensagem "não há links"', async () => {
    const resultado = await pegaArquivo('C:/Users/MSI/Desktop/Alura/lib-nodejs-markdown/test/arquivos/texto1_semLink.md');
    expect(resultado).toBe('não há links');
  })
});
