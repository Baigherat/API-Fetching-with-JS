const apikey =
"f4fd7338d65148c2a97ea7659c9f0166"

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews(){
    try{
        const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}`
        const response = await fetch(apiURL)
        const data = await response.json()
        return data.artices;

    } catch(error){
        console.error("Error fetching random news", error)
        return []
    }
}

(async ()=>{
    try{
        const articles = await fetchRandomNews()
        console.log(articles)
    }catch(error){
        console.error("Error fetching random news", error);
    }
})