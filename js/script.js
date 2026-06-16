document.addEventListener("DOMContentLoaded", () => {

    const perguntas = document.querySelectorAll(".pergunta");

    perguntas.forEach((pergunta) => {
        pergunta.addEventListener("click", () => {

            const resposta = pergunta.nextElementSibling;

            resposta.classList.toggle("mostrar");
            pergunta.classList.toggle("ativa");

        });
    });

    const formulario = document.querySelector("form");

    if (formulario) {

        formulario.addEventListener("submit", (e) => {

            e.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (!nome || !email || !mensagem) {
                alert("Preencha todos os campos.");
                return;
            }

           const textoModal = document.getElementById("mensagemSucesso");

textoModal.innerHTML = `
    Obrigado pelo contato, <strong>${nome}</strong>!<br><br>
    Sua mensagem foi enviada com sucesso.
`;

const modal = new bootstrap.Modal(
    document.getElementById("modalSucesso")
);

modal.show();

            formulario.reset();

        });

    }

});