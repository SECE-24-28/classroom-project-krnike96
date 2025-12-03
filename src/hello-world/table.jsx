import { TableContainer } from './table-style';

const users = [
  { id: 1, name: "Itachi", mobile: 789632145 },
  { id: 2, name: "Kisame", mobile: 987412365 },
  { id: 3, name: "Deidara", mobile: 555123456 },
  { id: 4, name: "Sasori", mobile: 555987654 },
];

export default function UserTable() {
  return (
    <TableContainer>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Akatsuki Members
      </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}