import {
    GALLERY_REQUEST,
    GALLERY_SUCCESS,
    GALLERY_FAILURE,
} from "@core/Store/actions/pets";

const initialState = {
    gallery: []
};

export function galleryReducer(state = initialState, action) {
    switch (action.type) {
        case GALLERY_REQUEST:
            return { ...state, isLoading: true, error: null };
        case GALLERY_SUCCESS:
            return {
                ...state,
                gallery: action.payload.gallery,
                isLoading: false,
                error: null,
            };
        case GALLERY_FAILURE:
            return { ...state, isLoading: false, error: action.payload.error };
        default:
            return state;
    }
}
