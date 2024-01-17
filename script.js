function createcard(title,cname,views,months,duartion,thumbnail){
    div=document.createElement("div");
    div.setAttribute("class","card");
    // div.innerHTML="hello i am here<b> mir </b>";
    document.querySelector(".container").append(div)
    div.innerHTML = `
    <img src='${thumbnail}' alt="none"> 
    <p class="dur">${duartion}</p>
    <div class="text"> 
    <h4>${title}</h5>
    <div class="line">
    <p>${cname} •</p>
    <p>${views/10000}k •</p>
    <p>${months} months ago</p>
    </div>
    </div>
    
    
   
`;
    
}
createcard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73","CodeWithHarry",100000,2,"23:10","thumbnail.webp");
createcard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73","CodeWithHarry",100000,2,"2:10","thumbnail.webp");