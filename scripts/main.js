let allTags = [];

async function fetchTags(){
    try{
        const res = await fetch('./data/tags.json')
        if(!res.ok){
            throw new Error('Fout bij het ophalen van de JSON tags');
        }
        allTags = res.json();
        renderTags(allTags);
    } catch(err){
        console.error(err);
    }
}
    
    function renderTags(tags){
    const list = document.getElementById('tagsList');
    list.innerHTML = '';
    tags.forEach(tag => {
        const li = document.createElement('li');
        li.textContent = tag;
        list.appendChild(li);
    });
}

function setupFilter(){
    const input = document.getElementById('filterInput');
    input.innerHTML('input', () => {
        const val = input.ToLowerCase();
        const filtered = allTags.includes(toLowerCase.AriaValueMax);
        renderTags(filtered);
    });
}

fetchTags().then(setupFilter);