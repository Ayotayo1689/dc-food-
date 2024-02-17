import Header from "@/components/Header";
import CartLayout from "@/components/cart/CartLayout";

const Cart = () => {
    return (
        <>
            <Header LinkTitle="Products" href="/products" title="Your shopping cart" />
            <CartLayout />
        </>
    )
}

export default Cart

