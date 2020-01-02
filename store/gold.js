// 首页的逻辑
const GET_TYPE = 'GOLD/TYPE'
const GET_LIST = 'GOLD/LIST'
export const changeType = type => ({
    type: GET_TYPE,
    payload: type
})
const changeList = list => ({
    type: GET_LIST,
    payload: list
})
export const getGoldList = (dispatch, getState, $axios) => {
    
    const type = getState().gold.type
    console.log('goldtypes', type)
    return $axios.post('/gold', {
        category: type,
        order: "heat",
        offset: 0,
        limit: 30
    }).then(res => {
        const { data } = res.data
        dispatch(changeList(data))
    })
    .catch(err=>console.log('goldList err', err))
}
const defaultState = {
    type: 'all',
    list: [],
    category: [
      {
        text: '首页',
        value: 'all'
      },
      {
        text: '前端',
        value: 'frontend'
      },
      {
        text: '后端',
        value: 'backend'
      }
    ]
}
export default (state = defaultState, action) => {
    switch(action.type) {
        case GET_TYPE:
            const newTypeState = {
                ...state,
                type: action.payload
            }
            return newTypeState
        case GET_LIST:
            const newListState = {
                ...state,
                list: action.payload
            }
            return newListState
        default:
            return state
    }
}