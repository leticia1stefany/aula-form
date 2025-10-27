

export function Consult() {
return (
    <div>
    <h1 className="text-3xl text-gray-800 mb-4"> Listar cadastros </h1>
        <form className="space-y-2">
            <input
                placeholder='Digite seu nome'
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
        </form>
    </div>
);
}