import Search from "./models/Search";

/** Global state of the app
 * - Seacrh object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const  controlSearch = async () => {
    // 1) Get qury from view
    const query = 'pizza'; // TODO 

    if(query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare ui for results. Show a loading spinner

        // 4) Search for recipes
        await state.search.getResults();

        // 5) Render results on UI
        console.log(state.search.result);
        
    }
}

document.querySelector(".search").addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
});

