let feldogoz = document.querySelector('#feldolgoz');

feldolgoz.addEventListener('click', async (event) => {
    event.preventDefault();
    const nev = document.querySelector('#nev').value;
    const kor = Number(document.querySelector('#kor').value);
    const idopontok = document.querySelector('#idopontok').value;

    const response = await fetch('/api/hospital/ujorvos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nev, kor, idopontok}),
    });

    const valasz = await response.json();
    if (response.ok) {
        window.alert(valasz.msg);
        window.location.replace('/api/hospital/orvos');
    }
})