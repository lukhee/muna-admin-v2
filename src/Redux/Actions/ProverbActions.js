import * as type from './actionContents'
import axios from 'axios'

export const FetchProverb = () => async (dispatch)=> {
    try {
        const data = await axios.get('https://munaproverb.herokuapp.com/api/proverbs/proverbs/')
        dispatch({
            type: type.FETCH_PROVERBS,
            payoad: data
        })
        
    } catch (error) {
        console.log(error.message)
        
    }
}

export const CreateProverb = (proverbData) => async (dispatch)=> {
    try {
        // get url for creating proverb
        // const data = await axios.post('https://munaproverb.herokuapp.com/api/proverbs/proverbs/' proverbData)
        dispatch({
            type: type.FETCH_PROVERBS,
            payoad: 'data'
        })
        
    } catch (error) {
        console.log(error.message)
        
    }
}

export const DeleteProverb = (proverbID) => async (dispatch)=> {
    try {
        // get url for creating proverb
        const data = await axios.post('https://munaproverb.herokuapp.com/api/proverbs/proverbs/')
        dispatch({
            type: type.FETCH_PROVERBS,
            payoad: data
        })
        
    } catch (error) {
        console.log(error.message)
        
    }
}