import React,{useRef, useEffect} from "react";

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const stickyHead =()=>{
    window.addEventListener('scroll', ()=> {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  useEffect(()=>{
    stickyHead()

    return window.removeEventListener('scroll', stickyHead)
  },[])
  
  const toggleMenu =()=>menuRef.current.classList.toggle('show_menu')

  const handleClick =(e)=>{
    e.preventDefault()

    const targeAtt = e.target.getAttribute('href')
    const location = document.querySelector(targeAtt).offsetTop

    window.scrollTo({
      top: location - 80,
      left: 0
    })
  }
  return (
    <div ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center ">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white font-[500] rounded-full flex items-center justify-center ">
              NA
            </span>

            <div className="leading-[20px] ">
              <h2 className="text-xl text-smallTextColor font-[700] ">
                {" "}
                Nana Awuku
              </h2>
              <p className="text-[14px] text-smallTextColor font-[500] ">
                {" "}
                Personal
              </p>
            </div>
          </div>
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a onClick={handleClick} className="text-gray-400 font-[600] " href="#about">
                  About
                </a>
              </li>
              <li>
                <a  onClick={handleClick} className="text-smallTextColor font-[600] " href="#services">
                  Services
                </a>
              </li>
              <li>
                <a  onClick={handleClick}
                  className="text-smallTextColor font-[600] "
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a  onClick={handleClick} className="text-smallTextColor font-[600] " href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4 ">
            <button className="flex items-center gap-2 text-smallTextColor fornt-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-700 ">
              <i className="ri-send-plane-line ">Let's Talk</i>
            </button>
            <span onClick={toggleMenu} className="text-2xl text-smallTextColor md:hidden ">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
