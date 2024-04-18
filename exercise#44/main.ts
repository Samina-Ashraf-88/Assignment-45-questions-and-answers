function makeSandwich(...items: string[]){
    console.log("\nmaking a sandwich with the following items:\n");

    items.forEach(singleItem=>console.log(singleItem))
    
    console.log("\nnow enjoy sandwich");}

    makeSandwich("chicken","cheese","mayo","egg");

    makeSandwich("bread","butter")

    makeSandwich("bread","butter","cheese","mayo","egg","lettuce","tomato")