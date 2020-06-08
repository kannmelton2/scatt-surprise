import React from 'react';
import { Link } from 'react-router-dom';

import scatShape from '../../../helpers/propz/scatShape';
import './ScatCard.scss';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatShape,
  }

  render() {
    const { scat } = this.props;
    const singleLink = `scat/${scat.id}`;
    const editLink = `edit/${scat.id}`;
    return (
      <div className="ScatCard col-3">
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">{scat.location}</h5>
            <Link className="btn btn-dark m-1" to={singleLink}><i class="fas fa-binoculars"></i></Link>
            <Link className="btn btn-warning m-1" to={editLink}><i class="fas fa-pencil-alt"></i></Link>
            <p className="card-text">{scat.notes}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;
