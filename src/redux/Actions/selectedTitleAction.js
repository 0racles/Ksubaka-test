export const SHOW_MOVIE_DETAILS = `SHOW_MOVIE_DETAILS`;

export const selectedTitleAction = (titleName) => {
    return {
        type: SHOW_MOVIE_DETAILS,
        titleName
    }
}
