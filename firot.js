document.getElementById('dilam').addEventListener('click', function(){
    const dilamInput = document.getElementById('dilamAmount');
    const dilamInputValueStr = dilamInput.value;
    const dilamInputValueNum = parseFloat(dilamInputValueStr);

    const firot = document.getElementById('firotAmount');
    const firotValueStr = firot.innerText;
    const firotValueNum = parseFloat(firotValueStr);

    const totalFirot = dilamInputValueNum + firotValueNum;
    firot.innerText = totalFirot;

    const ageChilo = document.getElementById('ageChilo');
    const ageChiloValueStr = ageChilo.innerText;
    const ageChiloValueNum = parseFloat(ageChiloValueStr);

    const ekhonAche = ageChiloValueNum -  dilamInputValueNum;
    ageChilo.innerText = ekhonAche;

    dilamInput.value = '';
})