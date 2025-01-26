import React from 'react'
import { Layout, Menu, Button, Typography, Row, Col, Card } from "antd";
const { Header, Footer, Content } = Layout;
const { Title, Paragraph } = Typography;
function lonpagetwo() {
  return (
    <div>        <section id="features">

<Header
        style={{
          background: "linear-gradient(to right, #a855f7, #ec4899, #ef4444)",
          boxShadow: "0 4px 6px rgba(121, 121, 121, 0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <div style={{ color: "#fff", fontWeight: "bold", fontSize: "24px" }}>
          Qarze Hasana Program
        </div>
      </Header>
    <Title
      level={2}
      style={{
        color: "#fff",
        textAlign: "center",
        marginBottom: "20px",
        fontWeight: "bold",
      }}
    >
      Loans Structures
    </Title>
    <Row gutter={[16, 16]} justify="center">
      <Col xs={24} md={6}>
        <Card
          style={{
            backgroundColor: "#1f2937",
            borderColor: "#00ff7f",
            color: "#00ff7f",
          }}
          bordered
        >
          <Title level={4} style={{ color: "#fff" }}>
            Wedding Loans
          </Title>
          <Paragraph style={{ color: "#fff" }}>
            A wedding loan can help finance your dream ceremony.
          </Paragraph>
          <Button
            size="large"
            style={{
              background: "linear-gradient(to right, #a855f7, #ec4899)",
              color: "#fff",
              borderRadius: "999px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          //   onClick={()=>{navigate(/)}}
          >
            Get Loan
          </Button>
        </Card>
      </Col>
      <Col xs={24} md={6}>
        <Card
          style={{
            backgroundColor: "#1f2937",
            borderColor: "#ff007f",
            color: "#ff007f",
          }}
          bordered
        >
          <Title level={4} style={{ color: "#fff" }}>
            Home Construction Loans
          </Title>
          <Paragraph style={{ color: "#fff" }}>
            Home construction loans are designed to help build a new
            house.
          </Paragraph>
          <Button
            size="large"
            style={{
              background: "linear-gradient(to right, #a855f7, #ec4899)",
              color: "#fff",
              borderRadius: "999px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Get Loan
          </Button>
        </Card>
      </Col>
      <Col xs={24} md={6}>
        <Card
          style={{
            backgroundColor: "#1f2937",
            borderColor: "#00e7ff",
            color: "#00e7ff",
          }}
          bordered
        >
          <Title level={4} style={{ color: "#fff" }}>
            Business Startup Loans
          </Title>
          <Paragraph style={{ color: "#fff" }}>
            Business startup loans help new entrepreneurs fund their
            ventures.
          </Paragraph>
          <Button
            size="large"
            style={{
              background: "linear-gradient(to right, #a855f7, #ec4899)",
              color: "#fff",
              borderRadius: "999px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Get Loan
          </Button>
        </Card>
      </Col>
      <Col xs={24} md={6}>
        <Card
          style={{
            backgroundColor: "#1f2937",
            borderColor: "#ec4899",
            color: "#ec4899",
          }}
          bordered
        >

          <Title level={4} style={{ color: "#fff" }}>
            Education Loans p
          </Title>
          <Paragraph style={{ color: "#fff" }}>
            Education loans may have flexible repayment options based.
          </Paragraph>
          <Button
            size="large"
            style={{
              background: "linear-gradient(to right, #a855f7, #ec4899)",
              color: "#fff",
              borderRadius: "999px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Get Loan  
          </Button>
        </Card>
      </Col>
    </Row>
  </section>
</div>
  )
}

export default lonpagetwo;