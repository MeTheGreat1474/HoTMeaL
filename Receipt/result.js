window.addEventListener('load', () => {

    const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname');


    //const name = localStorage.getItem('NAME');
    //const surname = localStorage.getItem('SURNAME');

    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;

    

})

