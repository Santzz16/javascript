const searcher = document.getElementById('searcher');
const list = document.getElementById('list');
const listELement = document.querySelectorAll('li');
list.style.listStyle = 'none';

searcher.addEventListener('input', function() {
    listELement.forEach(function(element){
        if (element.textContent.toLowerCase().includes(searcher.value.toLowerCase())) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    })
})