const apikey =
"f4fd7338d65148c2a97ea7659c9f0166"

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews(){
    try{
        const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apikey=${apikey}`
        const response = await fetch(apiURL)
        const data = await response.json()
        return data.articles;

    } catch(error){
        console.error("Error fetching random news", error)
        return []
    }
}

function displayBlogs(articles){
    blogContainer.innerHTML = "";
    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h2");
        const truncatedTitle = article.title.length > 30 ? article.title.slice(0,30) + "..." : article.title;
        title.textContent = truncatedTitle;
        const description = document.createElement("p");
        const truncatedDescription = article.description.length > 120 ? article.description.slice(0,120) + "..." : article.description
        description.textContent = truncatedDescription;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogContainer.appendChild(blogCard);
    })

}

(async ()=>{
    try{
        const articles = await fetchRandomNews()
        displayBlogs(articles)
    }catch(error){
        console.error("Error fetching random news", error);
    }
})();