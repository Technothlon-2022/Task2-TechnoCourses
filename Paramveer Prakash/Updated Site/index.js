var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";
var apiKey = "AIzaSyAsQ4tLnLx1R3Lk7EQUKYF5hXJ_Q_588pA";
var searchData;
//listener for search button
$("#search").click(function() {
    //outputList.innerHTML = ""; //empty html output
    //document.body.style.backgroundImage = "url('')";
     searchData = $("#searchBar").val();
     var searchURL=bookUrl+searchData;
     //handling empty search input field
     if(searchData === "" || searchData === null) {
       displayError();
     }
    else {
       console.log(searchData);
       fetch(searchURL).then((data)=>{
           console.log(data);
           return data.json();
        }).then((completedata)=>{
            console.log(completedata);
           // document.getElementById('demo').innerHTML=completedata.items[0].id;
           let data1="";
           completedata.items.map((values)=>{
               data1+=`<div class="card">
               <div class="part1">
              <img src="${values.volumeInfo.imageLinks.smallThumbnail}" class="pics">
              </div>
              <div class="part2">
               <h1 class="title">${values.volumeInfo.title}</h1>
               <p class="desc">${values.volumeInfo.description}</p>
               <p class="category"><span style="color:blue;">Author: </span>${values.volumeInfo.authors}</p>
               </div>
               <div class="main-2a2-1c tag">
                        Tags
                        <div class="button1">Creative</div>
                        <div class="button2">Design</div>
                    </div>
               <p class="link"><a href="${values.selfLink}" class="learn">Learn More</a> </p>
               </div>`;
           });
           document.getElementById("cards").innerHTML=data1;

        }).catch((err)=>{
            console.log(err);
        })
      }
      $("#searchBar").val(""); //clearn search box
   });
   //handling error for empty search box
   function displayError() {
    alert("search term can not be empty!")
  }
