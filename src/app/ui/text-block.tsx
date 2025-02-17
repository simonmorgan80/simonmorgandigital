export default function textBlock( { title, children } : { title? : string, children?: React.ReactNode; } ) {
    return (
        <div className="prose">
            <div className="container mx-auto">
                {title ? <h1 className="text-2xl lg:text-4xl font-medium mb-6">{title}</h1> : null }
                {children}
            </div>
        </div>
    )
}