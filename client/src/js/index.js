import Phaser from 'phaser';
import SplashScreen from './scenes/SplashScreen';

window.onload = function() {
    const gameConfig = {
        type: Phaser.AUTO,
        backgroundColor: 0x4488aa,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 1920,
            height: 1024
        },
        scene: SplashScreen
    }

    const game = new Phaser.Game(gameConfig);
}