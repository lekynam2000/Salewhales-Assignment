const activityTemplate = (person, action, target, created_at) => {
  const act = action.split('_');
  return `<div class="activity-item">
<div class="activity-item-avatar">
<img src=${person.avatar} width="36" height="36"></div>
<div class="activity-item-content">
  <div class="activity-item-content-desc">
    ${person.name} ${act[0]} <b>${target}</b>'s quota
  </div>
  <div class="activity-item-content-time">${created_at}</div>
</div>
</div>`;
};
