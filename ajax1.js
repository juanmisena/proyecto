var btnAjax = document.getElementById('btnAjax');
btnAjax.addEventListener('click', getDates, false);
function getDates() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', './texto.txt', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            var response = document.getElementById('response');
            response.innerHTML = `<h1>${this.responseText}</h1>`;
            }
        }
}