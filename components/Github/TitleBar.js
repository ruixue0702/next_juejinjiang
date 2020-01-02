import React from 'react'
import "./TitleBar.less"
import Select from '../Comps/Select'
import SearchSelect from '../Comps/SearchSelect'
import { changeType, changeLang, changePeriod, getGithubList } from '../../store/github';
import { useSelector, useDispatch } from 'react-redux';

function TitleBar() {
    const { type, category, langS, lang, periodS, period } = useSelector(state => state.github);
    const dispatch = useDispatch();
  
    const handleChangeType = (type) => {
        dispatch(changeType(type));
        dispatch(getGithubList)
    }
    const handleChangeLang = (lang) => {
        console.log('github lang', lang)
        dispatch(changeLang(lang));
        dispatch(getGithubList)
    }
    const handleChangePeriod = (period) => {
        console.log('github period', period)
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