function creatGame(group, player1, hour, player2) {
    return `
        <li>
            <h2 id="grupos">${group}</h2>
            <img src="./assests/bandeirasdospaises/icon=${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assests/bandeirasdospaises/icon=${player2}.svg" alt="Bandeira do ${player2}">
        </li>
`
}

let delay = -0.4;
function creatCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML =
        creatCard("23/11", "quarta", creatGame("group f", "croatia", "07:00", "morocco") + creatGame("group e", "germany", "10:00", "japan") + creatGame("group f", "belgium", "16:00", "canada")) +
     

        creatCard("24/11", "quinta", creatGame("group g", "switzerland", "07:00", "cameroon") + creatGame("group h", "portugal", "13:00", "ghana") +
        creatGame("group g", "brazil", "16:00", "serbia")) +

        creatCard("27/11", "domingo", creatGame("group e", "spain", "16:00", "germany")) +

        creatCard("28/11", "segunda", creatGame("group g", "brazil", "13:00", "switzerland") + creatGame("group h", "portugal", "16:00", "uruguay")) +

        creatCard("29/11", "terça", creatGame("group a", "netherlands", "12:00", "qatar") + creatGame("group b", "wales", "16:00", "england")) +

        creatCard("30/11", "quarta", creatGame("group c", "poland", "16:00", "argentina")) +

        creatCard("01/12", "quinta", creatGame("group f","croatia", "12:00", "belgium") + creatGame("group e", "japan", "16:00", "spain")) +

        creatCard("02/12", "sexta", creatGame("group h", "south korea", "12:00", "portugal") + creatGame("group g", "cameroon", "16:00", "brazil"))