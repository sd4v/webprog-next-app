import React, { useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./Member.module.css";
import MemberButtons from "./MemberButtons";


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
        <MemberButtons editing={editing} setEditing={setEditing}/>
      </Card.Body>
    </Card>
  );
}

export default Member;
