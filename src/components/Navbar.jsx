
const Navbar = () => {
  return (
    <div className='h-[3.5rem] bg-blue-200'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand flex justify-between items-center text-center">
          <a href="/">MyApp</a>
            <ul className="flex justify-center gap-4 items-center list-none">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          <div className="navbar-actions flex gap-4">
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-secondary">Sign Up</button>
          </div>
          </div>
      </nav>
    </div>
  )
}

export default Navbar