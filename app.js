document.getElementById('searchButton').addEventListener('click', function() {
    fetch('superheroes.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.text();
        })
        .then(text => {
            alert(text)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Error fetching data: ' + error.message);
        });
});