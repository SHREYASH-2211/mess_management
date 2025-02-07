import React, { useState } from "react";
import "./PaymentGateway.css";

const PaymentGateway = ({ totalAmount, onPaymentComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate a fake transaction ID
    // const transactionId = Math.random().toString(36).substr(2, 9);

    setIsProcessing(false);
    setIsPaid(true);
    // onPaymentComplete(transactionId);
  };

  return (
    <div className="payment-gateway">
      <div className="payment-card">
        <div className="card-header">
          <h2>Payment Gateway</h2>
          <p>Complete your payment for the order</p>
        </div>
        <div className="card-content">
          {isPaid ? (
            <div className="success-message">Thanks for ordering!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="amount">Total Amount</label>
                <input
                  id="amount"
                  type="text"
                  value={`$${totalAmount.toFixed(2)}`}
                  disabled
                />
              </div>
              <div className="form-group">
                <label>Payment Method</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      value="credit_card"
                      checked={paymentMethod === "credit_card"}
                      onChange={() => setPaymentMethod("credit_card")}
                    />
                    <span>Credit Card</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="debit_card"
                      checked={paymentMethod === "debit_card"}
                      onChange={() => setPaymentMethod("debit_card")}
                    />
                    <span>Debit Card</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="wallet"
                      checked={paymentMethod === "wallet"}
                      onChange={() => setPaymentMethod("wallet")}
                    />
                    <span>Digital Wallet</span>
                  </label>
                </div>
              </div>
              {(paymentMethod === "credit_card" ||
                paymentMethod === "debit_card") && (
                <div className="card-details">
                  <div className="form-group">
                    <label htmlFor="card_number">Card Number</label>
                    <input
                      id="card_number"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      pattern="\d{16}"
                      maxLength="16"
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="expiry_date">Expiry Date</label>
                      <input
                        id="expiry_date"
                        type="text"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        id="cvv"
                        type="password"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        pattern="\d{3}"
                        maxLength="3"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
              {paymentMethod === "wallet" && (
                <div className="form-group">
                  <label htmlFor="wallet_id">Wallet ID</label>
                  <input
                    id="wallet_id"
                    type="text"
                    placeholder="Enter your wallet ID"
                    required
                  />
                </div>
              )}
              <button
                type="submit"
                className="submit-button"
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : `Pay $${totalAmount.toFixed(2)}`}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
