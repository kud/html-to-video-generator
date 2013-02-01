var casper = require('casper').create();

/**
 * Screenshot each frame
 */
casper.start('build/site/index.html', function() {
    var prefix = '';

    for(var i = 1; i < 37; i++) {
        if(i < 10) {
            prefix = '00';
        }
        else if(i < 100) {
            prefix = '0';
        } else {
            prefix = '';
        }

        this.captureSelector('build/frames/frame_' + prefix + i + '.png', 'li:nth-child(' + i + ') .loader-container');
    }
});

casper.run();