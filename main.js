function preload(){

}
function setup(){
    canvas = createCanvas(620, 450);
    canvas.position(400, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color ="";
}
function draw(){
    image(video, 0, 0, 620, 450);
    tint(tint_color);
}
function take_snapshot(){
    save('tinted_img.png');
}
function filter_button(){
    tint_color = document.getElementById("filter_color").value;
}