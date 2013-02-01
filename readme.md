# Video generator

This is a video generator. Input is html/css. Ouput is video.

## Overview

html-to-video generator allows you to create a video from an html source. html must have frames with __equal size__. Theses frames will be screenshot by [casperjs](http://casperjs.org/) which will generate png. Once you have your png done, [ffmpeg](http://ffmpeg.org/) will compilate them into a video.

```
|
|- app/ (site)
|-- assets/ (html)
|-- styles/ (compass)
|- bin/ (scripts)
|
```

To modify the frames, go to ``` app ```. If you modify the html structure, do not forget to change the selector in ```generateFrames.js```.

## Installation

```
$ brew install ffmpeg --use-clang (Only works on Mac OS X, but you still need to install ffmpeg by your own on other OS)
$ brew install casperjs (Only works on Mac OS X, but you still need to install casperjs by your own on other OS)
$ gem install compass
$ npm install -g grunt-cli
$ npm install grunt grunt-compass grunt-casperjs grunt-contrib-clean grunt-contrib-copy grunt-shell
```

## Build

```
$ grunt
```

