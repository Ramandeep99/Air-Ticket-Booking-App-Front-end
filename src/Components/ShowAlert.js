
export const Alert = (message , alertType , time=3000) =>{
    document.getElementById('alerts').classList.remove('d-none')
    document.getElementById('alerts').innerHTML = `<div class="alert alert-${alertType}">${message}</div>`;
    setTimeout(() =>{
        document.getElementById('alerts').innerHTML = '';
        document.getElementById('alerts').classList.add('d-none'); 
    } , time);
}