import Conversations from "./Conversations.js"
import LogoutBtn from "./LogoutBtn.js"
import SearchInput from "./SearchInput.js"

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput/>
      <div className="divider px-3"></div>
      <Conversations/>
      <LogoutBtn/>
    </div>
  )
}

export default Sidebar


// STARTER CODE FOR THIS FILE

// import Conversations from "./Conversations.jsx"
// import LogoutBtn from "./LogoutBtn.jsx"
// import SearchInput from "./SearchInput.jsx"

// const Sidebar = () => {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col">
//       <SearchInput/>
//       <div className="divider px-3"></div>
//       <Conversations/>
//       <LogoutBtn/>
//     </div>
//   )
// }

// export default Sidebar
