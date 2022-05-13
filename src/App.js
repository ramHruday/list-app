import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";
import FirstList from "./components/first-list";
import FourthColumn from "./components/fourth-column";
import SecondList from "./components/second-list";
import ThirdList from "./components/third-list";

function App() {
  const [selectedFirstList, setSelectedFirstList] = useState(new Set());
  const [selectedSecondList, setSelectedSecondList] = useState(new Set());

  const toggleFirstSelection = (x) => {
    let copy = new Set([...selectedFirstList]);
    if (selectedFirstList.has(x)) {
      copy.delete(x);
    } else {
      copy.add(x);
    }

    setSelectedFirstList(copy);
  };

  const toggleSecondSelection = (x) => {
    let copy = new Set([...selectedSecondList]);
    if (selectedSecondList.has(x)) {
      copy.delete(x);
    } else {
      copy.add(x);
    }

    setSelectedSecondList(copy);
  };

  return (
    <Container className="p-2" fluid>
      <Row>
        <Col sm="4">
          <Form>
            {/* First List */}
            <Row className="p-2 bg-light">
              First List
              <FirstList
                selected={selectedFirstList}
                setSelections={toggleFirstSelection}
              />
            </Row>

            {/* Second List */}
            <Row className="p-2">
              Second List
              <SecondList
                selected={selectedSecondList}
                setSelections={toggleSecondSelection}
              />
            </Row>

            {/* Button */}
            <Row className="justify-content-end">
              <Col>
                <Button variant="success">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Col>

        {/* Third section */}
        <Col sm="4">
          <Form>
            Third List
            <ThirdList />
          </Form>
        </Col>

        {/* First Sections */}
        <Col sm="4">
          <Form>
            Fourth List
            <FourthColumn results="pass your results here from ur API" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
