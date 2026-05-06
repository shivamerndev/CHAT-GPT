import React from 'react'

const InputBar = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        let form = new FormData(e.target)
        let { input } = Object.fromEntries(form)
        console.log(input)
        e.target.reset()
    }

    return (
        <div className='w-full border-t-2 border-zinc-700 p-4'>
            <form onSubmit={handleSubmit} className='flex gap-2 w-full'>
                <input name='input' className=' w-full border border-white px-8 py-3 rounded-full text-white font-semibold' type="text" placeholder='Ask Anything...' />
            </form>
        </div>
    )
}

export default InputBar