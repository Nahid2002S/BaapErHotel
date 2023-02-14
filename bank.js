document.getElementById('nilamBtn').addEventListener('click', function(){
    const nilamInput = document.getElementById('nilam');
    const nilamValueStr = nilamInput.value;
    const nilamValueNum = parseFloat(nilamValueStr);
    
    const aroDew = document.getElementById('nilamAmount');
    const aroDewValueStr = aroDew.innerText;
    const aroDewValueNum = parseFloat(aroDewValueStr)
    
    const totalDilo = nilamValueNum + aroDewValueNum;
    aroDew.innerText = totalDilo;

    const previousTotal = document.getElementById('ageChilo');
    const previousTotalStr = previousTotal.innerText;
    const previousTotalNum = parseFloat(previousTotalStr);

    const newMoney = nilamValueNum;
    const currentTotal = previousTotalNum + nilamValueNum;
    previousTotal.innerText = currentTotal;


    nilamInput.value = '';
})