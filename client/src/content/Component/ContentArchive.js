import animationGif from './assets/archive.gif';
import './ContentArchive.css';
import NavBar from './Components/Navbar.js';
import {HeaderTitle, SearchBar, SearchResults} from './Components/ContentArchiveComponents.js';
import Footer from './Components/Footer.js';
import { useState} from 'react';

function ContentArchive() {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] =  useState([]);
  const [unfilteredSearchResults, setUnfilteredSearchResults] =  useState([]);

  return (
      <>
        <NavBar />
        <div className="upperComponents">
        <div className="left-content">
          <HeaderTitle />
          <SearchBar searchQuery={searchQuery} 
                     setSearchQuery={setSearchQuery} 
                     searchResults={searchResults}
                     setSearchResults={setSearchResults}
                     unfilteredSearchResults={unfilteredSearchResults}
                     setUnfilteredSearchResults={setUnfilteredSearchResults}/>
        </div>
        <div className="animation-container">
          <img src={animationGif} alt="Animation" className="animation-gif" />
        </div>
      </div>
        <SearchResults searchQuery={searchQuery}
                       setSearchQuery={setSearchQuery}
                       searchResults={searchResults}
                       setSearchResults={setSearchResults}
                       unfilteredSearchResults={unfilteredSearchResults}
                       setUnfilteredSearchResults={setUnfilteredSearchResults}/>
        <Footer />
      </>
  );
}



export default ContentArchive;
