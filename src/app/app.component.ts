// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Kendo-Ui-Chart';
//   categories: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
//   primaryData: number[] = [1, 2, 3, 4, 2.5, 4.5, 1.8, 3.2, 4.1, 2.5, 1.8, 5, 3, 2.5, 4.5];
//   secondaryData: number[] = [3, 15, 6, 10, 16, 8, 12, 5, 16, 10, 12, 20, 11, 14, 18];
//   showSecondaryAxis: boolean = false;
//   selectedAxisPosition: string = '0';
//   axisCrossingValues: number[] = [0, 1e6];

//   valueAxes: { name: string, title: string, visible: boolean }[] = [
//     { name: 'primary', title: 'Primary Axis', visible: true },
//     { name: 'secondary', title: 'Secondary Axis', visible: this.showSecondaryAxis }
//   ];

//   updateAxisCrossingValues() {
//     switch (this.selectedAxisPosition) {
//       case '1':
//         this.axisCrossingValues = [0];
//         break;
//       case '2':
//         this.axisCrossingValues = [1e6, 0];
//         break;
//       case '3':
//         this.axisCrossingValues = [1e6, 1e6];
//         break;
//       default:
//         this.axisCrossingValues = [0, 1e6];
//         break;
//     }
//   }

//   onChangeAxisPosition(event: any) {
//     this.selectedAxisPosition = event.target.value;
//     this.updateAxisCrossingValues();
//   }

//   toggleSecondaryAxis() {
//     this.showSecondaryAxis = !this.showSecondaryAxis;
//     this.valueAxes[1].visible = this.showSecondaryAxis;
//   }
// }


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Kendo-Ui-Chart';
//   categories: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
//   primaryData: number[] = [1, 2, 3, 4, 2.5, 4.5, 1.8, 3.2, 4.1, 2.5, 1.8, 5, 3, 2.5, 4.5];
//   // secondaryData: number[] = [3600, 9000, 6300, 10800, 8100, 5400, 13500, 7200, 4500, 12600, 9900, 3600, 9000, 6300, 10800]; 
//   secondaryData: number[] = [1, 2, 3.5, 5, 7.1, 2.5, 2, 5, 4.5, 3, 1.5, 4, 1.5, 4, 1.5]; 
//   // secondaryDataInHours: number[] = this.secondaryData.map(data =>data/3600);
//   showSecondaryAxis: boolean = false; 
//   selectedAxisPosition: string = '0';
//   axisCrossingValues: number[] = [0, 1e6];

//   valueAxes: { name: string, title: string, visible: boolean}[] = [
//     { name: 'primary', title: 'Primary Axis', visible: true },
//     { name: 'secondary', title: 'Secondary Axis', visible: this.showSecondaryAxis }
//   ];

//   updateAxisCrossingValues() {
//     switch (this.selectedAxisPosition) {
//       case '1':
//         this.axisCrossingValues = [0];
//         break;
//       case '2':
//         this.axisCrossingValues = [1e6, 0];
//         break;
//       case '3':
//         this.axisCrossingValues = [1e6, 1e6];
//         break;
//       default:
//         this.axisCrossingValues = [0, 1e6];
//         break;
//     }
//   }

//   onChangeAxisPosition(event: any) {
//     this.selectedAxisPosition = event.target.value;
//     this.updateAxisCrossingValues();
//   }

//   toggleSecondaryAxis() {
//     this.showSecondaryAxis = !this.showSecondaryAxis;
//     this.valueAxes[1].visible = this.showSecondaryAxis;
//   }

//   // formatTime(seconds: number): string {
//   //   const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
//   //   const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
//   //   const s = (seconds % 60).toString().padStart(2, '0');
//   //   return `${h}:${m}:${s}`;
//   formatTime(hours: number): string {
//     const h = Math.floor(hours).toString().padStart(2, '0');
//     const m = Math.floor((hours % 1) * 60).toString().padStart(2, '0');
//     const s = (((hours * 60) %1)*60).toString().padStart(2, '0');
//     return `${h}:${m}:${s}`;
//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kendo-Ui-Chart';
  categories: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
  primaryData: number[] = [1, 2, 3, 4, 2.5, 4.5, 1.8, 3.2, 4.1, 2.5, 1.8, 5, 3, 2.5, 4.5];
  secondaryData: number[] = [1, 2, 3.5, 5, 7.1, 2.5, 2, 5, 4.5, 3, 1.5, 4, 1.5, 4, 1.5];
  showSecondaryAxis: boolean = false; 
  selectedAxisPosition: string = '0';
  axisCrossingValues: number[] = [0, 1e6];

  valueAxes: { name: string, title: string, visible: boolean}[] = [
    { name: 'primary', title: 'Primary Axis', visible: true },
    { name: 'secondary', title: 'Secondary Axis', visible: this.showSecondaryAxis }
  ];

  updateAxisCrossingValues() {
    switch (this.selectedAxisPosition) {
      case '1':
        this.axisCrossingValues = [0];
        break;
      case '2':
        this.axisCrossingValues = [1e6, 0];
        break;
      case '3':
        this.axisCrossingValues = [1e6, 1e6];
        break;
      default:
        this.axisCrossingValues = [0, 1e6];
        break;
    }
  }

  onChangeAxisPosition(event: any) {
    this.selectedAxisPosition = event.target.value;
    this.updateAxisCrossingValues();
  }

  toggleSecondaryAxis() {
    this.showSecondaryAxis = !this.showSecondaryAxis;
    this.valueAxes[1].visible = this.showSecondaryAxis;
  }

  formatTime(hours: number): string {
    const h = Math.floor(hours).toString().padStart(2, '0');
    const m = Math.floor((hours % 1) * 60).toString().padStart(2, '0');
    const s = (((hours * 60) % 1) * 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  }

  formatAxisLabel = (e: any): string => {
    return this.formatTime(e.value);
  }
}
