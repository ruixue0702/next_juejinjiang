// 首页的逻辑

const GET_TYPE = 'GOLD/TYPE'
const GET_LIST = 'GOLD/LIST'
const GET_LIST_MORE = 'GOLD/LIST/MORE'
let offsetNum = 0
let limit = 10
export const changeOffset = (offset, isMore) => ({
    type: GET_LIST_MORE,
    payload: isMore ? offsetNum : 0
})
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
    const offset = getState().gold.offset
    offsetNum = offset + 1
    const list = getState().gold.list
    return $axios.post('/gold', {
        category: type,
        order: "heat",
        offset: offsetNum * limit,
        limit: limit
    }).then(res => {
        const { data } = res.data
        const newData = offset === 0 ? data : [...list,...data]
        console.log('newData', newData)
        dispatch(changeList(newData))
    })
    .catch(err=>console.log('goldList err', err))
}
const defaultState = {
    offset: 0,
    limit: 10,
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
        case GET_LIST_MORE:
            const newOffset = {
                ...state,
                offset: action.payload
            }
            return newOffset
        default:
            return state
    }
}