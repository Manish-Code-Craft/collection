// components/ServiceCards.jsx
import Image from "next/image";
import Link from "next/link";

export default function ServiceCards({ services }) {
  return (
    <div className="section-bottom">
      
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card elementor-box p-6 rounded-xl shadow-md relative bg-white"
            >
              <div className="service-card_number text-3xl font-bold text-primary mb-4">
                {service.number}
              </div>

              <div className="shape-icon relative mb-4">
                <Image
                  width={1000}
                  height={1000}
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
                <span className="dots absolute top-0 right-0 w-2 h-2 bg-gray-400 rounded-full"></span>
              </div>

              <h3 className="box-title text-xl font-semibold mb-2">
                <Link
                  href={service.link}
                  className="text-blue-600 hover:underline"
                >
                  {service.title}
                </Link>
              </h3>

              <p className="service-card_text text-gray-600 mb-4">
                {service.text}
              </p>

              <Link
                href={service.link}
                className="th-btn inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Read More
                <i className="fa-regular fa-arrow-right ms-2"></i>
              </Link>

              <div className="bg-shape absolute bottom-0 right-0  opacity-20">
                <Image
                  width={1000}
                  height={1000}
                  src={service.bgShape}
                  alt="Background Shape"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
}
