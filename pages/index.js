import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Member, { occupation } from "../components/Member";
import styles from "./index.module.css";


const initData = [
  {
    id: 1,
    name: "Ubul",
    occupation: occupation.cooker,
  },
  {
    id: 2,
    name: "Jolán",
    occupation: occupation.nurse,
  },
  {
    id: 3,
    name: "Jack",
    occupation: occupation.surgeon,
  },
  {
    id: 4,
    name: "Bauer",
    occupation: occupation.policeman,
  },
];


const getDefaultMember = id => ({
  id,
  name: "New member",
  occupation: occupation.worker,
});


export const MemberContext = React.createContext({});


export default function Home() {

  const [members, setMembers] = useState(initData);


  const saveMember = data => {
    setMembers(prevMembers => prevMembers.map(
      prevMember => prevMember.id !== data.id 
        ? prevMember 
        : data
    ));
  };


  const deleteMember = id => {
    setMembers(prevMembers => 
      prevMembers.filter(({ id: pId }) => pId !== id)
    );
  };


  const addMember = () => {
    setMembers(prevMembers => {
      const defaultMember = getDefaultMember(prevMembers.length + 1);
      return [...prevMembers, defaultMember];
    });
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
          <Col sm={6} md={4} lg={3} xl={2} key={member.id}
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
