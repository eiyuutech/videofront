import Vue from "vue";
import "./style.scss";
import Search from "./Search";
import Menu from "./Menu";
export default Vue.component("HomePage", {
	data() {
		return {};
	},
	methods: {
		onReadMore() {
			console.log("Your click readmore");
		}
	},
	render() {
		return (
			<nav class="navbar navbar-dark bg-primary">
				<a class="navbar-brand" href="#">
					Navbar
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>

				<div
					class="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<Menu />
					<Search />
				</div>
			</nav>
		);
	}
});
