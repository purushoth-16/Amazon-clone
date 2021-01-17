import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import {useStateValue} from './StateProvider'
import {auth} from './firebase'
function Header() {
    const [{basket,user} , dispatch]=useStateValue()
    const handleAuthentication=()=>{
        if(user){
            auth.signOut()
        }
    }
    return (
        <div className='header'>
        <Link to='/'>
            <img className='header__logo' src='https://i2.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png?resize=600%2C171&ssl=1'/>
            </Link> 
        <div className='header__search'>
            <input className='header__searchInput'
            type='text'/>
            <SearchIcon
            className='header__searchIcon'/>
        </div>
        <div className='header__nav'>
        <Link to={!user && './login'}>
            <div onClick={handleAuthentication} className='header__option'>
                <span
                className='header__optonLineOne'>Hello {!user ?'Guest':user.email}
                </span>
                <span
                className='header__optionLineTwo'>
                    {user? 'Sign Out' :'Sign In'}
                </span>
            </div>
            </Link>
            <Link to='/orders'>
            <div className='header__option'>
            <span
                className='header__optonLineOne'>Returns
                </span>
                <span
                className='header__optionLineTwo'>
                Orders
                </span>
            </div>
            </Link>
            <div className='header__option'>
            <span
                className='header__optonLineOne'>Your
                </span>
                <span
                className='header__optionLineTwo'>
                    Prime
                </span>
            </div>
            <Link to='/checkout'>
            <div className='header__optionBasket'>
                <ShoppingCartIcon/>
                <span className='header__optionLineTwo 
                header__basketCount'>{basket?.length}</span>
            </div>
            </Link>
        </div>
        </div>
    )
}

export default Header
