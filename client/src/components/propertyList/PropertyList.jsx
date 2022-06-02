import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
	const { data, loading, error } = useFetch("hotels/countByType");

	const images = [
		"https://images.unsplash.com/photo-1599722585837-c1cb8eea32ff?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480",
		"https://images.unsplash.com/photo-1598474886373-d215fcc1942a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144",
		"https://images.unsplash.com/photo-1612089731919-c517c3f158dc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480",
		"https://images.unsplash.com/photo-1609731169878-93aecfda8779?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480",
		"https://images.unsplash.com/photo-1608727638571-6b6f64fdc9bc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1483",
	];

	return (
		<div className="pList">
			{loading ? (
				"loading"
			) : (
				<>
					{data &&
						images.map((img, i) => (
							<div className="pListItem" key={i}>
								<div className="pListItem">
									<img src={img} alt="hotel" className="pListImg" />
									<div className="pListTitles">
										<h1>{data[i]?.type}</h1>
										<h2>
											{data[i]?.count} {data[i]?.type}
										</h2>
									</div>
								</div>
							</div>
						))}
				</>
			)}
		</div>
	);
};

export default PropertyList;
