import { Main, Navbar, Sidebar } from "./components";

export default function App() {
  return (
    <div className="flex w-full">
      <div className="w-[5vw] h-screen sticky top-0">
        <Sidebar />
      </div>
      
      <div className="w-[95vw] sticky top-0">
        <Navbar />
        <Main />
      </div>
    </div>
  )
}