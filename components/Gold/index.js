import React, { useEffect } from 'react'

import TitleBar from './TitleBar.js'
import ListContainer from './ListContainer.js'
import './index.less'
class Gold extends React.Component {
    render () {
        return (
            <div className="h100">
                <TitleBar/>
                <ListContainer/>
            </div>
        )
    }
    
}
export default Gold