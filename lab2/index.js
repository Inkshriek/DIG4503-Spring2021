import Fetch from "./Fetch.js";

const pokemon1 = new Fetch(609, "#6600ff"); //Chandelure
const pokemon2 = new Fetch(-1, "#6600ff"); //invalid
pokemon1.fetch();
pokemon2.fetch();