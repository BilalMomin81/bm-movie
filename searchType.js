function suggestionData(arr){
    // console.log(arr);
    var suggestionBox = document.getElementById("inputBox")
    suggestionBox.innerHTML = ""
    arr.map((ele)=>{
        var card = document.createElement("div")
        card.id = ele.imdbID
        card.addEventListener("click",suggestionDetails)
        card.innerHTML = `
        <img class='imgLogo' src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-search-icon-png-image_320926.jpg">
        <p>${ele.Title}</p>
        `
        card.className= "suggestion"
        suggestionBox.append(card)
    })
}

function detailsCard(e){
    var idGet = e.target.closest(".myCont")
    // console.log(idGet);
    if(idGet != null){
        var id = idGet.id
        // console.log(id);
    }
    if(id !== undefined){
        var set = localStorage.setItem("name" , id)
        // console.log(set);
        window.location.href = "details.html"
    }
}

function debounce(){
    if(debounceId){
        clearInterval(debounceId)
    }                                         
    debounceId = setTimeout(getMovieData,2000)
}

function suggestionDetails(e){
    var id = e.target.closest(".suggestion")
    console.log(id);
    if(id != null){
        var getId = id.id
        // console.log(id);
    }
    if(getId !== undefined){
        var set = localStorage.setItem("name" , getId)
        // console.log(set);
        window.location.href = "details.html"
    }
}

// Toggle button
document.getElementById("colorToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
  