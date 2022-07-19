import Image from "next/image";
import HeaderItem from "./HeaderItem";
import Link from "next/link";
import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon ,ViewListIcon, LogoutIcon} from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { Store } from "../utils/Store";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";


const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const {state,dispatch} = useContext(Store)
  const {userInfo} = state;
  const logoutClickHandler = ()=> {
    dispatch({type:"USER_LOGOUT"})
    Cookies.remove("userInfo")
    router.push("/")
  }

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <div onClick={() => setDropdownOpen(!dropdownOpen)}>
            <HeaderItem title="Movies" Icon={ViewListIcon} />
          </div>
          {dropdownOpen &&<div className="absolute text-lg inset-10 z-10 backdrop-blur-3xl mx-4 my-5 bg-slate-800	w-48 min-h-min">
            <ul >
              <li className="border border-solid  border-gray-900 px-4 py-2 hover:text-xl hover:bg-slate-700">
                <Link href="/discover/popular">
                  <a>
                    Popular Movies
                  </a>
                </Link>
              </li>
              <li className="border border-solid  border-gray-900 px-4 py-2 hover:text-xl hover:bg-slate-700">
                <Link href="/discover/latest">
                  <a>
                    Lastest movies
                  </a>
                </Link>
              </li>
              {userInfo && <li className="border border-solid  border-gray-900 px-4 py-2 hover:text-xl hover:bg-slate-700">
                <Link href="/discover/favourites">
                  <a>
                    Favorite Movies
                  </a>
                </Link>
              </li>}
              
            </ul>
          </div>}
          <Link href="/discover">
            <a>
               <HeaderItem title="HOME" Icon={HomeIcon} />
            </a>
          </Link>
          <Link href="/discover?genre=fetchTrending">
            <a >
              <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
            </a>
          </Link>
            {/* <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} /> */}
            {/* <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} /> */}
            <HeaderItem title="SEARCH" Icon={SearchIcon} />
            {userInfo?
            (
              <HeaderItem title={userInfo.name.split(" ")[0]} Icon={UserIcon} />
            ):(
              <Link href="/login">
                <a>
                  <HeaderItem title="ACCOUNT" Icon={UserIcon} />
                </a>
              </Link>
            )
            }
            {userInfo&& <div onClick={logoutClickHandler}>
              <HeaderItem title="LogOut" Icon={LogoutIcon} color="text-red-500"/>
            </div>
            }
            
        </div>
        

        <Image
        className="object-contin"
        src="/images/image.png"
        width={200}
        height={50}
        alt="movies-logo"
        /> 
        
    </header>
  )
}

export default dynamic(()=> Promise.resolve(Header),{ssr:false})