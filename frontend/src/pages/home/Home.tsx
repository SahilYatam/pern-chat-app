
import MessageContainer from "../../components/messages/MessageContainer.js"
import Sidebar from "../../components/sidebar/Sidebar.js"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[500px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
