import { useState } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import Buttons from "../Components/Button";
import Cards from "../Components/Cards";

function NewCard() {
  const [show, setShow] = useState(false);
  const [initial, setInitial] = useState("");
  const [Record, setRecord] = useState([]);
  console.log(Record);

  function handleSubmit(event) {
    event.preventDefault();
    setRecord([...Record, initial]);
  }

  function onHandleChange(e) {
    const { name, value } = e.target;
    const image = name === "pic" && e.target.files[0];

    setInitial(() => {
      return {
        ...initial,
        [name]: name === "pic" ? window.URL.createObjectURL(image) : value,
      };
    });
  }
  function deleteTask(id) {
    const task = [...Record];

    task.splice(id, 1);

    setRecord(task);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <br></br>
      <div className="container">
        <div className="row ">
          <div className="col d-flex justify-content-center">
            <h1>Appointment Card UI</h1>
            <div style={{ marginLeft: "50px", marginTop: "7px" }}>
              <Buttons
                class="btn btn-primary"
                onClick={handleShow}
                text="+"
              ></Buttons>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill The Card Information</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
                name="name"
                onChange={onHandleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Upload your Image"
                required
                name="pic"
                onChange={onHandleChange}
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3 " controlId="age">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter your age"
                    required
                    name="age"
                    onChange={onHandleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="contact">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your contact number"
                    required
                    name="contact"
                    onChange={onHandleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="gender">
              <Form.Label>Gender</Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="female"
                    value="female"
                    name="gender"
                    type={type}
                    onChange={onHandleChange}
                    id={`inline-${type}-1`}
                    required
                  />
                  <Form.Check
                    inline
                    label="male"
                    value="male"
                    name="gender"
                    type={type}
                    onChange={onHandleChange}
                    id={`inline-${type}-2`}
                    required
                  />
                </div>
              ))}
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="time">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    required
                    name="time"
                    onChange={onHandleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    required
                    name="date"
                    onChange={onHandleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div class="modal-footer">
              <Buttons
                class="btn btn-primary"
                type="submit"
                text="Submit"
              ></Buttons>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <div className="container mt-5">
        <div className="row">
          {Record.map((e, index) => {
            return (
              <>
              <Cards
                pic={e.pic}
                name={e.name}
                age={e.age}
                gender={e.gender}
                contact={e.contact}
                time={e.time}
                date={e.date}
                title='consult'
                onClick={deleteTask}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NewCard;
