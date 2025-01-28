import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {DxReportDesignerModule} from "devexpress-reporting-angular";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DxReportDesignerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
