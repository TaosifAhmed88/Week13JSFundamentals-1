//let package = "Standard";
let package = "Express";
// let package = "Overnight";
// let package = "stan";


switch (package) {
    case "Standard":
        console.log("Might take 3-5 days");
        break;
    case "Express":
        console.log("Can take 1-2 days");
        break;
    case "Overnight":
        console.log("Would be delivered the next day");
        break;
    default:console.log("Invalid Package");
        break;
}