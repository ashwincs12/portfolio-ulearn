const card = document.querySelector('.card');
const box = document.querySelector('.box');

async function info(){
    const res = await fetch('https://api.github.com/users/ashwincs12');
    const data = await res.json()
    
    const name = document.createElement('h3');
    name.textContent="Github User Name: "+`${data.login}`;
    card.appendChild(name);
    

    const clickhere = document.createElement('h3');
    github_url=document.createElement('a');
    clickhere.textContent="Github URL";
    card.appendChild(clickhere);

    github_url=document.createElement('a');
    github_url.href=`${data.html_url}`;
    github_url.textContent = `${data.html_url}`
    card.appendChild(github_url);

    hr=document.createElement('hr');
    card.appendChild(hr);
    br=document.createElement('br');
    card.appendChild(br);


    public_repos=document.createElement('p');
    public_repos.textContent = "No. of public repo  : "+`${data.public_repos}`
    card.appendChild(public_repos);

    public_gists=document.createElement('p');
    public_gists.textContent = "No. of public gists : "+`${data.public_gists}`
    card.appendChild(public_gists);

    hr=document.createElement('hr');
    card.appendChild(hr);
    br=document.createElement('br');
    card.appendChild(br);

    
    
}

async function repos(){
    
    const res = await fetch('https://api.github.com/users/ashwincs12/repos');
    const data = await res.json()
    
    br=document.createElement('br');
    box.appendChild(br);
    
    let div1 = document.createElement('div');
    div1.classList.add('card');
    box.appendChild(div1)
    
    const my_repo_text = document.createElement('h3');
    my_repo_text.textContent="My Repos";
    div1.appendChild(my_repo_text);

    for(i=0;i<data.length;i++){
        
    
        let div2 = document.createElement('div');
        div2.classList.add('repo');
        div1.appendChild(div2)

        const repo_info = document.createElement('h5');
        repo_info.textContent="Repo Name :"+`${data[i].name}`;
        div2.appendChild(repo_info);
        
        
        const repo_link = document.createElement('a');
        repo_link.href=`${data[i].html_url}`;
        repo_link.textContent=`${data[i].html_url}`;
        div2.appendChild(repo_link);

        const desc_info = document.createElement('p');
        desc_info.textContent="Description :"+`${data[i].description}`;
        div2.appendChild(desc_info);
    }
}

info();
repos();
