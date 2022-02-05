// Problem-1:  ana To Vori 
function anaToVori(ana) {
    // Checking Number type perameters
    if (typeof ana != 'number') {
        return 'ana must be a number';
    }
    //checking negative number
    else if (ana < 0) {
        return 'ana value can not be negative';
    } else {
        let vori = 0;
        vori = ana * 0.0625;
        return vori;
    }
}


// Problem-2:  pandaCost 
function pandaCost(singara, samucha, jilapi) {
    // checking number type perameters
    if (typeof singara != 'number' || typeof samucha != 'number' || typeof jilapi != 'number') {
        return 'All perameters Must Be Number';
    }
    // checking negative number
    else if (singara < 0 || samucha < 0 || jilapi < 0) {
        return "All Quantity must be Positive number";
    } else {
        // Price Define 
        const singaraPrice = 7;
        const samuchaPrice = 10;
        const jilapiPrice = 15;
        let tatalPrice = 0;

        // calculating totalPrice
        tatalPrice = (singaraPrice * singara) + (samuchaPrice * samucha) + (jilapiPrice * jilapi);
        return tatalPrice;
    }
}


// Problem-3: picnicBudget 
function picnicBudget(perticipents) {
    // checking number type perameter
    if (typeof perticipents != 'number') {
        return 'Perticipents Must Be Number';
    }
    // checking negative number
    else if (perticipents < 0) {
        return "Perticipents must be Positive number";
    } else {
        // variables define
        let first100Cost = 0;
        let second101To200Cost = 0;
        let remainCost = 0;
        let totalCost = 0;

        // when perticipents number 100 or less
        if (perticipents <= 100) {
            first100Cost = perticipents * 5000;
            return first100Cost;
        }
        // when perticipents number 101 to 200
        else if (perticipents <= 200) {
            first100Cost = 100 * 5000;
            remainCost = (perticipents - 100) * 4000;
            totalCost = first100Cost + remainCost;
            return totalCost;
        }
        // when perticipents number more than 200
        else if (perticipents > 200) {
            first100Cost = 100 * 5000;
            second101To200Cost = 100 * 4000;
            remainCost = (perticipents - 200) * 3000;
            totalCost = first100Cost + second101To200Cost + remainCost;
            return totalCost;
        }

    }
}


// Problem-4 oddFriend 
function oddFriend(friends) {
    // checking array type perameter
    if (typeof friends != 'object') {
        return 'Friends Must Be an array object';
    } else {
        for (let friend of friends) {
            if (friend.length % 2 == 1) {
                return friend;
            }
        }
    }
}

console.log(oddFriend(12))