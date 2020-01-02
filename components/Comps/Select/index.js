import React from 'react'
import { Select } from 'antd';
import './index.less'
const { Option } = Select;

function SelectBar(props) {
    console.log('props', props)
    return (
        <div className="selectGreyBox">
            <Select defaultValue={props.defaultData}  className="selectGrey" onChange={(e)=>{props.onChange(e)}}>
                {props.selectData && props.selectData.map(item => (
                    <Option value={item.value} key={item.value}>{item.text}</Option>
                ))}
            </Select>
        </div>
      );
}
export default SelectBar
