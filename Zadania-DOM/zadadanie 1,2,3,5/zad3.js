
const tabAuto = [
    {
        rok:2020,
        przebieg:20000,
        cena_wyjsciowa:100000,
        cena_koncowa:50000,
    },
    {
        rok:2000,
        przebieg:300000,
        cena_wyjsciowa:100000,
        cena_koncowa:2000,
    },
    {
        rok:2005,
        przebieg:200000,
        cena_wyjsciowa:50000,
        cena_koncowa:20000,
    },
    
]


const dodajAuta = () => {
    const tab = document.querySelector('.zadanie3 table');

    tabAuto.forEach(auto => {
        const nowyWiersz = document.createElement('tr');
        nowyWiersz.innerHTML = `
        <td>${auto.rok}</td>
        <td>${auto.przebieg}</td>
        <td>${auto.cena_wyjsciowa}</td>
        <td>${auto.cena_koncowa}</td>
        `
        tab.appendChild(nowyWiersz);
    })
}

dodajAuta()