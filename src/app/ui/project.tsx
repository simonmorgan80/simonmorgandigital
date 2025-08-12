import { createMarkup } from '@/app/lib/util';

type ProjectProps = {
    name: string,
    date?: string,
    content?: string,
    url?: string,
    subprojects?: string[]
}

export default function Project( { project } : { project : ProjectProps } ) {

    return (
        <article className="bg-slate-50 dark:bg-gray-800 ease-in-out mb-4 p-4 xl:mb-8 xl:p-8">

            {!project.url ? 
                <h2 className="text-xl font-medium" dangerouslySetInnerHTML={createMarkup(project.name)}></h2> : 
                <h2 className="text-xl font-medium">
                    <a href={project.url} target="_blank" rel="noreferrer noopener" className="project__link">{project.name}</a>
                </h2>
            }

            {project.date ? <div className="text-sm" dangerouslySetInnerHTML={createMarkup(project.date)} ></div> : null}

            {project.content ? <div className="prose mb-2 mt-4" dangerouslySetInnerHTML={createMarkup(project.content)} /> : null }

            {project.subprojects && 
                <ul>
                    {project.subprojects.map((link, index) => {
                        return (
                            <li key={index} className="mb-1">
                                <a href={link} target="_blank" className="text-blue-600 dark:text-white underline-offset-4 hover:underline">{link}</a>
                            </li>
                        )
                    })}
                </ul>
            }

        </article>
    )
}