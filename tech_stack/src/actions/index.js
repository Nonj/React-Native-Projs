


// fat arrow is considered an action creator
// a JS object with a type field is considered an action
// actions tell the reducer to update in a very specific fashion


export const selectLibrary = (libraryID) => {
    return {
        type:'select_library',
        payload: libraryID
    };
};