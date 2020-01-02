import React from 'react'
import './ListItem.less'
// import { Icon } from 'antd';

function ListItem(props) {
    const item = props.listItemData
    let dateEnd = new Date();//获取当前时间
    let dateItem = new Date(item.date.iso)
    let dateDiff = dateEnd.getTime() - dateItem.getTime();//时间差的毫秒数
    let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
    let leave1=dateDiff%(24*3600*1000)    //计算天数后剩余的毫秒数
    let hours=Math.floor(leave1/(3600*1000))//计算出小时数
    let hoursText = (dayDiff < 1) ? hours + '小时前' : dayDiff + '天前'
    return (
        <a href={item.url} className="ListItem">
            <div className="num">
                {/* <div><Icon type="caret-up" /></div> */}
                <div>12</div>
            </div>
            <div className="infos">
                <div className="title">{item.title}</div>
                <div className="meta">
                    <span className="meta-item">{hoursText}</span>
                    <span className="meta-item">{item.user.username}</span>
                </div>
            </div>
        </a>
    )
}
export default ListItem