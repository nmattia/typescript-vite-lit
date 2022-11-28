import { render, html } from "lit-html";

const main = document.querySelector("main");
if (main !== null) {
  const showtime = () => render(html`<p>The time is ${new Date()}</p>`, main);

  showtime();
  setInterval(showtime, 1000);
}
