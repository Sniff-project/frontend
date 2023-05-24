import { getGallery, filterByStatus, filterByRegion, filterByCity } from "@core/API/pets";

export const chooseSort = (request, filter) => {
    switch(filter) {
        case 'status':
            return filterByStatus(request);
        case 'city':
            return filterByCity(request);
        case 'region':
            return filterByRegion(request);
        default:
            return getGallery(request);
    }
}