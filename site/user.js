const makeUser = user => {
  return `<div class="navbar navbar-notification">
    <div class="navbar-notification-count">${user.notifications_count}</div>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <path
          d="M4 11V1H20V11"
          stroke="#444444"
          stroke-width="2"
          stroke-linecap="square"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23 15V23H1V15H8V18H16V15H23Z"
          stroke="#444444"
          stroke-width="2"
          stroke-linecap="square"
        />
        <path
          d="M9 6H15"
          stroke="#444444"
          stroke-width="2"
          stroke-linecap="square"
        />
        <path
          d="M9 10H15"
          stroke="#444444"
          stroke-width="2"
          stroke-linecap="square"
        />
      </g>
    </svg>
  </div>
  <div class="navbar navbar-greet"><div class="">Hello, ${user.name}</div></div>
  <div class="navbar navbar-avatar"><div class="avatar"><img src=${user.avatar} width="36" height="36" style="border:50%"></div></div>
  <div class="navbar navbar-caretdown">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.757324 5H9.24261L4.99996 9.24264L0.757324 5Z"
              fill="black"
            />
          </svg>
        </div>`;
};
