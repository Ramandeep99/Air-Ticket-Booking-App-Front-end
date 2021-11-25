
export const Alert = (message , alertType) =>{
    document.getElementById('alerts').classList.remove('d-none')
    document.getElementById('alerts').innerHTML = `<div class="alert alert-${alertType}">${message}</div>`;
    setTimeout(() =>{
        document.getElementById('alerts').innerHTML = '';
        document.getElementById('alerts').classList.add('d-none'); 
    } , 3000);
}