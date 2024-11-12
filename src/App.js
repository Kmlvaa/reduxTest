import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, decrementByAmount, increment, incrementByAmount } from './redux/Slices/counterSlice';
import { useEffect } from 'react';
import { getAllUsers, getUserById } from './redux/Slices/userSlice';
import { darkMode, lightMode } from './redux/Slices/themeSlice';
import Post from './_components/Posts'

function App() {

  // const count = useSelector((state) => state.counterx.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  const usersList = useSelector((state) => state.user)

  const theme = useSelector((state) => state.theme.mode)

  return (
    <div className={theme == 'light' ? '' : 'darkMode'}>
      {/* <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span style={{ margin: 20 }}>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(10))}>incrementByAmount</button>
        <button onClick={() => dispatch(decrementByAmount(10))}>decrementByAmount</button>
      </div> */}
      <div style={{marginLeft: 500}}>
        <button onClick={() => {
          dispatch(lightMode())
          localStorage.setItem('themex', 'light')
        }}>light</button>
        <span> / </span>
        <button onClick={() => {
          dispatch(darkMode())
          localStorage.setItem('themex', 'dark')
        }}>dark</button>
      </div>
      <br />
      <Post />
      <br />
      <br />
      <div>
        {usersList.loading ? <p>Loading...</p> : <></>}
        {usersList.error ? <p>{usersList.error}</p> : <></>}
      </div>
      <div>
        <button onClick={() => {dispatch(getUserById(3))}}>GetUserByID</button>
        <div>
          {usersList.userById.name}
        </div>
      </div>
      <br />
      <br />
      <div className='App'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fullname</th>
              <th>Username</th>
              <th>E-mail</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
            {usersList.users?.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
