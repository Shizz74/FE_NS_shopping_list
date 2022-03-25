import { Component, OnInit } from '@angular/core';
import { SelectedIndexChangedEventData, ValueList } from "nativescript-drop-down";

@Component({
  selector: 'ns-category-add-form',
  templateUrl: './category-add-form.component.html',
  styleUrls: ['./category-add-form.component.css']
})
export class CategoryAddFormComponent implements OnInit {
  public selectedIndex: number = null;
  public hint = "My Hint";
  public items: ValueList<string>;
  public cssClass: string = "default";

  constructor() { 

  }

  ngOnInit(): void {
    this.items = new ValueList<string>();
        for (let loop = 0; loop < 200; loop++) {
            this.items.push({
                value: `I${loop}`,
                display: `Item ${loop}`,
            });
        }
  }

  public onchange(args: SelectedIndexChangedEventData) {
    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}. New value is "${this.items.getValue(
        args.newIndex)}"`);
}

public onopen() {
    console.log("Drop Down opened.");
}

public onclose() {
    console.log("Drop Down closed.");
}

}
