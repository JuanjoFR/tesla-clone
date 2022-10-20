async function fetchAll() {
  const response = await fetch("http://localhost:3000/api/featured-sections")

  if (!response.ok) {
    throw new Error("Network response was not ok")
  }

  return response.json()
}

export default fetchAll