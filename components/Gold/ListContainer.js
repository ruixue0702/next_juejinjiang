import React from 'react'

import ListItem from './ListItem.js'


import { getGoldList } from '../../store/gold';
import { useSelector, useDispatch } from 'react-redux';
import './ListContainer.less'

function ListContainer() {
    
    const { list, type } = useSelector(state => state.gold);
    const dispatch = useDispatch();
    // console.log('list type', list, type)
    // const handleChangeType = (type) => {
    //     dispatch(getGoldList);
    // }
  
    return (
        <div className="GoldContainer">
            {list && list.map(item => (
                <ListItem listItemData={item} key={item.id}/>
            ))}
            
        </div>
    )
}
export default ListContainer