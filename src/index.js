import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

var fromPerson = {
  name: "Mr. Sender",
  address: {
    street: "123 Faker St.",
    city: "Boston",
    post_code: "MA 02118"
  }
};

var toPerson = {
  name: "Mrs. Receiver",
  address: {
    street: "1234 Faker2 St.",
    city: "San Francisco",
    post_code: "CA 94101"
  }
};

const Stamp = () => {
  var url = 'https://www.gravatar.com/avatar/xyz';

  return (
    <div>
      <img
        src={ url }
        className="stamp-img"
        alt="stamp"
      />
    </div>
  );
};

function AddressLabel({ person }) {
  const { name, address } = person;

  return (
    <div>
      <div className="name">{ name }</div>
      <div className="address">
        <div>{ address.street }</div>
        <div>{ address.city }, { address.post_code }</div>
      </div>
    </div>
  );
};

function Envelope({ fromPerson, toPerson }) {
  return (
    <div className="envelope">
      <div className="from-person">
        <AddressLabel
          person={ fromPerson }
        />
      </div>
      <div className="to-person">
        <AddressLabel
          person={ toPerson }
        />
      </div>
      <div className="stamp">
        <Stamp className="stamp" />
      </div>
    </div>
  );
};

AddressLabel.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      post_code: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

Envelope.propTypes = {
  fromPerson: PropTypes.object.isRequired,
  toPerson: PropTypes.object.isRequired
};

ReactDOM.render(
  <Envelope
    fromPerson={ fromPerson }
    toPerson={ toPerson }
  />,
  document.getElementById('root')
);
