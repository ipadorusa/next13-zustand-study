export default function BlogList({ data }) {
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.userId}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
