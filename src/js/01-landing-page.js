'use strict';
//OCULTAR MODAL LANDING PAGE

recoverUser();

function hiddenModal(event){
  if(userLogin.value !== "" || user.name!=''){
    landing.style.display = 'none';
    welcome.innerHTML = `¡Bienvenido/a ${userLogin.value!==''?userLogin.value: user.name}!`;
    valueUser();
  }else {
    adviseUser.classList.remove('hidden');
  }
}

userLogin.addEventListener('keyup', function(event){
  if(event.keyCode === 13) {
    valueUser();
    hiddenModal(event);
  }
});

access.addEventListener('click', hiddenModal);