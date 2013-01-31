#!/bin/sh
mkdir build/video
rm build/video/loader.mp4
ffmpeg -loop 1 -f image2 -r 50 -i build/frames/frame_%03d.png -vcodec mpeg4 -t 2 build/video/loader.mp4