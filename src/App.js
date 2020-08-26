import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Pagination from "./components/Pagination/Pagination"
import PaginationInnerComponent from "./components/PaginationInnerComponent/PaginationInnerComponent"
import img1 from "./resources/images/enfants.jpg"
import img2 from "./resources/images/enfants.jpg"


export default class App extends React.Component {
    render() {
        return (
            // <Navigation/>
            <PaginationInnerComponent 
            title = "Images Pagination" 
            images={[img1]} 
            PaginationTitleClass="headerType1"
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar odio id euismod congue. Morbi dignissim tincidunt felis vel sodales. Maecenas ornare facilisis velit tristique malesuada. Aliquam venenatis quam in mi dignissim accumsan. Mauris at ipsum dui. Sed sollicitudin auctor ipsum, et venenatis sem gravida in. Praesent eu vulputate sem."
            />
        );
    }
}
