var selectedPlayerName = localStorage.getItem("selectedPlayer");
var selectedTeam = localStorage.getItem("selectedTeam");
var allPlayers = JSON.parse(localStorage.getItem("players"));
var selectedPlayer = allPlayers.find((v) => v.name == selectedPlayerName);
console.log("selectedPlayer", selectedPlayer);

function loadPlayerData() {
  const img = document.createElement("img");
  img.setAttribute("src", selectedPlayer.image);
  img.style.width = "100%";
  img.style.height = "100%";
  document.getElementById("left-image").appendChild(img);

  document.getElementById("playerName").innerHTML = selectedPlayer.name;
  document.getElementById("description").innerHTML = selectedPlayer.description;
  document.getElementById("team").innerHTML = selectedTeam;
  document.getElementById("role").innerHTML = selectedPlayer.role;
  document.getElementById("status").innerHTML = selectedPlayer.playingStatus;
  document.getElementById("price").innerHTML = selectedPlayer.price;
  document.getElementById("from").innerHTML = selectedPlayer.state;
}
if (location.href.includes("player.html")) {
  loadPlayerData();
}