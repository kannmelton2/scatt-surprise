import React from 'react';
import { Link } from 'react-router-dom';

import './SingleScat.scss';
import scatsData from '../../../helpers/data/scatsData';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const { scatId } = this.props.match.params;
    scatsData.getSingleScat(scatId)
      .then((response) => this.setState({ scat: response.data }))
      .catch((err) => console.error('unable to get single scat', err));
  }

  removeScat = () => {
    const { scatId } = this.props.match.params;
    scatsData.deleteScat(scatId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('could not delete scat: ', err));
  }

  render() {
    const { scat } = this.state;
    const { scatId } = this.props.match.params;
    const editLink = `edit/${scatId}`;

    return (
      <div className="SingleScat col-12 p-5" style={{ backgroundColor: scat.color }}>
        <h1>{scat.location}</h1>
        <p>Color: {scat.color}</p>
        <p>Size: {scat.size}</p>
        <p>Temperature: {scat.temperature}</p>
        <p>Viscosity: {scat.viscosity}</p>
        <p>Location: {scat.location}</p>
        <p>Notes: {scat.notes}</p>
        <p>Was it Fulfilling? {scat.wasFulfilling ? 'Yes' : 'No'}</p>
        <button className="btn btn-danger m-1" onClick={this.removeScat}><i className="far fa-trash-alt"></i></button>
        <Link className="btn btn-warning m-1" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
      </div>
    );
  }
}

export default SingleScat;
