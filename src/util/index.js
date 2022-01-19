const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api/'

export const fetchActivities = async () => {
    try {
         const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
             headers: {
                 'Content-Type': 'application/json', 
             },
         }).then(response => response.json())
         const result = await response.json()
         return result.data.activities   
    }catch (error) {
        console.log(error)
    }
}

export const fetchRoutines = async () => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
        const result = await response.json()
        return result.data.routines
    } catch (error) {
        console.log(error)
    }
}

