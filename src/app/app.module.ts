import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { GooglePlus } from "@ionic-native/google-plus/ngx";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import  {AngularFirestoreModule} from "@angular/fire/firestore";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";
import { IonicStorageModule } from "@ionic/storage";
import { ComponentsModule } from './components/components.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { TwoDigitDecimaNumberDirective } from './decimals.directive';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { OneSignal } from "@ionic-native/onesignal/ngx";
import { firebaseConfig } from "src/environments/environment";


@NgModule({
  declarations: [AppComponent, TwoDigitDecimaNumberDirective],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ hardwareBackButton: false }),
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    GooglePlus,
    FileTransfer,
    File,
    Facebook,
    StatusBar,
    SplashScreen,
    Camera,
    WebView,
    InAppBrowser,
    PreviewAnyFile,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    OneSignal,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
