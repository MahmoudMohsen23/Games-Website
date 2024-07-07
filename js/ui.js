export class Ui {
    constructor() {

    }

    displayGames(data) {
        let gamesbox = ``
        for (let i = 0; i < data.length; i++) {
            gamesbox += `<div class="col-md-3">
                        
                            <div data-id="${data[i].id}" class=" card p-3 rounded-3">
                                <figure>
                                    <img src="${data[i].thumbnail}" class="w-100" alt="">
                                </figure>

                                <figcaption class="mb-2">
                                    <div class=" header d-flex justify-content-between mb-2">
                                        <h6 class="fw-bold">${data[i].title}</h6>
                                        <span class="bg-primary px-3 py-1 rounded-3 fw-bold">Free</span>
                                    </div>

                                    <p class="text-center">${data[i].short_description.split(" ", 8)}</p>
                                </figcaption>
                                
                                <footer class="d-flex justify-content-between px-2 ">
                                    <span class="px-2 py-1 rounded-3 mt-2 mx-2">${data[i].genre}</span>
                                    <span class="px-2 py-1 rounded-3 mt-2 mx-2">${data[i].platform}</span>
                                </footer>
                            </div>
                        
                    </div>`

        }
        document.getElementById('gameData').innerHTML = gamesbox
    }

    displayDetails(data) {
        const detailsBox = `<div class="col-4">
                    <div class="inner">
                        <img src="${data.thumbnail}" class="w-100" alt="">
                    </div>
                </div>

                <div class="col-8">
                    <h3>Title: ${data.title}</h3>
                    <p>Category: <span class=" text-bg-info rounded-2 px-2 fw-bold"> ${data.genre}</span> </p>
                    <p>Platform: <span class=" text-bg-info rounded-2 px-2 fw-bold"> ${data.platform}</span> </p>
                    <p>Status: <span class=" text-bg-info rounded-2 px-2 fw-bold"> ${data.status}</span> </p>
                    <p class="small">${data.description}</p>
                    <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
                </div>`;

        document.getElementById("detailsContent").innerHTML = detailsBox;

    }
}