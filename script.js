const sidebarElements = document.querySelectorAll('.sidebar-element');
const liNavbarElements = document.querySelectorAll('.team-selection>li');
const TeamListDisplay = document.querySelector('.content-body');
const ActivityListDisplay = document.querySelector('.activity-body');
const allButton = document.querySelector('.all');
const favouritedButton = document.querySelector('.favourited');
const archivedButton = document.querySelector('.archived');

function activateNavlistElement(event, element) {
  liNavbarElements.forEach(ele => {
    ele.classList.remove('active');
  });
  element.classList.add('active');
}
function activateSidebarElement(event, element) {
  sidebarElements.forEach(ele => {
    ele.classList.remove('active');
  });
  element.classList.add('active');
}
function addActivityToDisplay() {
  var current;
  var value = data.activities.length;
  for (let i = 0; i < value; i++) {
    current = data.activities[i];
    ActivityListDisplay.innerHTML += activityTemplate(
      current.person,
      current.action,
      current.target,
      current.created_at
    );
  }
}
function addUser(user) {
  var navbar = document.querySelector('.navbar-nav.clearfix');
  navbar.innerHTML += makeUser(user);
}
function addTeamToDisplay(teamlist) {
  var value = teamlist.length;
  TeamListDisplay.innerHTML = '';
  for (let i = 0; i < value; i++) {
    var {
      id,
      name,
      image,
      description,
      campaigns_count,
      leads_count,
      is_favorited,
      is_archived,
      created_at
    } = teamlist[i];

    TeamListDisplay.innerHTML += teamTemplate(
      name,
      image,
      description,
      campaigns_count,
      leads_count,
      is_favorited,
      created_at
    );
  }
  if (value % 3 == 2) {
    const hidden = `<div class='content-body-team' style='visibility:collapse'></div>`;
    current = TeamListDisplay.innerHTML;
    TeamListDisplay.innerHTML = current + hidden;
  }
}
window.addEventListener('DOMContentLoaded', () => {
  addUser(data.current_user);
  addTeamToDisplay(data.teams);
  addActivityToDisplay();
});
liNavbarElements.forEach(ele => {
  ele.addEventListener('click', e => activateNavlistElement(e, ele));
});
sidebarElements.forEach(ele => {
  ele.addEventListener('click', e => activateSidebarElement(e, ele));
});
allButton.addEventListener('click', () => {
  addTeamToDisplay(data.teams);
});
favouritedButton.addEventListener('click', () => {
  addTeamToDisplay(data.teams.filter(team => team.is_favorited));
});
archivedButton.addEventListener('click', () => {
  addTeamToDisplay(data.teams.filter(team => team.is_archived));
});
