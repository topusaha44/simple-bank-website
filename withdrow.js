document.getElementById('btn-Withdrow').addEventListener('click',function(){
    const userWithdrow = document.getElementById('user-withdrow')
    const userWithdrowValue = userWithdrow.value
    const convert1 = parseFloat(userWithdrowValue)
    const withdrowTotal = document.getElementById('withdrow-total')
    const withdrowTotalValue = withdrowTotal.innerText
    const convert2 = parseFloat(withdrowTotalValue)
    const final = convert1 + convert2
    withdrowTotal.innerText = final
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalValue = balanceTotal.innerText
    const convert3 = parseFloat(balanceTotalValue)
    const totalDp = convert3 - convert1
    balanceTotal.innerText = totalDp
    userWithdrow.value = ''
})