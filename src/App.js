import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Pagination from "./components/Pagination/Pagination"
import PaginationInnerComponent from "./components/PaginationInnerComponent/PaginationInnerComponent"
import img1 from "./resources/images/enfants.jpg"
import img2 from "./resources/images/enfants.jpg"


export default class App extends React.Component {
    render() {
        return (
            <Navigation/>
            // <PaginationInnerComponent title = "Images Pagination" images={[img1, img2, img2]}/>
        );
    }
}
