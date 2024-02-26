import Grid from './Grid'
import Layout from './Layout'
import Timeline from './Timeline'
const BodySwitch = (param: number) => {
  switch (param) {
    case 0:
      return <Timeline todo={'bar'} />
    case 1:
      return <Grid></Grid>
    default:
      return <div>404 Page Not Found</div>
  }
}
function App() {
  const body = 1
  return (
    <div className="relative overflow-hidden bg-white">
      <Layout>{BodySwitch(body)}</Layout>
    </div>
  )
}

export default App
