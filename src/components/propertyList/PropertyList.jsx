import "./propertyList.css";

const PropertyList = () => {
	return (
		<div className="pList">
			<div className="pListItem">
				<img
					src="https://images.unsplash.com/photo-1599722585837-c1cb8eea32ff?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480"
					alt="hotel"
					className="pListImg"
				/>
				<div className="pListTitles">
					<h1>Hotels</h1>
					<h2>123 hotels</h2>
				</div>
			</div>
			<div className="pListItem">
				<img
					src="https://images.unsplash.com/photo-1598474886373-d215fcc1942a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144"
					alt="villas"
					className="pListImg"
				/>
				<div className="pListTitles">
					<h1>Villas</h1>
					<h2>123 Villas</h2>
				</div>
			</div>
			<div className="pListItem">
				<img
					src="https://images.unsplash.com/photo-1612089731919-c517c3f158dc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480"
					alt="Cabins"
					className="pListImg"
				/>
				<div className="pListTitles">
					<h1>Cabins</h1>
					<h2>123 Cabins</h2>
				</div>
			</div>
			<div className="pListItem">
				<img
					src="https://images.unsplash.com/photo-1609731169878-93aecfda8779?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480"
					alt="Apartments"
					className="pListImg"
				/>
				<div className="pListTitles">
					<h1>Apartments</h1>
					<h2>123 Apartments</h2>
				</div>
			</div>
			<div className="pListItem">
				<img
					src="https://images.unsplash.com/photo-1608727638571-6b6f64fdc9bc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1483"
					alt="Resorts"
					className="pListImg"
				/>
				<div className="pListTitles">
					<h1>Resorts</h1>
					<h2>123 Resorts</h2>
				</div>
			</div>
		</div>
	);
};

export default PropertyList;
