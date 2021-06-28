const TAX_RATE = 0.27;
const PHONE_PRICE = 150;
const ACCESSORY_RRICE = 50;
const BANK_ACCOUNT_BALANCE = 1200;
const SPENDING_THRESHOLD = 300;
let purchaseAmount;

function calculateTotalPrice(item1, item2) {
    let priceWithoutTaxes = item1 + item2;
    //adding the tax fees to the price without taxes
    function calculateFinalPurchaseAmount() {
        let totalAmount = priceWithoutTaxes;
        totalAmount = totalAmount + (totalAmount * TAX_RATE);
        //calculate the price how much money I can spend compared to bankaccount
        for (let i = totalAmount; i < BANK_ACCOUNT_BALANCE; i += i) {
            if (i < BANK_ACCOUNT_BALANCE) {
                let wantMore = prompt(`You wanted to spend only $${SPENDING_THRESHOLD}, and your cart is $${i} do you want to continue shopping?`)
                if (wantMore == "yes") {
                    console.log(`You can spend maximum $${i}`);
                } else {
                    return "you don't want to buy. bb"
                }
            }

        }

    }
    console.log(BANK_ACCOUNT_BALANCE);
    return calculateFinalPurchaseAmount();
}
purchaseAmount = calculateTotalPrice(PHONE_PRICE, ACCESSORY_RRICE);
console.log(purchaseAmount);
