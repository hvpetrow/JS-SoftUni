import { render, html } from "./node_modules/lit-html/lit-html.js";
import { cats as catData } from "./catSeeder.js";

const catCard = (cat) => html`
  <li>
    <img
      src="./images/${cat.imageLocation}.jpg"
      width="250"
      height="250"
      alt="Card image cap"
    />
    <div class="info">
      <button class="showBtn" @click=${() => toggleInfo(cat)}>${cat.info ? 'Hide' : 'Show'} status code</button>
     ${cat.info ? html`<div class="status" id=${cat.id}>
        <h4>Status Code: ${cat.statusCode}</h4>
        <p>${cat.statusMessage}</p>
      </div>` : null} 
    </div>
  </li>
`;


const root = document.getElementById("allCats");

catData.forEach(c => c.info = false);

update();
function update() {
    render(html`<ul>${catData.map(catCard)}</ul>`,root);
}



function toggleInfo(cat) {
cat.info = !cat.info;
update();
}


// root.addEventListener("click", (e) => {
//   if (e.target.tagName == "BUTTON") {
//     e.preventDefault;
//     const element = e.target.parentElement.querySelector(".status");
//     if (element.style.display == "none") {
//       element.style.display = "block";
//       e.target.textContent = "Hide status code";
//     } else {
//       element.style.display = "none";
//       e.target.textContent = "Show status code";
//     }
//   }
// });
