import React from 'react'
import { Select } from 'antd';
import './index.less'
const { Option } = Select;

function SelectBar(props) {
    console.log(props)
    return (
        <div className="searchSelectGreyBox">
            <Select defaultValue={props.defaultData} className="selectGrey"
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={(e)=>props.onChange(e)}
                onFocus={(e)=>props.onFocus(e)}
                onBlur={(e)=>props.onBlur(e)}
                onSearch={(e)=>props.onSearch(e)}
                filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {props.selectData && props.selectData.map(item => (
                    <Option value={item.value} key={item.value}>{item.text}</Option>
                ))}
                {/* <Option value="1">java</Option>
                <Option value="2">所有语言</Option> */}
            </Select>
        </div>
      );
}
export default SelectBar
