import "./featured.css";

const Featured = () => {
	return (
		<div className="featured">
			<div className="featuredItem">
				<img
					src="https://images.unsplash.com/photo-1508044594351-60a97e8ce53a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480"
					alt="Dublin"
					className="featuredImg"
				/>
				<div className="featuredTitles">
					<h1>Dublin</h1>
					<h2>123 properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img
					src="https://images.unsplash.com/photo-1535478372499-9d1e5130bd92?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1482"
					alt="Austin"
					className="featuredImg"
				/>
				<div className="featuredTitles">
					<h1>Austin</h1>
					<h2>456 properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img
					src="https://images.unsplash.com/photo-1605825831039-8b6b4199b04a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480"
					alt="Reno"
					className="featuredImg"
				/>
				<div className="featuredTitles">
					<h1>Reno</h1>
					<h2>789 properties</h2>
				</div>
			</div>
		</div>
	);
};

export default Featured;
