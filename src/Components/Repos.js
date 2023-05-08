import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { ListGroup , ListGroupItem} from 'reactstrap'

const Repos = ({repos_url}) => {
    
        const [repos , setRepos]=useState([])

    
    useEffect (()=>{
      const fetch_data= async()=>{
        const {data} = await Axios.get(repos_url)
        console.log(data);
        // console.log(repos_url)
        setRepos(data)
      }
      fetch_data();
    }, [repos_url])

      return (
        <ListGroup>
          {repos?.map(repo=>(
            <ListGroupItem key={repo?.id}>
                <div className="text-primary">{repo?.name}</div>
                <div className="text-secondary">{repo?.language}</div>
                <div className="text-info">{repo?.description}</div>
            </ListGroupItem>
          ))}
        </ListGroup>
      )
}

export default Repos
