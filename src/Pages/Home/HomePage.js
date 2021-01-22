import React, {Component} from 'react';
import MainHeaderForPage from "../../Components/Header/Header";
import MainNavigationBar from "../../Components/Navigation_Bar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import {LinkButton} from "../../Components/Buttons";
import {mainPageLinks, serviceDropDownMenuPageLinks} from "../../Controller/Links";

import HomeStyles from "./HomePage.module.css";
import images from "./ImagesForCarousel";

import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import {FaRegComments} from 'react-icons/fa'
import {IoPersonOutline} from 'react-icons/io5'
import {RiStethoscopeLine} from 'react-icons/ri'

const scrollUpThePageLink = "/";

class HomePage extends Component {
    render() {
        return (
            <>
                <MainHeaderForPage/>
                <MainNavigationBar/>
                <CarouselView/>
                <ContactDivider/>
                <DigitalImagingSolutionsView/>
                <SignUpNewsLetterView/>
                <Footer/>
            </>
        );
    }
}

const CarouselView = () => {
    const solutions = [{
        keyID: 1,
        header: "Digital Pathology Solutions",
        content: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
        link: serviceDropDownMenuPageLinks[0].endpoint,
        backgroundColor: "#097747E6"
    }, {
        keyID: 2,
        header: "Diagnostic Radiology Solutions",
        content: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
        link: serviceDropDownMenuPageLinks[2].endpoint,
        backgroundColor: "#0DB26BE6"
    }, {
        keyID: 3,
        header: "Diagnostic Cardiology Solutions",
        content: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
        link: serviceDropDownMenuPageLinks[1].endpoint,
        backgroundColor: "#6DCCA3E6"
    }];

    return (
        <div className={HomeStyles.carouselContainer}>
            <ImageCarousel rotationTime={6000}/>
            <div className={HomeStyles.solutionsCarouselContainer}>
                {solutions.map(solution => SolutionInfoBox(solution))}
            </div>
        </div>
    );
}

class ImageCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: images,
            totalImages: images.length,
            currentImageIndex: 0,
            slideImageIndex: 0,
            activeSlideCSS: HomeStyles.slide,
            buttonsDisabled: false,
            shouldUpdate: true,
            rotationTime: this.props.rotationTime || 6000,
            timer: null
        }
    }

    componentDidMount() {
        this.setState({timer: setInterval(this.nextImage, this.state.rotationTime)});
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    autoplay = () => {
        clearInterval(this.state.timer);
        this.setState({timer: setInterval(this.nextImage, this.state.rotationTime)});
    }

    nextImage = () => {
        this.setState({shouldUpdate: true, buttonsDisabled: true, slideImageIndex: this.state.currentImageIndex});
        this.state.currentImageIndex < this.state.totalImages - 1
            ? this.setState({currentImageIndex: this.state.currentImageIndex + 1})
            : this.setState({currentImageIndex: 0});
        this.setState({activeSlideCSS: HomeStyles.slideLeft});
        this.autoplay();
    }

    nextImageAnimationHelper = () => {
        this.setState({shouldUpdate: false, buttonsDisabled: false})
    }

    previousImage = () => {
        this.setState({shouldUpdate: true, buttonsDisabled: true})
        this.state.currentImageIndex > 0
            ? this.setState({slideImageIndex: this.state.currentImageIndex - 1})
            : this.setState({slideImageIndex: this.state.totalImages - 1});
        this.setState({activeSlideCSS: HomeStyles.slideRight});
        this.autoplay();
    }

    previousImageAnimationHelper = () => {
        this.setState({
            shouldUpdate: false,
            buttonsDisabled: false,
            currentImageIndex: this.state.slideImageIndex
        })
    }

    render() {
        let slideImage = this.state.images[this.state.slideImageIndex];
        let currentImage = this.state.images[this.state.currentImageIndex];
        let animationFuncHelper;

        if (this.state.activeSlideCSS === HomeStyles.slideRight) {
            animationFuncHelper = this.previousImageAnimationHelper;
        } else if (this.state.activeSlideCSS === HomeStyles.slideLeft) {
            animationFuncHelper = this.nextImageAnimationHelper;
        } else {
            animationFuncHelper = null;
        }

        return (
            <>
                <button className={HomeStyles.backArrow} disabled={this.state.buttonsDisabled}
                        onClick={this.previousImage}><IoIosArrowBack className={HomeStyles.arrowSVG}/></button>
                <button className={HomeStyles.nextArrow} disabled={this.state.buttonsDisabled}
                        onClick={this.nextImage}><IoIosArrowForward className={HomeStyles.arrowSVG}/></button>
                {this.state.shouldUpdate ? <img className={this.state.activeSlideCSS}
                                                onAnimationEnd={animationFuncHelper}
                                                src={slideImage.image}
                                                alt={slideImage.alt}/> : null}
                <img src={currentImage.image} alt={currentImage.alt}/>
            </>
        );
    }
}

const SolutionInfoBox = (solution) =>
    <div key={solution.keyID} className={HomeStyles.solutionsInfoContainer}
         style={{"backgroundColor": solution.backgroundColor}}>
        <h2>{solution.header}</h2>
        <p>{solution.content}</p>
        <LinkButton scrollUpThePageLink={scrollUpThePageLink} link={solution.link} text={"See More"}/>
    </div>


const ContactDivider = () =>
    <div className={HomeStyles.headerContainer}>
        <div className={HomeStyles.header}>
            > Please contact us for detailed information for each service
        </div>
    </div>

const DigitalImagingSolutionsView = () => {
    const solutions = [{
        keyID: 1,
        icon: FaRegComments,
        header: "Collaborations",
        content: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
        link: mainPageLinks[0].endpoint,
    }, {
        keyID: 2,
        icon: IoPersonOutline,
        header: "Customers",
        content: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
        link: mainPageLinks[1].endpoint,

    }, {
        keyID: 3,
        icon: RiStethoscopeLine,
        header: "AI Diagnostics",
        content: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
        link: mainPageLinks[1].endpoint,
    }];

    return (
        <div className={HomeStyles.digitalImagingSolutionsViewContainer}>
            <h2>Digital Imaging Informatics Solutions</h2>
            <div className={HomeStyles.digitalImagingSolutionsContainer}>
                {solutions.map(solution => DigitalImagingSolutionsBox(solution))}
            </div>
        </div>
    );
}

const DigitalImagingSolutionsBox = (solution) =>
    <div key={solution.keyID} className={HomeStyles.digitalImagingSolutionsBoxContainer}>
        <div className={HomeStyles.digitalImagingSolutionsIconSVGBackground}>
            <solution.icon className={HomeStyles.digitalImagingSolutionsIconSVG}/>
        </div>
        <h3>{solution.header}</h3>
        <p>{solution.content}</p>
        <LinkButton scrollUpThePageLink={scrollUpThePageLink} link={solution.link} text={"> See More"}/>
    </div>

const SignUpNewsLetterView = () => {
    const signUpNewsFormHandler = () => {
        document.forms["signUpNewsLetterForm"].reset();
    }

    return (
        <div className={HomeStyles.signUpNewsLetterViewContainer}>
            <h2>Sign up for our newsletter</h2>
            <p>Enter your email below to stay updated with the lastest news and solutions from A to Z Informatics
                Lab.</p>
            <div className={HomeStyles.signUpNewsLetterFormContainer}>
                <form id="signUpNewsLetterForm">
                    <input type="text" placeholder="Enter your email here.*"
                           className={HomeStyles.signUpNewsLetterInput}/>
                </form>
                <button type="button" form="signUpNewsLetterForm" onClick={signUpNewsFormHandler}>Subscribe Now</button>
            </div>
        </div>
    );
}

export default HomePage;