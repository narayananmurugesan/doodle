import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  userList = [
    {
      id: 1,
      name: "Customer",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    },
    {
      id: 2,
      name: "service",
      desc:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"
    },
    {
      id: 3,
      name: "dummy",
      desc:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested"
    },
    {
      id: 4,
      name: "bookmyshow",
      desc:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
    },
    {
      id: 5,
      name: "Computer",
      desc:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      id: 6,
      name: "Desktop",
      desc:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
    },
    {
      id: 7,
      name: "Normal Mail",
      desc: "The standard chunk of Lorem Ipsum used since the 1500s"
    },
    {
      id: 8,
      name: "Tester",
      desc: "thank you The standard chunk of Lorem Ipsum used since the 1500s"
    }
  ];
  constructor() {}

  ngOnInit() {}

  
}
