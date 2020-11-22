import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import styles from "./Member.module.css";


function ViewMember({ name, setEditing }) {

  const onEditClick = () => setEditing(true);

  const onDeleteClick = () => {};

  return (
    <>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        Edit mode
      </Card.Text>
      <Row className={styles.buttonRow}>
        <Col>
          <Button variant="primary"
            className={styles.button}
            onClick={onEditClick}
          >
            Edit
          </Button>
        </Col>
        <Col>
          <Button variant="danger"
            className={styles.button}
            onClick={onDeleteClick}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default ViewMember;
