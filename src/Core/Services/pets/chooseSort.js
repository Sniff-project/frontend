import { getGallery, filterByStatus } from "@core/API/pets";

export const chooseSort = (request, filter) => {
    switch(filter) {
        case 'status':
            return filterByStatus(request);
        default:
            return getGallery(request);
    }
}