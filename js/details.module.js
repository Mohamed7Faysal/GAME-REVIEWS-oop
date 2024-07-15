
// import ui 

import { Ui } from "./ui.module.js";


export class Details {
  constructor(idGame){
    this.ui = new Ui()
    document.getElementById("btnClose").addEventListener("click",()=>{
      document.getElementById("home").classList.remove("d-none")
      document.getElementById("details").classList.add("d-none")
    })
    this.getDetails(idGame)
  }


  async getDetails(id){
    try {
  const loading = document.querySelector(".loading")
      loading.classList.remove("d-none")

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "097d9f363cmshacc8e42f33e43f7p1951e9jsn52efddfdc9e6",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
      
    }
  };


  const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
  
        const responseData = await response.json();
  
        this.ui.displayDetails(responseData);
        // console.log(` responseData ${responseData}`);
      loading.classList.add("d-none")

      }catch (error) {
        console.error("An error occurred:", error);
      }
    }






  }


