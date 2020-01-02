import React from 'react'
import './ListItem.less'
// import { Icon } from 'antd';

function ListItem(props) {
    const item = props.listItemData
    return (
        <a href={item.url} className="GithubListItem">
            <h2 className="GithubTitle">
                <span className="GithubAuthor">
                    {item.username}
                </span>
                <span className="GithubDivider">
                    /
                </span>
                <span className="GithubName">
                    {item.reponame}
                </span>
            </h2>
            <div className="GithubIntro">
                {item.description ? item.description : 'No description provided.'}
            </div>
            <div className="GithubInfos">
                {/* <Icon type="star" className="listItemIcon"/> */}
                <span className="listItemText">{item.starCount}</span>
                {/* <Icon type="branches"  className="listItemIcon"/> */}
                <span className="listItemText">{item.forkCount}</span>
                <span className="listItemIconc"></span>
                <span className="listItemText">{item.lang}</span>
            </div>
        </a>
    )
}
export default ListItem