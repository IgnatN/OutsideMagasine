import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ChartDialogComponent } from "../chart-dialog/chart-dialog.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponents {
    constructor(public dialog: MatDialog) {

    }
    openDialog(): void {
        const dialogRef = this.dialog.open(ChartDialogComponent, {
            width: '250px'
        });
    }
}