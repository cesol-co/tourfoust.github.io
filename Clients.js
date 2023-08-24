import React from 'react';

const blogData = [
    {
        title: 'Experience Unmatched Excellence with Our Tour Company',
        content: 'Looking for the best tour company with exceptional services? Your search ends here. We are dedicated to crafting personalized itineraries, providing expert guides, and ensuring seamless logistics. Make memories that last a lifetime with our unforgettable experiences. Join us for the journey of a lifetime.',
    },
    {
        title: 'Elevating Your Travel Experience: Where Tourists are Served with Excellence',
        content: 'Welcome to a tour company that takes serving tourists to a whole new level. We are all about enhancing your travel experience by providing top-notch services that cater to your every need. Our dedicated team is here to ensure your journey is smooth, memorable, and truly exceptional. Join us and discover a new standard in tourism service.',
    },
    {
        title: 'Discover the Top Tour Company with Unparalleled Services',
        content: 'Our tour guides are not only knowledgeable about the destinations but are also passionate about creating remarkable experiences for you. They bring history, culture, and local insights to life, ensuring that you gain a deeper understanding of the places you visit.',
    },
];

const Blog = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Latest Blog Posts</h2>
                    <div className="flex justify-center">
                        <div className="w-24 border-b-4 border-blue-900"></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Read Our Latest Articles</h2>
                </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="flex space-x-4 overflow-x-auto">
                        {blogData.map((blog, index) => (
                            <div
                                key={index}
                                className="p-4 bg-white rounded-lg w-80 transition-all ease-in-out hover:scale-105 hover:shadow-lg"
                            >
                                <h3 className="text-lg font-semibold text-blue-900">{blog.title}</h3>
                                <p className="mt-2 text-gray-700">{blog.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}      

export default Blog;
