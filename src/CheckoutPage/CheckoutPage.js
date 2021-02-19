const CheckoutPage = () => {
    return (
        <div>
            <p>This is the Checkout Page</p>
            <form>
                <input type="text" placeholder="Full Name"></input>
                <br></br>
                <input type="text" placeholder="Shipping Address"></input>
                <br></br>
                <input type="text" placeholder="Billing Address"></input>
                <br></br>
                <input type="text" placeholder="Credit Card Number"></input>
                <input type="text" placeholder="Exp Date"></input>
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
    );
}

export default CheckoutPage;