// An: 01643160702
// Hanh: 01656574210
// Dat: 01676893232
function callYou(){
    var name = document.getElementById('name').value;
    var anPhone = '01643160702';
    var hanhPhone = '01656574210';
    var datPhone ='01676893232';

    

    try{
        //logic phuc tap
    }catch(error){
        log()
    }
    var currentPhone;
  
    switch(name){
        case 'An':
        case 'Hanh':
           currentPhone = '00000000';
            break;
        case 'Dat':
            currentPhone = datPhone;
            break;
        default:
        currentPhone = '999999';
    }
    alert(currentPhone);
}


