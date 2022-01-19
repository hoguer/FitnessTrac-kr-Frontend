const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api'

export const fetchActivities = async () => {
    try {
        const response = await fetch(`${BASE_URL}/activities`, {
            headers: {
                'Content-Type': 'application/json', 
            },
        })
        const result = await response.json()
        return result;  
    }catch (error) {
        console.log(error)
    }
}

export const fetchRoutines = async () => {
    try {
        const response = await fetch(`${BASE_URL}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
    }
}

