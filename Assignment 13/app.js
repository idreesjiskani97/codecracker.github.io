document.getElementById('fetch').addEventListener('click', function () {

    const username = document.getElementById('username').value;

    fetch(`https://api.github.com/users/${username}`)

        .then(response => response.json())

        .then(data => {

            document.getElementById('avatar').src = data.avatar_url;

            document.getElementById('name').innerText = data.name;

            document.getElementById('bio').innerText = data.bio || 'No bio available';

            document.getElementById('profile-link').href = data.html_url;

            document.querySelector('.profile').style.display = 'block';

        })

        .catch(error => console.error(error));

});