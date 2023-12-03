
// Broilerplate code. It always exist. I can now use one line of code to get json form internet
async function collector(url) {
    const response = await fetch(`${url}`);
    return await response.json();
}

function getJson(url, ifResolve, ifReject) {
    myPromise = new Promise(function(resolve, reject) {
        json = collector(url);
        resolve(json)
    });
    myPromise.then(
        (value) => { ifResolve(value) }, 
        (value) => { ifReject(value) }
    );
}


// UI Filler
function gotData(x) {
    shuffeled_json = randomize(x);
    const a = document.getElementById("problems")
    a.innerHTML = ""
    counter = 0;
    Object.keys(shuffeled_json).forEach(function(i){
        newHtml = `
        <div class="problem multiple_choice padding roundCorner isFlex flexCol gap">
                <div class="question">${i}</div>
                <div class="choosable_answers autoGrid gap">
                    <div class="answer padding roundCorner isFlex centerElement">
                        <label for="qs${counter}_0">${shuffeled_json[i][0]["word"]}</label>
                        <input type="radio" name="qs${counter}" id="qs${counter}_0" value="${shuffeled_json[i][0]["word"]}" isCorrect="${shuffeled_json[i][0]["isCorrect"]}">
                    </div>
                    <div class="answer padding roundCorner isFlex centerElement">
                        <label for="qs${counter}_1">${shuffeled_json[i][1]["word"]}</label>
                        <input type="radio" name="qs${counter}" id="qs${counter}_1" value="${shuffeled_json[i][1]["word"]}" isCorrect="${shuffeled_json[i][1]["isCorrect"]}">
                    </div>
                    <div class="answer padding roundCorner isFlex centerElement">
                        <label for="qs${counter}_2">${shuffeled_json[i][2]["word"]}</label>
                        <input type="radio" name="qs${counter}" id="qs${counter}_2" value="${shuffeled_json[i][2]["word"]}" isCorrect="${shuffeled_json[i][2]["isCorrect"]}">
                    </div>
                    <div class="answer padding roundCorner isFlex centerElement">
                        <label for="qs${counter}_3">${shuffeled_json[i][3]["word"]}</label>
                        <input type="radio" name="qs${counter}" id="qs${counter}_3" value="${shuffeled_json[i][3]["word"]}" isCorrect="${shuffeled_json[i][3]["isCorrect"]}">
                    </div>
                    <div class="answer hidden">
                        <input type="radio" name="qs${counter}" value="null" id="null${counter}" checked isCorrect="false">
                    </div>
                </div>
            </div>
        `;
        a.insertAdjacentHTML('beforeend',newHtml);
        counter++;
    });
}

function gotNoData(error) {
    document.write(error);
}






// Level Selection
function play() {
    const level = document.getElementById("chooseMenu").value
    myData = getJson(`./jsons/${level}.json`, (x => {gotData(x)}), (x => {gotNoData(x)}));
}


console.log("Trying To Cheat using inspect element / Developer Tool?")
console.log("Well Done.")
console.log("You having a knowledge of how this stuff work is miracle.")
console.log("I appreciate it..")
console.log("Respect+ from Ard.")