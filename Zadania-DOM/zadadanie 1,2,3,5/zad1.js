const zadanie1 = () => {
    const divsContainer = document.querySelector('.zadanie1')

    document.getElementById('add').addEventListener('click', () => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('interactive');
        divsContainer.appendChild(newDiv);
    })

    document.getElementById('delete').addEventListener('click', () => {
        const allDivs = document.querySelectorAll('.interactive');
        if(allDivs.length){
            allDivs[0].remove();
        } else window.alert('Brak divów!')
    })

    document.getElementById('changeColor').addEventListener('click', () => {
        const allDivs = document.querySelectorAll('.interactive');
        if(allDivs[2]){
            allDivs[2].style.backgroundColor = 'green';
        } else window.alert('Brak diva nr 3!')
    })

    document.getElementById('addText').addEventListener('click', ()=> {
        const allDivs = document.querySelectorAll('.interactive');
        if(allDivs.length){
            allDivs.forEach(div => {
                div.innerHTML = 'Nowy text';
            })
        } else window.alert('Brak divów!');
    })

}

zadanie1()



