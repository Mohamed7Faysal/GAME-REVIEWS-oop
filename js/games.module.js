
import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";

export class GameApp {
  constructor() {
    this.getGames("mmorpg");

    document.querySelectorAll(".menu a").forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(".menu .active").classList.remove("active");
        link.classList.add("active");

        const category = link.getAttribute("data-category");
        // console.log(` category ${category}`);
        this.getGames(category);
      });
    });
    this.ui = new Ui();
  }

  async getGames(categoryName) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "097d9f363cmshacc8e42f33e43f7p1951e9jsn52efddfdc9e6",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
        
      }
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}`,
      options
    );
    const response = await api.json();
    // console.log(` response ${response}`);
    this.ui.displayData(response);
    this.getId();
    loading.classList.add("d-none");

  }
  getId() {
    document.querySelectorAll(".card").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
        this.showDetails(id);
      });
    });
  }

  showDetails(idGame) {
    const details = new Details(idGame);
    // console.log(` details ${details}`);

    document.getElementById("home").classList.add("d-none");
    document.getElementById("details").classList.remove("d-none");
  }
}
