import React from 'react'

function MainInfo(props) {

    return(
        <div className="bioInfo">
            <img src={props.bio.img_url} alt="noPhoto"/>
            <div className="info_center">
                <h1 className="name">{props.bio.name ? props.bio.name : "Name isn't filled"}</h1>
                <p className="login"> Login: {props.bio.login}</p>
                <p className="bio">Bio: {props.bio.bio ? props.bio.bio : "Bio isn't filled"}</p>
                <p className="company">Company: {props.bio.company ? props.bio.company : "Company isn't filled"}</p>
                <p className="location">Location: {props.bio.location ? props.bio.location : "Location isn't filled"}</p>
                <p className="email">Email: {props.bio.email ? props.bio.email : "Email isn't filled"}</p>
                Blog: {props.bio.blog ?  <a href="#">{props.bio.blog}</a> : "Blog isn't filled"}
            </div>
        </div>
    )
}
export default MainInfo