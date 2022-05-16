// source https://www.htmlelements.com/demos/carousel/ 

window.onload = function () {
    var basePath = '/images/',
        carouselSquare = document.getElementById('carouselSquare');
     
    carouselSquare.dataSource = generateDataSource(7);
     
    function generateDataSource(items) {
        let dataSource = Array(items).fill({});
    
        dataSource.forEach((element, index) => dataSource[index] = { image: `${basePath}carousel-square-${index + 1}.jpg` });
        return dataSource;
    }
    }