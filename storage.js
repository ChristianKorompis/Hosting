// Just a global variable for the local storage key.
const stateName = 'activeDiv';

// Global/public state in the event that local storage can't be used. 
let state = {};


// A simple function to get the state of the application.
const getState = () => {
  try {
    const data = JSON.parse(localStorage.getItem(stateName));
    if (typeof data != 'object' || data == null) {
      return state;
    } else {
      state = data;
      return state;
    }
  } catch (e) {
    return state;
  }
};


// A simple function to update the application state.
const updateState = newState => {
  try {
    localStorage.setItem(stateName, JSON.stringify(newState));
  } catch (e) {
    // todo 
  }

  state = getState();
  console.clear();
  console.log(state);

  render();
};


// A simple function to update the UI. 
const render = () => {
  const local = getState();
  const divs = document.querySelectorAll(".pelindung-link");

  if (local.active != null) {
    divs.forEach(div => {

      if (local.active.indexOf(div.id) >= 0) {
        div.className = "visitednw pelindung-link";
      } else {
        div.className = "pelindung-link";
      }
    });
  }
};


// A simple function to update the state when a button is clicked.
const clickHandler = () => {
  const e = event || window.event;
  const div = e.target.parentElement;
  const key = div.id;
  const local = getState();

  if (local[key] == null) {
    local[key] = 1; // The default value, clicked once already. 
  } else {
    local[key] += 1;
  }

  if (local.active == null) {
    local.active = [];
  }

  if (local.active.indexOf(key) == -1) {
    local.active.push(key);
  }

  updateState(local);

  // Double whammy.
  e.preventDefault();
  return false;
};


// A simple function to manage what events handle what.
const dispatchEvents = () => {
  const divs = document.querySelectorAll(".pelindung-link");
  divs.forEach(div => {
    const btn = div.querySelector(".layout-post");
    btn.onclick = () => clickHandler();
  })
};


// A simple function to be fired for $(document).ready.
const onReady = () => {
  render();
  dispatchEvents();
};


// Good ol' $(document).ready.
$(document).ready(onReady)
