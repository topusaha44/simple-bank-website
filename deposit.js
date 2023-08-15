document.getElementById('btn-deposit').addEventListener('click',function(){
    const userDiposit = document.getElementById('user-diposit')
    const userDipositValue = userDiposit.value
    const convert1 = parseFloat(userDipositValue)
    const depositTotal = document.getElementById('deposit-total')
    const depositTotalValue = depositTotal.innerText
    const convert2 = parseFloat(depositTotalValue)
    const final = convert1 + convert2
    depositTotal.innerText = final
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalValue = balanceTotal.innerText
    const convert3 = parseFloat(balanceTotalValue)
    const totalDp = convert1 + convert3
    balanceTotal.innerText = totalDp
    userDiposit.value = ''
})




