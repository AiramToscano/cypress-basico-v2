// CAT-TAT.spec.js created with Cypress

describe("Central de Atendimento ao Cliente TAT", function () {
  // root-level hook
  // runs before every test block
  beforeEach(() => {
    cy.visit("./src/index.html");
    // root-level hook
    // runs before every test block
  });
  it("verifica o título da aplicação", function () {
    cy.title().should("eq", "Central de Atendimento ao Cliente TAT");
  });
  it("preenche os campos obrigatórios e envia o formulário", function () {
    cy.fillMandatoryFieldsAndSubmit();
    cy.get(".success").should("be.visible");
  });
  it("teste delay zero", function () {
    cy.get('textarea[id="open-text-area"]').type(
      "gostaria de cancelar meu cartaossssssssssssasdad asdasd ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      { delay: 0 }
    );
  });
  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function () {
    cy.get("button").click();
    cy.get(".error").should("be.visible");
  });

  it("preenche e limpa os campos nome, sobrenome, email e telefone", function () {
    cy.get('input[id="firstName"]')
      .type("Airam")
      .should("have.value", "Airam")
      .clear()
      .should("have.value", "");
    cy.get('input[id="lastName"]')
      .type("Toscano")
      .should("have.value", "Toscano")
      .clear()
      .should("have.value", "");
    cy.get('input[id="email"]')
      .type("airamlobato@gmail.com")
      .should("have.value", "airamlobato@gmail.com")
      .clear()
      .should("have.value", "");
    cy.get('input[id="phone"]')
      .type("123123123123")
      .should("have.value", "123123123123")
      .clear()
      .should("have.value", "");
  });
});
