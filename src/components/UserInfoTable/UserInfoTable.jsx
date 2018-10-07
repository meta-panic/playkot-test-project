import React from 'react';
import { Table } from 'reactstrap';

import styles from './UserInfoTable.css';

const UserInfoTable = (props) => {
  const { info: usersInfo } = props;
  console.log('info - ', props)
  return (
    <div className='container-fluid'>
      <Table hover responsive size="sm">
        <thead>
          <tr>
            {
              props.colomnNames.reduce((acc, name) => {
                acc.push(<th key={`${name}`}>{name}</th>);
                return acc;
              }, [])
            }
          </tr>
        </thead>
        <tbody>
          {
            usersInfo ? (
              usersInfo.data.reduce((acc, user, i) => {
                acc.push(
                  <tr
                    key={user.id}
                    onClick={() => props.getActiveRow(i)}
                  >
                    <td>{ i + 1 }</td>
                    <td>{user.id}</td>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                  </tr>,
                );
                return acc;
              }, [])) : null
          }
        </tbody>
      </Table>
    </div>
  );
};

export default UserInfoTable;