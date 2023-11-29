import { totalAmount } from "./core/lib/totalAmount";
import { calculatePageCount } from "./core/lib/calculatePageCount";
import { arrayFromHTMLCollection } from "./core/lib/arrayFromHTMLCollection";
import { addXMLDataToLocalStorage , getXMLDataFromLocalStorage } from "./core/lib/XMLDataLocalStorage";
import { renderPageController } from "./core/ui/renderPage/ui/renderPageController";
import { pagination } from "./core/ui/pagination/pagination";

import './styles.css'


const itemsPerPage = 15;
let currentPage = 1;

const getItems = ( xmlDoc ) => {
    const items = xmlDoc.getElementsByTagName('Good');
    const data = arrayFromHTMLCollection(items);
    const result = totalAmount(data);

    const renderPage = renderPageController(itemsPerPage , result);
    const totalPages = calculatePageCount(result , itemsPerPage);
    const renderPagination = () => {
        pagination(totalPages , renderPage , renderPagination);
    };
    renderPagination();

    renderPage(currentPage);
}


addXMLDataToLocalStorage(getItems);

getXMLDataFromLocalStorage(getItems);







