let vebinars = ['Вебинар 1', 'Вебинар 2', 'Вебинар 3', 'Вебинар 4', 'Вебинар 5', 'Вебинар 6'];
let word = document.querySelector('#findInput');
let block = document.createElement('div');
let vebinarsDiv = document.querySelector('#vebinars');
let findWord;
let findWordRegExp;
let vebinarH1toSend;

function createVebinarBlock(e) {
    let str = 
    `<div class="vebinarCard">
        <a href="vebinar.html" onclick="newPage('${e}')"><img src="img/1.png"></a>
        <a href="vebinar.html" onclick="newPage('${e}')"><p class="vebinarCardName">${e}</p></a>
        <a href="vebinar.html" onclick="newPage('${e}')"><p class="vebinarCardDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eveniet corporis.</p></a>
        <div class="vebinarCardPopular">
            <p>Популярно</p>
        </div>
    </div>`
    return str;
}

function pageOnLoad() {
    vebinars.forEach(e => {
        block.innerHTML += createVebinarBlock(e);
        vebinarsDiv.append(block);
        block.style.display = "";
    });
}


function find() {
    findWord = word.value.toLowerCase();
    findWordRegExp = new RegExp(findWord);

    if (findWord.length == 0) {
        vebinarsDiv.innerHTML = "";
        block.innerHTML = "";
        vebinars.forEach(e => {
            block.innerHTML += createVebinarBlock(e);
            vebinarsDiv.append(block);
            block.style.display = "";
        });
    } else {
        vebinarsDiv.innerHTML = "";
        block.innerHTML = "";
        
        vebinars.forEach(e => {
            if (findWordRegExp.test(e.toLowerCase()) && findWord.length > 0) {
                // block.innerHTML += `<a href="vebinar.html" onclick="newPage('${e}')"><h3>${e}</h3></a>`;
                block.innerHTML += createVebinarBlock(e);
                vebinarsDiv.append(block);
                block.style.display = "";
            }
        });
    }
}

function newPage(vebinarName) {
    document.cookie = `vebinarName=${vebinarName}; path=/;`
}


