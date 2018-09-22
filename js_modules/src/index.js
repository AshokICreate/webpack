const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick =  () => {
  System.import('./image_viewer').then(module =>{
    console.log(module);
    module.default();
  }).catch(error => console.log(error));
}

document.body.appendChild(button);
