let url='https://api.github.com/users';


const fetchProfile = async() =>{
    let val=document.getElementById("inputVal").value;
    try{
        const res= await fetch(`${url}/${val}`);
        const data =await res.json();
        if(data.status!=404)
            {
                console.log("data",data);
                document.querySelector('.card').style.color="black";
                addHtml(data);
                }
                else{
                console.log("data",data);
                document.querySelector('.card').innerHTML=`Not Found`;
                document.querySelector('.card').style.color="red";
            }
    }
    catch(error){
        console.log('sorry');
        document.querySelector('.card').innerHTML=``;
    }
    
};


function addHtml(profile){
    document.querySelector('.card').innerHTML=`<div class="cardCon">
            <div class="head">
                <div class="profile">
                    <img src="${profile.avatar_url}" alt="">
                    <div class="name">
                        <h2>${profile.name}</h2>
                        <h2>${profile.login}</h2>
                    </div>
                </div>
                <a href="${profile.html_url}" target="_blank"><button>Check Profile</button></a>
                
            </div>

            <div class="about">
                <h1>About</h1>
                <p>Youtuber | Instructor | Influencer | FullStack MERN DEVELOPER + Flutter Developer</p>
            </div>
            <div class="foot">
                <div class="followers">
                    <h2>Followers</h2>
                    <p>${profile.followers}</p>
                </div>
                <div class="followings">
                    <h2>Following</h2>
                    <p>${profile.following}</p>
                </div>
                <div class="repos">
                    <h2>Repos</h2>
                    <p>${profile.public_repos}</p>
                </div>
            </div>
        </div>`
}
document.getElementById("myBtn").addEventListener("click", fetchProfile);