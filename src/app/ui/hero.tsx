export default function Hero( { title, children } : { title : string, children?: React.ReactNode; } ) {
    return (
        <div className="lg:min-h-[200px] bg-blue-600 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="text-1xl lg:text-2xl font-light">
                    {title ? <h1 className="text-3xl lg:text-5xl xl:text-6xl font-medium mb-4">{title}</h1> : null }
                    {children}
                </div>
            </div>
        </div>
    )
}