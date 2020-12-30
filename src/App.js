import React from 'react';
import axios from 'axios';
import './App.css'
// const initialStories = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ];

// const getAsyncStories = () =>
//   new Promise(resolve =>
//     setTimeout(
//       () => resolve({ data: { stories: initialStories } }),
//       2000
//     )
//   );

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return{
        ...state,
        isLoading:true,
        isError:false,
      };
      case 'STORIES_FETCH_SUCCESS':
      return{
        ...state,
        isLoading:false,
        isError:false,
        data:action.payload,
      };
      case 'STORIES_FETCH_FAILURE':
      return{
        ...state,
        isLoading:false,
        isError:true,
        
      };
      
    case 'REMOVE_STORY':
      return {
        ...state,
        data: state.data.filter(story => action.payload.objectID !== story.objectID),
      };
        
      
    default:
      throw new Error();
  }
};


const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search',
    'React'
  );
  const [url,setUrl]=React.useState(`${API_ENDPOINT}${searchTerm}`);

  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    {data:[],isLoading:false,isError:false}
  );
 const handleFetchStories = React.useCallback( async ()=>{
 
  dispatchStories({type:'STORIES_FETCH_INIT'});
     try{
     const result=await axios.get(url);
  
      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.hits,
      });
    }
    catch{
      dispatchStories({
        type:'STORIES_FETCH_FAILURE'
      });
    } 
    
 },[url])


  React.useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = item => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearchInput = event => {
    setSearchTerm(event.target.value);
  };
  const handleSearchSubmit = event => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
    event.preventDefault();
  };
  // const searchedStories = stories.data.filter(story =>
  //   story.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="container">
      <h1 className="headline-primary">My Hacker Stories</h1>
<SearchForm 
searchTerm={searchTerm}
onSearchInput={handleSearchInput}
onSearchSubmit={handleSearchSubmit}

/>
      <hr />

      {stories.isError && <p>Something went wrong ...</p>}

      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List
          list={stories.data}
          onRemoveItem={handleRemoveStory}
        />
      )}
    </div>
  );
};

const InputWithLabel = ({
  id,
  value,
  type = 'text',
  onInputChange,
  isFocused,
  children,
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id} className="label">{children}</label>
      &nbsp;
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        className="input"
      />
    </>
  );
};

const List = ({ list, onRemoveItem }) =>
  list.map(item => (
    <Item
      key={item.objectID}
      item={item}
      onRemoveItem={onRemoveItem}
    />
  ));

const Item = ({ item, onRemoveItem }) => (
  <div className="item">
    <span style={{width:'40%'}}>
      <a href={item.url}>{item.title}</a>
    </span>
    <span style={{width:'40%'}}>{item.author}</span>
    <span style={{width:'10%'}}>{item.num_comments}</span>
    <span style={{width:'10%'}}>{item.points}</span>
    <span style={{width:'10%'}}>
      <button type="button" onClick={() => onRemoveItem(item)}
      className="button button_small">
        Dismiss
      </button>
    </span>
  </div>
);

const SearchForm =({
  searchTerm,
  onSearchInput,
  onSearchSubmit,
})=>(
  <form onSubmit={onSearchSubmit} className="search-form">
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={onSearchInput}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <button type="submit"
      disabled={!searchTerm}
     className="button button_large"
      >
        Submit
      </button>
      </form>
)























export default App;
