import type { NextPage } from "next";

const Services: NextPage = () => {
  return (
    <>
      <section className="py-16" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-white font-semibold text-6xl"> What I Do ?</h1>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8 flex">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col flex-1">
                <div className="mb-4 text-5xl text-blue-500"><i className="fa fa-laptop" /></div>
                <h4 className="text-xl font-semibold mb-2">Custom Web Design</h4>
                <p className="text-gray-700">Create a stunning online presence with our custom web design services. We will tailor a website that not only looks impressive but also delivers a seamless user experience, helping you achieve your online goals.</p>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-8 flex">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col flex-1">
                <div className="mb-4 text-5xl text-blue-500"><i className="fa fa-code" /></div>
                <h4 className="text-xl font-semibold mb-2">Web Development</h4>
                <p className="text-gray-700">Turn your digital ideas into reality with our web development solutions. We specialize in crafting robust and dynamic websites that are tailored to meet your specific business needs and objectives.</p>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-8 flex">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col flex-1">
                <div className="mb-4 text-5xl text-blue-500"><i className="fa fa-rocket" /></div>
                <h4 className="text-xl font-semibold mb-2">SEO Optimization</h4>
                <p className="text-gray-700">Boost your online visibility and drive organic traffic to your website with our SEO optimization services. Our experts employ proven strategies to improve your search engine rankings and grow your online presence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
