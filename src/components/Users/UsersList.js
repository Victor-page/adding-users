import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  const mapArrayOfUsersToArrayOfJSXElement = (user) => (
    <li key={user.id}>
      {user.name} ({user.age} years old.)
    </li>
  );

  return (
    <Card className={classes.users}>
      <ul>{props.users.map(mapArrayOfUsersToArrayOfJSXElement)}</ul>
    </Card>
  );
};

export default UsersList;
