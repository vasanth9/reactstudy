import React from "react";

import {sortBy} from 'lodash';

const SORTS ={
  NONE:list=>list,
  TITLE:list => sortBy(list,'title'),
  AUTHOR:list => sortBy(list,'author'),
  COMMENTS:list => sortBy(list,'num_comments').reverse(),
  POINTS:list => sortBy(list,'points').reverse(),
  
}
const List = ({ list, onRemoveItem }) =>{
  const [sort,setSort]=React.useState({
    sortKey:'NONE',
    isReverse:false
  });
  const handleSort = sortKey =>{
    const isReverse=sort.sortKey===sortKey&&!sort.isReverse;
    setSort({sortKey,isReverse});
  }
  const sortFunction = SORTS[sort.sortKey];
  const sortedList = sort.isReverse
                    ?sortFunction(list).reverse()
                    :sortFunction(list);
  
  
  return (
  <div>
<div>
  <span>
    <button type="button" onClick={()=>handleSort('TITLE')}>Titile</button>
  </span>
  <span>
    <button type="button" onClick={()=>handleSort('AUTHOR')}>Author</button>
  </span>
  <span>
    <button type="button" onClick={()=>handleSort('COMMENTS')}>Comments</button>
  </span>
  <span>
    <button type="button" onClick={()=>handleSort('POINTS')}>Points</button>
  </span>
  
</div>
  {sortedList.map(item => (
    <Item
      key={item.objectID}
      item={item}
      onRemoveItem={onRemoveItem}
    />
  ))}</div>);}

const Item = ({ item, onRemoveItem }) => (
  <div className="item" style={{display:'flex'}}>
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

export default List;