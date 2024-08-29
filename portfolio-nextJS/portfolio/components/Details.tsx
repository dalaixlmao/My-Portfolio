import NavButton from "./NavButton"
import Work from "./Works"

export default function Details(){
    return <div className="mt-12 flex w-full flex-col justify-center items-center overflow-y-auto">
    <div className="flex flex-col items-center md:items-start md:flex-row lg:w-3/5 md:w-4/5 h-full">
      <div className="hidden md:block lg:w-1/2 h-full mt-12 relative top-0">
        <NavButton text="About" />
        <NavButton text="Experience" />
        <NavButton text="Projects" />
      </div>
      <div className="w-11/12 flex flex-col items-center md:w-3/5 lg:w-1/2 h-full mt-12 z-10">
        <div
          className="h-screen w-full text-white mb-12"
        >
          <Work />
        </div>
      </div>
    </div>
  </div>
}