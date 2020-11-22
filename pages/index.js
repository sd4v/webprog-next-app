import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Member, { occupation } from "../components/Member";
import { headers } from "../config/db";
import styles from "./index.module.css";


export const MemberContext = React.createContext({});


const defaultMember = {
  name: "New member",
  occupation: occupation.worker,
};


export default function Home({ initMembers }) {

  const [members, setMembers] = useState(initMembers);


  const saveMember = async data => {
    const response = await fetch("api/updateRecord", { 
      method: "POST",
      body: JSON.stringify(data),
    });
    
    if (response.status === 200) {
      setMembers(prevMembers => prevMembers.map(
        prevMember => prevMember._id !== data._id 
          ? prevMember 
          : data
      ));
    }
  };


  const deleteMember = async _id => {
    const response = await fetch("api/deleteRecord", { 
      method: "POST",
      body: JSON.stringify({ _id }),
    });

    if (response.status === 200) {
      setMembers(prevMembers => 
        prevMembers.filter(({ _id: pId }) => pId !== _id)
      );
    }
  };


  const addMember = async () => {
    const response = await fetch("api/addNewRecord", { 
      method: "POST",
      body: JSON.stringify(defaultMember),
    });
    
    const newMember = await response.json();

    setMembers(prevMembers => [...prevMembers, newMember]);
  };


  return (
    <Container fluid>
      <Row className={styles.addRow}>
        <Col xs={12}>
          <Button onClick={addMember} className={styles.addButton}>
            Add new member
          </Button>
        </Col>
      </Row>
      <Row>
        {members.map(member=> (
          <Col sm={6} md={4} lg={3} xl={2} key={member._id}
              className={styles.memberCol}>
            <MemberContext.Provider value={{
              ...member,
              saveMember,
              deleteMember,
            }}>
              <Member/>
            </MemberContext.Provider>
          </Col>
        ))}
      </Row>
    </Container>
  );
}


export async function getServerSideProps() {
  const fetchOptions = { 
    method: "GET",
    headers,
  };
  
  const response = await fetch(`${process.env.DB_URL}/members`, fetchOptions);
  
  const initMembers = response.status === 200 
    ? await response.json()
    : {};

  return {
    props: {
      initMembers,
    },
  }
}
