function saveUsername() {
  var username = document.getElementById("username").value;
  localStorage.setItem("username", username);
  window.location.href = "kwitter_room.html";
}