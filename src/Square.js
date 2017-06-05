import React from 'react';
//import css from './App.css';

const Square = (props) => {
    const style = {
  margin:'0px',
  height:'150',
  width:'150',
  border:'2px solid black',
  display:'inline-block',
  backgroundColor: 'white',
}
style.backgroundColor = 'salmon';
    return <div style={style} key={props.square.id} >{props.square.id}</div>
}
export default Square;

/*const RepoList = (props) => {
    const repos = props.repos.map((repoObj) => {
        return <li key={repoObj.id}><a href={repoObj.html_url}>{repoObj.name}</a></li>
    })
    return (
        <ul>
            {repos}
        </ul>
    )
}

export default RepoList;*/