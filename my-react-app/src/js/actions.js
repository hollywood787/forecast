export const ActionsFavoriteCity = () => ({ type: 'cityFavotires', favoriteCity: 'ewtrjalsdaskdjl' });

export const ActionsDeleteCity = (nameCity) => {
    return {
        type: 'DELETE_CITY',
        cityName: nameCity
        }
};

export const ActionsAddCity = (nameCity) => {
    return {
        type: 'ADD_CITY',
        cityName: nameCity
        }
};