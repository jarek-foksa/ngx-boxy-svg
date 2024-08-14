import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxBoxySvgComponent } from '../../../ngx-boxy-svg/src/lib/ngx-boxy-svg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxBoxySvgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'test-app';
  @ViewChild('boxySvg') boxySvg: NgxBoxySvgComponent | undefined;

  ngAfterViewInit() {
    this.boxySvg?.loaded.subscribe(() => {
      this.boxySvg
        ?.setSVG(
          '<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"> <path d="M7 12H17M8 8.5C8 8.5 9 9 10 9C11.5 9 12.5 8 14 8C15 8 16 8.5 16 8.5M8 15.5C8 15.5 9 16 10 16C11.5 16 12.5 15 14 15C15 15 16 15.5 16 15.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        )
        .then((res) => {
          console.log(res);
        });

      if (this.boxySvg) {
        this.boxySvg.name = 'test';
      }
      console.log(this.boxySvg)
      this.boxySvg?.getCommands().then((res: any) => {
        console.log(res);
      })

    });

    setTimeout(() => {
      console.log(this.boxySvg);
      console.log(this.boxySvg?.getConfig())
    }, 1500);
  }
}