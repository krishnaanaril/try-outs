abstract class VideoPlayer {
    loadFile() {
        console.log('Video file loaded');
    }
    abstract decodeFileFormat(): void;
    startPlay() {
        console.log('vidoe file starts playing');
    }
    playVideo() {
        this.loadFile();
        this.decodeFileFormat();
        this.startPlay();
    }
}

class MP4Video extends VideoPlayer {
    decodeFileFormat() {
        console.log('Video file is processed with MP4 Decoder');
    }
}

class MKVVideo extends VideoPlayer {
    decodeFileFormat() {
        console.log('Video file is processed with MKV Decoder');
    }
}

(function(){
    const mp4VideoPlayer = new MP4Video();
    mp4VideoPlayer.playVideo();
    const mkvVideoPlayer = new MKVVideo();
    mkvVideoPlayer.playVideo();
})();