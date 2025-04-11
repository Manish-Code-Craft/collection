import { useState, useRef } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Container from "../Layout/Container";

export default function TeamMember({ members }) {
  return (
    <section className="ep-team-section space-y-10">
      {members.map((member, index) => (
        <TeamItem key={index} member={member} />
      ))}
    </section>
  );
}

function TeamItem({ member }) {
  const [hovering, setHovering] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const teamRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = teamRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const centerX = bounds.width / 2;

    if (x < centerX) {
      const percentX = x / centerX - 1;
      const maxShift = 600;
      setTranslateX(percentX * maxShift);
    } else {
      setTranslateX(0);
    }
  };

  return (
    <Container>
    <div
      className="team-item rounded-20 relative"
      ref={teamRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setTranslateX(0);
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-wrap gap-4">
        {/* Name & Description */}
        <div className="lg:w-1/3 md:w-1/2 self-center">
          <div className="team-name-info">
            <h4 className="name">{member.name}</h4>
            <p>{member.description}</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="lg:w-1/3 md:w-5/12 self-center">
          <div className="social-icon-box">
            <ul className="list-unstyled flex gap-2">
              {member.socials?.facebook && (
                <li>
                  <a className="d-inline-flex justify-center items-center" href={member.socials.facebook} target="_blank">
                    <FaFacebookF />
                  </a>
                </li>
              )}
              {member.socials?.pinterest && (
                <li>
                  <a className="d-inline-flex justify-center items-center" href={member.socials.pinterest} target="_blank">
                    <FaPinterestP />
                  </a>
                </li>
              )}
              {member.socials?.linkedin && (
                <li>
                  <a className="d-inline-flex justify-center items-center" href={member.socials.linkedin} target="_blank">
                    <FaLinkedinIn />
                  </a>
                </li>
              )}
              {member.socials?.instagram && (
                <li>
                  <a className="d-inline-flex justify-center items-center" href={member.socials.instagram} target="_blank">
                    <FaInstagram />
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
              opacity: hovering ? 1 : 0,
              visibility: hovering ? "visible" : "hidden",
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
                width={400}
                height={428}
                className="img-fluid w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
}
