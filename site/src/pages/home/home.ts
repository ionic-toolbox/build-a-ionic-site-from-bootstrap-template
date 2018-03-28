import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	public cards = [
		{ image: "https://randomuser.me/api/portraits/men/1.jpg", title: "1", text: "1" },
		{ image: "https://randomuser.me/api/portraits/men/2.jpg", title: "2", text: "2" },
		{ image: "https://randomuser.me/api/portraits/men/3.jpg", title: "3", text: "3" },
		{ image: "https://randomuser.me/api/portraits/men/4.jpg", title: "4", text: "4" },
		{ image: "https://randomuser.me/api/portraits/men/5.jpg", title: "5", text: "5" },
		{ image: "https://randomuser.me/api/portraits/men/6.jpg", title: "6", text: "6" },
	]

	constructor(public navCtrl: NavController) {
	}

	itemTapped(event, item) {
		// That's right, we're pushing to ourselves!
		this.navCtrl.push(HomePage, {
			item: item
		});
	}

}
