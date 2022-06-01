import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
	const { data, loading, error } = useFetch(
		"/hotels/countByCity?cities=berlin,madrid,london"
	);

	return (
		<div className="featured">
			{loading ? (
				"Loading please wait"
			) : (
				<>
					<div className="featuredItem">
						<img
							src="https://images.unsplash.com/photo-1508044594351-60a97e8ce53a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480"
							alt="Dublin"
							className="featuredImg"
						/>
						<div className="featuredTitles">
							<h1>Berlin</h1>
							<h2>{data[0]} properties</h2>
						</div>
					</div>
					<div className="featuredItem">
						<img
							src="https://images.unsplash.com/photo-1508044594351-60a97e8ce53a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480"
							alt="Austin"
							className="featuredImg"
						/>
						<div className="featuredTitles">
							<h1>Madrid</h1>
							<h2>{data[1]} properties</h2>
						</div>
					</div>
					<div className="featuredItem">
						<img
							src="https://images.unsplash.com/photo-1508044594351-60a97e8ce53a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480"
							alt="Reno"
							className="featuredImg"
						/>
						<div className="featuredTitles">
							<h1>London</h1>
							<h2>{data[2]} properties</h2>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Featured;
