import big from '../images/big.jpg';
import small from '../images/small.png';
// import '../styles/image_viewer.css';

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);


const bigimage = document.createElement('img');
bigimage.src = big;

document.body.appendChild(bigimage);
