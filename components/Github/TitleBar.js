import React from 'react'
import "./TitleBar.less"
import Select from '../Comps/Select'
import SearchSelect from '../Comps/SearchSelect'
import { changeOffset, changeType, changeLang, changePeriod, getGithubList } from '../../store/github';
import { useSelector, useDispatch } from 'react-redux';

function TitleBar() {
    const { type, category, langS, lang, periodS, period } = useSelector(state => state.github);
    const dispatch = useDispatch();
  
    const handleChangeType = (type) => {
        dispatch(changeOffset(0))
        dispatch(changeType(type));
        dispatch(getGithubList)
    }
    const handleChangeLang = (lang) => {
        dispatch(changeOffset(0))
        dispatch(changeLang(lang));
        dispatch(getGithubList)
    }
    const handleChangePeriod = (period) => {
        dispatch(changeOffset(0))
        dispatch(changePeriod(period));
        dispatch(getGithubList)
    }
    const IconGithub = "https://e-gold-cdn.xitu.io/static/github.png?9140c37"
    return (
        <div className="GithubTitleBox">
            <img className="IconGithub" src={IconGithub}/>
            <div className="title">Github</div>
            <Select selectData={category} defaultData={type}  onChange={handleChangeType}/>
            <Select selectData={period} defaultData={periodS}  onChange={handleChangePeriod}/>
            <SearchSelect className="SearchSelect" selectData={lang} defaultData={langS}
            onChange={handleChangeLang}
            onFocus={handleChangeLang}
            onBlur={handleChangeLang}
            onSearch={handleChangeLang}
            />
        </div>
    )
}
export default TitleBar