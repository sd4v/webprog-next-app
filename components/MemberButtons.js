import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import styles from "./MemberButtons.module.css";


function MemberButtons({ editing, setEditing }) {

  const onEditClick = () => setEditing(true);

  const onCancelClick = () => setEditing(false);

  const onSaveClick = () => setEditing(false);

  const onDeleteClick = () => {};

  return (
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
  );
}

export default MemberButtons;
