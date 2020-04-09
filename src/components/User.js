import React from "react";

const User = ({ users, showContet, deleteButton }) => {
  return (
    !showContet && (
      <div className="user">
        <i onClick={() => deleteButton()} className="fa fa-trash-o"></i>
        <div className="image">
          <img src={users.avatar_url} alt={users.id} />
          <div className="button-gr my-2">
            <button className="btn btn-primary">
              <i className="fa fa-file"></i> {users.public_repos}
            </button>
            <button className="btn btn-secondary">
              <i className="fa fa-users"></i> {users.followers}
            </button>
            <a className="btn btn-success" href={users.html_url}>
              <i className="fa fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className="user-info">
          <p>
            Username: <span className="text-muted">{users.name}</span>
          </p>
          <p>
            Location: <span className="text-muted">{users.location}</span>
          </p>
          {users.company !== null && (
            <p>
              Company: <span className="text-muted">{users.company}</span>
            </p>
          )}
          {users.bio !== null && (
            <p>
              About: <span className="text-muted">{users.bio}</span>
            </p>
          )}
          <a href={users.blog} className="btn btn-success">
            Portfolio <i className="fa fa-edit"></i>
          </a>
        </div>
      </div>
    )
  );
};

export default User;
