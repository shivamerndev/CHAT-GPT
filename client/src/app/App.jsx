import useAuth from '../hooks/useAuth';
import useChat from '../hooks/useChat';

const App = () => {
  
  const { logout } = useAuth();
  const { handleGetAiRes } = useChat();

  return (
    <div className='bg-zinc-800 text-white h-screen w-full flex justify-between'>
      <SideNav />
      <div>
        <h1>Hello My name is shivam kumar.</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ea fugit fuga, quod praesentium vitae repudiandae eos ut, laboriosam nostrum facere quia voluptatibus. Explicabo at cumque commodi quas doloribus ducimus.</p>
        <button onClick={logout} className="mt-4 px-4 py-2 bg-red-600 rounded">Logout</button>
      </div>
    </div>
  )
}

export default App