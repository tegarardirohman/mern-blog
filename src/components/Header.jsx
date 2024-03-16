import { Navbar, TextInput, Button, NavbarCollapse } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'; 
import { FaMoon } from 'react-icons/fa';

export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar fluid rounded className='border-b-2 px-5'>
        <Link to="/">
            <Button className='text-3xl text-bold text-white' gradientDuoTone='greenToBlue'>
                Tegar's Blog
            </Button>
        </Link>

        <form>
            <TextInput 
                type='text' 
                placeholder='Search...' 
                rightIcon={ AiOutlineSearch }
                className="hidden lg:inline"    
            />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
            <AiOutlineSearch />
        </Button>

        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10' color='gray' pill>
                <FaMoon />
            </Button>

            <Link to="/sign-in"> 
                <Button className='h-10' pill gradientDuoTone='purpleToBlue'>Sign In</Button>
            </Link>
            <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
            <Navbar.Link active={path === "/"} as={'div'}>
                <Link to="/"> Home </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/about"} as={'div'}>
                <Link to="/about"> About </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/project"} as={'div'}>
                <Link to="/project"> Project </Link>
            </Navbar.Link>
        </Navbar.Collapse>

    </Navbar>
  )
}
