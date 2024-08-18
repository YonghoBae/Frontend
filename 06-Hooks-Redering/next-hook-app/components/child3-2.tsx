const Child32 = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="bg-red-500 h-[400px]">
            Child32
            <div>{children}</div>
        </div>
    );
}

export default Child32;