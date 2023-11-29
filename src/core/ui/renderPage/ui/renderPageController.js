import { renderPageViewModel } from "../model/renderPageViewModel";
import { renderPagePure } from "./renderPagePure";

export const renderPageController = ( itemsPerPage , result ) => ( page ) => {
    const itemsToDisplay = renderPageViewModel(itemsPerPage , result , page);
    renderPagePure(itemsToDisplay);
};