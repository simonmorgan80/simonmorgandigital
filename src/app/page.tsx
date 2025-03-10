import ContactCard from '@/app/ui/contact-card';
import Hero from '@/app/ui/hero';
import TextBlock from '@/app/ui/text-block';

export default function Home() {
  return (
    <div className="">
      <Hero title="Website Development">
        <p>Available for contracts starting Feb 2025</p>
      </Hero>

      <div className="container mx-auto py-10 px-4">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-8">
          <div className="col-span-8">

            <TextBlock title=""> 
              <p>Freelance front-end web developer and technical lead with over 17 years agency experience. I specialise in creating responsive, accessible and high performing front end user interfaces using HTML, CSS and Javascript.</p>                          
              <p>Experience of developing and working with Design Systems & Component libraries using tools such as <a href="https://storybook.js.org/" target="_blank" rel="noreferrer">Storybook.js</a> and <a href="https://fractal.build/" target="_blank" rel="noreferrer">Fractal.build</a></p>
              <p>Extensive experience of developing large custom component based CMS websites using Wordpress and Advanced Custom Fields including 3rd party API integration. Currently increasing experience/knowledge using Headless CMS platforms such as <a href="https://prismic.io/" target="_blank" rel="noopener noreferrer">Prismic</a> and <a href="https://www.sanity.io/" target="_blank" rel="noopener noreferrer">Sanity</a></p>
              <p>Javascript knowledge ranging from vanilla js, web components (custom elements) to React including knowledge of Next.js, Svelte, Gatsby.</p> 
              <p>CSS knowledge from native to SASS, CSS Modules to other frameworks such as Tailwind.</p>
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