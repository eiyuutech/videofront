import Vue from "vue";
import "./style.scss";
import NavBar from "../../components/elements/NavBar/NavBar";
import Card from "../../components/elements/Card/index";
export default Vue.component("HomePage", {
	data() {
		return {
			checked: false,
			title: "Home Page",
			msg: "Hello world"
		};
	},
	methods: {
		onCheck() {
			this.checked = !this.checked;
		}
	},
	render() {
		return (
			<div>
				<NavBar />
				<h1> {this.msg} </h1>
				<div class="title"> {this.title} </div>
				<Card />
			</div>
		);
	}
});
