
document.addEventListener('DOMContentLoaded', function () {
  let loaded = false;

  const setContentLoaded = () => {
    document.querySelector("#loading").style.visibility = "hidden";
    loaded = true;
  }

  const getCurrentTime = () => {
    const time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

    document.querySelector('#time').innerHTML = time.slice(0,-2);
    document.querySelector('#mer').innerHTML = time.slice(-2);

    if (!loaded) {
      setContentLoaded();
    }
  }

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date = new Date();
  const hour = date.getHours();
  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const dateNum = date.getDate();

  let timeOfDay =
    (hour >= 5 && hour <= 11) ? 'morning' :
    (hour >= 12 && hour <= 17) ? 'afternoon' : 'evening';

  document.querySelector('#dayOfWeek').innerHTML = dayOfWeek;
  document.querySelector('#month').innerHTML = month;
  document.querySelector('#dateNum').innerHTML = dateNum;
  document.querySelector('#timeOfDay').innerHTML = timeOfDay;

  setInterval(getCurrentTime, 1000);
});
