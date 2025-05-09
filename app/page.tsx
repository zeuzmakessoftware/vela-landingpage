import Image from 'next/image'

export default function Home() {
  const carouselImages = [
    '/c1.png',
    '/c2.png',
    '/c3.png',
    '/c4.png',
  ]
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <header className="flex items-center justify-between px-8 py-6">
        <Image src="/Velalogo.svg" alt="Vela Logo" width={69} height={69} />
        <nav>
          <ul className="flex space-x-8 text-gray-700">
            <li><a href="#" className="hover:text-gray-900">Home</a></li>
            <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
            <li><a href="#about" className="hover:text-gray-900">About us</a></li>
            <li><a href="#team" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
        <button className="bg-blue-400 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-500">Book our free demo</button>
      </header>
      <main>
        <section className="text-center px-6 pt-20 pb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Build high-impact SEO pages at scale — no code, no dev team, <span className="text-blue-400">no hassle</span>.
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            Customize templates, connect your data, and publish thousands of SEO-optimized pages in minutes. Enjoy built-in internal linking, dynamic content generation, and seamless scalability designed to help your site grow fast and rank higher.
          </p>
          <button className="bg-blue-400 text-white px-6 py-3 rounded-lg  cursor-pointer hover:bg-blue-500">Book our free demo</button>
        </section>
        <section className="relative overflow-hidden px-6 py-8">
          <div className="carousel-container">
            <div className="carousel-track">
              {/* First set of images */}
              {carouselImages.map((src, i) => (
                <div key={`first-${i}`} className="carousel-item rounded-lg overflow-hidden border-2 border-dashed border-blue-300 p-3">
                  <div className="h-[200px] w-[300px]">
                    <Image 
                      src={src} 
                      width={300} 
                      height={200} 
                      alt={`Carousel ${i + 1}`}
                      className="h-full w-full object-cover" 
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set of images for seamless looping */}
              {carouselImages.map((src, i) => (
                <div key={`second-${i}`} className="carousel-item rounded-lg overflow-hidden border-2 border-dashed border-blue-300 p-3">
                  <div className="h-[200px] w-[300px]">
                    <Image 
                      src={src} 
                      width={300} 
                      height={200} 
                      alt={`Carousel ${i + 1}`}
                      className="h-full w-full object-cover" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="pricing" className="px-6 py-16 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Choose the Plan That Fits Your <span className="text-blue-400">Workflow</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-600 mt-4">
              Whether you&apos;re just getting started or ready to launch thousands of pages, our flexible pricing grows with your needs. No hidden fees—just the features you need, when you need them.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Starter</h3>
              <p className="text-4xl font-bold mb-2">$350<span className="text-lg font-normal">/month</span></p>
              <p className="text-gray-600 mb-6">Great for solo marketers and early-stage projects testing programmatic SEO.</p>
              <button className="w-full bg-blue-400 text-white py-2 rounded-lg mb-6 cursor-pointer hover:bg-blue-500">Get started</button>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Generate up to 1,000 pages</li>
                <li>Connect a single data source</li>
                <li>Drag-and-drop template builder</li>
                <li>Set essential SEO elements</li>
                <li>Responsive email support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-2 border-blue-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white text-xs uppercase px-3 py-1 rounded-full">Most Popular</div>
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <p className="text-4xl font-bold mb-2">$650<span className="text-lg font-normal">/month</span></p>
              <p className="text-gray-600 mb-6">For teams ready to scale traffic with powerful customization and automation.</p>
              <button className="w-full bg-blue-400 text-white py-2 rounded-lg mb-6 cursor-pointer hover:bg-blue-500">Get started</button>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Publish up to 10,000 pages</li>
                <li>Large datasets across sources</li>
                <li>Dynamic content mapping</li>
                <li>Advanced SEO settings</li>
                <li>Internal linking automation</li>
                <li>Priority live chat support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Enterprise Solutions</h3>
              <p className="text-4xl font-bold mb-2">$1,300<span className="text-lg font-normal">/month</span></p>
              <p className="text-gray-600 mb-6">For teams ready to scale traffic with powerful customization and automation.</p>
              <button className="w-full bg-blue-400 text-white py-2 rounded-lg mb-6 cursor-pointer hover:bg-blue-500">Get started</button>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Unlimited pages</li>
                <li>Flexible data integrations</li>
                <li>API access & webhooks</li>
                <li>Team roles & permissions</li>
                <li>Dedicated success manager</li>
                <li>SLA-backed support</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="about" className="relative px-6 py-20">
          <span className="absolute text-blue-100 text-[200px] font-serif leading-none select-none" style={{ top: '20px', left: '20px' }}>V</span>
          <div className="max-w-3xl mx-auto text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start with <span className="text-blue-400">Why Vela</span></h2>
            <p className="text-gray-600 mb-6">
              We, part of Demian, believe organic growth shouldn&apos;t require a big engineering team. That&apos;s why we built a platform that makes programmatic SEO simple, fast, and accessible to anyone with a vision and some data.
            </p>
            <p className="text-gray-600">
              Our no-code tool turns structured data into thousands of SEO-ready pages, with everything from templates to publishing handled in one place.
            </p>
            <p className="text-gray-600 mt-4">
              Whether you&apos;re a solo marketer or scaling a startup, we remove the bottlenecks—so you can focus on strategy while we handle automation and optimization.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
