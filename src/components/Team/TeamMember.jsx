import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Container from "../Layout/Container";

export default function TeamMembers({ members }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [translateXMap, setTranslateXMap] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseLeave = (index) => {
    setTranslateXMap((prev) => ({
      ...prev,
      [index]: 0,
    }));
  };

  return (
    <section className="ep-team-section space-y-10">
      {members.map((member, index) => (
        <TeamItem
          key={index}
          index={index}
          member={member}
          isActive={activeIndex === index}
          translateX={translateXMap[index] || 0}
          setTranslateX={(x) =>
            setTranslateXMap((prev) => ({ ...prev, [index]: x }))
          }
          onHover={() => setActiveIndex(index)}
          onLeave={() => handleMouseLeave(index)}
          isMobile={isMobile}
        />
      ))}
    </section>
  );
}

function TeamItem({
  member,
  index,
  isActive,
  translateX,
  setTranslateX,
  onHover,
  onLeave,
  isMobile,
}) {
  const teamRef = useRef(null);

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const bounds = teamRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const centerX = bounds.width / 2;

    if (x < centerX) {
      const percentX = x / centerX - 1;
      const maxShift = 500;
      setTranslateX(percentX * maxShift);
    } else {
      setTranslateX(0);
    }
  };

  const shouldShowImage = isMobile || isActive;

  return (
    <Container>
    <div
      className="team-item rounded-20 relative bg-[#f7faff] p-6 md:p-0"
      ref={teamRef}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onMouseMove={handleMouseMove}
    >
      {/* MOBILE Layout */}
      {isMobile ? (
        <div className="flex flex-col items-center text-center space-y-4">
          <h4 className="text-xl font-bold text-[#03045E]">{member.name}</h4>
          <p className="text-gray-500">{member.description}</p>

          <div className="flex gap-3 justify-center">
            {member.socials?.facebook && (
              <a href={member.socials.facebook} target="_blank"><FaFacebookF /></a>
            )}
            {member.socials?.pinterest && (
              <a href={member.socials.pinterest} target="_blank"><FaPinterestP /></a>
            )}
            {member.socials?.linkedin && (
              <a href={member.socials.linkedin} target="_blank"><FaLinkedinIn /></a>
            )}
            {member.socials?.instagram && (
              <a href={member.socials.instagram} target="_blank"><FaInstagram /></a>
            )}
          </div>

          <Image
            src={member.image}
            alt={member.name}
            width={250}
            height={250}
            className="rounded-xl"
          />
        </div>
      ) : (
        // DESKTOP layout
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          {/* Name & Description */}
          <div className="lg:w-1/3 md:w-1/2 self-center">
            <div className="team-name-info text-left">
              <h4 className="name text-lg font-bold">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.description}</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="lg:w-1/3 md:w-5/12 self-center">
            <div className="social-icon-box">
              <ul className="list-unstyled flex gap-4">
                {member.socials?.facebook && (
                  <li>
                    <a href={member.socials.facebook} target="_blank">
                     <Image
                        src="/facebook.svg"
                        alt="Facebook"
                        width={40}
                        height={40}/>
                      </a>
                  </li>
                )}
                {member.socials?.pinterest && (
                  <li>
                    <a href={member.socials.pinterest} target="_blank">
                      <Image
                        src="/instagram.svg"
                        alt="Facebook"
                        width={40}
                        height={40}/></a>
                  </li>
                )}
                {member.socials?.linkedin && (
                  <li>
                    <a href={member.socials.linkedin} target="_blank">
                    <Image
                        src="/linkedin.svg"
                        alt="Facebook"
                        width={40}
                        height={40}/>
                      </a>
                  </li>
                )}
                {member.socials?.instagram && (
                  <li>
                    <a href={member.socials.instagram} target="_blank">
                    <Image
                        src="/whatsapp.svg"
                        alt="Facebook"
                        width={40}
                        height={40}/>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Hover Image */}
          <div className="lg:w-1/3 md:w-[8.333%] self-center">
            <div
              className="hover-image absolute pointer-events-none"
              style={{
                top: "50%",
                right: "78px",
                transform: "translateY(-50%)",
                opacity: shouldShowImage ? 1 : 0,
                visibility: shouldShowImage ? "visible" : "hidden",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              <div
                className="image-inner"
                style={{
                  transform: `translateX(${translateX}px) rotate(-15deg)`,
                  transition: "transform 1s ease-out",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={328}
                  className="img-fluid w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </Container>
  );
}
