function createcard(title,cname,views,months,duartion,thumbnail){
    div=document.createElement("div");
    div.setAttribute("class","card");
    
    document.querySelector(".container").append(div)
    let a=""
    if (views<1000){
        view=views
        a=`${view}`;
    }
    else if(views<1000000){
        view=views/1000;
        a=`${view}k`
    }
    else if(views<1000000000){
        view=views/1000000;
        a=`${view}m`
    }
    else {
        view=views/1000000000;
        a=`${view}b`
    }
    div.innerHTML = `
    <div class="img">
    <img src='${thumbnail}' alt="none"> 
    <p class="dur">${duartion}</p>
    </div>
    <div class="text"> 
    <h4>${title}</h5>
    <div class="line">
    <p>${cname} •</p>
    <p>${a} views •</p>
    <p>${months} months ago</p>
    </div>
    </div>
    
    
   
`;
    
}
createcard("JavaScript Exercise 11 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #71","CodeWithHarry",1000,2,"23:10","https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A");
createcard("JavaScript Exercise 12 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #72","CodeWithHarry",2000000,2,"2:10","https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A");
createcard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73","CodeWithHarry",5000000000,2,"23:10","https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A");
createcard("JavaScript Exercise 14 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #74","CodeWithHarry",7,2,"2:10","https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A");