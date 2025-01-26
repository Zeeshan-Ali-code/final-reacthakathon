import React, { useState } from "react";
import { Typography, Input, Form, Button } from "antd";

const { Title, Paragraph } = Typography;

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateLoan = () => {
    if (loanAmount && interestRate && loanTerm) {
      const monthlyRate = interestRate / 100 / 12;
      const totalPayments = loanTerm * 12;
      const payment =
        (loanAmount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -totalPayments));
      setMonthlyPayment(payment.toFixed(2));
    }
  };

  return (
    <section id="loan-calculator" style={{ textAlign: "center", marginBottom: "50px" }}>
      <Title level={2} style={{ color: "#00e7ff", fontWeight: "bold" }}>
        Loan Calculator
      </Title>
      <Paragraph style={{ color: "#ccc", fontSize: "1.2rem" }}>
        Calculate your monthly loan payments below.
      </Paragraph>
      <Form
        style={{ maxWidth: "500px", margin: "0 auto" }}
        onFinish={calculateLoan}
      >
        <Form.Item label="Loan Amount">
          <Input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter loan amount"
          />
        </Form.Item>
        <Form.Item label="Interest Rate (%)">
          <Input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter annual interest rate"
          />
        </Form.Item>
        <Form.Item label="Loan Term (Years)">
          <Input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="Enter loan term in years"
          />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            background: "linear-gradient(to right, #a855f7, #ec4899)",
            borderRadius: "999px",
          }}
        >
          Calculate
        </Button>
      </Form>
      {monthlyPayment && (
        <Paragraph style={{ color: "#00ff7f", marginTop: "20px", fontSize: "1.5rem" }}>
          Monthly Payment: ${monthlyPayment}
        </Paragraph>
      )}
    </section>
  );
};

export default LoanCalculator;
