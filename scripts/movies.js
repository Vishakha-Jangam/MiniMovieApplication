// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
 //http://www.omdbapi.com/?s=Batman&apikey=5ef92276

 let id;
 let local=JSON.parse(localStorage.getItem("amount"))||0;
 document.getElementById("wallet").innerText=local;
   async function searchMovie(){
     try{
    let query=document.getElementById("search").value;
    const res=await fetch(`https://www.omdbapi.com/?s=${query}&apikey=5ef92276`)
   
    const data=await res.json();
 
    const movies=data.Search;
    appendMovie(movies);
    console.log(movies)
   return movies;
  
     }catch(err){
       console.log(err);
     }
   }
   let movie_div=document.getElementById("movies");
  function appendMovie(data){
     movie_div.innerHTML=null;
 
    data.forEach(element => {
 
     let div=document.createElement("div");
      let poster=document.createElement("img");
      poster.src=element.Poster;
 
      let name=document.createElement("p");
      name.innerText=element.Title;
 
      let button=document.createElement("button");
      button.innerText="Book Now";
      button.setAttribute("class","book_now")
      button.addEventListener("click",function(){
        localStorage.setItem("movie",JSON.stringify(element));
        window.location.href="checkout.html";
      })
      div.append(poster,name,button);
      movie_div.append(div);
    });
  } 
 
  async function main(){
    let data=searchMovie();
 
    if(data==undefined){
      return false;
    }
    appendMovie(data);
  }
  
 
  //debouncing
 function debounce(func,delay){
    if(id){
      clearTimeout(id);
    }
    id=setTimeout(function(){
      func();
    },delay);
 }