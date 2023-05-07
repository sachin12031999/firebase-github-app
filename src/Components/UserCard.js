import React from 'react'
import {Card , CardBody} from "reactstrap"


const UserCard = ({user}) => {
  return (
    <Card>
      <img src={user.avatar_url} alt={user.name} className='img-thumbnail'/>
      <CardBody>
        <div className="text-primery">{user.name}</div>
        <div className="text-primery">{user.location}</div>
        <div className="text-primery">{user.bio}</div>
        <div className="text-primery">Avilable for hire:{user.hireable ? "Yes" : "Nope"}</div>
        <div className="text-primery">followers: {user.followers}</div>
      </CardBody>
    </Card>
  )
}

export default UserCard
