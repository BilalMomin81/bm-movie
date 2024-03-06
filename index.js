var btn = document.getElementById("searchBtn")
btn.addEventListener("click",getMovieData)
document.getElementById("searchInput").addEventListener("input",getMovieData)

async function getMovieData(){
    var input = document.getElementById("searchInput").value || "money" 
    // input.innerHTML = ""
    if(input.length < 4){
    return
   }
    var getData = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=27d532d9&s=${input}`)
    var finalData = await getData.json()
    console.log(finalData);
    if(finalData.Search != undefined){

        suggestionData(finalData.Search)
        showData(finalData.Search)
    }
}



function showData(arr){
    var container = document.getElementById("container")
   container.innerHTML = null
   container.addEventListener("click",detailsCard)
    arr.map((ele)=>{
        var newDiv = document.createElement("div")
        newDiv.className = "myCont"
        newDiv.id = ele.imdbID
        newDiv.innerHTML = `
        <img src=${ele.Poster}>
        <h3 class='heading3'>${ele.Title}</h3>
        <h3 class='heading3'> type : ${ele.Type}</h3>
        `
        container.append(newDiv)
    })
} 
getMovieData()

