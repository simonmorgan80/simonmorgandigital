export default function ContactCard() {

    return (
        <article className="bg-slate-50 hover:bg-slate-100 ease-in-out mb-4 p-4 xl:mb-8 xl:p-8 w-full">
            <p className="text-xl">Please get in touch for more information or if you&apos;d like to discuss upcoming projects you need support with.</p>
            <ul className="mt-8">
                <li className="mb-4">
                    <a href="https://www.linkedin.com/in/simon-morgan-5b842414/" className="flex flex-row gap-2 items-center  underline-offset-4 hover:underline" rel="noopener noreferrer">
                        <svg className="icon fill-blue-600 flex-shrink-0"  viewBox="0 0 32 32" height="24" width="24">
                            <path d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"></path>
                            <path d="M2 12h6v18h-6v-18z"></path>
                            <path d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
                        </svg>
                        Linkedin
                    </a>
                </li>
                <li className="mb-4">
                    <a href="https://github.com/simonmorgan80" className="flex flex-row gap-2 items-center underline-offset-4 hover:underline" rel="noopener noreferrer">
                        <svg className="icon fill-blue-600 flex-shrink-0"  viewBox="0 0 32 32" height="24" width="24">
                            <path d="M31.397 14.575l-13.972-13.971c-0.804-0.805-2.109-0.805-2.915 0l-3.246 3.246 2.443 2.443c0.392-0.187 0.83-0.293 1.293-0.293 1.657 0 3 1.343 3 3 0 0.463-0.105 0.902-0.293 1.293l3.999 3.999c0.392-0.187 0.83-0.293 1.293-0.293 1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3c0-0.463 0.105-0.902 0.293-1.293l-3.999-3.999c-0.095 0.046-0.193 0.086-0.293 0.121v8.343c1.165 0.412 2 1.522 2 2.829 0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.306 0.835-2.417 2-2.829v-8.343c-1.165-0.412-2-1.522-2-2.829 0-0.463 0.105-0.902 0.293-1.293l-2.443-2.443-9.247 9.246c-0.805 0.806-0.805 2.11 0 2.915l13.973 13.971c0.804 0.805 2.109 0.805 2.915 0l13.906-13.906c0.805-0.805 0.805-2.111-0-2.915z"></path>
                        </svg>
                        Github
                    </a>
                </li>
                <li className="mb-4">
                    <a href="mailto:simon.morgan80@gmail.com" className="flex flex-row gap-2 items-center  underline-offset-4 hover:underline" rel="noopener noreferrer">
                        <svg className="icon fill-blue-600 flex-shrink-0" viewBox="0 0 32 32" height="24" width="24">
                            <path d="M16 20q1.625 0 2.813-1.188t1.188-2.813-1.188-2.813-2.813-1.188-2.813 1.188-1.188 2.813 1.188 2.813 2.813 1.188zM16 2.688q5.5 0 9.406 3.906t3.906 9.406v1.938q0 2-1.344 3.375t-3.281 1.375q-2.438 0-3.938-2-2 2-4.75 2t-4.719-1.969-1.969-4.719 1.969-4.719 4.719-1.969 4.719 1.969 1.969 4.719v1.938q0 0.813 0.594 1.438t1.406 0.625 1.406-0.625 0.594-1.438v-1.938q0-4.375-3.156-7.531t-7.531-3.156-7.531 3.156-3.156 7.531 3.156 7.531 7.531 3.156h6.688v2.625h-6.688q-5.5 0-9.406-3.906t-3.906-9.406 3.906-9.406 9.406-3.906z"></path>
                        </svg>
                        Email
                    </a>
                </li>
            </ul>
            </article>
    )
}