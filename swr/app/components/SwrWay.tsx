import useSWR from 'swr'

function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', )

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}