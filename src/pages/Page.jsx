
import { Outlet } from 'react-router-dom'
import Tab from '../components/Tab'

function Page() {
  return (
    <div>
      <Tab/>
      <Outlet/>
    </div>
  )
}

export default Page
