import Vue from "vue";

export default Vue.component("HomePage", {
  data() {
    return {
      checked: false,
      title: "Home Page",
      msg: "Hello world"
    };
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  },
  render() {
    return ( <
      div class = "hello" >
      <
      h1 > {
        {
          msg
        }
      } < /h1> <
      h2 > Essential Links < /h2> <
      div class = "checkbox-wrapper"
      onClick = {
        this.check
      } >
      <
      div class = {
        {
          checkbox: true,
          checked: this.checked
        }
      }
      /> <
      div class = "title" > {
        this.title
      } < /div> < /
      div > <
      /div>
    );
  }
});
