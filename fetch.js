/*function create(element) {
    return document.createElement(element);
}*/
function addImg(name, content, sty) {
    name.setAttribute('class', sty);
    name.src=content;
}
function addTxt(name, content, sty) {
    if(!content) {
        return name.innerText==null;
    }
    name.setAttribute('class', sty);
    name.innerText=content;
}
function addLink(name, content, sty) {
    if(!content) {
        return name.innerText==null;
    }
    name.setAttribute('class', sty);
    name.setAttribute('href', content);
    name.innerText=content;
}
function add(container, element) {
    return container.appendChild(element);
}
function fun() {
    getUserInfo(document.getElementById('#users').value)
        .then(user =>{
        createPage(user);
})
}
function apiRequest(url){
    return fetch(url)
        .then(response =>{
        if(response.status>=200 && response.status<400){
        return response.json()
    }
else{
        alert('Error: '+response.status)
    }
})
}
function getUserInfo(login) {
    const url = 'https://api.github.com/users/' + login;
    return apiRequest(url);
}

function createPage(user) {
    let root = document.getElementById('root');
    let block = document.createDocumentFragment();
    root.innerText='';
    let avatar = document.createElement('img');
    let name = document.createElement('p');
    let login = document.createElement('p');
    let bio = document.createElement('p');
    let company = document.createElement('p');
    let location = document.createElement('p');
    let email = document.createElement('p');
    let blog = document.createElement('a');

    addImg(avatar, user.avatar_url, 'avatar_sty');
    addTxt(name, user.name, "name_sty");
    addTxt(login, user.login, 'login_sty');
    addTxt(bio, user.bio, 'bio_sty');
    addTxt(company, user.company, 'company_sty');
    addTxt(location, user.location, 'location_sty');
    addTxt(email, user.email, 'email_sty');
    addTxt(blog, user.blog, 'blog_sty');

    add(block,avatar);
    add(block,name);
    add(block,login);
    add(block,bio);
    add(block,company);
    add(block,location);
    add(block,email);
    add(block,blog);
    add(root, block)
}