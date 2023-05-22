import { getGallery, filterByStatus } from "@core/API/pets";

export const chooseSort = (token, request, filter) => {
    switch(filter) {
        case 'status':
            return filterByStatus(token, request);
        default:
            return getGallery(token, request);
    }
}