import genetec from '../images/Partners/genetec-logo.svg'
import subtitle from '../images/Partners/subtitle.svg'
import '../css/partners.css'
import image1 from '../images/Partners/image1.png'
import image1m from '../images/Partners/image1m.png'
import image2 from '../images/Partners/image2.png'
import image4 from '../images/Partners/person.png'
import image5 from '../images/Partners/genetec_logo_white.png'
import image6 from '../images/Partners/arrow_forward.svg'
import certification from '../images/Partners/certification-gentec.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLeftLong } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
const ArrowRightIcon = ({ className }) => {
    return <FontAwesomeIcon icon={faArrowRight} className={className} />;
};


const desc = ["Genetec Inc. is an innovative technology company offering a wide range of security, intelligence, and operations solutions. The company’s flagship product, Genetec™ Security Center, unifies IP-based video surveillance, access control, automatic license plate recognition (ALPR), communications, and analytics. Genetec also develops cloud-based solutions and services designed to improve security,  and contribute new levels of operational intelligence for governments, enterprises, and the communities in which we live. Founded in 1997, and headquartered in Montreal, Canada, Genetec serves its global customers via an extensive network of certified channel partners and consultants in over 159 countries.",
    "Security Center consolidates access control, video surveillance, automatic license plate recognition (ALPR), communications, and so on into one cohesive and user-friendly solution.",
    " By centralizing your data, you can efficiently manage security policies, conduct investigations, and focus on critical priorities.",
    " Select the devices and activate new features that align with your evolving system needs.",
    "Each solution is tailored to understand and address the unique needs of each client. Everything we do is shaped by a core set of values. Our mission as a company revolves around the complete satisfaction of our clients.Each solution is tailored to understand and address the unique needs of each client. Everything we do is shaped by a core set of values. ",
    "The new unified SaaS offering is a complete harmonisation and streamlining of our SaaS portfolio.",
    "It is fast, non-stop, radically easier, and most importantly, it's Genetec.",
    "It connects millions of devices and secures organisations globally with the world's most scalable, reliable, flexible, and secure architecture.",
    "Omnicast™ is a video management system (VMS) for organisations of all sizes",
    "Tailor your surveillance solutions to meet your unique video security needs effortlessly",
    "Offers deep support for a wide range of industry-leading cameras and encoders.",
    "Elevate your organization’s security with Synergis complete access control.",
    "Boost your incident and threat response while utilising existing network and security investments.",
    "Improve operational efficiency with greater automation and system unification",
    "Unlock your ACS data to make smarter business decisions",
    "Streamvault™ is a range of preloaded security infrastructure solutions designed to serve as a foundational platform",
    "Easily adaptable to meet your specific project requirements.",
    "Comes with built-in tools to make deployment and maintanence easier."
]

export default function Partners() {
    const slider = React.useRef(null);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        // speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
            delay: 500,
            once: true
        });
    }, []);
    return (
        <>
            <div className="partners-hero">
                <img className='main-logo' src={genetec} alt="genetec-logo" />
                <img className="subtitle" src={subtitle} alt="genetec-logo" />
            </div>

            <div className="partners-desc">
                <div className="partners-desc-container">
                    <div className="description" data-aos='fade-right'>
                        <p className="desc-head">What Genetec does ?</p>
                        <p className="desc-content">{desc[0]}</p>
                    </div>
                    <div className="desc-image" data-aos='fade-left'>

                        <img src={image1} alt="genetec" />
                    </div>
                </div>
            </div>

            <div className="partners-desc">
                <div className="partners-desc-container">
                    <div data-aos='fade-right' className="description">
                        <p className="desc-head">What Genetec has to offer?</p>
                        <Slider ref={slider} {...settings}>

                            <div className="desc-box">
                                <div className='box-heading'>
                                    <p>Genetec™ Security Center Unified Security Platform</p>
                                </div>
                                <div className='box-content'>
                                    <ul>
                                        <li>{desc[1]}</li>
                                        <li>{desc[2]}</li>
                                        {/* <li>{desc[3]}</li> */}
                                    </ul>

                                    <div className="wwdb-learn-more partners-learn-more" style={{ width: '300px', fontSize: '30px !important' }}>
                                        <a href="/services" class="btn btn-primary btn-arrow"><p className='learnMore'><span>Learn more
                                            <ArrowRightIcon className="fas" />
                                        </span></p></a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="desc-box">
                                    <div className='box-heading dh1'>
                                        <p>Security Center SaaS - Software as a service</p>
                                    </div>
                                    <div className='box-content'>
                                        <ul>
                                            {/* <li>{desc[4]}</li> */}
                                            <li>{desc[5]}</li>
                                            <li>{desc[6]}</li>
                                            <li>{desc[7]}</li>
                                        </ul>

                                        <div className="wwdb-learn-more partners-learn-more" style={{ width: '300px', fontSize: '30px !important' }}>
                                            <a href="/services" class="btn btn-primary btn-arrow"><p className='learnMore'><span>Learn more
                                                <ArrowRightIcon className="fas" />
                                            </span></p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="desc-box">
                                    <div className='box-heading dh2'>
                                        <p>Omnicast-Video management system </p>
                                    </div>
                                    <div className='box-content'>
                                        <ul>
                                            <li>{desc[10]}</li>
                                            <li>{desc[8]}</li>
                                            <li>{desc[9]}</li>
                                        </ul>

                                        <div className="wwdb-learn-more partners-learn-more" style={{ width: '300px', fontSize: '30px !important' }}>
                                            <a href="/services" class="btn btn-primary btn-arrow"><p className='learnMore'><span>Learn more
                                                <ArrowRightIcon className="fas" />
                                            </span></p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="desc-box">
                                    <div className='box-heading dh3'>
                                        <p>Synergis -Access control system</p>
                                    </div>
                                    <div className='box-content'>
                                        <ul>
                                            <li>{desc[14]}</li>
                                            <li>{desc[11]}</li>
                                            <li>{desc[12]}</li>
                                            <li>{desc[13]}</li>
                                        </ul>

                                        <div className="wwdb-learn-more partners-learn-more" style={{ width: '300px', fontSize: '30px !important' }}>
                                            <a href="/services" class="btn btn-primary btn-arrow"><p className='learnMore'><span>Learn more
                                                <ArrowRightIcon className="fas" />
                                            </span></p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="desc-box">
                                    <div className='box-heading dh4'>
                                        <p>Streamvault™ -Security infrastructure solutions</p>
                                    </div>
                                    <div className='box-content'>
                                        <ul>
                                            <li>{desc[17]}</li>
                                            <li>{desc[15]}</li>
                                            <li>{desc[16]}</li>
                                        </ul>

                                        <div className="wwdb-learn-more partners-learn-more" style={{ width: '300px', fontSize: '30px !important' }}>
                                            <a href="/services" class="btn btn-primary btn-arrow"><p className='learnMore'><span>Learn more
                                                <ArrowRightIcon className="fas" />
                                            </span></p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>

                    </div>
                    <div data-aos='fade-left' className="desc-image box-image">
                        <picture>
                            <source media="(max-width: 425px)" srcSet={image1m} />
                            <source media="(min-width: 426px)" srcSet={image1} />
                            <img
                                src={image1}
                                alt="genetec"
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div className='d-flex certification'>
                <div data-aos='fade-left'>
                    <h1 className='certification-h'>Joint Recognition</h1>
                    <p className='certification-p'>Each solution is tailored to understand and address the unique needs of each client. Everything we do is shaped by a core set of values. Our mission as a company revolves around the complete satisfaction of our clients</p>
                </div>
                <div data-aos='fade-right' >
                    <img className='cert' src={certification}></img>
                </div>
            </div>


            <div className='desc2-wrapper'>
                <div data-aos='fade-down' className="description desc2">
                    <p className="desc-head head2">What Genetec Provides</p>
                    <p className='desc-head3'>Each solution is tailored to understand and address the unique needs of each client. Everything we do is shaped by a core set of values. Our mission as a company revolves around the complete satisfaction of our clients.Each solution is tailored to understand and address the unique needs of each client. Everything we do is shaped by a core set of values. </p>
                </div>
            </div>

            <div className="partners-desc2">
                <div className="jr-container">
                    <div className="description">
                        <p className="desc-head">People Involved</p>
                        <div className='people-box'>
                            <div className='people'>
                                <div className='p-name'>
                                    <p>Soumendra <br />Director</p>
                                </div>
                                <p className='p-quote'>“No growth hack, brilliant marketing idea can save you long-term if you don’t have a sufficiently good product.”</p>
                                <div className='p-img'>
                                    <img src={image4} alt='person' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='word-container'>
                    <div className='sub-one'>
                        <p className='word1'>Curious About Genetec?</p>
                        <p className='word2'>Discover More Here!</p>
                    </div>
                    <a href='https://www.genetec.com' target='blank'>
                        <div className='sub-two'>
                            <img className="sub-two-logo" src={image5} alt='genetec logo' />
                            <p>Website</p>
                            <img className="sub-two-arrow" src={image6} alt='arrow' />
                        </div>

                    </a>

                </div>
            </div>
        </>
    )
}