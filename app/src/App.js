import Vue from "vue";
import "./assets/css/index.scss";

export default Vue.component("App", {
  methods: {},
  render() {
    return (
        <div id="app">
            <img src="./assets/logo.png" />
            <router-view/>
        </div>
    );
  }
});
