import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./Member.module.css";
import EditMember from "./EditMember";
import ViewMember from "./ViewMember";
import { MemberContext } from "../pages";


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


function Member() {

  const { occupation } = useContext(MemberContext);

  const [editing, setEditing] = useState(false);

  return (
    <Card>
      <Card.Img variant="top" 
                as="div" 
                className={styles.imgWrapper}
      >
        <img src={`images/avatar-${occupation}.png`}
                  className={styles.memberImg}
        />
      </Card.Img>
      <Card.Body>
        {!editing 
          ? <ViewMember setEditing={setEditing}/>
          : <EditMember setEditing={setEditing}/>
        }
      </Card.Body>
    </Card>
  );
}

export default Member;
