import {Component, useEffect, useState} from 'react';
import axios from 'axios';

//The Header title for the page in general
const HeaderTitle = () => {
    return (
      <div className="header-title-container">
        <div className="header-title">
          <div className="line">Content Archive</div>
          <div className="line">and Retrieval</div>
        </div>
      </div>
    );
  };
  

//SEARCH BAR COMPONENT
const SearchBar = ({searchQuery, setSearchQuery, searchResults, setSearchResults, unfilteredSearchResults, setUnfilteredSearchResults}) => {
  const [filters, setFilters] = useState({
    date: '',
    audience: '',
    type: ''
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  /*SEARCH PORTION - PRE_ALPHA VERSION, MORE BUGS THAN EXPECTED -->For this useEffect only */
  useEffect(() => {
    const filteredResult = unfilteredSearchResults.filter(item => {
      return (
        ((filters.audience == "" || filters.audience == "all-audience") ? true : item.audience==filters.audience) &&
        (filters.date == "" ? true : item.date == filters.date) &&
        ((filters.type == "" || filters.type == "all-type")? true: item.contentType == filters.type))
      })
    setSearchResults(filteredResult)
  }, [filters])
  

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="filters">
        <div className="filter">
          <label>Date of Post:</label>
          <input
            type="date"
            value={filters.date}
            onChange={(e) => handleFilterChange('date', e.target.value)}
            className="filter-input"
          />
        </div>

        <div className="filter">
          <label>Audience:</label>
          <select value={filters.audience} onChange={(e) => handleFilterChange('audience', e.target.value)} className="filter-input">
            <option value="all-departments">All Departments</option>
            <option value="public">Public</option>
            <option value="all">All</option>
            <option value="all-audience">All-Audience</option>            
          </select>
        </div>

        <div className="filter">
          <label>Type:</label>
          <select value={filters.type} onChange={(e) => handleFilterChange('type', e.target.value)} className="filter-input">
            <option value="text">Text</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
            <option value="all-type">All-Type</option>            
          </select>
        </div>
      </div>
    </div>
  );
};
    


//SEARCH RESULTS COMPONENT
const SearchResults = ({searchQuery, searchResults, setSearchResults, unfilteredSearchResults, setUnfilteredSearchResults}) => {

  const [selectedResult, setSelectedResult] = useState(null);

  const handleResultClick = (resultId) => {
    // Find the selected result based on resultId
    const selected = searchResults.find(result => result.id === resultId);
    // Set the selected result in state to trigger pop-up display
    setSelectedResult(selected);
  };

  const handleClosePopup = () => {
    // Clear the selected result to close the pop-up
    setSelectedResult(null);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // Handle Edit button click (implementation details to be discussed)
    console.log('Edit button clicked');
    // Implement edit functionality here
    setIsEditing(true)
  };

  useEffect(() => {
    var searchLink = ''
    if(searchQuery===""){
      searchLink = "/content_archive"
    }
    else{
      searchLink = `/content_archive/${searchQuery}`
    }
    axios.get(searchLink)
    .then(result => {
      var final_result = result.data.map((content_item, index) => { 
        var item_without_id = content_item
        item_without_id.id=index+1
        return item_without_id
      })
      setUnfilteredSearchResults(final_result)
      setSearchResults(final_result)
      }
    )
    .catch(err => console.log("Error occurring......" + err))
  }, [searchQuery])

  return (
    <div className="search-results-container">
      <h2 className="search-results-heading">Search Results</h2>
      <div className="search-results-list">

         {searchResults.length === 0 ? (
          <div className="search-result-noitem">No search results for "{searchQuery}"</div>
          ) : (
            searchResults.map(result => (
            <div key={result.id} className="search-result-item" onClick={() => handleResultClick(result.id)}>
              <h3>{result.title}</h3>
              <hr className="search-title-divider"/>
              <p>{result.description}</p>
              <div className="result-footer">
                <span className="result-date">Date: {result.date}</span>
                <span className="result-audience">Audience: {result.audience}</span>
                <span className="result-type">Type: {result.contentType}</span>
              </div>
            </div>
           )) ) }

      </div>

      {/* Render the pop-up if selectedResult is not null */}
      {(selectedResult) ? (
        !isEditing ? 
        <Popup_Component selectedResult={selectedResult}
                         handleClosePopup={handleClosePopup} 
                         handleEditClick={handleEditClick}/> : 
          <Popup_EditComponent selectedResult={selectedResult} 
                               handleClosePopup={handleClosePopup} /> 
      ): <></>}
    </div>
  );
};


//POPUP WINDOW COMPONENT
const Popup_Component = (props) => {
  const handleRepostClick = () => {
    // Handle Repost button click (implementation details to be discussed)
    console.log('Repost button clicked');
    // Implement repost functionality here
  };
  
  return (
    <div className="popup-overlay" onClick={props.handleClosePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>{props.selectedResult.title}</h2>
        <p className='popup-content-description'>{props.selectedResult.description}</p>
        <div className="result-footer">
            <span>Date: {props.selectedResult.date}</span>
            <span>Audience: {props.selectedResult.audience}</span>
            <span>Type: {props.selectedResult.contentType}</span>
        </div>
        <div className="popup-buttons">
          <button onClick={props.handleEditClick}>Edit</button>
          <button onClick={handleRepostClick}>Repost</button>
          <button onClick={props.handleClosePopup}>Close</button>
        </div>
      </div>
    </div>
  );
}


//POPUP WINDOW EDIT COMPONENT
const Popup_EditComponent = (props) => {
  const [title, setTitle] = useState(props.selectedResult.title);
  const [description, setDescription] = useState(props.selectedResult.description);
  const [audience, setAudience] = useState(props.selectedResult.audience);
  const type = props.selectedResult.contentType;

  const handleRepostClick = () => {
    // Handle Repost button click (implementation details to be discussed)
    console.log('Repost button clicked');
    // Implement repost functionality here
  };

  return (
    <div className="popup-overlay" onClick={props.handleClosePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <textarea className='popup-edit-content-title' rows={3} value={title} onChange={(event) => {setTitle(event.target.value)}}/>
        <textarea className='popup-edit-content-description' rows={10} value={description} onChange={(event) => {setDescription(event.target.value)}} />
        <div className="result-footer">
            <span>
              Audience: 
                {<select value={audience} onChange={(e) => (setAudience(e.target.value))} className="filter-input">
                  <option value="">All Departments</option>
                  <option value="public">Public</option>
                  <option value="all">All</option>
                </select>}
              </span>
            <span>Type: {props.selectedResult.contentType}</span>
        </div>
        <div className="popup-buttons">
          <button onClick={handleRepostClick}>Repost</button>
          <button onClick={props.handleClosePopup}>Close</button>
        </div>
      </div>
    </div>
  )
}

export {HeaderTitle, SearchBar, SearchResults, Popup_Component}; 