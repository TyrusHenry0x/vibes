
export const Vibes = (params) => {
  return (
    <div className="post">
      <h1><b>{params.vibe.fields.Name}</b></h1>
      <p>{params.vibe.fields.text}</p>
    </div>
  )
}

export default Vibes

// (This is the contents of each post)