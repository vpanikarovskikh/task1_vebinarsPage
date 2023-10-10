function newPageOpen() {
    console.log(document.cookie);
    let vebinarH1 = document.querySelector('#vebinarH1');
    vebinarH1.innerHTML = document.cookie.slice(12);
}