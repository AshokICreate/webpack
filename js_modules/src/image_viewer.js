import big from '../images/big.jpg';

export default () => {
  const bigimage = document.createElement('img');
  bigimage.src = big;
  document.body.appendChild(bigimage);
};
