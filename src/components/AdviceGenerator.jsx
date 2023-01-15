const AdviceGenerator = ({ body }) => {
    const onClickButton = async () => {
        const response = await getAdvice()
        setResponse(response)
    } 
    return (
        <div className="text-center ">
            <label className=" font-semibold mb-4 bg-gray-200 p-4 rounded-md " >"{response}"</label>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full" onClick={() => onClickButton()}>click button</button>
        </div>
    )
}
export default AdviceGenerator
