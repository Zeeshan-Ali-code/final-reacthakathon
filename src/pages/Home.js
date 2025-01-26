    import React from "react";
    import { Layout, Menu, Button, Typography, Row, Col, Card } from "antd";
    import "antd/dist/reset.css";

    const { Header, Content, Footer } = Layout;
    const { Title, Paragraph } = Typography;

    const Home = () => {
    //   const navigate = useNavigate()
      return (
        <Layout style={{ minHeight: "100vh", backgroundColor: "#000" }}>
          {/* Header */}
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <a
                href="#features"
                style={{ color: "#ffffff", margin: "0 15px", fontSize: "16px" }}
              >
                Features
              </a>
              <a
                href="#about"
                style={{ color: "#ffffff", margin: "0 15px", fontSize: "16px" }}
              >
                About
              </a>
              <a
                href="#contact"
                style={{ color: "#ffffff", margin: "0 15px", fontSize: "16px" }}
              >
                Contact
              </a>
            </div>
          </Header>

          {/* Content */}
          <Content
            style={{ padding: "50px 20px", backgroundColor: "#111", color: "#fff" }}
          >
            <Row
              justify="center"
              style={{ textAlign: "center", marginBottom: "40px" }}
            >
              <Col span={24}>
                <Title
                  style={{ color: "#00e7ff", fontSize: "3rem", fontWeight: "bold" }}
                >
                  Welcome To The Qarze Hasana Program
                </Title>
                <Paragraph style={{ color: "#ccc", fontSize: "1.2rem" }}>
                  The Qarze Hasana Program is a community-focused initiative
                  designed to provide interest-free loans.
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
                  Get Started
                </Button>
              </Col>
            </Row>

            {/* Features Section */}
            <section id="features">
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


            {/* About Section */}
            <section id="about" style={{ marginTop: "50px", textAlign: "center" }}>
              <Title level={2} style={{ color: "#ec4899", fontWeight: "bold" }}>
                About Us
              </Title>
              <Paragraph style={{ color: "#ccc", fontSize: "1.2rem" }}>
                The Qarze Hasana Program is a community-focused initiative designed
                to provide interest-free loans to individuals facing financial
                hardship.
              </Paragraph>
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              style={{ marginTop: "50px", textAlign: "center" }}
            >
              <Title level={2} style={{ color: "#00ff7f", fontWeight: "bold" }}>
                Contact Us
              </Title>
              <Paragraph style={{ color: "#ccc", fontSize: "1.2rem" }}>
                We are here to assist you with any inquiries or support you may need
                regarding the Qarze Hasana Program.
              </Paragraph>
              <Button
                size="large"
                style={{
                  background: "linear-gradient(to right, #00ff7f, #00e7ff)",
                  color: "#fff",
                  borderRadius: "999px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                Contact Now
              </Button>
            </section>
          </Content>

          {/* Footer */}
          <Footer
            style={{
              textAlign: "center",
              backgroundColor: "#1f2937",
              color: "#fff",
              padding: "20px",
            }}
          >
            &copy; 2025 Neon Landing Page. All rights reserved.
          </Footer>
        </Layout>
      );
    };

    export default Home;