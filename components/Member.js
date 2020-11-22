import React from "react";
import { Card, Button } from "react-bootstrap";
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
  return (
    <Card>
      <Card.Img
        variant="top"
        src={`images/avatar-${occupation}.png`}
        className={styles.memberImg}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>I am a {occupation}.</Card.Text>
        <Button variant="primary" className={styles.button}>
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Member;
