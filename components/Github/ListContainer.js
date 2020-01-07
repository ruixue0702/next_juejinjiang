import React, { useEffect } from 'react'
import ListItem from './ListItem.js'
import './ListContainer.less'
import { changeOffset, getGithubList } from '../../store/github';
import { useSelector, useDispatch } from 'react-redux';
import { inview } from'../../utils/intersectionObserver.js'
function ListContainer() {
    const { list, offset } = useSelector(state => state.github);
    const dispatch = useDispatch();
    useEffect(()=> {
        inviewObserver()
        function inviewObserver() {
            const dom = document.querySelector('.referenceGithub');
            // 当这个dom元素滚动到屏幕中，打点
            inview(dom, () => {
                dispatch(changeOffset(offset, true))
                dispatch(getGithubList)
                setTimeout(()=> {
                    inviewObserver()
                }, 3000)
            });
        }
    }, [])
    return (
        <div className="GithubContainer">
            {list && list.map(item => (
                <ListItem listItemData={item} key={item.id}/>
            ))}
            <div className="referenceGithub"></div>
        </div>
    )
}
export default ListContainer