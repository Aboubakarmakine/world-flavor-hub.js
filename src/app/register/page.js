
export default function RegisterPage() {
    return (
        <section className="mt-8">
            <h1 className="text-primary text-2xl mb-4">Register</h1>

            <form onSubmit={handleClientScriptLoad}>
                <input type="email" placeholder="email" value={email} onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)}/>
                <button type="submit">Register</button>
                <div className="my-4">
                    or login with provider
                </div>
                <button className="flex gap-4 justify-between">
                    <img src={'/google.png'} alt={''}width={24} height={32} /> 
                    Login with Google
                </button>
            </form>
        </section>
    );
}
