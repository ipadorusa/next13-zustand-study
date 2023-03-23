import { useCallback, useState } from 'react'

export default function BlogList() {
  const [userData, setUserData] = useState([])
  const getUserList = useCallback(() => {
    fetch('/users')
      .then((res) => res.json())
      .then(setUserData)
  }, [])
  if (userData.length > 0)
    return (
      <div>
        <ul>
          {userData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    )
  return (
    <button type="button" onClick={getUserList}>
      유저 목록 불러오기
    </button>
  )
}
