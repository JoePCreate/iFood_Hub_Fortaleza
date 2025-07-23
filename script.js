function filtrarAndar() {
  const filtro = document.getElementById("filtroAndar").value;
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const andar = card.getAttribute("data-andar");
    card.style.display = (filtro === "todos" || filtro === andar) ? "flex" : "none";
  });
}