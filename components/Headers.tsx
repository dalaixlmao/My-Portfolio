export default function Headers({text}:{text:string}){
    return <div className="flex flex-row w-full items-center w-full">
    <div className="text-lg w-auto whitespace-nowrap pr-3 font-semibold text-violet-100 text-left">
      {text}
    </div>
    <div className="h-[1px] w-full bg-violet-500/30 rounded-full"></div>
  </div>
}