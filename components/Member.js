import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import styles from "./Member.module.css";


export const occupation = {
  cooker: "cooker",
  fireman: "fireman",
  judge: "judge",
  nurse: "nurse",
  policeman: "policeman",
  postman: "postman",
  surgeon: "surgeon",
  worker: "worker",
};


function Member({ name, occupation }) {

  const [editing, setEditing] = useState(false);

  const onEditClick = () => setEditing(true);

  const onCancelClick = () => setEditing(false);

  const onSaveClick = () => setEditing(false);

  const onDeleteClick = () => {};

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`images/avatar-${occupation}.png`}
        className={styles.memberImg}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {!editing 
            ? <div>I am a {occupation}.</div> 
            : <div>Edit mode</div>
          }
        </Card.Text>
        <Row className={styles.buttonRow}>
          {editing ? null : (
            <Col>
              <Button variant="primary"
                className={styles.button}
                onClick={onEditClick}
              >
                Edit
              </Button>
            </Col>
          )}
          {!editing ? null : (
            <Col>
              <Button variant="success"
                className={styles.button}
                onClick={onSaveClick}
              >
                Save
              </Button>
            </Col>
          )}
          {editing ? null : (
            <Col>
              <Button variant="danger"
                className={styles.button}
                onClick={onDeleteClick}
              >
                Delete
              </Button>
            </Col>
          )}
          {!editing ? null : (
            <Col>
              <Button variant="light"
                className={styles.button}
                onClick={onCancelClick}
              >
                Cancel
              </Button>
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Member;
