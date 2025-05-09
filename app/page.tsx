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
            <li className="flex flex-col items-center">
              <a href="#" className="text-blue-400 hover:text-blue-500">Home</a>
              <div className="h-0.5 w-[145%] bg-blue-400 mt-1"></div>
            </li>
            <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
            <li><a href="#about" className="hover:text-gray-900">About us</a></li>
            <li><a href="#team" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
        <button className="bg-blue-400 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-500">Book our free demo</button>
      </header>
      <main>
        <section className="text-center px-6 pt-20 pb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 max-w-[90%] mx-auto">
            Build high-impact SEO pages at scale — no code, no dev team, <span className="text-blue-400">no hassle</span>.
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-black mb-8 font-medium">
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
        <Image src="/Line Break.svg" alt="Line Break" width={100} height={100} className="w-[60%] mx-auto py-6" />
        <section id="pricing" className="px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold max-w-[70%] mx-auto">
              Choose the Plan That Fits Your <span className="text-blue-400">Workflow</span>
            </h2>
            <p className="max-w-xl mx-auto text-black font-medium mt-4 py-6">
              Whether you&apos;re just getting started or ready to launch thousands of pages, our flexible pricing grows with your needs. No hidden fees—just the features you need, when you need them.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="bg-white p-6 border-t-2 border-gray-300">
              <h3 className="text-xl font-semibold mb-4">Starter</h3>
              <p className="text-5xl font-bold mb-2">$350<span className="text-lg font-normal ml-2">per month</span></p>
              <p className="text-gray-600 mb-6 font-medium">Great for solo marketers and early-stage projects testing programmatic SEO.</p>
              <button className="w-full bg-blue-400 text-white py-2 rounded-lg mb-6 cursor-pointer hover:bg-blue-500">Get started</button>
              <ul className="space-y-2 text-gray-600 text-sm">
                <div className="flex items-center gap-4">
                <li>-</li>
                <li>Generate up to 1,000 pages from your data with SEO best practices built in</li>
                </div>
                <div className="flex items-center gap-4">
                <li>-</li>
                <li>Connect a single data source like Google Sheets, Airtable, or CSV</li>
                </div>
                <div className="flex items-center gap-4">
                <li>-</li>
                <li>Use a visual, drag-and-drop builder to design reusable page templates</li>
                </div>
                <div className="flex items-center gap-4">
                <li>-</li>
                <li>Set essential SEO elements like page titles, meta descriptions, and structured data</li>
                </div>
                <div className="flex items-center gap-4">
                <li>-</li>
                <li>Get responsive email support when you need guidance or help</li>
                </div>
              </ul>
            </div>
            <div className="bg-white p-6 border-t-2 border-gray-300 relative">
              <div className="absolute -top-3 right-0 transform -translate-x-1/2 bg-blue-400 text-white text-sm px-3 py-1 rounded-full">Most Popular</div>
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <p className="text-5xl font-bold mb-2">$650<span className="text-lg font-normal ml-2">per month</span></p>              <p className="text-gray-600 mb-6 font-medium">For teams ready to scale traffic with powerful customization and automation.</p>
              <button className="w-full bg-blue-400 text-white py-2 rounded-lg mb-6 cursor-pointer hover:bg-blue-500">Get started</button>
              <ul className="space-y-2 text-gray-600 text-sm">
                <div className="flex items-center gap-4">
                <li>-</li>
                <li>Publish up to 10,000 pages using large datasets across multiple sources</li>
                </div>
                <div className="flex items-center gap-4">
                <li>-</li>
                <li>Map dynamic content fields from various connected data platforms</li>
                </div>
                <div className="flex items-center gap-4">
                <li>-</li>
                <li>Control advanced SEO settings like canonical tags, index rules, and social previews</li>
                </div>
                <div className="flex items-center gap-4">
                <li>-</li>
                <li>Automate internal linking and keep sitemaps updated for better crawlability</li>
                </div>
                <div className="flex items-center gap-4">
                <li>-</li>
                <li>Access fast, priority support via live chat for quick troubleshooting</li>
                </div>
              </ul>
            </div>
            <div className="bg-white p-6 border-t-2 border-gray-300">
              <h3 className="text-xl font-semibold mb-4">Enterprise Solutions</h3>
              <p className="text-5xl font-bold mb-2">$1300<span className="text-lg font-normal ml-2">per month</span></p>              <p className="text-gray-600 mb-6 font-medium">For teams ready to scale traffic with powerful customization and automation.</p>
              <button className="w-full bg-blue-400 text-white py-2 rounded-lg mb-6 cursor-pointer hover:bg-blue-500">Get started</button>
              <ul className="space-y-2 text-gray-600 text-sm">
                <div className="flex items-center gap-4">
                <li>-</li>
                <li>Create unlimited pages powered by flexible, scalable data integrations</li>
                </div>
                <div className="flex items-center gap-4">
                <li>-</li>
                <li>Integrate deeply via API access and webhooks to fit your existing stack</li>
                </div>
                <div className="flex items-center gap-4">
                <li>-</li>
                <li>Invite your team and assign roles with granular permissions</li>
                </div>
                <div className="flex items-center gap-4">
                <li>-</li>
                <li>Work with a dedicated success manager for onboarding and performance reviews</li>
                </div>
                <div className="flex items-center gap-4">
                <li>-</li>
                <li>Benefit from SLA-backed support with guaranteed response times</li>
                </div>
              </ul>
            </div>
          </div>
        </section>
        <section id="about" className="relative px-6 py-20">
          <div className="flex">
          <div className="h-[350px] w-[30%] flex items-center justify-center">
            <Image src="/V.svg" alt="Vela Logo" width={250} height={250} />
          </div>
          <div className="max-w-[65%] mx-auto relative">
            <h5 className="bg-[#5EA7F93B] text-[#5EA7F9] py-1 max-w-[120px] my-2 text-center rounded-2xl">
              About us
            </h5>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Start with <span className="text-blue-400">Why Vela</span></h2>
            <p className="text-black text-lg mb-6 font-medium">
              We, part of Demian, believe organic growth shouldn&apos;t require a big engineering team. That&apos;s why we built a platform that makes programmatic SEO simple, fast, and accessible to anyone with a vision and some data.
            </p>
            <p className="text-black text-lg font-medium">
              Our no-code tool turns structured data into thousands of SEO-ready pages, with everything from templates to publishing handled in one place.
            </p>
            <p className="text-black text-lg font-medium mt-4">
              Whether you&apos;re a solo marketer or scaling a startup, we remove the bottlenecks—so you can focus on strategy while we handle automation and optimization.
            </p>
          </div>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-center mt-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">insert footer here</h2>
          </div>
        </section>
      </main>
    </div>
  )
}
