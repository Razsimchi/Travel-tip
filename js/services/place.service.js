import { utilService } from "./async-storage.service";

const PLACES_KEY='placesDB'

_createPlaces()

function _createPlaces(){
    let places = utilService.loadFromStorage(PLACES_KEY)
    if (!places || !places.length) {
        _createPlace()
    }
    return places
}

function _createPlace(name,lat,lng) {
    const place={}
    place.id = utilService.makeId()
    place.name = name
    place.lat = lat
    place.lng = lng
    place.createdAt = utilService.getDate()
    return place
}



// function _createDemoPlaces() {
//     const petNames = ['Bobi', 'Charli', 'Pinchi']
//     const petDescs = ['Bobi is an amazing dog', 'Charli is a curious cat', 'Just one look at Pinchi']

//     const pets = petNames.map((petName, i) => {
//         const pet = _createPet(petName)
//         pet.desc = petDescs[i]
//         return pet
//     })

//     utilService.saveToStorage(PET_KEY, pets)
// }