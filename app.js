const api = 'https://api.github.com/users/'
let user = 'allnyth'
async function getUser(api, user) {
    await fetch(api + user).then(r => r.json()).then(data => {
        document.querySelector('.avatar').src = data.avatar_url
        document.querySelector('.name').textContent = data.name
        document.querySelector('.bio').textContent = data.bio
        document.querySelector('.location').textContent = data.location
        document.querySelector('.company').textContent = data.company
        document.querySelector('.github').textContent = data.login
        document.querySelector('.twitter').textContent = data.twitter_username
        document.querySelector('.site').textContent = data.blog
        document.querySelector('.site').textContent = data.email




    })
}
getUser(api, user)

function editUser() {
    let name = document.querySelector('.name')
    name.innerHTML = "<input type='text' class='inputName' autofocus>"
}