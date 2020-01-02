// 首页的逻辑
const GET_TYPE = 'GITHUB/TYPE'
const GET_LANG = 'GITHUB/LANG'
const GET_PERIOD = 'GITHUB/PERIOD'
const GET_LIST = 'GITHUB/LIST'
export const changeType = data => ({
    type: GET_TYPE,
    data
})
export const changeLang = data => ({
    type: GET_LANG,
    data
})
export const changePeriod = data => ({
    type: GET_PERIOD,
    data
})

const changeList = data => ({
    type: GET_LIST,
    data
})
export const getGithubList = (dispatch, getState, $axios) => {
    const type = getState().github.type;
    const langS = getState().github.langS;
    const periodS = getState().github.periodS;
    console.log('getState github',getState().github)
    return $axios.post('/github', {
        category: type,
        period: periodS,
        lang: langS,
        offset: 0,
        limit: 30,
    }).then(res => {
        const { data } = res.data
        dispatch(changeList(data))
    })
    .catch(err=>console.log('githubList err'))
}
const defaultState = {
    type: 'trending',
    list: [],
    category: [
        {
            text: '热门',
            value: 'trending'
        },
        {
          text: '新生',
          value: 'upcome'
        }        
    ],
    periodS: 'month',
    period: [
        {
          text: '今日',
          value: 'day'
        },
        {
          text: '本周',
          value: 'week'
        },
        {
          text: '本月',
          value: 'month'
        }
    ],
    langS: 'javascript',
    lang: [
        {
          text: 'JavaScript',
          value: 'javascript'
        },
        {
          text: 'Css',
          value: 'css'
        },
        {
          text: 'HTML',
          value: 'html'
        }
    ],
}
export default (state = defaultState, action) => {
    switch(action.type) {
        case GET_TYPE:
            const newTypeState = {
                ...state,
                type: action.data
            }
            return newTypeState
        case GET_LANG:
            const newLangState = {
                ...state,
                type: action.data
            }
            return newLangState
        case GET_PERIOD:
            const newPeriodState = {
                ...state,
                type: action.data
            }
            return newPeriodState
        case GET_LIST:
            const newListState = {
                ...state,
                list: action.data
            }
            return newListState
        default:
            return state
    }
}