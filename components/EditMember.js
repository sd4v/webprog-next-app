import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import styles from "./Member.module.css";


function EditMember({ setEditing }) {

  const onCancelClick = () => setEditing(false);

  const onSaveClick = () => setEditing(false);

  return (
    <>
      <Card.Title>Edit member</Card.Title>
      <Card.Text>
        Edit mode
      </Card.Text>
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
