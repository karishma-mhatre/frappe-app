export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REQUEST_LIST = 'REQUEST_LIST'
export const RECEIVE_LIST = 'RECEIVE_LIST'

export const addToFavourites = (listingTitle) => ({
    type: ADD_TO_FAVOURITES,
    listingTitle
})

export const receiveList = (json) => ({
    type: RECEIVE_LIST,
    list: json,
  })

export const requestList = () => ({
    type: REQUEST_LIST,
  })

const fetchList = () => dispatch => {
    dispatch(requestList())
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    return fetch(proxyUrl + `http://54.169.233.100:8080/favourite.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveList(json)))
  }

export const fetchListIfNeeded = () => (dispatch, getState) => {
    if (getState().frappListings.isLoading) {
      return dispatch(fetchList())
    }
  }