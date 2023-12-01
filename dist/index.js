markBtn = document.querySelector("#mark-btn");
const numberNotif = document.querySelector("#numberNotif");
const unreadNotif = document.querySelectorAll(".unread-notif");
const dotNotif = document.querySelectorAll(".dot");

markBtn.addEventListener("click", () => {
  numberNotif.textContent = 0;

  unreadNotif.forEach((notif) => {
    notif.style.backgroundColor = "white";
  });

  dotNotif.forEach((dot) => {
    dot.style.display = "none";
  });
});
