# Template für Angular inkl. Cordova

## Nutzung des Templates

1. Suchen & Ersetzen von `Template for Angular with Cordova` zu dem sprechenden Projekt-Namen
2. Suchen & Ersetzen von `angular-cordova-template` zum Arbeitsnamen des Projektes
3. Suchen & Ersetzen von `de.template.angularcordova` zur neuen App-Id
4. In dem Ordner `app-assets` das `icon.png` und `splash.png` ersetztn

Update der Angular-Version inkl. Angular-Material
- `ng update @angular/animations @angular/cdk @angular/common @angular/compiler @angular/core @angular/forms @angular/material @angular/platform-browser @angular/platform-browser-dynamic @angular/router`

## Icons

Icons können von folgender Quelle bezogen werden:
https://material.io/resources/icons/?style=baseline

## Theming

- Einzelne Komponenten können in dem Verzeichnis `components` angelegt werden.
- Variablen werden in der Datei `variables.scss` angelegt (z.B. Abstände und Schriftgrößen).

## Apps bauen
Für Android und iOS

### Bauen für Android

Zum Testen der APP auf eine Android-Gerät bitte folgende Schritte durchführen:

```sh
# harter Neustart
$ rm -rf platforms plugins (optional)
$ rm -rf node_modules (optional)
$ npm i (optional)

# Bau der Web-App
$ npm run build:mobile

# Installation der Platform
$ npm run cordova -- platform add android

# adding icons and splash-screen (imagemagick must be installed)
$ npm run cordova-icon -- --icon=app-assets/icon.png && npm run cordova-splash -- --splash=app-assets/splash.png (optional)

$ npm run cordova -- build android

$ # Auf Android installieren
$ adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

Als hilfreiche Befehlskette:

```sh
$ npm run build:mobile && npm run cordova -- platform add android && npm run cordova -- build android
```

### Deinstallieren Android

```sh
adb uninstall de.template.angularcordova
```

### Bauen f+r iOS

Zum Testen der APP auf einem iOS-Gerät bitte folgende Schritte durchführen:

```sh
$ npm run build:mobile
$ npm run cordova -- platform add ios
$ npm run cordova-icon -- --icon=app-assets/icon.png
$ npm run cordova-splash -- --splash=app-assets/splash.png
$ npm run cordova -- build ios
$ # xcode öffnen; Wähle Gerät und drücke den Play-Button
```

Wenn man nur einen Rebuild durchführen möchte, folgende befehle durchführen:
```sh
$ npm run build:mobile
$ npm run cordova -- build ios
$ # xcode öffnen; Wähle Gerät und drücke den Play-Button
```
