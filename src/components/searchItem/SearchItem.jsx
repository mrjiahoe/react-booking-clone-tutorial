import "./searchItem.css";

const SearchItem = () => {
	return (
		<div className="searchItem">
			<img
				src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987"
				alt="room"
				className="siImg"
			/>
			<div className="siDesc">
				<h1 className="siTitle">Tower Street Apartments</h1>
				<span className="siDistance">500m from center</span>
				<span className="siTaxiOp">Free airport taxi</span>
				<span className="siSubtitle">
					Studio Apartment with Air conditioning
				</span>
				<span className="siFeatures">
					Entire studio • 1 bathroom • 21m² • 1 full bed
				</span>
				<span className="siCancelOp">Free cancellation</span>
				<span className="siCancelOpSubtitle">
					You can cancel later, so lock in this great price today!
				</span>
			</div>
			<div className="siDetails">
				<div className="siRating">
					<span>Excellent</span>
					<button>8.9</button>
				</div>
				<div className="siDetailTexts">
					<span className="siPrice">$123</span>
					<span className="siTaxOp">Includes taxes and fees</span>
					<button className="siCheckButton">See availability</button>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
