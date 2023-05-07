
import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon, InputGroupText
} from "reactstrap";

import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";
import  {redirect}  from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";


const Home = () => {
  const context = useContext(UserContext)
  const [query, setQuery] = useState('')
  const [user, setUser] = useState(null)

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`)
      setUser(data)
      console.log({ data })
    } catch (error) {
      toast("This username is not avilable in GitHub", { type: "alert" })
    }
  }
if (!context.user?.email) {
  return (<redirect to="/signin" />)
  
}
  return (
    <Container style={{height: "80vh"}}>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              placeholder="Please provide the username" onChange={e => setQuery(e.target.value)}
            />
            <InputGroupText addonType="append">
              <Button onClick={fetchDetails} color="primary">Fetch User</Button>
            </InputGroupText>
          </InputGroup>
          {user ? <UserCard user={user} /> : null}
        </Col>

        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
    </Container>
  );
}

export default Home
