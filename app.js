document.getElementById('searchButton').addEventListener('click', function() {
    const inputEle = document.querySelector('#searchHero');
    const value = inputEle.value.trim();
    const url = value.length > 0 ? `superheroes.php?search=${encodeURIComponent(value)}` : 'superheroes.php';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.text();
        })
        .then(text => {
            const result = document.querySelector('#result')
            if (result) {
                if (value.length === 0) {
                    result.innerHTML = text;
                } else {
                    result.innerHTML = text; 
                }
            } else {
                console.error('Element not found');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Error fetching data: ' + error.message);
        });
});
