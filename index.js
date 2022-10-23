//Get Count Paramete and assign value
var count1 = document.getElementById('count1')
var count2 = document.getElementById('count2')
var count3 = document.getElementById('count3')

count1.innerHTML = count2.innerHTML = count3.innerHTML = 0;

//Base class coffee
class Coffee {
    constructor(milk, creame, latte) {
        this.milk = milk
        this.creame = creame
        this.latte = latte
        this.quantity = 1
        this.total = this.milk + this.creame + this.latte
    }
    addRemoveMilk(bool) {
        if (bool) {
            this.total = this.total + this.milk
        } else {
            this.total = this.total - this.milk
        }
    }
    addRemoveCreame(bool) {
        if (bool) {
            this.total = this.total + this.creame
        } else {
            this.total = this.total - this.creame
        }
    }
    addRemoveLatte(bool) {
        if (bool) {
            this.total = this.total + this.latte
        } else {
            this.total = this.total - this.latte
        }
    }
    addQuantity(qty) {
        this.quantity = qty
    }
}

//sub classes and inherit
class Espresso extends Coffee {
    constructor(milk, creame, latte) {
        super(milk, creame, latte)
    }
    totalEspresso() {
        return this.quantity * this.total
        // console.log(this.quantity * this.total)
    }
}

class Cappuccino extends Coffee {
    constructor(milk, creame, latte) {
        super(milk, creame, latte)
    }
    totalCappuccino() {
        return this.quantity * this.total
    }
}

class Latte extends Coffee {
    constructor(milk, creame, latte) {
        super(milk, creame, latte)
    }
    totalLatte() {
        return this.quantity * this.total
    }
}

//Create Object of all three classes
var espresso = new Espresso(60, 75, 100)
var cappuccino = new Cappuccino(80, 90, 125)
var latte = new Latte(100, 125, 150)

//Incremnt Function
function countIncrement(p) {
    var count = document.getElementById(`count${p}`)
    if (parseInt(count.innerHTML) < 10) {
        if (p == 1) {
            espresso.addQuantity(parseInt(count.innerHTML) + 1)
        } else if (p == 2) {
            cappuccino.addQuantity(parseInt(count.innerHTML) + 1)
        } else {
            latte.addQuantity(parseInt(count.innerHTML) + 1)
        }
        count.innerHTML = parseInt(count.innerHTML) + 1;
    } else {
        alert("Not Greater than 10")
    }
}

//Decrement Function
function countDecrement(p) {
    var count = document.getElementById(`count${p}`)
    if (parseInt(count.innerHTML) > 0) {
        if (p == 1) {
            espresso.addQuantity(parseInt(count.innerHTML) - 1)
        } else if (p == 2) {
            cappuccino.addQuantity(parseInt(count.innerHTML) - 1)
        } else {
            latte.addQuantity(parseInt(count.innerHTML) - 1)
        }
        count.innerHTML = parseInt(count.innerHTML) - 1;
    } else {
        alert("Not Less than 0")
    }
}

//Total Amount
function totalAmount() {
    //for Espresso
    let totalBill = 0
    if (parseInt(count1.innerHTML) > 0) {
        var checkBoxMilk1 = document.getElementById('checkBoxMilk1').checked
        var checkBoxCreame1 = document.getElementById('checkBoxCreame1').checked
        var checkBoxLatte1 = document.getElementById('checkBoxLatte1').checked
        checkBoxMilk1 && espresso.addRemoveMilk(true)
        checkBoxCreame1 && espresso.addRemoveCreame(true)
        checkBoxLatte1 && espresso.addRemoveLatte(true)
        var totalAmountOfEspresso = espresso.totalEspresso()
        var espressoString = `Espresso (Rs. 235) with ${checkBoxMilk1 || checkBoxCreame1 || checkBoxLatte1 ? " addon of (" + (checkBoxMilk1 ? "milk (Rs. 60)," : '') + (checkBoxCreame1 ? "creame (Rs. 75), " : '') + (checkBoxLatte1 ? "latte (Rs. 100)" : '') + ")" : ' no addon '} x ${espresso.quantity} = Rs. ${totalAmountOfEspresso}`
        totalBill = espresso.totalEspresso()
        document.getElementById('bill1').innerHTML = espressoString
    }
    // Cappucino
    if (parseInt(count2.innerHTML) > 0) {
        var checkBoxMilk2 = document.getElementById('checkBoxMilk2').checked
        var checkBoxCreame2 = document.getElementById('checkBoxCreame2').checked
        var checkBoxLatte2 = document.getElementById('checkBoxLatte2').checked
        checkBoxMilk2 && cappuccino.addRemoveMilk(true)
        checkBoxCreame2 && cappuccino.addRemoveCreame(true)
        checkBoxLatte2 && cappuccino.addRemoveLatte(true)
        var totalAmountOfCappuccino = cappuccino.totalCappuccino()
        var cappuccinoString = `Cappuccino (Rs. 295) with ${checkBoxMilk2 || checkBoxCreame2 || checkBoxLatte2 ? " addon of (" + (checkBoxMilk2 ? "milk (Rs. 80)," : '') + (checkBoxCreame2 ? "creame (Rs. 90), " : '') + (checkBoxLatte2 ? "latte (Rs. 125)" : '') + ")" : ' no addon '} x ${cappuccino.quantity} = Rs. ${totalAmountOfCappuccino}`
        totalBill = totalBill + cappuccino.totalCappuccino()
        document.getElementById('bill2').innerHTML = cappuccinoString

    }
    //Latte
    if (parseInt(count3.innerHTML) > 0) {
        var checkBoxMilk3 = document.getElementById('checkBoxMilk3').checked
        var checkBoxCreame3 = document.getElementById('checkBoxCreame3').checked
        var checkBoxLatte3 = document.getElementById('checkBoxLatte3').checked
        checkBoxMilk3 && latte.addRemoveMilk(true)
        checkBoxCreame3 && latte.addRemoveCreame(true)
        checkBoxLatte3 && latte.addRemoveLatte(true)
        var totalAmountOfLatte = latte.totalLatte()
        var latteString = `Latte (Rs. 375) with ${checkBoxMilk3 || checkBoxCreame3 || checkBoxLatte3 ? " addon of (" + (checkBoxMilk3 ? "milk (Rs. 100)," : '') + (checkBoxCreame3 ? "creame (Rs. 125), " : '') + (checkBoxLatte3 ? "latte (Rs. 150)" : '') + ")" : ' no addon '} x ${latte.quantity} = Rs. ${totalAmountOfLatte}`
        totalBill = totalBill + latte.totalLatte()
        document.getElementById('bill3').innerHTML = latteString
    }

    if (totalBill == 0) {
        alert("Please Add At Least One Coffee")
    } else {
        document.getElementById('billTotal').innerHTML = `Total Amount : Rs. ${totalBill}`
        document.getElementById("cardConProduct").style.display = "none";
        document.getElementById('buttonCon').style.display = "none"
        document.getElementById("cardConBill").style.display = "flex";
    }


}