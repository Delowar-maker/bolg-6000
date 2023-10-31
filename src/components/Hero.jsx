import React from 'react';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-b from-purple-600 to-purple-900 text-white py-20">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full lg:w-1/2 px-3">
                        <div className="py-12">
                            <div className="max-w-lg mx-auto mb-8 text-center lg:text-left">
                                <h2 className="text-4xl lg:text-5xl mb-4 font-semibold">
                                    <span>A computer automatically</span>
                                    <span className="text-yellow-400">A computer automatically</span>
                                    <span> A computer automatically.</span>
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    luctus eget justo et iaculis. Quisque vitae nulla malesuada,
                                    auctor arcu vitae, luctus nisi.
                                </p>
                            </div>
                            <div className="text-center lg:text-left">
                                <a
                                    className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-sm text-white text-center font-semibold bg-yellow-400 hover:bg-yellow-500 rounded-full"
                                    href="#"
                                >
                                    Check Now
                                </a>
                                <a
                                    className="block sm:inline-block py-4 px-8 text-sm text-gray-300 hover:text-gray-400 text-center font-semibold border border-gray-200 hover:border-gray-300 rounded-full"
                                    href="#"
                                >
                                    Documentation
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-3 mb-12 lg:mb-0">
                        <div className="flex items-center justify-center">
                            <img
                                className="lg:max-w-lg rounded-full shadow-lg"
                                src="/1.jpg"
                                alt="pcHouse"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* ... (The rest of your component) */}
        </section>
    );
};

export default Hero;
