import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable()
export class MyCustomTitleStrategy extends TitleStrategy {

    constructor(private title: Title) {
        super();
    }

    updateTitle(snapshot: RouterStateSnapshot): void {
        const currentTitle = this.buildTitle(snapshot);
        console.log(currentTitle);
        if (currentTitle) {
            this.title.setTitle(`Sreenu Tech - ${currentTitle}`);
        }
    }

}