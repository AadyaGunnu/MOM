//import './App.css';

function Search() {
    function handleSearch(e) {
        e.preventDefault();
        var query = document.getElementsByClassName("searchText")[0].value;
debugger
    }
    return(
        <div className="Search">
         <textarea className="searchText"></textarea>
       <button onClick={handleSearch}>
           <img className="img" src="images.png"></img>
       </button>
      </div>
      
       
    );
}

export default Search;