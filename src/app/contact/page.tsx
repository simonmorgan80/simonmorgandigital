import Hero from '@/app/ui/hero';
import ContactCard from '@/app/ui/contact-card';

export default function Contact() {
  return (
    <div className="">
      <Hero title="Contact">
        <p>Get in touch for more information or to see how I can help</p>
      </Hero>

      <div className="container mx-auto py-10 px-4">
          <div className="grid lg:grid-cols-12 gap-4">
            <div className="col-span-8">  
              <ContactCard />  
            </div>
          </div>
        </div>
    </div>
  );
}