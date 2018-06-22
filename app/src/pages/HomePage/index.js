import Vue from "vue";
import "./style.scss";
import NavBar from "../../components/elements/NavBar/NavBar";
import Card from "../../components/elements/Card/index";
import Language from '../../components/elements/Language/Language';
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
				<p>{ this.$t("common.language") }</p>
				<Language />
				<h1> {this.msg} </h1>
				<div class="title"> {this.title} </div>
				<Card />
			</div>
		);
	}
});
