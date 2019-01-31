import axios from "axios";
// API 815a83c58fc9d0ccc5510f0c9a5c27c1
// URL https://www.food2fork.com/api/search
export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const key = "815a83c58fc9d0ccc5510f0c9a5c27c1";
    try {
      const res = await axios(
        `${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
      //console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
