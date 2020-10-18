var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
rover_x_position = 10;
rover_y_position = 10;
rover_width = 100;
rover_height = 100;
var nasa_mars_images_array = [
    "nasa_mars_image_1.jpg",
    "nasa_mars_image_2.jpg",
    "nasa_mars_image_3.jpg",
    "nasa_mars_image_4.jpg",
    "nasa_mars_image_5.jpg",
    "nasa_mars_image_6.jpg"];
    random_number = Math.floor(Math.random()*6);
canvas_image = nasa_mars_images_array[random_number];
rover_image = "rover.png";
function add_image() {
    canvas_imageTag = new Image();
    canvas_imageTag.onload = uploadCanvas_image;
    canvas_imageTag.src = canvas_image;
    rover_imageTag = new Image();
    rover_imageTag.onload = uploadRover_image;
    rover_imageTag.src = rover_image;
}
function uploadCanvas_image() {
    ctx.drawImage(canvas_imageTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover_image() {
    ctx.drawImage(rover_imageTag, rover_x_position, rover_y_position, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(event) {
    key_pressed = event.keyCode;
    console.log(key_pressed);
    if (key_pressed == '37') {
        move_left();
        console.log("Rover is moving LEFT now.")
    }
    if (key_pressed == '38') {
        move_up();
        console.log("Rover is moving UP now.")
    }
    if (key_pressed == '39') {
        move_right();
        console.log("Rover is moving RIGHT now.")
    }
    if (key_pressed == '40') {
        move_down();
        console.log("Rover is moving DOWN now.")
    }
}
function move_left() {
    if (rover_x_position >= 0) {
        rover_x_position=rover_x_position-10;
        uploadCanvas_image();
        uploadRover_image();
    }
}
function move_right() {
    if (rover_x_position <= 700) {
        rover_x_position=rover_x_position +10;
        uploadCanvas_image();
        uploadRover_image();
    }
}
function move_up() {
    if (rover_y_position >= 0) {
        rover_y_position=rover_y_position-10;
        uploadCanvas_image();
        uploadRover_image();
    }
}
function move_down() {
    if (rover_y_position <= 500) {
        rover_y_position=rover_y_position+10;
        uploadCanvas_image();
        uploadRover_image();
    }
}