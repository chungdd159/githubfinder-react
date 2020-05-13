import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import ReposItem from './ReposItem';

class UserDetail extends Component {
  state = {
    user: {},
    loading: false,
    repos: [],
  };
  async componentDidMount() {
    const { login } = this.props.match.params;
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    const repos = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    this.setState({ user: res.data, loading: false, repos: repos.data });
  }

  render() {
    const {
      name,
      avatar_url,
      company,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.state.user;
    const { loading, repos } = this.state;
    if (loading) {
      return <Spinner />;
    }
    return (
      <div className="container">
        <Link to="/" className="btn btn-dark mr-3">
          Go Back To Search
        </Link>
        Hirebale:{' '}
        {hireable ? (
          <i className="fas fa-check text-success"></i>
        ) : (
          <i className="fas fa-times-circle text-danger"></i>
        )}
        <div className="card my-3 p-3 ">
          <div className="row">
            <div className="col-md-6 text-center ">
              <img
                src={avatar_url}
                alt="avatar"
                style={{ width: '150px', borderRadius: '50%' }}
              />
              <h3>{name && name}</h3>
              <p>Location: {location}</p>
            </div>
            <div className="col-md-6">
              {bio && (
                <React.Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </React.Fragment>
              )}
              <a href={html_url} className="btn btn-dark mb-2">
                Visit Github Profile
              </a>
              <ul className="list-group" style={{ listStyle: 'none' }}>
                <li>
                  <strong>Username: </strong>
                  {login}
                </li>
                {company && (
                  <React.Fragment>
                    <li>
                      <strong>Company: </strong>
                      {company}
                    </li>
                  </React.Fragment>
                )}
                {blog && (
                  <React.Fragment>
                    <li>
                      <strong>Website: </strong>
                      {blog}
                    </li>
                  </React.Fragment>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <span className="badge badge-primary mr-3">
                Follower: {followers}
              </span>
              <span className="badge badge-secondary mr-3">
                Following: {following}
              </span>
              <span className="badge badge-success mr-3">
                Public Repos: {public_repos}
              </span>
              <span className="badge badge-danger mr-3">
                Public Gits: {public_gists}
              </span>
            </div>
          </div>
        </div>
        <React.Fragment>
          <h1>Latest Repos</h1>
          {repos.map((item) => (
            <ReposItem key={item.id} item={item} />
          ))}
        </React.Fragment>
      </div>
    );
  }
}

export default UserDetail;
