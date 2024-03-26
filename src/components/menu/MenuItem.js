
export default function MenuItem(){
    return(
        <div className="bg-blue-300 p-4 rounded-lg text-center group hover:bg-white">
            <div className="text-center"> 
            <img src="/IMG_6006-scaled.jpg" className="max-h-auto max-h-24 block mx-auto " alt="cusine" />
            </div>
        <h4 className="my-2 text-xl font-semibold">Sudanese Food</h4>
        <p className="text-gray-700 text-sm"> Most popuar Sudanese </p>
        <button className=" mt-3 bg-primary text-white rounded-full px-6 py-2">Add Cart 10$</button>
    </div>
    );
}