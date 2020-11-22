import React, { useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./Member.module.css";
import EditMember from "./EditMember";
import ViewMember from "./ViewMember";


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


function Member({ id, name, occupation, saveMember }) {

  const [editing, setEditing] = useState(false);

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`images/avatar-${occupation}.png`}
        className={styles.memberImg}
      />
      <Card.Body>
        {!editing 
          ? <ViewMember name={name}
                        occupation={occupation}
                        setEditing={setEditing}
            />
          : <EditMember setEditing={setEditing}
                        saveMember={saveMember}
                        id={id}
                        name={name}
                        occupation={occupation}
            />
        }
      </Card.Body>
    </Card>
  );
}

export default Member;
