import React from 'react'

const SideNav = () => {
    const recentChats = ['Greeting', 'Project ideas', 'React help', 'Quick notes']

    return (
        <aside className='w-64 shrink-0 border-r border-zinc-800 bg-zinc-900/80 px-4 py-6'>
            <button className='w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-left text-sm font-medium text-zinc-100 transition hover:bg-zinc-700'>
                + New Chat
            </button>

            <div className='mt-8'>
                <p className='mb-3 px-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500'>
                    Recent
                </p>

                <ul className='space-y-2'>
                    {recentChats.map((chat) => (
                        <li key={chat}>
                            <button className='w-full rounded-md px-3 py-2 text-left text-sm text-zinc-300 transition hover:bg-zinc-800 hover:text-white'>
                                {chat}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}
export default SideNav
