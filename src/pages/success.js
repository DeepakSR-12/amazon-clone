import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Header from "../components/Header";
const Success = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5 ">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vitae, alias! Et adipisci rem voluptatum deleniti
            tenetur perspiciatis iure, laboriosam est eum possimus, modi
            expedita nisi? Fugit architecto nobis ex temporibus?
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to orders
          </button>
        </div>
      </main>
    </div>
  );
};

export default Success;
