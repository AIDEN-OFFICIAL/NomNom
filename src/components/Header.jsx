
export const Header = () => {
  return (
      <div className="Header z-50 bg-white w-full fixed left-0 top-0 flex justify-between border-1 border-solid border-black m-1 shadow-xl ">
          <div className="logo-containier w-25 my-3 ml-5">
          <img src="../../public/NomNom_logo.png" className="" />
          </div>
          <div className="NavItems  flex " >
              <ul className="list  flex text-xl mt-2">
                  <li className="p-3 m-3">Home</li>
                  <li className="p-3 m-3">About</li>
                  <li className="p-3 m-3">Contact Us</li>
                  <li className="p-3 m-3">🛒</li>
              </ul>
          </div>
          
    </div>
  )
}
