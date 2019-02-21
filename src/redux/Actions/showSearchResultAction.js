export const SHOW_SEARCH_RESULT = `SHOW_SEARCH_RESULT`;

export const showSearchResultAction = (searchResult) => {
  return {
      type: SHOW_SEARCH_RESULT,
      searchResult
  }
}
