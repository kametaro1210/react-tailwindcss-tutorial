
function App() {


  return (

    // <div className="bg-blue-300 py-5">
    //   <p className="text-xl font-bold text-center text-green-500">
    //     Hello World
    //   </p>
    // </div>

    // <div className="bg-slate-50 min-h-screen text-slate-900">
    //   Hello world
    // </div>

    <div>
      {/* flex */}
      <div className="flex items-center justify-between h-12 bg-slate-950 text-white px-5">
        <div className="font-bold">Logo</div>
        <div className="flex gap-4">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
      
      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white p-6 gap-6 text-center font-semibold text-2xl sm:text-sm">
        <div className="bg-slate-500 hover:bg-slate-700  p-4 rounded-full hover:scale-110 transition-all duration-500">Feature 1</div>
        <div className="bg-slate-500 hover:bg-slate-700  p-4 rounded-full hover:scale-110">Feature 2</div>
        <div className="bg-slate-500 hover:bg-slate-700  p-4 rounded-full hover:scale-110">Feature 3</div>
        <div className="bg-slate-500 hover:bg-slate-700  p-4 rounded-full hover:scale-110">Feature 4</div>
        <div className="bg-slate-500 hover:bg-slate-700  p-4 rounded-full hover:scale-110">Feature 5</div>
        <div className="bg-slate-500 hover:bg-slate-700  p-4 rounded-full hover:scale-110">Feature 6</div>
      </div>
    </div>
    




  )
}

export default App
