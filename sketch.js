const PHI = 1.618033988749894848204586834;
const perms = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000, 20922789888000, 355687428096000, 6402373705728000, 121645100408832000, 2432902008176640000, 51090942171709440000, 1124000727777607680000, 25852016738884976640000, 620448401733239439360000, 15511210043330985984000000, 403291461126605635584000000, 10888869450418352160768000000, 304888344611713860501504000000, 8841761993739701954543616000000, 265252859812191058636308480000000, 8222838654177922817725562880000000, 263130836933693530167218012160000000, 8683317618811886495518194401280000000, 295232799039604140847618609643520000000, 10333147966386144929666651337523200000000, 371993326789901217467999448150835200000000, 13763753091226345046315979581580902400000000, 523022617466601111760007224100074291200000000, 20397882081197443358640281739902897356800000000, 815915283247897734345611269596115894272000000000, 33452526613163807108170062053440751665152000000000, 1405006117752879898543142606244511569936384000000000, 60415263063373835637355132068513997507264512000000000, 2658271574788448768043625811014615890319638528000000000, 119622220865480194561963161495657715064383733760000000000, 5502622159812088949850305428800254892961651752960000000000, 258623241511168180642964355153611979969197632389120000000000, 12413915592536072670862289047373375038521486354677760000000000, 608281864034267560872252163321295376887552831379210240000000000, 30414093201713378043612608166064768844377641568960512000000000000, 1551118753287382280224243016469303211063259720016986112000000000000, 80658175170943878571660636856403766975289505440883277824000000000000, 4274883284060025564298013753389399649690343788366813724672000000000000, 230843697339241380472092742683027581083278564571807941132288000000000000, 12696403353658275925965100847566516959580321051449436762275840000000000000, 710998587804863451854045647463724949736497978881168458687447040000000000000, 40526919504877216755680601905432322134980384796226602145184481280000000000000, 2350561331282878571829474910515074683828862318181142924420699914240000000000000, 138683118545689835737939019720389406345902876772687432540821294940160000000000000, 8320987112741390144276341183223364380754172606361245952449277696409600000000000000, 507580213877224798800856812176625227226004528988036003099405939480985600000000000000, 31469973260387937525653122354950764088012280797258232192163168247821107200000000000000, 1982608315404440064116146708361898137544773690227268628106279599612729753600000000000000, 126886932185884164103433389335161480802865516174545192198801894375214704230400000000000000, 8247650592082470666723170306785496252186258551345437492922123134388955774976000000000000000, 544344939077443064003729240247842752644293064388798874532860126869671081148416000000000000000, 36471110918188685288249859096605464427167635314049524593701628500267962436943872000000000000000, 2480035542436830599600990418569171581047399201355367672371710738018221445712183296000000000000000, 171122452428141311372468338881272839092270544893520369393648040923257279754140647424000000000000000, 11978571669969891796072783721689098736458938142546425857555362864628009582789845319680000000000000000, 850478588567862317521167644239926010288584608120796235886430763388588680378079017697280000000000000000, 61234458376886086861524070385274672740778091784697328983823014963978384987221689274204160000000000000000, 4470115461512684340891257138125051110076800700282905015819080092370422104067183317016903680000000000000000, 330788544151938641225953028221253782145683251820934971170611926835411235700971565459250872320000000000000000, 24809140811395398091946477116594033660926243886570122837795894512655842677572867409443815424000000000000000000, 1885494701666050254987932260861146558230394535379329335672487982961844043495537923117729972224000000000000000000, 145183092028285869634070784086308284983740379224208358846781574688061991349156420080065207861248000000000000000000, 11324281178206297831457521158732046228731749579488251990048962825668835325234200766245086213177344000000000000000000, 894618213078297528685144171539831652069808216779571907213868063227837990693501860533361810841010176000000000000000000, 71569457046263802294811533723186532165584657342365752577109445058227039255480148842668944867280814080000000000000000000, 5797126020747367985879734231578109105412357244731625958745865049716390179693892056256184534249745940480000000000000000000, 475364333701284174842138206989404946643813294067993328617160934076743994734899148613007131808479167119360000000000000000000, 39455239697206586511897471180120610571436503407643446275224357528369751562996629334879591940103770870906880000000000000000000, 3314240134565353266999387579130131288000666286242049487118846032383059131291716864129885722968716753156177920000000000000000000, 281710411438055027694947944226061159480056634330574206405101912752560026159795933451040286452340924018275123200000000000000000000, 24227095383672732381765523203441259715284870552429381750838764496720162249742450276789464634901319465571660595200000000000000000000, 2107757298379527717213600518699389595229783738061356212322972511214654115727593174080683423236414793504734471782400000000000000000000, 185482642257398439114796845645546284380220968949399346684421580986889562184028199319100141244804501828416633516851200000000000000000000, 16507955160908461081216919262453619309839666236496541854913520707833171034378509739399912570787600662729080382999756800000000000000000000, 1485715964481761497309522733620825737885569961284688766942216863704985393094065876545992131370884059645617234469978112000000000000000000000, 135200152767840296255166568759495142147586866476906677791741734597153670771559994765685283954750449427751168336768008192000000000000000000000, 12438414054641307255475324325873553077577991715875414356840239582938137710983519518443046123837041347353107486982656753664000000000000000000000, 1156772507081641574759205162306240436214753229576413535186142281213246807121467315215203289516844845303838996289387078090752000000000000000000000, 108736615665674308027365285256786601004186803580182872307497374434045199869417927630229109214583415458560865651202385340530688000000000000000000000, 10329978488239059262599702099394727095397746340117372869212250571234293987594703124871765375385424468563282236864226607350415360000000000000000000000, 991677934870949689209571401541893801158183648651267795444376054838492222809091499987689476037000748982075094738965754305639874560000000000000000000000, 96192759682482119853328425949563698712343813919172976158104477319333745612481875498805879175589072651261284189679678167647067832320000000000000000000000, 9426890448883247745626185743057242473809693764078951663494238777294707070023223798882976159207729119823605850588608460429412647567360000000000000000000000, 933262154439441526816992388562667004907159682643816214685929638952175999932299156089414639761565182862536979208272237582511852109168640000000000000000000000, 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000];
let cities = [];
let totalCities = 7;
let currBestY1, currBestY2; // Top and bottom of the current best solution area
let solGraphY1, solGraphY2; // Top and bottom of the best solution graph area
let panesY1, panesY2; // The top and bottom of the screen area where previous best solutions are shown

// Solution Specific
let order = [];
let shortestDistOrder = [];
let maxDist = 0;
let shortestDist = Infinity;
let shortestDistScores = [];
let totalPerms = perms[totalCities - 1]; // look up the number of different permutations from perms[]
let solCount = 0; // number of new solutions found;
let permCount = 1; // counter to track permutations since beginning
let searching = true; // true if there are more permutations to check
let distLookup = new Map();

let bestSols = {
    sols: []
    // Holds information about the best solutions found to date...
    // [{
    //     permCount: 0,
    //     dist: 1000,
    //     order: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    //     solNum: 0
    // }]
};

let numPanesPerRow = 3; // 5 solution panes per row


////////////////////////////////////////////////////////////////////////////////
function setup() {
    createCanvas(1080, 900);

    // currBestY1 = height / (pow(PHI, 4));
    currBestY1 = 100;
    currBestY2 = height - (height / PHI);
    panesY1 = height / PHI;
    panesY2 = height;
    solGraphY2 = panesY1;
    solGraphY1 = currBestY2;

    let cBox = {};
    cBox.x1 = 11;
    cBox.y1 = currBestY1;
    cBox.x2 = width - cBox.x1;
    cBox.y2 = currBestY2;

    for (i = 0; i < totalCities; i++) {
        // let v = createVector(Math.random() * (width * .9) + (width * 0.05), map(Math.random(), 0, 1, 100, height / 3 - 11));
        let v = createVector(map(Math.random(), 0, 1, cBox.x1, cBox.x2), map(Math.random(), 0, 1, cBox.y1, cBox.y2));
        cities[i] = v;
        order[i] = i;
    }

    for (let i = 0; i < cities.length; i++) {
        let c1 = cities[i];
        for (let j = i + 1; j < cities.length; j++) {

            let c2 = cities[j];
            let d = c1.dist(c2);
            let keyLabel = getDistKey(c1, c2); // returns a string where
            distLookup.set(Math.floor(c1.x).toString() + Math.floor(c1.y).toString() + "-" + Math.floor(c2.x).toString() + Math.floor(c2.y).toString(), d);
        }
    }

}



////////////////////////////////////////////////////////////////////////////////
function draw() {
    background(0, 18, 29);
    // rectMode(CORNERS);
    // stroke(123,123);
    // noFill();
    // rect(0, currBestY1, width, currBestY2);
    // rect(0,solGraphY1, width, solGraphY2);
    // rect(0,panesY1, width, panesY2);
    // rectMode(CORNER);
    //Title
    noStroke();
    fill(199);
    textSize(18);
    text("The Travelling Salesperson Problem", 11, 29);
    textSize(14);
    text("What is the shortest possible route that visits each city?", 11, 47);

    let txtY = height / 3 * 2;
    fill(123);
    let percentComplete = permCount / totalPerms * 100;
    let s = percentComplete < 0.001 ? "> 0.01" : percentComplete.toFixed(2);
    text("Checking " + totalPerms + " different combinations using brute force testing on lexigraphical ordering.\n" + s + "% complete.\n" + Math.floor(permCount / (millis() / 1000)) + " routes per second.", 11, currBestY1 - (textAscent() * 2) - 1);

    // fill(123);
    // noStroke();
    // textSize(14);
    // text("Shortest route found: " + shortestDist, 11, currBestY2 - 1);


    // Test to see if new path is longer than the current longest path
    let currDist = calcDist(cities);

    if (currDist > maxDist) {
        maxDist = currDist;
    }

    // Test to see if new path is shorter than the current shortest path
    if (currDist < shortestDist) {
        shortestDist = currDist;
        // create a new entry in the bestSols object
        let newBest = {};
        newBest.dist = shortestDist;
        newBest.order = cities.slice();
        newBest.perm = permCount;
        newBest.solIdx = ++solCount;
        bestSols.sols.push(newBest);
    }



    // cities = randomizeArray(cities);

    for (let i = 0, length1 = order.length; i < length1; i++) {
        swap(cities, i, order[i]);
    }

    permCount++;
    nextLexOrder();


    bestSolPanes();
    bestSolGraph();
    if (searching) {
        newRouteAttempt();
    }
    currShortestRoute();

    // Draw the 'city' locations
    cities.forEach(function(c, index) {
        strokeWeight(3);
        stroke(199, 199);
        noFill();
        ellipse(c.x, c.y, 11, 11);
    });
    if (!searching) {
        noLoop();
    }
}


////////////////////////////////////////////////////////////////////////////////
function currShortestRoute() {
    // Draw the current shortest path
    let currBestOrder = bestSols.sols[bestSols.sols.length - 1].order;
    beginShape();
    stroke(199, 0, 199);
    strokeWeight(2);
    noFill();
    for (let i = 0, length1 = currBestOrder.length; i < length1; i++) {
        vertex(currBestOrder[i].x, currBestOrder[i].y);
    }
    endShape();
}

function newRouteAttempt() {
    // draw new path attempts
    noFill();
    stroke(255, 123);
    strokeWeight(.5);
    beginShape();
    for (let i = 0, length1 = cities.length; i < length1; i++) {
        vertex(cities[i].x, cities[i].y);
    }
    endShape();

}


function bestSolPanes() {
    // fill(123, 199);
    // textSize(14);
    // noStroke();
    // text("Previous shortest routes.", 11, panesY2 - textAscent());
    // loop through all bestSols
    // for each, in order, translate to new plot position, scale it and draw it
    let solPaneW = width / numPanesPerRow;
    let solPaneH = (panesY2 - panesY1) / numPanesPerRow;

    if (((bestSols.sols.length - 1) / numPanesPerRow * solPaneH) > (panesY2 - panesY1)) {
        numPanesPerRow++;
    }
    // solPaneH = (height / width) * solPaneW / numPanesPerRow; // Why "3"?
    let solPaneScaleX = solPaneW / width;
    let solPaneScaleY = solPaneH / (currBestY2 - currBestY1);
    let solPaneScale = (solPaneScaleX < solPaneScaleY) ? solPaneScaleX : solPaneScaleY;

    for (i = 0; i < bestSols.sols.length - 1; i++) {
        let currSol = bestSols.sols[i];
        let currOrder = currSol.order;
        let currDist = currSol.dist;

        let x = (i % numPanesPerRow) * solPaneW;
        let y = panesY1 + (Math.floor(i / numPanesPerRow) * solPaneH);
        // let y = panesY2 - (Math.floor(i / numPanesPerRow) * solPaneH) - solPaneH;

        push();
        translate(x, y);
        scale(solPaneScale);
        // scale(solPaneScaleX, solPaneScaleY);
        beginShape();
        stroke(76, 199, 199, 123);
        strokeWeight(3);
        noFill();
        for (let i = 0, length1 = currOrder.length; i < length1; i++) {
            vertex(currOrder[i].x, currOrder[i].y - currBestY1);
        }
        endShape();


        fill(199, 199);
        textSize(47);
        noStroke();
        text(Math.floor(currDist), 11, currBestY1);
        // text(currDist, 7, currBestY2 - currBestY1 - 7);
        // Draw cities
        noFill();
        stroke(47, 123, 199, 199);
        strokeWeight(.5);
        // rectMode(CORNER);
        // rect(0, 0, width, currBestY2 - currBestY1);
        rect(1, 1, width - 2, (currBestY2 - currBestY1) - 2);
        fill(199, 199);
        currOrder.forEach(function(elt) {
            ellipse(elt.x, elt.y - currBestY1, 11, 11);
        });

        pop();
    }
}

// Show graph of the best solutions found overtime.
// maximum x-axis is the current permutation number.
function bestSolGraph() {
    // noStroke();
    // fill(123, 199);
    // textSize(14);
    // text("Longest route found: " + maxDist, 11, solGraphY1 + 1 + textAscent());

    // stroke(199, 199);
    // strokeWeight(.5)
    // line(0, solGraphY1, width, solGraphY1);
    let maxDist = bestSols.sols[0].dist; // poor form, but overriding the global maxDist here
    beginShape();
    noFill();
    strokeWeight(1);

    bestSols.sols.forEach(function(elt, index) {
        let currDist = elt.dist;
        let currPermCount = elt.perm;
        // let cx = map(currPermCount, 0, totalPerms, 1, width);
        let cx = map(currPermCount, 0, permCount, 1, width);
        // let cy = map(currDist, 0, maxDist, 0, height / 4);
        let cy = map(currDist, 0, maxDist, solGraphY2, solGraphY1);
        if (currDist === shortestDist) {
            fill(199, 0, 199, 199);
            textSize(14);
            noStroke();
            let tcx;
            if (cx > width - textWidth(currDist) - 11 - 11) {
                tcx = cx - textWidth(currDist) - 11;
            } else {
                tcx = cx + 11;
            }
            text(Math.floor(currDist), tcx, cy + textAscent());
            // text(currDist, tcx, height - (height / 3) - cy + textAscent());
        }
        let sClr = (currDist === shortestDist ? color(199, 0, 199) : color(123, 199, 199));
        let sWgt = (currDist === shortestDist ? 2.5 : .5);
        stroke(sClr);
        strokeWeight(sWgt);
        line(cx, solGraphY2, cx, cy);
        // line(cx, height - (height / 3), cx, height - (height / 3) - cy);

        strokeWeight(1);
        noFill();
        stroke(123, 199, 199);
        vertex(cx, cy);
        // vertex(cx, height - (height / 3) - cy);
    });
    endShape();

    // render scale
    let totalPermsDist = (width / permCount) * totalPerms;
    for (let i = 0; i < 100; i += 1) {
        let scaleX = map(i, 0, 100, 0, totalPermsDist);
        let scaleY = solGraphY2;
        stroke(199, 199);
        strokeWeight(1);
        point(scaleX, scaleY);
    }
    for (let i = 0; i < 100; i += 5) {
        textSize(11);
        let scaleX = map(i, 0, 100, 0, totalPermsDist);
        let scaleY = solGraphY2 + textAscent() + 3;
        fill(123, 199);
        noStroke();
        text("" + i + "%", scaleX, scaleY);
    }
}


////////////////////////////////////////////////////////////////////////////////
function randomizeArray(arr) {
    for (i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
}

function calcDist(arr) {
    let d = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        // d += arr[i].dist(arr[i + 1]);
        // let distKey = "" + Math.floor(arr[i].x).toString() + Math.floor(arr[i].y).toString() + Math.floor(arr[i + 1].x).toString() + Math.floor(arr[i + 1].y).toString();
        let distKey = getDistKey(arr[i], arr[i + 1]);
        // console.log("distLookup has this key? " + distKey + ": " + distLookup.has(distKey));
        d += distLookup.get(getDistKey(arr[i], arr[i + 1]));
    }
    return d;
}

function getDistKey(a, b) {
    a = Math.floor(a.x).toString() + Math.floor(a.y).toString();
    b = Math.floor(b.x).toString() + Math.floor(b.y).toString();

    let dKey = distLookup.has(a + "-" + b) ? (a + "-" + b) : (b + "-" + a);
    return dKey;
}
// lexical ordering algorithm
// something here smells fishy...
function nextLexOrder() {
    let largestI = -1;
    for (let i = 0; i < order.length - 1; i++) {
        if (order[i] < order[i + 1]) {
            largestI = i;
        }
    }

    if (largestI === -1) {
        //   noLoop();
        console.log('finished');
        searching = false;
    }

    // Lex ordering Step 2
    let largestJ = -1;
    for (let j = 0; j < order.length; j++) {
        if (order[largestI] < order[j]) {
            largestJ = j;
        }
    }

    // Lex ordering Step 3
    swap(order, largestI, largestJ);

    let endArray = order.splice(largestI + 1);
    endArray.reverse();
    order = order.concat(endArray);
}

// factorial calcuator function
function fact(num) {
    let f = 1;
    for (let i = 2; i <= num; i++) {
        f = f * i;
    }
    return f;
}
