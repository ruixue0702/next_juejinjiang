import React, { useEffect } from 'react'

import ListItem from './ListItem.js'




import { changeOffset, getGoldList } from '../../store/gold';
import { useSelector, useDispatch } from 'react-redux';

import './ListContainer.less'
import { inview } from'../../utils/intersectionObserver.js'


function ListContainer() {
    
    const { list, offset } = useSelector(state => state.gold);
    const dispatch = useDispatch();
    useEffect(()=> {
        inviewObserver()
        function inviewObserver() {
            const dom = document.querySelector('.reference');
            console.log('useeffect', dom)
            // 当这个dom元素滚动到屏幕中，打点
            inview(dom, () => {
                dispatch(changeOffset(offset, true))
                dispatch(getGoldList)
                setTimeout(()=> {
                    inviewObserver()
                }, 3000)
            });
        }
    }, [])

    return (
        <div className="GoldContainer">
            {list && list.map(item => (
                <ListItem listItemData={item} key={item.id}/>
            ))}
            <div className="reference"></div>
        </div>
    )
}
export default ListContainer