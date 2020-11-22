import React from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import styles from "./Member.module.css";
import { occupation as occupations } from "./Member";


function EditMember({ setEditing }) {

  const onCancelClick = () => setEditing(false);

  const onSaveClick = () => setEditing(false);

  return (
    <>
      <Card.Title>Edit member</Card.Title>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="input"
                        placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Occupation</Form.Label>
          <Form.Control as="select"
          >
            {Object.values(occupations).map(occupation => (
              <option key={occupation}>{occupation}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
      <Row className={styles.buttonRow}>
        <Col>
          <Button variant="success"
                  className={styles.button}
                  onClick={onSaveClick}
          >
            Save
          </Button>
        </Col>
        <Col>
          <Button variant="light"
                  className={styles.button}
                  onClick={onCancelClick}
          >
            Cancel
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default EditMember;
