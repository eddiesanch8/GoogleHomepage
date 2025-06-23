// handling searches

// define a variable that targets the form in our html

const searchForm = document.getElementById("search_bar_id");

// adding an event listener that waits for a submission from our form
// then use a callback to get open link to search results 

searchForm.addEventListener("submit", (search) => {
  
  //   target the value attribute of our <input> element
  const userSearch = search.target.search_query.value;

  //create a url targeting the value attribute in our <input> 
  // and direct us to those results with window.open()
  const url = `https://www.google.com/search?q=${encodeURIComponent(
    userSearch
  )}`;

  window.open(url);
});
