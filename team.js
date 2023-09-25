let availableTeams = JSON.parse(localStorage.getItem("teams"));
var selectedTeamName = localStorage.getItem("selectedTeam");
var selectedTeam = availableTeams.find((v) => v.name == selectedTeamName);
console.log(selectedTeam);

function loadTeamDetail() {
  const img = document.createElement("img");
  img.setAttribute("src", selectedTeam.image);
  img.style.width = "250px";
  img.style.height = "250px";
  document.getElementById("team-icon").appendChild(img);
  document.getElementById("teamName").innerHTML = selectedTeam.name;
  document.getElementById("playersCount").innerHTML = selectedTeam.playersCount;
  document.getElementById("topBatsMan").innerHTML = selectedTeam.topBatsMan;
  document.getElementById("topBowler").innerHTML = selectedTeam.topBowler;
  document.getElementById("championshipCount").innerHTML =
    selectedTeam.championshipCount;

  const rootPlayerList = document.getElementById("right-content");
  selectedTeam.players.forEach((player) => {
    const playerDiv = document.createElement("div");
    playerDiv.addEventListener("click", function (args) {
      localStorage.setItem(
        "selectedPlayer",
        args.target.getAttribute("selected-player")
      );
      window.location.href = "./player.html";
    });
    playerDiv.style.background = selectedTeam.bgColor;
    playerDiv.classList.add("card");
    const playerImage = document.createElement("img");
    playerImage.setAttribute("selected-player", player.name);
    playerImage.setAttribute("src", player.image);
    playerImage.style.height = "80%";
    const playerNameDiv = document.createElement("div");
    playerNameDiv.classList.add("player-name");
    playerNameDiv.innerHTML = player.name;

    playerDiv.appendChild(playerImage);
    playerDiv.appendChild(playerNameDiv);
    rootPlayerList.appendChild(playerDiv);
  });
}
if (location.href.includes("team.html")) {
  loadTeamDetail();
}