export const Vibes = (props) => {

  return (
    <div className="post">
      <h1><b>{props.vibe.fields.Name}</b></h1>
      <p>{props.vibe.fields.text}</p>
    </div>
  )
}

export default Vibes