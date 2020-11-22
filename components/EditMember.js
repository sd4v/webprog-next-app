import React, { useState, useContext } from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import styles from "./Member.module.css";
import { occupation as occupations } from "./Member";
import { MemberContext } from "../pages";


function EditMember({ setEditing }) {

  const { saveMember, _id, name, occupation } = useContext(MemberContext);


  const [ localName, setLocalName ] = useState(name);
  const [ localOccupation, setLocalOccupation ] = useState(occupation);

  const onNameChange = ({ target: { value } }) => {
    setLocalName(value);
    return value;
  };

  const onOccupationChange = ({ target: { value } }) => {
    setLocalOccupation(value);
    return value;
  };

  const onCancelClick = () => setEditing(false);

  const onSaveClick = () => {
    setEditing(false);
    saveMember({ _id, name: localName, occupation: localOccupation });
  };

  return (
    <>
      <Card.Title>Edit member</Card.Title>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="input"
                        placeholder="Enter name"
                        value={localName}
                        onChange={onNameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Occupation</Form.Label>
          <Form.Control as="select"
                        value={localOccupation}
                        onChange={onOccupationChange}
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
