function editN(){
    var name = document.querySelector('.name')
    name.innerHTML = "<input autofocus class='inputName'></input>"
    }

     document.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            user = document.querySelector('.inputName').value
            fetch(`https://api.github.com/users/${user}`).then(response => response.json())
            .then(data => {
              document.querySelector('.profile-photo').src = data.avatar_url
              input = document.querySelector('.inputName')
              input.parentNode.removeChild(input)
              document.querySelector('.name').textContent = data.login
              document.title = `Github | ${data.login}`
              document.querySelector('.subtitle').textContent = data.bio
            })
            }
        }
    ) 

