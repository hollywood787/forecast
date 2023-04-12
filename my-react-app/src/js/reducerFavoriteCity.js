import { localstorageCity } from "./consts";

const items = JSON.parse(localStorage.getItem(localstorageCity));

export const addFavoriteCity = (state = items, action) => {
    switch (action.type) {
        case 'DELETE_CITY':
            return state = action.cityName

        case 'ADD_CITY':
            return state = action.cityName

        default:
            return state
    }

}