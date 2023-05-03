export const locService = {
    getLocs
}
import { utilService } from "./util.service.js"
const PLACES_KEY = 'placesDB'

let locs 
_createPlaces()

function getLocs() {
    return new Promise((resolve, reject) => {
            resolve(locs)
    })
}


function _createPlaces() {
    locs = utilService.loadFromStorage(PLACES_KEY)
    if (!locs || !locs.length) {
        // _createDemoPlaces()
        locs = [
            _createPlace('Rosh hayin', 31.404, 34.829),
            _createPlace('haifa', 32.789, 35.007),
            _createPlace('elat', 29.571, 34.926)
        ]
        utilService.saveToStorage(PLACES_KEY, locs)
    }
    return locs
}

function _createPlace(name,lat,lng) {
    const place={}
    place.id = utilService._makeId()
    place.name = name
    place.lat = lat
    place.lng = lng
    place.createdAt = utilService.getDate()
    return place
}