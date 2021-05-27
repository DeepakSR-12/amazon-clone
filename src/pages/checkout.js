import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotalPrice } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Cuurency from "react-currency-formatter";
import { useSession } from "next-auth/client";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(`${process.env.stripe_public_key}`);

const Checkout = () => {
  const items = useSelector(selectItems);
  const [session] = useSession();
  const totalPrice = useSelector(selectTotalPrice);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios
      .post("/api/create-checkout-session", {
        items: items,
        email: session.user.email,
      })
      .catch((error) => {
        console.log(error.message);
      });

    // console.log(checkoutSession);

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow shadow-sm m-5">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col bg-white p-5 space-y-10">
            <h1 className="text-3xl border-b p-4">
              {items.length === 0 ? "Empty Basket" : "Your Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                category={item.category}
                image={item.image}
                rating={item.rating}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <div>
              <h2 className="whitespace-nowrap ">
                Subtotal ({items.length} items):
                <span className="font-bold">
                  <Cuurency quantity={totalPrice} currency="INR" />
                </span>
              </h2>

              <button
                onClick={createCheckoutSession}
                role="link"
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-500 to-gray-300 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
