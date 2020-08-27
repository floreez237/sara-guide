import React from 'react';
import ContactForm from "./components/ContactForm/ContactForm";
import Pagination from "./components/Pagination/Pagination"
import PaginationInnerComponent from "./components/PaginationInnerComponent/PaginationInnerComponent"
import img1 from "./resources/images/enfants.jpg"
import img2 from "./resources/images/enfants.jpg"
import Navigation from "./components/Navigation/Navigation";


export default class App extends React.Component {
    render() {
        return (
             <Navigation/>
            // <Pagination/>
        );
    }
}
