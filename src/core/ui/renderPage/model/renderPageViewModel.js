export const renderPageViewModel = ( itemsPerPage , result , page ) => {

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return result.slice(startIndex , endIndex);
};