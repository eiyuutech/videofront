import Vue from "vue";
import "./style.scss";

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
			<div class="card" style="width: 18rem;">
				<img class="card-img-top" src=".../100px180/?text=Image cap" />
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a
						href="#"
						class="btn btn-primary"
						onClick={this.onReadMore}
					>
						ReadMore
					</a>
				</div>
			</div>
		);
	}
});
