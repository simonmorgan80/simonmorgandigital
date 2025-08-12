import Hero from '@/app/ui/hero';
import Project from '@/app/ui/project';
import ContactCard from '@/app/ui/contact-card';

const projects = [
    {
        name: 'VIPA Digital',
        url: 'https://vipadigital.com',
        date: 'June 2025 - July 2025',
        content: '<p>Working directly with client to redevelop website based on updated brand/redesign.  Moved to Wordpress CMS built using ACF blocks and <a href="https://vite.dev/" target="_blank">Vite</a> Front end tooling</p>',
        subprojects: [
            'https://vipadigital.com'
        ]
    },
    {
        name: 'Bladonmore',
        url: '',
        content: '<p>Contract working for <a href="https://www.bladonmore.com" target="_blank" rel="noreferrer noopener">Bladonmore.com</a></p><p>Development of custom Wordpress builds using Advanced Custom Fields,  HTML, CSS, Javascript, Webpack & Gulp</p>',
        date: 'Oct 2022 - June 2025 <br>June 2021 - Jan 2022',
        subprojects: [
            'https://www.ritcap.com/',
            'https://www.arapartners.com/',
            'https://www.royaltypharma.com/',
            'https://www.apaxglobalalpha.com/',
            'https://www.palladiumequity.com/',
            'https://www.stonepeak.com/',
            'https://www.bladonmore.com',
            'https://www.arrowfletchings.net/',
            'https://www.aac-clyde.space/'
        ]
    },
    {
        name: 'Havas Lynx Faze',
        url: '',
        content: '<p>React JS development, Gatsby and Wordpress site support </p>',
        date: 'Jun 2022 - Sep 2022'
    },    
    {
        name: 'Pixeledeggs',
        url: '',
        content: '<p>Contract working for <a href="https://www.pixeledeggs.com" target="_blank" rel="noreferrer noopener">Pixeledeggs.com</a></p><p>Part of development team developing custom Wordpress builds using Advanced Custom Fields</p>',
        date: 'June 2020 - Dec 2020',
        subprojects: [
            'https://www.missingpeople.org.uk/',
            'https://www.immersivearcade.uk',
            'https://www.earthshotprize.org'
        ]
    },
    {
        name: 'xdefi.io',
        url: 'https://www.xdefi.io',
        content: '<p>Custom Wordpress build using Advanced Custom Fields,  HTML, CSS, Javascript, Webpack & Gulp</p><p>Note - site updated since my involvement</p>',
        date: 'May 2021'
    },
    {
        name: 'rafaelvalls.co.uk',
        url: 'https://www.rafaelvalls.co.uk/',
        content: '<p>Custom Wordpress build for Art Gallery using Advanced Custom Fields,  HTML, CSS, Javascript, Webpack & Gulp</p>',
        date: 'May 2020',
        subprojects: [
            'https://www.rafaelvalls.co.uk/'
        ]
    },    
    {
        name: 'living-group.com',
        url: '',
        content: '<p>Contract working for <a href="http://www.living-group.com" target="_blank" rel="noreferrer noopener">Living Group</a></p><p>Front End Component library development for Umbraco CMS sites. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. </p>',
        date: 'Multiple projects between 2017 - 2021',
        subprojects: [
            'https://www.burfordcapital.com/',
            'https://www.potterclarkson.com/',
            'https://www.traverssmith.com/',
            'https://www.harneys.com/',
            'https://www.kasowitz.com/'
        ]
    },
    {
        name: 'elselondon.com',
        url: '',
        content: '<p>Contracts working for <a href="http://www.elselondon.com" target="_blank" rel="noreferrer noopener">Elselondon</a></p><p>Wordpress Build + Front End Component library development. Wordpress, HTML, CSS, Javascript, Fractal.js, Webpack, Gulp.</p>',
        date: 'Multiple projects between 2018 - 2021',
        subprojects: [
            'https://www.elselondon.com/',
            'https://www.englandgolf.org/'
        ]
    },
    {
        name: 'theteam.co.uk',
        url: '',
        content: '<p>Contract working for <a href="http://www.theteam.co.uk" target="_blank" rel="noreferrer noopener">The Team</a></p><p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp plus Custom Wordpress builds</p>',
        date: 'Multiple projects between 2018 - 2022',
        subprojects: [
            'https://www.theteam.co.uk',
            'https://www.nsandi.com',
            'https://www.nsandi-corporate.com/',
        ]
    },
];

export default function Portfolio() {
    return (
        <div className="">
            <Hero title="Portfolio">
                <p>A selection of recent work</p>
            </Hero>
            <div className="container mx-auto py-10 px-4">
                <div className="grid lg:grid-cols-12 gap-4 lg:gap-8">
                    <div className="col-span-8">
                        {projects.map((project, index) => {
                            return (
                                <div key={index}>
                                    <Project project={project} />
                                </div>
                            )
                        })}                        
                    </div>
                    <div className="col-span-4">
                        <ContactCard />
                    </div>
                </div>
            </div>
        </div>
    );
}