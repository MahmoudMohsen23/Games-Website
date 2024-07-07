import { Details } from "./details.js"
import { Ui } from "./ui.js"


export class Home {
    constructor() {
        document.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener("click", () => {
                this.changeActiveLink(link)
            })
        })
        this.loading = document.querySelector(".loading")
        this.details = document.getElementById("details")
        this.games = document.getElementById("games")

        this.ui = new Ui()

        this.getGames("mmorpg")

    }


    async changeActiveLink(link) {
        document.querySelector(".nav-item .nav-link.active").classList.remove("active")
        link.classList.add("active")

        const category = link.getAttribute('data-category')
        this.getGames(category)
    }

    async getGames(cat) {

        this.loading.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'ba782b84fdmshbc6324053d576e6p17b957jsn36d54353eb63',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options)
        const response = await api.json()

        this.loading.classList.add("d-none")

        this.ui.displayGames(response)

        document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener("click", () => {
                this.details.classList.remove("d-none")
                this.games.classList.add("d-none")
                new Details(card.dataset.id);
            })
        })
    }
}