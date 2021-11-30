function Footer() {
    return (
        <div className="md:max-w-7xl mx-auto " >
            <div className="flex flex-col sm:flex-row items-start sm:px-16 justify-between py-8">
                <div>
                    <p className="font-semibold">Support</p>
                    <p className='text-sm cursor-pointer mt-2'>Help Centre</p>
                    <p className='text-sm cursor-pointer mt-2'>Safety information</p>
                    <p className='text-sm cursor-pointer mt-2'>Cancellation options</p>
                    <p className='text-sm cursor-pointer mt-2'>Our COVID-19 Response</p>
                    <p className='text-sm cursor-pointer mt-2'>Supporting people with disabilities</p>
                    <p className='text-sm cursor-pointer mt-2'>Report a neighbourhood concern</p>
                </div>

                <div>
                    <p className="font-semibold">Community</p>
                    <p className='text-sm cursor-pointer mt-2'>Airbnb.org: disaster relief housing</p>
                    <p className='text-sm cursor-pointer mt-2'>Support Afghan refugees</p>
                    <p className='text-sm cursor-pointer mt-2'>Celebrating diversity & belonging</p>
                    <p className='text-sm cursor-pointer mt-2'>Combating discrimination</p>
                </div>

                <div>
                    <p className="font-semibold">Hosting</p>
                    <p className='text-sm cursor-pointer mt-2'>Try hosting</p>
                    <p className='text-sm cursor-pointer mt-2'>AirCover: protection for Hosts</p>
                    <p className='text-sm cursor-pointer mt-2'>Explore hosting resources</p>
                    <p className='text-sm cursor-pointer mt-2'>Visit our community forum</p>
                    <p className='text-sm cursor-pointer mt-2'>How to host responsibly</p>
                </div>
                
                <div>
                    <p className="font-semibold">About</p>
                    <p className='text-sm cursor-pointer mt-2'>Newsroom</p>
                    <p className='text-sm cursor-pointer mt-2'>Learn about new features</p>
                    <p className='text-sm cursor-pointer mt-2'>Letter from our founders</p>
                    <p className='text-sm cursor-pointer mt-2'>Careers</p>
                    <p className='text-sm cursor-pointer mt-2'>Investors</p>
                    <p className='text-sm cursor-pointer mt-2'>Airbnb Luxe</p>
                </div>
            </div>
            <hr />
            <div className="sm:px-16">
                <span>© 2021 Airbnb, Inc.</span>
                <span>·Privacy</span>
                <span>·Terms</span>
                <span>·Sitemap</span>
                <span>·Company details</span>
            </div>
        </div>
    )
}

export default Footer
