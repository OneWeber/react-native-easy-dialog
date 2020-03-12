
# react-native-easy-dialog

## Getting started

`$ npm install react-native-easy-dialog --save`

### Mostly automatic installation

`$ react-native link react-native-easy-dialog`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-easy-dialog` and add `RNEasyDialog.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNEasyDialog.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.quenice.cardview.RNEasyDialogPackage;` to the imports at the top of the file
  - Add `new RNEasyDialogPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-easy-dialog'
  	project(':react-native-easy-dialog').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-easy-dialog/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-easy-dialog')
  	```
## Props

Property | Default | Description
--------- | ------------- | ------------
layoutVal | 0 | If there is a parent component package, it is the layout. Y of the parent component; if not, it is its own
content |  | This triggers the content region of modal
interval | 5 | The distance between the content area of the pop-up box and the content area of this article
backdropColor | "rgba(0,0,0,.1)" | Shadow layer background color
style | | Custom style
arrowSize| 36 | The size of the arrow
paddingInterval| 0 | The distance between the left and right sides of the frame
maxWidth | 200 | Maximum width of the frame
contentPadding | 5 | The inner margin of the content area of the pop-up box
positionStyle | 'center' | The position where the bounding box is located, including "center","left","right"

## Usage
```javascript
import RNEasyDialog from 'react-native-easy-dialog';

// TODO: What to do with the module?
RNEasyDialog;
```
  
