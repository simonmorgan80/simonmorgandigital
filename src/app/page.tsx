import ContactCard from '@/app/ui/contact-card';
import Hero from '@/app/ui/hero';
import TextBlock from '@/app/ui/text-block';

export default function Home() {
    return (
        <div className="">
            <Hero title="Website Development">
                <p>Available for contracts starting August 2025</p>
            </Hero>

            <div className="container mx-auto py-10 px-4">
                <div className="grid lg:grid-cols-12 gap-4 lg:gap-8">
                    <div className="col-span-8">
                        <TextBlock title="">
                            <p>
                                Senior web developer and technical lead with
                                over 17 years agency experience. I specialise in
                                creating responsive, accessible and high
                                performing front end user interfaces, component
                                libraries and CMS websites.
                            </p>
                            <h2 className="text-1xl lg:text-2xl font-medium mb-5">
                                Skills
                            </h2>
                            <ul>
                                <li className="mb-3">
                                    <strong>Javascript</strong> - Vanilla,
                                    React, Next, Typescript
                                </li>
                                <li className="mb-3">
                                    <strong>CSS</strong> - SASS, BEM, Tailwind,
                                    Modules
                                </li>
                                <li className="mb-3">
                                    <strong>Backend</strong> - PHP, mySQL, Node,
                                    Express
                                </li>
                                <li className="mb-3">
                                    <strong>CMS</strong> - Wordpress + knowledge
                                    of Headless systems such as Sanity, Prismic
                                    and Contentful
                                </li>
                                <li className="mb-3">
                                    <strong>SSG</strong> - Next, Gatsby, Astro,
                                    11ty
                                </li>
                                <li className="mb-3">
                                    <strong>Design systems</strong> -
                                    Storybook.js, Fractal.build
                                </li>
                                <li>
                                    <strong>Tools</strong> - GIT, Gulp, Webpack,
                                    Vite, Npm, Kinsta, AWS, Bitbucket CI
                                    Pipelines
                                </li>
                            </ul>
                        </TextBlock>
                    </div>
                    <div className="col-span-4">
                        <ContactCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
