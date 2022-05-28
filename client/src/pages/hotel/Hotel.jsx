import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleArrowLeft,
	faCircleArrowRight,
	faCircleXmark,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);
	const photos = [
		{
			src: "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
		},
		{
			src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
		},
		{
			src: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674",
		},
		{
			src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80",
		},
		{
			src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
		},
		{
			src: "https://images.unsplash.com/photo-1621293954908-907159247fc8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
		},
	];

	const handleOpen = (i) => {
		setSlideNumber(i);
		setOpen(true);
	};

	const handleMove = (direction) => {
		let newSlideNumber;

		if (direction === "l") {
			newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
		}
		setSlideNumber(newSlideNumber);
	};

	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="hotelContainer">
				{open && (
					<div className="slider">
						<FontAwesomeIcon
							icon={faCircleXmark}
							className="close"
							onClick={() => setOpen(false)}
						/>
						<FontAwesomeIcon
							icon={faCircleArrowLeft}
							className="arrow"
							onClick={() => handleMove("l")}
						/>
						<div className="sliderWrapper">
							<img src={photos[slideNumber].src} alt="" className="sliderImg" />
						</div>
						<FontAwesomeIcon
							icon={faCircleArrowRight}
							className="arrow"
							onClick={() => handleMove("r")}
						/>
					</div>
				)}
				<div className="hotelWrapper">
					<button className="bookNow">Reserve or Book Now!</button>
					<h1 className="hotelTitle">Grand Hotel</h1>
					<div className="hotelAddress">
						<FontAwesomeIcon icon={faLocationDot} />
						<span>Elton St 125 New York</span>
					</div>
					<span className="hotelDistance">
						Excellent location - 500m from center
					</span>
					<span className="hotelPriceHighlight">
						Book a stay over $114 at this property and get a free airport taxi
					</span>
					<div className="hotelImages">
						{photos.map((photo, i) => (
							<div className="hotelImgWrapper">
								<img
									onClick={() => handleOpen(i)}
									src={photo.src}
									alt=""
									className="hotelImg"
								/>
							</div>
						))}
					</div>
					<div className="hotelDetails">
						<div className="hotelDetailsTexts">
							<h1 className="hotelTitle">Stay in the heart of Krakow</h1>
							<p className="hotelDesc">
								Located a 5-minute walk from St.Florian's Gate in Krakow, Tower
								Stree Apartments has accommodations with air conditioning and
								free WIfi. The units come with hardwood floors and feature a
								fully equipped kitchenette with a microwave, a flat-screen TV,
								and a private bathroom with shower and a haridryer. A fridge is
								also offered, as well as an electric tea pot and a coffee
								machine. Popular points of interest near the aprtment include
								Cloth Hall, Main Market Square and Town Hall Tower. The nearest
								airport is John Paul II International Krakow-Balice, 16.1 km
								from Tower Street Apartments, and the property offers a paid
								airport shuttle service.
							</p>
						</div>
						<div className="hotelDetailsPrice">
							<h1>Perfect for a 9-night stay!</h1>
							<span>
								Located in the real heart of Krakow, this property has an
								excellent location score of 9.8!
							</span>
							<h2>
								<b>$945</b> (9 nights)
							</h2>
							<button>Reserve or Book Now!</button>
						</div>
					</div>
				</div>
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Hotel;
