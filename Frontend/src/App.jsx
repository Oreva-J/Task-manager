import TaskList from "./coponents/TaskList";

export default function App() {
  return (
    <div className="h-screen bg-blue-400 flex items-center justify-center ">
      <div className="h-1/2 w-[70%] bg-white">
        <TaskList />
      </div>
      
    </div>
  )
}