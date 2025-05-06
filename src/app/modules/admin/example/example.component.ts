import { Component, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent
{
    // attendanceData = [
    //     { date: new Date(2025, 3, 15) }, // 15 April 2025
    //     { date: new Date(2025, 3, 16) }  // 16 April 2025
    //   ];
    //   displayedColumns: string[] = ['date', 'action'];
    //   searchDate: Date | null = null;
    
    //   viewRecord(element: { date: Date }) {
    //     alert(`Record for ${element.date.toLocaleDateString()} is being viewed.`);
    //   }
    
    //   searchByDate() {
    //     if (!this.searchDate) {
    //       alert('कृपया दिनांक प्रविष्ट करा.');
    //       return;
    //     }
    //     const found = this.attendanceData.find(
    //       record => record.date.toDateString() === this.searchDate?.toDateString()
    //     );
    //     if (found) {
    //       alert(`Record found for ${this.searchDate.toLocaleDateString()}.`);
    //     } else {
    //       alert('माफ करा, कोणतेही रेकॉर्ड सापडले नाही.');
    //     }
    //   }
    attendanceData = new MatTableDataSource([
        { id: 1, name: 'रमेश', status: true },
        { id: 2, name: 'उमेश', status: false },
        { id: 3, name: 'राजेश', status: true },
        { id: 4, name: 'अक्षय', status: false },
    ]);
    
      displayedColumns: string[] = ['id', 'name', 'status', 'actions'];
    
      showAlert = false;
      alert = { type: 'info', message: '' };
    
      toggleStatus(record: any): void {
        record.status = !record.status;
        this.alert = {
          type: 'success',
          message: `${record.name} साठी स्थिती अद्यतनित करण्यात आली`
        };
        this.showAlert = true;
      }
      
      editRecord(record: any): void {
        // Implement edit functionality here
        this.alert = {
          type: 'info',
          message: `${record.name} यासाठी नोंद संपादित केली जात आहे`
        };
        this.showAlert = true;
      }
      
      deleteRecord(id: number): void {
        this.attendanceData.data = this.attendanceData.data.filter(record => record.id !== id);
        this.alert = {
          type: 'warn',
          message: `ID ${id} असलेली नोंद हटवली गेली`
        };
        this.showAlert = true;
      }
      
}
