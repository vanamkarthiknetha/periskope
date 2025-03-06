import React from 'react'

const ChatBox = () => {
    return (
        <div className="group mb-0.5 flex shrink-0 items-start gap-x-2 rounded px-2 pb-1 pt-2 max-lg:mb-2 max-lg:px-4 cursor-pointer hover:bg-gray-200/50  bg-white">
            <div className="flex flex-col items-center justify-center gap-y-1 py-1">
                <figure className="flex h-10 w-10 items-center shrink-0 justify-center rounded-full border" style={{ backgroundColor: "rgb(209, 213, 219)" }}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="text-gray-50" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </figure>
            </div>
            <div className="flex flex-1 flex-col gap-y-0.5 overflow-hidden ">
                <div className="flex items-center gap-x-0.5">
                    <h4 className="line-clamp-2 flex-1 truncate text-ellipsis whitespace-normal text-[15px] font-semibold lg:text-xs13">Name</h4>
                </div>
            </div>

        </div>
    )
}

export default ChatBox
