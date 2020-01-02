import React from 'react'
import ListItem from './ListItem.js'
import './ListContainer.less'
import { getGithubList } from '../../store/github';
import { useSelector, useDispatch } from 'react-redux';
function ListContainer() {
    const { list, type } = useSelector(state => state.github);
    const dispatch = useDispatch();
    // console.log('list type', list, type)
    // const handleChangeType = (type) => {
    //     dispatch(getGoldList);
    // }
    return (
        <div className="GithubContainer">
            {list && list.map(item => (
                <ListItem listItemData={item} key={item.id}/>
            ))}
        </div>
    )
}
export default ListContainer