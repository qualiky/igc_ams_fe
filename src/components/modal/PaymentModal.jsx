import PropTypes from "prop-types";
import { useState } from "react";
import { paymentService } from "../../features/api-service/payment-action/payment-action";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../selectors/selectors";

const PaymentModal = ({ isOpen, onClose, setOpen, price }) => {
  const [selectedPayment, setSelectedPayment] = useState("khalti");

  const { user } = useSelector(getCurrentUser);

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleSendPayment = async () => {
    if (selectedPayment === "khalti") {
      try {
        const res = await paymentService.initiateKhaltiPayment({
          return_url: "https://dash.pirus.app",
          website_url: "https://pirus.app/",
          amount: 1300,
          purchase_order_id: "test12",
          purchase_order_name: "test",
          customer_info: {
            name: user?.firstName + " " + user?.lastName,
            email: user?.email,
            phone: "9800000123",
          },
          amount_breakdown: [
            {
              label: "Mark Price",
              amount: price,
            },
            {
              label: "VAT",
              amount: 300,
            },
          ],
          product_details: [
            {
              identity: "1234567890",
              name: "Khalti logo",
              total_price: price + 300,
              quantity: 1,
              unit_price: price + 300,
            },
          ],
          merchant_username: "Pirus Pvt Ltd",
          merchant_extra: "merchant_extra",
        });
        if (res.status == 200) {
          window.open(res?.data?.payment_url, "_blank");
        }
      } catch (error) {
        console.error(error);
      }
    } else if (selectedPayment === "stripe") {
      try {
        const res = await paymentService.initiateStripePayment({
          product_name: "Java Book",
          unit_amount: 500,
          product_quantity: 2,
          currency: "usd",
          product_description: "Best book to buy",
          success_url: "https://dash.pirus.app",
          cancel_url: "https://dash.pirus.app",
        });
        if (res.status == 200) {
          window.open(res?.data?.url, "_blank");
        }
        console.log(object);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div
      className={`w-screen h-screen place-items-center fixed top-0 left-0  ${
        isOpen ? "grid z-10" : "hidden"
      }`}
    >
      <div
        className="w-full h-full bg-black opacity-70 absolute left-0 top-0 z-20"
        onClick={onClose}
      ></div>
      <div className="lg:w-[50vw] md:w-[70vw] w-[90%] bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md z-50 flex flex-col items-center gap-3 px-5 py-6">
        <div className="w-full">
          <div className="flex gap-5">
            <div className="w-1/2 p-2  flex flex-col items-start justify-start gap-2 ">
              <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">
                Payment&nbsp;Method
              </p>
              <p>Select the payment method</p>
              <label className="mt-5 inline-flex justify-between w-full items-center mt-3 z-10 rounded-lg p-2 border border-1 has-[:checked]:border-indigo-500  has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&_p]:has-[:checked]:translate-y-0 [&_p]:has-[:checked]:transition-transform [&_p]:has-[:checked]:duration-500 [&_p]:has-[:checked]:opacity-100 overflow-hidden">
                <div className="inline-flex items-center justify-start gap-2 relative z-10 py-5">
                  <img src="/khalti.png" alt="" className="w-[50%]" />
                  <p className="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                    Khalti
                  </p>
                </div>
                <input
                  className="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                  value="khalti"
                  name="payment"
                  type="radio"
                  checked={selectedPayment === "khalti"}
                  onChange={handlePaymentChange}
                />
              </label>

              <label className="inline-flex justify-between w-full items-center rounded-lg p-2 border border-1 has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&_p]:has-[:checked]:translate-y-0 [&_p]:has-[:checked]:transition-transform [&_p]:has-[:checked]:duration-500 [&_p]:has-[:checked]:opacity-100 overflow-hidden">
                <div className="inline-flex items-center justify-start gap-2 relative py-5">
                  <img src="/stripe.png" alt="" className="w-[50%]" />
                  <p className="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                    Stripe
                  </p>
                </div>
                <input
                  className="checked:text-indigo-500 h-14 w-14 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                  value="stripe"
                  name="payment"
                  type="radio"
                  checked={selectedPayment === "stripe"}
                  onChange={handlePaymentChange}
                />
              </label>
            </div>

            <div className="w-1/2 bg-gray-100 dark:bg-[#242424] rounded-lg h-auto mt-10">
              <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 py-10 justify-between overflow-y-auto">
                <div>
                  <p className="capitalize font-semibold text-3xl self-start">
                    Summary
                  </p>
                  <div className="flex items-center justify-between pt-10">
                    <p className="text-base leading-none text-gray-800 dark:text-white">
                      Subtotal
                    </p>
                    <p className="text-base leading-none text-gray-800 dark:text-white">
                      {price || "109.031"}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800 dark:text-white">
                      Shipping
                    </p>
                    <p className="text-base leading-none text-gray-800 dark:text-white">
                      -
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800 dark:text-white">
                      Tax(13%)
                    </p>
                    <p className="text-base leading-none text-gray-800 dark:text-white">
                      14.04
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800 dark:text-white">
                      Total
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">
                      123.07
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-3 justify-end mt-4">
          <button
            className="btn xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-danger bg-danger-light leading-5 inline-block border border-danger-light btn-danger light hover:text-white hover:bg-danger offcanvas-close"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            onClick={handleSendPayment}
            className="btn btn-primary xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-white bg-primary leading-5 inline-block border border-primary hover:bg-hover-primary offcanvas-close"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

PaymentModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  setOpen: PropTypes.func,
};

export default PaymentModal;
