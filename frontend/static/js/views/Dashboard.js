import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>Taise Miyazumi</h1>
        <p>
            My name is Taise Miyazumi and I am student at University of Florida. I am creating this website using a youtube tutorial.
        </p>
        <p>
            <a href="/posts" data-link>View recent posts</a>.
        </p>
    `;

    }
}